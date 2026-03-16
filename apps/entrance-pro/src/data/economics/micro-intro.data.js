// src/data/economics/micro-intro.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const microIntroData = {
  subject: "Economics",
  chapter: "Introduction to Microeconomics (Unit 9)",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u9-t1",
        title: "Basic Concepts: Scarcity & Choice",
        content: {
          coreConcept: `
Microeconomics studies the behavior of individual economic units (households, firms).

### The Economic Problem
The heart of all economic problems is **Scarcity**.
- **Scarcity**: Wants > Resources.
- **Choice**: Selecting from alternatives due to scarcity.

### 3 Central Problems
Every economy faces these three basic questions:
1. **What to produce**: Choice of goods and quantities.
2. **How to produce**: Choice of technique (Labor Intensive vs. Capital Intensive).
3. **For whom to produce**: Distribution of income/output.
          `,
          examples: [
            { q: "If a farmer chooses to grow rice instead of wheat, it's a choice of?", a: "What to produce." },
            { q: "Is 'Scarcity' only for poor countries?", a: "No, scarcity is universal for all economies." },
            { q: "Choosing between robots and manual labor for production is?", a: "How to produce." },
            { q: "Decision about wealth distribution relates to?", a: "For whom to produce." }
          ]
        }
      },
      {
        id: "eco-u9-t2",
        title: "Production Possibility Curve (PPC)",
        content: {
          coreConcept: `
A curve showing the maximum combinations of two goods an economy can produce given fixed resources and technology.

### Key Assumptions
1. Resources are fixed but transferable.
2. Only two goods are produced.
3. Resources are not equally efficient in all productions.

### Properties
1. **Slopes Downwards**: To produce more of one good, we must sacrifice some of the other.
2. **Concave to Origin**: Due to **Increasing Marginal Opportunity Cost (MOC)**.

### MOC & MRT
- **MOC**: The units sacrificed of Good Y to produce an additional unit of Good X.
- **MRT (Marginal Rate of Transformation)**: The ratio $\\frac{\\Delta\\text{Sacrifice}}{\\Delta\\text{Gain}}$.
          `,
          examples: [
            { q: "Why does PPC slope downwards?", a: "Due to scarcity; to produce more of one good, we must sacrifice some of the other." },
            { q: "What causes PPC to shift right?", a: "Growth of resources or improvement in technology." },
            { q: "Initial output: 10 units of Rice & 5 of Wheat. New output: 8 units of Rice & 6 of Wheat. MOC?", a: "2 units of Rice." }
          ]
        }
      },
      {
        id: "eco-u9-t3",
        title: "Positive vs. Normative Economics",
        content: {
          coreConcept: `
### Positive Economics
- Deals with **"What is"** or **"What was"**.
- Based on facts and figures.
- Example: "The unemployment rate in India is 7%." (Can be verified).

### Normative Economics
- Deals with **"What ought to be"** or **"What should be"**.
- Based on opinions and value judgments.
- Example: "The government should provide free healthcare." (Subjective).
          `,
          examples: [
            { q: "Is 'Price level in India is rising' positive or normative?", a: "Positive (Fact-based)." },
            { q: "Is 'India should focus more on agriculture' positive or normative?", a: "Normative (Opinion-based)." },
            { q: "Which type of statement can be tested or verified?", a: "Positive statements." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u9-fc1", question: "What is the root cause of all economic problems?", answer: "Scarcity of resources." },
    { id: "eco-u9-fc2", question: "Describe the shape of the PPC.", answer: "Concave to the origin." },
    { id: "eco-u9-fc3", question: "What does a point INSIDE the PPC indicate?", answer: "Inefficient utilization or under-utilization of resources." },
    { id: "eco-u9-fc4", question: "What is Marginal Opportunity Cost (MOC)?", answer: "The loss of output of one good when resources are shifted to another." },
    { id: "eco-u9-fc5", question: "Distinguish between Micro and Macro Economics.", answer: "Micro = Individuals/Firms; Macro = Whole Economy (GDP, Inflation)." }
  ],

  questions: [
    {
      id: "eco-u9-q1",
      type: "mcq",
      question: "Which of the following is a central problem of an economy?",
      options: ["What to produce", "How to produce", "For whom to produce", "All of these"],
      correct: 3,
      explanation: "The three central problems are What, How, and For whom to produce. Therefore, 'All of these' is the correct answer.",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u9-q2",
      type: "mcq",
      question: "MRT stands for:",
      options: ["Marginal Rate of Transformation", "Marginal Rate of Tech", "Marginal Real Trade", "Maximum Rate of Transition"],
      correct: 0,
      explanation: "MRT is the slope of the PPC, representing the rate at which one good is sacrificed for another. Formula: $MRT = \\frac{\\Delta \\text{Sacrifice}}{\\Delta \\text{Gain}}$",
      examTags: ["CUET", "CBSE"]
    }
  ]
};
