import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { useQuizEngine } from '../hooks/useQuizEngine';
import QuestionRenderer from '../components/quiz/QuestionRenderer';
import ExplanationPanel from '../components/quiz/ExplanationPanel';

const SECONDS_PER_QUESTION = 60;
const SLOW_THRESHOLD = 45; // seconds; answers above this are flagged as slow

const TimedPractice = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData, recordChapterScore } = useAppContext();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
    const [timePerQuestion, setTimePerQuestion] = useState([]); // seconds taken per question
    const questionStartRef = useRef(Date.now());

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const chapterData = await loadChapterData(subjectId, chapterId);
            setData(chapterData);
            setLoading(false);
        };
        fetchData();
    }, [subjectId, chapterId, loadChapterData]);

    const questions = useMemo(() => data?.questions || [], [data]);
    const engine = useQuizEngine(questions);
    const { currentQuestion, currentIndex, results, isSubmitted, showExplanation, selectAnswer, next, submit, progress } = engine;

    // Reset timer when question changes
    useEffect(() => {
        setTimeLeft(SECONDS_PER_QUESTION);
        questionStartRef.current = Date.now();
    }, [currentIndex]);

    // Countdown timer
    useEffect(() => {
        if (isSubmitted || showExplanation || loading) return;
        if (timeLeft <= 0) {
            // Auto-advance: record time taken and move on
            const timeTaken = SECONDS_PER_QUESTION;
            setTimePerQuestion(prev => {
                const updated = [...prev];
                updated[currentIndex] = timeTaken;
                return updated;
            });
            if (engine.isLast) {
                submit();
            } else {
                next();
            }
            return;
        }
        const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(id);
    }, [timeLeft, isSubmitted, showExplanation, loading, currentIndex, engine.isLast, next, submit]);

    const handleAnswer = useCallback((ans) => {
        const taken = Math.round((Date.now() - questionStartRef.current) / 1000);
        setTimePerQuestion(prev => {
            const updated = [...prev];
            updated[currentIndex] = taken;
            return updated;
        });
        selectAnswer(ans);
    }, [currentIndex, selectAnswer]);

    const handleNext = useCallback(() => {
        if (engine.isLast) {
            submit();
        } else {
            next();
        }
    }, [engine.isLast, submit, next]);

    // Report score on completion
    useEffect(() => {
        if (isSubmitted && results) {
            recordChapterScore(subjectId, chapterId, results.correct, results.total);
        }
    }, [isSubmitted, results, subjectId, chapterId, recordChapterScore]);

    const timerPct = (timeLeft / SECONDS_PER_QUESTION) * 100;
    const timerColor = timeLeft > 30 ? '#2563eb' : timeLeft > 15 ? '#d97706' : '#dc2626';

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <div className="inline-block w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Loading Timed Practice...</p>
            </div>
        );
    }

    if (!data || questions.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">No Questions Found</h1>
                <button onClick={() => navigate(`/subject/${subjectId}`)} className="px-6 py-2 bg-amber-500 text-white rounded-lg font-bold">
                    Back to Dashboard
                </button>
            </div>
        );
    }

    // Results screen
    if (isSubmitted) {
        const slowCount = timePerQuestion.filter(t => t > SLOW_THRESHOLD).length;
        const avgTime = timePerQuestion.length > 0
            ? Math.round(timePerQuestion.reduce((s, t) => s + (t || 0), 0) / timePerQuestion.length)
            : 0;

        return (
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <div className="text-6xl mb-4">⏱️</div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Timed Drill Complete!</h1>
                        <p className="text-slate-500">Here's your time-pressure performance breakdown.</p>
                    </div>

                    {/* KPIs */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
                            <div className="text-3xl font-black text-blue-600">{results.correct}/{results.total}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Correct</div>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
                            <div className="text-3xl font-black text-emerald-600">{avgTime}s</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Avg Time</div>
                        </div>
                        <div className={`rounded-2xl border shadow-sm p-5 text-center ${slowCount > 0 ? 'bg-amber-50 border-amber-100' : 'bg-white border-slate-100'}`}>
                            <div className={`text-3xl font-black ${slowCount > 0 ? 'text-amber-600' : 'text-emerald-600'}`}>{slowCount}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Slow Answers</div>
                        </div>
                    </div>

                    {/* Per-question breakdown */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-8">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Question Breakdown</h2>
                        <div className="space-y-2">
                            {questions.map((q, i) => {
                                const taken = timePerQuestion[i] ?? SECONDS_PER_QUESTION;
                                const isSlow = taken > SLOW_THRESHOLD;
                                const isCorrect = engine.answers[i] === q.correct;
                                return (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                                            style={{ backgroundColor: isCorrect ? '#d1fae5' : '#fee2e2', color: isCorrect ? '#065f46' : '#991b1b' }}>
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all"
                                                style={{
                                                    width: `${Math.min((taken / SECONDS_PER_QUESTION) * 100, 100)}%`,
                                                    backgroundColor: isSlow ? '#f59e0b' : '#2563eb'
                                                }}
                                            />
                                        </div>
                                        <div className={`text-xs font-bold w-12 text-right ${isSlow ? 'text-amber-600' : 'text-slate-500'}`}>
                                            {taken}s {isSlow ? '⚠️' : ''}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {slowCount > 0 && (
                            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-xl p-3 mt-4">
                                ⚠️ You spent &gt;{SLOW_THRESHOLD}s on {slowCount} question{slowCount > 1 ? 's' : ''}. Revisit these topics in the Study Guide to improve speed.
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => navigate(`/subject/${subjectId}`)} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors">
                            Back to Dashboard
                        </button>
                        <button onClick={() => window.location.reload()} className="px-8 py-4 bg-amber-500 text-white rounded-2xl font-bold hover:bg-amber-600 transition-colors">
                            Retry Drill ⏱️
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Timed Quiz Header */}
            <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <button onClick={() => navigate(`/subject/${subjectId}`)} className="text-slate-400 hover:text-slate-600">✕</button>
                            <h2 className="font-bold text-slate-800 line-clamp-1">⏱️ {data.chapter} — Timed Drill</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Per-question countdown */}
                            <div className="flex items-center gap-2">
                                <svg width="36" height="36" viewBox="0 0 36 36" className="-rotate-90">
                                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                                    <circle
                                        cx="18" cy="18" r="14" fill="none" strokeWidth="3"
                                        stroke={timerColor}
                                        strokeDasharray={`${timerPct * 0.879} 100`}
                                        strokeLinecap="round"
                                        style={{ transition: 'stroke-dasharray 1s linear' }}
                                    />
                                </svg>
                                <span className="text-lg font-black" style={{ color: timerColor }}>{timeLeft}s</span>
                            </div>
                            <div className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                                Q {currentIndex + 1}/{questions.length}
                            </div>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-10">
                        <div className="mb-6">
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md border
                ${currentQuestion.difficulty === 'easy' ? 'bg-green-50 text-green-600 border-green-100' :
                                    currentQuestion.difficulty === 'medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        'bg-purple-50 text-purple-600 border-purple-100'}`}>
                                {currentQuestion.difficulty}
                            </span>
                        </div>
                        <QuestionRenderer
                            question={currentQuestion}
                            selectedAnswer={engine.answers[currentIndex]}
                            onAnswer={handleAnswer}
                            isSubmitted={showExplanation}
                        />
                    </div>

                    {showExplanation && (
                        <ExplanationPanel
                            question={currentQuestion}
                            isCorrect={engine.answers[currentIndex] === currentQuestion.correct}
                            isLast={engine.isLast}
                            nextQuestion={handleNext}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimedPractice;
