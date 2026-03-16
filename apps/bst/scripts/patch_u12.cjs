const fs = require('fs');

let file = 'data/unit12/sqp.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace the marks and explanation for 2023-24-q34c
const targetBlock = `'2023-24-q34c',
        year: '2023-24',
        paperType: 'Board',
        marks: 6,`;

const upgradedBlock = `'2023-24-q34c',
        year: '2023-24',
        paperType: 'Board',
        marks: 1,`;

content = content.replace(targetBlock, upgradedBlock);

const explanationTarget = `[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Ask for a Cash Memo'.\\n• 1 Mark for explaining its legal importance.`;
const explanationUpgraded = `[Mark Justification - 1 Mark Total]:\\n• 1 Mark for identifying 'Ask for a Cash Memo'.`;
content = content.replace(explanationTarget, explanationUpgraded);

fs.writeFileSync(file, content);
console.log('Unit 12 patched.');
