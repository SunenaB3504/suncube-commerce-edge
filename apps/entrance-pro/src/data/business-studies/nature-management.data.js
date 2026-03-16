// src/data/business-studies/nature-management.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const natureManagementData = {
  subject: "Business Studies",
  chapter: "Nature & Significance of Management",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u1-t1",
        title: "Introduction to Management",
        content: {
          coreConcept: `Management is a process of designing and maintaining an environment in which individuals, working together in groups, efficiently accomplish selected aims. It is essential for all organisations big or small, profit or non-profit, services or manufacturing.

**Core Functions (POSDC):**
1. **Planning**: Setting objectives and deciding how to achieve them.
2. **Organising**: Assigning duties and grouping tasks.
3. **Staffing**: Finding the right people for the right jobs.
4. **Directing**: Leading, influencing, and motivating employees.
5. **Controlling**: Monitoring performance against objectives.

**The Management Process cycle follows these steps in order:**
- Planning
- Organising
- Staffing
- Directing
- Controlling`,
          speedSummary: "Management = POSDC functions to achieve goals.",
          examples: [
            { q: "A manager sets a target to increase sales by 20% and assigns tasks to the team. Which function is this?", a: "This involves Planning (setting targets) and Organising (assigning tasks)." },
            { q: "A supervisor motivates workers to work harder for a bonus. Identify the function.", a: "Directing (Leading, influencing, and motivating employees)." }
          ]
        }
      },
      {
        id: "bs-u1-t2",
        title: "Effectiveness vs Efficiency",
        content: {
          coreConcept: `**Effectiveness**: Doing the right task, completing activities and achieving goals. Main focus is on the **end result** (Time).

**Efficiency**: Doing the task correctly and with minimum cost. Main focus is on the **cost-benefit analysis** (Resources).

| Basis | Effectiveness | Efficiency |
| :--- | :--- | :--- |
| Meaning | Completing the job on time | Completing job with minimum cost |
| Objective | To achieve end result | To conduct cost-benefit analysis |
| Main Focus | Time | Cost |

**Example**:
- Achieving target by operating double shifts = **Effective** but **Inefficient** (high cost).
- Producing at standard cost but missing deadline = **Efficient** but **Ineffective** (late).`,
          speedSummary: "Effectiveness = End Result (Time). Efficiency = Cost-Benefit (Resources).",
          examples: [
            { q: "A company produces 10,000 units on time but at double the expected cost. Is it efficient?", a: "No, it is effective (achieved goal on time) but inefficient (excessive cost)." },
            { q: "An employee uses a cheaper method to produce quality goods but misses the deadline. Is he effective?", a: "No, he is efficient (low cost) but ineffective (missed deadline)." }
          ]
        }
      },
      {
        id: "bs-u1-t3",
        title: "Characteristics of Management",
        content: {
          coreConcept: `1. **Goal Oriented Process**: Unites efforts towards common goals.
2. **Pervasive**: Required in all types of organizations and at all levels.
3. **Multidimensional**:
   - Management of Work
   - Management of People
   - Management of Operations
4. **Continuous Process**: Ongoing series of functions.
5. **Group Activity**: Requires teamwork and coordination.
6. **Dynamic Function**: Adapts to the changing environment.
7. **Intangible Force**: Presence is felt through orderliness and discipline.`,
          speedSummary: "Pervasive, Continuous, Multidimensional, Dynamic, and Intangible.",
          examples: [
            { q: "Does a small non-profit club require management?", a: "Yes, management is Pervasive; it is required in all types of organizations (profit or non-profit)." },
            { q: "A company changes its marketing strategy due to a new competitor entering the market. Which feature is shown?", a: "Dynamic Function (Adapting to the changing environment)." }
          ]
        }
      },
      {
        id: "bs-u1-t4",
        title: "Objectives of Management",
        content: {
          coreConcept: `**1. Organizational Objectives**:
- **Survival**: Earning revenue to cover costs.
- **Profit**: Covering risks and providing incentive.
- **Growth**: Expanding sales, products, or employees.

**2. Social Objectives**: Creating benefit for society (eco-friendly methods, employment).

**3. Personal Objectives**: Meeting needs of employees (fair wages, recognition).`,
          speedSummary: "Org (Survival/Profit/Growth), Social, and Personal.",
          examples: [
            { q: "A company opens five new branches in different cities. Identify the objective.", a: "Organizational Objective (specifically Growth)." },
            { q: "A firm provides free education to the children of its employees. Identify the objective.", a: "Social Objective (benefit for society/employees' families)." }
          ]
        }
      },
      {
        id: "bs-u1-t5",
        title: "Levels of Management",
        content: {
          coreConcept: `**Top Management** (Strategic):
- CEO, COO, Chairman. 
- Welfare, survival, and long-term goals.

**Middle Management** (Tactical):
- Division Heads, Department Managers. 
- Link between top and lower levels.

**Operational/Supervisory Management** (Technical):
- Foremen, Supervisors. 
- Oversee workforce, ensure quality, and minimize wastage.`,
          speedSummary: "Top (Strategic), Middle (Tactical), Operational (Technical).",
          examples: [
            { q: "A Production Manager is responsible for departmental output. At which level is he?", a: "Middle Level Management (Departmental/Divisional heads)." }
          ]
        }
      },
      {
        id: "bs-u1-t6",
        title: "Coordination: The Essence of Management",
        content: {
          coreConcept: `Coordination is the process of synchronising the activities of different departments. It binds all other functions.

**Characteristics**:
- Integrates group efforts.
- Ensures unity of action.
- Continuous and Pervasive.

| Basis | Coordination | Cooperation |
| :--- | :--- | :--- |
| Meaning | Orderly arrangement of group efforts | Voluntary effort of individuals |
| Nature | Deliberate and conscious effort | Voluntary and spontaneous |
| Requirement | Required by managers at all levels | Depends on individual willingness |`,
          speedSummary: "Coordination is the deliberate force that binds management functions.",
          examples: [
            { q: "Why is coordination called the 'essence of management'?", a: "Because it is not a separate function but a force that binds all other functions like Planning, Organising, etc." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "nsm-fc-001", term: "Management", definition: "Process of getting things done with the aim of achieving goals effectively and efficiently.", formula: null, example: "Coordinating a team to launch a product." },
    { id: "nsm-fc-002", term: "Effectiveness", definition: "Completing the right task and achieving goals within time (End result).", formula: null, example: "Meeting a production deadline." },
    { id: "nsm-fc-003", term: "Efficiency", definition: "Doing the task correctly with minimum cost (Input-Output relationship).", formula: null, example: "Using fewer raw materials to produce the same output." },
    { id: "nsm-fc-004", term: "Pervasive", definition: "Management is required in all types (economic/social/political) and sizes of organizations.", formula: null, example: "Management in a school and a factory." },
    { id: "nsm-fc-005", term: "Intangible Force", definition: "Management cannot be seen, but its presence is felt (orderliness, discipline).", formula: null, example: "A well-organized event vs a chaotic one." },
    { id: "nsm-fc-006", term: "Coordination", definition: "The process by which a manager synchronises the activities of different departments.", formula: null, example: "Matching production schedules with marketing campaigns." }
  ],

  questions: [
    {
      id: "nsm-q-001", type: "mcq", difficulty: "easy",
      question: "Which of the following describes 'Management is a continuous process'?",
      options: [
        "It involves a series of continuous, composite, but separate functions",
        "It can be applied to all types of organizations",
        "Needs of the environment change dynamically",
        "None of the above"
      ],
      correct: 0,
      explanation: "Management involves a series of ongoing, continuous, composite, but separate functions (POSDC).",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-002", type: "mcq", difficulty: "medium",
      question: "Which feature of profession is not strictly present in management?",
      options: [
        "Well defined body of knowledge",
        "Restricted Entry",
        "Service Motive",
        "Systematized body of knowledge"
      ],
      correct: 1,
      explanation: "Unlike medicine or law, there is no 'Restricted Entry' (specific degree required by law) or mandatory membership for managers.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-003", type: "mcq", difficulty: "easy",
      question: "Identify the force that binds all other functions of management.",
      options: ["Cooperation", "Coordination", "Planning", "Hierarchy"],
      correct: 1,
      explanation: "Coordination is the force that synchronizes the activities of different departments and binds the functions of management.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-004", type: "mcq", difficulty: "medium",
      question: "Adopting eco-friendly methods of production helps achieve which objective of management?",
      options: ["Organisational", "Social", "Personal", "Economic"],
      correct: 1,
      explanation: "Social objectives involve the creation of benefit for society, such as environmental protection through eco-friendly methods.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-005", type: "mcq", difficulty: "medium",
      question: "At which level of management do managers interpret the policies framed by top management?",
      options: [
        "Top Level Management",
        "Middle Level Management",
        "Operational Management",
        "None of the above"
      ],
      correct: 1,
      explanation: "Middle Level Management acts as a link between top and lower levels and is responsible for interpreting policies set by the top management.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-006", type: "mcq", difficulty: "easy",
      question: "The process of synchronisation of efforts for unity of action is called:",
      options: ["Management", "Administration", "Coordination", "Cooperation"],
      correct: 2,
      explanation: "'Synchronisation of efforts' and 'unity of action' are the primary definitional phrases for Coordination.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-007", type: "mcq", difficulty: "easy",
      question: "Foremen and Supervisors belong to which level of management?",
      options: ["Top Level", "Middle Level", "Supervisory/Operational Level", "None"],
      correct: 2,
      explanation: "Foremen and Supervisors directly oversee the actual workforce, placing them at Supervisory or Operational Management.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-008", type: "mcq", difficulty: "medium",
      question: "A company produces 10,000 units on time but at double the expected cost. It is best described as:",
      options: ["Efficient and Effective", "Efficient but Ineffective", "Effective but Inefficient", "Neither Efficient nor Effective"],
      correct: 2,
      explanation: "Effective because it achieved the goal on time, but Inefficient because it used excessive resources/cost.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-009", type: "mcq", difficulty: "medium",
      question: "Management is an intangible force. This means:",
      options: [
        "It is not important",
        "It cannot be seen but its presence is felt through orderliness",
        "It can be touched and measured",
        "It applies only to large organizations"
      ],
      correct: 1,
      explanation: "Management is intangible — it cannot be seen or touched, but its presence is felt through orderliness, discipline, and goal achievement.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-010", type: "mcq", difficulty: "hard",
      question: "Which characteristic of management is highlighted when McDonalds changed its menu to McAloo Tikki for the Indian market?",
      options: ["Pervasive", "Goal-Oriented", "Dynamic Function", "Intangible Force"],
      correct: 2,
      explanation: "Dynamic Function — management adapts to the changing environment (cultural, social, economic) to help organizations survive and grow.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-011", type: "mcq", difficulty: "easy",
      question: "The primary objective of 'Survival' in management is:",
      options: [
        "Maximising profits at any cost",
        "Earning enough revenue to cover all costs",
        "Expanding into new markets",
        "Providing employee benefits"
      ],
      correct: 1,
      explanation: "The survival objective means the organization must earn enough to cover its costs and sustain operations.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-012", type: "mcq", difficulty: "medium",
      question: "Which feature of Art is highlighted when a manager applies principles in his own unique way?",
      options: [
        "Existence of theoretical knowledge",
        "Personalised Application",
        "Based on practice and creativity",
        "Universal Validity"
      ],
      correct: 1,
      explanation: "Applying principles in an own unique or customized manner refers to 'Personalised Application' as a feature of Art.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-013", type: "mcq", difficulty: "medium",
      question: "Co-ordination is different from co-operation because:",
      options: [
        "Cooperation is deliberate while coordination is voluntary",
        "Coordination is deliberate while cooperation is voluntary",
        "Both are voluntary",
        "Both are forced activities"
      ],
      correct: 1,
      explanation: "Coordination is a deliberate and conscious effort by managers, while Cooperation is voluntary and spontaneous effort by individuals.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-014", type: "mcq", difficulty: "hard",
      question: "Management is considered a 'Soft Science' because:",
      options: [
        "Its principles have absolute universal validity like Physics",
        "It lacks any systematic body of knowledge",
        "Its principles deal with human behavior and cannot be exact",
        "It is not a science at all"
      ],
      correct: 2,
      explanation: "Management principles deal with human behavior which is complex and variable, making outcomes less predictable than pure sciences.",
      examTags: ["CUET"]
    },
    {
      id: "nsm-q-015", type: "mcq", difficulty: "medium",
      question: "TATA Steel running schools and hospitals in Jamshedpur for the community is an example of which management objective?",
      options: ["Organisational — Growth", "Organisational — Profit", "Social Objective", "Personal Objective"],
      correct: 2,
      explanation: "Providing community amenities like schools and hospitals is a Social Objective of management, creating benefit for society.",
      examTags: ["CUET"]
    }
  ]
};
