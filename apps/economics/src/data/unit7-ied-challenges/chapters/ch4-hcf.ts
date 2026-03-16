import { TheoryTopic } from '../../../types';

export const CH4_TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch4-t1',
        title: 'Concept & Sources of Human Capital',
        description: 'Definition, sources of human capital formation and its distinction from physical capital.',
        content: [
            {
                type: 'concept',
                title: 'What is Human Capital?',
                text: 'Human Capital refers to the stock of skills, expertise, education, and knowledge embodied in the people of a nation at a point in time.',
                points: [
                    '**Productive Asset**: Just as a machine increases production, a skilled human increases the "productive capacity" of an economy.',
                    '**Knowledge Transmission**: Humans have the unique capacity to store and transmit knowledge across generations.'
                ],
                tags: ['DEFINITION']
            },
            {
                type: 'comparison',
                title: 'Physical Capital vs. Human Capital',
                text: 'Both are outcomes of conscious investment decisions but differ fundamentally.',
                headers: ['Basis', 'Physical Capital', 'Human Capital'],
                rows: [
                    ['Tangibility', 'Tangible (can be seen/touched)', 'Intangible (built in body/mind)'],
                    ['Mobility', 'Completely mobile between countries', 'Imperfectly mobile (National/Cultural barriers)'],
                    ['Separability', 'Separable from its owner', 'Inseparable from its owner'],
                    ['Marketability', 'Sold in the market', 'Only services are sold; owner must be present'],
                    ['Depreciation', 'Depreciates with use/time/obsolescence', 'Depreciates with ageing; reduced by continuous investment'],
                    ['Benefits', 'Creates only private benefits', 'Creates both private and social (external) benefits']
                ],
                tags: ['DISTINCTION']
            },
            {
                type: 'list',
                title: 'Five Sources of Human Capital Formation',
                text: 'Investment in human beings happens through five main channels:',
                points: [
                    '**Expenditure on Education**: The most significant source. It is similar to spending on capital goods by companies to increase future profits.',
                    '**Expenditure on Health**: Increases the supply of healthy labour force. Includes Preventive (Vaccination), Curative (Treatment), and Social (Health Literacy) medicine.',
                    '**On-the-job Training**: Enhances productivity; firms recover costs through increased output over time.',
                    '**Migration**: People move in search of higher salaries. Gains from migration (earnings) must outweigh the costs (transport/living).',
                    '**Information**: Spending to acquire data about the labour market, education, and health to make informed decisions.'
                ],
                tags: ['SOURCES']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch4-t2',
        title: 'HCF, Economic Growth & Human Development',
        description: 'The relationship between human capital and growth, and the philosophical shift to human development.',
        content: [
            {
                type: 'concept',
                title: 'Human Capital and Economic Growth',
                text: 'The Seventh Five Year Plan (1985-90) first assigned a key role to human resources in India\'s development strategy.',
                points: [
                    '**Innovations**: Education stimulates inventions and the ability to absorb new technologies.',
                    '**Causality**: While difficult to prove direct causality, high levels of human capital and growth usually flow in both directions (reinforce each other).',
                    '**Talent Shortage**: NEP 2020 highlights that a skilled workforce in AI, Data Science, and Mathematics will be in high demand.'
                ],
                tags: ['GROWTH']
            },
            {
                type: 'comparison',
                title: 'Human Capital vs. Human Development',
                text: 'A critical distinction for exams regarding the "End vs Needs" debate.',
                headers: ['Feature', 'Human Capital', 'Human Development'],
                rows: [
                    ['Philosophy', 'Treats humans as a means to an end (Productivity)', 'Treats humans as an end in themselves (Well-being)'],
                    ['Role of Education', 'Factor of production to increase GDP', 'Integral to existence; a fundamental right'],
                    ['Investment Goal', 'Economic Growth', 'Increasing human freedoms and choices']
                ],
                tags: ['DISTINCTION']
            },
            {
                type: 'warning',
                title: 'Brain Drain',
                text: 'The migration of technically qualified persons (engineers, doctors) to other countries due to higher salaries is a major hurdle in India\'s HCF.',
                tags: ['CHALLENGE']
            }
        ],
        visualizations: [
            {
                id: 'u7-v1-growth',
                title: 'Indicators of Development (1951 vs 2021)',
                type: 'table',
                data: {
                    headers: ['Metric', '1951', '2018-21'],
                    rows: [
                        ['Real Per Capita Income', 'Rs. 7,651', 'Rs. 94,054'],
                        ['Crude Death Rate (per 1000)', '25.1', '6.0'],
                        ['Infant Mortality Rate', '146', '28'],
                        ['Life Expectancy (Male)', '37.2 Yrs', '68.6 Yrs'],
                        ['Literacy Rate', '16.67%', '78%']
                    ]
                }
            }
        ]
    },
    {
        id: 'u7-ch4-t3',
        title: 'State of Education & Govt Intervention',
        description: 'Analysis of India\'s education sector, regulatory bodies, and expenditure trends.',
        content: [
            {
                type: 'tip',
                title: 'Why Govt Intervention is Necessary?',
                text: 'Education and health services create long-term impacts that cannot be easily reversed.',
                points: [
                    '**Natural Monopolies**: Private providers might acquire monopoly power and exploit consumers.',
                    '**Information Asymmetry**: Consumers lack complete info about quality/costs of specialized services.',
                    '**Equity**: Large sections of the population below poverty line cannot afford basic services.'
                ],
                tags: ['REGULATION']
            },
            {
                type: 'list',
                title: 'Regulatory Bodies in India',
                text: 'Apex organizations facilitating standardisation:',
                points: [
                    '**NCERT**: School education curriculum.',
                    '**UGC**: Funding and standards for Higher Education.',
                    '**AICTE**: Technical education.',
                    '**ICMR**: Medical research and health standards.'
                ],
                tags: ['INSTITUTIONS']
            },
            {
                type: 'concept',
                title: 'Education Expenditure Trends',
                text: 'India\'s commitment is measured in two ways: % of Govt Expenditure and % of GDP.',
                points: [
                    '**% of Govt Expenditure**: Indicates priority. Rose from 7.92% (1952) to 15.7% (2014).',
                    '**% of GDP**: Indicates scale. Rose from 0.64% (1952) to 4.13% (2014).',
                    '**Kothari Commission (1966)**: Recommended at least **6% of GDP** on education.',
                    '**Tapas Majumdar Committee (1999)**: Estimated Rs 1.37 lakh crore needed over 10 years to achieve Universal Elementary Education.',
                    '**Education Cess**: A **2% levy** on all Union taxes earmarked for elementary education.'
                ],
                tags: ['STATISTICS']
            },
            {
                type: 'warning',
                title: 'Future Challenges',
                text: 'Despite improvements, India still faces major hurdles:',
                points: [
                    '**Gender Equity**: The gap in female literacy (66% vs 82% for males) remains imminent.',
                    '**Higher Education Pyramid**: A steep pyramid where very few reach tertiary levels.',
                    '**Unemployment**: Highest among rural female graduates (~30% in 2011-12).'
                ],
                tags: ['CRITICAL APPRAISAL']
            }
        ],
        visualizations: [
            {
                id: 'u7-v-edu-attainment',
                title: 'Educational Attainment (2017-18)',
                type: 'table',
                data: {
                    headers: ['Metric', 'Male', 'Female'],
                    rows: [
                        ['Adult Literacy Rate (15+)', '82%', '66%'],
                        ['Primary Completion Rate', '93%', '96%'],
                        ['Youth Literacy Rate (15-24)', '93%', '90%']
                    ]
                }
            }
        ]
    }
];
