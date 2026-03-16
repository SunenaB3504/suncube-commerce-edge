import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u4-cs-objectives',
    title: '🎯 Three Objectives of the Government Budget',
    points: [
      '**Allocation (Reallocation of Resources):** Government provides PUBLIC GOODS that private markets fail to supply — because they are non-excludable and non-rivalrous.',
      '**Redistribution of Income:** Budget reduces inequality through PROGRESSIVE TAXATION (higher income → higher rate) and WELFARE TRANSFERS (subsidies, free food, healthcare for poor).',
      '**Economic Stabilisation:** Budget manages Aggregate Demand — EXPANSIONARY policy (↑G, ↓T) during recession; CONTRACTIONARY policy (↓G, ↑T) during inflation.',
      '**Sin Taxes:** Government uses HEAVY TAXES to discourage socially harmful goods (tobacco, alcohol) — an example of the allocation function.',
      '**Subsidies:** Government subsidises socially desirable but less profitable activities (fertilisers for farmers, education) — also allocation function.'
    ]
  },
  {
    id: 'u4-cs-publicgoods',
    title: '🏛️ Public Goods & Free Rider Problem',
    points: [
      '**Non-Rivalrous:** One person\'s use does NOT reduce availability for others. Example: A lighthouse signal used by one ship does not reduce its signal for other ships.',
      '**Non-Excludable:** Once provided, it is IMPOSSIBLE to prevent non-payers from benefiting. Example: National defence protects ALL citizens — even tax evaders.',
      '**Free Rider Problem:** Rational individuals consume public goods WITHOUT PAYING — hoping others will fund them. If everyone free-rides → no one pays → good is not provided → Market Failure.',
      '**Solution:** Government provides public goods funded by COMPULSORY TAXATION — removes free-rider problem.',
      '**Public Good Examples:** National Defence, Streetlights, Lighthouses, Public Parks, Flood Control Systems.',
      '**Private Good Examples:** Food, Clothing, Cars, Mobile Phones — EXCLUDABLE (non-payers can be denied access) and RIVALROUS (one person\'s use reduces availability).'
    ]
  },
  {
    id: 'u4-cs-budget-types',
    title: '⚖️ Three Types of Budget',
    points: [
      '**Balanced Budget:** Estimated Receipts = Estimated Expenditure. Preferred by classical economists. Limitation: restricts government\'s ability to respond to economic crises.',
      '**Surplus Budget:** Receipts > Expenditure. Used during INFLATION (excess demand) — reduces Aggregate Demand. Rare in practice.',
      '**Deficit Budget:** Expenditure > Receipts — gap financed by borrowing. Used during RECESSION (deficient demand) — increases Aggregate Demand. Most common in India.',
      '**Policy Link:** Deficit budget = Expansionary Fiscal Policy. Surplus budget = Contractionary Fiscal Policy. Balanced budget = Neutral Fiscal Policy.'
    ]
  },
  {
    id: 'u4-cs-receipts',
    title: '💰 Budget Receipts — Revenue vs Capital',
    points: [
      '**Revenue Receipts:** NEITHER create a liability NOR reduce government assets. Regular, recurring income. Examples: Tax Revenue + Non-Tax Revenue.',
      '**Capital Receipts:** EITHER create a liability (borrowings) OR reduce a government asset (disinvestment, loan recovery). Non-recurring.',
      '**Tax Revenue — Direct Tax:** Burden CANNOT be shifted. Payer = bearer. Examples: Income Tax, Corporate Tax, Wealth Tax.',
      '**Tax Revenue — Indirect Tax:** Burden CAN BE SHIFTED to consumer via price. Examples: GST (Goods and Services Tax — replaced Excise Duty, VAT, Service Tax in 2017), Customs Duty.',
      '**Non-Tax Revenue Sources:** Fees and Fines (court fees), Interest received on loans given to states/PSUs, Dividends and Profits from PSUs (like ONGC, LIC), Grants from international organisations (World Bank, IMF), Escheat (property of persons dying without heirs goes to government).',
      '**Borrowings:** Capital Receipt — creates a FUTURE LIABILITY (must be repaid with interest). Sources: RBI, market bonds, foreign loans.',
      '**Disinvestment:** Capital Receipt — sale of government equity in PSUs (e.g., Air India, BPCL). Reduces a government ASSET.',
      '**Recovery of Loans:** Capital Receipt — repayments received from State governments or PSUs. Reduces a financial asset (debtors).'
    ]
  },
  {
    id: 'u4-cs-expenditure',
    title: '🏗️ Budget Expenditure & Tax Classification',
    points: [
      '**Revenue Expenditure:** NEITHER creates an asset NOR reduces a liability. Recurring. Examples: Salaries, Pensions, Interest Payments (on past borrowings), Subsidies, Grants to states for current use.',
      '**Capital Expenditure:** EITHER creates an asset OR reduces a liability. Non-recurring. Examples: Roads, Bridges, Hospitals (creates assets); Loan repayments (reduces liability); Loans to states (creates financial asset).',
      '**Golden Rule — Expenditure Test:** Creates asset? → Capital Exp. Reduces liability? → Capital Exp. Neither? → Revenue Exp.',
      '**Progressive Tax:** Rate INCREASES as income rises. Most equitable. Example: India\'s Income Tax slabs — 5% (₹3–6 lakh) → 20% → 30% (₹15+ lakh).',
      '**Regressive Tax:** Rate DECREASES as income rises — poor pay higher proportion. Often indirect taxes are regressive (everyone pays same GST % but it hurts low incomes more).',
      '**Proportional Tax:** SAME flat rate at all income levels. Example: Flat 20% corporate tax.',
      '**Specific Tax:** Levied per unit of QUANTITY (weight, size, number). Example: ₹5 per kg of sugar. Unaffected by price changes.',
      '**Ad Valorem Tax:** Levied as % of VALUE of the commodity. Example: 18% GST on electronics. Automatically rises with inflation.'
    ]
  },
  {
    id: 'u4-formulas',
    title: '📐 Budget Deficit Formulae',
    points: [
      '**Revenue Deficit (RD):** RD = Revenue Expenditure − Revenue Receipts. Indicates government DISSAVING — borrowing to fund consumption, not investment.',
      '**Fiscal Deficit (FD):** FD = Total Expenditure − (Revenue Receipts + Non-Debt Capital Receipts). FD ≡ Total Borrowings for the year.',
      '**Primary Deficit (PD):** PD = Fiscal Deficit − Interest Payments. Measures fresh borrowing BEYOND servicing past debt.',
      '**Chain Formula:** FD = RD + Capital Expenditure − Non-Debt Capital Receipts. PD = FD − Interest Payments. FD = PD + Interest Payments.',
      '**Implications of Fiscal Deficit:** (1) Inflationary — if financed by printing money. (2) Crowding Out — government borrowing raises interest rates → displaces private investment. (3) Future Tax Burden — current debt = future repayment + interest.',
      '**If PD = 0:** Government is borrowing ONLY to pay interest on old loans — no fresh borrowing for spending.',
      '**Measures to Correct Fiscal Deficit:** Increase Taxes, Reduce Expenditure, Disinvestment of PSUs, Reduce Subsidies, Improve Non-Tax Revenue (PSU profits, fees).'
    ]
  },
  {
    id: 'u4-cs-debt',
    title: '📈 Debt vs Deficit & Debt Trap',
    points: [
      '**Deficit is a FLOW:** Excess of expenditure over receipts in ONE YEAR. Measured annually.',
      '**Debt (National Debt) is a STOCK:** Cumulative total of ALL past deficits (minus surpluses). Accumulated over years.',
      '**Relationship:** Each year\'s deficit ADDS to the stock of debt. Debt = Sum of all past annual deficits.',
      '**The Debt Trap (Vicious Cycle):** Borrowing → Debt rises → Interest payments rise → Revenue Expenditure rises → Revenue Deficit widens → More borrowing needed → Debt rises further.',
      '**India\'s Interest Burden:** Interest payments are the LARGEST single item of India\'s Revenue Expenditure — historically 20–25% of total expenditure — a consequence of decades of deficit financing.'
    ]
  },
  {
    id: 'u4-cs-multipliers',
    title: '✖️ Fiscal Multipliers & Automatic Stabilisers',
    points: [
      '**Govt Expenditure Multiplier (k_G):** k_G = 1 / (1 − MPC) = 1 / MPS. Identical to Investment Multiplier — govt spending directly becomes income.',
      '**Tax Multiplier (k_T):** k_T = −MPC / (1 − MPC). Negative sign = tax increase reduces income. Smaller than k_G because tax cut only raises consumption by MPC fraction.',
      '**Balanced Budget Multiplier (k_BB):** k_BB = k_G + k_T = 1/(1−MPC) + (−MPC)/(1−MPC) = 1. ALWAYS equals 1, regardless of MPC value.',
      '**Example (MPC = 0.8):** k_G = 5, k_T = −4, k_BB = 1. A ₹100 cr spending increase raises income by ₹500 cr. A ₹100 cr tax cut raises income by ₹400 cr.',
      '**Automatic Stabilisers:** Features of the tax/transfer system that automatically cushion economic fluctuations WITHOUT deliberate government action.',
      '**Progressive Tax as Stabiliser — Boom:** Income rises → Tax revenue automatically rises → Disposable income rises by LESS → Dampens consumption boom → Prevents overheating.',
      '**Progressive Tax as Stabiliser — Recession:** Income falls → Tax revenue automatically falls → Disposable income falls by LESS → Cushions consumption fall → Reduces recession depth.',
      '**With Proportional Tax Rate (t): Effective Multiplier = 1 / [1 − MPC(1−t)].** Example: MPC = 0.8, t = 0.25 → Effective k = 2.5 (vs 5 without tax). Tax HALVES the multiplier — economy less vulnerable to demand shocks.'
    ]
  },
  {
    id: 'u4-cs11',
    title: '🚨 The Primary Deficit "Sins of the Past" Trap',
    points: [
      '**Mnemonic:** Primary Deficit measures current year overspending **purely** without historical debt baggage.',
      '**Formula:** **Fiscal Deficit - Interest Payments**.',
      '**Significance:** If PD = 0, the govt is borrowing **only** to pay interest on old loans.',
      '**Policy Implication:** A low Primary Deficit indicates better fiscal discipline by the current administration.'
    ]
  },
  {
    id: 'u4-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**RD (Revenue Deficit):** Revenue Expenditure − Revenue Receipts. Indicates structural imbalance — dissaving by government.',
      '**FD (Fiscal Deficit):** Total borrowing requirement of the government. FD ≡ Borrowings. Most watched deficit indicator.',
      '**PD (Primary Deficit):** FD − Interest Payments. Current year overspending excluding past debt burden. PD = 0 is a fiscal health milestone.',
      '**GST (Goods and Services Tax):** Comprehensive, destination-based indirect tax introduced in 2017 — replaced Excise Duty, Value Added Tax (VAT), and Service Tax across India.',
      '**MPC (Marginal Propensity to Consume):** Fraction of additional income spent on consumption. Key to calculating all fiscal multipliers.',
      '**MPS (Marginal Propensity to Save):** MPS = 1 − MPC. Used as denominator in multiplier formulae.',
      '**PSU (Public Sector Undertaking):** Government-owned enterprises (ONGC, LIC, BPCL, Indian Railways). Dividends = Non-Tax Revenue Receipt. Sale (disinvestment) = Capital Receipt.'
    ]
  },
  {
    id: 'u4-cs5',
    title: '🎯 SQP Traps: Government Budget',
    points: [
      '**Fiscal Deficit Formula Trap:** Alternative tested formula — FD = Revenue Deficit + Capital Expenditure − Non-Debt Capital Receipts. Learn BOTH.',
      '**Primary Deficit Trap ("Sins of the Past" Rule):** PD measures CURRENT YEAR overspending only. Always subtract Interest Payments: PD = FD − Interest Payments.',
      '**Revenue Receipt vs Capital Receipt Trap:** Recovery of loans given by government = CAPITAL RECEIPT (reduces asset). Interest RECEIVED on those loans = REVENUE RECEIPT (no asset change).',
      '**Expenditure vs Receipt Classification Trap:** Interest PAID by government on its borrowings = REVENUE EXPENDITURE. Loan REPAYMENT (principal) by government = CAPITAL EXPENDITURE.',
      '**Multiplier Sign Trap:** Tax Multiplier (k_T) is NEGATIVE — tax INCREASE reduces income. Tax DECREASE increases income. Always apply the negative sign correctly.',
      '**Balanced Budget Multiplier Trap:** k_BB = 1 ALWAYS — regardless of MPC, regardless of the amount. If ΔG = ΔT = ₹200 cr, then ΔY = ₹200 cr, not ₹200 × some multiplier.',
      '**Disinvestment Trap:** Government selling shares in a PSU = CAPITAL RECEIPT (reduces asset). Dividend received from a PSU = REVENUE RECEIPT (no asset change).'
    ]
  }
];
