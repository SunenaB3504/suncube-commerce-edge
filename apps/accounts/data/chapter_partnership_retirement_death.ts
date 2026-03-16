
import { Chapter, TheoryTopic, Flashcard, SQPQuestion } from '../types';

export const PARTNERSHIP_RETIREMENT_THEORY: TheoryTopic[] = [
    {
        id: 'retirement-basics',
        title: '1. Ascentaining Amount Due to Retiring Partner',
        content: 'A partner has the right to retire from the firm after giving due notice. The retiring partner is entitled to his share of capital, goodwill, revaluation profit, and accumulated reserves.',
        subtopics: [
            {
                title: 'Items to Credit',
                description: 'The retiring partner\'s Capital Account is credited with:',
                points: [
                    'His Capital Balance.',
                    'Share of Goodwill (compensated by Gaining Partners).',
                    'Share of Reserves / Accumulated Profits.',
                    'Share of Revaluation Profit.',
                    'Share of Profit up to the date of retirement.',
                    'Interest on Capital / Salary (if allowed till date of retirement).'
                ]
            },
            {
                title: 'Items to Debit',
                description: 'The retiring partner\'s Capital Account is debited with:',
                points: [
                    'Drawings and Interest on Drawings.',
                    'Share of Accumulated Losses.',
                    'Share of Revaluation Loss.'
                ]
            }
        ]
    },
    {
        id: 'ratios',
        title: '2. New Profit Sharing Ratio & Gaining Ratio',
        content: 'Unlike Admission (Sacrificing Ratio), in Retirement, the continuing partners GAIN the share of the outgoing partner.',
        subtopics: [
            {
                title: 'Gaining Ratio',
                description: 'The ratio in which the continuing partners acquire the share of the retiring partner.',
                illustration: {
                    type: 'table',
                    caption: 'Key Formulas',
                    concept: 'Used to distribute Goodwill compensation payable to Retiring Partner.',
                    content: [
                        ['Ratio', 'Formula', 'Purpose'],
                        ['**Gaining Ratio**', 'New Ratio - Old Ratio', 'Compensation for Goodwill'],
                        ['**New Ratio**', 'Old Ratio + Gaining Share', 'Future Profit Distribution']
                    ]
                }
            }
        ]
    },
    {
        id: 'goodwill-retirement',
        title: '3. Treatment of Goodwill',
        content: 'The retiring partner is compensated for his share of goodwill by the **Continuing Partners in their Gaining Ratio**.',
        subtopics: [
            {
                title: 'Journal Entry',
                description: 'Adjusted through Capital Accounts (AS-26).',
                illustration: {
                    type: 'table',
                    caption: 'Goodwill Adjustment Entry',
                    concept: 'Gaining Partners Dr. to Retiring Partner.',
                    content: [
                        ['Particulars', 'Debit', 'Credit'],
                        ['Continuing Partners\' Capital A/c', 'Dr. (Gaining Ratio)', ''],
                        ['To Retiring Partner\'s Capital A/c', '', 'Cr. (Share of Goodwill)']
                    ]
                }
            },
            {
                title: 'Hidden Goodwill',
                description: 'If the firm agrees to pay a lump sum amount higher than the actual dues (Capital + Reserves + Revaluation), the excess is Hidden Goodwill.',
                points: [
                    '**Hidden Goodwill** = Amount Agreed to be Paid - Actual Amount Due.'
                ]
            }
        ]
    },
    {
        id: 'settlement',
        title: '4. Settlement of Amount Due',
        content: 'The amount due to the retiring partner is settled either by lump sum payment or in installments (treated as Loan).',
        subtopics: [
            {
                title: 'Retiring Partner\'s Loan Account',
                description: 'If amount is not paid immediately, it is transferred to his Loan Account. Interest @ 6% p.a. is allowed if deed is silent (Section 37).',
                illustration: {
                    type: 'table',
                    caption: 'Journal Entry',
                    concept: 'Transfer from Capital to Loan.',
                    content: [
                        ['Scenario', 'Entry'],
                        ['Transfer to Loan', 'Retiring Partner\'s Cap A/c Dr. To Retiring Partner\'s Loan A/c'],
                        ['Interest Due', 'Interest on Loan A/c Dr. To Retiring Partner\'s Loan A/c'],
                        ['Installment Paid', 'Retiring Partner\'s Loan A/c Dr. To Bank A/c']
                    ]
                }
            }
        ]
    },
    {
        id: 'death-partner',
        title: '5. Death of a Partner',
        content: 'Accounting treatment is similar to retirement. The amount is paid to his **Legal Executors**.',
        subtopics: [
            {
                title: 'Calculation of Profit (Interim Period)',
                description: 'If death occurs during the year, profit share till the date of death must be given.',
                points: [
                    '**Time Basis**: Based on last year\'s profit or average profit. Formula: (Avg Profit × Period/12 × Deceased Partner\'s Share).',
                    '**Turnover/Sales Basis**: Based on sales up to date of death. Formula: (Profit % on Sales × Sales till death × Deceased Partner\'s Share).'
                ]
            },
            {
                title: 'Journal Entry for Interim Profit',
                description: 'If profit-sharing ratio of remaining partners does not change.',
                illustration: {
                    type: 'table',
                    caption: 'Profit Suspense Entry',
                    concept: 'Profit & Loss Suspense A/c is used.',
                    content: [
                        ['Situation', 'Entry'],
                        ['Profit (Normal)', 'P&L Suspense A/c Dr. To Deceased Partner\'s Capital A/c'],
                        ['Loss', 'Deceased Partner\'s Capital A/c Dr. To P&L Suspense A/c']
                    ]
                }
            },
            {
                title: 'Executor\'s Account',
                description: 'The final balance is transferred to the Executor\'s Loan Account if not paid immediately.',
                points: [
                    'The executor is entitled to interest on the unpaid balance (usually @ 6% p.a. under Sec 37).'
                ]
            }
        ]
    }
];

export const PARTNERSHIP_RETIREMENT_FLASHCARDS: Flashcard[] = [
    // 1-10: Definitions & Basics
    { id: 1, category: 'Definitions', question: 'What is Gaining Ratio?', answer: 'The ratio in which continuing partners acquire the retiring partner\'s share.' },
    { id: 2, category: 'Calculations', question: 'Gaining Ratio Formula?', answer: 'New Share - Old Share.' },
    { id: 3, category: 'Theory', question: 'Section for Retirement?', answer: 'Section 32 of Indian Partnership Act.' },
    { id: 4, category: 'Theory', question: 'Section for Death?', answer: 'Section 35 of Indian Partnership Act.' },
    { id: 5, category: 'Theory', question: 'Who compensates for Goodwill?', answer: 'Gaining Partners compensate the Retiring Partner.' },
    { id: 6, category: 'Theory', question: 'Goodwill Entry Ratio?', answer: 'Gaining Ratio.' },
    { id: 7, category: 'Theory', question: 'Retiring Partner\'s claim?', answer: 'Capital + Share of Reserves + Reval Profit + Goodwill + Profit till date.' },
    { id: 8, category: 'Theory', question: 'Accumulated Losses treatment?', answer: 'Debited to ALL partners (including retiring) in Old Ratio.' },
    { id: 9, category: 'Theory', question: 'General Reserve treatment?', answer: 'Credited to ALL partners in Old Ratio.' },
    { id: 10, category: 'Theory', question: 'Revaluation Profit/Loss?', answer: 'Shared by ALL partners (Old Ratio).' },

    // 11-20: Settlement & Loan
    { id: 11, category: 'Theory', question: 'Entry for Amount Due (Unpaid)?', answer: 'Retiring Partner\'s Cap Dr. To Retiring Partner\'s Loan A/c.' },
    { id: 12, category: 'Calculations', question: 'Interest on Loan (No Deed)?', answer: '6% p.a.' },
    { id: 13, category: 'Theory', question: 'Section 37 Option?', answer: 'Interest @ 6% p.a. OR Share of profit earned using unpaid capital.' },
    { id: 14, category: 'Theory', question: 'Is Partner\'s Loan a liability?', answer: 'Yes, shown in Balance Sheet.' },
    { id: 15, category: 'Calculations', question: 'Interest on Loan entry?', answer: 'Interest A/c Dr. To Partner\'s Loan A/c.' },
    { id: 16, category: 'Theory', question: 'Payment of installment?', answer: 'Partner\'s Loan A/c Dr. To Bank.' },
    { id: 17, category: 'Theory', question: 'Can Retiring Partner give notice?', answer: 'Yes, mandatory for voluntary retirement.' },
    { id: 18, category: 'Theory', question: 'Liability for acts before retirement?', answer: 'Retiring partner remains liable unless public notice is given.' },
    { id: 19, category: 'Calculations', question: 'Hidden Goodwill on Retirement?', answer: 'Amount Paid - (Capital + Adj). Excess is Goodwill.' },
    { id: 20, category: 'Theory', question: 'Settlement in Investments?', answer: 'Partner\'s Cap Dr. To Investment (at agreed value).' },

    // 21-30: Death & Executors
    { id: 21, category: 'Definitions', question: 'Who is an Executor?', answer: 'Legal representative of the deceased partner.' },
    { id: 22, category: 'Theory', question: 'Account used for interim profit?', answer: 'Profit & Loss Suspense Account.' },
    { id: 23, category: 'Theory', question: 'When is P&L Suspense NOT used?', answer: 'If Remaining Partners change their Profit Sharing Ratio.' },
    { id: 24, category: 'Calculations', question: 'Time Basis Profit?', answer: 'Avg Profit × Time/12 × Share.' },
    { id: 25, category: 'Calculations', question: 'Turnover Basis Profit?', answer: '(Profit / Total Sales) × Sales till death × Share.' },
    { id: 26, category: 'Theory', question: 'Deceased Partner\'s Share of Goodwill?', answer: 'Gaining Partners\' Cap Dr. To Deceased Partner\'s Cap.' },
    { id: 27, category: 'Theory', question: 'Balance of Deceased Cap transferred to?', answer: 'Executor\'s Account.' },
    { id: 28, category: 'Theory', question: 'Where is P&L Suspense shown (B/S)?', answer: 'Assets side (if loss, Liabilities side / deduction from Cap).' },
    { id: 29, category: 'Theory', question: 'Joint Life Policy (JLP)?', answer: 'Surrender Value is shared by all partners in Old Ratio.' },
    { id: 30, category: 'Theory', question: 'Interest on Drawings till death?', answer: 'Charged to Deceased Partner\'s Cap A/c.' },

    // 31-40: Adjustments
    { id: 31, category: 'Calculations', question: 'Workmen Comp Claim > Reserve?', answer: 'Loss charged to Revaluation A/c.' },
    { id: 32, category: 'Calculations', question: 'IFR > Fall in Investment?', answer: 'Surplus IFR credited to All Partners (Old Ratio).' },
    { id: 33, category: 'Theory', question: 'Employees Provident Fund?', answer: 'Liability (Not distributed).' },
    { id: 34, category: 'Theory', question: 'Machinery Replacement Fund?', answer: 'Accumulated Profit (Distributed to All Partners).' },
    { id: 35, category: 'Calculations', question: 'Bad Debts Recovered?', answer: 'Credited to Revaluation A/c.' },
    { id: 36, category: 'Calculations', question: 'Stock Undervalued by 10%?', answer: 'Value = Book Value / 90 * 100. Gain credited to Reval.' },
    { id: 37, category: 'Calculations', question: 'Prov for Tax created?', answer: 'Debit Revaluation A/c (Liability Increase).' },
    { id: 38, category: 'Theory', question: 'New PSR not given?', answer: 'Assume old ratio continues between remaining partners.' },
    { id: 39, category: 'Calculations', question: 'Gaining Ratio if New PSR not given?', answer: 'Same as Old Ratio between continuing partners.' },
    { id: 40, category: 'Theory', question: 'Retirement during the year?', answer: 'Profit till date calculated same as Death.' },

    // 41-50: Advanced
    { id: 41, category: 'Calculations', question: 'Cap Adj: Total Cap Given?', answer: 'Distribute Total Cap in New Ratio. Find Surplus/Deficit.' },
    { id: 42, category: 'Calculations', question: 'Cap Adj: Based on New Partner?', answer: 'Total Cap = New Partner Cap × (1/Share).' },
    { id: 43, category: 'Theory', question: 'Advertisement Suspense?', answer: 'Fictitious Asset. Written off to All Partners (Dr. side).' },
    { id: 44, category: 'Theory', question: 'Loan A/c Appearing in B/S (Liability)?', answer: 'Transferred to Capital A/c credit side before settlement.' },
    { id: 45, category: 'Theory', question: 'Loan to Partner (Asset)?', answer: 'Debited to Capital A/c.' },
    { id: 46, category: 'Theory', question: 'Executor\'s Loan Interest?', answer: 'Taxable in hands of executor.' },
    { id: 47, category: 'Theory', question: 'Section 37 applies when?', answer: 'Partnership deed is silent on interest on unpaid dues.' },
    { id: 48, category: 'Theory', question: 'Dissolution vs Retirement?', answer: 'Dissolution ends firm; Retirement ends relation with ONE partner.' },
    { id: 49, category: 'Calculations', question: 'Share of Goodwill > Cap Balance?', answer: 'Capital Account can show Debit Balance.' },
    { id: 50, category: 'Theory', question: 'Public Notice required?', answer: 'Yes, for retirement (Sec 32).' }
];

export const PARTNERSHIP_RETIREMENT_SQPS: SQPQuestion[] = [
    // --- 2025-26 ---
    {
        id: 'sqp-retire-8-main',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '8. A, B and C were partners sharing Profits &Losses in the ratio 7:2:1. B died. A took over 1/20 from his share and remaining share was taken over by C. Determine the new Profit sharing Ratio.\n(A) 4 : 1\n(B) 7 : 1\n(C) 71 : 29\n(D) 3 : 1',
        markingScheme: '(D) 3 : 1',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Language**\n- "A took over 1/20 **from** his share" means A directly acquires exactly 1/20th of the total firm\'s share. You do not multiply this fraction; it is the absolute gain.\n\n**Step 2: Determine Each Partner\'s Current Status**\n- Old Ratio A:B:C = 7:2:1 (Sum=10).\n- A\'s Old Share = 7/10.\n- B\'s Share to distribute = 2/10.\n- C\'s Old Share = 1/10.\n\n**Step 3: Calculate the Distribution of B\'s Share**\n- **A\'s Gain** = 1/20.\n- The remaining part of B\'s share is taken by C.\n- Remaining of B\'s share = Total B\'s share (2/10) - A\'s Gain (1/20) = 4/20 - 1/20 = **3/20**.\n- **C\'s Gain** = 3/20.\n\n**Step 4: Calculate the New Shares**\n- A\'s New Share = Old (7/10) + Gain (1/20) = 14/20 + 1/20 = **15/20**.\n- C\'s New Share = Old (1/10) + Gain (3/20) = 2/20 + 3/20 = **5/20**.\n\n**Step 5: Find the New Profit Sharing Ratio**\n- Ratio of A : C = 15/20 : 5/20 = 15 : 5 = **3 : 1**.'
    },
    {
        id: 'sqp-retire-8-or',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '8 (OR). X, Y and Z were partners sharing Profit & Losses in the ratio 5:3:2. Y retired, and he gifted half of his share to X and remaining half was taken over equally by X and Z. Determine the new Profit-sharing Ratio.\n(A) 29 : 11\n(B) 13 : 7\n(C) 1 : 1\n(D) 5 : 2',
        markingScheme: '(A) 29 : 11',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Parts of Y\'s Share**\n- Old Ratio X:Y:Z = 5:3:2 (Sum=10).\n- Y\'s Share to distribute = **3/10**.\n- Y gifts *half* of his share directly to X.\n- The *remaining half* is split equally between X and Z.\n\n**Step 2: Calculate the Distribution**\n- Half of Y\'s share = (1/2) × (3/10) = 3/20.\n- **Gift to X** = 3/20.\n- Remaining half to be split = 3/20.\n- Split equally: 1/2 of 3/20 = 3/40.\n- **X acquires** = 3/40.\n- **Z acquires** = 3/40.\n\n**Step 3: Calculate Total Gains**\n- **X\'s Total Gain** = Gift (3/20) + Acquired (3/40) = 6/40 + 3/40 = **9/40**.\n- **Z\'s Total Gain** = Acquired (3/40) = **3/40**.\n\n**Step 4: Calculate the New Shares**\n- X\'s New Share = Old (5/10) + Total Gain (9/40) = 20/40 + 9/40 = **29/40**.\n- Z\'s New Share = Old (2/10) + Total Gain (3/40) = 8/40 + 3/40 = **11/40**.\n- **New Ratio** = **29 : 11**.'
    },
    {
        id: 'sqp-retire-24',
        year: '2025-26',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '24. Alok, Deepak and Manish were partners sharing Profit &Loss in the ratio 5:3:2. Deepak retired on March 31, 2025. On this date his dues after all adjustments related to Revaluation Gain/Loss, Accumulated Profits/Losses and Goodwill treatment came out to be ₹ 6,40,000. He was paid ₹ 40,000 through Furniture on retirement and it was agreed to pay balance in three equal annual instalments together with interest as per the rate permissible by act, in the absence of any agreement. First instalment being paid on March 31, 2026. You are required to pass entry for immediate payment to Deepak on retirement and prepare Deepak’s Loan Account till it is finally closed.',
        markingScheme: '**Journal Entry:**\nDeepak\'s Capital A/c ...Dr. 6,40,000\n  To Furniture A/c 40,000\n  To Deepak\'s Loan A/c 6,00,000\n(Being Deepak\'s Capital account settled)\n\n**Deepak\'s Loan Account**\n| Date | Particulars | Amt (₹) | Date | Particulars | Amt (₹) |\n|---|---|---|---|---|---|\n| **2026** | | | **2025** | | |\n| Mar 31 | To Bank (2,00,000 + 36,000) | 2,36,000 | Apr 01 | By Deepak\'s Cap | 6,00,000 |\n| Mar 31 | To Bal c/d | 4,00,000 | **2026** | | |\n| | | | Mar 31 | By Interest (6%) | 36,000 |\n| | **Total** | **6,36,000** | | **Total** | **6,36,000** |\n| **2027** | | | **2026** | | |\n| Mar 31 | To Bank (2,00,000 + 24,000) | 2,24,000 | Apr 01 | By Bal b/d | 4,00,000 |\n| Mar 31 | To Bal c/d | 2,00,000 | **2027** | | |\n| | | | Mar 31 | By Interest (6%) | 24,000 |\n| | **Total** | **4,24,000** | | **Total** | **4,24,000** |\n| **2028** | | | **2027** | | |\n| Mar 31 | To Bank (2,00,000 + 12,000) | 2,12,000 | Apr 01 | By Bal b/d | 2,00,000 |\n| | | | **2028** | | |\n| | | | Mar 31 | By Interest (6%) | 12,000 |\n| | **Total** | **2,12,000** | | **Total** | **2,12,000** |',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | Alok, Deepak, Manish |\n| Profit Sharing Ratio | 5 : 3 : 2 |\n| Total Dues to Deepak (after all adj) | ₹ 6,40,000 |\n| Paid via Furniture immediately | ₹ 40,000 |\n| Balance Transferred to Loan | ₹ 6,00,000 |\n| Mode of Payment | 3 Equal Annual Instalments |\n| Interest Rate | 6% p.a. (Section 37 — absence of deed) |\n| First Instalment Due | 31 March 2026 |\n\n---\n\n### 💡 Concept: Retiring Partner\'s Loan Account\n\nWhen the full amount cannot be paid at once, the balance is transferred from **Capital Account** to a **Loan Account**. Interest accrues on the outstanding balance each year at **6% p.a.** (the default rate under Section 37 when no deed exists).\n\n> **Key Rule**: Interest is always calculated on the **opening balance** of each year (after deducting the principal of the previous instalment).\n\n**Deepak\'s Retirement — Loan Account in 3 Instalments (2025-26 SQP, 6 Marks):**\n\n**Concept**: Tests two things: (1) Settlement Journal Entry when retiring partner is paid partly via asset (Furniture) and balance transferred to Loan Account, and (2) Preparing the Loan Account with diminishing interest at 6% p.a. (Section 37 default rate).\n\n---\n\n**STEP 1 — Journal Entry at Retirement (March 31, 2025)**\n- Total Dues = ₹6,40,000.\n- Payment via Furniture: ₹40,000.\n- Balance → Deepak\'s Loan A/c: ₹6,00,000.\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Deepak\'s Capital A/c Dr. | 6,40,000 | |\n|   To Furniture A/c | | 40,000 |\n|   To Deepak\'s Loan A/c | | 6,00,000 |\n| *(Deepak\'s capital settled by Furniture and transfer to Loan)* | | |\n\n**STEP 2 — Interest Rate (KEY RULE)**\n- "In the absence of any agreement" → Interest @ **6% p.a.** as per Section 37, Indian Partnership Act.\n\n**STEP 3 — Principal per Instalment**\n```\nPrincipal = ₹6,00,000 ÷ 3 = ₹2,00,000 per year\n```\n\n**STEP 4 — Deepak\'s Loan Account (Year-by-Year)**\n\n| Year | Opening Balance | Interest (6%) | Total | Instalment Paid | Closing Balance |\n|---|---|---|---|---|---|\n| 2025-26 | 6,00,000 | 36,000 | 6,36,000 | 2,36,000 | 4,00,000 |\n| 2026-27 | 4,00,000 | 24,000 | 4,24,000 | 2,24,000 | 2,00,000 |\n| 2027-28 | 2,00,000 | 12,000 | 2,12,000 | 2,12,000 | **0** |\n\n> 💡 **Exam Tip**: Interest is always calculated on the **OPENING balance** of each year (the balance after previous year\'s principal repayment). Interest amounts decrease each year because the principal reduces — this is called **Diminishing Balance Interest**.'
    },
    {
        id: 'sqp-retire-25-or',
        year: '2025-26',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '25 (OR). Aman, Barman and Raman were partners sharing Profits & Losses in the ratio 5:3:2. Their Balance Sheet on March 31, 2025 was as follows:\n\n**Liabilities (₹)**: Aman Cap 80k, Barman 70k, Raman 50k (Total 2L); WCR 50k; Acc. Dep (Bldg) 20k; P&L 40k; Creditors 25k; Outstanding Exp 15k. Total: 3,50,000.\n**Assets (₹)**: Bank 30k; Bldg 1L; Furn 60k; Debtors 50k; Stock 40k; Prepaid Exp 20k; Def Rev Exp 20k; Goodwill 30k. Total: 3,50,000.\n\nOn the above date Barman retired and his share was acquired by Aman and Raman equally. Agreements:\n(a) Create Provision for doubtful debts @ 10%.\n(b) Market value of Building is ₹1,00,000 and Furniture was overvalued by 20%.\n(c) Stock was valued at ₹ 55,000. Creditors of ₹ 15,000 took over stock of ₹ 10,000 in settlement of their claims.\n(d) Goodwill of the firm was valued at ₹ 80,000.\n(e) Prepaid Expenses are worthless and Outstanding Expenses are now ₹20,000.\n(f) ₹ 20,000 was immediately paid to Barman on retirement brought in Aman and Raman in ratio 3:2.\nPrepare Revaluation Account and Partner’s Capital Account.',
        markingScheme: '**Revaluation Account**\n- **Credits**: Stock Increase (15,000), Building Increase (Total Value 1L, Book 1L - but Acc Dep 20k, so Net Book 80k? Or is "Building" at Cost? "Accumulated Depreciation" is on Liabilities side (Provision), so Building Asset side is Cost. Mkt Value 1L = No Change? Wait. Questions says "Market value of Building is ₹1,00,000". Book Value is 1,00,000. So no change... *Correction*: MS says Building Credit 20,000. Why? Ah, "Building 1,00,000" in Assets. "Accumulated Depreciation 20,000" in Liabilities. So Book Value = 80,000. Market Value = 1,00,000. Increase = 20,000. Correct. *\n- **Debits**: Prov DD (5,000), Furniture (10,000 - 20% overvalued means Book = 120% of True. 60k/1.2 = 50k. Loss 10k), Outstanding Exp (5,000 Increase), Prepaid Exp (20,000 Written off).\n- **Net**: Total Debit 40,000. Total Credit 35,000. Loss 5,000? MS says "Revaluation (Credit: Building 20k, Stock 15k, Creditors 5k)". Creditors 5k? "Creditors of 15k took stock of 10k in settlement". 15k Liability settled for 10k Asset (Stock Book 40k -> Revalued 55k). Stock taken at 10k? No, "Stock of 10k". If Creditors (15k) accept Stock (10k) in *full settlement*, we gain 5k. Correct. \n- **Total Credit**: 20k+15k+5k = 40k. **Total Debit**: 10k (Furn) + 20k (Prepaid) + 5k (Prov) + 5k (Outstanding) = 40k. **Profit/Loss = Nil**. MS says "Revaluation Account Total 40,000". Matches.\n\n**Partners Capital**:\n- **Credits**: Bal b/d (80,70,50), WCR (25,15,10), P&L (20,12,8).\n- **Debits**: Def Rev Exp (10,6,4), Goodwill (Existing 30k -> 15,9,6).\n- **Barman\'s Settlement**: Due = 70+15+12 - 6 - 9 + Goodwill Share.\n  - Goodwill Firm 80k. Barman (3/10) = 24k. Gaining Ratio Equal (1:1). Aman gives 12k, Raman gives 12k.\n  - Total Credit for Barman = 70+15+12+24 = 121k. Debit = 15. Net Due = 106k.\n  - Immediate Pay 20k. Loan = 86k. Matches MS.',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | Aman, Barman, Raman |\n| Old Profit Sharing Ratio | 5 : 3 : 2 |\n| Barman Retired | March 31, 2025 |\n| New Partner Acquiring | Aman & Raman **equally** |\n| Goodwill of Firm | ₹ 80,000 |\n| Immediate Payment to Barman | ₹ 20,000 |\n| Cash brought in by | Aman & Raman in 3:2 ratio |\n\n---\n\n### 💡 Key Concept: Net-Zero Revaluation\n\nAll gains and losses in Revaluation A/c cancel each other out — Net result = ₹ 0. This means no change to partners\' capitals from revaluation.\n\n**Aman, Barman & Raman — Comprehensive Retirement (2025-26 SQP OR, 6 Marks):**\n\n---\n\n**STEP 1 — Revaluation Account (Net = ₹0)**\n\n| Credit (Gains) | ₹ | Debit (Losses) | ₹ |\n|---|---|---|---|\n| Building Appreciation (₹1L−BV ₹80k*) | 20,000 | Furniture Written Down (20%) | 10,000 |\n| Stock Appreciation (₹55k−₹40k) | 15,000 | Prov for Doubtful Debts (10%×50k) | 5,000 |\n| Creditors Gain (15k settled for 10k stock) | 5,000 | Outstanding Exp. increase (20k−15k) | 5,000 |\n| | | Prepaid Exp. Written Off | 20,000 |\n| **Total Credit** | **40,000** | **Total Debit** | **40,000** |\n\n*Building BV = ₹1,00,000 − ₹20,000 (acc dep) = ₹80,000. Market ₹1,00,000. Gain = ₹20,000.*\n*Furniture: ₹60,000 overvalued by 20% → True value = 60,000 ÷ 1.2 = ₹50,000. Loss = ₹10,000.*\n\n**STEP 2 — Gaining Ratio**\n- Barman\'s Share (3/10) acquired **equally** by Aman & Raman.\n- **Gaining Ratio = 1:1**.\n- Barman\'s Goodwill (3/10 of 80,000 = **₹24,000**).\n  - Aman pays ₹12,000; Raman pays ₹12,000.\n\n**STEP 3 — Capital Accounts (Key Items)**\n- Credit to all: WCR (₹50,000 in 5:3:2), P&L (₹40,000 in 5:3:2).\n- Debit to all: Deferred Rev Exp (₹20,000 in 5:3:2), Goodwill (₹30,000 in 5:3:2).\n- Goodwill Gain Entry: Aman Dr ₹12,000; Raman Dr ₹12,000 → To Barman ₹24,000.\n\n**STEP 4 — Barman\'s Dues**\n- Opening Cap: ₹70,000 + WCR ₹15,000 + P&L ₹12,000 + GW ₹24,000 = ₹1,21,000 (Credit).\n- Less: Goodwill ₹9,000 + DRE ₹6,000 = ₹15,000 (Debit).\n- **Net Due = ₹1,06,000**.\n- Paid ₹20,000 immediately (Aman: ₹12k, Raman: ₹8k in 3:2). Balance → **Barman\'s Loan ₹86,000**.\n\n> 💡 **Exam Tip**: In a "Net Zero" revaluation, confirm both sides of Revaluation A/c equal the same amount. This is a common examiner\'s twist — zero net effect is deliberate, testing whether students still correctly adjust goodwill and reserves.'
    },
    {
        id: 'sqp-retire-1-or',
        year: '2025-26',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '1 (OR). Assertion (A) :- Fluctuating Capital Account can show debit balance.\nReason (R) :- Losses and Drawings can be more than Capital Balance.\n(A) Both A and R are correct, and R is the correct explanation of A\n(B) Both A and R are correct, but R is not the correct explanation of A\n(C) A is correct but R is incorrect\n(D) Both A and R are incorrect.',
        markingScheme: '(A) Both A and R are correct, and R is the correct explanation of A',
        aiExplanation: '**Key Standard**: In Fluctuating Capital Accounts, all adjustments (Losses, Drawings, Interest) are passed through the Capital Account itself. If the sum of Losses/Drawings exceeds the Opening Credit Balance, the account reflects a Debit Balance.'
    },
    {
        id: 'sqp-retire-6',
        year: '2025-26',
        type: 'Subjective (1 Mark)',
        marks: 1,
        question: '6. Jai and Veeru were in a partnership sharing Profit &Loss in the ratio 5:3. Their Capitals were ₹ 10,00,000 and ₹ 8,00,000 respectively. The firm was also having reserves of ₹ 7,00,000. Normal rate of return was 10%. Firm made average profits of ₹ 2,30,000 for the year ended March 31, 2025 (after adjustment of loss of machinery of book value of ₹2,00,000 by fire against which insurance claim of ₹1,50,000 was admitted). Value of goodwill as per Capitalisation of super profits will be:\n(A) ₹ 10,00,000\n(B) ₹ 3,00,000\n(C) ₹ 18,00,000\n(D) Nil.',
        markingScheme: '(B) ₹ 3,00,000',
        aiExplanation: '**Step-by-Step Calculation:**\n\n**1. Capital Employed:**\n- Capitals (18,00,000) + Reserves (7,00,000) = **25,00,000**.\n\n**2. Normal Profit:**\n- 10% of 25,00,000 = **2,50,000**.\n\n**3. Average Profit Adjustment:**\n- Reported Profit: 2,30,000.\n- Add: Abnormal Loss (Loss by Fire). \n  - Loss = Book Value (2,00,000) - Claim (1,50,000) = 50,000.\n  - This 50,000 was debited to P&L. We must add it back to find Normal Business Profit.\n- Adjusted Avg Profit = 2,30,000 + 50,000 = **2,80,000**.\n\n**4. Super Profit:**\n- Avg Profit (2,80,000) - Normal Profit (2,50,000) = **30,000**.\n\n**5. Goodwill (Capitalisation of SP):**\n- Super Profit × (100 / NRR)\n- 30,000 × (100 / 10) = **3,00,000**.'
    },
    // --- 2024-25 ---
    {
        id: 'sqp-retire-death-2025-15-or',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '15 (OR). A, B and C were partners sharing profits and losses equally. B died on 31 August, 2023 and total amount transferred to B’s executors was ₹ 13,20,000. B’s executors were being paid ₹ 1,20,000 immediately and balance was to be paid in four equal semi-annual instalments together with interest @ 10% p.a. Total amount of interest to be credited to B’s executors Account for the year ended March 31, 2024 will be?\n(A) ₹ 70,000\n(B) ₹ 67,500\n(C) ₹ 60,000\n(D) ₹ 77,000',
        markingScheme: '(B) ₹ 67,500',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Initial Settlement & Loan Creation**\n- Total transferred to B\'s Executors = ₹13,20,000.\n- Immediate cash payment = ₹1,20,000.\n- Starting **Principal Loan Balance** = 13,20,000 - 1,20,000 = **₹12,00,000**.\n\n**Step 2: Understand the Repayment Schedule**\n- The remaining ₹12,00,000 is to be paid in 4 equal semi-annual (every 6 months) installments.\n- Principal per installment = 12,00,000 / 4 = ₹3,00,000.\n- Interest Rate = 10% p.a.\n- Date of Loan Creation = August 31, 2023.\n\n**Step 3: Calculate First Interest Period (Before March 31)**\n- The first 6-month period runs from *August 31, 2023* to *February 29, 2024*.\n- Interest on full balance (₹12,00,000) for 6 months = 12,00,000 × 10% × 6/12 = **₹60,000**.\n- *On Feb 29, the firm pays the first installment (3,00,000 + 60,000 interest).*\n- New Principal Balance = 12,00,000 - 3,00,000 = **₹9,00,000**.\n\n**Step 4: Calculate Second Interest Period (Before March 31)**\n- The financial year ends on *March 31, 2024*.\n- We need to accrue interest for the remaining 1 month of the financial year (March 1 to March 31).\n- Interest on reduced balance (₹9,00,000) for 1 month = 9,00,000 × 10% × 1/12 = **₹7,500**.\n\n**Step 5: Total Interest Credited in Financial Year**\n- Total interest for the year ended March 31, 2024 = 60,000 + 7,500 = **₹67,500**.'
    },
    {
        id: 'sqp-retire-death-2025-18',
        year: '2024-25',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '18. A, B and C were partners sharing profits, and losses in the ratio of 2:2:1. C died on 1st July, 2023 on which date the capitals of A, B and C after all necessary adjustments stood at ₹74,000, ₹ 63,750 and 42,250 respectively. A and B continued to carry on the business for six months without settling the accounts of C. During the period of six months from 1 -7-2023, a profit of ₹ 20,500 is earned using the firm’s property. State which of the two options available u/s 37 of the Indian Partnership Act, 1932 should be exercised by executors of C and why?.',
        markingScheme: '**Analysis under Section 37:**\n\n**Option 1: Share in Profits**\n- Formula: Profit × (Deceased Partner Capital / Total Capital of All Partners)\n- Total Capital = 74,000 (A) + 63,750 (B) + 42,250 (C) = ₹ 1,80,000.\n- C\'s Share = 20,500 × (42,250 / 1,80,000) \n- Calculation: 20,500 × 0.2347... ≈ **₹ 4,812**.\n\n**Option 2: Interest on Capital**\n- Formula: Unsettled Capital × Rate × Time\n- 42,250 × 6% × 6/12 = **₹ 1,267.50**.\n\n**Conclusion:**\n- C\'s executors should exercise **Option 1 (Share in Profits)** because the amount (₹ 4,812) is significantly higher than the interest amount (₹ 1,267.50).',
        aiExplanation: '**AI Explanation:**\n\n**Section 37 Rights:**\nWhen a partner dies/retires and their dues are not settled while the business continues, they are entitled to whichever is higher:\n1.  **Interest @ 6% p.a.** on the unpaid balance.\n2.  **Share of Profit** earned proportional to their capital employed in the business.\n\n**Application:**\n- The profit earned (20,500) was generated using the total capital of 1,80,000, of which C owned 42,250.\n- C\'s capital generated approx 23.5% of the funds, so C is entitled to ~23.5% of the profits (₹ 4,812).\n- Alternatively, the statutory interest is only ₹ 1,267.\n- Clearly, sharing the profit is more beneficial.'
    },
    {
        id: 'sqp-retire-death-2025-20',
        year: '2024-25',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '20. Bat, Cat and Rat were partners sharing profits and losses in the ratio 5:3:2. Cat retired and on that date there was a balance of Investment of ₹ 4,00,000 and Investment Fluctuation Reserve of ₹ 1,00,000 was appearing in the balance sheet. Pass necessary journal entries for Investment Fluctuation reserve in the following cases.\n(i) Market Value of Investments was ₹ 4,80,000.\n(ii) Market Value of Investments was ₹ 3,80,000.\n(iii) Market Value of Investments was ₹ 2,90,000',
        markingScheme: '**Journal Entries:**\n\n**(i) Market Value ₹ 4,80,000 (Increase - IFR Not Used)**\n1. Distribute IFR to Partners (Old Ratio 5:3:2):\n   IFR A/c ...Dr 1,00,000\n     To Bat\'s Cap A/c 50,000\n     To Cat\'s Cap A/c 30,000\n     To Rat\'s Cap A/c 20,000\n2. Record Increase in Investment (Revaluation):\n   Investment A/c ...Dr 80,000\n     To Revaluation A/c 80,000\n3. Distribute Revaluation Gain:\n   Revaluation A/c ...Dr 80,000\n     To Bat 40,000\n     To Cat 24,000\n     To Rat 16,000\n\n**(ii) Market Value ₹ 3,80,000 (Fall of ₹ 20,000)**\n1. Adjust Fall from IFR and Distribute Balance:\n   IFR A/c ...Dr 1,00,000\n     To Investment A/c 20,000\n     To Bat\'s Cap A/c 40,000\n     To Cat\'s Cap A/c 24,000\n     To Rat\'s Cap A/c 16,000\n\n**(iii) Market Value ₹ 2,90,000 (Fall of ₹ 1,10,000)**\n1. Entire IFR Used + Revaluation Loss:\n   IFR A/c ...Dr 1,00,000\n   Revaluation A/c ...Dr 10,000\n     To Investment A/c 1,10,000\n2. Distribute Revaluation Loss:\n   Bat\'s Cap A/c ...Dr 5,000\n   Cat\'s Cap A/c ...Dr 3,000\n   Rat\'s Cap A/c ...Dr 2,000\n     To Revaluation A/c 10,000',
        aiExplanation: '**Key Standard:** Investment Fluctuation Reserve (IFR) is created to cover falls in market value.\n- **Case 1 (Use 0%)**: Entire IFR is distributed. Gain in value goes to Revaluation.\n- **Case 2 (Partial Use)**: Fall in value (20k) is deducted from IFR. Remaining IFR (80k) distributed.\n- **Case 3 (Excess Fall)**: Fall (1.1L) > IFR (1L). Entire IFR wiped out. Excess loss (10k) charged to Revaluation.'
    },
    {
        id: 'sqp-retire-death-2025-22',
        year: '2024-25',
        type: 'Subjective (4 Marks)',
        marks: 4,
        question: '22. X, Y and Z were partners sharing profits and losses equally. Y died on 1st October, 2023 and total amount transferred to Y’s executors was ₹ 15,60,000. Y’s executors were being paid ₹ 3,60,000 immediately and balance was to be paid in four equal quarterly instalments, together with Interest @ 6% p.a. Pass entries till payment of first two instalments.',
        markingScheme: '**Journal Entries:**\n\n**1. Transfer & Immediate Payment (1.10.2023):**\n- Y\'s Cap A/c ...Dr 15,60,000\n  To Y\'s Exe A/c 15,60,000\n- Y\'s Exe A/c ...Dr 3,60,000\n  To Bank A/c 3,60,000\n(Bal = 12,00,000)\n\n**2. First Installment (31.12.2023 - 3 Months):**\n- **Interest Due**: 12,00,000 × 6% × 3/12 = 18,000.\n- Interest A/c ...Dr 18,000\n  To Y\'s Exe A/c 18,000\n- **Payment (3L Principal + 18k Int)**:\n- Y\'s Exe A/c ...Dr 3,18,000\n  To Bank A/c 3,18,000\n(Bal = 9,00,000)\n\n**3. Second Installment (31.03.2024 - 3 Months):**\n- **Interest Due**: 9,00,000 × 6% × 3/12 = 13,500.\n- Interest A/c ...Dr 13,500\n  To Y\'s Exe A/c 13,500\n- **Payment (3L Principal + 13.5k Int)**:\n- Y\'s Exe A/c ...Dr 3,13,500\n  To Bank A/c 3,13,500\n(Bal = 6,00,000)',
        aiExplanation: '**Calculations:**\n- **Principal Installment**: (15.6L - 3.6L) / 4 = 3,00,000 per quarter.\n- **Q1 Interest**: On 12L for Oct-Dec = 18,000.\n- **Q2 Interest**: On 9L (12L - 3L) for Jan-Mar = 13,500.'
    },
    {
        id: 'sqp-retire-death-2025-24-main',
        year: '2024-25',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '24 (Main). Meghna, Mehak and Mandeep were partners in a firm whose Balance Sheet as on 31st March, 2023 was as under:\n\n**Balance Sheet**\n| Liabilities | Amount | Assets | Amount |\n|---|---|---|---|\n| Creditors | 28,000 | Cash | 27,000 |\n| General Reserve | 7,500 | Debtors | 20,000 |\n| Capitals: | | Stock | 28,000 |\n| Meghna 20,000 | | Furniture | 5,000 |\n| Mehak 14,500 | | | |\n| Mandeep 10,000 | 44,500 | | |\n| **Total** | **80,000** | **Total** | **80,000** |\n\nMehak retired on this date under following terms:\n(i) To reduce stock and furniture by 5% and 10% respectively.\n(ii) To provide for doubtful debts at 10% on debtors.\n(iii) Goodwill was valued at ₹12,000.\n(iv) Creditors of Rs.8,000 were settled at Rs.7,100.\n(v) Mehak should be paid off and the entire sum payable to Mehak shall be brought in by Meghna and Mandeep in such a way that their capitals should be in their new profit-sharing ratio and a balance of Rs.25,000 is maintained in the cash account.\nPrepare Revaluation Account and partners’ capital accounts of the new firm.',
        markingScheme: '**Revaluation Account**\n| Particulars | Amt | Particulars | Amt |\n|---|---|---|---|\n| To Stock (5% of 28k) | 1,400 | By Creditors (8k-7.1k) | 900 |\n| To Furniture (10% of 5k) | 500 | By Loss t/f | |\n| To Prov DD (10% of 20k) | 2,000 | - Meghna (1/3) | 1,000 |\n| | | - Mehak (1/3) | 1,000 |\n| | | - Mandeep (1/3) | 1,000 |\n| **Total** | **3,900** | **Total** | **3,900** |\n\n**Partners Capital Account**\n*(Summary)*\n- **Mehak\'s Dues**: Op Cap 14,500 + Gen Res 2,500 + Goodwill Share 4,000 (1/3 of 12k) - Reval Loss 1,000 = **₹ 20,000**.\n- **Payment**: Mehak paid 20,000 immediately.\n- **Cash Balance Required**: 25,000. Existing Cash = 27,000.\n- **Cash to be Brought In/Paid Out**:\n  - Payment to Mehak (20k) + Closing Cash (25k) = 45k needed.\n  - Sources: Opening Cash (27k) + Amount brought by Partners.\n  - Amount to be brought = 45k - 27k = 18,000.\n- **New Capital Calculation**:\n  - Combined Adjusted Capital of Meghna & Mandeep = (20k+2.5k-1k-2k GW) + (10k+2.5k-1k-2k GW) = 19.5k + 9.5k = 29,000.\n  - Plus Amount to be brought (18,000) = 47,000? Wait. Standard method: Total Capital of New Firm = Adjusted Caps + Shortfall.\n  - Adjusted Caps: Meghna (19.5k) + Mandeep (9.5k) = 29,000. \n  - Add Payment to Mehak (20,000). Less Surplus Cash (27k - 25k = 2k). Total New Capital = 29k + 18k = 47,000? No. \n  - Let\'s check MS Final Balances: Meghna 27,050, Mandeep 30,050? Total 57,100.\n  - Let\'s re-read MS. "By Cash 7,550 (Meghna), 17,550 (Mandeep)". Total Cash In = 25,100.\n  - 25,100 + 27,000 (Op) - 20,000 (Paid) = 32,100. Closing Cash 32,100? Question says 25,000.\n  - Discrepancy in my quick math vs MS.\n  - MS says: Meghna Bal c/d 27,050. Mandeep Bal c/d 27,050? (Wait, MS says "To Bal c/d ... 27,050 ... 27,050"). Equal capitals?\n  - If Profit Ratio is not given, and Old is "partners" (implied equal?), New is Equal.\n  - Total Capital = 27,050 + 27,050 = 54,100.\n  - Let\'s stick to VERBATIM MS for the solution.\n\n**MS Key Figures:**\n- Revaluation Loss: 3,000 (1000 each).\n- Mehak Paid: 20,000.\n- Cash Brought In: Meghna 7,550, Mandeep 17,550.\n- Final Capitals: Meghna 27,050, Mandeep 27,050.',
        aiExplanation: '**Meghna, Mehak & Mandeep — Full Retirement with Cash Adjustment (2024-25 SQP Main, 6 Marks):**\n\n**Concept**: Full retirement question — Revaluation Account + Capital Accounts + determining how much cash each continuing partner must bring. Key insight: Creditors partially settled in cash, reducing available cash balance.\n\n---\n\n**STEP 1 — Revaluation Account**\n\n| Credit (Gains) | ₹ | Debit (Losses) | ₹ |\n|---|---|---|---|\n| Discount on Creditors (8k−7.1k gain) | 900 | Stock Reduced by 5% (5%×28k) | 1,400 |\n| | | Furniture Reduced by 10% (10%×5k) | 500 |\n| | | Prov for DD (10%×20k) | 2,000 |\n| **Total Credit** | **900** | **Total Debit** | **3,900** |\n| | | **Loss Distributed (1,000 each)** | **3,000** |\n\n*Profit Sharing Ratio: Equal (1:1:1) assumed since not stated.*\n\n**STEP 2 — Mehak\'s Dues (Capital Account)**\n- Opening Capital: ₹14,500.\n- Add: General Reserve (1/3 of 7,500): **+₹2,500**.\n- Add: Goodwill (1/3 of 12,000): **+₹4,000**.\n- Less: Revaluation Loss (1/3 of 3,000): **−₹1,000**.\n- **Mehak\'s Total Dues: ₹20,000**.\n\n**STEP 3 — Cash Flow Logic (KEY INSIGHT)**\n- Required ending cash: ₹25,000.\n- Opening cash: ₹27,000.\n- Mehak paid: ₹20,000.\n- Creditors settled for cash: ₹7,100\n  (Creditors Book ₹28,000 − ₹8,000 partial settlement = ₹20,000 remaining; the ₹8,000 settled at ₹7,100)\n- Total outflow: ₹20,000 + ₹7,100 = ₹27,100.\n- Total required: ₹27,100 + ₹25,000 (closing) = ₹52,100.\n- Available from opening cash: ₹27,000.\n- **Cash to be brought in by partners = ₹52,100 − ₹27,000 = ₹25,100**.\n\n**STEP 4 — New Capital Ratio & Allocation**\n- Old ratio equal. If new ratio = equal (or same), split ₹25,100 based on:  \n  Existing adjusted caps of Meghna & Mandeep, and equalise capitals to ₹27,050 each.\n- Meghna brings ₹7,550; Mandeep brings ₹17,550. (Total = 25,100 ✓)\n- **Final Capitals: Meghna ₹27,050, Mandeep ₹27,050** ✓\n\n**EXAM TIP**: Always account for cash paid for partial creditor settlement as a cash outflow — this reduces available cash and forces partners to bring in more money than just the simple retiring partner payment.'
    },
    // --- 2023-24 ---
    {
        id: 'sqp-retire-death-2024-8-main',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '8. G, S and T were partners sharing profits in the ratio 3:2:1. G retired and his dues towards the firm including Capital balance, Accumulated profits and losses share, Revaluation Gain amounted to ₹ 5,80,000. G was being paid ₹ 7,00,000 in full settlement. For giving that additional amount of ₹ 1,20,000, S was debited for ₹ 40,000. Determine goodwill of the firm.\n(a). ₹ 1,20,000\n(b). ₹80,000\n(c). ₹2,40,000\n(d). ₹ 3,60,000',
        markingScheme: '(c). ₹ 2,40,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Hidden Goodwill on Retirement**\n- When a retiring partner is paid a lump sum that is HIGHER than the actual balance in their Capital Account (after all reserves, revaluation, etc., have been adjusted), the excess payment represents their share of the firm\'s "Hidden Goodwill".\n\n**Step 2: Calculate G\'s Share of Goodwill**\n- Agreed Final Settlement Amount Paid to G = ₹7,00,000.\n- Actual Dues/Balance in G\'s Capital A/c = ₹5,80,000.\n- G\'s Share of Goodwill = Amount Paid - Actual Dues = 7,00,000 - 5,80,000 = **₹1,20,000**.\n\n**Step 3: Extrapolate to Find the Total Firm\'s Goodwill**\n- G\'s original profit-sharing ratio was 3/6 (which is 1/2 of the firm).\n- If a 1/2 share of the firm\'s goodwill is worth ₹1,20,000...\n- Then Total Firm\'s Goodwill = ₹1,20,000 × (2/1) = **₹2,40,000**.\n\n*(Note: The information about S being debited for ₹40,000 is merely confirmation of how the gaining partners split the ₹1,20,000 burden, but it\'s not necessary to solve the question if you follow the steps above.)*'
    },
    {
        id: 'sqp-retire-death-2024-17',
        year: '2023-24',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '17. Anshul, Babita and Chander were partners in a firm running a successful business of car accessories. They had agreed to share profits and losses in the ratio of 1/2 : 1/3 : 1/6 respectively. After running business successfully and without any disputes for 10 years, Babita decided to retire due to old age and the Anshul and Chander decided to share future profits and losses in the ratio of 3 : 2. The accountant passed the following journal entry for Babita share of goodwill and missed some information. Fill in the missing figures in the following Journal entry and calculate the gaining ratio.\n\nDate: [Blank]\nParticulars: \n  Anshul’s Capital A/c ...Dr [Blank]\n  Chander’s Capital A/c ...Dr 21,000\n  To Babita’s Capital A/c [Blank]\n  (Chander’s share of Goodwill debited to the amounts of continuing partners in their gaining ratio)',
        markingScheme: '**Missing Figures & Solution:**\n\n**1. Calculation of Gaining Ratio:**\n- Old Ratio (A:B:C) = 1/2 : 1/3 : 1/6 = 3:2:1.\n- New Ratio (A:C) = 3:2.\n- Gain = New - Old\n  - Anshul: 3/5 - 3/6 = (18-15)/30 = 3/30.\n  - Chander: 2/5 - 1/6 = (12-5)/30 = 7/30.\n- **Gaining Ratio** = 3 : 7.\n\n**2. Filling the Blanks:**\n- Chander\'s Debit = 21,000 (Given).\n- Chander\'s Share of Gain = 7 parts. Value of 1 part = 21,000 / 7 = 3,000.\n- **Anshul\'s Debit** (3 parts) = 3 × 3,000 = **₹ 9,00,0**.\n- **Babita\'s Credit** (Total Gain 10 parts) = 9,000 + 21,000 = **₹ 30,000**.\n\n**Journal Entry:**\n- Anshul\'s Capital Dr 9,000\n- Chander\'s Capital Dr 21,000\n  To Babita\'s Capital 30,000',
        aiExplanation: '**Steps to Solve:**\n1.  **Gain Ratio**: Calculate New - Old for Anshul and Chander. Result is 3:7.\n2.  **Proportion**: Since Chander is debited 21,000 for 7/10 of the gain, total goodwill compensation is 21,000 * (10/7) = 30,000.\n3.  **Anshul\'s Share**: 3/10 of 30,000 = 9,000.\n4.  **Babita\'s Credit**: Sum of debits = 9,000 + 21,000 = 30,000.'
    },
    {
        id: 'sqp-retire-death-2024-24-or',
        year: '2023-24',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '24 (OR). L, M and N were partners in a firm sharing profit & losses in the ratio of 2:2:3 . On 31st March 2023, their Balance Sheet was as follows:\n\n| Liabilities | Amount(₹) | Assets | Amount(₹) |\n|---|---|---|---|\n| Creditors | 80,000 | Land and Building | 5,00,000 |\n| Bank overdraft | 22,000 | Machinery | 2,50,000 |\n| Long term debts | 2,00,000 | Furniture | 3,50,000 |\n| Capital A/C s: | | Investments | 1,00,000 |\n| L-6,25,000 | | | |\n| M -4,00,000 | | | |\n| N -5,25,000 | 15,50,000 | | |\n| Employees provident fund | 38,000 | Stock | 4,00,000 |\n| | | Debtors | 2,00,000 |\n| | | Bank | 20,000 |\n| | | Deferred Advertisement Expenditure | 70,000 |\n| **Total** | **18,90,000** | **Total** | **18,90,000** |\n\nOn 31st March 2023 , M retired from the firm and remaining partners decided to carry on business. It was decided to revalue assets and liabilities as under :\na) Land and Building be appreciated by ₹ 2,40,000 and Machinery be depreciated 10%.\nb) 50% of investments were taken by the retiring partner at book value.\nc) Provision for doubtful debts was to be made at 5% on debtors.\nd) Stock will be valued at market price which is ₹1,00,000 less than the book value.\ne) Goodwill of the firm be valued at ₹5,60,000. L and N decided to share future profits and losses in the ratio of 2:3.\nf) The total capital of the new firm will be ₹32,00,000 which will be in proportion of profit - sharing ratio of L and N.\ng) Gain on revaluation account amounted to ₹1,05,000.\n\nPrepare Partner’s Capital accounts and Balance sheet of firm after M’s retirement.',
        markingScheme: '**Partners Capital Account**\n*(Summary)*\n- **Opening**: L 6,25,000; M 4,00,000; N 5,25,000.\n- **Reval Gain (1.05L in 2:2:3)**: L 30,000; M 30,000; N 45,000.\n- **Def Adv Exp (70k written off)**: L (20k), M (20k), N (30k).\n- **Investments Taken**: M Dr 50,000.\n- **Goodwill Adjustment**:\n  - M\'s Share = 2/7 of 5.6L = 1,60,000.\n  - Gaining Ratio: New (2:3) - Old (2:7, 3:7). \n    - L: 2/5 - 2/7 = (14-10)/35 = 4/35 (Gain)\n    - N: 3/5 - 3/7 = (21-15)/35 = 6/35 (Gain)\n    - Ratio 4:6 = 2:3.\n  - L Dr 64,000, N Dr 96,000 -> To M 1,60,000.\n- **M\'s Settlement**:\n  - Credits: 4L + 30k + 1.6L = 5,90,000.\n  - Debits: 20k (Exp) + 50k (Inv) = 70,000.\n  - **Balance to Loan**: 5,90,000 - 70,000 = **5,20,000**.\n- **New Capitals (Total 32L in 2:3)**:\n  - L: 12,80,000. N: 19,20,000.\n  - **Bank Adjustments**: \n    - L Current Bal: 6.25L + 30k - 20k - 64k = 5,71,000. Needs 12.8L. Bring in **7,09,000**.\n    - N Current Bal: 5.25L + 45k - 30k - 96k = 4,44,000. Needs 19.2L. Bring in **14,76,000**.\n\n**Balance Sheet:**\n- **Liabilities**: Creditors 80k, OD 22k, LTD 2L, EPF 38k, M\'s Loan 5.2L, Caps (L 12.8L, N 19.2L). Total 40.6L.\n- **Assets**: L&B 7.4L, Mach 2.25L, Furn 3.5L, Inv 50k, Stock 3L, Debtors 1.9L, Bank 22.05L (20k+7.09L+14.76L). Total 40.6L.',
        aiExplanation: '**L, M, N Comprehensive Retirement (2023-24 SQP OR, 6 Marks):**\n\n**Concept**: Most complex partnership question — requires Capital A/cs (4 adjustments + Goodwill) AND Balance Sheet. Key skills: Gaining Ratio calculation, new target capital determination, and cash brought in by partners.\n\n---\n\n**STEP 1 — Revaluation Verification (Gain = ₹1,05,000 as given)**\n- L&B Appreciation: +₹2,40,000.\n- Machinery Depreciation (10%): −₹25,000.\n- Provision for DD (5%×₹2L): −₹10,000.\n- Stock Write-down (−₹1,00,000).\n- **Net Gain = ₹2,40,000 − ₹1,35,000 = ₹1,05,000** ✓ (matches question).\n\n**STEP 2 — Gaining Ratio**\n- Old Ratio L:M:N = 2:2:3.\n- New Ratio L:N = 2:3.\n- **L Gain** = 2/5 − 2/7 = (14−10)/35 = 4/35.\n- **N Gain** = 3/5 − 3/7 = (21−15)/35 = 6/35.\n- Gaining Ratio = **4:6 = 2:3**.\n\n**STEP 3 — M\'s Dues Computation**\n- Opening Capital: ₹4,00,000.\n- Add: Revaluation Gain (2/7 × ₹1,05,000): +₹30,000.\n- Less: Deferred Adv Exp (2/7 × ₹70,000): −₹20,000.\n- Add: Goodwill (M\'s share 2/7 × ₹5,60,000 = ₹1,60,000).\n  - Debited to L (4/10 of 1,60,000 = ₹64,000) and N (6/10 = ₹96,000) → Credited to M ₹1,60,000.\n- Less: Investments Taken (50% × ₹1,00,000 = ₹50,000): −₹50,000.\n- **M\'s Net Closure Balance = ₹4,00,000 + ₹30,000 − ₹20,000 + ₹1,60,000 − ₹50,000 = ₹5,20,000 → Transferred to M\'s Loan**.\n\n**STEP 4 — New Capitals (Total ₹32,00,000 in 2:3)**\n- L Target Capital: 2/5 × ₹32L = **₹12,80,000**.\n- N Target Capital: 3/5 × ₹32L = **₹19,20,000**.\n- L Adjusted Current Capital: ₹6,25,000 + ₹30,000 − ₹20,000 − ₹64,000 = ₹5,71,000.\n- **L Brings In**: ₹12,80,000 − ₹5,71,000 = **₹7,09,000**.\n- N Adjusted Current Capital: ₹5,25,000 + ₹45,000 − ₹30,000 − ₹96,000 = ₹4,44,000.\n- **N Brings In**: ₹19,20,000 − ₹4,44,000 = **₹14,76,000**.\n\n**STEP 5 — Balance Sheet Bank Balance**\n- Opening Bank: ₹20,000.\n- Add: L brought ₹7,09,000 + N brought ₹14,76,000.\n- **Closing Bank = ₹22,05,000** ✓\n\n**EXAM TIP**: When question fixes "total capital = X invested in proportion", compute target capitals first, then compare to adjusted capitals to find cash outflow. This is always the approach when "New Capitals in Ratio" is mentioned.'
    },
    {
        id: 'sqp-retire-death-2024-25',
        year: '2023-24',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '25. Sandeep, Maheep and Amandeep were partners in a firm sharing profits in the ratio of 2: 2: 1. The firm closes its books on 31st March every year. On 30th June, 2020 Maheep died. The partnership deed provided that on the death of a partner his executors will be entitled to the following:\na) Balance in his capital account which amounted to ₹1,15,000 and interest on capital till date of death which amounted to ₹5,000.\nb) His share in the profits of the firm till the date of his death amounted to ₹20,000.\nc) His share in the goodwill of the firm. The goodwill of the firm on Maheep’s death was valued at ₹ 1,50,000.\nd) Loan to Maheep amounted ₹ 20,000.\nIt was agreed that the amount will be paid to his executor in three equal yearly instalments with interest @10% p.a. The first instalment was to be paid on 30.06.2021.\nCalculate the amount to be transferred to Maheep’s executors Account and prepare the executor’s account till it is finally settled.',
        markingScheme: '**1. Amount Transferred to Executor:**\n- Capital: 1,15,000\n- Int on Cap: 5,000\n- Profit Share: 20,000\n- Goodwill Share (2/5 of 1.5L): 60,000\n- Less: Loan to Maheep (Asset side implied): (20,000)\n- **Total Due**: **1,80,000**.\n\n**2. Executors Account Summary:**\n- **Date of Death**: 30.06.2020. Bal = 1,80,000.\n- **Installments**: 3 Equal Yearly. 1,80,000 / 3 = 60,000 Principal + Interest.\n\n**Timeline:**\n- **31.03.2021**: Accrue Int (9 months). 1,80,000 * 10% * 9/12 = 13,500. Bal c/d = 1,93,500.\n- **30.06.2021 (1st Inst)**: \n  - Int (3 months) on 1.8L: 4,500.\n  - Total Int (Jun-Jun) = 18,000.\n  - Payment: 60,000 + 18,000 = **78,000**.\n  - Principal Reduces to 1,20,000.\n- **31.03.2022**: Accrue Int (9 months) on 1.2L = 9,000. Bal c/d = 1.2L + 9k = 1,29,000.\n- **30.06.2022 (2nd Inst)**:\n  - Int (3 months) on 1.2L: 3,000.\n  - Payment: 60,000 + 12,000 (9k+3k) = **72,000**.\n  - Principal Reduces to 60,000.\n- **31.03.2023**: Accrue Int (9 months) on 60k = 4,500. Bal c/d = 64,500.\n- **30.06.2023 (3rd Inst)**:\n  - Int (3 months) on 60k: 1,500.\n  - Payment: 60,000 + 6,000 = **66,000**.\n  - Account Settled.',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | Sandeep, Maheep, Amandeep |\n| Profit Sharing Ratio | 2 : 2 : 1 |\n| Maheep Died On | 30 June 2020 |\n| Capital Balance (after all adj) | ₹ 1,15,000 |\n| Interest on Capital till death | ₹ 5,000 |\n| Profit Share till death | ₹ 20,000 |\n| Firm\'s Goodwill Value | ₹ 1,50,000 |\n| Loan TO Maheep (asset of firm) | ₹ 20,000 (DEDUCTED) |\n| Payment Mode | 3 Equal Yearly Instalments |\n| Interest Rate | 10% p.a. |\n| First Instalment Date | 30 June 2021 |\n\n---\n\n### 💡 Concept: Death of Partner — Executor\'s Account\n\nWhen a partner dies, all his dues are calculated and transferred to his **Executor\'s Account** (the legal heir). If payment is in instalments, interest is charged on the outstanding balance. Since payment is **mid-year** (June 30), interest must be split across two financial years.\n\n**Sandeep/Maheep/Amandeep — Executor Account (3 Cycles) (2023-24 SQP, 6 Marks):**\n\n---\n\n**STEP 1 — Total Amount Transferred to Executor**\n\n| Particulars | ₹ |\n|---|---|\n| Capital Balance | 1,15,000 |\n| Interest on Capital (till death) | 5,000 |\n| Profit Share (till death) | 20,000 |\n| Goodwill Share = 2/5 × 1,50,000 | 60,000 |\n| Less: Loan TO Maheep | (20,000) |\n| **Total Transferred to Executor** | **1,80,000** |\n\n> ⚠️ A loan **to** Maheep means the firm had lent money to Maheep — this is an asset of the firm, so it is **deducted** from what Maheep\'s estate is owed.\n\n---\n\n**STEP 2 — Instalment Plan**\n- 3 Equal Yearly Instalments: ₹1,80,000 ÷ 3 = **₹60,000 per year (principal)**.\n- Rate: 10% p.a. Payment dates: June 30 each year.\n\n---\n\n**STEP 3 — Year 1 Cycle (June 30, 2020 → March 31, 2021 → June 30, 2021)**\n\n| Period | Months | Balance | Interest |\n|---|---|---|---|\n| Jul–Mar 2021 (year-end accrual) | 9 | 1,80,000 | ₹13,500 |\n| Apr–Jun 2021 (to 1st payment) | 3 | 1,80,000 | ₹ 4,500 |\n| **Total Interest Year 1** | | | **₹18,000** |\n\n- **Payment on June 30, 2021** = ₹60,000 + ₹18,000 = **₹78,000**.\n- Remaining Principal = ₹1,80,000 − ₹60,000 = **₹1,20,000**.\n\n---\n\n**STEP 4 — Year 2 Cycle (July 2021 → June 2022)**\n\n| Period | Months | Balance | Interest |\n|---|---|---|---|\n| Jul–Mar 2022 | 9 | 1,20,000 | ₹9,000 |\n| Apr–Jun 2022 | 3 | 1,20,000 | ₹3,000 |\n| **Total Interest Year 2** | | | **₹12,000** |\n\n- **Payment on June 30, 2022** = ₹60,000 + ₹12,000 = **₹72,000**.\n- Remaining Principal = **₹60,000**.\n\n---\n\n**STEP 5 — Year 3 Cycle (July 2022 → June 2023)**\n\n| Period | Months | Balance | Interest |\n|---|---|---|---|\n| Jul–Mar 2023 | 9 | 60,000 | ₹4,500 |\n| Apr–Jun 2023 | 3 | 60,000 | ₹1,500 |\n| **Total Interest Year 3** | | | **₹6,000** |\n\n- **Payment on June 30, 2023** = ₹60,000 + ₹6,000 = **₹66,000**. Account **fully settled**.\n\n> 💡 **Exam Tip**: When payment date is NOT March 31 (e.g., June 30), always split interest into TWO parts: from death/prev payment to March 31 (accrual at year-end), THEN from April 1 to next payment date. This is the most common exam mistake in Executor\'s Account.'
    },
    {
        id: 'new-mcq-retire-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '26. A, B and C are partners sharing profits in 4:3:2. B retires. A and C decide to share profits in 2:1. Calculate Gaining Ratio.\n\n(A) 1:2\n(B) 2:1\n(C) 3:1\n(D) 1:1',
        markingScheme: '(B) 2:1',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify Ratios**\n- Old Ratio (A:B:C) = 4:3:2.\n- Old Shares: A = 4/9, B = 3/9, C = 2/9.\n- New Ratio (A:C) = 2:1.\n- New Shares: A = 2/3, C = 1/3.\n\n**Step 2: Apply the Gaining Ratio Formula**\n- Gaining Ratio = New Share - Old Share.\n- A\'s Gain = 2/3 - 4/9 = (6/9 - 4/9) = **2/9**.\n- C\'s Gain = 1/3 - 2/9 = (3/9 - 2/9) = **1/9**.\n\n**Step 3: State the Ratio**\n- A\'s Gain : C\'s Gain = 2/9 : 1/9 = **2:1**.'
    },
    {
        id: 'new-mcq-retire-2',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '27. P, Q and R are partners. R retires. After all adjustments, his capital account shows a credit balance of ₹ 1,20,000. It is agreed to pay him ₹ 1,50,000 in full settlement. The difference of ₹ 30,000 is recorded as:\n\n(A) Share of Hidden Goodwill\n(B) General Reserve\n(C) Revaluation Profit\n(D) Accumulated Loss',
        markingScheme: '(A) Share of Hidden Goodwill',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Compare Dues to Payment**\n- R\'s actual verified dues (Capital after all adjustments for reserves and revaluation) = ₹1,20,000.\n- The firm agrees to pay him a lump sum of = ₹1,50,000.\n\n**Step 2: Analyze the Difference**\n- The firm is paying an extra ₹30,000 to the retiring partner over and above his documented capital balance.\n- Why would they do this? Because the firm has built a reputation (goodwill) over the years that R helped create, which isn\'t explicitly recorded in the accounts.\n- This extra payment is the standard accounting treatment for the retiring partner\'s share of **Hidden Goodwill**.'
    },
    {
        id: 'new-mcq-retire-3',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '28. A partner died on 30th June. Accounts are closed on 31st March. His share of profit till death is to be calculated based on last year\'s profit (₹ 2,40,000). His share in firm is 1/4. Calculate profit share.\n\n(A) ₹ 60,000\n(B) ₹ 15,000\n(C) ₹ 20,000\n(D) ₹ 30,000',
        markingScheme: '(B) ₹ 15,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Determine the Relevant Time Period**\n- Accounting year ended: 31st March.\n- Partner died: 30th June.\n- Calculate the months he was alive during the new financial year: April, May, June = **3 months**.\n\n**Step 2: Estimate Firm\'s Profit for the Period**\n- The firm assumes that profits are earned evenly throughout the year based on the previous year\'s performance.\n- Base Profit (Last Year) = ₹2,40,000 (for 12 months).\n- Estimated Firm\'s Profit for 3 months = 2,40,000 × (3/12) = **₹60,000**.\n\n**Step 3: Calculate the Deceased Partner\'s Share**\n- The deceased partner is only entitled to his slice of the estimated firm profit.\n- Deceased Partner\'s Share = ₹60,000 × 1/4 = **₹15,000**.'
    },
    {
        id: 'new-mcq-retire-4',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '29. On death of a partner, the amount due to him is transferred to:\n\n(A) Partner\'s Loan Account\n(B) Partner\'s Capital Account\n(C) Executor\'s Account\n(D) Suspense Account',
        markingScheme: '(C) Executor\'s Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Event**\n- A partner has died. The partnership with that individual has ceased.\n\n**Step 2: Understand the Limitations**\n- A deceased person cannot legally hold an active business account or receive payments directly.\n\n**Step 3: Determine the Accounting Procedure**\n- The firm must calculate all dues owed to the deceased partner (capital, reserves, revaluation, goodwill, interim profit) and compile them in the deceased partner\'s Capital Account.\n- Once the final balance is determined, it is immediately transferred out of the Capital Account into the account of the person legally entitled to receive the money on behalf of the deceased.\n- This person is the legal representative, known in accounting terms as the **Executor**.\n- Therefore, the balance is transferred to the **Executor\'s Account**.'
    },
    {
        id: 'new-mcq-retire-5',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '30. If the remaining partners decide to change their profit sharing ratio, the interim profit to deceased partner is adjusted through:\n\n(A) P&L Suspense Account\n(B) Gaining Partners\' Capital A/c\n(C) Revaluation Account\n(D) Realisation Account',
        markingScheme: '(B) Gaining Partners\' Capital A/c',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Interim Profit Distribution**\n- Normally, when a partner dies mid-year, their share of the estimated profit from the start of the year till the date of death is given to them through a temporary account called the **P&L Suspense Account**.\n\n**Step 2: Consider the Exception (Change in PSR)**\n- However, if the remaining partners decide to change their future Profit Sharing Ratio (PSR), using the P&L Suspense Account would create an imbalance when that temporary account is finally closed into the main P&L Appropriation Account at year-end.\n\n**Step 3: Apply the Rule for Changed PSR**\n- To prevent this imbalance, the standard rule dictates that if the new PSR changes, the interim profit must be treated exactly like Goodwill.\n- The deceased partner is given their share of profit by **crediting** their Capital Account, and this amount is **debited directly to the Gaining Partners\' Capital Accounts** in their gaining ratio.\n- Thus, (B) is the correct answer.'
    },
    {
        id: 'new-mcq-retire-6',
        year: '2023-24',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '31. Assertion (A): Retiring partner is not liable for firm\'s acts after retirement.\nReason (R): He must give a public notice of his retirement.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "Retiring partner is not liable for firm\'s acts after retirement."\n- Generally, once a partner retires, they are no longer part of the firm and are not bound by future contracts. The statement is **True** (subject to conditions).\n\n**Step 2: Evaluate the Reason (R)**\n- "He must give a public notice of his retirement."\n- Section 32 of the Indian Partnership Act states that to sever liability to third parties, a retiring partner MUST give public notice.\n- If notice is NOT given, third parties can assume they are still a partner and hold them liable for acts occurring even *after* retirement. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- The reason a retiring partner successfully escapes future liability (Assertion) is precisely *because* they fulfill the legal requirement of giving public notice (Reason).\n- Therefore, R is the correct explanation for A.'
    },

    {
        id: 'new-mcq-retire-7',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '32 (Fixed). X, Y, Z are partners (3:2:1). Y retires. X and Z decide to share future profits equally. Goodwill of firm is ₹ 60,000. Y\'s share is adjusted by:\n(A) Debiting X and Z equally\n(B) Debiting Z only with ₹ 20,000\n(C) Debiting X only with ₹ 20,000\n(D) Debiting P&L Suspense',
        markingScheme: '(B) Debiting Z only with ₹ 20,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify Old and New Ratios**\n- Old Ratio (X:Y:Z) = 3:2:1 (Shares: 3/6, 2/6, 1/6).\n- New Ratio (X:Z) = Equally = 1:1 (Shares: 1/2, 1/2).\n\n**Step 2: Calculate the Gaining Ratio**\n- Formula: Gain = New Share - Old Share\n- X\'s Gain = 1/2 - 3/6 = 3/6 - 3/6 = **0**.\n- Z\'s Gain = 1/2 - 1/6 = 3/6 - 1/6 = **2/6**.\n\n**Step 3: Analyze the Goodwill Compensation**\n- Y is retiring. Y\'s share of goodwill = Total Goodwill × Y\'s Share = ₹60,000 × 2/6 = **₹20,000**.\n- The compensation to Y must be paid by the partners who gained. \n- Since only Z gained (X gained nothing), **only Z\'s Capital Account will be debited** for the full compensation amount of ₹20,000.'
    },
    {
        id: 'new-mcq-retire-8',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '33. Section 37 of Partnership Act Provides interest on the unpaid amount of retiring partner at:\n(A) 6% p.a.\n(B) 10% p.a.\n(C) 12% p.a.\n(D) 9% p.a.',
        markingScheme: '(A) 6% p.a.',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Scenario**\n- A partner retires or dies, and the firm does not immediately pay off their final dues (Capital balance).\n- The partnership deed is silent on what interest should be paid on this delayed settlement.\n\n**Step 2: Apply the Law (Section 37)**\n- Section 37 of the Indian Partnership Act, 1932 provides a default safety net for the outgoing partner.\n- It gives the outgoing partner (or their executor) a choice: they can claim a share of the profits earned using their unpaid money, OR they can claim interest at a fixed statutory rate.\n- The fixed statutory rate prescribed by Section 37 is **6% per annum (p.a.)**.'
    },
    {
        id: 'new-mcq-retire-9',
        year: '2021-22',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '34. Sales for the year 2022-23 were ₹ 10,00,000 and Profit ₹ 1,00,000. Sales till date of death (30th June 2023) were ₹ 2,00,000. Deceased partner\'s share is 1/5. Calculate his profit share.\n\n(A) ₹ 20,000\n(B) ₹ 4,000\n(C) ₹ 10,000\n(D) ₹ 5,000',
        markingScheme: '(B) ₹ 4,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Turnover Basis**\n- When calculating interim profit on a "Turnover Basis," we assume that the profit margin (Profit as a percentage of Sales) earned last year continues to be the same in the current year.\n\n**Step 2: Calculate Last Year\'s Profit Margin**\n- Last Year Sales = ₹10,00,000.\n- Last Year Profit = ₹1,00,000.\n- Profit Percentage = (Profit / Sales) × 100 = (1,00,000 / 10,00,000) × 100 = **10%**.\n\n**Step 3: Estimate Current Year Profit**\n- Sales till the date of death (June 30) = ₹2,00,000.\n- Estimated Profit till date = 10% of ₹2,00,000 = **₹20,000**.\n- *(Note: We do not multiply by 3/12 because the sales figure is already specific to those 3 months. Only apply time adjustments to annual profit figures).* \n\n**Step 4: Calculate Deceased Partner\'s Share**\n- Firm\'s Estimated Profit (3 months) = ₹20,000.\n- Deceased partner\'s share = 1/5.\n- Amount = ₹20,000 × 1/5 = **₹4,000**.'
    },
    {
        id: 'new-mcq-retire-10',
        year: '2025-26',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '35. Assertion (A): In case of retirement, the General Reserve is credited to all partners in old profit sharing ratio.\nReason (R): General Reserve is an accumulated profit earned by all partners before retirement.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "In case of retirement, the General Reserve is credited to all partners in old profit sharing ratio."\n- This is the standard accounting treatment. At retirement, historical reserves are distributed to clean the slate. This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "General Reserve is an accumulated profit earned by all partners before retirement."\n- A reserve is created out of past profits. Those past profits were generated through the joint efforts of all the partners (including the one currently retiring) while they were working together in their old ratio. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- Why is the reserve credited to ALL partners in the OLD ratio? Because the reserve literally represents the undistributed fruits of their past joint labor. \n- Therefore, R is the correct and logical explanation for A.'
    }
];

export const CH_PARTNERSHIP_RETIREMENT_CHAPTER: Chapter = {
    id: 'partnership-retirement',
    title: 'Retirement & Death of Partner',
    theory: PARTNERSHIP_RETIREMENT_THEORY,
    flashcards: PARTNERSHIP_RETIREMENT_FLASHCARDS,
    sqps: PARTNERSHIP_RETIREMENT_SQPS,
    weightage: '10 Marks',
    cheatSheet: {
        sections: [
            {
                title: 'Key Concepts',
                items: [
                    'Retirement: Sec 32. Death: Sec 35.',
                    'Gaining Ratio = New Ratio - Old Ratio (Only continuing partners).',
                    'Retiring partner sacrifice = His Old Share.',
                    'Hidden Goodwill = Total Capital (New Firm) - Adjusted Capital (All Partners).'
                ]
            },
            {
                title: 'Important Formulas',
                items: [
                    'Profit Till Death (Time) = Avg Profit * Time/12 * Share',
                    'Profit Till Death (Sales) = (Profit / Total Sales) * Sales Till Death * Share',
                    'Interest under Sec 37 = 6% p.a.'
                ]
            },
            {
                title: 'Executor\'s Account Format',
                items: [
                    'Credit Side: Opening Balance (Deceased Partner\'s Cap), Interest Accrued.',
                    'Debit Side: Drawings, Interest on Drawings, Installments Paid.',
                    'Interest Calculation: On the Outstanding Balance at the beginning of the period.'
                ]
            }
        ],
        crucialRules: [
            { title: 'Profit Suspense', content: 'Use P&L Suspense A/c for interim profit if New Ratio does not change. If New Ratio changes, adjust via Gaining Partners Capital.' },
            { title: 'Section 37 (Outgoing Partner)', content: 'If dues are unpaid, outgoing partner is entitled to: (i) Interest @ 6% p.a. OR (ii) Share of profit earned using unpaid amount. Executor chooses the beneficial option.' },
            { title: 'Loan Account', content: 'Partner\'s Loan is NOT transferred to Realisation A/c (Dissolution) but paid separately. In Retirement/Death, it is transferred/merged to Capital A/c unless paid off.' }
        ],
        natureTable: [
            ['Basis', 'Retirement', 'Death'],
            ['Nature of Event', 'Voluntary (Planned).', 'Involuntary (Unpredictable).'],
            ['Date', 'Usually accounting year end.', 'Can happen any day.'],
            ['Payment To', 'Retiring Partner himself.', 'Legal Executor/Heir.'],
            ['Profit Share', 'Full year profit share usually.', 'Pro-rata share till date of death.']
        ],
        mnemonics: [
            { title: 'Gaining Members', content: 'New - Old = Gain (No "Sacrifice" usually)' }
        ]
    },
    mindMap: [
        {
            id: '1',
            title: 'Retirement',
            colorClass: 'border-red-500 bg-red-50',
            iconName: 'Users',
            items: [
                'Notice (Sec 32)',
                'Gaining Ratio',
                'Goodwill Comp.',
                'Accumulated Profits'
            ]
        },
        {
            id: '2',
            title: 'Settlement',
            colorClass: 'border-blue-500 bg-blue-50',
            iconName: 'Calculator',
            items: [
                'Lump Sum',
                'Installments (Loan)',
                'Interest Calc',
                'Section 37'
            ]
        },
        {
            id: '3',
            title: 'Death',
            colorClass: 'border-slate-500 bg-slate-50',
            iconName: 'Activity',
            items: [
                'Executor',
                'Profit till Date',
                'Time Basis',
                'Turnover Basis'
            ]
        },
        {
            id: '4',
            title: 'Executors',
            colorClass: 'border-gray-500 bg-gray-50',
            iconName: 'BookOpen',
            items: [
                'Legal Heir',
                'Executor Loan A/c',
                'Interest Entitlement',
                'Probate (Process)'
            ]
        }
    ]
};
