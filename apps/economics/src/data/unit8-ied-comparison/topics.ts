import { TheoryTopic } from '../../types';

export const TOPICS: TheoryTopic[] = [
    {
        id: 'u8-intro',
        title: '8.1 Introduction: Regional Groupings',
        description: 'Why countries compare development.',
        content: [
            {
                type: 'concept',
                title: 'Global Economic Groupings',
                text: 'In the era of globalisation, nations form regional and global economic groupings to strengthen their domestic economies and benchmark progress.',
                tags: ['CONTEXT']
            }
        ],
        visualizations: [
            {
                id: 'v8-groupings-grid',
                title: 'Major Global Groupings',
                type: 'grid',
                data: [
                    { label: 'SAARC', desc: 'South Asian Association for Regional Cooperation.' },
                    { label: 'European Union', desc: 'Integration of European economies.' },
                    { label: 'ASEAN', desc: 'Association of Southeast Asian Nations.' },
                    { label: 'BRICS', desc: 'Brazil, Russia, India, China, South Africa.' },
                    { label: 'G-20', desc: 'Premier forum for international economic cooperation.' }
                ]
            }
        ]
    },
    {
        id: 'u8-paths',
        title: '8.2 Developmental Paths: A Chronology',
        description: 'Independence to Reforms.',
        content: [
            {
                type: 'concept',
                title: 'Common Beginnings',
                text: 'All three nations started their developmental path at similar times but adopted different economic systems. India and Pakistan followed a mixed economy model, while China followed a command economy before reforms.',
                tags: ['HISTORY']
            }
        ],
        visualizations: [
            {
                id: 'v8-chronology-table',
                title: 'Developmental Milestones',
                type: 'table',
                data: {
                    headers: ['Milestone', 'India', 'China', 'Pakistan'],
                    rows: [
                        ['Independence / Republic', '1947', '1949 (PRC)', '1947'],
                        ['First Five-Year Plan', '1951', '1953', '1956'],
                        ['Economic Reforms', '1991', '1978', '1988']
                    ]
                }
            }
        ]
    },
    {
        id: 'u8-china-model',
        title: '8.3 The China Model: Structural Shifts',
        description: 'From GLF to SEZs.',
        content: [
            {
                type: 'concept',
                title: 'Great Leap Forward (GLF) - 1958',
                text: 'A campaign aimed at industrialising the country on a massive scale. Key features included backyard steel furnaces and the commune system (26,000 communes).',
                tags: ['GLF']
            },
            {
                type: 'concept',
                title: 'Stages of Reform (1978)',
                points: [
                    '**Initial Phase**: Reforms in agriculture, foreign trade, and investment.',
                    '**Later Phase**: Reforms in the industrial sector and private ownership.',
                    '**Dual Pricing**: Setting prices for fixed quantities while allowing market pricing for the surplus.'
                ],
                tags: ['REFORMS']
            }
        ],
        visualizations: [
            {
                id: 'v8-china-milestones',
                title: "China's Structural Milestones",
                type: 'grid',
                data: [
                    { label: 'GLF (1958)', desc: 'Backyard furnaces & 26k Rural communes.' },
                    { label: 'Cultural Rev (66)', desc: 'Students sent to learn from the countryside.' },
                    { label: 'Reforms (1978)', desc: 'Shift toward a market-oriented economy.' },
                    { label: 'SEZ Strategy', desc: 'Special Economic Zones to attract FDI.' }
                ]
            }
        ]
    },
    {
        id: 'u8-demographics',
        title: '8.4 Demographic Indicators',
        description: 'Population, Density, and Urbanization.',
        content: [
            {
                type: 'warning',
                title: 'The One-Child Policy',
                text: 'Introduced by China in 1979, it successfully lowered the population growth rate (now ~0.46%) but led to a skewed sex ratio and an aging population.',
                tags: ['DEMOGRAPHICS']
            }
        ],
        visualizations: [
            {
                id: 'v8-demo-comparison',
                title: 'Demographic Snapshot (2017-18)',
                type: 'table',
                data: {
                    headers: ['Indicator', 'India', 'China', 'Pakistan'],
                    rows: [
                        ['Growth Rate (%)', '1.03', '0.46', '2.05'],
                        ['Density (sq km)', '455', '148', '275'],
                        ['Urbanisation (%)', '34', '59', '37'],
                        ['Sex Ratio (m:f)', '924', '949', '943']
                    ]
                }
            }
        ]
    },
    {
        id: 'u8-sectoral',
        title: '8.5 Sectoral Analysis: The Bypass',
        description: 'GVA vs Employment.',
        content: [
            {
                type: 'concept',
                title: 'The "Bypass" Phenomenon',
                text: 'While China successfully transitioned from Agriculture to Manufacturing, India and Pakistan experienced a direct shift from Agriculture to the Services sector.',
                tags: ['STRUCTURE']
            }
        ],
        visualizations: [
            {
                id: 'v8-sector-bypass',
                title: 'The Shift Paradox',
                type: 'grid',
                data: [
                    { label: 'China', desc: 'Direct transition: Agri → Manufacturing → Service.' },
                    { label: 'India/Pak', desc: 'Bypassed Manufacturing: Agri → Services.' },
                    { label: 'India Agri', desc: 'Employs 43% but contributes only 16% GVA.' },
                    { label: 'Efficiency', desc: 'China remains the "Factory of the World".' }
                ]
            }
        ]
    },
    {
        id: 'u8-hdi',
        title: '8.6 Human Development Indicators (HDI)',
        description: 'Life Expectancy and Poverty.',
        content: [
            {
                type: 'concept',
                title: 'Performance Evaluation',
                text: 'China leads in almost all HDI parameters, while India and Pakistan lag, specifically in sanitation and maternal health.',
                tags: ['HDI']
            }
        ],
        visualizations: [
            {
                id: 'v8-hdi-table',
                title: 'HDI Comparison (2019)',
                type: 'table',
                data: {
                    headers: ['Indicator', 'India', 'China', 'Pakistan'],
                    rows: [
                        ['HDI Value', '0.645', '0.761', '0.557'],
                        ['Poverty (%)', '21.9', 'Approaching 0', '24.3'],
                        ['Infant Mortality', '29.9', '7.4', '57.2'],
                        ['Maternal Mortality', '133', '29', '140']
                    ]
                }
            }
        ]
    },
    {
        id: 'u8-conclusion',
        title: '8.7 Appraisal & Liberty Indicators',
        description: 'Evaluating beyond GDP.',
        content: [
            {
                type: 'concept',
                title: 'Liberty Indicators',
                text: 'True development includes political and civil freedoms. China, despite economic success, lags in liberty compared to the democratic structures of India.',
                tags: ['GOVERNANCE']
            }
        ],
        visualizations: [
            {
                id: 'v8-liberty-grid',
                title: 'Development Beyond Income',
                type: 'grid',
                data: [
                    { label: 'Political', desc: 'Freedom of expression and fair elections.' },
                    { label: 'Judiciary', desc: 'Independence of legal institutions.' },
                    { label: 'Participation', desc: 'Extent of democratic involvement.' },
                    { label: 'Rule of Law', desc: 'Constititional protections for citizens.' }
                ]
            }
        ]
    }
];
