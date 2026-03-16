import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "ORGANISING",
    children: [
        {
            id: "concept",
            label: "1. Concept and Process",
            children: [
                { id: "c1", label: "Meaning: Defining, grouping, delegating" },
                { id: "p1", label: "Step 1: Identify and Divide Work" },
                { id: "p2", label: "Step 2: Departmentalisation" },
                { id: "p3", label: "Step 3: Assignment of Duties" },
                { id: "p4", label: "Step 4: Establish Reporting Rls" }
            ]
        },
        {
            id: "importance",
            label: "2. Importance",
            children: [
                { id: "i1", label: "Benefits of Specialisation" },
                { id: "i2", label: "Clarity in Working Rls" },
                { id: "i3", label: "Optimum Utilisation" },
                { id: "i4", label: "Adaptation to Change" },
                { id: "i5", label: "Effective Administration" },
                { id: "i6", label: "Development of Personnel" },
                { id: "i7", label: "Expansion and Growth" }
            ]
        },
        {
            id: "structure",
            label: "3. Org Structure Types",
            children: [
                {
                    id: "func",
                    label: "Functional",
                    children: [
                        { id: "f_adv", label: "Adv: Specialisation, Control" },
                        { id: "f_dis", label: "Dis: Conflicts, Inflexibility" }
                    ]
                },
                {
                    id: "div",
                    label: "Divisional",
                    children: [
                        { id: "d_adv", label: "Adv: Accountability, Flex" },
                        { id: "d_dis", label: "Dis: Costs, Duplication" }
                    ]
                }
            ]
        },
        {
            id: "formal",
            label: "4. Formal vs Informal",
            children: [
                { id: "form", label: "Formal: Designed by Mgmt" },
                { id: "inf", label: "Informal: Social Networks" }
            ]
        },
        {
            id: "delegation",
            label: "5. Delegation",
            children: [
                { id: "del1", label: "Transfer from superior to sub" },
                { id: "del_auth", label: "Authority (Downward)" },
                { id: "del_resp", label: "Responsibility (Upward)" },
                { id: "del_acc", label: "Accountability (Absolute, Upward)" }
            ]
        },
        {
            id: "decentralisation",
            label: "6. Decentralisation",
            children: [
                { id: "dec1", label: "Dispersal of authority across org" },
                { id: "dec2", label: "Develops initiative and talent" }
            ]
        }
    ]
};
