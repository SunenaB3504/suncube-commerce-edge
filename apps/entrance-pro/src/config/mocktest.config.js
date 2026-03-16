// src/config/mocktest.config.js

export const CUET_CONFIG = {
  id: "cuet",
  name: "CUET Subject Test",
  totalQuestions: 50,
  questionsToAttempt: 40,
  timeMinutes: 45,
  subjects: ["Accountancy", "Business Studies", "Economics"],
  questionTypes: ["mcq", "assertion-reason", "case-study", "match-column", "numerical"],
  negativeMarking: true,
  marksPerCorrect: 5,
  negativeMarksPerWrong: 1,
  passingScore: 60,
  difficultyDistribution: { easy: 0.3, medium: 0.5, hard: 0.2 }
};

export const CUET_ENGLISH_CONFIG = {
  id: "cuet-english",
  name: "CUET English Test",
  totalQuestions: 50,
  questionsToAttempt: 40,
  timeMinutes: 45,
  negativeMarking: true,
  marksPerCorrect: 5,
  negativeMarksPerWrong: 1,
  totalMarks: 200,
  difficultyDistribution: { easy: 0.2, medium: 0.5, hard: 0.3 }
};

export const MH_CET_CONFIG = {
  id: "mh-cet",
  name: "MH CET BBA Full Mock",
  totalQuestions: 100,
  timeMinutes: 120,
  subjects: ["English", "Reasoning", "General Knowledge"],
  questionTypes: ["mcq"],
  negativeMarking: false,
  passingScore: 50,
  sectionBreakdown: {
    English: 40,
    Reasoning: 30,
    "General Knowledge": 15,
    "Computer Basics": 15
  },
  difficultyDistribution: { easy: 0.5, medium: 0.4, hard: 0.1 }
};

export const DAILY_CHALLENGE_CONFIG = {
  questionsPerDay: 5,
  xpReward: 25,
  subjects: "all",
  questionTypes: ["mcq", "numerical"]
};
