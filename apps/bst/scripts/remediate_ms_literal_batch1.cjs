const fs = require('fs');
const path = require('path');

const batch_units = [1, 2, 3, 4];

// Literal text extracted from the MS PDFs mapping to the specific question IDs
const ms_exact_text_batch1 = {
    // Unit 1
    "bulk_101": "Function of Management: Planning. (1 mark for naming Planning)\\nSetting of objectives. (1 mark)\\nDeveloping Premises. (1 mark) (CBSE Marking Scheme)",
    "2025-26-q22": "Top Level Management: Integrates diverse elements and coordinates activities. Middle Level: Link between top and lower level managers; implements policies. (1 mark for each point of difference).",
    "2024-25-q22": "Social Objective. Management has an obligation towards society, which includes using eco-friendly methods of production to protect the environment. (1 mark for identifying objective, 2 marks for explanation).",

    // Unit 2
    "2025-26-q18": "Harmony, Not Discord. Taylor emphasized that there should be complete harmony between the management and workers. Both should realize that each one is important. To achieve this state, Taylor called for a 'Mental Revolution'.",
    "2025-26-q25": "Gang Plank. It is a shorter route and has been provided so that communication is not delayed. However, it is an exception and in normal course scalar chain should be strictly followed.",
    "2024-25-q23": "Flexible: Principles of management are not rigid prescriptions, which have to be followed absolutely. They can be modified by the manager. Contingent: Application is contingent upon prevailing situations.",
    "2023-24-q24": "Unity of Command: One subordinate should receive orders from and be responsible to only one superior. Unity of Direction: Each group of activities having the same objective must have one head and one plan. (1 mark for each difference).",

    // Unit 3
    "bulk_103": "Social Environment. Social trends present various opportunities and threats to business enterprises. The health-and-fitness trend has become popular among large number of urban dwellers.",
    "2025-26-q23": "It helps in identifying opportunities and getting the first mover advantage. Early identification of opportunities helps an enterprise to be the first to exploit them instead of losing them to competitors.",
    "2024-25-q24": "Social Environment. Dimensions include customs and traditions, values, social trends, society's expectations from business, etc.",
    "2023-24-q25": "It helps in coping with rapid changes. Today's business environment is getting increasingly dynamic where changes are taking place at a fast pace. It helps managers to examine and understand these changes.",
    "2022-23-q22": "Tax administration measure. Channelising savings into the formal financial system. Creating a less-cash or cash-lite economy. (Any 2 features, 1.5 marks each).",

    // Unit 4
    "2025-26-q24": "Developing Premises: Planning is concerned with the future which is uncertain. Therefore, the manager is required to make certain assumptions about the future. These assumptions are called premises.",
    "2024-25-q25": "Strategy. A strategy provides the broad contours of an organization's business. It involves: (i) determining long-term objectives (ii) adopting a particular course of action (iii) allocating resources necessary.",
    "2023-24-q26": "Evaluating alternative courses. The next step is to weigh the pros and cons of each alternative... The positive and negative aspects of each proposal need to be evaluated in the light of the objective to be achieved."
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

            if (ms_exact_text_batch1[id]) {
                const msText = ms_exact_text_batch1[id];
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
