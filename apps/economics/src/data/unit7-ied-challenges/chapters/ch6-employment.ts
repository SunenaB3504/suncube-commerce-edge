import { TheoryTopic } from '../../../types';

export const CH6_TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch6-t1',
        title: 'Workforce & Employment Concepts',
        description: 'Definition of worker, participation rates, and the nature of employment in India.',
        content: [
            {
                type: 'concept',
                title: 'Who is a Worker?',
                text: 'A worker is someone who engages in an economic activity, contributing to the Flow of GDP.',
                points: [
                    '**Inclusion**: Includes self-employed persons and those temporarily absent from work (illness, festivals, social functions).',
                    '**Helpers**: Also includes those who help the head of the family in productive work (Unpaid helpers).',
                    '**Vulnerability**: In India, workers are vulnerable because they cannot afford to stay unemployed; they often accept unpleasant/dangerous jobs just to survive.'
                ],
                tags: ['DEFINITION']
            },
            {
                type: 'list',
                title: 'Workforce Participation Rates (WPR)',
                text: 'The ratio of the total workforce to the total population.',
                points: [
                    '**Total Workforce**: 545 million strong (2022-23).',
                    '**Rural (42%) vs. Urban (38%)**: Higher in rural areas as people drop out of school earlier to work.',
                    '**Male (57%) vs. Female (26%)**: Large gap, though many women perform under-reported "domestic" work that contributes to production (e.g., harvesting).',
                    '**Self-Employment**: The major source of livelihood in India (~53%).'
                ],
                tags: ['STATISTICS']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-t2',
        title: 'Informalisation of Workforce',
        description: 'Transition from formal to informal sector and its security implications.',
        content: [
            {
                type: 'comparison',
                title: 'Formal vs. Informal Sector',
                headers: ['Feature', 'Formal Sector', 'Informal Sector'],
                rows: [
                    ['Establishment Size', '10 or more hired workers', 'Fewer than 10 workers'],
                    ['Security', 'Job security & Social benefits', 'No security or benefits'],
                    ['Labour Laws', 'Protected by laws (Unions)', 'Not protected by laws'],
                    ['Statistics', 'Approx. 6% of total workforce', 'Approx. 94% of total workforce']
                ],
                tags: ['CLASSIFICATION']
            },
            {
                type: 'concept',
                title: 'Why Informalisation happens?',
                text: 'India\'s workforce is becoming "informal" even as the economy grows.',
                points: [
                    '**Inward-looking Policies**: Globalization and market competition.',
                    '**Decline in Public Sector**: Shrinking formal jobs in government units.',
                    '**Ahmedabad Textile Mill Case**: In the late 1980s, over 1.5 lakh workers lost their secure jobs due to mill closures, forcing them into casual manual labour (vulnerability).'
                ],
                tags: ['TRENDS']
            },
            {
                type: 'warning',
                title: 'The Casualisation Trend',
                text: 'Moving from self-employed/regular salary to "Casual Wage Labour" (moving from 23% to 33% over decades). This indicates a loss of stability.',
                tags: ['PROBLEM']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch6-t3',
        title: 'Jobless Growth & Unemployment',
        description: 'Analysis of growth without corresponding employment and types of unemployment.',
        content: [
            {
                type: 'concept',
                title: 'Jobless Growth',
                text: 'A situation where GDP grows at a rate faster than the rate of employment growth.',
                points: [
                    '**Period**: Particularly since the 1950s (GDP growth ~5%, Employment growth <2%).',
                    '**Cause**: Increasing reliance on capital-intensive technology rather than labour-intensive methods.'
                ],
                tags: ['GROWTH']
            },
            {
                type: 'list',
                title: 'Types of Unemployment',
                text: 'Key categories for exam classification:',
                points: [
                    '**Disguised Unemployment**: More people engaged than required (Common in Agriculture). Marginal productivity is Zero.',
                    '**Seasonal Unemployment**: Lack of work during off-seasons (Agriculture, Tourism).',
                    '**Open Unemployment**: When people are willing and able to work but find no work.',
                    '**Educated Unemployment**: Growing concern where degree holders lack relevant skills for the market.'
                ],
                tags: ['UNEMPLOYMENT']
            },
            {
                type: 'concept',
                title: 'Government Direct Measures',
                text: 'Government as an employer (Direct) and through poverty programs (Indirect).',
                points: [
                    '**MGNREGA (2005)**: Guaranteed 100 days of wage employment to every rural household.',
                    '**Skill India**: Focusing on vocational training to reduce educated unemployment.'
                ],
                tags: ['POLICY']
            }
        ],
        visualizations: []
    }
];
