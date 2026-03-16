import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u5-t1',
    title: 'Foreign Exchange Rate — Systems, Demand and Supply',
    description: 'The price of one currency in terms of another, how exchange rates are determined, and the three systems of exchange rate management.',
    content: [
      {
        type: 'concept',
        title: 'Foreign Exchange Rate (Forex Rate)',
        text: 'The rate at which one country\'s currency is exchanged for another country\'s currency.',
        points: [
          'Represents the **PRICE** of one currency in terms of another.',
          'Example: If ₹83 = $1, then ₹83 is the price of one US Dollar in Indian Rupees.',
          'Acts as a bridge between different nations\' price levels.'
        ],
        tags: ['DEFINITION', 'CORE CONCEPT']
      },
      {
        type: 'concept',
        title: 'System 1 — Fixed Exchange Rate System',
        text: 'The exchange rate is **OFFICIALLY SET** and maintained by the government or central bank at a predetermined level.',
        points: [
          'Does not change with market forces.',
          'Central bank must buy/sell foreign exchange to maintain the fixed level.'
        ],
        tags: ['SYSTEM']
      },
      {
        type: 'context',
        title: 'Historical Context of Fixed Rates',
        points: [
          '**GOLD STANDARD (pre-1930s)**: Currencies defined in terms of gold weight (e.g., $1 = 1/20 oz gold).',
          '**BRETTON WOODS SYSTEM (1944–1971)**: Currencies pegged to US Dollar ($), and USD pegged to gold ($35 = 1 oz). IMF created to manage this.',
          'Collapse occurred in 1971 when US suspended dollar-gold convertibility.'
        ]
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'ADVANTAGES', text: 'Stable exchange rates reduce uncertainty for exporters/importers.' },
          { label: 'DISADVANTAGES', text: 'Requires large foreign exchange reserves; limits monetary policy flexibility.' }
        ]
      },
      {
        type: 'concept',
        title: 'System 2 — Flexible Exchange Rate System (Floating)',
        text: 'The exchange rate is determined freely by **MARKET FORCES** of Demand and Supply with NO intervention.',
        points: [
          'Also called the FLOATING EXCHANGE RATE SYSTEM.',
          'Rate moves based on market conditions (e.g., if demand for USD rises, Rupee depreciates).'
        ],
        tags: ['SYSTEM']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'ADVANTAGES', text: 'Automatic adjustment; no need to hold large reserves; monetary policy freedom.' },
          { label: 'DISADVANTAGES', text: 'Volatility creates uncertainty; speculation can cause wild swings.' }
        ]
      },
      {
        type: 'concept',
        title: 'System 3 — Managed Floating System (Dirty Floating)',
        text: 'A **HYBRID system** where rate is primarily market-determined, but the Central Bank intervenes occasionally.',
        points: [
          'Prevents excessive volatility and keeps rate within desired range.',
          'Also called **DIRTY FLOATING** (not pure market-based).',
          '**India\'s Current System**: RBI sells dollars to stabilize a sharp depreciation or buys dollars to prevent excessive appreciation.'
        ],
        tags: ['CURRENT SYSTEM', 'INDIA']
      },
      {
        type: 'concept',
        title: 'Demand for Foreign Exchange — Why do we need it?',
        text: 'We demand foreign currency (like US Dollars) for several reasons:',
        points: [
          '**IMPORTS**: Paying for goods and services bought from abroad (the largest source of demand).',
          '**TOURISM ABROAD**: An Indian travelling to France needs euros — exchanges rupees for euros.',
          '**UNILATERAL TRANSFERS**: Sending gifts or remittances to family living abroad.',
          '**FOREIGN INVESTMENT**: Indian firms buying assets, shares, or factories abroad (Indian companies investing in companies overseas).',
          '**DEBT REPAYMENT**: Repaying loans taken from foreign banks or institutions in their currency.',
          '**SPECULATION**: Buying foreign currency expecting it to appreciate — to profit from favorable exchange rate movements.'
        ],
        tags: ['DEMAND', 'FOREX']
      },
      {
        type: 'concept',
        title: 'Demand Curve for Foreign Exchange',
        text: 'SLOPES DOWNWARD — as the exchange rate (price of foreign currency) rises, imports become expensive → demand for foreign goods/services falls → demand for foreign currency falls.',
        points: ['Inverse relationship between exchange rate and demand for foreign exchange.']
      },
      {
        type: 'concept',
        title: 'Supply of Foreign Exchange — Where does it come from?',
        text: 'Foreign currency flows INTO a country from:',
        points: [
          '**EXPORTS**: Foreigners paying for our goods and services — the largest source of forex supply.',
          '**FOREIGN DIRECT INVESTMENT (FDI) INFLOW**: Foreign companies establishing factories or businesses in India → bring their capital in foreign currency.',
          '**FOREIGN PORTFOLIO INVESTMENT (FPI)**: Foreign investors buying Indian stocks/bonds → convert their foreign currency to rupees → supply of forex rises.',
          '**REMITTANCES**: Overseas Indians (NRIs — Non-Resident Indians) sending money home → convert foreign currency to rupees.',
          '**FOREIGN TOURISTS**: Visitors to India spending their foreign currency here.',
          '**EXTERNAL COMMERCIAL BORROWING (ECB)**: Indian companies borrowing from foreign banks → receive foreign currency.'
        ],
        tags: ['SUPPLY', 'FOREX']
      },
      {
        type: 'concept',
        title: 'Supply Curve for Foreign Exchange',
        text: 'SLOPES UPWARD — as the exchange rate rises (rupee weakens), Indian exports become cheaper for foreigners → they buy more from India → more foreign currency flows in.',
        points: ['Direct relationship between exchange rate and supply of foreign exchange.']
      },
      {
        type: 'concept',
        title: 'Currency Depreciation (Flexible System)',
        text: 'A **FALL** in the value of the domestic currency relative to a foreign currency due to market forces — under a FLEXIBLE exchange rate system.',
        points: [
          'Example: $1 rises from ₹80 to ₹85 → rupee has DEPRECIATED (you need MORE rupees to buy one dollar).',
          '**EFFECTS**: Exports become CHEAPER for foreigners → exports INCREASE. Imports become MORE EXPENSIVE → imports DECREASE.',
          'Net effect: Usually IMPROVES balance of trade (helps exporters, hurts importers).'
        ],
        tags: ['FLEXIBLE SYSTEM', 'CURRENCY VALUE']
      },
      {
        type: 'concept',
        title: 'Currency Appreciation (Flexible System)',
        text: 'A **RISE** in the value of the domestic currency due to market forces.',
        points: [
          'Example: $1 falls from ₹80 to ₹75 → rupee has APPRECIATED.',
          '**EFFECTS**: Exports become COSTLIER → exports FALL. Imports become CHEAPER → imports RISE.'
        ],
        tags: ['FLEXIBLE SYSTEM', 'CURRENCY VALUE']
      },
      {
        type: 'concept',
        title: 'Devaluation (Fixed System)',
        text: 'A deliberate, policy-driven **REDUCTION** in the official exchange rate by the GOVERNMENT or central bank under a FIXED exchange rate system.',
        points: [
          'Example: India devalued the rupee in 1966 and 1991.',
          'Different from depreciation — devaluation is a government DECISION; depreciation is a market OUTCOME.',
          'Makes domestic goods cheaper for foreigners (exports rise).'
        ],
        tags: ['FIXED SYSTEM', 'GOVERNMENT POLICY']
      },
      {
        type: 'concept',
        title: 'Revaluation (Fixed System)',
        text: 'A deliberate, policy-driven **INCREASE** in the official exchange rate by the government under a fixed exchange rate system — opposite of devaluation.',
        points: [
          'Makes domestic goods costlier for foreigners (exports fall).'
        ],
        tags: ['FIXED SYSTEM', 'GOVERNMENT POLICY']
      },
      {
        type: 'concept',
        title: 'Spot Rate',
        text: 'The exchange rate prevailing in the market for **IMMEDIATE** delivery/settlement of foreign exchange.',
        points: [
          '"What is the dollar worth right now?"',
          'Used for immediate transactions.'
        ],
        tags: ['EXCHANGE RATE TYPES']
      },
      {
        type: 'concept',
        title: 'Forward Rate',
        text: 'The exchange rate agreed upon **TODAY** for a transaction that will occur at a **SPECIFIED FUTURE DATE** (e.g., 3 months from now).',
        points: [
          'Used to lock in a price for future currency needs.',
          'If forward rate > spot rate, foreign currency is at a **FORWARD PREMIUM** (expected to appreciate).',
          '**HEDGING**: Businesses use forward contracts as INSURANCE against exchange rate risk.'
        ],
        tags: ['EXCHANGE RATE TYPES', 'HEDGING']
      },
      {
        type: 'concept',
        title: 'NEER (Nominal Effective Exchange Rate)',
        text: 'A **WEIGHTED AVERAGE** of bilateral exchange rates of the domestic currency against a **BASKET** of foreign currencies of major trading partners (weighted by trade shares).',
        points: [
          'Captures the exchange rate against ALL trading partners together, unlike a simple bilateral rate (₹ vs $).'
        ],
        tags: ['COMPETITIVENESS', 'MEASUREMENT']
      },
      {
        type: 'concept',
        title: 'REER (Real Effective Exchange Rate)',
        text: 'NEER **ADJUSTED for INFLATION DIFFERENCES** between India and its trading partners.',
        points: [
          'Formula: REER = NEER × (Price Level Abroad / Price Level at Home).',
          'REER is the true indicator of India\'s **INTERNATIONAL COMPETITIVENESS**.',
          'If India\'s inflation is higher than competitors, even a stable NEER means the rupee is effectively **OVERVALUED** (Indian goods are relatively more expensive) — REER rises, meaning India has become less competitive.'
        ],
        tags: ['COMPETITIVENESS', 'MEASUREMENT', 'INFLATION']
      }
    ],
    visualizations: [
      {
        id: 'u5-v1',
        title: 'Three Exchange Rate Systems — Complete Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Fixed Rate', 'Flexible (Floating) Rate', 'Managed Floating (Dirty Float)'],
          rows: [
            ['Rate Determination', 'Government/Central Bank sets official rate', 'Pure market forces (Demand & Supply)', 'Market forces primary; RBI intervenes selectively'],
            ['Government Intervention', 'Continuous — must defend the rate', 'Zero', 'Occasional — to prevent excess volatility'],
            ['Foreign Reserve Need', 'LARGE reserves to maintain peg', 'Minimal — market clears itself', 'Moderate reserves to intervene selectively'],
            ['Key Advantage', 'Stability for trade/investment', 'Automatic adjustment; monetary policy free', 'Balance: stability without full reserve commitment'],
            ['Key Disadvantage', 'Limits monetary policy; reserve drain risk', 'Volatility; speculation risk', 'Lacks transparency; discretionary'],
            ['Historical Example', 'Gold Standard; Bretton Woods (1944–71)', 'US, UK, Eurozone today', 'India, China today']
          ]
        }
      },
      {
        id: 'u5-v2',
        title: 'Demand vs Supply of Foreign Exchange',
        type: 'table',
        data: {
          headers: ['Feature', 'Demand for Foreign Exchange', 'Supply of Foreign Exchange'],
          rows: [
            ['Sources', 'Imports, Tourism abroad, Foreign Investment, Debt repayment, Speculation', 'Exports, Foreign Direct Investment inflow, Foreign Portfolio Investment, Remittances (NRI), Foreign tourists'],
            ['Curve Direction', 'DOWNWARD SLOPING', 'UPWARD SLOPING'],
            ['Relationship with Rate', 'INVERSE — rate rises → demand falls', 'DIRECT — rate rises → supply rises'],
            ['Logic', 'Higher rate → imports costlier → less demand for forex', 'Higher rate → exports cheaper for foreigners → more forex inflow']
          ]
        }
      },
      {
        id: 'v-dep-dev',
        title: 'Depreciation vs Devaluation vs Appreciation vs Revaluation',
        type: 'table',
        data: {
          headers: ['Term', 'Direction of Change', 'System', 'Cause', 'Effect on Exports'],
          rows: [
            ['Depreciation', 'Domestic currency FALLS in value', 'Flexible/Floating', 'Market forces (supply/demand)', 'Exports RISE (cheaper for foreigners)'],
            ['Devaluation', 'Domestic currency FALLS in value', 'Fixed', 'Government policy decision', 'Exports RISE (cheaper for foreigners)'],
            ['Appreciation', 'Domestic currency RISES in value', 'Flexible/Floating', 'Market forces', 'Exports FALL (costlier for foreigners)'],
            ['Revaluation', 'Domestic currency RISES in value', 'Fixed', 'Government policy decision', 'Exports FALL (costlier for foreigners)']
          ]
        }
      }
    ]
  },
  {
    id: 'u5-t2',
    title: 'Balance of Payments (BoP) — Structure and Components',
    description: 'The complete structure of the Balance of Payments account — Current Account, Capital Account, Autonomous vs Accommodating items, and what deficits/surpluses mean.',
    content: [
      {
        type: 'concept',
        title: 'Balance of Payments (BoP)',
        text: 'A systematic record of ALL economic transactions between residents of a country and the rest of the world during a specific period (usually one year).',
        points: [
          '**DOUBLE-ENTRY**: Every transaction creates a CREDIT (inflow) and a DEBIT (outflow).',
          '**COMPREHENSIVE**: Covers goods, services, income, assets, and liabilities.',
          '**FLOW CONCEPT**: Recorded over a period of time.'
        ],
        tags: ['DEFINITION', 'ACCOUNTING']
      },
      {
        type: 'concept',
        title: 'Current Account',
        text: 'Records transactions related to current income/expenditure (Goods, Services, Transfers).',
        points: [
          '**Visible Trade**: Exports/Imports of physical goods (Balance of Trade).',
          '**Invisible Trade**: Services like Banking, IT, Tourism.',
          '**Unilateral Transfers**: One-sided payments like Remittances or Gifts.'
        ],
        tags: ['ACCOUNT']
      },
      {
        type: 'tip',
        title: 'Current Account Deficit (CAD)',
        text: 'Occurs when Imports > Exports. A country is living beyond its means.',
        points: [
          'Must be financed by borrowing or drawing down reserves.'
        ]
      },
      {
        type: 'concept',
        title: 'Capital Account',
        text: 'Records transactions that change the asset or liability position of a country.',
        points: [
          '**FDI**: Foreign Direct Investment (Long-term, managerial control).',
          '**FPI**: Foreign Portfolio Investment (Hot Money, volatile).',
          '**ECB**: External Commercial Borrowing (Loans from abroad).',
          '**Official Reserve Transactions**: Changes in RBI\'s forex holdings.'
        ],
        tags: ['ACCOUNT', 'FINANCE']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'AUTONOMOUS ITEMS', text: '"Above the Line": Undertaken for profit or merit, independent of BoP position.' },
          { label: 'ACCOMMODATING ITEMS', text: '"Below the Line": Undertaken to fill the BoP gap (e.g., Reserve changes).' }
        ]
      },
      {
        type: 'warning',
        title: 'BoP Always Balances',
        text: 'In an **accounting sense**, BoP is always zero due to double-entry bookkeeping. However, an **economic deficit** means reserves are falling.',
        tags: ['CRITICAL']
      }
    ],
    visualizations: [
      {
        id: 'u5-v3',
        title: 'Balance of Payments — Complete Structure',
        type: 'table',
        data: {
          headers: ['Account', 'Sub-Component', 'Items Included', 'Credit (Inflow)', 'Debit (Outflow)'],
          rows: [
            ['CURRENT ACCOUNT', 'Visible Trade (Balance of Trade)', 'Physical goods — merchandise', 'Exports of goods', 'Imports of goods'],
            ['CURRENT ACCOUNT', 'Invisible Trade (Services)', 'Banking, IT, tourism, shipping, insurance', 'Service exports (e.g., IT earnings)', 'Service imports (e.g., Indian student fees abroad)'],
            ['CURRENT ACCOUNT', 'Unilateral Transfers', 'Remittances, gifts, foreign aid, grants', 'NRI remittances in, grants received', 'Gifts sent abroad, aid given'],
            ['CAPITAL ACCOUNT', 'Foreign Direct Investment (FDI)', 'Foreign firms building factories/buying control in India', 'FDI coming INTO India', 'Indian firms investing abroad'],
            ['CAPITAL ACCOUNT', 'Foreign Portfolio Investment (FPI/FII)', 'Foreign buying of Indian stocks/bonds (Hot Money)', 'FPI flowing into India', 'FPI flowing out of India'],
            ['CAPITAL ACCOUNT', 'External Commercial Borrowing (ECB)', 'Loans to/from foreign banks at market rates', 'ECB received by Indian firms', 'ECB repayment principal + interest'],
            ['CAPITAL ACCOUNT', 'Official Reserve Transactions (ORT)', 'RBI\'s foreign exchange reserve changes (Accommodating)', 'Decrease in reserves (selling forex)', 'Increase in reserves (buying forex)'],
            ['BALANCING', 'Errors and Omissions', 'Statistical discrepancies', 'Balancing credit', 'Balancing debit']
          ]
        }
      },
      {
        id: 'u5-v4',
        title: 'Autonomous vs Accommodating Items',
        type: 'table',
        data: {
          headers: ['Feature', 'Autonomous Items ("Above the Line")', 'Accommodating Items ("Below the Line")'],
          rows: [
            ['Motive', 'Own economic merit — profit, need, preference', 'To fill BoP gap — bridge surplus/deficit'],
            ['Independence', 'INDEPENDENT of BoP position', 'DEPENDENT on BoP position (response to gap)'],
            ['Who Undertakes', 'Private firms, households, individuals', 'Central Bank (RBI) — Official Reserve Transactions'],
            ['Examples', 'Exports, imports, FDI, FPI, remittances, ECB', 'RBI buying/selling forex reserves, SDR transactions'],
            ['Determines BoP', 'YES — BoP deficit/surplus calculated from these', 'NO — these are the correction mechanism'],
            ['Position', '"Above the Line" — primary transactions', '"Below the Line" — residual balancing entries']
          ]
        }
      },
      {
        id: 'u5-v5',
        title: 'FDI vs FPI (Foreign Portfolio Investment) — Key Differences',
        type: 'table',
        data: {
          headers: ['Feature', 'Foreign Direct Investment (FDI)', 'Foreign Portfolio Investment (FPI/FII)'],
          rows: [
            ['Nature', 'Investment with MANAGERIAL CONTROL', 'Financial investment WITHOUT control'],
            ['Form', 'Building factories, acquiring companies (majority stake)', 'Buying shares, bonds, mutual funds'],
            ['Stability', 'LONG-TERM and stable — hard to reverse quickly', 'SHORT-TERM / volatile — "Hot Money" (can exit rapidly)'],
            ['Risk', 'Low risk to host country', 'High risk — sudden outflows can crash currency/stock market'],
            ['Technology', 'Brings technology, management expertise, jobs', 'No technology transfer — purely financial'],
            ['Example', 'Apple building a factory in India', 'Foreign fund buying shares of Reliance Industries on NSE']
          ]
        }
      },
      {
        id: 'u5-v6',
        title: 'BoT vs BoP — Scope Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Balance of Trade (BoT)', 'Balance of Payments (BoP)'],
          rows: [
            ['Scope', 'NARROW — only visible (physical) goods', 'BROAD — visible + invisible + transfers + capital'],
            ['Formula', 'BoT = Export of Goods − Import of Goods', 'BoP = Current Account + Capital Account + Errors & Omissions'],
            ['Relationship', 'Subset of Current Account', 'Complete international accounts picture'],
            ['Can They Diverge?', 'YES — BoT deficit + BoP surplus possible', 'BoP deficit covered by reserve drawdown'],
            ['Indian Context', 'India has chronic trade deficit (imports oil/gold)', 'Partially offset by IT services surplus and NRI remittances']
          ]
        }
      }
    ]
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
