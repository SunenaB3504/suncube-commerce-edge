import { Chapter } from '../../types';

export const MIND_MAP: Chapter['mindMap'] = {
    id: "root",
    label: "Planning",
    children: [
        {
            id: "importance",
            label: "Importance",
            children: [
                { id: "dir", label: "Provides Direction" },
                { id: "risk", label: "Reduces Risk" },
                { id: "waste", label: "Reduces Waste" },
                { id: "inn", label: "Promotes Innovation" },
                { id: "std", label: "Stds for Controlling" }
            ]
        },
        {
            id: "features",
            label: "Features",
            children: [
                { id: "prim", label: "Primary Function" },
                { id: "perv", label: "Pervasive" },
                { id: "cont", label: "Continuous" },
                { id: "fut", label: "Futuristic" },
                { id: "dec", label: "Decision Making" }
            ]
        },
        {
            id: "process",
            label: "Process",
            children: [
                { id: "set", label: "1. Objectives" },
                { id: "prem", label: "2. Premises" },
                { id: "ident", label: "3. Identify Alt" },
                { id: "eval", label: "4. Evaluate Alt" },
                { id: "sel", label: "5. Select Alt" },
                { id: "imp", label: "6. Implement" },
                { id: "foll", label: "7. Follow-up" }
            ]
        },
        {
            id: "types",
            label: "Types of Plans",
            children: [
                { 
                    id: "single", 
                    label: "Single-Use",
                    children: [
                        { id: "bud", label: "Budget" },
                        { id: "prog", label: "Programme" }
                    ]
                },
                { 
                    id: "stand", 
                    label: "Standing",
                    children: [
                        { id: "pol", label: "Policy" },
                        { id: "proc", label: "Procedure" },
                        { id: "rule", label: "Rule" },
                        { id: "meth", label: "Method" }
                    ]
                }
            ]
        },
        {
            id: "limit",
            label: "Limitations",
            children: [
                { id: "rig", label: "Rigidity" },
                { id: "dyn", label: "Dynamic Env fails" },
                { id: "crea", label: "Reduces Creativity" },
                { id: "cost", label: "Huge Costs" }
            ]
        }
    ]
};
