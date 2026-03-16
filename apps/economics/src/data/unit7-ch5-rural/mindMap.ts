import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-rural-mm1',
    label: 'Rural Development',
    children: [
        {
            id: 'u7-rural-mm2',
            label: 'Credit & Inclusion',
            children: [
                { id: 'u7-rural-mm3', label: 'NABARD (1982) & Social Banking' },
                { id: 'u7-rural-mm4', label: 'SHGs & Jan-Dhan Yojana' }
            ]
        },
        {
            id: 'u7-ch5-mm1',
            label: 'RD Foundations',
            children: [
                { id: 'u7-ch5-mm2', label: 'Gandhi\'s Vision & Reality (2% GVA)' },
                { id: 'u7-ch5-mm3', label: '4 Pillars: HR, Land, Infra, Poverty' }
            ]
        },
        {
            id: 'u7-ch5-mm4',
            label: 'Credit & Inclusion',
            children: [
                { id: 'u7-ch5-mm5', label: 'NABARD (1982) & Social Banking (1969)' },
                { id: 'u7-ch5-mm6', label: 'SHGs (6 Cr women) & Jan-Dhan (₹1-2L Ins)' }
            ]
        },
        {
            id: 'u7-ch5-mm7',
            label: 'Marketing Channels',
            children: [
                { id: 'u7-ch5-mm8', label: 'Systemic Fix: MSP, Buffer (FCI), PDS' },
                { id: 'u7-ch5-mm9', label: 'Direct: Apni Mandi, Rythu Bazars, Sandies' }
            ]
        },
        {
            id: 'u7-ch5-mm10',
            label: 'Revolutions & Diversification',
            children: [
                { id: 'u7-ch5-mm11', label: 'White (Operation Flood), Blue (Fish), Golden (Horti)' },
                { id: 'u7-ch5-mm12', label: 'Sustainable: Organic Farming (Pros/Cons)' }
            ]
        }

    ]
};
