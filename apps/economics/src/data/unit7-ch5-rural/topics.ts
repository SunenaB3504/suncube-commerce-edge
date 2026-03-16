import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch5-intro',
        title: '5.1 Introduction',
        description: 'The real progress of India lies in its villages.',
        content: [
            {
                type: 'concept',
                title: 'Gandhi\'s Vision',
                text: 'Mahatma Gandhi said that the real progress of India meant not simply the growth of industrial urban centres but mainly the development of villages. Development of rural India remains a priority as more than two-thirds of the population depends on agriculture.',
                tags: ['VISION']
            },
            {
                type: 'concept',
                title: 'Current Realities',
                points: [
                    'Agriculture sector GVA growth was about 2% in 2023–24.',
                    'One-fourth of rural India still lives in abject poverty.',
                    'Issues: Decline in public investment since 1991 and increasing casualisation of employment.'
                ],
                tags: ['DATA']
            }
        ],
        visualizations: [
            {
                id: 'v5-rural-reality',
                title: 'Rural India Snapshot',
                type: 'grid',
                data: [
                    { label: 'Population', desc: '2/3rd of Indians live in/depend on rural areas.' },
                    { label: 'GVA Growth', desc: 'Current agriculture GVA at ~2%.' },
                    { label: 'Poverty', desc: '1/4th of rural population in abject poverty.' },
                    { label: 'Investment', desc: 'Declining public investment since 1991.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-whatis',
        title: '5.2 What is Rural Development?',
        description: 'A comprehensive action plan for lagging areas.',
        content: [
            {
                type: 'concept',
                title: 'Key Areas for Initiative',
                points: [
                    '**Human Resources**: Literacy (esp. female), skill development, and health.',
                    '**Land Reforms**: Equitable distribution and technical upgrades.',
                    '**Infrastructure**: Electricity, irrigation, and research links.',
                    '**Poverty Alleviation**: Productive employment for weaker sections.'
                ],
                tags: ['DEFINITION']
            }
        ],
        visualizations: [
            {
                id: 'v5-rd-pillars',
                title: 'The 4 Pillars of Rural Development',
                type: 'grid',
                data: [
                    { label: 'Human Resource', desc: 'Education, health, and female literacy.' },
                    { label: 'Land Reform', desc: 'Ceiling, distribution, and techniques.' },
                    { label: 'Infrastructure', desc: 'Power, roads, and market links.' },
                    { label: 'Social Justice', desc: 'Poverty alleviation for the poor.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-credit',
        title: '5.3 Credit and Marketing: Financial Hub',
        description: 'The lifeline of the rural economy.',
        content: [
            {
                type: 'concept',
                title: 'Rural Credit Milestones',
                points: [
                    '**1969**: Adoption of social banking and multi-agency approach.',
                    '**1982**: NABARD set up as the apex body for rural financing.',
                    '**Sources**: Commercial Banks, RRBs (Regional Rural Banks), and Cooperatives.'
                ],
                tags: ['CREDIT']
            }
        ],
        visualizations: [
            {
                id: 'v5-credit-flow',
                title: 'Apex Credit Flow Structure',
                type: 'process',
                data: [
                    { title: 'NABARD', description: 'Apex financing and policy body.' },
                    { title: 'Intermediaries', description: 'RRBs, Commercial Banks, Cooperatives.' },
                    { title: 'Final Outlet', description: 'Village societies and SHGs.' },
                    { title: 'The Farmer', description: 'Recipient of low-interest loans.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-shg-jandhan',
        title: '5.4 SHGs and Jan-Dhan Yojana',
        description: 'Micro-credit and total financial inclusion.',
        content: [
            {
                type: 'concept',
                title: 'Empowering via SHGs',
                text: 'Self-Help Groups promote thrift. By May 2019, nearly 6 crore women joined 54 lakh women SHGs. These groups focus on micro-credit for consumption and small asset creation.',
                tags: ['SHG']
            },
            {
                type: 'concept',
                title: 'Pradhan Mantri Jan-Dhan Yojana',
                points: [
                    '**Reach**: Over 50 crore accounts opened.',
                    '**Insurance**: Accidental insurance (₹1-2L) + Life cover (₹30,000).',
                    '**Benefit**: Direct MNREGA wage deposits and ₹10,000 Overdraft facility.'
                ],
                tags: ['JAN-DHAN']
            }
        ],
        visualizations: [
            {
                id: 'v5-financial-inclusion',
                title: 'Financial Inclusion Tools',
                type: 'grid',
                data: [
                    { label: 'SHGs', desc: '6 Crore women in 54 Lakh groups (Micro-credit).' },
                    { label: 'Jan-Dhan', desc: 'Zero balance accounts + Insurance/Overdraft.' },
                    { label: 'Direct Benefit', desc: 'Elimination of middlemen in wage payments.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-market',
        title: '5.5 Agricultural Market System',
        description: 'Fixing the farm-to-consumer chain.',
        content: [
            {
                type: 'warning',
                title: 'Systemic Defects',
                text: 'Farmers historically suffered from faulty weighing and price manipulation. Over 10% of produce is wasted due to lack of standard storage.',
                tags: ['MARKETING']
            },
            {
                type: 'concept',
                title: 'The Support System',
                points: [
                    '**Regulation**: Organized markets (Mandis).',
                    '**Infrastructure**: Warehousing, cold storage, and roads.',
                    '**Policy Instruments**: MSP (Minimum Support Price), Buffer Stocks (FCI), and PDS.'
                ],
                tags: ['REFORMS']
            }
        ],
        visualizations: [
            {
                id: 'v5-market-measures',
                title: '4 Pillars of Market Reform',
                type: 'grid',
                data: [
                    { label: 'Regulation', desc: 'Eliminating intermediaries in Mandis.' },
                    { label: 'Infrastructure', desc: 'Roads, Cold Storage, and Warehouses.' },
                    { label: 'Cooperation', desc: 'Successes like Amul (Gujarat).' },
                    { label: 'Policy Hub', desc: 'MSP, Buffer Stocks, and Ration (PDS).' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-alternate',
        title: '5.6 Alternate Marketing Channels',
        description: 'Direct farmer-to-consumer selling.',
        content: [
            {
                type: 'concept',
                title: 'Direct Links',
                points: [
                    '**Farmer Markets**: Apni Mandi (Pb/Har/Raj), Rythu Bazars (AP/Tel), Uzhavar Sandies (TN).',
                    '**MNC Links**: Contract farming with fast-food chains provides seeds and guaranteed prices.'
                ],
                tags: ['CHANNELS']
            }
        ],
        visualizations: [
            {
                id: 'v5-farmer-markets',
                title: 'Direct Consumer Channels',
                type: 'grid',
                data: [
                    { label: 'Apni Mandi', desc: 'Punjab, Haryana, and Rajasthan.' },
                    { label: 'Rythu Bazars', desc: 'Andhra Pradesh and Telangana.' },
                    { label: 'Uzhavar Sandies', desc: 'Tamil Nadu (Farmer markets).' },
                    { label: 'Contract Farming', desc: 'Direct seeds/buyback from MNCs.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-diversification',
        title: '5.7 Diversification & Animal Husbandry',
        description: 'Spreading the risk beyond crop farming.',
        content: [
            {
                type: 'concept',
                title: 'Strategy for Stability',
                text: 'Diversification shifts workforce from subsistence farming to high-value horticulture or non-farm activities.',
                tags: ['STRATEGY']
            },
            {
                type: 'concept',
                title: 'Livestock (White Revolution)',
                points: [
                    'India has one of the largest livestock populations.',
                    'Operation Flood: Doubled/multiplied milk production (12x since 1951).',
                    'Provides livelihood to 70 million small and marginal farmers.'
                ],
                tags: ['LIVESTOCK']
            }
        ],
        visualizations: [
            {
                id: 'v5-diversification-map',
                title: 'Avenues of Diversification',
                type: 'grid',
                data: [
                    { label: 'Animal Husbandry', desc: 'Livestock and poultry for stability.' },
                    { label: 'Fisheries', desc: 'Blue Revolution (Inland/Marine).' },
                    { label: 'Horticulture', desc: 'Golden Revolution (Fruits/Vegetables).' },
                    { label: 'Non-farm', desc: 'Pottery, weaving, and rural industry.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-fisheries-horticulture',
        title: '5.8 Fisheries and Horticulture',
        description: 'Harnessing water and non-food crops.',
        content: [
            {
                type: 'concept',
                title: 'The Blue and Golden Revolutions',
                points: [
                    '**Fisheries**: Inland sources (rivers/lakes) contribute 65% of sea food value.',
                    '**Horticulture**: India is first in mangoes, bananas, coconuts, and spices.',
                    'Horticulture contributes 1/3rd of agricultural output and 6% of GDP.'
                ],
                tags: ['REV']
            }
        ],
        visualizations: [
            {
                id: 'v5-rev-comparison',
                title: 'The Three Revolutions',
                type: 'table',
                data: {
                    headers: ['Revolution', 'Focus', 'Impact'],
                    rows: [
                        ['White', 'Milk / Operation Flood', 'India is world leader in production.'],
                        ['Blue', 'Fisheries (Inland/Marine)', 'Livelihood for 6+ million.'],
                        ['Golden', 'Horticulture (Fruits/Veg)', 'Massive export and GDP contribution.']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch5-sustainable',
        title: '5.9 Sustainable Dev & Organic Farming',
        description: 'Eco-friendly agriculture for future generations.',
        content: [
            {
                type: 'concept',
                title: 'The Organic Shift',
                points: [
                    'Uses locally produced natural inputs instead of synthetic chemicals.',
                    'Pros: Healthier produce, pesticide-free, high export demand.',
                    'Cons: Shorter shelf-life, initial lower yields, lack of marketing.'
                ],
                tags: ['ORGANIC']
            }
        ],
        visualizations: [
            {
                id: 'v5-organic-pros-cons',
                title: 'Organic Farming Evaluation',
                type: 'grid',
                data: [
                    { label: 'Advantage', desc: 'Lower input costs and healthier food.' },
                    { label: 'Employment', desc: 'Requires more labor than chemical farming.' },
                    { label: 'Challenge', desc: 'Lower yield in initial years (conversion period).' },
                    { label: 'Market', desc: 'Growing global demand for organic exports.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch5-conclusion',
        title: '5.10 Conclusion',
        description: 'Vibrancy through synergy.',
        content: [
            {
                type: 'concept',
                title: 'The Way Forward',
                text: 'Effective rural development requires an integrated approach linking credit, marketing, and diversification with IT-enabled farmer advisory services.',
                tags: ['FUTURE']
            }
        ],
        visualizations: [
            {
                id: 'v5-synergy-grid',
                title: 'Integrated Rural Growth',
                type: 'process',
                data: [
                    { title: 'Information', description: 'IT-based weather and price alerts.' },
                    { title: 'Infrastructure', description: 'Cold chain and transport networks.' },
                    { title: 'Innovation', description: 'Organic techniques and high-value crops.' }
                ]
            }
        ]
    }
];
