import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { useQuizEngine } from '../hooks/useQuizEngine';
import QuestionRenderer from '../components/quiz/QuestionRenderer';
import ExplanationPanel from '../components/quiz/ExplanationPanel';
import { XP_REWARDS } from '../gamification/badges.config';

const QuizPage = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData, recordChapterScore, addXP } = useAppContext();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const chapterData = await loadChapterData(subjectId, chapterId);
            setData(chapterData);
            setLoading(false);
        };
        fetchData();
    }, [subjectId, chapterId, loadChapterData]);

    // We use useMemo to avoid re-initializing the engine when unrelated state changes
    const questions = useMemo(() => data?.questions || [], [data]);

    const engine = useQuizEngine(questions);
    const {
        currentQuestion, currentIndex, results,
        isSubmitted, isAnswered, showExplanation,
        selectAnswer, next, submit, progress
    } = engine;

    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typesetPromise();
        }
    }, [currentIndex, showExplanation]);

    // Handle auto-record and navigation when finished
    useEffect(() => {
        if (isSubmitted && results) {
            recordChapterScore(subjectId, chapterId, results.correct, results.total);
        }
    }, [isSubmitted, results, subjectId, chapterId, recordChapterScore]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Loading Study Material...</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Content Not Available Yet</h1>
                <p className="text-slate-500 mb-8">This chapter's data is currently being populated by our content experts.</p>
                <button
                    onClick={() => navigate(`/subject/${subjectId}`)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-6xl mb-6">🎉</div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Quiz Completed!</h1>
                    <p className="text-slate-500 mb-12">You've earned {results.correct * XP_REWARDS.correctAnswer} XP for this session.</p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <div className="text-3xl font-black text-blue-600 mb-1">{results.correct}/{results.total}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Correct Answers</div>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <div className="text-3xl font-black text-blue-600 mb-1">{results.percentage}%</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mastery Score</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate(`/subject/${subjectId}`)}
                            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                        >
                            Continue Learning
                        </button>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-colors"
                        >
                            Retry Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Quiz Progress Header */}
            <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate(`/subject/${subjectId}`)}
                                className="text-slate-400 hover:text-slate-600"
                            >
                                ✕
                            </button>
                            <h2 className="font-bold text-slate-800 line-clamp-1">{data.chapter}</h2>
                        </div>
                        <div className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                            Question {currentIndex + 1} of {questions.length}
                        </div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="max-w-3xl mx-auto">
                    {/* Question Card */}
                    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-10 transition-all">
                        <div className="mb-6">
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-md border
                ${currentQuestion.difficulty === 'easy' ? 'bg-green-50 text-green-600 border-green-100' :
                                    currentQuestion.difficulty === 'medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        'bg-purple-50 text-purple-600 border-purple-100'}
              `}>
                                {currentQuestion.difficulty}
                            </span>
                        </div>

                        <QuestionRenderer
                            question={currentQuestion}
                            selectedAnswer={engine.answers[currentIndex]}
                            onAnswer={selectAnswer}
                            isSubmitted={showExplanation}
                        />
                    </div>

                    {/* Explanation Panel */}
                    {showExplanation && (
                        <ExplanationPanel
                            question={currentQuestion}
                            isCorrect={engine.answers[currentIndex] === currentQuestion.correct}
                            isLast={engine.isLast}
                            nextQuestion={engine.isLast ? submit : next}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
