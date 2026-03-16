// src/data/business-studies/financial-markets.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const financialMarketsData = {
  subject: "Business Studies",
  chapter: "Financial Markets",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u10-t1",
        title: "Concept of Financial Market",
        content: {
          coreConcept: `Financial Market is a link between **Savers** (Households) and **Investors** (Business Firms). It performs the function of **Allocative Efficiency**.

**Functions:**
- Mobilisation of savings.
- Price discovery.
- Providing liquidity to financial assets.
- Reducing the cost of transactions.`,
          speedSummary: "Financial Market = Link between Savers and Investors.",
          examples: [
            { q: "A family puts their savings into a mutual fund which then invests in a new startup. Which function is this?", a: "Mobilisation of savings and channeling them into productive uses." },
            { q: "Shares of a company rise from ₹200 to ₹250 because of high demand. Which function is performed?", a: "Price Discovery." },
            { q: "An investor needs cash urgently and sells his shares on the stock exchange in 5 minutes. Name the function.", a: "Providing Liquidity to financial assets." }
          ]
        }
      },
      {
        id: "bs-u10-t2",
        title: "Money Market vs Capital Market",
        content: {
          coreConcept: `**Money Market**: Short-term funds (up to 1 year).
**Capital Market**: Long-term funds (Equity, Debentures).

**Money Market Instruments:**
- **Treasury Bill (T-Bill)**: Zero-coupon bond issued by RBI for Govt (Safe, Liquid).
- **Commercial Paper (CP)**: Unsecured promissory note by large firms (Bridge financing).
- **Call Money**: Inter-bank 1 to 15 days borrowing.
- **Certificate of Deposit (CD)**: Issued by banks to retail/corp.
- **Commercial Bill**: Bill of exchange for credit sales.

| Basis | Money Market | Capital Market |
| :--- | :--- | :--- |
| Duration | Under 1 year | Long term |
| Instruments | T-Bills, CP, Call Money | Shares, Debentures |
| Risk | Low | High |
| Liquidity | High | Low |`,
          speedSummary: "Money (Short-term) vs Capital (Long-term) markets.",
          examples: [
            { q: "The RBI issues a security to help the government raise funds for 91 days. Name the instrument.", a: "Treasury Bill (T-Bill)." },
            { q: "A blue-chip company needs funds for 3 months to pay for a raw material shipment. Which instrument should it use?", a: "Commercial Paper (CP)." },
            { q: "A bank borrows funds from another bank for just one day to meet its reserve requirements. Name it.", a: "Call Money." }
          ]
        }
      },
      {
        id: "bs-u10-t3",
        title: "Stock Exchange & SEBI",
        content: {
          coreConcept: `**Primary Market**: Fresh issue of securities (IPO).
**Secondary Market**: Trading of existing securities (Stock Exchange).

**SEBI (Securities and Exchange Board of India):**
- **Protective Functions**: Prohibiting insider trading, price rigging, and promoting fair practices.
- **Developmental Functions**: Training intermediaries, conducting research.
- **Regulatory Functions**: Registration of brokers, conducting audits, and framing rules.`,
          speedSummary: "SEBI = Regulator (Protective, Developmental, Regulatory roles).",
          examples: [
            { q: "A company issues shares to the public for the first time. In which market does this happen?", a: "Primary Market (IPO)." },
            { q: "An investor buys existing shares of Infosys on the National Stock Exchange (NSE). Name the market.", a: "Secondary Market." },
            { q: "SEBI cancels the license of a broker who was found guilty of cheating clients. Which function is this?", a: "Protective function." },
            { q: "SEBI conducts a seminar to train stock brokers on new digital rules. Name the function.", a: "Developmental function." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "fmk-fc-001", term: "Money Market", definition: "Market for short-term financial assets with maturity up to one year.", formula: null, example: "Inter-bank lending via call money." },
    { id: "fmk-fc-002", term: "Treasury Bill", definition: "Short-term instrument issued by RBI on behalf of the Govt, also called Zero Coupon Bond.", formula: null, example: "A 91-day T-bill." },
    { id: "fmk-fc-003", term: "Commercial Paper", definition: "Unsecured promissory note issued by highly rated companies to raise short-term funds.", formula: null, example: "A blue-chip company raising funds for a month." },
    { id: "fmk-fc-004", term: "IPO", definition: "Initial Public Offer - first time issue of shares to the public in the primary market.", formula: null, example: "Zomato's first share sale in 2021." },
    { id: "fmk-fc-005", term: "SEBI", definition: "Securities and Exchange Board of India - the regulator of capital markets in India.", formula: null, example: "SEBI fining a company for misleading ads." }
  ],

  questions: [
    {
      id: "fmk-q-001", type: "mcq", difficulty: "easy",
      question: "Which instrument is also known as a 'Zero Coupon Bond'?",
      options: ["Commercial Paper", "Treasury Bill", "Call Money", "Equity Share"],
      correct: 1,
      explanation: "T-Bills are issued at a discount and redeemed at par, hence they carry no coupon interest rate (Zero Coupon).",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-002", type: "mcq", difficulty: "easy",
      question: "The market that links Savers (households) and Investors (firms) is called:",
      options: ["Labour Market", "Financial Market", "Commodity Market", "Goods Market"],
      correct: 1,
      explanation: "Financial Market acts as a bridge — channeling savings from households into productive investments by business firms.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-003", type: "mcq", difficulty: "medium",
      question: "A company issues its shares to the public for the first time. In which market does this take place?",
      options: ["Secondary Market", "Money Market", "Primary Market", "Capital Market only"],
      correct: 2,
      explanation: "Primary Market is where new/fresh securities are issued for the first time (IPO takes place here).",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-004", type: "mcq", difficulty: "easy",
      question: "An investor buys existing Infosys shares on the NSE. This is which market?",
      options: ["Primary Market", "Money Market", "Secondary Market", "Commodity Market"],
      correct: 2,
      explanation: "Secondary Market (Stock Exchange) is where existing securities are bought and sold between investors.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-005", type: "mcq", difficulty: "medium",
      question: "Treasury Bills are issued by:",
      options: ["Large private companies", "Commercial banks", "RBI on behalf of the Government", "SEBI"],
      correct: 2,
      explanation: "T-Bills are short-term government securities issued by the RBI on behalf of the Central Government.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-006", type: "mcq", difficulty: "medium",
      question: "Commercial Paper (CP) is an unsecured promissory note used by:",
      options: ["Only the Government", "Highly rated companies for short-term financing", "Retail investors", "Small businesses"],
      correct: 1,
      explanation: "Commercial Paper is used by large, creditworthy corporations to raise short-term funds (bridge financing).",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-007", type: "mcq", difficulty: "easy",
      question: "Inter-bank borrowing for very short periods (1-15 days) is called:",
      options: ["Treasury Bill", "Commercial Bill", "Certificate of Deposit", "Call Money"],
      correct: 3,
      explanation: "Call Money is overnight or very short-term borrowing between banks to manage their daily liquidity requirements.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-008", type: "mcq", difficulty: "medium",
      question: "SEBI prohibiting insider trading and price rigging is an example of its:",
      options: ["Developmental Function", "Regulatory Function", "Protective Function", "Marketing Function"],
      correct: 2,
      explanation: "Protective functions include prohibiting fraudulent activities like insider trading to safeguard investor interests.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-009", type: "mcq", difficulty: "medium",
      question: "SEBI conducting training programs for stock brokers is an example of its:",
      options: ["Protective Function", "Developmental Function", "Regulatory Function", "Legal Function"],
      correct: 1,
      explanation: "Developmental functions of SEBI include education, training of intermediaries, and conducting research.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-010", type: "mcq", difficulty: "easy",
      question: "The ability to quickly convert a financial instrument into cash is called:",
      options: ["Profitability", "Liquidity", "Solvency", "Price Discovery"],
      correct: 1,
      explanation: "Liquidity refers to how easily an asset can be converted to cash. Financial markets provide liquidity to investors.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-011", type: "mcq", difficulty: "medium",
      question: "Which of the following is a money market instrument?",
      options: ["Equity Shares", "Debentures", "Treasury Bills", "Preference Shares"],
      correct: 2,
      explanation: "Treasury Bills are short-term (under 1 year) instruments, making them a money market instrument.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-012", type: "mcq", difficulty: "hard",
      question: "The capital market deals in funds with a maturity of:",
      options: ["Less than 1 year", "Exactly 1 year", "More than 1 year (long-term)", "No maturity (perpetual only)"],
      correct: 2,
      explanation: "Capital market deals in long-term funds (instruments like equity shares and debentures with maturity beyond 1 year).",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-013", type: "mcq", difficulty: "medium",
      question: "When the market determines the fair price of a security through trading activity, this is called:",
      options: ["Price Rigging", "Price Discovery", "Price Manipulation", "Price Setting"],
      correct: 1,
      explanation: "Price Discovery is the function of financial markets where supply and demand interaction sets the fair market price.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-014", type: "mcq", difficulty: "medium",
      question: "SEBI cancelling the registration of a fraudulent broker is an example of:",
      options: ["Developmental function", "Protective function", "Regulatory function", "Research function"],
      correct: 2,
      explanation: "Regulatory functions of SEBI include registration and periodic monitoring of market intermediaries.",
      examTags: ["CUET"]
    },
    {
      id: "fmk-q-015", type: "mcq", difficulty: "medium",
      question: "Zomato selling shares to the public for the first time in 2021 is an example of:",
      options: ["Secondary Market Transaction", "Money Market Activity", "IPO (Initial Public Offer)", "Futures Trading"],
      correct: 2,
      explanation: "IPO (Initial Public Offer) is the first sale of a company's shares to the general public (in the Primary Market).",
      examTags: ["CUET"]
    }
  ]
};
