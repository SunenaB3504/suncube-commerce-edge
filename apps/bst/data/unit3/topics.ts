import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: 'env-concept',
    title: 'Concept & Importance',
    description: 'Understanding the business environment and its significance.',
    content: [
      'Meaning: Business environment refers to the sum total of all individuals, institutions and other forces that are outside the control of a business enterprise but that may affect its performance. It includes economic, social, political, technological and legal forces.',
      'Features: (a) Totality of external forces: Aggregative in nature. (b) Specific and general forces: Specific forces (investors, customers) affect firms directly; general forces (PESTLE) affect all firms. (c) Inter-relatedness: Different parts are closely interrelated (e.g., health awareness leads to organic food demand). (d) Dynamic nature: Environment keeps on changing. (e) Uncertainty: Difficult to predict future happenings. (f) Complexity: Easy to understand in parts but difficult to grasp in totality. (g) Relativity: Differs from country to country and region to region.',
      'Importance: (a) Identification of opportunities and getting the first mover advantage: Helping the firm to identify opportunities early (e.g., Maruti Udyog). (b) Identification of threats and early warning signals: Identifying negative trends early. (c) Tapping useful resources: Business environment is a source of resources like finance, machines, and raw materials. (d) Coping with rapid changes: Helps in dealing with turbulence in the environment. (e) Assisting in planning and policy formulation: Serves as a basis for long-term planning. (f) Improving performance: Continued monitoring helps in improving the performance of the enterprise.'
    ],
    visualizations: [
      {
        id: 'env-features',
        title: 'Features of Business Environment',
        type: 'list',
        data: ['Totality of External Forces', 'Specific & General Forces', 'Inter-relatedness', 'Dynamic Nature', 'Uncertainty', 'Complexity', 'Relativity']
      },
      {
        id: 'inter-relatedness-flow',
        title: 'Inter-relatedness of Factors',
        type: 'flow',
        data: {
          nodes: [
            { id: 'h', label: 'Health Awareness Trend' },
            { id: 'd', label: 'Demand for Organic Food' },
            { id: 'l', label: 'Lifestyle Change' }
          ],
          edges: [
            { from: 'h', to: 'd', label: 'Social to Economic' },
            { from: 'h', to: 'l' }
          ]
        }
      }
    ]
  },
  {
    id: 'env-dimensions',
    title: 'Dimensions of Business Environment',
    description: 'Key factors constituting the general environment.',
    content: [
      'Economic Environment: It has immediate and direct economic impact on a business. Key factors: Interest rates, Inflation rates, Changes in disposable income of people, Value of rupee, and Stock market indices. Example: A rise in interest rates lead to a decrease in demand for loans and vice versa.',
      'Social Environment: It includes social forces like customs, traditions, values, social trends, and society\'s expectations. Values refer to concepts that a society holds in high esteem. Trends refer to popular shifts in preference. Example: Health and fitness trend has increased demand for gym memberships and organic food.',
      'Technological Environment: Includes forces relating to scientific improvements and innovations which provide new ways of producing goods and services and new methods/techniques of operating a business. Example: Online booking of tickets has transformed the travel industry.',
      'Political Environment: It includes political conditions such as general stability and peace in the country and specific attitudes that elected government representatives hold towards business. Example: The attitude of the government towards foreign investment significantly impacts business operations.',
      'Legal Environment: It includes various legislations passed by the Government, administrative orders, court judgments as well as the decisions rendered by various commissions and agencies. Every business must function within the laws of the land. Example: Mandatory statutory warning on tobacco products.'
    ],
    visualizations: [
      {
        id: 'pestle-star',
        title: 'Dimensions Interaction',
        type: 'flow',
        data: {
          nodes: [
            { id: 'bus', label: 'Business Enterprise' },
            { id: 'eco', label: 'Economic Environment' },
            { id: 'soc', label: 'Social Environment' },
            { id: 'tech', label: 'Technological Environment' },
            { id: 'pol', label: 'Political Environment' },
            { id: 'leg', label: 'Legal Environment' }
          ],
          edges: [
            { from: 'eco', to: 'bus' }, { from: 'soc', to: 'bus' },
            { from: 'tech', to: 'bus' }, { from: 'pol', to: 'bus' },
            { from: 'leg', to: 'bus' }
          ]
        }
      }
    ]
  },
  {
    id: 'economic-env-india',
    title: 'Economic Environment in India',
    description: 'Overview of India\'s economic landscape and reforms.',
    content: [
      'Liberalisation: The economic reforms that were introduced were aimed at liberalising the Indian business and industry from all unnecessary controls and restrictions. Meaning: Removing licensing requirements in most industries, freedom in deciding the scale of business activities, freedom in fixing prices, and simplifying procedures for imports and exports.',
      'Privatisation: The new set of economic reforms aimed at giving greater role to the private sector in the nation building process and a reduced role to the public sector. Meaning: Disinvestment (selling off part of public sector shares), dilution of government ownership, and closing down of sick public sector units.',
      'Globalisation: It means the integration of the various economies of the world leading towards the emergence of a cohesive global economy. Meaning: Removal of barriers to foreign trade and investment, free movement of capital and labor across borders, and standardization of products for international markets.',
      'Impact of LPG Reforms: Increasing competition, more demanding customers, rapidly changing technological environment, necessity for change, need for developing human resources, and market orientation.'
    ],
    visualizations: [
      {
        id: 'lpg',
        title: 'LPG Reforms (1991)',
        type: 'table',
        data: {
          headers: ['Reform', 'Key Features'],
          rows: [
            ['Liberalisation', 'Abolished licensing, freedom in scale, free movement of goods'],
            ['Privatisation', 'Disinvestment, reduced public sector role'],
            ['Globalisation', 'Foreign capital (FDI), technology agreements, integrating economy']
          ]
        }
      }
    ]
  },
  {
    id: 'demonetization',
    title: 'Demonetization',
    description: 'The withdrawal of legal tender status of ₹500 and ₹1,000 notes.',
    content: [
      'Event: The Government of India announced on November 8, 2016, that the two largest denomination notes, ₹500 and ₹1,000, were no longer legal tender.',
      'Aims: (a) To curb corruption. (b) To check the use of high-denomination notes for illegal activities. (c) To eliminate counterfeit currency. (d) To curb the accumulation of "Black Money" generated by income that has not been declared to tax authorities.',
      'Features: (a) Tax Administration Measure: People with black money had to declare it and pay taxes/penalties. (b) Channeling savings into the formal financial system: People deposited their cash into banks, increasing liquidity. (c) Creating a less-cash economy: Promotion of digital transactions and e-wallets.',
      'Impact: Decline in cash transactions, rise in digital payments, temporary slowdown in some sectors, and increased tax compliance.'
    ],
    visualizations: []
  }
];
