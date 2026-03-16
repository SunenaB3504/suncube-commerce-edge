import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u4-t1',
    title: 'Meaning, Objectives and Types of Government Budget',
    description: 'Definition of the annual budget, its primary socio-economic functions, and the three types of budget based on deficit/surplus.',
    content: [
      {
        type: 'concept',
        title: 'Government Budget',
        text: 'An annual financial statement (April 1 to March 31) estimating expected receipts and expenditure.',
        points: [
          '**Primary Instrument**: It is the government\'s main tool for **Fiscal Policy**.',
          '**Estimates**: It shows expected, not actual, values for the coming year.'
        ],
        tags: ['DEFINITION']
      },
      {
        type: 'concept',
        title: 'Objective 1: Reallocation of Resources',
        text: 'Corrects market failures by providing public goods and influencing production.',
        points: [
          '**Public Goods**: Providing defense, streetlights (Non-rivalrous & Non-excludable).',
          '**Tax/Subsidies**: Taxing "sin goods" (tobacco) and subsidizing essentials.'
        ],
        tags: ['ALLOCATION']
      },
      {
        type: 'concept',
        title: 'Objective 2: Redistribution of Income',
        text: 'Reducing inequality through a progressive tax structure.',
        points: [
          '**Progressive Tax**: Higher tax rates for higher income earners.',
          '**Transfers/Subsidies**: Using tax revenue for welfare (food, health, housing) for the poor.',
          '**PMGKAY**: Pradhan Mantri Garib Kalyan Anna Yojana provides free food grains (80cr+ beneficiaries).',
          '**Ayushmaan Bharat**: Provides free healthcare cover up to ₹5 lakh per family for the poor.'
        ],
        tags: ['EQUITY']
      },
      {
        type: 'concept',
        title: 'Objective 3: Economic Stabilisation',
        text: 'Using the budget to manage aggregate demand and price stability.',
        points: [
          '**Inflation**: Use contractionary policy (↑T, ↓G).',
          '**Recession**: Use expansionary policy (↓T, ↑G).'
        ],
        tags: ['STABILITY']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'BALANCED', text: 'Receipts = Expenditure. Neutral effect.' },
          { label: 'SURPLUS', text: 'Receipts > Expenditure. Used to control inflation.' },
          { label: 'DEFICIT', text: 'Expenditure > Receipts. Used to fight recession.' }
        ]
      }
    ],
    visualizations: [
      {
        id: 'u4-v1',
        title: 'Three Objectives of the Government Budget',
        type: 'table',
        data: {
          headers: ['Objective', 'Function', 'Mechanism', 'Indian Example'],
          rows: [
            ['Reallocation of Resources', 'Correct market failure — provide public goods', 'Tax harmful goods; subsidise social goods; fund public goods', 'MNREGA, National Defence, National Highways'],
            ['Redistribution of Income', 'Reduce inequality', 'Progressive taxation; welfare transfers and subsidies', 'Income Tax slabs, PMGKAY (Food), Ayushmaan Bharat (Health)'],
            ['Economic Stabilisation', 'Prevent boom-bust cycles', 'Expansionary budget in recession; contractionary in inflation', '2020 COVID stimulus package; 2010s fiscal consolidation']
          ]
        }
      },
      {
        id: 'u4-v1b',
        title: 'Three Types of Budget',
        type: 'table',
        data: {
          headers: ['Type', 'Condition', 'When Used', 'Effect on Economy'],
          rows: [
            ['Balanced Budget', 'Receipts = Expenditure', 'Theory only — rarely in practice', 'No stimulus or contraction; neutral'],
            ['Surplus Budget', 'Receipts > Expenditure', 'During Inflation (Excess Demand)', 'Reduces Aggregate Demand; fights inflation'],
            ['Deficit Budget', 'Expenditure > Receipts (gap filled by borrowing)', 'During Recession / Deficient Demand', 'Increases Aggregate Demand; fights unemployment']
          ]
        }
      },
      {
        id: 'u4-v1c',
        title: 'Public Goods vs Private Goods',
        type: 'table',
        data: {
          headers: ['Feature', 'Public Goods', 'Private Goods'],
          rows: [
            ['Rivalry', 'NON-RIVALROUS — one person\'s use doesn\'t reduce availability', 'RIVALROUS — if you eat the apple, others cannot'],
            ['Excludability', 'NON-EXCLUDABLE — cannot prevent non-payers from benefiting', 'EXCLUDABLE — can be withheld from those who don\'t pay'],
            ['Free Rider Problem', 'YES — people benefit without paying → underprovision', 'NO — non-payment means no access'],
            ['Provider', 'Government (funded by compulsory taxation)', 'Private firms (funded by market prices)'],
            ['Examples', 'National Defence, Streetlights, Lighthouses, Public Parks', 'Food, Clothing, Cars, Mobile phones']
          ]
        }
      }
    ]
  },
  {
    id: 'u4-t2',
    title: 'Classification of Budget — Receipts and Expenditure',
    description: 'The complete hierarchical breakdown of government receipts and expenditure into revenue and capital components, with all sub-types.',
    content: [
      {
        type: 'concept',
        title: 'The Budget Taxonomy',
        text: 'The budget is divided into two parts: **Revenue Account** (Current) and **Capital Account** (Asset/Liability affecting).',
        tags: ['STRUCTURE']
      },
      {
        type: 'concept',
        title: 'Revenue Receipts',
        text: 'Receipts that NEITHER create liability NOR reduce assets. Regular and recurring.',
        points: [
          '**Tax Revenue**: Compulsory payments (GST, Income Tax).',
          '**Non-Tax Revenue**: Interest, Dividends, Fees, Fines, Escheat.'
        ],
        tags: ['RECURRING INCOME']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'DIRECT TAX', text: 'Burden cannot be shifted (Income Tax, Corp Tax).' },
          { label: 'INDIRECT TAX', text: 'Burden shifted to consumers (GST, Customs Duty).' }
        ]
      },
      {
        type: 'concept',
        title: 'Capital Receipts',
        text: 'Receipts that EITHER create liability OR reduce assets. Non-recurring.',
        points: [
          '**Borrowings**: Create a future liability.',
          '**Disinvestment**: Selling govt stakes in PSUs (reduces assets).',
          '**Recovery of Loans**: Receiving back principal (reduces debtors/assets).'
        ],
        tags: ['LONG-TERM FUNDS']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'REVENUE EXPENDITURE', text: 'Recurring; doesn\'t create assets (Salaries, Interest, Subsidies).' },
          { label: 'CAPITAL EXPENDITURE', text: 'Non-recurring; creates assets or reduces liability (Infrastructure, Loan repayment).' }
        ]
      }
    ],
    visualizations: [
      {
        id: 'u4-v2-t1',
        title: 'Complete Budget Classification — The Taxonomy',
        type: 'table',
        data: {
          headers: ['Category', 'Sub-Type', 'Items Included', 'Asset/Liability Effect'],
          rows: [
            ['REVENUE RECEIPTS', 'Tax Revenue', 'Income Tax, Corporate Tax, Goods and Services Tax (GST), Customs Duty', 'No asset/liability change'],
            ['REVENUE RECEIPTS', 'Non-Tax Revenue', 'Fees, Fines, Interest from states, PSU dividends, Grants, Escheat', 'No asset/liability change'],
            ['CAPITAL RECEIPTS', 'Borrowings', 'Borrowings from RBI, Market borrowings (bonds), External loans', 'Creates LIABILITY (must be repaid)'],
            ['CAPITAL RECEIPTS', 'Disinvestment', 'Sale of PSU equity (e.g., BPCL, Air India)', 'Reduces ASSET (government shareholding)'],
            ['CAPITAL RECEIPTS', 'Recovery of Loans', 'Loan repayments received back from States/PSUs', 'Reduces ASSET (debtors)'],
            ['REVENUE EXPENDITURE', '—', 'Salaries, Pensions, Interest payments, Subsidies, Admin expenses', 'No asset/liability change'],
            ['CAPITAL EXPENDITURE', '—', 'Building highways, hospitals; Loan repayments; Loans to states', 'Creates ASSET or Reduces LIABILITY']
          ]
        }
      },
      {
        id: 'v-tax-types',
        title: 'Types of Taxes — Complete Classification',
        type: 'table',
        data: {
          headers: ['Classification Basis', 'Type', 'Definition', 'Indian Example'],
          rows: [
            ['Burden Shifting', 'Direct Tax', 'Burden cannot be shifted to others', 'Income Tax, Corporate Tax'],
            ['Burden Shifting', 'Indirect Tax', 'Burden shifted to consumer via price', 'Goods and Services Tax (GST), Customs Duty'],
            ['Rate Structure', 'Progressive Tax', 'Higher income → higher tax rate', 'Income tax slabs (5%→20%→30%)'],
            ['Rate Structure', 'Regressive Tax', 'Higher income → lower tax rate (burden on poor)', 'Some flat indirect taxes in practice'],
            ['Rate Structure', 'Proportional Tax', 'Same rate regardless of income', 'Flat corporate tax rate'],
            ['Levy Basis', 'Specific Tax', 'Per unit (weight, size, quantity)', 'Fixed tax per tonne of coal'],
            ['Levy Basis', 'Ad Valorem Tax', 'Percentage of value of commodity', 'GST charged as % of price']
          ]
        }
      },
      {
        id: 'u4-budget-chart',
        title: 'Government Budget Structure — The Two Sides',
        type: 'process',
        data: [
          { title: 'Government Budget', description: 'Annual financial plan for April 1 to March 31 — presented to Parliament.' },
          { title: 'Revenue Account (L-T neutral)', description: 'Revenue Receipts (Tax + Non-Tax) vs Revenue Expenditure (salaries, subsidies, interest). No long-term asset/liability change.' },
          { title: 'Capital Account (L-T impact)', description: 'Capital Receipts (Borrowings, Disinvestment, Loan Recovery) vs Capital Expenditure (infrastructure, loan repayments). Changes asset/liability position.' }
        ]
      }
    ]
  },
  {
    id: 'u4-t3',
    title: 'Budget Deficits — Revenue, Fiscal and Primary',
    description: 'Formulae, implications, and relationships between the three measures of government deficit, and the concept of government debt.',
    content: [
      {
        type: 'concept',
        title: 'Revenue Deficit (RD)',
        text: 'Excess of Revenue Expenditure over Revenue Receipts (RE − RR).',
        points: [
          '**Implication**: Indicates government **dissaving** — borrowing to fund current consumption.',
          '**Result**: Future burden on taxpayers without creating any assets.'
        ],
        tags: ['CURRENT ACCOUNT GAP']
      },
      {
        type: 'concept',
        title: 'Fiscal Deficit (FD)',
        text: 'Total Expenditure − (Revenue Receipts + Non-Debt Capital Receipts).',
        points: [
          '**Identity**: Fiscal Deficit ≡ **Total Borrowings** required for the year.',
          '**Implication**: High FD can lead to inflation (if money-financed) and crowding out of private investment.'
        ],
        tags: ['TOTAL BORROWING']
      },
      {
        type: 'concept',
        title: 'Primary Deficit (PD)',
        text: 'Fiscal Deficit − Interest Payments on past debt.',
        points: [
          '**Significance**: Shows borrowing needs for purposes *other than* servicing old debt.',
          '**PD = 0**: Means the govt is only borrowing to pay interest on past loans.'
        ],
        tags: ['FRESH BORROWING']
      },
      {
        type: 'warning',
        title: 'The Debt Trap',
        text: 'A vicious cycle where the govt borrows to pay interest on past interest, leading to unsustainable debt levels.',
        tags: ['RISK']
      }
    ],
    visualizations: [
      {
        id: 'v-deficit-formulas',
        title: 'Three Deficit Measures — Formulae and Implications',
        type: 'table',
        data: {
          headers: ['Deficit', 'Full Form', 'Formula', 'What It Indicates', 'Key Implication'],
          rows: [
            ['RD', 'Revenue Deficit', 'Revenue Expenditure − Revenue Receipts', 'Govt\'s current account gap — dissaving', 'Borrowing for consumption, not investment — unhealthy'],
            ['FD', 'Fiscal Deficit', 'Total Expenditure − (Revenue Receipts + Non-Debt Capital Receipts)', 'Total borrowing requirement for the year', 'FD ≡ Borrowings; inflationary if money-financed'],
            ['PD', 'Primary Deficit', 'Fiscal Deficit − Interest Payments', 'Borrowing beyond debt servicing', 'PD = 0 means only borrowing to pay interest; PD > 0 = fresh borrowing for spending']
          ]
        }
      },
      {
        id: 'v-deficit-example',
        title: 'Worked Example — Calculating All Three Deficits',
        type: 'table',
        data: {
          headers: ['Item', 'Amount (₹ Crore)'],
          rows: [
            ['Revenue Receipts (Tax + Non-Tax)', '600'],
            ['Revenue Expenditure (Salaries, Subsidies, Interest = 150)', '800'],
            ['Revenue Deficit (RD) = RE − RR = 800 − 600', '200'],
            ['Capital Expenditure', '300'],
            ['Total Expenditure = RE + CE = 800 + 300', '1,100'],
            ['Non-Debt Capital Receipts (Disinvestment + Recovery of Loans)', '100'],
            ['Fiscal Deficit (FD) = Total Exp − (RR + Non-Debt CR) = 1,100 − (600 + 100)', '400'],
            ['Interest Payments (already included in Revenue Expenditure above)', '150'],
            ['Primary Deficit (PD) = FD − Interest = 400 − 150', '250']
          ]
        }
      },
      {
        id: 'v-debt-deficit',
        title: 'Debt vs Deficit — Stock and Flow',
        type: 'table',
        data: {
          headers: ['Concept', 'Type', 'Definition', 'Relationship'],
          rows: [
            ['Deficit', 'FLOW', 'Excess of expenditure over receipts in ONE year', 'Each year\'s deficit adds to the stock of debt'],
            ['Debt (National Debt)', 'STOCK', 'Total accumulated borrowings of government over all past years', 'Debt = Sum of all past deficits (minus surpluses)'],
            ['Interest Payment', 'FLOW', 'Annual cost of servicing accumulated debt', 'Higher debt → higher interest payment → higher revenue expenditure → higher revenue deficit']
          ]
        }
      },
      {
        id: 'v-fiscal-impact',
        title: 'Fiscal Policy Impact on Aggregate Demand',
        type: 'table',
        data: {
          headers: ['Situation', 'Policy Type', 'Tools Used', 'Effect on Aggregate Demand', 'Budget Type'],
          rows: [
            ['Inflation (Excess Demand)', 'Contractionary Fiscal Policy', 'Increase taxes (T) + Reduce Govt Expenditure (G)', 'Aggregate Demand FALLS → Inflationary gap closes', 'Surplus Budget'],
            ['Recession (Deficient Demand)', 'Expansionary Fiscal Policy', 'Reduce taxes (T) + Increase Govt Expenditure (G) + Deficit Financing', 'Aggregate Demand RISES → Deflationary gap closes', 'Deficit Budget']
          ]
        }
      }
    ]
  },
  {
    id: 'u4-t4',
    title: 'Fiscal Multipliers and Automatic Stabilisers',
    description: 'The Government Expenditure Multiplier, Tax Multiplier, Balanced Budget Multiplier, and how taxes act as automatic stabilisers.',
    content: [
      {
        type: 'concept',
        title: 'Fiscal Multipliers',
        text: 'Changes in govt spending or taxes lead to a multiplied effect on national income.',
        points: [
          '**Govt Expenditure Multiplier (k_G)**: 1 / (1 − MPC). Direct impact on AD.',
          '**Tax Multiplier (k_T)**: −MPC / (1 − MPC). Indirect impact via consumption.',
          '**Balanced Budget Multiplier (k_BB)**: k_G + k_T = 1. Equal ↑G and ↑T raises income by exactly ΔG.'
        ],
        tags: ['MULTIPLIERS']
      },
      {
        type: 'concept',
        title: 'Automatic Stabilisers',
        text: 'System features that automatically adjust AD without deliberate policy changes.',
        points: [
          '**Progressive Taxes**: Revenues rise automatically in booms and fall in recessions.',
          '**Result**: Cushions the economy against extreme fluctuations.'
        ],
        tags: ['STABILISERS']
      }
    ],
    visualizations: [
      {
        id: 'v-multipliers',
        title: 'Three Fiscal Multipliers — Formulae and Comparison',
        type: 'table',
        data: {
          headers: ['Multiplier', 'Formula', 'MPC = 0.8 Example', 'Why Different?'],
          rows: [
            ['Government Expenditure Multiplier (k_G)', '1 / (1 − MPC) = 1 / MPS', '1 / 0.2 = 5', 'Direct addition to Aggregate Demand — full ΔG becomes income'],
            ['Tax Multiplier (k_T)', '−MPC / (1 − MPC) = −MPC / MPS', '−0.8 / 0.2 = −4', 'Indirect — consumers only spend MPC fraction of tax cut; rest saved'],
            ['Balanced Budget Multiplier (k_BB)', 'k_G + k_T = 1 (always)', '5 + (−4) = 1', 'Equal G and T changes always give net multiplier of 1']
          ]
        }
      },
      {
        id: 'v-auto-stabilisers',
        title: 'Automatic Stabilisers — How Taxes Dampen Economic Fluctuations',
        type: 'table',
        data: {
          headers: ['Phase', 'What Happens to Income?', 'Tax Revenue Effect', 'Effect on Disposable Income', 'Stabilising Impact'],
          rows: [
            ['BOOM (Inflation)', 'National income RISES', 'Tax revenue automatically RISES (progressive tax → higher brackets)', 'Disposable income rises by LESS than pre-tax income', 'Dampens consumption boom → prevents overheating'],
            ['RECESSION', 'National income FALLS', 'Tax revenue automatically FALLS', 'Disposable income falls by LESS than pre-tax income', 'Cushions consumption fall → reduces recession depth'],
            ['Mathematical Effect', 'With proportional tax t', 'Effective MPC = MPC × (1 − t)', 'Multiplier = 1 / [1 − MPC(1−t)]', 'Smaller multiplier = economy less sensitive to demand shocks']
          ]
        }
      }
    ]
  },
  {
    id: 'u4-m1',
    title: 'Master Interrelationships — Government Budget',
    description: 'The core connections between budget objectives, classifications, and deficit impacts.',
    content: [
      {
        type: 'concept',
        title: 'The Budget Logic Chain',
        points: [
          '**Revenue Deficit** → Dissaving → Forces **Capital borrowing** (Fiscal Deficit).',
          '**Fiscal Deficit** → Increases **Government Debt** → Higher **Interest Payments**.',
          '**Interest Payments** → Increases **Revenue Expenditure** → Worsens Revenue Deficit.'
        ],
        tags: ['UNIT SUMMARY']
      }
    ],
    visualizations: []
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
