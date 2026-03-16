import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u6-ch2-root',
    label: 'Indian Economy 1950-1990',
    children: [
        {
            id: 'u6-ch2-mm1',
            label: 'Planning Foundation',
            children: [
                { id: 'u6-ch2-mm2', label: 'Types of Economies (Market, Command, Mixed)' },
                { id: 'u6-ch2-mm3', label: 'Planning Commission (1950) vs NITI Aayog' },
                { id: 'u6-ch2-mm4', label: 'GMSE Goals (Growth, Modernization, Self-reliance, Equity)' }
            ]
        },
        {
            id: 'u6-ch2-mm5',
            label: 'Agricultural Reforms',
            children: [
                { id: 'u6-ch2-mm6', label: 'Institutional: Abolition of Zamindari & Ceiling' },
                { id: 'u6-ch2-mm7', label: 'Technical: Green Revolution (HYV, Buffer Stocks)' }
            ]
        },
        {
            id: 'u6-ch2-mm8',
            label: 'Industrial & Trade',
            children: [
                { id: 'u6-ch2-mm9', label: 'IPR 1956 (Schedules A, B, C)' },
                { id: 'u6-ch2-mm10', label: 'Karve Committee (1955) & SSI' },
                { id: 'u6-ch2-mm11', label: 'Inward Trade Policy (Tariffs, Quotas)' }
            ]
        }
    ]
};
