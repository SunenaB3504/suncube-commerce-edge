// src/data/business-studies/controlling.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const controllingData = {
  subject: "Business Studies",
  chapter: "Controlling",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u8-t1",
        title: "Concept & Importance of Controlling",
        content: {
          coreConcept: `**Controlling** is the process of ensuring that activities in an organisation are performed as per the plans.

**Importance:**
- **Accomplishing Goals**: Measures progress and highlights deviations.
- **Judging Standards**: Verifies if standards are realistic.
- **Efficient Use of Resources**: Reduces wastage.
- **Improving Motivation**: Known standards help employees perform.
- **Order & Discipline**: Monitoring discourages dishonest behavior.`,
          speedSummary: "Controlling = Standard vs Actual; Feedback loop for Planning.",
          examples: [
            { q: "Can a manager perform controlling if NO plan exists?", a: "No, controlling is impossible without standards, and standards are provided by Planning." },
            { q: "A manager notices that workers are wasting raw material and takes corrective action. Which importance of controlling is this?", a: "Ensuring efficient use of resources." },
            { q: "By telling employees exactly how their performance will be measured, a manager improves their morale. How?", a: "This is 'Improving Employee Motivation'—knowing the criteria for success helps performance." }
          ]
        }
      },
      {
        id: "bs-u8-t2",
        title: "Planning-Controlling Relationship",
        content: {
          coreConcept: `Planning and Controlling are "inseparable twins":
- **Standards from Planning**: Controlling is meaningless without plans.
- **Feedback from Controlling**: Planning is blind without control.
- **Forward & Backward looking**: Planning looks forward; Controlling looks backward (to evaluate) and forward (to correct).`,
          speedSummary: "Planning (Standards) <-> Controlling (Evaluation/Feedback).",
          examples: [
            { q: "Why is controlling called 'forward-looking'?", a: "Because the feedback from controlling helps in making better plans for the future." },
            { q: "Why is controlling called 'backward-looking'?", a: "Because it evaluates performance that has already happened in the past against set standards." },
            { q: "Planning is 'blind' without controlling. Explain.", a: "Without a control mechanism, a manager will never know if the plans are being executed or if they even work." }
          ]
        }
      },
      {
        id: "bs-u8-t3",
        title: "Controlling Process",
        content: {
          coreConcept: `Steps in the process:
1. **Setting Standards**: Measurable benchmarks (Quantitative/Qualitative).
2. **Measurement**: Gathering actual performance data.
3. **Comparison**: Finding deviations (Actual vs Standard).
4. **Analysing Deviations**:
   - **Critical Point Control (CPC)**: Focus on Key Result Areas (KRAs).
   - **Management by Exception (MBE)**: Report only significant deviations.
5. **Corrective Action**: Bringing performance back to plan.`,
          speedSummary: "Set Std -> Measure -> Compare -> Analyse (CPC/MBE) -> Correct.",
          examples: [
            { q: "A company sets a standard to produce 100 units per day. At the end of the day, it checks how many were actually made. What step is this?", a: "Measurement of Actual Performance." },
            { q: "A manager only reports to the CEO if expenses exceed the budget by more than 10%. Name this technique.", a: "Management by Exception (MBE)." },
            { q: "A factory owner focuses heavily on a 2% increase in labor cost rather than a 50% increase in postage cost. Name this technique.", a: "Critical Point Control (Focusing on Key Result Areas)." },
            { q: "The actual production was 80 units vs the standard of 100. The manager investigates the cause. Name the step.", a: "Analysing Deviations." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "co-fc-001", term: "Controlling", definition: "Ensuring organizational activities are performed as per plans", formula: null, example: "Checking if production targets were met at month end" },
    { id: "co-fc-002", term: "Critical Point Control (CPC)", definition: "Focusing control on Key Result Areas (KRAs) critical to success", formula: null, example: "Focusing on labor costs in a factory" },
    { id: "co-fc-003", term: "Management by Exception (MBE)", definition: "Reporting only significant deviations beyond permissible limits", formula: null, example: "Reporting only if expenses exceed budget by >10%" },
    { id: "co-fc-004", term: "Breakeven Analysis", definition: "Technique to study relationship between costs, volume, and profit", formula: null, example: "Finding how many units to sell to cover all costs" }
  ],

  questions: [
    {
      id: "co-q-001", type: "mcq", difficulty: "easy",
      question: "Which function of management brings the cycle back to planning?",
      options: ["Organising", "Staffing", "Directing", "Controlling"],
      correct: 3,
      explanation: "Controlling provides feedback which forms the basis for future planning, thus completing the loop.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-002", type: "mcq", difficulty: "easy",
      question: "The first step of the controlling process is:",
      options: ["Measuring actual performance", "Comparing actual vs standard", "Setting standards", "Taking corrective action"],
      correct: 2,
      explanation: "Setting Performance Standards is the first step — you must define what 'good' looks like before you can judge performance.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-003", type: "mcq", difficulty: "medium",
      question: "A manager only reports to the CEO when expenses exceed the budget by more than 10%. This technique is called:",
      options: ["Critical Point Control", "Management by Exception", "PERT Analysis", "Budgetary Control"],
      correct: 1,
      explanation: "Management by Exception (MBE) means only significant deviations are reported to higher management.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-004", type: "mcq", difficulty: "medium",
      question: "Controlling is described as both 'forward-looking' and 'backward-looking' because:",
      options: [
        "It plans the future and forgets the past",
        "It evaluates past performance and uses it to improve future actions",
        "It only looks at current activities",
        "It ignores past deviations"
      ],
      correct: 1,
      explanation: "Controlling is backward-looking (evaluates past performance) and forward-looking (feedback improves future plans).",
      examTags: ["CUET"]
    },
    {
      id: "co-q-005", type: "mcq", difficulty: "easy",
      question: "A company sets a target to produce 100 units per day. At day-end, actual production is measured. Which step is this?",
      options: ["Setting Standards", "Measuring Actual Performance", "Analysing Deviations", "Corrective Action"],
      correct: 1,
      explanation: "Measuring Actual Performance involves gathering data about what was actually achieved (e.g., units produced).",
      examTags: ["CUET"]
    },
    {
      id: "co-q-006", type: "mcq", difficulty: "medium",
      question: "Planning is 'blind' without controlling. This means:",
      options: [
        "Plans can work without any monitoring",
        "Without a control mechanism, management cannot know if plans are being executed",
        "Planning always succeeds automatically",
        "Controlling is an extension of planning"
      ],
      correct: 1,
      explanation: "Without controlling, there is no feedback on whether plans are being followed — making planning ineffective.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-007", type: "mcq", difficulty: "medium",
      question: "A manager focuses heavily on a 2% labor cost increase rather than a 50% stationery cost rise. Name this technique:",
      options: ["MBE", "Critical Point Control", "PERT", "Budgetary Control"],
      correct: 1,
      explanation: "Critical Point Control (CPC) means focusing attention on Key Result Areas (KRAs) critical to organizational success.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-008", type: "mcq", difficulty: "hard",
      question: "Controlling is impossible without:",
      options: ["Staffing", "Organising", "Planning", "Directing"],
      correct: 2,
      explanation: "Controlling requires standards and benchmarks, which are provided by Planning — no plan = no standard = no control.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-009", type: "mcq", difficulty: "medium",
      question: "Installing CCTV cameras in a store to monitor employee behavior is an importance of controlling related to:",
      options: ["Achieving goals", "Judging standards", "Order and Discipline", "Efficient use of resources"],
      correct: 2,
      explanation: "Controlling deters and detects dishonest behavior, maintaining Order and Discipline in the organization.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-010", type: "mcq", difficulty: "easy",
      question: "Which step in controlling involves finding the difference between actual output and planned targets?",
      options: ["Setting Standards", "Measuring Performance", "Comparison of Actual vs Standard", "Taking Corrective Action"],
      correct: 2,
      explanation: "Comparison involves finding deviations — the gap between what was planned and what was actually achieved.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-011", type: "mcq", difficulty: "medium",
      question: "Which type of standard in controlling cannot be measured in numbers?",
      options: ["Quantitative Standard", "Qualitative Standard", "Monetary Standard", "Physical Standard"],
      correct: 1,
      explanation: "Qualitative standards (e.g., good employee morale, customer satisfaction) cannot be expressed numerically.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-012", type: "mcq", difficulty: "hard",
      question: "Controlling helps in efficient use of resources by:",
      options: [
        "Hiring more employees",
        "Detecting wastage and taking corrective action to reduce it",
        "Increasing production targets",
        "Setting lower standards"
      ],
      correct: 1,
      explanation: "By monitoring performance and detecting inefficiencies, controlling prevents wastage of materials, time, and money.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-013", type: "mcq", difficulty: "medium",
      question: "The relationship between planning and controlling is best described as:",
      options: [
        "Independent functions",
        "Inseparable twins — each depends on the other",
        "Planning is more important than controlling",
        "Controlling can work without planning"
      ],
      correct: 1,
      explanation: "Planning and Controlling are 'inseparable twins' — planning sets standards and controlling uses those standards.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-014", type: "mcq", difficulty: "medium",
      question: "An employee knows she will be reviewed on 5 specific KPIs. This knowledge motivates her to meet them. Which importance of controlling is shown?",
      options: ["Goal Achievement", "Efficient Resources", "Improving Employee Motivation", "Order and Discipline"],
      correct: 2,
      explanation: "Known performance benchmarks help employees understand what is expected, improving their motivation to perform.",
      examTags: ["CUET"]
    },
    {
      id: "co-q-015", type: "mcq", difficulty: "easy",
      question: "Which of the following is a quantitative standard used in controlling?",
      options: ["Employee morale", "Customer satisfaction level", "Customer service quality", "Units of output per hour"],
      correct: 3,
      explanation: "A quantitative standard is expressed in numbers — 'units of output per hour' is measurable and quantifiable.",
      examTags: ["CUET"]
    }
  ]
};
