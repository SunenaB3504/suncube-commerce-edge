import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'u3-t1',
    title: 'Aggregate Demand, Aggregate Supply and Propensities',
    description: 'Core concepts of aggregate demand, aggregate supply, and the functional relationship between consumption, saving, and income.',
    content: [
      {
        type: 'concept',
        title: 'Aggregate Demand (AD)',
        text: 'Total value of final goods and services that all sectors plan to buy at a given income level.',
        points: [
          '**Ex-ante concept**: Refers to planned/intended spending, not actual.',
          '**Two-sector model**: AD = C + I.',
          '**Four-sector model**: AD = C + I + G + (X − M).'
        ],
        tags: ['DEMAND']
      },
      {
        type: 'concept',
        title: 'Aggregate Supply (AS)',
        text: 'Total money value of final goods and services producers are willing to supply. AS is identical to **National Income (Y)**.',
        points: [
          '**Components**: AS = C + S (Income is either consumed or saved).',
          '**45° Line**: In a graph, AS is represented by a 45-degree line from the origin.'
        ],
        tags: ['SUPPLY']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'EX-ANTE', text: 'Planned or intended values at the start of the period.' },
          { label: 'EX-POST', text: 'Actual or realised values at the end of the period. (Ex-post S always equals Ex-post I).' }
        ]
      },
      {
        type: 'concept',
        title: 'Consumption Function',
        text: 'Functional relationship between consumption (C) and income (Y).',
        points: [
          '**Equation**: C = C̄ + bY.',
          '**C̄ (Autonomous)**: Consumption at zero income (dissaving).',
          '**b (MPC)**: Marginal Propensity to Consume (slope of the curve).'
        ],
        tags: ['CONSUMPTION']
      },
      {
        type: 'warning',
        title: 'APC and MPC Properties',
        points: [
          '**APC (Average)**: C/Y. Falls as income rises; >1 during dissaving.',
          '**MPC (Marginal)**: ΔC/ΔY. Always between 0 and 1.',
          '**Identity**: APC + APS = 1 and MPC + MPS = 1.'
        ],
        tags: ['PROPENSITIES']
      }
    ],
    visualizations: [
      {
        id: 'v-propensity-table',
        title: 'APC, MPC, APS, MPS — Formulas and Properties at a Glance',
        type: 'table',
        data: {
          headers: ['Propensity', 'Full Form', 'Formula', 'Range', 'Key Property'],
          rows: [
            ['APC', 'Average Propensity to Consume', 'C / Y', '>1, =1, or <1', 'FALLS as income rises; >1 at dissaving levels'],
            ['MPC', 'Marginal Propensity to Consume', 'ΔC / ΔY', '0 to 1', 'CANNOT exceed 1; constant on linear function; = slope b'],
            ['APS', 'Average Propensity to Save', 'S / Y', 'Can be negative', 'RISES as income rises; negative below break-even'],
            ['MPS', 'Marginal Propensity to Save', 'ΔS / ΔY', '0 to 1', 'MPS = 1 − MPC; slope of saving function'],
            ['—', 'IDENTITY 1', 'MPC + MPS = 1', 'Always', 'Every extra ₹1 of income is consumed or saved'],
            ['—', 'IDENTITY 2', 'APC + APS = 1', 'Always', 'All income is either consumed or saved']
          ]
        }
      },
      {
        id: 'v-cons-curve',
        title: 'The Consumption Curve — Key Points',
        type: 'process',
        data: [
          { title: 'Positive Y-Intercept (C̄)', description: 'Curve starts ABOVE origin at autonomous consumption C̄ — minimum consumption at zero income (financed by dissaving).' },
          { title: 'Upward Slope (MPC = b)', description: 'Positive relationship: as income rises, consumption rises. The slope equals MPC.' },
          { title: 'Break-Even Point (C = Y)', description: 'Where the C-curve crosses the 45° AS line. S = 0 here. Left of this: C > Y (Dissaving). Right: C < Y (Saving).' },
          { title: 'AD Curve = C + Ī', description: 'AD curve is parallel to C-curve, shifted UP by autonomous investment (Ī). The vertical gap between AD and C equals Ī (constant).' }
        ]
      },
      {
        id: 'u3-v1-t1',
        title: 'Aggregate Demand Schedule (Two-Sector: C + I)',
        type: 'table',
        data: {
          headers: ['Income/AS (Y)', 'Consumption (C)', 'Investment (I)', 'AD (C + I)', 'Saving (S = Y − C)', 'AD vs AS'],
          rows: [
            ['0', '40', '20', '60', '−40', 'AD > AS (output rises)'],
            ['100', '120', '20', '140', '−20', 'AD > AS (output rises)'],
            ['200', '200', '20', '220', '0', 'AD > AS (output rises)'],
            ['300', '280', '20', '300', '20', 'AD = AS → EQUILIBRIUM'],
            ['400', '360', '20', '380', '40', 'AD < AS (output falls)']
          ]
        }
      },
      {
        id: 'v-ad-curve',
        title: 'Figure 4.4: Aggregate Demand Curve',
        type: 'image',
        data: { src: '/assets/images/ncert/context_1_fig_4_4_aggregate_demand.png', alt: 'Aggregate Demand Curve' },
        aiExplanation: [
          '**What:** The Aggregate Demand (AD) curve shows the total planned spending on domestic goods and services at different levels of national income.',
          '**Why:** To understand how much households (Consumption) and firms (Investment) intend to spend in the economy, which ultimately determines the production output.',
          '**How to understand:** Look at the X-axis (National Income, Y) and the Y-axis (Aggregate Demand, C + I). The AD line starts above origin at autonomous spending (C̄ + Ī). The upward slope reflects MPC — as income rises, consumption (and therefore AD) rises.',
          '**Importance in daily life:** It reflects collective consumer behavior. When households feel confident and spend more, AD increases, signaling businesses to produce more and hire more people, driving economic growth.'
        ]
      },
      {
        id: 'v-45-line',
        title: 'Figure 4.5: Aggregate Supply Curve (45-Degree Line)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_2_fig_4_5_aggregate_supply.png', alt: 'Aggregate Supply 45-Degree Line' },
        aiExplanation: [
          '**What:** The 45-degree line represents Aggregate Supply (AS) — the total output = total income identity.',
          '**Why:** At any point on a 45° line, the Y-axis value equals the X-axis value. So AS (Y-axis) = National Income (X-axis) — illustrating that all output becomes income.',
          '**How to understand:** Any point on this line satisfies AS = Y. The equilibrium must lie on this line AND on the AD curve — the intersection is the equilibrium income.',
          '**Importance in daily life:** This line is the benchmark — the economy gravitates toward the point where actual spending matches actual output.'
        ]
      }
    ]
  },
  {
    id: 'u3-t2',
    title: 'Equilibrium Income Determination and Investment Multiplier',
    description: 'How national income is determined, two approaches to equilibrium, and the mechanism and working of the Investment Multiplier.',
    content: [
      {
        type: 'concept',
        title: 'Macroeconomic Equilibrium',
        text: 'The level of income where planned spending equals planned output. Two equivalent approaches:',
        points: [
          '**AD = AS Approach**: Planned spending (C+I) equals planned production (Y).',
          '**S = I Approach**: Planned saving equals planned investment.'
        ],
        tags: ['EQUILIBRIUM']
      },
      {
        type: 'warning',
        title: 'Adjustment Mechanism',
        points: [
          'If AD > AS → Inventories fall → Firms produce more → Income rises.',
          'If AD < AS → Inventories pile up → Firms produce less → Income falls.'
        ],
        tags: ['INVENTORY']
      },
      {
        type: 'concept',
        title: 'Investment Multiplier (k)',
        text: 'Ratio of change in income (ΔY) to initial change in investment (ΔI).',
        points: [
          '**Formula**: k = ΔY / ΔI = 1 / (1 − MPC) = 1 / MPS.',
          '**Logic**: One person\'s spending is another person\'s income (Chain reaction).'
        ],
        tags: ['MULTIPLIER']
      },
      {
        type: 'tip',
        title: 'Multiplier Range',
        text: 'The multiplier always lies between **1** and **Infinity**.',
        points: [
          'If MPC = 0 → k = 1 (Minimum).',
          'If MPC = 1 → k = ∞ (Theoretical Maximum).'
        ]
      }
    ],
    visualizations: [
      {
        id: 'u3-v2-t1',
        title: 'Macroeconomic Equilibrium Schedule — AD = AS and S = I',
        type: 'table',
        data: {
          headers: ['Income/AS (Y)', 'AD (C + I)', 'AD vs AS', 'Saving (S)', 'Investment (I)', 'S vs I'],
          rows: [
            ['100', '140', 'AD > AS → Output rises', '−20', '20', 'S < I → Output rises'],
            ['200', '220', 'AD > AS → Output rises', '0', '20', 'S < I → Output rises'],
            ['300', '300', 'AD = AS → EQUILIBRIUM ✅', '20', '20', 'S = I → EQUILIBRIUM ✅'],
            ['400', '380', 'AD < AS → Output falls', '40', '20', 'S > I → Output falls']
          ]
        }
      },
      {
        id: 'v-multiplier',
        title: 'Investment Multiplier Chain Reaction (MPC = 0.8, ΔI = ₹1,000)',
        type: 'table',
        data: {
          headers: ['Round', 'Change in Investment (ΔI)', 'Change in Income (ΔY)', 'Change in Consumption (ΔC = 0.8 × ΔY)', 'Change in Saving (ΔS = 0.2 × ΔY)'],
          rows: [
            ['Round 1', '1,000', '1,000', '800', '200'],
            ['Round 2', '0', '800', '640', '160'],
            ['Round 3', '0', '640', '512', '128'],
            ['Round 4', '0', '512', '409.6', '102.4'],
            ['… continuing', '…', '…', '…', '…'],
            ['TOTAL', '1,000', '5,000 (= 1,000 × 1/0.2)', '4,000', '1,000']
          ]
        }
      },
      {
        id: 'v-multiplier-range',
        title: 'Multiplier Range — MPC, MPS and k',
        type: 'table',
        data: {
          headers: ['MPC', 'MPS (= 1 − MPC)', 'Multiplier k (= 1/MPS)', 'Interpretation'],
          rows: [
            ['0', '1', '1 (Minimum)', 'No induced spending — ₹100 investment = ₹100 income only'],
            ['0.5', '0.5', '2', '₹100 investment → ₹200 income'],
            ['0.8', '0.2', '5', '₹100 investment → ₹500 income'],
            ['0.9', '0.1', '10', '₹100 investment → ₹1,000 income'],
            ['1', '0', '∞ (Maximum)', 'All income spent — chain never ends (theoretical)']
          ]
        }
      },
      {
        id: 'v-ad-as-equilibrium',
        title: 'Figure 4.6: Equilibrium Income Determination (AD = AS)',
        type: 'image',
        data: { src: '/assets/images/ncert/context_3_fig_4_6_equilibrium.png', alt: 'Macroeconomic Equilibrium Graph' },
        aiExplanation: [
          '**What:** This graph shows Point E — the equilibrium where the AD curve crosses the 45° AS line.',
          '**Why:** At E, total planned spending equals total production — no tendency to change. To left of E: AD > AS, inventories fall → output rises. To right: AS > AD, inventories pile up → output falls.',
          '**How to understand:** The economy automatically moves toward E via inventory adjustment.',
          '**Importance:** This mechanism causes economic cycles — when consumer confidence falls (AD falls), the economy moves left, causing unemployment. Policy must shift AD back up.'
        ]
      },
      {
        id: 'v-fixed-price-model',
        title: 'Figure 4.7: Multiplier Effect — Shift in Equilibrium',
        type: 'image',
        data: { src: '/assets/images/ncert/context_4_fig_4_7_equilibrium_fixed.png', alt: 'Changes in Equilibrium with shift in AD' },
        aiExplanation: [
          '**What:** Shows how ΔI shifts AD1 → AD2, moving equilibrium from E1 (Y1*) to E2 (Y2*).',
          '**Why:** Demonstrates the multiplier — the income increase (Y2* − Y1*) is LARGER than the investment increase (gap between AD curves).',
          '**How to understand:** The horizontal distance ΔY is much longer than the vertical shift ΔI. The ratio ΔY/ΔI = multiplier k.',
          '**Real-life example:** Government spends ₹100 crore on highways → construction workers earn income → they spend at shops → shopkeepers earn → total income rises by ₹500 crore (if k = 5).'
        ]
      }
    ]
  },
  {
    id: 'u3-t3',
    title: 'Employment, Demand Gaps and Policy Corrections',
    description: 'Full employment, types of unemployment, excess and deficient demand, and the fiscal and monetary tools to correct demand gaps.',
    content: [
      {
        type: 'comparison',
        subPoints: [
          { label: 'FULL EMPLOYMENT', text: 'All willing and able workers have jobs. Does not mean zero unemployment (Frictional/Structural exist).' },
          { label: 'INVOLUNTARY UNEMPLOYMENT', text: 'Workers willing to work at prevailing wage but cannot find jobs due to low AD.' }
        ]
      },
      {
        type: 'concept',
        title: 'Excess Demand (Inflationary Gap)',
        text: 'When AD > AS at full employment. Leads to inflation without increasing real output.',
        points: [
          '**Gap**: Amount by which actual AD exceeds AD needed for full employment.',
          '**Result**: Prices rise; no change in real output.'
        ],
        tags: ['INFLATION']
      },
      {
        type: 'concept',
        title: 'Deficient Demand (Deflationary Gap)',
        text: 'When AD < AS at full employment. Leads to unintended inventories and unemployment.',
        points: [
          '**Gap**: Amount by which actual AD falls below AD needed for full employment.',
          '**Result**: Output, income, and employment fall.'
        ],
        tags: ['DEFLATION']
      },
      {
        type: 'warning',
        title: 'Paradox of Thrift',
        text: 'If everyone tries to save more, AD falls, leading to lower total income and potentially lower total savings.',
        tags: ['KEYNESIAN PARADOX']
      },
      {
        type: 'concept',
        title: 'Policy Corrections',
        points: [
          '**Fiscal Policy**: Change Taxes (T) and Govt Spending (G). (Expansionary: ↓T, ↑G).',
          '**Monetary Policy**: Change Repo Rate, CRR, OMO. (Expansionary: ↓Rates, Buy Securities).',
          '**Deficit Financing**: Printing money or borrowing to fund spending during recession.'
        ],
        tags: ['CORRECTIVE MEASURES']
      }
    ],
    visualizations: [
      {
        id: 'v-employment-types',
        title: 'Types of Unemployment',
        type: 'table',
        data: {
          headers: ['Type', 'Definition', 'Cause', 'Policy Solution'],
          rows: [
            ['Involuntary Unemployment', 'Willing and able to work at prevailing wage but no job found', 'Insufficient Aggregate Demand in economy', 'Expand AD via fiscal (↑G, ↓T) and monetary (↓Repo Rate) policy'],
            ['Voluntary Unemployment', 'Unwilling to work at prevailing wage even though jobs available', 'Personal choice — expect higher wages or prefer leisure', 'Not a macroeconomic policy concern'],
            ['Structural Unemployment', 'Skills don\'t match available jobs', 'Technological change, structural shifts in economy', 'Skill training, education, retraining programmes'],
            ['Frictional Unemployment', 'Between jobs — searching for new employment', 'Normal job market transitions', 'Better job-matching services; not eliminated by AD policy']
          ]
        }
      },
      {
        id: 'v-demand-gaps',
        title: 'Excess Demand vs Deficient Demand — Complete Comparison',
        type: 'table',
        data: {
          headers: ['Feature', 'Excess Demand (Inflationary Gap)', 'Deficient Demand (Deflationary Gap)'],
          rows: [
            ['Situation', 'AD > AS at full employment level', 'AD < AS at full employment level'],
            ['Effect on Output', 'No rise in output (already at full capacity)', 'Output falls (producers cut back due to unsold goods)'],
            ['Effect on Prices', 'Prices RISE — Inflation', 'Prices FALL — Deflation'],
            ['Effect on Employment', 'Already at full employment', 'Employment FALLS — recession'],
            ['Effect on Inventories', 'Unintended DEPLETION of inventories', 'Unintended ACCUMULATION of inventories'],
            ['Fiscal Correction', '↑ Taxes + ↓ Government Expenditure (Budget Surplus)', '↓ Taxes + ↑ Government Expenditure + Deficit Financing'],
            ['Monetary Correction', '↑ Repo Rate + ↑ CRR + RBI sells securities (Open Market Operations)', '↓ Repo Rate + ↓ CRR + RBI buys securities (Open Market Operations)']
          ]
        }
      },
      {
        id: 'v-saving-derive',
        title: 'Saving Function — Key Points',
        type: 'process',
        data: [
          { title: 'Negative Y-Intercept (−C̄)', description: 'Saving starts at −C̄ on Y-axis — at zero income, saving is negative (dissaving equal to autonomous consumption C̄).' },
          { title: 'Upward Slope (MPS)', description: 'Slope of saving curve = Marginal Propensity to Save (MPS) = 1 − MPC. As income rises, saving rises.' },
          { title: 'Break-Even Point (S = 0)', description: 'S = 0 corresponds to the break-even on the consumption curve (where C = Y). Y* = C̄/MPS at this point.' },
          { title: 'Positive Saving Zone', description: 'To the right of break-even: S > 0 (income exceeds consumption). APS rises.' }
        ]
      },
      {
        id: 'v-paradox-thrift',
        title: 'Figure 4.8: Paradox of Thrift',
        type: 'image',
        data: { src: '/assets/images/ncert/context_5_fig_4_8_paradox_thrift.png', alt: 'Paradox of Thrift Graph' },
        aiExplanation: [
          '**What:** Shows that when all households save MORE (spend less), equilibrium income falls from Y1* to Y2* — and total actual savings may not increase.',
          '**Why:** Demonstrates that individual rationality ≠ collective rationality. If everyone saves instead of spends, businesses lose revenue → cut production → lay off workers → incomes fall → people save even less in absolute terms.',
          '**How to understand:** AD1 shifts down to AD2 (everyone consumes less). New equilibrium E2 is at lower income Y2*. The Saving curve shifts up, but the new equilibrium saving at E2 equals investment (= same as before). Total savings unchanged — but income is lower.',
          '**Real-life example:** COVID-19 recession — fear caused everyone to cut spending → shops shut → workers unemployed → incomes fell → total economic activity collapsed. Government stimulus (AD injection) was needed to break the cycle.'
        ]
      }
    ]
  },
  {
    id: 'u3-m2',
    title: 'Master Interrelationships — Income Determination',
    description: 'The core connections between the Multiplier, MPC, and Demand gaps.',
    content: [
      {
        type: 'concept',
        title: 'The Multiplier-Gap Chain',
        points: [
          '**High MPC** → Higher Multiplier → Greater impact of govt spending on AD.',
          '**Deficient Demand** → Use Expansionary Policy (↓T, ↑G) → Multiplier boosts final income.',
          '**Excess Demand** → Use Contractionary Policy to close the Inflationary Gap.'
        ],
        tags: ['UNIT SUMMARY']
      }
    ],
    visualizations: []
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
