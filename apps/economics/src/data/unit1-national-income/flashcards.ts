import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'u1-fc1',
    question: 'Define National Income (NNP at FC).',
    answer: 'It is the sum total of factor incomes (rent, wages, interest, profit) earned by normal residents of a country during a year.',
    category: 'Theory',
    aiExplanation: 'Think of National Income as the "Total Earnings" of a country\'s residents, regardless of where they earned it. It must be at Factor Cost (FC) because we only want the actual income earned by factors of production, excluding taxes.'
  },
  {
    id: 'u1-fc2',
    question: 'Difference between Gross and Net investment?',
    answer: 'Gross Investment includes depreciation, while Net Investment excludes it (Net = Gross - Depreciation).',
    category: 'Theory',
    aiExplanation: 'Gross is the "Total" spent on new assets. Net is what actually "adds" to the stock of capital after accounting for the wear and tear (Depreciation) of existing machines.'
  },
  {
    id: 'u1-fc3',
    question: 'What is a "Stock" variable?',
    answer: 'A variable measured at a particular point of time (e.g., Wealth, Capital).',
    category: 'Theory',
    aiExplanation: 'Imagine a "Still Photo." Wealth at 5 PM on Dec 31st is a stock. It is a quantity accumulated over time but measured at an instant.'
  },
  {
    id: 'u1-fc4',
    question: 'What is a "Flow" variable?',
    answer: 'A variable measured over a period of time (e.g., Income, Expenditure).',
    category: 'Theory',
    aiExplanation: 'Imagine a "Video." Income earned *during* the year 2023 is a flow. It has a time dimension (per month, per year).'
  },
  {
    id: 'u1-fc5',
    question: 'Name the two sectors in a simple circular flow model.',
    answer: 'Households (owners of factors) and Firms (producers of goods).',
    category: 'Theory',
    aiExplanation: 'In this closed 2-sector model, Households provide services (labor, land) and Firms provide goods. Money flows in the opposite direction as payments.'
  },
  {
    id: 'u1-fc6',
    question: 'Define Normal Residents.',
    answer: 'Individuals/Institutions who ordinarily reside in a country for more than a year and whose center of economic interest lies in that country.',
    category: 'Theory',
    aiExplanation: 'Note the "Economic Interest" part. Even a foreigner living in India for 2 years is a normal resident if they earn, spend, and save here.'
  },
  {
    id: 'u1-fc7',
    question: 'Formula for GDP at MP to NNP at FC?',
    answer: 'GDP at MP (-) Depreciation (+) NFIA (-) NIT = NNP at FC.',
    category: 'Theory',
    aiExplanation: 'The 3 Golden Rules: 1. Gross -> Net (-Dep), 2. Domestic -> National (+NFIA), 3. MP -> FC (-NIT). Apply them step-by-step.'
  },
  {
    id: 'u1-fc8',
    question: 'What are Intermediate Goods?',
    answer: 'Goods used for resale or as raw material in the same year. Not included in National Income.',
    category: 'Theory',
    aiExplanation: 'Example: Flour used by a baker. If we count the flour *and* the bread, we are double-counting. We only count the final "Bread."'
  },
  {
    id: 'u1-fc9',
    question: 'What are Transfer Payments?',
    answer: 'Unilateral payments received without any productive service (e.g., Old age pension, scholarships).',
    category: 'Theory',
    aiExplanation: 'These are "Gifts" or "Charity." Since no new good or service was produced in return, they are excluded from National Income.'
  },
  {
    id: 'u1-fc10',
    question: 'What is Real GDP?',
    answer: 'GDP valued at constant prices (base year prices). It measures physical output change.',
    category: 'Theory',
    aiExplanation: 'Real GDP is the "Truth." It ignores price inflation and only shows if we are actually producing MORE goods and services.'
  },
  {
    id: 'u1-fc11',
    question: 'Distinguish between Factor Income and Transfer Income.',
    answer: 'Factor Income is earned (e.g., Rent), Transfer Income is unearned (e.g., Gifts).',
    category: 'Classification',
    aiExplanation: 'Factor income is a "Two-way" transaction (Service for Cash). Transfer income is "One-way" (Cash for Nothing).'
  },
  {
    id: 'u1-fc12',
    question: 'What is NFIA?',
    answer: 'Net Factor Income from Abroad = Factor income from abroad - Factor income to abroad.',
    category: 'Calculation',
    aiExplanation: 'It is the net earnings of our residents working abroad minus what foreigners earn here. It is the bridge between Domestic and National product.'
  },
  {
    id: 'u1-fc13',
    question: 'Is "Change in Stock" a flow unit?',
    answer: 'Yes, it is a flow variable because it is measured over the accounting year.',
    category: 'Classification',
    aiExplanation: 'While "Stock" itself is a stock variable, the *change* in it (Inventory Investment) happens over time, making it a flow.'
  },
  {
    id: 'u1-fc14',
    question: 'Define Operating Surplus.',
    answer: 'Income from property and entrepreneurship (Rent + Interest + Profit).',
    category: 'Calculation',
    aiExplanation: 'In the Income Method, this represents the earnings of everyone *except* the laborers (who get wages) and the self-employed.'
  },
  {
    id: 'u1-fc15',
    question: 'What is Mixed Income?',
    answer: 'Income of self-employed people where factor inputs cannot be distinguished.',
    category: 'Definition',
    aiExplanation: 'Think of a small shopkeeper. Their income is partly "Wage" (their own labor) and partly "Profit" (their business). It\'s "Mixed."'
  },
  {
    id: 'u1-fc16',
    question: 'Components of Compensation of Employees?',
    answer: 'Wages and salaries (cash/kind) + Social security contribution by employers.',
    category: 'Theory',
    aiExplanation: 'Crucial Trap: Only *Employer* contributions are included. Employee contributions are already part of their gross wage.'
  },
  {
    id: 'u1-fc17',
    question: 'What is GVA at Market Price?',
    answer: 'Value of Output - Intermediate Consumption.',
    category: 'Calculation',
    aiExplanation: 'GVA (Gross Value Added) measures the "Contribution" of a single firm. The sum of all GVA in the country equals GDP.'
  },
  {
    id: 'u1-fc18',
    question: 'Define Private Final Consumption Expenditure.',
    answer: 'Total spending by households and non-profit institutions on final goods.',
    category: 'Application',
    aiExplanation: 'This is the "C" in the C+I+G formula. It covers everything from milk and bread to cars and haircuts bought by families.'
  },
  {
    id: 'u1-fc19',
    question: 'True/False: Second-hand goods are included in GDP.',
    answer: 'False. They were already included in the year produced; inclusion would be double counting.',
    category: 'True/False',
    aiExplanation: 'If you sell a 2010 car in 2023, no *new* car was produced. However, the *broker\'s commission* on that sale IS included because it is a new service.'
  },
  {
    id: 'u1-fc20',
    question: 'What is the "Marketed Surplus"?',
    answer: 'The portion of agricultural harvest sold in market by farmers after self-consumption.',
    category: 'Theory',
    aiExplanation: 'If a farmer grows 100kg and eats 20kg, the 80kg sold is the Marketed Surplus. Note: The 20kg eaten is still part of NI as "imputed value."'
  },
  {
    id: 'u1-fc21',
    question: 'Define Capital Formation.',
    answer: 'Addition to the capital stock of an economy (investment).',
    category: 'Definition',
    aiExplanation: 'Capital formation means building factories, buying machines, or increasing inventories. It increases the future producing capacity of the nation.'
  },
  {
    id: 'u1-fc22',
    question: 'What is Net Indirect Tax (NIT)?',
    answer: 'Indirect Taxes - Subsidies.',
    category: 'Calculation',
    aiExplanation: 'Taxes increase the Market Price; Subsidies decrease it. Subtracting subsidies from taxes gives us the net "extra" the government adds to the cost.'
  },
  {
    id: 'u1-fc23',
    question: 'Formula for GDP Deflator?',
    answer: '(Nominal GDP / Real GDP) * 100.',
    category: 'Calculation',
    aiExplanation: 'It tells us how much of the increase in GDP is just "Hot Air" (Inflation) vs actual "Muscle" (Output).'
  },
  {
    id: 'u1-fc24',
    question: 'Define Money Flow.',
    answer: 'Flow of money across different sectors (e.g., payments for goods).',
    category: 'Theory',
    aiExplanation: 'In the circular flow, money moves from Firms to Households as Wages/Rent, and back to Firms as Consumption spending.'
  },
  {
    id: 'u1-fc25',
    question: 'Define Real Flow.',
    answer: 'Flow of factor services and goods/services across sectors without money involvement.',
    category: 'Theory',
    aiExplanation: 'If you work for a firm, you provide a "Real Service." If the firm gives you a product, it is a "Real Good." This is the physical side of the economy.'
  },
  {
    id: 'u1-fc26',
    question: 'What are Leakages in circular flow?',
    answer: 'Withdrawals of money from circular flow (e.g., Savings, Imports, Taxes).',
    category: 'Theory',
    aiExplanation: 'Leakages "cool down" the economy because that money is not being spent immediately on domestic goods.'
  },
  {
    id: 'u1-fc27',
    question: 'What are Injections in circular flow?',
    answer: 'Additions of money into circular flow (e.g., Investment, Exports, Govt spending).',
    category: 'Theory',
    aiExplanation: 'Injections "heat up" the economy. They represent spending that didn\'t come from current household income.'
  },
  {
    id: 'u1-fc28',
    question: 'Difference between Domestic and National product?',
    answer: 'National Product = Domestic Product + NFIA.',
    category: 'Theory',
    aiExplanation: 'Domestic = "Inside our Borders." National = "Our People (Residents)." The difference is the net income earned from the rest of the world.'
  },
  {
    id: 'u1-fc29',
    question: 'Can NFIA be negative?',
    answer: 'Yes, if factor income to abroad is greater than factor income from abroad.',
    category: 'True/False',
    aiExplanation: 'This usually happens in developing nations where foreign companies earn more profit here than our residents earn in other countries.'
  },
  {
    id: 'u1-fc30',
    question: 'Define Nominal GDP.',
    answer: 'GDP valued at current market prices.',
    category: 'Theory',
    aiExplanation: 'Nominal GDP can look very high if prices are rising rapidly (Inflation), even if the number of goods produced stays the same.'
  },
  {
    id: 'u1-fc31',
    question: 'Which GDP measures actual growth?',
    answer: 'Real GDP, as it eliminates price fluctuation effects.',
    category: 'Technical',
    aiExplanation: 'Economists always use Real GDP to compare performance over years to see if the standard of living is actually rising.'
  },
  {
    id: 'u1-fc32',
    question: 'What is a Consumption Good?',
    answer: 'Goods used by households for direct satisfaction of wants.',
    category: 'Classification',
    aiExplanation: 'Examples: Food, Clothes, TV services. They are "Final Goods" that are not used to produce something else for sale.'
  },
  {
    id: 'u1-fc33',
    question: 'Are consumer durables "flow" or "stock"?',
    answer: 'The goods themselves are stocks; the service they provide over time is a flow.',
    category: 'Technical',
    aiExplanation: 'A Fridge in your house is a "Stock" of wealth. The "cooling service" it provides every day is a continuous "Flow."'
  },
  {
    id: 'u1-fc34',
    question: 'Define Depreciation.',
    answer: 'Fall in value of fixed assets due to normal wear/tear or expected obsolescence.',
    category: 'Definition',
    aiExplanation: 'Assets like machines lose value just by sitting there or being used. We subtract this to get the "Net" or real value.'
  },
  {
    id: 'u1-fc35',
    question: 'Alternative name for Depreciation?',
    answer: 'Consumption of Fixed Capital.',
    category: 'Technical',
    aiExplanation: 'In numericals, exams often use "CFC" instead of "Depreciation" to confuse students. They are exactly the same.'
  },
  {
    id: 'u1-fc36',
    question: 'Define Value of Output.',
    answer: 'Market value of all goods and services produced by an enterprise in a year.',
    category: 'Calculation',
    aiExplanation: 'If you sell all goods, Value of Output = Sales. If some are left over, it is Sales + Change in Stock.'
  },
  {
    id: 'u1-fc37',
    question: 'Does GDP indicate social welfare?',
    answer: 'Not completely, as it ignores distribution of income, pollution, and non-monetary exchanges.',
    category: 'Theory',
    aiExplanation: 'GDP counts "Production," not "Happiness." It ignores the damage to the environment (Externalities) or if the rich are getting richer while the poor stay poor.'
  },
  {
    id: 'u1-fc38',
    question: 'True/False: Self-consumed services are part of NI.',
    answer: 'False. They cannot be reliably valued (e.g., housewife services).',
    category: 'True/False',
    aiExplanation: 'Excluded because there is no market transaction. If a maid does the laundry, it is included. If you do it yourself, it is excluded.'
  },
  {
    id: 'u1-fc39',
    question: 'True/False: Self-consumed goods are part of NI.',
    answer: 'True. They have an imputed market value.',
    category: 'True/False',
    aiExplanation: 'If a farmer eats their own wheat, it IS included (using "imputed" or estimated prices) because that wheat *could* have been sold.'
  },
  {
    id: 'u1-fc40',
    question: 'What is Net Domestic Product at Market Price (NDP at MP)?',
    answer: 'GDP at MP - Depreciation.',
    category: 'Calculation',
    aiExplanation: 'Whenever you see "Net," just think: "Subtract Depreciation from Gross."'
  },
  {
    id: 'u1-fc41',
    question: 'What is Net National Product at Market Price (NNP at MP)?',
    answer: 'NNP at FC + Net Indirect Taxes.',
    category: 'Theory',
    aiExplanation: 'Market Price is always more than Factor Cost by the amount of taxes (minus subsidies).'
  },
  {
    id: 'u1-fc42',
    question: 'Define Inventory.',
    answer: 'Stock of unsold finished goods, semi-finished goods, and raw materials.',
    category: 'Definition',
    aiExplanation: 'Inventory acts as a "Buffer." An increase in inventory is treated as "Investment" because it is production that hasn\'t been consumed yet.'
  },
  {
    id: 'u1-fc43',
    question: 'Is "Inventory Investment" a flow?',
    answer: 'Yes, it is the change in inventory over a period.',
    category: 'Classification',
    aiExplanation: 'Note: "Inventory" (total stock) is a stock. "Inventory Investment" (the change) is a flow.'
  },
  {
    id: 'u1-fc44',
    question: 'Define Net Exports.',
    answer: 'Value of Exports - Value of Imports.',
    category: 'Definition',
    aiExplanation: 'It measures the net demand for our goods from the rest of the world. It can be negative if we import more than we export.'
  },
  {
    id: 'u1-fc45',
    question: 'What is "Propensity to Consume"?',
    answer: 'The ratio of consumption to income (C/Y).',
    category: 'Theory',
    aiExplanation: 'It tells us how much of our income we typically spend. Poor people have a high propensity (they must spend all they earn); rich people have a lower one.'
  },
  {
    id: 'u1-fc46',
    question: 'Define Private Income.',
    answer: 'Income from all sources earned/unearned by private sector (not in CBSE current CORE syllabus but helpful for logic).',
    category: 'Technical',
    aiExplanation: 'It includes factor income from domestic territory + NFIA + Transfer payments. It\'s everything "private" players get.'
  },
  {
    id: 'u1-fc47',
    question: 'Is "Interest on National Debt" part of National Income?',
    answer: 'No, it is considered a transfer payment.',
    category: 'True/False',
    aiExplanation: 'The government pays this interest on loans taken for consumption/war, which doesn\'t create new production. Thus, it is a transfer.'
  },
  {
    id: 'u1-fc48',
    question: 'Define Final Consumer Goods.',
    answer: 'Goods purchased by households for consumption.',
    category: 'Classification',
    aiExplanation: 'These are at the "End of the line." They won\'t be processed further. Example: Milk bought by a family to drink.'
  },
  {
    id: 'u1-fc49',
    question: 'Difference between National and International income?',
    answer: 'NI is for residents; International involves globally tracked aggregates.',
    category: 'Theory',
    aiExplanation: 'National Income is specific to a nation\'s residents. International comparisons often use PPP (Purchasing Power Parity) to adjust for cost of living.'
  },
  {
    id: 'u1-fc50',
    question: 'What is the sum of GVA of all firms?',
    answer: 'Gross Domestic Product at Market Price (GDP_{MP}).',
    category: 'Calculation',
    aiExplanation: 'GVA1 + GVA2 + ... + GVAn = GDP. This is the "Product Method" of calculating national income.'
  },
  {
    id: 'u1-fc51',
    question: 'In which year did the Great Depression start?',
    answer: '1929. It led to high unemployment and fall in GDP in Europe and North America.',
    category: 'Theory',
    aiExplanation: 'This event was the "Birth of Macroeconomics." Traditional theories failed to explain it, leading to the rise of Keynesian economics.'
  },
  {
    id: 'u1-fc52',
    question: 'Who is the author of "The General Theory of Employment, Interest and Money"?',
    answer: 'John Maynard Keynes. Published in 1936, it laid the foundation of modern Macroeconomics.',
    category: 'Theory',
    aiExplanation: 'Keynes argued that government intervention is necessary during recessions to boost Aggregate Demand.'
  },
  {
    id: 'u1-fc53',
    question: 'Name two major macroeconomic decision makers in India.',
    answer: 'The Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI).',
    category: 'Theory',
    aiExplanation: 'Macro decisions aren\'t made by firms/households but by institutions that care about the whole economy (Inflation, Stock Market, Interest Rates).'
  },
  {
    id: 'u1-fc54',
    question: 'Is machinery in a factory a Final Good or Intermediate Good?',
    answer: 'Final Good (specifically a Capital Good) because it is used for investment and not for resale or as raw material in the same year.',
    category: 'Classification',
    aiExplanation: 'Even though it is used to produce other goods, it is *not* "consumed" in one year like coal or wool. It is an investment asset.'
  },
  {
    id: 'u1-fc55',
    question: 'Formula for GDP Deflator?',
    answer: 'GDP Deflator = (Nominal GDP / Real GDP) * 100.',
    category: 'Calculation',
    aiExplanation: 'If Nominal GDP is 120 and Real is 100, Deflator is 120. This means prices rose 20% compared to the base year.'
  }
];
