// src/data/business-studies/staffing.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const staffingData = {
  subject: "Business Studies",
  chapter: "Staffing",
  examTags: ["CUET", "MH-CET"],

  studyGuide: {
    topics: [
      {
        id: "bs-u6-t1",
        title: "Concept & Process of Staffing",
        content: {
          coreConcept: `**Staffing** is the managerial function of filling and keeping filled positions in the organisation structure. It is often described as "Putting people to jobs".

**Staffing Process:**
1. **Manpower Planning**: Estimating the number and type of people needed.
2. **Recruitment**: Searching for and attracting potential candidates.
3. **Selection**: Choosing the best candidate (Negative process - elimination).
4. **Placement and Orientation**: Familiarising the new employee with the firm.
5. **Training and Development**: Improving skills and competence.
6. **Performance Appraisal**: Evaluating work performance.
7. **Promotion and Career Planning**.
8. **Compensation**.`,
          speedSummary: "Staffing = Finding, selecting, training, and retaining the right people.",
          examples: [
            { q: "An HR manager checks if the current 50 employees are enough for a new project. Name the step.", a: "Manpower Planning (Estimating manpower requirements)." },
            { q: "A new hire is introduced to the company's culture, rules, and colleagues on Day 1. Name the step.", a: "Placement and Orientation." },
            { q: "A company reviews an employee's performance at the end of the year to decide on a raise. Name the step.", a: "Performance Appraisal." }
          ]
        }
      },
      {
        id: "bs-u6-t2",
        title: "Recruitment & Selection",
        content: {
          coreConcept: `**Recruitment** (Positive Process): Attracting more people to apply.
- **Internal Sources**: Transfers, Promotions (Cheap, boosts morale).
- **External Sources**: Direct Recruitment, Advertisements, Campus Interviews, Placement Agencies.

**Selection** (Negative Process): Eliminating unsuitable candidates.
**Steps in Selection:**
1. Preliminary Screening.
2. Selection Tests (Aptitude, Intelligence, Personality, Trade, Interest).
3. Employment Interview.
4. Reference and Background Checks.
5. Selection Decision.
6. Medical Examination.
7. Job Offer.
8. Contract of Employment.`,
          speedSummary: "Recruitment (Attract) vs Selection (Choose/Eliminate).",
          examples: [
            { q: "A company organizes a walk-in interview at a top university campus. What source of recruitment is this?", a: "External Source (Campus Recruitment)." },
            { q: "Why is selection called a 'negative process'?", a: "Because it involves eliminating unsuitable candidates to pick the best one, reducing the number of applicants." },
            { q: "An existing supervisor is moved to a higher position as a Manager. Name the source.", a: "Internal Source (Promotion)." }
          ]
        }
      },
      {
        id: "bs-u6-t3",
        title: "Training vs Development",
        content: {
          coreConcept: `**Training**: Improving skills for a specific job (Short-term).
**Development**: Overall growth of the individual (Long-term).

**Training Methods:**
- **On-the-Job**: Learning while doing (Apprenticeship, Coaching, Internship).
- **Off-the-Job**: Learning before doing (Vestibule school, Lectures, Case Study).`,
          speedSummary: "Training (Specific skill) vs Development (General growth).",
          examples: [
            { q: "A new worker spends 2 weeks working directly under a master craftsman to learn the trade. Name the method.", a: "Apprenticeship Training (On-the-job)." },
            { q: "A pilot uses a massive computer screen and controls to simulate a flight crisis before real flying. Name the method.", a: "Vestibule Training (Off-the-job simulating real equipment)." },
            { q: "A middle-level manager attends a 3-day workshop on 'Strategic Leadership'. Is this training or development?", a: "Development (aimed at overall growth and future roles)." },
            { q: "A college student works in a firm for 6 months to gain practical experience while studying. Name the method.", a: "Internship Training." }
          ]
        }
      }
    ]
  },

  flashcards: [
    { id: "st-fc-001", term: "Staffing", definition: "Function of finding the right people for the right jobs.", formula: null, example: "Hiring a software engineer for a tech role." },
    { id: "st-fc-002", term: "Recruitment", definition: "Searching for prospective employees and stimulating them to apply.", formula: null, example: "Posting a job vacancy on LinkedIn." },
    { id: "st-fc-003", term: "Selection", definition: "Process of picking the most suitable candidate out of the applicants.", formula: null, example: "Hiring one manager after 5 rounds of interviews." },
    { id: "st-fc-004", term: "Aptitude Test", definition: "Measure of an individual's potential for learning new skills.", formula: null, example: "Using a logic test for a trainee programmer." },
    { id: "st-fc-005", term: "Vestibule Training", definition: "Off-the-job training in a classroom environment using simulated equipment.", formula: null, example: "A pilot training on a flight simulator." },
    { id: "st-fc-006", term: "Internal Sources", definition: "Filling vacancies from within the organization (Transfers/Promotions).", formula: null, example: "Promoting a Senior Accountant to Finance Head." }
  ],

  questions: [
    {
      id: "st-q-001", type: "mcq", difficulty: "easy",
      question: "Which function of management is known as 'Putting people to jobs'?",
      options: ["Planning", "Organising", "Staffing", "Directing"],
      correct: 2,
      explanation: "Staffing is focused on human resource management and placing the right talent in the right positions.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-002", type: "mcq", difficulty: "easy",
      question: "Why is selection called a 'negative process'?",
      options: [
        "It harms candidates",
        "It involves eliminating unsuitable candidates",
        "It rejects all applications",
        "It focuses on training"
      ],
      correct: 1,
      explanation: "Selection is negative because it involves a series of rejections (eliminations) until the best candidate remains.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-003", type: "mcq", difficulty: "medium",
      question: "Promoting an existing employee to a higher position is which type of recruitment source?",
      options: ["External — Campus Recruitment", "External — Advertisement", "Internal — Promotion", "External — Placement Agency"],
      correct: 2,
      explanation: "Promotion is an internal source of recruitment — filling vacancies from within the organization.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-004", type: "mcq", difficulty: "medium",
      question: "A new employee is taken on a factory tour and introduced to all colleagues on Day 1. Name the staffing step.",
      options: ["Recruitment", "Selection", "Placement and Orientation", "Training"],
      correct: 2,
      explanation: "Orientation familiarizes the new recruit with the organization's culture, policies, and team members.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-005", type: "mcq", difficulty: "medium",
      question: "A trainee pilot practices flying using a flight simulator before going on an actual plane. Name this training method.",
      options: ["Apprenticeship", "Coaching", "Vestibule Training", "Job Rotation"],
      correct: 2,
      explanation: "Vestibule Training is off-the-job training where employees learn using simulated equipment in a special classroom.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-006", type: "mcq", difficulty: "easy",
      question: "Recruitment is described as a 'positive process' because:",
      options: [
        "It eliminates applicants",
        "It attracts and encourages more people to apply",
        "It provides punishment to poor performers",
        "It only promotes internal employees"
      ],
      correct: 1,
      explanation: "Recruitment is positive — it creates a pool of candidates by actively searching for and attracting applicants.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-007", type: "mcq", difficulty: "medium",
      question: "Which step in the staffing process involves forecasting how many employees will be needed?",
      options: ["Recruitment", "Manpower Planning", "Selection", "Training"],
      correct: 1,
      explanation: "Manpower Planning (HRP) estimates the number and type of people needed in the organization for the future.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-008", type: "mcq", difficulty: "hard",
      question: "The key difference between Training and Development is:",
      options: [
        "Training is management-only; development is for all",
        "Training improves skills for a specific job; development focuses on overall long-term growth",
        "Development is short-term; training is long-term",
        "Both are identical"
      ],
      correct: 1,
      explanation: "Training is short-term and job-specific. Development is long-term, focusing on the overall growth of the individual.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-009", type: "mcq", difficulty: "medium",
      question: "A company holds a yearly review of each employee's targets vs achievements to decide salary hikes. Name this step.",
      options: ["Recruitment", "Training", "Performance Appraisal", "Job Offer"],
      correct: 2,
      explanation: "Performance Appraisal involves systematically evaluating employees' work against pre-set standards.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-010", type: "mcq", difficulty: "easy",
      question: "Campus interview from a college or university is which type of recruitment source?",
      options: ["Internal Source", "External Source", "Transfer", "Promotion"],
      correct: 1,
      explanation: "Campus recruitment (from universities) is an external source — candidates come from outside the organization.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-011", type: "mcq", difficulty: "medium",
      question: "Which selection test measures an individual's potential for learning new skills?",
      options: ["Personality Test", "Trade Test", "Aptitude Test", "Interest Test"],
      correct: 2,
      explanation: "Aptitude Test measures capacity to learn new skills — it predicts future performance potential.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-012", type: "mcq", difficulty: "medium",
      question: "An apprentice works under a master craftsman to learn a trade skill. Name this training method:",
      options: ["Vestibule", "Internship", "Apprenticeship", "Case Study"],
      correct: 2,
      explanation: "Apprenticeship is on-the-job training where the trainee works under an experienced worker to learn the trade.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-013", type: "mcq", difficulty: "hard",
      question: "Staffing is important because it ensures:",
      options: [
        "Right quantity and quality of people for each job",
        "Maximum use of machines",
        "Minimizing organizational objectives",
        "Removing informal communication"
      ],
      correct: 0,
      explanation: "Staffing ensures the right people in the right numbers with the right skills are placed in the right positions.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-014", type: "mcq", difficulty: "medium",
      question: "Moving an employee within the organization to a similar level but different department is called:",
      options: ["Promotion", "Transfer", "Demotion", "Induction"],
      correct: 1,
      explanation: "Transfer is an internal source where an employee moves laterally across departments or locations.",
      examTags: ["CUET"]
    },
    {
      id: "st-q-015", type: "mcq", difficulty: "medium",
      question: "In the selection process, which step comes AFTER the employment interview?",
      options: [
        "Preliminary Screening",
        "Selection Tests",
        "Reference and Background Checks",
        "Job Offer"
      ],
      correct: 2,
      explanation: "After the employment interview, Reference and Background Checks are conducted to verify a candidate's credentials.",
      examTags: ["CUET"]
    }
  ]
};
