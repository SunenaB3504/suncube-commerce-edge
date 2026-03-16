import React, { useState, useEffect } from 'react';
import { BookOpen, BarChart2, RefreshCw, ArrowRight, ChevronDown, ChevronUp, Eye, EyeOff, FileText, AlertCircle, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllQAs, getQAStats, QAQuestion } from '../data/qa_store';

type QAView = 'dashboard' | 'quiz';

const MarkdownContent: React.FC<{ content: string; size?: 'normal' | 'sm' }> = ({ content, size = 'normal' }) => {
    const textSize = size === 'sm' ? 'text-sm' : 'text-base';
    const boldSize = size === 'sm' ? 'text-sm' : 'text-base';

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-4">
                        <table className="min-w-full border border-slate-300 text-sm" {...props} />
                    </div>
                ),
                thead: ({ node, ...props }) => <thead className="bg-slate-100" {...props} />,
                th: ({ node, ...props }) => <th className="border border-slate-300 px-3 py-2 text-left font-bold text-slate-800" {...props} />,
                td: ({ node, ...props }) => <td className="border border-slate-300 px-3 py-2 text-slate-700" {...props} />,
                p: ({ node, ...props }) => <p className={`${textSize} font-semibold text-slate-800 leading-relaxed mb-3`} {...props} />,
                ul: ({ node, ...props }) => <ul className={`list-disc pl-5 mb-3 ${textSize} font-semibold text-slate-800 space-y-1`} {...props} />,
                ol: ({ node, ...props }) => <ol className={`list-decimal pl-5 mb-3 ${textSize} font-semibold text-slate-800 space-y-1`} {...props} />,
                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                strong: ({ node, ...props }) => <strong className={`font-black text-slate-900`} {...props} />,
                h1: ({ node, ...props }) => <h1 className="text-lg font-black text-slate-900 mb-3" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-lg font-black text-slate-900 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className={`${boldSize} font-black text-slate-900 mb-2`} {...props} />,
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-indigo-400 pl-4 italic my-3 text-slate-600" {...props} />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

const QABank: React.FC = () => {
    const [view, setView] = useState<QAView>('dashboard');
    const [questions, setQuestions] = useState<QAQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [stats, setStats] = useState<{ total: number; chapterWise: Record<string, number>; markWise: Record<number, number> } | null>(null);
    const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
    const [isAIExpanded, setIsAIExpanded] = useState(false);

    useEffect(() => {
        setStats(getQAStats());
    }, []);

    const startPractice = () => {
        const all = getAllQAs();
        setQuestions(all);
        setCurrentIndex(0);
        setIsAnswerRevealed(false);
        setIsAIExpanded(false);
        setView('quiz');
    };

    const goToNext = () => {
        setCurrentIndex(c => c + 1);
        setIsAnswerRevealed(false);
        setIsAIExpanded(false);
    };

    const goToPrev = () => {
        setCurrentIndex(c => c - 1);
        setIsAnswerRevealed(false);
        setIsAIExpanded(false);
    };

    const currentQ = questions[currentIndex];

    // ─── DASHBOARD ───────────────────────────────────────────────
    if (view === 'dashboard') {
        return (
            <div className="space-y-8 animate-in fade-in duration-500">
                {/* Hero */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                        <FileText className="w-8 h-8" />
                        Q&A Practice Bank
                    </h1>
                    <p className="text-emerald-100 opacity-90">
                        SQP subjective questions across all chapters — 6-mark for main chapters, 3 & 4-mark for Analysis, Ratios & Dissolution — with Marking Scheme & AI explanations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                            <div className="text-4xl font-black mb-1">{stats?.total || 0}</div>
                            <div className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">Total Questions</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                            <div className="text-4xl font-black mb-1">{Object.keys(stats?.chapterWise || {}).length}</div>
                            <div className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">Chapters Covered</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                            <div className="text-4xl font-black mb-1">4</div>
                            <div className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">Academic Years</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Chapter Breakdown */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-emerald-500" />
                            Chapter Breakdown
                        </h3>
                        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                            {Object.entries(stats?.chapterWise || {}).map(([chapter, count]) => (
                                <div key={chapter} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                    <span className="text-slate-600 text-sm font-medium truncate w-4/5">{chapter}</span>
                                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-bold shrink-0">{count} Qs</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Start Session */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center gap-4">
                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                            <h4 className="font-bold text-emerald-800 mb-2 text-lg">How it Works</h4>
                            <ul className="text-sm text-emerald-700 space-y-2">
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                                    Questions are <strong>randomized</strong> across all chapters
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                                    Read the question, then click <strong>Reveal Answer</strong>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                                    Verbatim <strong>Marking Scheme</strong> shown for verification
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                                    <strong>SQP source file</strong> shown for manual cross-check
                                </li>
                            </ul>
                        </div>

                        <button
                            onClick={startPractice}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <Eye className="w-5 h-5 text-emerald-200" />
                                <span>Start Practice</span>
                            </div>
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ─── END OF QUESTIONS ────────────────────────────────────────
    if (!currentQ) {
        return (
            <div className="max-w-3xl mx-auto py-8 text-center">
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-200">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-black text-slate-800 mb-2">All Questions Done!</h2>
                    <p className="text-slate-500 mb-8">You've gone through all {questions.length} questions.</p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setView('dashboard')}
                            className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all"
                        >
                            Back to Dashboard
                        </button>
                        <button
                            onClick={startPractice}
                            className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" /> Reshuffle & Restart
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ─── QUIZ VIEW ────────────────────────────────────────────────
    return (
        <div className="max-w-3xl mx-auto py-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                    <span className="text-slate-400 font-bold text-sm tracking-widest">
                        QUESTION {currentIndex + 1} / {questions.length}
                    </span>
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">
                        {currentQ.marks}-Mark Practice
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-bold">
                        {currentQ.chapterTitle}
                    </span>
                    <span className="bg-slate-50 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold">
                        {currentQ.year}
                    </span>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-6">

                {/* Question Type Badge */}
                <div className="mb-4">
                    <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">
                        {currentQ.type}
                    </span>
                </div>

                {/* Question Text */}
                <div className="prose prose-slate max-w-none mb-6 text-lg">
                    <MarkdownContent content={currentQ.question} />
                </div>

                {/* Reveal Answer Button */}
                {!isAnswerRevealed ? (
                    <button
                        onClick={() => setIsAnswerRevealed(true)}
                        className="w-full py-4 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-lg hover:bg-emerald-100 hover:border-emerald-400 transition-all flex items-center justify-center gap-3 group"
                    >
                        <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Reveal Answer
                    </button>
                ) : (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Reveal toggle */}
                        <button
                            onClick={() => setIsAnswerRevealed(false)}
                            className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 font-semibold transition-colors mb-2"
                        >
                            <EyeOff className="w-4 h-4" /> Hide Answer
                        </button>

                        {/* Marking Scheme Card */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                            <h3 className="font-black text-emerald-800 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Check className="w-4 h-4" />
                                Marking Scheme (MS)
                            </h3>
                            <div className="text-emerald-900">
                                <MarkdownContent content={currentQ.markingScheme} size="sm" />
                            </div>
                        </div>

                        {/* AI Explanation — Collapsible */}
                        {currentQ.aiExplanation && (
                            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => setIsAIExpanded(!isAIExpanded)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-indigo-800 font-bold hover:bg-indigo-100 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-indigo-500" />
                                        <span className="text-sm uppercase tracking-widest">AI Detailed Explanation</span>
                                    </div>
                                    {isAIExpanded
                                        ? <ChevronUp className="w-4 h-4 text-indigo-400" />
                                        : <ChevronDown className="w-4 h-4 text-indigo-400" />
                                    }
                                </button>
                                {isAIExpanded && (
                                    <div className="px-6 pb-6 text-indigo-900 animate-in fade-in duration-200">
                                        <MarkdownContent content={currentQ.aiExplanation} size="sm" />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Verification Footer */}
                        <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-3 flex flex-col gap-1">
                            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
                                📋 Verification Reference
                            </p>
                            <p className="text-xs text-amber-800 font-semibold">
                                <span className="text-amber-600">SQP:</span> {currentQ.sqpFileName} — {currentQ.questionNumber}
                            </p>
                            <p className="text-xs text-amber-800 font-semibold">
                                <span className="text-amber-600">MS:</span> {currentQ.msFileName} — {currentQ.questionNumber}
                            </p>
                            <p className="text-[10px] text-amber-500 mt-1">
                                Files located at: C:\Users\Admin\Neil\XII-Commerce\SQPs\Acc-SQPs\SQPs\
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
                <button
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    className="px-6 py-2 rounded-xl text-slate-500 font-bold disabled:opacity-30 hover:bg-slate-100 transition-all"
                >
                    Previous
                </button>

                <button
                    onClick={() => setView('dashboard')}
                    className="text-xs text-slate-400 hover:text-slate-600 font-semibold transition-colors"
                >
                    Back to Dashboard
                </button>

                {currentIndex < questions.length - 1 ? (
                    <button
                        onClick={goToNext}
                        className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 flex items-center gap-2"
                    >
                        Next <ArrowRight className="w-4 h-4" />
                    </button>
                ) : (
                    <button
                        onClick={goToNext}
                        className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 shadow-lg flex items-center gap-2"
                    >
                        Finish <Check className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default QABank;
