
import { TheoryTopic } from '../types';

export const CH3_THEORY: TheoryTopic[] = [
  {
    id: 'intro',
    title: '1. Meaning & Nature of Financial Statements',
    content: 'Financial statements are formal annual reports through which management communicates financial information to stakeholders. They are the end product of the accounting process.',
    subtopics: [
      {
        title: 'Meaning',
        description: 'Chronologically recorded facts expressed in monetary terms, revealing financial position (Balance Sheet) and results (P&L).',
      },
      {
        title: 'Four Attributes of Nature',
        description: 'The foundation of how statements are prepared.',
        points: [
          'Recorded Facts: Based on historical cost recorded in books.',
          'Accounting Conventions: Following rules like Valuing inventory at cost or market price (whichever is lower).',
          'Postulates: Basic assumptions like Going Concern, Money Measurement.',
          'Personal Judgments: Estimating useful life of assets or provision for doubtful debts.'
        ],
        illustration: {
          type: 'table',
          content: [
            ['Attribute', 'Impact on Statements'],
            ['Recorded Facts', 'Assets shown at cost price, not market price.'],
            ['Conventions', 'Profit is not anticipated, but all losses are provided for.'],
            ['Judgments', 'Depreciation depends on the method chosen (SLM vs WDV).']
          ],
          caption: 'Visual breakdown of the Nature of FS'
        }
      }
    ]
  },
  {
    id: 'objectives-limitations',
    title: '2. Objectives & Limitations',
    content: 'While vital for decision-making, financial statements have inherent weaknesses due to their historical nature.',
    subtopics: [
      {
        title: 'Core Objectives',
        description: 'Primary goals of preparation.',
        points: [
          'Provide information about economic resources & obligations.',
          'Disclose earning capacity and cash flows.',
          'Help users judge management effectiveness.',
          'Inform about business activities affecting society.'
        ]
      },
      {
        title: 'Critical Limitations',
        description: 'Why FS might be misleading if used in isolation.',
        points: [
          'Historical Cost: Ignore current market values and inflation.',
          'Qualitative Elements: Ignore labor relations, management quality, and brand loyalty.',
          'Window Dressing: Management may manipulate data to show a better position.',
          'Personal Bias: Methods of depreciation/valuation are subjective.'
        ]
      }
    ]
  },
  {
    id: 'balance-sheet-liabilities',
    title: '3. Balance Sheet: Equity & Liabilities',
    content: 'As per Schedule III Part I of Companies Act 2013, the Balance Sheet follows a vertical format.',
    subtopics: [
      {
        title: 'Major Head: Shareholders\' Funds',
        description: 'The owners\' stake in the company.',
        points: [
          'Share Capital: Authorized, Issued, Subscribed.',
          'Reserves & Surplus: Securities Premium, CRR, DRR, General Reserve, P&L Balance.',
          'Money received against share warrants.'
        ]
      },
      {
        title: 'Major Head: Non-Current Liabilities',
        description: 'Debts payable after 12 months or the operating cycle.',
        points: [
          'Long-term Borrowings: Debentures, Public Deposits, Bonds.',
          'Deferred Tax Liabilities (Net).',
          'Long-term Provisions: Provision for Gratuity/Warranties.'
        ]
      },
      {
        title: 'Major Head: Current Liabilities',
        description: 'Obligations due within 12 months or one operating cycle.',
        illustration: {
          type: 'flow',
          content: 'Short-term Borrowings → Trade Payables → Other Current Liabilities → Short-term Provisions',
          caption: 'Classification of Current Liabilities'
        },
        points: [
          'Short-term Borrowings: Bank Overdraft, Cash Credit.',
          'Trade Payables: Bills Payable and Sundry Creditors.',
          'Other Current Liabilities: Interest accrued, Unpaid Dividend, Current maturities of L.T. Debt.'
        ]
      }
    ]
  },
  {
    id: 'balance-sheet-assets',
    title: '4. Balance Sheet: Assets',
    content: 'Assets are classified based on their liquidity and usage intent.',
    subtopics: [
      {
        title: 'Non-Current Assets',
        description: 'Held for use in production, not for resale in normal course.',
        points: [
          'Property, Plant & Equipment (Tangible): Land, Building, Furniture.',
          'Intangible Assets: Goodwill, Patents, Trademarks, Brands.',
          'Capital Work-in-progress: Tangible assets under construction.',
          'Non-Current Investments: Shares/Debentures held for > 1 year.'
        ]
      },
      {
        title: 'Current Assets',
        description: 'Assets expected to be realized in cash within 12 months.',
        illustration: {
          type: 'table',
          content: [
            ['Sub-head', 'Typical Items Included'],
            ['Inventories', 'Raw Materials, WIP, Finished Goods, Stock-in-trade, Loose Tools.'],
            ['Trade Receivables', 'Sundry Debtors, Bills Receivable.'],
            ['Cash & Equivalents', 'Cash in hand, Bank balance, Cheques/Drafts on hand.'],
            ['Short-term Loans', 'Loans to employees/subsidiaries repayable within 1 year.']
          ],
          caption: 'Current Asset Breakdown'
        }
      }
    ]
  }
];

export const CH4_THEORY: TheoryTopic[] = [
  {
    id: 'analysis-meaning',
    title: '1. Meaning & Process',
    content: 'Financial statement analysis is the systematic process of identifying the financial strengths and weaknesses of the firm by establishing relationships between items.',
    subtopics: [
      {
        title: 'Definition',
        description: 'Simplifying data and interpreting relationships to help stakeholders make informed economic decisions.',
      },
      {
        title: 'The Analytical Process',
        description: 'Four logical steps: Rearrangement, Comparison, Analysis, and Interpretation.',
        illustration: {
          type: 'flow',
          content: 'Rearrangement → Comparison → Analysis → Interpretation',
          caption: 'The workflow of Financial Analysis'
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
        title: 'Stakeholder Analysis',
        description: 'Who uses the analysis and why?',
        illustration: {
          type: 'table',
          content: [
            ['User', 'Primary Interest'],
            ['Finance Manager', 'Financial planning and control.'],
            ['Top Management', 'Decision-making and self-evaluation.'],
            ['Trade Payables', 'Short-term liquidity.'],
            ['Lenders', 'Long-term solvency.'],
            ['Investors', 'Safety of capital and ROI.'],
            ['Labour Unions', 'Negotiating wages.']
          ],
          caption: 'Users of Financial Statement Analysis'
        }
      }
    ]
  },
  {
    id: 'objectives-efficiency',
    title: '3. Objectives of Analysis',
    content: 'Goals targeted during the analysis process.',
    subtopics: [
      {
        title: 'Key Objectives',
        description: 'Measuring business health.',
        points: [
          'Assessing Profitability: Measuring earning capacity.',
          'Assessing Solvency: Ability to meet long-term & short-term debts.',
          'Assessing Managerial Efficiency: Resource utilization.',
          'Forecasting and Budgeting: Future projections.',
          'Inter-firm and Intra-firm Comparisons.'
        ]
      }
    ]
  },
  {
    id: 'types-analysis',
    title: '4. Types of Financial Analysis',
    content: 'Classified based on material used and methodology.',
    subtopics: [
      {
        title: 'By User: External vs Internal',
        description: 'External (Investors, Lenders) vs Internal (Management).',
      },
      {
        title: 'Modus Operandi: Horizontal vs Vertical',
        description: 'Horizontal (Dynamic) vs Vertical (Static).',
        illustration: {
          type: 'table',
          content: [
            ['Basis', 'Horizontal (Dynamic)', 'Vertical (Static)'],
            ['Period', 'Multiple years', 'Single year'],
            ['Nature', 'Time Series Analysis', 'Cross-sectional Analysis'],
            ['Tool', 'Comparative Statements', 'Common Size Statements']
          ],
          caption: 'Horizontal vs Vertical Comparison'
        }
      }
    ]
  },
  {
    id: 'comparative-statements',
    title: '5. Comparative Statements (Absolute & % Change)',
    content: 'Comparing figures of two or more years side-by-side to find trends.',
    subtopics: [
      {
        title: 'Illustration 1: Balance Sheet (Alpha Ltd.)',
        description: 'Task: Prepare Comparative Balance Sheet showing absolute and percentage changes.',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', 'Abs. Change (₹)', '% Change'],
            ['Share Capital', '10,00,000', '15,00,000', '+5,00,000', '50.00%'],
            ['Reserves & Surplus', '2,00,000', '3,00,000', '+1,00,000', '50.00%'],
            ['Long-term Loans', '5,00,000', '8,00,000', '+3,00,000', '60.00%'],
            ['Current Liabilities', '3,00,000', '4,00,000', '+1,00,000', '33.33%']
          ],
          caption: 'Comparative Balance Sheet of Alpha Ltd. (Page 176)'
        }
      },
      {
        title: 'Illustration 2: Balance Sheet (Beta Ltd.)',
        description: 'Task: Detailed comparison of Equity and Assets across two periods.',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', 'Mar 31, 2023', 'Mar 31, 2024', 'Change', '% Change'],
            ['Equity Share Cap', '6,00,000', '8,00,000', '+2,00,000', '33.33%'],
            ['Long-term Borrowings', '3,00,000', '4,00,000', '+1,00,000', '33.33%'],
            ['Fixed Assets', '5,00,000', '7,00,000', '+2,00,000', '40.00%'],
            ['Trade Receivables', '2,00,000', '3,00,000', '+1,00,000', '50.00%']
          ],
          caption: 'Comparative Balance Sheet of Beta Ltd. (Page 178)'
        }
      },
      {
        title: 'Illustration 3: Statement of P&L (X Ltd.)',
        description: 'Analyzing Revenue from Operations and Other Incomes.',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', 'Abs. Change (₹)', '% Change'],
            ['Revenue from Ops', '20,00,000', '25,00,000', '+5,00,000', '25.00%'],
            ['Other Income', '1,00,000', '1,50,000', '+50,000', '50.00%'],
            ['Total Revenue', '21,00,000', '26,50,000', '+5,50,000', '26.19%'],
            ['Profit After Tax', '4,20,000', '5,95,000', '+1,75,000', '41.67%']
          ],
          caption: 'Comparative Statement of P&L of X Ltd. (Page 180)'
        }
      },
      {
        title: 'Illustration 4: Statement of P&L (Y Ltd.)',
        description: 'Includes Purchase of Stock in Trade and Change in Inventories.',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', 'Abs. Change', '% Change'],
            ['Revenue from Ops', '10,00,000', '15,00,000', '+5,00,000', '50%'],
            ['Purchase of Stock', '6,00,000', '8,00,000', '+2,00,000', '33.3%'],
            ['Change in Inventory', '50,000', '60,000', '+10,000', '20%'],
            ['Other Expenses', '40,000', '50,000', '+10,000', '25%']
          ],
          caption: 'Comparative Statement of P&L of Y Ltd. (Page 181)'
        }
      }
    ]
  },
  {
    id: 'common-size',
    title: '6. Common Size Statements (% of Base)',
    content: 'Each item expressed as a % of a common base (Total Assets or Revenue).',
    subtopics: [
      {
        title: 'Illustration 5: Balance Sheet (Global Ltd.)',
        description: 'Base is Total Assets (100%). Comparison of structural % across years.',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', '% Total (23)', '% Total (24)'],
            ['Share Capital', '5,00,000', '6,00,000', '50.00%', '48.00%'],
            ['Fixed Assets', '6,00,000', '8,00,000', '60.00%', '64.00%'],
            ['Total Assets', '10,00,000', '12,50,000', '100.00%', '100.00%']
          ],
          caption: 'Common Size Balance Sheet of Global Ltd. (Page 183)'
        }
      },
      {
        title: 'Illustration 6: Statement of P&L (Star Ltd.)',
        description: 'Base is Revenue from Operations (100%).',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2023 (₹)', '2024 (₹)', '% Rev (23)', '% Rev (24)'],
            ['Revenue from Ops', '10,00,000', '15,00,000', '100.00%', '100.00%'],
            ['Employee Exp.', '1,00,000', '2,00,000', '10.00%', '13.33%'],
            ['Other Income', '50,000', '75,000', '5.00%', '5.00%']
          ],
          caption: 'Common Size Statement of P&L of Star Ltd. (Page 185)'
        }
      }
    ]
  },
  {
    id: 'trend-analysis-theory',
    title: '7. Trend Analysis',
    content: 'Long-term time series analysis where a base year is selected as 100.',
    subtopics: [
      {
        title: 'Illustration 7: Trend Percentages',
        description: 'Expressing figures as a percentage of a base year (2013-14).',
        illustration: {
          type: 'table',
          content: [
            ['Particulars', '2013-14 (Base)', '2014-15', '2015-16', 'Trend% (15)', 'Trend% (16)'],
            ['Revenue (₹)', '5,00,000', '6,00,000', '7,50,000', '120%', '150%'],
            ['Expenses (₹)', '4,00,000', '4,40,000', '5,00,000', '110%', '125%'],
            ['PBT (₹)', '1,00,000', '1,60,000', '2,50,000', '160%', '250%']
          ],
          caption: 'Illustration 7: Trend Percentages with 2013-14 as Base Year (Page 187)'
        }
      }
    ]
  },
  {
    id: 'limitations-ch4',
    title: '8. Limitations of Analysis',
    content: 'Analysis is only as good as the underlying data.',
    subtopics: [
      {
        title: 'Key Limitations',
        description: 'Factors that may reduce the reliability of analysis.',
        points: [
          'Historical Nature: Does not reflect current market realization.',
          'Ignores Price Level Changes: Inflation effects are hidden.',
          'Qualitative Aspects Ignored: Brand value and labor skills missing.',
          'Window Dressing: Manipulation for better appearance.',
          'Variations in Practices: Different methods (e.g., SLM vs WDV) make comparison difficult.'
        ]
      }
    ]
  }
];
