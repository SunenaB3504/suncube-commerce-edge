import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch4-intro',
        title: '4.1 Introduction',
        description: 'Knowledge as a key driver of economic progress.',
        content: [
            {
                type: 'concept',
                title: 'Knowledge and Progress',
                text: 'Human capacity to store and transmit knowledge is a key driver of economic progress. The labour skill of an educated person is more than that of an uneducated person, enabling greater income generation and economic contribution.',
                tags: ['INTRODUCTION']
            },
            {
                type: 'concept',
                title: 'Value of Education',
                points: [
                    'Higher earning capacity and better social standing.',
                    'Improved life choices and understanding of societal changes.',
                    'Stimulating innovations and adapting to new technologies.'
                ],
                tags: ['EDUCATION']
            }
        ],
        visualizations: [
            {
                id: 'v4-hcf-intro-valued',
                title: 'Valued Outcomes of Education',
                type: 'grid',
                data: [
                    { label: 'Economic', desc: 'Higher earning capacity and productivity.' },
                    { label: 'Social', desc: 'Better social standing and participation.' },
                    { label: 'Personal', desc: 'Improved life choices and understanding.' },
                    { label: 'Technical', desc: 'Innovation and technology adaptation.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-whatis',
        title: '4.2 What is Human Capital?',
        description: 'Turning human resources into productive assets.',
        content: [
            {
                type: 'concept',
                title: 'Human Resources to Human Capital',
                text: 'Just as land is turned into physical capital like factories, human resources (nurses, farmers, teachers) are turned into human capital (engineers, doctors). Investment in human capital is necessary to produce more human capital out of human resources.',
                tags: ['DEFINITION']
            },
            {
                type: 'concept',
                title: 'Key Questions',
                points: [
                    'What are the sources of human capital?',
                    'Is there a relation between human capital and economic growth?',
                    'Is human capital formation linked to human development?',
                    'What role can the government play in India?'
                ],
                tags: ['QUESTIONS']
            }
        ],
        visualizations: [
            {
                id: 'v4-hcf-conversion',
                title: 'The Conversion Process',
                type: 'process',
                data: [
                    { title: 'Human Resource', description: 'Raw manpower (students, workers).' },
                    { title: 'Investment', description: 'Spending on Education and Health.' },
                    { title: 'Human Capital', description: 'Productive assets (Engineers, Doctors).' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-sources',
        title: '4.3 Sources of Human Capital',
        description: 'The five primary pillars of HCF.',
        content: [
            {
                type: 'concept',
                title: 'Primary Sources',
                points: [
                    '**Education**: Primary source. Increases future income capacity.',
                    '**Health**: Preventive (vaccines), Curative (medicine), Social (health literacy), and clean water/sanitation directly increase healthy labour supply.',
                    '**On-the-Job Training**: Enhances productivity; benefits exceed costs.',
                    '**Migration**: Search for higher-paying jobs; earnings must outweigh transport and psychic costs. "Brain drain" occurs when skilled professionals move abroad.',
                    '**Information**: Data about labour markets and education is necessary for efficient investment.'
                ],
                tags: ['SOURCES']
            }
        ],
        visualizations: [
            {
                id: 'v4-hcf-sources-grid',
                title: 'The 5 Sources of HCF',
                type: 'grid',
                data: [
                    { label: 'Education', desc: 'Increases future income.' },
                    { label: 'Health', desc: 'Increases labor productivity.' },
                    { label: 'Training', desc: 'On-the-job skill upgrade.' },
                    { label: 'Migration', desc: 'Better job search.' },
                    { label: 'Information', desc: 'Efficient utilization.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-physical-vs-human',
        title: '4.4 Physical vs. Human Capital',
        description: 'Key differences between the two forms of capital.',
        content: [
            {
                type: 'concept',
                title: 'Comparison of Attributes',
                points: [
                    '**Tangibility**: Physical capital is tangible; Human capital is intangible.',
                    '**Separability**: Physical capital is separable from owner; Human capital is inseparable.',
                    '**Mobility**: Physical capital is completely mobile; Human capital is restricted by nationality.',
                    '**Depreciation**: Physical capital depreciates via use; Human capital depreciates with age but grows with investment.',
                    '**Benefits**: Physical capital creates private benefits; Human capital creates both private and social consequences.'
                ],
                tags: ['COMPARISON']
            }
        ],
        visualizations: [
            {
                id: 'v4-hcf-pc-hc-table',
                title: 'Physical vs. Human Capital',
                type: 'table',
                data: {
                    headers: ['Attribute', 'Physical Capital', 'Human Capital'],
                    rows: [
                        ['Nature', 'Tangible (marketable)', 'Intangible (inseparable)'],
                        ['Mobility', 'Completely mobile', 'Restricted by nationality'],
                        ['Depreciation', 'Wear and tear', 'Ageing (reduced by investment)'],
                        ['Benefits', 'Private only', 'Private and Social']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch4-growth',
        title: '4.5 Human Capital and Economic Growth',
        description: 'The link between skills and national income.',
        content: [
            {
                type: 'concept',
                title: 'Productivity and Innovation',
                text: 'Educated and healthy persons contribute more to national income. Human capital stimulates innovations and helps absorb new technologies like AI and Green Tech.',
                tags: ['GROWTH']
            },
            {
                type: 'concept',
                title: 'Indicators of Development (Table 4.1)',
                text: 'Development metrics over the years show a clear upward trend in income and life expectancy.',
                tags: ['DATA']
            }
        ],
        visualizations: [
            {
                id: 'v4-table-4-1',
                title: 'Select Indicators of Development',
                type: 'table',
                data: {
                    headers: ['Indicator', '1951', '2011', '2018-21'],
                    rows: [
                        ['Real Per Capita Income (₹)', '7,651', '60,000+', '94,054'],
                        ['Infant Mortality Rate', '146', '44', '28'],
                        ['Life Expectancy - Male (yrs)', '37.2', '64.0', '68.6'],
                        ['Life Expectancy - Female (yrs)', '36.2', '66.0', '71.4'],
                        ['Literacy Rate (%)', '16.67', '74.0', '78']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch4-hc-vs-hd',
        title: '4.6 Human Capital vs. Human Development',
        description: 'Means vs. Ends in health and education.',
        content: [
            {
                type: 'concept',
                title: 'Different Perspectives',
                points: [
                    '**Human Capital**: Views education/health as a MEANS to increase productivity.',
                    '**Human Development**: Views education/health as ENDS in themselves (well-being and right to basic services).',
                    '**Breadth**: Human development is the broader concept.'
                ],
                tags: ['PERSPECTIVE']
            }
        ],
        visualizations: [
            {
                id: 'v4-hc-vs-hd-table',
                title: 'Means vs. Ends Comparison',
                type: 'table',
                data: {
                    headers: ['Dimension', 'Human Capital', 'Human Development'],
                    rows: [
                        ['Primary Focus', 'Productivity/Output', 'Human Wellbeing'],
                        ['Nature of Education', 'Means (Instrument)', 'End (Right/Goal)'],
                        ['Scope', 'Economic Centric', 'Welfare Centric']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch4-state',
        title: '4.7 State of HCF in India',
        description: 'The government\'s role and key bodies.',
        content: [
            {
                type: 'concept',
                title: 'Need for Intervention',
                points: [
                    'Expenditures have long-term irreversible impact.',
                    'Consumers lack complete information about quality/cost.',
                    'Private providers can create monopolies.',
                    'Basic services must be provided free for the poor.'
                ],
                tags: ['GOVERNANCE']
            },
            {
                type: 'concept',
                title: 'Key Regulatory Bodies',
                points: [
                    '**NCERT**: School education framework.',
                    '**UGC**: University funding and standards.',
                    '**AICTE**: Technical and engineering education.',
                    '**ICMR**: Health research and medical guidelines.'
                ],
                tags: ['BODIES']
            }
        ],
        visualizations: [
            {
                id: 'v4-regulatory-bodies',
                title: 'Key Regulatory Bodies',
                type: 'grid',
                data: [
                    { label: 'NCERT', desc: 'Syllabus and textbooks for schools.' },
                    { label: 'UGC', desc: 'Grants and standards for Universities.' },
                    { label: 'AICTE', desc: 'Regulation of Technical institutions.' },
                    { label: 'ICMR', desc: 'Council for Medical Research.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-sector',
        title: '4.8 Education Sector in India',
        description: 'Expenditure trends and legal framework.',
        content: [
            {
                type: 'concept',
                title: 'Spending and Legislation',
                points: [
                    '**GDP Share**: Increased from 0.64% (1952) to ~4.5% (2020), still below the 6% recommendation.',
                    '**Right to Education (RTE) 2009**: Free/compulsory education for children aged 6-14.',
                    '**Education Cess**: 2% surcharge on Union taxes for elementary education.'
                ],
                tags: ['POLICY']
            }
        ],
        visualizations: [
            {
                id: 'v4-table-4-2',
                title: 'Educational Attainment in India',
                type: 'table',
                data: {
                    headers: ['Indicator', '1990', '2011', '2017-18'],
                    rows: [
                        ['Youth Literacy Rate (M%)', '76.6', '90', '93'],
                        ['Youth Literacy Rate (F%)', '54.2', '82', '90'],
                        ['Primary Completion (F%)', '61', '94', '96']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch4-prospects',
        title: '4.9 Future Prospects',
        description: 'Challenges ahead for the education sector.',
        content: [
            {
                type: 'warning',
                title: 'Current Gaps',
                points: [
                    '**Education for All**: Still a dream; absolute illiterates remain high.',
                    '**Gender Equity**: Narrowing gap, but women\'s education is still critical.',
                    '**Higher Education**: High unemployment among graduates (as high as 30% in some regions).'
                ],
                tags: ['CHALLENGES']
            }
        ],
        visualizations: [
            {
                id: 'v4-educational-pyramid',
                title: 'Educational Gaps in India',
                type: 'grid',
                data: [
                    { label: 'Primary', desc: 'High enrollment but quality concerns.' },
                    { label: 'Secondary', desc: 'Significant dropouts after grade 8.' },
                    { label: 'Higher Ed', desc: 'Steep pyramid; mismatched skill vs jobs.' },
                    { label: 'Employment', desc: 'Up to 30% graduate unemployment.' }
                ]
            }
        ]
    },
    {
        id: 'u7-ch4-conclusion',
        title: '4.10 Conclusion',
        description: 'Summary and key priorities.',
        content: [
            {
                type: 'concept',
                title: 'Achieving Economic Growth & Equity',
                text: 'Economic and social benefits of human capital are well established. The priority is to improve the quality of manpower and ensure services reach all sections of society.',
                tags: ['CONCLUSION']
            }
        ],
        visualizations: [
            {
                id: 'v4-hcf-priority',
                title: 'Core Priorities for India',
                type: 'process',
                data: [
                    { title: 'Quality Manpower', description: 'Improving skills beyond just certification.' },
                    { title: 'Inclusivity', description: 'Reaching the remote and rural poor.' },
                    { title: 'Economic Growth', description: 'Sustainable productivity and innovation.' }
                ]
            }
        ]
    }
];
