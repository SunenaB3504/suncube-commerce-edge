import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'u3-fc1',
    question: 'Define Aggregate Demand (AD).',
    answer: 'It refers to the total value of final goods and services which all the sectors of an economy are planning to buy at a given level of income during a period of one accounting year.',
    category: 'Definition',
    aiExplanation: 'Think of AD as "Planned Spending." It represents the total "Order" received by the factory of the entire nation. It includes spending by families, firms, and the government.'
  },
  {
    id: 'u3-fc2',
    question: 'What are the four components of Aggregate Demand in an open economy?',
    answer: '1. Private Final Consumption Expenditure (C). 2. Investment Expenditure (I). 3. Government Final Consumption Expenditure (G). 4. Net Exports (X-M).',
    category: 'Technical',
    aiExplanation: 'In our 2-sector model, we simplified this to just C + I. But in the real world (open economy), the Govt (G) and foreigners (X-M) also place orders for our goods.'
  },
  {
    id: 'u3-fc3',
    question: 'Define Aggregate Supply (AS).',
    answer: 'It refers to the money value of goods and services that all the producers are willing to supply in an economy in a given time period. It is identical to National Income (Y).',
    category: 'Definition',
    aiExplanation: 'Since everything produced (AS) eventually becomes someone\'s income (Wages + Rent + Interest + Profit), AS is always equal to National Income (Y). This is why the AS curve is a 45-degree line.'
  },
  {
    id: 'u3-fc4',
    question: 'What is the "Consumption Function"?',
    answer: 'The functional relationship between consumption and the level of national income (C = f(Y)).',
    category: 'Theory',
    aiExplanation: 'It tells us that as people earn more, they spend more. The algebraic form is C = C_bar + bY, where "b" (MPC) is the slope of the line.'
  },
  {
    id: 'u3-fc5',
    question: 'Define Autonomous Consumption (c_bar).',
    answer: 'It is the minimum level of consumption that is independent of income, i.e., consumption at zero level of income.',
    category: 'Calculation',
    aiExplanation: 'Even if you earn ₹0, you still need to eat. You survive by "dissaving" (spending savings) or borrowing. This "Survival spending" is C_bar.'
  },
  {
    id: 'u3-fc6',
    question: 'What is Average Propensity to Consume (APC)?',
    answer: 'It is the ratio of total consumption to total income (APC = C / Y).',
    category: 'Definition',
    aiExplanation: 'It tells us what "portion" of our total income we spend. APC > 1 at low incomes (dissaving); APC < 1 at high incomes (saving).'
  },
  {
    id: 'u3-fc7',
    question: 'What is Marginal Propensity to Consume (MPC)?',
    answer: 'It is the ratio of change in consumption to change in income (MPC = Δ C / Δ Y).',
    category: 'Definition',
    aiExplanation: 'It tells us how much of our "last extra Rupee" we spend. If you get ₹100 extra and spend ₹80, your MPC is 0.8. It is the most important variable in the Multiplier.'
  },
  {
    id: 'u3-fc8',
    question: 'State the relationship between MPC and MPS.',
    answer: 'The sum of MPC and MPS is always equal to one (MPC + MPS = 1).',
    category: 'Technical',
    aiExplanation: 'Logic: Every extra Rupee you earn must either be "Spent" (MPC) or "Saved" (MPS). There is no third option!'
  },
  {
    id: 'u3-fc9',
    question: 'State the relationship between APC and APS.',
    answer: 'The sum of APC and APS is always equal to one (APC + APS = 1).',
    category: 'Technical',
    aiExplanation: 'Similar to the marginal versions, your total income (100%) is divided between total consumption and total savings.'
  },
  {
    id: 'u3-fc10',
    question: 'Can Average Propensity to Consume (APC) be more than one?',
    answer: 'Yes, as long as consumption is more than national income (at levels of income below the break-even point).',
    category: 'Theory',
    aiExplanation: 'If you earn ₹1000 but must spend ₹1200 to survive, your APC is 1.2. This is possible through "Dissaving."'
  },
  {
    id: 'u3-fc11',
    question: 'Can Marginal Propensity to Consume (MPC) be more than one?',
    answer: 'No, because additional consumption cannot be more than the additional income.',
    category: 'True/False',
    aiExplanation: 'Exams love this! You can\'t spend more of an *extra* Rupee than the Rupee itself. Thus, MPC is always between 0 and 1.'
  },
  {
    id: 'u3-fc12',
    question: 'Define Average Propensity to Save (APS).',
    answer: 'It is the ratio of total saving to total income (APS = S / Y).',
    category: 'Definition',
    aiExplanation: 'It represents the percentage of total income that families decide to keep as savings for the future.'
  },
  {
    id: 'u3-fc13',
    question: 'What is the Break-even Point?',
    answer: 'The level of income where consumption is exactly equal to income (C = Y) and saving is zero (S = 0).',
    category: 'Theory',
    aiExplanation: 'This is the "Zero-balance" point. You aren\'t dipping into old savings, nor are you building new ones. APC = 1 and APS = 0 here.'
  },
  {
    id: 'u3-fc14',
    question: 'Define Marginal Propensity to Save (MPS).',
    answer: 'It is the ratio of change in saving to the change in income (MPS = Δ S / Δ Y).',
    category: 'Definition',
    aiExplanation: 'It measures the "Leakage" from the income stream. Higher MPS means less money circulating back into the economy, leading to a smaller multiplier.'
  },
  {
    id: 'u3-fc15',
    question: 'What is Induced Consumption?',
    answer: 'The part of consumption which varies directly with the level of income.',
    category: 'Classification',
    aiExplanation: 'This is the "bY" term. As "Y" (Income) goes up, "Induced C" goes up. This is the part of your lifestyle that gets better as your salary rises.'
  },
  {
    id: 'u3-fc16',
    question: 'State the linear Saving Function equation.',
    answer: 'S = -c_bar + (1 - b)Y, where -c_bar is autonomous saving and (1 - b) is MPS.',
    category: 'Technical',
    aiExplanation: 'It is the "Mirror Image" of the consumption function. If C_bar is +₹100, S_bar must be -₹100 (because you are spending savings).'
  },
  {
    id: 'u3-fc17',
    question: 'What is Ex-ante Investment?',
    answer: 'It refers to the amount of investment that firms plan to invest at different levels of income in an economy.',
    category: 'Definition',
    aiExplanation: 'Ex-ante = "Planned." Economics deals with what people *plan* to do, because plans drive the current demand.'
  },
  {
    id: 'u3-fc18',
    question: 'What is Ex-post Saving?',
    answer: 'It refers to the actual or realized saving in an economy during a year.',
    category: 'Definition',
    aiExplanation: 'Ex-post = "Realized." This is what actually happened after all the buying and selling ended. It includes "Unintended" changes in stock.'
  },
  {
    id: 'u3-fc19',
    question: 'Define Investment Multiplier (k).',
    answer: 'It refers to the ratio of change in national income (Δ Y) to a given change in initial investment (Δ I).',
    category: 'Definition',
    aiExplanation: 'It is the "Power of Spending." If Govt spends ₹1 and the economy grows by ₹5, the Multiplier is 5. It happens because your spending is my income, and my spending is someone else\'s.'
  },
  {
    id: 'u3-fc20',
    question: 'State the formula for Investment Multiplier in terms of MPC.',
    answer: 'Multiplier (k) = 1 / (1 - MPC).',
    category: 'Calculation',
    aiExplanation: 'Since (1 - MPC) is just another word for MPS, the formula is also k = 1 / MPS.'
  },
  {
    id: 'u3-fc21',
    question: 'What is the relationship between the Multiplier and MPS?',
    answer: 'They are inversely related. k = 1 / MPS.',
    category: 'Technical',
    aiExplanation: 'Think of MPS as a "Leakage hole" in a bucket. The bigger the hole (MPS), the less "water" (income) stays in the bucket to create more income.'
  },
  {
    id: 'u3-fc22',
    question: 'Define Full Employment.',
    answer: 'A situation in which all those who are able and willing to work at the prevailing wage rate, get work without any undue difficulty.',
    category: 'Definition',
    aiExplanation: 'It DOES NOT mean zero unemployment. Even in a perfect economy, some people are moving between jobs (Frictional) or industries are changing (Structural).'
  },
  {
    id: 'u3-fc23',
    question: 'What is Involuntary Unemployment?',
    answer: 'A situation where people are able and willing to work at the prevailing wage rate but do not get work.',
    category: 'Definition',
    aiExplanation: 'This is the "Bad" kind of unemployment. It happens when AD is too low and firms don\'t need more workers.'
  },
  {
    id: 'u3-fc24',
    question: 'Define Voluntary Unemployment.',
    answer: 'A situation where people are not willing to work at the prevailing wage rate, even though work is available.',
    category: 'Definition',
    aiExplanation: 'Example: You quit your job to travel or because you want a much higher salary. Keynesian policy doesn\'t care about this; it\'s your choice.'
  },
  {
    id: 'u3-fc25',
    question: 'What is Excess Demand?',
    answer: 'A situation where Aggregate Demand is more than the Aggregate Supply corresponding to full employment level of output.',
    category: 'Definition',
    aiExplanation: 'Economy is "Overheating." Everyone wants to buy goods, but the factories are already running at 100% capacity. Result: Prices must rise (Inflation).'
  },
  {
    id: 'u3-fc26',
    question: 'Define Inflationary Gap.',
    answer: 'The amount by which actual Aggregate Demand exceeds the level of Aggregate Demand required to maintain full employment.',
    category: 'Definition',
    aiExplanation: 'It is the "Pressure Gauge." The bigger the gap, the more prices will rise. It measures the "Excess" demand vertically on a graph.'
  },
  {
    id: 'u3-fc27',
    question: 'What is Deficient Demand?',
    answer: 'A situation where Aggregate Demand is less than the Aggregate Supply corresponding to the full employment level of output.',
    category: 'Definition',
    aiExplanation: 'The economy is "Frozen." Factories have spare capacity, but nobody wants to buy. Result: Goods pile up, workers are fired, income falls.'
  },
  {
    id: 'u3-fc28',
    question: 'Define Deflationary Gap.',
    answer: 'The amount by which the actual Aggregate Demand falls short of the Aggregate Demand required to maintain full employment.',
    category: 'Definition',
    aiExplanation: 'It measures the amount of "Missing" demand needed to reach full employment. Solving this gap usually requires Govt spending.'
  },
  {
    id: 'u3-fc29',
    question: 'State one reason for Excess Demand.',
    answer: 'Increase in Government expenditure (or decrease in taxes, increase in exports).',
    category: 'Theory',
    aiExplanation: 'Excess demand is "Too Much Money chasing Too Few Goods." Anything that puts more money in people\'s pockets can cause it.'
  },
  {
    id: 'u3-fc30',
    question: 'What is the impact of Excess Demand on price level?',
    answer: 'It leads to a rise in the general price level (Inflation).',
    category: 'Application',
    aiExplanation: 'Since output cannot increase (we are already at full employment), the extra demand only bids up the prices of existing goods.'
  },
  {
    id: 'u3-fc31',
    question: 'What is the impact of Deficient Demand on output?',
    answer: 'It leads to an increase in unintended inventories, resulting in a fall in planned output in the next period.',
    category: 'Application',
    aiExplanation: 'If you produce 100 but only sell 80, the extra 20 is "Waste." Next month, you will produce less (say 60) to avoid more waste. GDP falls.'
  },
  {
    id: 'u3-fc32',
    question: 'Define Fiscal Policy.',
    answer: 'The policy of the government regarding taxation, public expenditure, and public borrowing to achieve economic stability.',
    category: 'Technical',
    aiExplanation: 'This is the Govt\'s "Budget Box." They can spend more (Injections) or tax more (Leakages) to balance the AD.'
  },
  {
    id: 'u3-fc33',
    question: 'How can taxes be used to correct Excess Demand?',
    answer: 'By increasing taxes, which reduces the disposable income of people and decreases aggregate demand.',
    category: 'Application',
    aiExplanation: 'Taxes suck away the "Excess Cash" from the hands of the public, reducing their power to over-order goods.'
  },
  {
    id: 'u3-fc34',
    question: 'How can Government Expenditure be used to correct Deficient Demand?',
    answer: 'By increasing government spending on public works, which increases the level of aggregate demand in the economy.',
    category: 'Application',
    aiExplanation: 'When Govt builds a road, they give a "Direct Order" for steel/cement AND give "Income" to workers. Both boost the AD.'
  },
  {
    id: 'u3-fc35',
    question: 'True or False: Full employment means zero unemployment.',
    answer: 'False. Even at full employment, there may exist some structural or frictional unemployment.',
    category: 'True/False',
    aiExplanation: 'We call this "Natural Rate of Unemployment." As long as you are voluntarily looking for a *better* job, it is not a macroeconomic failure.'
  },
  {
    id: 'u3-fc36',
    question: 'If MPC = 0.5, what is the value of the Multiplier?',
    answer: 'k = 1 / (1 - 0.5) = 1 / 0.5 = 2.',
    category: 'Calculation',
    aiExplanation: 'This is a "Slow" economy. For every ₹1 Govt spends, the economy only grows by ₹2 total.'
  },
  {
    id: 'u3-fc37',
    question: 'What happens to the level of income if ex-ante S > ex-ante I?',
    answer: 'There is a pile-up of unintended inventories; producers will reduce production, and the level of income will fall until S = I.',
    category: 'Application',
    aiExplanation: 'Savings > Investment means "We are keeping more money in the bank than we are putting back via factories." AD falls, and so does GDP.'
  },
  {
    id: 'u3-fc38',
    question: 'Define Effective Demand.',
    answer: 'That level of Aggregate Demand which becomes "effective" because it is equal to Aggregate Supply.',
    category: 'Definition',
    aiExplanation: 'It is the "Win-Win" point. What firms plan to sell equals what people plan to buy. This is the Equilibrium point.'
  },
  {
    id: 'u3-fc39',
    question: 'What is "Dissaving"?',
    answer: 'Negative saving, which occurs when consumption expenditure exceeds national income (C > Y).',
    category: 'Technical',
    aiExplanation: 'It is the "Survival Phase." You are eating into your past wealth just to stay alive. Graphically, it is the area to the left of the Break-Even point.'
  },
  {
    id: 'u3-fc40',
    question: 'If MPS = 0.2, what is the value of the Multiplier?',
    answer: 'k = 1 / 0.2 = 5.',
    category: 'Calculation',
    aiExplanation: '₹1 of investment leads to ₹5 of total income. This economy has a "Strong" circular flow because only 20% leaks out as savings.'
  },
  {
    id: 'u3-fc41',
    question: 'State one reason for Deficient Demand.',
    answer: 'Decrease in private consumption expenditure (or increase in taxes, decrease in government spending).',
    category: 'Theory',
    aiExplanation: 'If people are scared of the future, they stop spending. This "Fear" creates deficient demand, which then creates actual recession.'
  },
  {
    id: 'u3-fc42',
    question: 'Explain the "Deficit Financing" measure.',
    answer: 'Printing new currency or borrowing by the government to fund its deficit, which increases the money supply and aggregate demand.',
    category: 'Technical',
    aiExplanation: 'It is a "Steroid shot" for the economy. Use it during recession, but be careful; use it too much and it causes hyper-inflation.'
  },
  {
    id: 'u3-fc43',
    question: 'What is the relationship between Multiplier and MPC?',
    answer: 'There is a direct relationship; as MPC increases, the value of the multiplier also increases.',
    category: 'Technical',
    aiExplanation: 'If people spend more of their extra income, that money moves faster through the economy, creating more income rounds. High MPC = High Growth.'
  },
  {
    id: 'u3-fc44',
    question: 'If the Initial Investment increase is ₹ 100 Crore and MPC is 0.8, what is the total increase in Income?',
    answer: 'Multiplier k = 1 / 0.2 = 5. Increase in income = k × ΔI = 5 × 100 = ₹ 500 Crore.',
    category: 'Calculation',
    aiExplanation: 'Steps: 1. Find MPS (1-0.8 = 0.2). 2. Find k (1/0.2 = 5). 3. Change in Y = k * Change in I. 5 * 100 = 500.'
  },
  {
    id: 'u3-fc45',
    question: 'True or False: APS can never be negative.',
    answer: 'False. At low levels of income, when consumption is more than income, APS is negative.',
    category: 'True/False',
    aiExplanation: 'APS is S/Y. If Savings are negative (Dissaving), APS is negative. Exam Tip: APS can be negative, but MPS can NEVER be negative.'
  },
  {
    id: 'u3-fc46',
    question: 'What is the minimum value of Multiplier?',
    answer: 'The minimum value is 1 (when MPC = 0).',
    category: 'Technical',
    aiExplanation: 'Even if NOBODY spends their extra income, the initial ₹1 investment is still ₹1 worth of income for the producer. So k is at least 1.'
  },
  {
    id: 'u3-fc47',
    question: 'What is the maximum value of Multiplier?',
    answer: 'Infinity (when MPC = 1).',
    category: 'Technical',
    aiExplanation: 'If everyone spends 100% of their extra income, the money circulates forever, creating infinite total income. In reality, MPS is always > 0.'
  },
  {
    id: 'u3-fc48',
    question: 'What is meant by the "Paradox of Thrift"?',
    answer: 'The idea that if everyone in the economy tries to save more, the total savings in the economy might actually decrease because the level of income falls.',
    category: 'Theory',
    aiExplanation: 'Individual "Thrift" (Saving) is good for YOU, but if EVERYONE does it, AD collapses, firms close, and nobody has a job to save from anymore.'
  },
  {
    id: 'u3-fc49',
    question: 'Define Autonomous Investment.',
    answer: 'Investment which is independent of the level of income and is generally made by the government for social welfare.',
    category: 'Definition',
    aiExplanation: 'It is a horizontal line on the graph. It doesn\'t care about profit or income; it is "Set" by the Govt or long-term plan.'
  },
  {
    id: 'u3-fc50',
    question: 'What refers to "Unemployment rate"?',
    answer: 'The number of persons unemployed as a percentage of the total labor force.',
    category: 'Technical',
    aiExplanation: 'Labor Force includes those actually working + those looking for work. If you aren\'t looking, you aren\'t "Unemployed" in this formula.'
  },
  {
    id: 'u3-fc51',
    question: 'Define "Break-Even Point" in the context of the Consumption Function.',
    answer: 'It is the point where National Income (Y) equals Consumption (C), resulting in Zero Saving (S=0).',
    category: 'Theory',
    aiExplanation: 'At this point, you are "Breaking Even" — every Rupee you earn is spent. No new savings, no old dissavings.'
  },
  {
    id: 'u3-fc52',
    question: 'Distinguish between Ex-Ante and Ex-Post values.',
    answer: 'Ex-Ante refers to planned or intended values; Ex-Post refers to actual or realized values at the end of the year.',
    category: 'Theory',
    aiExplanation: 'Ex-Ante is the "Budget." Ex-Post is the "Actual Account statement." We use Ex-Ante for equilibrium theory.'
  },
  {
    id: 'u3-fc53',
    question: 'What is Autonomous Investment?',
    answer: 'Investment that is independent of the level of income, often made by the government for social welfare.',
    category: 'Theory',
    aiExplanation: 'In our basic model, all "I" is assumed autonomous. It is shown as a horizontal line parallel to the X-axis.'
  },
  {
    id: 'u3-fc54',
    question: 'What is Induced Consumption?',
    answer: 'That part of consumption which varies directly with the level of income (bY).',
    category: 'Theory',
    aiExplanation: 'This is the "Income-dependent" part. If salary is 10k, spending is 8k. If salary is 20k, spending is 15k. The *increase* is induced.'
  },
  {
    id: 'u3-fc55',
    question: 'True or False: The AD curve and C curve are parallel.',
    answer: 'True, because the vertical distance between them is Autonomous Investment, which is constant.',
    category: 'True/False',
    aiExplanation: 'Since AD = C + I, and I is a fixed constant, AD is just the C-curve shifted UPwards by the amount of I.'
  }
];
