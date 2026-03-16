const fs = require('fs');
const path = require('path');

const batch_units = [9, 10, 11, 12];

const ms_exact_text_batch3 = {
    // Unit 9
    "2025-26-q29": "Financial leverage is considered favourable when the Return on Investment (ROI) is higher than the Cost of Debt. Favourable financial leverage leads to an increase in Earnings Per Share (EPS).",
    "2024-25-q30": "Production Cycle / Operating Cycle. The longer the operating cycle, the larger is the requirement of working capital. A longer time lag between receipt of raw material and realisation of cash implies funds remain tied up in the business for a longer period.",
    "2023-24-q23": "Investment Decision (Capital Budgeting Decision). It involves deciding how the funds are invested in different assets so that they are able to earn the highest possible return for their investors.",
    "2022-23-q31": "Level of Collaboration. If a company enters into a collaboration (such as sharing production facilities) with another company, its requirement for fixed capital will be reduced as it will not have to invest heavily in its own independent facilities.",

    // Unit 10
    "sqp-10-5": "Trading Procedure on a Stock Exchange: 1. Selection of a broker. 2. Opening Demat account with Depository Participant. 3. Placing the order. 4. Execution of the order by the broker. 5. Settlement (transfer of securities and cash). (1 mark for each step with explanation).",
    "sqp-10-6": "(i) Duration: Capital market deals with medium and long term securities (maturity > 1 year). Money market deals with short term securities (maturity <= 1 year). (ii) Liquidity: Capital market securities are relatively less liquid. Money market instruments are highly liquid. (iii) Safety: Capital market instruments are riskier. Money market instruments are much safer with minimum risk of default.",

    // Unit 11
    "bulk_1001": "Product Mix Decisions: 1. Branding (giving a name, sign, or symbol to the product). 2. Packaging (designing the wrapper or container for the product). 3. Labelling (designing the label to be put on the package). (Any two points with explanation).",
    "2025-26-q34": "Sales Promotion. It refers to short-term incentives, which are designed to encourage the buyers to make immediate purchase of a product or service. Examples: Offering free gifts, discounts, rebates.",
    "2024-25-q34b": "Factors affecting Price of a Product: 1. Product cost (lower limit). 2. The utility and demand (upper limit). 3. Extent of competition in the market. 4. Government and legal regulations. 5. Pricing objectives. (1 mark for each point).",
    "2022-23-q34": "Place or Physical Distribution Mix. It is concerned with making the goods and services available at the right place, so that people can purchase the same. It includes decisions regarding channels of distribution and physical movement of goods.",

    // Unit 12
    "u12_extra_2": "Consumer Responsibilities: 1. Be aware about various goods and services available in the market. 2. Buy only standardized goods as they provide quality assurance (e.g., ISI mark). 3. Learn about the risks associated with products and use them safely. 4. Read labels carefully. 5. Assert yourself to get a fair deal. (Any 4 points).",
    "u12_extra_3": "Pecuniary Jurisdiction under CPA 2019: District Commission entertains complaints where the value of goods or services paid as consideration does not exceed Rs. 1 crore. State Commission entertains complaints where the value exceeds Rs. 1 crore but does not exceed Rs. 10 crore.",
    "u12_extra_4": "Appeal against State Commission: If a consumer is not satisfied with the order of the State Commission, they can prefer an appeal against such order to the National Commission within 30 days of passing the order.",
    "bulk_1002": "Consumer Rights (Any two): Right to Safety (protection against hazardous goods), Right to be Informed (about quality, quantity, price), Right to Choose (assured access to a variety of products at competitive prices), Right to be Heard, Right to seek Redressal, Right to Consumer Education.",
    "2025-26-q34a": "Remedies/Reliefs available: 1. To remove the defect in goods or deficiency in services. 2. To replace the defective product with a new one. 3. To refund the price paid for the product. 4. To pay a reasonable amount of compensation for any loss or injury suffered. 5. To discontinue the unfair trade practice.",
    "2024-25-q21": "Right to Consumer Education. The consumer has a right to acquire knowledge and to be a well informed consumer throughout life.",
    "2023-24-q34c": "Ask for a Cash Memo on purchase of goods or services. This would serve as a proof of the purchase made.",
    "2022-23-q21": "Social Responsibility. A business uses resources which belong to the society. Thus, they have a responsibility to supply quality products at reasonable prices and avoid exploitation of consumers."
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

        if (idMatch) {
            const id = idMatch[1];

            if (ms_exact_text_batch3[id]) {
                const msText = ms_exact_text_batch3[id].replace(/`/g, '\\`');
                block = block.replace(/markingScheme:\s*[`'"][\s\S]*?[`'"],/, `markingScheme: \`${msText}\`,`);
                modifications++;
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected literal CBSE Marking Scheme text for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
