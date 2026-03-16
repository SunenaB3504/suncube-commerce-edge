import { MCQ } from './mcq_store';

export const TEST_MCQS: MCQ[] = [
    {
        id: 'test-1',
        question: 'What is the minimum number of members required to form a private company?',
        options: ['2', '7', '50', '200'],
        correctOption: '(A) 2',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Types of Companies**\n- The Companies Act classifies companies primarily into Private Companies, Public Companies, and One Person Companies (OPCs).\n\n**Step 2: Recall the Minimum Member Requirements**\n- **One Person Company (OPC)**: Requires exactly 1 member.\n- **Private Company**: Requires a minimum of 2 members.\n- **Public Company**: Requires a minimum of 7 members.\n\n**Conclusion**: As per Section 3(1)(b) of the Companies Act, 2013, the minimum number of members required to form a private company is 2. Therefore, (A) is correct.',
        chapterId: 'ch1',
        chapterTitle: 'Accounting for Share Capital'
    },
    {
        id: 'test-2',
        chapterId: 'ch1',
        chapterTitle: 'Accounting for Share Capital',
        question: 'Securities Premium Reserve can be used for:',
        options: [
            'Paying dividend',
            'Writing off preliminary expenses',
            'Meeting day to day expenses',
            'Redemption of debentures'
        ],
        correctOption: '(B) Writing off preliminary expenses',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Securities Premium Reserve (SPR)**\n- SPR is the extra amount received by a company over and above the face value of its shares.\n- It is a restricted reserve, meaning the law strictly dictates how it can be used.\n\n**Step 2: Recall Section 52(2) Restrictions**\nAccording to the Companies Act, 2013, SPR can ONLY be used for 5 specific purposes:\n1. Issuing fully paid bonus shares.\n2. **Writing off preliminary expenses**.\n3. Writing off the expenses/commission/discount on issue of shares or debentures.\n4. Providing for the premium payable on redemption of redeemable preference shares or debentures.\n5. Buy-back of its own shares.\n\n**Conclusion**: It cannot be used for paying dividends or day-to-day expenses. Thus, (B) is the correct answer.',
    },
    {
        id: 'test-3',
        chapterId: 'ch2',
        chapterTitle: 'Issue of Debentures',
        question: 'Debentures issued as collateral security are shown in the Balance Sheet under:',
        options: [
            'Current Liabilities',
            'Reserves and Surplus',
            'Non-Current Liabilities',
            'Contingent Liabilities (Footnote)'
        ],
        correctOption: '(C) Non-Current Liabilities',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Collateral Security**\n- A collateral security is a secondary or additional security given to a lender alongside the primary security.\n\n**Step 2: Determine Board Presentation Rules**\n- When a company issues its own debentures as collateral, it hasn\'t actually taken a new loan from those debentures; it has just pledged them.\n- As per the format of the Balance Sheet prescribed in Schedule III of the Companies Act, 2013, debentures (whether primary or collateral) represent long-term debt.\n- They are classified under the main head **Non-Current Liabilities** and the sub-head **Long-Term Borrowings**.\n\n**Conclusion**: Option (C) accurately describes the main head under which they are shown.',
    },
    {
        id: 'test-4',
        chapterId: 'ch3',
        chapterTitle: 'Financial Statements of a Company',
        question: 'Which of the following is NOT a sub-head under Current Assets?',
        options: [
            'Inventories',
            'Trade Receivables',
            'Cash and Cash Equivalents',
            'Deferred Tax Assets'
        ],
        correctOption: '(D) Deferred Tax Assets',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Recall the Structure of Assets in Schedule III**\n- Assets are divided into two main heads: **Non-Current Assets** (long-term) and **Current Assets** (short-term).\n\n**Step 2: Identify the Sub-heads**\n- **Current Assets** include: Current Investments, Inventories, Trade Receivables, Cash and Cash Equivalents, Short-term Loans and Advances, and Other Current Assets.\n- **Non-Current Assets** include: Property, Plant and Equipment and Intangible Assets, Non-current Investments, **Deferred Tax Assets (Net)**, Long-term Loans and Advances, and Other Non-Current Assets.\n\n**Conclusion**: Deferred Tax Assets are explicitly classified under Non-Current Assets, not Current Assets. Therefore, (D) is the correct answer.',
    },
    {
        id: 'test-5',
        chapterId: 'ch4',
        chapterTitle: 'Analysis of Financial Statements',
        question: 'Current Ratio is a:',
        options: [
            'Liquidity Ratio',
            'Solvency Ratio',
            'Activity Ratio',
            'Profitability Ratio'
        ],
        correctOption: '(A) Liquidity Ratio',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Define Current Ratio**\n- The Current Ratio relates a company\'s Current Assets to its Current Liabilities (Formula: Current Assets / Current Liabilities).\n\n**Step 2: Classify Ratios by Purpose**\n- **Liquidity Ratios**: Measure the ability to meet short-term obligations.\n- **Solvency Ratios**: Measure the ability to meet long-term obligations.\n- **Activity Ratios**: Measure how efficiently assets are being utilized.\n- **Profitability Ratios**: Measure the earning capacity.\n\n**Conclusion**: Since Current Assets and Current Liabilities represent short-term resources and obligations, the Current Ratio is a measure of short-term liquidity. It is a **Liquidity Ratio** (A).',
    },
    {
        id: 'test-6',
        chapterId: 'ch5',
        chapterTitle: 'Accounting Ratios',
        question: 'Ideal Quick Ratio is:',
        options: [
            '2:1',
            '1:1',
            '1:2',
            '3:1'
        ],
        correctOption: '(B) 1:1',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Quick Ratio**\n- Also known as the Acid-Test Ratio or Liquid Ratio.\n- Formula: Liquid Assets / Current Liabilities.\n- Liquid Assets = Current Assets - Inventories - Prepaid Expenses.\n\n**Step 2: Recall Accounting Benchmarks**\n- For a general measure of short-term health, the ideal/standard **Current Ratio** is universally accepted as **2:1**.\n- For a stricter measure of immediate liquidity (without relying on selling stock), the ideal **Quick Ratio** is widely accepted as **1:1**.\n\n**Conclusion**: An ideal Quick Ratio implies that for every ₹1 of current liability, there is exactly ₹1 of highly liquid asset available to pay it off instantly. Therefore, (B) is correct.',
    },
    {
        id: 'test-7',
        chapterId: 'ch6',
        chapterTitle: 'Cash Flow Statement',
        question: 'Cash Flow Statement is prepared as per:',
        options: [
            'AS-3',
            'AS-10',
            'AS-26',
            'AS-2'
        ],
        correctOption: '(A) AS-3',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Accounting Standards (AS)**\n- Accounting Standards in India dictate the rules and formats for preparing financial statements to ensure uniformity.\n\n**Step 2: Match the Topic to the Standard**\n- **AS-3**: Deals specifically with the preparation and presentation of the **Cash Flow Statement**.\n- **AS-10**: Deals with Property, Plant and Equipment.\n- **AS-26**: Deals with Intangible Assets.\n- **AS-2**: Deals with Valuation of Inventories.\n\n**Conclusion**: According to the syllabus, the Cash Flow Statement is prepared in accordance with the provisions of **AS-3** (Revised). Therefore, (A) is the correct answer.',
    },
    {
        id: 'test-8',
        chapterId: 'part-basics',
        chapterTitle: 'Partnership: Basic Concepts',
        question: 'In the absence of a partnership deed, interest on capital is:',
        options: [
            '6% p.a.',
            '10% p.a.',
            'Allowed only if there is profit',
            'Not allowed'
        ],
        correctOption: '(D) Not allowed',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Rules in Absence of a Deed**\n- When partners do not have a written Partnership Deed (or if the deed is silent on a specific matter), the provisions of the **Indian Partnership Act, 1932** automatically apply.\n\n**Step 2: Recall the Act\'s Provisions**\n- Profit Sharing: Equal.\n- Interest on Capital: **Not allowed**.\n- Interest on Drawings: Not charged.\n- Salary/Commission to Partner: Not allowed.\n- Interest on Partner\'s Loan: Allowed at 6% p.a.\n\n**Conclusion**: Since the act explicitly forbids allowing interest on capital if there is no agreement, the correct answer is (D).',
    },
    {
        id: 'test-9',
        chapterId: 'part-admission',
        chapterTitle: 'Partnership: Admission',
        question: 'Premium for Goodwill brought in by a new partner is distributed among old partners in:',
        options: [
            'Old Profit Sharing Ratio',
            'Sacrificing Ratio',
            'New Profit Sharing Ratio',
            'Gaining Ratio'
        ],
        correctOption: '(B) Sacrificing Ratio',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand the Logic of Goodwill Premium**\n- When a new partner is admitted, they acquire a share of the firm\'s future profits. \n- This share doesn\'t come out of thin air; it is surrendered (sacrificed) by the existing old partners.\n- To compensate the old partners for giving up a piece of their future profits, the new partner brings in a Premium for Goodwill.\n\n**Step 2: Determine the Basis of Distribution**\n- Because the premium is strictly a compensation for the sacrifice made, it is inherently fair to distribute it only to those partners who sacrificed, and exactly in proportion to how much they sacrificed.\n\n**Conclusion**: The premium must be credited to the old partners\' capital accounts in their **Sacrificing Ratio**, making (B) correct.',
    },
    {
        id: 'test-10',
        chapterId: 'part-dissolution',
        chapterTitle: 'Partnership: Dissolution',
        question: 'On dissolution, unrecorded assets realized are credited to:',
        options: [
            'Partners\' Capital A/c',
            'Realisation A/c',
            'Cash A/c',
            'Revaluation A/c'
        ],
        correctOption: '(B) Realisation A/c',
        explanation: '**AI Tutor Explanation**:\n\n**Step 1: Understand Unrecorded Assets**\n- An unrecorded asset is an asset physically owned by the dissolving firm but possessing a zero value in the books.\n\n**Step 2: Apply Realisation Rules**\n- At the time of dissolution, the firm opens a **Realisation Account** to track all cash inflows from selling assets and cash outflows from paying liabilities.\n- According to the accounting rules of dissolution, ANY cash realized from the sale of an asset—whether it was recorded in the Balance Sheet or unrecorded—must be credited to this Nominal Account as an income/gain to the firm.\n\n**Step 3: Journal Entry**\n- The entry is: Bank A/c Dr. To Realisation A/c.\n- Therefore, it is credited to the Realisation Account (B).',
    }
];
