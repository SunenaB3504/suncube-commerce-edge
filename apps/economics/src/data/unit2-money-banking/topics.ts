import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';

export const TOPICS: TheoryTopic[] = [
  {
    id: 'money-functions',
    title: 'Money — Definition, Functions and Classification',
    description: 'What money is, the roles it plays in a modern economy, and how different types of money are classified.',
    content: [
      {
        type: 'concept',
        title: 'What is Money?',
        text: 'Money is anything that is **generally accepted** as a medium of exchange, a measure of value, a store of value, and a standard of deferred payment.',
        tags: ['DEFINITION']
      },
      {
        type: 'concept',
        title: 'Primary Functions',
        points: [
          '**Medium of Exchange**: Facilitates buying and selling; solves the "double coincidence of wants".',
          '**Unit of Account**: Common measuring rod for pricing all goods and services.'
        ],
        tags: ['CORE FUNCTIONS']
      },
      {
        type: 'concept',
        title: 'Secondary Functions',
        points: [
          '**Store of Value**: Holds purchasing power over time (vulnerable to inflation).',
          '**Standard of Deferred Payment**: Basis for future payments like loans and EMIs.'
        ],
        tags: ['EVOLVED FUNCTIONS']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'FULL-BODIED MONEY', text: 'Commodity value = Face value (e.g., gold coins).' },
          { label: 'CREDIT MONEY', text: 'Face value > Commodity value (e.g., modern ₹500 note).' }
        ]
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'FIAT MONEY', text: 'Issued by government decree; no intrinsic value (e.g., all currency notes).' },
          { label: 'FIDUCIARY MONEY', text: 'Accepted based on trust; not legal tender (e.g., cheques).' }
        ]
      },
      {
        type: 'warning',
        title: 'Legal Tender',
        text: 'Money that cannot be legally refused for settlement of debt.',
        points: [
          '**Unlimited**: Paper notes (can pay any amount).',
          '**Limited**: Coins (legal limit on payment amount).'
        ],
        tags: ['STATUTORY STATUS']
      },
      {
        type: 'concept',
        title: 'Central Bank Digital Currency (CBDC)',
        text: 'A digital form of paper currency issued by the Central Bank (RBI in India).',
        points: [
          '**Nature**: It is a legal tender, a liability of the Central Bank, and an asset for the public.',
          '**Benefits**: Reduced dependency on cash, lower transaction costs, and reduced settlement risk.',
          '**Risks**: Cyber-attacks, technology preparedness, and privacy concerns.'
        ],
        tags: ['MODERN MONEY', 'RBI']
      }
    ],
    visualizations: [
      {
        id: 'v-money-funcs',
        title: 'Four Functions of Money',
        type: 'table',
        data: {
          headers: ['Function', 'Category', 'What It Does', 'Barter Problem Solved'],
          rows: [
            ['Medium of Exchange', 'Primary', 'Facilitates buying and selling separately', 'Solves double coincidence of wants'],
            ['Unit of Account', 'Primary', 'Common measuring rod for all goods/services', 'Makes comparison easy — all prices in one unit'],
            ['Store of Value', 'Secondary', 'Holds wealth over time', 'Allows saving for future spending'],
            ['Standard of Deferred Payment', 'Secondary', 'Denominator for future debt obligations', 'Enables credit and lending contracts']
          ]
        }
      },
      {
        id: 'v-money-types',
        title: 'Classification of Money — Types and Examples',
        type: 'table',
        data: {
          headers: ['Classification Basis', 'Type 1', 'Type 2', 'Indian Example'],
          rows: [
            ['Intrinsic Value', 'Full-Bodied (commodity value = face value)', 'Credit Money (face value > commodity value)', 'Old gold coins vs ₹500 paper note'],
            ['Basis of Acceptance', 'Fiat Money (government decree)', 'Fiduciary Money (based on trust)', '₹100 note vs a personal cheque'],
            ['Legal Status', 'Legal Tender (cannot be refused)', 'Non-Legal Tender (can be refused)', 'Currency notes vs cheques'],
            ['Extent of Legal Tender', 'Unlimited Legal Tender (any amount)', 'Limited Legal Tender (up to a limit only)', 'Paper notes vs coins'],
            ['Modern Form', 'CBDC (Digital Rupee)', 'Issued by RBI (2022-23)', 'Digital equivalent of cash']
          ]
        }
      }
    ]
  },
  {
    id: 'money-demand',
    title: 'Demand for Money — Motives and Liquidity Preference',
    description: 'Why individuals and firms choose to hold liquid cash instead of interest-earning assets.',
    content: [
      {
        type: 'concept',
        title: 'Liquidity Preference',
        text: 'The desire to hold money (liquid cash) rather than other assets like bonds.',
        tags: ['KEYNESIAN THEORY']
      },
      {
        type: 'concept',
        title: 'The Three Motives',
        points: [
          '**Transaction Motive**: For day-to-day purchases (Directly related to income).',
          '**Precautionary Motive**: For unexpected emergencies (Related to income).',
          '**Speculative Motive**: As a store of value; depends on interest rate expectations.'
        ],
        tags: ['MOTIVATIONS']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'HIGH INTEREST RATE', text: 'Bond prices are LOW. People expect rates to fall/prices to rise. Buy bonds → Low money demand.' },
          { label: 'LOW INTEREST RATE', text: 'Bond prices are HIGH. People expect rates to rise/prices to fall. Hold cash → High money demand.' }
        ]
      },
      {
        type: 'warning',
        title: 'Liquidity Trap',
        text: 'A state where the interest rate is at its historical minimum floor.',
        points: [
          'Everyone expects interest rates to rise, so NO ONE buys bonds.',
          'Money demand becomes **infinitely elastic** (horizontal curve).',
          'Monetary policy becomes ineffective.'
        ],
        tags: ['POLICY DEADLOCK']
      }
    ],
    visualizations: [
      {
        id: 'v-motives-table',
        title: 'Three Motives for Holding Money',
        type: 'table',
        data: {
          headers: ['Motive', 'Purpose', 'Related To', 'Interest Rate Sensitivity'],
          rows: [
            ['Transaction Motive', 'Day-to-day purchases (income-expenditure gap)', 'Income (Y) — positive relation', 'NOT sensitive — interest rate does not affect daily spending needs'],
            ['Precautionary Motive', 'Emergency reserves against unexpected needs', 'Income (Y) — positive relation', 'Mostly NOT sensitive to interest rate'],
            ['Speculative Motive', 'Alternative to bonds — based on interest rate expectations', 'Interest Rate (r) — inverse relation', 'HIGHLY sensitive — inverse: high rate = low speculative demand']
          ]
        }
      },
      {
        id: 'v-spec-demand',
        title: 'Speculative Money Demand Curve — Key Points',
        type: 'process',
        data: [
          { title: 'Downward Slope', description: 'As Interest Rate (r) falls → Speculative Demand for Money (M^S_d) increases. People prefer money over falling bond prices.' },
          { title: 'Floor Rate (r_min)', description: 'The minimum rate below which the interest rate cannot fall — the historical floor.' },
          { title: 'Liquidity Trap Zone', description: 'At r_min, the curve becomes horizontal. Speculative demand for money is INFINITE — everyone holds only cash, no bonds.' },
          { title: 'Policy Implication', description: 'In a liquidity trap, monetary policy (printing more money) is ineffective — money just gets hoarded. Fiscal policy is more effective at this point.' }
        ]
      }
    ]
  },
  {
    id: 'u2-t1',
    title: 'Money Supply — Measures, High Powered Money, and Sources',
    description: 'How the total money supply in an economy is measured, categorised, and where it originates.',
    content: [
      {
        type: 'concept',
        title: 'Definition of Money Supply',
        text: 'Total stock of money (currency + deposits) held by the **public** at a point in time.',
        points: [
          '**Stock Concept**: Measured at a specific point in time.',
          '**Excludes**: Money held by government and inter-bank deposits.'
        ],
        tags: ['DEFINITION']
      },
      {
        type: 'concept',
        title: 'Sources of Money Supply',
        points: [
          '**RBI**: Sole authority for printing currency notes.',
          '**Government**: Issues ₹1 notes and all coins.',
          '**Commercial Banks**: Create credit money through lending.'
        ],
        tags: ['ISSUERS']
      },
      {
        type: 'concept',
        title: 'M1 to M4: Measures of Money Supply',
        points: [
          '**M1 (Narrowest)**: Currency + Demand Deposits (DD) + Other Deposits with RBI.',
          '**M2**: M1 + Savings with Post Office.',
          '**M3 (Broad Money)**: M1 + Net Time Deposits (FDs). Used by RBI for policy.',
          '**M4 (Broadest)**: M3 + Total Post Office Deposits (excl. NSC).'
        ],
        tags: ['LIQUIDITY HIERARCHY']
      },
      {
        type: 'concept',
        title: 'High Powered Money (H)',
        text: 'The **Monetary Base** created by the RBI.',
        points: [
          '**Formula**: H = Currency with Public + Cash Reserves of Banks.',
          'Any increase in H leads to a multiplied increase in total money supply.'
        ],
        tags: ['MONETARY BASE']
      },
      {
        type: 'tip',
        title: 'Money Multiplier',
        text: 'The ratio of total money supply to high-powered money.',
        points: ['Formula: 1 / Legal Reserve Ratio (LRR)']
      }
    ],
    visualizations: [
      {
        id: 'u2-v1',
        title: 'Hierarchy of Money Supply Measures (Reserve Bank of India)',
        type: 'table',
        data: {
          headers: ['Measure', 'Full Components', 'Liquidity', 'Common Name'],
          rows: [
            ['M1', 'Currency with Public (C) + Demand Deposits (DD) + Other Deposits with RBI (OD)', 'HIGHEST', 'Narrow Money'],
            ['M2', 'M1 + Post Office Savings Deposits', 'High', 'Narrow Money (broader)'],
            ['M3', 'M1 + Net Time Deposits (Fixed Deposits) with Commercial Banks', 'Lower', 'Broad Money — most used by RBI'],
            ['M4', 'M3 + Total Post Office Deposits (excluding National Savings Certificates)', 'LOWEST', 'Broadest Money']
          ]
        }
      },
      {
        id: 'u2-v1b',
        title: 'High Powered Money vs Money Supply',
        type: 'table',
        data: {
          headers: ['Concept', 'Formula', 'Controlled By', 'Key Feature'],
          rows: [
            ['High Powered Money (H)', 'Currency with Public (C) + Cash Reserves of Banks (CR)', 'Reserve Bank of India directly', 'The base upon which money supply is built'],
            ['Money Multiplier', '1 / Legal Reserve Ratio (LRR)', 'Indirectly by RBI (sets LRR)', 'Multiplies High Powered Money into total supply'],
            ['Total Money Supply (M)', 'H × Money Multiplier = H × (1/LRR)', 'Both RBI and Commercial Banks', 'Full money in circulation in the economy']
          ]
        }
      }
    ]
  },
  {
    id: 'u2-t2',
    title: 'Commercial Banks — Functions, Deposits and Credit Creation',
    description: 'How commercial banks accept deposits, create credit, and multiply money.',
    content: [
      {
        type: 'concept',
        title: 'Role of Commercial Banks',
        text: 'Profit-seeking institutions that bridge savers and borrowers by accepting deposits and advancing loans.',
        tags: ['BANKING CORE']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'PRIMARY DEPOSITS', text: 'Initial cash deposits made by the public.' },
          { label: 'DERIVATIVE DEPOSITS', text: 'Credit entries created by banks when granting loans (Secondary deposits).' }
        ]
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'DEMAND DEPOSITS', text: 'Withdrawable anytime via cheque/ATM (Savings, Current accounts). High liquidity.' },
          { label: 'TIME DEPOSITS', text: 'Fixed term (FDs). Higher interest, lower liquidity.' }
        ]
      },
      {
        type: 'concept',
        title: 'Credit Creation Process',
        text: 'Banks lend out a portion of deposits, keeping only the mandatory **LRR**.',
        points: [
          'Initial Deposit creates a chain of lending and re-depositing.',
          'Total Money Created = Initial Deposit x (1 / LRR).'
        ],
        tags: ['MONEY MULTIPLICATION']
      },
      {
        type: 'warning',
        title: 'Legal Reserve Ratio (LRR)',
        points: [
          '**CRR (Cash Reserve Ratio)**: Mandatory cash held with the **RBI**.',
          '**SLR (Statutory Liquidity Ratio)**: Liquid assets held by the bank **with itself** (Cash, Gold, Securities).'
        ],
        tags: ['STATUTORY RESERVES']
      }
    ],
    visualizations: [
      {
        id: 'v-banking-flow',
        title: 'Credit Creation Chain — Step by Step',
        type: 'process',
        data: [
          { title: 'Step 1: Primary Deposit', description: 'Public deposits ₹10,000 cash in Bank A — this is the primary deposit that starts the chain.' },
          { title: 'Step 2: Reserve Deduction (LRR = 20%)', description: 'Bank A keeps ₹2,000 as Cash Reserve Ratio (CRR) + Statutory Liquidity Ratio (SLR) — mandatory Legal Reserve Ratio.' },
          { title: 'Step 3: Credit Advance', description: 'Bank A lends the excess ₹8,000 to a borrower (e.g., a business). The borrower\'s account is credited — this is a derivative deposit.' },
          { title: 'Step 4: Re-deposit in Bank B', description: 'The borrower spends ₹8,000 which flows into Bank B as a new primary deposit. Bank B keeps 20% (₹1,600) and lends ₹6,400.' },
          { title: 'Chain Continues...', description: 'The process repeats through the entire banking system until the total deposits created = ₹10,000 × (1/0.20) = ₹50,000.' }
        ]
      },
      {
        id: 'v-deposits',
        title: 'Primary Deposits vs Derivative Deposits',
        type: 'table',
        data: {
          headers: ['Feature', 'Primary Deposits', 'Derivative Deposits (Secondary)'],
          rows: [
            ['Source', 'Cash deposited by public directly', 'Created by bank when granting loans'],
            ['Nature', 'Initial injection of funds', 'Account credit (not physical cash)'],
            ['Effect on Money Supply', 'Direct — increases bank\'s reserves', 'Multiplied — each loan creates new deposit'],
            ['Example', 'You deposit ₹10,000 salary in your bank', 'Bank credits Ravi\'s account with ₹8,000 loan']
          ]
        }
      }
    ]
  },
  {
    id: 'rbi-policy',
    title: 'Reserve Bank of India — Functions and Credit Control Tools',
    description: 'All functions of the Central Bank and the full range of quantitative and qualitative tools for monetary policy.',
    content: [
      {
        type: 'concept',
        title: 'The Reserve Bank of India (RBI)',
        text: 'The apex monetary institution of India (est. 1935), responsible for economic stability and currency management.',
        tags: ['CENTRAL BANK']
      },
      {
        type: 'concept',
        title: 'Core Functions of RBI',
        points: [
          '**Currency Authority**: Sole authority to issue notes (except ₹1 and coins).',
          '**Banker to Government**: Manages govt accounts, public debt, and advisory.',
          '**Banker\'s Bank**: Holds CRR, clearing house, and **Lender of Last Resort**.',
          '**Custodian of Forex**: Manages gold and foreign exchange reserves (≈$600B+).'
        ],
        tags: ['FUNCTIONS']
      },
      {
        type: 'concept',
        title: 'Quantitative Tools (Volume)',
        text: 'Tools that affect the total volume of credit in the economy.',
        points: [
          '**Bank Rate**: Long-term lending rate (no collateral).',
          '**Repo Rate**: Short-term lending rate (with collateral).',
          '**Reverse Repo**: Rate at which banks park surplus with RBI.',
          '**CRR/SLR**: Mandatory reserve ratios.',
          '**OMO**: Buying/selling government securities.'
        ],
        tags: ['MONETARY POLICY']
      },
      {
        type: 'concept',
        title: 'Qualitative Tools (Direction)',
        text: 'Tools that affect the direction or purpose of credit.',
        points: [
          '**Margin Requirement**: Market value of security − Loan amount.',
          '**Moral Suasion**: Persuasion and pressure on banks.',
          '**Selective Credit Control**: Targeted restrictions on specific sectors.'
        ],
        tags: ['TARGETED CONTROL']
      },
      {
        type: 'comparison',
        subPoints: [
          { label: 'DEAR MONEY POLICY', text: 'To control INFLATION. Increase rates (Repo, CRR, Bank Rate) and SELL securities.' },
          { label: 'CHEAP MONEY POLICY', text: 'To fight DEFLATION. Decrease rates and BUY securities.' }
        ]
      }
    ],
    visualizations: [
      {
        id: 'v-rbi-functions',
        title: 'Six Functions of the Reserve Bank of India',
        type: 'table',
        data: {
          headers: ['Function', 'What Reserve Bank of India Does', 'Key Fact'],
          rows: [
            ['Currency Authority', 'Sole authority to issue currency notes', 'Re. 1 notes and coins issued by Ministry of Finance'],
            ['Banker to Government', 'Manages government accounts, provides overdraft, raises public debt', 'Both Central and State governments'],
            ['Banker\'s Bank / Lender of Last Resort', 'Holds banks\' CRR deposits; provides emergency credit', 'All commercial banks maintain account with RBI'],
            ['Clearing House', 'Settles inter-bank claims by debiting/crediting bank accounts', 'No physical cash movement needed'],
            ['Custodian of Forex Reserves', 'Manages gold + foreign exchange + SDR reserves', 'India\'s forex reserves ≈ $600+ billion (2024)'],
            ['Controller of Credit', 'Regulates volume, cost, and direction of credit', 'Via Quantitative + Qualitative tools']
          ]
        }
      },
      {
        id: 'v-credit-tools',
        title: 'Credit Control Tools at a Glance',
        type: 'table',
        data: {
          headers: ['Tool', 'Type', 'To Control Inflation (Dear Money)', 'To Fight Deflation (Cheap Money)'],
          rows: [
            ['Bank Rate', 'Quantitative', 'INCREASE Bank Rate → banks\' borrowing costs rise → less credit', 'DECREASE Bank Rate → cheaper borrowing → more credit'],
            ['Repo Rate', 'Quantitative', 'INCREASE Repo Rate → banks pay more to borrow from RBI', 'DECREASE Repo Rate → cheaper for banks to borrow'],
            ['Reverse Repo Rate', 'Quantitative', 'INCREASE → banks park funds with RBI → less public lending', 'DECREASE → banks prefer lending to public over parking with RBI'],
            ['Cash Reserve Ratio (CRR)', 'Quantitative', 'INCREASE CRR → less available for lending → money supply falls', 'DECREASE CRR → more available for lending → money supply rises'],
            ['Statutory Liquidity Ratio (SLR)', 'Quantitative', 'INCREASE SLR → more locked in liquid assets → less for loans', 'DECREASE SLR → less locked → more for loans'],
            ['Open Market Operations (OMO)', 'Quantitative', 'SELL government securities → bank reserves fall → money supply falls', 'BUY government securities → cash injected → money supply rises'],
            ['Margin Requirements', 'Qualitative', 'INCREASE margin → less loan per unit of collateral → less credit', 'DECREASE margin → more loan per collateral → more credit'],
            ['Moral Suasion', 'Qualitative', 'Persuade banks to lend less / to specific sectors only', 'Persuade banks to lend more / to priority sectors'],
            ['Selective Credit Control (SCC)', 'Qualitative', 'Restrict credit to specific inflationary sectors', 'Expand credit to specific depressed sectors']
          ]
        }
      },
      {
        id: 'v-dear-cheap',
        title: 'Dear Money Policy vs Cheap Money Policy',
        type: 'table',
        data: {
          headers: ['Feature', 'Dear Money Policy (Contractionary)', 'Cheap Money Policy (Expansionary)'],
          rows: [
            ['Also Called', 'Tight Money Policy / Anti-Inflationary', 'Easy Money Policy / Expansionary'],
            ['Goal', 'REDUCE money supply to control inflation', 'INCREASE money supply to fight recession/deflation'],
            ['Repo Rate', 'INCREASED', 'DECREASED'],
            ['CRR/SLR', 'INCREASED', 'DECREASED'],
            ['Open Market Operations', 'RBI SELLS securities (absorbs liquidity)', 'RBI BUYS securities (injects liquidity)'],
            ['Margin Requirements', 'INCREASED', 'DECREASED'],
            ['Effect', 'Interest rates rise → less borrowing → spending falls', 'Interest rates fall → more borrowing → spending rises']
          ]
        }
      }
    ]
  },
  {
    id: 'u2-m1',
    title: 'Master Interrelationships — Money and Banking',
    description: 'The core connections between high-powered money, credit creation, and RBI policy tools.',
    content: [
      {
        type: 'concept',
        title: 'The Master Logic Chain',
        points: [
          '**RBI raises Repo Rate/CRR** → Banks borrow less/keep more reserves.',
          '**Banks lend less** → Credit creation multiplier falls.',
          '**Money supply falls** → Aggregate demand falls → **Inflation is controlled**.'
        ],
        tags: ['THEORY SUMMARY']
      }
    ],
    visualizations: []
  },
  MASTER_INTERRELATIONSHIPS_TOPIC
];
