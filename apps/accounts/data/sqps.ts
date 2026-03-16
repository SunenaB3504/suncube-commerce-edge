
import { SQPQuestion } from '../types';

export const CH3_SQPS: SQPQuestion[] = [
  {
    id: 'ch3-q1-2026',
    year: '2025-26',
    type: 'MCQ',
    marks: 1,
    question: "A company's Building was overvalued by 25%. If the book value is ₹ 20,00,000, what amount should be shown in the Balance Sheet of the reconstituted firm?\n\n(A) ₹ 25,00,000\n(B) ₹ 20,00,000\n(C) ₹ 16,00,000\n(D) ₹ 24,00,000",
    markingScheme: "₹ 16,00,000",
    aiExplanation: "Calculation: If True Value is X, then Book Value = 125% of X. 20,00,000 = 1.25 * X => X = 20,00,000 / 1.25 = ₹ 16,00,000."
  }
];

export const CH4_SQPS: SQPQuestion[] = [
  // SQP 2025-26
  {
    id: 'ch4-25-26-q27',
    year: '2025-26',
    type: 'MCQ (Q27)',
    marks: 1,
    question: "Which of the following is an objective of Financial Statement Analysis?\n\n(A) Assessing compliance\n(B) Assessing tax liability\n(C) Assessing the managerial efficiency and profitability of the business\n(D) Assessing employee satisfaction",
    markingScheme: "(C) Assessing the managerial efficiency and profitability of the business.",
    aiExplanation: "Options like 'Window Dressing' and 'Ignoring Price Level Changes' are limitations, not objectives. Analysis aims to uncover performance insights."
  },
  {
    id: 'ch4-25-26-q31',
    year: '2025-26',
    type: 'Numerical (Q31)',
    marks: 3,
    question: "Prepare a Comparative Statement of Profit & Loss from the following: Revenue from Ops (2024: 20L, 2023: 15L), Other Income (2024: 2L, 2023: 1L), Expenses (50% of Total Revenue). Calculate the percentage change.",
    markingScheme: "Abs Change in Revenue: +5L (33.33%); Abs Change in Other Income: +1L (100%); Net Profit Change: +3L (50%).",
    aiExplanation: "Step 1: Find Absolute Change (Current - Previous). Step 2: Divide by Previous Year and multiply by 100. Ensure expenses are calculated on Total Revenue before finding PBT."
  },

  // SQP 2024-25
  {
    id: 'ch4-24-25-q27',
    year: '2024-25',
    type: 'MCQ (Q27)',
    marks: 1,
    question: "Vertical Analysis is also known as:\n\n(A) Static Analysis\n(B) Dynamic Analysis\n(C) Horizontal Analysis\n(D) Prospective Analysis",
    markingScheme: "(A) Static Analysis",
    aiExplanation: "Vertical analysis looks at a single year's data (Cross-sectional), hence it is 'Static'. Horizontal analysis covers multiple years and is 'Dynamic'."
  },
  {
    id: 'ch4-24-25-q32',
    year: '2024-25',
    type: 'Numerical (Q32)',
    marks: 3,
    question: "From the following information, prepare a Common Size Statement of Profit and Loss: Revenue from Ops: ₹ 10,00,000; Purchase of Stock: ₹ 6,00,000; Other Expenses: ₹ 40,000.",
    markingScheme: "RFO: 100%; Purchase of Stock: 60%; Other Expenses: 4%; Total Expenses: 64%; PBT: 36%.",
    aiExplanation: "In a Common Size P&L, Revenue from Operations is always taken as the base (100%). Every other expense or income is expressed as a percentage of RFO."
  },

  // SQP 2023-24
  {
    id: 'ch4-23-24-q27',
    year: '2023-24',
    type: 'MCQ (Q27)',
    marks: 1,
    question: "Identify the limitation of Financial Statement Analysis which refers to the manipulation of accounts to hide vital facts.\n\n(A) Secret Reserves\n(B) Window Dressing\n(C) Price Level Changes\n(D) Qualitative Factors",
    markingScheme: "(B) Window Dressing",
    aiExplanation: "Window Dressing is the practice of presenting a fake improved financial position by manipulating data at the end of the year."
  },
  {
    id: 'ch4-23-24-q33',
    year: '2023-24',
    type: 'Numerical (Q33)',
    marks: 4,
    question: "From the following data, prepare a Common Size Balance Sheet: Total Assets: ₹ 20,00,000; Fixed Assets: ₹ 12,00,000; Inventories: ₹ 5,00,000; Cash: ₹ 3,00,000.",
    markingScheme: "Total Assets: 100%; Fixed Assets: 60%; Inventories: 25%; Cash: 15%.",
    aiExplanation: "In a Common Size Balance Sheet, 'Total Assets' (or Total Equity & Liabilities) is the base (100%). Individual items are calculated as: (Item Value / Total Assets) * 100."
  },

  // SQP 2022-23
  {
    id: 'ch4-22-23-q32',
    year: '2022-23',
    type: 'Theory (Q32)',
    marks: 3,
    question: "Explain any three limitations of Financial Statement Analysis.",
    markingScheme: "1. Ignores Price Level Changes (Inflation); 2. Qualitative aspects ignored (Human resource value); 3. Personal Bias of accountant.",
    aiExplanation: "Focus on standard points: Historical nature (past data), Personal Bias (choices of methods), and absence of non-monetary facts (Qualitative factors)."
  }
];
