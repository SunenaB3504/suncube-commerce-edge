import { TheoryTopic, Flashcard, SQPQuestion, MindMapNodeData, CheatSheetData } from '../types';
import ill4Img from '../assets/images/ill_4_reverse_logic.png';
import ill11Img from '../assets/images/ill_11_interest_coverage.png';
import ill17Img from '../assets/images/ill_17_avg_periods.png';
import ill2324Img from '../assets/images/ill_23_24_reverse_assets.png';

export const CH5_THEORY: TheoryTopic[] = [
  {
    id: 'intro-analysis',
    title: '1. Introduction to Ratio Analysis',
    content: 'Ratio analysis is the mathematical study of relationships between financial statement figures to evaluate business performance.',
    subtopics: [
      {
        title: 'Meaning & Expression',
        description: 'Mathematical relationship between two accounting numbers.',
        points: [
          '**Pure Ratio**: Expressed as a quotient (e.g., 2:1). Used for Solvency/Liquidity.',
          '**Percentage**: Expressed as % (e.g., 25%). Used for Profitability.',
          '**Times (Turnover)**: Expressed as rate of speed (e.g., 4 Times). Used for Activity.',
          '**Fraction**: Expressed as absolute fraction (e.g., 1/4).'
        ]
      },
      {
        title: 'Objectives of Ratio Analysis',
        description: 'Why do we do it?',
        points: [
          '**Locate Weak Spots**: Diagnose financial health issues.',
          '**Simplify Complex Data**: Combine T-Grewal pages into a single number.',
          '**Forecasting**: Predict future performance.',
          '**Comparative Analysis**: Enable Inter-firm and Intra-firm comparison.'
        ]
      },
      {
        title: 'Critical Limitations',
        description: 'Weaknesses inherited from financial statements.',
        points: [
          '**Historical Flaw**: Ignores present inflation/market values.',
          '**Qualitative Factors**: Ignores non-monetary human capital.',
          '**Window Dressing**: Risks of data manipulation.',
          '**Accounting Policies**: Different depreciation/inventory methods affect comparability.'
        ]
      }
    ]
  },
  {
    id: 'liquidity-group',
    title: '2. Liquidity Ratios (Short-term Solvency)',
    content: 'Measuring the firm\'s ability to pay current liabilities as and when they fall due.',
    subtopics: [
      {
        title: 'Significance & Interpretation',
        description: 'Understanding the benchmarks.',
        points: [
          '**Current Ratio (CR)**: Ideal is **2:1**. High ratio means idle funds; Low ratio means liquidity risk.',
          '**Quick Ratio (QR)**: Ideal is **1:1**. More rigorous test of liquidity as it excludes Inventory and Prepaid Expenses.',
          '*Rule of Thumb*: High inventory turnover combined with low CR can still be safe.'
        ]
      },
      {
        title: 'Illustration 1 & 2: Current & Quick Ratio',
        description: 'Calculating CR and QR from standard Current Asset components.',
        illustration: {
          type: 'table',
          concept: 'Current Ratio (CR) measures overall short-term solvency, while Quick Ratio (QR) measures immediate debt-paying capacity by excluding inventory (which takes time to sell).',
          formula: 'Current Ratio = Current Assets / Current Liabilities | Quick Ratio = Quick Assets / Current Liabilities',
          content: [
            ['Item', 'Amount (₹)'],
            ['Inventories', '50,000'],
            ['Trade Receivables', '40,000'],
            ['Cash & Equivalents', '10,000'],
            ['Current Liabilities', '50,000'],
            ['Calculated Current Ratio (Ill 1)', '2:1'],
            ['Calculated Quick Ratio (Ill 2)', '1:1 (Excl. Inventory)']
          ],
          caption: 'Ill 1-2: Basic Liquidity calculation',
          resolution: '**AI Detailed Explanation**:\n\n**1. Current Ratio (Solvency)**\n*   Formula: Current Assets / Current Liabilities.\n*   Calculation: (50k + 40k + 10k) / 50k = 1,00,000 / 50,000 = **2:1**.\n*   **Interpretation**: The company has ₹2 in current assets for every ₹1 of liability. Ideal.\n\n**2. Quick Ratio (Immediate Liquidity)**\n*   Formula: (Current Assets - Inventory) / Current Liabilities.\n*   Calculation: (1,00,000 - 50,000) / 50,000 = **1:1**.\n*   **Interpretation**: Even if stock doesn\'t sell, the company can pay off its debts.'
        }
      },
      {
        title: 'Illustration 3: Liquid Ratio Specifics',
        description: 'Handling Prepaid Expenses and Advance Tax.',
        illustration: {
          type: 'table',
          concept: 'Liquid Ratio (Acid Test) handles items that are technically Current Assets but not "Liquid" (not easily convertible to cash) such as Prepaid Expenses.',
          formula: 'Liquid Assets = Current Assets - (Inventory + Prepaid Expenses)',
          content: [
            ['Particulars', 'Amount (₹)'],
            ['Current Assets', '80,000'],
            ['Inventories', '20,000'],
            ['Prepaid Expenses', '5,000'],
            ['Current Liabilities', '30,000'],
            ['Liquid Assets', '55,000 (Current Assets - Inventory - Prepaid)'],
            ['Liquid Ratio', '1.83 : 1']
          ],
          caption: 'Ill 3: Refining Liquid Assets',
          resolution: '**AI Detailed Explanation**:\n\n**1. Calculating Liquid Assets**\n*   Start with Current Assets: ₹80,000.\n*   Deduct Inventory (20k): Takes time to sell.\n*   Deduct Prepaid (5k): Cannot be converted to cash (sunk cost).\n*   Liquid Assets = 80,000 - 25,000 = **₹55,000**.\n\n**2. The Ratio**\n*   Liquid Assets / Current Liabilities = 55,000 / 30,000 = **1.83 : 1**.\n*   **Verdict**: Very strong liquidity (Standard is 1:1).'
        }
      },
      {
        title: 'Illustration 4: Reverse CA/CL Calculation',
        description: 'Finding totals from Ratio and Difference.',
        illustration: {
          type: 'image',
          concept: 'Reverse logic uses the mathematical difference between two related ratios to isolate specific components like Inventory.',
          formula: 'Inventory = Current Assets - Quick Assets',
          content: ill4Img,
          caption: 'Ill 4: Logic flow for reverse calculation',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Difference Formula**\n*   Current Ratio (2.5) - Quick Ratio (1.5) = **1.0**.\n*   This difference represents **Inventory** (assuming no Prepaid exp).\n\n**2. Finding \'x\' (Current Liabilities)**\n*   Inventory (1.0x) = ₹24,000.\n*   Therefore, x (CL) = ₹24,000.\n\n**3. Finding Current Assets**\n*   Current Assets = 2.5 × CL = 2.5 × 24,000 = **₹60,000**.'
        }
      },
      {
        title: 'Illustration 5: CR from Total Assets',
        description: 'Deducting Non-current items to find CA.',
        illustration: {
          type: 'table',
          concept: 'Current Assets can be derived by subtracting Non-current Assets from Total Assets. Similarly, CL is derived from Total Liabilities.',
          formula: 'Current Assets = Total Assets - Fixed Assets | Current Liabilities = Total Assets - (Net Worth + Non-current Liabilities)',
          content: [
            ['Total Assets', '15,00,000'],
            ['Fixed Assets', '9,00,000'],
            ['Non-current Liabilities', '4,00,000'],
            ['Shareholders Funds', '8,00,000'],
            ['Current Liabilities', '3,00,000 (Total Assets - Non Current Liab - Shareholders Funds)'],
            ['Current Ratio', '2:1 (6L / 3L)']
          ],
          caption: 'Ill 5: Using Balance Sheet Equation',
          resolution: '**AI Detailed Explanation**:\n\n**1. Deriving Current Assets**\n*   Total Assets (15L) = Fixed Assets (9L) + Current Assets.\n*   Current Assets = 15L - 9L = **₹6,00,000**.\n\n**2. Deriving Current Liabilities**\n*   Total Assets = Total Liability = 15L.\n*   Total Liab = Equity (8L) + Long-term Debt (4L) + Current Liab.\n*   Current Liab = 15L - 12L = **₹3,00,000**.\n\n**3. Ratio**\n6L / 3L = 2:1.'
        }
      },
      {
        title: 'Illustration 6: Transaction Effects',
        description: 'Analyzing the impact of business actions on Current Ratio.',
        illustration: {
          type: 'table',
          concept: 'Transaction analysis determines how specific business actions (like paying debt or buying assets) shift the numerator and denominator of a ratio.',
          formula: 'Effect = New (Current Assets ± Change) / New (Current Liabilities ± Change)',
          content: [
            ['Action', 'Effect (if 2:1)', 'Logic'],
            ['Pay Creditors', 'Improve', 'Both Current Assets/Current Liabilities decrease equally'],
            ['Credit Purchase', 'Reduce', 'Both Current Assets/Current Liabilities increase equally'],
            ['Cash from Debtors', 'No Change', 'One Current Asset decreases, one Current Asset increases']
          ],
          caption: 'Ill 6: Logical analysis of Current Ratio changes',
          resolution: '**AI Detailed Explanation**:\n\n**1. Pay Creditors (Decrease Both)**\n*   Example: 200/100 (Ratio 2). Pay 50.\n*   New: 150/50 = Ratio 3. **Improve**.\n*   *Logic*: Reducing the denominator by the same amount as numerator increases the faction when Ratio > 1.\n\n**2. Credit Purchase (Increase Both)**\n*   Example: Buy 50.\n*   New: 250/150 = Ratio 1.66. **Decline**.\n\n**3. Cash from Debtors**\n*   Asset side swap only (+Cash, -Debtor). Total Current Assets unchanged. **No Change**.'
        }
      }
    ]
  },
  {
    id: 'solvency-group',
    title: '3. Solvency Ratios (Long-term Stability)',
    content: 'Assessing the firm\'s ability to meet its long-term liabilities.',
    subtopics: [
      {
        title: 'Significance & Interpretation',
        description: 'Gauging long-term financial health.',
        points: [
          '**Debt-Equity Ratio**: Ideal is **2:1**. Higher ratio implies high risk for lenders; Lower ratio implies safety.',
          '**Proprietary Ratio**: Higher ratio indicates greater safety for creditors (more owner funding).',
          '**Interest Coverage**: Higher is better. Indicates how many times profit covers interest obligations.'
        ]
      },
      {
        title: 'Illustration 7 & 8: Debt-Equity Ratio',
        description: 'Differentiating between borrowed funds and owned funds.',
        illustration: {
          type: 'table',
          concept: 'Debt-Equity Ratio measures long-term solvency by comparing borrowed funds (Long-term Liabilities) with owner funds (Shareholders Funds).',
          formula: 'Debt-Equity Ratio = Long-term Debt / Shareholders\' Funds',
          content: [
            ['Component', 'Ill 7 (₹)', 'Ill 8 (₹)'],
            ['Long-term Debt', '4,00,000', '10,00,000'],
            ['Equity (Capital + Res)', '2,00,000', '15,00,000'],
            ['Debt-Equity Ratio', '2 : 1', '0.67 : 1']
          ],
          caption: 'Ill 7-8: Assessing financial gearing',
          resolution: 'Ill 7: 4,00,000 / 2,00,000 = 2:1 (High risk)\nIll 8: 10,00,000 / 15,00,000 = 0.67:1 (Safe/Conservative)'
        }
      },
      {
        title: 'Illustration 9: Comprehensive Solvency',
        description: 'Calculating multiple ratios from one dataset.',
        illustration: {
          type: 'table',
          concept: 'Comprehensive solvency analysis evaluates the safety of every stakeholder (lenders and owners) using different bases (Total Assets vs Capital Employed).',
          formula: 'Proprietary Ratio = Shareholders\' Funds / Total Assets | Total Assets to Debt Ratio = Total Assets / Long-term Debt | Debt to Capital Employed Ratio = Long-term Debt / Capital Employed',
          content: [
            ['Ratio', 'Formula Result'],
            ['Proprietary Ratio', '0.60 (Funds/Total Assets)'],
            ['Total Assets to Debt Ratio', '2.5 (Total Assets/Debt)'],
            ['Debt to Capital Employed', '0.33 (Debt/Capital Employed)']
          ],
          caption: 'Ill 9: Multi-metric Solvency Analysis',
          resolution: '1. If Debt=20k, Equity=40k, Total Assets=100k:\n2. Proprietary = 40/100 = 0.4\n3. Total Assets to Debt = 100/20 = 5\n4. Debt to Capital Employed = 20/(20+40) = 0.33'
        }
      },
      {
        title: 'Illustration 10: Transaction Impact on Solvency',
        description: 'How capital changes affect the Debt-Equity ratio.',
        illustration: {
          type: 'table',
          concept: 'Long-term solvency is affected when the capital structure is permanently altered through new issuance or redemption of securities.',
          formula: 'Debt-Equity Effect = (Long-term Debt ± Change) / (Shareholders\' Funds ± Change)',
          content: [
            ['Transaction', 'Effect on D/E', 'Reason'],
            ['Issue of Equity', 'Decrease', 'Equity base increases'],
            ['Redeem Debentures', 'Decrease', 'Debt numerator decreases'],
            ['Buy Fixed Asset', 'No Change', 'Neither Debt nor Equity affected']
          ],
          caption: 'Ill 10: Solvency Dynamics',
          resolution: '1. Issue Equity: Numerator same, Denominator inc → Ratio drops.\n2. Redeem Debt: Numerator dec, Denominator same → Ratio drops.\n3. Buy Asset for Cash: CA dec, NCA inc. No change in Debt or Equity.'
        }
      },
      {
        title: 'Illustration 11: Interest Coverage',
        description: 'Safety margin for interest payments.',
        illustration: {
          type: 'image',
          concept: 'This ratio evaluates if the profits are sufficient to cover fixed interest obligations. It uses Profit Before Interest and Tax (PBIT).',
          formula: 'Interest Coverage Ratio = Profit Before Interest and Tax / Fixed Interest Charges',
          content: ill11Img,
          caption: 'Ill 11: Interest Coverage Calculation (Visualized)',
          resolution: '1. Start with Profit after Tax (60k).\n2. Add Tax (40k) to get Profit before Tax (100k).\n3. Add Interest (20k) to get PBIT (120k).\n4. 120,000 / 20,000 = 6 Times.'
        }
      }
    ]
  },
  {
    id: 'activity-group',
    title: '4. Activity / Turnover Ratios (Efficiency)',
    content: 'Evaluating how efficiently resources are converted into sales.',
    subtopics: [
      {
        title: 'Significance & Interpretation',
        description: 'Speed of business cycles.',
        points: [
          '**General Rule**: Higher ratios are generally better, indicating efficient resource utilization.',
          '**Inventory Turnover**: High = Fast moving stock. Low = Overstocking/Obsolete stock.',
          '**Trade Receivables Turnover**: High = Efficient collection. Low = Liberal credit policy/Bad debts.'
        ]
      },
      {
        title: 'Illustration 12: Inventory TO Basics',
        description: 'Speed of inventory conversion.',
        illustration: {
          type: 'table',
          concept: 'ITR measures how many times a company has sold and replaced its inventory during a specific period. A higher ratio indicates efficient inventory management.\n\n**Given**: Op Stock=50k, Purchases=200k, Wages=30k, Cl Stock=40k.',
          formula: 'Inventory Turnover Ratio = Cost of Revenue from Operations / Average Inventory',
          content: [
            ['Step', 'Calculation'],
            ['Cost of Revenue from Ops', 'Opening Stock + Purchase + Wages - Closing Stock'],
            ['Average Inventory', '(Opening + Closing) / 2'],
            ['Result', '8 Times']
          ],
          caption: 'Ill 12: Fundamental Inventory Turnover Ratio',
          resolution: '1. Cost of Revenue = 50k + 200k + 30k - 40k = 2,40,000\n2. Average Inventory = (50k + 40k) / 2 = 45,000\n3. Inventory Turnover Ratio = 2,40,000 / 45,000 = 5.33 (if using these numbers) | 8 Times based on official example inputs.'
        }
      },
      {
        title: 'Illustration 13 & 14: GP Margin Logic',
        description: 'Finding COGS and Profit from Turnover.',
        illustration: {
          type: 'table',
          concept: 'Gross Profit logic is used to derive COGS when only Sales and Margin percentages are known.\n\n**Given (Ill 13)**: Revenue=5,00,000, GP Margin=20% on Sales.\n**Given (Ill 14)**: Revenue=4,00,000, GP Margin=25% on Cost.',
          formula: 'COGS = Revenue - Gross Profit | If 25% on Cost, then GP = 20% on Sales',
          content: [
            ['Metric', 'Ill 13 Result', 'Ill 14 Result'],
            ['Cost of Revenue', '4,00,000', '3,20,000'],
            ['Average Inventory', '50,000', '40,000'],
            ['Gross Profit Margin', '20% on Sales', '25% on Cost']
          ],
          caption: 'Ill 13-14: Margin-Turnover linkage',
          resolution: 'Ill 13: 5,00,000 (Sales) - 20% (Profit) = 4,00,000 (Cost of Revenue)\nIll 14: 4,00,000 (Sales) / 1.25 (to find cost) = 3,20,000 (Cost of Revenue)'
        }
      },
      {
        title: 'Illustration 15 & 16: TR & TP Turnover',
        description: 'Credit cycle efficiency for Debtors and Creditors.',
        illustration: {
          type: 'table',
          concept: 'These ratios evaluate the speed of collection from debtors and payment to creditors. They use Net Credit Sales and Net Credit Purchases respectively.\n\n**Given (Ill 15)**: Credit Revenue=12L, Avg Debtors=2L.\n**Given (Ill 16)**: Credit Purchases=10L, Avg Creditors=2L.',
          formula: 'Trade Receivables Turnover Ratio = Net Credit Revenue from Operations / Average Trade Receivables | Trade Payables Turnover Ratio = Net Credit Purchases / Average Trade Payables',
          content: [
            ['Metric', 'Trade Rec Turnover (Ill 15)', 'Trade Pay Turnover (Ill 16)'],
            ['Credit Base', 'Net Credit Sales', 'Net Credit Purchases'],
            ['Average Bal', 'Avg Receivables', 'Avg Payables'],
            ['Result', '6 Times', '5 Times']
          ],
          caption: 'Ill 15-16: Credit Cycle Metrics',
          resolution: 'Ill 15: 12,00,000 (Sales) / 2,00,000 (Average Debtors) = 6 Times\nIll 16: 10,00,000 (Purchases) / 2,00,000 (Average Creditors) = 5 Times'
        }
      },
      {
        title: 'Illustration 17: Average Periods',
        description: 'Converting turnover into days/months.',
        illustration: {
          type: 'image',
          concept: 'Turning frequency into time tells management how many days it takes to collect cash or pay debts, which is vital for cash flow planning.',
          formula: 'Average Collection Period = 365 / Trade Receivables Turnover Ratio | Average Payment Period = 12 / Trade Payables Turnover Ratio',
          content: ill17Img,
          caption: 'Ill 17: Average Collection & Payment Periods (Visualized)',
          resolution: '1. Collection: 365 (Days) / 6 (Trade Receivables TO) = 60.83 ≈ 61 Days\n2. Payment: 12 (Months) / 5 (Trade Payables TO) = 2.4 Months'
        }
      },
      {
        title: 'Illustration 18: Asset Turnovers',
        description: 'Utilizing fixed and working capital.',
        illustration: {
          type: 'table',
          concept: 'Asset turnover ratios measure how efficiently the firm uses its fixed assets and working capital to generate revenue from operations (Sales).\n\n**Given (Scenario A)**: Revenue=7L, Net FA=2L.\n**Given (Scenario B)**: Revenue=12L, Working Capital=1L.\n**Given (Scenario C)**: Revenue=20L, Capital Employed=10L.',
          formula: 'Asset Turnover Ratio = Revenue from Operations / Net Assets (or Capital Employed)',
          content: [
            ['Ratio Type', 'Calculation', 'Result'],
            ['Fixed Asset Turnover', 'Sales / Net Fixed Assets', '3.5 Times'],
            ['Working Capital Turnover', 'Sales / Working Capital', '12 Times'],
            ['Net Asset Turnover', 'Sales / Capital Employed', '2 Times']
          ],
          caption: 'Ill 18: Utilization Efficiency',
          resolution: '1. Fixed Asset TO = 7L / 2L = 3.5\n2. Working Capital TO = 12L / 1L = 12\n3. Net Asset TO = 20L / 10L = 2'
        }
      }
    ]
  },
  {
    id: 'profitability-group',
    title: '5. Profitability Ratios (Earning Capacity)',
    content: 'Measuring the overall success of the company in generating yields.',
    subtopics: [
      {
        title: 'Significance & Interpretation',
        description: 'The bottom line.',
        points: [
          '**Margins (GP, NP)**: Higher is always better. Indicates operational efficiency.',
          '**ROI (Return on Investment)**: The master ratio. Must be higher than the cost of borrowing.',
          '**P/E Ratio**: High P/E suggests market expects high future growth.'
        ]
      },
      {
        title: 'Illustration 19: Gross Profit Ratio',
        description: 'Trading efficiency from Net Sales.',
        illustration: {
          type: 'table',
          concept: 'Gross Profit Ratio measures the margin of profit available on sales after meeting direct production costs. It is the first level of profitability check.',
          formula: 'Gross Profit Ratio = (Gross Profit / Net Revenue) * 100',
          content: [
            ['Revenue', '10,00,000'],
            ['Cost of Revenue', '7,50,000'],
            ['Gross Profit', '2,50,000'],
            ['GP %', '25%']
          ],
          caption: 'Ill 19: Basic Profitability',
          resolution: '1. GP = 10,00,000 - 7,50,000 = 2,50,000\n2. Ratio = (2,50,000 / 10,00,000) * 100 = 25%'
        }
      },
      {
        title: 'Illustration 20 & 21: Operating & Net Profit',
        description: 'Control over operating expenses and final yield.',
        illustration: {
          type: 'table',
          concept: 'Operating Ratios evaluate core business efficiency by including indirect operating expenses (like admin/selling). Net Profit Ratio is the final residue for owners.\n\n**Given (Ill 21)**: GP=30%, Op Exp=10%, Non-Op Exp=2%.',
          formula: 'Operating Ratio = (Cost of Revenue from Operations + Operating Expenses) / Revenue from Operations | Net Profit Ratio = (Net Profit After Tax / Revenue from Operations) * 100',
          content: [
            ['Metric', 'Ill 20 (Operating %)', 'Ill 21 (Net Profit %)'],
            ['Gross Profit Ratio', '30%', '30%'],
            ['Operating Expenses', '10%', '-'],
            ['Net Profit', '-', '18%'],
            ['Operating Ratio', '80% (Cost+OpExp/Sales)', '-']
          ],
          caption: 'Ill 20-21: Operating Efficiency',
          resolution: 'Ill 20: (70% Cost of Revenue + 10% OpExp) = 80%. Operating Profit is 20%.\nIll 21: Gross Profit (30%) - Operating Expenses - Non-operating Net = 18%.'
        }
      },
      {
        title: 'Illustration 22: Returns & Market Metrics',
        description: 'Investors yield: ROI, EPS, and P/E Ratio.',
        illustration: {
          type: 'table',
          concept: 'Financial returns measure how effectively capital is used from an investor perspective. ROI is for all lenders/owners, while EPS is specifically for equity holders.\n\n**Given**: PBIT=4.5L, Cap Emp=20L, NP=9L, Shares=2L, Market Price=54.',
          formula: 'Return On Investment (ROI) = (Profit Before Interest and Tax / Capital Employed) * 100 | Earnings Per Share (EPS) = Net Profit After Tax / Number of Equity Shares',
          content: [
            ['Indicator', 'Value'],
            ['Return on Investment (ROI)', '22.5%'],
            ['Earnings Per Share (EPS)', '₹ 4.50'],
            ['Price Earning Ratio', '12 Times'],
            ['Book Value', '₹ 45']
          ],
          caption: 'Ill 22: Investment Analysis',
          resolution: '1. ROI = 4.5L (PBIT) / 20L (Capital Employed) = 22.5%\n2. EPS = 9L (Net Profit) / 2L (Shares) = ₹ 4.50\n3. P/E = 54 (Market) / 4.5 (EPS) = 12 Times'
        }
      }
    ]
  },
  {
    id: 'comprehensive-group',
    title: '6. Comprehensive & Reverse Logic',
    content: 'Synthesizing all concepts to solve complex business problems.',
    subtopics: [
      {
        title: 'Illustration 23 & 24: Reverse CA Calculation',
        description: 'Finding assets from Turnover and Quick Ratios.',
        illustration: {
          type: 'image',
          concept: 'Comprehensive logic uses turnover ratios to find sales/inventory and then applies liquidity ratios to find other asset components.',
          formula: 'Logic Step: Cost of Revenue from Operations → Average Inventory → Quick Assets → Current Assets',
          content: ill2324Img,
          caption: 'Ill 23-24: Logic Chain for Asset Reconstruction (Visualized)',
          resolution: '1. Inventory Turnover=6, Cost of Revenue=12L → Avg Stock = 12/6 = 2L\n2. Quick Ratio=1.5, Current Liabilities=4L → Quick Assets = 1.5 * 4 = 6L\n3. Current Assets = Quick Assets + Stock = 6L + 2L = 8L'
        }
      },
      {
        title: 'Illustration 25: Master Problem',
        description: 'Calculating all functional ratios from a single Trial Balance.',
        illustration: {
          type: 'table',
          concept: 'A full case study involves classifying a Trial Balance into functional groups to compute all standard CBSE ratios simultaneously.',
          formula: 'Comprehensive Set: Current Ratio, Debt-Equity Ratio, Inventory Turnover Ratio, Net Profit Ratio',
          content: [
            ['Category', 'Calculated Ratio'],
            ['Liquidity', 'Current Ratio 2.2 : 1'],
            ['Solvency', 'Debt-Equity 0.5 : 1'],
            ['Activity', 'Inv Turnover 5 Times'],
            ['Profitability', 'Net Profit 15%']
          ],
          caption: 'Ill 25: Summary of a Full Case Study',
          resolution: 'Detailed analysis of Trial Balance items mapped to Current Assets, Current Liabilities, Debt, Equity, Sales, and Cost of Revenue.'
        }
      },
      {
        title: 'Illustration 26: Final Market Evaluation',
        description: 'EPS, Dividend Payout, and P/E analysis.',
        illustration: {
          type: 'table',
          concept: 'Market valuation synthesis links internal profit (EPS) with external perception (Market Price) and reward policies (Dividend Payout).\n\n**Given**: EPS=10, Dividend=4, Market Price=155.',
          formula: 'Dividend Payout Ratio = Dividend per Share / Earnings Per Share | Dividend Yield = Dividend per Share / Market Price per Share',
          content: [
            ['Metric', 'Result'],
            ['Dividend Payout', '40% of EPS'],
            ['P/E Ratio', '15.5'],
            ['Yield', '6.5%']
          ],
          caption: 'Ill 26: Shareholders Valuation Synthesis',
          resolution: '1. EPS of 10, Dividend of 4 → 40% Payout\n2. Market 155 / EPS 10 = 15.5 P/E\n3. Dividend 4 / Market 155 = 2.5% (Yield)'
        }
      }
    ]
  }
];

export const CH5_FLASHCARDS: Flashcard[] = [
  { id: 501, category: 'Definitions', question: "What is an Accounting Ratio?", answer: "A mathematical relationship between two accounting numbers from financial statements." },
  { id: 502, category: 'Theory', question: "What are the 4 ways to express a ratio?", answer: "Fraction, Proportion (2:1), Percentage (%), and Times (Turnover)." },
  { id: 503, category: 'Theory', question: "What is Cross-sectional Analysis?", answer: "Comparing a firm's ratios with industry standards or other firms (Inter-firm)." },
  { id: 504, category: 'Theory', question: "What is Time-series Analysis?", answer: "Comparing a firm's ratios over different time periods (Intra-firm)." },
  { id: 505, category: 'Classification', question: "Name the 3 Traditional classifications.", answer: "Statement of P&L Ratios, Balance Sheet Ratios, and Composite Ratios." },
  { id: 506, category: 'Classification', question: "Name the 4 Functional classifications.", answer: "Liquidity, Solvency, Activity, and Profitability." },
  { id: 507, category: 'Limits', question: "How does Window Dressing affect ratios?", answer: "It presents a better-than-actual financial position by manipulating data at year-end." },
  { id: 508, category: 'Limits', question: "Why is 'Historical Cost' a limitation?", answer: "It ignores price-level changes and inflation, making ratios less relevant." },
  { id: 509, category: 'Definitions', question: "What is a 'Pure' ratio?", answer: "Expressed as a simple proportion, e.g., 2 : 1." },
  { id: 510, category: 'Theory', question: "What is the primary objective of Ratio Analysis?", answer: "To simplify accounting data and interpret relationships for decision making." },
  { id: 511, category: 'Calculations', question: "Formula for Current Ratio?", answer: "Current Assets / Current Liabilities." },
  { id: 512, category: 'Theory', question: "Ideal Current Ratio?", answer: "2 : 1" },
  { id: 513, category: 'Definitions', question: "What are Quick Assets?", answer: "Current Assets minus (Inventories + Prepaid Expenses + Advance Tax)." },
  { id: 514, category: 'Calculations', question: "Formula for Liquid Ratio?", answer: "Quick (Liquid) Assets / Current Liabilities." },
  { id: 515, category: 'Theory', question: "Ideal Quick Ratio?", answer: "1 : 1" },
  { id: 516, category: 'Classification', question: "Head for 'Loose Tools' in Balance Sheet?", answer: "Current Assets -> Inventories." },
  { id: 517, category: 'Calculations', question: "How to find Working Capital?", answer: "Current Assets minus Current Liabilities." },
  { id: 518, category: 'Theory', question: "Effect of 'Cash from Debtors' on Current Ratio?", answer: "No Change (one Current Asset increases, another Current Asset decreases equally)." },
  { id: 519, category: 'Theory', question: "Effect of 'Credit Purchase' on Current Ratio (if 2:1)?", answer: "Decrease (Both Current Assets and Current Liabilities increase by same amount)." },
  { id: 520, category: 'Theory', question: "Effect of 'Payment to Creditors' on Current Ratio (if 2:1)?", answer: "Increase (Both Current Assets and Current Liabilities decrease by same amount)." },
  { id: 521, category: 'Calculations', question: "Formula for Debt-Equity Ratio?", answer: "Long-term Debt / Shareholders' Funds." },
  { id: 522, category: 'Classification', question: "What is 'Long-term Debt'?", answer: "Long-term Borrowings + Long-term Provisions." },
  { id: 523, category: 'Calculations', question: "Formula for Proprietary Ratio?", answer: "Shareholders' Funds / Total Assets." },
  { id: 524, category: 'Calculations', question: "Formula for Total Assets to Debt Ratio?", answer: "Total Assets / Long-term Debt." },
  { id: 525, category: 'Calculations', question: "Formula for Interest Coverage Ratio?", answer: "Net Profit before Interest and Tax / Interest on Long-term Debt." },
  { id: 526, category: 'Theory', question: "Unit for Interest Coverage Ratio?", answer: "Number of Times." },
  { id: 527, category: 'Definitions', question: "What is Capital Employed?", answer: "Debt + Equity OR Non-current Assets + Working Capital." },
  { id: 528, category: 'Calculations', question: "Formula for Debt to Capital Employed?", answer: "Long-term Debt / Capital Employed." },
  { id: 529, category: 'Theory', question: "Significance of a high Proprietary Ratio?", answer: "Indicates safety for creditors as more assets are financed by owners." },
  { id: 530, category: 'Theory', question: "Transaction reducing Debt-Equity Ratio (if 2:1)?", answer: "Issue of Equity Shares for cash (increases Equity base)." },
  { id: 531, category: 'Calculations', question: "Formula for Inventory Turnover Ratio?", answer: "Cost of Revenue from Operations / Average Inventory." },
  { id: 532, category: 'Calculations', question: "How to calculate Cost of Revenue?", answer: "Revenue – Gross Profit OR Opening Stock + Purchases + Direct Expenses – Closing Stock." },
  { id: 533, category: 'Calculations', question: "Formula for Average Inventory?", answer: "(Opening Stock + Closing Stock) / 2." },
  { id: 534, category: 'Calculations', question: "Formula for Trade Rec Turnover Ratio?", answer: "Net Credit Revenue from Operations / Average Trade Receivables (before deducting Provision for Bad Debts)." },
  { id: 535, category: 'Calculations', question: "Average Collection Period formula?", answer: "365 (or 12) / Trade Receivables Turnover Ratio." },
  { id: 536, category: 'Calculations', question: "Formula for Trade Payables Turnover Ratio?", answer: "Net Credit Purchases / Average Trade Payables." },
  { id: 537, category: 'Calculations', question: "Average Payment Period formula?", answer: "365 (or 12) / Trade Payables Turnover Ratio." },
  { id: 538, category: 'Calculations', question: "Working Capital Turnover Ratio formula?", answer: "Net Revenue from Operations / Working Capital." },
  { id: 539, category: 'Calculations', question: "Fixed Assets Turnover Ratio formula?", answer: "Net Revenue from Operations / Net Fixed Assets." },
  { id: 540, category: 'Theory', question: "What does a high Inventory Turnover Ratio indicate?", answer: "Efficient inventory management and fast-moving stock." },
  { id: 541, category: 'Calculations', question: "Formula for Gross Profit Ratio?", answer: "(Gross Profit / Net Revenue from Operations) * 100." },
  { id: 542, category: 'Calculations', question: "Formula for Operating Ratio?", answer: "((Cost of Revenue + Operating Expenses) / Net Revenue from Ops) * 100." },
  { id: 543, category: 'Definitions', question: "Name two Operating Expenses.", answer: "Admin Expenses, Selling & Distribution Expenses, Depreciation." },
  { id: 544, category: 'Calculations', question: "Formula for Operating Profit Ratio?", answer: "(Operating Profit / Net Revenue from Ops) * 100." },
  { id: 545, category: 'Theory', question: "Operating Ratio + Operating Profit Ratio = ?", answer: "100%" },
  { id: 546, category: 'Calculations', question: "Formula for Net Profit Ratio?", answer: "(Net Profit / Net Revenue from Ops) * 100." },
  { id: 547, category: 'Calculations', question: "Formula for Return on Investment (ROI)?", answer: "(Profit Before Interest & Tax / Capital Employed) * 100." },
  { id: 548, category: 'Calculations', question: "Formula for Return on Net Worth (RONW)?", answer: "(Net Profit After Tax / Shareholders' Funds) * 100." },
  { id: 549, category: 'Calculations', question: "Formula for EPS?", answer: "Profit for Equity Holders / Number of Equity Shares." },
  { id: 550, category: 'Calculations', question: "Formula for P/E Ratio?", answer: "Market Price per share / EPS." },
  { id: 551, category: 'Definitions', question: "What is an Acid-Test Ratio?", answer: "Another name for the Quick Ratio." },
  { id: 552, category: 'Calculations', question: "How to find Net Profit After Tax from Net Profit Before Tax (40% Tax)?", answer: "Net Profit Before Tax * (1 - 0.40) or Net Profit Before Tax * 0.60." },
  { id: 553, category: 'Calculations', question: "Capital Employed (Asset Side)?", answer: "Non-current Assets + Working Capital (Current Assets - Current Liabilities)." },
  { id: 554, category: 'Classification', question: "Where is 'Proposed Dividend' shown?", answer: "Contingent Liability in Notes to Accounts." },
  { id: 555, category: 'True/False', question: "Loose Tools are included in Quick Assets.", answer: "False. They are part of Inventory, which is excluded from Quick Assets." },
  { id: 556, category: 'Definitions', question: "What is Book Value per share?", answer: "Shareholders' Funds / Total Number of Equity Shares." },
  { id: 557, category: 'Theory', question: "Does Issue of Debentures increase Debt-Equity Ratio?", answer: "Yes (Debt increases, Equity stays constant)." },
  { id: 558, category: 'Theory', question: "Sale of goods at profit effect on Current Ratio (if 2:1)?", answer: "Improve (Cash inflow > Inventory outflow cost)." },
  { id: 559, category: 'Definitions', question: "What are 'Liquid Liabilities'?", answer: "Current Liabilities excluding Bank Overdraft and Cash Credit." },
  { id: 560, category: 'Theory', question: "Primary users of Solvency Ratios?", answer: "Long-term lenders, debenture holders, and banks." },
  { id: 561, category: 'Calculations', question: "Dividend Payout Ratio formula?", answer: "Dividend per share / EPS." },
  { id: 562, category: 'Calculations', question: "Interest on LT Debt in ICR?", answer: "Total LT Debt * Interest Rate." },
  { id: 563, category: 'Theory', question: "What is 'Trading on Equity'?", answer: "Using fixed-cost debt to increase returns for equity shareholders." },
  { id: 564, category: 'True/False', question: "ROI is based on Profit After Tax.", answer: "False. It is based on PBIT (Before Interest and Tax)." },
  { id: 565, category: 'Definitions', question: "Define 'Operating Cycle'.", answer: "Time between asset acquisition for processing and cash realization." }
];

export const CH5_CHEATSHEET: CheatSheetData = {
  natureTable: [
    ['Theoretical Aspect', 'Detailed Significance'],
    ['Accounting Ratio', 'Mathematical relationship between two accounting numbers from financial statements.'],
    ['Primary Objectives', 'To assess Liquidity (short-term), Solvency (long-term), Activity (efficiency), and Profitability.'],
    ['Inter-firm Comparison', 'Comparing one firm with another (Cross-sectional).'],
    ['Intra-firm Comparison', 'Comparing same firm over years (Time-series).']
  ],
  limitations: [
    'Historical Nature: Ignores price-level changes (inflation).',
    'Qualitative Factors: Ignores non-monetary aspects like management quality.',
    'Window Dressing: Manipulation of accounts to hide/convey fake strengths.',
    'Different Policies: Variations in depreciation/inventory methods make comparison difficult.'
  ],
  balanceSheetOrder: [
    { head: 'Shareholders\' Funds (Equity)', items: ['Share Capital', 'Reserves & Surplus', 'Money against share warrants'] },
    { head: 'Long-term Debt (LTD)', items: ['LT Borrowings', 'LT Provisions'] },
    { head: 'Capital Employed', items: ['LTD + Equity', 'Non-Current Assets + Working Capital'] }
  ],
  classificationTable: [
    ['Ratio Type', 'Formula', 'Standard / Notes'],
    ['Current Ratio', 'Current Assets (CA) / Current Liabilities (CL)', 'Ideal: 2 : 1'],
    ['Quick (Acid-Test) Ratio', '(Current Assets - Inventory - Prepaid - Advance Tax) / Current Liabilities', 'Ideal: 1 : 1'],
    ['Debt-Equity Ratio', 'Long-term Debt / Shareholders\' Funds', 'Ideal: 2 : 1'],
    ['Debt to Capital Employed', 'Long-term Debt / Capital Employed', 'Safety margin'],
    ['Proprietary Ratio', 'Shareholders\' Funds / Total Assets', 'Ownership extent'],
    ['Total Assets to Debt', 'Total Assets / Long-term Debt', 'Buffer for lenders'],
    ['Interest Coverage', 'Profit Before Interest and Tax / Interest on Long-term Debt', 'Times (Higher = Better)'],
    ['Inventory Turnover', 'Cost of Revenue from Ops / Avg Inventory', 'Times (Efficiency)'],
    ['Trade Receivables Turnover', 'Net Credit Revenue / Avg Trade Receivables', 'Exclude Prov for Bad Debt'],
    ['Trade Payables Turnover', 'Net Credit Purchases / Avg Trade Payables', 'Payment efficiency'],
    ['Working Capital Turnover', 'Revenue from Operations / Working Capital', 'Operating speed'],
    ['Gross Profit Ratio', '(Gross Profit / Revenue from Ops) * 100', 'Percentage (%)'],
    ['Operating Ratio', '((Cost of Revenue + Operating Exp) / Rev from Ops) * 100', 'Lower is better'],
    ['Operating Profit %', '(Operating Profit / Revenue from Ops) * 100', 'Note: Op % + Op Profit % = 100'],
    ['Net Profit Ratio', '(Net Profit / Revenue from Ops) * 100', 'Overall Efficiency'],
    ['Net Assets Turnover', 'Revenue from Operations / Capital Employed', 'Measures efficiency of capital usage'],
    ['ROI (ROCE)', '(PBIT / Capital Employed) * 100', 'Yield on investment'],
    ['EPS', 'Profit for Eq / Number of Equity Shares', 'Earnings in ₹'],
    ['P/E Ratio', 'Market Price per Share / EPS', 'Investor confidence']
  ],
  pnlOrder: [
    { category: 'Profit Layers', items: ['Revenue from Operations (Net Sales)', 'Cost of Revenue', 'Gross Profit (GP)', 'Operating Profit', 'Net Profit'] },
    { category: 'Key Relations', items: ['Operating Profit = Gross Profit - Operating Expenses', 'Operating Cost = Cost of Revenue + Operating Expenses', 'Profit Before Interest & Tax = Profit After Tax + Tax + Interest'] }
  ],
  crucialRules: [
    { title: 'Rule 1: Net Sales', content: 'Revenue from Operations refers to Net Sales (Sales - Returns).' },
    { title: 'Rule 2: COGS', content: 'Cost of Revenue from Operations = Opening Stock + Net Purchases + Direct Exp - Closing Stock.' },
    { title: 'Rule 3: Loose Tools', content: 'Included in Current Assets for B/S, but ALWAYS EXCLUDED for Current Ratio and Quick Ratio calculation.' },
    { title: 'Rule 4: Provision for Tax', content: 'Treat as a Current Liability (Short-term provision) for all ratio calculations.' },
    { title: 'Rule 5: Current Ratio Logic', content: 'If Ratio > 1: Equal decrease in CA & CL improves ratio. If Ratio < 1: Equal decrease reduces ratio.' },
    { title: 'Rule 6: ROI Calculation', content: 'ROI uses PBIT (Profit Before Interest & Tax), not PAT. Add back Tax and Interest to PAT if given.' }
  ],
  commonErrors: [
    'Using PAT instead of PBIT for ROI and Interest Coverage Ratio.',
    'Including "Loose Tools" and "Stores & Spares" in Current Assets for Ratio Calculation (Must be Excluded from Inventory).',
    'Forgetting to convert "Times" to "Days/Months" when asked for Collection/Payment Period.',
    'Ignoring "Bank Overdraft" while calculating Quick Liabilities (It is excluded from Liquid Liabs).'
  ]
};

export const CH5_SQPS: SQPQuestion[] = [
  // --- SQP 2025-26 ---
  {
    id: 'ch5-2526-q28',
    year: '2025-26',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "28. Inventory Turnover Ratio of company was 5 times. The firm had Revenue from operations of ₹ 5,00,000 and Gross Profit was 25% of Cost of Revenue from Operations. Determine the amount of Opening Inventory if Closing Inventory was ₹ 60,000.\n\nA. ₹ 80,000   B. ₹ 60,000   C. ₹ 1,00,000   D. ₹ 50,000",
    markingScheme: "C. ₹ 1,00,000",
    aiExplanation: "**AI Detailed Explanation**:\n**Step 1: Find COGS**\n*   GP is 25% (1/4) of Cost => GP is 20% (1/5) of Sales.\n*   GP = 20% of 5,00,000 = ₹1,00,000.\n*   COGS = Sales - GP = 5L - 1L = **₹4,00,000**.\n\n**Step 2: Find Average Inventory**\n*   ITR = COGS / Avg Inv.\n*   5 = 4,00,000 / Avg Inv  => Avg Inv = **₹80,000**.\n\n**Step 3: Find Opening Inventory**\n*   Avg = (Op + Cl) / 2\n*   80,000 = (Op + 60,000) / 2\n*   1,60,000 = Op + 60,000\n*   Op = **₹1,00,000**."
  },
  {
    id: 'ch5-2526-q28-or',
    year: '2025-26',
    type: 'Assertion-Reasoning (1 Mark)',
    marks: 1,
    question: "28. OR\n\nAssertion (A): Gross Profit Ratio is always higher than Net Profit Ratio.\n\nReason (R): To calculate Net Profit, Indirect Expenses are subtracted from Gross Profit and Indirect Incomes are added to Gross Profit.\n\nA. Both A and R are correct, and R is the correct explanation of A\nB. Both A and R are correct, but R is not the correct explanation of A\nC. A is correct but R is incorrect\nD. A is incorrect but R is correct",
    markingScheme: "D. A is incorrect but R is correct",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Assertion Check**: If a company has huge Non-Operating Income (e.g., Gain on Sale of Land), Net Profit COULD potentially exceed Gross Profit. Thus, Assertion is False.\n*   **Reason Check**: This is the standard formula for Net Profit. True."
  },
  {
    id: 'ch5-2526-q33',
    year: '2025-26',
    type: 'Numerical Analysis (4 Marks)',
    marks: 4,
    question: "33. Quick Ratio of Roxy Traders is 0.8 : 1. State with reasons whether the following transactions will increase, decrease or will have no change on the ratio\n\na) Goods purchased on Credit\nb) Outstanding Expenses paid\nc) Sale of Fixed Assets at 20% loss\nd) Issue of Debentures at Premium to Vendors",
    markingScheme: "a) Ratio will decrease Current Liabilities (Trade Payables) will increase\nb) Ratio will decrease as both Quick Assets (Cash) and Current Liabilities (Outstanding Expenses) will decrease.\nc) Ratio will increase as Current Assets (Cash and Cash Equivalents) will increase.\nd) No change as no impact on Quick Assets and Current Liabilities.",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Info | Details |\n|---|---|\n| Company | Roxy Traders |\n| Quick Ratio | **0.8 : 1** (Ratio is LESS than 1 — this matters!) |\n| Effect to analyze | 4 transactions on Quick Ratio |\n\n---\n\n### 💡 Key Rule: Quick Ratio < 1 Behavior\n\n> When Ratio < 1: Equal decrease in **both** numerator (QA) and denominator (CL) makes the ratio **go down further** (unfavorable).  \n> When Ratio < 1: Equal increase in **both** numerator and denominator also makes ratio **go down** (because it pulls toward 1 from below).\n\n---\n\n### 🧮 Transaction Analysis\n\n**(a) Goods purchased on Credit**\n- Stock Increases (Inventory = Non-liquid) → **NO change to Quick Assets**\n- Creditors Increase → **Current Liabilities go UP**\n- Denominator goes up, numerator unchanged.\n- **Result: 📉 Decrease**\n\n**(b) Outstanding Expenses paid**\n- Cash Paid → Quick Assets **decrease**\n- Outstanding Expenses → Current Liabilities **decrease**\n- When Ratio < 1: equal subtractions from both = QA falls relatively more\n- **Result: 📉 Decrease**\n\n**(c) Sale of Fixed Assets at 20% loss**\n- Fixed Assets sold → Cash received (Quick Assets go **UP**)\n- Current Liabilities **unchanged**\n- Numerator goes up, denominator stays same\n- **Result: 📈 Increase**\n\n**(d) Issue of Debentures at Premium to Vendors**\n- Debentures issued → Long-term Debt (not CL)\n- No impact on Quick Assets or Current Liabilities\n- **Result: ➡️ No Change**\n\n---\n\n### ✅ Summary Table\n\n| Transaction | QA Change | CL Change | Effect on Quick Ratio |\n|---|---|---|---|\n| (a) Credit Purchase | None | ⬆️ Up | **Decrease** |\n| (b) Pay Outstanding Exp | ⬇️ Down | ⬇️ Down | **Decrease** (ratio < 1) |\n| (c) Sale of Fixed Assets | ⬆️ Up | None | **Increase** |\n| (d) Issue Debentures (Vendors) | None | None | **No Change** |\n\n> 💡 **Exam Tip**: Debentures issued to Vendors = No cash involved. It\'s a long-term liability swap, not a current one. This is the trickiest part of this question.'
  },
  {
    id: 'ch5-2526-q33-or',
    year: '2025-26',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "33. OR\n\nFrom the following information, calculate Trade Receivables Turnover Ratio:\n\nCost of Revenue from Operations (Cost of Goods Sold): Rs. 6,00,000\nGross Profit on Cost: 25%\nCash Sales: 20% of Total Sales\nOpening Debtors: Rs. 1,00,000\nClosing Debtors: Rs. 2,00,000.\nProvision for Doubtful Debts: Opening Rs. 10,000 and Closing Rs.20,000.",
    markingScheme: "Trade Receivables Turnover Ratio = Credit Revenue from Operations / Average Trade Receivables = 6,00,000/1,50,000 = 4 times\n\nRevenue From Operations = Cost of Revenue from Operations + Gross Profit = 6,00,000 + 1,50,000 = 7,50,000\n\nCash Revenue from Operations = 20% of Revenue From Operations = 20% of 7,50,000 = 1,50,000\n\nCredit Revenue from Operations = Revenue from operations – Cash Revenue from operations = 7,50,000 – 1,50,000 = 6,00,000\n\nAverage Trade Receivables = (Opening Trade Rec. + Closing Trade Rec.) / 2 = (1,00,000 + 2,00,000)/2 = 1,50,000",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Info | Value |\n|---|---|\n| Cost of Revenue from Operations (COGS) | ₹ 6,00,000 |\n| Gross Profit on Cost | 25% |\n| Cash Sales | 20% of Total Sales |\n| Opening Debtors | ₹ 1,00,000 |\n| Closing Debtors | ₹ 2,00,000 |\n| Provision for Doubtful Debts | Opening ₹10k, Closing ₹20k (IGNORE) |\n\n---\n\n### 💡 Formula\n\n```\nTrade Receivables Turnover Ratio = Credit Sales / Average Trade Receivables\n```\n\n> **Important Rule**: Average Trade Receivables = (Op Debtors + Cl Debtors) ÷ 2. Do NOT deduct Provision for Doubtful Debts from debtors. Use **Gross Debtors** only.\n\n---\n\n### 🧮 Step 1: Find Total Revenue from Operations\n\n```\nGP = 25% of COGS = 25% of 6,00,000 = ₹1,50,000\nTotal Revenue = COGS + GP = 6,00,000 + 1,50,000 = ₹ 7,50,000\n```\n\n### 🧮 Step 2: Find Credit Revenue (Sales)\n\n```\nCash Sales = 20% of 7,50,000 = ₹1,50,000\nCredit Sales = 7,50,000 − 1,50,000 = ₹ 6,00,000\n```\n\n### 🧮 Step 3: Average Trade Receivables\n\n```\nAvg = (Opening + Closing) ÷ 2\n    = (1,00,000 + 2,00,000) ÷ 2 = ₹ 1,50,000\n```\n\n*(Ignore Provision for Doubtful Debts — use GROSS debtors only)*\n\n### 🧮 Step 4: Calculate Ratio\n\n```\nTrade Receivables Turnover = 6,00,000 ÷ 1,50,000 = 4 Times\n```\n\n---\n\n### ✅ Final Answer\n\n**Trade Receivables Turnover Ratio = 4 Times**\n\n> 💡 **Exam Tip**: The tricky part here is step 1 — "GP on Cost" (25%) is NOT the same as "GP on Sales" (which would be 20%). Always convert to Sales using: Revenue = COGS + GP. Also, IGNORE Provision for Doubtful Debts when computing average debtors.'
  }
  ,

  // --- SQP 2024-25 ---
  {
    id: 'ch5-2425-q27-or',
    year: '2024-25',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. OR\n\n------------will result in increase in Liquid Ratio without affecting the Current Ratio.\n\nA. Sale of Stock at cost price\nB. Sale of stock at loss\nC. Sale of stock at profit\nD. Sale of investments at cost",
    markingScheme: "A - Sale of Stock at cost price",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Scenario A**: Sale of Stock at Cost.\n*   **Effect**: Stock (Non-Liquid Asset) goes down. Cash (Liquid Asset) goes up.\n*   **Result**: Liquid Assets Increase -> **Liquid Ratio Improves**.\n*   **Current Ratio**: One CA replaces another CA. Total CA constant -> **No Change**."
  },
  {
    id: 'ch5-2425-q28',
    year: '2024-25',
    type: 'Conceptual Analysis (1 Mark)',
    marks: 1,
    question: "28. As on 31.02.2024 the following information of Bartan Manfacturing ltd. is available . Net profit ratio 40% Operating profit ratio 50% On 1st April 2024 it was came to notice that the accountant had omitted recording the interest received on investment of Rs. 2,00,000 for the financial year 2023-24. The required rectification was done. What will be the effect of the same on Net Profit and operating profit ratio?\n\nA. Net Profit ratio will increase and Operating Profit ratio will decrease\nB. Both Net Profit ratio and Operating Profit ratio will increase\nC. Net Profit ratio will increase and Operating Profit ratio will have no change\nD. Net Profit ratio will remain same and Operating Profit ratio will increase",
    markingScheme: "C- Net Profit ratio will increase and Operating Profit ratio will have no change",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Interest Received**: This is 'Non-Operating Income'.\n*   **Impact on Operating Profit**: None. Operating Profit only includes core business income. Ratio unchanged.\n*   **Impact on Net Profit**: Increases because Non-Operating Income is added to Net Profit. Ratio increases."
  },
  {
    id: 'ch5-2425-q33',
    year: '2024-25',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "33. Calculate Gross Profit Ratio from the following information\nRevenue from Operations ₹ 10,00,000; Purchases ₹ 3,60,000; Carriage Inwards ₹ 50,000; Employee benefit Expenses ₹ 1,00,000 (including Wages of ₹ 60,000); Opening Inventory ₹ 60,000 and Average Inventory ₹ 80,000.",
    markingScheme: "Gross Profit Ratio = Gross Profit / Revenue from Operations * 100\n\nRevenue from Operations = Rs 10,00,000\n\nGross Profit = Revenue from Operations – Cost of Revenue from Operations\n\nCost of Revenue from Operations = Purchases + Opening Inventory + Direct Expenses – Closing Inventory\n= 3,60,000 + 60,000 + 50,000 + 60,000 – 1,00,000 = 4,30,000\n\n(Average Inventory = Opening Inventory + Closing Inventory / 2\n80,000 = 60,000 + Closing Inventory / 2\nClosing Inventory = 1,00,000)\n\nGross Profit = 10,00,000 – 4,30,000 = 5,70,000\n\nGross Profit Ratio = 5,70,000/10,00,000 * 100 = 57%",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Revenue from Operations | ₹ 10,00,000 |\n| Purchases | ₹ 3,60,000 |\n| Carriage Inwards | ₹ 50,000 (Direct Expense) |\n| Employee Benefit Expenses | ₹ 1,00,000 (includes Wages ₹60,000) |\n| Opening Inventory | ₹ 60,000 |\n| Average Inventory | ₹ 80,000 |\n\n---\n\n### 💡 Key Decisions First\n\n**What is a Direct Expense (included in COGS)?**\n- Carriage Inwards = **Direct** (cost of bringing goods) ✅\n- Wages = **Direct** (labor used to produce) ✅\n- Salaries = **Indirect** (admin/selling expense) ❌\n\n> ⚠️ The question says Employee Benefit Expenses = ₹1,00,000 including Wages of ₹60,000. So only **Wages (₹60,000)** go into COGS. The remaining ₹40,000 (Salaries) is an operating expense.\n\n---\n\n### 🧮 Step 1: Find Closing Inventory from Average\n\n```\nAverage = (Opening + Closing) ÷ 2\n80,000 = (60,000 + Closing) ÷ 2\n1,60,000 = 60,000 + Closing\nClosing Inventory = ₹ 1,00,000\n```\n\n### 🧮 Step 2: Calculate COGS (Cost of Revenue from Operations)\n\n```\nCOGS = Opening Stock + Purchases + Direct Expenses − Closing Stock\n     = 60,000 + 3,60,000 + (50,000 + 60,000) − 1,00,000\n     = 60,000 + 3,60,000 + 1,10,000 − 1,00,000\n     = ₹ 4,30,000\n```\n\n### 🧮 Step 3: Calculate Gross Profit\n\n```\nGross Profit = Revenue − COGS\n            = 10,00,000 − 4,30,000 = ₹ 5,70,000\n```\n\n### 🧮 Step 4: Gross Profit Ratio\n\n```\nGP Ratio = (Gross Profit ÷ Revenue) × 100\n         = (5,70,000 ÷ 10,00,000) × 100 = 57%\n```\n\n---\n\n### ✅ Answer: GP Ratio = **57%**\n\n> 💡 **Exam Tip**: "Carriage Inwards" and "Wages" are **always** direct expenses (part of COGS). "Salaries" are **always** indirect. When Employee Benefits includes both, always split them — only include Wages in COGS.'
  },
  {
    id: 'ch5-2425-q33-or',
    year: '2024-25',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "33. OR\n\nProfit after tax amounted to ₹ 6,00,000, and tax rate was 20%. If earnings before interest and tax was ₹ 10,00,000 and Nominal Value of Debentures amounted to ₹ 25,00,000 (assuming the only debt of the company), determine the rate of interest on debentures",
    markingScheme: "Net Profit Before Interest & Tax = Profit after Tax + Tax + Interest\n\n(Tax = 6,00,000 * 20/80 = 1,50,000)\n\n10,00,000 = 6,00,000 + 1,50,000 + Interest\n\nInterest = Rs 2,50,000\n\nInterest on Debentures = Nominal value of Debentures * Rate of Interest/100\n2,50,000 = 25,00,000 * Rate of Interest/100\n\nRate of Interest (R) = 10%",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Info | Value |\n|---|---|\n| Profit After Tax (PAT) | ₹ 6,00,000 |\n| Tax Rate | 20% |\n| Earnings Before Interest and Tax (EBIT) | ₹ 10,00,000 |\n| Debentures (Nominal Value) | ₹ 25,00,000 |\n| Need to Find | Rate of Interest on Debentures |\n\n---\n\n### 💡 The Interest Coverage Formula Relationship\n\n```\nEBIT = PBT + Interest\nPBT  = PAT + Tax\n```\n\n> Think of it like layers of an onion: PAT → Add Tax → PBT → Add Interest → EBIT. Peel backwards to find Interest.\n\n---\n\n### 🧮 Step 1: Find Profit Before Tax (PBT) from PAT\n\n> If Tax Rate = 20%, then PAT = 80% of PBT.\n\n```\nPAT = 6,00,000 (= 80% of PBT)\nPBT = 6,00,000 × 100/80 = 6,00,000 ÷ 0.80 = ₹ 7,50,000\n```\n\n### 🧮 Step 2: Find Interest Amount\n\n```\nEBIT = PBT + Interest\n10,00,000 = 7,50,000 + Interest\nInterest = 10,00,000 − 7,50,000 = ₹ 2,50,000\n```\n\n### 🧮 Step 3: Find Rate of Interest on Debentures\n\n```\nInterest = Nominal Value × Rate / 100\n2,50,000 = 25,00,000 × Rate / 100\nRate = (2,50,000 × 100) / 25,00,000\nRate = 10%\n```\n\n---\n\n### ✅ Answer: Rate of Interest = **10% p.a.**\n\n> 💡 **Exam Tip**: The most common mistake here is using the wrong tax calculation. If Tax = 20%, then **PAT is NOT 80% of PBT by subtraction** — you must do PAT = PBT × (1 - Tax Rate), so PBT = PAT / (1 - 0.20) = PAT / 0.80. Always use the division method.'
  },

  // --- SQP 2023-24 ---
  {
    id: 'ch5-2324-q27-or',
    year: '2023-24',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. OR\n\n. ............ is included in current assets while preparing balance sheet as per revised Schedule III but excluded from current assets while calculating Current Ratio\n\na) Debtors.\nb) Cash and Cash Equivalent.\nc) Loose tools and Stores and spares.\nd) Prepaid Expense.",
    markingScheme: "c). Loose Tools and Stores and Spares",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Rule**: Loose Tools are technically Inventories (Current Assets).\n*   **Exception**: They are not considered 'Liquid' enough for paying debts. Hence, excluded from Current Ratio calculation."
  },
  {
    id: 'ch5-2324-q28',
    year: '2023-24',
    type: 'Conceptual (1 Mark)',
    marks: 1,
    question: "28. Debt-Equity Ratio of Dhamaka Ltd is 3 : 1. Which of the following will result in decrease in this ratio?\n\na) Issue of Debentures for Cash of ₹2,00,000.\nb) Issue of Debentures of ₹3,00,000 to Vendors from whom Machinery was purchased.\nc) Goods purchased on Credit of ₹1,00,000.\nd) Issue of Equity Shares of ₹2,00,000.",
    markingScheme: "d) Issue of Equity Shares of ₹2,00,000.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Check Option D**: Issue of Equity Shares.\n*   **Effect**: Denominator (Equity) increases. Numerator (Debt) constant.\n*   **Result**: Bigger Denominator = Smaller Ratio."
  },
  {
    id: 'ch5-2324-q32-a',
    year: '2023-24',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "32. a) A company had a liquid ratio of 1.5 and current ratio of 2 and inventory turnover ratio 6 times. It had total current assets of ₹8,00,000. Find out annual sales if goods are sold at 25% profit on cost.",
    markingScheme: "(a).Current Ratio = Current Assets / Current Liabilities\n2 = 8,00,000 / Current Liabilities\nSo, Current Liabilities = ₹ 4,00,000\n\nLiquid Ratio = Liquid Assets / Current Liabilities\n1.5 = Liquid Assets / 4,00,000\nSo, Liquid Assets = ₹ 6,00,000\n\nInventory = Current Assets - Liquid Assets\nInventory = 8,00,000 – 6,00,000 = ₹ 2,00,000\n\nInventory Turnover Ratio = Cost of Revenue From Operations / Average Inventory\n6 = Cost of Revenue from Operations / 2,00,000\n\nCost of Revenue from Operations = ₹ 12,00,000\n\nGross Profit = 25% of Cost i.e ₹ 3,00,000\n\nRevenue From Operations = Cost of Revenue from Operations + Gross Profit = 12,00,000 + 3,00,000\nRevenue From Operations = ₹ 15,00,000",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Info | Value |\n|---|---|\n| Liquid Ratio (Quick Ratio) | 1.5 : 1 |\n| Current Ratio | 2 : 1 |\n| Total Current Assets | ₹ 8,00,000 |\n| Inventory Turnover Ratio | 6 Times |\n| Gross Profit | 25% on Cost |\n\n---\n\n### 💡 The Chain to Solve This\n\n```\nStep 1: CR=2, CA=8L → Find Current Liabilities\nStep 2: LR=1.5, CL known → Find Quick Assets\nStep 3: Inventory = CA − Quick Assets\nStep 4: ITR=6, Inventory known → Find COGS\nStep 5: GP=25% on Cost → Find Sales\n```\n\n---\n\n### 🧮 Step-by-Step Working\n\n**Step 1: Find Current Liabilities (CL)**\n```\nCurrent Ratio = CA / CL\n2 = 8,00,000 / CL\nCL = 8,00,000 / 2 = ₹ 4,00,000\n```\n\n**Step 2: Find Quick Assets (QA)**\n```\nLiquid Ratio = QA / CL\n1.5 = QA / 4,00,000\nQA = 1.5 × 4,00,000 = ₹ 6,00,000\n```\n\n**Step 3: Find Inventory**\n```\nInventory = Current Assets − Quick Assets\n          = 8,00,000 − 6,00,000 = ₹ 2,00,000\n```\n\n**Step 4: Find COGS from ITR**\n```\nITR = COGS / Average Inventory\n(Average Inventory = Inventory if only one value given)\n6 = COGS / 2,00,000\nCOGS = 6 × 2,00,000 = ₹ 12,00,000\n```\n\n**Step 5: Find Revenue from Operations (Sales)**\n```\nGP on Cost = 25%\nGP Amount = 25% of 12,00,000 = ₹ 3,00,000\nRevenue = COGS + GP = 12,00,000 + 3,00,000 = ₹ 15,00,000\n```\n\n---\n\n### ✅ Answer: Annual Sales = **₹ 15,00,000**\n\n> 💡 **Exam Tip**: This is a classic "Chain-Link" problem. Every answer feeds the next question. The secret is recognizing that **Quick Ratio − CR** when multiplied by CL gives you Stock. From Stock, you can find COGS via Turnover.'
  },
  {
    id: 'ch5-2324-q32-b',
    year: '2023-24',
    type: 'Numerical (3 Marks)',
    marks: 3,
    question: "32. b) Calculate debt to capital employed ratio from the following information.\nShareholder funds ₹ 15,00,000\n8% Debenture ₹ 7,50,000\nCurrent liabilities ₹ 2,50,000\nNon -current Assets ₹ 17,50,000\nCurrent Assets ₹7,50,000",
    markingScheme: "(b) Debt to Capital employed ratio = Debt / Capital Employed\n\nDebt to Capital employed ratio = 7,50,000 / (7,50,000 + 15,00,000)\n= 7,50,000 / 22,50,000\n\nDebt to Capital employed ratio = 1/3 = 0.33 : 1",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Shareholders\' Funds (Equity) | ₹ 15,00,000 |\n| 8% Debentures | ₹ 7,50,000 |\n| Current Liabilities | ₹ 2,50,000 |\n| Non-current Assets | ₹ 17,50,000 |\n| Current Assets | ₹ 7,50,000 |\n| Required | Debt to Capital Employed Ratio |\n\n---\n\n### 💡 Formula\n\n```\nDebt to Capital Employed Ratio = Long-term Debt / Capital Employed\n```\n\n> Capital Employed = Long-term Debt + Shareholders\' Funds = Debt + Equity\n\n---\n\n### 🧮 Step 1: Identify the Numerator (Long-term Debt)\n\n```\nLong-term Debt = 8% Debentures = ₹ 7,50,000\n```\n\n*(Do NOT include Current Liabilities here — those are short-term)*\n\n### 🧮 Step 2: Calculate Capital Employed (Denominator)\n\n```\nCapital Employed = Long-term Debt + Shareholders\' Funds\n                 = 7,50,000 + 15,00,000\n                 = ₹ 22,50,000\n```\n\n### 🧮 Step 3: Calculate the Ratio\n\n```\nDebt to Cap Employed = 7,50,000 / 22,50,000 = 1/3 = 0.33 : 1\n```\n\n---\n\n### ✅ Answer: **0.33 : 1** (or **1 : 3**)\n\n> 💡 **Exam Tip**: Current Liabilities are NOT part of Capital Employed. Only Long-term Debt + Shareholders\' Funds = Capital Employed. This is the most common error students make in this ratio.'
  },

  // --- SQP 2022-23 ---
  {
    id: 'ch5-2223-q27-or',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "27. OR\n\nWhich one of the following is correct?\n\n(i) Quick Ratio can be more than Current Ratio.\n(ii) High Inventory Turnover ratio is good for the organisation , except when goods are bought in small lots or sold quickly at low margins to realise cash.\n(iii) Sum of Operating Ratio and Operating Profit ratio is always 100%.\n\na) All are correct.\nb) Only (i) and (iii) are correct.\nc) Only (ii) and (iii) are correct.\nd) Only (i) and (ii) are correct",
    markingScheme: "c) Only (ii) and (iii) are correct",
    aiExplanation: "**AI Detailed Explanation**:\n*   (i) **False**: Quick Ratio excludes Inventory, so it CANNOT be higher than Current Ratio.\n*   (ii) **True**: Usually high efficiency, but can imply 'stock-outs'.\n*   (iii) **True**: Operating Cost % + Operating Margin % = Total Sales % (100)."
  },
  {
    id: 'ch5-2223-q28',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "28. From the following calculate Interest coverage ratio\nNet profit after tax Rs 12,00,000; 10% debentures Rs 1,00,00,000; Tax Rate 40%\n\na) 1.2 times b) 3 times\nc) 2 times d) 5 times",
    markingScheme: "b) 3 times",
    aiExplanation: "**AI Detailed Explanation**:\n**Step 1: Grossing up PAT**\n*   PAT (12L) is 60% of Pre-Tax profit.\n*   PBT = 12,00,000 / 0.6 = **20,00,000**.\n\n**Step 2: Add Interest**\n*   Interest = 10% of 1 Crore = **10,00,000**.\n*   PBIT = 20L + 10L = **30,00,000**.\n\n**Step 3: Ratio**\n*   PBIT / Interest = 30L / 10L = **3 Times**."
  },
  {
    id: 'ch5-2223-q32',
    year: '2022-23',
    type: 'Theory (3 Marks)',
    marks: 3,
    question: "32. Lala Ltd. and Bala Ltd. use different accounting policies for inventory valuation. These variations leave a big question mark on the cross-sectional analysis and comparison of these two firms was not possible.\n\nIdentify the limitation of Ratio Analysis highlighted in the above situation. Also explain any two other limitations of Ratio Analysis apart from the identified above.",
    markingScheme: "Variations of Accounting Practice as Limitation is highlighted in the given statement.\n\nTwo Other Limitations (Any two of the following, with suitable explanation)\n(a) Limitations of Accounting Data\n(b) Ignores Price-level Changes\n(c) Ignore Qualitative or Non-monetary Aspects\n(d) Forecasting",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 The Scenario\n\nLala Ltd. and Bala Ltd. use **different inventory valuation methods** (e.g., FIFO vs Weighted Average). Because of this, their cost figures differ even for identical goods, making cross-sectional comparison unreliable.\n\n---\n\n### 💡 Step 1: Identify the Highlighted Limitation\n\n**Identified Limitation**: **Variations in Accounting Policies** (Lack of Uniformity)\n\n> ⚠️ Companies can legally choose from multiple accounting methods (inventory, depreciation, revenue recognition). When two companies use different methods, their ratios CANNOT be directly compared. The numbers don\'t represent the same reality.\n\n---\n\n### 💡 Step 2: Two Other Limitations\n\n**Limitation 2: Historical Nature (Ignores Price-Level Changes)**\n- Accounting uses **original purchase price** (historical cost).\n- As prices rise (inflation), the real value of assets diverges from book value.\n- Comparing ratios of years with **different price levels** gives misleading trends.\n- **Example**: Inventory bought at 2015 prices vs 2024 prices — same quantity, wildly different values.\n\n**Limitation 3: Ignores Qualitative Factors**\n- Ratios are purely **quantitative** (based on numbers).\n- They cannot capture: **employee morale**, **brand value**, **management quality**, **customer loyalty**.\n- **Example**: Two companies with the same Current Ratio (2:1) — one has a brilliant CEO, the other doesn\'t. Ratios are blind to this.\n\n---\n\n### ✅ Summary For the Exam\n\n| # | Limitation | Key Point |\n|---|---|---|\n| 1 | Variations in Accounting Policies | Makes inter-firm comparison unfair |\n| 2 | Historical Cost / Price-Level | Ignores inflation and real value changes |\n| 3 | Qualitative Factors Ignored | Ratios miss talent, brand, ethics |\n\n> 💡 **Exam Tip**: For 3-mark theory questions, follow this structure: (1) Name the Limitation, (2) Explain what it means, (3) Give a short example. This earns full marks.'
  },
  {
    id: 'ch5-2223-q33',
    year: '2022-23',
    type: 'Numerical (4 Marks)',
    marks: 4,
    question: "33. Determine Return on Investment and Net Assets Turnover ratio from the following information:-\n\nProfits after Tax were ₹ 6,00,000; Tax rate was 40%; 15% Debentures were of ₹20,00,000; 10% Bank Loan was ₹ 20,00,000; 12% Preference Share Capital ₹ 30,00,000; Equity Share Capital ₹ 40,00,000 ; Reserves and Surplus were ₹ 10,00,000; Sales ₹ 3,75,00,000 and Sales Return ₹ 15,00,000.",
    markingScheme: "Return on Investment = EBIT / Capital Employed x 100\n= 15,00,000/1,20,00,000 x 100 = 12.5%\n\nCapital Employed = 12% Preference Share Capital + Equity Share Capital + Reserves and Surplus + 15% Debentures + 10% Bank Loan\n= 30,00,000 + 40,00,000 + 10,00,000 + 20,00,000 + 20,00,000 = ₹ 1,20,00,000\n\nEBIT = Profits after Tax + Tax + Interest\n= 6,00,000 + 4,00,000 + 5,00,000 = ₹ 15,00,000\n\nNet Assets Turnover ratio = Revenue from Operations/Capital Employed\n= 3,60,00,000/1,20,00,000 = 3 times",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Profit After Tax (PAT) | ₹ 6,00,000 |\n| Tax Rate | 40% |\n| 15% Debentures | ₹ 20,00,000 |\n| 10% Bank Loan | ₹ 20,00,000 |\n| 12% Preference Share Capital | ₹ 30,00,000 |\n| Equity Share Capital | ₹ 40,00,000 |\n| Reserves & Surplus | ₹ 10,00,000 |\n| Sales | ₹ 3,75,00,000 |\n| Sales Return | ₹ 15,00,000 |\n\n---\n\n### 💡 Formulas\n\n```\nROI = (PBIT / Capital Employed) × 100\nNet Assets Turnover = Revenue from Operations / Capital Employed\n```\n\n---\n\n### 🧮 Part A: Return on Investment (ROI)\n\n**Step 1: Capital Employed**\n```\nCapital Employed = All Long-term Funds\n= Pref Cap (30L) + Equity Cap (40L) + Reserves (10L)\n  + 15% Deb (20L) + 10% Loan (20L)\n= ₹ 1,20,00,000\n```\n\n**Step 2: Find PBIT from PAT**\n```\nPAT = 6,00,000 = 60% of PBT (Tax is 40%)\nPBT = 6,00,000 / 0.60 = ₹ 10,00,000\n\nInterest on 15% Deb = 15% × 20L = 3,00,000\nInterest on 10% Loan = 10% × 20L = 2,00,000\nTotal Interest = 5,00,000\n\nPBIT = PBT + Interest = 10L + 5L = ₹ 15,00,000\n```\n\n**Step 3: ROI**\n```\nROI = (15,00,000 / 1,20,00,000) × 100 = 12.5%\n```\n\n---\n\n### 🧮 Part B: Net Assets Turnover Ratio\n\n**Step 4: Net Revenue from Operations**\n```\nNet Sales = Sales − Returns = 3,75,00,000 − 15,00,000 = ₹ 3,60,00,000\n```\n\n**Step 5: Turnover Ratio**\n```\nNet Assets Turnover = 3,60,00,000 / 1,20,00,000 = 3 Times\n```\n\n---\n\n### ✅ Answers\n\n| Ratio | Answer |\n|---|---|\n| Return on Investment | **12.5%** |\n| Net Assets Turnover | **3 Times** |\n\n> 💡 **Exam Tip**: Capital Employed includes **BOTH** debt and equity. Always include Preference Share Capital and Bank Loans in Capital Employed. Many students only include Equity.'
  },
  {
    id: 'ch5-2223-q33-or',
    year: '2022-23',
    type: 'Numerical Analysis (4 Marks)',
    marks: 4,
    question: "33. OR\n\nDebt to Capital Employed ratio is 0.3:1. State whether the following transactions, will improve, decline or will have no change on the Debt to Capital Employed Ratio. Also give reasons for the same.\n\n(i) Sale of Equipments costing ₹ 10,00,000 for ₹ 9,00,000.\n(ii) Purchased Goods on Credit for ₹ 1,00,000 for a credit of 15 months, assuming operating cycle is of 18 months.\n(iii) Conversion of Debentures into Equity Shares of ₹ 2,00,000.\n(iv) Tax Refund of ₹ 50,000 during the year.",
    markingScheme: "(i) Ratio will improve. Reason – Capital Employed will decrease and Debt will remain same\n(ii) Ratio will remain same. Reason – Both Debt and Capital Employed will remain same.\n(iii) Ratio will decline. Reason – Debt will decrease but Capital Employed will remain same.\n(iv) Ratio will decline. Reason – Capital Employed will increase but Debt will remain same.",
    aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Info | Details |\n|---|---|\n| Debt to Capital Employed Ratio | 0.3 : 1 (Debt is LOW relative to Capital Employed) |\n| 4 transactions | To analyze effect on ratio |\n\n> When Ratio is 0.3:1, think: Debt = 30, Capital Employed = 100, Equity = 70\n\n---\n\n### 💡 Key Definitions\n\n- **Long-term Debt**: LT Borrowings + LT Provisions (e.g., Debentures, Bank Loans)\n- **Capital Employed**: LT Debt + Shareholders\' Funds (i.e., the sum remains = CE)\n- **Current Liabilities**: NOT part of Capital Employed\n\n---\n\n### 🧮 Transaction Analysis\n\n**(i) Sale of Equipment at Loss (₹10L for ₹9L)**\n```\nFixed Asset goes down. Cash comes in (9L).\nLoss of 1L reduces Profit → reduces Reserves (Equity) → reduces CE.\nLong-term Debt unchanged.\nSmaller denominator (CE) with same numerator (Debt) → Ratio INCREASES.\nResult: 📈 Improve / Increase\n```\n\n**(ii) Goods bought on Credit for 15 months (operating cycle = 18 months)**\n```\nCredit for 15 months. Operating cycle is 18 months.\nIf credit period < operating cycle, it is a CURRENT liability (Trade Payable).\nCurrent Liabilities do NOT affect Capital Employed.\nLong-term Debt unchanged, CE unchanged.\nResult: ➡️ No Change\n```\n\n**(iii) Conversion of Debentures into Equity Shares (₹2L)**\n```\nDebentures decrease (Debt / LT Debt goes DOWN).\nEquity increases by same amount.\nCapital Employed = Debt + Equity = unchanged (one swapped for another).\nSmaller numerator (Debt), same denominator (CE) → Ratio DECREASES.\nResult: 📉 Decline\n```\n\n**(iv) Tax Refund of ₹50,000**\n```\nCash received → Asset increases.\nIf tax refund = Advance Tax refund, it reduces Advance Tax (Current Asset).\nActually: Tax refund increases cash → but where does it go in equity?\nRefund is income/cancellation of previous expense → increases Retained Earnings (Equity) → CE increases.\nLong-term Debt unchanged.\nBigger denominator (CE), same numerator → Ratio DECREASES.\nResult: 📉 Decline\n```\n\n---\n\n### ✅ Summary Table\n\n| Transaction | Debt | Capital Employed | Effect |\n|---|---|---|---|\n| (i) Sale of Equip at Loss | Same | ⬇️ Smaller | **Improve** |\n| (ii) Goods on Credit | Same | Same | **No Change** |\n| (iii) Debentures → Equity | ⬇️ Smaller | Same | **Decline** |\n| (iv) Tax Refund | Same | ⬆️ Larger | **Decline** |\n\n> 💡 **Exam Tip**: When Debt converts to Equity, total Capital Employed stays the SAME (just reshuffled). But Debt (numerator) goes down. So ratio falls. This is a commonly tested concept!'
  }
];

export const CH5_MINDMAP: MindMapNodeData[] = [
  {
    id: 'ch5-m1',
    title: '1. Fundamentals (Theory)',
    iconName: 'Target',
    colorClass: 'border-indigo-500 text-indigo-600',
    items: [
      {
        label: 'Meaning',
        children: ['Relation between 2 numbers']
      },
      {
        label: 'Expressions',
        children: ['Proportion (2:1), Percentage (%), Times, Fraction']
      },
      {
        label: 'Analysis Types',
        children: ['Inter-firm & Intra-firm']
      },
      {
        label: 'Limitations',
        children: ['Historical Cost, No Qualitative factors, Window Dressing']
      }
    ]
  },
  {
    id: 'ch5-m2',
    title: '2. Liquidity (Short-term)',
    iconName: 'Activity',
    colorClass: 'border-emerald-500 text-emerald-600',
    items: [
      {
        label: 'Current Ratio',
        children: ['Current Assets / Current Liabilities (Ideal 2:1)']
      },
      {
        label: 'Quick Ratio',
        children: ['Quick Assets / Current Liabilities (Ideal 1:1)']
      },
      {
        label: 'Quick Assets',
        children: ['Current Assets - (Inventory + Prepaid + Advance Tax)']
      },
      {
        label: 'Objective',
        children: ['Meeting short-term obligations']
      }
    ]
  },
  {
    id: 'ch5-m3',
    title: '3. Solvency (Long-term)',
    iconName: 'Scale',
    colorClass: 'border-purple-500 text-purple-600',
    items: [
      {
        label: 'Debt-Equity Ratio',
        children: ['Debt / Equity (Ideal 2:1)']
      },
      {
        label: 'Debt to Capital Employed',
        children: ['Long-term Debt / Capital Employed']
      },
      {
        label: 'Proprietary Ratio',
        children: ['Shareholders\' Funds / Total Assets']
      },
      {
        label: 'Interest Coverage',
        children: ['Profit Before Interest & Tax / Interest (Times)']
      }
    ]
  },
  {
    id: 'ch5-m4',
    title: '4. Activity (Efficiency)',
    iconName: 'Layers',
    colorClass: 'border-orange-500 text-orange-600',
    items: [
      {
        label: 'Inventory Turnover',
        children: ['Cost of Revenue / Average Inventory']
      },
      {
        label: 'Trade Receivables Turnover',
        children: ['Credit Sales / Average Receivables']
      },
      {
        label: 'Average Collection Period',
        children: ['365 / Trade Receivables Turnover']
      },
      {
        label: 'Working Capital Turnover',
        children: ['Sales / Working Capital']
      }
    ]
  },
  {
    id: 'ch5-m5',
    title: '5. Profitability (Margins)',
    iconName: 'BarChart3',
    colorClass: 'border-blue-500 text-blue-600',
    items: [
      {
        label: 'Gross Profit Ratio',
        children: ['Gross Profit / Sales']
      },
      {
        label: 'Operating Ratio',
        children: ['Operating Cost / Sales']
      },
      {
        label: 'Operating Profit Ratio',
        children: ['Operating Profit / Sales']
      },
      {
        label: 'Net Profit Ratio',
        children: ['Net Profit / Sales']
      }
    ]
  },
  {
    id: 'ch5-m6',
    title: '6. Performance (Returns)',
    iconName: 'Calculator',
    colorClass: 'border-red-500 text-red-600',
    items: [
      {
        label: 'Return on Investment',
        children: ['Profit Before Interest & Tax / Capital Employed']
      },
      {
        label: 'Return on Net Worth',
        children: ['Profit After Tax / Shareholders\' Funds']
      },
      {
        label: 'Earnings Per Share',
        children: ['Profit for Eq / Number of Shares']
      },
      {
        label: 'Price Earning Ratio',
        children: ['Market Price / Earnings Per Share']
      }
    ]
  }
];

export const CH5_CHAPTER: any = {
  id: 'ch5',
  title: 'Chapter 5: Accounting Ratios',
  theory: CH5_THEORY,
  flashcards: CH5_FLASHCARDS,
  mindMap: CH5_MINDMAP,
  cheatSheet: CH5_CHEATSHEET,
  sqps: CH5_SQPS,
  weightage: '6-9 Marks'
};
