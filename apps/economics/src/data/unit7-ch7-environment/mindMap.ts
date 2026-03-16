import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-env-mm1',
    label: 'Environment',
    children: [
        {
            id: 'u7-ch7-mm1',
            label: 'Environment Logic',
            children: [
                { id: 'u7-ch7-mm2', label: '4 Functions: Supply, Assimilate, Life, Aesthetics' },
                { id: 'u7-ch7-mm3', label: 'Crisis: Carrying vs Absorptive Capacity' }
            ]
        },
        {
            id: 'u7-ch7-mm4',
            label: "India's Challenges",
            children: [
                { id: 'u7-ch7-mm5', label: 'Soil Erosion (5.3B tonnes) & Forest Cover' },
                { id: 'u7-ch7-mm6', label: 'Pollution: 35Cr Vehicles & CPCB (1974) Role' }
            ]
        },
        {
            id: 'u7-ch7-mm7',
            label: 'Sustainability Path',
            children: [
                { id: 'u7-ch7-mm8', label: 'Daly\'s Rules & 17 SDGs' },
                { id: 'u7-ch7-mm9', label: 'Strategies: Solar, Biopest, CNG, Mini-Hydel' }
            ]
        }
    ]
};
