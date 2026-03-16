const fs = require('fs');
const path = require('path');

const batch_units = [9, 10, 11, 12];

const specificJustifications = {
    // Unit 9
    "2025-26-q29": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for defining the condition (ROI > Cost of Debt).\\n• 1 Mark for each valid explanation point.\\n\\n*Comprehensive Revision Points (Trading on Equity/Financial Leverage):*\\n• **Concept:** Financial leverage is the proportion of debt in the overall capital structure.\\n• **Favourable Condition:** It is favourable when the Return on Investment (ROI) is greater than the Cost of Debt.\\n• **Impact:** Under this condition, the Earnings Per Share (EPS) of the equity shareholders increases.\\n• **Risk:** However, if ROI falls below the cost of debt, the financial leverage becomes unfavourable and EPS rapidly declines.\\n• **Trading on Equity:** The practice of using fixed-cost sources of finance (like debt) to increase the return to equity shareholders.",
    "2024-25-q30": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Production Cycle / Operating Cycle'.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Factors affecting Working Capital):*\\n• **1. Production Cycle/Operating Cycle:** The time span between receipt of raw materials and their conversion into finished goods. Longer cycle = Higher working capital.\\n• **2. Nature of Business:** Trading firm = Less WC. Manufacturing firm = More WC.\\n• **3. Scale of Operations:** Large scale = More WC. Small scale = Less WC.\\n• **4. Business Cycle:** Boom = More WC. Depression = Less WC.\\n• **5. Seasonal Factors:** Peak season = More WC. Slack season = Less WC.\\n• **6. Credit Allowed:** Liberal credit policy = More WC.\\n• **7. Availability of Raw Material:** If available easily = Less WC.",
    "2023-24-q23": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the decision (Investment/Capital Budgeting).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Investment Decision):*\\n• **Concept:** Relates to how the firm's funds are invested in different assets.\\n• **Long-term investment (Capital Budgeting):** Involves committing finance on a long-term basis (e.g., buying a new machine). They are irreversible except at a huge cost.\\n• **Short-term investment (Working Capital):** Concerned with the levels of cash, inventory, and receivables.\\n• **Factors Affecting Capital Budgeting:** Cash flows of the project, Rate of Return, and the Investment criteria involved (interest rates, tax).",
    "2022-23-q31": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Level of Collaboration'.\\n• 1 Mark for each valid point relating to fixed capital.\\n\\n*Comprehensive Revision Points (Factors affecting Fixed Capital):*\\n• **1. Level of Collaboration:** If companies share facilities (like ATMs by banks), the requirement for fixed capital reduces.\\n• **2. Nature of Business:** Manufacturing needs more fixed capital than trading.\\n• **3. Scale of Operations:** Larger organizations need more fixed capital.\\n• **4. Choice of Technique:** Capital-intensive techniques need more fixed capital than labour-intensive.\\n• **5. Technology Upgradation:** Industries where technology upgrades faster need more fixed capital for replacement.\\n• **6. Growth Prospects:** Higher growth expectations require higher fixed capital.\\n• **7. Financing Alternatives:** If leasing is available, less fixed capital is needed to buy assets.",

    // Unit 10
    "sqp-10-5": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for listing each major step.\\n• 1 Mark for explanation of the step.\\n\\n*Comprehensive Revision Points (Trading Procedure on Stock Exchange):*\\n• **1. Selection of a Broker:** Only registered members can trade. The investor signs a broker-client agreement and a client registration form.\\n• **2. Opening Demat Account:** Opening an account with a Depository Participant (bank/broker) to hold and transfer securities electronically.\\n• **3. Placing the Order:** The investor places an order with the broker (e.g., buy 100 shares of Reliance at Rs. 2500).\\n• **4. Execution of the order:** The broker buys/sells the shares on the exchange and issues a 'Trade Confirmation Slip' and later a 'Contract Note'.\\n• **5. Settlement:** Transfer of securities and cash. T+1 rolling settlement system where trades are settled 1 working day after the transaction date.",
    "sqp-10-6": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for each point of difference explained.\\n\\n*Comprehensive Revision Points (Capital Market vs Money Market):*\\n• **1. Duration:** Capital market deals in medium and long-term securities (>1 year). Money market deals in short-term securities (<1 year).\\n• **2. Liquidity:** Capital market securities are relatively less liquid. Money market instruments are highly liquid as Discount Finance House of India (DFHI) provides a ready market.\\n• **3. Safety:** Capital market instruments are riskier with higher chances of default and price volatility. Money market instruments are much safer due to shorter duration and institutional participants.\\n• **4. Participants:** Capital market (Retail investors, mutual funds, banks). Money market (RBI, Commercial banks, large corporate houses).",

    // Unit 11
    "bulk_1001": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the decisions.\\n• 1 Mark for each valid explanation.\\n\\n*Comprehensive Revision Points (Product Mix Decisions):*\\n• **1. Branding:** Giving a name, sign, symbol etc., to a product to differentiate it from competitors. Helps in product identification and advertising.\\n• **2. Packaging:** Designing and developing the wrapper or container for the product. It acts as a silent salesman.\\n• **3. Labelling:** Designing the label to be printed on the package. It provides information about the product, its contents, date of manufacture, etc.",
    "2025-26-q34": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Sales Promotion'.\\n• 1 Mark for each valid explanation point of its tools.\\n\\n*Comprehensive Revision Points (Sales Promotion):*\\n• **Concept:** Short-term incentives designed to encourage buyers to make immediate purchase.\\n• **Common Tools:**\\n• **Rebate:** Offering products at special prices.\\n• **Discount:** Offering products at less than list price.\\n• **Refunds:** Refunding a part of the price on showing proof of purchase.\\n• **Product Combinations:** Offering another product as a gift alongside.\\n• **Quantity Gift:** Offering an extra quantity of the product.\\n• **Instant Draws/Contests:** Scratch cards or lucky draws.",
    "2024-25-q34b": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for defining pricing.\\n• 1 Mark for each factor explained.\\n\\n*Comprehensive Revision Points (Factors affecting Price Determination):*\\n• **1. Product Cost:** Sets the lower limit of the price. Includes fixed, variable, and semi-variable costs.\\n• **2. The Utility and Demand:** Sets the upper limit. Inelastic demand = Higher prices. Elastic demand = Lower prices.\\n• **3. Extent of Competition:** Less competition = Higher price. Severe competition = Lower price matching competitors.\\n• **4. Government and Legal Regulations:** Govt can declare a product as essential and regulate its price.\\n• **5. Pricing Objectives:** E.g., obtaining market share leadership (low price), surviving (low price), or attaining product quality leadership (high price).",
    "2022-23-q34": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Place/Physical Distribution Mix'.\\n• 1 Mark for each valid point/component explained.\\n\\n*Comprehensive Revision Points (Place Mix / Physical Distribution):*\\n• **Concept:** Making the goods available at the right place, in right quantity, at the right time.\\n• **Major Components:**\\n• **Order Processing:** Accurate and speedy processing of orders from customers to factory.\\n• **Transportation:** Physical movement of goods from place of production to place of consumption.\\n• **Warehousing:** Storing goods systematically to create time utility.\\n• **Inventory Control:** Maintaining adequate level of inventory. Higher inventory means better service but higher cost of capital tied up.",

    // Unit 12
    "u12_extra_2": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for each valid responsibility explained.\\n\\n*Comprehensive Revision Points (Responsibilities of a Consumer):*\\n• **1. Be aware:** Gather knowledge about various goods and services so an intelligent choice can be made.\\n• **2. Buy standard goods:** Always check for quality marks (ISI on electrical, FPO on food, Hallmark on jewelry).\\n• **3. Read labels:** Carefully read labels to know price, net weight, manufacturing and expiry dates.\\n• **4. Assert yourself:** Ensure that you get a fair deal.\\n• **5. Ask for Cash Memo:** Essential proof of purchase required for filing a complaint.\\n• **6. File complaint:** File a complaint in an appropriate consumer forum in case of a shortcoming.",
    "u12_extra_3": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for defining Pecuniary Jurisdiction.\\n• 1 Mark for District limit.\\n• 1 Mark for State limit.\\n\\n*Comprehensive Revision Points (Pecuniary Jurisdiction under CPA 2019):*\\n• **District Commission:** Receives complaints where the value of goods or services paid DOES NOT EXCEED Rs. 1 crore.\\n• **State Commission:** Receives complaints where the value EXCEEDS Rs. 1 crore but DOES NOT EXCEED Rs. 10 crore.\\n• **National Commission:** Receives complaints where the value EXCEEDS Rs. 10 crore.",
    "u12_extra_4": "[Mark Justification - 5 Marks Total]:\\n• 1 Mark for identifying the correct appellate body.\\n• 1 Mark for stating the time limit.\\n• 3 Marks for elaborating the hierarchy.\\n\\n*Comprehensive Revision Points (Appellate Hierarchy under CPA 2019):*\\n• **District to State:** Appeal against District Commission lies with the State Commission within 45 days.\\n• **State to National:** Appeal against State Commission lies with the National Commission within 30 days.\\n• **National to Supreme Court:** Appeal against National Commission (only for cases originating there) lies with the Supreme Court within 30 days.",
    "bulk_1002": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for each valid right explained.\\n\\n*Comprehensive Revision Points (Consumer Rights under CPA 2019):*\\n• **1. Right to Safety:** Protection against goods that are hazardous to life and health.\\n• **2. Right to be Informed:** Right to have complete information about the product (ingredients, date of manufacture).\\n• **3. Right to Choose:** Assured access to a variety of products at competitive prices.\\n• **4. Right to be Heard:** Right to have their complaints heard in case of dissatisfaction.\\n• **5. Right to seek Redressal:** Right to get relief against unfair trade practices.\\n• **6. Right to Consumer Education:** Right to acquire knowledge and skills to be an informed consumer.",
    "2025-26-q34a": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for each valid relief/remedy listed.\\n\\n*Comprehensive Revision Points (Reliefs Available to Consumers):*\\n• **1.** To remove the defect in goods or deficiency in services.\\n• **2.** To replace the defective product with a new one, free from any defect.\\n• **3.** To refund the price paid for the product, or the charges paid for the service.\\n• **4.** To pay a reasonable amount of compensation for any loss or injury suffered.\\n• **5.** To discontinue the unfair trade practice and not to repeat it in the future.\\n• **6.** To withdraw the hazardous goods from being offered for sale.\\n• **7.** To cease manufacture of hazardous goods.",
    "2024-25-q21": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the Right.\\n• 1 Mark for explaining the significance.\\n\\n*Comprehensive Revision Points (Right to Consumer Education):*\\n• **Identify:** Right to Consumer Education.\\n• **Meaning:** The consumer has a right to acquire knowledge and to be a well informed consumer throughout life.\\n• **Importance:** He should be aware about his rights and the reliefs available to him in case of a product or service falling short of his expectations.\\n• **Agencies:** Many consumer organizations and some enlightened businesses are taking an active part in educating consumers.",
    "2023-24-q34c": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying 'Ask for a Cash Memo'.\\n• 1 Mark for explaining its legal importance.\\n\\n*Comprehensive Revision Points (Responsibilities of a Consumer):*\\n• **Identify Requirement:** Ask for a Cash Memo.\\n• **Rationale:** A cash memo serves as absolute proof of purchase.\\n• **Legal Need:** Without this proof, a consumer cannot file a legal complaint against the seller in a consumer court in case the product is defective.\\n• **Related Responsibilities:** Read labels carefully, buy standardized goods (ISI mark), assert yourself to get a fair deal, respect the environment.",
    "2022-23-q21": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying 'Social Responsibility'.\\n• 1 Mark for elaborating on business ethics.\\n\\n*Comprehensive Revision Points (Importance of Consumer Protection from Business View):*\\n• **1. Social Responsibility:** Business has a responsibility to supply quality products at reasonable prices and avoid exploiting the society's resources it uses.\\n• **2. Long-term Interest of Business:** Satisfied consumers lead to repeat sales and positive word-of-mouth.\\n• **3. Moral Justification:** It is the moral duty of any business to take care of consumer's interest and avoid black marketing/adulteration.\\n• **4. Government Intervention:** Exploitative businesses invite government intervention or action against them.\\n• **5. Business uses society's resources:** They must use them for the benefit of the society."
};

function processUnit(unitNum) {
    const file = path.join(__dirname, '..', 'data', `unit${unitNum}`, 'sqp.ts');
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');
    let modifications = 0;

    const prefixSplit = content.indexOf('export const');
    if (prefixSplit === -1) return;

    const prefix = content.substring(0, prefixSplit);
    const dataLayer = content.substring(prefixSplit);

    const blocks = dataLayer.split(/\{\s*id:/g);
    let newBlocks = [blocks[0]];

    for (let i = 1; i < blocks.length; i++) {
        let block = "{ \n    id:" + blocks[i];

        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
        const marksMatch = block.match(/marks:\s*(\d+)/);

        if (idMatch && marksMatch) {
            const id = idMatch[1];
            const marks = parseInt(marksMatch[1], 10);

            if (marks >= 3 || id.startsWith('bulk_') || id.startsWith('sqp-10-') || id.startsWith('u12_extra_')) {
                if (specificJustifications[id]) {
                    const justificationStr = specificJustifications[id];
                    block = block.replace(/aiExplanation:\s*(?:`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")\s*,?/, `aiExplanation: \`${justificationStr}\`,`);
                    modifications++;
                }
            } else if (marks === 1) {
                if (!block.includes('[Mark Justification]')) {
                    const existingMatch = block.match(/aiExplanation:\s*(?:`([\s\S]*?)`|'([\s\S]*?)'|"([\s\S]*?)")/);
                    if (existingMatch) {
                        const existingText = (existingMatch[1] || existingMatch[2] || existingMatch[3]).replace(/\\/g, '\\\\').replace(/`/g, '\\`');
                        const newText = existingText + "\\n\\n[Mark Justification]: 1 Mark awarded for the direct, correct identification of the concept, feature, or specific term. No partial credit.";
                        block = block.replace(/aiExplanation:\s*(?:`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")\s*,?/, `aiExplanation: \`${newText}\`,`);
                        modifications++;
                    }
                }
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected AI Reasoning for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
