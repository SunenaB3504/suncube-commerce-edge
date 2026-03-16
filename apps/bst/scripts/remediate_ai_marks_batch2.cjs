const fs = require('fs');
const path = require('path');

const batch_units = [5, 6, 7, 8];

const specificJustifications = {
    // Unit 5
    "2025-26-q26": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the structure (Divisional Structure).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Product Specialisation/Divisional Structure):*\\n• **Concept:** An organization structure comprising of separate business units or divisions, each functioning autonomously under a divisional manager responsible for profits/losses.\\n• **Product Specialization:** It leads to product specialization as the manager gains experience in all functions related to a particular product.\\n• **Accountability:** It helps in fixing responsibility because divisional results (revenues and costs) can be assessed easily.\\n• **Flexibility:** It promotes flexibility and initiative because each division functions as an autonomous unit leading to faster decision making.\\n• **Expansion:** It facilitates expansion and growth as new divisions can be added without interrupting existing operations.",
    "2024-25-q26": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the concept (Accountability).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Accountability & Delegation):*\\n• **Concept of Accountability:** Being answerable for the final outcome. It cannot be delegated and flows upwards.\\n• **Delegation Process:** Explaining the three elements of delegation: Authority, Responsibility, and Accountability.\\n• **Authority:** The right to command subordinates and take action.\\n• **Responsibility:** The obligation of a subordinate to properly perform the assigned duty.\\n• **Principle of Absolute Accountability:** A manager can delegate authority and responsibility to subordinates, but remains ultimately accountable to their own superior for the task's completion.",
    "2023-24-q34": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the concept (Decentralisation).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Importance of Decentralisation):*\\n• **Relief to Top Management:** Diminishes the burden of top executives by delegating routine decision-making so they can focus on strategy.\\n• **Develops Initiative:** Promotes self-reliance and confidence amongst subordinates.\\n• **Develops Managerial Talent:** Gives lower-level managers a chance to prove their abilities, creating a reservoir of qualified manpower.\\n• **Quick Decision Making:** Decisions are taken at the level which is closest to the point of action, preventing delays.\\n• **Facilitates Growth:** Awards greater autonomy, allowing departments to function to their best potential.\\n• **Better Control:** Makes it possible to evaluate performance at each level and hold departments accountable.",
    "2022-23-q23": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for the direct answer (No).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Delegation of Accountability):*\\n• **Absolute Nature:** Accountability is absolute and cannot be delegated.\\n• **Upward Flow:** It flows upwards, i.e., a subordinate will be accountable to a superior for satisfactory performance of work.\\n• **Ultimate Responsibility:** Even after delegating authority and assigning responsibility to a subordinate, the manager remains accountable to his own superior for the outcome.",

    // Unit 6
    "bulk_402": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for defining Training.\\n• 1 Mark for each valid benefit explained.\\n\\n*Comprehensive Revision Points (Benefits of Training to Organisation):*\\n• **Concept:** Training is the process of increasing the knowledge and skills for doing a particular job.\\n• **Systematic Learning:** It avoids the wastage of efforts and money that comes with the 'hit or trial' method.\\n• **Higher Productivity:** Enhances employee performance, leading to higher profits.\\n• **Future Managers:** Equips employees to take over in emergencies.\\n• **Reduces Absenteeism:** Increases employee morale and reduces turnover.\\n• **Adaptability:** Helps the organization obtain effective responses to a fast-changing economic and technological environment.",
    "2025-26-q27": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the step (Estimating Manpower Requirements).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Steps in Staffing Process):*\\n• **1. Estimating Manpower Requirements:** Workload analysis (finding number/type needed) and Workforce analysis (assessing existing staff).\\n• **2. Recruitment:** Searching for prospective employees and stimulating them to apply.\\n• **3. Selection:** Choosing the best person out of the pool of prospective candidates.\\n• **4. Placement and Orientation:** Occupying the position (placement) and introducing the employee to the organization (orientation).\\n• **5. Training and Development:** Improving skills and competence.\\n• **6. Performance Appraisal:** Evaluating current/past performance against standards.",
    "2024-25-q34": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for defining Trade Test.\\n• 1 Mark for defining Aptitude Test.\\n• 1 Mark for each valid point/difference explained.\\n\\n*Comprehensive Revision Points (Types of Selection Tests):*\\n• **Trade Test:** Measures the existing skills of an individual. Assesses the level of knowledge and proficiency in the area of the profession.\\n• **Aptitude Test:** A measure of an individual's potential for learning new skills. Helps ascertain a person's capacity to develop.\\n• **Personality Test:** Provides clues to a person's emotions, reactions, maturity, and value system.\\n• **Intelligence Test:** Measures the level of intelligence quotient (IQ) and learning ability.\\n• **Interest Test:** Used to know the pattern of interests or involvement of a person.",
    "2023-24-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the step (Orientation/Induction).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Placement and Orientation):*\\n• **Orientation:** Introducing the selected employee to other employees.\\n• **Familiarization:** Familiarizing the new employee with the rules and policies of the organization.\\n• **Placement:** The employee occupying the position or post for which the person has been selected.\\n• **Purpose:** To make the new employee feel at home and comfortable in the new environment.",
    "2023-24-q28": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the source (Casual Callers).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (External Source - Casual Callers):*\\n• **Concept:** Many reputed business organizations keep a database of unsolicited applicants in their offices.\\n• **Usage:** Such job seekers can be a valuable source of manpower to fill pending vacancies.\\n• **Advantage:** It reduces the cost of recruiting workforce compared to other sources like advertising.\\n• **Suitability:** Good for finding candidates for lower-level or urgent vacancies quickly.",
    "2022-23-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the point correctly.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Importance of Staffing):*\\n• **Continuous Survival:** Staffing ensures the continuous survival and growth of the enterprise.\\n• **Mechanism:** It achieves this through 'succession planning' for managers.\\n• **Competent Personnel:** Discovers and obtains competent personnel for various jobs.\\n• **Higher Performance:** Ensures higher performance by putting the right person on the right job.\\n• **Optimum Utilization:** Prevents underutilization of personnel and high labor costs.",

    // Unit 7
    "2025-26-q28": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the exact barrier (Lack of confidence of superior on his subordinates - Personal Barrier).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Personal Barriers to Communication):*\\n• **Lack of Confidence:** If superiors do not have confidence in the competency of their subordinates, they may not seek their advice or opinions.\\n• **Fear of Challenge:** Superior may withhold information if they fear it will challenge their authority.\\n• **Unwillingness to Communicate:** Subordinates may not communicate if they perceive it will adversely affect their interests.\\n• **Lack of Proper Incentives:** If there is no motivation or reward, subordinates may not take initiative in offering suggestions.",
    "2024-25-q27": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the need (Basic Physiological Needs).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Maslow's Need Hierarchy):*\\n• **1. Basic Physiological Needs:** Most basic needs in the hierarchy (food, clothing, shelter). In organizational context: Basic salary.\\n• **2. Safety/Security Needs:** Needs for physical and emotional security. In organizational context: Pension plans, job security.\\n• **3. Affiliation/Belonging Needs:** Needs for affection, sense of belongingness, acceptance. In organizational context: Cordial relations with colleagues.\\n• **4. Esteem Needs:** Needs for self-respect, autonomy status, recognition. In organizational context: Job title, awards.\\n• **5. Self-Actualization Needs:** Drive to become what one is capable of becoming. In organizational context: Challenging jobs, growth opportunities.",
    "2023-24-q29": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the category (Semantic Barrier).\\n• 1 Mark for specifically identifying (Technical Jargon).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Semantic Barriers):*\\n• **Technical Jargon:** Specialists use technical language which may not be understood by workers.\\n• **Badly Expressed Message:** Wrong choice of words or inadequate vocabulary.\\n• **Symbols with Different Meanings:** A word like 'value' can have different meanings in different contexts.\\n• **Faulty Translations:** If the translator is not proficient, the meaning may be lost.\\n• **Unclarified Assumptions:** Sender may make assumptions that the receiver does not share.",
    "2022-23-q30": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the incentive type (Financial Incentive - Co-partnership/Stock Option).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Financial Incentives):*\\n• **Co-partnership/Stock Option:** Employees are offered company shares at a set price lower than the market price, giving them a feeling of ownership and tying their success to the company's success.\\n• **Pay and Allowances:** Regular increments in salary and D.A.\\n• **Productivity Linked Wage Incentives:** Paying wages at higher rates for higher productivity.\\n• **Bonus:** An incentive offered over and above the wages/salary.\\n• **Profit Sharing:** Provide a share to employees in the profits of the organisation.\\n• **Perquisites:** Fringe benefits like car allowance, housing, medical aid.",

    // Unit 8
    "bulk_701": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying Controlling as backward-looking.\\n• 1 Mark for identifying Controlling as forward-looking.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Nature of Controlling):*\\n• **Backward-Looking:** It is like a postmortem of past activities to find out deviations from the established standards.\\n• **Forward-Looking:** It seeks to improve future performance on the basis of past experiences by initiating corrective actions.\\n• **Goal Oriented:** It aims at ensuring that resources are used effectively to achieve organizational goals.\\n• **Pervasive:** It is required at all levels of management.",
    "2025-26-q18": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the principle (Management by Exception).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Analysing Deviations in Controlling):*\\n• **Management by Exception:** Principle stating that an attempt to control everything results in controlling nothing. Only significant deviations going beyond permissible limits should be addressed.\\n• **Critical Point Control:** Focusing on Key Result Areas (KRAs) which are critical to the success of an organization.\\n• **Importance:** Saves time and effort of managers, allowing them to focus on vital issues.\\n• **Facilitates Delegation:** Routine problems are left to subordinates.",
    "2024-25-q28": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for stating Planning is blind without Controlling.\\n• 1 Mark for stating Controlling is meaningless without Planning.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Relationship between Planning and Controlling):*\\n• **Inseparable Twins:** Planning and controlling are closely interrelated.\\n• **Standards Provided by Planning:** Planning sets the standards against which actual performance is evaluated. Therefore, controlling is meaningless without planning.\\n• **Action Provided by Controlling:** Once a plan becomes operational, controlling ensures that work progresses as planned. Therefore, planning is blind without controlling.\\n• **Forward and Backward Looking:** Both functions look backward to past experiences and forward to future actions.",
    "2023-24-q30": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the action (Revise the Standards).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Taking Corrective Action in Controlling):*\\n• **Purpose of Corrective Action:** To bring actual performance up to the level of planned performance.\\n• **When Standards are Faulty:** If standards are found to be defective, unrealistic, or unachievable due to environmental changes, the manager must revise them.\\n• **When Deviations are within limits:** No corrective action is required if deviations are within acceptable limits.\\n• **Addressing the Root Cause:** Managers must find the exact cause of deviation (e.g., defective materials, obsolete machinery) and take specific actions (e.g., changing suppliers, repairing machines).",
    "2022-23-q26": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for indentifying the concept (Critical Point Control).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Critical Point Control):*\\n• **Concept:** It is neither economical nor easy to keep a check on each and every activity in an organisation.\\n• **Focus on KRAs:** Control should, therefore, focus on Key Result Areas (KRAs) which are critical to the success of an organisation.\\n• **Example:** In a manufacturing organization, a 5% increase in the labor cost is more troublesome than a 15% increase in postal charges.\\n• **Benefit:** It helps in saving time and effort of the management as they only focus on significant deviations.\\n• **Contrast:** Distinguish it from Management by Exception which focuses on the *degree* of deviation rather than the *area* of deviation."
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
        const marksMatch = block.match(/marks:\s*(\d+)/);

        if (idMatch && marksMatch) {
            const id = idMatch[1];
            const marks = parseInt(marksMatch[1], 10);

            // ONLY modify 3-6 mark questions. We leave 1-mark questions with their simple justification
            if (marks >= 3 || id.startsWith('bulk_')) {
                if (specificJustifications[id]) {
                    const justificationStr = specificJustifications[id];
                    // Overwrite the existing aiExplanation COMPLETELY for 3-6 mark questions
                    // so we don't end up with generic text + justification
                    block = block.replace(/aiExplanation:\s*(?:`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")\s*,?/, `aiExplanation: \`${justificationStr}\`,`);
                    modifications++;
                } else if (!block.includes('[Mark Justification]') && !block.includes('Comprehensive Revision Points')) {
                    // Fallback for missing high mark questions, though we mapped them all
                }
            } else if (marks === 1) {
                if (!block.includes('[Mark Justification]')) {
                    const existingMatch = block.match(/aiExplanation:\s*(?:`([\s\S]*?)`|'([\s\S]*?)'|"([\s\S]*?)")/);
                    if (existingMatch) {
                        const existingText = (existingMatch[1] || existingMatch[2] || existingMatch[3]).replace(/\\/g, '\\\\').replace(/`/g, '\\`');
                        const newText = existingText + "\\n\\n[Mark Justification]: 1 Mark awarded for the direct, correct identification of the concept, feature, or specific term. No partial credit.";
                        block = block.replace(/aiExplanation:\s*(?:`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")\s*,?/, `aiExplanation: \`${newText}\`,`);
                        modifications++;
                    }
                }
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected AI Reasoning for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
