import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "PRINCIPLES OF MANAGEMENT",
    children: [
        {
            id: "concept",
            label: "1. Concept and Nature",
            children: [
                { id: "cn1", label: "Universal Applicability" },
                { id: "cn2", label: "General Guidelines" },
                { id: "cn3", label: "Formed by Practice" },
                { id: "cn4", label: "Flexible" },
                { id: "cn5", label: "Mainly Behavioural" },
                { id: "cn6", label: "Cause and Effect" },
                { id: "cn7", label: "Contingent" }
            ]
        },
        {
            id: "significance",
            label: "2. Significance",
            children: [
                { id: "sig1", label: "Insights into Reality" },
                { id: "sig2", label: "Optimum Utilization" },
                { id: "sig3", label: "Scientific Decisions" },
                { id: "sig4", label: "Meeting Changing Env" },
                { id: "sig5", label: "Social Responsibility" },
                { id: "sig6", label: "Training and Research" }
            ]
        },
        {
            id: "taylor_prin",
            label: "3. Taylor Scientific Mgmt",
            children: [
                { id: "tp1", label: "Science Not Rule of Thumb" },
                { id: "tp2", label: "Harmony Not Discord" },
                { id: "tp3", label: "Cooperation Not Individualism" },
                { id: "tp4", label: "Development of Each Person" }
            ]
        },
        {
            id: "taylor_tech",
            label: "4. Taylor Techniques",
            children: [
                { id: "tt1", label: "Functional Foremanship" },
                { id: "tt2", label: "Standardization" },
                { id: "tt3", label: "Simplification" },
                { id: "tt4", label: "Work Study (Method, Motion, Time, Fatigue)" },
                { id: "tt5", label: "Differential Piece Wage" }
            ]
        },
        {
            id: "fayol_prin",
            label: "5. Fayol 14 Principles",
            children: [
                { id: "fp1", label: "Division of Work" },
                { id: "fp2", label: "Authority and Responsibility" },
                { id: "fp3", label: "Discipline" },
                { id: "fp4", label: "Unity of Command" },
                { id: "fp5", label: "Unity of Direction" },
                { id: "fp6", label: "Subordination of Interest" },
                { id: "fp7", label: "Remuneration" },
                { id: "fp8", label: "Centralisation" },
                { id: "fp9", label: "Scalar Chain (Gang Plank)" },
                { id: "fp10", label: "Order" },
                { id: "fp11", label: "Equity" },
                { id: "fp12", label: "Stability of Personnel" },
                { id: "fp13", label: "Initiative" },
                { id: "fp14", label: "Esprit de Corps" }
            ]
        },
        {
            id: "comparison",
            label: "6. Taylor vs Fayol",
            children: [
                { id: "comp1", label: "Taylor: Shop Floor, Productivity" },
                { id: "comp2", label: "Fayol: Top Level, Administration" }
            ]
        }
    ]
};
