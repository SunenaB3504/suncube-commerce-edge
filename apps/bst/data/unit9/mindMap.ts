import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "FINANCIAL MANAGEMENT",
    children: [
        {
            id: "concept",
            label: "1. Concept and Objective",
            children: [
                { id: "c1", label: "Meaning: Optimal procurement and usage" },
                { id: "c2", label: "Objective: Maximise Shareholders Wealth" }
            ]
        },
        {
            id: "decisions",
            label: "2. Financial Decisions",
            children: [
                { id: "d1", label: "Investment (Capital Budgeting vs Working Capital)" },
                { id: "d2", label: "Financing (Debt vs Equity mix)" },
                { id: "d3", label: "Dividend (Retained vs Distributed)" }
            ]
        },
        {
            id: "planning",
            label: "3. Financial Planning",
            children: [
                { id: "p1", label: "Objectives: Availability and avoiding idle funds" },
                { id: "p2", label: "Importance: Forecasting, coordinating, avoiding shocks" }
            ]
        },
        {
            id: "structure",
            label: "4. Capital Structure",
            children: [
                { id: "s1", label: "Meaning: Mix of Owners and Borrowed funds" },
                { id: "s2", label: "Trading on Equity: Favourable if ROI > Cost of Debt" },
                {
                    id: "s3",
                    label: "Factors Affecting Choice",
                    children: [
                        { id: "f1", label: "Cash Flow Position" },
                        { id: "f2", label: "ICR and DSCR" },
                        { id: "f3", label: "ROI and Cost of Debt" },
                        { id: "f4", label: "Tax Rate and Floatation Costs" },
                        { id: "f5", label: "Risk Consideration and Control" },
                        { id: "f6", label: "Stock Market Conditions" }
                    ]
                }
            ]
        },
        {
            id: "capital",
            label: "5. Fixed and Working Capital",
            children: [
                {
                    id: "fc",
                    label: "Fixed Capital (Long-term)",
                    children: [
                        { id: "fc1", label: "Nature: Plant, Machinery" },
                        { id: "fc2", label: "Factors: Nature of business, scale, tech" }
                    ]
                },
                {
                    id: "wc",
                    label: "Working Capital (Short-term)",
                    children: [
                        { id: "wc1", label: "Nature: Cash, Inventory, Debtors" },
                        { id: "wc2", label: "Factors: Business cycle, season, credit" }
                    ]
                }
            ]
        }
    ]
};
