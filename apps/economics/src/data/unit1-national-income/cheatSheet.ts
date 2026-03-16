import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'cs1',
    title: '📐 The Golden Rules (Identity Conversions)',
    points: [
      '**Gross to Net:** **Gross Value** - **Depreciation** = **Net Value**. (Depreciation = Consumption of Fixed Capital).',
      '**National to Domestic:** **National Product** - **NFIA** = **Domestic Product**.',
      '**NFIA Formula:** **Factor Income from Abroad** - **Factor Income to Abroad**.',
      '**MP to FC:** **Market Price (MP)** - **Net Indirect Taxes (NIT)** = **Factor Cost (FC)**.',
      '**NIT Formula:** **Indirect Taxes** - **Subsidies**.',
      '**Net Domestic Product at Factor Cost (NDP at FC):** This is the official term for **Domestic Income**.'
    ]
  },
  {
    id: 'cs2',
    title: '🍎 Value Added Method (Product Method)',
    points: [
      '**GVA at MP:** **Value of Output** - **Intermediate Consumption**.',
      '**Value of Output:** **Sales** + **Change in Stock** (if all output is not sold).',
      '**Change in Stock:** **Closing Stock** - **Opening Stock**.',
      '**Intermediate Consumption:** Includes raw materials/power; **Excludes** purchase of fixed assets (machinery).',
      '**Double Counting:** The error of counting the value of the same good more than once. Use **Value Added** at each stage to avoid this.'
    ]
  },
  {
    id: 'cs3',
    title: '💰 Income Method (Factor Payment Method)',
    points: [
      '**Domestic Income (NDP at FC):** **CoE** + **OS** + **MI**.',
      '**CoE (Compensation of Employees):** Wages/Salaries (Cash/Kind) + Employer\'s contribution to Social Security.',
      '**OS (Operating Surplus):** **Rent** + **Interest** + **Profit**.',
      '**Profit Components:** **Corporate Tax** + **Dividends** + **Retained Earnings** (Undistributed Profits).',
      '**MI (Mixed Income):** Income of self-employed where labor and capital income cannot be separated.',
      '**National Income (NNP at FC):** **NDP at FC** + **NFIA**.'
    ]
  },
  {
    id: 'cs4',
    title: '🚀 Expenditure Method',
    points: [
      '**GDP at MP:** **C** + **I** + **G** + (**X** - **M**).',
      '**C (PFCE):** Private Final Consumption Expenditure.',
      '**G (GFCE):** Government Final Consumption Expenditure.',
      '**I (GDCF):** Gross Domestic Capital Formation = **Gross Fixed Capital Formation** + **Change in Stock**.',
      '**Net Exports:** **Exports (X)** - **Imports (M)**. If imports > exports, it is a negative value.'
    ]
  },
  {
    id: 'cs5',
    title: '📈 Real vs Nominal GDP',
    points: [
      '**Real GDP:** Measured at **Constant Prices** (Base Year). Reflects change in quantity only.',
      '**Nominal GDP:** Measured at **Current Prices**. Reflects changes in both price and quantity.',
      '**Welfare Index:** **Real GDP** is a better indicator of economic welfare than Nominal GDP.',
      '**GDP Deflator:** (**Nominal GDP** / **Real GDP**) × 100. Also known as Price Index.',
      '**Conversion:** Real GDP = (Nominal GDP / Price Index) × 100.'
    ]
  },
  {
    id: 'cs6',
    title: '🚫 Inclusion/Exclusion Precautions',
    points: [
      '**Excluded (NP/NI):** **Intermediate Goods**, **Transfer Payments** (Pensions/Gifts), **Windfall Gains** (Lottery), **Sale of 2nd hand goods**, **Financial Assets** (Shares/Bonds).',
      '**Included (NP/NI):** **Self-consumption of goods**, **Brokerage/Commission** on sales, **Imputed rent** of owner-occupied houses.',
      '**Intermediate vs Final:** A good is **Intermediate** if used for resale/raw material in the *same year*. It is **Final** if used for consumption/investment.'
    ]
  },
  {
    id: 'cs7',
    title: '🔄 Circular Flow & Basic Concepts',
    points: [
      '**Phases of Circular Flow:** 1. **Generation Phase** (Value Added), 2. **Distribution Phase** (Factor Income), 3. **Disposition Phase** (Expenditure).',
      '**Real Flow:** Flow of **Factor Services** (Household to Firm) and **Goods/Services** (Firm to Household).',
      '**Money Flow:** Flow of **Factor Payments** and **Consumption Expenditure** between sectors.',
      '**Stock:** Measured at a **Point of Time** (Wealth, Capital, Money Supply).',
      '**Flow:** Measured over a **Period of Time** (Income, Investment, Interest).',
      '**Normal Resident:** Resides >1 year and center of economic interest lies in the country.'
    ]
  },
  {
    id: 'cs8',
    title: '⚠️ Externalities & GDP Limitations',
    points: [
      '**Negative Externalities:** Harmful effects (Pollution) not reflected in market prices. GDP overstates welfare.',
      '**Positive Externalities:** Beneficial effects (Public Parks) not paid for. GDP understates welfare.',
      '**Non-Monetary Exchanges:** Barter systems and domestic services (Housewife) understate actual GDP welfare.',
      '**Distribution of Income:** If GDP grows but inequality increases, welfare may not rise.'
    ]
  },
  {
    id: 'cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**NNP at FC:** National Income.',
      '**NDP at FC:** Domestic Income.',
      '**NFIA:** Net Factor Income from Abroad (From - To).',
      '**NIT:** Net Indirect Taxes (Taxes - Subsidies).',
      '**CFC:** Consumption of Fixed Capital (Depreciation).',
      '**GVA:** Gross Value Added (Output - Intermediate).',
      '**GDCF:** Gross Domestic Capital Formation (Investment).',
      '**PFCE:** Private Final Consumption Expenditure.'
    ]
  },
  {
    id: 'cs9',
    title: '🎯 SQP Traps: National Income',
    points: [
      '**The Machine Trap:** If a firm buys a machine, it is **Gross Fixed Capital Formation** (Final), NOT Intermediate Consumption.',
      '**The Pension Trap:** **Old Age Pension** is a Transfer (Exclude). **Retirement Pension** is a Factor Payment/Deferred Wage (Include).',
      '**The Inventory Trap:** Change in stock is part of **Investment/Expenditure**, even if goods aren\'t sold to consumers.',
      '**Assertion Hack:** Always check if the "Reason" explains the "Why" of the "Assertion".'
    ]
  }
];
