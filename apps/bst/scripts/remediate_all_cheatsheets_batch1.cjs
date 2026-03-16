const fs = require('fs');
const path = require('path');

const batch1_units = [1, 2, 3, 4];

// Comprehensive Cheat Sheet Data Mapping with requested additions
const cheatSheetData = {
    1: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Management:** Process of getting things done with the aim of achieving goals effectively and efficiently.",
            "**Effectiveness:** Finishing the given task on time (doing the right task).",
            "**Efficiency:** Doing the task correctly and with minimum cost (optimal utilization of resources).",
            "**Coordination:** The process by which a manager synchronises the activities of different departments.",
            "*(No specific abbreviations or complex acronyms in this unit)*"
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Features of Management:** Goal Oriented, Pervasive, Multidimensional (Work, People, Operations), Continuous, Group Activity, Dynamic, Intangible.",
            "**Functions of Management (Process):** Planning -> Organising -> Staffing -> Directing -> Controlling.",
            "**Nature of Management:**\\n• As an Art: Practical application, creativity.\\n• As an Inexact Science: Systematized body of knowledge but applied on humans.\\n• As an Emerging Profession: Well-defined knowledge but restricted entry/ethical codes are not strictly enforced yet.",
            "**Levels of Management:**\\n• Top Level (Survival, Strategy)\\n• Middle Level (Linking pin, Policy Implementation)\\n• Supervisory/Operational Level (Direct workforce contact, Quality control)."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 1: Nature and Significance of Management)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Efficiency vs Effectiveness:** Efficiency focuses on Cost-Benefit Analysis (doing things right). Effectiveness focuses on Time/End Result (doing the right things).",
            "**Coordination vs Cooperation:** Coordination is a deliberate management function (binding force). Cooperation is the voluntary effort of individuals to work together."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Confusing 'Management of Work' with 'Management of Operations'. Operations is the interlinked process combining both Work and People.",
            "**Trick:** If a case study mentions a manager 'balancing different departments', the answer is almost always **Coordination**.",
            "**Pitfall:** Failing to distinguish between Middle Level and Supervisory Level. Middle level translates policies; Supervisory level handles actual worker issues and raw materials."
        ]
    }
]`,
    2: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Principles of Management:** Broad and general guidelines for decision making and behavior of managers.",
            "**Scientific Management:** Knowing exactly what you want men to do and seeing that they do it in the best and cheapest way.",
            "**Functional Foremanship:** A technique of scientific management violating the principle of Unity of Command, separating planning and execution."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Fayol's 14 Principles:** Division of Work, Authority & Responsibility, Discipline, Unity of Command, Unity of Direction, Subordination of Individual Interest, Remuneration, Centralisation & Decentralisation, Scalar Chain, Order, Equity, Stability of Personnel, Initiative, Esprit De Corps.",
            "**Taylor's Scientific Principles:**\\n1. Science, Not Rule of Thumb\\n2. Harmony, Not Discord\\n3. Cooperation, Not Individualism\\n4. Development of Each Person to greatest efficiency.",
            "**Taylor's Techniques:** Functional Foremanship, Standardisation & Simplification, Work Study (Fatigue, Method, Time, Motion), Differential Piece Wage System."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 2: Principles of Management)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Unity of Command vs Unity of Direction:** Command means ONE Boss per subordinate (prevents dual subordination). Direction means ONE Head, ONE Plan for a group of activities (prevents overlapping).",
            "**Fayol vs Taylor:** Fayol's perspective was Top-Level Management (General Administration). Taylor's perspective was Shop Floor/Lower Level Management (Scientific).",
            "**Time Study vs Motion Study:** Time study determines the *standard time* required. Motion study eliminates *unnecessary movements*."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick - Gang Plank:** A direct violation of Scalar Chain allowed ONLY in emergencies to prevent delay in communication.",
            "**Pitfall:** Confusing 'Harmony, Not Discord' with 'Cooperation, Not Individualism'. Cooperation is the *extension* of Harmony. If the question involves involving workers in decision making, it's Cooperation.",
            "**Trick - Mental Revolution:** Associated with 'Harmony, Not Discord'. It means a complete change in the attitude of management and workers towards one another."
        ]
    }
]`,
    3: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Business Environment:** The sum total of all individuals, institutions and other forces that are outside the control of a business enterprise but that may affect its performance.",
            "**Demonetisation:** The act of stripping a currency unit of its status as legal tender.",
            "**LPG:** Liberalisation, Privatisation, and Globalisation.",
            "**FEMA:** Foreign Exchange Management Act.",
            "**FDI:** Foreign Direct Investment."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Features of Business Environment:** Totality of external forces, Specific and general forces, Inter-relatedness, Dynamic nature, Uncertainty, Complexity, Relativity.",
            "**Importance:** Identifies opportunities (first mover), Identifies threats (early warning), Tapping useful resources, Coping with rapid changes, Assisting in planning, Improving performance.",
            "**Dimensions of Business Environment (PESTEL):**\\n• Economic (Interest rates, inflation)\\n• Social (Customs, values, trends)\\n• Technological (Innovations, scientific improvements)\\n• Political (Government stability, peace)\\n• Legal (Legislations, court orders)."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 3: Business Environment)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Specific vs General Forces:** Specific forces (customers, competitors) affect *individual* enterprises directly. General forces (social, political) affect *all* enterprises indirectly.",
            "**Political vs Legal Environment:** Political is the *attitude/agenda* of the ruling government. Legal is a strict *law or court order* that must be obeyed (e.g., 'Cigarette smoking is injurious to health' warning is Legal)."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Misidentifying the dimension. Remember: If an app replaces a manual process, it is Technological. If people's eating habits change to organic, it is Social.",
            "**Trick:** Any change in Tax Rates or Repo Rates by the RBI falls strictly under the **Economic Environment**.",
            "**Pitfall:** Students often forget that 'Relativity' means the environment differs from country to country (e.g., demand for sarees is high in India, almost nil in France)."
        ]
    }
]`,
    4: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Planning:** Deciding in advance what to do and how to do it. It bridges the gap between present and future.",
            "**Objectives:** The end results towards which all activities are directed.",
            "**Strategy:** A comprehensive plan for accomplishing an organization's objectives.",
            "**Premises:** Assumptions about the future."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Features:** Focuses on objectives, Primary function, Pervasive, Continuous, Futuristic, Involves decision making, Mental exercise.",
            "**Limitations:** Leads to rigidity, May not work in dynamic environment, Reduces creativity, Involves huge costs, Time consuming, Does not guarantee success.",
            "**Planning Process (Exact Order):**\\n1. Setting Objectives\\n2. Developing Premises\\n3. Identifying Alternative Courses of Action\\n4. Evaluating Alternatives\\n5. Selecting an Alternative\\n6. Implementing the Plan\\n7. Follow-up Action."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 4: Planning. Financial planning formulas appear in Unit 9)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Single-Use vs Standing Plans:** Single-use plans are for one-time events (Budgets, Programmes). Standing plans occur regularly (Policies, Procedures, Rules).",
            "**Policy vs Procedure:** Policy is a general guideline (e.g., 'We only hire MBAs'). Procedure is a chronological sequence of steps (e.g., The steps to hire the MBA).",
            "**Rule vs Method:** Rule is specific and rigid (No smoking). Method is the formalized way of doing a routine job (e.g., LIFO method of depreciation)."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Reversing steps in the planning process. Ensure 'Developing Premises' comes *before* identifying alternatives.",
            "**Trick:** If a case study mentions 'the management has decided to achieve a 10% increase in sales', the type of plan is an **Objective**.",
            "**Pitfall:** Assuming planning works everywhere. A key limitation tested often is that planning *reduces creativity* because middle managers become blind followers.",
            "**Trick:** A 'Budget' is essentially a plan expressed in numerical terms (Single-use plan)."
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

batch1_units.forEach(processUnit);
