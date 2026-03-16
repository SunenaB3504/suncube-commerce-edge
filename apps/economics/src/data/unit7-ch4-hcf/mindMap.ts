import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
    id: 'u7-hcf-mm1',
    label: 'Human Capital Formation',
    children: [
        {
            id: 'u7-ch4-mm1',
            label: 'HCF Foundations',
            children: [
                { id: 'u7-ch4-mm2', label: 'Human Resource -> Human Capital' },
                { id: 'u7-ch4-mm3', label: 'Sources: Education, Health, Training, Migration, Information' },
                { id: 'u7-ch4-mm4', label: 'Physical vs Human Capital (Tangibility, Mobility, Benefits)' }
            ]
        },
        {
            id: 'u7-ch4-mm5',
            label: 'HCF & Growth',
            children: [
                { id: 'u7-ch4-mm6', label: 'Means (Capital) vs Ends (Development)' },
                { id: 'u7-ch4-mm7', label: 'Select Indicators (Per Capita, IMR, Life Expectancy)' }
            ]
        },
        {
            id: 'u7-ch4-mm8',
            label: 'State & Sector',
            children: [
                { id: 'u7-ch4-mm9', label: 'Bodies: NCERT, UGC, AICTE, ICMR' },
                { id: 'u7-ch4-mm10', label: 'Policy: RTE 2009, 6% GDP Targ, Education Cess' },
                { id: 'u7-ch4-mm11', label: 'Challenges: Jobless Graduates & Gender Equity' }
            ]
        }
    ]
};
