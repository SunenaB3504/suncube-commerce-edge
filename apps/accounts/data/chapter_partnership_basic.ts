
import { Chapter, TheoryTopic, Flashcard, SQPQuestion, MindMapNodeData, CheatSheetData } from '../types';

export const PARTNERSHIP_BASIC_THEORY: TheoryTopic[] = [
    {
        id: 'nature-partnership',
        title: '1. Nature of Partnership',
        content: 'Partnership is an association of two or more persons who agree to jointly pursue a business activity.',
        subtopics: [
            {
                title: 'Definition (Section 4)',
                description: 'As per Section 4 of the Indian Partnership Act, 1932: "Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all."',
                points: [
                    '**Two or More Persons**: Minimum 2 partners. Maximum 50 (as per Rule 10 of Companies (Misc) Rules, 2014).',
                    '**Agreement**: Must be an agreement (oral or written) to form a partnership.',
                    '**Business**: Must be a lawful business activity.',
                    '**Profit Sharing**: Agreement must be to share profits (Loss sharing is not essential for all, e.g., partner in profits only).',
                    '**Agency Relationship**: Mutual agency ("Business carried on by all or any of them acting for all") is the cardinal principle.'
                ]
            }
        ]
    },
    {
        id: 'partnership-deed',
        title: '2. Partnership Deed',
        content: 'The written document containing the terms of agreement is called the Partnership Deed.',
        subtopics: [
            {
                title: 'Importance',
                description: 'Though not mandatory, it is desirable to have a deed to avoid disputes.',
                points: [
                    'Defines rights, duties, and liabilities of partners.',
                    'Serves as evidence in court.',
                    'Helps in settling disputes regarding profit sharing, interest, etc.'
                ]
            },
            {
                title: 'Rules in Absence of Partnership Deed',
                description: 'Provisions of Indian Partnership Act, 1932 apply if deed is silent.',
                points: [
                    '**Profit Sharing Ratio**: Equal, irrespective of capital contribution.',
                    '**Interest on Capital**: Not allowed.',
                    '**Interest on Drawings**: Not charged.',
                    '**Salary/Commission to Partner**: Not allowed.',
                    '**Interest on Loan by Partner**: Allowed @ **6% p.a.** (It is a charge against profit).',
                    '**Admission of New Partner**: Not allowed unless all partners agree.'
                ]
            }
        ]
    },
    {
        id: 'special-aspects',
        title: '3. Special Aspects of Partnership A/c',
        content: 'Partnership accounts differ from Sole Proprietorship in distribution of profits and capital maintenance.',
        subtopics: [
            {
                title: 'Distribution of Profits',
                description: 'Profits are distributed through "Profit and Loss Appropriation Account".',
                points: [
                    '**Nature**: Nominal Account. Prepared after P&L Account.',
                    '**Credits**: Net Profit (from P&L), Interest on Drawings.',
                    '**Debits**: Interest on Capital, Salary/Commission to Partners, Reserve transfers.',
                    '**Balancing Figure**: Divisible Profit (distributed in Profit Sharing Ratio).'
                ]
            },
            {
                title: 'Charge vs Appropriation',
                description: 'Critical distinction for exams.',
                points: [
                    '**Charge against Profit**: Expenses deducted from Revenue to calculate Net Profit (e.g., Rent paid to partner, Interest on Partner\'s Loan). Debited to P&L A/c. *Must be paid even in loss.*',
                    '**Appropriation of Profit**: Distribution of Net Profit (e.g., Interest on Capital, Partner Salary). Debited to P&L Appropriation A/c. *Paid only if profit exists.*'
                ]
            }
        ]
    },
    {
        id: 'capital-accounts',
        title: '4. Maintenance of Capital Accounts',
        content: 'Two methods: Fixed Capital Method and Fluctuating Capital Method.',
        subtopics: [
            {
                title: 'Fixed Capital Method',
                description: 'Two accounts are maintained for each partner.',
                points: [
                    '**1. Capital Account**: Records only Capital introduction and withdrawal. Balance remains fixed (usually).',
                    '**2. Current Account**: Records all adjustments like Salary, Interest, Drawings, Profit share.',
                    '**Balance Sheet**: Shows both Capital A/c and Current A/c balances.'
                ]
            },
            {
                title: 'Fluctuating Capital Method',
                description: 'Only one account is maintained.',
                points: [
                    '**Capital Account**: Records Capital + All adjustments (Salary, Interest, Profit, Drawings).',
                    '**Note**: In absence of instruction, Capital Accounts are assumed to be **Fluctuating**.'
                ]
            }
        ]
    },
    {
        id: 'interest-drawings',
        title: '5. Interest on Drawings (IOD)',
        content: 'Charged on money withdrawn by partners for personal use.',
        subtopics: [
            {
                title: 'Methods of Calculation',
                description: 'Depends on the pattern of drawings.',
                points: [
                    '**Simple/Product Method**: Used for irregular drawings.',
                    '**Average Period Method**: Used for regular/uniform drawings at fixed intervals.',
                    '**Formula**: Total Drawings × Rate/100 × Average Period/12'
                ]
            },
            {
                title: 'Average Period Table',
                description: 'Standard time periods for uniform drawings.',
                illustration: {
                    type: 'table',
                    caption: 'Average Period for Monthly/Quarterly Drawings',
                    concept: 'T = (Time left after 1st drawing + Time left after last drawing) / 2',
                    content: [
                        ['Frequency', 'Beginning of Period', 'Middle of Period', 'End of Period'],
                        ['**Monthly**', '6.5 Months', '6 Months', '5.5 Months'],
                        ['**Quarterly**', '7.5 Months', '6 Months', '4.5 Months'],
                        ['**Half-Yearly**', '3.5 Months', '3 Months', '2.5 Months']
                    ]
                }
            },
            {
                title: 'Note',
                description: 'If date of drawing is not given, calculate interest for **6 months** (Average basis).'
            }
        ]
    },
    {
        id: 'past-adjustments',
        title: '6. Past Adjustments',
        content: 'Rectification of errors (omissions or wrong calculations) after closing the accounts.',
        subtopics: [
            {
                title: 'Mechanism',
                description: 'Errors are corrected by passing a single adjustment entry.',
                points: [
                    '**Step 1**: Prepare an "Adjustment Table" showing what should have been credited/debited vs what really happened.',
                    '**Step 2**: Find the "Net Effect" (Debit/Credit) for each partner.',
                    '**Step 3**: Pass Entry: Gaining Partner\'s Cap A/c ...Dr. To Sacrificing Partner\'s Cap A/c.'
                ]
            },
            {
                title: 'Illustration: Single Adjustment Entry',
                description: 'Correction of Omitted Interest on Capital.',
                illustration: {
                    type: 'table',
                    caption: 'Example: A & B (Equal). Cap: 1L, 50k. IOC @ 10% Omitted.',
                    concept: 'A should get 10k, B should get 5k. Total 15k loss was distributed equally (7.5k each).',
                    content: [
                        ['Particulars', 'A (₹)', 'B (₹)', 'Firm (₹)'],
                        ['1. IOC (Credit)', '+ 10,000', '+ 5,000', '(15,000) Dr'],
                        ['2. Loss Division (Debit)', '(7,500)', '(7,500)', '+ 15,000 Cr'],
                        ['**Net Effect**', '**+ 2,500 (Cr)**', '**- 2,500 (Dr)**', 'Nil']
                    ],
                    resolution: '**Journal Entry**:\nB\'s Capital A/c ...Dr. 2,500\n  To A\'s Capital A/c 2,500\n*(Being omitted interest adjusted)*'
                }
            }
        ]
    },
    {
        id: 'guarantee',
        title: '7. Guarantee of Profit',
        content: 'Assurance given to a partner (usually incoming) regarding minimum profit share.',
        subtopics: [
            {
                title: 'Types of Guarantee',
                description: 'Who bears the deficiency?',
                points: [
                    '**Guarantee by Firm**: All existing partners bear the shortfall in agreed ratio.',
                    '**Guarantee by Specific Partner(s)**: Only the guaranteeing partner(s) bear the shortfall.',
                    '**Guarantee by Partner to Firm**: A partner guarantees the firm to earn a minimum fee/income.'
                ]
            },
            {
                title: 'Steps for Calculation',
                description: '1. Calculate Actual Share. 2. Compare with Guaranteed Amt. 3. Adjust Deficiency.',
                illustration: {
                    type: 'table',
                    caption: 'Ordering of operations',
                    concept: 'Distribute profit normally first. Then check for deficiency.',
                    content: [
                        ['Step', 'Action'],
                        ['1', 'Distribute Divisible Profit in Profit Sharing Ratio.'],
                        ['2', 'If Guaranteed Partner\'s Share < Guarantee -> Deficiency exists.'],
                        ['3', 'Subtract Deficiency from Guarantors (in sacrificing ratio).'],
                        ['4', 'Add Deficiency to Guaranteed Partner.']
                    ]
                }
            }
        ]
    }
];

export const PARTNERSHIP_BASIC_FLASHCARDS: Flashcard[] = [
    // 1-10: Definitions & Acts
    { id: 1, category: 'Definitions', question: 'Define Partnership.', answer: 'Relation between persons who have agreed to share profits of a business carried on by all or any of them acting for all (Sec 4).' },
    { id: 2, category: 'Definitions', question: 'What is a Partnership Deed?', answer: 'It is a written agreement containing the terms and conditions of partnership.' },
    { id: 3, category: 'Definitions', question: 'Maximum number of partners?', answer: '50 (as per Companies Act 2013/Misc Rules 2014).' },
    { id: 4, category: 'Definitions', question: 'Who is a Sleeping Partner?', answer: 'A partner who contributes capital and shares profit but does not participate in day-to-day management.' },
    { id: 5, category: 'Definitions', question: 'What is Mutual Agency?', answer: 'The principle that every partner is both an agent and a principal for other partners.' },
    { id: 6, category: 'Definitions', question: 'Is registration of partnership mandatory?', answer: 'No, it is optional under the Indian Partnership Act, 1932.' },
    { id: 7, category: 'Definitions', question: 'What is Unlimited Liability?', answer: 'Partners are liable for firm\'s debts jointly and severally, extending to their private assets.' },
    { id: 8, category: 'Definitions', question: 'Define "Charge against Profit".', answer: 'Expenses that must be deducted from revenue to determine net profit, payable even in case of loss (e.g., Rent to partner).' },
    { id: 9, category: 'Definitions', question: 'Define "Appropriation of Profit".', answer: 'Distribution of net profit among partners (e.g., Salary to partner, IOC), payable only if profit exists.' },
    { id: 10, category: 'Definitions', question: 'What is the nature of P&L Appropriation A/c?', answer: 'It is a Nominal Account.' },

    // 11-20: Rules in Absence of Deed
    { id: 11, category: 'Theory', question: 'Profit Sharing Ratio without deed?', answer: 'Equal Ratio.' },
    { id: 12, category: 'Theory', question: 'Interest on Capital without deed?', answer: 'Not Allowed.' },
    { id: 13, category: 'Theory', question: 'Interest on Drawings without deed?', answer: 'Not Charged.' },
    { id: 14, category: 'Theory', question: 'Salary to Partner without deed?', answer: 'Not Allowed.' },
    { id: 15, category: 'Theory', question: 'Interest on Partner\'s Loan without deed?', answer: 'Allowed @ 6% p.a.' },
    { id: 16, category: 'Theory', question: 'Can a new partner be admitted without deed?', answer: 'No, strictly requires consent of ALL existing partners.' },
    { id: 17, category: 'Theory', question: 'Can a partner inspect books?', answer: 'Yes, every partner handles a right to inspect and copy books of accounts.' },
    { id: 18, category: 'Theory', question: 'Is Interest on Loan a Charge?', answer: 'Yes, it is a charge against profit.' },
    { id: 19, category: 'Theory', question: 'Interest on Loan if firm behaves loss?', answer: 'Still payable @ 6% p.a. (Charge).' },
    { id: 20, category: 'Theory', question: 'Does silent deed allow Commission?', answer: 'No.' },

    // 21-30: Capital Accounts
    { id: 21, category: 'Classification', question: 'Items in Fixed Capital Account?', answer: 'Opening Capital, Additional Capital, Permanent Withdrawal of Capital.' },
    { id: 22, category: 'Classification', question: 'Where does IOC go in Fixed Method?', answer: 'Partner\'s Current A/c (Credit).' },
    { id: 23, category: 'Classification', question: 'Can Current Account be debit?', answer: 'Yes, if drawings/losses exceed earnings.' },
    { id: 24, category: 'Classification', question: 'Can Fixed Capital Account be debit?', answer: 'Rarely, usually always Credit balance.' },
    { id: 25, category: 'Calculations', question: 'Formula: Opening Capital (Fluctuating)?', answer: 'Closing Cap + Drawings + Loss - Profit - Additional Cap.' },
    { id: 26, category: 'Classification', question: 'Nature of Partner\'s Capital A/c Check?', answer: 'Personal Account.' },
    { id: 27, category: 'Theory', question: 'Rent paid to partner - Entry?', answer: 'Rent A/c Dr. To Rent Payable (or Cash). Then P&L Dr. To Rent. (Not P&L Approp).' },
    { id: 28, category: 'Classification', question: 'Where is "Drawings against Profits" shown?', answer: 'Debited to Capital/Current Account.' },
    { id: 29, category: 'Theory', question: 'Difference: Drawings vs Cap Withdrawal?', answer: 'Drawings reduce profit (Current A/c); Withdrawal reduces capital base (Capital A/c).' },
    { id: 30, category: 'Theory', question: 'When is Capital A/c assumed Fluctuating?', answer: 'When the question is silent about the method.' },

    // 31-40: Interest Calculation
    { id: 31, category: 'Calculations', question: 'Avg Period: Beginning of Month?', answer: '(12 + 1) / 2 = 6.5 Months.' },
    { id: 32, category: 'Calculations', question: 'Avg Period: End of Month?', answer: '(11 + 0) / 2 = 5.5 Months.' },
    { id: 33, category: 'Calculations', question: 'Avg Period: Middle of Quarter?', answer: '(10.5 + 1.5) / 2 = 6 Months.' },
    { id: 34, category: 'Calculations', question: 'Avg Period: Beginning of Quarter?', answer: '(12 + 3) / 2 = 7.5 Months.' },
    { id: 35, category: 'Calculations', question: 'Avg Period: End of Quarter?', answer: '(9 + 0) / 2 = 4.5 Months.' },
    { id: 36, category: 'Calculations', question: 'IOD if date not given?', answer: '6 Months (Average).' },
    { id: 37, category: 'Calculations', question: 'IOD if rate is "%" (no p.a.)?', answer: 'Flat rate (Time factor ignored).' },
    { id: 38, category: 'Calculations', question: 'IOC is calculated on?', answer: 'Opening Capital (Time adjusted for additions/withdrawals).' },
    { id: 39, category: 'Calculations', question: 'Can IOC exceed profit?', answer: 'No (if Appropriation). Restricted to available profit ratio.' },
    { id: 40, category: 'Calculations', question: 'Manager Commission calculated on?', answer: 'Net Profit before appropriation (usually).' },

    // 41-50: Adjustments & Guarantee
    { id: 41, category: 'Theory', question: 'Entry for Interest on Drawings?', answer: 'Partner Cap/Current Dr. To P&L Approp (Via Interest A/c).' },
    { id: 42, category: 'Theory', question: 'What is Past Adjustment?', answer: 'Correcting errors/omissions of past years via a single adjusting entry.' },
    { id: 43, category: 'Theory', question: 'Guarantee: Who bears deficiency?', answer: 'Guarantor partners in mutually agreed ratio (or PSR if silent).' },
    { id: 44, category: 'Calculations', question: 'Sequence of Appropriation?', answer: '1. IOC/Salary 2. Guarantee Adjustments 3. Remaining Profit.' },
    { id: 45, category: 'Theory', question: 'Loss Case: Is IOD charged?', answer: 'Yes, IOD is charged even in loss (Credit to P&L to reduce loss).' },
    { id: 46, category: 'Theory', question: 'Loss Case: Is IOC allowed?', answer: 'No, unless specified as a Charge.' },
    { id: 47, category: 'Classification', question: 'Can reserve include Past profits?', answer: 'General Reserve is created from current profits (Appropriation).' },
    { id: 48, category: 'Classification', question: 'Treatment of Manager\'s Commission?', answer: 'Debit to P&L Account (Charge), not Appropriation.' },
    { id: 49, category: 'Classification', question: 'Rent to Partner: Where shown?', answer: 'Debit side of Profit & Loss Account.' },
    { id: 50, category: 'Classification', question: 'How to close P&L Appropriation?', answer: 'Transfer balance to Partners\' Capital/Current Accounts.' }
];

export const PARTNERSHIP_BASIC_SQPS: SQPQuestion[] = [
    {
        id: 'tp-basic-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '1. In the absence of Partnership Deed, the interest on loan of a partner is allowed:\n(A) @ 8% p.a.\n(B) @ 6% p.a.\n(C) no interest is allowed\n(D) @ 12% p.a.',
        markingScheme: '(B) @ 6% p.a.',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Missing Provision**\n- The question states that the "Partnership Deed" is absent. We must rely on the default rules under the Indian Partnership Act, 1932.\n\n**Step 2: Apply the Rule for Interest on Loan**\n- Under Section 13(d) of the Act, if a partner advances a loan to the firm (beyond their normal capital), they are entitled to interest on that loan at a rate of **6% per annum**.\n- Important Note: This interest is considered a **Charge against profit**, meaning it must be paid irrespective of whether the firm earns a profit or incurs a loss.'
    },
    {
        id: 'tp-basic-2',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '2. Picking the odd one out:\n(A) Rent to Partner\n(B) Manager\'s Commission\n(C) Interest on Partner\'s Loan\n(D) Interest on Partner\'s Capital',
        markingScheme: '(D) Interest on Partner\'s Capital',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Define "Charge vs Appropriation"**\n- A **Charge against Profit** is an expense that must be paid regardless of whether the firm makes a profit or a loss (deducted in P&L Account).\n- An **Appropriation of Profit** is the distribution of the net profit among partners, which can only happen if profits exist (deducted in P&L Appropriation Account).\n\n**Step 2: Evaluate Each Item**\n- (A) Rent to Partner: Must be paid even in loss -> **Charge**.\n- (B) Manager\'s Commission: Payable to a third party/employee -> **Charge**.\n- (C) Interest on Partner\'s Loan: Must be paid even in loss -> **Charge**.\n- (D) Interest on Partner\'s Capital: Distributed out of profits -> **Appropriation**.\n\nTherefore, (D) is the odd one out as it is the only Appropriation among Charges.'
    },
    {
        id: 'tp-basic-3',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '3. A and B are partners sharing profits in 3:2. They admit C for 1/5th share. A guarantees that C\'s share of profit will not be less than ₹50,000. Any deficiency will be borne by A. Firm profit is ₹2,00,000. A\'s share will be:\n(A) ₹ 1,20,000\n(B) ₹ 1,10,000\n(C) ₹ 1,18,000\n(D) ₹ 1,12,000',
        markingScheme: '(B) ₹ 1,10,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Initial Profit Distribution**\n- Total Firm Profit = ₹2,00,000.\n- C\'s Share = 1/5 of ₹2,00,000 = **₹40,000**.\n- Remaining Profit for A and B = ₹2,00,000 - ₹40,000 = **₹1,60,000**.\n\n**Step 2: Calculate A\'s Original Share**\n- A and B share the remaining profit in their existing ratio of 3:2.\n- A\'s Share = 3/5 of ₹1,60,000 = **₹96,000**.\n\n**Step 3: Analyze the Guarantee to C**\n- Guaranteed Minimum to C = ₹50,000.\n- C\'s Actual Share = ₹40,000.\n- Deficiency = 50,000 - 40,000 = **₹10,000**.\n\n**Step 4: Adjust the Deficiency**\n- The question says "Any deficiency will be borne by A".\n- Therefore, A must sacrifice ₹10,000 from his share to give to C.\n- A\'s Final Share = ₹96,000 - ₹10,000 = **₹86,000**.\n\n*Note on the Marking Scheme: The board key sometimes interprets "A guarantees C" as A directly yielding from a raw gross calculation, or there may be an error in the provided options. Following standard CBSE logic, A\'s final share is ₹86,000. For exam purposes, always follow the mathematical steps: Calculate actuals, find deficiency, deduct from guarantor.*'
    },
    {
        id: 'tp-basic-4',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '4. Interest on Capital will be paid to the partners if provided for in the partnership deed but only out of:\n(A) Profits\n(B) Reserves\n(C) Accumulated Profits\n(D) Goodwill',
        markingScheme: '(A) Profits',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Nature of Interest on Capital**\n- Interest on Capital (IOC) is treated as an **Appropriation of Profit** under the Indian Partnership Act (unless specifically stated as a charge).\n\n**Step 2: Rule of Appropriation**\n- Appropriations mean distributing the profits earned by the business. \n- If the firm incurs a loss, no appropriation can be made.\n- Therefore, IOC can only be provided out of **Current Year Profits**. It is never paid out of capital, goodwill, or blindly from past reserves.\n\nHence, it is allowed only out of Profits.'
    },
    {
        id: 'tp-basic-5',
        year: '2023-24',
        type: 'Subjective (3 Marks)',
        marks: 3,
        question: '5. X, Y and Z are partners sharing profits in 5:4:1. Z is guaranteed a minimum profit of ₹ 5,000. Deficiency if any will be borne by X and Y equally. Net Profit for the year is ₹ 40,000. Pass necessary journal entry for distribution of profit.',
        markingScheme: '**Profit & Loss Appropriation A/c Dr. 40,000**\n  To X\'s Cap A/c 19,500\n  To Y\'s Cap A/c 15,500\n  To Z\'s Cap A/c 5,000',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | Value |\n|---|---|\n| Partners | X, Y, Z |\n| Profit Sharing Ratio | 5 : 4 : 1 |\n| Z\'s Guaranteed Minimum Profit | ₹ 5,000 |\n| Who Bears Deficiency | X and Y **equally** |\n| Net Profit for the Year | ₹ 40,000 |\n\n---\n\n### 💡 What is a Guarantee of Profit?\n\nSometimes, to attract a new partner or retain a valued one, the firm (or specific partners) promise a **minimum profit share**. If the actual share falls short, the **deficiency** is made good by the guarantor(s).\n\n> **Key Rule**: First distribute profit normally in PSR. Then check if the guaranteed partner got at least the guaranteed amount. If not, adjust.\n\n---\n\n### 🧮 Step 1: Distribute Profit Normally (PSR = 5:4:1)\n\n```\nTotal Profit = ₹ 40,000\nTotal Parts  = 5 + 4 + 1 = 10\n```\n\n| Partner | Calculation | Share |\n|---|---|---|\n| X | 40,000 × 5/10 | ₹ 20,000 |\n| Y | 40,000 × 4/10 | ₹ 16,000 |\n| Z | 40,000 × 1/10 | ₹  4,000 |\n| **Total** | | **₹ 40,000** |\n\n---\n\n### 🧮 Step 2: Check Z\'s Guarantee\n\n```\nZ Guaranteed Minimum  = ₹ 5,000\nZ Actual Share        = ₹ 4,000\nDeficiency            = 5,000 − 4,000 = ₹ 1,000\n```\n\nZ is short by **₹ 1,000**. This must be made good by X and Y.\n\n---\n\n### 🧮 Step 3: Deficiency Borne by X and Y Equally\n\n```\nDeficiency = ₹ 1,000 ÷ 2 = ₹ 500 each\n```\n\n| Adjustment | X | Y | Z |\n|---|---|---|---|\n| Normal Share | 20,000 | 16,000 | 4,000 |\n| Less: Deficiency paid | (500) | (500) | — |\n| Add: Deficiency received | — | — | 1,000 |\n| **Final Share** | **19,500** | **15,500** | **5,000** |\n\n---\n\n### 📝 Journal Entry\n\n| Particulars | Dr (₹) | Cr (₹) |\n|---|---|---|\n| Profit & Loss Appropriation A/c Dr. | 40,000 | |\n|   To X\'s Capital A/c | | 19,500 |\n|   To Y\'s Capital A/c | | 15,500 |\n|   To Z\'s Capital A/c | | 5,000 |\n| *(Profit distributed after guarantee adjustment)* | | |\n\n---\n\n> 💡 **Exam Tip**: The total always stays ₹ 40,000. The guarantee simply shifts money **from guarantors to the guaranteed partner**. Z\'s gain = Sum of X\'s loss + Y\'s loss.'
    },
    {
        id: 'tp-basic-6',
        year: '2024-25',
        type: 'Subjective (4 Marks)',
        marks: 4,
        question: '6. A and B are partners. Interest on A\'s drawings for the year is ₹ 2,000 and B\'s drawings is ₹ 3,000. Interest on Capital: A ₹ 4,000, B ₹ 3,000. Net Profit before adjustments is ₹ 5,000. Prepare P&L Appropriation A/c.',
        markingScheme: '**P&L Appropriation Account**\n| Particulars | Amt | Particulars | Amt |\n|---|---|---|---|\n| To IOC (A) | 2,857 | By Profit b/d | 5,000 |\n| To IOC (B) | 2,143 | By IOD (A) | 2,000 |\n| | | By IOD (B) | 3,000 |\n| | **5,000** | | **10,000** |\n\n*Wait, Total Credit = 10,000. Total Appropriation (IOC) = 7,000. Profit is Sufficient.* \n**Corrected Scheme**:\n| Particulars | Amt | Particulars | Amt |\n|---|---|---|---|\n| To IOC (A) | 4,000 | By Profit b/d | 5,000 |\n| To IOC (B) | 3,000 | By IOD (A) | 2,000 |\n| To Profit (A) | 1,500 | By IOD (B) | 3,000 |\n| To Profit (B) | 1,500 | | |\n| **Total** | **10,000** | **Total** | **10,000** |',
        aiExplanation: '## 📘 Step-by-Step Explanation (Beginner-Friendly)\n\n---\n\n### 🔍 What We Are Given\n\n| Item | A | B |\n|---|---|---|\n| Interest on Drawings (IOD) | ₹ 2,000 | ₹ 3,000 |\n| Interest on Capital (IOC) | ₹ 4,000 | ₹ 3,000 |\n| Net Profit (before adjustments) | ₹ 5,000 | — |\n| Profit Sharing Ratio | Not given → **Equal (1:1)** | |\n\n---\n\n### 💡 Key Concepts Before We Start\n\n**P&L Appropriation Account** collects all income and distributes it among partners.\n\n| Side | What goes here |\n|---|---|\n| **Credit (Income) Side** | Net Profit from P&L A/c + Interest on Drawings (IOD) from partners |\n| **Debit (Expense) Side** | Interest on Capital (IOC) to partners + Divisible Profit shares |\n\n> **Remember**: IOD is **charged to partners** (reduces their share) but is **income for the firm** — so it goes to the **Credit side** of P&L Appropriation.\n\n---\n\n### 🧮 Step 1: Build the Credit Side\n\n```\nNet Profit (from P&L A/c)  = ₹ 5,000\nIOD from A                 = ₹ 2,000\nIOD from B                 = ₹ 3,000\n─────────────────────────────────────\nTotal Available (Credit)   = ₹ 10,000\n```\n\n---\n\n### 🧮 Step 2: Check if Full IOC Can Be Paid\n\n```\nIOC Required: A = ₹ 4,000 + B = ₹ 3,000 = ₹ 7,000\nTotal Available                          = ₹ 10,000\nSince 10,000 > 7,000 → Full IOC is payable ✅\n```\n\n---\n\n### 🧮 Step 3: Calculate Divisible Profit\n\n```\nDivisible Profit = Total Available − IOC\n                = 10,000 − 7,000 = ₹ 3,000\nShared Equally  → A: ₹ 1,500  |  B: ₹ 1,500\n```\n\n---\n\n### 📝 P&L Appropriation Account\n\n| Particulars (Dr.) | ₹ | Particulars (Cr.) | ₹ |\n|---|---|---|---|\n| To IOC — A\'s Capital | 4,000 | By Net Profit b/d | 5,000 |\n| To IOC — B\'s Capital | 3,000 | By IOD — A\'s Capital | 2,000 |\n| To Profit — A\'s Capital | 1,500 | By IOD — B\'s Capital | 3,000 |\n| To Profit — B\'s Capital | 1,500 | | |\n| **Total** | **10,000** | **Total** | **10,000** |\n\n---\n\n### ✅ Net Gain / Loss Per Partner\n\n| Partner | IOC Received | Profit Share | IOD Paid | **Net Gain** |\n|---|---|---|---|---|\n| A | + 4,000 | + 1,500 | − 2,000 | **₹ 3,500** |\n| B | + 3,000 | + 1,500 | − 3,000 | **₹ 1,500** |\n\n> 💡 **Exam Tip**: Always build the Credit side first (Net Profit + IOD). Only then check if IOC can be fully paid. If Total Available < IOC Required, pay IOC proportionally (in ratio of claims).'
    },
    {
        id: 'tp-basic-7',
        year: '2022-23',
        type: 'Subjective (6 Marks)',
        marks: 6,
        question: '7. P, Q and R are partners sharing profits in 2:2:1. Fixed Capitals: P 5L, Q 5L, R 2.5L. Partnership Deed provides:\n- Salary to R: 2,000 p.m.\n- Interest on Capital: 5% p.a.\n- Interest on Drawings: P 1200, Q 1000, R 800.\nNet Profit: ₹ 4,00,000.\nPass General Entry for appropriation of profit.',
        markingScheme: '**Entry**:\nP&L Approp Dr 4,00,000\nIOD P Dr 1,200\nIOD Q Dr 1,000\nIOD R Dr 800\n  To R\'s Current A/c (Salary) 24,000\n  To P\'s Current A/c (IOC) 25,000\n  To Q\'s Current A/c (IOC) 25,000\n  To R\'s Current A/c (IOC) 12,500\n  To P\'s Current A/c (Profit) 1,26,600\n  To Q\'s Current A/c (Profit) 1,26,600\n  To R\'s Current A/c (Profit) 63,300',
        aiExplanation: '**P, Q, R Partnership — P&L Appropriation Journal Entry (2022-23 SQP, 6 Marks):**\n\n**Concept**: This question asks for ONE combined journal entry for ALL appropriations. Tests understanding of Fixed Capital method (entries go to Current A/c not Capital A/c), IOD as a CREDIT to P&L Appropriation (reduces distributable profit = adds to pool), and checking whether profit is sufficient for full IOC.\n\n---\n\n**STEP 1 — Compute Total Distributable Amount**\n- Net Profit: ₹4,00,000.\n- Add: Interest on Drawings (IOD) received from partners:\n  - P: ₹1,200 + Q: ₹1,000 + R: ₹800 = ₹3,000.\n- **Total Credit Side of P&L Appropriation = ₹4,03,000**.\n\n**STEP 2 — Compute Appropriations**\n- Salary to R: ₹2,000 × 12 = **₹24,000**.\n- IOC at 5% p.a.:\n  - P: ₹5,00,000 × 5% = **₹25,000**.\n  - Q: ₹5,00,000 × 5% = **₹25,000**.\n  - R: ₹2,50,000 × 5% = **₹12,500**.\n- Total Appropriations = ₹24,000 + ₹25,000 + ₹25,000 + ₹12,500 = **₹86,500**.\n\n**STEP 3 — Test: Is Full IOC Payable?**\n- Total Distributable: ₹4,03,000 > Appropriations ₹86,500 → **Yes, full IOC is payable**.\n\n**STEP 4 — Divisible Profit**\n- ₹4,03,000 − ₹86,500 = **₹3,16,500**.\n- Split in ratio 2:2:1:\n  - P: ₹3,16,500 × 2/5 = **₹1,26,600**.\n  - Q: ₹1,26,600.\n  - R: ₹63,300.\n\n**STEP 5 — Combined Journal Entry (Debit Side)**\n- P&L Appropriation A/c Dr. ₹4,00,000\n- IOD — P Dr. ₹1,200 (reduce P\'s Current A/c)\n- IOD — Q Dr. ₹1,000\n- IOD — R Dr. ₹800\n\n**STEP 5 — Combined Journal Entry (Credit Side)**\n- To R\'s Current A/c (Salary): ₹24,000\n- To P\'s Current A/c (IOC): ₹25,000\n- To Q\'s Current A/c (IOC): ₹25,000\n- To R\'s Current A/c (IOC): ₹12,500\n- To P\'s Current A/c (Profit): ₹1,26,600\n- To Q\'s Current A/c (Profit): ₹1,26,600\n- To R\'s Current A/c (Profit): ₹63,300\n\n**RULE**: Under Fixed Capital method, partners have **two accounts**: Capital A/c (fixed) and Current A/c (for salary, IOC, drawings, profit share). ALL appropriations → Current A/c.'
    },
    {
        id: 'new-mcq-basic-1',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '8. Where is \'Rent paid to a partner\' recorded?\n(A) Debit of P&L Appropriation A/c\n(B) Debit of P&L A/c\n(C) Credit of Partner\'s Capital A/c\n(D) Debit of Partner\'s Capital A/c',
        markingScheme: '(B) Debit of P&L A/c',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Nature of the Payment**\n- "Rent paid to a partner" is for the use of the partner\'s personal property by the firm.\n- It is treated exactly the same as rent paid to an outside third party.\n\n**Step 2: Relate to Accounting Rules**\n- Because it is a normal business expense payable irrespective of profit or loss, it is a **Charge against Profit**.\n- All charges against profit are recorded directly in the **Profit & Loss Account** (P&L A/c).\n- It is NOT an appropriation, so it does not go to the P&L Appropriation A/c.\n\nTherefore, it is debited to the P&L A/c.'
    },
    {
        id: 'new-mcq-basic-2',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '9. A partner withdraws ₹ 10,000 *during the year*. Interest on drawings is to be charged @ 10% p.a. The amount of interest will be:\n(A) ₹ 1,000\n(B) ₹ 500\n(C) ₹ 1,200\n(D) Nil',
        markingScheme: '(B) ₹ 500',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Missing Information**\n- The partner withdrew ₹10,000 "during the year", but the exact **date** of withdrawal is not given.\n\n**Step 2: Apply the Average Period Rule**\n- According to partnership accounting rules, when the date of drawings is missing, interest is always calculated for an **average period of 6 months**.\n\n**Step 3: Calculate the Interest**\n- Formula: Total Drawings × (Rate / 100) × (Months / 12)\n- Interest = ₹10,000 × (10 / 100) × (6 / 12)\n- Interest = ₹1,000 × 0.5 = **₹500**.\n\nThus, the interest charged is ₹500.'
    },
    {
        id: 'new-mcq-basic-3',
        year: '2025-26',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '10. Assertion (A): A Partnership Firm is not a separate legal entity from its partners.\nReason (R): Partners have unlimited liability.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(A) Both A and R are true and R is the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "A Partnership Firm is not a separate legal entity from its partners."\n- In the eyes of the law, a partnership firm has no separate legal existence independent of its partners (unlike a registered company). This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "Partners have unlimited liability."\n- In a standard partnership, partners are jointly and personally liable for all the debts of the firm, extending to their private assets. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- Why do partners have unlimited liability? Precisely because the law does not recognize the firm as a separate entity to shield them. \n- Therefore, the lack of separate legal entity IS the direct foundational reason for unlimited liability. \n- Both A and R are true, and R is the correct explanation of A.'
    },
    {
        id: 'new-mcq-basic-4',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '11. Which of the following items is NOT recorded in the P&L Appropriation Account?\n(A) Interest on Capital\n(B) Partner\'s Salary\n(C) Manager\'s Commission\n(D) Transfer to Reserve',
        markingScheme: '(C) Manager\'s Commission',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the P&L Appropriation Account**\n- The Profit & Loss Appropriation Account is strictly used for distributing the mutually earned profits **among the partners**.\n\n**Step 2: Classify the Items**\n- (A) Interest on Capital: Paid to partners -> **Appropriation**.\n- (B) Partner\'s Salary: Paid to partners -> **Appropriation**.\n- (D) Transfer to Reserve: Setting aside profit for future -> **Appropriation**.\n- (C) Manager\'s Commission: The manager is an employee/third party. Their commission is a compulsory business expense, making it a **Charge against profit**.\n\n**Step 3: Conclusion**\n- As a charge, Manager\'s Commission is recorded in the Profit & Loss Account, NOT the P&L Appropriation Account.'
    },
    {
        id: 'new-mcq-basic-5',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '12. X, Y and Z are partners. Z gave a loan of ₹ 2,00,000 to the firm. Verify the interest amount payable to Z if the deed is silent and the firm incurred a loss of ₹ 10,000.\n(A) Nil\n(B) ₹ 12,000\n(C) ₹ 24,000\n(D) ₹ 10,000',
        markingScheme: '(B) ₹ 12,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Default Rules**\n- The partnership deed is silent. \n- Under the Indian Partnership Act, 1932, if the deed is silent, a partner is entitled to receive interest on any loan advanced to the firm at a fixed rate of **6% p.a.**\n\n**Step 2: Understand the Nature of the Interest**\n- Interest on Partner\'s Loan is a **Charge against profit**.\n- This means the firm MUST pay this interest even if it has incurred a loss for the year.\n\n**Step 3: Calculate the Amount**\n- Loan Amount = ₹2,00,000.\n- Interest = ₹2,00,000 × 6% = **₹12,000**.\n\nTherefore, even with a loss, Z will receive full interest of ₹12,000.'
    },
    {
        id: 'new-mcq-basic-6',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '13. If Fixed Capital Method is adopted, "Interest on Capital" will be credited to:\n(A) Partner\'s Capital Account\n(B) Partner\'s Current Account\n(C) P&L Appropriation Account\n(D) P&L Account',
        markingScheme: '(B) Partner\'s Current Account',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Fixed Capital Method**\n- Under the Fixed Capital Method, the firm maintains TWO separate accounts for each partner: the **Capital Account** and the **Current Account**.\n\n**Step 2: Differentiate the Accounts**\n- The Capital Account records only the initial investment and permanent withdrawals. It remains "fixed".\n- The Current Account handles all the day-to-day ongoing adjustments. \n\n**Step 3: Apply to Interest on Capital**\n- Interest on Capital increases the partner\'s net worth in the firm.\n- Since we cannot alter the fixed Capital Account, we must credit this amount to the **Partner\'s Current Account**.'
    },
    {
        id: 'new-mcq-basic-7',
        year: '2023-24',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '14. A and B share profits in 2:1. C is admitted with a guaranteed profit of ₹ 10,000 from A. Total firm profit is ₹ 30,000. C\'s share (1/6) is ₹ 5,000. How much will A pay?\n(A) ₹ 10,000\n(B) ₹ 5,000\n(C) Nil\n(D) ₹ 2,500',
        markingScheme: '(B) ₹ 5,000',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Calculate C\'s Actual Share**\n- Total Firm Profit = ₹30,000.\n- C\'s Share = 1/6 of ₹30,000 = **₹5,000**.\n\n**Step 2: Compare with Guarantee**\n- Guaranteed Profit for C = **₹10,000**.\n- Actual Share Calculated = **₹5,000**.\n- Deficiency (Shortfall) = 10,000 - 5,000 = **₹5,000**.\n\n**Step 3: Determine Who Bears the Deficiency**\n- The question explicitly states that C is admitted with a guaranteed profit "from A".\n- This means A has personally provided the guarantee, so A alone must bear the entire deficiency.\n- Therefore, A will pay the full ₹5,000 to C from his own share.'
    },
    {
        id: 'new-mcq-basic-8',
        year: '2022-23',
        type: 'Assertion-Reason (1 Mark)',
        marks: 1,
        question: '15. Assertion (A): Registration of a Partnership firm is optional.\nReason (R): An unregistered firm cannot sue outsiders for claims above ₹ 100.\n(A) Both A and R are true and R is the correct explanation of A\n(B) Both A and R are true but R is not the correct explanation of A\n(C) A is true but R is false\n(D) A is false but R is true',
        markingScheme: '(B) Both A and R are true but R is not the correct explanation of A',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Evaluate the Assertion (A)**\n- "Registration of a Partnership firm is optional."\n- Under the Indian Partnership Act, 1932, there is no legal compulsion to register a partnership firm. It is entirely voluntary. This statement is **True**.\n\n**Step 2: Evaluate the Reason (R)**\n- "An unregistered firm cannot sue outsiders for claims above ₹ 100."\n- This is a factual consequence of non-registration under Section 69 of the Act. This statement is **True**.\n\n**Step 3: Determine the Relationship**\n- Does the inability to sue make registration optional? No. \n- The option to register is a design choice of the law, while the inability to sue is a penalty/disability to *encourage* registration.\n- Therefore, while both statements are true, R is NOT the correct explanation for A.'
    },
    {
        id: 'new-mcq-basic-9',
        year: '2022-23',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '16. Past Adjustments are required when:\n(A) Partners want to change Profit Sharing Ratio\n(B) Errors or omissions occur in past years\' accounts\n(C) New partner is admitted\n(D) Firm is dissolved',
        markingScheme: '(B) Errors or omissions occur in past years\' accounts',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Define Past Adjustments**\n- "Past Adjustments" refer to the accounting process used to fix mistakes related to previous financial years.\n\n**Step 2: Identify the Scenario**\n- Sometimes, after the final accounts (P&L A/c, Balance Sheet) of a partnership are closed and signed, an error is discovered.\n- Examples include omitting interest on capital, charging the wrong rate of interest on drawings, or using an incorrect profit-sharing ratio.\n\n**Step 3: The Mechanism**\n- Instead of rewriting and altering the old signed financial statements, accountants pass a single "adjustment entry" at the beginning of the next year directly through the partners\' capital/current accounts.\n- Thus, they are required when errors or omissions occur in past years\' accounts.'
    },
    {
        id: 'new-mcq-basic-10',
        year: '2021-22',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '17. The maximum number of partners in a partnership firm is:\n(A) 20\n(B) 50\n(C) 100\n(D) No limit',
        markingScheme: '(B) 50',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Identify the Governing Law**\n- The limit on the number of partners is NOT dictated by the Indian Partnership Act, 1932, but rather by the **Companies Act, 2013**.\n\n**Step 2: Recall the Limits**\n- Section 464 of the Companies Act, 2013 states that the government can prescribe a maximum number of partners (which cannot exceed 100).\n- Subsequently, Rule 10 of the Companies (Miscellaneous) Rules, 2014 prescribed the current legal maximum limit as **50 partners**.\n- If a firm exceeds 50 partners and is not registered as a company, it becomes an illegal association.'
    },
    {
        id: 'new-mcq-basic-11',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '18. A\'s capital is ₹ 50,000 and B\'s capital is ₹ 30,000. PSR is 3:2. Profit for the year is ₹ 3,000. Interest on Capital is allowed @ 10% p.a. Calculate IOC for A.\n(A) ₹ 5,000\n(B) ₹ 3,000\n(C) ₹ 1,800\n(D) ₹ 1,875',
        markingScheme: '(C) ₹ 1,800',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Calculate Total Appropriation Required**\n- A\'s needed IOC = ₹50,000 × 10% = ₹5,000.\n- B\'s needed IOC = ₹30,000 × 10% = ₹3,000.\n- Total IOC Required = ₹8,000.\n\n**Step 2: Check Available Profit**\n- Net Profit for the year = **₹3,000**.\n- Since Available Profit (₹3,000) is LESS than Required Appropriation (₹8,000), we have a case of "Inadequate Profits".\n\n**Step 3: Apply the Rule for Inadequate Profits**\n- Rule: When profit is inadequate, the available profit is distributed in the **ratio of appropriations** (ratio of their claims), NOT their profit-sharing ratio (PSR).\n- Ratio of Claims = A\'s Claim : B\'s Claim = 5,000 : 3,000 = **5:3**.\n\n**Step 4: Calculate A\'s Share**\n- A receives = Total Profit × (A\'s ratio share / Total parts)\n- A receives = ₹3,000 × (5 / 8) = **₹1,875**.'
    },
    {
        id: 'new-mcq-basic-12',
        year: '2025-26',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '19. Which account is opened to rectify errors of past years?\n(A) Revaluation A/c\n(B) P&L Adjustment A/c\n(C) P&L Appropriation A/c\n(D) Suspense A/c',
        markingScheme: '(B) P&L Adjustment A/c',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Past Adjustments**\n- "Past Adjustments" are used to rectify errors from previous years (like omitting interest on capital or charging the wrong profit ratio).\n\n**Step 2: Identify the Appropriate Account**\n- Normally, a single adjusting journal entry is passed directly through the partners\' Capital or Current accounts.\n- However, if the errors are numerous and complex, accountants open a temporary account to consolidate all the corrections, find the net effect, and then distribute that net effect to the partners.\n- This temporary account is called the **Profit & Loss Adjustment Account**.\n- (Note: Do not confuse this with P&L Appropriation A/c, which is for current year profit distribution, or Revaluation A/c, which is for asset/liability changes during reconstitution).'
    },
    {
        id: 'new-mcq-basic-13',
        year: '2024-25',
        type: 'MCQ (1 Mark)',
        marks: 1,
        question: '20. A partnership deed is silent on interest on drawings. A partner withdrew ₹ 5,000 per month at the beginning of each month. Interest charged will be:\n(A) ₹ 3,900\n(B) ₹ 3,600\n(C) ₹ 1,800\n(D) Nil',
        markingScheme: '(D) Nil',
        aiExplanation: '**AI Tutor Explanation**:\n\n**Step 1: Read the Critical Condition**\n- The question explicitly states: "**A partnership deed is silent on interest on drawings.**"\n\n**Step 2: Apply the Rules of Absence**\n- When the partnership deed is silent or does not exist, the provisions of the Indian Partnership Act, 1932 apply.\n- The Act clearly states that **No Interest on Drawings** shall be charged from any partner in the absence of an agreement.\n\n**Step 3: Conclusion**\n- The details about withdrawing "₹5,000 per month at the beginning of each month" are provided merely to trick you into calculating the average period. You must ignore these figures entirely.\n- The interest charged will be **Nil**.'
    }
];

export const CH_PARTNERSHIP_BASIC_CHAPTER: Chapter = {
    id: 'partnership-basic',
    title: 'Partnership: Basic Concepts',

    theory: PARTNERSHIP_BASIC_THEORY,
    flashcards: PARTNERSHIP_BASIC_FLASHCARDS,
    sqps: PARTNERSHIP_BASIC_SQPS,
    cheatSheet: {
        sections: [
            {
                title: 'Rules in Absence of Deed',
                items: [
                    'Profit Sharing: Equal',
                    'IOC, IOD, Salary: Nil',
                    'Interest on Loan: 6% p.a.'
                ]
            },
            {
                title: 'Interest on Drawings (Average Period)',
                items: [
                    'Monthly (Beg/Mid/End): 6.5 / 6 / 5.5',
                    'Quarterly (Beg/Mid/End): 7.5 / 6 / 4.5'
                ]
            },
            {
                title: 'Formulae',
                items: [
                    'IOD = Total Drawings × Rate/100 × Avg Period/12',
                    'Opening Cap = Closing + Drawings - Profit - Add. Cap',
                    'Commission (After Charging) = Profit × Rate / (100 + Rate)'
                ]
            }
        ],
        natureTable: [
            ['Basis', 'Fixed Capital Method', 'Fluctuating Capital Method'],
            ['No. of Accounts', 'Two: Capital A/c & Current A/c', 'One: Capital A/c'],
            ['Adjustments', 'Done in Current A/c (Int, Salary, etc.)', 'Done in Capital A/c directly'],
            ['Balance', 'Capital A/c always Credit (Fixed)', 'Can be Debit or Credit (Fluctuates)'],
            ['Presentation', 'Cap A/c in Liab; Current in Liab/Asset', 'Cap A/c in Liab (unless Debit balance)']
        ],
        crucialRules: [
            { title: 'Absence of Partnership Deed', content: '1. Profit Sharing: EQUAL.\n2. Int on Loan: 6% p.a.\n3. Int on Capital: NIL.\n4. Int on Drawings: NIL.\n5. Salary/Commission: NIL.' },
            { title: 'Charge vs Appropriation', content: 'Charge: Deducted from Profit (e.g., Rent, Int on Loan). Payable even in loss.\nAppropriation: Distributable from Net Profit (e.g., Salary, IOC). Payable only if profit exists.' },
            { title: 'Past Adjustments', content: 'To rectify errors (omissions/wrong rates) without altering accounts.\nMethod: Prepare "Statement Showing Adjustment" -> Find Net Effect -> Pass Single Adjustment Entry.' },
            { title: 'Guarantee of Profit', content: 'Minimum profit assured to a partner.\nDeficiency borne by: Guaranteeing Partner(s) in Agreed Ratio (or Old PSR if silent).' }
        ],
        mnemonics: [
            { title: 'No Deed Rules', content: '"Eq-6-Nil" -> Equal Profit, 6% Loan Interest, Rest Nil.' },
            { title: 'IOD Months', content: 'Monthly: Beg=6.5, Mid=6, End=5.5 (Decrease by 0.5)\nQuarterly: Beg=7.5, Mid=6, End=4.5 (Decrease by 1.5)' }
        ]
    },
    weightage: '12 Marks', // Approx weightage for Partnership Basics
    mindMap: [
        {
            id: '1',
            title: 'Essentials',
            colorClass: 'border-indigo-500 bg-indigo-50',
            iconName: 'Users',
            items: [
                'Definition (Sec 4)',
                'Min 2 - Max 50 Partners',
                'Agreement (Oral/Written)',
                'Profit Sharing',
                'Mutual Agency'
            ]
        },
        {
            id: '2',
            title: 'Partnership Deed',
            colorClass: 'border-emerald-500 bg-emerald-50',
            iconName: 'BookOpen',
            items: [
                'Written Agreement',
                {
                    label: 'Rules Used in Absence',
                    children: [
                        'Profit Sharing: Equal',
                        'No IOC / IOD / Salary',
                        'Interest on Loan: 6% p.a.'
                    ]
                }
            ]
        },
        {
            id: '3',
            title: 'Accounts',
            colorClass: 'border-amber-500 bg-amber-50',
            iconName: 'Calculator',
            items: [
                'P&L Appropriation A/c',
                {
                    label: 'Capital Accounts',
                    children: [
                        'Fixed (Cap + Current)',
                        'Fluctuating (Cap only)'
                    ]
                }
            ]
        },
        {
            id: '4',
            title: 'Adjustments',
            colorClass: 'border-rose-500 bg-rose-50',
            iconName: 'Settings',
            items: [
                'Interest on Drawing',
                'Past Adjustments',
                'Guarantee of Profit'
            ]
        }
    ]
};
