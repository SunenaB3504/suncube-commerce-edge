import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u8-mm1',
    label: 'Comparative Development',
    children: [
        {
            id: 'u8-mm1',
            label: 'Chronology & Paths',
            children: [
                { id: 'u8-mm2', label: 'Independence (47/49) & Reform (78/88/91)' },
                { id: 'u8-mm3', label: "China's GLF (1958) & Commune System" }
            ]
        },
        {
            id: 'u8-mm4',
            label: 'Demographics & Growth',
            children: [
                { id: 'u8-mm5', label: "One-child Poly (1979) & China's 0.46% Growth" },
                { id: 'u8-mm6', label: 'Sectoral Bypass (Agri → Services in India/Pak)' }
            ]
        },
        {
            id: 'u8-mm7',
            label: 'Appraisal & HDI',
            children: [
                { id: 'u8-mm8', label: 'China leading HDI (0.761) vs India (0.645)' },
                { id: 'u8-mm9', label: 'Liberty Indicators vs Economic Performance' }
            ]
        }

    ]
};
