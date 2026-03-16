
import { Chapter, TheoryTopic, Flashcard, SQPQuestion } from '../types';

export const PARTNERSHIP_DISSOLUTION_THEORY: TheoryTopic[] = [
    {
        id: 'dissolution-basics',
        title: '1. Dissolution of Firm vs Partnership',
        content: 'Dissolution of Partnership merely involves a change in the relation of partners (reconstitution), whereas Dissolution of Firm typically implies discontinuation of business.',
        subtopics: [
            {
                title: 'Key Differences',
                description: 'Comparison between the two:',
                illustration: {
                    type: 'table',
                    caption: 'Dissolution of Partnership vs Firm',
                    concept: 'Section 39 defines Dissolution of Firm.',
                    content: [
                        ['Basis', 'Dissolution of Partnership', 'Dissolution of Firm'],
                        ['Business', 'May continue.', 'Discontinued.'],
                        ['Books', 'Books not closed.', 'Books closed.'],
                        ['Relations', 'Relationship changes.', 'Relationship ends.'],
                        ['Effect', 'Does not mean firm dissolution.', 'Includes partnership dissolution.']
                    ]
                }
            }
        ]
    },
    {
        id: 'settlement-accounts',
        title: '2. Settlement of Accounts (Section 48)',
        content: 'Section 48 of the Indian Partnership Act, 1932 deals with the settlement of accounts when a firm is dissolved.',
        subtopics: [
            {
                title: 'Order of Settlement',
                description: 'The amount realised from assets (including contributions by partners) shall be applied in the following order:',
                points: [
                    '1. Payment of firm\'s **Outside Debts** (Secured, then Unsecured).',
                    '2. Payment to partners for their **Loans** (advances distinct from capital).',
                    '3. Payment to partners for their **Capital**.',
                    '4. Surplus, if any, divided among partners in their **Profit Sharing Ratio**.'
                ]
            }
        ]
    },
    {
        id: 'realisation-account',
        title: '3. Realisation Account',
        content: 'A Realisation Account is prepared to close the books of account of the dissolved firm. It records the realisation of assets and settlement of liabilities.',
        subtopics: [
            {
                title: 'Format',
                description: 'It is a Nominal Account.',
                illustration: {
                    type: 'table',
                    caption: 'Realisation Account Format',
                    concept: 'Close Assets (Dr) and Liabs (Cr). Realise Assets (Cr) and Pay Liabs (Dr).',
                    content: [
                        ['Particulars', 'Amt', 'Particulars', 'Amt'],
                        ['To Sundry Assets (Book Value)', 'XX', 'By Sundry Liabs (Book Value)', 'XX'],
                        ['To Bank (Liabs Paid)', 'XX', 'By Bank (Assets Realised)', 'XX'],
                        ['To Bank (Exp Paid)', 'XX', 'By Partner\'s Cap (Asset Taken)', 'XX'],
                        ['To Partner\'s Cap (Liab Assumed)', 'XX', 'By Loss on Realisation', 'XX'],
                        ['To Profit on Realisation', 'XX', '', '']
                    ]
                }
            }
        ]
    },
    {
        id: 'accounting-treatment',
        title: '4. Specific Accounting Treatments',
        content: 'Special rules apply for handling assets, liabilities, and expenses.',
        subtopics: [
            {
                title: 'Assets',
                description: 'Assets are transferred to Realisation A/c at **Book Value**. Cash/Bank balance is NOT transferred.',
                points: [
                    '**Asset Realised**: Bank Dr. To Realisation.',
                    '**Asset taken by Partner**: Partner\'s Cap Dr. To Realisation.',
                    '**Asset given to Creditor**: No Entry (for the extent of set-off).'
                ]
            },
            {
                title: 'Realisation Expenses',
                description: 'The treatment depends on who bears and who pays.',
                illustration: {
                    type: 'table',
                    caption: 'Journal Entries for Expenses',
                    concept: 'Principle: Dr who bears, Cr who pays.',
                    content: [
                        ['Scenario', 'Entry'],
                        ['Firm pays, Firm bears', 'Realisation A/c Dr. To Bank'],
                        ['Partner pays, Firm bears', 'Realisation A/c Dr. To Partner\'s Capital'],
                        ['Firm pays, Partner bears', 'Partner\'s Capital A/c Dr. To Bank'],
                        ['Partner pays, Partner bears', 'No Entry'],
                        ['Fixed Remuneration to Partner', 'Realisation A/c Dr. To Partner\'s Capital']
                    ]
                }
            }
        ]
    },
    {
        id: 'loans-capital',
        title: '5. Loans and Capital Accounts',
        content: 'Partner\'s Loan is NOT transferred to Realisation A/c. It is paid separately after outside debts.',
        subtopics: [
            {
                title: 'Partner\'s Loan',
                description: 'Journal Entry: Partner\'s Loan A/c Dr. To Bank.',
                points: [
                    'If settlement amount deviates from book value, difference goes to Realisation A/c.'
                ]
            },
            {
                title: 'Partner\'s Capital',
                description: 'Final payment is made to close the Capital Accounts.',
                points: [
                    '**Final Payment**: Partner\'s Capital Dr. To Bank.',
                    '**Deficiency**: Bank Dr. To Partner\'s Capital (Partner brings cash).'
                ]
            }
        ]
    }
];

export const PARTNERSHIP_DISSOLUTION_FLASHCARDS: Flashcard[] = [
    // 1-10: Basics & Legal
    { id: 1, category: 'Definitions', question: 'What is Dissolution of Firm?', answer: 'Complete closure of business and end of partnership relations (Section 39).' },
    { id: 2, category: 'Theory', question: 'Section 48 deals with?', answer: 'Mode of Settlement of Accounts upon dissolution.' },
    { id: 3, category: 'Theory', question: 'Order of Payment (First)?', answer: 'Outside Debts (Third Party Liabilities).' },
    { id: 4, category: 'Theory', question: 'Order of Payment (Second)?', answer: 'Loans from Partners.' },
    { id: 5, category: 'Theory', question: 'Section 49 covers?', answer: 'Payment of Firm Debts and Private Debts.' },
    { id: 6, category: 'Theory', question: 'Firm Property Usage?', answer: 'First used to pay Firm Debts, then surplus to Partners.' },
    { id: 7, category: 'Theory', question: 'Private Property Usage?', answer: 'First used to pay Private Debts, then surplus to Firm Debts.' },
    { id: 8, category: 'Theory', question: 'Can business continue after Firm Dissolution?', answer: 'No.' },
    { id: 9, category: 'Theory', question: 'Nature of Realisation Account?', answer: 'Nominal Account.' },
    { id: 10, category: 'Theory', question: 'Is Revaluation A/c prepared in Dissolution?', answer: 'No, Realisation A/c is prepared.' },

    // 11-20: Asset Treatment
    { id: 11, category: 'Theory', question: 'Transfer Assets to Realisation at?', answer: 'Book Value (Gross value, before provisions).' },
    { id: 12, category: 'Theory', question: 'Is Cash/Bank transferred?', answer: 'No, separate Cash/Bank A/c is maintained.' },
    { id: 13, category: 'Theory', question: 'Fictitious Assets transfer?', answer: 'Transferred to Partners\' Capital A/c (Debit side).' },
    { id: 14, category: 'Theory', question: 'If Asset value not realised?', answer: 'It is assumed to be NIL (except for liabilities).' },
    { id: 15, category: 'Calculations', question: 'Entry: Asset taken by Partner?', answer: 'Partner\'s Capital Dr. To Realisation A/c.' },
    { id: 16, category: 'Theory', question: 'Entry: Asset taken by Creditor?', answer: 'No Entry (for the value agreed).' },
    { id: 17, category: 'Theory', question: 'Entry: Prov for Doubtful Debts?', answer: 'Credited to Realisation A/c.' },
    { id: 18, category: 'Theory', question: 'Goodwill in Balance Sheet?', answer: 'Transferred to Realisation A/c (Debit).' },
    { id: 19, category: 'Calculations', question: 'Unrecorded Asset realised?', answer: 'Bank A/c Dr. To Realisation A/c.' },
    { id: 20, category: 'Theory', question: 'Typewriter completely written off sold?', answer: 'Bank A/c Dr. To Realisation A/c.' },

    // 21-30: Liability Treatment
    { id: 21, category: 'Theory', question: 'Transfer Liabs to Realisation at?', answer: 'Book Value.' },
    { id: 22, category: 'Theory', question: 'What liabilities are transferred?', answer: 'Only Outside Liabilities.' },
    { id: 23, category: 'Theory', question: 'Partner\'s Loan transferred?', answer: 'No, paid separately.' },
    { id: 24, category: 'Theory', question: 'Partner\'s Wife Loan?', answer: 'Transferred to Realisation (Outside Liability).' },
    { id: 25, category: 'Theory', question: 'IFR treatment?', answer: 'Transferred to Realisation (Credit side) up to Investment value.' },
    { id: 26, category: 'Calculations', question: 'Liability paid at discount?', answer: 'Realisation Dr. To Bank (Actual amount paid).' },
    { id: 27, category: 'Theory', question: 'Liability not stated?', answer: 'Assumed to be paid at Book Value.' },
    { id: 28, category: 'Calculations', question: 'Creditor takes asset in full?', answer: 'No Entry.' },
    { id: 29, category: 'Calculations', question: 'Creditor takes part asset?', answer: 'Entry only for balance paid in cash.' },
    { id: 30, category: 'Theory', question: 'WCR Liability exists?', answer: 'WCR (to extent of liab) -> Realisation. Excess -> Partners.' },

    // 31-40: Expenses & Partners
    { id: 31, category: 'Theory', question: 'Exp born by Firm, Paid by Firm?', answer: 'Realisation Dr. To Bank.' },
    { id: 32, category: 'Theory', question: 'Exp born by Firm, Paid by Partner?', answer: 'Realisation Dr. To Partner\'s Cap.' },
    { id: 33, category: 'Theory', question: 'Exp born by Partner, Paid by Firm?', answer: 'Partner\'s Cap Dr. To Bank.' },
    { id: 34, category: 'Theory', question: 'Partner paid Remuneration?', answer: 'Realisation Dr. To Partner\'s Cap.' },
    { id: 35, category: 'Theory', question: 'Remuneration includes expenses?', answer: 'If partner agreed to bear exp: Firm pays -> Dr Partner. Partner pays -> No Entry.' },
    { id: 36, category: 'Calculations', question: 'Loan payment < Book Value?', answer: 'Difference credited to Realisation A/c.' },
    { id: 37, category: 'Theory', question: 'Loan payment > Book Value?', answer: 'Difference debited to Realisation A/c.' },
    { id: 38, category: 'Theory', question: 'Bank Overdraft?', answer: 'Transferred to Realisation (or paid directly via Bank A/c).' },
    { id: 39, category: 'Theory', question: 'Profit on Realisation?', answer: 'Credited to All Partners (Profit Sharing Ratio).' },
    { id: 40, category: 'Theory', question: 'Loss on Realisation?', answer: 'Debited to All Partners.' },

    // 41-50: Advanced
    { id: 41, category: 'Calculations', question: 'Capital A/c Debit Balance?', answer: 'Partner pays cash (Bank Dr. To Cap).' },
    { id: 42, category: 'Theory', question: 'Deferred Revenue Exp?', answer: 'Debit Partners\' Capital Accounts.' },
    { id: 43, category: 'Theory', question: 'Garner vs Murray applies?', answer: 'Only in case of Insolvency of a partner.' },
    { id: 44, category: 'Theory', question: 'Are partner\'s current accounts closed?', answer: 'Yes, transferred to Capital Accounts.' },
    { id: 45, category: 'Theory', question: 'Unrecorded Liability paid?', answer: 'Realisation A/c Dr. To Bank.' },
    { id: 46, category: 'Calculations', question: 'Realisation expenses 5,000 paid?', answer: 'Realisation Dr 5,000 To Bank 5,000.' },
    { id: 47, category: 'Theory', question: 'Format of Bank A/c?', answer: 'Both sides must match automatically.' },
    { id: 48, category: 'Theory', question: 'Court dissolved firm?', answer: 'Order by Court (Section 44).' },
    { id: 49, category: 'Theory', question: 'Compulsory Dissolution?', answer: 'Insolvency of all partners or unlawful business (Sec 41).' },
    { id: 50, category: 'Theory', question: 'Notice Dissolution?', answer: 'Partnership at Will (Sec 43).' }
];

export const PARTNERSHIP_DISSOLUTION_SQPS: SQPQuestion[] = [
    {
        id: 'sqp-disso-2026-9',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '9. X, a partner was assigned to look after the dissolution process and was allowed remuneration of ₹ 15,000. Actual realisation expenses amounted to ₹ 20,000, being paid by another partner Y. By what amount Realisation account will be debited for the above-mentioned information?\nA. ₹ 20,000\nB. ₹ 35,000\nC. ₹ 5,000\nD. ₹ 15,000',
        markingScheme: 'B. ₹ 35,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Analyze the Remuneration**\n- Partner X is allowed a fixed remuneration of ₹15,000 for handling the dissolution.\n- This is an expense for the firm. \n- Entry: Realisation A/c Dr. ₹15,000 To X\'s Capital A/c ₹15,000.\n\n**Step 2: Analyze the Actual Expenses**\n- Actual expenses were ₹20,000 and were "paid by another partner Y".\n- Crucial detail: The question does *not* state that X\'s remuneration was meant to *include/bear* the realization expenses (which is a common trap). When the question is silent, the firm bears the actual realization expenses separately from the remuneration.\n- Since the firm bears them but Partner Y paid them, the firm owes Y.\n- Entry: Realisation A/c Dr. ₹20,000 To Y\'s Capital A/c ₹20,000.\n\n**Step 3: Calculate the Total Debit**\n- Total amount debited to Realisation Account = Remuneration (₹15,000) + Actual Expenses (₹20,000).\n- Total = **₹35,000**.'
    },
    {
        id: 'sqp-disso-2026-15',
        year: '2025-26',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '15. Arun, Basu and Tarun were partners sharing Profit &Loss in the ratio 5:3:2. Their firm was dissolved on March 31, 2025. On this date following assets and liabilities were appearing in their books of accounts.\nBuilding ₹ 2,00,000 ; Furniture ₹ 80,000 ; Stock ₹ 70,000 ; Goodwill ₹ 10,000 ; Debtors ₹ 40,000 ; Cash ₹ 20,000 ; Creditors ₹ 50,000 ; Arun’s Loan ₹ 60,000 ; Tarun’s Brother Loan ₹ 30,000.\nAssets realised at for ₹ 3,40,000. Determine the amount of Realisation Gain/Loss.\nA. Realisation Gain ₹ 60,000\nB. Realisation Loss ₹ 40,000\nC. Realisation Loss ₹ 60,000\nD. No Gain or Loss on Realisation',
        markingScheme: 'C. Realisation Loss ₹ 60,000',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | Arun, Basu, Tarun (5:3:2) |\n| Assets Transferred | Building 2L, Furniture 80k, Stock 70k, Goodwill 10k, Debtors 40k |\n| Cash (NOT transferred) | ₹ 20,000 |\n| Liabilities Transferred | Creditors 50k, Tarun\'s Brother Loan 30k |\n| Not Transferred | Arun\'s Loan (Partner\'s Loan) |\n| Assets Realised For | ₹ 3,40,000 |\n\n---\n\n### 💡 Key Rule: What Goes into Realisation Account?\n\n| Goes In (Dr Side) | Goes In (Cr Side) |\n|---|---|\n| All assets at **book value** (except Cash/Bank) | All **outside liabilities** at book value |\n| Cash paid for liabilities & expenses | Cash received from asset sales |\n| Profit on Realisation (if any) | Loss on Realisation (if any) |\n\n> ⚠️ **Partner\'s Loan** (Arun\'s Loan) is NOT an outside liability — it is paid separately after outside debts. Do NOT transfer it to Realisation.\n> ✅ **Tarun\'s Brother\'s Loan** is an outside liability (third party) — it MUST go to Realisation.\n\n---\n\n### 🧮 Step 1: Calculate Total Assets Debited\n\n| Asset | ₹ |\n|---|---|\n| Building | 2,00,000 |\n| Furniture | 80,000 |\n| Stock | 70,000 |\
| Goodwill | 10,000 |\
| Debtors | 40,000 |\
| **Total** | **4,00,000** |\n\n*(Cash ₹20,000 is excluded)*\n\n---\n\n### 🧮 Step 2: Calculate Total Liabilities Credited\n\n| Liability | ₹ |\n|---|---|\n| Creditors | 50,000 |\
| Tarun\'s Brother\'s Loan | 30,000 |\
| **Total** | **80,000** |\n\n*(Arun\'s Loan ₹60,000 is excluded)*\n\n---\n\n### 🧮 Step 3: Realisation Account Summary\n\n| Dr (Debits) | ₹ | Cr (Credits) | ₹ |\n|---|---|---|---|\n| Assets (Book Value) | 4,00,000 | Liabilities (Book Value) | 80,000 |\
| Cash paid to Creditors | 50,000 | Cash received from Assets | 3,40,000 |\
| Cash paid to Tarun\'s Bro | 30,000 | | |\
| **Total Debits** | **4,80,000** | **Total Credits** | **4,20,000** |\n\n```\nLoss on Realisation = Total Debits − Total Credits\n                   = 4,80,000 − 4,20,000 = ₹ 60,000 (Loss)\n```\n\n> 💡 **Exam Tip**: A simple way to find Realisation Profit/Loss: **Assets Realised − (Total Assets Transferred + Liabilities Paid − Liabilities Credited)** = \n3,40,000 − (4,00,000 + 80,000 − 80,000) = 3,40,000 − 4,00,000 = **Loss ₹60,000**.'
    },
    {
        id: 'sqp-disso-2026-18',
        year: '2025-26',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '18. Hemant and Pankaj were partners sharing Profit & Loss in the ratio of 3:2. The firm was dissolved on March 31, 2024 and the following balances were appearing in the books of the firm.\na. Hemant’s Loan ₹ 80,000\nb. Ruby’s Loan ₹ 50,000\nc. Creditors ₹ 1,00,000\nd. Capital Balances after all adjustments – Hemant ₹ 1,60,000 and Pankaj - ₹ 1,40,000\nAssets of the firm realised at ₹ 6,00,000. You are required to show the amounts and order of payments as per section 48 of Indian Partnership Act 1932 at the time of Dissolution of the firm.',
        markingScheme: 'First: - Rs.1,00,000 paid to Creditors and Rs.50,000 paid to Ruby respectively.\nSecond:- Rs.80,000 paid to Hemant next\nThird:- Capital Balances of Hemant and Pankaj Rs.1,60,000 and Rs.1,40,000 paid to partners along with Surplus of Rs.70,000 paid to partners Hemant and Pankaj as Rs.42,000 and Rs.28,000 i.e. in profit sharing ratio.',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Creditor / Claimant | Amount | Type |\n|---|---|---|\n| Creditors | ₹ 1,00,000 | Outside (Third Party) |\n| Ruby\'s Loan | ₹ 50,000 | Outside (Third Party) |\n| Hemant\'s Loan | ₹ 80,000 | Partner\'s Loan |\n| Hemant\'s Capital | ₹ 1,60,000 | Partner\'s Capital |\n| Pankaj\'s Capital | ₹ 1,40,000 | Partner\'s Capital |\n| Cash Available | ₹ 6,00,000 | (Assets Realised) |\n\n---\n\n### 💡 Section 48: Order of Payment (Priority Ladder)\n\nWhen a firm dissolves, payments are made in a strict **priority order**:\n\n| Priority | Paid To | Reason |\n|---|---|---|\n| **1st** | Third Party Debts (Creditors, Outside Loans) | Legal obligation first |\n| **2nd** | Partner\'s Loans (Advances) | Partners who lent to firm |\n| **3rd** | Partner\'s Capitals | Return of investment |\n| **4th** | Surplus (if any) | Extra profitshare |\n\n> ⚠️ **Is Ruby an outsider?** Yes! Ruby is not a partner — she is an external lender. Her loan = outside liability. **Priority 1**.\n> ✅ **Is Hemant\'s Loan a partner\'s loan?** Yes! Hemant is a partner who lent money to the firm. **Priority 2**.\n\n---\n\n### 🧮 Step-by-Step Payment Schedule\n\n**Priority 1: Third Party Debts**\n```\nPay Creditors:       ₹ 1,00,000\nPay Ruby\'s Loan:    ₹   50,000\n───────────────────────\nTotal Paid (1st):    ₹ 1,50,000\nBalance Remaining:   ₹ 4,50,000  (6L − 1.5L)\n```\n\n**Priority 2: Partner\'s Loan**\n```\nPay Hemant\'s Loan:  ₹   80,000\nBalance Remaining:   ₹ 3,70,000  (4.5L − 0.8L)\n```\n\n**Priority 3: Partner\'s Capitals**\n```\nPay Hemant Cap:      ₹ 1,60,000\nPay Pankaj Cap:      ₹ 1,40,000\n───────────────────────\nTotal Paid (3rd):    ₹ 3,00,000\nBalance Remaining:   ₹   70,000  (3.7L − 3L)\n```\n\n**Priority 4: Surplus** (Profit Sharing Ratio 3:2)\n```\nHemant: 70,000 × 3/5 = ₹ 42,000\nPankaj: 70,000 × 2/5 = ₹ 28,000\n```\n\n---\n\n### ✅ Final Summary\n\n| Priority | Paid To | Amount |\n|---|---|---|\n| 1st | Creditors | ₹ 1,00,000 |\n| 1st | Ruby\'s Loan | ₹ 50,000 |\n| 2nd | Hemant\'s Loan | ₹ 80,000 |\n| 3rd | Hemant\'s Capital | ₹ 1,60,000 |\n| 3rd | Pankaj\'s Capital | ₹ 1,40,000 |\n| 4th | Hemant (Surplus 3/5) | ₹ 42,000 |\n| 4th | Pankaj (Surplus 2/5) | ₹ 28,000 |\n| **Total** | | **₹ 6,00,000** ✓ |\n\n> 💡 **Exam Tip**: Always classify each claimant as "outsider" or "partner". A partner\'s wife, brother, or friend = outsider = Priority 1. Partner\'s Loan = Priority 2. Partner\'s Capital = Priority 3.'
    },
    {
        id: 'new-mcq-disso-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '19. On dissolution of a firm, a partner paid ₹ 700 for firm\'s realisation expenses. Which account will be debited?\n\n(A) Partner\'s Capital Account\n(B) Realisation Account\n(C) Cash Account\n(D) Partner\'s Loan Account',
        markingScheme: '(B) Realisation Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify Who Bears the Expense**\n- Unless specifically stated otherwise in the agreement, realization expenses are the responsibility of the Firm (the Firm bears them).\n\n**Step 2: Identify Who Paid the Expense**\n- The question says a partner "paid" ₹700.\n\n**Step 3: Determine the Accounting Treatment**\n- Since it\'s the firm\'s expense, it must be recorded as a loss/expense in the firm\'s books -> **Debit Realisation Account**.\n- Since the partner paid it from their private funds on behalf of the firm, the firm now owes the partner that money -> **Credit Partner\'s Capital Account**.\n- The question asks which account is debited. The answer is the Realisation Account.'
    },
    {
        id: 'new-mcq-disso-2',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '20. Unrecorded assets when taken over by a partner are shown in:\n\n(A) Credit of Realisation Account\n(B) Credit of Partner\'s Capital Account\n(C) Debit of Partner\'s Capital Account\n(D) Debit of Realisation Account',
        markingScheme: '(C) Debit of Partner\'s Capital Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Unrecorded Assets**\n- Unrecorded assets are owned by the firm but don\'t appear in the Balance Sheet. Upon dissolution, they still hold value.\n\n**Step 2: Analyze the Transaction**\n- A partner is taking home this asset. This means they are buying an asset from the dissolving firm, but instead of paying cash, the amount is deducted from their final settlement.\n\n**Step 3: Determine the Journal Entry**\n- Since the partner\'s final payout is being reduced, their capital balance decreases. We reduce capital by **Debiting the Partner\'s Capital Account**.\n- Since the firm is "selling" an asset (a source of gain/realisation), we **Credit the Realisation Account**.\n- Therefore, it is shown on the Debit side of the Partner\'s Capital Account.'
    },
    {
        id: 'new-mcq-disso-3',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '21. According to Section 48, which of the following is paid first?\n\n(A) Partner\'s Loan\n(B) Partner\'s Capital\n(C) Third Party Debts\n(D) Advances by Partners',
        markingScheme: '(C) Third Party Debts',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Recall Section 48**\n- Section 48 of the Indian Partnership Act, 1932 outlines the strict legal sequence for distributing any cash generated during the dissolution of a firm.\n\n**Step 2: Review the Hierarchy of Payments**\n- **1st Priority**: Pay off outside creditors and third-party debts entirely. (You must clear external liabilities before paying insiders).\n- **2nd Priority**: Repay any loans or advances made by the partners to the firm (distinct from Capital).\n- **3rd Priority**: Repay the partners\' Capital balances.\n- **4th Priority**: Distribute any remaining surplus in the profit-sharing ratio.\n\n**Step 3: Conclusion**\n- The very first group to be paid are the Third Party Debts.'
    },
    {
        id: 'new-mcq-disso-4',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '22. A Creditor of ₹ 10,000 accepted an unrecorded asset of ₹ 8,000 in full settlement. The entry to be passed is:\n\n(A) Realisation A/c Dr To Asset\n(B) Creditor Dr To Asset\n(C) Realisation Dr To Creditor\n(D) No Entry',
        markingScheme: '(D) No Entry',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Situation**\n- The firm owes a Creditor ₹10,000.\n- To settle this debt, the firm gives the creditor an unrecorded asset worth ₹8,000. The creditor accepts this as "full settlement".\n\n**Step 2: Apply the Golden Rule of Dissolution**\n- In dissolution accounting, when an outside liability (Creditor) is settled by giving them a firm\'s asset (recorded or unrecorded), they cancel each other out.\n- The liability is extinguished, and the asset is disposed of, without any cash exchanging hands.\n- For such direct exchanges, **no journal entry is passed** in the books. The accounts are deemed settled.'
    },
    {
        id: 'new-mcq-disso-5',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '23. On dissolution, the balance of "Profit and Loss Account" (Debit Balance) appearing on the asset side of the Balance Sheet is transferred to:\n\n(A) Debit of Realisation Account\n(B) Debit of Partners\' Capital Accounts\n(C) Credit of Realisation Account\n(D) Credit of Partners\' Capital Accounts',
        markingScheme: '(B) Debit of Partners\' Capital Accounts',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Item**\n- A "Profit and Loss Account" balance appearing on the **Asset side** of the Balance Sheet signifies accumulated past losses.\n\n**Step 2: Determine its Treatment on Dissolution**\n- Accumulated losses do not represent physical assets that can be sold or realized. Therefore, they are **never** transferred to the Realisation Account.\n- Since it is a past loss, it belongs to the partners and must be borne by them.\n\n**Step 3: Formulate the Journal Entry**\n- To wipe out the loss from the books, it is transferred directly to the partners.\n- This reduces their capital balance, so we **Debit the Partners\' Capital Accounts** in their profit-sharing ratio.'
    },
    {
        id: 'new-mcq-disso-6',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '24. A partner\'s wife\'s loan of ₹ 20,000 appearing in the Balance Sheet will be:\n\n(A) Transferred to Credit side of Realisation Account\n(B) Paid directly via Bank Account\n(C) Transferred to Partner\'s Capital Account\n(D) Not recorded',
        markingScheme: '(A) Transferred to Credit side of Realisation Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Categorize the Loan**\n- In partnership accounting, there is a strict distinction between a loan from a partner and a loan from a partner\'s relative.\n- A loan from a partner\'s wife is legally considered a loan from a completely different person. It is a **Third Party Debt (Outside Liability)**.\n\n**Step 2: Apply Dissolution Rules for Outside Liabilities**\n- All outside liabilities appearing in the Balance Sheet must first be transferred to the Realisation Account to be closed and eventually paid off.\n- Liabilities have a credit balance. To transfer and close them, we debit the Liability Account and **Credit the Realisation Account**.'
    },
    {
        id: 'new-mcq-disso-7',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '25. On dissolution, Goodwill appearing in the Balance Sheet is transferred to:\n\n(A) Debit of Realisation Account\n(B) Debit of Partners\' Capital Accounts\n(C) Credit of Realisation Account\n(D) Shown in New Balance Sheet',
        markingScheme: '(A) Debit of Realisation Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Item**\n- Goodwill appearing in the Balance Sheet represents an intangible asset owned by the firm.\n\n**Step 2: Apply the General Rule for Assets on Dissolution**\n- At the time of dissolution, ALL assets (tangible and intangible, except cash/bank and fictitious assets) must be closed off by transferring them to the Realisation Account.\n\n**Step 3: Formulate the Journal Entry**\n- Assets inherently have a debit balance.\n- To close an asset account, we must credit it.\n- The corresponding debit goes to the Realisation Account.\n- Therefore, Goodwill is transferred to the **Debit side of the Realisation Account**.'
    },
    {
        id: 'new-mcq-disso-8',
        year: '2022-23',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '26. Assertion (A): On dissolution, Bank Overdraft is transferred to Realisation Account.\nReason (R): Bank Overdraft is an outside liability.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "On dissolution, Bank Overdraft is transferred to Realisation Account."\n- A bank overdraft is money the firm owes to the bank. It is treated like any other creditor in modern CBSE guidelines. Therefore, it is transferred to the Realisation Account to be settled. This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "Bank Overdraft is an outside liability."\n- The bank is a third party, separate from the partners. Money owed to a third party is an outside liability. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- Why is the bank overdraft transferred to the Realisation Account? Because the rule states that all *outside liabilities* must be transferred there to be closed. \n- Therefore, R is the correct and logical reason for A.'
    },
    {
        id: 'new-mcq-disso-9',
        year: '2021-22',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '27. Realisation Account is a:\n\n(A) Real Account\n(B) Nominal Account\n(C) Personal Account\n(D) Suspense Account',
        markingScheme: '(B) Nominal Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Purpose of the Account**\n- The Realisation Account is prepared specifically during the dissolution of a firm to record the sale of assets and the payment of liabilities.\n- Its ultimate goal is to figure out whether this entire wrapping-up process resulted in a net **profit** or a net **loss**.\n\n**Step 2: Classify the Account Types**\n- **Real Accounts** relate to physical assets and properties (like Cash or Machinery).\n- **Personal Accounts** relate to individuals or organizations (like Debtors or Capital Accounts).\n- **Nominal Accounts** relate to expenses, losses, incomes, and gains.\n\n**Step 3: Identify the Realisation Account**\n- Because the purpose of the Realisation Account is to calculate ultimate gain or loss, it falls squarely into the category of a **Nominal Account**.'
    },
    {
        id: 'new-mcq-disso-10',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '28. Workmen Compensation Reserve is ₹ 30,000. Liability for Workmen Compensation is determined at ₹ 10,000. The amount transferred to Realisation Account is:\n\n(A) ₹ 30,000\n(B) ₹ 10,000\n(C) ₹ 20,000\n(D) Nil',
        markingScheme: '(B) ₹ 10,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Workmen Compensation Reserve (WCR)**\n- The firm has set aside ₹30,000 for potential claims by workers.\n\n**Step 2: Determine the Actual Liability**\n- The actual claim/liability that materialized is only ₹10,000.\n\n**Step 3: Apply the Accounting Rule for WCR on Dissolution**\n- Only the portion of the WCR that matches the actual liability is treated as an outside liability to be paid off. \n- Therefore, we transfer exactly the amount of the liability (**₹10,000**) to the **Credit side of the Realisation Account**.\n- *(Bonus Fact: The remaining, unused ₹20,000 of the reserve is considered free profit and is directly credited to the Partners\' Capital Accounts in their profit-sharing ratio).*'
    },
    {
        id: 'new-mcq-disso-11',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '29. If total assets are ₹ 2,00,000 and total outside liabilities are ₹ 50,000. Realisation expenses ₹ 2,000. Assets realised 90% and liabilities were paid at 5% discount. Calculate Realisation Profit/Loss.\n\n(A) Profit ₹ 24,500\n(B) Loss ₹ 24,500\n(C) Loss ₹ 19,500\n(D) Profit ₹ 19,500',
        markingScheme: '(B) Loss ₹ 24,500',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Track the Asset Values**\n- Book Value of Assets transferred (Dr. side) = ₹2,00,000.\n- Cash generated from realizing assets = 90% of 2,00,000 = ₹1,80,000.\n- Loss on realizing assets = 2,00,000 - 1,80,000 = **₹20,000 Loss**.\n\n**Step 2: Track the Liability Values**\n- Book Value of Liabilities transferred (Cr. side) = ₹50,000.\n- Cash paid to settle liabilities = 5% discount on 50,000 = 50,000 - 2,500 = ₹47,500.\n- Gain from settling liabilities for cheaper = 50,000 - 47,500 = **₹2,500 Gain**.\n\n**Step 3: Track the Expenses**\n- Realisation expenses paid = **₹7,000 Loss/Expense**.\n\n**Step 4: Calculate the Net Result**\n- Net Loss = Loss on Assets (₹20,000) + Realiation Expense (₹7,000) - Gain on Liabs (₹2,500).\n- Net Loss = 27,000 - 2,500 = **₹24,500**.\n- The result is a **Loss of ₹24,500**.'
    },
    {
        id: 'new-mcq-disso-12',
        year: '2025-26',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '30. Assertion (A): On dissolution, a partner paid a creditor ₹ 5,000 from his private funds. Realisation Account is debited.\nReason (R): It is treated as if the firm has paid the liability by taking a loan/capital from the partner.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "On dissolution, a partner paid a creditor ₹ 5,000 from his private funds. Realisation Account is debited."\n- Paying a firm\'s creditor is settling a firm\'s liability. Settiing a liability is an expense/loss recorded on the debit side of the Realisation Account. This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "It is treated as if the firm has paid the liability by taking a loan/capital from the partner."\n- Since the partner used private money to pay the firm\'s debt, the firm now owes that partner. Thus, the firm credits (increases) the Partner\'s Capital Account, treating it essentially as an advance/investment from the partner to cover the debt. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- The reason we must debit the firm\'s Realisation account AND record an obligation to the partner is exactly because we are treating it as a firm transaction facilitated by partner funding. \n- Therefore, R is the correct explanation for why we account for it this way in the firm\'s books.'
    }

];

export const CH_PARTNERSHIP_DISSOLUTION_CHAPTER: Chapter = {
    id: 'partnership-dissolution',
    title: 'Dissolution of Partnership Firm',
    theory: PARTNERSHIP_DISSOLUTION_THEORY,
    flashcards: PARTNERSHIP_DISSOLUTION_FLASHCARDS,
    sqps: PARTNERSHIP_DISSOLUTION_SQPS,
    weightage: '12 Marks',
    cheatSheet: {
        sections: [
            {
                title: 'Section 48 Order',
                items: [
                    '1. Third Party Debts',
                    '2. Partner Loans',
                    '3. Partner Capitals',
                    '4. Surplus -> PSR'
                ]
            },
            {
                title: 'Journal Rules',
                items: [
                    'Close Assets: Realisation Dr To Assets',
                    'Close Liabs: Liabs Dr To Realisation',
                    'Asset Realised: Bank Dr To Realisation',
                    'Liab Paid: Realisation Dr To Bank'
                ]
            }
        ],
        crucialRules: [
            { title: 'Asset to Creditor', content: 'No Journal Entry is passed if an asset is given to a creditor toward full or part payment.' },
            { title: 'Loan Distinction', content: 'Partner\'s Loan -> Paid Separately (Not Realisation). Relative\'s Loan (e.g., Mrs. Loan) -> Realisation A/c (Outside Liability).' },
            { title: 'Fixed Assets', content: 'Always realized at stated value. If silent, Tangible Assets -> Realised at Book Value? NO! Standard rule: Tangible -> Book Value (if silent? Check specific board rule, usually assumed realized). Intangible -> NIL (if silent).' },
            { title: 'Realisation Expenses', content: 'Firm pays, Partner bears -> Dr Partner\'s Capital. Partner pays, Firm bears -> Dr Realisation, Cr Partner.' }
        ],
        natureTable: [
            ['Basis', 'Revaluation A/c', 'Realisation A/c'],
            ['Time', 'Reconstitution (Adm/Ret/Death).', 'Dissolution of Firm.'],
            ['Purpose', 'Adjust asset/liab values.', 'Realise assets and pay liabilities.'],
            ['Result', 'Continues business with new values.', 'Closes books of accounts forever.']
        ],
        commonErrors: [
            'Forgetting that Partner\'s Wife\'s/Brother\'s Loan is an OUTSIDE Liability and must be paid via Realisation.',
            'Passing an entry when a Creditor takes over an Asset (NO ENTRY should be passed).',
            'Debiting Realisation Account for Expenses paid by a Partner on behalf of the Firm (Should credit Partner\'s Capital).',
            'Assuming Intangible Assets realize Book Value if silent (They realize NIL).'
        ]
    },
    mindMap: [
        {
            id: '1',
            title: 'Dissolution',
            colorClass: 'border-red-500 bg-red-50',
            iconName: 'AlertCircle',
            items: [
                'Firm vs Partnership',
                'Modes (Court/Notice)',
                'Settlement (Sec 48)',
                'Private/Firm Debts (Sec 49)'
            ]
        },
        {
            id: '2',
            title: 'Realisation',
            colorClass: 'border-blue-500 bg-blue-50',
            iconName: 'Scale',
            items: [
                'Close Books',
                'Realise Assets',
                'Pay Liabilities',
                'Expenses Treatment'
            ]
        },
        {
            id: '3',
            title: 'Payments',
            colorClass: 'border-green-500 bg-green-50',
            iconName: 'Calculator',
            items: [
                'Asset Taken',
                'Liability Assumed',
                'Loan Settlement',
                'Final Capital'
            ]
        },
        {
            id: '4',
            title: 'Special',
            colorClass: 'border-purple-500 bg-purple-50',
            iconName: 'Activity',
            items: [
                'Unrecorded Assets',
                'Workmen Comp Rsv',
                'Goodwill Treatment',
                'Set-off (No Entry)'
            ]
        }
    ]
};
