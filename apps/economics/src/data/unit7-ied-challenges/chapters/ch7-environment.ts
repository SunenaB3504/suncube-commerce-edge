import { TheoryTopic } from '../../../types';

export const CH7_TOPICS: TheoryTopic[] = [
    {
        id: 'u7-ch7-t1',
        title: 'Environment: Concept & Functions',
        description: 'Definition of environment, its functions, and Daly\'s rules for sustainability.',
        content: [
            {
                type: 'concept',
                title: 'What is Environment?',
                text: 'Total planetary inheritance and the totality of biological (biotic) and physical (abiotic) factors.',
                points: [
                    '**Biotic**: Birds, animals, plants, forests.',
                    '**Abiotic**: Air, water, land, sunlight, minerals.'
                ],
                tags: ['DEFINITION']
            },
            {
                type: 'list',
                title: 'Four Key Functions of Environment',
                text: 'The environment sustains life through:',
                points: [
                    '**Supplying Resources**: Both renewable (trees, fish) and non-renewable (minerals, fossil fuels).',
                    '**Assimilating Waste**: Absorbing the byproducts of production/consumption.',
                    '**Sustaining Life**: Providing genetic and biological diversity.',
                    '**Aesthetic Services**: Providing scenery and recreational value (often overlooked).'
                ],
                tags: ['FUNCTIONS']
            },
            {
                type: 'warning',
                title: 'The Carrying Capacity',
                text: 'Environment fails when waste generation exceeds the "assimilative capacity" or extraction exceeds regeneration.',
                points: [
                    '**Absorptive Capacity**: The ability of the environment to absorb degradation without permanent damage.',
                    '**Opportunity Costs**: Huge investments now required just to reverse pollution (STPs, Air filters).'
                ],
                tags: ['CRITICAL']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-t2',
        title: 'Major Environmental Challenges in India',
        description: 'Soil erosion, deforestation, air pollution, and global warming context.',
        content: [
            {
                type: 'concept',
                title: 'India\'s Environmental State',
                text: 'India faces the dichotomy of "Poverty-induced" and "Affluence-induced" degradation.',
                points: [
                    '**Forestry**: Per capita forest land is **0.06 hectare** (Requirement is 0.47).',
                    '**Soil Erosion**: India loses **5.3 billion tonnes** of soil per year due to wind/water.',
                    '**Iron Ore**: India holds **8%** of the world\'s iron ore reserves.',
                    '**Industrial Hazards**: CPCB identified **17 categories** of highly polluting industries.'
                ],
                tags: ['CHALLENGES']
            },
            {
                type: 'list',
                title: 'Global Concerns: Warming & Ozone',
                text: 'Externalities felt on a global scale:',
                points: [
                    '**Global Warming**: Increase in average temperature due to Greenhouse gases. Leads to glacier melting and rising sea levels.',
                    '**Ozone Depletion**: Caused by CFCs (Chlorofluorocarbons). The Montreal Protocol (1987) aims to phase these out.'
                ],
                tags: ['GLOBAL']
            }
        ],
        visualizations: []
    },
    {
        id: 'u7-ch7-t3',
        title: 'Strategies for Sustainable Development',
        description: 'Herman Daly\'s rules, renewable energy, and traditional knowledge.',
        content: [
            {
                type: 'list',
                title: 'Daly\'s Rules for Sustainability',
                text: 'Herman Daly, a leading ecological economist, proposed 5 specific rules:',
                points: [
                    '**Population Limit**: Limit to a level within carrying capacity.',
                    '**Technological Efficiency**: Switch to "Input-efficient" rather than "Input-consuming" methods.',
                    '**Extraction Rate**: Renewable resources extraction < Rate of regeneration.',
                    '**Depletion Rate**: Non-renewable depletion rate < Rate of creation of renewable substitutes.',
                    '**Pollution Rate**: Waste generation < Assimilative capacity.'
                ],
                tags: ['TECHNICAL']
            },
            {
                type: 'concept',
                title: 'Eco-friendly Energy & Practices',
                text: 'Moving away from thermal/hydro to cleaner alternatives.',
                points: [
                    '**Solar & Wind**: Huge potential in India; clean and inexhaustible.',
                    '**Mini-Hydel Plants**: Using mountain streams for local electricity (environment friendly).',
                    '**LPG & Gober Gas**: Reducing indoor pollution (Biomass usage).',
                    '**CNG**: Used in public transport in cities like Delhi.',
                    '**Traditional Knowledge**: Use of Neem, Turmeric, and bio-compost (Tanwa/Organic farming).'
                ],
                tags: ['SOLUTIONS']
            },
            {
                type: 'tip',
                title: 'Appiko Movement (1983)',
                text: 'Started in Karnataka (Sirsi district), aimed at "hugging the trees" to prevent felling. It is the southern counterpart of the **Chipko Movement**.',
                tags: ['HISTORY']
            }
        ],
        visualizations: []
    }
];
