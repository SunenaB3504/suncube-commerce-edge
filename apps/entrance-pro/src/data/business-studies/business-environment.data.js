// src/data/business-studies/business-environment.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const businessEnvironmentData = {
  subject: "Business Studies",
  chapter: "Business Environment",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u3-t1",
        title: "Concept & Dimensions of Business Environment",
        content: {
          coreConcept: `Business Environment is the sum total of all individuals, institutions, and forces that are outside the control of a business enterprise but that may affect its performance.

**Dimensions (PESTLE-S):**
1. **Economic**: Interest rates, inflation, GDP (GST, Demonetization).
2. **Social**: Customs, values, lifestyle (Health awareness).
3. **Technological**: Innovation and R&D (Digital payments, AI).
4. **Legal**: Legislations and court judgments (Consumer Protection Act).
5. **Political**: System of government and stability (General election results).`,
          speedSummary: "Environment = Forces (Economic, Social, Tech, Legal, Political) affecting business.",
          examples: [
            { q: "The RBI increases the Repo Rate, making business loans more expensive. Which dimension is this?", a: "Economic Environment." },
            { q: "A surge in health awareness leads to increased demand for diet soda and organic snacks. Identify the dimension.", a: "Social Environment." },
            { q: "A new government policy allows 100% FDI in retail. To which environment does this belong?", a: "Political/Legal Environment." },
            { q: "A fashion retailer launches a mobile app to allow virtual try-ons using AR. Which dimension is this?", a: "Technological Environment." },
            { q: "The court passes an order banning plastic bags in the city. Identify the dimension.", a: "Legal Environment." }
          ]
        }
      },
      {
        id: "bs-u3-t2",
        title: "LPG Policy (New Economic Policy 1991)",
        content: {
          coreConcept: `India introduced major reforms in 1991 to boost the economy:
- **Liberalization**: Removing unnecessary controls and restrictions (Unlocking economy).
- **Privatization**: Reducing the role of Public Sector; Sale of shares (Disinvestment).
- **Globalization**: Integrating the national economy with the world economy (MNCs, Foreign Trade).

**Impact of LPG:**
- Increasing competition.
- More demanding customers.
- Rapidly changing technological environment.
- Necessity for change.
- Market orientation.`,
          speedSummary: "LPG = Liberalization, Privatization, Globalization (1991 Reforms).",
          examples: [
            { q: "The government removes the requirement for a license to start a new garment factory. Name the reform.", a: "Liberalization." },
            { q: "The government decides to sell its majority stake in a public sector airline to a private conglomerate. Name the process.", a: "Privatization (Disinvestment)." },
            { q: "An Indian IT firm sets up offices in Europe and hires local talent while serving global clients. Which concept is this?", a: "Globalization." },
            { q: "Since 1991, customers have become more demanding and competition has increased. Why?", a: "This is the impact of LPG (New Economic Policy) which opened up the market." },
            { q: "A company shifts from a 'production-oriented' approach to a 'market-oriented' approach after reforms. What does this mean?", a: "Earlier firms sold what they produced; now they produce what the market/consumer wants (Market Orientation)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "be-fc-001", term: "Liberalization", definition: "Unlocking the economy from government controls and restrictions.", formula: null, example: "Removing license requirements for industries." },
    { id: "be-fc-002", term: "Privatization", definition: "Transfer of ownership/control from the public sector to the private sector.", formula: null, example: "Sale of government shares in Air India." },
    { id: "be-fc-003", term: "Globalization", definition: "Integrating the domestic economy with the world economy.", formula: null, example: "Apple selling iPhones in India." },
    { id: "be-fc-004", term: "Social Environment", definition: "Forces like customs, traditions, and social trends that affect business.", formula: null, example: "Rise in demand for organic food." },
    { id: "be-fc-005", term: "Technological Environment", definition: "Forces relating to scientific improvements and innovations.", formula: null, example: "Shift from traditional banking to Net Banking." },
    { id: "be-fc-006", term: "Demonetization", definition: "The withdrawal of a currency unit's status as legal tender.", formula: null, example: "Nov 8, 2016 ban on ₹500 and ₹1000 notes." }
  ],

  questions: [
    {
      id: "be-q-001", type: "mcq", difficulty: "easy",
      question: "Which dimension of business environment relates to 'Interest Rates and Inflation'?",
      options: ["Social", "Economic", "Political", "Legal"],
      correct: 1,
      explanation: "Economic environment includes factors like interest rates, inflation, and disposable income.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-002", type: "mcq", difficulty: "medium",
      question: "The 1991 policy aimed at 'integrating the national economy with the world' is:",
      options: ["Liberalization", "Privatization", "Globalization", "Modernization"],
      correct: 2,
      explanation: "Globalization is the process of integrating the local economy with the global market.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-003", type: "mcq", difficulty: "easy",
      question: "A rise in demand for organic food due to increased health awareness is an example of which environment?",
      options: ["Economic", "Social", "Technological", "Political"],
      correct: 1,
      explanation: "Social environment includes customs, traditions, and social trends. Health awareness is a social trend.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-004", type: "mcq", difficulty: "easy",
      question: "Removal of unnecessary government controls and licensing requirements from businesses is called:",
      options: ["Privatization", "Globalization", "Liberalization", "Nationalization"],
      correct: 2,
      explanation: "Liberalization involves reducing government regulations and restrictions to make the economy more market-friendly.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-005", type: "mcq", difficulty: "medium",
      question: "Demonetization of ₹500 and ₹1000 notes in November 2016 is an example of which environment?",
      options: ["Social", "Technological", "Economic", "Legal"],
      correct: 2,
      explanation: "Demonetization directly affected purchasing power and liquidity — it is part of the Economic Environment.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-006", type: "mcq", difficulty: "medium",
      question: "The government sells its majority stake in a public-sector bank to a private company. This is called:",
      options: ["Liberalization", "Globalization", "Privatization", "Nationalization"],
      correct: 2,
      explanation: "Privatization (Disinvestment) refers to the transfer of ownership or management from the public sector to private hands.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-007", type: "mcq", difficulty: "medium",
      question: "A new consumer protection law passed by parliament falls under which business environment dimension?",
      options: ["Economic", "Political", "Legal", "Social"],
      correct: 2,
      explanation: "Legal environment includes laws, court decisions, and government regulations like the Consumer Protection Act.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-008", type: "mcq", difficulty: "easy",
      question: "The shift from traditional banking to internet banking (Net Banking) is an example of:",
      options: ["Economic environment", "Social environment", "Technological environment", "Legal environment"],
      correct: 2,
      explanation: "Technological environment includes scientific innovations and improvements. Net banking is a technological change.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-009", type: "mcq", difficulty: "hard",
      question: "Which of the following is NOT a direct impact of the 1991 New Economic Policy (LPG reforms)?",
      options: [
        "Increasing competition",
        "More demanding customers",
        "Decreasing importance of technology",
        "Market orientation by firms"
      ],
      correct: 2,
      explanation: "LPG reforms actually increased the importance of technology. They resulted in more competition, demanding customers, and market-oriented firms.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-010", type: "mcq", difficulty: "medium",
      question: "Result of an election that brings a stable majority government would primarily affect which environment?",
      options: ["Legal", "Economic", "Political", "Social"],
      correct: 2,
      explanation: "Political environment includes the political system, the type of government, and its stability — election results directly impact it.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-011", type: "mcq", difficulty: "medium",
      question: "Business Environment is described as 'Specific' because:",
      options: [
        "It affects all businesses equally",
        "Each dimension has a different impact on different businesses",
        "It is the same globally",
        "Only legal forces matter"
      ],
      correct: 1,
      explanation: "Business environment is specific in its impact — for example, a rise in fuel prices impacts a transport company more than a software firm.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-012", type: "mcq", difficulty: "easy",
      question: "The full form of LPG in the context of India's 1991 economic reforms is:",
      options: [
        "Liberal, Productive, Growing",
        "Liberalization, Privatization, Globalization",
        "Licensing, Pricing, Governance",
        "Labor, Production, Growth"
      ],
      correct: 1,
      explanation: "LPG stands for Liberalization, Privatization, and Globalization — the three pillars of India's 1991 New Economic Policy.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-013", type: "mcq", difficulty: "medium",
      question: "Business environment is 'Dynamic' because:",
      options: [
        "It never changes",
        "It is always certain",
        "It keeps changing constantly",
        "Businesses fully control it"
      ],
      correct: 2,
      explanation: "Business environment is dynamic — it keeps changing due to technological, economic, social, political, and legal shifts.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-014", type: "mcq", difficulty: "hard",
      question: "A fashion brand adopts sustainable packaging after customers demand eco-friendly options. Which environment triggered this change?",
      options: ["Economic", "Social", "Technological", "Legal"],
      correct: 1,
      explanation: "Changing customer values and social trends towards sustainability fall under the Social Environment.",
      examTags: ["CUET"]
    },
    {
      id: "be-q-015", type: "mcq", difficulty: "medium",
      question: "Opening up of economy means allowing private sector companies to set up businesses in sectors previously reserved for the state. This relates to:",
      options: ["Globalization", "Liberalization", "Privatization", "Both Liberalization and Privatization"],
      correct: 3,
      explanation: "Opening up reserved sectors involves both Liberalization (removing restrictions) and Privatization (allowing private players).",
      examTags: ["CUET"]
    }
  ]
};
