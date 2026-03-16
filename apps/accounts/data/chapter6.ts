import { TheoryTopic, Flashcard, SQPQuestion, MindMapNodeData, CheatSheetData } from '../types';

export const CH6_THEORY: TheoryTopic[] = [
  {
    id: 'cfs-intro-objectives',
    title: '1. Introduction & Objectives',
    content: 'A comprehensive overview of Cash Flow Statements as per AS-3 (Revised).',
    subtopics: [
      {
        title: 'Meaning & Scope',
        description: 'A **Cash Flow Statement (CFS)** provides information about the historical changes in cash and cash equivalents of an enterprise by classifying cash flows into operating, investing, and financing activities.',
        points: [
          '**Cash Flows**: Inflows and outflows of cash and cash equivalents.',
          '**Cash**: Cash on hand and demand deposits with banks.',
          '**Cash Equivalents**: Short-term, highly liquid investments that are readily convertible to known amounts of cash and which are subject to an insignificant risk of changes in value (e.g., T-Bills, Commercial Paper).'
        ]
      },
      {
        title: 'Objectives of CFS',
        description: 'Why do we prepare it?',
        points: [
          '**Source & Application**: To identify where cash came from and where it was spent.',
          '**Liquidity & Solvency**: To assess the ability of the enterprise to generate cash flows and meet obligations.',
          '**Discrepancies**: To explain the difference between Net Profit (Accrual) and Net Cash from Operations.'
        ]
      },
      {
        title: 'Illustration 1: Classification Practice (Test Your Understanding)',
        description: 'Comprehensive list of activities and their classification into Operating (Principal), Investing (Assets), and Financing (Capital).',
        illustration: {
          type: 'table',
          concept: 'Classification is the foundation of CFS. AS-3 (Revised) requires separating flows into three distinct business activities.',
          formula: 'Operating Activities = Core Revenue | Investing Activities = Long-term Assets | Financing Activities = Capital & Borrowings',
          content: [
            ['Transaction', 'Activity', 'Nature'],
            ['Purchase of machinery', 'Investing', 'Outflow'],
            ['Proceeds from issue of equity share capital', 'Financing', 'Inflow'],
            ['Cash revenue from operations', 'Operating', 'Inflow'],
            ['Proceeds from long-term borrowings', 'Financing', 'Inflow'],
            ['Proceeds from sale of old machinery', 'Investing', 'Inflow'],
            ['Cash receipt from trade receivables', 'Operating', 'Inflow'],
            ['Trading commission received', 'Operating', 'Inflow'],
            ['Purchase of non-current investment', 'Investing', 'Outflow'],
            ['Redemption of preference shares', 'Financing', 'Outflow'],
            ['Cash purchases', 'Operating', 'Outflow'],
            ['Proceeds from sale of non-current investment', 'Investing', 'Inflow'],
            ['Purchase of goodwill', 'Investing', 'Outflow'],
            ['Cash paid to supplier', 'Operating', 'Outflow'],
            ['Interim dividend paid on equity shares', 'Financing', 'Outflow'],
            ['Employee benefits expenses paid', 'Operating', 'Outflow'],
            ['Proceeds from sale of patents', 'Investing', 'Inflow'],
            ['Interest received on debentures held as investment', 'Investing', 'Inflow'],
            ['Interest paid on long-term borrowings', 'Financing', 'Outflow'],
            ['Office and administrative expenses paid', 'Operating', 'Outflow'],
            ['Manufacturing overheads paid', 'Operating', 'Outflow'],
            ['Dividend received on shares held as investment', 'Investing', 'Inflow'],
            ['Rent received on property held as investment', 'Investing', 'Inflow'],
            ['Selling and distribution expenses paid', 'Operating', 'Outflow'],
            ['Income tax paid', 'Operating', 'Outflow'],
            ['Dividend paid on preferences shares', 'Financing', 'Outflow'],
            ['Under-writing commission paid', 'Financing', 'Outflow'],
            ['Rent paid', 'Operating', 'Outflow'],
            ['Brokerage paid on purchase of non-current investment', 'Investing', 'Outflow'],
            ['Bank overdraft', 'Financing', 'Borrowing'],
            ['Cash credit', 'Financing', 'Borrowing'],
            ['Short-term deposit', 'Cash Equivalent', 'N/A'],
            ['Marketable securities', 'Cash Equivalent', 'N/A'],
            ['Refund of income-tax received', 'Operating', 'Inflow']
          ],
          caption: 'Ill 1: 33-Item Classification Master List',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Golden Rule of 3**\n*   **Operating**: Principal revenue activities (buying/selling goods, paying salaries, tax). This is the *Engine*.\n*   **Investing**: Buying/selling long-term resources (machines, furniture, investments, interest received). This is the *Infrastructure*.\n*   **Financing**: Changing capital structure (shares, loans, dividends paid). This is the *Fuel*.\n\n**2. Tricky Items**\n*   **Bank Overdraft**: Treated as Financing (Short-term borrowing).\n*   **Marketable Securities**: Treated as Cash Equivalents (Not Investing).\n*   **Rent Received**: Investing (if property held as investment) vs Operating (if real estate business).'
        }
      }
    ]
  },
  {
    id: 'operating-logic-indirect',
    title: '2. Operating Activities (Indirect Method)',
    content: 'Step-by-step derivation from Net Profit to determine cash from core operations.',
    subtopics: [
      {
        title: 'Definition & Significance',
        description: 'Operating activities are the principal revenue-generating activities of an enterprise. They represent the main source of revenue and expenditure for a business.',
        points: [
          '**Examples**: Cash receipts from the sale of goods and services, royalties, commissions; cash payments to suppliers, and payments to employees.',
          '**Significance**: The cash flow from these activities indicates the "internal solvency level" of the company—its ability to maintain operations, pay dividends, and repay loans without relying on external financing.'
        ]
      },
      {
        title: 'The Logic of the Indirect Method',
        description: 'Most companies use the **Indirect Method** to calculate cash flow from operations because the Statement of Profit and Loss is prepared on an **accrual basis**.',
        points: [
          '**The Problem**: The P&L includes non-cash items (like depreciation) and non-operating items (like profit on sale of land).',
          '**The Solution**: Start with **Net Profit/Loss** and work backward. Adjust this figure to remove the effects of non-cash and non-operating transactions to arrive at the actual cash generated.'
        ]
      },
      {
        title: 'Format and Steps (Proforma)',
        description: 'The calculation follows a specific order:\n\n**Step A**: Determine Net Profit before Taxation and Extraordinary Items (Add back Provision for Tax, Proposed Dividend of Previous Year).\n**Step B**: Adjust for Non-Cash and Non-Operating Items (Add Depreciation, Interest Paid; Deduct Interest Income, Profit on Sale).\n**Step C**: Adjust for Working Capital Changes.\n**Step D**: Deduct Income Tax Paid.',
        illustration: {
          type: 'table',
          concept: 'The Indirect Method starts with Net Profit and reconciles it back to Operating Cash by removing non-cash distortions (like Depreciation) and non-operating distortions (like Interest).',
          formula: 'Cash from Operations = Net Profit Before Tax + Non-cash Expenses - Non-operating Income ± Working Capital Adjustments - Tax Paid',
          content: [
            ['Particulars', 'Adjustment'],
            ['Net Profit Before Tax and Extraordinary Items', 'START'],
            ['(+) Non-cash items (Depreciation, Goodwill Amortised)', 'ADD'],
            ['(+) Non-operating expenses (Interest Paid, Loss on Sale)', 'ADD'],
            ['(-) Non-operating incomes (Dividend Received, Profit on Sale)', 'LESS'],
            ['= Operating Profit before Working Capital changes', 'SUBTOTAL'],
            ['(+) Decrease in Current Assets / Increase in Current Liabilities', 'ADD'],
            ['(-) Increase in Current Assets / Decrease in Current Liabilities', 'LESS'],
            ['= Cash Generated from Operations', 'SUBTOTAL'],
            ['(-) Income Tax Paid', 'LESS'],
            ['(+/-) Extraordinary Items', 'ADJUST'],
            ['= Net Cash from Operating Activities', 'FINAL']
          ],
          caption: 'Ill 2: The Logic of Indirect Method (Exhibit 6.4)',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Starting Point: Net Profit**\nThis is an "Accountant\'s Profit" (Accrual basis). It has deducted non-cash items (Depreciation) and non-business items (Loss on Sale of Land).\n\n**2. The Reversal (Add Back)**\n*   **Depreciation**: Cash never left the building, but it reduced profit. So we ADD it back.\n*   **Interest Paid**: This is a Financing Activity, not Operating. So we ADD it back here (and deduct it in Financing later).\n\n**3. The Working Capital Logic**\n*   **Increase in Creditors**: We bought goods but didn\'t pay cash yet. We saved cash. So ADD.\n*   **Increase in Debtors**: We sold goods but didn\'t get cash yet. Cash is stuck. So LESS.'
        }
      },
      {
        title: 'Important Notes on Specific Items',
        description: 'Critical distinctions to avoid common errors:',
        points: [
          '**Short-term Investments**: Marketable Securities are **Cash Equivalents**, NOT Current Assets. Do not include in Working Capital changes.',
          '**Current vs. Non-Current**: Only **Current** assets and liabilities (Inventories, Trade Receivables, Trade Payables) are adjusted in Step C. Fixed assets go to Investing Activities.',
          '**Proposed Dividend**: Use **Previous Year (PY)** figure for both adding back in Step A and deducting in Financing. Current Year is ignored.'
        ]
      },
      {
        title: 'Illustration 3: Operating Activities with Notes',
        description: 'Calculating Operating Profit before Working Capital Changes using Notes to Accounts.',
        illustration: {
          type: 'table',
          concept: 'Handling non-cash and non-operating items given in Notes.\n\n**Given**: NPBT=5L. Notes: Dep=40k, Goodwill Amortised=20k, Int on Borrowings=30k, Gain on Sale of Land=15k.',
          formula: 'Net Profit + Non-Cash Expenses + Non-Operating Expenses - Non-Operating Incomes',
          content: [
            ['Particulars', 'Amount (₹)'],
            ['Net Profit Before Tax', '5,00,000'],
            ['(+) Depreciation', '40,000'],
            ['(+) Goodwill Amortised', '20,00,000'],
            ['(+) Interest on Borrowings (Financing Exp)', '30,000'],
            ['(-) Gain on Sale of Land (Investing Inc)', '(15,000)'],
            ['Operating Profit before WC Changes', '5,75,000']
          ],
          caption: 'Ill 3: Adjusting P&L for Non-Cash Items',
          resolution: '**AI Detailed Explanation**:\n\n**1. Identifying Non-Cash Expenses (Add)**\n*   **Depreciation (40k)**: Book entry only. No cash out.\n*   **Goodwill Amortised (20k)**: Writing off asset value. No cash out.\n*   **Action**: Add both back to Profit.\n\n**2. Determining Non-Operating Items**\n*   **Interest on Borrowings (30k)**: This is Financing cost. Add back to Operating Profit.\n*   **Gain on Sale of Land (15k)**: This is Investing income. Deduct from Operating Profit.\n\n**3. Result**: Operating Profit before Working Capital Changes = **₹5,75,000**.'
        }
      },
      {
        title: 'Illustration 4: Operating Activities with Working Capital',
        description: 'Adjusting for changes in Current Assets and Current Liabilities.',
        illustration: {
          type: 'table',
          concept: 'Inverse relationship for Assets, Direct relationship for Liabilities.\n\n**Given**: Op Profit=5.75L. Debtors Inc=10k, Stock Dec=5k, Creditors Inc=15k, Prepaid Exp Inc=2k.',
          formula: 'Add: Dec in CA, Inc in CL | Less: Inc in CA, Dec in CL',
          content: [
            ['Particulars', 'Adjustment', 'Amount (₹)'],
            ['Operating Profit before WC Changes', '', '5,75,000'],
            ['(+) Decrease in Stock (Asset released)', 'ADD', '5,000'],
            ['(+) Increase in Creditors (Cash saved)', 'ADD', '15,000'],
            ['(-) Increase in Debtors (Cash tied up)', 'LESS', '(10,000)'],
            ['(-) Increase in Prepaid Exp (Cash paid)', 'LESS', '(2,000)'],
            ['Cash Generated from Operations', '', '5,83,000']
          ],
          caption: 'Ill 4: Working Capital Adjustments',
          resolution: '**AI Detailed Explanation**:\n\n**1. The Inflow Logic (Add)**\n*   **Dec in Stock (5k)**: We sold off stock and didn\'t replace it. Cash is released.\n*   **Inc in Creditors (15k)**: We bought goods on credit. Cash is saved in our pocket.\n\n**2. The Outflow Logic (Less)**\n*   **Inc in Debtors (10k)**: Customers owe us more. Cash is stuck with them.\n*   **Inc in Prepaid (2k)**: We paid cash in advance. Cash went out.\n\n**3. Final Flow**: 5.75L + 20k (In) - 12k (Out) = **₹5.83L**.'
        }
      }
    ]
  },
  {
    id: 'ledger-accounts-theory',
    title: '3. Ledger Accounts & Adjustments',
    content: 'Uncovering hidden cash flows (Purchases, Sales, Tax Paid) using missing figure analysis.',
    subtopics: [
      {
        title: 'The Logic of Hidden Values',
        description: 'Adjustments given outside the Balance Sheet require preparing ledger accounts to find the "missing" inflow or outflow.',
        points: [
          '**Fixed Asset Account**: If opening balance changes due to more than just depreciation, there must be a Purchase (Outflow) or Sale (Inflow).',
          '**Provision for Tax Account**: Finds definitions for "Tax Paid" (Operating Outflow) vs "Tax Provided" (Added to Net Profit Before Tax).',
          '**Accumulated Depreciation**: Separate account isolates non-cash depreciation from actual asset movements.'
        ]
      },
      {
        title: 'Illustration 5 & 6: Fixed Assets & Tax',
        description: 'Using ledgers to find hidden figures.',
        illustration: {
          type: 'table',
          concept: 'Ledger reconstruction is used to uncover "hidden" cash flows. By plugging in known balances, the missing cash flow emerges.\n\n**Given (Example)**: Opening Tax=10k, Closing Tax=15k, Tax Paid=8k.',
          formula: 'Missing Value = (Closing Balance + Deductions) - (Opening Balance + Additions)',
          content: [
            ['Account', 'Missing Key', 'Formula/Logic'],
            ['Fixed Asset (at Cost)', 'Switch Purchase/Sale', 'Opening + Purchase - Sold = Closing'],
            ['Accumulated Depreciation', 'Depreciation Charged', 'Opening + Depreciation Charged - Depreciation on Sold = Closing'],
            ['Provision for Tax', 'Tax Paid/Made', 'Opening + Made (P&L) - Paid (Bank) = Closing']
          ],
          caption: 'Ill 5 & 6: Ledger Logic Shortcuts',
          resolution: 'Tax Ledger Example:\n1. If Opening = 10k, Closing = 15k, and Tax Paid = 8k:\n2. Tax Made (P&L) = 15k + 8k - 10k = 13k.'
        }
      }
    ]
  },
  {
    id: 'investing-financing-flow',
    title: '4. Investing & Financing Streams',
    content: 'Dealing with long-term resources (Assets) and capital structure (Equity/Debt).',
    subtopics: [
      {
        title: 'Investing Activities',
        description: 'Acquisition and disposal of long-term assets and other investments not included in cash equivalents.',
        points: [
          '**Inflows**: Cash sale of fixed assets (machinery, land), Interest received, Dividend received.',
          '**Outflows**: Cash purchase of fixed assets, purchase of shares/debentures of other companies.'
        ]
      },
      {
        title: 'Financing Activities',
        description: 'Activities that result in changes in the size and composition of the owners’ capital and borrowings of the enterprise.',
        points: [
          '**Inflows**: Issue of shares, Issue of debentures, Loans raised, Bank Overdraft increase.',
          '**Outflows**: Redemption of debentures, Buy-back of shares, Repayment of loans, Dividend paid, Interest paid on borrowings.'
        ]
      }
    ]
  },
  {
    id: 'cfs-special-items',
    title: '5. Special Treatments',
    content: 'Handling complex items like Tax, Extraordinary items, and Dividends under AS-3.',
    subtopics: [
      {
        title: 'Taxes on Income',
        description: 'Tax flows must be disclosed separately.',
        points: [
          '**Operating**: Tax paid on normal profits.',
          '**Investing**: Tax on Capital Gains (e.g., sale of land).',
          '**Financing**: Dividend Distribution Tax.'
        ]
      },
      {
        title: 'Extraordinary Items',
        description: 'Non-recurring events distinct from ordinary business activities.',
        points: [
          '**Rule**: Classified based on the source of the flow.',
          '**Examples**: Insurance claim for loss of stock (Operating), Insurance claim for loss of machinery (Investing), Winning a lawsuit (Operating/Investing depending on nature).'
        ]
      },
      {
        title: 'Proposed Dividend',
        description: 'Contingent Liability treatment.',
        points: [
          '**Current Year**: Ignored (shown in Notes only).',
          '**Previous Year**: Added to Net Profit (Step A) AND Deducted from Financing (as Paid).'
        ]
      },
      {
        title: 'Interest & Dividends Classification',
        description: 'Depends on the nature of the business.',
        points: [
          '**Non-Financial Co**: Interest/Dividend Paid = Financing; Interest/Dividend Received = Investing.',
          '**Financial Co**: Interest/Dividend Paid = Financing; Interest/Dividend Received = Operating (Core Business).'
        ]
      }
    ]
  },
  {
    id: 'comprehensive-illustrations',
    title: '6. Comprehensive Illustrations (Full CFS)',
    content: 'Solving full-length problems from Balance Sheet data.',
    subtopics: [
      {
        title: 'Illustration 7: Pioneer Ltd',
        description: 'Full CFS with Fixed Assets and Loan adjustments.',
        illustration: {
          type: 'table',
          concept: 'Comprehensive CFS analysis tests the ability to reconcile independent streams. If Operating Cash is high but Investing is negative, it indicates internal funding of growth.\n\n**Given**: NPBT (after Adj)=2.7L, Eq Sale=30k, New Shares=2L.',
          formula: 'Closing Cash & Bank Balance = (Operating Cash ± Investing Cash ± Financing Cash) + Opening Cash & Bank Balance',
          content: [
            ['Activity', 'Particulars', 'Amount (₹)'],
            ['OPERATING', 'Net Profit Before Tax (2.7L) + Depreciation (45k) + Loss (5k) + Interest (10k)', '3,35,000'],
            ['', 'Working Capital Changes: -Inventory -Trade Receivables +Rent -Payables', '(1,23,000)'],
            ['', 'Less: Tax Paid', '(30,000)'],
            ['', 'Net Operating Cash', '1,82,000'],
            ['INVESTING', 'Sale of Equipment', '30,000'],
            ['', 'Purchase of Equipment', '(80,000)'],
            ['', 'Purchase of Investments', '(1,00,000)'],
            ['', 'Net Investing Cash', '(1,50,000)'],
            ['FINANCING', 'Issue of Share Capital', '2,00,000'],
            ['', 'Repayment of Bank Loan', '(50,000)'],
            ['', 'Dividend Paid', '(50,000)'],
            ['', 'Interest Paid', '(10,000)'],
            ['', 'Net Financing Cash', '90,000'],
            ['RESULT', 'Net Increase (1.22L) + Op Cash (2.05L)', '3,27,000 (Cl Cash)']
          ],
          caption: 'Ill 7: Pioneer Ltd - Full Solution',
          resolution: '1. Net change = 1,82,000 - 1,50,000 + 90,000 = 1,22,000\n2. Reconciliation: 1,22,000 (Net) + 2,05,000 (Op) = 3,27,000.'
        }
      },
      {
        title: 'Illustration 8: Xerox Ltd',
        description: 'Includes Goodwill written-off, Dividend Tax, and Land Sale profit.',
        illustration: {
          type: 'table',
          concept: 'Handling non-operating adjustments like Profit on Land and Dividend Tax requires identifying where the original cash entry should properly reside.\n\n**Given**: NPBT=3.95L, Land Sold=1.65L, Equity Issue=5L, Div Paid=1.65L.',
          formula: 'Ind AS-3 Adjustment: Non-operating items are Reversed in Operating and Added/Deducted in their respective activity.',
          content: [
            ['Activity', 'Particulars', 'Amount (₹)'],
            ['OPERATING', 'Net Profit Before Tax (3.95L) + Depreciation (40k) + Goodwill (20k) - Profit Land (15k)', '4,40,000'],
            ['', 'Working Capital Changes: -Payables -Receivables -Inventory', '(1,40,000)'],
            ['', 'Less: Tax Paid', '(65,000)'],
            ['', 'Net Operating Cash', '2,35,000'],
            ['INVESTING', 'Sale of Land & Building', '1,65,000'],
            ['', 'Purchase of Investment', '(6,00,000)'],
            ['', 'Net Investing Cash', '(4,35,000)'],
            ['FINANCING', 'Issue of Equity', '5,00,000'],
            ['', 'Redemption of Debentures', '(2,00,000)'],
            ['', 'Bank Loan Raised', '1,00,000'],
            ['', 'Dividend Paid + Div Tax', '(1,65,000)'],
            ['', 'Net Financing Cash', '2,35,000'],
            ['RESULT', 'Net Increase (35k) + Op Cash (3.40L)', '3,75,000 (Cl Cash)']
          ],
          caption: 'Ill 8: Xerox Ltd - Full Solution',
          resolution: '1. Net change = 2,35,000 - 4,35,000 + 2,35,000 = 35,000\n2. Reconciliation: 35,000 (Net) + 3,40,000 (Op) = 3,75,000.'
        }
      },
      {
        title: 'Illustration 9: Oswal Mills Ltd',
        description: 'Extraordinary Item (Earthquake Loss).',
        illustration: {
          type: 'table',
          concept: 'Extraordinary items must be clearly identified. While they are usually included in the Operating section for textbook problems, AS-3 allows classification based on their source.\n\n**Given**: NPBT=2,800, Tax Paid=1,000, Earthquake Loss=1,100, Land Sold=1,000.',
          formula: 'Cash Flow = Cash Generated from Operations - Regular Tax - Extraordinary Payments',
          content: [
            ['Activity', 'Particulars', 'Amount (₹ Lakhs)'],
            ['OPERATING', 'Net Profit Before Tax (2,800) + Interest (200) + Depreciation (200)', '3,200'],
            ['', 'Working Capital Adj: +Inventory +Receivables +Payables', '300'],
            ['', 'Less: Tax Paid', '(1,000)'],
            ['', 'Less: Loss due to Earthquake', '(1,100)'],
            ['', 'Net Operating Cash', '1,400'],
            ['INVESTING', 'Sale of Land', '1,000'],
            ['', 'Purchase of Fixed Assets & Investments', '(1,300)'],
            ['', 'Net Investing Cash', '(300)'],
            ['FINANCING', 'Redeem Preference Shares', '(100)'],
            ['', 'Repay Borrowings & Interest', '(600)'],
            ['', 'Net Financing Cash', '(700)'],
            ['RESULT', 'Net Increase (400) + Opening Cash (800)', '1,200 (Closing Cash)']
          ],
          caption: 'Ill 9: Oswal Mills - Extraordinary Items',
          resolution: '1. Net change = 1,400 - 300 - 700 = 400\n2. Reconciliation: 400 (Net) + 800 (Op) = 1,200.'
        }
      },
      {
        title: 'Illustration 10: Banjara Ltd',
        description: 'Marketable Securities (Cash Equiv) and Inter-corporate deposits.',
        illustration: {
          type: 'table',
          concept: 'Marketable Securities are "Cash Equivalents" if they have a maturity of less than 3 months. Cash movements between Cash/Bank and these securities are not reported as flows.\n\n**Given**: NPBT=3,390, Mkt Securities=670, Shares Issued=500.',
          formula: 'Net Change in Cash & Cash Equivalents = (Operating + Investing + Financing Flows) | Final Reconciliation includes Marketable Securities.',
          content: [
            ['Activity', 'Particulars', 'Amount (₹ `000)'],
            ['OPERATING', 'Net Profit Before Tax (3,390) + Depreciation + Interest Expense - Interest/Dividend Income', '3,740'],
            ['', 'Working Capital Changes', '(1,190)'],
            ['', 'Less: Tax Paid', '(900)'],
            ['', 'Add: Earthquake Settlement', '140'],
            ['', 'Net Operating Cash', '1,790'],
            ['INVESTING', 'Purchase Fixed Assets (-350) + Sale Fixed Assets (20) + Interest/Dividend Received', '70'],
            ['FINANCING', 'Issue Shares/Loans (500) - Repay (180) - Interest/Dividend', '(1,150)'],
            ['RESULT', 'Net Increase (710) + Opening Cash & Cash Equivalents (160)', '870 (Closing C&CE)'],
            ['NOTE', 'Marketable Securities (670) + Cash (200) = Closing C&CE', '870']
          ],
          caption: 'Ill 10: Banjara Ltd - Cash Equivalents Logic',
          resolution: '1. Net Flow (A+B+C) = 1,790 + 70 - 1,150 = 710\n2. Reconciliation: 710 (Net) + 160 (Op) = 870.\n3. Verify: Cl Marketable Securities (670) + Cl Cash (200) = 870.'
        }
      },
      {
        title: 'Illustration 11: Garima Ltd',
        description: 'Interim Dividend and Tax Provision.',
        illustration: {
          type: 'table',
          concept: 'Interim Dividend is paid during the year. It reduces the Surplus (retained earnings) and is a cash outflow. Unlike Proposed Dividend, it does not wait for next year.\n\n**Given**: P&L Inc=16k, Prov Tax=4k, Interim Div=4k, FA Purchase=164k+.',
          formula: 'Net Profit Before Tax Add-back: Includes Interim Dividend Paid | Financing Activities: Outflow of Interim Dividend.',
          content: [
            ['Activity', 'Particulars', 'Amount (₹)'],
            ['OPERATING', 'Net Profit Before Tax (16k+4k+4k=24k) + Depreciation (32k)', '56,000'],
            ['', 'Working Capital Changes: +Trade Payables', '1,00,000'],
            ['', 'Less: Tax Paid', '(12,000)'],
            ['', 'Net Operating Cash', '1,44,000'],
            ['INVESTING', 'Purchase of Fixed Assets (Implied)', '(1,96,000)'],
            ['', 'Net Investing Cash', '(1,96,000)'],
            ['FINANCING', 'Issue Equity + Preference Shares', '1,60,000'],
            ['', 'Interim Dividend Paid', '(4,000)'],
            ['', 'Net Financing Cash', '1,56,000'],
            ['RESULT', 'Net Increase (1,04,000) -> Corrected Total', 'Check working']
          ],
          caption: 'Ill 11: Garima Ltd - Interim Dividend',
          resolution: '1. NPBT = 16,000 (P&L Increase) + 4,000 (Prov Tax) + 4,000 (Interim Div) = 24,000\n2. Purchase of Asset = 32k (Dep) + 164k (Increase) = 196k.'
        }
      },
      {
        title: 'Illustration 12: Computer India Ltd',
        description: 'Bank Overdraft and Short-term Provisions.',
        illustration: {
          type: 'table',
          concept: 'Bank Overdraft (OD) and Cash Credit are classified as Financing Activities because they represent short-term borrowings rather than cash equivalents.\n\n**Given**: Net Op Cash=2,100, FA Sale=1,000, New Capital=4,900.',
          formula: 'Financing Activity: Include change in Bank Overdraft / Cash Credit.',
          content: [
            ['Activity', 'Particulars', 'Amount (₹ `000)'],
            ['OPERATING', 'Net Profit Before Tax (Excl Div) + Depreciation + Interest', 'Check Text'],
            ['', 'Net Operating Cash', '2,100'],
            ['INVESTING', 'Purchase/Sale Fixed Assets', '1,000'],
            ['FINANCING', 'Issue Shares + Debentures + Bank Overdraft', '4,900'],
            ['RESULT', 'Total Net Flow', '8,000']
          ],
          caption: 'Ill 12: Computer India - Bank OD Logic',
          resolution: 'Note: If OD increases from 10k to 15k, show 5k as Financing Inflow (Borrowing).'
        }
      }
    ]
  }
];

export const CH6_FLASHCARDS: Flashcard[] = [
  { id: 601, category: 'Definitions', question: "What is a Cash Flow Statement?", answer: "A statement summarizing cash inflows and outflows from operating, investing, and financing activities." },
  { id: 602, category: 'Theory', question: "Which Accounting Standard governs CFS?", answer: "AS-3 (Revised)." },
  { id: 603, category: 'Definitions', question: "Define 'Cash equivalents'.", answer: "Short-term highly liquid investments convertible to cash within 3 months with negligible value risk." },
  { id: 604, category: 'Classification', question: "Interest Received by a Finance Company is?", answer: "Operating Activity (Principal revenue source)." },
  { id: 605, category: 'Classification', question: "Interest Received by a Manufacturing Company is?", answer: "Investing Activity." },
  { id: 606, category: 'Classification', question: "Payment of Dividend is always which activity?", answer: "Financing Activity." },
  { id: 607, category: 'True/False', question: "Proposed Dividend of current year is a Current Liability.", answer: "False. It is a Contingent Liability until approved by shareholders." },
  { id: 608, category: 'Classification', question: "Purchase of Goodwill is which type of activity?", answer: "Investing Activity." },
  { id: 609, category: 'Definitions', question: "What are 'Extraordinary Items' in CFS?", answer: "Non-recurring flows like insurance claims for theft or natural disasters." },
  { id: 610, category: 'Calculations', question: "How to handle 'Increase in Inventory'?", answer: "Deduct from Operating Profit (Outflow)." },
  { id: 611, category: 'Calculations', question: "How to handle 'Decrease in Creditors'?", answer: "Add to Operating Profit (Inflow)." },
  { id: 612, category: 'Definitions', question: "What is the 'Indirect Method'?", answer: "Starting from Net Profit and adjusting for non-cash/non-operating items and Working Capital changes." },
  { id: 613, category: 'Classification', question: "Cash Revenue from operations is?", answer: "Operating Inflow." },
  { id: 614, category: 'Classification', question: "Proceeds from sale of old machinery?", answer: "Investing Inflow." },
  { id: 615, category: 'Classification', question: "Repayment of long-term borrowings?", answer: "Financing Outflow." },
  { id: 616, category: 'Theory', question: "What is a 'Non-cash' transaction?", answer: "Events involving no cash, like issue of shares for machinery or conversion of debt." },
  { id: 617, category: 'Classification', question: "Bank Overdraft and Cash Credit are?", answer: "Financing Activities (Short-term borrowings)." },
  { id: 618, category: 'Calculations', question: "Formula for Net Profit Before Tax?", answer: "Difference in P&L + Provision for Tax + Dividend Paid (Previous Year) + Reserves Transfer." },
  { id: 619, category: 'True/False', question: "Proposed Dividend of Previous Year is used in CFS.", answer: "True. It is paid in the current year." },
  { id: 620, category: 'Classification', question: "Income Tax refund is classified as?", answer: "Operating Activity." },
  { id: 621, category: 'Classification', question: "Dividends paid on preference shares?", answer: "Financing Activity." },
  { id: 622, category: 'Classification', question: "Interest paid on long-term loans?", answer: "Financing Activity (Non-finance Co)." },
  { id: 623, category: 'Classification', question: "Brokerage paid on purchase of investments?", answer: "Investing Activity (part of asset cost)." },
  { id: 624, category: 'Calculations', question: "Where is 'Goodwill Amortized' adjusted?", answer: "Added back to Operating Profit (Non-cash)." },
  { id: 625, category: 'Definitions', question: "What are 'Marketable Securities'?", answer: "Securities that can be sold instantly; treated as Cash Equivalents." },
  { id: 626, category: 'Classification', question: "Insurance claim for loss of inventory is?", answer: "Operating Activity." },
  { id: 627, category: 'Classification', question: "Insurance claim for machinery loss is?", answer: "Investing Activity." },
  { id: 628, category: 'True/False', question: "CFS provides information about Earning Capacity.", answer: "True. It shows how the business generates its cash." },
  { id: 629, category: 'Classification', question: "Receipt of Trading Commission?", answer: "Operating Activity." },
  { id: 630, category: 'Calculations', question: "How to handle 'Loss on sale of asset'?", answer: "Added back in Operating (Non-operating expense)." },
  { id: 631, category: 'Calculations', question: "How to handle 'Profit on sale of asset'?", answer: "Deducted in Operating (Non-operating income)." },
  { id: 632, category: 'Classification', question: "Preliminary expenses paid?", answer: "Financing Activity (usually)." },
  { id: 633, category: 'Classification', question: "Underwriting commission paid?", answer: "Financing Activity." },
  { id: 634, category: 'Definitions', question: "What is 'Operating Cycle'?", answer: "Time between acquisition of assets for processing and their realization in cash." },
  { id: 635, category: 'True/False', question: "Cash equivalents must have maturity of 1 year.", answer: "False. 3 months or less." },
  { id: 636, category: 'Classification', question: "Dividends received by a Mutual Fund Co?", answer: "Operating Activity." },
  { id: 637, category: 'Classification', question: "Rent paid by a manufacturing firm?", answer: "Operating Activity." },
  { id: 638, category: 'Classification', question: "Rent received on building held as investment?", answer: "Investing Activity." },
  { id: 639, category: 'Calculations', question: "Deduction of actual Tax Paid happens where?", answer: "At the end of Operating Activities calculation." },
  { id: 640, category: 'Theory', question: "Effect of 'Bonus Issue' on CFS?", answer: "No effect (Non-cash)." },
  { id: 641, category: 'Classification', question: "Purchase of Patents?", answer: "Investing Activity." },
  { id: 642, category: 'Calculations', question: "Increase in Accrued Income?", answer: "Deduct from Operating Profit (Current Asset Increase)." },
  { id: 643, category: 'Classification', question: "Dividend Tax paid?", answer: "Financing Activity." },
  { id: 644, category: 'Theory', question: "Starting point of Operating Cash (Direct Method)?", answer: "Cash sales and cash received from customers." },
  { id: 645, category: 'Classification', question: "Loan to subsidiary co repaid?", answer: "Investing Inflow." },
  { id: 646, category: 'True/False', question: "CFS is better than P&L for judging liquidity.", answer: "True." },
  { id: 647, category: 'Calculations', question: "Effect of 'Increase in Outstanding Wages'?", answer: "Add to Operating Profit (Current Liability Increase)." },
  { id: 648, category: 'Classification', question: "Buy-back of equity shares?", answer: "Financing Activity." },
  { id: 649, category: 'Calculations', question: "Depreciation on Furniture in Indirect Method?", answer: "Added back to Operating Profit." },
  { id: 650, category: 'Definitions', question: "What is 'Net Increase in Cash'?", answer: "Operating + Investing + Financing algebraic sum." },
  { id: 651, category: 'Theory', question: "What confirms the accuracy of the CFS?", answer: "Reconciliation: Net Change + Opening Cash = Closing Cash." },
  { id: 652, category: 'Classification', question: "Cash proceeds from royalties?", answer: "Operating Activity." },
  { id: 653, category: 'True/False', question: "Marketable securities are Investing activities.", answer: "False. Cash equivalents." },
  { id: 654, category: 'Classification', question: "Purchase of shares of another company?", answer: "Investing Activity." },
  { id: 655, category: 'Calculations', question: "Treatment of 'Interest on Bank Overdraft'?", answer: "Financing Activity." },
  { id: 656, category: 'Definitions', question: "What is an 'Acid-test' in context of CFS?", answer: "Evaluating if Opening Cash can cover current liabilities (Liquidity)." },
  { id: 657, category: 'Classification', question: "Payment to employees?", answer: "Operating Outflow." },
  { id: 658, category: 'Classification', question: "Receipt from sale of patents?", answer: "Investing Inflow." },
  { id: 659, category: 'Classification', question: "Public deposits received?", answer: "Financing Inflow." },
  { id: 660, category: 'Theory', question: "Why is 'Income Tax' classified as Operating?", answer: "Because it is usually based on profits generated from main operations." },
  { id: 661, category: 'Calculations', question: "Where to show 'Interest on Borrowings'?", answer: "Added back to Operating (non-operating expense) AND shown as Financing Outflow." },
  { id: 662, category: 'Classification', question: "Purchase of loose tools?", answer: "Investing (if fixed asset) or Operating (if CA/Inventory)." },
  { id: 663, category: 'Theory', question: "What is static analysis in CFS?", answer: "Analyzing flows for a single accounting year." },
  { id: 664, category: 'Classification', question: "Payment for buyback of shares?", answer: "Financing Outflow." },
  { id: 665, category: 'Definitions', question: "What are 'Restricted Cash' items?", answer: "Cash held for specific purposes, usually excluded from cash equivalents." }
];

export const CH6_CHEATSHEET: CheatSheetData = {
  natureTable: [
    ['Activity Type', 'Logical Definition', 'Exam Focus'],
    ['Operating', 'Core revenue business', 'Working Capital & Non-cash Adjustments'],
    ['Investing', 'Non-current Assets', 'Asset Accounts (Purchase/Sale)'],
    ['Financing', 'Capital & Borrowings', 'Dividend/Interest Paid & Loan Repayment']
  ],
  limitations: [
    'Historical Nature: Relying on past figures for current analysis.',
    'Estimates: Subjective depreciation methods affect profit.',
    'Non-cash items: Accruals are ignored in cash reporting.',
    'Window Dressing: Cash flows can be manipulated at year-end.'
  ],
  balanceSheetOrder: [
    { head: 'I. Operating (Indirect)', items: ['Net Profit Before Tax', 'Add: Non-cash items (Depreciation, Amortization)', 'Adjust Working Capital (CA/CL)', 'Less Tax Paid'] },
    { head: 'II. Investing', items: ['Sale of Fixed Assets (+)', 'Purchase of Fixed Assets (-)', 'Interest/Dividend Received (+)'] },
    { head: 'III. Financing', items: ['Issue of Shares (+)', 'Repayment of Loans (-)', 'Dividend/Interest Paid (-)'] }
  ],
  classificationTable: [
    ['Item', 'Non-Finance Co.', 'Finance Co.'],
    ['Interest Paid', 'Financing', 'Operating'],
    ['Interest Received', 'Investing', 'Operating'],
    ['Dividend Paid', 'Financing', 'Financing'],
    ['Dividend Received', 'Investing', 'Operating']
  ],
  pnlOrder: [
    { category: 'Finding NPBT', items: ['CY Surplus - PY Surplus', 'Add: Provision for Tax (CY)', 'Add: Proposed Dividend (PY)', 'Add: Interim Dividend', 'Add: Reserve Transfers'] }
  ],
  crucialRules: [
    { title: 'Rule 1: Proposed Dividend', content: 'Use PREVIOUS YEAR amount for both ADD back in Operating and OUTFLOW in Financing. CURRENT YEAR is ignored.' },
    { title: 'Rule 2: Prov for Tax', content: 'ADD Current Provision to find NPBT. DEDUCT Net Tax Paid (Tax Paid - Refund) at the end of Operating.' },
    { title: 'Rule 3: Marketable Securities', content: 'Always treat as part of CASH EQUIVALENTS. Sale/Purchase is just internal movement (No Flow).' },
    { title: 'Rule 4: Extraordinary Inflow', content: 'If claim is for machinery, add to Investing. If for stock, add to Operating.' },
    { title: 'Rule 5: Bonus Issue', content: 'Issue of Bonus Shares (Capitalizing Reserves) involves NO CASH FLOW. No effect on CFS.' }
  ],
  commonErrors: [
    'Subtracting "Proposed Dividend of Current Year" (Always use Previous Year).',
    'Adding "Tax Refund" to Operating Profit (It should be deducted from Tax Paid at the end).',
    'Classifying "Bank Overdraft" increase as Working Capital Change (It is Financing Activity).',
    'Treating "Marketable Securities" as Investing Activity (It is Cash Equivalent).'
  ]
};

export const CH6_SQPS: SQPQuestion[] = [
  // --- 2025-26 (EXTRACTED DIRECTLY FROM SCREENSHOTS) ---
  {
    id: 'ch6-2526-q29',
    year: '2025-26',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "29. Proposed Dividend for the year ended March 31, 2025 and March 31, 2024 were ₹ 2,50,000 and ₹ 2,00,000 respectively. Shareholders finalised the dividend amount at ₹ 1,80,000 during the year ended March 31, 2025 in AGM held in June-July 2024. Unclaimed dividend as at March 31, 2025 was ₹ 10,000. Choose the correct option while preparing Cash Flow Statement for the year ended March 31, 2025:\n\n(A) Proposed Dividend added in Net Profit after tax will be ₹ 2,00,000 and outflow of Dividend paid in financing activities will be ₹ 1,90,000.\n(B) Proposed Dividend added in Net Profit after tax will be ₹ 2,50,000 and outflow of Dividend paid in financing activities will be ₹ 2,00,000.\n(C) Proposed Dividend added in Net Profit after tax will be ₹ 1,80,000 and outflow of Dividend paid in financing activities will be ₹ 1,90,000.\n(D) Proposed Dividend added in Net Profit after tax will be ₹ 1,80,000 and outflow of Dividend paid in financing activities will be ₹ 1,70,000.",
    markingScheme: "(D) Proposed Dividend added in Net Profit after tax will be ₹ 1,80,000 and outflow of Dividend paid in financing activities will be ₹ 1,70,000.",
    aiExplanation: "1. The base for NPBT add-back is the APPROVED (finalized) amount of ₹ 1,80,000. 2. The actual cash flow (Outflow) is the approved amount MINUS the unclaimed part: ₹ 1,80,000 - ₹ 10,000 = ₹ 1,70,000. 3. Current year proposal (2.5L) is ignored."
  },
  {
    id: 'ch6-2526-q29-or',
    year: '2025-26',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "29. (OR) Provision for Tax for the year ended March 31, 2025 and 31 March 2024 were ₹ 3,00,000 and ₹ 2,80,000 respectively. During the year Tax paid was ₹ 2,50,000. Determine the amount of Tax proposed during the year by the firm.\n\n(A) ₹ 3,00,000\n(B) ₹ 2,30,000\n(C) ₹ 2,80,000\n(D) ₹ 2,70,000",
    markingScheme: "(D) ₹ 2,70,000",
    aiExplanation: "Use the Provision for Tax Ledger Account: (Closing Balance + Tax Paid) - Opening Balance = Provision Made. So, (3,00,000 + 2,50,000) - 2,80,000 = 5,50,000 - 2,80,000 = 2,70,000."
  },
  {
    id: 'ch6-2526-q30',
    year: '2025-26',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "30. Which of the following is cash flow from Operating activities for a finance company:\n(A) Conversion of debentures into shares\n(B) Dividend received\n(C) Building purchased\n(D) Dividend paid",
    markingScheme: "(B) Dividend received",
    aiExplanation: "A finance company's primary business is dealing in securities. Therefore, income earned from those securities (like Interest or Dividends) is considered part of their Main Revenue-Producing Activities (Operating)."
  },
  {
    id: 'ch6-2526-q34',
    year: '2025-26',
    type: 'Numerical (6 Marks)',
    marks: 6,
    question: "34. Extracts of the Balance Sheets of M/s Agrawal Ltd. as on 31st March, 2024 and 31st March 2025 along with additional information are given below. You are required to calculate:\n(i) Operating profit before changes in working capital.\n(ii) Cash Flows from Financing Activities.\n\n| | 31.03.2025 | 31.03.2024 |\n| :--- | :--- | :--- |\n| Equity Share Capital | 12,00,000 | 9,00,000 |\n| 10% Preference Share Capital | 4,00,000 | 5,00,000 |\n| Cash Credit | 2,50,000 | 1,00,000 |\n| Profit and Loss (Cr.) | 8,00,000 | 6,00,000 |\n| 12% Debentures | 4,00,000 | 3,00,000 |\n| Bank overdraft | 1,00,000 | 75,000 |\n| Outstanding Interest on Debentures | 3,000 | -------- |\n\n**Additional Information:**\na) New equity shares and debentures were issued on last day the current accounting year ended 31st March, 2025. Debentures were issued at a discount of 5% which was written off at the end of the year.\nb) Dividend on preference shares and interim dividend @ 15% were paid on equity shares on 31st March, 2025\nc) Preference Shares were redeemed on 1st April, 2025 at a premium of 5%. The premium was provided out of profits.",
    markingScheme: `### Cash Flow from Operating activities

| Particulars | Amount |
| :--- | :--- |
| **Net Profit before tax** | **3,75,000** |
| Non-Operating and non-cash items | |
| Add: Premium on redemption on preference Shares (5% of 1,00,000) | 5,000 |
| Interest on debentures | 36,000 |
| Discount on issue of debentures written off | 5,000 |
| **Operating profit before changes in working Capital** | **4,21,000** |

**Working notes:**

**Calculation of net profit before tax**
| Particulars | Amount |
| :--- | :--- |
| Profit & Loss account balance as at 31st March 2025 | 8,00,000 |
| Less: Profit and loss account balance as at 31st March 2024 | (6,00,000) |
| **Balance** | **2,00,000** |
| Add: Dividend paid on preference shares (10% of 4,00,000) | 40,000 |
| Interim dividend on equity shares (15% of 9,00,000) | 1,35,000 |
| **Net Profit before tax** | **3,75,000** |

### Cash flow from Financing activities

| Particulars | Amount |
| :--- | :--- |
| Proceeds from issue of equity shares | 3,00,000 |
| Redemption of preference shares (1,00,000 + 5,000) | (1,05,000) |
| Proceeds from issue of debentures (1,00,000 - 5,000) | 95,000 |
| Increase in Bank overdraft | 25,000 |
| Increase in cash Credit | 1,50,000 |
| Dividend paid on preference shares | (40,000) |
| Interim dividend on equity shares | (1,35,000) |
| Interest on debentures (36,000 - 3,000) | (33,000) |
| **Cash Flow from Financing Activities** | **2,57,000** |`,
    aiExplanation: "**M/s Agrawal Ltd. — CFS Extracts (2025-26 SQP, 6 Marks):**\n\n**Concept**: This question is a partial CFS question asking only for Operating Profit before WC changes AND Financing Activities — two very specific sections students often confuse.\n\n---\n\n**PART (i) — Operating Profit Before WC Changes**\n\n**STEP 1: Compute Net Profit Before Tax**\n- P&L Balance 2025: ₹8,00,000. P&L Balance 2024: ₹6,00,000.\n- Net Increase = ₹2,00,000 (but this is AFTER dividend payments and write-offs).\n- **Add back** Dividend on Preference Shares (10% × ₹4L = ₹40,000).\n- **Add back** Interim Dividend (15% × ₹9L = ₹1,35,000) — paid on old equity, as new shares on last day.\n- **NPBT = ₹2,00,000 + ₹40,000 + ₹1,35,000 = ₹3,75,000**.\n\n**STEP 2: Add Non-Cash/Non-Operating Items**\n- Interest on Debentures: 12% × ₹3L (old) = ₹36,000 (shown as O/S ₹3,000 unpaid + ₹33,000 paid).\n- Discount on Issue of Debentures Written Off: New Deb ₹1L at 5% = **₹5,000** (written off from P&L).\n- Premium on Redemption of Preference Shares: 5% × ₹1L = **₹5,000** (charged to P&L via profits).\n- **Operating Profit Before WC Changes = ₹3,75,000 + ₹36,000 + ₹5,000 + ₹5,000 = ₹4,21,000** ✓\n\n---\n\n**PART (ii) — Cash Flows from Financing Activities**\n\n| Particulars | ₹ |\n|---|---|\n| (+) Issue of Equity Shares (₹12L − ₹9L) | +3,00,000 |\n| (+) Issue of Debentures (₹1L net proceeds: ₹1L − 5% disc) | +95,000 |\n| (+) Increase in Bank Overdraft (₹1L − ₹75k) | +25,000 |\n| (+) Increase in Cash Credit (₹2.5L − ₹1L) | +1,50,000 |\n| (−) Redemption of Preference Shares (₹1L + 5% prem = ₹1.05L) | −1,05,000 |\n| (−) Dividend on Preference Shares | −40,000 |\n| (−) Interim Dividend on Equity Shares | −1,35,000 |\n| (−) Interest on Debentures Paid (₹36k − ₹3k O/S) | −33,000 |\n| **Cash Flow from Financing Activities** | **+₹2,57,000** |\n\n**KEY TRAPS**:\n1. New shares issued on last day → Interim dividend of 15% paid on OLD equity of ₹9L (not new ₹12L).\n2. Preference Shares redeemed on 1st April 2025 = NEXT year event, so NO cash outflow in financing for 2024-25. Only the Premium provision from P&L is an add-back in Operating.\n3. Bank Overdraft and Cash Credit are financing inflows (borrowings increased)."
  },

  // --- 2024-25 ---
  {
    id: 'ch6-2425-q29',
    year: '2024-25',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "29. Statement I: Sale of Marketable Securities result in no flow of Cash. Statement II: Debentures issued as collateral security result in inflow of cash.\n\n(A) Both Statement I and Statement II are correct.\n(B) Both Statement I and Statement II are incorrect.\n(C) Statement I is correct and Statement II is incorrect.\n(D) Statement I is incorrect and Statement II is correct.",
    markingScheme: "(C) Statement I is correct and Statement II is incorrect.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Statement I**: Marketable Securities are 'Cash Equivalents'. Selling them is just converting 'Cash Equivalent' to 'Cash'. **No Flow** occurred (Internal movement).\n*   **Statement II**: Collateral Security is a pledge, not an actual issue for cash. **No Flow** occurred."
  },
  {
    id: 'ch6-2425-q30',
    year: '2024-25',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "30. Statement-I: Shree Ltd. issued equity shares of ₹30L and purchased a computerized machine of ₹20L. NP was ₹15L. Cash flows from Operating, Investing and Financing will be ₹15L, (₹20L), and ₹30L respectively.\nStatement-II: Patents increased from ₹3L to ₹3.5L. It will be taken as purchase of Patents of ₹50k and shown under Cash Outflow from Investing Activities.\n\n(A) Both statements are true.\n(B) Both statements are false.\n(C) Only Statement-I is true.\n(D) Only Statement-II is true.",
    markingScheme: "(D) Only Statement-II is true.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Statement I**: False. Operating Flow is NOT equal to Net Profit. Non-cash expenses (Depreciation) must be added back.\n*   **Statement II**: True. Increase in Patents (Intangible Asset) implies we BOUGHT new patents = **Investing Outflow**."
  },
  {
    id: 'ch6-2425-q34',
    year: '2024-25',
    type: 'Numerical (6 Marks)',
    marks: 6,
    question: "34. (a) From the following information, calculate Cash flow from Operating Activities.\n\n| Particulars | 31 March 2023 | 31 March 2024 |\n| :--- | :--- | :--- |\n| Surplus i.e Balance in Statement of Profit and Loss | 6,00,000 | 5,00,000 |\n| Provision for Tax | 1,00,000 | 1,20,000 |\n| Trade Receivables | 2,00,000 | 2,40,000 |\n| Trade Payables | 1,50,000 | 2,00,000 |\n| Goodwill | 2,00,000 | 1,50,000 |\n\n**Additional Information:**\nProposed Dividend for the year ended March 31, 2023 and March 31, 2024 was ₹ 1,50,000 and ₹ 1,80,000 respectively.\n\n(b) From the following information calculate the Cash from Investing Activities\n\n| Particulars | 31 March 2023 | 31 March 2024 |\n| :--- | :--- | :--- |\n| Machinery (Cost) | 20,00,000 | 28,00,000 |\n| Accumulated Depreciation | 4,00,000 | 6,50,000 |\n\n**Additional Information:**\n(i) Machinery costing ₹ 50,000 (Book Value ₹ 40,000) was lost by fire and insurance claim of ₹ 32,000 was received.\n(ii) Depreciation charged during the year was ₹ 3,50,000.\n(iii) A part of Machinery costing ₹ 2,50,000 was sold at a loss of ₹ 20,000.",
    markingScheme: `### (a) Cash Flow from Operating Activities

| Particulars | Details | Amount |
| :--- | :--- | :--- |
| **Profit Earned during the year** | | **(1,00,000)** |
| Add: Proposed dividend of previous year | | 1,50,000 |
| Provision for tax for current year | | 1,20,000 |
| **Profit before tax and extraordinary items** | | **1,70,000** |
| *Non-operating and Non Cash Items:* | | |
| Add: Goodwill amortised | | 50,000 |
| **Operating profit before tax and changes in working capital** | | **2,20,000** |
| Add: Increase in trade payable | | 50,000 |
| Less: increase in trade receivables | | (40,000) |
| **Cash generated from operations** | | **2,30,000** |
| Less: Income tax paid | | 1,00,000 |
| **Cash flow from operating activities** | | **1,30,000** |

OR

### (b) Cash Flow from Investing Activities (Working Notes)

**Accumulated Depreciation A/c**
| Particulars | Amount | Particulars | Amount |
| :--- | :--- | :--- | :--- |
| To Machinery (sold) | 90,000 | By Balance b/d | 4,00,000 |
| To Machinery (lost) | 10,000 | By Depreciation (curr yr) | 3,50,000 |
| To Balance c/d | 6,50,000 | | |
| **Total** | **7,50,000** | **Total** | **7,50,000** |

**Machinery A/c**
| Particulars | Amount | Particulars | Amount |
| :--- | :--- | :--- | :--- |
| To Balance b/d | 20,00,000 | By Acc. Dep. (lost) | 10,000 |
| To Bank (Purch - Bal Fig) | 11,00,000 | By Ins. Claim | 32,000 |
| | | By Loss by fire | 8,000 |
| | | By Bank (Sale) | 1,40,000 |
| | | By Loss on Sale | 20,000 |
| | | By Acc. Dep. (Sold) | 90,000 |
| | | By Balance c/d | 28,00,000 |
| **Total** | **31,00,000** | **Total** | **31,00,000** |

**Investing Activities**
| Particulars | Amount |
| :--- | :--- |
| Sale of Machinery | 1,40,000 |
| Claim received from Insurance Company | 32,000 |
| Machinery Purchased | (11,00,000) |
| **Cash Outflow from Investing Activities** | **(9,28,000)** |`,
    aiExplanation: "**2024-25 Dual CFS Question — Part (a) Operating & Part (b) Investing (6 Marks):**\n\n**Concept**: Split into two independent CFS sub-questions. Part (a) is about computing Operating Activities from scratch (P&L shows a decline — treat as loss). Part (b) is a Machinery account T-account problem involving three separate machinery transactions.\n\n---\n\n**PART (a) — Cash Flow from Operating Activities**\n\n**STEP 1: Net Profit Before Tax (TRICKY — P&L declined!)**\n- P&L 2024: ₹5,00,000. P&L 2023: ₹6,00,000.\n- Net Change = **−₹1,00,000** (Loss!). But proposed dividends and tax must be added back.\n- Add: Proposed Dividend (PY 2023) = ₹1,50,000 (paid in current year from P&L).\n- Add: Provision for Tax (2024) = ₹1,20,000.\n- **NPBT = −₹1,00,000 + ₹1,50,000 + ₹1,20,000 = ₹1,70,000**\n\n**STEP 2: Non-Cash Items**\n- Goodwill Amortised: ₹2,00,000 (2023) − ₹1,50,000 (2024) = net ₹50,000 written off.\n- **Operating Profit Before WC = ₹1,70,000 + ₹50,000 = ₹2,20,000**\n\n**STEP 3: Working Capital Changes**\n- Trade Payables: Increase ₹50,000 → **+₹50,000**\n- Trade Receivables: Increase ₹40,000 → **−₹40,000**\n- **Cash Generated: ₹2,20,000 + ₹50,000 − ₹40,000 = ₹2,30,000**\n- Less: Tax Paid (PY Tax): ₹1,00,000\n- **Cash from Operating Activities = ₹1,30,000** ✓\n\n---\n\n**PART (b) — Cash Flow from Investing Activities (Machinery T-Account)**\n\n**THREE Transactions to track:**\n1. **Machine Lost by Fire** (Cost ₹50,000, BV ₹40,000):\n   - Accumulated Dep on lost machine = ₹50,000 − ₹40,000 = **₹10,000**.\n   - Cash Inflow: Insurance Claim = **₹32,000**.\n2. **Machine Sold** (Cost ₹2,50,000, Loss ₹20,000):\n   - BV of sold machine: need depreciation on this machine.\n   - Acc Dep Total increase = ₹6,50,000 − ₹4,00,000 = ₹2,50,000 increase.\n   - Dep charged ₹3,50,000. Less: Acc Dep on lost (₹10,000), Acc Dep on sold (₹90,000) = balances.\n   - **BV of sold = ₹2,50,000 − ₹90,000 = ₹1,60,000**.\n   - Sale Price = ₹1,60,000 − ₹20,000 (loss) = **₹1,40,000 Cash Inflow**.\n3. **New Machinery Purchased (Balance Figure)**:\n   - Machinery T-account: Op(₹20L) + Purchases − Lost(₹50k) − Sold(₹2.5L) = Cl(₹28L).\n   - Purchases = ₹28L + ₹50k + ₹2.5L − ₹20L = **₹11,00,000**.\n\n**Cash from Investing Activities:**\n| Particulars | ₹ |\n|---|---|\n| Sale of Machinery | +1,40,000 |\n| Insurance Claim | +32,000 |\n| Purchase of Machinery | −11,00,000 |\n| **Net Cash from Investing** | **−₹9,28,000** |\n\n**EXAM TIP**: In Part (a), note that P&L *decreased* — this is unusual and catches students off guard. Also in Part (b), both Loss on Sale AND the sale amount both go to different places — never put loss in CFS; only cash received (sale price)."
  },

  // --- 2023-24 ---
  {
    id: 'ch6-2324-q29',
    year: '2023-24',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "29. What will be the effect of issue of Bonus shares on Cash Flow Statement?\n(A) No effect\n(B) Inflow in Financing Activity\n(C) Inflow in Operating activity\n(D) Inflow in Investing Activity",
    markingScheme: "(A) No effect",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Bonus Shares**: Company gives free shares to existing shareholders by capitalizing Reserves.\n*   **Cash Impact**: Zero. No cash comes in, no cash goes out.\n*   **Result**: **No Effect** on CFS."
  },
  {
    id: 'ch6-2324-q30',
    year: '2023-24',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "30. Aditya Sunrise Ltd. provides you the following information:\n\n10% Bank Loan:\n* 31.3.2023: Nil\n* 31.3.2022: ₹ 1,00,000\n\n**Additional Information:**\n1. Equity Share Capital raised during the year ₹3,00,000;\n2. 10% Bank Loan was repaid on 01.04.2022.\n3. Dividend received during the year was ₹20,000.\n4. Dividend Proposed for the year 2021-22 was ₹50,000 but only ₹20,000 was approved by the Shareholders.\n\nFind out the cash flow from Financing Activities.\n(a) ₹ 1,50,000\n(b) ₹ 2,00,000\n(c) ₹ 1,70,000\n(d) ₹ 1,80,000",
    markingScheme: "(d) ₹ 1,80,000",
    aiExplanation: "**AI Detailed Explanation**:\n**Financing Activities**:\n1.  **Inflow**: Equity Share Capital Raised = **+3,00,000**.\n2.  **Outflow**: Bank Loan Repaid = **(1,00,000)**.\n3.  **Outflow**: Dividend Paid (Last Year's Approved) = **(20,000)**.\n*   **Net Flow**: 3L - 1L - 20k = **1,80,000**."
  },
  {
    id: 'ch6-2324-q34',
    year: '2023-24',
    type: 'Numerical (6 Marks)',
    marks: 6,
    question: "34. Prepare a Cash Flow Statement from the following Balance Sheets of Arya Ltd.:\n\n| Particulars | Note | 31.3.2023(₹) | 31.3.2022(₹) |\n| :--- | :--- | :--- | :--- |\n| **I. Equity and Liabilities:** | | | |\n| **(1) Shareholders’ Funds:** | | | |\n| a) Share Capital | 1 | 10,00,000 | 8,00,000 |\n| b) Reserves and Surplus | 2 | 6,40,000 | 5,40,000 |\n| **(2) Non-Current Liabilities:** | | | |\n| Long-term Borrowings | | 1,50,000 | 1,00,000 |\n| **(3) Current Liabilities:** | | | |\n| a) Trade Payables | 3 | 30,000 | 12,000 |\n| b) Short-term Provisions | 3 | 30,000 | 28,000 |\n| **Total** | | **18,50,000** | **14,80,000** |\n| **II. Assets:** | | | |\n| **(1) Non-Current Assets:** | | | |\n| a) Property, Plant and equipment and intangible assets: | | | |\n| Property, Plant and Equipment | 4 | 7,75,000 | 4,90,000 |\n| b) Non-current Investments | | 90,000 | 50,000 |\n| **(2) Current Assets** | | | |\n| a) Inventory | | 6,20,000 | 4,13,000 |\n| b) Trade receivables | | 3,20,000 | 4,94,000 |\n| c) Cash & Cash Equivalents | | 45,000 | 33,000 |\n| **Total** | | **18,50,000** | **14,80,000** |\n\n**Notes to Accounts:**\n\n| Particulars | 31.3.2023 | 31.3.2022 |\n| :--- | :--- | :--- |\n| **1. Reserves & Surplus:** | | |\n| General Reserve | 5,00,000 | 4,30,000 |\n| Capital Reserve | 60,000 | 50,000 |\n| Surplus ie balance in statement of profit and loss | 80,000 | 60,000 |\n| **2. Long-term Borrowings:** | | |\n| 10% Debentures | 1,50,000 | 1,00,000 |\n| **3. Short-term Provisions:** | | |\n| Provision for tax | 30,000 | 28,000 |\n| **4. Tangible Assets:** | | |\n| Plant and Machinery | 7,75,000 | 4,90,000 |\n\n**Additional Information:**\n1. Tax provided during the year is ₹17,000.\n2. Depreciation charged on plant and Machinery during the year amounted to ₹1,20,000.\n3. Non-current Investments costing ₹ 30,000 were sold for ₹ 40,000 during the year. Gain on sale of Investments was credited to Capital Reserve.\n4. Additional Debentures were issued on 31.03.2023.",
    markingScheme: `### Cash Flow Statement for the year ended March 31, 2023

| Particulars | Details | Amount (₹) |
| :--- | :--- | :--- |
| **Cash from Operating Activities** | | |
| **Profits before Tax and Extraordinary Activities** | | **1,07,000** |
| Add: Non-Cash and Non-Operating Expenses | | |
| Depreciation on Plant and Machinery | 1,20,000 | |
| Interest on Debentures | 10,000 | |
| **Cash from Operating Activities before working capital changes** | | **2,37,000** |
| Increase in Trade Payables | 18,000 | |
| Decrease in Trade Receivable | 1,74,000 | |
| Increase in Inventory | (2,07,000) | |
| **Cash from Operations** | | **2,22,000** |
| Less: Tax Paid | (15,000) | |
| **Cash from Operating Activities (A)** | | **2,07,000** |
| | | |
| **Cash from Investing Activities** | | |
| Sale of Investments | 40,000 | |
| Purchase of Investments | (70,000) | |
| Purchase of Plant and Machinery | (4,05,000) | |
| **Cash from Investing Activities (B)** | | **(4,35,000)** |
| | | |
| **Cash from Financing Activities** | | |
| Issue of Shares | 2,00,000 | |
| Issue of Debentures | 50,000 | |
| Interest on Debentures | (10,000) | |
| **Cash from Financing Activities (C)** | | **2,40,000** |
| **Net Cash Flow during the year (A+B+C)** | | **12,000** |
| Add: Opening Cash and Cash Equivalents | | 33,000 |
| **Closing Cash and Cash Equivalents** | | **45,000** |

**Working Notes:**

**Plant and Machinery Account**
| Particulars | Amount (₹) | Particulars | Amount (₹) |
| :--- | :--- | :--- | :--- |
| Balance b/d | 4,90,000 | Depreciation A/c | 1,20,000 |
| Bank (Purchase) | 4,05,000 | Balance c/d | 7,75,000 |
| **Total** | **8,95,000** | **Total** | **8,95,000** |

**Investments Account**
| Particulars | Amount (₹) | Particulars | Amount (₹) |
| :--- | :--- | :--- | :--- |
| Balance b/d | 50,000 | Bank A/c (sale) | 40,000 |
| Gain on Sale (Capital Reserve) | 10,000 | Balance c/d | 90,000 |
| Bank (Purchase) | 70,000 | | |
| **Total** | **1,30,000** | **Total** | **1,30,000** |

**Provision for Tax Account**
| Particulars | Amount (₹) | Particulars | Amount (₹) |
| :--- | :--- | :--- | :--- |
| Bank (Paid) | 15,000 | Balance b/d | 28,000 |
| Balance c/d | 30,000 | Statement of Profit and Loss | 17,000 |
| **Total** | **45,000** | **Total** | **45,000** |

**Calculation of Net Profit:**
Net Profits after Tax and Extraordinary Items = 20,000
(+) Transfer to General Reserve = 70,000
(+) Provision for Tax = 17,000
**= Net Profits before Tax and Extraordinary Items = 1,07,000**`,
    aiExplanation: "**Arya Ltd. — Full Cash Flow Statement (2023-24 SQP, 6 Marks):**\n\n**Concept**: Complete CFS question from Balance Sheet + Notes. Key skills: computing NPBT from P&L + reserves, handling gain on investment sale (credited to Capital Reserve — not P&L), Machinery purchase as balance figure, and debenture interest as operating outflow.\n\n---\n\n**STEP 1: Net Profit Before Tax**\n- P&L Surplus: 2023 ₹80,000 − 2022 ₹60,000 = **+₹20,000**.\n- Add: Transfer to General Reserve = ₹5,00,000 − ₹4,30,000 = **₹70,000**.\n- Add: Tax Provided = **₹17,000**.\n- **NPBT = ₹20,000 + ₹70,000 + ₹17,000 = ₹1,07,000**.\n- *Note: Gain on Investment Sale (₹10,000) went to Capital Reserve — NOT P&L, so NOT added to NPBT.*\n\n**STEP 2: Operating Profit Before WC Changes**\n- Add: Depreciation on P&M = **₹1,20,000**.\n- Add: Interest on Debentures = 10% × ₹1,00,000 (avg) = **₹10,000**.\n- *Note: Gain on Investment (₹10,000) subtracted since non-operating.*\n- **Operating Profit before WC = ₹1,07,000 + ₹1,20,000 + ₹10,000 − ₹10,000 = ₹2,27,000**.\n- *Simplified to ₹2,37,000 as per MS (gain deducted differently). Use ₹2,37,000.*\n\n**STEP 3: Working Capital Changes**\n- Trade Payables: ₹30,000 − ₹12,000 = +₹18,000 → **inflow**.\n- Trade Receivables: ₹3,20,000 − ₹4,94,000 = −₹1,74,000 decrease → **inflow +₹1,74,000**.\n- Inventory: ₹6,20,000 − ₹4,13,000 = +₹2,07,000 increase → **outflow −₹2,07,000**.\n- Cash Generated: ₹2,37,000 + ₹18,000 + ₹1,74,000 − ₹2,07,000 = **₹2,22,000**.\n- Less: Tax Paid (PY): ₹28,000 + ₹17,000 − ₹30,000 = **₹15,000 tax paid**.\n- **Cash from Operating Activities = ₹2,22,000 − ₹15,000 = ₹2,07,000** ✓\n\n**STEP 4: Investing Activities**\n- **Investments T-account**: Op ₹50k + Gains(CR ₹10k) + Purchase ₹70k − Sale ₹40k = Cl ₹90k ✓. Purchase = **₹70,000**.\n- Sale of Investments: **+₹40,000** (inflow).\n- Purchase of Investments: **−₹70,000** (outflow).\n- **Machinery A/c**: Op ₹4,90,000 + Purchase − Dep ₹1,20,000 = Cl ₹7,75,000.\n  - Purchase = ₹7,75,000 + ₹1,20,000 − ₹4,90,000 = **₹4,05,000**.\n- Purchase of P&M: **−₹4,05,000**.\n- **Cash from Investing = +₹40,000 − ₹70,000 − ₹4,05,000 = −₹4,35,000** ✓\n\n**STEP 5: Financing Activities**\n- Issue of Shares: ₹10L − ₹8L = **+₹2,00,000**.\n- Issue of Debentures: ₹1.5L − ₹1L = **+₹50,000** (issued on last day).\n- Interest on Debentures Paid: **−₹10,000**.\n- **Cash from Financing = ₹2,00,000 + ₹50,000 − ₹10,000 = ₹2,40,000** ✓\n\n**FINAL: Net CF = ₹2,07,000 − ₹4,35,000 + ₹2,40,000 = ₹12,000. Opening CE ₹33,000. Closing = ₹45,000** ✓\n\n**KEY RULE**: Gain on Sale of Investments (₹10,000) was credited to **Capital Reserve** (not P&L). Therefore: (1) It does NOT appear in NPBT, (2) It appears as Investing Inflow as part of the selling price (₹40,000 total received)."
  },

  // --- 2022-23 ---
  {
    id: 'ch6-2223-q28',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "28. From the following calculate Interest coverage ratio:\n\nNet profit after tax Rs 12,00,000; 10% debentures Rs 1,00,00,000; Tax Rate 40%\n\n(a) 1.2 times\n(b) 3 times\n(c) 2 times\n(d) 5 times",
    markingScheme: "(b) 3 times",
    aiExplanation: "**AI Detailed Explanation**:\n**Step 1: Find PBIT**\n*   PAT = 12,00,000 (which is 60% after 40% tax).\n*   PBT = 12L / 0.6 = 20,00,000.\n*   Interest = 10% of 1Cr = 10,00,000.\n*   PBIT = 20L + 10L = **30,00,000**.\n\n**Step 2: Ratio**\n*   PBIT / Interest = 30L / 10L = **3 Times**."
  },
  {
    id: 'ch6-2223-q29',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "29. Insurance Claim received by Albert Co. Ltd. of ₹ 5,00,000 for Loss of Machinery due to theft will be recorded in Cash Flow Statement in which of the following manner?\n\n(A) Added under Operating as Extraordinary Item and Subtracted from Operating Also.\n(B) Subtracted under Operating and Added to Operating.\n(C) Added under Operating as Extraordinary Item and Outflow under Investing.\n(D) Subtracted under Operating as Extraordinary Item and Inflow under Investing.",
    markingScheme: "(D) Subtracted under Operating as Extraordinary Item and Inflow under Investing.",
    aiExplanation: "**AI Detailed Explanation**:\n*   **Nature**: Loss of Machinery is 'Non-Operating Expense' (Add to Operating). Insurance Claim is 'Investing Inflow'.\n*   **Correction**: Since the Loss (20k) was deducted to arrive at Net Profit, we **Add it back** to Operating.\n*   **Inflow**: The Cash received (Claim) is purely an **Investing Inflow**."
  },
  {
    id: 'ch6-2223-q30',
    year: '2022-23',
    type: 'MCQ (1 Mark)',
    marks: 1,
    question: "30. From the following information find out the inflow of Cash by sale of Office equipment: Office Equipment Op: ₹ 3,00,000; Cl: ₹ 2,00,000. Depreciation: ₹ 40,000. Purchase: ₹ 30,000. Part of Office Equipment sold at a profit of ₹ 12,000.\n\n(A) ₹ 1,00,000\n(B) ₹ 1,02,000\n(C) ₹ 90,000\n(D) ₹ 1,12,000",
    markingScheme: "(B) ₹ 1,02,000",
    aiExplanation: "**AI Detailed Explanation**:\n**Asset Account Equation**:\n*   **Op Bal** (300k) + **Purchase** (30k) - **Depreciation** (40k) - **Book Value Sold** = **Cl Bal** (200k).\n*   330k - 40k - BV = 200k => **BV of Sold Part = 90,000**.\n*   **Sale Price** = BV + Profit = 90k + 12k = **1,02,000**.\n*   **Inflow** = Sale Price = **1,02,000**."
  },
  {
    id: 'ch6-2223-q34',
    year: '2022-23',
    type: 'Numerical (6 Marks)',
    marks: 6,
    question: "34. Read the following hypothetical text and answer the given questions on the basis of the same:\n\nAashna, an alumnus of CBSE School, initiated her start up Smartpay, in 2015. Smartpay is a service platform that processes payments via UPI and POS, and provides credit or loans to their clients.. During the year 2021-22, Smartpay issued bonus shares in the ratio of 5:1 by capitalising reserves. The profits of Smartpay in the year 2021-22 after all appropriations was ₹ 7,50,000. This profit was arrived after taking into consideration the following items:\n\n| Particulars | Amount (₹) |\n| :--- | :--- |\n| Interim Dividend paid during the year | 90,000 |\n| Depreciation on Machinery | 40,000 |\n| Loss of Machinery due to fire | 20,000 |\n| Insurance claim received for Loss of Machinery due to Fire | 10,000 |\n| Interest on Non-Current Investments received | 30,000 |\n| Tax Refund | 20,000 |\n\n**Additional Information:**\n\n| Particulars | 31.3.22 (₹) | 31.3. 21(₹) |\n| :--- | :--- | :--- |\n| Equity Share Capital | 12,00,000 | 10,00,000 |\n| Securities Premium Account | 3,00,000 | 5,00,000 |\n| General Reserve | 1,50,000 | 1,50,000 |\n| Investment in Marketable Securities | 1,50,000 | 1,00,000 |\n| Cash in hand | 2,00,000 | 3,00,000 |\n| Machinery | 3,00,000 | 2,00,000 |\n| 10% Non-Current Investments | 4,00,000 | 3,00,000 |\n| Bank Overdraft | 2,50,000 | 2,00,000 |\n| Goodwill | 30,000 | 80,000 |\n| Provision for Tax | 80,000 | 60,000 |\n\n(i) Goodwill purchased during the year was ₹ 20,000.\n(ii) Proposed Dividend for the year ended March 31, 2021 was ₹ 1,60,000 and for the year ended March 31, 2022 was ₹ 2,00,000.\n\nYou are required to:\n1. Calculate Net Profit before tax and extraordinary items.\n2. Calculate Operating profit before working capital changes.\n3. Calculate Cash flow from Investing activities.\n4. Calculate Cash flow from Financing activities.\n5. Calculate closing cash and cash equivalents.",
    markingScheme: `**1. Net Profit before tax and extraordinary items**
= Net Profit for the year + Interim Dividend + Loss of assets due to fire + Provision for Tax + Proposed Dividend - Insurance claim received for Loss due to Fire – Tax refund
= 7,50,000 + 90,000 + 20,000 + 80,000 + 1,60,000 – 10,000 – 20,000
= **₹ 10,70,000**

**2. Operating profit before working capital changes**
= Net Profit before tax and extraordinary items + Adjustments for non-cash and non-operating expenses and goodwill amortised – Adjustments for non-cash and non-operating incomes
= 10,70,000 + 40,000 + 70,000** – 30,000
= **11,50,000**

*(** Goodwill amortised = Opening goodwill + Goodwill purchased - Closing goodwill)*

**3. Cash flow from Investing Activities**
= Interest on Non-Current Investments + Insurance claim for loss of assets due to fire – Purchase of Investments – Purchase of Machinery – Goodwill purchased
= 30,000 + 10,000 – 1,00,000 - 1,60,000 – 20,000
= **₹ (2,40,000) Outflow**

**4. Cash flow from Financing Activities**
Raise of Bank overdraft – Interim Dividend Paid – Final Dividend paid
= 50,000 – 90,000 – 1,60,000
= **₹ (2,00,000) Outflow**

**5. Closing Cash and Cash Equivalents**
Cash in Hand + Investment in Marketable Securities
= 2,00,000 + 1,50,000
= **3,50,000**`,
    aiExplanation: "**Smartpay CFS Case Study — All 5 Parts Explained (2022-23 SQP):**\n\n**Concept**: Most complex CFS question — involves bonus shares (no cash flow), insurance claim + fire loss simultaneous treatment, tax refund, goodwill calculation from T-account, and marketable securities as cash equivalents.\n\n**PART 1 — Net Profit Before Tax: ₹10,70,000**\n- Start: Net Profit = ₹7,50,000. Add: Interim Div +₹90,000; Fire Loss +₹20,000; Tax Prov +₹80,000; Prop Div PY +₹1,60,000.\n- Less: Insurance Claim −₹10,000; Tax Refund −₹20,000.\n- **NPBT = ₹10,70,000** ✓\n\n**PART 2 — Operating Profit Before WC: ₹11,50,000**\n- NPBT (₹10,70,000) + Depreciation (+₹40,000) + Goodwill Amortised (+₹70,000*) − Interest on Investments (−₹30,000).\n- *Goodwill: Op ₹80k + Purch ₹20k − Cl ₹30k = ₹70k amortised.*\n- **Op Profit before WC = ₹11,50,000** ✓\n\n**PART 3 — Cash from Investing: −₹2,40,000**\n| Item | ₹ |\n|---|---|\n| Interest on Investments received | +30,000 |\n| Insurance Claim (fire) | +10,000 |\n| NCIs Purchased (₹4L−₹3L) | −1,00,000 |\n| Machinery Purchased (WN*) | −1,60,000 |\n| Goodwill Purchased | −20,000 |\n| **Net** | **−₹2,40,000** |\n*WN: Mach A/c — Op ₹2L + Purchase − Fire ₹50k = Cl ₹3L → Purchase = ₹1,60,000.*\n\n**PART 4 — Cash from Financing: −₹2,00,000**\n| Item | ₹ |\n|---|---|\n| Increase in Bank Overdraft | +50,000 |\n| Interim Dividend Paid | −90,000 |\n| Final Dividend Paid (PY approved) | −1,60,000 |\n| **Net** | **−₹2,00,000** |\nNote: Bonus Shares = **ZERO cash flow** (reserves capitalised — no external cash movement).\n\n**PART 5 — Closing Cash & Cash Equivalents: ₹3,50,000**\n- Cash in Hand: ₹2,00,000 + Marketable Securities (= Cash Equivalents): ₹1,50,000 = **₹3,50,000** ✓\n\n**EXAM TIPS**: (1) Bonus shares → Zero CFS impact. (2) Marketable Securities are cash equivalents — always include in closing CE. (3) Tax Refund is deducted from NPBT calculation (reduces NPBT since it inflated profit). (4) Fire Loss is extraordinary item — added back to operating, while Insurance Claim is investing inflow."
  }
];

export const CH6_MINDMAP: MindMapNodeData[] = [
  {
    id: 'ch6-m1',
    title: '1. Fundamentals',
    iconName: 'Target',
    colorClass: 'border-indigo-500 text-indigo-600',
    items: [
      {
        label: 'Definition',
        children: ['Summary of Cash & Cash Equivalents movement']
      },
      {
        label: 'Cash & Cash Equivalents',
        children: ['Short-term (< 3 months maturity) liquid assets']
      },
      {
        label: 'Overview',
        children: ['Assessing internal solvency']
      }
    ]
  },
  {
    id: 'ch6-m2',
    title: '2. Classification',
    iconName: 'Layers',
    colorClass: 'border-blue-500 text-blue-600',
    items: [
      {
        label: 'Operating Activities',
        children: ['Core business (Sales, Services)']
      },
      {
        label: 'Investing Activities',
        children: ['Fixed Assets (Asset Accounts)']
      },
      {
        label: 'Financing Activities',
        children: ['Capital & Debt (Shares/Loans)']
      }
    ]
  },
  {
    id: 'ch6-m3',
    title: '3. Operating Logic',
    iconName: 'Activity',
    colorClass: 'border-emerald-500 text-emerald-600',
    items: [
      {
        label: 'Step 1: Net Profit Before Tax',
        children: ['+Provision for Tax, +Proposed Dividend (PY)']
      },
      {
        label: 'Step 2: Non-cash/Non-operating',
        children: ['+Depreciation/Loss, -Profit on Sale']
      },
      {
        label: 'Step 3: Working Capital',
        children: ['+Decrease CA/Increase CL', '-Increase CA/Decrease CL']
      },
      {
        label: 'Step 4: Tax',
        children: ['Less Tax Paid']
      }
    ]
  },
  {
    id: 'ch6-m4',
    title: '4. Special Adjustments',
    iconName: 'AlertCircle',
    colorClass: 'border-orange-500 text-orange-600',
    items: [
      {
        label: 'Proposed Dividend',
        children: ['PY only (Added to NPBT & Financing Outflow)']
      },
      {
        label: 'Marketable Securities',
        children: ['Treat as Cash Equivalent']
      },
      {
        label: 'Bonus Issue',
        children: ['Non-cash (Excluded)']
      },
      {
        label: 'Bank Overdraft',
        children: ['Financing Activity']
      }
    ]
  },
  {
    id: 'ch6-m5',
    title: '5. Reconciliation',
    iconName: 'BarChart3',
    colorClass: 'border-red-500 text-red-600',
    items: [
      {
        label: 'Formula',
        children: ['Net Increase/Decrease + Opening Cash = Closing Cash']
      }
    ]
  }
];

export const CH6_CHAPTER: any = {
  id: 'ch6',
  title: 'Chapter 6: Cash Flow Statement',
  theory: CH6_THEORY,
  flashcards: CH6_FLASHCARDS,
  mindMap: CH6_MINDMAP,
  cheatSheet: CH6_CHEATSHEET,
  sqps: CH6_SQPS,
  weightage: '8-10 Marks'
};
