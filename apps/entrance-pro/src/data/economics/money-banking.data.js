// src/data/economics/money-banking.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const moneyBankingData = {
  subject: "Economics",
  chapter: "Money and Banking",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u2-t1",
        title: "Money — Functions and Classification",
        content: {
          coreConcept: `
Money is anything that is **generally accepted** as a medium of exchange, a measure of value, a store of value, and a standard of deferred payment.

### Functions of Money
| Function | Category | What It Does |
| :--- | :--- | :--- |
| **Medium of Exchange** | Primary | Facilitates buying/selling; solves double coincidence of wants |
| **Unit of Account** | Primary | Common measuring rod for pricing all goods/services |
| **Store of Value** | Secondary | Holds purchasing power over time |
| **Standard of Deferred Payment** | Secondary | Basis for future payments (loans, EMIs) |

### Classification of Money
- **Fiat Money**: Issued by govt decree; no intrinsic value (e.g., currency notes).
- **Fiduciary Money**: Accepted based on trust, not legal tender (e.g., cheques).
- **Full-Bodied Money**: Commodity value = Face value (e.g., gold coins).
- **Credit Money**: Face value > Commodity value (e.g., modern ₹500 note).
- **Legal Tender**: Money that cannot be legally refused for settlement of debt.
          `,
          examples: [
            { q: "Is a ₹500 note Fiat Money?", a: "Yes, because it is issued by government decree and has legal tender status." },
            { q: "Example of Fiduciary Money?", a: "Cheques (accepted on trust between parties)." }
          ]
        }
      },
      {
        id: "eco-u2-t2",
        title: "Money Supply and High Powered Money",
        content: {
          coreConcept: `
Money Supply is the total stock of money held by the **public** at a point in time.

### Measures of Money Supply (RBI)
| Measure | Components | Liquidity |
| :--- | :--- | :--- |
| **M1** | Currency with Public (C) + Demand Deposits (DD) + Other Deposits with RBI | Highest (Narrow) |
| **M2** | M1 + Savings with Post Office | High |
| **M3** | M1 + Net Time Deposits (FDs) | Broad (Most used by RBI) |
| **M4** | M3 + Total Post Office Deposits (excl. NSC) | Lowest |

### High Powered Money (H)
The **Monetary Base** created by the RBI.
**Formula**: H = Currency with Public + Cash Reserves of Banks.
          `,
          examples: [
            { q: "Which measure of money supply includes FDs (Time Deposits)?", a: "M3 (Broad Money)." },
            { q: "Is money held by the Government included in money supply?", a: "No, only money held by the 'public' is included." }
          ]
        }
      },
      {
        id: "eco-u2-t3",
        title: "Commercial Banking and Credit Creation",
        content: {
          coreConcept: `
Commercial banks create credit money through lending, keeping only a mandatory **Legal Reserve Ratio (LRR)**.

### Credit Creation Process
1. Banks receive **Primary Deposits** (initial cash).
2. They keep a fraction as **LRR** (CRR + SLR).
3. They lend the excess, creating **Derivative Deposits**.
4. **Total Money Created** = Initial Deposit × (1 / LRR).

**Money Multiplier** = 1 / LRR.
          `,
          examples: [
            { q: "If LRR is 20%, what is the money multiplier?", a: "5 (1/0.2)." },
            { q: "Initial deposit is ₹1000 and LRR is 10%. Total credit created?", a: "₹10,000 (1000 * 10)." },
            { q: "Total Deposits = Primary Deposits + ?", a: "Secondary (Derivative) Deposits." }
          ]
        }
      },
      {
        id: "eco-u2-t4",
        title: "Central Bank (RBI) and Monetary Policy",
        content: {
          coreConcept: `
The RBI is the apex bank that regulates the monetary system and controls credit.

### Quantitative Tools (Volume Control)
- **Repo Rate**: Rate at which RBI lends to banks (short-term).
- **Reverse Repo**: Rate at which banks park surplus with RBI.
- **Bank Rate**: Rate for long-term lending.
- **CRR/SLR**: Mandatory reserve ratios.
- **OMO**: Buying/selling government securities.

### Qualitative Tools (Direction Control)
- **Margin Requirement**: Difference between loan amount and collateral value.
- **Moral Suasion**: Persuasion/pressure on banks.
- **Selective Credit Control**: Targeted restrictions.

### Policy Effects
| Scenario | Action | Effect on Money Supply |
| :--- | :--- | :--- |
| **INFLATION** | Increase Rates (Repo, CRR), SELL Securities | Falls (Dear Money Policy) |
| **DEFLATION** | Decrease Rates, BUY Securities | Rises (Cheap Money Policy) |
          `,
          examples: [
            { q: "To control inflation, what should RBI do with CRR?", a: "Increase CRR (to reduce lending capacity of banks)." },
            { q: "What is 'Moral Suasion'?", a: "Advice/pressure by RBI on banks to follow certain guidelines without formal penalties." },
            { q: "If RBI buys securities in the open market, what happens to liquidity?", a: "Liquidity increases (Money supply rises)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u2-fc1", question: "Define Money Supply.", answer: "Total stock of money held by the public at a specific point in time." },
    { id: "eco-u2-fc2", question: "What is M1?", answer: "M1 = Currency with Public + Demand Deposits + Other Deposits with RBI." },
    { id: "eco-u2-fc3", question: "Define High Powered Money.", answer: "Currency with public + Cash reserves of banks (monetary base)." },
    { id: "eco-u2-fc4", question: "What is Repo Rate?", answer: "The rate at which RBI lends short-term funds to banks against securities." },
    { id: "eco-u2-fc5", question: "Money Multiplier formula?", answer: "1 / Legal Reserve Ratio (LRR)." }
  ],

  questions: [
    {
      id: "eco-u2-q1",
      type: "mcq",
      question: "Which of the following is a function of the Central Bank?",
      options: ["Accepting deposits from public", "Custodian of forex reserves", "Granting loans to individuals", "Profit maximization"],
      correct: 1,
      explanation: "RBI acts as the custodian of foreign exchange reserves. Commercial banks accept deposits and grant loans for profit."
    },
    {
      id: "eco-u2-q2",
      type: "mcq",
      question: "Which measure of money supply is considered the most liquid?",
      options: ["M1", "M2", "M3", "M4"],
      correct: 0,
      explanation: "M1 is the most liquid measure of money supply: $M1 = C + DD + OD$.",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u2-q3",
      type: "mcq",
      question: "The central bank increases Repo Rate to:",
      options: ["Increase Money Supply", "Decrease Money Supply", "Increase Liquidity", "Encourage Borrowing"],
      correct: 1,
      explanation: "Higher Repo Rate makes borrowing expensive for commercial banks, leading to a decrease in money supply ($Repo \\uparrow \\Rightarrow MS \\downarrow$).",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
