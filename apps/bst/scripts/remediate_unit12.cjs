const fs = require('fs');
const path = require('path');

// 1. Fully replace the weak Cheat Sheet for Unit 12
const cheatFile = path.join(__dirname, '..', 'data', 'unit12', 'cheatSheet.ts');
const newCheatSheet = `import { CheatSheetSection } from '../../types';

export const cheatSheet: CheatSheetSection[] = [
  {
    title: "1. Importance of Consumer Protection",
    points: [
      "**From Consumer's View:** Educates unorganized consumers, prevents widespread exploitation, provides legal remedies.",
      "**From Business View:** Long-term business survival, uses society's resources broadly, moral/social responsibility."
    ]
  },
  {
    title: "2. Consumer Rights (CPA 2019)",
    points: [
      "**Right to Safety:** Protection against hazardous goods.",
      "**Right to Information:** Details on quality, quantity, price, standard.",
      "**Right to Choose:** Access to a variety of products at competitive prices.",
      "**Right to be Heard:** Right to representation in consumer courts.",
      "**Right to seek Redressal:** Relief against unfair trade practices.",
      "**Right to Consumer Education:** Acquiring knowledge to be an informed consumer."
    ]
  },
  {
    title: "3. Consumer Responsibilities",
    points: [
      "Be aware of various goods and services.",
      "Buy only standardized goods (ISI, Agmark, Hallmark).",
      "Learn about risks and follow manufacturer's instructions.",
      "Read labels carefully.",
      "Assert yourself to ensure fair deals.",
      "Ask for a cash memo (proof of purchase for claims)."
    ]
  },
  {
    title: "4. Redressal Machinery (CPA 2019 Limits)",
    points: [
      "**District Commission:** Claims up to ₹1 Crore. Appeal to State within 45 days.",
      "**State Commission:** Claims > ₹1 Crore but up to ₹10 Crore. Appeal to National within 30 days.",
      "**National Commission:** Claims > ₹10 Crore. Appeal to Supreme Court within 30 days (only if National had original jurisdiction)."
    ]
  },
  {
    title: "5. Remedies Available",
    points: [
      "Removal of defect in goods.",
      "Replacement with new defect-free goods.",
      "Refund of price paid.",
      "Payment of reasonable compensation.",
      "Discontinuance of unfair trade practices."
    ]
  }
];
`;
fs.writeFileSync(cheatFile, newCheatSheet);
console.log('Successfully enriched Cheat Sheet for Unit 12');

// 2. Inject extra SQPs for Unit 12
const sqpFile = path.join(__dirname, '..', 'data', 'unit12', 'sqp.ts');
let sqpContent = fs.existsSync(sqpFile) ? fs.readFileSync(sqpFile, 'utf8') : '';

const newSqps = [
    {
        id: 'u12_extra_1', year: '2023-24', paperType: 'CBSE SQP', type: 'MCQ', marks: 1,
        question: 'Aura Ltd. sold water heaters without ISI markings. Which consumer right is violated?',
        optionA: 'Right to Choose', optionB: 'Right to Information', optionC: 'Right to Safety', optionD: 'Right to be Heard',
        answer: 'C) Right to Safety',
        explanation: 'Uncertified electrical appliances pose a safety hazard, violating the Right to Safety.'
    },
    {
        id: 'u12_extra_2', year: '2022-23', paperType: 'CBSE Board', type: 'Subjective', marks: 4,
        question: 'Explain any four responsibilities of a consumer.',
        answer: '1. Ask for a cash memo. 2. Buy only standardized goods. 3. Read labels carefully. 4. Assert oneself to get a fair deal.',
        explanation: 'Consumers have responsibilities alongside rights to ensure they are not exploited.'
    },
    {
        id: 'u12_extra_3', year: '2022-23', paperType: 'CBSE Board', type: 'Subjective', marks: 3,
        question: 'State the pecuniary jurisdiction of the District Commission and State Commission under the Consumer Protection Act, 2019.',
        answer: 'District Commission: Up to ₹1 Crore. State Commission: More than ₹1 Crore but up to ₹10 Crore.',
        explanation: 'The CPA 2019 revised the financial limits for filing complaints at different tiers.'
    },
    {
        id: 'u12_extra_4', year: '2021-22', paperType: 'CBSE SQP', type: 'Subjective', marks: 5,
        question: 'If a consumer is not satisfied with the order of the State Commission, where and within how many days can they appeal?',
        answer: 'They can appeal to the National Commission within 30 days of the State Commission\'s order.',
        explanation: 'The three-tier redressal machinery allows upward appeals within specific timeframes to ensure justice.'
    },
    {
        id: 'u12_extra_5', year: '2023-24', paperType: 'CBSE Board', type: 'MCQ', marks: 1,
        question: 'Which of the following marks denotes the quality of agricultural products in India?',
        optionA: 'ISI Mark', optionB: 'Hallmark', optionC: 'Agmark', optionD: 'FPO Mark',
        answer: 'C) Agmark',
        explanation: 'Agmark is a certification mark employed on agricultural products in India.'
    }
];

const exportSig = 'export const sqp: SQPQuestion[] = ';
const startIdx = sqpContent.indexOf(exportSig);

if (startIdx !== -1) {
    const injectionPoint = sqpContent.indexOf('[', startIdx + exportSig.length) + 1;
    let injectStr = '\n';
    newSqps.forEach(q => {
        injectStr += `  {\n    id: '${q.id}',\n    year: '${q.year}',\n    paperType: '${q.paperType}',\n    type: '${q.type}',\n    marks: ${q.marks},\n    question: \`${q.question}\`,\n`;
        if (q.type === 'MCQ') {
            injectStr += `    optionA: \`${q.optionA || ''}\`,\n    optionB: \`${q.optionB || ''}\`,\n    optionC: \`${q.optionC || ''}\`,\n    optionD: \`${q.optionD || ''}\`,\n`;
        }
        injectStr += `    answer: \`${q.answer}\`,\n    markingScheme: \`${q.answer}\`,\n    aiExplanation: \`${q.explanation}\`\n  },\n`;
    });
    const newContent = sqpContent.substring(0, injectionPoint) + injectStr + sqpContent.substring(injectionPoint);
    fs.writeFileSync(sqpFile, newContent);
    console.log('Successfully injected extra SQPs for Unit 12');
}
