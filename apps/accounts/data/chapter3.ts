
import { TheoryTopic, Flashcard, SQPQuestion, MindMapNodeData, CheatSheetData } from '../types';

export const CH3_THEORY: TheoryTopic[] = [
  {
    id: 'meaning-nature-pillars',
    title: '1. Meaning & Nature of Financial Statements',
    content: 'Financial statements are basic formal annual reports through which management communicates financial information to owners and other stakeholders.',
    subtopics: [
      {
        title: 'Meaning of Financial Statements',
        description: 'These are the end-products of the accounting process. They provide a structural representation of the financial position and performance of an enterprise.',
      },
      {
        title: 'The Four Pillars of Nature',
        description: 'The data in financial statements is not purely absolute; it is a mix of facts and rules.',
        points: [
          '**1. Recorded Facts**: Items are recorded at their original (historical) cost, not at market price. *Example: Fixed Assets shown at Cost less Depreciation.*',
          '**2. Accounting Conventions**: Follows standard practices like **Prudence (Conservatism)** (anticipate losses, not profits) and **Materiality** (disclose significant items).',
          '**3. Postulates**: Assumptions like **Going Concern** (business will continue forever), **Money Measurement** (only monetary events recorded), and **Realisation** (revenue recorded when earned).',
          '**4. Personal Judgments**: Accountants must estimate useful life for depreciation, provision for bad debts, etc., introducing subjectivity.'
        ]
      },
      {
        title: 'Illustration 2: Classification (Amba Ltd.)',
        description: 'Classifying debentures, surplus, and creditors in the Balance Sheet.',
        illustration: {
          type: 'table',
          concept: 'Classifying debentures, surplus, and creditors in the Balance Sheet.\n\n**Given**: 10% Debentures, Surplus (Cr), Sundry Creditors, Proposed Dividend.',
          content: [
            ['Item', 'Major Head', 'Sub-head'],
            ['10% Debentures', 'Non-current Liabilities', 'Long-term Borrowings'],
            ['Surplus (Credit)', 'Shareholders\' Funds', 'Reserves and Surplus'],
            ['Sundry Creditors', 'Current Liabilities', 'Trade Payables'],
            ['Proposed Dividend', 'Contingent Liability', 'Notes to Accounts']
          ],
          caption: 'Illustration 2: Classification of items for Amba Ltd.'
        }
      }
    ]
  },
  {
    id: 'objectives-limitations',
    title: '2. Objectives & Limitations',
    content: 'Providing information on resources and performance while acknowledging inherent flaws.',
    subtopics: [
      {
        title: 'Objectives',
        description: 'The primary goal is to provide useful information for economic decision-making.',
        points: [
          '**Economic Resources**: To provide information about assets and liabilities.',
          '**Earning Capacity**: To assess the ability of the enterprise to generate cash flows.',
          '**Management Effectiveness**: To judge how well the management has utilized resources (Stewardship).',
          '**Social Responsibility**: To disclose impact on society and environment (where applicable).'
        ]
      },
      {
        title: 'Limitations of Financial Statements',
        description: 'Why the Balance Sheet does not reflect the *true* current value of a business.',
        points: [
          '**Historical Cost**: Asset values are book values, ignoring inflation and current market prices.',
          '**Estimates & Bias**: Depreciation and Provisions are based on personal judgments, which can vary.',
          '**Qualitative Factors Ignored**: Non-monetary aspects like **labor relations, quality of management, and bran image** are missing.',
          '**Interim Reports**: They are just a snapshot at one point in time, not the final verdict on a continuing business.'
        ]
      }
    ]
  },
  {
    id: 'balance-sheet-part-1',
    title: '3. Balance Sheet (Schedule III, Part I)',
    content: 'Vertical format required by Section 129 of the Companies Act, 2013.',
    subtopics: [
      {
        title: 'General Instructions for Preparation',
        description: 'Key rules for classification.',
        points: [
          '**Current vs Non-Current**: An asset/liability is Current if it satisfies ANY of the following:',
          '1. Expected to be realized/settled in the company\'s normal **Operating Cycle**.',
          '2. Held primarily for the purpose of **Trading**.',
          '3. Expected to be realized/settled within **12 months** after the reporting date.',
          '4. Cash or Cash Equivalent (unless restricted).',
          '*Everything else is Non-Current.*'
        ]
      },
      {
        title: 'Illustration 1: Share Capital (Dinkar Ltd.)',
        description: 'Presentation of Authorized, Issued, and Subscribed capital in the Balance Sheet.',
        illustration: {
          type: 'table',
          concept: 'Disclosure of Share Capital logic.\n\n**Given**: Auth Cap=50L (5L shares), Issued=40L (4L shares), Subscribed=30L (3L shares).',
          content: [
            ['Particulars', 'Note No.', 'Amount (₹)'],
            ['Authorised Capital (5,00,000 Equity Shares of ₹10)', '', '50,00,000'],
            ['Issued Capital (4,00,000 Equity Shares of ₹10)', '', '40,00,000'],
            ['Subscribed & Fully Paid Capital', '1', '30,00,000'],
            ['Notes to Accounts: 1. Share Capital', '', ''],
            ['Subscribed & Fully Paid (3,00,000 Shares of ₹10)', '', '30,00,000']
          ],
          caption: 'Illustration 1: Share Capital disclosure for Dinkar Ltd.',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Rule of Disclosure**\nSchedule III requires showing Capital in 3 categories: Authorized, Issued, and Subscribed.\n\n**2. Final Balance Sheet Amount**\n*   Only the **Subscribed Capital** (money actually exchanged/committed) goes to the main Balance Sheet column.\n*   Authorized & Issued are shown for information only (underlined double-lines).\n\n**3. Logic**\nWe take ₹30L because that is the actual liability of the company to shareholders.'
        }
      },
      {
        title: 'Illustration 3: Reserves and Surplus (Sunfill Ltd.)',
        description: 'Presentation of General Reserve and Statement of P&L (Loss).',
        illustration: {
          type: 'table',
          concept: 'Offsetting losses against reserves.\n\n**Given**: General Reserve=5L, P&L (Dr Balance)=1.2L.',
          content: [
            ['Notes to Accounts: Reserves & Surplus', 'Amount (₹)'],
            ['General Reserve', '5,00,000'],
            ['Surplus (Debit Balance of Statement of Profit and Loss)', '(1,20,000)'],
            ['Total Reserves and Surplus', '3,80,000']
          ],
          caption: 'Illustration 3: Sunfill Ltd. - Reserves and Surplus',
          resolution: '**AI Detailed Explanation**:\n\n**1. Netting Off**\n*   **Reserve (Credit Balance)**: Positive Funds = ₹5,00,000.\n*   **Loss (Debit Balance)**: Negative Funds = (₹1,20,000).\n\n**2. Presentation**\n*   Changes to Schedule III require disclosing the Surplus separately.\n*   Net Result: 5.0L - 1.2L = **₹3.8L** shown in the Balance Sheet.'
        }
      },
      {
        title: 'Illustration 4: Negative Surplus (Avalon Ltd.)',
        description: 'Disclosure when the P&L debit balance exceeds existing reserves.',
        illustration: {
          type: 'table',
          concept: 'Negative balance presentation.\n\n**Given**: Securities Premium=2L, P&L (Dr Balance)=3.5L.',
          content: [
            ['Notes to Accounts: Reserves & Surplus', 'Amount (₹)'],
            ['Securities Premium Account', '2,00,000'],
            ['Less: Surplus (Debit Balance of Statement of Profit and Loss)', '(3,50,000)'],
            ['Total (Negative Figure)', '(1,50,000)']
          ],
          caption: 'Illustration 4: Presentation of Negative Surplus for Avalon Ltd.',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Negative Balance**\n*   Surplus has a debit balance of (₹3.5L), meaning a loss.\n*   Securities Premium (Reserve) has ₹2.0L.\n\n**2. The Result**\n*   Even after using the Premium to cover the Loss, there is still a negative balance of **(₹1.5L)**.\n*   This must be shown in the Balance Sheet as a negative figure under "Reserves and Surplus".'
        }
      },
      {
        title: 'Illustration 5: Long-term Borrowings (Arushi Ltd.)',
        description: 'Disclosure of 10% Debentures and Premium on Redemption.',
        illustration: {
          type: 'table',
          concept: 'Classifying borrowings and their associated premiums.\n\n**Given**: 10% Debentures=10L, Premium on Redemption=1L.',
          content: [
            ['Particulars', 'Major Head', 'Sub-head'],
            ['10% Debentures (₹10,00,000)', 'Non-current Liabilities', 'Long-term Borrowings'],
            ['Premium on Redemption (₹1,00,000)', 'Non-current Liabilities', 'Other Long-term Liabilities']
          ],
          caption: 'Illustration 5: Arushi Ltd. - Long-term Borrowings & Redemption Premium',
          resolution: '**AI Detailed Explanation**:\n\n**1. 10% Debentures**\n*   **Nature**: Core Loan/Borrowing.\n*   **Head**: Non-current Liabilities -> **Long-term Borrowings**.\n\n**2. Premium on Redemption**\n*   **Nature**: Liability to be paid after 5-10 years.\n*   **Head**: Non-current Liabilities -> **Other Long-term Liabilities** (Since it\'s not a borrowing itself, but an *other* liability tied to it).'
        }
      }
    ]
  },
  {
    id: 'balance-sheet-part-2',
    title: '4. Balance Sheet: Assets & Full Example',
    content: 'Classification of Resources into Non-Current and Current categories.',
    subtopics: [
      {
        title: 'Assets Classification',
        description: 'Structured hierarchically based on liquidity.',
        points: [
          '**Non-Current Assets**: Tangible (PP&E), Intangible (Goodwill/Patents), Capital WIP, and Long-term Loans & Advances.',
          '**Current Assets**: Assets held for trading or conversion to cash within 12 months/Operating Cycle.',
          '**Key Items**: Inventories (including Loose Tools), Trade Receivables, Cash & Cash Equivalents.'
        ]
      },
      {
        title: 'Illustration 6: Balance Sheet Preparation (Shine and Bright Co. Ltd.)',
        description: 'Full Balance Sheet prepared according to Schedule III.',
        illustration: {
          type: 'table',
          concept: 'Comprehensive classification.\n\n**Given**: Equity=12L, Non-Current Liab=3L, Current Liab=5L, Assets=20L.',
          content: [
            ['Particulars', 'Note No.', 'Amount (₹)'],
            ['EQUITY AND LIABILITIES', '', ''],
            ['1. Shareholders\' Funds', '1', '12,00,000'],
            ['2. Non-Current Liabilities', '2', '3,00,000'],
            ['3. Current Liabilities', '3', '5,00,000'],
            ['TOTAL', '', '20,00,000'],
            ['ASSETS', '', ''],
            ['1. Non-Current Assets', '4', '15,00,000'],
            ['2. Current Assets', '5', '5,00,000'],
            ['TOTAL', '', '20,00,000']
          ],
          caption: 'Illustration 6: Comprehensive Balance Sheet for Shine and Bright Co. Ltd.',
          resolution: '**AI Detailed Explanation**:\n\n**1. Separation of Current & Non-Current**\n*   **Assets**: We separated Fixed Assets (15L) from Current Assets (5L). Total = 20L.\n*   **Liabilities**: We separated Long-term Debt (3L) from Current Liabilities (5L). Total Debt = 8L.\n\n**2. The Equation**\nAssets (20L) = Equity (12L) + Liabilities (8L).\n\n**3. Presentation**\nThis Vertical Format (Schedule III) is mandatory for all Indian Companies. It allows easiest comparison of Solvency (Non-current) and Liquidity (Current) at a glance.'
        }
      }
    ]
  },
  {
    id: 'pnl-statement',
    title: '5. Statement of Profit & Loss (Part II)',
    content: 'The Performance Statement of a company showing income and expenses.',
    subtopics: [
      {
        title: 'Revenue & Expense Structure',
        description: 'Standard order of reporting.',
        points: [
          '**Total Revenue**: Revenue from Operations (Net Sales) + Other Income (Interest, Rent, Dividend).',
          '**Expenses**: Must be classified into materials, employee benefits, finance costs, depreciation, and other expenses.',
          '**Profit**: Profit Before Tax - Tax Expense = Profit After Tax.'
        ]
      },
      {
        title: 'Illustration 7: Comprehensive Statement of Profit and Loss',
        description: 'Complete format with all standard line items.',
        illustration: {
          type: 'table',
          concept: 'Full P&L Structure.\n\n**Given**: Revenue=50L, Other Income=2L. Costs: Materials=20L, Purchase=5L, Inventory Change=(2L) [Increase], Employee=8L, Finance=1L, Dep=2L, Other=3L. Tax=30%.',
          content: [
            ['Particulars', 'Note No.', 'Amount (₹)'],
            ['I. Revenue from Operations', '', '50,00,000'],
            ['II. Other Income', '', '2,00,000'],
            ['III. Total Revenue (I + II)', '', '52,00,000'],
            ['IV. Expenses:', '', ''],
            ['   Cost of materials consumed', '', '20,00,000'],
            ['   Purchases of Stock-in-Trade', '', '5,00,000'],
            ['   Changes in Inventories (Op - Cl)', '', '(2,00,000)'],
            ['   Employee Benefits Expense', '', '8,00,000'],
            ['   Finance Costs', '', '1,00,000'],
            ['   Depreciation and Amortization', '', '2,00,000'],
            ['   Other Expenses', '', '3,00,000'],
            ['   Total Expenses', '', '37,00,000'],
            ['V. Profit Before Tax (III - IV)', '', '15,00,000'],
            ['VI. Tax Expenses (30% of V)', '', '4,50,000'],
            ['VII. Profit After Tax (V - VI)', '', '10,50,000']
          ],
          caption: 'Illustration 7: Comprehensive Statement of Profit and Loss'
        }
      },
      {
        title: 'Illustration 8: P&L Statement',
        description: 'Preparation of Statement of Profit and Loss showing Profit before Tax.',
        illustration: {
          type: 'table',
          concept: 'Profit computation hierarchy.\n\n**Given**: Revenue=10L, Other Income=50k, Expenses=7L.',
          content: [
            ['Particulars', 'Note No.', 'Amount (₹)'],
            ['I. Revenue from Operations', '', '10,00,000'],
            ['II. Other Income', '', '50,000'],
            ['III. Total Revenue (I + II)', '', '10,50,000'],
            ['IV. Expenses (Total)', '', '7,00,000'],
            ['V. Profit Before Tax (III - IV)', '', '3,50,000']
          ],
          caption: 'Illustration 8: Financial Performance showing Profit Before Tax'
        }
      }
    ]
  }
];

export const CH3_MINDMAP: MindMapNodeData[] = [
  {
    id: 'ch3-m1',
    title: '1. Nature & Objectives',
    iconName: 'Target',
    colorClass: 'border-indigo-500 text-indigo-600',
    items: [
      {
        label: 'Recorded Facts',
        children: ['Based on Historical Cost']
      },
      {
        label: 'Conventions',
        children: ['Prudence (Conservatism)', 'Materiality']
      },
      {
        label: 'Postulates',
        children: ['Going Concern', 'Money Measurement', 'Realisation']
      },
      {
        label: 'Objectives',
        children: ['Assess Resources', 'Earning Capacity']
      }
    ]
  },
  {
    id: 'ch3-m2',
    title: '2. Equity & Liabilities',
    iconName: 'Scale',
    colorClass: 'border-emerald-500 text-emerald-600',
    items: [
      {
        label: 'Shareholders\' Funds',
        children: ['Share Capital', 'Reserves and Surplus']
      },
      {
        label: 'Non-Current Liabilities',
        children: ['Long-term Borrowings', 'Long-term Provisions']
      },
      {
        label: 'Current Liabilities',
        children: ['Trade Payables', 'Short-term Provisions']
      },
      {
        label: 'Special Items',
        children: ['Proposed Dividend: Contingent Liability']
      }
    ]
  },
  {
    id: 'ch3-m3',
    title: '3. Assets (Sch III)',
    iconName: 'Layers',
    colorClass: 'border-blue-500 text-blue-600',
    items: [
      {
        label: 'Non-Current Assets',
        children: ['Property, Plant & Equipment', 'Intangible Assets', 'WIP']
      },
      {
        label: 'Current Assets',
        children: ['Inventories (incl. Loose Tools)', 'Cash & Equivalents']
      },
      {
        label: 'Classification Rule',
        children: ['12-months or Operating Cycle']
      }
    ]
  },
  {
    id: 'ch3-m4',
    title: '4. Statement of Profit & Loss',
    iconName: 'BarChart3',
    colorClass: 'border-orange-500 text-orange-600',
    items: [
      {
        label: 'Revenue',
        children: ['Revenue from Operations', 'Other Income']
      },
      {
        label: 'Expenses',
        children: ['Cost of Materials', 'Employee Benefits', 'Finance Costs']
      },
      {
        label: 'Result',
        children: ['Profit Before Tax - Tax = Net Profit']
      }
    ]
  },
  {
    id: 'ch3-m5',
    title: '5. Notes & Criticals',
    iconName: 'BookOpen',
    colorClass: 'border-purple-500 text-purple-600',
    items: [
      {
        label: 'Share Capital',
        children: ['Reconciliation of number of shares']
      },
      {
        label: 'Forfeited Shares',
        children: ['Added to Subscribed Capital']
      },
      {
        label: 'Reserves',
        children: ['Debit P&L as Negative Surplus']
      }
    ]
  },
  {
    id: 'ch3-m6',
    title: '6. Limitations',
    iconName: 'AlertCircle',
    colorClass: 'border-red-500 text-red-600',
    items: [
      {
        label: 'Constraints',
        children: ['Historical Cost flaw', 'Qualitative factors ignored']
      },
      {
        label: 'Subjectivity',
        children: ['Personal Bias in Estimates']
      },
      {
        label: 'Scope',
        children: ['Interim Reports (Snapshot only)']
      }
    ]
  }
];

export const CH3_FLASHCARDS: Flashcard[] = [
  { id: 301, category: 'Theory', question: "On what basis are 'Recorded Facts' in Financial Statements prepared?", answer: "Based on historical cost (original purchase price), not current market conditions." },
  { id: 302, category: 'Theory', question: "What is the 'Going Concern' postulate?", answer: "The assumption that the business will continue its operations for an indefinite period." },
  { id: 303, category: 'Theory', question: "Name the primary Accounting Conventions followed in Financial Statements.", answer: "Materiality, Conservatism (Prudence), and Consistency." },
  { id: 304, category: 'Theory', question: "Give examples of 'Personal Judgement' in accounting.", answer: "Choosing depreciation methods, valuing inventory, and estimating provision for bad debts." },
  { id: 305, category: 'Theory', question: "What is the primary objective of Financial Statements?", answer: "To provide information about economic resources, obligations, and earning capacity to help users make decisions." },
  { id: 306, category: 'Theory', question: "What does 'Stewardship' refer to in Financial Statements objectives?", answer: "Judging how effectively the management has used the entity's economic resources." },
  { id: 307, category: 'Definitions', question: "What is the 'Money Measurement' postulate?", answer: "Only those events and transactions that can be expressed in monetary terms are recorded." },
  { id: 308, category: 'Theory', question: "Explain 'Conservatism' in inventory valuation.", answer: "Inventory is valued at cost or net realizable value, whichever is lower." },
  { id: 309, category: 'Definitions', question: "Which schedule and part of the Companies Act 2013 prescribes the Balance Sheet format?", answer: "Schedule III, Part I." },
  { id: 310, category: 'Classification', question: "How is an item classified as 'Current'?", answer: "If it is expected to be realized/settled within 12 months or within the operating cycle." },
  { id: 311, category: 'Definitions', question: "Define 'Operating Cycle'.", answer: "The time between acquisition of assets for processing and their realization in cash." },
  { id: 312, category: 'Classification', question: "List the components of 'Shareholders' Funds'.", answer: "(a) Share Capital, (b) Reserves and Surplus, (c) Money received against share warrants." },
  { id: 313, category: 'Classification', question: "Under which sub-head is 'Securities Premium' shown?", answer: "Reserves and Surplus." },
  { id: 314, category: 'Classification', question: "Where is 'Capital Reserve' classified?", answer: "Shareholders\' Funds -> Reserves and Surplus." },
  { id: 315, category: 'Classification', question: "How is a Debit balance in Statement of Profit and Loss (Loss) shown in the Balance Sheet?", answer: "As a negative figure under 'Surplus' in Reserves and Surplus." },
  { id: 316, category: 'Classification', question: "What are 'Long-term Borrowings'?", answer: "Borrowings due for repayment after 12 months (e.g., Debentures, Bonds)." },
  { id: 317, category: 'Classification', question: "Classification of 'Public Deposits'?", answer: "Non-current Liabilities -> Long-term Borrowings." },
  { id: 318, category: 'Classification', question: "Where is 'Provision for Gratuity' shown?", answer: "Non-current Liabilities -> Long-term Provisions." },
  { id: 319, category: 'Classification', question: "List sub-heads of 'Current Liabilities'.", answer: "(a) Short-term borrowings, (b) Trade payables, (c) Other current liabilities, (d) Short-term provisions." },
  { id: 320, category: 'Classification', question: "Where is 'Unpaid Dividend' shown?", answer: "Current Liabilities -> Other Current Liabilities." },
  { id: 321, category: 'Classification', question: "How are 'Current maturities of long-term debt' classified?", answer: "Other Current Liabilities." },
  { id: 322, category: 'Classification', question: "Classification of 'Provision for Tax'?", answer: "Short-term Provisions." },
  { id: 323, category: 'Classification', question: "What are 'Tangible Fixed Assets'?", answer: "Physical assets held for use, like Land, Building, Plant, and Furniture." },
  { id: 324, category: 'Classification', question: "Give examples of 'Intangible Fixed Assets'.", answer: "Goodwill, Patents, Trademarks, and Computer Software." },
  { id: 325, category: 'Classification', question: "Where is 'Capital Work-in-Progress' shown?", answer: "Non-current Assets -> Fixed Assets (PPE)." },
  { id: 326, category: 'Classification', question: "List sub-heads of 'Current Assets'.", answer: "(a) Current investments, (b) Inventories, (c) Trade receivables, (d) Cash & equivalents, (e) Short-term loans/advances, (f) Other." },
  { id: 327, category: 'Classification', question: "Where are 'Loose Tools' and 'Stores & Spares' classified?", answer: "Current Assets -> Inventories." },
  { id: 328, category: 'Classification', question: "Classification of 'Bills Receivable'?", answer: "Current Assets -> Trade Receivables." },
  { id: 329, category: 'Classification', question: "What is included in 'Cash & Cash Equivalents'?", answer: "Cash in hand, Bank balances, and Cheques/Drafts on hand." },
  { id: 330, category: 'Classification', question: "Classification of 'Work-in-progress'?", answer: "Current Assets -> Inventories." },
  { id: 331, category: 'Definitions', question: "Which part of Schedule III deals with Statement of P&L?", answer: "Schedule III, Part II." },
  { id: 332, category: 'Definitions', question: "What is 'Revenue from Operations' for a trading company?", answer: "Net sales of products (Sales minus Returns)." },
  { id: 333, category: 'Classification', question: "Give examples of 'Other Income'.", answer: "Interest income, Dividend income, and Net gain on sale of investments." },
  { id: 334, category: 'Theory', question: "What is 'Finance Cost'?", answer: "Interest paid on borrowings (e.g., interest on debentures, bank loans)." },
  { id: 335, category: 'Theory', question: "How is 'Profit Before Tax' calculated in the statement?", answer: "Total Revenue (I+II) minus Total Expenses (IV)." },
  { id: 336, category: 'Theory', question: "Where is the current year's 'Proposed Dividend' shown?", answer: "As a Contingent Liability in the 'Notes to Accounts' (per AS-4)." },
  { id: 337, category: 'Theory', question: "How are 'Forfeited Shares' shown in the Balance Sheet?", answer: "Added to Subscribed Capital in the Notes to Accounts." },
  { id: 338, category: 'Classification', question: "Classification of 'Calls Unpaid'?", answer: "Deducted from 'Subscribed but not fully paid up' capital." },
  { id: 339, category: 'Classification', question: "How are 'Loans repayable on demand' classified?", answer: "Current Liabilities -> Short-term Borrowings." },
  { id: 340, category: 'Theory', question: "What is 'Window Dressing'?", answer: "Manipulating accounts to show a better financial position than actual." },
  { id: 341, category: 'Limits', question: "Why is 'Historical Cost' a limitation?", answer: "Asset values don't reflect current market prices or inflation effects." },
  { id: 342, category: 'Limits', question: "What qualitative info is ignored in Financial Statements?", answer: "Human resource value, management quality, and labor relations." },
  { id: 343, category: 'Limits', question: "Explain the 'Interim Nature' limitation.", answer: "Statements show position at a point in time, not the final life outcome of the business." },
  { id: 344, category: 'Limits', question: "How does 'Personal Bias' limit Financial Statements utility?", answer: "Results vary based on the accountant's subjective choice of estimates." },
  { id: 345, category: 'Limits', question: "Do Financial Statements reflect the real value of the business?", answer: "No, they represent recorded historical facts and accounting conventions." },
  { id: 346, category: 'Classification', question: "Where are 'Commitments' shown?", answer: "Notes to Accounts (after Contingent Liabilities)." },
  { id: 347, category: 'Classification', question: "Examples of 'Contingent Liabilities'?", answer: "Claims against company not acknowledged as debts, Guarantees given." },
  { id: 348, category: 'Theory', question: "Meaning of 'Operating Cycle' for a construction company?", answer: "The time taken to acquire raw material, build the project, and realize cash." },
  { id: 349, category: 'Classification', question: "Classify 'Cheques in Hand'.", answer: "Current Assets -> Cash and Cash Equivalents." },
  { id: 350, category: 'Classification', question: "Classify 'Mining Rights'.", answer: "Non-current Assets -> Property, Plant and Equipment and Intangible Assets -> Intangible Assets." },
  { id: 351, category: 'Classification', question: "Where is 'Security Deposits' (Electricity/Telephone) shown?", answer: "Non-current Assets -> Long-term Loans and Advances." },
  { id: 352, category: 'Classification', question: "Classify 'Interest Accrued and Due on Debentures'.", answer: "Current Liabilities -> Other Current Liabilities." }
];

export const CH3_CHEATSHEET: CheatSheetData = {
  natureTable: [
    ['Nature', 'Key Point'],
    ['Recorded Facts', 'Based on original/historical cost, not market price.'],
    ['Accounting Conventions', 'Follows Materiality and Conservatism.'],
    ['Postulates', 'Based on Going Concern, Money Measurement, and Realisation.'],
    ['Personal Judgements', 'Involves estimates (e.g., depreciation, useful life).']
  ],
  limitations: [
    'Historical Cost: Does not reflect current market situation.',
    'Estimates: Subject to personal bias/judgement.',
    'Qualitative Info Missing: Ignores non-monetary factors like brand value.',
    'Interim Reports: Snapshot at single point in time.'
  ],
  balanceSheetOrder: [
    { head: 'I. Equity and Liabilities', items: ["1. Shareholders' Funds", "2. Share Application Money Pending Allotment", "3. Non-Current Liabilities", "4. Current Liabilities"] },
    { head: 'II. Assets', items: ["1. Non-Current Assets", "2. Current Assets"] }
  ],
  classificationTable: [
    ['Item', 'Major Head', 'Sub-Head'],
    ['Loose Tools', 'Current Assets', 'Inventories'],
    ['Stores and Spares', 'Current Assets', 'Inventories'],
    ['Unpaid Dividend', 'Current Liabilities', 'Other Current Liabilities'],
    ['Proposed Dividend', 'Contingent Liability', 'Notes to Accounts'],
    ['Calls in Arrears', "Shareholders' Funds", 'Deducted from Share Capital'],
    ['Calls in Advance', 'Current Liabilities', 'Other Current Liabilities'],
    ['Securities Premium', "Shareholders' Funds", 'Reserves & Surplus'],
    ['Debit Balance of Statement of P&L', "Shareholders' Funds", 'Reserves & Surplus (Negative View)'],
    ['Premium on Redemption', 'Non-Current Liabilities', 'Other Long-term Liabilities'],
    ['Provision for Tax', 'Current Liabilities', 'Short-term Provisions'],
    ['Computer Software', 'Non-Current Assets', 'Fixed Assets (Intangible)'],
    ['Bank Overdraft', 'Current Liabilities', 'Short-term Borrowings']
  ],
  pnlOrder: [
    { category: 'A. Revenue', items: ['I. Revenue from Operations', 'II. Other Income'] },
    { category: 'B. Expenses', items: ['1. Cost of materials consumed', '2. Purchases of Stock-in-Trade', '3. Changes in Inventories', '4. Employee Benefits Expense', '5. Finance Costs', '6. Depreciation and Amortization', '7. Other Expenses'] }
  ],
  crucialRules: [
    { title: 'Operating Cycle Rule', content: 'Current if realized/settled within Operating Cycle or 12 months. If Operating Cycle is not identified, it is assumed to be 12 months.' },
    { title: 'Proposed Dividend', content: 'Shown as Contingent Liability in Notes to Accounts, NOT recorded in books until declared.' },
    { title: 'Rounding Off', content: 'Turnover < 100 Crores: Nearest 100s/1000s/Lakhs; > 100 Crores: Nearest Lakhs/Millions.' },
    { title: 'Negative Surplus', content: 'Losses shown as negative figure under Reserves & Surplus (not as Asset).' }
  ],
  commonErrors: [
    'Confusing "Reserve Capital" (Uncalled Capital) with "Capital Reserve" (Accumulated Profits).',
    'Showing "Proposed Dividend" in the Balance Sheet (It is a Contingent Liability).',
    'Classifying "Computer Software" as Tangible Asset (It is Intangible).',
    'Treating "Loose Tools" as Fixed Assets (They are Inventory).'
  ]
};

export const CH3_SQPS: SQPQuestion[] = [
  // --- 2025-26 ---
  {
    id: 'ch3-25-26-q21',
    year: '2025-26',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "21. Sapphire Ltd. Was registered with an authorised capital of ₹ 80,00,000 divided into 4,00,000 shares of ₹ 20 each. Company offered and issued 1,50,000 shares at a premium of ₹ 4 per share payable as ₹ 7 on application (including ₹ 1 premium), ₹ 12 on allotment (including ₹ 2 premium) and balance on first call. Rancho, holding 10,000 shares failed to pay allotment and call money. Another shareholder Sultan holding 5,000 shares failed to pay the call money. All the shares held by Rancho were forfeited and of these 8,000 were reissued at ₹ 22 per share as fully paid.\nShow Share Capital sub head as it would in the Balance Sheet of Sapphire ltd. along with notes to Account as per the Companies Act 2013.",
    markingScheme: '**Balance Sheet (Extract) as at ...**\n\n| Particulars | Note No. | Amount (₹) |\n|---|---|---|\n| **I. EQUITY AND LIABILITIES** | | |\n| **1. Shareholders\' Funds** | | |\n| (a) Share Capital | 1 | 29,52,000 |\n\n**Notes to Accounts**\n\n| Particulars | Amount (₹) |\n|---|---|\n| **1. Share Capital** | |\n| **Authorised Share Capital** | |\n| 4,00,000 Equity Shares of ₹ 20 each | 80,00,000 |\n| **Issued Share Capital** | |\n| 1,50,000 Equity Shares of ₹ 20 each | 30,00,000 |\n| **Subscribed Share Capital** | |\n| **Subscribed and Fully Paid up** | |\n| 1,43,000 Equity shares @ ₹ 20 each | 28,60,000 |\n| **Subscribed but not Fully Paid up** | |\n| 5,000 shares (Sultan) @ ₹ 20 each | 1,00,000 |\n| Less: Calls in Arrears (5,000 × ₹ 4*) | (20,000) |\n| | **80,000** |\n| Add: Share Forfeiture A/c (For 2,000 shares) | **12,000** |\n| **Total Subscribed Capital** | **29,52,000** |',
    aiExplanation: "**AI Detailed Explanation**:\n\n**1. Share Analysis**\n- **Total Issued**: 1,50,000 Shares.\n- **Rancho (10,000 shares)**: Failed Allotment & Call. Forfeited. 8,000 Reissued.\n    - Shares CANCELLED: 10,000.\n    - Shares REVIVED (Reissued): 8,000.\n    - Net Cancelled (Still in Forfeiture): 2,000 shares.\n- **Sultan (5,000 shares)**: Failed Call. NOT Forfeited.\n    - These are Active but Part-Paid.\n\n**2. Subscribed Capital Calculation**\n- **Fully Paid Shares**: Total (1.5L) - Rancho (10k) - Sultan (5k) + Reissued (8k) = **1,43,000 Shares**.\n    - Value: 1,43,000 × 20 = 28,60,000.\n- **Not Fully Paid (Sultan)**: 5,000 shares.\n    - Called up: ₹20.\n    - Less Arrears: Call money ₹4 (Balance). Note: Application ₹7 (incl ₹1 prem) + Allotment ₹12 (incl ₹2 prem) = ₹19 (incl ₹3 prem). Total Issue Price ₹24 (Face ₹20 + Prem ₹4). Balance Call = ₹5 (incl remaining ₹1 prem). Face value portion of call = ₹4.\n    - Arrears on Call: 5,000 × ₹4 (Face Value portion) = 20,000.\n- **Forfeited Shares Account**:\n    - Rancho's 2,000 shares (not reissued).\n    - Amount Received: Application only (₹6 Face Value + ₹1 Premium).\n    - Note: Premium received is NOT forfeited. Only Face Value received is forfeited.\n    - 2,000 × ₹6 = 12,000.\n\n**3. Final Total**\n- 28,60,000 + 80,000 + 12,000 = **29,52,000**."
  },

  // --- 2024-25 ---
  {
    id: 'ch3-24-25-q12',
    year: '2024-25',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "12. Loss on Issue of Debentures is to be written off as ______ out of Securities Premium and ______ out of Statement of Profit and Loss.\n\n(A) Statement of Profit and Loss; General Reserve\n(B) Securities Premium; Statement of Profit and Loss\n(C) General Reserve; Securities Premium\n(D) Capital Reserve; General Reserve",
    markingScheme: "Securities Premium; Statement of Profit and Loss.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Hierarchy of Write-off**:\n    1.  **Securities Premium**: Use this reserve FIRST (Section 52).\n    2.  **General Reserve**: (If allowed by Q).\n    3.  **Statement of P&L**: The final resort.\n*   Therefore, First SP, then P&L."
  },
  {
    id: 'ch3-24-25-q26',
    year: '2024-25',
    type: 'Case Study (6 Marks)',
    marks: 6,
    question: "26. **Balance Sheet (Extract) Of XYZEE ltd as at 31.03.2024 (as per schedule -III of Companies Act 2013)**\n\n| | Note no. | 31.03.2023 | 31.03.2024 |\n|---|---|---|---|\n| **I- Equity & Liabilities** | | | |\n| 1. Shareholders Funds | | | |\n| a). Share Capital | 1 | 44,90,000 | 54,90,000 |\n| b). Reserves and Surplus | 2 | 2,00,000 | 3,60,000 |\n\n**Note no.1 (For year ending 31.03.2023)**\n**Share Capital**\n\n| 1). Authorised Share Capital | |\n|---|---|\n| 8,00,000 Equity Shares of Rs. 10 each | 80,00,000 |\n| **2). Issued Share Capital** | |\n| 4,50,000 Equity Shares of Rs. 10 each | 45,00,000 |\n| **3). Subscribed Share Capital** | |\n| a). Subscribed and Fully paid | |\n| Rs.10 per share on 4,45,000 Equity Shares | 44,50,000 |\n| b). Subscribed and not Fully paid | |\n| Rs. 10 per share on 5,000 Equity shares | 50,000 |\n| Less not paid: Rs. 2 per share on 5,000 Equity shares | (10,000) 44,90,000 |\n\n**Note no.1 (For year ending 31.03.2024)**\n**Share Capital**\n\n| 1). Authorised Share Capital | |\n|---|---|---|\n| 8,00,000 Equity Shares of Rs. 10 each | 80,00,000 |\n| **2). Issued Share Capital** | |\n| 5,50,000 Equity Shares of Rs. 10 each | 55,00,000 |\n| *(Out of these 40,000 shares were issued to the vendors as consideration for Capital asset purchased)* | |\n| **3). Subscribed Share Capital** | |\n| a). Subscribed and Fully paid | |\n| Rs.10 per share on 5,45,000 Equity Shares | 54,50,000 |\n| c) Subscribed and not Fully paid | |\n| Rs. 10 per share on 5,000 Equity shares | 50,000 |\n| Less not paid: Rs. 2 per share on 5,000 Equity shares | (10,000) 54,90,000 |\n\n**Note no. 2 - Reserves and Surplus**\n\n| | 31.03.2023 | 31.03.2024 |\n|---|---|---|\n| Capital Reserve | Nil | 40,000 |\n| Securities Premium | 2,00,000 | 3,20,000 |\n\nDuring the year the company took over the business of Quipa Ltd. with Assets of Rs. 12,00,000/- and Liabilities of Rs.7,30,000. Purchase consideration was paid in cash and by issue of equity shares at par. The entire transaction resulted in Capital reserve of Rs.40,000.\n\n**Q1.** What is the total face value of Shares issued by the Company during the year 2023-24.\nA). Rs.10,00,000\nB). Rs. 6,00,000\nC). Rs. 9,50,000\nD). Rs. 11,20,000\n\n**Q2.** Shares issued for cash during the year were issued at _______. (assuming they were issued together)?\nA). Rs.10\nB). Rs.8\nC). Rs.12\nD). Rs.11.20\n\n**Q3.** On April 1, 2024, the company forfeited all the defaulting shares. What amount will appear in the Share Forfeiture account at the time of forfeiture?\nA). Rs.40,000\nB). Rs. 50,000\nC). Rs.10,000\nD). Rs. 60,000\n\n**Q4.** What will be the number of Issued shares, as on April 1,2024, after the forfeiture of these shares?\nA). 5,45,000 shares\nB). 5,50,000 shares.\nC). 4,45,000 shares.\nD). 5,05,000 shares.\n\n**Q5.** If 2,000 of the forfeited shares were issued at Rs. 14 per share, what will be the amount of securities premium and Capital reserve respectively as on April 1, 2024?\nA). Rs, 3,20,000, Rs.40,000\nB). Rs.3,28,000, Rs.56,000\nC). Rs.3,28,000, Rs.80,000\nD). Rs.3,20,000, Rs.80,000\n\n**Q6.** What will be the amount in the \" Subscribed and Fully paid\" after the reissue of these 2000 shares?\nA). Rs.54,50,000\nB). Rs.55,00,000\nC). Rs.54,70,000\nD). Rs.54,80,000",
    markingScheme: "**Q1**: (A) Rs.10,00,000\n**Q2**: (C) Rs.12\n**Q3**: (A) Rs.40,000\n**Q4**: (B) 5,50,000 shares\n**Q5**: (B) Rs.3,28,000, Rs.56,000\n**Q6**: (C) Rs.54,70,000",
    aiExplanation: "**XYZEE Ltd. Case Study — Share Capital Deep Dive (2024-25 SQP, 6 Marks):**\n\n**Concept**: Case study testing all balance sheet classifications of Share Capital — Issued, Subscribed & Fully Paid, Subscribed & Not Fully Paid, Capital Reserve, forfeiture, and reissue. Students must carefully distinguish 'Issued' (authorization) from 'Subscribed' (actual subscribers).\n\n---\n\n**Q1 — Total FV of Shares Issued (2023-24 vs 2022-23): Answer (A) ₹10,00,000**\n- Issued Capital 2024: 5,50,000 shares. Issued Capital 2023: 4,50,000 shares.\n- New Issued Shares = 5,50,000 − 4,50,000 = **1,00,000 shares × ₹10 = ₹10,00,000**.\n\n**Q2 — Issue Price of Cash Shares (Combined): Answer (C) ₹12**\n- Of 1,00,000 new shares, 40,000 were issued to vendors (no premium info = at par ₹10).\n- Remaining = 60,000 shares issued for cash.\n- SP increased by: ₹3,20,000 − ₹2,00,000 = ₹1,20,000 (from cash issue, as vendor shares at par).\n- Premium per cash share = ₹1,20,000 ÷ 60,000 = **₹2** → Issue Price = ₹10 + ₹2 = **₹12**.\n\n**Q3 — Share Forfeiture Amount: Answer (A) ₹40,000**\n- 5,000 shares, subscribed but ₹2/share not paid.\n- Paid = ₹10 − ₹2 = ₹8 per share.\n- **Share Forfeiture A/c = 5,000 × ₹8 = ₹40,000** (amount RECEIVED on these shares).\n\n**Q4 — Issued Shares After Forfeiture: Answer (B) 5,50,000 shares**\n- Forfeiture does NOT reduce **Issued** Capital — only Subscribed Capital reduces.\n- Company issued 5,50,000 shares total and still has authority for that count.\n- **Issued remains 5,50,000**.\n\n**Q5 — SP and CR After Reissue of 2,000 Shares @ ₹14: Answer (B) SP ₹3,28,000, CR ₹56,000**\n- Reissue Price = ₹14 (premium ₹4 per share above FV of ₹10).\n- Securities Premium added: 2,000 × ₹4 = ₹8,000. New SP = ₹3,20,000 + ₹8,000 = **₹3,28,000**.\n- Forfeiture per share = ₹8 (amount originally received). Gain on reissue = ₹8 (forfeiture) − ₹0 (loss on reissue*).\n  - *Loss on reissue = 0 since reissued at ₹14 above FV of ₹10.*\n  - Or: Capital Reserve = Forfeiture on reissued shares (₹8 × 2,000 = ₹16,000) = **₹16,000** new CR.\n- Total CR = ₹40,000 (existing, from earlier vendor issue) + ₹16,000 = **₹56,000**.\n\n**Q6 — Subscribed & Fully Paid After Reissue: Answer (C) ₹54,70,000**\n- Before reissue: Subscribed Fully Paid = 5,45,000 shares (forfeited 5,000 from subscribed not fully paid).\n- After reissue of 2,000: 5,45,000 + 2,000 = **5,47,000 shares × ₹10 = ₹54,70,000**.\n\n**KEY RULES**: (1) Issued ≠ Subscribed. Forfeiture reduces Subscribed, not Issued. (2) Reissue adds back to Subscribed Fully Paid. (3) Capital Reserve = Forfeiture A/c balance on reissued shares minus discount on reissue."
  },
  {
    id: 'ch3-24-25-q31',
    year: '2024-25',
    type: 'Classification (3 Marks)',
    marks: 3,
    question: "31. Find the heads and sub-heads under which the following items will appear in the balance sheet of a company as per Schedule III, Part I of Companies Act, 2013?\na) Furniture and Fixture\nb) Advance paid to contractor for building under construction\nc) Accrued Income\nd) Loans repayable on demand to Bank\ne) Employees earned leaves payable on retirement\nf) Employees earned leaves encash able",
    markingScheme: '**Classification Table**\n\n| Items | Heading | Sub-Heading |\n|---|---|---|\n| a) Furniture and Fixture | Non-Current Assets | Property, Plant & Equipment |\n| b) Advance paid to contractor... | Non-Current Assets | Long-Term Loans & Advances |\n| c) Accrued Income | Current Assets | Other Current Assets |\n| d) Loans repayable on demand | Current Liabilities | Short Term Borrowings |\n| e) Leave payable on retirement | Non-Current Liabilities | Long Term Provisions |\n| f) Leave encash able | Current Liabilities | Short Term Provisions |',
    aiExplanation: "**AI Detailed Explanation**:\n- **Building Advance**: Capital Advance -> Long Term Loans & Advances (Schedule III specific).\n- **Leaves**: Retirement = Long Term. Encashable (usually immediately or short term) = Short Term."
  },
  {
    id: 'ch3-24-25-q32',
    year: '2024-25',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "32. Complete the Comparative Statement of Profit and Loss:\n\nParticulars | 2022-23 | 2023-24 | Absolute Change | % Change\n---|---|---|---|---\nRevenue from Operations | 16,00,000 | 20,00,000 | ? | ?\nLess: Employee Benefit Exp | 8,00,000 | ? | ? | 25%\nLess: Other Expenses | 2,00,000 | ? | (1,00,000) | ?\nProfit before tax | 6,00,000 | ? | ? | 50%\nTax @30% | ? | ? | 90,000 | ?\nProfit after tax | 4,20,000 | ? | 2,10,000 | ?",
    markingScheme: "**Comparative Income Statement**\n\n| Particulars | 2022-23 | 2023-24 | Abs Change | % Change |\n|---|---|---|---|---|\n| **Revenue** | 16,00,000 | 20,00,000 | **4,00,000** | **25%** |\n| **Emp. Expenses** | 8,00,000 | **10,00,000** | **2,00,000** | 25% |\n| **Other Expenses**| 2,00,000 | **1,00,000** | (1,00,000) | **(50%)** |\n| **PBT** | 6,00,000 | **9,00,000** | **3,00,000** | 50% |\n| **Tax @ 30%** | **1,80,000**| **2,70,000** | 90,000 | **50%** |\n| **PAT** | 4,20,000 | **6,30,000** | 2,10,000 | **50%** |",
    aiExplanation: "**AI Detailed Explanation**:\n- **Revenue**: 20L - 16L = 4L. (4L/16L)*100 = 25%.\n- **Emp Exp**: 25% incr on 8L = 2L. 8L+2L = 10L.\n- **Other Exp**: Decr 1L. 2L-1L = 1L. (-1L/2L) = -50%.\n- **Tax**: 30% of 6L = 1.8L. 30% of 9L = 2.7L. Diff 90k.\n- **PAT**: PBT - Tax."
  },
  // --- 2023-24 ---
  {
    id: 'ch3-23-24-q7',
    year: '2023-24',
    type: 'Assertion-Reason (1 Mark)',
    marks: 1,
    question: "7. Assertion (A): A Company is Registered with an authorised Capital of 5,00,000 Equity Shares of ₹10 each of which 2,00,000 Equity shares were issued and subscribed. All the money had been called up except ₹2 per share which was declared as 'Reserve Capital'. The Share Capital reflected in balance sheet as 'Subscribed and Fully paid up' will be Zero.\n\nReason (R): Reserve Capital can be called up only at the time of winding up of the company.\n\n(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)\n(b) Both Assertion (A) and Reason (R) are Correct, but Reason (R) is not the correct explanation of Assertion (A)\n(c) Assertion (A) is incorrect, but Reason (R) is Correct.\n(d) Assertion (A) is correct, but Reason (R) is incorrect",
    markingScheme: "(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Assertion Analysis**: Since ₹2 is 'Reserve Capital' (callable only on winding up), the shares are NOT fully called up. Hence, they cannot be 'Subscribed and Fully Paid Up'. The amount will be shown under 'Subscribed but NOT fully paid up'. So, 'Subscribed and Fully paid up' is indeed Zero. Assertion is **Correct**.\n*   **Reason Analysis**: Reserve Capital is that portion of uncalled capital which is called only in the event of winding up. Reason is **Correct**.\n*   **Link**: The reason correctly explains *why* the shares are not fully paid (because ₹2 cannot be called yet)."
  },
  {
    id: 'ch3-23-24-q21',
    year: '2023-24',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "21. Atishyokti Ltd. company was registered with an authorized capital of ₹ 20,00,000 divided into 2,00,000 Equity Shares of ₹ 10 each, payable ₹ 3 on application, ₹ 6 on allotment (including ₹ 1 premium) and balance on call. The company offered 80,000 shares for public subscription. All the money has been duly called and received except allotment and call money on 5,000 shares held by Manish and call money on 4,000 shares held by Alok. Manish’s shares were forfeited and out of these 3,000 shares were re-issued ₹ 9 per share as fully paid up. Show share capital in the books of the company. Also prepare notes to accounts.",
    markingScheme: "**Balance Sheet (Extract) as at ...**\n\n| Particulars | Note No | Amount |\n|---|---|---|\n| **I. EQUITY AND LIABILITIES** | | |\n| **1. Shareholders’ Funds** | | |\n| (a) Share Capital | 1 | **7,78,000** |\n\n**Notes to Accounts**\n\n| Particulars | Details | Amount |\n|---|---|---|\n| **1. Share Capital** | | |\n| **Authorised Capital** | | |\n| 2,00,000 Equity shares of Rs.10 each | | 20,00,000 |\n| **Issued Capital** | | |\n| 80,000 Equity shares of 10 each | | 8,00,000 |\n| **Subscribed capital** | | |\n| **Subscribed and fully paid up** | | |\n| 74,000 equity shares of 10 each | | 7,40,000 |\n| **Subscribed but not fully paid-up** | | |\n| 4,000 equity shares of 10 each | 40,000 | |\n| Less: calls in arrears (4,000 x 2) | (8,000) | 32,000 |\n| Add Forfeited Shares (2,000 shares @ 3) | | 6,00,000 |\n| **Total** | | **7,78,000** |",
    aiExplanation: "**AI Detailed Explanation**:\n- **Issued**: 80,000 Shares.\n- **Manish (5k)**: Failed Allot (6) & Call. Forfeited. 3k Reissued.\n    - 2,000 shares of Manish remain forfeited (Held by company).\n- **Alok (4k)**: Failed Call. Shares Active.\n    - 4,000 shares are 'Subscribed but not fully paid'.\n- **Subscribed & Fully Paid**: Total (80k) - Manish (5k) - Alok (4k) + Reissued (3k) = **74,000 Shares**.\n    - 74,000 × 10 = 7,40,000.\n- **Subscribed NOT Fully Paid (Alok)**: 4,000 shares.\n    - Called 10. Paid 8 (App 3 + Allot 5). Arrears 2.\n    - 40,000 - 8,000 = 32,000.\n- **Share Forfeiture A/c**: Manish's 2,000 unreissued shares.\n    - Amt Received: Application only (₹3). (Premium on allotment not paid).\n    - 2,000 × 3 = 6,000.\n- **Total Capital**: 7,40,000 + 32,000 + 6,000 = **7,78,000**."
  },
  {
    id: 'ch3-23-24-q27',
    year: '2023-24',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. 'Freedom to Choose of method of depreciation' refers to which limitation of financial statement analysis.\n(a) Historical analysis.\n(b) Qualitative aspect ignored.\n(c) Not free from bias.\n(d) Ignore Price level Changes.",
    markingScheme: "(c) Not free from bias.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Concept**: Financial statements involve judgments (depreciation method, inventory valuation).\n*   **Limitation**: When management has the freedom to choose between Example A (SLM) and Example B (WDV), the decision might be influenced by a desire to show higher/lower profits. This makes statements **'Not free from bias'**."
  },
  {
    id: 'ch3-23-24-q31',
    year: '2023-24',
    type: 'Classification (3 Marks)',
    marks: 3,
    question: "31. Classify the following items under Major heads and Sub heads (If any) in the balance sheet of a Company as per schedule III of the Companies Act 2013.\ni. Loose Tools\nii. Loan repayable on demand\niii. Provision for Retirement benefits\niv. Pre-paid Insurance\nv. Capital advances\nvi. Shares in Listed Companies",
    markingScheme: "**Classification Table**\n\n| Item | Heading | Sub-heading |\n|---|---|---|\n| i. Loose Tools | Current Assets | Inventories |\n| ii. Loan repayable on demand | Current Liabilities | Short Term Borrowings |\n| iii. Provision for Retirement benefits | Non-Current Liabilities | Long Term Provisions |\n| iv. Pre-paid Insurance | Current Assets | Other Current Assets |\n| v. Capital advances | Non-Current Assets | Long Term Loans and Advances |\n| vi. Shares in Listed Companies | Non-Current Assets | Non-Current Investments |",
    aiExplanation: "**AI Detailed Explanation**:\n- **Loose Tools**: Classified as Inventory.\n- **Loan on Demand**: Payable immediately -> Short Term Borrowing.\n- **Retirement**: Long term liability -> Long Term Provision.\n- **Pre-paid Insurance**: Asset -> Other Current Asset.\n- **Capital Advance**: Advance for fixed assets -> Long Term Loan/Advance.\n- **Shares**: Investment held -> Non-Current Investment."
  },
  // --- 2022-23 ---
  {
    id: 'ch3-22-23-q19',
    year: '2022-23',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "19. Anthony Ltd. issued 20,000, 9% Debentures of ₹ 100 each at 10% discount to Mithoo Ltd. from whom Assets of ₹ 23,50,000 and Liabilities of ₹ 6,00,000 were taken over. Pass entries in the books of Anthony Ltd. if these debentures were to be redeemed at 5% premium.",
    markingScheme: "**Journal Entries in the books of Anthony Ltd.**\n\n| Date | Particulars | L.F. | Dr. (₹) | Cr. (₹) |\n|---|---|---|---|---|\n| (i) | Assets A/c ... Dr. | | 23,50,000 | |\n| | Goodwill A/c (Bal. Fig) ... Dr. | | 50,000 | |\n| | To Liabilities A/c | | | 6,00,000 |\n| | To Mithoo Ltd. | | | 18,00,000 |\n| | *(Business purchased of Mithoo Ltd. comprising of Assets and Liabilities)* | | | |\n| (ii) | Mithoo Ltd. ... Dr. | | 18,00,000 | |\n| | Loss on Issue of Debentures A/c ... Dr. | | 3,00,000 | |\n| | To 9% Debentures A/c | | | 20,00,000 |\n| | To Premium on Redemption of Debentures A/c | | | 1,00,000 |\n| | *(Debentures issued to Mithoo Ltd. at Discount, redeemable at Premium)* | | | |",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Purchase Consideration**: Net Assets = Assets (23.5L) - Liabilities (6L) = 17.5L. Agreed Value (Mithoo Ltd) is not given, but Debentures issued = 20,000 * 100 * 90% = 18L. Since Purchase Consideration (18L) > Net Assets (17.5L), the difference (50k) is **Goodwill**.\n*   **Issue of Debentures**: Issued at 10% discount (90), Redeemable at 5% premium (105). Loss per debenture = Discount (10) + Premium (5) = 15. Total Loss = 20,000 * 15 = 3,00,000."
  },
  {
    id: 'ch3-22-23-q21',
    year: '2022-23',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "21. Altaur Ltd. was registered with an authorised Capital of ₹ 4,00,00,000 divided in 25,00,000 Equity Shares of ₹ 10 each and 1,50,000, 9% Preference Shares of ₹ 100 each. The company issued 8,00,000 Equity Shares for public subscription at 20% premium, payable ₹ 3 on application; ₹ 7 on allotment (including premium) and balance on call. Public had applied for 10,00,000 shares. Excess Applications were sent letters of regret.\n\nAll the dues on allotment received except on 15,000 shares held by Sanju. Another shareholder Rocky paid his call dues along with allotment on his holding of 25,000 shares. You are required to prepare the Balance Sheet of the company as per Schedule III of Companies Act, 2013, showing Share Capital balance and also prepare Notes to Accounts.",
    markingScheme: "**Balance Sheet (Extract) as at ...**\n\n| Particulars | Note No. | Current Year (₹) |\n|---|---|---|\n| **I. EQUITY AND LIABILITIES** | | |\n| **1. Shareholders’ Funds** | | |\n| (a) Share Capital | 1 | **63,25,000** |\n\n**Notes to Accounts**\n\n| Note No | Particulars | Amount (₹) |\n|---|---|---|\n| **1** | **Share Capital** | |\n| | **Authorised Share Capital** | |\n| | 25,00,000 Equity Shares @ ₹ 10 each | 2,50,00,000 |\n| | 1,50,000 9% Preference Shares @ ₹ 100 each | 1,50,00,000 |\n| | *Total* | **4,00,00,000** |\n| | **Issued Share Capital** | |\n| | 8,00,000 Equity Shares @ ₹ 10 each | 80,00,000 |\n| | **Subscribed Share Capital** | |\n| | (i) Subscribed and Fully Paid up | Nil |\n| | (ii) Subscribed but not Fully Paid up | |\n| | 8,00,000 Equity Shares @ ₹ 8 each (called up) | 64,00,000 |\n| | Less: Calls in Arrears (15,000 x 5) | (75,000) |\n| | *Total* | **63,25,000** |",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Called Up Capital**: The question says \"balance on call\". It implies the call has NOT been made yet (or at least strictly speaking, the Balance Sheet is asked at the allotment stage or before final call is *received* from everyone? No, Sanju failed allotment. Rocky paid call *in advance*. Usually, this implies we just record up to allotment called up, or if call is not made, it's not part of called up capital. But wait, \"balance on call\". App(3) + Allot(5+2=7). Total Face Value = 10. So Call = 10 - 3 - 5 = ₹2.\n*   **Notes Config**: The solution shows shares as 'Subscribed but not fully paid up' because the final call hasn't been made/called (Shares are ₹8 called up: App 3 + Allot 5). \n*   **Calculation**: 8,00,000 shares * ₹8 called up = 64,00,000.\n*   **Less Arrears**: Sanju failed allotment (₹5 face value). 15,000 * 5 = 75,000.\n*   **Total**: 64,00,000 - 75,000 = 63,25,000.\n*   *Note*: Calls in Advance (Rocky) is shown under Current Liabilities, not Share Capital."
  },
  {
    id: 'ch3-22-23-q27',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. Financial statements are prepared on certain basic assumptions (pre-requisites) known as___________.\n(a) Provision of Companies Act, 2013\n(b) Accounting Standards\n(c) Postulates\n(d) Basis of Accounting",
    markingScheme: "(c) Postulates",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Definition**: Postulates are the basic assumptions or prerequisites on which financial statements are based (e.g., Going Concern, Accrual).\n*   **Context**: While specific rules come from Acts and Standards, the underlying *theoretical assumptions* are called accounting postulates."
  },
  {
    id: 'ch3-22-23-q31',
    year: '2022-23',
    type: 'Classification (3 Marks)',
    marks: 3,
    question: "31. Classify the following items under Major heads and Sub-head (if any) in the Balance Sheet of a Company as per schedule III of the Companies Act 2013.\n(i) Current maturities of long term debts\n(ii) Furniture and Fixtures\n(iii) Provision for Warranties\n(iv) Income received in advance\n(v) Capital Advances\n(vi) Advances recoverable in cash within the operation cycle",
    markingScheme: "**Classification Table**\n\n| Item | Heading | Sub-heading |\n|---|---|---|\n| (i) Current maturities of long term debts | Current Liabilities | Short Term Borrowings |\n| (ii) Furniture and Fixtures | Non-Current Assets | Property, Plant and Equipment and Intangible Assets (PPE) |\n| (iii) Provision for Warranties | Non-Current Liabilities | Long Term Provisions |\n| (iv) Income received in advance | Current Liabilities | Other Current Liabilities |\n| (v) Capital Advances | Non-Current Assets | Long Term Loans and Advances |\n| (vi) Advances recoverable in cash within the operation cycle | Current Assets | Short Term Loans and Advances |",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Current Maturities**: Debt due within 12 months -> Short Term Borrowing.\n*   **Furniture**: Tangible Asset -> PPE.\n*   **Warranties**: Usually > 12 months -> Long Term Provision.\n*   **Income Advance**: Liability to perform service -> Other Current Liability.\n*   **Capital Advances**: Money paid for fixed assets -> Long Term Loan/Advance.\n*   **Advances (Operating Cycle)**: Short term asset -> Short Term Loans/Advances."
  },
];

export const CH3_CHAPTER: any = {
  id: 'ch3',
  title: 'Chapter 3: Financial Statements of a Company',
  theory: CH3_THEORY,
  flashcards: CH3_FLASHCARDS,
  mindMap: CH3_MINDMAP,
  cheatSheet: CH3_CHEATSHEET,
  sqps: CH3_SQPS,
  weightage: '8-10 Marks'
};
