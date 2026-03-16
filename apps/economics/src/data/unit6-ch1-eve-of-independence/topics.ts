import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch1-intro',
        title: '1.0 Introduction',
        description: 'The roots of the Indian colonial economy.',
        content: [
            {
                type: 'context',
                title: 'Colonial Roots',
                text: 'The structure of India\'s present-day economy has its roots in the British colonial period, which lasted almost two centuries before independence on 15 August 1947. The sole purpose of British colonial rule was to reduce India to a raw material supplier for Britain\'s rapidly expanding modern industrial base.'
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-motive',
                title: 'Two-Fold Motive of British Rule',
                type: 'grid',
                data: [
                    { label: 'Role 1', desc: 'Transform India into a net supplier of raw materials for Britain\'s modern industries.' },
                    { label: 'Role 2', desc: 'Turn India into a consumer of finished industrial products imported from Britain.' }
                ],
                aiExplanation: [
                    'This dual strategy ensured India\'s own handicraft industries were crippled while Britain\'s industrial revolution flourished.',
                    'The synergy between supply and demand was forced upon India for colonial gain.'
                ]
            }
        ]

    },
    {
        id: 'u6-ch1-dev-level',
        title: '1.1 Low Level of Economic Development',
        description: 'Independent economy vs. British-serving policies.',
        content: [
            {
                type: 'concept',
                title: 'Pre-Colonial Independence',
                text: 'India had an independent economy before British rule, with thriving handicraft industries in cotton, silk textiles, metal, and precious stone works.',
                tags: ['HISTORY']
            },
            {
                type: 'concept',
                title: 'Colonial Impact',
                text: 'Colonial economic policies prioritised British interests over Indian development. India was transformed into a supplier of raw materials and a consumer of British finished goods.',
                points: [
                    'Aggregate real output growth in the first half of the 20th century was less than **2%** per year.',
                    'Per capita output grew at a meagre **0.5%** per year.'
                ],
                tags: ['STAGNATION']
            },
            {
                type: 'concept',
                title: 'Notable Economists (Estimators)',
                text: 'Notable economists who estimated per capita income include Dadabhai Naoroji, William Digby, Findlay Shirras, V.K.R.V. Rao (most significant), and R.C. Desai.',
                tags: ['DATA']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-growth-stats',
                title: 'Growth Rates (1900-1950)',
                type: 'grid',
                data: [
                    { label: 'Real GDP Growth', desc: 'Less than 2% per year' },
                    { label: 'Per Capita Growth', desc: 'Meagre 0.5% per year' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch1-agri',
        title: '1.2 Agricultural Sector',
        description: 'Stagnation and exploitation in the primary sector.',
        content: [
            {
                type: 'concept',
                title: 'Dependence on Land',
                text: 'About **85%** of India\'s population lived in villages and depended on agriculture. Despite being the primary occupation, the sector experienced severe stagnation and deterioration.',
                tags: ['DEPENDENCE']
            },
            {
                type: 'warning',
                title: 'Causes of Stagnation',
                points: [
                    '**Exploitative Land Settlement:** The **Zamindari System** – profits went to zamindars instead of cultivators. Revenue settlement terms forced zamindars to extract maximum rent.',
                    '**Commercialisation:** Shift from food crops to cash crops (e.g., Indigo) for British industry.',
                    '**Infrastructure Gaps:** Low levels of technology, lack of irrigation facilities, and negligible use of fertilisers.',
                    '**Neglect:** No investment in terracing, flood-control, drainage, or soil improvement.'
                ],
                tags: ['STAGNATION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-agri-problems',
                title: 'Framework: Why Agri Declined?',
                type: 'table',
                data: {
                    headers: ['Factor', 'Colonial Reality'],
                    rows: [
                        ['System', 'Zamindari Exploitation'],
                        ['Objective', 'Commercialisation (Cash Crops)'],
                        ['Technology', 'Outdated/Zero Fertilizers'],
                        ['Infrastructure', 'Negligible Irrigation']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch1-industry',
        title: '1.3 Industrial Sector',
        description: 'Deindustrialisation and the birth of modern industry.',
        content: [
            {
                type: 'concept',
                title: 'Handicraft Decline',
                text: 'India\'s world-famous handicraft industries declined under colonial rule with no modern replacement. This was a two-fold motive: to make India an exporter of raw materials and a market for British finished goods.',
                tags: ['DEINDUSTRIALISATION']
            },
            {
                type: 'concept',
                title: 'Evolution of Modern Industry',
                text: 'Modern industry emerged slowly in the second half of the 19th century.',
                points: [
                    '**Textiles:** Cotton mills (Indian-dominated) in Maharashtra/Gujarat; Jute mills (foreign-dominated) in Bengal.',
                    '**TISCO:** Tata Iron and Steel Company was incorporated in **1907** at Jamshedpur.',
                    '**Critical Gap:** Almost no capital goods industry; public sector remained confined to railways, power, and ports.'
                ],
                tags: ['INDUSTRY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-industry-milestones',
                title: 'Industrial Timeline & Structure',
                type: 'steps',
                data: [
                    'Decline of Handicraft dominance',
                    'Mid-19th Cent: Cotton & Jute Mills established',
                    '1907: TISCO Incorporation',
                    'Post-WWII: Sugar, Cement, Paper emergence',
                    '1947: Severe lack of Capital Goods capability'
                ]
            }
        ]
    },
    {
        id: 'u6-ch1-trade',
        title: '1.4 Foreign Trade',
        description: 'Monopoly control and the Drain of Wealth.',
        content: [
            {
                type: 'concept',
                title: 'Colonial Trade Pattern',
                text: 'Britain maintained a monopoly. Over half of India\'s foreign trade was with Britain alone.',
                points: [
                    '**Exports:** Primary products (raw silk, cotton, wool, indigo, jute).',
                    '**Imports:** British finished goods and light machinery.',
                    '**Suez Canal (1869):** Reduced transport costs but intensified British control.'
                ],
                tags: ['MONOPOLY']
            },
            {
                type: 'warning',
                title: 'The Drain of Wealth',
                text: 'The large export surplus did NOT benefit India. It was used to pay for colonial office expenses in Britain, British wars, and "Invisible Imports", leading to the systematic drain of Indian wealth.',
                tags: ['EXPLOITATION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-trade-monopoly',
                title: 'Distribution of Foreign Trade',
                type: 'grid',
                data: [
                    { label: 'Britain', desc: 'Over 50% Control' },
                    { label: 'Suez Canal (1869)', desc: 'Direct route for British exploitation' },
                    { label: 'Export Surplus', desc: 'Used for British Admin & Wars' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch1-demography',
        title: '1.5 Demographic Condition',
        description: 'Low literacy, high mortality, and extreme poverty.',
        content: [
            {
                type: 'concept',
                title: 'Census and Transition',
                text: 'The first official census was conducted in **1881**. The year **1921** is the defining year for demographic transition from the 1st to the 2nd stage (Great Divide).',
                tags: ['DATA']
            },
            {
                type: 'concept',
                title: 'Key Social Indicators',
                points: [
                    '**Literacy:** Overall <16%; Female literacy ~7%.',
                    '**Mortality:** Infant Mortality Rate **218** per thousand (Current: ~28).',
                    '**Life Expectancy:** **32 years** (Current: 69 years).',
                    '**Health:** Rampant air and water-borne diseases; lack of public health facilities.'
                ],
                tags: ['SOCIO_ECONOMIC']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-demo-comparison',
                title: 'Then vs. Now: Demographic Crisis',
                type: 'table',
                data: {
                    headers: ['Indicator', 'Colonial Era', 'Present Day'],
                    rows: [
                        ['Literacy Rate', '< 16%', 'Approx. 74%'],
                        ['Infant Mortality', '218 per 1000', 'Approx. 28 per 1000'],
                        ['Life Expectancy', '32 Years', 'Approx. 69 Years'],
                        ['Year of Great Divide', '1921', '-']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch1-occupation',
        title: '1.6 Occupational Structure',
        description: 'Stagnated workforce distribution.',
        content: [
            {
                type: 'concept',
                title: 'Workforce Allocation',
                text: 'There was little change in distribution of workforce across sectors during the colonial period.',
                points: [
                    '**Agriculture:** 70–75% of workforce.',
                    '**Manufacturing:** ~10%.',
                    '**Services:** 15–20%.'
                ],
                tags: ['STRUCTURE']
            },
            {
                type: 'context',
                title: 'Regional Variations',
                text: 'Madras Presidency, Bombay, and Bengal saw a shift toward manufacturing and services. Conversely, Orissa, Rajasthan, and Punjab saw increased dependence on agriculture.'
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-occ-stats',
                title: 'Table 1.1: Sectoral Distribution of Workforce',
                type: 'table',
                data: {
                    headers: ['Sector', 'Share of Workforce (%)', 'Status'],
                    rows: [
                        ['Agriculture', '70–75%', 'Severely Stagnant'],
                        ['Manufacturing', '10%', 'Underdeveloped'],
                        ['Services', '15–20%', 'Limited Context']
                    ]
                },
                aiExplanation: [
                    'Notice the overwhelming dependence on agriculture, which is characteristic of a backward economy.',
                    'The lack of structural shift indicates that colonial rule did not foster industrial growth.'
                ]
            }
        ]

    },
    {
        id: 'u6-ch1-infrastructure',
        title: '1.7 Infrastructure',
        description: 'Colonial interests vs. public welfare.',
        content: [
            {
                type: 'concept',
                title: 'Railways and Roads',
                text: 'Infrastructure (railways, ports, posts, telegraphs) served colonial interests, not public welfare.',
                points: [
                    '**Railways (1850):** Enabled long-distance travel and broke cultural barriers, but also commercialised agriculture and undermined village self-sufficiency.',
                    '**Roads:** Built to mobilise armies and transport raw materials; acute shortage of all-weather rural roads.',
                    '**Telegraph:** Introduced to maintain law and order via electric telegraph.'
                ],
                tags: ['INFRASTRUCTURE']
            }
        ],
        visualizations: [
            {
                id: 'index-infrastructure-goals',
                title: 'Infrastructure: Purpose vs. Effect',
                type: 'table',
                data: {
                    headers: ['Facility', 'Imperial Purpose', 'Unintended Side-Effect'],
                    rows: [
                        ['Railways', 'Military movement / Export', 'Social & Cultural Integration'],
                        ['Telegraph', 'Law and Order', 'Faster communication base'],
                        ['Roads', 'Interior to Port link', 'Limited rural connectivity']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch1-conclusion',
        title: '1.8 Conclusion',
        description: 'The enormous inheritance of challenges.',
        content: [
            {
                type: 'concept',
                title: 'Summary of Inherited Challenges',
                text: 'By independence in 1947, the challenges inherited were enormous across all sectors.',
                points: [
                    '**Agriculture:** Surplus labour and extremely low productivity.',
                    '**Industry:** Required modernisation, diversification, and public investment.',
                    '**Trade:** Oriented solely to feed Britain\'s Industrial Revolution.',
                    '**Society:** Rampant poverty, unemployment, and poor health.'
                ],
                tags: ['SUMMARY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch1-inherited',
                title: 'Summary: Inherited Challenges in 1947',
                type: 'grid',
                data: [
                    { label: 'Agriculture', desc: 'Massive surplus labour; lowest per-acre productivity.' },
                    { label: 'Industry', desc: 'Absence of capital goods; skewed sectoral focus.' },
                    { label: 'Demography', desc: 'High mortality; low literacy; life expectancy of 32 years.' },
                    { label: 'Trade', desc: 'Systemic Drain of Wealth to feed British interests.' }
                ]
            }
        ]

    }
];

