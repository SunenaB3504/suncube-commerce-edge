
import { Chapter, TheoryTopic, Flashcard, SQPQuestion } from '../types';

export const PARTNERSHIP_ADMISSION_THEORY: TheoryTopic[] = [
    {
        id: 'modes-reconstitution',
        title: '1. Modes of Reconstitution',
        content: 'Reconstitution of a partnership firm takes place whenever there is a change in the partnership agreement.',
        subtopics: [
            {
                title: 'Meaning',
                description: 'Any change in the existing agreement strictly amounts to reconstitution of the firm. The existing agreement ends, and a new agreement comes into existence.',
                points: [
                    '**Admission of a New Partner**: A new partner joins the firm (Section 31).',
                    '**Change in Profit Sharing Ratio**: Existing partners decide to change their profit sharing ratio.',
                    '**Retirement of a Partner**: A partner leaves the firm (Section 32).',
                    '**Death of a Partner**: Partnership ceases with the deceased partner (Section 35).',
                    '**Amalgamation**: Two or more partnership firms merge.'
                ]
            }
        ]
    },
    {
        id: 'admission-basics',
        title: '2. Admission of a Partner',
        content: 'Admission of a partner is one of the important modes of reconstitution of a partnership firm.',
        subtopics: [
            {
                title: 'Rights of a New Partner',
                description: 'A new partner acquires two main rights:',
                points: [
                    '**Right to Share Assets**: For this, he brings in **Capital**.',
                    '**Right to Share Future Profits**: For this, he brings in **Premium for Goodwill**.'
                ]
            },
            {
                title: 'Sacrificing Ratio',
                description: 'The ratio in which the old partners agree to sacrifice their share of profit in favour of the incoming partner.',
                illustration: {
                    type: 'table',
                    caption: 'Formula Comparison',
                    concept: 'Used for distributing Goodwill brought by new partner.',
                    content: [
                        ['Ratio', 'Formula', 'Purpose'],
                        ['**Sacrificing Ratio**', 'Old Ratio - New Ratio', 'Distribution of Goodwill'],
                        ['**New Ratio**', 'Old Ratio - Sacrifice', 'Future Profit Distribution']
                    ]
                }
            }
        ]
    },
    {
        id: 'valuation-goodwill',
        title: '3. Valuation of Goodwill',
        content: 'Goodwill is the value of the reputation of a firm which enables it to earn higher profits than the normal strength of capital.',
        subtopics: [
            {
                title: 'Method 1: Average Profit Method',
                description: 'Based on the average of past few years\' profits.',
                points: [
                    '**Simple Average**: Total Profits / Number of Years.',
                    '**Weighted Average**: Total Weighted Profits / Total Weights.',
                    '**Formula**: Average Profit × Number of Years\' Purchase.'
                ]
            },
            {
                title: 'Method 2: Super Profit Method',
                description: 'Based on the excess profit earned over normal profit.',
                points: [
                    'Step 1: Calculate **average capital employed**.',
                    'Step 2: Calculate **Normal Profit** = Capital Employed × Normal Rate of Return (NRR) / 100.',
                    'Step 3: Calculate **Super Profit** = Actual Average Profit - Normal Profit.',
                    'Step 4: **Goodwill** = Super Profit × Number of Years\' Purchase.'
                ]
            },
            {
                title: 'Method 3: Capitalisation Method',
                description: 'Capitalising the profit to find the value of the firm.',
                points: [
                    '**Capitalisation of Average Profit**: (Avg Profit × 100 / NRR) - Net Assets.',
                    '**Capitalisation of Super Profit**: Super Profit × 100 / NRR.'
                ]
            }
        ]
    },
    {
        id: 'goodwill-treatment',
        title: '4. Treatment of Goodwill',
        content: 'Accounting treatment depends on how the new partner brings the goodwill.',
        subtopics: [
            {
                title: 'Scenarios',
                description: 'AS-26: Goodwill can only be recorded if money or money\'s worth is paid for it.',
                illustration: {
                    type: 'table',
                    caption: 'Journal Entries for Premium for Goodwill (PFG)',
                    concept: 'PFG is always distributed to Sacrificing Partners in Sacrificing Ratio.',
                    content: [
                        ['Scenario', 'Journal Entry'],
                        ['Paid Privately', 'No Entry'],
                        ['Brought in Cash', '1. Cash A/c Dr. To PFG A/c\n2. PFG A/c Dr. To Sacrificing Partners\' Cap A/c (Sac. Ratio)'],
                        ['Withdrawn by Old Partners', 'Sacrificing Partners\' Cap A/c Dr. To Cash A/c'],
                        ['Not Brought in Cash', 'New Partner\'s **Current** A/c Dr. To Sacrificing Partners\' Cap A/c']
                    ]
                }
            },
            {
                title: 'Hidden Goodwill',
                description: 'When goodwill is inferred from the new partner\'s capital.',
                points: [
                    'Total Capital of New Firm = New Partner\'s Capital × Reciprocal of his Share.',
                    'Net Worth (Actual) = Capital of All Partners (including New).',
                    '**Hidden Goodwill** = Total Capital of New Firm - Net Worth (Actual).'
                ]
            }
        ]
    },
    {
        id: 'revaluation',
        title: '5. Revaluation of Assets & Liabilities',
        content: 'Assets and liabilities are revalued so that the new partner does not gain/suffer from changes in values before his admission.',
        subtopics: [
            {
                title: 'Revaluation Account',
                description: 'Also known as Profit and Loss Adjustment Account. It is a **Nominal Account**.',
                illustration: {
                    type: 'table',
                    caption: 'Format of Revaluation Account',
                    concept: 'Debit losses (Assets ↓, Liab ↑). Credit gains (Assets ↑, Liab ↓).',
                    content: [
                        ['Particulars (Dr: Loss)', 'Amt', 'Particulars (Cr: Gain)', 'Amt'],
                        ['To Decrease in Assets', 'XX', 'By Increase in Assets', 'XX'],
                        ['To Increase in Liab', 'XX', 'By Decrease in Liab', 'XX'],
                        ['To Unrecorded Liab', 'XX', 'By Unrecorded Asset', 'XX'],
                        ['To Profit on Reval (to Old Partners)', 'XX', 'By Loss on Reval (to Old Partners)', 'XX']
                    ]
                }
            }
        ]
    },
    {
        id: 'accumulated-profits',
        title: '6. Reserves & Accumulated Profits',
        content: 'Distributed among **Old Partners in Old Ratio**.',
        subtopics: [
            {
                title: 'Specific Reserves',
                description: 'Workmen Compensation Reserve (WCR) and Investment Fluctuation Reserve (IFR).',
                points: [
                    '**WCR**: Excess over claim is distributed. Claim is shown as liability.',
                    '**IFR**: Used to set off fall in market value of investment. Excess is distributed.'
                ]
            }
        ]
    }
];

export const PARTNERSHIP_ADMISSION_FLASHCARDS: Flashcard[] = [
    // 1-10: Basics
    { id: 1, category: 'Definitions', question: 'What is Reconstitution?', answer: 'Any change in the existing agreement of partnership.' },
    { id: 2, category: 'Definitions', question: 'State rights of new partner.', answer: '1. Right to share future profits. 2. Right to share assets.' },
    { id: 3, category: 'Calculations', question: 'Formula for Sacrificing Ratio?', answer: 'Old Ratio - New Ratio.' },
    { id: 4, category: 'Calculations', question: 'Formula for New Ratio (Simple)?', answer: '1 - New Partner\'s Share = Remaining Share.' },
    { id: 5, category: 'Theory', question: 'Section for Admission?', answer: 'Section 31 of Indian Partnership Act, 1932.' },
    { id: 6, category: 'Theory', question: 'Purpose of Goodwill premium?', answer: 'To compensate the sacrificing partners for loss of their profit share.' },
    { id: 7, category: 'Theory', question: 'Nature of Revaluation A/c?', answer: 'Nominal Account.' },
    { id: 8, category: 'Theory', question: 'Who shares Revaluation Profit?', answer: 'Old Partners in Old Ratio.' },
    { id: 9, category: 'Theory', question: 'Who shares Goodwill Premium?', answer: 'Sacrificing Partners in Sacrificing Ratio.' },
    { id: 10, category: 'Theory', question: 'Can PFG be retained in business?', answer: 'Yes, if partners decide not to withdraw it.' },

    // 11-20: Goodwill Valuation
    { id: 11, category: 'Definitions', question: 'Define Super Profit.', answer: 'Excess of actual average profit over normal profit.' },
    { id: 12, category: 'Calculations', question: 'Formula: Normal Profit?', answer: 'Capital Employed × NRR / 100.' },
    { id: 13, category: 'Calculations', question: 'Formula: Capital Employed?', answer: 'Total Assets - External Liabilities.' },
    { id: 14, category: 'Calculations', question: 'Formula: Goodwil (Capitalisation of Super Profit)?', answer: 'Super Profit × 100 / NRR.' },
    { id: 15, category: 'Calculations', question: 'Formula: Goodwill (Weighted Average)?', answer: 'Total Weighted Profits / Total Weights.' },
    { id: 16, category: 'Theory', question: 'What is Purchased Goodwill?', answer: 'Goodwill for which consideration is paid (e.g. at time of purchase of business).' },
    { id: 17, category: 'Theory', question: 'Self-Generated Goodwill?', answer: 'Internally generated, not recorded in books (AS-26).' },
    { id: 18, category: 'Theory', question: 'Effect of Undervalued Stock on Profit?', answer: 'Undervaluation of Closing Stock reduces profit.' },
    { id: 19, category: 'Theory', question: 'Abnormal Loss treatment in Goodwill?', answer: 'Added back to Net Profit of that year.' },
    { id: 20, category: 'Theory', question: 'Abnormal Gain treatment in Goodwill?', answer: 'Deducted from Net Profit of that year.' },

    // 21-30: Goodwill Treatment
    { id: 21, category: 'Theory', question: 'Entry if PFG paid privately?', answer: 'No Entry in books.' },
    { id: 22, category: 'Theory', question: 'Entry if PFG not bought in cash?', answer: 'Debit New Partner\'s Current A/c; Credit Sacrificing Partners\' Capital A/c.' },
    { id: 23, category: 'Theory', question: 'Why Current A/c for new partner?', answer: 'To keep his Capital intact.' },
    { id: 24, category: 'Theory', question: 'Treatment of Existing Goodwill?', answer: 'Written off among Old Partners in Old Ratio (Old Cap Dr. To Goodwill).' },
    { id: 25, category: 'Calculations', question: 'Hidden Goodwill Formula?', answer: 'Capitalised Value of Firm - Actual Capital of All Partners.' },
    { id: 26, category: 'Theory', question: 'Is Goodwill an intangible asset?', answer: 'Yes, per AS-26.' },
    { id: 27, category: 'Theory', question: 'If New Partner brings only part of PFG?', answer: 'Part Cash Dr., Part New Partner Current Dr.' },
    { id: 28, category: 'Theory', question: 'Kind: Asset brought for Goodwill?', answer: 'Asset A/c Dr. To Premium for Goodwill.' },
    { id: 29, category: 'Theory', question: 'Withdrawal of Goodwill entry?', answer: 'Sacrificing Partners\' Capital A/c Dr. To Cash/Bank.' },
    { id: 30, category: 'Classification', question: 'Accumulated Losses on Admission?', answer: 'Debited to Old Partners\' Capital A/c (Old Ratio).' },

    // 31-40: Revaluation
    { id: 31, category: 'Theory', question: 'Increase in Asset Value?', answer: 'Credit Revaluation Account.' },
    { id: 32, category: 'Theory', question: 'Increase in Activity (Liability)?', answer: 'Debit Revaluation Account.' },
    { id: 33, category: 'Theory', question: 'Unrecorded Asset found?', answer: 'Credit Revaluation Account.' },
    { id: 34, category: 'Theory', question: 'Prov for Doubtful Debts increased?', answer: 'Debit Revaluation Account (It is a liability increase).' },
    { id: 35, category: 'Theory', question: 'Revaluation Expenses paid by firm?', answer: 'Debit Revaluation A/c To Cash.' },
    { id: 36, category: 'Theory', question: 'Revaluation Expenses paid by partner?', answer: 'Debit Revaluation A/c To Partner\'s Capital.' },
    { id: 37, category: 'Theory', question: 'General Reserve on admission?', answer: 'Credited to Old Partners in Old Ratio.' },
    { id: 38, category: 'Theory', question: 'WCR Claim > Reserve?', answer: 'Excess claim is debited to Revaluation A/c.' },
    { id: 39, category: 'Theory', question: 'IFR > Fall in Investment?', answer: 'Excess IFR distributed to Old Partners.' },
    { id: 40, category: 'Theory', question: 'Employees Provident Fund?', answer: 'Statutory liability. Not distributed. Shown in Balance Sheet.' },

    // 41-50: Capital Adjustments
    { id: 41, category: 'Calculations', question: 'Adj of Old Cap on basis of New?', answer: 'Calculate required capital based on New Ratio. Surplus/Deficit adjusted via Cash/Current.' },
    { id: 42, category: 'Calculations', question: 'New Partner Cap based on Old?', answer: 'Total Adjusted Old Capital × Rerciprocal of Remaining Share × New Partner\'s Share.' },
    { id: 43, category: 'Theory', question: 'Balance Sheet after Revaluation?', answer: 'Assets and Liabilities shown at revised values.' },
    { id: 44, category: 'Theory', question: 'Does Reconstitution close the firm?', answer: 'No, only the agreement changes. Business continues.' },
    { id: 45, category: 'Theory', question: 'Section 31 requires?', answer: 'Consent of all existing partners.' },
    { id: 46, category: 'Theory', question: 'What is Gaining Ratio?', answer: 'New Ratio - Old Ratio (Used in Retirement, rarely Admission).' },
    { id: 47, category: 'Calculations', question: 'If New Partner acquires share from A only?', answer: 'Only A sacrifices. B\'s share remains same.' },
    { id: 48, category: 'Calculations', question: 'If New Partner acquires share in specific ratio?', answer: 'Subtract specific sacrifice from old ratio.' },
    { id: 49, category: 'Theory', question: 'Def. Revenue Exp (Adv Suspense)?', answer: 'Written off to Old Partners\' Capital (Debit Side).' },
    { id: 50, category: 'Theory', question: 'Partnership Deed silent on Admission?', answer: 'No admission possible without 100% consent.' }
];

export const PARTNERSHIP_ADMISSION_SQPS: SQPQuestion[] = [
    {
        id: 'sqp-admis-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '1. A and B are partners sharing profits in the ratio of 3:2. They admit C as a new partner. A surrenders 1/3rd of his share and B surrenders 1/4th of his share in favour of C. The new profit sharing ratio will be:\n(A) 3:2:3\n(B) 4:3:3\n(C) 6:4:5\n(D) 2:1:1',
        markingScheme: '(B) 4:3:3',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Language**\n- When a partner surrenders a fraction "OF his share", it means we must multiply that fraction by their original share to find out how much they are actually giving away (Sacrifice).\n\n**Step 2: Calculate Each Partner\'s Sacrifice**\n- Old Ratio of A and B = 3:2 (i.e., A = 3/5, B = 2/5).\n- A\'s Sacrifice = 1/3 of his share (3/5) = (1/3) × (3/5) = **3/15** or **1/5**.\n- B\'s Sacrifice = 1/4 of his share (2/5) = (1/4) × (2/5) = **2/20** or **1/10**.\n\n**Step 3: Calculate the New Shares**\n- Formula: New Share = Old Share - Sacrifice\n- A\'s New Share = 3/5 - 1/5 = **2/5**.\n- B\'s New Share = 2/5 - 1/10. (Common denominator is 10, so 4/10 - 1/10 = **3/10**).\n- C\'s Share = A\'s Sacrifice + B\'s Sacrifice = 1/5 + 1/10. (Common denominator is 10, so 2/10 + 1/10 = **3/10**).\n\n**Step 4: Find the New Profit Sharing Ratio**\n- Make denominators equal: A (2/5 = 4/10), B (3/10), C (3/10).\n- The new ratio is **4:3:3**.'
    },
    {
        id: 'sqp-admis-2',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '2. Which of the following is NOT a mode of reconstitution of a partnership firm?\n(A) Admission of a partner\n(B) Retirement of a partner\n(C) Dissolution of Partnership Firm\n(D) Change in Profit Sharing Ratio',
        markingScheme: '(C) Dissolution of Partnership Firm',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Define Reconstitution**\n- Reconstitution of a partnership means exactly what it sounds like: reconstructing the internal agreement. The old agreement comes to an end, and a new agreement comes into effect, but the **business itself continues**.\n\n**Step 2: Evaluate the Options**\n- (A) Admission: The profit sharing ratio changes, a new agreement is formed. (Reconstitution)\n- (B) Retirement: The outgoing partner leaves, remaining partners form a new agreement. (Reconstitution)\n- (D) Change in PSR: Existing partners stay, but their shares change, requiring a new agreement. (Reconstitution)\n- (C) Dissolution of Firm: This means the actual business operations are completely shut down, assets are sold, and liabilities are paid off. The firm ceases to exist.\n\n**Step 3: Conclusion**\n- Since "Dissolution of Partnership Firm" ends the business, it is NOT a mode of reconstitution.'
    },
    {
        id: 'sqp-admis-3',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '3. At the time of admission of a partner, General Reserve appearing in the Balance Sheet is transferred to:\n(A) Capital Accounts of all partners in new profit sharing ratio\n(B) Capital Accounts of old partners in old profit sharing ratio\n(C) Capital Account of new partner only\n(D) Revaluation Account',
        markingScheme: '(B) Capital Accounts of old partners in old profit sharing ratio',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand General Reserve**\n- A "General Reserve" represents the accumulated, undistributed profits that the firm earned in the past.\n\n**Step 2: Analyze Ownership**\n- Who worked hard to earn those past profits? The old partners.\n- The new partner has just arrived and has no rightful claim over the profits earned before their admission.\n\n**Step 3: Apply the Rule**\n- To ensure fairness, all accumulated profits (and losses) appearing in the Balance Sheet at the time of admission are immediately transferred to the **Capital Accounts of Old Partners in their Old Profit Sharing Ratio**.\n- This prevents the new partner from unfairly gaining a share of past reserves.'
    },
    {
        id: 'sqp-admis-4',
        year: '2023-24',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '4. X and Y are partners sharing profits in 3:1. Z is admitted as a partner. Z brings ₹ 40,000 as his capital and ₹ 20,000 for his share of goodwill premium. Goodwill is withdrawn by old partners. Pass necessary Journal Entries.',
        markingScheme: '1. Cash/Bank A/c Dr. 60,000\n   To Z\'s Capital A/c 40,000\n   To Premium for Goodwill A/c 20,000\n(Capital and PFG brought in)\n\n2. Premium for Goodwill A/c Dr. 20,000\n   To X\'s Capital A/c 15,000\n   To Y\'s Capital A/c 5,000\n(PFG credited to Old Partners in Sacrificing Ratio 3:1)\n\n3. X\'s Capital A/c Dr. 15,000\n   Y\'s Capital A/c Dr. 5,000\n   To Cash/Bank A/c 20,000\n(Goodwill withdrawn)',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | X and Y |\n| X & Y Profit Sharing Ratio (Old) | 3 : 1 |\n| New Partner Z Brings Capital | ₹ 40,000 |\n| Z Brings Goodwill (PFG) | ₹ 20,000 |\n| What happens to PFG? | Goodwill is **withdrawn** by old partners |\n\n---\n\n### 💡 Concept: Why 3 Journal Entries?\n\nWhenever a new partner brings PFG in cash, the accounting involves **3 distinct events**:\n\n| Event | What Happens |\n|---|---|\n| 1 | Z pays both capital and PFG into the firm |\n| 2 | Firm credits the PFG to X & Y\'s Capital Accounts |\n| 3 | X & Y withdraw the PFG from the firm (cash goes out) |\n\n---\n\n### 🧮 Working Note: Sacrificing Ratio\n\nNo new ratio is mentioned → Sacrificing Ratio = **Old Ratio = 3:1**\n\n```\nX\'s Share of PFG = 20,000 × 3/4 = ₹ 15,000\nY\'s Share of PFG = 20,000 × 1/4 = ₹  5,000\n```\n\n---\n\n### 📝 Journal Entry 1: Z Brings Cash (Capital + PFG Together)\n\n```\nTotal Cash from Z = Capital + PFG = 40,000 + 20,000 = ₹ 60,000\n```\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Cash/Bank A/c Dr. | 60,000 | |\n|   To Z\'s Capital A/c | | 40,000 |\n|   To Premium for Goodwill A/c | | 20,000 |\n| *(Cash received: Z\'s capital and premium for goodwill)* | | |\n\n> ✅ Cash comes in. Z’s capital is credited. PFG is credited to a separate account (not directly to old partners — that happens in Entry 2).\n\n---\n\n### 📝 Journal Entry 2: PFG Distributed to Old Partners (Sacrificing Ratio 3:1)\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Premium for Goodwill A/c Dr. | 20,000 | |\n|   To X\'s Capital A/c | | 15,000 |\n|   To Y\'s Capital A/c | | 5,000 |\n| *(PFG credited to old partners in Sacrificing Ratio 3:1)* | | |\n\n> ✅ The PFG account is now closed. Old partners’ capitals are boosted.\n\n---\n\n### 📝 Journal Entry 3: Old Partners Withdraw Goodwill (Cash Goes Out)\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| X\'s Capital A/c Dr. | 15,000 | |\n| Y\'s Capital A/c Dr. | 5,000 | |\n|   To Cash/Bank A/c | | 20,000 |\n| *(Old partners withdraw the PFG received from Z)* | | |\n\n---\n\n### ✅ Summary of All 3 Entries\n\n| # | Entry | Dr | Cr |\n|---|---|---|---|\n| 1 | Z brings cash | Cash 60,000 | Z Cap 40,000 + PFG 20,000 |\n| 2 | PFG distributed | PFG 20,000 | X Cap 15,000 + Y Cap 5,000 |\n| 3 | PFG withdrawn | X Cap 15,000 + Y Cap 5,000 | Cash 20,000 |\n\n> 💡 **Exam Tip**: Entries 2 and 3 always happen as a pair when PFG is brought AND withdrawn. Notice how the firm\'s net cash position is unchanged after Entry 3 — X & Y simply took back the money Z paid as goodwill.'
    },
    {
        id: 'sqp-admis-5',
        year: '2022-23',
        type: 'Subjective (4 Marks)',
        marks: 4,
        question: '5. Pass Journal Entry for the following at the time of admission of a partner:\n(i) Value of Stock to be increased by ₹ 5,000.\n(ii) Provision for Doubtful debts to be increased by ₹ 2,000.\n(iii) Outstanding Rent ₹ 1,500 to be recorded.\n(iv) Furniture book value ₹ 20,000 is to be reduced to 40%.',
        markingScheme: '**Combined Revaluation Entry may be passed or individual:**\n1. Stock A/c Dr. 5,000\n   To Revaluation A/c 5,000\n(Increase in Asset)\n\n2. Revaluation A/c Dr. 2,000\n   To Prov for DD A/c 2,000\n(Increase in Liability)\n\n3. Revaluation A/c Dr. 1,500\n   To Outstanding Rent A/c 1,500\n(Unrecorded Liability)\n\n4. Revaluation A/c Dr. 12,000\n   To Furniture A/c 12,000\n(Decrease in Asset: Reduced TO 40%, means reduced BY 60%. 60% of 20k = 12k)',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given (4 Adjustments)\n\n| # | Adjustment | Nature |\n|---|---|---|\n| (i) | Stock increased by ₹ 5,000 | Asset ↑ → Gain |\n| (ii) | Prov for Doubtful Debts increased by ₹ 2,000 | Liability ↑ → Loss |\n| (iii) | Outstanding Rent ₹ 1,500 to be recorded | Unrecorded Liability → Loss |\n| (iv) | Furniture ₹ 20,000 to be reduced **TO** 40% | Asset ↓ → Loss |\n\n---\n\n### 💡 The Golden Rule of Revaluation Account\n\n| What happens | Entry in Revaluation A/c |\n|---|---|\n| Asset value **increases** | **Credit** Revaluation (Gain) |\n| Asset value **decreases** | **Debit** Revaluation (Loss) |\n| Liability **increases** | **Debit** Revaluation (Loss) |\n| Liability **decreases** | **Credit** Revaluation (Gain) |\n| Unrecorded Asset found | **Credit** Revaluation (Gain) |\n| Unrecorded Liability found | **Debit** Revaluation (Loss) |\n\n---\n\n### 🧮 Step-by-Step: Each Adjustment Explained\n\n**Adjustment (i) — Stock Increased BY ₹ 5,000**\n- Asset going UP → Gain → Credit Revaluation\n```\nStock A/c Dr. 5,000 → To Revaluation A/c 5,000\n```\n\n**Adjustment (ii) — Prov for Doubtful Debts Increased BY ₹ 2,000**\n- Provision = buffer against bad debts = a Liability. Liability going UP → Loss → Debit Revaluation\n```\nRevaluation A/c Dr. 2,000 → To Provision for DD A/c 2,000\n```\n\n**Adjustment (iii) — Outstanding Rent ₹ 1,500 (Unrecorded Liability)**\n- A liability that was not in the books now needs to be recorded. Unrecorded Liability → Loss.\n```\nRevaluation A/c Dr. 1,500 → To Outstanding Rent A/c 1,500\n```\n\n**Adjustment (iv) — Furniture Reduced TO 40%** ⚠️ Tricky!\n\n> ⚠️ **"Reduced TO 40%"** means the final value is 40%. This is NOT the same as "Reduced BY 40%".\n\n```\nTarget Value = 40% of 20,000 = ₹ 8,000\nReduction    = Original − Target = 20,000 − 8,000 = ₹ 12,000 (Loss)\n```\n\n```\nRevaluation A/c Dr. 12,000 → To Furniture A/c 12,000\n```\n\n---\n\n### 📝 All 4 Journal Entries Together\n\n| # | Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|---|\n| 1 | Stock A/c Dr. → To Revaluation A/c | 5,000 | 5,000 |\n| 2 | Revaluation A/c Dr. → To Prov for DD A/c | 2,000 | 2,000 |\n| 3 | Revaluation A/c Dr. → To Outstanding Rent A/c | 1,500 | 1,500 |\n| 4 | Revaluation A/c Dr. → To Furniture A/c | 12,000 | 12,000 |\n\n---\n\n### ✅ Net Result of Revaluation A/c\n\n| Debit (Losses) | ₹ | Credit (Gains) | ₹ |\n|---|---|---|---|\n| Prov for DD | 2,000 | Stock | 5,000 |\n| Outstanding Rent | 1,500 | | |\n| Furniture | 12,000 | | |\n| **Loss on Revaluation** | **10,500** | | |\n| **Total** | **15,500** | **Total** | **5,000** |\n\n> 💡 **Exam Tip**: The critical trap in this question is "reduced **TO** 40%" vs "reduced **BY** 40%". **TO** = target value. **BY** = reduction amount. Always re-read and calculate accordingly!'
    },
    {
        id: 'sqp-admis-6',
        year: '2025-26',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '6. A and B are partners in 3:2. They admit C for 1/5 share. C brings ₹ 30,000 capital. Goodwill of the firm is valued at ₹ 50,000. C brings his share of goodwill in cash. \nBalance Sheet extract: Investment Fluctuation Reserve ₹ 4,000. \nAdjustments: Investment (Book Value ₹ 20,000) is revalued at ₹ 18,000.\nPass Journal Entries for IFR and Goodwill.',
        markingScheme: '**Working Notes**:\n- Fall in Investment = 20,000 - 18,000 = 2,000.\n- IFR Available = 4,000.\n- Surplus IFR = 4,000 - 2,000 = 2,000.\n- C\'s Share of Goodwill = 50,000 × 1/5 = 10,000.\n\n**Journal Entries**:\n1. IFR A/c Dr. 4,000\n   To Investment A/c 2,000\n   To A\'s Cap A/c 1,200\n   To B\'s Cap A/c 800\n(Fall met from IFR, surplus to Old Partners in 3:2)\n\n2. Cash A/c Dr. 40,000\n   To C\'s Cap 30,000\n   To PFG A/c 10,000\n\n3. PFG A/c Dr. 10,000\n   To A\'s Cap 6,000\n   To B\'s Cap 4,000\n(SR = OR = 3:2)',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 First, Understand What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners A & B Profit Sharing Ratio (PSR) | 3 : 2 |\n| New Partner C\'s Share | 1/5 |\n| C\'s Capital Brought | ₹ 30,000 |\n| Firm\'s Goodwill Value | ₹ 50,000 |\n| Investment Fluctuation Reserve (IFR) | ₹ 4,000 |\n| Investment Book Value | ₹ 20,000 |\n| Investment Revalued At | ₹ 18,000 |\n\n---\n\n### 💡 Concept 1: What is Investment Fluctuation Reserve (IFR)?\n\nThink of IFR as a **safety cushion** that the firm keeps specifically to cover any future **fall in the market value of Investments**.\n\n> **Rule:** When the market value of Investment falls, first use IFR to absorb that loss. If any IFR is leftover (surplus), it becomes a free reserve and is distributed to **Old Partners in Old Ratio**.\n\n---\n\n### 🧮 Step 1: Calculate the Fall in Investment Value\n\nInvestment fell from Book Value to Revalued Value:\n\n```\nFall = Book Value − Revalued Value\nFall = 20,000 − 18,000 = ₹ 2,000\n```\n\nSo, the investment has **lost ₹ 2,000** in value. This loss must be recorded in the books.\n\n---\n\n### 🧮 Step 2: Use IFR to Cover the Fall\n\nWe have IFR of ₹ 4,000. The fall is only ₹ 2,000.\n\n```\nIFR Available    = ₹ 4,000\nFall to cover    = ₹ 2,000\nSurplus IFR left = 4,000 − 2,000 = ₹ 2,000\n```\n\nSo, IFR **fully covers** the loss. No Revaluation Account entry is needed for the investment.\n\n---\n\n### 📝 Journal Entry 1: IFR Adjustment\n\nIn **one single entry**, IFR does two things:\n- **Reduces the Investment A/c** by ₹ 2,000 (recording the fall).\n- **Distributes the surplus** ₹ 2,000 to Old Partners A & B in Old Ratio (3:2).\n\n```\nSurplus to A = 2,000 × 3/5 = ₹ 1,200\nSurplus to B = 2,000 × 2/5 = ₹   800\n```\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| IFR A/c Dr. | 4,000 | |\n|   To Investment A/c | | 2,000 |\n|   To A\'s Capital A/c | | 1,200 |\n|   To B\'s Capital A/c | | 800 |\n| *(IFR used to cover fall; surplus credited to old partners in 3:2)* | | |\n\n> ✅ **Why debit IFR for the full ₹4,000?** Because we close the entire IFR account — part of it pays the loss (goes to Investment A/c), and the rest rewards the old partners.\n\n---\n\n### 💡 Concept 2: What is Premium for Goodwill (PFG)?\n\nWhen C joins, he gets a **right to share future profits**. For this privilege, he must **compensate the old partners** who are giving up part of their profit share. This compensation is called **Premium for Goodwill (PFG)**.\n\n> **C\'s Goodwill Share = Firm Goodwill × C\'s Share = 50,000 × 1/5 = ₹ 10,000**\n\nC brings this ₹ 10,000 in **cash** (along with his capital of ₹ 30,000).\n\n---\n\n### 🧮 Step 3: Calculate Sacrificing Ratio\n\nA & B have **not been given a specific sacrificing ratio**, so we assume they sacrifice in their **Old Ratio (3:2)**.\n\n> Sacrificing Ratio = Old Ratio = **3 : 2**\n\n---\n\n### 📝 Journal Entry 2: C Brings Capital + Goodwill\n\nC brings total cash = Capital + PFG = 30,000 + 10,000 = **₹ 40,000**\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Cash A/c Dr. | 40,000 | |\n|   To C\'s Capital A/c | | 30,000 |\n|   To Premium for Goodwill A/c | | 10,000 |\n| *(Cash received from C for capital and goodwill share)* | | |\n\n---\n\n### 📝 Journal Entry 3: Distribute PFG to Old Partners\n\nThe PFG now sitting in the **Premium for Goodwill A/c** is given to the sacrificing partners (A & B) in **Sacrificing Ratio (3:2)**:\n\n```\nA\'s Share = 10,000 × 3/5 = ₹ 6,000\nB\'s Share = 10,000 × 2/5 = ₹ 4,000\n```\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Premium for Goodwill A/c Dr. | 10,000 | |\n|   To A\'s Capital A/c | | 6,000 |\n|   To B\'s Capital A/c | | 4,000 |\n| *(PFG distributed to old partners in Sacrificing Ratio 3:2)* | | |\n\n---\n\n### ✅ Final Summary of All 3 Journal Entries\n\n| # | Entry | Dr | Cr |\n|---|---|---|---|\n| 1 | IFR adjusted | IFR 4,000 | Investment 2,000; A\'s Cap 1,200; B\'s Cap 800 |\n| 2 | C brings cash | Cash 40,000 | C\'s Cap 30,000; PFG 10,000 |\n| 3 | PFG distributed | PFG 10,000 | A\'s Cap 6,000; B\'s Cap 4,000 |\n\n> 💡 **Memory Trick**: IFR = "I Fix (the) Reserve for investments." Surplus goes to old partners. PFG = "Partners\' Fee for Goodwill" — always flows from new partner → to old partners.'
    },
    {
        id: 'new-mcq-admis-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '7. A and B are partners sharing profits in 4:1. A surrenders 1/4 of his share and B surrenders 1/2 of his share in favour of C. What is the Sacrificing Ratio?\n\n(A) 2:1\n(B) 1:2\n(C) 3:2\n(D) 4:1',
        markingScheme: '(A) 2:1',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Language**\n- When a partner surrenders a fraction "OF his share", multiply that fraction by their original share to find the Sacrifice.\n\n**Step 2: Calculate the Sacrifices**\n- Old Ratio of A and B = 4:1 (A = 4/5, B = 1/5).\n- A\'s Sacrifice = 1/4 of his share (4/5) = 1/4 × 4/5 = **4/20** (or 1/5).\n- B\'s Sacrifice = 1/2 of his share (1/5) = 1/2 × 1/5 = **1/10**.\n\n**Step 3: Find the Sacrificing Ratio**\n- The Sacrificing Ratio compares A\'s sacrifice to B\'s sacrifice.\n- A\'s Sacrifice = 1/5. B\'s Sacrifice = 1/10.\n- Make denominators equal: A = 2/10, B = 1/10.\n- Sacrificing Ratio (A : B) = **2 : 1**.'
    },
    {
        id: 'new-mcq-admis-2',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '8. If the incoming partner brings the amount of goodwill in Cash, and also pays some amount privately to the old partners, how is the private payment recorded?\n\n(A) Credited to Capital Accounts\n(B) Debited to Current Accounts\n(C) Credited to Revaluation Account\n(D) No entry is passed',
        markingScheme: '(D) No entry is passed',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Scenario**\n- The incoming partner is paying an amount as "Premium for Goodwill" directly to the old (sacrificing) partners privately, out of his own pocket, outside the business framework.\n\n**Step 2: Apply the Accounting Concept**\n- The Business Entity Concept dictates that we only record transactions that affect the firm\'s financial position.\n- Since the firm\'s cash/bank accounts are not involved, and the firm\'s capital structure is not officially handling this transaction, the firm\'s books are unaffected.\n\n**Step 3: Conclusion**\n- When goodwill is paid privately outside the business, **no entry is passed** in the books of the firm.'
    },
    {
        id: 'new-mcq-admis-3',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '9. X and Y are partners (3:2). They admit Z for 1/5 share. Z brings ₹ 50,000 as capital. The total assets of the firm are ₹ 1,50,000 and outside liabilities are ₹ 20,000. Calculate Hidden Goodwill.\n\n(A) ₹ 1,20,000\n(B) ₹ 70,000\n(C) ₹ 50,000\n(D) ₹ 1,00,000',
        markingScheme: '(B) ₹ 70,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Determine the Capital of the New Firm**\n- Z brings ₹50,000 for a 1/5 share.\n- Based on Z\'s contribution, the total capital of the firm *should* be = Z\'s Capital × Reciprocal of his share.\n- Expected Total Capital = ₹50,000 × (5/1) = **₹2,50,000**.\n\n**Step 2: Determine the Actual Net Worth (Adjusted Capital)**\n- Net Worth = Total Assets - Outside Liabilities + New Partner\'s Capital.\n- Initial Net Worth (Old firm) = ₹1,50,000 (Assets) - ₹20,000 (Liabilities) = ₹1,30,000.\n- Add Z\'s Capital: ₹1,30,000 + ₹50,000 = **₹1,80,000**.\n- *(This is the actual total capital employed in the new firm).* \n\n**Step 3: Calculate Hidden Goodwill**\n- Hidden Goodwill = Expected Total Capital - Actual Net Worth.\n- Goodwill = ₹2,50,000 - ₹1,80,000 = **₹70,000**.'
    },
    {
        id: 'new-mcq-admis-4',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '10. At the time of admission, "Workmen Compensation Reserve" stands at ₹ 50,000. A claim for workmen compensation is determined at ₹ 60,000. The treatment for the difference (₹ 10,000) is:\n\n(A) Debited to Partners Capital\n(B) Debited to Revaluation Account\n(C) Credited to Revaluation Account\n(D) No entry',
        markingScheme: '(B) Debited to Revaluation Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Compare the Claim with the Reserve**\n- Workmen Compensation Reserve (WCR) Available = ₹50,000.\n- Actual Claim Determined = ₹60,000.\n- Since the claim is strictly greater than the reserve, the reserve falls short by **₹10,000**.\n\n**Step 2: Determine the Accounting Treatment for the Deficit**\n- WCR is meant to absorb claims up to its limit (₹50,000).\n- Any excess liability beyond the reserve limit represents an unexpected loss/increase in liability for the firm upon reconstitution.\n- Under partnership rules, any unrecorded loss or increase in liability upon reconstitution is routed through the Revaluation Account.\n- Therefore, the ₹10,000 shortfall is **debited to the Revaluation Account**.'
    },
    {
        id: 'new-mcq-admis-5',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '11. Which of the following is NOT distributed to old partners on admission?\n(A) General Reserve\n(B) Profit & Loss (Credit)\n(C) Employees Provident Fund\n(D) Workmen Compensation Reserve (Excess)',
        markingScheme: '(C) Employees Provident Fund',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Distribution of Reserves**\n- At the time of admission, accumulated profits and free reserves (like General Reserve, P&L Credit balance) are distributed to old partners because they belong to the past period.\n\n**Step 2: Evaluate the Options**\n- (A) General Reserve: Distributed to old partners.\n- (B) Profit & Loss (Credit): Distributed to old partners.\n- (D) WCR (Excess): Any reserve left over after meeting claims is distributed to old partners.\n- (C) Employees Provident Fund (EPF): This is money belonging to the employees, held in trust by the firm. It is a strictly enforced **statutory external liability**.\n\n**Step 3: Conclusion**\n- Because EPF is an external liability and not a free reserve of accumulated profit, it is NEVER distributed to the partners.'
    },
    {
        id: 'new-mcq-admis-6',
        year: '2023-24',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '12. Assertion (A): On admission, the "Profit on Revaluation" is distributed among old partners in Old Profit Sharing Ratio.\nReason (R): The gain arises from assets held before the admission of the new partner.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "On admission, the \'Profit on Revaluation\' is distributed among old partners in Old Profit Sharing Ratio."\n- This is a standard accounting rule for reconstitution. The statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "The gain arises from assets held before the admission of the new partner."\n- Revaluation captures the change in value of assets and liabilities from the past up to the exact date of admission. The new partner has no rightful claim to the growth in value that happened before they joined. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- Why is the profit given only to old partners? Precisely because the assets were acquired and held by them during the period the gain accrued. \n- Therefore, R is the correct and direct explanation for A.'
    },
    {
        id: 'new-mcq-admis-7',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '13. X and Y are partners. Z admits. Value of Investments (Book Value ₹ 10,000) increased by ₹ 2,000. Investment Fluctuation Reserve is ₹ 5,000. Amount distributed to old partners will be:\n\n(A) ₹ 2,000\n(B) ₹ 3,000\n(C) ₹ 5,000\n(D) ₹ 7,000',
        markingScheme: '(C) ₹ 5,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand IFR Mechanism**\n- Investment Fluctuation Reserve (IFR) is created specifically to cover any **fall** in the market value of investments.\n- If there is no fall, the entire reserve is "free" and belongs to the old partners.\n\n**Step 2: Analyze the Change in Asset Value**\n- Book Value = ₹10,000.\n- The value *increased* by ₹2,000.\n- Since the value increased (and did not fall), **none of the IFR is needed** to cover losses.\n\n**Step 3: Distribute the Reserve**\n- The entire IFR of **₹5,000** is now freely available.\n- It will be fully distributed to the old partners (X and Y) in their old profit sharing ratio.\n- Note: The ₹2,000 increase in asset value is a separate gain that will be credited directly to the Revaluation Account.'
    },
    {
        id: 'new-mcq-admis-8',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '14. A debtor of ₹ 10,000 (written off as bad last year) paid ₹ 6,000 in full settlement. The entry to record this on admission is:\n(A) Cash Dr. 6000 To Bad Debts Recovered\n(B) Cash Dr. 6000 To Revaluation A/c\n(C) Cash Dr. 6000 To Debtors\n(D) No Entry',
        markingScheme: '(B) Cash Dr. 6000 To Revaluation A/c',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Bad Debts Recovered**\n- When a debtor is written off as bad, their account is closed. If they later pay, it is an unexpected windfall gain.\n\n**Step 2: Apply Reconstitution Rules**\n- During the ordinary course of business, this gain is credited to a "Bad Debts Recovered A/c" which goes to the P&L Account.\n- However, on the date of **Admission/Reconstitution**, all unrecorded assets or unexpected gains related to past periods are routed directly through the **Revaluation Account** to ensure the benefit goes to the old partners.\n\n**Step 3: Formulate the Journal Entry**\n- Cash is coming in -> Debit Cash Account (₹6,000).\n- It is a gain on reconstitution -> Credit Revaluation Account (₹6,000).\n- Correct Entry: Cash A/c Dr. 6,000 To Revaluation A/c 6,000.'
    },
    {
        id: 'new-mcq-admis-9',
        year: '2021-22',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '15. According to AS-26, only which goodwill is recorded in the books?\n(A) Self-generated Goodwill\n(B) Purchased Goodwill\n(C) Hidden Goodwill\n(D) Inherited Goodwill',
        markingScheme: '(B) Purchased Goodwill',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Recall the Accounting Standard (AS-26)**\n- Accounting Standard 26 (Intangible Assets) dictates how items like Goodwill, Patents, and Trademarks must be recorded.\n\n**Step 2: Apply the Specific Rule for Goodwill**\n- AS-26 clearly states that an intangible asset (Goodwill) should be recognized as an asset in the books **only when some consideration in money or money\'s worth has been paid for it**.\n- This means a firm cannot just "estimate" its own reputation and put it on the balance sheet (Self-generated goodwill is forbidden in books).\n- You can only record goodwill if you actually bought a business and paid extra for it (**Purchased Goodwill**).'
    },
    {
        id: 'new-mcq-admis-10',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '16. A and B are partners in 3:2. C is admitted for 1/4 share. C brings proportionate capital. Capital of A and B (after all adjustments) is ₹ 60,000 and ₹ 40,000. Calculate C\'s Capital.\n(A) ₹ 25,000\n(B) ₹ 33,333\n(C) ₹ 20,000\n(D) ₹ 50,000',
        markingScheme: '(B) ₹ 33,333',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Proportionate Capital Concept**\n- C is bringing capital proportionate to his share (1/4) based on the adjusted capitals of the old partners.\n\n**Step 2: Calculate the Combined Share of Old Partners**\n- Total firm share = 1.\n- C takes 1/4 share.\n- Remaining share for A and B = 1 - 1/4 = **3/4**.\n\n**Step 3: Work out Total Firm Capital**\n- We know that A and B\'s combined adjusted capital (₹60,000 + ₹40,000 = ₹1,00,000) represents exactly the 3/4th share of the firm.\n- If 3/4th of Total Capital = ₹1,00,000\n- Total Capital of the New Firm = ₹1,00,000 × (4/3) = **₹1,33,333**.\n\n**Step 4: Calculate C\'s Capital**\n- C\'s required capital is his 1/4 share of the Total Firm Capital.\n- C\'s Capital = ₹1,33,333 × 1/4 = **₹33,333**.'
    },
    {
        id: 'new-mcq-admis-11',
        year: '2024-25',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '17. Assertion (A): Premium for Goodwill brought by the new partner is credited to Sacrificing Partners in Sacrificing Ratio.\nReason (R): Goodwill is an accumulated profit.\n(A) Both A and R are true\n(B) A is true but R is false\n(C) A is false but R is true\n(D) Both false',
        markingScheme: '(B) A is true but R is false',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "Premium for Goodwill brought by the new partner is credited to Sacrificing Partners in Sacrificing Ratio."\n- This is the fundamental accounting rule for admission. The new partner compensates those who surrendered their profit share. This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "Goodwill is an accumulated profit."\n- "Accumulated Profits" refer to past earnings that were saved as free reserves (like General Reserve or P&L A/c credit balance). \n- "Goodwill" is an intangible asset representing the present value of the firm\'s future super-earning capacity, NOT a past saved cash profit. This statement is **False**.\n\n**Step 3: Conclusion**\n- Assertion (A) is true, but Reason (R) is false.'
    },
    {
        id: 'new-mcq-admis-12',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '18. New Partner\'s Current Account is debited for his share of goodwill when:\n(A) He brings goodwill in cash\n(B) He pays goodwill privately\n(C) He does not bring goodwill share in cash\n(D) He brings goodwill in kind',
        markingScheme: '(C) He does not bring goodwill share in cash',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Requirement for Goodwill**\n- The new partner *must* compensate the sacrificing partners for taking a share of future profits.\n\n**Step 2: Identify the Cash Issue**\n- Usually, the new partner brings this Premium for Goodwill (PFG) in cash. But what happens if they **cannot** or **do not** bring it in cash?\n\n**Step 3: Apply the Rule for Non-Cash Goodwill**\n- The sacrificing partners still must be compensated. \n- Instead of waiting for cash, the firm directly deducts the required amount from the new partner. \n- To avoid reducing the new partner\'s fixed Capital Account (which would distort their agreed capital contribution), the firm opens and debits the **New Partner\'s Current Account**.\n- So, the entry is: New Partner\'s Current A/c Dr. To Sacrificing Partners\' Capital A/c. \n- Therefore, (C) is correct.'
    }
];

export const CH_PARTNERSHIP_ADMISSION_CHAPTER: Chapter = {
    id: 'partnership-admission',
    title: 'Admission of a Partner',
    theory: PARTNERSHIP_ADMISSION_THEORY,
    flashcards: PARTNERSHIP_ADMISSION_FLASHCARDS,
    sqps: PARTNERSHIP_ADMISSION_SQPS,
    weightage: '15 Marks',
    cheatSheet: {
        sections: [
            {
                title: 'Concepts',
                items: [
                    'Reconstitution: Old agreement ends, new starts.',
                    'Sacrificing Ratio = Old - New',
                    'New Ratio = Old - Sacrifice'
                ]
            },
            {
                title: 'Important Forumlas',
                items: [
                    'Avg Profit Method: Avg Profit × No. of Years Purchase',
                    'Super Profit = Actual Avg Profit - Normal Profit',
                    'Normal Profit = Capital Employed × NRR/100',
                    'Hidden Goodwill = Total Cap of New Firm - Net Worth'
                ]
            }
        ],
        crucialRules: [
            { title: 'AS-26 Rule', content: 'Goodwill is recorded in books ONLY when some consideration in money or money\'s worth has been paid for it.' },
            { title: 'Revaluation Rule', content: 'Decrease in Asset/Increase in Liability -> Debit Reval. Increase in Asset/Decrease in Liability -> Credit Reval.' },
            { title: 'Accumulated Profits', content: 'Always distributed in OLD Ratio to OLD Partners (unless specific adjustment is required).' }
        ],
        natureTable: [
            ['Basis', 'Sacrificing Ratio', 'Gaining Ratio'],
            ['Meaning', 'Share surrendered by old partners.', 'Share acquired by continuing partners.'],
            ['Time', 'Calculated at the time of Admission.', 'Calculated at Retirement/Death.'],
            ['Formula', 'Old Ratio - New Ratio', 'New Ratio - Old Ratio'],
            ['Purpose', 'To distribute Goodwill brought by new partner.', 'To pay Goodwill compensation to outgoing partner.']
        ]
    },
    mindMap: [
        {
            id: '1',
            title: 'Effects',
            colorClass: 'border-blue-500 bg-blue-50',
            iconName: 'Target',
            items: [
                'Old Agreement Ends',
                'New Partner Admitted',
                'New PSR Determined',
                'Sacrificing Ratio Limit'
            ]
        },
        {
            id: '2',
            title: 'Goodwill',
            colorClass: 'border-purple-500 bg-purple-50',
            iconName: 'Activity',
            items: [
                'Valuation (Avg/Super)',
                'Premium Method',
                'Hidden Goodwill',
                'AS-26 Compliance'
            ]
        },
        {
            id: '3',
            title: 'Revaluation',
            colorClass: 'border-green-500 bg-green-50',
            iconName: 'BarChart3',
            items: [
                'Assets & Liabilities',
                'Profit/Loss to Old Partners',
                'Unrecorded Assets/Liabs'
            ]
        },
        {
            id: '4',
            title: 'Reserves',
            colorClass: 'border-orange-500 bg-orange-50',
            iconName: 'Layers',
            items: [
                'General Reserve',
                'WCR (Excess only)',
                'IFR (Excess only)',
                'P&L (Dr/Cr Balance)'
            ]
        }
    ]
};
