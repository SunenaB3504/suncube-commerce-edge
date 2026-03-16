import { TheoryTopic } from '../../../types';

export const CH5_TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch5-t1',
        title: 'Rural Credit and Banking System',
        description: 'Structure of rural credit, institutions, and the role of SHGs and Jan-Dhan Yojana.',
        content: [
            {
                type: 'concept',
                title: 'Importance of Rural Credit',
                text: 'Agriculture has a long "gestation period" between sowing and harvesting, creating a need for credit for inputs and sustenance.',
                points: [
                    '**Institutional Sources**: Commercial Banks, RRBs, Cooperatives, and NABARD.',
                    '**NABARD (1982)**: The apex body for rural credit coordination.',
                    '**Non-Institutional**: Moneylenders, Traders, Relatives (often exploitative but still dominant in some areas).'
                ],
                tags: ['FINANCE']
            },
            {
                type: 'list',
                title: 'Micro-Credit & SHGs',
                text: 'Self-Help Groups (SHGs) emerged to fill gaps in formal credit for those without collateral.',
                points: [
                    '**Thrift & Credit**: Small savings combined with credit for members.',
                    '**Scale**: Over 6 crore women in 54 lakh SHGs (May 2019).',
                    '**Kudumbashree (Kerala)**: A model poverty reduction program; largest informal bank in Asia.',
                    '**PM Jan-Dhan Yojana**: Promoting financial inclusion; reached 50 crore accounts milestone.'
                ],
                tags: ['EMPOWERMENT']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-t2',
        title: 'Agricultural Marketing System',
        description: 'Process of marketing, defects in the system, and remedial measures.',
        content: [
            {
                type: 'list',
                title: 'Steps in Marketing',
                text: 'Marketing is not just selling; it involves:',
                points: [
                    '**Assembling**: Bringing produce together.',
                    '**Storage & Processing**: Reducing wastage.',
                    '**Grading**: Standardizing quality.',
                    '**Transportation & Distribution**: Moving to consumers.'
                ],
                tags: ['PROCESS']
            },
            {
                type: 'concept',
                title: 'Government Intervention in Marketing',
                text: 'Four core measures to protect farmers:',
                points: [
                    '**Regulated Markets**: Eliminating malpractices like under-weighing.',
                    '**Infrastructure**: Physical Mandis (Warehousing/Cold Storage).',
                    '**Cooperative Marketing**: Selling at fair prices (e.g., AMUL/Milk cooperatives).',
                    '**Policy Instruments**: MSP (Minimum Support Price), Buffer Stocks, and PDS (Public Distribution System).'
                ],
                tags: ['GOVERNANCE']
            },
            {
                type: 'list',
                title: 'Emerging Channels (Direct Marketing)',
                text: 'Farmers selling directly to consumers to bypass middlemen:',
                points: [
                    '**Apni Mandi**: Punjab, Haryana, Rajasthan.',
                    '**Hadaspar Mandi**: Pune.',
                    '**Rythu Bazars**: Andhra Pradesh and Telangana.',
                    '**Uzhavar Sandies**: Tamil Nadu.'
                ],
                tags: ['INNOVATION']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-t3',
        title: 'Diversification of Productive Activities',
        description: 'Moving away from crop production to sustainable allied activities.',
        content: [
            {
                type: 'concept',
                title: 'Why Diversify?',
                text: 'To reduce risk (crop failure) and provide sustainable livelihoods (seasonal unemployment).',
                points: [
                    '**Livestock (Animal Husbandry)**: Poultry (61%), Cattle/Buffalo (22%). Increasing share in rural income.',
                    '**Fisheries**: West Bengal, Kerala, Gujarat. Inland sector (65%) vs Marine (35%).',
                    '**Horticulture**: "Golden Revolution" in India (1991-2003). India is the 2nd largest producer of fruits & vegetables.',
                    '**Information Technology**: Potential for crop forecasting, price alerts, and weather warnings.'
                ],
                tags: ['DIVERSIFICATION']
            },
            {
                type: 'tip',
                title: 'Tanwa Program (Tamil Nadu)',
                text: 'Tamil Nadu Women in Agriculture (TANWA) trains women in organic farming, vermicompost, and sustainable techniques, leading to higher household incomes.',
                tags: ['CASE STUDY']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch5-t4',
        title: 'Organic Farming & Sustainable Dev',
        description: 'Eco-friendly farming, advantages, and remaining challenges.',
        content: [
            {
                type: 'concept',
                title: 'What is Organic Farming?',
                text: 'Farming that relies on natural inputs (compost, bio-fertilizers) instead of chemicals.',
                points: [
                    '**Healthier Food**: Chemical-free, higher nutritional value.',
                    '**Soil Health**: Restores natural fertility.',
                    '**Environment**: Sustainable and eco-friendly.',
                    '**Export Potential**: Growing global demand.'
                ],
                tags: ['SUSTAINABILITY']
            },
            {
                type: 'warning',
                title: 'Pitfalls of Organic Farming',
                text: 'Critical points for examination evaluation:',
                points: [
                    '**Lower Initial Yield**: Compared to high-input chemical farming.',
                    '**Short Shelf Life**: Organic produce spoils faster.',
                    '**Infrastructural Gaps**: Lack of specialized storage/marketing.',
                    '**Limited Scope**: Small/marginal farmers might find the transition period (3 years) difficult.'
                ],
                tags: ['CHALLENGES']
            },
            {
                type: 'concept',
                title: 'SAGY (2014)',
                text: 'Saansad Adarsh Gram Yojana aims to develop model villages through physical and social infrastructure development.',
                tags: ['SCHEMES']
            }
        ],
        visualizations: []
    }
];
