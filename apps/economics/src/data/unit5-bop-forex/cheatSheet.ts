import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u5-cs1',
    title: '🌐 Foreign Exchange Fundamentals',
    points: [
      '**Forex Rate:** The price of one currency in terms of another (e.g., ₹83 = $1).',
      '**Bilateral Rate:** Rate between two specific currencies (Rupee vs Dollar).',
      '**Parity Rate:** The equilibrium rate where demand and supply for forex are equal.',
      '**Currency Appreciation:** Rise in value of domestic currency (e.g., $1 moves ₹80 \-> ₹75).',
      '**Currency Depreciation:** Fall in value of domestic currency (e.g., $1 moves ₹80 \-> ₹85).',
      '**Impact of Appreciation:** Imports get **cheaper**, Exports get **costlier**.',
      '**Impact of Depreciation:** Imports get **costlier**, Exports get **cheaper** (Competitive gain).'
    ]
  },
  {
    id: 'u5-cs2',
    title: '🏛️ Exchange Rate Systems (The 3 Pillar)',
    points: [
      '**Fixed Rate:** Officially set by Govt/Central Bank. Requires massive **Forex Reserves**.',
      '**Gold Standard (pre-1930s):** Currencies defined in fixed gold weights; freely convertible.',
      '**Bretton Woods (1944-71):** Currencies pegged to US Dollar; Dollar pegged to Gold ($35/oz).',
      '**Flexible (Floating):** Rate determined purely by **Market Forces** (Demand/Supply).',
      '**Managed Floating (Dirty Floating):** Market-driven but Central Bank intervenes to curb volatility and protect exporters.',
      '**Devaluation vs Revaluation:** Policy-driven changes under a **Fixed** system.',
      '**Depreciation vs Appreciation:** Market-driven changes under a **Flexible** system.'
    ]
  },
  {
    id: 'u5-cs3',
    title: '📊 Balance of Payments (BoP) Structure',
    points: [
      '**BoP Definition:** Systematic record of all economic transactions with the Rest of World (RoW).',
      '**Accounting Identity:** Total Credits (Receipts) = Total Debits (Payments). BoP always balances.',
      '**Current Account:** Records trade in goods, services, and unilateral transfers.',
      '**Capital Account:** Records transactions that change **Asset/Liability** statuses.',
      '**Current Account Balance** = Visible Trade + Invisible Trade + Unilateral Transfers.',
      '**BoT (Balance of Trade):** Difference between **Visible Exports** and **Visible Imports** only.'
    ]
  },
  {
    id: 'u5-cs4',
    title: '🚢 The Current Account Deep Dive',
    points: [
      '**Visible Trade:** Merchandise/Physical goods (Oil, Gold, Cars).',
      '**Invisible Trade (Services):** Non-factor (IT, Tourism) + Factor (Interest, Profits).',
      '**Unilateral Transfers:** One-way flows with no *quid pro quo* (Remittances, Gifts, Aid).',
      '**Current Account Deficit (CAD):** When Imports of Goods+Services+Transfers > Exports.',
      '**CAD Sustainability:** Healthy if financed by **FDI**; dangerous if financed by **Debt/Depletion**.',
      '**India\'s Context:** High trade deficit offset by strong IT exports and NRI remittances.'
    ]
  },
  {
    id: 'u5-cs5',
    title: '💰 Capital Account & Financial Flows',
    points: [
      '**FDI (Foreign Direct Investment):** Long-term investment with **Managerial Control**.',
      '**FPI (Foreign Portfolio Investment):** Financial investment (stocks/bonds) **without** control.',
      '**Hot Money:** FPI is volatile and can exit the country rapidly during crises.',
      '**ECB (External Commercial Borrowing):** Loans taken by firms from foreign lenders.',
      '**Official Reserve Transactions (ORT):** Central Bank actions to balance the BoP gap.',
      '**ORT Entry Sign:** Reserve **Increase** = Debit (-); Reserve **Decrease** = Credit (+).'
    ]
  },
  {
    id: 'u5-cs6',
    title: '📈 Market Dynamics (Demand & Supply)',
    points: [
      '**Sources of Demand:** Imports, Tourism abroad, Investing abroad, Repaying foreign debt.',
      '**Demand Curve:** Downward sloping (Inverse relation with rate).',
      '**Sources of Supply:** Exports, FDI/FPI inflows, NRI Remittances, Foreign tourists.',
      '**Supply Curve:** Upward sloping (Direct relation with rate).',
      '**Speculation:** Buying forex expecting appreciation to sell later for profit.'
    ]
  },
  {
    id: 'u5-cs7',
    title: '🧪 Advanced Measures & Mechanics',
    points: [
      '**NEER:** Trade-weighted average of nominal exchange rates against a basket of currencies.',
      '**REER:** NEER adjusted for inflation differences. The real indicator of **Competitiveness**.',
      '**Spot Rate:** Exchange rate for **immediate** delivery/settlement.',
      '**Forward Rate:** Rate agreed today for a transaction at a **future date**.',
      '**Hedging:** Using forward contracts to eliminate exchange rate risk.',
      '**Errors & Omissions:** Balancing item for statistical discrepancies in BoP data.'
    ]
  },
  {
    id: 'u5-cs8',
    title: '⚖️ Autonomous vs Accommodating',
    points: [
      '**Autonomous ("Above the Line"):** Profit-driven market transactions (Exports, FDI).',
      '**Accommodating ("Below the Line"):** Gap-filling transactions (RBI reserve changes).',
      '**BoP Surplus/Deficit:** Determined solely by **Autonomous** items.',
      '**Economic Equilibrium:** When Autonomous Credits = Autonomous Debits (No ORT needed).'
    ]
  },
  {
    id: 'u5-cs9',
    title: '🎯 SQP Tricks & Quick Hits',
    points: [
      '**Double Entry Rule:** Every international transaction creates both a Credit and a Debit.',
      '**Interest Rate Logic:** Higher domestic interest rates \-> Higher demand for Rupee \-> Appreciation.',
      '**Inflation Logic:** Higher domestic inflation \-> Lower competitiveness \-> REER Rises.',
      '**BoT vs BoP:** BoT is a narrow subset of the Current Account; BoP is the whole picture.',
      '**Managed Float Goal:** Not to set a fixed rate, but to curb "Wild Swings" (Volatility).'
    ]
  },
  {
    id: 'u5-cs10',
    title: '📚 The "Apple" Rule for Forex',
    points: [
      '**Trick:** Treat the Foreign Currency ($) like an **Apple**.',
      '**Scenario:** If price moves ₹80 \-> ₹85, the "Apple" is more expensive. Value of ₹ has fallen.',
      '**Term:** This is **Depreciation** (Rupee is weaker, Dollar is stronger).',
      '**Trade Effect:** Indian exports are now "on sale" for Americans \-> Exports **Increase**.'
    ]
  }
];
