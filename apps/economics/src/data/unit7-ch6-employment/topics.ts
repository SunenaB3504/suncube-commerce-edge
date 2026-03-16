import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-intro',
        title: '6.1 Introduction',
        description: 'Why do we work and why study workforce?',
        content: [
            {
                type: 'concept',
                title: 'The Significance of Work',
                text: 'Work is not just for earning a living; it provides self-worth and enables meaningful participation in society. Every working person contributes to the national income (GNP) and hence the development of the country.',
                tags: ['SIGNIFICANCE']
            },
            {
                type: 'concept',
                title: 'Insights from Workforce Study',
                points: [
                    'Helps in planning human resources and quality of employment.',
                    'Analyses contributions of different sectors to national income.',
                    'Addresses social issues like child labour and labor exploitation.'
                ],
                tags: ['ANALYSIS']
            }
        ],
        visualizations: [
            {
                id: 'v6-significance-grid',
                title: 'Why Study Workforce?',
                type: 'grid',
                data: [
                    { label: 'Economic', desc: 'Contribution to GNP and sectoral growth.' },
                    { label: 'Social', desc: 'Self-worth and societal participation.' },
                    { label: 'Planning', desc: 'Resource allocation and HR management.' },
                    { label: 'Reform', desc: 'Identifying issues like child labor.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-definitions',
        title: '6.2 Workers and Employment',
        description: 'Key definitions and workforce facts.',
        content: [
            {
                type: 'concept',
                title: 'Essential Terminology',
                points: [
                    '**Economic activities**: Activities contributing to Gross National Product (GNP).',
                    '**Worker**: Anyone engaged in economic activities, including self-employed and those temporarily absent due to illness or injury.',
                    '**Unemployment**: A situation where one cannot get even one hour of work in half a day.'
                ],
                tags: ['DEFINITIONS']
            },
            {
                type: 'concept',
                title: 'India\'s Workforce Snapshot',
                points: [
                    'Total workforce: ~545 million (2022-23).',
                    'Rural workforce constitutes about 2/3rd of the total.',
                    'Gender Gap: Men account for 77%; Women for ~23%.'
                ],
                tags: ['DATA']
            }
        ],
        visualizations: [
            {
                id: 'v6-workforce-grid',
                title: 'India\'s Workforce at a Glance',
                type: 'grid',
                data: [
                    { label: 'Total', desc: '545 million active workers.' },
                    { label: 'Locality', desc: '2/3rd Rural vs 1/3rd Urban.' },
                    { label: 'Gender', desc: '77% Men vs 23% Women.' },
                    { label: 'Participation', desc: 'High female participation in rural areas.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-participation',
        title: '6.3 Participation in Employment',
        description: 'The Worker-Population Ratio (WPR).',
        content: [
            {
                type: 'concept',
                title: 'WPR (Worker-Population Ratio)',
                text: 'The proportion of the total population engaged in economic activities. Higher ratio = greater engagement of people in the production of goods and services.',
                tags: ['RATIO']
            },
            {
                type: 'concept',
                title: 'Regional Differences',
                text: 'Rural WPR (~42) is higher than urban (~38). Higher female participation in rural areas is often a result of poverty; people in rural areas cannot afford to stay unemployed.',
                tags: ['ANALYSIS']
            }
        ],
        visualizations: [
            {
                id: 'v6-wpr-table',
                title: 'Table 6.1: WPR in India (2022-23)',
                type: 'table',
                data: {
                    headers: ['Sex', 'Total (%)', 'Rural (%)', 'Urban (%)'],
                    rows: [
                        ['Men', '54.4', '54.0', '55.6'],
                        ['Women', '27.0', '30.0', '18.7'],
                        ['Total', '41.1', '42.3', '37.7']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch6-status',
        title: '6.4 Self-Employed and Hired Workers',
        description: 'Distribution by employment status.',
        content: [
            {
                type: 'concept',
                title: 'Employment Categories',
                points: [
                    '**Self-employed (57%)**: Own and operate enterprises (e.g., Farmers, Shopkeepers).',
                    '**Casual Wage Labourers (22%)**: Most vulnerable; engaged on daily wages without social security.',
                    '**Regular Salaried (21%)**: Engaged for regular wages/salaries; enjoy some social security (more in urban).'
                ],
                tags: ['STATUS']
            }
        ],
        visualizations: [
            {
                id: 'v6-status-grid',
                title: 'Employment Status Breakdown',
                type: 'grid',
                data: [
                    { label: 'Self-Employed', desc: '57.3% - Major segment (Agri/Trade).' },
                    { label: 'Casual Labour', desc: '21.8% - Vulnerable daily wagers.' },
                    { label: 'Regular Salaried', desc: '20.9% - Stable urban jobs.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-industry',
        title: '6.5 Workers in Firms and Factories',
        description: 'Sector-wise distribution of workforce.',
        content: [
            {
                type: 'concept',
                title: 'Primary Sector Dominance',
                text: 'Employing 46.1% of the total workforce, the primary sector remains the largest employer, specifically for women (64%).',
                tags: ['INSIGHT']
            }
        ],
        visualizations: [
            {
                id: 'v6-industry-table',
                title: 'Table 6.2: Workforce by Industry (2022-23)',
                type: 'table',
                data: {
                    headers: ['Category', 'Rural (%)', 'Urban (%)', 'Total (%)'],
                    rows: [
                        ['Primary (Agri)', '57.8', '9.0', '46.1'],
                        ['Secondary (Ind)', '22.5', '32.7', '24.9'],
                        ['Tertiary (Serv)', '18.0', '60.4', '29.0']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch6-growth',
        title: '6.6 Growth & Structural Change',
        description: 'Jobless growth and sectoral trends.',
        content: [
            {
                type: 'warning',
                title: 'Jobless Growth',
                text: 'A situation where GDP grows faster than employment growth. India experienced this significantly after 1991, where value was created without proportional job additions.',
                tags: ['WARNING']
            }
        ],
        visualizations: [
            {
                id: 'v6-sectoral-trends',
                title: 'Sectoral Shift (1972 - 2023)',
                type: 'table',
                data: {
                    headers: ['Sector', '1972-73', '2011-12', '2022-23'],
                    rows: [
                        ['Primary', '74.3', '48.9', '46.1'],
                        ['Secondary', '10.9', '24.3', '24.9'],
                        ['Tertiary', '14.8', '26.8', '29.0']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch6-informalisation',
        title: '6.7 Informalisation of Workforce',
        description: 'Formal vs Informal sector challenges.',
        content: [
            {
                type: 'concept',
                title: 'The Unorganised Majority',
                points: [
                    '**94% of workers** are in the informal sector (unorganised).',
                    'Informal workers lack job security, labor law protection, and social security.',
                    'Regular workers in informal enterprises (e.g., small tea stalls) are also considered informal.'
                ],
                tags: ['CHALLENGE']
            },
            {
                type: 'warning',
                title: 'Social Risk',
                text: 'Closure of formal industries (like the Ahmedabad textile mills) pushes workers into informal jobs, leading to lower income and social distress.',
                tags: ['RISK']
            }
        ],
        visualizations: [
            {
                id: 'v6-informal-logic',
                title: 'Formal vs. Informal Sector',
                type: 'table',
                data: {
                    headers: ['Feature', 'Formal Sector', 'Informal Sector'],
                    rows: [
                        ['Establishments', 'Entities with 10+ workers', 'Own-account or <10 workers'],
                        ['Protection', 'Labor Laws apply', 'No labor law coverage'],
                        ['Social Security', 'PF, Pension, Gratuity', 'No such benefits'],
                        ['Workforce Size', 'Small (~6%)', 'Massive (~94%)']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch6-unemployment',
        title: '6.8 Unemployment Types',
        description: 'Open, Disguised, and Seasonal.',
        content: [
            {
                type: 'concept',
                title: 'The Hidden Jobless',
                points: [
                    '**Disguised**: More workers than needed; removing some won\'t reduce output. Zero marginal productivity.',
                    '**Seasonal**: Lack of year-round work; common in agriculture.',
                    '**Open**: Willing/able to work but cannot find any (visible unemployment).'
                ],
                tags: ['TYPES']
            }
        ],
        visualizations: [
            {
                id: 'v6-unemployment-types',
                title: 'The Profile of Unemployment',
                type: 'grid',
                data: [
                    { label: 'Disguised', desc: 'Hidden; zero marginal productivity (Agri).' },
                    { label: 'Seasonal', desc: 'Occasional; based on crop cycles.' },
                    { label: 'Open', desc: 'Visible; actively seeking but no job.' },
                    { label: 'Educated', desc: 'Mismatched skills vs. available work.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-gov-init',
        title: '6.9 Govt Employment Initiatives',
        description: 'Direct and indirect generation.',
        content: [
            {
                type: 'concept',
                title: 'MGNREGA (2005)',
                text: 'Guarantees **100 days** of unskilled manual work to rural households. This is a direct employment generation model.',
                tags: ['POLICY']
            },
            {
                type: 'concept',
                title: 'Multi-Pronged Approach',
                points: [
                    '**Direct**: Jobs in Government departments.',
                    '**Indirect**: Growth in Gov enterprises driving demand for private sector inputs.',
                    '**Self-employment**: Schemes like MGNREGA also build infrastructure for self-employment.'
                ],
                tags: ['GOVERNANCE']
            }
        ],
        visualizations: [
            {
                id: 'v6-gov-strategy',
                title: 'Government Job Strategy',
                type: 'process',
                data: [
                    { title: 'Direct', description: 'Govt Departments & PSUs hiring.' },
                    { title: 'Indirect', description: 'Enterprise growth creating supply-chain jobs.' },
                    { title: 'Security', description: 'MGNREGA act as an employment safety net.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch6-conclusion',
        title: '6.10 Conclusion',
        description: 'The shifting workplace.',
        content: [
            {
                type: 'concept',
                title: 'Modern Growth Patterns',
                text: 'Structural change shows a shift from Primary towards Services. Informalisation remains a massive hurdle, and growth is increasingly service-led rather than manufacturing-led.',
                tags: ['CONCLUSION']
            }
        ],
        visualizations: [
            {
                id: 'v6-future-trends',
                title: 'Future of Indian Work',
                type: 'grid',
                data: [
                    { label: 'Service Hub', desc: 'Tertiary sector as the growth engine.' },
                    { label: 'Informal Hub', desc: 'Need to formalise 94% of the workforce.' },
                    { label: 'Work @ Home', desc: 'Increasing freelance and home-based work.' }
                ]
            }
        ]
    }
];
