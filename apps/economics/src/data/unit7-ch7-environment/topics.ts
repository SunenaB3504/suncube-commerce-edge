import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch7-intro',
        title: '7.1 Introduction',
        description: 'The price of development.',
        content: [
            {
                type: 'concept',
                title: 'Development vs Environment',
                text: 'Economic development has historically come at a heavy cost to environmental quality. India must consciously choose sustainable development to balance industrial growth with nature.',
                tags: ['CONTEXT']
            }
        ],
        visualizations: [
            {
                id: 'v7-dev-env-clash',
                title: 'The Development Paradox',
                type: 'grid',
                data: [
                    { label: 'Past Path', desc: 'Resource depletion and heavy pollution.' },
                    { label: 'Current Era', desc: 'Globalisation and rapid industrialisation.' },
                    { label: 'The Price', desc: 'Loss of biodiversity and climate change.' },
                    { label: 'The Goal', desc: 'Sustainable development for future generations.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-functions',
        title: '7.2 Environment Functions & Crisis',
        description: 'Biotic/Abiotic factors and capacity limits.',
        content: [
            {
                type: 'concept',
                title: 'Four Key Functions',
                points: [
                    '**Supplies Resources**: Both renewable (forests) and non-renewable (fossil fuels).',
                    '**Assimilates Waste**: The environment absorbs and neutralises waste.',
                    '**Sustains Life**: Provides genetic diversity and life-support systems.',
                    '**Aesthetics**: Offers natural beauty and psychological well-being.'
                ],
                tags: ['FUNCTIONS']
            },
            {
                type: 'warning',
                title: 'Capacity Thresholds',
                text: 'A crisis occurs when resource extraction exceeds **Carrying Capacity** or waste exceeds **Absorptive Capacity**. Global warming and ozone depletion are direct results of crossing these limits.',
                tags: ['CRISIS']
            }
        ],
        visualizations: [
            {
                id: 'v7-env-functions',
                title: '4 Fundamental Functions',
                type: 'grid',
                data: [
                    { label: 'Resource Supply', desc: 'Renewable and non-renewable inputs.' },
                    { label: 'Waste Manager', desc: 'Assimilation and neutralisation of waste.' },
                    { label: 'Life Support', desc: 'Maintenance of genetic/biodiversity.' },
                    { label: 'Aesthetics', desc: 'Provision of scenic beauty and services.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-india-state',
        title: "7.3 State of India's Environment",
        description: "Natural wealth and local challenges.",
        content: [
            {
                type: 'concept',
                title: 'Resources vs. Degradation',
                points: [
                    '**Soil**: India loses 5.3 billion tonnes of soil to erosion annually.',
                    '**Air**: Vehicles increased from 3 lakh (1951) to **35 crores (2022)**.',
                    '**Water**: CPCB (1974) monitors 125 rivers to check pollution.',
                    '**Forests**: Forest land per capita is 0.06 hectare (NCERT goal: 0.47).'
                ],
                tags: ['STATE']
            }
        ],
        visualizations: [
            {
                id: 'v7-india-threats',
                title: "India's Environmental Burden",
                type: 'grid',
                data: [
                    { label: 'Soil Loss', desc: '5.3 Billion tonnes erosion per year.' },
                    { label: 'Vehicle Surge', desc: '3 Lakh (1951) to 35 Crore (2022).' },
                    { label: 'Forest Gap', desc: '0.06 ha per capita (actual) vs 0.47 ha (ideal).' },
                    { label: 'Water Check', desc: '125 Rivers monitored by CPCB (est. 1974).' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-sustainable-def',
        title: '7.4 Sustainable Development',
        description: 'Defining future-proof growth.',
        content: [
            {
                type: 'concept',
                title: 'Brundtland Definition',
                text: 'Meeting present needs without compromising the future generation\'s ability to meet their own needs.',
                tags: ['DEFINITION']
            },
            {
                type: 'concept',
                title: 'Herman Daly\'s Rules',
                points: [
                    'Extraction rate ≤ Regeneration rate.',
                    'Waste generation ≤ Absorptive capacity.',
                    'Population within carrying capacity.',
                    'Technological progress must be input-efficient.'
                ],
                tags: ['RULES']
            }
        ],
        visualizations: [
            {
                id: 'v7-daly-rules',
                title: "Herman Daly's Sustainability Rules",
                type: 'grid',
                data: [
                    { label: 'Regeneration', desc: 'Extraction must not exceed regrowth.' },
                    { label: 'Absorption', desc: 'Waste must remain within digestive limits.' },
                    { label: 'Substitution', desc: 'Non-renewables replaced by renewables.' },
                    { label: 'Efficiency', desc: 'Shift to input-efficient technology.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-strategies',
        title: '7.5 Strategies for Sustainability',
        description: 'Practical paths to green development.',
        content: [
            {
                type: 'list',
                title: 'Systemic Shifts',
                points: [
                    '**Energy**: Solar (ISA leadership), Wind, and Mini-Hydel for mountains.',
                    '**Urban Transport**: Delhi\'s success with CNG.',
                    '**Rural Solutions**: LPG and Gobar gas to reduce biomass usage.',
                    '**Pest Control**: Using Neem and natural predators (snakes/owls).'
                ],
                tags: ['STRATEGIES']
            }
        ],
        visualizations: [
            {
                id: 'v7-green-strategies',
                title: 'Pathway to Green Growth',
                type: 'grid',
                data: [
                    { label: 'Solar & Wind', desc: 'Leveraging ISA for renewable power.' },
                    { label: 'CNG / LPG', desc: 'Cleaner fuels for urban and rural areas.' },
                    { label: 'Biopesticides', desc: 'Neem-based control vs chemical toxins.' },
                    { label: 'Mini-Hydel', desc: 'Small-scale perennial stream power.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch7-conclusion',
        title: '7.6 Conclusion',
        description: 'Balanced welfare.',
        content: [
            {
                type: 'concept',
                title: 'Sustainable Future',
                text: 'A genuine shift involves reversing the supply-demand relationship: making resource regeneration faster than harvesting.',
                tags: ['CONCLUSION']
            }
        ],
        visualizations: [
            {
                id: 'v7-welfare-sync',
                title: 'Welfare and Environment',
                type: 'process',
                data: [
                    { title: 'Information', description: 'Traditional knowledge and IT synergy.' },
                    { title: 'Infrastructure', description: 'Investment in green tech and energy.' },
                    { title: 'Result', description: 'Non-declining welfare for all generations.' }
                ]
            }
        ]
    }
];
