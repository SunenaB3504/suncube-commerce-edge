import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "BUSINESS ENVIRONMENT",
    children: [
        {
            id: "concept",
            label: "1. Concept and Importance",
            children: [
                { id: "cn1", label: "Meaning: Sum total of external forces" },
                {
                    id: "cn2",
                    label: "Features",
                    children: [
                        { id: "f1", label: "Totality of external forces" },
                        { id: "f2", label: "Specific and general forces" },
                        { id: "f3", label: "Inter-relatedness" },
                        { id: "f4", label: "Dynamic nature" },
                        { id: "f5", label: "Uncertainty" },
                        { id: "f6", label: "Complexity" },
                        { id: "f7", label: "Relativity" }
                    ]
                },
                {
                    id: "cn3",
                    label: "Importance",
                    children: [
                        { id: "i1", label: "Identifying opportunities (First mover)" },
                        { id: "i2", label: "Identifying threats (Warning signals)" },
                        { id: "i3", label: "Tapping useful resources" },
                        { id: "i4", label: "Coping with rapid changes" },
                        { id: "i5", label: "Planning and policy formulation" },
                        { id: "i6", label: "Improving performance" }
                    ]
                }
            ]
        },
        {
            id: "dimensions",
            label: "2. Dimensions (PESTLE)",
            children: [
                { id: "dim1", label: "Economic (Interest, Inflation, Income)" },
                { id: "dim2", label: "Social (Customs, Trends, Values)" },
                { id: "dim3", label: "Technological (Innovations, Scitech)" },
                { id: "dim4", label: "Political (Govt Attitude, Stability)" },
                { id: "dim5", label: "Legal (Legislations, Court Judgments)" }
            ]
        },
        {
            id: "eco_env",
            label: "3. Economic Environment in India",
            children: [
                { id: "ee1", label: "Pre-1991: Agri focus, Public Sector" },
                { id: "ee2", label: "1991 Crisis: High debt, low growth, inflation" },
                {
                    id: "ee3",
                    label: "LPG Model (1991)",
                    children: [
                        { id: "lpg1", label: "Liberalisation: Removing controls" },
                        { id: "lpg2", label: "Privatisation: Reducing public role" },
                        { id: "lpg3", label: "Globalisation: Integrating with world" }
                    ]
                }
            ]
        },
        {
            id: "demonetization",
            label: "4. Demonetization",
            children: [
                { id: "dem1", label: "Event: Nov 8, 2016 (500 and 1000 notes)" },
                { id: "dem2", label: "Aim: Curb corruption, black money" },
                { id: "dem3", label: "Feature: Tax Administration Measure" },
                { id: "dem4", label: "Feature: Shift away from cash" },
                { id: "dem5", label: "Feature: Creating a Less-cash economy" }
            ]
        }
    ]
};
