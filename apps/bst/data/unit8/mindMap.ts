import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "CONTROLLING",
    children: [
        {
            id: "concept",
            label: "1. Concept and Nature",
            children: [
                { id: "c1", label: "Meaning: Ensuring activities conform to plans" },
                { id: "c2", label: "Goal Oriented" },
                { id: "c3", label: "Pervasive" },
                { id: "c4", label: "Continuous Process" }
            ]
        },
        {
            id: "importance",
            label: "2. Importance",
            children: [
                { id: "i1", label: "Accomplishing Goals" },
                { id: "i2", label: "Judging Accuracy of Stds" },
                { id: "i3", label: "Efficient Use of Resources" },
                { id: "i4", label: "Improving Motivation" },
                { id: "i5", label: "Order and Discipline" },
                { id: "i6", label: "Facilitating Coordination" }
            ]
        },
        {
            id: "relationship",
            label: "3. Planning and Controlling",
            children: [
                { id: "r1", label: "Inseparable Twins" },
                { id: "r2", label: "Plan (Prescriptive) / Control (Evaluative)" },
                { id: "r3", label: "Both Forward and Backward Looking" }
            ]
        },
        {
            id: "process",
            label: "4. Controlling Process",
            children: [
                { id: "p1", label: "1. Set Performance Standards" },
                { id: "p2", label: "2. Measure Actual Performance" },
                { id: "p3", label: "3. Compare Actual with Standards" },
                {
                    id: "p4",
                    label: "4. Analyse Deviations",
                    children: [
                        { id: "a1", label: "Critical Point Control (CPC)" },
                        { id: "a2", label: "Management by Exception (MBE)" }
                    ]
                },
                { id: "p5", label: "5. Take Corrective Action" }
            ]
        },
        {
            id: "techniques",
            label: "5. Techniques of Control",
            children: [
                {
                    id: "trad",
                    label: "Traditional",
                    children: [
                        { id: "t1", label: "Personal Observation" },
                        { id: "t2", label: "Statistical Reports" },
                        { id: "t3", label: "Breakeven Analysis" },
                        { id: "t4", label: "Budgetary Control" }
                    ]
                },
                {
                    id: "mod",
                    label: "Modern",
                    children: [
                        { id: "m1", label: "ROI" },
                        { id: "m2", label: "Ratio Analysis" },
                        { id: "m3", label: "Responsibility Accounting" },
                        { id: "m4", label: "Management Audit" },
                        { id: "m5", label: "PERT and CPM" },
                        { id: "m6", label: "MIS" }
                    ]
                }
            ]
        }
    ]
};
