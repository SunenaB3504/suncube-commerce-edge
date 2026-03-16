import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "CONSUMER PROTECTION",
    children: [
        {
            id: "importance",
            label: "1. Importance",
            children: [
                {
                    id: "imp_con",
                    label: "From Consumers POV",
                    children: [
                        { id: "ic1", label: "Consumer Ignorance" },
                        { id: "ic2", label: "Unorganised Consumers" },
                        { id: "ic3", label: "Widespread Exploitation" }
                    ]
                },
                {
                    id: "imp_bus",
                    label: "From Business POV",
                    children: [
                        { id: "ib1", label: "Long-term Interest" },
                        { id: "ib2", label: "Use of Society Resources" },
                        { id: "ib3", label: "Social Responsibility" }
                    ]
                }
            ]
        },
        {
            id: "rights",
            label: "2. Consumer Rights (CPA 2019)",
            children: [
                { id: "r1", label: "Right to Safety" },
                { id: "r2", label: "Right to be Informed" },
                { id: "r3", label: "Right to Choose (Assured)" },
                { id: "r4", label: "Right to be Heard" },
                { id: "r5", label: "Right to Seek Redressal" },
                { id: "r6", label: "Right to Consumer Education" }
            ]
        },
        {
            id: "resp",
            label: "3. Consumer Responsibilities",
            children: [
                { id: "res1", label: "Be Aware" },
                { id: "res2", label: "Buy Standardised Goods (ISI, Agmark)" },
                { id: "res3", label: "Learn Risks and Read Labels" },
                { id: "res4", label: "Assert Yourself" },
                { id: "res5", label: "Ask for Cash Memo" },
                { id: "res6", label: "File Complaint" }
            ]
        },
        {
            id: "redressal",
            label: "4. Redressal Machinery",
            children: [
                { id: "rm1", label: "District Commission (Up to 1 Cr)" },
                { id: "rm2", label: "State Commission (1 Cr to 10 Cr)" },
                { id: "rm3", label: "National Commission (Above 10 Cr)" }
            ]
        },
        {
            id: "relief",
            label: "5. Relief and NGOs",
            children: [
                { id: "rel1", label: "Relief: Replace, Refund, Compensate" },
                { id: "rel2", label: "NGOs: Educating public, filing PILs" }
            ]
        }
    ]
};
