import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch2-systems',
        title: '2.1 Types of Economic Systems',
        description: 'Addressing the 3 central problems of an economy.',
        content: [
            {
                type: 'concept',
                title: 'The Three Basic Questions',
                text: 'Every society has to answer three questions to decide its economic system:',
                points: [
                    '**What** to produce? (Choice of goods and services)',
                    '**How** to produce? (Labour-intensive vs. Capital-intensive)',
                    '**For whom** to produce? (Distribution based on ability to pay vs. need)'
                ],
                tags: ['FUNDAMENTALS']
            },
            {
                type: 'concept',
                title: 'Market vs. Command vs. Mixed',
                text: 'In a **Market Economy** (Capitalism), only those goods are produced that can be sold profitably. In a **Socialist Economy**, the government decides production based on social needs. India opted for a **Mixed Economy**.',
                tags: ['SYSTEMS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-systems-table',
                title: 'Comparative Systems Guide',
                type: 'table',
                data: {
                    headers: ['Feature', 'Capitalism', 'Socialism', 'Mixed Economy'],
                    rows: [
                        ['Ownership', 'Private Persons', 'Government', 'Both Public & Private'],
                        ['Objective', 'Profit Maximization', 'Social Welfare', 'Both Profit & Welfare'],
                        ['Distribution', 'Purchasing Power', 'According to Need', 'Mixed Rationale']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-choice',
        title: '2.2 The Indian Choice: Mixed Economy',
        description: 'Rationale for the "Socialist Pattern of Society".',
        content: [
            {
                type: 'context',
                title: 'Nehru\'s Vision',
                text: 'Jawaharlal Nehru and other leaders were attracted to the Soviet model but favoured a system that didn\'t involve state ownership of all property. They wanted a system where the government would plan for the economy but the private sector would also play a role.',
                tags: ['VISION']
            },
            {
                type: 'concept',
                title: 'The Industrial Policy Resolution 1948',
                text: 'It reflected the goal of a **Socialist Pattern of Society**, where the government would control the "commanding heights" of the economy – the industries essential for development.',
                tags: ['POLICY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-mixed-economy-vision',
                title: 'Architects of the "Middle Path"',
                type: 'grid',
                data: [
                    { label: 'Nehru\'s Stance', desc: 'Democracy with growth; rejected extreme Soviet-style state control.' },
                    { label: 'Socialist Pattern', desc: 'Private sector incentivised to follow the national plan.' },
                    { label: 'IPR 1948', desc: 'First official adoption of the Mixed Economy framework.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-planning-concept',
        title: '2.3 What is a Plan?',
        description: 'Perspective vs. Five-Year Plans.',
        content: [
            {
                type: 'concept',
                title: 'The Planning Commission',
                text: 'Set up in **1950** with the Prime Minister as Chairperson. It was replaced by **NITI Aayog** on 1 January 2015.',
                tags: ['COMMISSION']
            },
            {
                type: 'concept',
                title: 'Types of Plans',
                points: [
                    '**Five-Year Plans:** Short-term documents specifying objectives for a 5-year period.',
                    '**Perspective Plans:** A long-term vision document (spanning 20 years) that provides the framework for individual five-year plans.'
                ],
                tags: ['STRUCTURE']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-plan-types',
                title: 'Comparison: FYP vs. Perspective Plans',
                type: 'table',
                data: {
                    headers: ['Feature', 'Five-Year Plan', 'Perspective Plan'],
                    rows: [
                        ['Duration', '5 Years', '20 Years'],
                        ['Detail', 'Highly detailed sectoral targets', 'Broad strategic goals'],
                        ['Function', 'Implementation unit', 'Long-term roadmap']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-goals',
        title: '2.4 General Goals of Five Year Plans',
        description: 'The GMSE Framework for shared prosperity.',
        content: [
            {
                type: 'concept',
                title: 'Growth & Structural Change',
                text: 'Growth refers to the increase in **GDP**. A larger GDP means a larger "cake" (total output) for the people to share. It is often accompanied by **Structural Change** – a shift from agriculture to industry and services.',
                tags: ['GROWTH']
            },
            {
                type: 'concept',
                title: 'Modernisation & Social Change',
                text: 'Modernisation has two dimensions: **Technical** (new technology like HYV) and **Social** (gender equality, breaking caste barriers).',
                tags: ['MODERNISATION']
            },
            {
                type: 'concept',
                title: 'Self-Reliance & Equity',
                points: [
                    '**Self-reliance:** Avoiding imports of goods that could be produced domestically to reduce foreign interference (especially food).',
                    '**Equity:** Ensuring that the benefits of economic prosperity reach even the poorest sections.'
                ],
                tags: ['EQUITY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-gmse-goals',
                title: 'The 4 Pillars: GMSE Framework',
                type: 'process',
                data: [
                    { title: 'Growth', description: 'Expanding the production capacity of the economy (higher GDP).' },
                    { title: 'Modernization', description: 'Adopting new tech and shifting social mindsets (e.g., gender equality).' },
                    { title: 'Self-Reliance', description: 'Reducing dependency on foreign nations for vital supplies.' },
                    { title: 'Equity', description: 'Fair distribution of growth to reduce the gap between rich and poor.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-land-reforms',
        title: '2.5 Land Reforms: Institutional Change',
        description: 'Abolishing intermediaries and empowering tillers.',
        content: [
            {
                type: 'concept',
                title: 'Abolition of Intermediaries',
                text: 'The Zamindari system was abolished to bring about **200 lakh tenants** into direct contact with the government. Ownership gave them incentives to increase productivity.',
                tags: ['EQUITY']
            },
            {
                type: 'context',
                title: 'The Success of Kerala and West Bengal',
                text: 'Land reforms were most successful in these states because the governments were committed to the policy of "land to the tiller".'
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-land-reforms-process',
                title: 'Impact of Abolishing Intermediaries',
                type: 'grid',
                data: [
                    { label: 'Direct Link', desc: 'Stopped the leak of surplus from farmers to landlords.' },
                    { label: 'Ownership', desc: 'Incentivized long-term investment in land quality.' },
                    { label: 'Social Justice', desc: 'Redistributed the "commanding height" of the rural economy.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-land-ceiling',
        title: '2.6 Land Ceiling: Reducing Inequality',
        description: 'Fixing ownership limits and legal hurdles.',
        content: [
            {
                type: 'concept',
                title: 'Definition and Rationale',
                text: 'Land Ceiling means fixing the maximum size of land which could be owned by an individual. The purpose was to reduce the concentration of land ownership.',
                tags: ['REFORM']
            },
            {
                type: 'warning',
                title: 'The "Benami" Loophole',
                text: 'Many big landlords registered their lands in the name of close relatives or servants to escape the ceiling. In some states, landlords challenged the law in courts, delaying implementation.',
                tags: ['HURDLES']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-ceiling-hurdles',
                title: 'Why Ceiling Often Failed',
                type: 'grid',
                data: [
                    { label: 'Legal Delay', desc: 'Court challenges gave landlords time to redistribute land on paper.' },
                    { label: 'Benami Transfers', desc: 'Registering land under names of servants or distant relatives.' },
                    { label: 'Political Will', desc: 'Lack of sincere implementation in certain states.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-green-rev',
        title: '2.7 The Green Revolution: Technical Change',
        description: 'HYV seeds and food self-sufficiency.',
        content: [
            {
                type: 'concept',
                title: 'The HYV Miracle',
                text: 'High Yielding Variety (HYV) seeds required reliable irrigation and fertilisers. This period (Mid-60s) ended India\'s "begging bowl" status.',
                points: [
                    '**Phase 1 (Mid-60s to Mid-70s):** Restricted to wheat-rich states (Punjab, Haryana, TN).',
                    '**Phase 2 (Mid-70s to Mid-80s):** Widespread adoption of more crops and more states.'
                ],
                tags: ['TECHNOLOGY']
            },
            {
                type: 'concept',
                title: 'Marketed Surplus & Buffer Stocks',
                text: '**Marketed Surplus** is the portion of agricultural produce sold by farmers in the market after their own consumption. This allowed the government to build **Buffer Stocks** using the FCI.',
                tags: ['SECURITY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-green-rev-phases',
                title: 'Two Phases of Green Revolution',
                type: 'table',
                data: {
                    headers: ['Timeline', 'Coverage', 'Primary States'],
                    rows: [
                        ['Mid-60s to Mid-70s', 'Wheat intensive', 'Punjab, Haryana, Western UP'],
                        ['Mid-70s to Mid-80s', 'Broad crop range', 'Across India (East and South)']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch2-ipr1956',
        title: '2.8 Industrial Policy Resolution (IPR) 1956',
        description: 'The blueprint for the Second Five Year Plan.',
        content: [
            {
                type: 'concept',
                title: 'The Mahalanobis Model',
                text: 'PRASANTA CHANDRA MAHALANOBIS is the architect. IPR 1956 formed the basis of the **Second Plan**, aiming for a socialist pattern of society.',
                tags: ['ARCHITECTURE']
            },
            {
                type: 'concept',
                title: 'The Three Schedules',
                points: [
                    '**Schedule A:** 17 industries exclusively owned by the government.',
                    '**Schedule B:** 12 industries where state takes lead (e.g., Mining).',
                    '**Schedule C:** Remaining industries for private sector (regulated by Licensing).'
                ],
                tags: ['IPR_1956']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-ipr-summary',
                title: 'Industrial Licensing System',
                type: 'grid',
                data: [
                    { label: 'Start-up', desc: 'License needed to set up any new factory.' },
                    { label: 'Expansion', desc: 'Permission required to increase production capacity.' },
                    { label: 'Diversification', desc: 'Government approval for producing new goods.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-ssi',
        title: '2.9 Small-Scale Industries (SSI)',
        description: 'The Karve Committee and employment generation.',
        content: [
            {
                type: 'concept',
                title: 'The Karve Committee (1955)',
                text: 'Also known as the Village and Small-Scale Industries Committee. It noted that small-scale industries are more **labour-intensive**.',
                tags: ['EMPLOYMENT']
            },
            {
                type: 'concept',
                title: 'Protection of SSI',
                text: 'The government **reserved** certain products for the small-scale sector to protect them from large firms.',
                tags: ['PROTECTION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-ssi-rationale',
                title: 'Why Support Small-Scale Industry?',
                type: 'grid',
                data: [
                    { label: 'Labour Intensive', desc: 'Uses more labour per unit of capital than large firms.' },
                    { label: 'Employment', desc: 'Crucial for distributing income in a populous country.' },
                    { label: 'Reservation', desc: 'Over 800 products were once reserved for SSI alone.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch2-trade-policy',
        title: '2.10 Trade Policy: Inward Strategy',
        description: 'Import substitution and protectionism.',
        content: [
            {
                type: 'concept',
                title: 'Import Substitution',
                text: 'India adopted an "Inward Looking Trade Strategy". This means protecting domestic industries from foreign competition.',
                points: [
                    '**Tariffs:** High taxes on imported goods to make them expensive.',
                    '**Quotas:** Fixing the maximum quantity of goods that can be imported.'
                ],
                tags: ['PROTECTIONISM']
            },
            {
                type: 'tip',
                title: 'Critical Appraisal (1950-1990)',
                points: [
                    '**Achievements:** Industrial diversification; food self-sufficiency.',
                    '**Failures:** "License Raj" corruption; loss-making PSUs; outdated tech.'
                ],
                tags: ['EVALUATION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch2-trade-barrier-comp',
                title: 'Tariffs vs. Quotas',
                type: 'table',
                data: {
                    headers: ['Feature', 'Tariffs', 'Quotas'],
                    rows: [
                        ['Mechanism', 'Hidden Tax (Cost)', 'Direct Cap (Quantity)'],
                        ['Objective', 'Discourage Imports', 'Control absolute Flow'],
                        ['Impact', 'Raises Prices', 'Restricts Availability']
                    ]
                }
            }
        ]
    }
];
