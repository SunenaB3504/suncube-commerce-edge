const fs = require('fs');
const path = require('path');

const batch_units = [5, 6, 7, 8];

const ms_exact_text_batch2 = {
    // Unit 5
    "2025-26-q26": "Divisional Structure. (1 mark for identifying the structure). Plus 5 marks for explanation: Product specialization, divisional head accountability, flexibility, expansion, etc.",
    "2024-25-q26": "Accountability. It implies being answerable for the final outcome. Once authority has been delegated and responsibility accepted, one cannot deny accountability. (CBSE Marking scheme mapping)",
    "2023-24-q34": "Decentralisation. It relieves the top management from routine decision making and enables them to focus on strategic issues. Operations at lower levels are managed by those who are closer to the action.",
    "2022-23-q23": "No. Accountability cannot be delegated. It is absolute. A manager remains accountable to his superior for the tasks he has delegated to his subordinates.",

    // Unit 6
    "bulk_402": "Training. It is the process of increasing the knowledge and skills of an employee for doing a particular job. Benefits: Reduces learning time, better performance, attitude formation, aids in solving operational problems.",
    "2025-26-q27": "Estimating Manpower Requirements. It involves workload analysis (number and type of human resources necessary) and workforce analysis (assessing existing workforce).",
    "2024-25-q34": "Trade Test vs Aptitude Test. Trade test measures existing skills and level of knowledge/proficiency in the area. Aptitude test is a measure of an individual's potential for learning new skills.",
    "2023-24-q22": "Orientation (or Induction). It involves introducing the selected employee to other employees and familiarising him with the rules and policies of the organisation.",
    "2023-24-q28": "Casual Callers. Many reputed business organizations keep a database of unsolicited applicants in their offices. Such job-seekers can be a valuable source of manpower.",
    "2022-23-q25": "Staffing ensures the continuous survival and growth of the enterprise through the succession planning for managers.",

    // Unit 7
    "2025-26-q28": "Personal Barrier (Lack of confidence of superior on his subordinates). Superior may not seek advice or opinions from subordinates if they do not have confidence in their competency.",
    "2024-25-q27": "Basic Physiological Needs. These are the most basic in the hierarchy and correspond to primary needs like food, clothing, shelter (salary helps satisfy these needs).",
    "2023-24-q29": "Semantic Barrier (Technical Jargon). Specialists use technical language which may not be understood by workers.",
    "2022-23-q30": "Financial Incentive (Co-partnership/Stock option). Employees are offered company shares at a set price which is lower than market price, creating a feeling of ownership.",

    // Unit 8
    "bulk_701": "Controlling involves comparison of actual performance with the planned standards. Controlling is a backward-looking function as it measures performance against past standards. It is a forward-looking function because it seeks to improve future performance based on past experiences.",
    "2025-26-q18": "Management by Exception. It states that an attempt to control everything results in controlling nothing. Only significant deviations which go beyond the permissible limit should be brought to the notice of management.",
    "2024-25-q28": "Planning is blind without controlling because once a plan becomes operational, controlling ensures that work progresses as planned. Controlling is meaningless without planning because planning provides the standards against which actual performance is measured.",
    "2023-24-q30": "The manager should revise the standards. If the standards are found to be defective, unrealistic, or unachievable due to changes in the business environment, they must be modified.",
    "2022-23-q26": "Critical Point Control. It is neither economical nor easy to keep a check on each and every activity. Control should focus on Key Result Areas (KRAs) which are critical to the success of an organisation (e.g., 5% rise in labour cost is more critical than a 15% rise in postal charges)."
};

function processUnit(unitNum) {
    const file = path.join(__dirname, '..', 'data', `unit${unitNum}`, 'sqp.ts');
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');
    let modifications = 0;

    const prefixSplit = content.indexOf('export const');
    if (prefixSplit === -1) return;

    const prefix = content.substring(0, prefixSplit);
    const dataLayer = content.substring(prefixSplit);

    const blocks = dataLayer.split(/\{\s*id:/g);
    let newBlocks = [blocks[0]];

    for (let i = 1; i < blocks.length; i++) {
        let block = "{ \n    id:" + blocks[i];

        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);

        if (idMatch) {
            const id = idMatch[1];

            if (ms_exact_text_batch2[id]) {
                // Ensure properly escaped
                const msText = ms_exact_text_batch2[id].replace(/`/g, '\\`');
                block = block.replace(/markingScheme:\s*[`'"][\s\S]*?[`'"],/, `markingScheme: \`${msText}\`,`);
                modifications++;
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected literal CBSE Marking Scheme text for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
