// src/data/economics/national-income.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const nationalIncomeData = {
  subject: "Economics",
  chapter: "National Income & Related Aggregates",
  examTags: ["CUET", "CBSE"],

  studyGuide: {
    topics: [
      {
        id: "eco-u1-t1",
        title: "Introduction to Macroeconomics",
        content: {
          coreConcept: `
Macroeconomics is the study of the economy as a whole — its origins, scope, and major decision-makers.

### Microeconomics vs Macroeconomics
| Basis | Microeconomics | Macroeconomics |
| :--- | :--- | :--- |
| **Unit of Study** | Individual agents (consumer, firm) | Entire economy (aggregate) |
| **Focus** | Price determination of individual goods | Income, Employment, Inflation determination |
| **Decision Maker** | Private individuals and firms | State / Statutory bodies (RBI, SEBI) |
| **Key Variables** | Individual demand, supply, price | GDP, Price Level, Unemployment |
| **Historical Origin** | Adam Smith (1776) | J.M. Keynes (1936) |

### Macroeconomic Decision Makers
Unlike microeconomics, macro involves the State and statutory bodies:
- **RBI**: Controls monetary policy.
- **SEBI**: Regulates capital markets.
- **Ministry of Finance**: Controls fiscal policy.

### Birth of Macroeconomics
The Great Depression (1929) shattered the belief in self-correcting markets.
- **Classical View**: "Supply creates its own demand" (Say's Law).
- **Keynesian Revolution**: J.M. Keynes published "The General Theory" (1936), advocating for government intervention to manage demand.
          `,
          speedSummary: "Macroeconomics focuses on aggregates like GDP and inflation, influenced by institutions like RBI/SEBI, and rose following the failure of classical theories during the Great Depression.",
          examples: [
            { q: "Is 'Study of demand for cars' Micro or Macro?", a: "Micro (Individual market)." },
            { q: "Is 'Study of India's GDP growth' Micro or Macro?", a: "Macro (Entire economy)." }
          ]
        }
      },
      {
        id: "eco-u1-t2",
        title: "Basic Concepts in Macroeconomics",
        content: {
          coreConcept: `
Fundamental building blocks of macroeconomics include goods classification, income types, and stock/flow variables.

### Final vs Intermediate Goods
| Basis | Final Goods | Intermediate Goods |
| :--- | :--- | :--- |
| **Usage** | End use — consumption or investment | Used as raw material or for resale |
| **Value Addition** | No further value to be added | Value is still to be added |
| **Accounting** | Included in National Income | Excluded to avoid double counting |
| **Example** | Milk bought by a household | Milk bought by a sweet shop |

### Stocks vs Flows
- **Stock**: Measured at a **point in time** (e.g., Wealth, Capital, Inventory).
- **Flow**: Measured over a **period of time** (e.g., Income, Output, Investment).
- **Key Rule**: Change in Stock = Flow (e.g., Change in Inventory).

### Factor Income vs Transfer Income
- **Factor Income**: Earned for productive services (Rent, Wages, Interest, Profit). **Included** in NI.
- **Transfer Income**: Unilateral receipt without productive service (Pension, Scholarship). **Excluded** from NI.

### Precautions for National Income Inclusion
- **Self-consumed goods**: Included (imputed market value).
- **Self-consumed services**: Excluded (cannot be reliably valued).
- **Second-hand goods**: Excluded (already counted in year of production).
- **Interest on National Debt**: Excluded (treated as transfer payment).
          `,
          examples: [
            { q: "Is 'Scholarship given to a student' included in NI?", a: "No, it's a transfer income (unilateral)." },
            { q: "Is 'Salary of a teacher' a factor income?", a: "Yes, included in NI." },
            { q: "Inventory on 31st March is a?", a: "Stock variable." }
          ]
        }
      },
      {
        id: "eco-u1-t3",
        title: "Circular Flow of Income",
        content: {
          coreConcept: `
The continuous flow of production, income, and expenditure in an economy.

### Three Phases of Circular Flow
1. **Production Phase**: Firms produce goods using factor services.
2. **Income Phase**: Firms pay factor incomes (Rent, Wages, Interest, Profit).
3. **Expenditure Phase**: Households spend income on goods/services.

### Real Flow vs Money Flow
- **Real Flow**: Flow of physical services (factors) and goods between sectors.
- **Money Flow**: Flow of factor payments and consumption expenditure.

### Leakages and Injections
| Type | Item | Sector | Effect on Flow |
| :--- | :--- | :--- | :--- |
| **LEAKAGE** | Savings (S), Taxes (T), Imports (M) | Households/Firms | Withdraws money; reduces flow |
| **INJECTION** | Investment (I), Govt Spending (G), Exports (X) | Firms/Govt | Adds money; increases flow |

**Equilibrium**: S + T + M = I + G + X
          `,
          examples: [
            { q: "Is 'Saving' a leakage or injection?", a: "Leakage (withdraws money from flow)." },
            { q: "Is 'Investment' an injection?", a: "Yes (adds money to flow)." }
          ]
        }
      },
      {
        id: "eco-u1-t4",
        title: "National Income Aggregates",
        content: {
          coreConcept: `
Aggregates like GDP and NNP are connected via three golden conversion rules.

### The Three Golden Conversion Rules
1. **Gross ↔ Net**: Gross − Depreciation (CFC) = Net.
2. **Domestic ↔ National**: Domestic + NFIA = National.
3. **Market Price ↔ Factor Cost**: Market Price − NIT = Factor Cost (NIT = Indirect Taxes − Subsidies).

### Real GDP vs Nominal GDP
| Feature | Nominal GDP | Real GDP |
| :--- | :--- | :--- |
| **Prices** | Current year prices | Base year (constant) prices |
| **Rises When** | Output or Prices rise | ONLY when output rises |
| **Indicator** | Money value of output | True economic growth (welfare) |

**GDP Deflator** = (Nominal GDP ÷ Real GDP) × 100
          `,
          examples: [
            { q: "How to get National Income from Domestic Income?", a: "Add NFIA (Net Factor Income from Abroad)." },
            { q: "Market Price - Net Indirect Taxes = ?", a: "Factor Cost (FC)." },
            { q: "True indicator of economic growth?", a: "Real GDP (it reflects output change alone)." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "eco-u1-fc1", question: "Define National Income (NNP at FC).", answer: "It is the sum total of factor incomes (rent, wages, interest, profit) earned by normal residents of a country during a year." },
    { id: "eco-u1-fc2", question: "Difference between Gross and Net investment?", answer: "Gross Investment includes depreciation, while Net Investment excludes it (Net = Gross - Depreciation)." },
    { id: "eco-u1-fc3", question: "What is a 'Stock' variable?", answer: "A variable measured at a particular point of time (e.g., Wealth, Capital)." },
    { id: "eco-u1-fc4", question: "What is a 'Flow' variable?", answer: "A variable measured over a period of time (e.g., Income, Expenditure)." },
    { id: "eco-u1-fc5", question: "Formula for GDP at MP to NNP at FC?", answer: "GDP at MP (-) Depreciation (+) NFIA (-) NIT = NNP at FC." },
    { id: "eco-u1-fc6", question: "What are Intermediate Goods?", answer: "Goods used for resale or as raw material in the same year. Not included in National Income." },
    { id: "eco-u1-fc7", question: "What are Transfer Payments?", answer: "Unilateral payments received without any productive service (e.g., Old age pension, scholarships)." },
    { id: "eco-u1-fc8", question: "Define Operating Surplus.", answer: "Income from property and entrepreneurship (Rent + Interest + Profit)." }
  ],

  questions: [
    {
      id: "eco-u1-q1",
      type: "mcq",
      question: "Which of the following is included in National Income?",
      options: ["Old age pension", "Interest on national debt", "Salary of a teacher", "Scholarship to a student"],
      correct: 2, // Changed from "C" to 2 (index of "Salary of a teacher")
      explanation: "Salary of a teacher is factor income (payment for a productive service) and is included. Others are transfer payments.", // Original explanation is still valid for this question
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u1-q2",
      type: "mcq",
      question: "Real GDP is calculated using:",
      options: ["Current Prices", "Base Year Prices", "Market Prices", "None of these"],
      correct: 1,
      explanation: "Real GDP uses constant (base year) prices to eliminate the effect of inflation. Formula: $\\text{Real GDP} = \\frac{\\text{Nominal GDP}}{\\text{Price Index}} \\times 100$",
      examTags: ["CUET", "CBSE"]
    },
    {
      id: "eco-u1-q3", // Original eco-u1-q2 is now eco-u1-q3
      type: "mcq",
      question: "Statement 1: Net investment is a stock concept.\nStatement 2: Capital is a flow concept.",
      options: ["Statement 1 is true", "Statement 2 is true", "Both are true", "Both are false"],
      correct: 3, // Changed from "D" to 3 (index of "Both are false")
      explanation: "Investment is a flow (over time), and Capital is a stock (at a point in time)."
    },
    {
      id: "eco-u1-q5",
      type: "numerical",
      question: "GDP at MP = ₹500 cr, Depreciation = ₹50 cr. Find NDP at MP.",
      options: ["₹550 cr", "₹450 cr", "₹500 cr", "₹400 cr"],
      correct: 1,
      explanation: "NDP at MP = GDP at MP - Depreciation = 500 - 50 = 450."
    }
  ]
};
