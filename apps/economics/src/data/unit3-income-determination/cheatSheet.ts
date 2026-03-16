import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u3-cs1',
    title: '📐 Functional Formulas (Keynesian Model)',
    points: [
      '**Consumption Function:** **C = C_bar + bY**. (C_bar = Autonomous Consumption, b = MPC).',
      '**Saving Function:** **S = -C_bar + (1-b)Y**. (-C_bar = Autonomous Saving, 1-b = MPS).',
      '**Fundamental Identity:** **MPC + MPS = 1**. (Change in income is either consumed or saved).',
      '**Ratio Identity:** **APC + APS = 1**. (Total income is either consumed or saved).',
      '**APC = C/Y**; **APS = S/Y**; **MPC = ΔC/ΔY**; **MPS = ΔS/ΔY**.'
    ]
  },
  {
    id: 'u3-cs2',
    title: '🚀 Investment Multiplier (k)',
    points: [
      '**Definition:** **k = ΔY / ΔI**. Ratio of change in income to change in investment.',
      '**MPC Relation:** **k = 1 / (1 - MPC)**. Directly related to MPC. Higher spending -> Higher Multiplier.',
      '**MPS Relation:** **k = 1 / MPS**. Inversely related to MPS. Higher leakage -> Lower Multiplier.',
      '**Max/Min Value:** Max is **Infinity** (MPC=1). Min is **1** (MPC=0).',
      '**Multi-Stage Process:** Initial investment creates income for some, which is spent to create income for others, leading to a total increase > initial.'
    ]
  },
  {
    id: 'u3-cs3',
    title: '⚖️ Equilibrium & Effective Demand',
    points: [
      '**AD = AS Approach:** Planned spending equals planned output. **Y = C + I**.',
      '**S = I Approach:** Planned Leakage (Saving) equals Planned Injection (Investment).',
      '**Effective Demand:** Level of AD where it is exactly met by AS. All output is sold.',
      '**Adjustment Mechanism (AD > AS):** Inventories fall below desired level → Producers increase output and employment until equality.',
      '**Adjustment Mechanism (AS > AD):** Inventories rise (unintended) → Producers cut output and employment to restore balance.',
      '**APC + APS = 1 Logic:** Since Total Income (Y) = Consumption (C) + Saving (S), dividing by Y gives C/Y + S/Y = 1.'
    ]
  },
  {
    id: 'u3-cs4',
    title: '🛑 Excess & Deficient Demand',
    points: [
      '**Full Employment:** Everyone willing to work at current wage has a job. (Excludes structural/frictional).',
      '**Excess Demand:** **AD > AS** at full employment. Leads to **Inflationary Gap**.',
      '**Deficient Demand:** **AD < AS** at full employment. Leads to **Deflationary Gap**.',
      '**Inflationary Gap:** Vertical distance by which actual AD exceeds AD required for full employment.',
      '**Deflationary Gap:** Vertical distance by which actual AD falls short of AD required for full employment.'
    ]
  },
  {
    id: 'u3-cs5',
    title: '🛠️ Fiscal Policy Measures (Govt)',
    points: [
      '**Govt Expenditure:** Increase to fight Deficient Demand; Decrease to fight Excess Demand.',
      '**Taxes:** Decrease (boosts Disposable Income) for Deficient Demand; Increase for Excess Demand.',
      '**Public Borrowing:** Increase to reduce private spending during Inflation.',
      '**Deficit Financing:** Printing money/Borrowing from RBI to boost AD during Recession.'
    ]
  },
  {
    id: 'u3-cs6',
    title: '🏦 Monetary Policy Measures (RBI)',
    points: [
      '**Repo/Bank Rate:** Decrease to fight Deficient Demand (cheap credit); Increase for Excess Demand.',
      '**OMO:** Buy securities (inject cash) for Deficient; Sell (absorb cash) for Excess.',
      '**CRR/SLR:** Decrease to expand credit for Deficient; Increase to restrict for Excess.',
      '**Margin Requirement:** Decrease to encourage borrowing; Increase to restrict.'
    ]
  },
  {
    id: 'u3-cs7',
    title: '🧠 Advanced Concepts',
    points: [
      '**Ex-Ante:** Planned/Intended values. Models are built on these.',
      '**Ex-Post:** Actual/Realized values. Always equal (S=I) due to inventory changes.',
      '**Induced vs Autonomous:** Induced depends on Income (bY); Autonomous does not (C_bar, I, G).',
      '**Paradox of Thrift:** If everyone saves more, AD falls, Income falls, and total savings might decrease.',
      '**Investment:** Demand for capital goods. Assumed **Autonomous** in this model.'
    ]
  },
  {
    id: 'u3-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**AD / AS:** Aggregate Demand / Aggregate Supply.',
      '**MPC / MPS:** Marginal Propensity to Consume / Save.',
      '**APC / APS:** Average Propensity to Consume / Save.',
      '**k:** Investment Multiplier.',
      '**Y:** National Income.'
    ]
  },
  {
    id: 'u3-cs8',
    title: '🎯 SQP Traps: Income Determination',
    points: [
      '**The APC Trap:** APC can be **> 1** (before break-even), but MPC can never be > 1.',
      '**The APS/APS Trap:** APS can be **Negative** (dissaving), but MPS can never be negative.',
      '**Multiplier vs MPS:** Don\'t confuse k = 1/(1-MPC) with k = 1/MPS. They are the same, but use the one given in the numerical.',
      '**Parallel Curves:** AD and C curves are parallel because the difference is constant **Autonomous Investment**.'
    ]
  }
];
