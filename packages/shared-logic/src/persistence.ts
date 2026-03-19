export interface UserProgress {
  lessonCompletion: Record<string, boolean>; // e.g., "accounts/unit1": true
  quizScores: Record<string, number>;      // e.g., "economics/quiz1": 85
  lastAccessed: string;                    // ISO date string
}

const STORAGE_KEY = 'suncube_user_progress';

export const getProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      lessonCompletion: {},
      quizScores: {},
      lastAccessed: new Date().toISOString(),
    };
  }
  return JSON.parse(stored);
};

export const saveProgress = (progress: Partial<UserProgress>) => {
  const current = getProgress();
  const updated = {
    ...current,
    ...progress,
    lastAccessed: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const completeLesson = (lessonId: string) => {
  const current = getProgress();
  current.lessonCompletion[lessonId] = true;
  saveProgress({ lessonCompletion: current.lessonCompletion });
};

export const saveQuizScore = (quizId: string, score: number) => {
  const current = getProgress();
  const existingScore = current.quizScores[quizId] || 0;
  if (score > existingScore) {
    current.quizScores[quizId] = score;
    saveProgress({ quizScores: current.quizScores });
  }
};
