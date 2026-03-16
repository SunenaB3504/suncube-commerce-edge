const fs = require('fs');
const path = require('path');

// 1. Expand SQPs for Unit 10
const sqpFile = path.join(__dirname, '..', 'data', 'unit10', 'sqp.ts');
let sqpContent = fs.existsSync(sqpFile) ? fs.readFileSync(sqpFile, 'utf8') : '';

const newSqps = [
    {
        id: 'u10_extra_1', year: '2023-24', paperType: 'CBSE SQP', type: 'Subjective', marks: 4,
        question: 'Explain the trading procedure on a stock exchange.',
        answer: '1. Selection of broker, 2. Opening demat account, 3. Placing the order, 4. Executing the order, 5. Settlement.',
        explanation: 'The trading procedure has been dematerialized and happens electronically via brokers.'
    },
    {
        id: 'u10_extra_2', year: '2022-23', paperType: 'CBSE SQP', type: 'MCQ', marks: 1,
        question: 'Which of the following is an instrument of the money market?',
        optionA: 'Equity Shares', optionB: 'Debentures', optionC: 'Treasury Bills', optionD: 'Mutual Funds',
        answer: 'C) Treasury Bills',
        explanation: 'Treasury Bills are short-term financial instruments issued by the RBI on behalf of the Central Government.'
    },
    {
        id: 'u10_extra_3', year: '2022-23', paperType: 'CBSE Board', type: 'Subjective', marks: 6,
        question: 'Describe any four functions of the Securities and Exchange Board of India (SEBI).',
        answer: '1. Regulatory functions (registering brokers), 2. Development functions (training intermediaries), 3. Protective functions (prohibiting insider trading), 4. Promoting fair practices.',
        explanation: 'SEBI ensures the smooth and fair functioning of the securities market.'
    },
    {
        id: 'u10_extra_4', year: '2021-22', paperType: 'CBSE Term 2', type: 'Subjective', marks: 4,
        question: 'Differentiate between Capital Market and Money Market on the basis of: (a) Participants (b) Duration.',
        answer: 'Participants: Money market (RBI, banks, institutions), Capital market (Retail investors, foreign investors, banks). Duration: Money market (up to 1 year), Capital market (more than 1 year).',
        explanation: 'Money market deals in short-term funds, whereas capital market deals in long-term funds.'
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
    console.log('Successfully injected extra SQPs for Unit 10');
}

// 2. Expand Cheat Sheet for Unit 10
const cheatFile = path.join(__dirname, '..', 'data', 'unit10', 'cheatSheet.ts');
let cheatContent = fs.existsSync(cheatFile) ? fs.readFileSync(cheatFile, 'utf8') : '';

// By replacing the whole array we can safely redefine the entire cheat sheet structurally 
const newCheatSheet = `import { CheatSheetSection } from '../../types';

export const cheatSheet: CheatSheetSection[] = [
  {
    title: "1. Financial Markets Overview",
    content: [
      "**Concept:** A market for the creation and exchange of financial assets.",
      "**Functions:** Mobilisation of savings, facilitating price discovery, providing liquidity, reducing cost of transactions."
    ]
  },
  {
    title: "2. Money Market vs Capital Market",
    points: [
      "**Money Market:** Short-term funds (up to 1 year). Instruments: Treasury bill, Commercial paper, Call money, Certificate of deposit, Commercial bill.",
      "**Capital Market:** Long-term funds (equity and debt). Deals in shares, debentures, bonds."
    ]
  },
  {
    title: "3. Primary & Secondary Markets",
    points: [
      "**Primary Market (New Issue):** First-time issuance of securities. Methods: Public issue, Offer for sale, Private placement, Rights issue, e-IPOs.",
      "**Secondary Market (Stock Exchange):** Existing securities are bought and sold. Provides liquidity and pricing for previously issued securities."
    ]
  },
  {
    title: "4. Securities & Exchange Board of India (SEBI)",
    points: [
      "**Establishment:** Setup in 1988, statutory body in 1992 to protect investors.",
      "**Protective Functions:** Prohibits insider trading, fraudulent trade practices.",
      "**Developmental Functions:** Training of intermediaries, conducting research.",
      "**Regulatory Functions:** Registration of brokers, regulating mutual funds and takeovers."
    ]
  }
];
`;
fs.writeFileSync(cheatFile, newCheatSheet);
console.log('Successfully enriched Cheat Sheet for Unit 10');
