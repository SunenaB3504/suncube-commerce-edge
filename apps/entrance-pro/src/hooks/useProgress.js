// src/hooks/useProgress.js
import { useState, useCallback } from 'react';
import { XP_REWARDS } from '../gamification/badges.config';

const initialState = {
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  chapterProgress: {},   // { [subjectId_chapterId]: { attempts, bestScore, completed } }
  mockHistory: [],       // [{ date, examType, score, total }]
  unlockedBadges: [],
  dailyChallengeCompleted: false
};

export const useProgress = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('commerce_prep_pro_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved progress", e);
      }
    }
    return initialState;
  });

  const addXP = useCallback((amount) => {
    setProgress(p => ({ ...p, xp: p.xp + amount }));
  }, []);

  const recordChapterScore = useCallback((subjectId, chapterId, score, total) => {
    const key = `${subjectId}_${chapterId}`;
    const pct = Math.round((score / total) * 100);
    setProgress(p => {
      const existing = p.chapterProgress[key] || { attempts: 0, bestScore: 0, completed: false };
      return {
        ...p,
        chapterProgress: {
          ...p.chapterProgress,
          [key]: {
            attempts: existing.attempts + 1,
            bestScore: Math.max(existing.bestScore, pct),
            completed: pct >= 60
          }
        },
        xp: p.xp + XP_REWARDS.correctAnswer * score + (pct >= 60 ? XP_REWARDS.chapterCompleted : 0)
      };
    });
  }, []);

  const recordMockTest = useCallback((examType, score, total) => {
    const pct = Math.round((score / total) * 100);
    setProgress(p => ({
      ...p,
      mockHistory: [...p.mockHistory, { date: new Date().toISOString(), examType, score, total, pct }],
      xp: p.xp + XP_REWARDS.mockTestCompleted + (pct >= 80 ? XP_REWARDS.mockScore80Plus : 0) + (pct === 100 ? XP_REWARDS.mockScore100 : 0)
    }));
  }, []);

  const unlockBadge = useCallback((badgeId) => {
    setProgress(p => {
      if (p.unlockedBadges.includes(badgeId)) return p;
      return { ...p, unlockedBadges: [...p.unlockedBadges, badgeId], xp: p.xp + XP_REWARDS.badgeUnlocked };
    });
  }, []);

  const getChapterProgress = useCallback((subjectId, chapterId) => {
    return progress.chapterProgress[`${subjectId}_${chapterId}`] || { attempts: 0, bestScore: 0, completed: false };
  }, [progress.chapterProgress]);

  const getSubjectProgress = useCallback((subjectId, chapters) => {
    const done = chapters.filter(c => {
      const p = progress.chapterProgress[`${subjectId}_${c.id}`];
      return p?.completed;
    }).length;
    return Math.round((done / chapters.length) * 100);
  }, [progress.chapterProgress]);

  return {
    progress, addXP, recordChapterScore, recordMockTest,
    unlockBadge, getChapterProgress, getSubjectProgress
  };
};
