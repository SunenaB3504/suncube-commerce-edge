import { Chapter, MindMapNode } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "DIRECTING",
    children: [
        {
            id: "concept",
            label: "1. Concept and Characteristics",
            children: [
                { id: "c1", label: "Meaning: Instructing, guiding, motivating" },
                { id: "c2", label: "Initiates Action" },
                { id: "c3", label: "Pervasive Function" },
                { id: "c4", label: "Continuous Process" },
                { id: "c5", label: "Flows Top to Bottom" }
            ]
        },
        {
            id: "importance",
            label: "2. Importance",
            children: [
                { id: "i1", label: "Initiates Action" },
                { id: "i2", label: "Integrates Efforts" },
                { id: "i3", label: "Motivates Employees" },
                { id: "i4", label: "Facilitates Change" },
                { id: "i5", label: "Stability and Balance" }
            ]
        },
        {
            id: "elements",
            label: "3. Elements of Directing",
            children: [
                {
                    id: "supervision",
                    label: "Supervision",
                    children: [
                        { id: "sup1", label: "Overseeing subordinates" },
                        { id: "sup2", label: "Link between Workers and Mgmt" },
                        { id: "sup3", label: "Maintains Group Unity" }
                    ]
                },
                {
                    id: "motivation",
                    label: "Motivation",
                    children: [
                        { id: "mot1", label: "Process of stimulating action" },
                        { id: "mot2", label: "Maslow Needs Hierarchy" },
                        { id: "mot3", label: "Financial Incentives (Pay, Bonus)" },
                        { id: "mot4", label: "Non-Financial (Status, Security)" }
                    ]
                },
                {
                    id: "leadership",
                    label: "Leadership",
                    children: [
                        { id: "ldr1", label: "Influencing behaviour of people" },
                        { id: "ldr2", label: "Autocratic (Authoritarian)" },
                        { id: "ldr3", label: "Democratic (Participative)" },
                        { id: "ldr4", label: "Laissez-faire (Free-rein)" }
                    ]
                },
                {
                    id: "comm",
                    label: "Communication",
                    children: [
                        { id: "com1", label: "Exchange of ideas, views" },
                        { id: "com2", label: "Formal (Official channels)" },
                        { id: "com3", label: "Informal (Grapevine)" },
                        { id: "com4", label: "Barriers (Semantic, Psych, etc)" }
                    ]
                }
            ]
        }
    ]
};
