import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-emp-mm1',
    label: 'Employment',
    children: [
        {
            id: 'u7-emp-mm2',
            label: 'Foundations',
            children: [
                { id: 'u7-emp-mm3', label: 'Workers (545M) & Economic Acts' },
                { id: 'u7-emp-mm4', label: 'WPR (India: 41.1)' }
            ]
        },
        {
            id: 'u7-ch6-mm1',
            label: 'Employment Basics',
            children: [
                { id: 'u7-ch6-mm2', label: 'Definitions (GNP, Worker, Unemp)' },
                { id: 'u7-ch6-mm3', label: 'WPR (Rural ~42% vs Urban ~38%)' },
                { id: 'u7-ch6-mm4', label: 'Status: Self-employed (57%), Casual (22%), Regular (21%)' }
            ]
        },
        {
            id: 'u7-ch6-mm5',
            label: 'Sectoral Dynamics',
            children: [
                { id: 'u7-ch6-mm6', label: 'Primary Dominance (46%) especially Females (64%)' },
                { id: 'u7-ch6-mm7', label: 'Jobless Growth (late 90s)' },
                { id: 'u7-ch6-mm8', label: 'Informalisation (94% in Informal Sector)' }
            ]
        },
        {
            id: 'u7-ch6-mm9',
            label: 'Unemployment & Policy',
            children: [
                { id: 'u7-ch6-mm10', label: 'Types: Disguised, Seasonal, Open' },
                { id: 'u7-ch6-mm11', label: 'MGNREGA 2005 (100 days guarantee)' },
                { id: 'u7-ch6-mm12', label: 'Direct vs Indirect generation' }
            ]
        }

    ]
};
