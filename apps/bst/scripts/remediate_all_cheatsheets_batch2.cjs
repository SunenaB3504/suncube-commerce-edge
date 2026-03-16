const fs = require('fs');
const path = require('path');

const batch2_units = [5, 6, 7, 8];

const cheatSheetData = {
    5: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Organising:** The process of defining and grouping the activities of the enterprise and establishing authority relationships among them.",
            "**Organisation Structure:** The framework within which managerial and operating tasks are performed.",
            "**Span of Management:** The number of subordinates that can be effectively managed by a superior.",
            "**Delegation:** The downward transfer of authority from a superior to a subordinate.",
            "**Decentralisation:** The delegation of authority throughout all the levels of the organization."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Organising Process:**\\n1. Identification and Division of Work\\n2. Departmentalisation\\n3. Assignment of Duties\\n4. Establishing Reporting Relationships.",
            "**Functional Structure:** Grouping of jobs of similar nature under one department (e.g., Production, Marketing, HR).\\n• Best for single-product lines.\\n• Promotes occupational specialization.",
            "**Divisional Structure:** Comprises separate business units/divisions, each with its own functional structure.\\n• Best for multi-product lines.\\n• Promotes product specialization.",
            "**Elements of Delegation:**\\n1. Authority (Power to command)\\n2. Responsibility (Obligation to perform)\\n3. Accountability (Answerability for outcome)."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 5: Organising)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Functional vs Divisional:** Functional is divided by function (cheap but poor coordination across products). Divisional is divided by product (expensive but high accountability per product).",
            "**Delegation vs Decentralisation:** Delegation is a compulsory act between two individuals (Manager to Subordinate). Decentralisation is an optional policy decision affecting the entire organization.",
            "**Authority vs Responsibility vs Accountability:** Authority flows downwards. Responsibility flows upwards. Accountability flows upwards and is absolute (cannot be delegated)."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick:** If the word 'Growth and Diversification' or 'adding new product line' comes up, the answer is always **Divisional Structure**.",
            "**Pitfall:** Thinking you can delegate accountability. Remember the SQP trick: *A manager remains accountable for the tasks he delegates to his subordinates.*",
            "**Pitfall:** Confusing the importance of 'effective administration' (Organising) with 'relief to top management' (Decentralisation)."
        ]
    }
]`,
    6: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Staffing:** The process of putting people to jobs. It begins with workforce planning and includes different other functions like recruitment, selection, training etc.",
            "**Recruitment:** The process of searching for prospective employees and stimulating them to apply for jobs in the organization.",
            "**Selection:** The process of choosing the best person out of the pool of prospective candidates for a job.",
            "**HRM:** Human Resource Management."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Staffing Process (Exact Steps):**\\n1. Estimating Manpower Requirements (Workload & Workforce Analysis)\\n2. Recruitment\\n3. Selection\\n4. Placement and Orientation\\n5. Training and Development\\n6. Performance Appraisal\\n7. Promotion and Career Planning\\n8. Compensation.",
            "**Selection Process:**\\n1. Preliminary Screening\\n2. Selection Tests\\n3. Employment Interview\\n4. Reference and Background Checks\\n5. Selection Decision\\n6. Medical Examination\\n7. Job Offer\\n8. Contract of Employment.",
            "**Types of Training:** On-the-job (Apprenticeship, Coaching, Internship, Job Rotation) vs Off-the-job (Vestibule Training)."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 6: Staffing)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Training vs Development:** Training focuses on skills for a *current* specific job (short-term). Development focuses on the overall growth of the employee for *future* challenges (long-term).",
            "**Recruitment vs Selection:** Recruitment is a *positive* process (attracting more applicants). Selection is a *negative* process (rejecting unsuitable applicants).",
            "**Workload vs Workforce Analysis:** Workload tells you how many people you *need*. Workforce tells you how many people you *currently have*."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick - Vestibule Training:** Used when employees need to handle expensive, sophisticated, or delicate machinery (Off-the-job).",
            "**Trick - Apprenticeship:** Used for trades like Plumbers, Electricians, Iron workers (On-the-job).",
            "**Pitfall:** Confusing Trade Test with Aptitude Test. Trade Test = existing skills. Aptitude Test = potential to learn new skills.",
            "**Trick - Campus Recruitment:** Directly recruiting fresh graduates from institutes of management/technology."
        ]
    }
]`,
    7: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Directing:** The process of instructing, guiding, counseling, motivating, and leading people in the organization to achieve its objectives.",
            "**Motivation:** The process of stimulating people to action to accomplish desired goals.",
            "**Leadership:** The process of influencing the behavior of people by making them strive voluntarily towards achievement of organizational goals.",
            "**Communication:** Process of exchange of information between two or more persons."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Elements of Directing:** Supervision, Motivation, Leadership, Communication.",
            "**Maslow's Need Hierarchy Theory:**\\n1. Basic Physiological Needs (food, shelter)\\n2. Safety/Security Needs (stability, pension)\\n3. Affiliation/Belonging Needs (friendship)\\n4. Esteem Needs (status, title)\\n5. Self-Actualisation Needs (growth, fulfillment).",
            "**Incentives:**\\n• Financial: Pay, Productivity linked wage, Bonus, Profit sharing, Co-partnership/Stock Option, Retirements benefits, Perquisites.\\n• Non-Financial: Status, Organizational climate, Career advancement, Job enrichment, Employee recognition, Job security, Employee participation.",
            "**Leadership Styles:** Autocratic (Dictator), Democratic (Participative), Laissez Faire (Free-rein).",
            "**Communication Process:** Sender -> Message -> Encoding -> Media -> Decoding -> Receiver -> Feedback."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "*(No numerical formulas in Unit 7: Directing)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Semantic vs Psychological Barriers:** Semantic = wording issues (faulty translation, technical jargon). Psychological = emotional state issues (premature evaluation, lack of attention).",
            "**Organizational vs Personal Barriers:** Org = policy, rules. Personal = fear of challenge to authority, lack of confidence in subordinates.",
            "**Formal vs Informal Communication:** Formal = official channels (Scalar chain). Informal = Grapevine (gossip, rumors)."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Pitfall:** Not classifying 'Job Enrichment' properly. It is a non-financial incentive that involves designing jobs to include greater variety of work content and higher level of knowledge/skill.",
            "**Trick:** If a case study says 'A manager offers shares at lower than market price', it's the financial incentive **Co-partnership/Stock Option**.",
            "**Pitfall:** Confusing 'Status' with 'Job Security'. Status implies prestige (Esteem need), Security implies stability (Safety need)."
        ]
    }
]`,
    8: `[
    {
        title: "Key Definitions & Abbreviations",
        points: [
            "**Controlling:** The process of ensuring that actual activities conform to planned activities.",
            "**Standards:** The criteria or yardsticks against which actual performance is measured.",
            "**Deviations:** The difference between actual performance and the standard performance.",
            "**KRAs:** Key Result Areas.",
            "**MBE:** Management by Exception.",
            "**CPC:** Critical Point Control.",
            "**ROI:** Return on Investment."
        ]
    },
    {
        title: "Core Concepts & Processes",
        points: [
            "**Nature of Controlling:** Goal oriented, Pervasive, Continuous, Both backward-looking (postmortem) and forward-looking (corrective action).",
            "**Controlling Process (Exact Steps):**\\n1. Setting Performance Standards\\n2. Measurement of Actual Performance\\n3. Comparing Actual Performance with Standards\\n4. Analysing Deviations (CPC and MBE)\\n5. Taking Corrective Action.",
            "**Importance:** Accomplishing goals, Judging accuracy of standards, Efficient use of resources, Improving employee motivation, Ensuring order and discipline, Facilitating coordination."
        ]
    },
    {
        title: "Numerical Formulas",
        points: [
            "**ROI (Return on Investment)** = (EBIT / Total Investment) * 100",
            "*(Used generally as a standard to measure managerial efficiency in the controlling phase, though more rigorously applied in Unit 9)*"
        ]
    },
    {
        title: "Important Distinctions",
        points: [
            "**Critical Point Control vs Management by Exception:**\\n• CPC focuses on the **AREA** of deviation (Keep check only on Key Result Areas rather than everything).\\n• MBE focuses on the **DEGREE** of deviation (Only significant deviations beyond permissible limits should be brought to management).",
            "**Planning vs Controlling:** Planning is prescriptive (what to do) and looking ahead; Controlling is evaluative (what happened) and looking back. They are inseparable twins."
        ]
    },
    {
        title: "Exam Pitfalls & Tricks (From SQPs)",
        points: [
            "**Trick:** 'An attempt to control everything results in controlling nothing' strictly points to **Management by Exception (MBE)**.",
            "**Trick:** 'A 5% raise in postal charge is less critical than a 5% raise in raw material cost' points to **Critical Point Control (CPC)**.",
            "**Pitfall:** Students often forget that if the standard itself was set incorrectly (unachievable), the 'Corrective Action' is to **Revise the Standards**."
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

batch2_units.forEach(processUnit);
