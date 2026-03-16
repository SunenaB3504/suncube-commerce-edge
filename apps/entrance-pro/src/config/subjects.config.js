// src/config/subjects.config.js

export const SUBJECTS = [
  {
    id: "reasoning",
    name: "Reasoning & Aptitude",
    icon: "🧠",
    color: "#ea580c",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "arr-linear", name: "Linear Arrangements", dataFile: "arrangements-linear.data", questionCount: 60 },
      { id: "arr-circular", name: "Circular Arrangements", dataFile: "arrangements-circular.data", questionCount: 60 },
      { id: "arr-floor", name: "Floor & Matrix Puzzles", dataFile: "arrangements-floor.data", questionCount: 45 },
      { id: "ser-number", name: "Number Series", dataFile: "series-number.data", questionCount: 75 },
      { id: "ser-alphabet", name: "Alphabet Series", dataFile: "series-alphabet.data", questionCount: 60 },
      { id: "ser-alphanumeric", name: "Alphanumeric Series", dataFile: "series-alphanumeric.data", questionCount: 45 },
      { id: "cod-letter", name: "Letter Shift Coding", dataFile: "coding-letter-shift.data", questionCount: 60 },
      { id: "cod-symbol", name: "Symbol Coding", dataFile: "coding-symbol.data", questionCount: 45 },
      { id: "rel-blood", name: "Blood Relations", dataFile: "relations-blood.data", questionCount: 60 },
      { id: "rel-direction", name: "Direction Sense", dataFile: "relations-direction.data", questionCount: 60 },
      { id: "log-syllogism", name: "Syllogisms", dataFile: "logic-syllogism.data", questionCount: 75 },
      { id: "log-venn", name: "Venn Diagrams", dataFile: "logic-venn.data", questionCount: 45 },
      { id: "log-statement", name: "Statement & Conclusion", dataFile: "logic-statement.data", questionCount: 60 },
      { id: "vis-mirror", name: "Mirror & Water Images", dataFile: "visual-mirror-water.data", questionCount: 60 },
      { id: "vis-paper", name: "Paper Cutting & Folding", dataFile: "visual-paper-pattern.data", questionCount: 45 }
    ]
  },
  {
    id: "general-aptitude",
    name: "General Aptitude (GAT)",
    icon: "🎯",
    color: "#f59e0b",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "quantitative", name: "Quantitative Ability", dataFile: "quantitative.data", questionCount: 62 },
      { id: "logical-reasoning", name: "Logical Reasoning", dataFile: "logical-reasoning.data", questionCount: 75 }
    ]
  },
  {
    id: "english",
    name: "English Language",
    icon: "📝",
    color: "#0891b2",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "comprehension", name: "Reading Comprehension", dataFile: "comprehension.data", questionCount: 20 },
      { id: "grammar", name: "Grammar & Usage", dataFile: "grammar.data", questionCount: 20 },
      { id: "vocabulary", name: "Vocabulary & Word Families", dataFile: "vocabulary.data", questionCount: 50 },
      { id: "reading-strategies", name: "Reading Strategies", dataFile: "reading-strategies.data", questionCount: 15 },
      { id: "writing-skills", name: "Writing Skills", dataFile: "writing-skills.data", questionCount: 15 },
      { id: "literature-poetry", name: "Literature & Poetry", dataFile: "literature-poetry.data", questionCount: 15 }
    ]
  },
  {
    id: "accountancy",
    name: "Accountancy",
    icon: "📊",
    color: "#2563eb",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "partnership-basics", name: "Partnership Basics", dataFile: "partnership-basics.data", questionCount: 30 },
      { id: "admission-partner", name: "Admission of Partner", dataFile: "partnership-admission.data", questionCount: 30 },
      { id: "retirement-death", name: "Retirement & Death of Partner", dataFile: "partnership-retirement-death.data", questionCount: 25 },
      { id: "dissolution", name: "Dissolution of Firm", dataFile: "dissolution.data", questionCount: 25 },
      { id: "share-capital", name: "Share Capital", dataFile: "share-capital.data", questionCount: 25 },
      { id: "debentures", name: "Debentures", dataFile: "debentures.data", questionCount: 25 },
      { id: "financial-statements", name: "Financial Statements", dataFile: "financial-statements.data", questionCount: 20 },
      { id: "financial-analysis", name: "Financial Analysis", dataFile: "financial-analysis.data", questionCount: 20 },
      { id: "ratio-analysis", name: "Ratio Analysis", dataFile: "ratio-analysis.data", questionCount: 20 },
      { id: "cash-flow", name: "Cash Flow Statement", dataFile: "cash-flow.data", questionCount: 20 },
      { id: "npo", name: "NPO (Not-for-Profit)", dataFile: "npo.data", questionCount: 20 },
      { id: "computerized-accounting", name: "Computerized Accounting", dataFile: "computerized-accounting.data", questionCount: 15 }
    ]
  },
  {
    id: "business-studies",
    name: "Business Studies",
    icon: "🏢",
    color: "#16a34a",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "nature-management", name: "Nature & Significance of Management", dataFile: "nature-management.data", questionCount: 15 },
      { id: "principles-management", name: "Principles of Management", dataFile: "principles-management.data", questionCount: 15 },
      { id: "business-environment", name: "Business Environment", dataFile: "business-environment.data", questionCount: 15 },
      { id: "planning", name: "Planning", dataFile: "planning.data", questionCount: 15 },
      { id: "organising", name: "Organising", dataFile: "organising.data", questionCount: 15 },
      { id: "staffing", name: "Staffing", dataFile: "staffing.data", questionCount: 15 },
      { id: "directing", name: "Directing", dataFile: "directing.data", questionCount: 15 },
      { id: "controlling", name: "Controlling", dataFile: "controlling.data", questionCount: 15 },
      { id: "financial-management", name: "Financial Management", dataFile: "financial-management.data", questionCount: 15 },
      { id: "financial-markets", name: "Financial Markets", dataFile: "financial-markets.data", questionCount: 15 },
      { id: "marketing", name: "Marketing Management", dataFile: "marketing.data", questionCount: 15 },
      { id: "consumer-protection", name: "Consumer Protection", dataFile: "consumer-protection.data", questionCount: 15 }
    ]
  },
  {
    id: "economics",
    name: "Economics",
    icon: "📈",
    color: "#9333ea",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "micro-intro", name: "Unit 9: Introduction to Microeconomics", dataFile: "micro-intro.data", questionCount: 2 },
      { id: "consumer-behaviour", name: "Unit 10: Consumer Behaviour", dataFile: "consumer-behaviour.data", questionCount: 2 },
      { id: "producer-supply", name: "Unit 11: Producer Behaviour", dataFile: "producer-supply.data", questionCount: 2 },
      { id: "market-structures", name: "Unit 12: Market Structures", dataFile: "market-structures.data", questionCount: 2 },
      { id: "national-income", name: "National Income & Related Aggregates", dataFile: "national-income.data", questionCount: 2 },
      { id: "money-banking", name: "Money & Banking", dataFile: "money-banking.data", questionCount: 2 },
      { id: "income-determination", name: "Income & Employment Determination", dataFile: "income-determination.data", questionCount: 2 },
      { id: "govt-budget", name: "Government Budget & Economy", dataFile: "govt-budget.data", questionCount: 2 },
      { id: "bop-forex", name: "Balance of Payments & Forex", dataFile: "bop-forex.data", questionCount: 2 },
      { id: "ied-development", name: "IED: Development Experience (1947-90)", dataFile: "ied-development.data", questionCount: 2 },
      { id: "ied-challenges", name: "IED: Current Challenges", dataFile: "ied-challenges.data", questionCount: 2 },
      { id: "ied-comparison", name: "IED: Comparison with Neighbors", dataFile: "ied-comparison.data", questionCount: 2 }
    ]
  },
  {
    id: "gk-current-affairs",
    name: "GK & Current Affairs",
    icon: "🌍",
    color: "#059669",
    examTags: ["CUET", "MH-CET"],
    chapters: [
      { id: "general-knowledge", name: "General Knowledge", dataFile: "general-knowledge.data", questionCount: 60 },
      { id: "current-affairs", name: "Current Affairs", dataFile: "current-affairs.data", questionCount: 155 },
      { id: "general-science", name: "General Science", dataFile: "general-science.data", questionCount: 45 }
    ]
  },
  {
    id: "computer-awareness",
    name: "Computer Awareness",
    icon: "💻",
    color: "#4f46e5",
    examTags: ["MH-CET"],
    chapters: [
      { id: "hardware", name: "Hardware & Architecture", dataFile: "hardware.data", questionCount: 45 },
      { id: "software-os", name: "Software & OS", dataFile: "software-and-os.data", questionCount: 45 },
      { id: "internet-networking", name: "Internet & Networking", dataFile: "internet-and-networking.data", questionCount: 45 },
      { id: "cybersecurity", name: "Cybersecurity & Ethics", dataFile: "cybersecurity.data", questionCount: 30 },
      { id: "abbreviations", name: "Tech Abbreviations", dataFile: "abbreviations.data", questionCount: 60 },
      { id: "number-systems", name: "Number Systems", dataFile: "number-systems.data", questionCount: 30 },
      { id: "ai-tech", name: "AI & Emerging Tech", dataFile: "ai-and-tech.data", questionCount: 40 }
    ]
  }
];

export const getSubjectById = (id) => SUBJECTS.find(s => s.id === id);
export const getChapterById = (subjectId, chapterId) => {
  const subject = getSubjectById(subjectId);
  return subject?.chapters.find(c => c.id === chapterId);
};
