import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, RefreshCcw, Filter, AlertCircle, Sparkles, CheckCircle2, XCircle, BarChart3, ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';
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
        <div className="animate-in fade-in duration-1000 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 border-b border-white/5 pb-12">
                <div className="flex-1">
                    <button
                        onClick={onBack}
                        className="text-[10px] font-black text-brand-emerald hover:text-white transition-all flex items-center gap-2 mb-6 uppercase tracking-[0.3em] group"
                    >
                        <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to Intelligence Hub
                    </button>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter flex items-center gap-4 uppercase italic">
                        Forensic <span className="text-brand-emerald">Mock Engine</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-6 max-w-2xl text-base md:text-lg leading-relaxed opacity-80">
                        Ready to test your instincts? This engine randomizes the entire archive of over 140 historic SQP scenarios spanning all 8 units to create ultimate, unpredictable mock papers.
                    </p>
                </div>

                <button
                    onClick={generateRandomPaper}
                    disabled={isAnimating}
                    className="flex-shrink-0 flex items-center gap-4 bg-brand-emerald text-brand-slate px-10 py-6 rounded-[1.5rem] font-black shadow-glow-emerald transition-all hover:scale-105 active:scale-95 disabled:opacity-50 group uppercase tracking-widest text-xs"
                >
                    <RefreshCcw size={20} className={`${isAnimating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-700'}`} />
                    {isAnimating ? 'Synthesizing...' : 'New Simulation'}
                </button>
            </div>

            <div className="bg-white/5 rounded-[2rem] p-4 border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 backdrop-blur-3xl group">
                <div className="flex items-center gap-3 px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-brand-emerald transition-colors">
                    <Filter size={16} /> Filter Engine Data
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    {[
                        { id: 'all', label: 'Entire Archive' },
                        { id: 'mcq', label: 'Entrance MCQs' },
                        { id: 'subjective', label: 'Subjective' },
                        { id: 'numerical', label: 'Numerical Drill' }
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id as any)}
                            className={`px-8 py-3.5 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest whitespace-nowrap ${filter === f.id
                                ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald'
                                : 'bg-white/5 text-slate-500 hover:bg-white/10 hover:text-white border border-white/5'
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
                        <div key={`${q.id}-${index}`} className="bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-white/5 shadow-2xl hover:border-brand-emerald/20 transition-all duration-500 relative group/card overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.01] group-hover/card:opacity-[0.03] transition-opacity pointer-events-none">
                                <Cpu size={250} />
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-10">
                                <span className="px-4 py-2 bg-brand-slate text-brand-emerald text-[10px] font-black rounded-xl border border-brand-emerald/30 uppercase tracking-[0.2em] shadow-xl">
                                    Q{index + 1} Target
                                </span>
                                <span className="px-4 py-2 bg-brand-amber/10 text-brand-amber text-[10px] font-black rounded-xl border border-brand-amber/20 uppercase tracking-[0.2em]">
                                    {q.unitName}
                                </span>
                                <span className="px-4 py-2 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-xl border border-brand-emerald/20 uppercase tracking-[0.2em]">
                                    {q.type} | {q.marks} MARKS
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-black text-white mb-10 leading-snug whitespace-pre-wrap tracking-tight group-hover/card:text-brand-emerald transition-colors relative z-10">
                                {(q.questionNumber || '').replace(/^Q\d+\.\s*/, '')} {q.question}
                            </h3>

                            {q.imageUrl && (
                                <div className="mb-10 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-4 shadow-2xl group/img relative z-10">
                                    <img 
                                        src={q.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${q.imageUrl.slice(1)}` : q.imageUrl} 
                                        alt="Question Figure" 
                                        className="max-w-full h-auto object-contain rounded-[1.5rem] group-hover/img:scale-[1.02] transition-transform duration-700" 
                                    />
                                </div>
                            )}

                            {(q.optionA || q.optionB || q.optionC || q.optionD) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                                    {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => {
                                        if (!opt) return null;
                                        const optionLetter = String.fromCharCode(65 + i);
                                        const isSelected = answers[q.id] === optionLetter;
                                        const isCorrect = isSubmitted && (q.answer === optionLetter || (!q.answer && q.markingScheme && q.markingScheme.toUpperCase().includes(`(${optionLetter})`)));

                                        let btnClass = "flex items-start gap-5 p-6 rounded-[1.5rem] border text-sm font-bold transition-all text-left group/opt ";
                                        if (!isSubmitted) {
                                            btnClass += isSelected
                                                ? "bg-brand-emerald/10 border-brand-emerald/50 text-white shadow-glow-emerald/10"
                                                : "bg-white/[0.03] border-white/5 text-slate-400 hover:bg-white/5 hover:border-brand-emerald/30 hover:text-slate-200";
                                        } else {
                                            if (isCorrect) {
                                                btnClass += "bg-brand-emerald text-brand-slate border-brand-emerald shadow-glow-emerald scale-[1.02]";
                                            } else if (isSelected && !isCorrect) {
                                                btnClass += "bg-red-500/20 border-red-500 text-red-500 opacity-90";
                                            } else {
                                                btnClass += "bg-white/[0.02] border-white/5 text-slate-600 opacity-40";
                                            }
                                        }

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionSelect(q.id, i)}
                                                disabled={isSubmitted}
                                                className={btnClass}
                                            >
                                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl font-black text-[10px] mt-0.5 transition-all shadow-xl ${
                                                    isSubmitted && isCorrect ? 'bg-white text-brand-emerald' :
                                                    isSubmitted && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                                                    isSelected ? 'bg-brand-emerald text-brand-slate' : 'bg-brand-slate text-brand-emerald border border-white/5 group-hover/opt:scale-110'
                                                    }`}>
                                                    {isSubmitted && isCorrect ? <CheckCircle2 size={16} /> :
                                                     isSubmitted && isSelected && !isCorrect ? <XCircle size={16} /> :
                                                     optionLetter}
                                                </span>
                                                <span className="leading-relaxed flex-1">{opt}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}

                            {revealed.has(q.id) ? (
                                <div className="grid md:grid-cols-2 gap-10 mt-10 pt-10 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-500 relative z-10">
                                    <button
                                        onClick={() => toggleReveal(q.id)}
                                        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-slate border border-white/10 p-3 rounded-xl hover:bg-white/5 hover:text-brand-emerald transition-all shadow-glow-emerald/5"
                                    >
                                        <ChevronDown className="w-5 h-5 text-slate-400 rotate-180" />
                                    </button>

                                    <div className="bg-brand-emerald/5 p-8 rounded-[2rem] border border-brand-emerald/20 shadow-2xl relative group/ms overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none group-hover/ms:opacity-10 transition-opacity">
                                            <ShieldCheck size={80} className="text-brand-emerald" />
                                        </div>
                                        <h5 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse" />
                                            Official Marking Scheme
                                        </h5>
                                        <div className="prose prose-invert max-w-none text-slate-300 font-medium leading-relaxed opacity-90 group-hover/ms:opacity-100 transition-opacity">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.markingScheme || q.answer || 'Refer to MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>

                                    <div className="bg-brand-amber/5 p-8 rounded-[2rem] border border-brand-amber/20 shadow-2xl relative group/ai overflow-hidden">
                                         <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none group-hover/ai:opacity-10 transition-opacity">
                                            <Cpu size={80} className="text-brand-amber" />
                                        </div>
                                        <h5 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                            <Zap size={14} className="fill-brand-amber" />
                                            AI Logic Breakdown
                                        </h5>
                                        <div className="prose prose-invert max-w-none text-slate-300 font-medium leading-relaxed opacity-90 group-hover/ai:opacity-100 transition-opacity">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.aiExplanation || 'Logic implicitly clear from MS.'}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => toggleReveal(q.id)}
                                    className="w-full mt-6 flex items-center justify-between gap-6 p-8 bg-white/[0.03] backdrop-blur-xl hover:bg-white/5 rounded-[2rem] border border-dashed border-white/10 transition-all group/reveal"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="flex -space-x-4">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-emerald/20 border-2 border-brand-slate flex items-center justify-center text-brand-emerald shadow-2xl relative z-10 group-hover/reveal:rotate-[-12deg] transition-transform">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <div className="w-12 h-12 rounded-2xl bg-brand-amber/20 border-2 border-brand-slate flex items-center justify-center text-brand-amber shadow-2xl relative z-20 group-hover/reveal:rotate-[12deg] transition-transform">
                                                <Cpu size={20} />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] group-hover/reveal:text-white transition-colors">Analytical Reveal</span>
                                            <p className="text-sm font-black text-white group-hover/reveal:text-brand-emerald transition-colors italic">Compare your logic with MS & AI reasoning</p>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl group-hover/reveal:bg-brand-emerald group-hover/reveal:text-brand-slate transition-all">
                                        <ArrowRight size={20} className="group-hover/reveal:translate-x-1 transition-transform" />
                                    </div>
                                </button>
                            )}
                        </div>
                    ))
                )}

                {filteredQuestions.length > 0 && !isAnimating && (
                    <div className="mt-20 mb-32 flex flex-col items-center">
                        {!isSubmitted ? (
                            <button
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to submit your exam to view the final performance summary?')) {
                                        setIsSubmitted(true);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                className="bg-brand-emerald text-brand-slate px-16 py-8 rounded-[2rem] font-black text-2xl shadow-glow-emerald transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter italic"
                            >
                                Submit Simulation Engine
                            </button>
                        ) : (
                            performanceStats && (
                                <div className="w-full bg-white/5 rounded-[3.5rem] p-12 border border-brand-emerald/20 shadow-2xl relative overflow-hidden mt-8 backdrop-blur-3xl animate-in zoom-in-95 duration-1000">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-emerald via-brand-amber to-brand-emerald"></div>
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12 pb-12 border-b border-white/5">
                                        <div className="flex items-center gap-8">
                                            <div className="w-24 h-24 rounded-[2rem] bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center flex-shrink-0 shadow-glow-emerald/5">
                                                <BarChart3 size={40} className="text-brand-emerald" />
                                            </div>
                                            <div>
                                                <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">Forensic <span className="text-brand-emerald">Report</span></h2>
                                                <p className="text-slate-500 font-bold tracking-[0.2em] uppercase text-[10px] mt-2">Neural Classification Metrics</p>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-right border-t border-white/5 md:border-none pt-10 md:pt-0 w-full md:w-auto">
                                            <div className="text-7xl font-black text-brand-emerald tracking-tighter italic">
                                                {Math.round((performanceStats.totalCorrect / performanceStats.totalMcqs) * 100)}%
                                            </div>
                                            <div className="text-[10px] font-black text-brand-emerald mt-4 flex items-center justify-center md:justify-end gap-3 uppercase tracking-[0.3em] bg-brand-emerald/10 px-6 py-3 rounded-full inline-flex mx-auto md:ml-auto md:mr-0 border border-brand-emerald/20">
                                                <CheckCircle2 size={14} />
                                                {performanceStats.totalCorrect} / {performanceStats.totalMcqs} Precision
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-10 text-center md:text-left">Diagnostic Unit Breakdown</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {Object.entries(performanceStats.unitStats).map(([unit, stats]) => {
                                            const percentage = Math.round((stats.correct / stats.total) * 100) || 0;
                                            return (
                                                <div key={unit} className="bg-white/5 hover:bg-brand-slate p-8 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-500 flex items-center justify-between gap-8 group/stat hover:border-brand-emerald/30 group">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate group-hover:text-white transition-colors" title={unit}>{unit}</h4>
                                                        <div className="w-full bg-brand-slate rounded-full h-1.5 mt-6 overflow-hidden border border-white/5">
                                                            <div
                                                                className={`h-full rounded-full transition-all duration-1000 ease-out shadow-glow-emerald/20 ${percentage >= 80 ? 'bg-brand-emerald' : percentage >= 50 ? 'bg-brand-amber' : 'bg-red-500'}`}
                                                                style={{ width: `${percentage}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end flex-shrink-0 pl-8 border-l border-white/5">
                                                        <span className={`text-2xl font-black italic tracking-tighter ${percentage >= 80 ? 'text-brand-emerald' : percentage >= 50 ? 'text-brand-amber' : 'text-red-500'}`}>
                                                            {stats.correct}/{stats.total}
                                                        </span>
                                                        <span className="text-[8px] uppercase font-black text-slate-600 tracking-[0.3em] mt-1 group-hover:text-slate-400 transition-colors">Precision</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-12 p-8 bg-brand-amber/5 border border-brand-amber/20 rounded-[2.5rem] flex items-start gap-6 shadow-glow-amber/5 group">
                                        <AlertCircle size={24} className="text-brand-amber flex-shrink-0 mt-1 animate-pulse" />
                                        <div>
                                            <h4 className="font-black text-brand-amber mb-2 text-xs uppercase tracking-[0.2em]">Strategy Protocol</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">Scroll down to see the official marking schemes and AI explanations for any questions you missed. Neural fortification through error analysis is the primary objective before board engagement.</p>
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
