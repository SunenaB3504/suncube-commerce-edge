// src/gamification/badges.config.js

export const BADGES = [
  // Subject mastery
  { id: "ratio-master", name: "Ratio Master", icon: "⚖️", subject: "Accountancy", condition: { chapter: "ratio-analysis", minAccuracy: 85 } },
  { id: "partnership-pro", name: "Partnership Pro", icon: "🤝", subject: "Accountancy", condition: { chapter: "partnership", minAccuracy: 85 } },
  { id: "share-shark", name: "Share Shark", icon: "📋", subject: "Accountancy", condition: { chapter: "share-capital", minAccuracy: 85 } },
  { id: "fayol-fan", name: "Fayol Fan", icon: "🏛️", subject: "Business Studies", condition: { chapter: "principles-management", minAccuracy: 85 } },
  { id: "market-maven", name: "Market Maven", icon: "🛒", subject: "Business Studies", condition: { chapter: "marketing", minAccuracy: 85 } },
  { id: "macro-guru", name: "Macro Guru", icon: "🌐", subject: "Economics", condition: { chapter: "national-income", minAccuracy: 85 } },
  { id: "money-mind", name: "Money Mind", icon: "💰", subject: "Economics", condition: { chapter: "money-banking", minAccuracy: 85 } },
  // Milestone badges
  { id: "first-test", name: "First Test!", icon: "🎯", condition: { mocksCompleted: 1 } },
  { id: "mock-master", name: "Mock Master", icon: "🏆", condition: { mocksCompleted: 10 } },
  { id: "streak-7", name: "Week Warrior", icon: "🔥", condition: { streak: 7 } },
  { id: "streak-30", name: "Month Champion", icon: "💎", condition: { streak: 30 } },
  { id: "perfect-score", name: "Perfect Score!", icon: "⭐", condition: { mockScore: 100 } },
  { id: "all-rounder", name: "All Rounder", icon: "🎓", condition: { subjectsCompleted: 6 } },
  { id: "cuet-ready", name: "CUET Ready", icon: "📚", condition: { examMode: "CUET", mockScore: 80 } },
  { id: "mhcet-ready", name: "MH-CET Ready", icon: "🎪", condition: { examMode: "MH-CET", mockScore: 80 } }
];

// XP rewards table
export const XP_REWARDS = {
  correctAnswer: 10,
  wrongAnswer: 0,
  chapterCompleted: 50,
  mockTestCompleted: 100,
  mockScore80Plus: 50,       // Bonus
  mockScore100: 150,         // Bonus
  dailyChallengeCompleted: 25,
  badgeUnlocked: 30,
  streakDay: 15
};

// XP thresholds for levels
export const LEVELS = [
  { level: 1, name: "Beginner", minXP: 0 },
  { level: 2, name: "Student", minXP: 200 },
  { level: 3, name: "Scholar", minXP: 500 },
  { level: 4, name: "Achiever", minXP: 1000 },
  { level: 5, name: "Expert", minXP: 2000 },
  { level: 6, name: "Commerce Pro", minXP: 3500 },
  { level: 7, name: "CUET Champion", minXP: 5000 }
];

export const getLevelFromXP = (xp) => {
  return [...LEVELS].reverse().find(l => xp >= l.minXP) || LEVELS[0];
};
