import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'intro-macro',
    title: 'Introduction to Macroeconomics',
    description: 'The study of the economy as a whole — its origins, scope, and major decision-makers.',
    content: [
      {
        type: 'concept',
        title: 'Microeconomics vs Macroeconomics',
        text: 'Microeconomics focuses on individual units, while Macroeconomics addresses the economy in its entirety.',
        points: [
          '**Micro**: Individual consumers and producers, price and quantity decisions.',
          '**Macro**: Aggregates like total output (GDP), inflation, and unemployment.'
        ],
        tags: ['CORE DISTINCTION']
      },
      {
        type: 'concept',
        title: 'Macroeconomic Decision Makers',
        text: 'Unlike microeconomics, macro involves the State and statutory bodies.',
        points: [
          '**RBI**: Controls monetary policy.',
          '**SEBI**: Regulates capital markets.',
          '**Ministry of Finance**: Controls fiscal policy.'
        ],
        tags: ['INSTITUTIONS']
      },
      {
        type: 'context',
        title: 'Birth of Macroeconomics',
        text: 'The Great Depression (1929) shattered the belief in self-correcting markets.',
        points: [
          '**Classical View**: "Supply creates its own demand" (Say\'s Law).',
          '**Keynesian Revolution**: J.M. Keynes published "The General Theory" (1936), advocating for government intervention to manage demand.'
        ]
      },
      {
        type: 'tip',
        title: 'Why Macro Matters',
        text: 'Macro policies affect every citizen through inflation, employment, and trade balances.',
        tags: ['PRACTICAL RELEVANCE']
      }
    ],
    visualizations: [
      {
        id: 'v0',
        title: 'Microeconomics vs Macroeconomics',
        type: 'table',
        data: {
          headers: ['Basis', 'Microeconomics', 'Macroeconomics'],
          rows: [
            ['Unit of Study', 'Individual agents (consumer, firm)', 'Entire economy (aggregate)'],
            ['Focus', 'Price determination of individual goods', 'Income, Employment, Inflation determination'],
            ['Decision Maker', 'Private individuals and firms', 'State / Statutory bodies (RBI, SEBI)'],
            ['Key Variables', 'Individual demand, supply, price', 'Gross Domestic Product (GDP), Price Level, Unemployment'],
            ['Historical Origin', 'Adam Smith (1776) — Wealth of Nations', 'J.M. Keynes (1936) — General Theory']
          ]
        }
      }
    ]
  },
  {
    id: 'basic-concepts',
    title: 'Basic Concepts in Macroeconomics',
    description: 'Fundamental building blocks: goods classification, income types, stocks and flows.',
    content: [
      {
        type: 'comparison',
        subPoints: [
          { label: 'FACTOR INCOME', text: 'Earned for productive services (Rent, Wages, Interest, Profit). Included in National Income.' },
          { label: 'TRANSFER INCOME', text: 'Unilateral receipt without productive service (Pensions, Scholarships). EXCLUDED from National Income.' }
        ]
      },
      {
        type: 'concept',
        title: 'Final vs Intermediate Goods',
        text: 'The classification depends on the **end-use** of the good.',
        points: [
          '**Final Goods**: Ready for use by households (consumption) or firms (investment). Included in NI.',
          '**Intermediate Goods**: Used as raw materials or for resale in the same year. Excluded to avoid double counting.'
        ],
        tags: ['ACCOUNTING RULE']
      },
      {
        type: 'concept',
        title: 'Types of Final Goods',
        points: [
          '**Consumption Goods**: Satisfy wants directly (Durable, Semi-durable, Non-durable, Services).',
          '**Capital Goods**: Fixed assets used repeatedly in production (Plant, Machinery). Purchased by firms as investment.'
        ]
      },
      {
        type: 'concept',
        title: 'Stocks vs Flows',
        text: 'A **Stock** is at a point in time; a **Flow** is over a period of time.',
        points: [
          '**Stocks**: Wealth, Capital, Inventory, Population.',
          '**Flows**: Income, Output, Investment, Consumption.',
          '**Key Rule**: Change in Stock = Flow (e.g., Change in Inventory).'
        ],
        tags: ['MEASUREMENT']
      },
      {
        type: 'warning',
        title: 'Depreciation (CFC)',
        text: 'Fall in value of fixed assets due to wear/tear or foreseen obsolescence.',
        points: [
          '**Formula**: Net Investment = Gross Investment − Depreciation.',
          'Do NOT confuse with capital loss (accident/calamity).'
        ],
        tags: ['CALCULATION']
      },
      {
        type: 'concept',
        title: 'Imputed Value Rules',
        points: [
          '**Self-consumed goods**: Included (imputed market value).',
          '**Self-consumed services**: Excluded (cannot be reliably valued).',
          '**Second-hand goods**: Excluded (already counted in year of production).',
          '**Interest on National Debt**: EXCLUDED (treated as transfer payment).'
        ],
        tags: ['EXAM TRAP']
      }
    ],
    visualizations: [
      {
        id: 'v1',
        title: 'Final Goods vs Intermediate Goods',
        type: 'table',
        data: {
          headers: ['Basis', 'Final Goods', 'Intermediate Goods'],
          rows: [
            ['Usage', 'End use — consumption or investment', 'Used as raw material or for resale'],
            ['Value Addition', 'No further value to be added', 'Value is still to be added'],
            ['National Income Inclusion', 'Included — to measure output', 'Excluded — to avoid double counting'],
            ['Example (same item)', 'Milk bought by a household', 'Milk bought by a sweet shop for making sweets']
          ]
        }
      },
      {
        id: 'v1b',
        title: 'Stock vs Flow — Key Examples',
        type: 'table',
        data: {
          headers: ['Variable', 'Stock or Flow?', 'Why?'],
          rows: [
            ['Capital (number of machines)', 'STOCK', 'Measured at a point in time'],
            ['Investment (spending on machines per year)', 'FLOW', 'Measured over a period'],
            ['Inventory (unsold goods held)', 'STOCK', 'Measured at a point in time'],
            ['Change in Inventory (increase/decrease per year)', 'FLOW', 'Measured over a period — change in stock = flow'],
            ['Wealth (total assets)', 'STOCK', 'Measured at a point in time'],
            ['Income (earnings per month/year)', 'FLOW', 'Measured over a period'],
            ['A television set (consumer durable)', 'STOCK (the good)', 'The physical TV exists at a point in time'],
            ['Entertainment from TV (service over time)', 'FLOW (the service)', 'Used continuously over time']
          ]
        }
      },
      {
        id: 'v1c',
        title: 'National Income Inclusion — Quick Rules',
        type: 'table',
        data: {
          headers: ['Item', 'Included in National Income?', 'Reason'],
          rows: [
            ['Self-consumed goods (farmer eats own crop)', '✅ YES — at imputed market value', 'Production occurred; market value can be estimated'],
            ['Self-consumed services (housewife services)', '❌ NO', 'Cannot be reliably valued in monetary terms'],
            ['Second-hand goods (old car sold)', '❌ NO', 'Would be double counting — already included in year of production'],
            ['Transfer payments (old-age pension)', '❌ NO', 'No productive service rendered in exchange'],
            ['Interest on National Debt', '❌ NO — treated as transfer payment', 'No productive service rendered; redistribution of tax revenue'],
            ['Interest on business loans', '✅ YES — part of Operating Surplus', 'Factor payment for productive use of capital']
          ]
        }
      }
    ]
  },
  {
    id: 'circular-flow',
    title: 'Circular Flow of Income',
    description: 'The continuous and interdependent flow of production, income, and expenditure in an economy — two-sector and multi-sector models.',
    content: [
      {
        type: 'concept',
        title: 'Three Phases of Circular Flow',
        text: 'Income circulates continuously through three distinct phases.',
        points: [
          '**Production Phase**: Firms produce goods using factor services.',
          '**Income Phase**: Firms pay factor incomes (Rent, Wages, Interest, Profit).',
          '**Expenditure Phase**: Households spend income on goods/services.'
        ],
        tags: ['PHASES']
      },
      {
        type: 'concept',
        title: 'Two-Sector Model',
        text: 'Simplest economy with only Households and Firms.',
        points: [
          '**Households**: Own factors, supply services, receive income, spend on consumption.',
          '**Firms**: Use services, produce goods, pay factor income, receive expenditure.',
          '**Equilibrium**: Total Output = Total Income = Total Expenditure.'
        ],
        tags: ['MODEL']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'REAL FLOW', text: 'Flow of physical services (factor services) and goods/services between sectors.' },
          { label: 'MONEY FLOW', text: 'Flow of factor payments (wages, rent) and consumption expenditure between sectors.' }
        ]
      },
      {
        type: 'concept',
        title: 'Leakages and Injections',
        text: 'Withdrawals from and additions to the circular flow.',
        points: [
          '**Leakages (S+T+M)**: Savings, Taxes, Imports. They reduce the flow.',
          '**Injections (I+G+X)**: Investment, Govt Expenditure, Exports. They increase the flow.',
          '**Equilibrium**: Total Leakages = Total Injections.'
        ],
        tags: ['MACRO DYNAMICS']
      }
    ],
    visualizations: [
      {
        id: 'v2',
        title: 'Two-Sector Circular Flow',
        type: 'process',
        data: [
          { title: 'Household Sector', description: 'Owns factors. Supplies factor services (Labour, Land, Capital, Enterprise) to Firms. Receives factor income. Spends on consumption.' },
          { title: 'Firm Sector', description: 'Uses factor services to produce goods and services. Pays factor incomes (Wages, Rent, Interest, Profit) to Households. Sells goods to Households.' },
          { title: 'Real Flow (Inner Loop)', description: 'Factor services flow from Households → Firms. Goods and services flow from Firms → Households.' },
          { title: 'Money Flow (Outer Loop)', description: 'Factor payments (wages, rent, interest, profit) flow from Firms → Households. Consumption expenditure flows from Households → Firms.' }
        ]
      },
      {
        id: 'v2-extra',
        title: 'Two Markets in the Circular Flow',
        type: 'grid',
        data: [
          { label: 'Factor Market', desc: 'Where factor services (Labour, Land, Capital) are bought and sold. Households = sellers. Firms = buyers.' },
          { label: 'Product Market', desc: 'Where final goods and services are bought and sold. Firms = sellers. Households = buyers.' }
        ]
      },
      {
        id: 'v2-leakages',
        title: 'Leakages and Injections in Circular Flow',
        type: 'table',
        data: {
          headers: ['Type', 'Item', 'Sector', 'Effect on Flow'],
          rows: [
            ['LEAKAGE', 'Savings (S)', 'Households save instead of spending', 'Withdraws money from flow'],
            ['LEAKAGE', 'Taxes (T)', 'Government takes from households and firms', 'Withdraws money from flow'],
            ['LEAKAGE', 'Imports (M)', 'Spending goes to foreign producers', 'Withdraws money from flow'],
            ['INJECTION', 'Investment (I)', 'Firms invest borrowed funds', 'Adds money to flow'],
            ['INJECTION', 'Government Expenditure (G)', 'Government spends tax revenue', 'Adds money to flow'],
            ['INJECTION', 'Exports (X)', 'Foreign demand for domestic goods', 'Adds money to flow'],
            ['EQUILIBRIUM', 'S + T + M = I + G + X', 'Leakages = Injections', 'Circular flow in balance']
          ]
        }
      }
    ]
  },
  {
    id: 'national-income-aggregates',
    title: 'National Income and Related Aggregates',
    description: 'Understanding the web of relationships between Gross Domestic Product (GDP), Net National Product (NNP), Market Price (MP) and Factor Cost (FC) — with all formulas.',
    content: [
      {
        type: 'concept',
        title: 'The Three Golden Conversion Rules',
        text: 'All national income aggregates are connected via three pairs of relationships.',
        points: [
          '**Gross ↔ Net**: Gross − Depreciation (CFC) = Net.',
          '**Domestic ↔ National**: Domestic + NFIA = National.',
          '**Market Price ↔ Factor Cost**: Market Price − NIT = Factor Cost (NIT = Indirect Taxes − Subsidies).'
        ],
        tags: ['MASTER RULES']
      },
      {
        type: 'concept',
        title: 'Domestic vs National Product',
        points: [
          '**Domestic**: Production within geographical boundaries, regardless of residency.',
          '**National**: Production by normal residents, regardless of location.',
          '**NFIA**: Factor income from abroad − Factor income to abroad.'
        ],
        tags: ['TERRITORY VS RESIDENCY']
      },
      {
        type: 'context',
        title: 'Who is a "Normal Resident"?',
        text: 'Ordinary residents whose centre of economic interest lies in the country for >1 year.',
        points: [
          '**Include**: Indian workers in Middle East (if residents).',
          '**Exclude**: Tourists, foreign diplomats, UN staff.'
        ]
      },
      {
        type: 'concept',
        title: 'National Income (NNP at FC)',
        text: 'The sum total of factor incomes (Rent+Wages+Interest+Profit) earned by normal residents.',
        tags: ['PRIMARY AGGREGATE']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'NOMINAL GDP', text: 'Measured at CURRENT year prices. Affected by inflation.' },
          { label: 'REAL GDP', text: 'Measured at BASE year (constant) prices. True indicator of growth.' }
        ]
      },
      {
        type: 'tip',
        title: 'GDP Deflator',
        text: 'Measures the price change between base year and current year.',
        points: ['Formula: (Nominal GDP / Real GDP) x 100']
      }
    ],
    visualizations: [
      {
        id: 'v3',
        title: 'The Three Golden Conversion Rules',
        type: 'steps',
        data: [
          'RULE 1 (Gross ↔ Net): Gross Value − Depreciation (Consumption of Fixed Capital) = Net Value',
          'RULE 2 (Domestic ↔ National): Domestic Product + Net Factor Income from Abroad (NFIA) = National Product',
          'RULE 3 (Market Price ↔ Factor Cost): Market Price − Net Indirect Taxes (NIT) = Factor Cost, where NIT = Indirect Taxes − Subsidies'
        ],
        formula: 'Combined: NNP at FC = GDP at MP − Depreciation + NFIA − NIT'
      },
      {
        id: 'v3b',
        title: 'All 8 National Income Aggregates — The Complete Map',
        type: 'table',
        data: {
          headers: ['Aggregate', 'Full Form', 'Formula'],
          rows: [
            ['GDP at MP', 'Gross Domestic Product at Market Price', 'Starting point — measured by Expenditure Method'],
            ['NDP at MP', 'Net Domestic Product at Market Price', 'GDP at MP − Depreciation'],
            ['GNP at MP', 'Gross National Product at Market Price', 'GDP at MP + NFIA'],
            ['NNP at MP', 'Net National Product at Market Price', 'GNP at MP − Depreciation = NDP at MP + NFIA'],
            ['GDP at FC', 'Gross Domestic Product at Factor Cost', 'GDP at MP − NIT'],
            ['NDP at FC', 'Net Domestic Product at Factor Cost', 'GDP at FC − Depreciation = NDP at MP − NIT'],
            ['GNP at FC', 'Gross National Product at Factor Cost', 'GDP at FC + NFIA = GNP at MP − NIT'],
            ['NNP at FC', 'Net National Product at Factor Cost = NATIONAL INCOME', 'GDP at MP − Depreciation + NFIA − NIT']
          ]
        }
      },
      {
        id: 'v3c',
        title: 'Nominal GDP vs Real GDP',
        type: 'table',
        data: {
          headers: ['Feature', 'Nominal GDP', 'Real GDP'],
          rows: [
            ['Prices Used', 'Current year prices', 'Base year (constant) prices'],
            ['Rises When', 'Output rises OR prices rise', 'ONLY when actual output rises'],
            ['Inflation Effect', 'Includes price rise effect', 'Removes price rise effect'],
            ['Better Indicator Of', 'Money value of output', 'Actual economic growth (welfare)'],
            ['GDP Deflator', '—', 'GDP Deflator = (Nominal GDP ÷ Real GDP) × 100']
          ]
        }
      }
    ]
  },
  {
    id: 'measurement-methods',
    title: 'Measurement of National Income — Three Methods',
    description: 'The three equivalent approaches to calculate National Income — Value Added (Product) Method, Income Method, and Expenditure Method.',
    content: [
      {
        type: 'concept',
        title: 'The Three-Way Equivalence',
        text: 'Production = Income = Expenditure. All three methods measure the same flow from different angles.',
        tags: ['LOGIC']
      },
      {
        type: 'concept',
        title: 'Method 1: Value Added (Product) Method',
        text: 'Adds up value added at each stage of production.',
        points: [
          '**GVA at MP** = Value of Output − Intermediate Consumption.',
          '**Value of Output** = Sales + Change in Stock.',
          '**Intermediate Consumption**: Non-factor inputs (raw materials, fuel) purchased from other firms.'
        ],
        tags: ['OUTPUT APPROACH']
      },
      {
        type: 'warning',
        title: 'Precautions (Value Added)',
        points: [
          'Avoid second-hand goods.',
          'Exclude transfer payments.',
          'Include imputed value of self-consumed goods.',
          'Do NOT include intermediate goods (prevents double counting).'
        ]
      },
      {
        type: 'concept',
        title: 'Method 2: Income Method',
        text: 'Adds up all factor incomes paid out by producers.',
        points: [
          '**NDP at FC** = CoE + Operating Surplus + Mixed Income.',
          '**CoE**: Wages (cash/kind) + Employer social security contribution.',
          '**Operating Surplus**: Rent + Interest + Profit.',
          '**Mixed Income**: Income of self-employed where labour/capital cannot be separated.'
        ],
        tags: ['INCOME APPROACH']
      },
      {
        type: 'concept',
        title: 'Method 3: Expenditure Method',
        text: 'Adds up all final expenditures in the economy.',
        points: [
          '**GDP at MP** = PFCE + GFCE + GDCF + Net Exports.',
          '**PFCE**: Household spending.',
          '**GFCE**: Govt spending on goods/services (excludes transfers).',
          '**GDCF**: Investment = Gross Fixed Capital Formation + Change in Stock.',
          '**Net Exports**: Exports (X) − Imports (M).'
        ],
        tags: ['EXPENDITURE APPROACH']
      }
    ],
    visualizations: [
      {
        id: 'v4',
        title: 'Value Added Method — Step by Step',
        type: 'table',
        data: {
          headers: ['Component', 'Full Form / Explanation'],
          rows: [
            ['Value of Output', 'Sales Revenue + Change in Stock (Closing Stock − Opening Stock)'],
            ['Intermediate Consumption', 'Value of raw materials, fuel, electricity bought from other firms — consumed in production'],
            ['GVA at MP', 'Gross Value Added at Market Price = Value of Output − Intermediate Consumption'],
            ['Key Precautions', 'Exclude second-hand goods, transfer payments. Include imputed self-consumed goods. Sum GVA across all enterprises = GDP at MP']
          ]
        },
        formula: 'NNP at FC (National Income) = Gross Value Added at Market Price − Depreciation − Net Indirect Taxes (NIT) + Net Factor Income from Abroad (NFIA)'
      },
      {
        id: 'v4-income',
        title: 'Income Method — Step by Step',
        type: 'steps',
        data: [
          'Step 1: Compensation of Employees (CoE) = Wages & Salaries (cash) + Wages & Salaries (kind) + Employer\'s contribution to Social Security (Provident Fund).',
          'Step 2: Operating Surplus (OS) = Rent + Interest on business loans + Profit (retained + dividends + corporate tax). NOTE: Interest on National Debt is EXCLUDED — it is a transfer payment.',
          'Step 3: Mixed Income of Self-Employed = Income of farmers, self-employed professionals (inseparable mix of wages + profit).',
          'Step 4: Net Domestic Product at Factor Cost (NDP at FC) = Compensation of Employees + Operating Surplus + Mixed Income.',
          'Step 5: National Income (NNP at FC) = NDP at FC + Net Factor Income from Abroad (NFIA).'
        ],
        formula: 'NNP at FC = Compensation of Employees + Operating Surplus + Mixed Income + NFIA'
      },
      {
        id: 'v4-expenditure',
        title: 'Expenditure Method — Step by Step',
        type: 'steps',
        data: [
          'Step 1: Private Final Consumption Expenditure (PFCE) — all household and non-profit institution spending on final goods and services.',
          'Step 2: Government Final Consumption Expenditure (GFCE) — government current spending on goods and services (excludes transfer payments like pensions).',
          'Step 3: Gross Domestic Capital Formation (GDCF) = Gross Fixed Capital Formation (GFCF) + Change in Stock. Change in Stock = Closing Inventory − Opening Inventory.',
          'Step 4: Net Exports (NX) = Exports (X) − Imports (M). Can be positive (surplus) or negative (deficit).',
          'Step 5: GDP at MP = PFCE + GFCE + GDCF + NX.',
          'Step 6: National Income (NNP at FC) = GDP at MP − Depreciation − NIT + NFIA.'
        ],
        formula: 'National Income (NNP at FC) = GDP at MP − Depreciation − Net Indirect Taxes + Net Factor Income from Abroad'
      }
    ]
  },
  {
    id: 'gdp-welfare',
    title: 'Gross Domestic Product and Welfare',
    description: 'Understanding why GDP is an imperfect measure of economic welfare — its limitations and what it misses.',
    content: [
      {
        type: 'concept',
        title: 'GDP as a Welfare Measure',
        text: 'GDP measures the size of an economy, but it is an imperfect proxy for quality of life.',
        tags: ['CONCEPT']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'DISTRIBUTION OF GDP', text: 'Growth may be concentrated in few hands (inequality). High GDP but poor welfare for majority.' },
          { label: 'EXTERNALITIES', text: 'Unintended benefits/harms (like pollution) not captured in market prices.' }
        ]
      },
      {
        type: 'warning',
        title: 'Non-Monetary Exchanges',
        text: 'Activities like domestic work (housewife services) or volunteering are excluded, leading to an **underestimation** of welfare.',
        tags: ['LIMITATION']
      },
      {
        type: 'concept',
        title: 'Composition of GDP',
        text: 'Spending on "bads" (defence, harmful goods) raises GDP but not necessarily welfare.',
        tags: ['LIMITATION']
      }
    ],
    visualizations: [
      {
        id: 'v5',
        title: 'Four Limitations of GDP as a Welfare Index',
        type: 'table',
        data: {
          headers: ['Limitation', 'What GDP Misses', 'Indian Example'],
          rows: [
            ['Distribution', 'Whether growth is equitably spread', 'Top 10% hold 70% of wealth — high GDP, high inequality'],
            ['Non-Monetary Exchanges', 'Unpaid domestic and volunteer work', 'Housewife services worth billions — excluded from GDP'],
            ['Negative Externalities', 'Environmental damage and health costs of pollution', 'Ganga river pollution — factories add to GDP but harm welfare'],
            ['Composition', 'Whether goods produced actually increase well-being', 'Higher defence spending raises GDP but not citizen welfare']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
