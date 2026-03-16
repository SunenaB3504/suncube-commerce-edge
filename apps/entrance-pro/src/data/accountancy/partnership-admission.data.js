// src/data/accountancy/partnership-admission.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const partnershipAdmissionData = {
  subject: "Accountancy",
  chapter: "Admission of a Partner",
  examTags: ["CUET"],
  studyGuide: {
    topics: [
      {
        id: "reconstitution-modes",
        title: "1. Modes of Reconstitution",
        content: {
          coreConcept: "Reconstitution occurs when the existing partnership agreement changes, but the firm continues. Modes include: Admission, Retirement, Death, Change in PSR, and Amalgamation.",
          formulaBank: "- Section 31: Admission of a Partner\n- Section 32: Retirement of a Partner\n- Section 35: Death of a Partner",
          logic: "1. Old agreement ends.\n2. New agreement begins.\n3. Business operations continue without closure (unlike dissolution).",
          traps: "Trap: Confusing 'Dissolution of Partnership' (reconstitution) with 'Dissolution of Firm' (closing business).",
          examples: [
            { q: "Is change in profit sharing ratio a reconstitution?", a: "Yes, it is one of the modes of reconstitution." },
            { q: "Does business close down during reconstitution?", a: "No, in reconstitution (like admission), the old agreement ends but the business continues under a new agreement." }
          ],
          speedSummary: "Change in agreement = Reconstitution."
        }
      },
      {
        id: "admission-rights-sr",
        title: "2. Rights of New Partner & Sacrificing Ratio",
        content: {
          coreConcept: "A new partner gets: 1. Right to share Assets (brings Capital) and 2. Right to share Profits (brings Premium for Goodwill).",
          formulaBank: "Sacrificing Ratio = Old Ratio - New Ratio",
          logic: "1. Incoming partner gets a share from old partners.\n2. Old partners lose/sacrifice their share.\n3. Sacrifice is used to distribute the Premium for Goodwill (PFG).",
          traps: "Trap: Distributing PFG in Old Ratio. It MUST be distributed in Sacrificing Ratio.",
          examples: [
            { q: "A and B (3:2) admit C for 1/5 share. SR if not given?", a: "Sacrificing Ratio = Old Ratio = 3:2." },
            { q: "What is the primary right of a partner who brings capital?", a: "The right to share in the assets of the firm." }
          ],
          speedSummary: "SR = Old - New. Used for Goodwill."
        }
      },
      {
        id: "goodwill-valuation",
        title: "3. Valuation of Goodwill",
        content: {
          coreConcept: "Methods to value firm's reputation: Average Profit, Super Profit, and Capitalisation.",
          formulaBank: "- Avg Profit: Avg Profit x Years' Purchase\n- Super Profit: (Actual Profit - Normal Profit) x Years' Purchase\n- Normal Profit: Capital Employed x NRR / 100",
          logic: "1. Find Average Profit.\n2. Find Normal Profit (what a normal firm would earn).\n3. Super Profit is the 'extra' profit earned due to reputation.",
          traps: "Super Profit Calculation Trap: Forgetting to deduct partner salary from average profit if mentioned as an expense.",
          examples: [
            { q: "Super Profit if Actual is ₹50k and Normal is ₹40k?", a: "₹10,000" }
          ],
          speedSummary: "Super Profit = Actual - Normal."
        }
      },
      {
        id: "goodwill-treatment",
        title: "4. Treatment of Goodwill (AS-26)",
        content: {
          coreConcept: "Accounting for Premium for Goodwill (PFG) brought by the new partner.",
          formulaBank: "Entry: Cash A/c Dr. To PFG. Then PFG A/c Dr. To Sacrificing Partners' Cap A/c.",
          logic: "1. New partner pays for the profit share he 'buys' from old partners.\n2. PFG is NOT firm's income; it's compensation for partners.\n3. If NOT brought in cash, debit New Partner's Current A/c.",
          traps: "AS-26 Rule: Self-generated goodwill cannot be recorded in books. Only Purchased Goodwill appears in the Balance Sheet.",
          examples: [
            { q: "New partner pays PFG privately. Entry?", a: "No Entry (Outside business)." },
            { q: "If a new partner is unable to bring his share of goodwill in cash, which account is debited?", a: "New Partner's Current Account (as per modern accounting practice to keep capital intact)." }
          ],
          speedSummary: "PFG -> Sacrificing Partners (SR)."
        }
      },
      {
        id: "revaluation-account",
        title: "5. Revaluation Account",
        content: {
          coreConcept: "Records changes in values of assets and liabilities at the time of admission. It's a Nominal Account.",
          formulaBank: "Debit: Asset ↓, Liab ↑ (Loss)\nCredit: Asset ↑, Liab ↓ (Gain)",
          logic: "1. Revalue to ensure new partner doesn't benefit from old gains/losses.\n2. Profit/Loss transferred to Old Partners in Old Ratio.",
          traps: "Trap: Including new partner in revaluation profit distribution. Only OLD partners get it.",
          examples: [
            { q: "Unrecorded asset found. Where to record?", a: "Credit side of Revaluation Account." },
            { q: "Stock is overvalued by ₹5,000. Impact on revaluation?", a: "Debited to Revaluation Account (to decrease the asset value)." }
          ],
          speedSummary: "Asset Up = Credit; Asset Down = Debit."
        }
      },
      {
        id: "reserves-profits",
        title: "6. Reserves & Accumulated Profits",
        content: {
          coreConcept: "Undistributed profits and reserves (General Reserve, P&L) belong to old partners.",
          formulaBank: "Reserve A/c Dr. To Old Partners' Cap A/c (Old Ratio)",
          logic: "1. Clean the balance sheet of old reserves before new partner joins.\n2. Specific reserves (WCR, IFR) are distributed after meeting claims/losses.",
          traps: "Employees Provident Fund (EPF): It's a liability, NOT a reserve. Do NOT distribute it.",
          examples: [
            { q: "Why are reserves distributed in Old Ratio?", a: "Because they were earned by old partners before admission." }
          ],
          speedSummary: "Old Reserves -> Old Partners (Old Ratio)."
        }
      }
    ]
  },

  flashcards: [
    { id: "pa-fc-001", term: "Reconstitution", definition: "Any change in the existing agreement of partnership, where the old agreement ends and a new one starts.", formula: null, example: null },
    { id: "pa-fc-002", term: "Sacrificing Ratio", definition: "The ratio in which old partners surrender their share of profit in favour of the new partner.", formula: "Old Ratio - New Ratio", example: null },
    { id: "pa-fc-003", term: "Super Profit", definition: "Excess of actual average profit earned by the firm over the normal profit.", formula: "Actual Average Profit - Normal Profit", example: null },
    { id: "pa-fc-004", term: "Normal Profit", definition: "Profit expected to be earned on the capital employed at the normal rate of return.", formula: "Capital Employed × NRR / 100", example: null },
    { id: "pa-fc-005", term: "Revaluation Account", definition: "A nominal account prepared to record the increase or decrease in the value of assets and liabilities.", formula: null, example: null },
    { id: "pa-fc-006", term: "Hidden Goodwill", definition: "Inferred goodwill value when it is not explicitly stated, calculated using new partner's capital.", formula: "Total Capital of New Firm - Combined Adjusted Capital", example: null },
    { id: "pa-fc-007", term: "AS-26", definition: "Accounting standard stating that only purchased goodwill should be recognized in the books.", formula: null, example: null },
    { id: "pa-fc-008", term: "Purchased Goodwill", definition: "Goodwill for which some consideration in money or money's worth has been paid.", formula: null, example: null }
  ],

  questions: [
    {
      id: "pa-q-001", type: "numerical", difficulty: "medium",
      question: "A and B are partners (3:2). C is admitted. A surrenders 1/3 of his share and B surrenders 1/4 of his share to C. What is the new profit sharing ratio?",
      options: ["3:2:3", "4:3:3", "6:4:5", "2:1:1"],
      correct: 1,
      solution_steps: [
        "A's Sacrifice = 1/3 × 3/5 = 1/5",
        "B's Sacrifice = 1/4 × 2/5 = 1/10",
        "A's New = 3/5 - 1/5 = 2/5 = 4/10",
        "B's New = 2/5 - 1/10 = 3/10",
        "C's Share = 1/5 + 1/10 = 3/10",
        "Ratio = 4/10 : 3/10 : 3/10 = 4:3:3"
      ],
      explanation: "A surrenders 1/5 and B surrenders 1/10. Their new shares are 4/10 and 3/10 respectively. C's share is the sum of sacrifices (3/10).",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-002", type: "mcq", difficulty: "easy",
      question: "Which of the following is NOT a mode of reconstitution of a partnership firm?",
      options: ["Admission of a partner", "Retirement of a partner", "Dissolution of Partnership Firm", "Change in Profit Sharing Ratio"],
      correct: 2,
      explanation: "Dissolution of the firm means the business closes down completely. Reconstitution means the business continues with a new agreement.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-003", type: "mcq", difficulty: "easy",
      question: "At the time of admission, General Reserve is transferred to:",
      options: ["Capital A/cs of all partners in New Ratio", "Capital A/cs of old partners in Old Ratio", "Capital A/c of new partner only", "Revaluation Account"],
      correct: 1,
      explanation: "General Reserve represents past undistributed profits earned by old partners. Thus, it belongs to them in their old ratio.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-004", type: "numerical", difficulty: "medium",
      question: "Z brings ₹40,000 as capital and ₹20,000 as premium for goodwill. Old partners X and Y (3:1) withdraw the goodwill. What is the journal entry for withdrawal?",
      options: [
        "Cash Dr. 20,000 To X Cap 15,000 To Y Cap 5,000",
        "X Cap Dr. 15,000, Y Cap Dr. 5,000 To Cash 20,000",
        "Z Cap Dr. 20,000 To Cash 20,000",
        "Revaluation Dr. 20,000 To Cash 20,000"
      ],
      correct: 1,
      solution_steps: [
        "X's Share = 3/4 × 20,000 = ₹15,000",
        "Y's Share = 1/4 × 20,000 = ₹5,000",
        "Entry: X Cap Dr. 15,000, Y Cap Dr. 5,000 To Cash 20,000"
      ],
      explanation: "When goodwill is withdrawn, the sacrificing partners' capital accounts are debited and the cash account is credited.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-005", type: "numerical", difficulty: "medium",
      question: "Furniture (Book Value ₹20,000) is to be reduced to 40% on admission. What is the loss on revaluation?",
      options: ["₹8,000", "₹12,000", "₹20,000", "₹4,000"],
      correct: 1,
      solution_steps: [
        "New Value = 40/100 × 20,000 = ₹8,000",
        "Loss = Original - New = 20,000 - 8,000 = ₹12,000"
      ],
      explanation: "Reduced 'to' 40% means the final value is ₹8,000. The reduction (loss) is ₹12,000.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-006", type: "numerical", difficulty: "medium",
      question: "Firm's Goodwill ₹50,000. C is admitted for 1/5 share. IFR is ₹4,000. Investment (₹20,000) revalued at ₹18,000. How much surplus IFR is distributed to old partners?",
      options: ["₹4,000", "₹2,000", "₹10,000", "Nil"],
      correct: 1,
      solution_steps: [
        "Fall in Investment = 20,000 - 18,000 = ₹2,000",
        "Surplus IFR = 4,000 (Reserve) - 2,000 (Fall) = ₹2,000"
      ],
      explanation: "IFR is used to cover the fall in investment. The remaining ₹2,000 is distributed to old partners.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-007", type: "numerical", difficulty: "medium",
      question: "A surrenders 1/4 of his 4/5 share and B surrenders 1/2 of his 1/5 share to C. What is the Sacrificing Ratio?",
      options: ["2:1", "1:2", "3:2", "4:1"],
      correct: 0,
      solution_steps: [
        "A's Sacrifice = 1/4 × 4/5 = 1/5 = 2/10",
        "B's Sacrifice = 1/2 × 1/5 = 1/10",
        "SR = 2/10 : 1/10 = 2:1"
      ],
      explanation: "A sacrifices 2/10 and B sacrifices 1/10. The sacrificing ratio is 2:1.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-008", type: "mcq", difficulty: "easy",
      question: "How is a private payment for goodwill by a new partner to old partners recorded in the firm's books?",
      options: ["Credited to Capital Accounts", "Debited to Current Accounts", "Credited to Revaluation Account", "No entry is passed"],
      correct: 3,
      explanation: "Private payments are made outside the business and do not affect the firm's accounts.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-009", type: "numerical", difficulty: "hard",
      question: "Z brings ₹50,000 for 1/5 share. Total assets ₹1,50,000; outside liabilities ₹20,000. Calculate Hidden Goodwill.",
      options: ["₹1,20,000", "₹70,000", "₹50,000", "₹1,00,000"],
      correct: 1,
      solution_steps: [
        "Expected Capital = 50,000 × 5 = ₹2,50,000",
        "Actual Net Worth = (1,50,000 - 20,000) + 50,000 = ₹1,80,000",
        "Hidden Goodwill = 2,50,000 - 1,80,000 = ₹70,000"
      ],
      explanation: "Goodwill is the difference between the capitalized value of the firm based on the new partner and the actual net worth.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-010", type: "mcq", difficulty: "medium",
      question: "WCR is ₹50,000. Claim is ₹60,000. What is the treatment for the ₹10,000 difference?",
      options: ["Debited to Partners Capital", "Debited to Revaluation Account", "Credited to Revaluation Account", "No entry"],
      correct: 1,
      explanation: "Excess claim over reserve is a loss upon reconstitution, hence debited to Revaluation Account.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-011", type: "mcq", difficulty: "easy",
      question: "Which of the following is NOT distributed to old partners on admission?",
      options: ["General Reserve", "Profit & Loss (Credit)", "Employees Provident Fund", "Workmen Compensation Reserve (Excess)"],
      correct: 2,
      explanation: "EPF is an external liability belonging to employees, not a free reserve of the firm.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-012", type: "assertion-reason", difficulty: "medium",
      assertion: "On admission, the 'Profit on Revaluation' is distributed among old partners in Old Profit Sharing Ratio.",
      reason: "The gain arises from assets held before the admission of the new partner.",
      options: [
        "Both A and R are true; R is the correct explanation of A",
        "Both A and R are true; R is NOT the correct explanation of A",
        "A is true but R is false",
        "A is false but R is true"
      ],
      correct: 0,
      explanation: "Both are true. Revaluation gain belongs to old partners as it accrued while they were the owners.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-013", type: "numerical", difficulty: "medium",
      question: "Investments (₹10,000) increased by ₹2,000. IFR is ₹5,000. What amount of IFR is distributed to old partners?",
      options: ["₹2,000", "₹3,000", "₹5,000", "₹7,000"],
      correct: 2,
      solution_steps: [
        "Since value increased (no fall), zero IFR is used for adjustment.",
        "Total IFR ₹5,000 is distributed as a free reserve."
      ],
      explanation: "IFR is only used to cover a fall in value. If value increases, the whole reserve goes to old partners.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-014", type: "mcq", difficulty: "easy",
      question: "A bad debt of ₹10,000 written off last year is recovered (₹6,000) on admission. Best entry?",
      options: ["Cash Dr. 6000 To Bad Debts Recovered", "Cash Dr. 6000 To Revaluation A/c", "Cash Dr. 6000 To Debtors", "No Entry"],
      correct: 1,
      explanation: "Unexpected gains on admission date are directly credited to Revaluation A/c to benefit old partners.",
      examTags: ["CUET"]
    },
    {
      id: "pa-q-015", type: "mcq", difficulty: "easy",
      question: "According to AS-26, which type of goodwill can be recorded in the books?",
      options: ["Self-generated Goodwill", "Purchased Goodwill", "Hidden Goodwill", "Inherited Goodwill"],
      correct: 1,
      explanation: "AS-26 permits recording goodwill only when it is purchased for a consideration.",
      examTags: ["CUET"]
    }
  ]
};
