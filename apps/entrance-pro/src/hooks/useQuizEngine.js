// src/hooks/useQuizEngine.js
import { useState, useCallback, useMemo } from 'react';
import { calculateScore } from '../utils/index';

export const useQuizEngine = (questions = [], config = {}) => {
  const {
    maxAttempts = questions.length,
    autoShowExplanation = true
  } = config;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isAnswered = answers[currentIndex] !== undefined;

  // Calculate current attempts
  const attemptsCount = useMemo(() =>
    Object.keys(answers).filter(k => answers[k] !== undefined).length
    , [answers]);

  const selectAnswer = useCallback((optionIndex) => {
    if (isSubmitted) return;

    // If not already answered, check against limit
    if (answers[currentIndex] === undefined) {
      if (attemptsCount >= maxAttempts) {
        alert(`You can only answer ${maxAttempts} questions in this test. Deselect an answer to pick another one.`);
        return;
      }
    }

    setAnswers(prev => {
      // If clicking same answer, deselect it (allow changing/skipping)
      if (prev[currentIndex] === optionIndex) {
        const newAnswers = { ...prev };
        delete newAnswers[currentIndex];
        setShowExplanation(false);
        return newAnswers;
      }

      if (autoShowExplanation) setShowExplanation(true);
      return { ...prev, [currentIndex]: optionIndex };
    });
  }, [currentIndex, isSubmitted, attemptsCount, maxAttempts, autoShowExplanation, answers]);

  const next = useCallback(() => {
    setShowExplanation(false);
    setCurrentIndex(i => Math.min(i + 1, questions.length - 1));
  }, [questions.length]);

  const prev = useCallback(() => {
    setShowExplanation(false);
    setCurrentIndex(i => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback((index) => {
    setShowExplanation(false);
    setCurrentIndex(index);
  }, []);

  const submit = useCallback(() => setIsSubmitted(true), []);
  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
  }, []);

  const results = isSubmitted ? calculateScore(answers, questions, config) : null;

  return {
    currentQuestion, currentIndex, answers, isSubmitted,
    showExplanation, isLast, isAnswered, results,
    selectAnswer, next, prev, goTo, submit, reset,
    attemptsCount,
    progress: questions.length ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0
  };
};
