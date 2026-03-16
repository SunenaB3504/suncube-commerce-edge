import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, RefreshCcw, Filter, AlertCircle, Sparkles, CheckCircle2, XCircle, BarChart3 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ALL_UNITS } from '../data';

export const MockExamSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [questions, setQuestions] = useState<any[]>([]);
    const [filter, setFilter] = useState<'all' | 'mcq' | 'subjective' | 'numerical'>('all');
    const [revealed, setRevealed] = useState<Set<string>>(new Set());
    const [isAnimating, setIsAnimating] = useState(false);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Flatten all questions across all 8 units
    const masterQuestionPool = useMemo(() => {
        const pool: any[] = [];
        ALL_UNITS.forEach(unit => {
            unit.sqp.forEach(q => {
                pool.push({ ...q, unitName: unit.name });
            });
        });
        return pool;
    }, []);

    const generateRandomPaper = () => {
        setIsAnimating(true);
        setRevealed(new Set());

        // Fisher-Yates shuffle
        const shuffled = [...masterQuestionPool];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // Present all 140+ available questions
        setTimeout(() => {
            setQuestions(shuffled);
            setAnswers({});
            setIsSubmitted(false);
            setIsAnimating(false);
        }, 300);
    };

    useEffect(() => {
        generateRandomPaper();
    }, [masterQuestionPool]);

    const toggleReveal = (id: string) => {
        const newRevealed = new Set(revealed);
        if (newRevealed.has(id)) {
            newRevealed.delete(id);
        } else {
            newRevealed.add(id);
        }
        setRevealed(newRevealed);
    };

    const filteredQuestions = useMemo(() => {
        return questions.filter(q => {
            const isMcq = !!(q.optionA || q.optionB || q.optionC || q.optionD);
            const isNumerical = /(?:calculate|compute|estimate|derive|value of|₹|crore|lakh|C\s*=|Y\s*=)/i.test(q.question);

            if (filter === 'mcq') return isMcq;
            if (filter === 'subjective') return !isMcq;
            if (filter === 'numerical') return isNumerical;
            return true;
        });
    }, [questions, filter]);

    useEffect(() => {
        setAnswers({});
        setIsSubmitted(false);
        setRevealed(new Set());
    }, [filter]);

    const handleOptionSelect = (qId: string, optionIndex: number) => {
        if (isSubmitted) return;
        const optionLetter = String.fromCharCode(65 + optionIndex);
        setAnswers(prev => ({ ...prev, [qId]: optionLetter }));
    };

    const performanceStats = useMemo(() => {
        if (!isSubmitted) return null;

        const mcqQuestions = filteredQuestions.filter(q => !!(q.optionA || q.optionB || q.optionC || q.optionD));
        const totalMcqs = mcqQuestions.length;
        if (totalMcqs === 0) return null;

        let totalCorrect = 0;
        const unitStats: Record<string, { total: number, correct: number }> = {};

        mcqQuestions.forEach(q => {
            if (!unitStats[q.unitName]) {
                unitStats[q.unitName] = { total: 0, correct: 0 };
            }
            unitStats[q.unitName].total += 1;

            let isCorrect = false;
            const userAnswer = answers[q.id];

            if (q.answer && userAnswer === q.answer) {
                isCorrect = true;
            } else if (!q.answer && q.markingScheme && userAnswer) {
                // fallback parser if answer explicit prop is missing
                const ms = q.markingScheme.toUpperCase();
                if (ms.includes(`(${userAnswer})`) || ms.includes(`${userAnswer})`)) {
                    isCorrect = true;
                }
            }

            if (isCorrect) {
                totalCorrect++;
                unitStats[q.unitName].correct += 1;
            }
        });

        return { totalCorrect, totalMcqs, unitStats };
    }, [isSubmitted, filteredQuestions, answers]);

    return (
        <div className="animate-in fade-in duration-700 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-gray-200 pb-8">
                <div>
                    <button
                        onClick={onBack}
                        className="text-[10px] font-black text-indigo-700 hover:text-indigo-900 transition-colors flex items-center gap-1 mb-3 uppercase tracking-widest"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                        Mock Exam <span className="text-indigo-600">Simulator</span>
                    </h1>
                    <p className="text-gray-500 font-medium mt-2 max-w-2xl text-sm md:text-base leading-relaxed">
                        Ready to test your instincts? This engine randomizes the entire archive of over 140 historic SQP scenarios spanning all 8 units to create ultimate, unpredictable mock papers.
                    </p>
                </div>

                <button
                    onClick={generateRandomPaper}
                    disabled={isAnimating}
                    className="flex-shrink-0 flex items-center gap-2 bg-gradient-to-br from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-black shadow-lg shadow-indigo-200 transition-all disabled:opacity-50"
                >
                    <RefreshCcw className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
                    {isAnimating ? 'Synthesizing Paper...' : 'Generate New Paper'}
                </button>
            </div>

            <div className="bg-white rounded-3xl p-3 md:p-4 border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                    <Filter className="w-4 h-4" /> Filter Engine Data
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {[
                        { id: 'all', label: 'Entire Archive (All Qs)' },
                        { id: 'mcq', label: 'Entrance MCQs Only' },
                        { id: 'subjective', label: 'Subjective Only' },
                        { id: 'numerical', label: 'Numerical Drill' }
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id as any)}
                            className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-black transition-all whitespace-nowrap ${filter === f.id
                                ? 'bg-indigo-900 text-white shadow-md'
                                : 'bg-gray-50 text-gray-600 hover:bg-indigo-50 border border-gray-100'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={`grid gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {filteredQuestions.length === 0 && !isAnimating ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                        <p className="text-gray-400 font-bold">No questions found for the selected filter combination.</p>
                    </div>
                ) : (
                    filteredQuestions.map((q, index) => (
                        <div key={`${q.id}-${index}`} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-gray-900 text-white text-[10px] font-black rounded-lg uppercase tracking-widest leading-none flex items-center gap-1">
                                    Q{index + 1} Target
                                </span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest leading-none">
                                    {q.unitName}
                                </span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-widest leading-none">
                                    {q.type} | {q.marks} MARKS
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug whitespace-pre-wrap">{(q.questionNumber || '').replace(/^Q\d+\.\s*/, '')} {q.question}</h3>

                            {q.imageUrl && (
                                <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 bg-white inline-block">
                                    <img src={q.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${q.imageUrl.slice(1)}` : q.imageUrl} alt="Question Figure" className="max-w-full h-auto object-contain" />
                                </div>
                            )}

                            {(q.optionA || q.optionB || q.optionC || q.optionD) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                    {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => {
                                        if (!opt) return null;
                                        const optionLetter = String.fromCharCode(65 + i);
                                        const isSelected = answers[q.id] === optionLetter;
                                        const isCorrect = isSubmitted && (q.answer === optionLetter || (!q.answer && q.markingScheme && q.markingScheme.toUpperCase().includes(`(${optionLetter})`)));

                                        let btnClass = "flex items-start gap-3 p-4 rounded-xl border text-sm font-medium transition-all text-left ";
                                        if (!isSubmitted) {
                                            btnClass += isSelected
                                                ? "bg-indigo-50 border-indigo-400 text-indigo-900 shadow-sm"
                                                : "bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100 hover:border-gray-300";
                                        } else {
                                            if (isCorrect) {
                                                btnClass += "bg-emerald-50 border-emerald-400 text-emerald-900";
                                            } else if (isSelected && !isCorrect) {
                                                btnClass += "bg-red-50 border-red-300 text-red-900 opacity-90";
                                            } else {
                                                btnClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                                            }
                                        }

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionSelect(q.id, i)}
                                                disabled={isSubmitted}
                                                className={btnClass}
                                            >
                                                <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs mt-0.5 ${isSubmitted && isCorrect ? 'bg-emerald-200 text-emerald-800' :
                                                    isSubmitted && isSelected && !isCorrect ? 'bg-red-200 text-red-800' :
                                                        isSelected ? 'bg-indigo-200 text-indigo-800' : 'bg-gray-200 text-gray-600'
                                                    }`}>
                                                    {isSubmitted && isCorrect ? <CheckCircle2 className="w-4 h-4" /> :
                                                        isSubmitted && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                                                            optionLetter}
                                                </span>
                                                <span className="leading-relaxed">{opt}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {revealed.has(q.id) ? (
                                <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100 animate-in fade-in duration-300">
                                    <button
                                        onClick={() => toggleReveal(q.id)}
                                        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                                    </button>

                                    <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
                                        <h5 className="text-[10px] font-black text-indigo-900 uppercase tracking-widest mb-3 border-b border-indigo-200 pb-2">Official Marking Scheme</h5>
                                        <div className="prose prose-sm prose-indigo max-w-none text-indigo-950 font-medium">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.markingScheme || q.answer || 'Refer to MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>

                                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                                        <h5 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-200 pb-2">
                                            <Sparkles className="w-3 h-3 text-amber-500" />
                                            AI Reasoning & Breakdown
                                        </h5>
                                        <div className="prose prose-sm prose-amber max-w-none text-amber-900 font-medium leading-relaxed">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.aiExplanation || 'Logic implicitly clear from MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => toggleReveal(q.id)}
                                    className="w-full mt-4 flex items-center justify-between gap-4 p-4 md:p-5 bg-gradient-to-r from-indigo-50 to-amber-50 hover:from-indigo-100 hover:to-amber-100 rounded-2xl border border-dashed border-indigo-200 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded mx-auto uppercase tracking-widest">MS</span>
                                            <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded mx-auto uppercase tracking-widest">AI</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Compare with Official Marking Scheme</span>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-transform" />
                                </button>
                            )}
                        </div>
                    ))
                )}

                {filteredQuestions.length > 0 && !isAnimating && (
                    <div className="mt-10 mb-20 flex flex-col items-center">
                        {!isSubmitted ? (
                            <button
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to submit your exam to view the final performance summary?')) {
                                        setIsSubmitted(true);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl shadow-emerald-200/50 transition-all hover:-translate-y-1"
                            >
                                Submit Exam & View Performance
                            </button>
                        ) : (
                            performanceStats && (
                                <div className="w-full bg-white rounded-3xl p-8 border-2 border-indigo-100 shadow-xl shadow-indigo-100/50 relative overflow-hidden mt-8">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-gray-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                                                <BarChart3 className="w-8 h-8 text-indigo-600" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Final Performance</h2>
                                                <p className="text-gray-500 font-medium tracking-wide">Unit-wise MCQ Breakdown</p>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-right border-t border-gray-100 md:border-none pt-6 md:pt-0 w-full md:w-auto">
                                            <div className="text-5xl font-black bg-gradient-to-br from-indigo-900 to-indigo-600 bg-clip-text text-transparent">
                                                {Math.round((performanceStats.totalCorrect / performanceStats.totalMcqs) * 100)}%
                                            </div>
                                            <div className="text-sm font-bold text-indigo-600 mt-2 flex items-center justify-center md:justify-end gap-2 uppercase tracking-widest bg-indigo-50 px-4 py-2 rounded-full inline-flex mx-auto md:ml-auto md:mr-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                                {performanceStats.totalCorrect} out of {performanceStats.totalMcqs} Correct
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Detailed Diagnostics</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(performanceStats.unitStats).map(([unit, stats]) => {
                                            const percentage = Math.round((stats.correct / stats.total) * 100) || 0;
                                            return (
                                                <div key={unit} className="bg-gray-50 hover:bg-white rounded-2xl p-5 border border-gray-200 shadow-sm transition-all flex items-center justify-between gap-4">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-bold text-gray-800 truncate" title={unit}>{unit}</h4>
                                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
                                                            <div
                                                                className={`h-2 rounded-full transition-all duration-1000 ease-out ${percentage >= 80 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-amber-400' : 'bg-red-500'}`}
                                                                style={{ width: `${percentage}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end flex-shrink-0 pl-2 border-l border-gray-200">
                                                        <span className={`text-xl font-black ${percentage >= 80 ? 'text-emerald-600' : percentage >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                                                            {stats.correct}/{stats.total}
                                                        </span>
                                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-0.5">Score</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start gap-4">
                                        <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-indigo-900 mb-1 text-sm">Teacher's Note</h4>
                                            <p className="text-indigo-800/80 text-sm leading-relaxed">Scroll down to see the official marking schemes and AI explanations for any questions you missed. Reviewing your mistakes is the fastest way to improve your score before the exam.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
