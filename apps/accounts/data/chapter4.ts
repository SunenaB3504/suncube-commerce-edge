
import { TheoryTopic, Flashcard, SQPQuestion, MindMapNodeData, CheatSheetData } from '../types';
import analyticalImg from '../assets/images/analytical_process.png';

export const CH4_THEORY: TheoryTopic[] = [
  {
    id: 'analysis-meaning',
    title: '1. Meaning & Process',
    content: 'Financial statement analysis is the systematic process of identifying the financial strengths and weaknesses of the firm by establishing relationships between items.',
    subtopics: [
      {
        title: 'Definition',
        description: 'It is the process of critical evaluation of the financial information contained in the financial statements in order to understand and make decisions regarding the operations of the firm.',
      },
      {
        title: 'Components of Analysis',
        description: 'Analysis is not an end in itself, but a means to an end.',
        points: [
          '**Analysis**: Methodical classification and simplification of data.',
          '**Interpretation**: Explaining the meaning and significance of the analyzed data to end users.',
          '**Nature**: A judgmental process of estimating current/past positions to predict future conditions.'
        ]
      },
      {
        title: 'The Analytical Process',
        description: 'Four logical steps for success.',
        illustration: {
          type: 'image',
          content: analyticalImg,
          caption: 'The workflow of Financial Analysis (Visualized)'
        }
      }
    ]
  },
  {
    id: 'significance',
    title: '2. Significance & Stakeholders',
    content: 'Why is analysis important? Different users look for different insights.',
    subtopics: [
      {
        title: 'Objectives of Analysis',
        description: 'The core purpose of the entire exercise.',
        points: [
          '**Assess Profitability**: Judging the current earning capacity and operational efficiency.',
          '**Assess Solvency**: Judging the ability to meet long-term obligations.',
          '**Assess Liquidity**: Judging the ability to meet short-term obligations.',
          '**Identify Changes**: Spotting reasons for changes in financial position over time.'
        ]
      },
      {
        title: 'Stakeholder Analysis',
        description: 'Who uses the analysis and why?',
        illustration: {
          type: 'table',
          concept: 'Every stakeholder seeks a specific dimension of financial health. Managers look for efficiency, creditors look for liquidity, and investors look for profitability.',
          content: [
            ['User', 'Primary Interest'],
            ['Finance Manager', 'Rational decisions, financial control, and analyzing deviations.'],
            ['Top Management', 'Measuring success and appraising performance/internal control.'],
            ['Trade Payables', 'Short-term liquidity (ability to meet immediate obligations).'],
            ['Lenders', 'Long-term solvency and ability to pay interest/repay principal.'],
            ['Investors', 'Present/future profitability and management efficiency.'],
            ['Labour Unions', 'Assessing whether the firm can afford wage increases.'],
            ['Others', 'Economists and Government (taxation, price regulation).']
          ],
          caption: 'Users of Financial Statement Analysis'
        }
      }
    ]
  },
  {
    id: 'types-analysis',
    title: '3. Types of Financial Analysis',
    content: 'Classified based on material used and methodology.',
    subtopics: [
      {
        title: '1. External vs Internal',
        description: 'Based on the user of information.',
        points: [
          '**External Analysis**: Conducted by outsiders (Investors, Creditors, Government) who do not have access to internal records. Derived from published statements.',
          '**Internal Analysis**: Conducted by management using detailed internal records for decision making.'
        ]
      },
      {
        title: '2. Horizontal vs Vertical (Methodology)',
        description: 'The core distinction in analysis techniques.',
        illustration: {
          type: 'table',
          concept: 'Horizontal analysis is dynamic (time series), while vertical analysis is static (cross-sectional) as it expresses components as a percentage of a common base.',
          content: [
            ['Basis', 'Horizontal (Dynamic)', 'Vertical (Static)'],
            ['Period', 'Multiple years (Time Series)', 'Single year (Cross-sectional)'],
            ['Comparison', 'Comparing Year A with Year B', 'Comparing Component X with Base Y'],
            ['Tool', 'Comparative Statements', 'Common Size Statements & Ratios']
          ],
          caption: 'Horizontal vs Vertical Comparison'
        }
      },
      {
        title: 'Comparative Statements (Horizontal Analysis)',
        description: 'Shows absolute and percentage changes between two periods.',
        points: [
          '**Step 1**: Enter Previous Year figures in Col 1.',
          '**Step 2**: Enter Current Year figures in Col 2.',
          '**Step 3 (Absolute Change)**: Calculate **(Current Year - Previous Year)**.',
          '**Step 4 (Percentage Change)**: Calculate **(Absolute Change / Previous Year) * 100**.'
        ],
        illustration: {
          type: 'table',
          concept: 'Format includes 4 columns: PY, CY, Abs Change, % Change.',
          formula: 'Percentage Change = (Absolute Change / Previous Year) * 100',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', 'Absolute Change', '% Change'],
            ['Revenue from Operations', '6,00,000', '7,50,000', '+1,50,000', '25%'],
            ['Expenses', '4,00,000', '4,50,000', '+50,000', '12.5%'],
            ['Profit (Before Tax)', '2,00,000', '3,00,000', '+1,00,000', '50%']
          ],
          caption: 'Ill 1-2: Logic of Comparative Statement',
          resolution: '**AI Detailed Explanation**:\n\n**1. Absolute Change**\n*   Formula: Current Year - Previous Year.\n*   Revenue: 7,50,000 - 6,00,000 = **+1,50,000**.\n*   Expenses: 4,50,000 - 4,00,000 = **+50,000**.\n\n**2. Percentage Change**\n*   Formula: (Absolute Change / Previous Year) × 100.\n*   Revenue: (1,50,000 / 6,00,000) × 100 = **25%**.\n\n**3. Interpretation**\nRevenue grew by 25%, but expenses only grew by 12.5%. This "Jaws Ratio" leads to a massive **50% increase in Profit**.'
        }
      },
      {
        title: 'Comparative Balance Sheet',
        description: 'Comparing Assets, Equity, and Liabilities over two periods.',
        illustration: {
          type: 'table',
          concept: 'Same logic as P&L but applied to Balance Sheet items. Shows trend of financial position.',
          formula: 'Reviewing change in Share Capital, Debt, and Fixed Assets.',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', 'Abs Change', '% Change'],
            ['Share Capital', '10,00,000', '15,00,000', '+5,00,000', '50%'],
            ['Long-term Debt', '5,00,000', '4,00,000', '-1,00,000', '(20%)'],
            ['Fixed Assets', '12,00,000', '18,00,000', '+6,00,000', '50%']
          ],
          caption: 'Ill 3-4: Comparative Balance Sheet Logic',
          resolution: '**AI Detailed Explanation**:\n\n**1. Financing Changes**\n*   **Equity**: Increased by 50%. The company raised fresh capital.\n*   **Debt**: Decreased by 20%. The company repaid loans.\n*   **Conclusion**: Shift from Debt to Equity (Risk Reduction).\n\n**2. Investing Changes**\n*   **Fixed Assets**: Increased by 50% (Growth Mode).\n*   **Link**: The new equity was likely used to buy new assets.'
        }
      },
      {
        title: 'Common Size Statements (Vertical Analysis)',
        description: 'Expressing every item as a percentage of a common base.',
        points: [
          '**Balance Sheet Base**: **Total Assets** (or Total Liabilities) = 100%.',
          '**Statement of Profit and Loss Base**: **Revenue from Operations** (Net Sales) = 100%.',
          '**Formula**: (Individual Item / Common Base) * 100.'
        ],
        illustration: {
          type: 'table',
          concept: 'In Common Size Balance Sheets (Ill 7), the common base (100%) is Total Assets. In Statement of Profit and Loss (Ill 5-6), it is Revenue from Operations.',
          formula: 'Item Percentage = (Absolute Value of Item / Common Base) * 100',
          content: [
            ['Component', 'Amount (₹)', '% of Base'],
            ['Revenue (Base)', '10,00,000', '100%'],
            ['Cost of Materials', '6,00,000', '60%'],
            ['Employee Benefit', '1,50,000', '15%'],
            ['Other Expenses', '50,000', '5%'],
            ['Net Profit', '2,00,000', '20%']
          ],
          caption: 'Ill 5-6-7: Logic of Common Size Statement',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Base**\nRevenue is the "Whole Pie" (100%). All other items are slices of this pie.\n\n**2. Slicing the Pie**\n*   **Cost of Materials**: (6L / 10L) = 60%. Most of the revenue goes here.\n*   **Employee Benefits**: (1.5L / 10L) = 15%.\n*   **Net Profit**: (2L / 10L) = 20%.\n\n**3. Insight**\nFor every ₹100 earned, the company makes ₹20 in profit. This "Net Profit Margin" is the key metric here.'
        }
      },
      {
        title: 'Trend Analysis',
        description: 'Studying operational results over a series of years by taking one year as a base (usually the earliest year = 100). Essential for forecasting.',
      }
    ]
  },
  {
    id: 'limitations-ch4',
    title: '4. Limitations of Analysis',
    content: 'Analysis is only as good as the underlying data.',
    subtopics: [
      {
        title: 'Key Weaknesses',
        description: 'Factors that may reduce reliability.',
        points: [
          '**Historical Nature**: Does not reflect current market values.',
          '**Ignores Price Level Changes**: Inflation effects are hidden.',
          '**Qualitative Aspects Ignored**: Brand value and labor skills missing.',
          '**Window Dressing**: Manipulation for better appearance.',
          '**Variations in Practices**: Different methods (e.g., Depreciation) make comparison difficult.'
        ]
      }
    ]
  }
];

export const CH4_FLASHCARDS: Flashcard[] = [
  { id: 401, category: 'Definitions', question: "What is Financial Statement Analysis?", answer: "Critical evaluation of financial info to understand operations and make decisions." },
  { id: 402, category: 'Theory', question: "What is the term for analyzing data over multiple years?", answer: "Horizontal Analysis (or Dynamic Analysis)." },
  { id: 403, category: 'Theory', question: "What is the term for analyzing data for a single point in time?", answer: "Vertical Analysis (or Static Analysis)." },
  { id: 404, category: 'Theory', question: "Name the 4 steps of the Analysis Process.", answer: "Rearrangement, Comparison, Analysis, and Interpretation." },
  { id: 405, category: 'Theory', question: "What is 'Rearrangement'?", answer: "Simplifying accounting data into standard formats for study." },
  { id: 406, category: 'Theory', question: "What is 'Interpretation'?", answer: "Explaining the significance of the calculated results." },
  { id: 407, category: 'True/False', question: "Analysis is an end in itself.", answer: "False. It is a means to decision making." },
  { id: 408, category: 'Definitions', question: "What are External users?", answer: "Outsiders like Investors, Banks, and Creditors who don't have access to internal records." },
  { id: 409, category: 'Definitions', question: "What are Internal users?", answer: "Management and Executives who have access to detailed internal records." },
  { id: 410, category: 'Theory', question: "Which analysis is also called Time Series Analysis?", answer: "Horizontal Analysis." },
  { id: 411, category: 'Theory', question: "Which analysis is also called Cross-Sectional Analysis?", answer: "Vertical Analysis." },
  { id: 412, category: 'Theory', question: "Objective: Assessing Solvency.", answer: "Measuring the ability to pay long-term debts." },
  { id: 413, category: 'Theory', question: "Objective: Assessing Liquidity.", answer: "Measuring the ability to pay short-term debts." },
  { id: 414, category: 'Theory', question: "Objective: Managerial Efficiency.", answer: "How well the management uses resources to generate profit." },
  { id: 415, category: 'Limits', question: "How does Window Dressing limit analysis?", answer: "It hides the true financial position through manipulation." },
  { id: 416, category: 'Limits', question: "Why are Qualitative aspects ignored?", answer: "Because accounting only records monetary transactions." },
  { id: 417, category: 'Limits', question: "Does analysis ignore inflation?", answer: "Yes, it ignores price-level changes." },
  { id: 418, category: 'Definitions', question: "What is Inter-firm comparison?", answer: "Comparing one firm with another in the same industry." },
  { id: 419, category: 'Definitions', question: "What is Intra-firm comparison?", answer: "Comparing the same firm's performance over different years." },
  { id: 420, category: 'True/False', question: "Comparative statements are a tool for Vertical Analysis.", answer: "False. They are for Horizontal Analysis." },
  { id: 421, category: 'True/False', question: "Common Size statements are for Vertical Analysis.", answer: "True." },
  { id: 422, category: 'Theory', question: "Why do Labour Unions use analysis?", answer: "To negotiate better wages and bonuses." },
  { id: 423, category: 'Theory', question: "Why does the Government use analysis?", answer: "For tax assessments and economic planning." },
  { id: 424, category: 'Theory', question: "What is a 'Dynamic' analysis?", answer: "Analysis covering multiple years (Horizontal)." },
  { id: 425, category: 'Theory', question: "What is a 'Static' analysis?", answer: "Analysis for a single year (Vertical)." },
  { id: 426, category: 'Definitions', question: "What is the base for Common Size Balance Sheet?", answer: "Total Assets (or Total Equity & Liabilities)." },
  { id: 427, category: 'Definitions', question: "What is the base for Common Size P&L?", answer: "Revenue from Operations." },
  { id: 428, category: 'Calculations', question: "Formula for Absolute Change?", answer: "Current Year - Previous Year." },
  { id: 429, category: 'Calculations', question: "Formula for Percentage Change?", answer: "(Absolute Change / Previous Year) * 100." },
  { id: 430, category: 'Theory', question: "What is 'Trend Analysis'?", answer: "Identifying directions of change by taking one year as a base (100)." },
  { id: 431, category: 'Theory', question: "Who is interested in 'Dividend safety'?", answer: "Shareholders / Investors." },
  { id: 432, category: 'Theory', question: "What does 'Forecasting' mean?", answer: "Predicting future performance based on past trends." },
  { id: 433, category: 'True/False', question: "Analysis can cure the firm's financial disease.", answer: "False. It only provides a diagnosis." },
  { id: 434, category: 'Definitions', question: "What is a Time Series?", answer: "A set of data points arranged chronologically over several periods." },
  { id: 435, category: 'Definitions', question: "What is Cross-sectional data?", answer: "Data for different entities at a single point in time." },
  { id: 436, category: 'Theory', question: "How does bias limit analysis?", answer: "Personal judgments in depreciation or valuation affect the final ratios." },
  { id: 437, category: 'Theory', question: "Is brand image reflected in analysis?", answer: "No, as it is a qualitative factor." },
  { id: 438, category: 'Theory', question: "Why is 'Historical Cost' a limitation?", answer: "Because it shows assets at purchase price, not current market value." },
  { id: 439, category: 'True/False', question: "Accounting policies affect inter-firm comparison.", answer: "True. Different methods (SLM/WDV) make firms incomparable." },
  { id: 440, category: 'Definitions', question: "What is 'Proprietary' interest?", answer: "The interest of the owners in the business assets." },
  { id: 441, category: 'Theory', question: "What is the result of 'Comparison'?", answer: "Identifying deviations and trends." },
  { id: 442, category: 'Definitions', question: "What is 'Solvency'?", answer: "The ability of a firm to meet its obligations in the long run." },
  { id: 443, category: 'Theory', question: "What is the role of 'Analysis'?", answer: "To explain the relationship between various Financial Statement components." },
  { id: 444, category: 'Definitions', question: "What is 'Efficiency'?", answer: "Achieving maximum output with minimum inputs." },
  { id: 445, category: 'Theory', question: "Do creditors care about profitability?", answer: "Yes, as it ensures they receive interest and their principal is safe." },
  { id: 446, category: 'Theory', question: "Does analysis provide a solution for low profits?", answer: "No, it only highlights the low profits." },
  { id: 447, category: 'True/False', question: "Ratio analysis is a tool for Financial Statement analysis.", answer: "True." },
  { id: 448, category: 'True/False', question: "Cash Flow analysis is a tool for Financial Statement analysis.", answer: "True." },
  { id: 449, category: 'Theory', question: "Can analysis ignore accounting conventions?", answer: "No, it is limited by them." },
  { id: 450, category: 'Definitions', question: "What is 'Window Dressing' manipulation?", answer: "Deliberately overstating assets or understating liabilities." },
  { id: 451, category: 'Theory', question: "Why is 'Price Level Changes' a limitation?", answer: "Financial analysis ignores inflation, which means assets at historical cost may not reflect true value." },
  { id: 452, category: 'Theory', question: "What is the common base for Common Size Statement of Profit and Loss?", answer: "Revenue from Operations (Net Sales)." },
  { id: 453, category: 'Theory', question: "What is the common base for Common Size Balance Sheet?", answer: "Total Assets or Total Equity & Liabilities." }
];

export const CH4_SQPS: SQPQuestion[] = [
  // --- 2025-26 ---
  {
    id: 'ch4-25-26-q31',
    year: '2025-26',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "31. Complete the following Comparative Balance Sheet as at March 31, 2024 and Match 31, 2025:\n\n| PARTICULARS | 31st March 2024 (₹) | 31st March 2025 (₹) | Absolute Change | Percentage Change |\n|---|---|---|---|---|\n| Shareholders' Funds | 6,00,000 | ?? | 3,00,000 | ?? |\n| Non-current Liabilities | 3,00,000 | ?? | NIL | ?? |\n| Current Liabilities | ?? | 3,00,000 | 2,00,000 | ?? |\n| **TOTAL** | ?? | ?? | ?? | ?? |\n| Non-current Assets | 7,00,000 | ?? | ?? | 50 |\n| Current Assets | ?? | ?? | ?? | ?? |\n| **TOTAL** | ?? | ?? | ?? | ?? |",
    markingScheme: "**Comparative Balance Sheet**\n\n| Particulars | 31.3.24 | 31.3.25 | Abs Change | % Change |\n|---|---|---|---|---|\n| Shareholders' Funds | 6,00,000 | **9,00,000** | 3,00,000 | **50**% |\n| Non-current Liab | 3,00,000 | **3,00,000** | NIL | **--** |\n| Current Liab | **1,00,000** | 3,00,000 | 2,00,000 | **200**% |\n| **Total** | **10,00,000** | **15,00,000** | **5,00,000** | **50**% |\n| Non-current Assets | 7,00,000 | **10,50,000** | **3,50,000** | 50% |\n| Current Assets | **3,00,000** | **4,50,000** | **1,50,000** | **50**% |\n| **Total** | **10,00,000** | **15,00,000** | **5,00,000** | **50**% |",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Particulars | 31.3.2024 (₹) | 31.3.2025 (₹) | Abs Change | % Change |\n|---|---|---|---|---|\n| Shareholders\' Funds | 6,00,000 | ?? | 3,00,000 | ?? |\n| Non-current Liabilities | 3,00,000 | ?? | NIL | ?? |\n| Current Liabilities | ?? | 3,00,000 | 2,00,000 | ?? |\n| Non-current Assets | 7,00,000 | ?? | ?? | 50% |\n\n---\n\n### 💡 Key Formulas to Remember\n\n| Formula | Use |\n|---|---|\n| Current Year = Previous Year + Absolute Change | Find missing CY values |\n| Previous Year = Current Year − Absolute Change | Find missing PY values |\n| % Change = (Absolute Change ÷ Previous Year) × 100 | Any percentage |\n| % Change = NIL → use "---" not 0% | When no change occurs |\n\n---\n\n### 🧮 Step-by-Step Working\n\n**Step 1: Shareholders\' Funds**\n```\n2025 Value = 6,00,000 + 3,00,000 = 9,00,000\n% Change  = (3,00,000 / 6,00,000) × 100 = 50%\n```\n\n**Step 2: Non-current Liabilities**\n```\n2025 Value = 3,00,000 + NIL = 3,00,000\n% Change  = NIL = "---" (no change)\n```\n\n**Step 3: Current Liabilities**\n```\n2024 Value = 3,00,000 − 2,00,000 = 1,00,000\n% Change  = (2,00,000 / 1,00,000) × 100 = 200%\n```\n\n**Step 4: Total Liabilities (Both Years)**\n```\n2024 Total = 6,00,000 + 3,00,000 + 1,00,000 = 10,00,000\n2025 Total = 9,00,000 + 3,00,000 + 3,00,000 = 15,00,000\nAbs Change = +5,00,000; % Change = 50%\n```\n\n> ℹ️ Since Total Assets = Total Equity & Liabilities, Total Assets = ₹10L (2024) and ₹15L (2025).\n\n**Step 5: Non-current Assets (using % Change = 50)**\n```\n2025 NCA = 7,00,000 × 1.5 = 10,50,000\nAbs Change = 3,50,000\n```\n\n**Step 6: Current Assets (Balancing Figure)**\n```\n2024 CA = 10,00,000 (Total) − 7,00,000 (NCA) = 3,00,000\n2025 CA = 15,00,000 (Total) − 10,50,000 (NCA) = 4,50,000\nAbs Change = 1,50,000; % Change = 50%\n```\n\n---\n\n### ✅ Completed Comparative Balance Sheet\n\n| Particulars | 31.3.24 | 31.3.25 | Abs Change | % Change |\n|---|---|---|---|---|\n| Shareholders\' Funds | 6,00,000 | **9,00,000** | 3,00,000 | **50%** |\n| Non-current Liab | 3,00,000 | **3,00,000** | NIL | **---** |\n| Current Liab | **1,00,000** | 3,00,000 | 2,00,000 | **200%** |\n| **Total** | **10,00,000** | **15,00,000** | **5,00,000** | **50%** |\n| Non-current Assets | 7,00,000 | **10,50,000** | **3,50,000** | 50% |\n| Current Assets | **3,00,000** | **4,50,000** | **1,50,000** | **50%** |\n| **Total** | **10,00,000** | **15,00,000** | **5,00,000** | **50%** |\n\n> 💡 **Exam Tip**: Always solve in ORDER: (1) Find values from given clues, (2) Find Totals using accounting equation, (3) Use Totals to find Current Assets as balancing figure. NEVER guess.'
  },
  // --- 2024-25 ---
  {
    id: 'ch4-24-25-q27',
    year: '2024-25',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. When an analyst analysis the financial statements of an enterprise over a number of years, the analysis is called ______________ analysis.\n(A) Static\n(B) External\n(C) Horizontal\n(D) Vertical",
    markingScheme: "(C) Horizontal",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Horizontal Analysis**: Compares financial data over a series of years (time-series).\n*   **Vertical Analysis**: Analyzes data for a single year (static).\n*   **Answer**: Since the question specifies 'over a number of years', it is **Horizontal**."
  },
  {
    id: 'ch4-24-25-q32',
    year: '2024-25',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "32. Complete the Comparative Statement of Profit and Loss:\n\n| Particulars | 2022-23 (₹) | 2023-24 (₹) | Absolute change | % change |\n|---|---|---|---|---|\n| Revenue from Operations | 16,00,000 | 20,00,000 | ? | ? |\n| Less: Benefit Employees Expenses | 8,00,000 | ? | ? | 25% |\n| Less: Other Expenses | 2,00,000 | ? | (1,00,000) | ? |\n| Profit before tax | 6,00,000 | ? | ? | 50% |\n| Tax @30% | ? | ? | 90,000 | ? |\n| Profit after tax | 4,20,000 | ? | 2,10,000 | ? |",
    markingScheme: "**Comparative Income Statement**\n\n| Particulars | 2022-23 | 2023-24 | Abs Change | % Change |\n|---|---|---|---|---|\n| **Revenue** | 16,00,000 | 20,00,000 | **4,00,000** | **25%** |\n| **Emp. Benefit** | 8,00,000 | **10,00,000** | **2,00,000** | 25% |\n| **Other Expenses** | 2,00,000 | **1,00,000** | (1,00,000) | **(50%)** |\n| **PBT** | 6,00,000 | **9,00,000** | **3,00,000** | 50% |\n| **Tax @ 30%** | **1,80,000** | **2,70,000** | 90,000 | **50%** |\n| **PAT** | 4,20,000 | **6,30,000** | 2,10,000 | **50%** |",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Particulars | 2022-23 (₹) | 2023-24 (₹) | Abs Change | % Change |\n|---|---|---|---|---|\n| Revenue from Operations | 16,00,000 | 20,00,000 | ? | ? |\n| Employee Benefit Expenses | 8,00,000 | ? | ? | 25% |\n| Other Expenses | 2,00,000 | ? | (1,00,000) | ? |\n| PBT | 6,00,000 | ? | ? | 50% |\n| Tax @ 30% | ? | ? | 90,000 | ? |\n| PAT | 4,20,000 | ? | 2,10,000 | ? |\n\n---\n\n### 💡 Key Rule\n\nIn **Comparative P&L**, you must work **column by column**, not row by row. Look at what is GIVEN for each row (absolute change, % change, or CY value), then derive the missing one.\n\n---\n\n### 🧮 Step-by-Step Working\n\n**Step 1: Revenue**\n```\nAbs Change = 20,00,000 − 16,00,000 = 4,00,000\n% Change   = (4,00,000 / 16,00,000) × 100 = 25%\n```\n\n**Step 2: Employee Benefit Expenses** (% Change = 25%)\n```\nAbs Change = 8,00,000 × 25% = 2,00,000\n2023-24    = 8,00,000 + 2,00,000 = 10,00,000\n```\n\n**Step 3: Other Expenses** (Abs Change = −1,00,000)\n```\n2023-24 = 2,00,000 − 1,00,000 = 1,00,000\n% Change = (−1,00,000 / 2,00,000) × 100 = (50%)\n```\n\n**Step 4: PBT** (% Change = 50%)\n- Check: Revenue (20L) − Expenses (10L + 1L) = 9,00,000 PBT for 2023-24.✅\n```\nAbs Change = 9,00,000 − 6,00,000 = 3,00,000\n```\n\n**Step 5: Tax @ 30%**\n```\n2022-23 Tax = 6,00,000 × 30% = 1,80,000\n2023-24 Tax = 9,00,000 × 30% = 2,70,000\nAbs Change  = 2,70,000 − 1,80,000 = 90,000 ✓\n% Change    = (90,000 / 1,80,000) × 100 = 50%\n```\n\n**Step 6: PAT**\n```\n2022-23 PAT = 6L − 1.8L = 4,20,000 ✓\n2023-24 PAT = 9L − 2.7L = 6,30,000\nAbs Change  = 2,10,000 ✓\n% Change    = (2,10,000 / 4,20,000) × 100 = 50%\n```\n\n---\n\n### ✅ Completed Comparative P&L\n\n| Particulars | 2022-23 | 2023-24 | Abs Change | % Change |\n|---|---|---|---|---|\n| **Revenue** | 16,00,000 | 20,00,000 | **4,00,000** | **25%** |\n| **Emp. Benefit** | 8,00,000 | **10,00,000** | **2,00,000** | 25% |\n| **Other Expenses** | 2,00,000 | **1,00,000** | (1,00,000) | **(50%)** |\n| **PBT** | 6,00,000 | **9,00,000** | **3,00,000** | 50% |\n| **Tax @ 30%** | **1,80,000** | **2,70,000** | 90,000 | **50%** |\n| **PAT** | 4,20,000 | **6,30,000** | 2,10,000 | **50%** |\n\n> 💡 **Exam Tip**: If % change for a row = same % as another row (e.g., PAT 50% = PBT 50%), it means the tax rate is unchanged. Uniform % change from PBT to PAT is a strong cross-check.'
  },
  // --- 2023-24 ---
  {
    id: 'ch4-23-24-q27',
    year: '2023-24',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. 'Freedom to Choose of method of depreciation' refers to which limitation of financial statement analysis.\n(a) Historical analysis.\n(b) Qualitative aspect ignored.\n(c) Not free from bias.\n(d) Ignore Price level Changes.",
    markingScheme: "(c) Not free from bias.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Bias**: When accounting standards allow choices (like SLM vs WDV for depreciation, or FIFO/weighted average for stock), the management's personal choice affects the profit. This introduces subjectivity or 'bias' into the statements."
  },
  {
    id: 'ch4-23-24-q33',
    year: '2023-24',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "33. From the information extracted from the statement of Profit & Loss of Zee Ltd for the year ended 31st March 2022 and 31st March 2023, prepare a common size statement of profit & loss:\n(Values in marks: Rev 8L/10L, GP 60%/70%, Other Exp 2.2L/2.6L, Tax 50%). Note: Table format provided in source.",
    markingScheme: "**Common Size Statement of Profit & Loss**\n\n| Particulars | 2021-22 (%) | 2022-23 (%) |\n|---|---|---|\n| Revenue | 100 | 100 |\n| Cost of Revenue | 30 | 40 |\n| Other Expenses | 26 | 27.5 |\n| Total Expenses | 56 | 67.5 |\n| PBT | 44 | 32.5 |\n| Tax (50%) | 22 | 16.25 |\n| PAT | 22 | 16.25 |",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | 2021-22 | 2022-23 |\n|---|---|---|\n| Revenue from Operations | ₹ 8,00,000 | ₹ 10,00,000 |\n| Gross Profit % | 60% of Revenue | 70% of Revenue* (NOT 70% GP − see below) |\n| Other Expenses | ₹ 2,20,000 | ₹ 2,60,000 |\n| Tax Rate | 50% | 50% |\n\n*Note from original question: "GP was 60%/70%" means product profitability, so Cost of Revenue = 40% and 30% respectively.*\n\n---\n\n### 💡 Concept: Common Size P&L\n\nIn Common Size P&L, **Revenue from Operations = 100%** (the base). Every item is expressed as a **percentage of Revenue** — not in absolute Rs.\n\n| What the item is | Formula |\n|---|---|\n| Revenue from Operations | Always 100% |\n| Cost of Revenue | (Cost / Revenue) × 100 |\n| Gross Profit | 100% − Cost% |\n| Other Expenses | (Other Exp / Revenue) × 100 |\n| Net Profit % | 100% − Total Exp% |\n\n---\n\n### 🧮 Step-by-Step Working (2021-22)\n\n```\nRevenue                = ₹ 8,00,000 → 100%\nGP = 60% of Revenue   → GP% = 60%\nCost of Revenue        = 100% − 60% = 40%\nOther Expenses         = (2,20,000 / 8,00,000) × 100 = 27.5%\nTotal Expenses         = 40% + 27.5% = 67.5%\nProfit Before Tax      = 100% − 67.5% = 32.5%\nTax (50%)              = 32.5% ÷ 2 = 16.25%\nProfit After Tax       = 32.5% − 16.25% = 16.25%\n```\n\n**Step-by-Step Working (2022-23)**\n\n```\nRevenue                = ₹ 10,00,000 → 100%\nGP = 70% of Revenue   → GP% = 70%\nCost of Revenue        = 100% − 70% = 30%\nOther Expenses         = (2,60,000 / 10,00,000) × 100 = 26%\nTotal Expenses         = 30% + 26% = 56%\nProfit Before Tax      = 100% − 56% = 44%\nTax (50%)              = 44% ÷ 2 = 22%\nProfit After Tax       = 44% − 22% = 22%\n```\n\n---\n\n### ✅ Common Size Statement of Profit & Loss\n\n| Particulars | 2021-22 (%) | 2022-23 (%) |\n|---|---|---|\n| Revenue from Operations | **100** | **100** |\n| Cost of Revenue | **40** | **30** |\n| Gross Profit | **60** | **70** |\n| Other Expenses | **27.5** | **26** |\n| Profit Before Tax | **32.5** | **44** |\n| Tax @ 50% | **16.25** | **22** |\n| Profit After Tax | **16.25** | **22** |\n\n> 💡 **Exam Tip**: In Common Size P&L, the base is ALWAYS **Revenue from Operations** (Net Sales) = 100%. Never use total revenue or any other figure as base.'
  },
  // --- 2022-23 ---
  {
    id: 'ch4-22-23-q27',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. Financial statements are prepared on certain basic assumptions (pre-requisites) known as___________.\n(a) Provision of Companies Act, 2013\n(b) Accounting Standards\n(c) Postulates\n(d) Basis of Accounting",
    markingScheme: "(c) Postulates",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Concept**: Postulates are the fundamental assumptions (like Going Concern, Accrual) on which financial statements are built.\n*   **Limitation**: If these postulates (e.g., stable money value) are not valid in reality (e.g., high inflation), the analysis becomes limited."
  },
  {
    id: 'ch4-22-23-q32',
    year: '2022-23',
    type: 'Theory (3 Marks)',
    marks: 3,
    question: "32. Lala Ltd. and Bala Ltd. use different accounting policies for inventory valuation. These variations leave a big question mark on the cross-sectional analysis and comparison of these two firms was not possible.\n\nIdentify the limitation of Ratio Analysis highlighted in the above situation. Also explain any two other limitations of Ratio Analysis apart from the identified above.",
    markingScheme: "**Limitation Identified**: Variations of Accounting Practice.\n\n**Other Limitations**:\n1.  **Ignores Price Level Changes**: Financial statements are historic; they don't reflect inflation.\n2.  **Qualitative Factors Ignored**: Non-monetary aspects like management quality or labor relations are not captured.\n3.  **Window Dressing**: Manipulation of accounts to show a better position than actual.",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 The Scenario\n\nLala Ltd. uses **FIFO method** for inventory, while Bala Ltd. uses **Weighted Average method**. This means the same items may show different values in their books, making any direct comparison between the two firms **unreliable**.\n\n---\n\n### 💡 Step 1: Identify the Limitation\n\n**Identified Limitation**: **Variations in Accounting Policies** (or "Lack of Uniformity in Methods")\n\n> ⚠️ When different companies use different methods (like SLM vs WDV depreciation, or FIFO vs Weighted Average for stock), their financial ratios **cannot be meaningfully compared** — even if they are in the same industry.\n\n---\n\n### 💡 Step 2: Two Other Limitations\n\n**Limitation 2: Ignores Price-Level Changes (Inflation)**\n- Accounting records assets at **historical cost** (original purchase price).\n- Over time, inflation changes the real value of assets, but the books don\'t reflect this.\n- So a ratio comparing a 2010 asset with a 2024 asset is misleading.\n- **Example**: A building bought for ₹50L in 2010 is worth ₹2Cr today, but the books still show ₹50L.\n\n**Limitation 3: Qualitative Factors Are Ignored**\n- Financial analysis only looks at numbers from the books.\n- It **cannot measure**: employee morale, brand reputation, quality of management, customer loyalty.\n- **Example**: Even if two companies have identical ratios, one may have a far superior management team — ratios won\'t reveal this.\n\n---\n\n### ✅ Summary Table\n\n| Limitation | What It Misses |\n|---|---|\n| Variations in Policies | Comparability across firms using different methods |\n| Ignores Inflation | Real value of assets vs historical cost |\n| Qualitative Factors | Talent, branding, morale, management quality |\n\n> 💡 **Exam Tip**: Always state the limitation, and then explain **why it is a limitation** with a small example. Bare one-word answers score 0.'
  }
];

export const CH4_MINDMAP: MindMapNodeData[] = [
  {
    id: 'ch4-m1',
    title: '1. Meaning & Process',
    iconName: 'Settings',
    colorClass: 'border-purple-500 text-purple-600',
    items: [
      {
        label: 'Process',
        children: ['Rearrangement', 'Comparison', 'Analysis', 'Interpretation']
      },
      {
        label: 'Objective',
        children: ['Identify strengths & weaknesses']
      },
      {
        label: 'Key Terms',
        children: ['Simplification of data', 'Establishing relationships']
      }
    ]
  },
  {
    id: 'ch4-m2',
    title: '2. Types of Analysis',
    iconName: 'Layers',
    colorClass: 'border-blue-500 text-blue-600',
    items: [
      {
        label: 'By User',
        children: ['External (Outsiders)', 'Internal (Management)']
      },
      {
        label: 'By Methodology',
        children: ['Horizontal (Dynamic / Time Series)', 'Vertical (Static / Cross-sectional)']
      },
      {
        label: 'By Entity',
        children: ['Intra-firm (Same firm)', 'Inter-firm (Different firms)']
      }
    ]
  },
  {
    id: 'ch4-m3',
    title: '3. Major Tools',
    iconName: 'Activity',
    colorClass: 'border-emerald-500 text-emerald-600',
    items: [
      {
        label: 'Comparative Statements',
        children: ['Horizontal Analysis']
      },
      {
        label: 'Common Size Statements',
        children: ['Vertical Analysis']
      },
      {
        label: 'Ratio Analysis',
        children: ['Mathematical relationships']
      },
      {
        label: 'Cash Flow Statements',
        children: ['Inflows and Outflows']
      }
    ]
  },
  {
    id: 'ch4-m4',
    title: '4. Critical Limitations',
    iconName: 'AlertCircle',
    colorClass: 'border-red-500 text-red-600',
    items: [
      {
        label: 'Data Constraints',
        children: ['Historical Cost Nature', 'Ignores Price Level Changes']
      },
      {
        label: 'Subjectivity',
        children: ['Personal Bias', 'Differences in Accounting Policies']
      },
      {
        label: 'Omissions',
        children: ['Qualitative factors (Brand, Staff Quality)']
      },
      {
        label: 'Manipulation',
        children: ['Window Dressing']
      }
    ]
  }
];

export const CH4_CHEATSHEET: CheatSheetData = {
  natureTable: [
    ['Type', 'Focus', 'Nickname'],
    ['Horizontal', 'Comparison over multiple years', 'Dynamic Analysis'],
    ['Vertical', 'Single period component relationships', 'Static Analysis']
  ],
  limitations: [
    'Historical Flaw: Uses past costs, not present values.',
    'Price Inflation: Hidden by historical reporting.',
    'Personal Bias: Subjective choice of accounting methods.',
    'No Qualitative: Employee skill/Brand not measured.'
  ],
  balanceSheetOrder: [],
  classificationTable: [
    ['User', 'Interest'],
    ['Creditors', 'Short-term Liquidity'],
    ['Lenders', 'Long-term Solvency'],
    ['Investors', 'Earning Capacity (ROI)'],
    ['Management', 'Operating Efficiency']
  ],
  pnlOrder: [],
  crucialRules: [
    { title: 'Base Rule (Balance Sheet)', content: 'In Common Size Balance Sheets, Total Assets or Total Liabilities is fixed as 100%.' },
    { title: 'Base Rule (Statement of P&L)', content: 'In Common Size P&L Statements, Revenue from Operations (Net Sales) is fixed as 100%.' },
    { title: 'Dynamic View', content: 'Horizontal analysis is dynamic because it uses a time-series approach covering multiple years.' },
    { title: 'Static View', content: 'Vertical analysis is static because it represents data for a single point in time (cross-sectional).' }
  ],
  commonErrors: [
    'Taking "Total Equity" as 100% base in Common Size Balance Sheet (Base is Total Assets/Liabilities).',
    'Confusing "Horizontal Analysis" (Time Series) with "Vertical Analysis" (Static).',
    'Ignoring that "Restricted Cash" is not a Cash Equivalent.',
    'Assuming "Analysis" solves financial problems (It only diagnoses them).'
  ]
};

export const CH4_CHAPTER: any = {
  id: 'ch4',
  title: 'Chapter 4: Analysis of Financial Statements',
  theory: CH4_THEORY,
  flashcards: CH4_FLASHCARDS,
  mindMap: CH4_MINDMAP,
  cheatSheet: CH4_CHEATSHEET,
  sqps: CH4_SQPS,
  weightage: '3-4 Marks'
};
