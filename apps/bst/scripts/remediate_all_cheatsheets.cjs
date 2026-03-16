const fs = require('fs');
const path = require('path');

const units = [1, 2, 3, 5, 6, 7, 8, 9, 11];

const extraSections = {
    1: { title: "2. Key Characteristics", points: ["Goal-oriented and Pervasive", "Multidimensional (Work, People, Operations)", "Continuous and Dynamic Process", "Intangible Force"] },
    2: { title: "2. Fayol's Principles (Snapshot)", points: ["Division of Work: Specialization increases efficiency.", "Authority & Responsibility: Parity between power and obligation.", "Discipline: Obedience to organizational rules.", "Unity of Command: One employee, one boss."] },
    3: { title: "2. Dimensions of Business Environment", points: ["**Economic:** Interest rates, inflation rates, stock market indices.", "**Social:** Traditions, values, social trends.", "**Technological:** Scientific improvements and innovations.", "**Political:** Political stability and peace in the country.", "**Legal:** Legislation passed by the government."] },
    5: { title: "2. Types of Organisation Structure", points: ["**Functional Structure:** Grouping of jobs of similar nature under functions (e.g., Production, Marketing).", "**Divisional Structure:** Comprises separate business units or divisions based on product lines."] },
    6: { title: "2. Staffing Process", points: ["1. Estimating Manpower Requirements", "2. Recruitment (Searching for prospective employees)", "3. Selection (Choosing the best candidate)", "4. Placement and Orientation", "5. Training and Development"] },
    7: { title: "2. Elements of Directing", points: ["**Supervision:** Overseeing subordinates at work.", "**Motivation:** Stimulating people to action.", "**Leadership:** Influencing behavior to achieve goals.", "**Communication:** Exchange of ideas, views, facts, and feelings."] },
    8: { title: "2. Controlling Process", points: ["1. Setting Performance Standards", "2. Measurement of Actual Performance", "3. Comparing Actual with Standards", "4. Analysing Deviations (Critical Point Control, MBE)", "5. Taking Corrective Action"] },
    9: { title: "2. Financial Decisions", points: ["**Investment Decision:** Capital budgeting (long-term) and working capital (short-term).", "**Financing Decision:** Quantum of finance from various long-term sources (Equity vs Debt).", "**Dividend Decision:** Portion of profit distributed vs retained earnings."] },
    11: { title: "2. Marketing Mix (4 Ps)", points: ["**Product:** Physical characteristics, branding, packaging, labeling.", "**Price:** Value of the product. Affected by cost, demand, competition.", "**Place:** Physical distribution and channels (Zero-level, One-level).", "**Promotion:** Advertising, Personal Selling, Sales Promotion, Public Relations."] }
};

units.forEach(unit => {
    const file = path.join(__dirname, '..', 'data', `unit${unit}`, 'cheatSheet.ts');
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Find where the array ends
        const endIdx = content.lastIndexOf('];');
        if (endIdx !== -1) {
            const section = extraSections[unit];
            let injectStr = `  ,\n  {\n    title: "${section.title}",\n    points: [\n`;
            section.points.forEach((pt, i) => {
                injectStr += `      "${pt}"${i < section.points.length - 1 ? ',' : ''}\n`;
            });
            injectStr += `    ]\n  }\n`;

            const newContent = content.substring(0, endIdx) + injectStr + content.substring(endIdx);
            fs.writeFileSync(file, newContent);
            console.log(`Successfully expanded Cheat Sheet for Unit ${unit}`);
        }
    }
});
