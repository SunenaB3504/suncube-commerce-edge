import React, { useState, useEffect } from 'react';
import { Play, BookOpen, CheckCircle, BarChart2, AlertCircle, RefreshCw, Trophy, ArrowRight, Layout } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllMCQs, getMCQStats, MCQ } from '../data/mcq_store';
import { TEST_MCQS } from '../data/mcq_test_dataset';

type ViewState = 'dashboard' | 'quiz' | 'result';

const MCQBank: React.FC = () => {
    const [view, setView] = useState<ViewState>('dashboard');
    const [questions, setQuestions] = useState<MCQ[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    // Map of questionId -> selected option text
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
    const [stats, setStats] = useState<{ total: number; unique: number; chapterWise: Record<string, number> } | null>(null);
    const [mode, setMode] = useState<'real' | 'test' | 'high-yield' | 'low-yield'>('real');

    useEffect(() => {
        // Load stats on mount
        setStats(getMCQStats());
    }, []);

    const startQuiz = (selectedMode: 'real' | 'test' | 'high-yield' | 'low-yield') => {
        setMode(selectedMode);
        let q = selectedMode === 'test' ? TEST_MCQS : getAllMCQs();

        if (selectedMode === 'high-yield') {
            // High Yield: Partnership (all), Share Capital, Debentures, Cash Flow
            q = q.filter(question => {
                const cid = question.chapterId;
                return cid.includes('partnership') ||
                    cid === 'accounting-share-capital' ||
                    cid === 'issue-debentures' ||
                    cid === 'ch6';
            });
            // Limit to 60 questions
            q = q.slice(0, 60);
        } else if (selectedMode === 'low-yield') {
            // Low Yield: Fin Statements, Analysis, Ratios
            q = q.filter(question => {
                const cid = question.chapterId;
                return cid === 'ch3' || cid === 'ch4' || cid === 'ch5';
            });
        }

        setQuestions(q);
        setCurrentIndex(0);
        setUserAnswers({});
        setView('quiz');
    };

    const handleOptionSelect = (option: string) => {
        setUserAnswers(prev => ({
            ...prev,
            [questions[currentIndex].id]: option
        }));
    };

    const finishQuiz = () => {
        setView('result');
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            const selected = userAnswers[q.id];
            if (selected) {
                const normSelected = selected.toLowerCase().trim();
                const normCorrect = q.correctOption.toLowerCase().trim();

                if (normCorrect.includes(normSelected) || normSelected.includes(normCorrect)) {
                    score++;
                } else {
                    const letterMatch = normCorrect.match(/\(([a-z])\)/);
                    if (normCorrect.includes(selected) || selected === normCorrect) {
                        score++;
                    }
                }
            }
        });
        return score;
    };

    const getChapterPerformance = () => {
        const perf: Record<string, { total: number; correct: number }> = {};

        questions.forEach(q => {
            if (!perf[q.chapterTitle]) perf[q.chapterTitle] = { total: 0, correct: 0 };
            perf[q.chapterTitle].total++;

            const selected = userAnswers[q.id];
            const normCorrect = q.correctOption.toLowerCase().trim();
            if (selected && (normCorrect.includes(selected.toLowerCase()) || selected === normCorrect)) {
                perf[q.chapterTitle].correct++;
            }
        });

        return perf;
    };

    const currentQ = questions[currentIndex];

    if (view === 'dashboard') {
        return (
            <div className="space-y-8 animate-in fade-in duration-500">
                <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                        <Layout className="w-8 h-8" />
                        MCQ Bank Dashboard
                    </h1>
                    <p className="text-indigo-100 opacity-90">Master your concepts with our exhaustive question bank.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-black mb-1">{stats?.total || 0}</div>
                            <div className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">Total Questions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-black mb-1">{stats?.unique || 0}</div>
                            <div className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">Unique Questions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-black mb-1">{Object.keys(stats?.chapterWise || {}).length}</div>
                            <div className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">Chapters Covered</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-indigo-500" />
                            Chapter-wise Breakdown
                        </h3>
                        <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                            {Object.entries(stats?.chapterWise || {}).map(([chapter, count]) => (
                                <div key={chapter} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                    <span className="text-slate-600 text-sm font-medium">{chapter}</span>
                                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">{count} Qs</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center gap-4">
                        <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-2">
                            <h4 className="font-bold text-orange-800 mb-2">Ready to Practice?</h4>
                            <p className="text-sm text-orange-600 mb-4">Start a session with all available questions randomized for maximum retention.</p>
                            <button
                                onClick={() => startQuiz('high-yield')}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-orange-200 transition-all flex items-center justify-between group mb-3"
                            >
                                <div className="flex items-center gap-3">
                                    <Trophy className="w-5 h-5 text-orange-200" />
                                    <div className="text-left">
                                        <div className="text-sm">High Yield Mode</div>
                                        <div className="text-[10px] opacity-80 font-normal">Partnership, Shares, Debentures, CFS (60 Qs)</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            <button
                                onClick={() => startQuiz('low-yield')}
                                className="w-full bg-white border-2 border-orange-100 hover:border-orange-200 text-orange-700 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-between group mb-3"
                            >
                                <div className="flex items-center gap-3">
                                    <BarChart2 className="w-5 h-5 text-orange-400" />
                                    <div className="text-left">
                                        <div className="text-sm">Low Yield Mode</div>
                                        <div className="text-[10px] opacity-70 font-normal">Fin. Analysis, Ratios (All Qs)</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            <button
                                onClick={() => startQuiz('real')}
                                className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold py-2 rounded-lg text-xs transition-all"
                            >
                                Practice All Questions
                            </button>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-slate-700 mb-2">Validation Mode</h4>
                            <p className="text-sm text-slate-500 mb-4">Run a quick check with 10 sample questions.</p>
                            <button
                                onClick={() => startQuiz('test')}
                                className="w-full bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle className="w-5 h-5" /> Launch Test Set
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'quiz') {
        return (
            <div className="max-w-3xl mx-auto py-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                        <span className="text-slate-400 font-bold text-sm tracking-widest">QUESTION {currentIndex + 1} / {questions.length}</span>
                        <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">
                            {mode === 'high-yield' ? 'High Yield Mode' :
                                mode === 'low-yield' ? 'Low Yield Mode' :
                                    mode === 'test' ? 'Test Mode' : 'Full Practice'}
                        </span>
                    </div>
                    <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-xs font-bold">{currentQ.chapterTitle}</span>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-6">
                    <div className="prose prose-slate max-w-none mb-8">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                table: ({ node, ...props }) => <div className="overflow-x-auto my-4"><table className="min-w-full border border-slate-300" {...props} /></div>,
                                thead: ({ node, ...props }) => <thead className="bg-slate-100" {...props} />,
                                th: ({ node, ...props }) => <th className="border border-slate-300 px-4 py-2 text-left font-bold" {...props} />,
                                td: ({ node, ...props }) => <td className="border border-slate-300 px-4 py-2" {...props} />,
                                p: ({ node, ...props }) => <p className="text-lg font-bold text-slate-800 leading-relaxed mb-4" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 text-lg font-bold text-slate-800 space-y-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 text-lg font-bold text-slate-800 space-y-2" {...props} />,
                                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-black text-slate-900" {...props} />,
                                h1: ({ node, ...props }) => <h1 className="text-xl font-black text-slate-900 mb-4" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-xl font-black text-slate-900 mb-4" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-lg font-black text-slate-900 mb-3" {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-4 text-slate-700" {...props} />
                            }}
                        >
                            {currentQ.question}
                        </ReactMarkdown>
                    </div>

                    <div className="space-y-3">
                        {currentQ.options.length > 0 ? (
                            currentQ.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(opt)}
                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${userAnswers[currentQ.id] === opt
                                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium'
                                        : 'border-slate-100 hover:border-slate-300 text-slate-600'
                                        }`}
                                >
                                    <span className="inline-block w-6 font-bold opacity-50 mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                </button>
                            ))
                        ) : (
                            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-700 text-sm flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                Options could not be parsed automatically. Please verify with the question text above.
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setCurrentIndex(c => Math.max(0, c - 1))}
                        disabled={currentIndex === 0}
                        className="px-6 py-2 rounded-xl text-slate-500 font-bold disabled:opacity-30 hover:bg-slate-100"
                    >
                        Previous
                    </button>

                    {currentIndex < questions.length - 1 ? (
                        <button
                            onClick={() => setCurrentIndex(c => c + 1)}
                            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center gap-2"
                        >
                            Next Question <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            onClick={finishQuiz}
                            className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-200 flex items-center gap-2"
                        >
                            Finish & See Results <Trophy className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        );
    }

    // Result View
    const score = calculateScore();
    const perf = getChapterPerformance();

    return (
        <div className="max-w-4xl mx-auto space-y-8 py-8">
            <div className="bg-slate-900 text-white rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Quiz Complete</h2>
                    <div className="text-6xl font-black mb-4">{score} <span className="text-3xl text-slate-500">/ {questions.length}</span></div>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => setView('dashboard')} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg text-sm font-bold backdrop-blur-sm transition-colors">
                            Back to Dashboard
                        </button>
                        <button onClick={() => startQuiz(mode)} className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-indigo-900/50 flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" /> Restart
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <BarChart2 className="w-5 h-5 text-indigo-500" /> Performance Breakdown
                    </h3>
                    <div className="space-y-3">
                        {Object.entries(perf).map(([chapter, p]) => (
                            <div key={chapter} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-slate-700 truncate w-2/3">{chapter}</span>
                                    <span className="font-bold text-slate-900">{Math.round((p.correct / p.total) * 100)}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${p.correct === p.total ? 'bg-green-500' : 'bg-indigo-500'}`}
                                        style={{ width: `${(p.correct / p.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex flex-col justify-center items-center text-center">
                    <Trophy className="w-12 h-12 text-indigo-400 mb-3" />
                    <h3 className="font-bold text-indigo-900 mb-1">Keep it up!</h3>
                    <p className="text-sm text-indigo-700">Review the detailed explanations below to close any learning gaps.</p>
                </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-xl text-slate-800 mb-4">Detailed Review</h3>
                {questions.map((q, idx) => {
                    const userAns = userAnswers[q.id];
                    const cleanAns = q.correctOption;
                    const isCorrect = userAns && (cleanAns.includes(userAns) || userAns === cleanAns);

                    return (
                        <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className={`p-2 rounded-lg shrink-0 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {isCorrect ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{q.chapterTitle}</div>
                                    <h4 className="font-bold text-slate-800 mb-3">{q.question}</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                                        <div className={`p-3 rounded-lg border ${!isCorrect ? 'bg-red-50 border-red-200 text-red-900' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                                            <span className="block text-[10px] font-bold uppercase opacity-70 mb-1">Your Answer</span>
                                            {userAns || 'Not Answered'}
                                        </div>
                                        <div className="p-3 rounded-lg border bg-green-50 border-green-200 text-green-900">
                                            <span className="block text-[10px] font-bold uppercase opacity-70 mb-1">Correct Answer</span>
                                            {q.correctOption}
                                        </div>
                                    </div>

                                    {q.explanation && (
                                        <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 leading-relaxed">
                                            <strong className="text-slate-900 block mb-1">Explanation:</strong>
                                            <div className="prose prose-sm max-w-none">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {q.explanation}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MCQBank;
