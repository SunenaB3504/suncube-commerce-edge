// src/data/accountancy/debentures.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const debenturesData = {
  subject: "Accountancy",
  chapter: "Issue & Redemption of Debentures",
  examTags: ["CUET"],
  studyGuide: {
    topics: [
      {
        id: "debenture-basics",
        title: "1. Meaning & Features",
        content: {
          coreConcept: "A debenture is a written instrument acknowledging a debt, typically specifying the repayment period and fixed interest rate.",
          formulaBank: "- Interest Rate: Specified in the name (e.g., 9% Debentures).\n- Status: Debenture holders are creditors, not owners.",
          logic: "1. A debt instrument under the company's common seal.\n2. Interest is a charge against profit (compulsory).\n3. It does not carry voting rights.",
          traps: "Trap: Confusing debentures with shares. Debentures represent debt; shares represent ownership.",
          examples: [
            { q: "Do debenture holders have voting rights?", a: "No, they are creditors and have no voting rights." },
            { q: "Is debenture interest payable even if the company incurs a loss?", a: "Yes, it is a charge against profit." }
          ],
          speedSummary: "Debt instrument, Fixed Interest, No Voting rights."
        }
      },
      {
        id: "issue-vendor",
        title: "2. Issue for Consideration Other Than Cash",
        content: {
          coreConcept: "Issuing debentures to vendors in exchange for assets or business purchased.",
          formulaBank: "No. of Debentures = Amount Payable / Issue Price",
          logic: "1. If Issued at Par: Debentures = Amount Payable / Face Value.\n2. If at Premium: Issue Price = Face Value + Premium.\n3. If at Discount: Issue Price = Face Value - Discount.",
          traps: "Calculation Trap: Using Face Value instead of Issue Price in the formula when issued at a premium or discount.",
          examples: [
            { q: "Vendor paid ₹9.9L by ₹100 debentures at 10% premium. How many?", a: "9,90,000 / 110 = 9,000 Debentures." }
          ],
          speedSummary: "Vendor Issue = Payable / Issue Price."
        }
      },
      {
        id: "collateral-security",
        title: "3. Issue as Collateral Security",
        content: {
          coreConcept: "Issuing debentures as secondary security for a bank loan.",
          formulaBank: "Method 2 Entry: Debenture Suspense A/c Dr. To X% Debentures A/c.",
          logic: "1. It is a contingent liability. No interest is paid on these until invoked.\n2. Method 1: No entry, just a note in Balance Sheet.\n3. Method 2: Record using Debenture Suspense.",
          traps: "Trap: Paying interest on collateral debentures. Interest is only paid on the bank loan, NOT on collateral debentures.",
          examples: [
            { q: "Account debited when collateral is recorded?", a: "Debenture Suspense Account." },
            { q: "Is interest paid on debentures issued as collateral security?", a: "No, interest is paid only on the bank loan, not on the collateral debentures." }
          ],
          speedSummary: "Secondary security, Interest on Loan only."
        }
      },
      {
        id: "redemption-terms-loss",
        title: "4. Terms of Redemption (Loss on Issue)",
        content: {
          coreConcept: "Accounting for the future premium to be paid on redemption at the time of issue itself (Prudence Principle).",
          formulaBank: "Loss on Issue = (Discount on Issue) + (Premium on Redemption)",
          logic: "1. If redemption is at premium, create 'Premium on Redemption A/c' (Liability).\n2. Debit the same amount to 'Loss on Issue of Debentures A/c'.\n3. This ensures the future loss is recognized today.",
          traps: "Trap: Forgetting to include the redemption premium in the 'Loss on Issue' account when debentures are issued at par but redeemed at premium.",
          examples: [
            { q: "Redeemable at 5% premium. How to record this at issue?", a: "Debit Loss on Issue, Credit Premium on Redemption." },
            { q: "Which principle requires recording the future premium on redemption at the time of issue?", a: "Prudence (Conservatism) Principle." }
          ],
          speedSummary: "Future Prem on Red = Loss at Issue."
        }
      },
      {
        id: "writing-off-loss",
        title: "5. Writing Off Loss & Interest",
        content: {
          coreConcept: "Loss on issue must be written off using capital profits or revenue profits.",
          formulaBank: "Priority: 1. Securities Premium -> 2. Statement of P&L",
          logic: "1. Interest: Charge against profit. Entry: Interest Dr. To Debentureholders.\n2. Writing Off: Total Loss is cleared from Securities Premium first as per Section 52.",
          traps: "Timing Trap: Failing to write off the loss in the same year it was incurred (as per latest accounting standards).",
          examples: [
            { q: "Where is debenture interest transferred at year-end?", a: "To the Statement of Profit and Loss." }
          ],
          speedSummary: "Write off: SP first, then P&L."
        }
      },
      {
        id: "drr-dri-rules",
        title: "6. Redemption Rules (DRR & DRI)",
        content: {
          coreConcept: "Statutory reserves and investments required before redeeming debentures.",
          formulaBank: "- DRR: 10% of Outstanding (Unlisted companies)\n- DRI: 15% of Maturing amount (by 30th April)",
          logic: "1. DRR ensures profits are retained for repayment.\n2. DRI ensures cash is available for repayment.\n3. Exemptions: Listed companies and banks don't need DRR.",
          traps: "Limit Trap: Calculating 15% DRI on 'Outstanding' instead of 'Maturing' amount.",
          examples: [
            { q: "Minimum DRI percentage?", a: "15% of the amount maturing during the year." },
            { q: "What is the deadline for making the mandatory Debenture Redemption Investment (DRI)?", a: "April 30 of the current financial year." }
          ],
          speedSummary: "DRR (10%), DRI (15%)."
        }
      }
    ]
  },

  flashcards: [
    { id: "db-fc-001", term: "Debenture", definition: "A written certificate acknowledging a debt issued by a company under its common seal.", formula: null, example: null },
    { id: "db-fc-002", term: "Collateral Security", definition: "Secondary security given to a lender in addition to the principal security (e.g., land/building).", formula: null, example: null },
    { id: "db-fc-003", term: "Charge", definition: "Interest on debentures is a charge against profit, meaning it must be paid regardless of profit or loss.", formula: null, example: null },
    { id: "db-fc-004", term: "Discount on Issue", definition: "Unlike shares, debentures can be issued to the public at a discount.", formula: null, example: null },
    { id: "db-fc-005", term: "Loss on Issue", definition: "An account debited during issue to record both the current discount and the future premium on redemption.", formula: "Discount + Premium on Redemption", example: null },
    { id: "db-fc-006", term: "DRR", definition: "Debenture Redemption Reserve; a portion of profits set aside (10% for unlisted firms) to ensure repayment.", formula: "10% of Face Value", example: null },
    { id: "db-fc-007", term: "DRI", definition: "Debenture Redemption Investment; mandatory liquidity requirement (15% of maturing amount) by April 30.", formula: "15% of Current Year Redemption", example: null }
  ],

  questions: [
    {
      id: "db-q-001", type: "mcq", difficulty: "medium",
      question: "Moon Ltd issued 40,000 debentures of ₹100. Redeemed at 20% premium. SP balance dropped from 12L to 2L after write-off. Issue discount rate?",
      options: ["10%", "5%", "25%", "15%"],
      correct: 1,
      explanation: "SP Used = 10L. Prem on Red = 8L (40k*20). Total Loss = SP Used = 10L. Discount = 10L - 8L = 2L. Rate = 2L / 40L = 5%.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-002", type: "mcq", difficulty: "hard",
      question: "On default, bank sold collateral debentures in the market on 1st May. When does interest become payable by the company?",
      options: ["1st April 2019", "31st March 2024", "1st April 2024", "1st May 2024"],
      correct: 3,
      explanation: "Interest starts only when the debentures are actually issued/sold to the public (1st May 2024).",
      examTags: ["CUET"]
    },
    {
      id: "db-q-003", type: "mcq", difficulty: "medium",
      question: "Alexa Ltd bought a building for ₹8,00,000. Issued 6% debentures @ ₹100 at 20% discount. What amount is credited to 6% Debentures A/c?",
      options: ["₹10,40,000", "₹10,00,000", "₹9,60,000", "₹6,40,000"],
      correct: 1,
      explanation: "No. of Debentures = 8,00,000 / 80 = 10,000. Amount credited to Debentures A/c = 10,000 × 100 = 10,00,000.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-004", type: "assertion-reason", difficulty: "medium",
      assertion: "Interest on debentures is an appropriation of profits.",
      reason: "Debenture holders are creditors of the company.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 3,
      explanation: "Interest is a charge, not an appropriation. Reason is true as holders are creditors.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-005", type: "mcq", difficulty: "medium",
      question: "Loss on Issue is ₹9,00,000. SP balance is ₹8,00,000. How much is charged to Statement of P&L?",
      options: ["₹4,50,000", "₹6,00,000", "₹8,00,000", "₹1,00,000"],
      correct: 3,
      explanation: "SP must be used first. Remaining loss (9L - 8L = 1L) is charged to P&L.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-006", type: "mcq", difficulty: "medium",
      question: "Premium on Redemption (₹6L) to be paid after 5 years is treated as:",
      options: ["Non-Current Asset", "Current Liability", "Non-Current Liability", "Contingent Liability"],
      correct: 2,
      explanation: "It is a long-term obligation (redemption > 1 year) and thus a Non-Current Liability.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-007", type: "numerical", difficulty: "hard",
      question: "Galaxy Ltd: 2L @ ₹100 issued @ 10% discount, redeemable @ 5% premium. SP 8L used for 20k bonus shares first. P&L charge?",
      options: ["₹30,00,000", "₹22,00,000", "₹24,00,000", "₹20,00,000"],
      correct: 2,
      solution_steps: [
        "Total Loss = Discount (20L) + Red Prem (10L) = 30L",
        "SP Remaining = 8L - 2L (Bonus) = 6L",
        "P&L Charge = 30L - 6L = 24L"
      ],
      explanation: "The loss is first offset by the remaining Securities Premium, and the balance hits the P&L statement.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-008", type: "mcq", difficulty: "medium",
      question: "Buddha Ltd: Assets 40L, Liabs 6.5L. Issued 30k debentures @ 10% disc and cheque 5L. Gain/Loss?",
      options: ["Goodwill ₹1,00,000", "Capital Reserve ₹1,50,000", "Goodwill ₹1,50,000", "Capital Reserve ₹1,00,000"],
      correct: 1,
      explanation: "Net Assets = 33.5L. PC = (30k*90=27L) + 5L = 32L. Since PC < Net Assets, it is a Capital Reserve of 1.5L.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-009", type: "mcq", difficulty: "easy",
      question: "Which debenture type gives no undertaking for repayment during the company's lifetime?",
      options: ["Zero Coupon", "Convertible", "Secured", "Non-Redeemable"],
      correct: 3,
      explanation: "Non-redeemable or perpetual debentures are repaid only during the winding up of the company.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-010", type: "mcq", difficulty: "medium",
      question: "Savitri Ltd: 50k debentures, Red @ 10% premium. P&L debited with 2L to write off loss. Issue premium rate?",
      options: ["10%", "16%", "6%", "4%"],
      correct: 2,
      explanation: "Total Loss (Red Prem) = 5L. P&L used = 2L. Implies SP generated from issue = 3L. Premium Rate = 3L / 50L = 6%.",
      examTags: ["CUET"]
    },
    {
      id: "db-q-011", type: "mcq", difficulty: "medium",
      question: "Total Loss on Issue includes:",
      options: ["Only Discount", "Only Redemption Premium", "Discount + Redemption Premium", "Discount + Underwriting Commission"],
      correct: 2,
      explanation: "The 'Loss on Issue' account consolidates all capital losses arising from the terms of issue and redemption.",
      examTags: ["CUET"]
    }
  ]
};
