import React, { useState } from 'react';
import { QuizResult } from '../../types';
import { MCQWithUnit } from '../../utils/mcqAggregator';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Home, BrainCircuit, Target, Activity, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

interface QuizResultsProps {
    results: QuizResult;
    questions: MCQWithUnit[];
    onReturnHome: () => void;
    onRetry: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ results, questions, onReturnHome, onRetry }) => {
    const percentage = Math.round((results.totalScore / results.maxScore) * 100);
    const [showExplanations, setShowExplanations] = useState(false);

    // Group incorrect answers
    const incorrectAnswers = results.answers.filter(a => !a.isCorrect);

    return (
        <div className="max-w-5xl mx-auto py-12 px-6 animate-in zoom-in-95 duration-1000 space-y-12">

            <div className="bg-white/[0.02] rounded-[4rem] p-12 md:p-20 border border-white/5 shadow-2xl overflow-hidden relative text-center backdrop-blur-3xl group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-[100px] -ml-32 -mb-32 opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-brand-emerald/10 rounded-full blur-2xl animate-pulse" />
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-white/5"
                            />
                            <circle
                                cx="80"
                                cy="80"
                                r="70"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={440}
                                strokeDashoffset={440 - (440 * percentage) / 100}
                                className="text-brand-emerald transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <span className="absolute text-5xl font-black text-white italic tracking-tighter">{percentage}%</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">Assessment Complete</h2>
                    <p className="text-2xl text-slate-400 font-medium mb-12 italic uppercase tracking-tight">
                        Neural Efficiency: <strong className="text-white">{results.totalScore}</strong> / <strong className="text-slate-500">{results.maxScore}</strong> NODES
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg">
                        <button
                            onClick={onRetry}
                            className="group flex-1 flex items-center justify-center gap-3 bg-brand-emerald hover:bg-white text-brand-slate font-black text-xs uppercase tracking-[0.3em] px-8 py-5 rounded-[2rem] shadow-glow-emerald/20 transition-all hover:-translate-y-1"
                        >
                            <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-700" /> 
                            Re-Run Protocol
                        </button>
                        <button
                            onClick={onReturnHome}
                            className="flex-1 flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-white font-black text-xs uppercase tracking-[0.3em] px-8 py-5 rounded-[2rem] transition-all"
                        >
                            <Home size={16} /> 
                            Mission Hub
                        </button>
                    </div>
                </div>
            </div>

            {/* Performance Matrix */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 px-2">
                    <Activity size={24} className="text-brand-emerald" />
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Unit-wise Logic Matrix</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {results.unitScores.map((score, idx) => {
                        const unitPerf = Math.round((score.correctAnswers / score.totalQuestions) * 100) || 0;
                        return (
                            <div key={score.unitId} className="group bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5 flex items-center justify-between shadow-2xl hover:border-brand-emerald/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div>
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Unit Protocol {score.unitId}</div>
                                    <div className="text-xl font-black text-white uppercase tracking-tight italic">{score.unitName}</div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-3xl font-black italic tracking-tighter ${unitPerf >= 80 ? 'text-brand-emerald' : unitPerf >= 50 ? 'text-brand-amber' : 'text-red-500'}`}>
                                        {score.correctAnswers}<span className="text-sm text-slate-500 not-italic mx-1">/</span>{score.totalQuestions}
                                    </div>
                                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">{unitPerf}% EFF</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* AI Forensic Review */}
            {incorrectAnswers.length > 0 && (
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
                        <div className="flex items-center gap-4">
                            <BrainCircuit size={24} className="text-brand-amber" />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Logic Correction Stream</h3>
                        </div>
                        <button
                            onClick={() => setShowExplanations(!showExplanations)}
                            className="group px-8 py-4 bg-brand-amber/10 border border-brand-amber/20 hover:bg-brand-amber hover:text-brand-slate text-brand-amber font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl transition-all flex items-center gap-3"
                        >
                            {showExplanations ? 'Deactivate Review' : 'Initialize Forensic Review'} 
                            <ArrowRight size={14} className={`transition-transform duration-500 ${showExplanations ? 'rotate-90' : ''}`} />
                        </button>
                    </div>

                    {showExplanations && (
                        <div className="space-y-8 animate-in slide-in-from-top-4 duration-700">
                            {incorrectAnswers.map((ans, idx) => {
                                const questionData = questions.find(q => q.id === ans.questionId);
                                if (!questionData) return null;

                                return (
                                    <div key={idx} className="bg-white/[0.02] p-10 md:p-14 rounded-[3.5rem] border border-red-500/10 shadow-2xl relative group/card overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                        
                                        <div className="flex flex-col md:flex-row gap-10 relative z-10">
                                            <div className="flex-shrink-0">
                                               <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 border border-red-500/20 group-hover/card:scale-110 transition-transform">
                                                  <XCircle size={32} />
                                               </div>
                                            </div>
                                            
                                            <div className="flex-1">
                                                <div className="text-[10px] font-black text-red-400 uppercase tracking-[0.3em] mb-4">Neural Mismatch | {questionData.unitName}</div>
                                                <h4 className="font-black text-white text-2xl md:text-3xl leading-snug uppercase tracking-tight italic mb-10 selection:bg-red-500/30">{questionData.question}</h4>

                                                <div className="grid md:grid-cols-2 gap-6 mb-10">
                                                   <div className="bg-red-500/5 p-6 rounded-[1.5rem] border border-red-500/10 group-hover/card:border-red-500/30 transition-all">
                                                      <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-2">Input Captured</span>
                                                      <span className="text-xl font-black text-white italic uppercase tracking-tighter">Option {ans.selectedOption}</span>
                                                   </div>
                                                   <div className="bg-brand-emerald/5 p-6 rounded-[1.5rem] border border-brand-emerald/10 group-hover/card:border-brand-emerald/30 transition-all">
                                                      <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest block mb-2">Verified Pattern</span>
                                                      <span className="text-xl font-black text-white italic uppercase tracking-tighter">{questionData.answer}</span>
                                                   </div>
                                                </div>

                                                {questionData.aiExplanation && (
                                                    <div className="bg-brand-amber/[0.03] p-10 rounded-[2.5rem] border border-brand-amber/10 relative overflow-hidden group/ai">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl opacity-0 group-hover/ai:opacity-100 transition-opacity" />
                                                        <div className="flex items-center gap-3 mb-6">
                                                            <div className="p-2 bg-brand-amber/20 rounded-lg text-brand-amber">
                                                               <Sparkles size={16} />
                                                            </div>
                                                            <h5 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em]">AI Forensic Insight</h5>
                                                        </div>
                                                        <div className="text-slate-300 font-medium text-lg leading-relaxed selection:bg-brand-amber selection:text-brand-slate">
                                                            {questionData.aiExplanation.split(/(\*\*.*?\*\*)/).map((part, k) => (
                                                                part.startsWith('**') && part.endsWith('**') ? (
                                                                    <strong key={k} className="font-black text-brand-slate bg-brand-amber px-1.5 py-0.5 rounded mx-1 uppercase text-[10px] tracking-tighter inline-block align-middle">
                                                                        {part.slice(2, -2)}
                                                                    </strong>
                                                                ) : (
                                                                    <span key={k}>{part}</span>
                                                                )
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
