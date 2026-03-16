const fs = require('fs');
const path = require('path');

const batch3_units = [9, 10, 11, 12];

const cheatSheetData = {
    9: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Financial Management:** Concerned with optimal procurement and usage of finance.",
            "**Business Finance:** Money required for carrying out business activities.",
            "**Capital Structure:** The mix between owners funds and borrowed funds.",
            "**Financial Planning:** Preparation of a financial blueprint of an organization's future operations.",
            "**ROI:** Return on Investment.",
            "**EBIT:** Earnings Before Interest and Taxes.",
            "**EBT:** Earnings Before Taxes.",
            "**EPS:** Earnings Per Share."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Objectives of Financial Management:** Primary objective is 'Wealth Maximisation' (maximizing the current market price of equity shares).",
            "**Financial Decisions:**\\n1. **Investment Decision (Capital Budgeting):** Careful selection of assets in which funds will be invested.\\n2. **Financing Decision:** Deciding the proportion of debt and equity used to raise funds.\\n3. **Dividend Decision:** How much of the profit should be distributed as dividends vs retained in the business.",
            "**Factors Affecting Capital Structure:** Cash Flow Position, ICR, DSCR, ROI, Cost of Debt, Tax Rate, Cost of Equity, Floatation Costs, Risk Consideration, Flexibility, Control, Stock Market Conditions."
        ]
    },
    {
        title: "Numerical Formulas (CRITICAL)",
        points: [
            "**1. Wealth of Shareholders** = Number of Shares × Market Price per Share",
            "**2. Trading on Equity (Financial Leverage):** Proportion of Debt / Overall Capital.",
            "**3. EBT (Earnings Before Taxes)** = EBIT - Interest on Debt",
            "**4. EAT (Earnings After Taxes)** = EBT - Taxes",
            "**5. EPS (Earnings Per Share)** = EAT / Number of Equity Shares",
            "**6. ROI (Return on Investment)** = (EBIT / Total Investment) × 100",
            "**7. ICR (Interest Coverage Ratio)** = EBIT / Interest",
            "**8. DSCR (Debt Service Coverage Ratio)** = (Profit after Tax + Depreciation + Interest + Non-Cash exp) / (Preference Dividend + Interest + Repayment obligation)"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Fixed Capital vs Working Capital:**\\n• Fixed Capital involves long-term investments in tangible/intangible assets. Financed by long-term sources.\\n• Working Capital involves short-term investments in current assets minus current liabilities. Financed by short/medium sources.\\n• **Gross Working Capital:** Total investment in current assets.\\n• **Net Working Capital:** Current Assets - Current Liabilities."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Confusing Favourable Data. Financial leverage is ONLY favourable when **ROI > Cost of Debt**. If Cost of Debt > ROI, it is 'unfavourable' and EPS decreases as debt increases.",
            "**Trick:** If a case study focuses on maintaining 'liquidity' or ensuring 'enough cash for day-to-day operations', it discusses **Working Capital**.",
            "**Pitfall:** Floatation cost specifically implies the cost of issuing securities (brokerage, underwriting commission). Higher floatation cost makes an issue less attractive."
        ]
    }
]`,
    10: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Financial Market:** A market for the creation and exchange of financial assets.",
            "**Money Market:** Market for short-term funds (< 1 year).",
            "**Capital Market:** Market for medium and long-term funds (> 1 year).",
            "**SEBI:** Securities and Exchange Board of India.",
            "**NSE:** National Stock Exchange of India.",
            "**BSE:** Bombay Stock Exchange.",
            "**NSDL:** National Securities Depository Limited.",
            "**CDSL:** Central Depository Services Limited.",
            "**NIFTY:** National Fifty (Index of NSE).",
            "**SENSEX:** Sensitivity Index (Index of BSE)."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Functions of Financial Markets:** Mobilisation of savings into most productive uses, Facilitating price discovery, Providing liquidity to financial assets, Reducing the cost of transactions.",
            "**Money Market Instruments:**\\n• **Treasury Bills (T-Bills):** Issued by RBI on behalf of Govt (Zero coupon bonds).\\n• **Commercial Paper (CP):** Unsecured promissory note by large creditworthy companies.\\n• **Call Money:** Inter-bank borrowing to maintain CRR.\\n• **Certificate of Deposit (CD):** Issued by commercial banks against large deposits.\\n• **Commercial Bill:** Bill of exchange used to finance working capital.",
            "**SEBI Roles:**\\n1. **Regulatory:** Registering brokers, regulating mutual funds, conducting audits.\\n2. **Developmental:** Training intermediaries, promoting flexible approaches.\\n3. **Protective:** Prohibiting insider trading, fraudulent/unfair trade practices."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No direct numerical formulas in Unit 10. Focus on understanding the maturity periods of Money Market instruments: T-Bills 14-364 days; CP 15 days to 1 year; Call money 1-15 days.)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Primary vs Secondary Market:**\\n• Primary (New Issue Market): Securities sold for the *first time* directly by companies to investors.\\n• Secondary (Stock Exchange): Existing, already-issued securities are traded between investors.",
            "**Capital vs Money Market:**\\n• Capital: Long term, low liquidity, high risk, high return.\\n• Money: Short term, high liquidity, low risk, low return."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick - Bridge Financing:** When a firm issues **Commercial Paper** to cover the floatation costs of issuing equity shares in the primary market.",
            "**Pitfall:** Confusing the roles of SEBI. If an action 'protects investors' or 'stops fraud/insider trading', it is **Protective**. If it relates to 'registration/fees/audits', it is **Regulatory**.",
            "**Trick:** The 'Trading Procedure' always starts with 'Selection of Broker' and opening a 'Demat Account'."
        ]
    }
]`,
    11: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Marketing:** A social process by which individuals and groups obtain what they need and want through creating offers and freely exchanging products.",
            "**Brand:** A name, term, sign, symbol, design used to identify the products of a seller.",
            "**Marketing Mix:** The set of marketing tools that a firm uses to pursue its marketing objectives in the target market.",
            "**B2B:** Business to Business.",
            "**B2C:** Business to Consumer.",
            "**FMCG:** Fast-Moving Consumer Goods."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Marketing Management Philosophies:**\\n1. **Production Concept:** Focus on mass production and low cost.\\n2. **Product Concept:** Focus on product quality and features.\\n3. **Selling Concept:** Focus on aggressive selling and promotion to convince customers.\\n4. **Marketing Concept:** Focus on customer satisfaction (finding needs and filling them).\\n5. **Societal Marketing Concept:** Focus on customer satisfaction + social/environmental welfare.",
            "**Standard 4 Ps (Marketing Mix):**\\n1. **Product:** Variety, quality, design, brand, packaging.\\n2. **Price:** List price, discounts, allowances, payment period.\\n3. **Place (Physical Distribution):** Channels, coverage, locations, inventory, transport.\\n4. **Promotion:** Advertising, personal selling, sales promotion, public relations."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No true numerical formulas. However, pricing strategies often loosely refer to covering 'Fixed Cost + Variable Cost + Desired Profit Margin' to determine the floor limit of price).* "
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Advertising vs Personal Selling:**\\n• Advertising is an impersonal, paid form of communication, lacking flexibility but reaching masses cheaply.\\n• Personal Selling is a face-to-face, personal dialogue, highly flexible, with direct feedback, but very expensive per person.",
            "**Selling vs Marketing:** Selling starts after production and aims at maximizing profit through sales volume. Marketing starts before production (research) and aims at earning profit through customer satisfaction."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick:** If a case study involves 'protecting the product during transit', the function is **Packaging**. If it involves 'providing information required by law', it is **Labelling**.",
            "**Pitfall:** Confusing 'Sales Promotion' with 'Public Relations'. Sales promotion is strictly short-term incentives (offers, scratch cards, discounts). PR involves building a good corporate image (press kits, sponsorships, overcoming bad press).",
            "**Trick:** The factors affecting pricing are heavily tested. Remember: Product Cost (lower limit) vs Utility/Demand (upper limit)."
        ]
    }
]`,
    12: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Consumer Protection:** Educating consumers about their rights and responsibilities and redressing their grievances.",
            "**Consumer:** A person who buys any goods or hires any service for a consideration (payment). Does *not* include a person who obtains goods for resale or commercial purpose.",
            "**CPA:** Consumer Protection Act, 2019.",
            "**NGO:** Non-Governmental Organisation.",
            "**ISI:** Indian Standards Institution (Mark for industrial products).",
            "**FPO:** Fruit Products Order (Mark for food products).",
            "**Agmark:** Agricultural Mark."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Importance of Consumer Protection (Consumer POV):** Consumer ignorance, unorganized consumers, widespread exploitation.",
            "**Importance of Consumer Protection (Business POV):** Long term interest of business, Business uses society's resources, Social responsibility, Moral justification, Government intervention.",
            "**Rights of a Consumer (CPA 2019):**\\n1. Right to Safety\\n2. Right to be Informed\\n3. Right to Choose\\n4. Right to be Heard\\n5. Right to seek Redressal\\n6. Right to Consumer Education.",
            "**Responsibilities:** Be aware, buy standardized goods, learn about risks, read labels, assert yourself, ask for a cash memo."
        ]
    },
    {
        title: "Numerical Formulas (Jurisdiction Limits)",
        points: [
            "Under the Consumer Protection Act, 2019, the pecuniary (monetary) jurisdiction limits are absolutely critical for MCQs:",
            "**1. District Commission:** Compensation claimed does NOT exceed **₹1 Crore**.",
            "**2. State Commission:** Compensation claimed EXCEEDS ₹1 Crore but does NOT exceed **₹10 Crore**.",
            "**3. National Commission:** Compensation claimed EXCEEDS **₹10 Crore**.",
            "**4. Appeal Window:** An appeal to a higher authority must be made within **30 days** of the previous order."
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Right to be Heard vs Right to seek Redressal:**\\n• 'Heard' implies the consumer has the right to file a complaint and have it acknowledged by a forum.\\n• 'Redressal' refers to the actual relief/remedy awarded (e.g., replacement, refund) if the complaint is found valid."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Many students use older (1986) jurisdiction amounts (e.g., 20 lakhs). You MUST use the 2019 Act figures: 1 Crore, 10 Crore.",
            "**Trick:** If a case asks 'What document is essential proof to file a complaint?', the answer is strictly **Cash Memo**.",
            "**Trick:** If an individual buys a product intending to resell it or use it to manufacture another product for profit, they CANNOT file a complaint under CPA because they are not a 'consumer'."
        ]
    }
]`
};

function processUnit(unitNum) {
    const file = path.join(__dirname, '..', 'data', `unit${unitNum}`, 'cheatSheet.ts');

    const newContent = `import { Chapter } from '../../types';\n\nexport const CHEAT_SHEET: Chapter['cheatSheet'] = ${cheatSheetData[unitNum]};\n`;

    fs.writeFileSync(file, newContent);
    console.log(`Unit ${unitNum}: Successfully injected required Cheat Sheet sections (Abbreviations, Concepts, Formulas, Pitfalls).`);
}

batch3_units.forEach(processUnit);
