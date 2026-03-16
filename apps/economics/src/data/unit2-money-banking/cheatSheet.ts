import { CheatSheetItem } from '../../types';

export const CHEAT_SHEET: CheatSheetItem[] = [
  {
    id: 'u2-cs1',
    title: '🪙 Money: Definition & Functions',
    points: [
      '**Money:** Anything generally accepted as a medium of exchange, measure of value, store of value, and standard of deferred payment.',
      '**Primary Functions:** 1. **Medium of Exchange** (solves double coincidence of wants), 2. **Measure of Value** (unit of account).',
      '**Fiat Money:** Issued by govt order (Notes/Coins). No intrinsic value.',
      '**Fiduciary Money:** Based on trust (Cheques). Not legally binding to accept as tender.',
      '**Full-Bodied Money:** Commodity value = Money value (Gold coins).',
      '**Credit Money:** Money value > Commodity value (Paper notes).',
      '**Legal Tender:** Legally bound to accept for debt (Currency). **Limited** (Coins up to ₹1000), **Unlimited** (Notes).'
    ]
  },
  {
    id: 'u2-cs2',
    title: '📊 Money Supply Measures (RBI)',
    points: [
      '**M1 (Narrowest/Most Liquid):** **Currency with Public** + **Demand Deposits** + **Other Deposits with RBI**.',
      '**M2:** **M1** + Post Office Savings Bank deposits.',
      '**M3 (Broad/Most Used):** **M1** + **Net Time Deposits** (FDs) with Banks.',
      '**M4:** **M3** + Total Post Office Deposits (Excl. NSC).',
      '**High Powered Money (H):** **C** + **R** (Currency with public + Cash reserves of banks). The base of the economy.'
    ]
  },
  {
    id: 'u2-cs3',
    title: '🏦 Credit Creation Process',
    points: [
      '**Core Assumptions:** 1. Entire banking system is a single unit. 2. All transactions are routed via banks (no cash leakage).',
      '**Money Multiplier (k):** **1 / LRR**. (Legal Reserve Ratio).',
      '**Legal Reserve Ratio (LRR):** **CRR** + **SLR**. Sum of reserves banks must keep.',
      '**Total Credit Created:** **Initial Deposit** × **(1 / LRR)**.',
      '**Credit Multiplier Example:** If LRR is 10% (0.1), Multiplier = 10. ₹1000 deposit can create ₹10,000 credit.',
      '**Inverse Relation Trap:** Higher the LRR, **Lower** the Credit Creation (Multiplier = 1/LRR).'
    ]
  },
  {
    id: 'u2-cs4',
    title: '🦅 Central Bank (RBI) Functions',
    points: [
      '**Currency Authority:** Sole right to issue notes (except ₹1 and coins).',
      '**Banker to Govt:** Manages accounts, buys/sells Govt securities, advises on policy.',
      '**Banker\'s Bank:** Keeps reserves of commercial banks (CRR), acts as **Clearing House**.',
      '**Lender of Last Resort:** Provides emergency funds to banks in distress.',
      '**Custodian of Forex:** Manages gold and foreign currency to stabilize the Rupee.'
    ]
  },
  {
    id: 'u2-cs5',
    title: '🛠️ Quantitative Tools (Volume Control)',
    points: [
      '**Repo Rate:** Rate at which RBI lends **short-term** to banks (with collateral).',
      '**Bank Rate:** Rate at which RBI lends **long-term** to banks (no collateral).',
      '**Reverse Repo Rate:** Rate at which RBI "borrows" from banks (parks their surplus).',
      '**CRR (Cash Reserve Ratio):** % of deposits banks must keep **with RBI** as cash.',
      '**SLR (Statutory Liquidity Ratio):** % of deposits banks must keep **with themselves** (Liquid assets).',
      '**OMO (Open Market Ops):** Selling bonds (decreases money supply) or buying bonds (increases it).'
    ]
  },
  {
    id: 'u2-cs6',
    title: '🎨 Qualitative Tools (Directional Control)',
    points: [
      '**Margin Requirement:** Difference between market value of security and loan amount. Increase -> Less credit.',
      '**Moral Suasion:** Persuasion/Pressure on banks to follow RBI policy.',
      '**Selective Credit Control:** Directing credit to specific "priority" sectors (e.g., Agriculture) and away from speculative ones.'
    ]
  },
  {
    id: 'u2-cs7',
    title: '🧮 Numerical Formulas',
    points: [
      '**Purchasing Power of Money:** **1 / P** (Inverse of price level).',
      '**Money Velocity:** **V = PY / M**. How many times a unit of money manual changes hands.',
      '**PV of Bond:** **Coupon / i**. Higher interest rate -> Lower bond price.',
      '**LRR Component:** **LRR = CRR + SLR**.'
    ]
  },
  {
    id: 'u2-cs-acronyms',
    title: '📚 Essential Acronyms for Quick Recall',
    points: [
      '**NDTL:** Net Demand and Time Liabilities.',
      '**CRR / SLR:** Cash Reserve Ratio / Statutory Liquidity Ratio.',
      '**OMO:** Open Market Operations.',
      '**MSF:** Marginal Standing Facility.',
      '**H:** High Powered Money.'
    ]
  },
  {
    id: 'u2-cs8',
    title: '🎯 SQP Traps: Money & Banking',
    points: [
      '**The Coin Trap:** RBI does NOT issue ₹1 notes or coins. The **Ministry of Finance** (Govt of India) does.',
      '**M1 vs M3:** M1 is the most **liquid**; M3 is the most **common measure** of broad money.',
      '**Interest Rate Inverse Trap:** Bond prices and Interest rates move in **opposite** directions. If rates rise, bond price falls.',
      '**Demand vs Time Deposits:** Only **Demand Deposits** (Savings/Current) are part of M1. Time Deposits (FDs) are in M3.'
    ]
  }
];
