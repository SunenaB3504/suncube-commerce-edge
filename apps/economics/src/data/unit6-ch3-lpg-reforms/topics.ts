import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u6-ch3-background',
        title: '3.1 Background: The Economy in 1991',
        description: 'The state of the Indian economy leading to reforms.',
        content: [
            {
                type: 'concept',
                title: 'Stagnation and Inefficiency',
                text: 'By the late 1980s, the Indian economy was facing severe problems due to the "License Raj" and inefficient public sector units. Government expenditure exceeded its revenue by such a large margin that even meeting the interest payments became difficult.',
                tags: ['CONTEXT']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-crisis-atmosphere',
                title: 'Economy on the Edge (1991)',
                type: 'grid',
                data: [
                    { label: 'Fiscal Crisis', desc: 'Expenditure >> Revenue; government living beyond its means.' },
                    { label: 'Inflation', desc: 'Prices of essential goods rising by 13–17%.' },
                    { label: 'BoP Crisis', desc: 'Record deficits in the Balance of Payments.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-triggers',
        title: '3.2 Triggers of the 1991 Crisis',
        description: 'Direct causes of the economic emergency.',
        content: [
            {
                type: 'concept',
                title: 'BoP and Fiscal Crisis',
                points: [
                    '**Foreign Exchange Crisis:** Reserves fell to a level only sufficient to pay for **Two Weeks** of imports.',
                    '**Fiscal Deficit:** Huge government borrowing led to a massive internal debt.',
                    '**High Inflation:** Prices of essential goods rose sharply.',
                    '**Gulf War (1990-91):** Spike in oil prices and drop in remittances.'
                ],
                tags: ['CRISIS']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-emergency-markers',
                title: 'Economic Emergency Markers',
                type: 'list',
                data: [
                    'Forex reserves for only 14 days',
                    '7 Billion dollar loan requirement',
                    'Double-digit inflation (17%)',
                    'Failure of public sector revenue'
                ],
                aiExplanation: [
                    'The two-week reserve limit is the most cited fact for the 1991 crisis.',
                    'Inflation was so high that it threatened social stability.'
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-nep',
        title: '3.3 The New Economic Policy (NEP)',
        description: 'Stabilisation vs. Structural reforms.',
        content: [
            {
                type: 'concept',
                title: 'IMF/World Bank Intervention',
                text: 'India approached the IBRD (World Bank) and IMF for a **$7 Billion** loan. They agreed on the condition that India liberalise and open up its economy.',
                tags: ['BAILOUT']
            },
            {
                type: 'concept',
                title: 'Two Prongs of NEP',
                points: [
                    '**Stabilisation Measures:** Short-term measures to correct BoP and control inflation.',
                    '**Structural Reform Policies:** Long-term measures to improve efficiency and competitiveness.'
                ],
                tags: ['STRATEGY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-reform-logic',
                title: 'Stabilisation vs. Structural Reforms',
                type: 'table',
                data: {
                    headers: ['Feature', 'Stabilisation (Short-term)', 'Structural (Long-term)'],
                    rows: [
                        ['Goal', 'Control Inflation & Fix BoP', 'Increase Efficiency & Competitiveness'],
                        ['Logic', 'Demand management', 'Supply-side improvements'],
                        ['Tools', 'Foreign exchange management', 'Liberalisation & Privatisation']
                    ]
                }
            }
        ]
    },
    {
        id: 'u6-ch3-liberalisation-ind',
        title: '3.4 Liberalisation: Industrial Sector',
        description: 'Deregulation and the end of License Raj.',
        content: [
            {
                type: 'concept',
                title: 'Deregulation Measures',
                points: [
                    '**Abolition of Licensing:** Abolished for almost all but five industry groups.',
                    '**Public Sector Contraction:** Reserved industries reduced (now only Railways and Atomic Energy).',
                    '**SSI De-reservation:** Most products opened for all firms.',
                    '**Price Determination:** Market forces allowed to determine prices.'
                ],
                tags: ['DEREGULATION']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-licensed-industries',
                title: 'The 5 Remaining Licensed Groups',
                type: 'grid',
                data: [
                    { label: 'Group 1', desc: 'Alcohol (Potable/Industrial)' },
                    { label: 'Group 2', desc: 'Cigarettes & Tobacco' },
                    { label: 'Group 3', desc: 'Hazardous Chemicals' },
                    { label: 'Group 4', desc: 'Industrial Explosives' },
                    { label: 'Group 5', desc: 'Electronics, Aerospace & Drugs' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-financial',
        title: '3.5 Financial Sector Reforms',
        description: 'RBI\'s new role and private banking.',
        content: [
            {
                type: 'concept',
                title: 'RBI: From Regulator to Facilitator',
                text: 'Major aim was to reduce the role of RBI from being a **Regulator** to a **Facilitator**. Financial sector could make more independent decisions.',
                tags: ['FINANCE']
            },
            {
                type: 'concept',
                title: 'Reforms Summary',
                points: [
                    'Establishing private sector banks (Indian and Foreign).',
                    'Increase in Foreign Investment limit in banks to 74%.',
                    'Ease of opening new branches without prior RBI permission.'
                ],
                tags: ['BANKING']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-rbi-shift',
                title: 'RBI Role Transformation',
                type: 'grid',
                data: [
                    { label: 'Pre-1991 (Regulator)', desc: 'RBI fixed interest rates and determined every operative detail.' },
                    { label: 'Post-1991 (Facilitator)', desc: 'Markets determine rates; RBI focuses on stability and oversight.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-tax-forex',
        title: '3.6 Tax and Foreign Exchange Reforms',
        description: 'Fiscal policy and Rupee stability.',
        content: [
            {
                type: 'concept',
                title: 'Fiscal Policy (Tax Reforms)',
                text: 'Aimed at reducing tax rates and simplifying the system. Corporate and income tax rates were lowered to encourage compliance.',
                tags: ['FISCAL']
            },
            {
                type: 'concept',
                title: 'Rupee Devaluation',
                text: 'In 1991, the Rupee was **Devalued** against foreign currencies. This led to a **Market-determined** exchange rate system.',
                tags: ['FOREX']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-forex-shift',
                title: 'Forex Regime Change',
                type: 'process',
                data: [
                    { title: 'Devaluation', description: 'Intentional reduction in rupee value to boost exports.' },
                    { title: 'Market Link', description: 'Moving from fixed rates to market-determined exchange rates.' },
                    { title: 'Stability', description: 'Improved forex inflows due to realistic pricing.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-privatisation',
        title: '3.7 Privatisation: Disinvestment & Autonomy',
        description: 'Transfer of ownership and "Ratna" status.',
        content: [
            {
                type: 'concept',
                title: 'Disinvestment',
                text: 'Selling off part of the equity of PSUs to the public. Aimed at improving financial discipline and modernisation.',
                tags: ['DISINVESTMENT']
            },
            {
                type: 'concept',
                title: 'Hierarchy of Autonomy',
                points: [
                    '**Maharatnas:** Top tier (e.g., ONGC, BHEL).',
                    '**Navratnas:** Second tier (e.g., HPCL).',
                    '**Miniratnas:** Profit-making with limited autonomy.'
                ],
                tags: ['AUTONOMY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-ratna-hierarchy',
                title: 'PSU Autonomy Hierarchy',
                type: 'grid',
                data: [
                    { label: 'Maharatnas', desc: 'Highest autonomy (NTPC, ONGC, SAIL, GAIL, BHEL).' },
                    { label: 'Navratnas', desc: 'Significant freedom (HPCL, MTNL, BEL).' },
                    { label: 'Miniratnas', desc: 'Financial powers up to a certain limit.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-globalisation',
        title: '3.8 Globalisation: Integrating the World',
        description: 'Outsourcing and boundary-less trade.',
        content: [
            {
                type: 'concept',
                title: 'The Outsourcing Hub',
                text: 'India became a destination for outsourcing due to low wage rates and proficiency in English.',
                tags: ['OUTSOURCING']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-outsourcing-grid',
                title: 'Why India for Outsourcing?',
                type: 'grid',
                data: [
                    { label: 'Wage Cost', desc: 'Significantly lower payroll compared to developed nations.' },
                    { label: 'Skill Set', desc: 'Large pool of English-speaking technical graduates.' },
                    { label: 'IT Capability', desc: 'Matured IT infrastructure and software ecosystem.' },
                    { label: 'Connectivity', desc: 'Time-zone difference (24/7 service potential).' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-wto',
        title: '3.9 WTO and Trade Policy',
        description: 'Transition from GATT to WTO.',
        content: [
            {
                type: 'concept',
                title: 'Establishment',
                text: 'The **WTO** (1995) succeeded the **GATT** (1948). It covers trade in services and intellectual property, unlike GATT.',
                tags: ['WTO']
            },
            {
                type: 'concept',
                title: 'Trade Facilitation',
                points: [
                    'Removal of Non-Tariff barriers (quotas).',
                    'Reduction in Tariff rates.',
                    'Opening up of the Service sector.'
                ],
                tags: ['TRADE_POLICY']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-wto-timeline',
                title: 'Evolution of World Trade Trade',
                type: 'process',
                data: [
                    { title: '1948', description: 'GATT established to regulate global trade in goods.' },
                    { title: '1995', description: 'WTO replaces GATT; includes services and IP.' },
                    { title: 'Present', description: '160+ members ensuring rules-based global trade.' }
                ]
            }
        ]
    },
    {
        id: 'u6-ch3-appraisal',
        title: '3.10 Critical Appraisal of LPG',
        description: 'Growth performance and lopsided development.',
        content: [
            {
                type: 'concept',
                title: 'The Success Indicators',
                points: [
                    'GDP growth rate rose significantly (Service sector focus).',
                    'Forex reserves and FDI saw a massive jump.',
                    'Inflation was brought under control.'
                ],
                tags: ['SUCCESS']
            },
            {
                type: 'warning',
                title: 'The Failures',
                points: [
                    '**Agri Neglect:** Decline in public investment infrastructure.',
                    '**Jobless Growth:** GDP rose but employment didn\'t match.',
                    '**Industrial Lag:** Cheap imports hit domestic demand.'
                ],
                tags: ['FAILURES']
            }
        ],
        visualizations: [
            {
                id: 'v-ch3-performance-table',
                title: 'Post-1991 Appraisal Matrix',
                type: 'table',
                data: {
                    headers: ['Macro Parameter', 'Positive Outlook', 'Concern Area'],
                    rows: [
                        ['GDP Growth', '6-8% Average', 'Agri Sector Stagnation'],
                        ['Forex/FDI', 'Record highs', 'High Volatility of FPI'],
                        ['Industry', 'Global Integration', 'Cheap imports from China'],
                        ['Employment', 'IT/Service Boom', 'Urban-Rural Divide']
                    ]
                }
            }
        ]
    }
];
