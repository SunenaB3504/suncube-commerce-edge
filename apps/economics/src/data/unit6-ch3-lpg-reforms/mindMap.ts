import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u6-ch3-mm1',
    label: 'New Economic Policy (1991)',
    children: [
        {
            id: 'u6-ch3-mm1',
            label: 'The 1991 Crisis',
            children: [
                { id: 'u6-ch3-mm2', label: 'Background: Debt & Inflation' },
                { id: 'u6-ch3-mm3', label: 'Triggers: BoP (2-week reserve) & Gulf War' },
                { id: 'u6-ch3-mm4', label: 'NEP: Stabilisation vs Structural' }
            ]
        },
        {
            id: 'u6-ch3-mm5',
            label: 'The LPG Strategy',
            children: [
                { id: 'u6-ch3-mm6', label: 'Liberalisation: Industrial, Financial, Tax, Forex' },
                { id: 'u6-ch3-mm7', label: 'Privatisation: Disinvestment & Ratnas' },
                { id: 'u6-ch3-mm8', label: 'Globalisation: Outsourcing & WTO' }
            ]
        },
        {
            id: 'u6-ch3-mm9',
            label: 'Critical Appraisal',
            children: [
                { id: 'u6-ch3-mm10', label: 'Success: GDP, Forex, FDI' },
                { id: 'u6-ch3-mm11', label: 'Failures: Agri, Jobless Growth, Inequality' }
            ]
        }

    ]
};
