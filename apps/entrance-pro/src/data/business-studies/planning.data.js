// src/data/business-studies/planning.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const planningData = {
  subject: "Business Studies",
  chapter: "Planning",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u4-t1",
        title: "Concept & Importance of Planning",
        content: {
          coreConcept: `**Planning** is deciding in advance what to do and how to do it. It bridges the gap between where we are and where we want to go.

**Importance:**
- Provides Direction.
- Reduces risk of uncertainty.
- Reduces overlapping and wasteful activities.
- Promotes innovative ideas.
- Facilitates decision making.
- Establishes standards for **Controlling**.`,
          speedSummary: "Planning = Deciding in advance; Bridges the gap between present and future.",
          examples: [
            { q: "A company wants to increase its market share from 10% to 15% next year. What is this?", a: "This is Planning (bridging the gap between the current 10% and the desired 15%)." },
            { q: "By setting clear goals, a team knows exactly what to work towards. Which benefit of planning is this?", a: "Planning Provides Direction." },
            { q: "A manager uses the plan to check if the actual sales match the targets. How does planning help here?", a: "Planning Establishes standards for Controlling." }
          ]
        }
      },
      {
        id: "bs-u4-t2",
        title: "Planning Process",
        content: {
          coreConcept: `The sequence of steps in planning:
1. **Setting Objectives**: What the organization wants to achieve.
2. **Developing Premises**: Assumptions about the future.
3. **Identifying Alternatives**: Listing various ways to achieve goals.
4. **Evaluating Alternatives**: Checking pros and cons of each.
5. **Selecting an Alternative**: Choosing the best path.
6. **Implementing the Plan**: Putting plan into action.
7. **Follow-up Action**: Monitoring if plan is working.`,
          speedSummary: "Set Obj -> Premises -> Alternatives -> Evaluate -> Select -> Implement -> Follow-up.",
          examples: [
            { q: "A manager assumes that a new tax law will be passed next year while making a 5-year plan. Name this step.", a: "Developing Premises (assumptions about the future)." },
            { q: "A business compares 3 different delivery partners based on cost and speed. Name this step.", a: "Evaluating Alternatives." },
            { q: "After launching a new product, the manager checks weekly reports to see if the plan is working. Name this step.", a: "Follow-up Action." }
          ]
        }
      },
      {
        id: "bs-u4-t3",
        title: "Types of Plans",
        content: {
          coreConcept: `**Single-use Plans**: Non-recurring situations (Budget, Programme, Project).

**Standing Plans**: Used for recurring activities (Policy, Procedure, Rule, Method).

**Key Plan Types:**
- **Objectives**: Desired results.
- **Strategy**: Comprehensive long-term plan.
- **Rules**: Specific statements (Do/Don't).
- **Procedures**: Chronological steps (How to do).`,
          speedSummary: "Standing (Repeated) vs Single-use (One-time) plans.",
          examples: [
            { q: "A sign in the office says 'No Smoking'. What type of plan is this?", a: "A Rule (Standing Plan)." },
            { q: "A detailed manual explains the 10 steps to process a customer refund. Name the plan.", a: "A Procedure (Standing Plan)." },
            { q: "A company creates a detailed financial plan specifically for the 'Summer Sale 2025' event. Name it.", a: "A Budget or Programme (Single-use Plan)." },
            { q: "A firm decides its long-term move to enter the South Asian market by 2030. Name the plan type.", a: "A Strategy." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "pl-fc-001", term: "Planning", definition: "Bridging the gap between where we are and where we want to be.", formula: null, example: "Setting a 20% sales growth target." },
    { id: "pl-fc-002", term: "Developing Premises", definition: "Making assumptions about the future conditions for planning.", formula: null, example: "Assuming raw material prices will remain stable." },
    { id: "pl-fc-003", term: "Strategy", definition: "A comprehensive plan for achieving an organization's objectives.", formula: null, example: "A multi-year digital transformation plan." },
    { id: "pl-fc-004", term: "Single-use Plan", definition: "Plan developed for a non-recurring project or event.", formula: null, example: "A budget for an annual office party." }
  ],

  questions: [
    {
      id: "pl-q-001", type: "mcq", difficulty: "easy",
      question: "Which step in the planning process involves making assumptions about the future?",
      options: ["Setting Objectives", "Developing Premises", "Evaluating Alternatives", "Follow-up"],
      correct: 1,
      explanation: "Developing Premises refers to making assumptions about future conditions and events.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-002", type: "mcq", difficulty: "easy",
      question: "Planning is described as 'bridging the gap' between:",
      options: [
        "Income and expenses",
        "Where we are and where we want to go",
        "Production and distribution",
        "Managers and workers"
      ],
      correct: 1,
      explanation: "Planning bridges the gap between the present state and the desired future state of an organization.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-003", type: "mcq", difficulty: "medium",
      question: "Saurabh set a target of earning 10% profit in the first year of his chocolate business. Which function of management is involved?",
      options: ["Organising", "Directing", "Planning", "Controlling"],
      correct: 2,
      explanation: "Setting objectives and deciding how to achieve them is the function of Planning.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-004", type: "mcq", difficulty: "medium",
      question: "A company creates a detailed financial plan for its upcoming 'Summer Sale 2025'. This is an example of which type of plan?",
      options: ["Standing Plan", "Policy", "Single-use Plan (Budget)", "Procedure"],
      correct: 2,
      explanation: "A Budget for a specific, non-recurring event is a Single-use Plan.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-005", type: "mcq", difficulty: "easy",
      question: "A 'No Smoking' sign in an office is an example of which type of plan?",
      options: ["Strategy", "Budget", "Programme", "Rule"],
      correct: 3,
      explanation: "A Rule is a specific, mandatory statement that dictates what must or must not be done (e.g., No Smoking).",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-006", type: "mcq", difficulty: "medium",
      question: "The first and most fundamental step in the planning process is:",
      options: ["Identifying Alternatives", "Developing Premises", "Setting Objectives", "Implementing the Plan"],
      correct: 2,
      explanation: "Setting Objectives is the first step in the planning process — you must know where you want to go before deciding how to get there.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-007", type: "mcq", difficulty: "medium",
      question: "Planning is said to be 'pervasive' because:",
      options: [
        "Only top managers plan",
        "It is required at all levels of management",
        "It reduces costs only",
        "Plans never need revision"
      ],
      correct: 1,
      explanation: "Planning is pervasive — it is required at all levels (top, middle, and operational) of management.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-008", type: "mcq", difficulty: "hard",
      question: "Which limitation of planning is highlighted when a manager avoids innovative ideas to stay within a rigid plan?",
      options: ["Planning is time-consuming", "Planning leads to rigidity", "Planning reduces efficiency", "Planning ignores external factors"],
      correct: 1,
      explanation: "Planning can lead to rigidity — once plans are set, managers may be reluctant to deviate even when circumstances change.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-009", type: "mcq", difficulty: "medium",
      question: "A step-by-step manual for processing customer refunds is an example of which type of plan?",
      options: ["Rule", "Policy", "Procedure", "Strategy"],
      correct: 2,
      explanation: "A Procedure is a chronological set of steps detailing how an activity is to be performed.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-010", type: "mcq", difficulty: "easy",
      question: "Planning establishes standards for which other function of management?",
      options: ["Organising", "Staffing", "Controlling", "Directing"],
      correct: 2,
      explanation: "Plans set targets (standards) which are then used by Controlling to measure actual performance.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-011", type: "mcq", difficulty: "medium",
      question: "A firm's long-term plan to enter South Asia by 2030 is an example of:",
      options: ["Rule", "Policy", "Procedure", "Strategy"],
      correct: 3,
      explanation: "Strategy is a comprehensive, long-term plan to achieve organizational objectives in a competitive environment.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-012", type: "mcq", difficulty: "hard",
      question: "Planning does NOT guarantee success because:",
      options: [
        "It is too expensive",
        "Managers refuse to plan",
        "Future is uncertain and premises may prove wrong",
        "Planning ignores employee needs"
      ],
      correct: 2,
      explanation: "Planning is based on premises (assumptions about the future). If those assumptions prove wrong, the plan may fail.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-013", type: "mcq", difficulty: "medium",
      question: "Which of the following is a Standing Plan?",
      options: ["Annual Budget", "Project Plan", "Policy on Employee Leave", "Summer Sale Programme"],
      correct: 2,
      explanation: "A Policy on Employee Leave is a Standing Plan — it is used repeatedly for recurring situations.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-014", type: "mcq", difficulty: "easy",
      question: "Planning reduces overlapping and wasteful activities because:",
      options: [
        "It removes all employees",
        "It coordinates activities and allocates resources in advance",
        "It increases competition",
        "It delegates all decisions"
      ],
      correct: 1,
      explanation: "By planning in advance, resources are allocated and activities coordinated, eliminating duplication and wasted effort.",
      examTags: ["CUET"]
    },
    {
      id: "pl-q-015", type: "mcq", difficulty: "medium",
      question: "The step where a manager checks if the final plan is working correctly after implementation is called:",
      options: ["Setting Objectives", "Evaluating Alternatives", "Implementing the Plan", "Follow-up Action"],
      correct: 3,
      explanation: "Follow-up Action involves monitoring plan implementation and taking corrective measures if actual results deviate.",
      examTags: ["CUET"]
    }
  ]
};
