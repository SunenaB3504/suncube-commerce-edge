
import { TheoryTopic, Flashcard, SQPQuestion } from '../types';

export const THEORY_DATA: TheoryTopic[] = [
  {
    id: 'intro',
    title: 'Meaning & Nature of Financial Statements',
    content: 'Financial statements are formal annual reports through which management communicates financial information to stakeholders.',
    subtopics: [
      {
        title: 'Meaning',
        description: 'Chronologically recorded facts expressed in monetary terms, revealing financial position and results.',
      },
      {
        title: 'Four Attributes of Nature',
        description: 'The foundation of how statements are prepared.',
        points: [
          'Recorded Facts: Based on historical cost recorded in books.',
          'Accounting Conventions: Following rules like Valuing inventory at cost or market price (whichever is lower).',
          'Postulates: Basic assumptions like Going Concern, Money Measurement, etc.',
          'Personal Judgments: Estimating useful life of assets or provision for doubtful debts.'
        ]
      }
    ]
  },
  {
    id: 'objectives',
    title: 'Core Objectives of Financial Statements',
    content: 'Why does a company prepare these statements?',
    subtopics: [
      {
        title: 'Key Objectives',
        description: 'The primary goal is to assist users in decision-making.',
        points: [
          'Information about economic resources & obligations.',
          'Information about earning capacity.',
          'Information about cash flows.',
          'Judging management effectiveness.',
          'Disclosing accounting policies.',
          'Reporting business activities affecting society.'
        ]
      }
    ]
  },
  {
    id: 'classification',
    title: 'Schedule III: Current vs Non-Current',
    content: 'Classification is key for reporting accuracy under the Companies Act 2013.',
    subtopics: [
      {
        title: 'Current Items Criteria',
        description: 'An item is classified as current if it meets ANY of these:',
        points: [
          'Expected realization within 12 months.',
          'Involved in entity\'s operating cycle.',
          'Held primarily for trading.',
          'It is cash or cash equivalent.',
          'No unconditional right to defer settlement beyond 12 months.'
        ]
      },
      {
        title: 'The Operating Cycle',
        description: 'The time between acquisition of assets for processing and their realization in cash/cash equivalents.'
      }
    ]
  }
];

export const FLASHCARDS: Flashcard[] = [
  { id: 1, category: 'Definitions', question: "What is an Operating Cycle?", answer: "The time between acquisition of assets for processing and their realization in cash." },
  { id: 2, category: 'Classification', question: "Where is 'Loose Tools' shown in the Balance Sheet?", answer: "Current Assets -> Inventories." },
  { id: 3, category: 'True/False', question: "Financial Statements are 100% accurate.", answer: "False. They involve personal judgments and estimates (e.g., depreciation)." },
  { id: 4, category: 'Classification', question: "Under which head is 'Securities Premium' shown?", answer: "Shareholders' Funds -> Reserves and Surplus." },
  { id: 5, category: 'Definitions', question: "What are 'Postulates'?", answer: "Basic assumptions like Going Concern or Money Measurement upon which accounting is based." },
  { id: 6, category: 'Limits', question: "Name a major limitation of Financial Statements.", answer: "They do not reflect current market values as they use historical cost." },
  { id: 7, category: 'Classification', question: "Where is 'Bills Payable' classified?", answer: "Current Liabilities -> Trade Payables." },
  { id: 8, category: 'Classification', question: "Under which head are 'Goodwill' and 'Patents' shown?", answer: "Non-Current Assets -> Fixed Assets (Intangible)." },
  { id: 9, category: 'True/False', question: "Debit balance in Statement of P&L is shown as negative under Surplus.", answer: "True." },
  { id: 10, category: 'Classification', question: "Where is 'Proposed Dividend' shown according to AS-4?", answer: "As a Contingent Liability in the 'Notes to Accounts'." },
  { id: 11, category: 'Classification', question: "Classification of 'Cash at Bank'?", answer: "Current Assets -> Cash and Cash Equivalents." },
  { id: 12, category: 'Classification', question: "Classification of 'Capital Reserve'?", answer: "Shareholders' Funds -> Reserves and Surplus." },
  { id: 13, category: 'Limits', question: "Do Financial Statements provide qualitative information?", answer: "No. They ignore factors like labor relations or management quality." },
  { id: 14, category: 'Classification', question: "Where are 'Public Deposits' shown?", answer: "Non-Current Liabilities -> Long-term Borrowings." },
  { id: 15, category: 'Classification', question: "Head for 'Interest Accrued and Due on Debentures'?", answer: "Current Liabilities -> Other Current Liabilities." },
  { id: 16, category: 'Definitions', question: "What is a 'Position Statement'?", answer: "Another name for the Balance Sheet." },
  { id: 17, category: 'Classification', question: "Sub-head for 'Stores and Spares'?", answer: "Inventories." },
  { id: 18, category: 'Classification', question: "Where is 'Preliminary Expenses' shown?", answer: "They are written off against Securities Premium or Statement of P&L surplus." },
  { id: 19, category: 'True/False', question: "All inventories are treated as current assets.", answer: "True." },
  { id: 20, category: 'Classification', question: "Where is 'Provision for Tax' shown?", answer: "Current Liabilities -> Short-term Provisions." },
  { id: 21, category: 'Definitions', question: "What is an Income Statement?", answer: "Another name for the Statement of Profit and Loss." },
  { id: 22, category: 'Classification', question: "Where is 'Calls in Arrears' shown?", answer: "Deducted from Subscribed Capital in Notes to Accounts." },
  { id: 23, category: 'Classification', question: "Head for 'Work-in-progress'?", answer: "Current Assets -> Inventories." },
  { id: 24, category: 'Limits', question: "Why are FS considered 'historical'?", answer: "Because they record assets at original purchase cost, ignoring inflation." },
  { id: 25, category: 'Classification', question: "Sub-head for 'Live Stock'?", answer: "Non-current Assets -> Fixed Assets (Tangible)." },
  { id: 26, category: 'True/False', question: "Proposed dividend is a liability as soon as directors propose it.", answer: "False. It becomes a liability only after shareholders approve it." },
  { id: 27, category: 'Classification', question: "Head for 'Debenture Redemption Reserve'?", answer: "Reserves and Surplus." },
  { id: 28, category: 'Classification', question: "Where is 'Bank Overdraft' shown?", answer: "Current Liabilities -> Short-term Borrowings." },
  { id: 29, category: 'Definitions', question: "What are 'Notes to Accounts'?", answer: "Details and breakdowns of broad items presented on the face of Financial Statements." },
  { id: 30, category: 'Classification', question: "Classification of 'Trademarks'?", answer: "Fixed Assets -> Intangible Assets." }
];

export const SQP_DATA: SQPQuestion[] = [
  {
    id: 'q1-2026',
    year: '2025-26',
    type: 'MCQ',
    marks: 1,
    question: "A company's Building was overvalued by 25%. If the book value is ₹ 20,00,000, what amount should be shown in the Balance Sheet of the reconstituted firm?",
    markingScheme: "₹ 16,00,000",
    aiExplanation: "Calculation: If True Value is X, then Book Value = 125% of X. 20,00,000 = 1.25 * X => X = 20,00,000 / 1.25 = ₹ 16,00,000. Revalued figures must be shown in the new Balance Sheet."
  },
  {
    id: 'q2-2025',
    year: '2024-25',
    type: 'Classification',
    marks: 3,
    question: "Classify following items under Major Heads and Sub-heads: (i) Furniture and Fixtures (ii) Provision for Warranties (iii) Capital Advances.",
    markingScheme: "(i) Non-current Assets - Fixed Assets; (ii) Non-current Liabilities - Long term Provisions; (iii) Non-current Assets - Long term Loans and Advances.",
    aiExplanation: "Furniture is a tangible asset used for >1 year. Warranties are usually long-term commitments based on estimates. Capital advances are payments for future fixed assets, hence long-term assets."
  },
  {
    id: 'q3-2024',
    year: '2023-24',
    type: 'Theory',
    marks: 1,
    question: "Assertion (A): Financial Statements are not free from bias. Reason (R): Accountants use personal judgment in choosing depreciation methods and inventory valuation.",
    markingScheme: "Both (A) and (R) are correct and (R) is the correct explanation of (A).",
    aiExplanation: "The limitation of bias stems directly from the fact that accountants must make subjective choices where standards allow multiple options (e.g., SLM vs WDV for depreciation)."
  },
  {
    id: 'q4-2023',
    year: '2022-23',
    type: 'Classification',
    marks: 1,
    question: "Where is 'Loose Tools' shown according to Schedule III?",
    markingScheme: "Current Assets -> Inventories",
    aiExplanation: "As per Revised Schedule III, Loose Tools are explicitly specified to be included under the inventories sub-head, even though they might seem like fixed assets conceptually."
  }
];
