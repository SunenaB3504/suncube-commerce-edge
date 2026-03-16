// src/data/business-studies/financial-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialManagementData = {
  subject: "Business Studies",
  chapter: "Financial Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u9-t1",
        title: "Concept & Objectives of Financial Management",
        content: {
          coreConcept: `**Financial Management** is concerned with the efficient acquisition and deployment of funds.

**Primary Objective**: To **Maximize Shareholders' Wealth** (Wealth Maximisation). This is reflected in the market price of the company's shares.

**Core Financial Decisions:**
1. **Investment Decision**: Where to invest funds (Capital Budgeting).
2. **Financing Decision**: How much to raise and from where (Debt vs Equity).
3. **Dividend Decision**: How much profit to distribute vs retain.`,
          speedSummary: "Primary Goal = Maximize Shareholder Wealth. Core decisions = Investment, Financing, Dividend.",
          examples: [
            { q: "A company decides to replace its old machinery with a new ₹50 lakh automated plant. What type of decision is this?", a: "Investment Decision (Capital Budgeting)." },
            { q: "The board of directors decides to raise ₹10 crore through debentures instead of equity. Name the decision.", a: "Financing Decision." },
            { q: "The firm decides to keep 40% of its profit for expansion and distribute the rest to shareholders. Name the decision.", a: "Dividend Decision." }
          ]
        }
      },
      {
        id: "bs-u9-t2",
        title: "Capital Structure",
        content: {
          coreConcept: `**Capital Structure** refers to the mix between owners' funds (Equity) and borrowed funds (Debt).

**Trading on Equity**: Using fixed interest-bearing securities (Debt) to increase the return on equity shares. This works only when **ROI > Cost of Debt**.

| Factor | Influence on Debt |
| :--- | :--- |
| **Cash Flow Position** | Strong cash flow allows more debt |
| **ICR (Interest Coverage Ratio)** | High ICR allows more debt |
| **Cost of Debt** | Low cost favors debt |
| **Tax Rate** | High tax rate favors debt (Interest is tax-deductible) |
| **Stock Market Condition** | Bearish market favors debt; Bullish favors equity |`,
          speedSummary: "Capital Structure = Debt vs Equity. ROI > Cost of Debt = Advantageous for Trading on Equity.",
          examples: [
            { q: "A company has a high tax rate of 30%. Why would it prefer more debt?", a: "Because interest on debt is a tax-deductible expense, making debt cheaper for the firm." },
            { q: "What is 'Trading on Equity'?", a: "Using fixed-cost debt to increase the return per share for equity holders. It works only if ROI is higher than the interest rate." },
            { q: "A firm's EBIT is ₹5 lakh and interest expense is ₹1 lakh. Find the Interest Coverage Ratio (ICR).", a: "ICR = EBIT / Interest = 5,00,000 / 1,00,000 = 5 times." }
          ]
        }
      },
      {
        id: "bs-u9-t3",
        title: "Fixed & Working Capital",
        content: {
          coreConcept: `**Fixed Capital**: Investment in long-term assets (Land, Mach). Influenced by Scale of operation, Nature of business, and Technology.

**Working Capital**: Funds for day-to-day operations (Current Assets - Current Liabilities).

**Factors affecting Working Capital:**
- **Nature of Business**: Trading needs less; Manufacturing needs more.
- **Scale of Operation**: Large needs more.
- **Business Cycle**: Boom needs more.
- **Seasonal Factors**: Peak season needs more.
- **Credit Allowed/Availed**: Affects cash flow.`,
          speedSummary: "Fixed (Long-term) vs Working (Short-term) capital.",
          examples: [
            { q: "Does a software company need more fixed capital than a car manufacturing factory?", a: "No, a car factory needs significantly more fixed capital for land, buildings, and heavy machinery." },
            { q: "During a peak festival season, a retail store needs extra cash to stock up on inventory. What is this need called?", a: "Working Capital requirement (specifically seasonal fluctuation)." },
            { q: "A company allows its customers 60 days to pay their bills. How does this affect its working capital?", a: "It increases the working capital requirement because cash is tied up in 'Debtors' for longer." },
            { q: "Investing in a new office building is an example of which capital?", a: "Fixed Capital (long-term investment)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "fm-fc-001", term: "Financial Management", definition: "Efficient acquisition and deployment of funds.", formula: null, example: "Deciding whether to take a bank loan or issue shares." },
    { id: "fm-fc-002", term: "Wealth Maximization", definition: "The primary objective of maximizing the market price of equity shares.", formula: null, example: "Ensuring company decisions lead to rising share prices." },
    { id: "fm-fc-003", term: "Capital Budgeting", definition: "Decision relating to investment in long-term assets.", formula: null, example: "Deciding to buy a new automated machinery." },
    { id: "fm-fc-004", term: "Financial Leverage", definition: "The proportion of debt in the overall capital.", formula: "Debt / Equity", example: "A firm having 60% debt and 40% equity." },
    { id: "fm-fc-005", term: "ICR", definition: "Interest Coverage Ratio - measures a firm's ability to meet interest obligations.", formula: "EBIT / Interest", example: "An ICR of 5 means profit is 5x the interest expense." }
  ],

  questions: [
    {
      id: "fm-q-001", type: "mcq", difficulty: "easy",
      question: "The primary objective of financial management is:",
      options: ["Profit Maximization", "Wealth Maximization", "Cost Minimization", "Sales Maximization"],
      correct: 1,
      explanation: "Wealth maximization (maximizing share price) is the ultimate goal as it considers risk and time value of money.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-002", type: "mcq", difficulty: "easy",
      question: "A company decides to buy new machinery worth ₹50 lakh. This is which type of financial decision?",
      options: ["Financing Decision", "Dividend Decision", "Investment Decision", "Liquidity Decision"],
      correct: 2,
      explanation: "Investment Decision (Capital Budgeting) relates to investment in long-term assets like machinery.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-003", type: "mcq", difficulty: "medium",
      question: "A firm raises ₹10 crore through debentures instead of equity. Which financial decision is this?",
      options: ["Investment Decision", "Financing Decision", "Dividend Decision", "Budgeting Decision"],
      correct: 1,
      explanation: "Financing Decision involves choosing the right mix and sources of finance (debt vs equity).",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-004", type: "mcq", difficulty: "medium",
      question: "The board decides to distribute 60% of profits and retain 40% for expansion. This is:",
      options: ["Investment Decision", "Financing Decision", "Dividend Decision", "Capital Budgeting"],
      correct: 2,
      explanation: "Dividend Decision determines what portion of earnings to distribute to shareholders versus what to retain.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-005", type: "mcq", difficulty: "medium",
      question: "'Trading on Equity' is favorable only when:",
      options: [
        "Cost of debt > ROI",
        "ROI > Cost of Debt",
        "Profit is low",
        "Company has no debt"
      ],
      correct: 1,
      explanation: "Trading on equity (using debt to boost equity returns) works only when the Return on Investment (ROI) is higher than the cost of debt.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-006", type: "mcq", difficulty: "medium",
      question: "A firm's EBIT is ₹5 lakh and interest expense is ₹1 lakh. The ICR is:",
      options: ["1", "3", "5", "4"],
      correct: 2,
      explanation: "ICR = EBIT / Interest = 5,00,000 / 1,00,000 = 5. A higher ICR means more ability to take on debt.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-007", type: "mcq", difficulty: "easy",
      question: "Which capital involves investment in long-term assets like land and buildings?",
      options: ["Working Capital", "Fixed Capital", "Liquid Capital", "Debt Capital"],
      correct: 1,
      explanation: "Fixed Capital refers to investments in long-term assets that are not easily converted to cash.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-008", type: "mcq", difficulty: "medium",
      question: "A company has a high tax rate of 35%. Why would it prefer debt financing?",
      options: [
        "Dividends are tax deductible",
        "Interest on debt is tax-deductible, reducing the effective cost",
        "Debt is always cheaper than equity",
        "SEBI requires debt financing"
      ],
      correct: 1,
      explanation: "Interest payments are tax-deductible, so with high tax rates, debt becomes relatively cheaper — tax shield benefit.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-009", type: "mcq", difficulty: "medium",
      question: "A retail store needs extra cash during the Diwali season to stock up on inventory. This refers to:",
      options: ["Fixed Capital need", "Seasonal Working Capital", "Investment Decision", "Long-term finance"],
      correct: 1,
      explanation: "Seasonal factors creating temporary increases in stocks/inventory is a key factor affecting working capital.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-010", type: "mcq", difficulty: "hard",
      question: "Which type of business requires MORE working capital?",
      options: ["Trading firm (wholesale shop)", "Software IT company", "Manufacturing firm", "Consultancy firm"],
      correct: 2,
      explanation: "Manufacturing firms require more working capital because they hold raw materials, WIP, and finished goods — each stage tying up funds.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-011", type: "mcq", difficulty: "medium",
      question: "Financial leverage refers to:",
      options: [
        "The proportion of fixed assets",
        "The proportion of debt in capital structure",
        "The interest income of a firm",
        "The dividend payout ratio"
      ],
      correct: 1,
      explanation: "Financial leverage = the use of debt (fixed-cost capital) in the capital structure. Higher leverage means more risk and more potential return.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-012", type: "mcq", difficulty: "easy",
      question: "Capital budgeting decisions are also called:",
      options: ["Dividend Decisions", "Financing Decisions", "Investment Decisions", "Working Capital Decisions"],
      correct: 2,
      explanation: "Capital Budgeting is the process of planning and managing a firm's long-term investments — an investment decision.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-013", type: "mcq", difficulty: "medium",
      question: "A company allows customers 90-day credit periods. This will:",
      options: [
        "Reduce working capital needs",
        "Increase working capital needs",
        "Not affect working capital",
        "Increase fixed capital needs"
      ],
      correct: 1,
      explanation: "Longer credit periods mean cash is tied up in debtors for longer — increasing the working capital requirement.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-014", type: "mcq", difficulty: "hard",
      question: "Under which condition would a firm REDUCE its dividend payout?",
      options: [
        "When profitable growth opportunities exist and funds are needed for reinvestment",
        "When shareholders demand higher dividends",
        "When the company has excess cash",
        "When share prices are rising"
      ],
      correct: 0,
      explanation: "If a firm has profitable investment opportunities, it retains more earnings and pays lower dividends to fund growth.",
      examTags: ["CUET"]
    },
    {
      id: "fm-q-015", type: "mcq", difficulty: "medium",
      question: "What is the primary reflection of Wealth Maximization as an objective?",
      options: [
        "Higher profits reported in P&L",
        "Market price of the company's equity shares",
        "Total assets of the company",
        "Number of employees"
      ],
      correct: 1,
      explanation: "Wealth maximization is reflected in the market price of shares — it captures profitability, risk, and future growth expectations.",
      examTags: ["CUET"]
    }
  ]
};
