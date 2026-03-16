const fs = require('fs');
const path = require('path');

const batch_units = [1, 2, 3, 4];

const specificJustifications = {
    // Unit 1
    "bulk_101": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for defining/identifying the core concept (Planning).\\n• 1 Mark for each valid point explained (up to 3 marks).\\n\\n*Comprehensive Revision Points for Planning Process:*\\n• Point 1: **Setting Objectives** (e.g., Target of 10% profit).\\n• Point 2: **Developing Premises** (making assumptions about the uncertain future).\\n• Point 3: **Identifying Alternative Courses of Action** (discovering all possible ways to achieve goals).\\n• Point 4: **Evaluating Alternatives** (weighing pros and cons of each).\\n• Point 5: **Selecting an Alternative** (choosing the most viable, profitable plan).\\n• Point 6: **Implementing the Plan** (putting the plan into action, organizing resources).\\n• Point 7: **Follow-up Action** (monitoring whether plans are being implemented effectively).",

    "2025-26-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for each valid point of difference explained (up to 3 marks).\\n\\n*Comprehensive Revision Points (Top Level vs Middle Level):*\\n• **Meaning/Role:** Top level integrates diverse elements and determines overall objectives; Middle level acts as a link, implementing policies set by top management.\\n• **Composition:** Top level includes CEO, Board of Directors, President, GM; Middle level includes Departmental Heads, Plant Superintendents, Operations Managers.\\n• **Nature of Work:** Top level focuses on long-term corporate strategy, framing rules and coordinating resources; Middle level focuses on short-term tactical plans, assigning duties, and motivating personnel.\\n• **Source of Authority:** Top level derives authority from owners/shareholders and has maximum authority; Middle level derives authority from the Top level.",

    "2024-25-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the correct objective (Social).\\n• 1 Mark for each valid point explained (up to 3 marks).\\n\\n*Comprehensive Revision Points (Social Objectives):*\\n• **Definition:** Social objectives involve the creation of benefit for society during business operations.\\n• **Environmental Protection:** Using environmentally friendly methods of production (eco-friendly packaging, reducing pollution).\\n• **Employment Generation:** Creating employment opportunities, especially for disadvantaged sections of society.\\n• **Basic Amenities:** Providing facilities like schools, crèches, and hospitals for employees and the community.\\n• **Fair Practices:** Ensuring the supply of quality products at fair, reasonable prices without exploiting consumers.",

    // Unit 2
    "2025-26-q18": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the principle (Harmony, Not Discord).\\n• 1 Mark for each valid point explained (up to 4 marks).\\n\\n*Comprehensive Revision Points (Harmony, Not Discord):*\\n• **Mental Revolution:** Requires a complete change in the attitude of both management and workers towards each other.\\n• **Mutual Realization:** Both groups must realize they need each other to achieve organizational goals.\\n• **Sharing Gains:** Management must share the gains/profits of the company with workers.\\n• **Hard Work:** Workers must work incredibly hard and willingly embrace change for the prosperity of the company.\\n• **Paternalistic Management:** E.g., Japanese companies where strikes are avoided through open communication and mutual respect.",

    "2025-26-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the concept (Gang Plank).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Scalar Chain & Gang Plank):*\\n• **Scalar Chain Definition:** The formal line of authority and communication from the highest to the lowest ranks.\\n• **Fayol's strictness:** Fayol insisted this chain must strictly be followed in normal circumstances.\\n• **Gang Plank Definition:** A shorter, direct route of communication between employees at the same hierarchical level.\\n• **Purpose:** It prevents critical delays in communication during urgencies or emergencies.\\n• **Condition:** It is an exception, not a rule. Superiors must eventually be informed of the decisions made.",

    "2024-25-q23": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for defining Flexible.\\n• 1 Mark for defining Contingent.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Nature of Management Principles):*\\n• **Flexible:** Management principles are not rigid prescriptions (unlike scientific principles). They can be modified by the manager according to the situation.\\n• **Contingent:** Their application is dependent on the prevailing situation at a particular point in time.\\n• **General Guidelines:** They provide broad guidance for decision-making and behavior, not readymade, straitjacket solutions.\\n• **Mainly Behavioral:** They aim at influencing human behavior, enabling a better understanding of the relationship between human and material resources.",

    "2023-24-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for each valid point of difference explained.\\n\\n*Comprehensive Revision Points (Unity of Command vs Unity of Direction):*\\n• **Meaning:** Unity of Command implies one subordinate should receive orders from and be accountable to only one superior. Unity of Direction implies that activities having the same objective must have one head and one plan.\\n• **Aim:** Command prevents dual subordination and confusion. Direction prevents overlapping of activities and wasted efforts.\\n• **Implications:** Command affects the individual employee directly. Direction affects the entire organization or department.\\n• **Result:** Command leads to systematic working and maintains discipline. Direction leads to coordination of activities and unity of action.",

    // Unit 3
    "bulk_103": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for identifying the dimension (Social Environment).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Social Environment Dimensions):*\\n• **Customs & Traditions:** Practices that have lasted for decades/centuries, like Diwali/Eid creating specific market demands.\\n• **Values:** Concepts like freedom, social justice, and equal opportunity that dictate business ethics.\\n• **Social Trends:** Shifts in consumer behavior, such as the increasing health-and-fitness trend creating demand for diet soda, organic food, and gyms.\\n• **Demographics:** Changes in the population composition, such as an increase in the life expectancy of people (creating demand for senior care or specialized health products) or a growing working female population.",

    "2025-26-q23": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying 'First Mover Advantage'.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Importance of Business Environment):*\\n• **First Mover Advantage:** By scanning the environment, a firm can identify opportunities early and exploit them before competitors do (e.g., WhatsApp capturing the free messaging market).\\n• **Warning Signal for Threats:** Environmental awareness helps managers identify potential threats early and take corrective measures.\\n• **Tapping Useful Resources:** Enterprises design policies that allow them to extract resources from the environment based on market demand.\\n• **Coping with Rapid Changes:** Helps managers adapt to dynamic, fast-paced changes in technology and consumer tastes.\\n• **Policy Formulation:** Understanding the environment serves as the basis for future planning.\\n• **Improving Performance:** Continuous monitoring leads directly to improved organizational performance.",

    "2024-25-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the dimension (Social Environment).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Dimensions of Business Environment):*\\n• **Social Environment:** Involves changing lifestyles and trends (like health and fitness) that directly shift consumer demand towards specific products like organic foods.\\n• **Economic Environment:** Interest rates, inflation rates, and changes in disposable income. (e.g., rising incomes allow people to afford premium gym memberships).\\n• **Political Environment:** General stability and peace in the country and specific attitudes that elected government representatives hold towards business.\\n• **Legal Environment:** Legislation passed by the government, administrative orders, court judgments.\\n• **Technological Environment:** Forces relating to scientific improvements and innovations which provide new ways of producing goods.",

    "2023-24-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying 'Coping with Rapid Changes'.\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Importance of Business Environment):*\\n• **Coping with Rapid Changes:** The environment is dynamic. Managers must constantly scan the environment to adapt to fragmented markets, demanding customers, and rapid technological obsolescence.\\n• **First Mover Advantage:** Helps in identifying opportunities and getting an advantage over competitors.\\n• **Identifying Threats:** Serves as an early warning signal for upcoming competitive movements.\\n• **Strategic Planning:** Forms the bedrock foundation for plotting out future corporate strategies and resource allocation.",

    "2022-23-q22": "[Mark Justification - 3 Marks Total]:\\n• 1 Mark for each valid feature explained.\\n\\n*Comprehensive Revision Points (Features of Demonetization):*\\n• **Tax Administration Measure:** It was viewed as a strong measure to penalize people holding unaccounted wealth/black money who had not declared it to tax authorities.\\n• **Channelizing Savings:** It forcibly directed people's cash savings into the formal financial system/banks.\\n• **Cash-lite Economy:** It aimed to create a less-cash economy, promoting digital transactions (UPI, cards, wallets).\\n• **Signalling Government Attitude:** It clearly indicated that tax evasion would no longer be tolerated or treated lightly by the government.",

    // Unit 4
    "2025-26-q24": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the step (Developing Premises).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Steps in Planning Process):*\\n• **1. Setting Objectives:** Specifying exactly what the organization wants to achieve.\\n• **2. Developing Premises:** Planning requires assumptions about the uncertain future. These assumptions (forecasts, existing plans, policies) are called premises.\\n• **3. Identifying Alternatives:** Discovering all possible alternative courses of action to achieve the established objectives.\\n• **4. Evaluating Alternatives:** Weighing the positive and negative aspects, feasibility, and consequences of each alternative proposal.\\n• **5. Selecting an Alternative:** The real point of decision making where the best, most profitable plan is adopted.\\n• **6. Implementing the Plan:** Putting the plan into action and organizing material and labor.\\n• **7. Follow-up Action:** Monitoring the plans regularly to ensure they are proceeding according to schedule.",

    "2024-25-q25": "[Mark Justification - 4 Marks Total]:\\n• 1 Mark for identifying the concept (Strategy).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Types of Plans - Strategy):*\\n• **Comprehensive Plan:** Strategy provides the broad contours of an organization's business, defining its future direction.\\n• **Long-term Objectives:** It determines long-term goals for the organization's survival and growth.\\n• **Course of Action:** It involves adopting a specific, overarching course of action to achieve these objectives.\\n• **Resource Allocation:** Strategy dictates the substantial allocation of necessary resources (capital, labor) to achieve the objectives.\\n• **External Influence:** Decisions are heavily influenced by the business environment, specifically the moves of competitors.",

    "2023-24-q26": "[Mark Justification - 6 Marks Total]:\\n• 1 Mark for identifying the step (Evaluating Alternative Courses).\\n• 1 Mark for each valid point explained.\\n\\n*Comprehensive Revision Points (Steps in Planning Process):*\\n• **1. Setting Objectives:** Specifying exactly what the organization wants to achieve.\\n• **2. Developing Premises:** Planning requires assumptions about the uncertain future. These assumptions (forecasts, existing plans, policies) are called premises.\\n• **3. Identifying Alternatives:** Discovering all possible alternative courses of action to achieve the established objectives.\\n• **4. Evaluating Alternatives:** Weighing the positive and negative aspects, feasibility, and consequences of each alternative proposal.\\n• **5. Selecting an Alternative:** The real point of decision making where the best, most profitable plan is adopted.\\n• **6. Implementing the Plan:** Putting the plan into action and organizing material and labor.\\n• **7. Follow-up Action:** Monitoring the plans regularly to ensure they are proceeding according to schedule."
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
        const marksMatch = block.match(/marks:\s*([0-9]+)/);

        if (idMatch && marksMatch) {
            const id = idMatch[1];
            const marks = parseInt(marksMatch[1]);

            let finalJustification = "";

            if (marks >= 3 && specificJustifications[id]) {
                finalJustification = specificJustifications[id];
            } else if (marks === 1 || marks === 2) {
                finalJustification = `[Mark Justification - ${marks} Mark Total]:\\n• ${marks} Mark awarded for the direct, correct identification of the concept, feature, or specific term. No partial credit.`;
            }

            if (finalJustification && (marks >= 3 || !block.includes('[Mark Justification'))) {
                // Completely replace existing AI explanation for high marks, or append for 1 mark
                if (marks >= 3) {
                    const cleanAnswer = finalJustification.replace(/\[Mark Justification.+?\]:\\n/, '');
                    block = block.replace(/answer:\s*[`'"][\s\S]*?[`'"],/, `answer: \`${cleanAnswer}\`,`);
                    block = block.replace(/markingScheme:\s*[`'"][\s\S]*?[`'"],/, `markingScheme: \`${cleanAnswer}\`,`);
                    block = block.replace(/aiExplanation:\s*[`'"][\s\S]*?[`'"](,?)\s*\}/, `aiExplanation: \`${finalJustification}\`$1\n    }`);
                } else {
                    // Append for 1 marks
                    block = block.replace(/(aiExplanation:\s*)[`'"]([\s\S]*?)[`'"](,?)\s*\}/, (match, prefix, expl, comma) => {
                        const safeExpl = expl.replace(/`/g, '\\`');
                        return `${prefix}\`${safeExpl}\\n\\n${finalJustification}\`${comma}\n    }`;
                    });
                }
                modifications++;
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        fs.writeFileSync(file, prefix + newBlocks.join(''));
        console.log(`Unit ${unitNum}: Successfully injected step-by-step AI Reasoning and Mark Justification for ${modifications} questions.`);
    }
}

batch_units.forEach(processUnit);
