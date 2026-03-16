import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "FINANCIAL MARKETS",
    children: [
        {
            id: "concept",
            label: "1. Concept and Functions",
            children: [
                { id: "c1", label: "Meaning: Creation and exchange of financial assets" },
                { id: "f1", label: "Mobilisation of Savings (Allocative)" },
                { id: "f2", label: "Price Discovery" },
                { id: "f3", label: "Providing Liquidity" },
                { id: "f4", label: "Reducing Cost of Transactions" }
            ]
        },
        {
            id: "money_mkt",
            label: "2. Money Market",
            children: [
                { id: "mm1", label: "Short-term funds (less than 1 Year)" },
                { id: "mm2", label: "Treasury Bill (T-Bill)" },
                { id: "mm3", label: "Commercial Paper (CP)" },
                { id: "mm4", label: "Call Money" },
                { id: "mm5", label: "Certificate of Deposit (CD)" },
                { id: "mm6", label: "Commercial Bill" }
            ]
        },
        {
            id: "capital_mkt",
            label: "3. Capital Market",
            children: [
                { id: "cm1", label: "Medium and long-term funds" },
                {
                    id: "primary",
                    label: "Primary Market (New Issue)",
                    children: [
                        { id: "pm1", label: "Offer through Prospectus" },
                        { id: "pm2", label: "Offer for Sale" },
                        { id: "pm3", label: "Private Placement" },
                        { id: "pm4", label: "Rights Issue" },
                        { id: "pm5", label: "e-IPOs" }
                    ]
                },
                {
                    id: "secondary",
                    label: "Secondary Market (Stock Exchange)",
                    children: [
                        { id: "sm1", label: "Sale/Purchase of existing securities" }
                    ]
                }
            ]
        },
        {
            id: "stock_ex",
            label: "4. Stock Exchange",
            children: [
                { id: "se1", label: "Functions: Liquidity, Pricing, Safety, Growth" },
                {
                    id: "se2",
                    label: "Trading Procedure",
                    children: [
                        { id: "tp1", label: "1. Selection of Broker" },
                        { id: "tp2", label: "2. Opening Demat Account (w/ DP)" },
                        { id: "tp3", label: "3. Placing the Order" },
                        { id: "tp4", label: "4. Execution of Order" },
                        { id: "tp5", label: "5. Settlement (T+2)" }
                    ]
                }
            ]
        },
        {
            id: "sebi",
            label: "5. SEBI",
            children: [
                { id: "sb1", label: "Objectives: Protect investors, regulate market" },
                { id: "sb2", label: "Regulatory Functions (Enforcing rules)" },
                { id: "sb3", label: "Developmental Functions (Promoting growth)" },
                { id: "sb4", label: "Protective Functions (Preventing fraud)" }
            ]
        }
    ]
};
