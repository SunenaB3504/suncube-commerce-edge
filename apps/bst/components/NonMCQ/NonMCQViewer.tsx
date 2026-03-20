import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ChevronRight, ChevronLeft, Lightbulb, BookOpen, Target, Brain, Cpu, ShieldCheck, Sparkles, Activity, ArrowRight } from 'lucide-react';
import { NonMCQWithUnit } from '../../utils/nonMcqAggregator';

interface NonMCQViewerProps {
    questions: NonMCQWithUnit[];
    batchName: string;
    onBack: () => void;
}

export const NonMCQViewer: React.FC<NonMCQViewerProps> = ({ questions, batchName, onBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setShowAnswer(false);
        }
    };

    const currentQuestion = questions[currentIndex];

    // Forensic Content Renderer for highlighting keywords in questions/answers
    const renderForensicContent = (text: string, isAnswer: boolean = false) => {
        if (!text) return null;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return (
            <div className={`leading-relaxed ${isAnswer ? 'text-lg text-slate-300' : 'text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter'}`}>
                {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        const content = part.slice(2, -2);
                        return (
                            <span key={i} className={`inline-block mx-1 px-2 py-0.5 rounded ${isAnswer ? 'bg-brand-emerald text-brand-slate font-black text-[10px] uppercase align-middle' : 'bg-brand-amber text-brand-slate not-italic'}`}>
                                {content}
                            </span>
                        );
                    }
                    return <span key={i}>{part}</span>;
                })}
            </div>
        );
    };

    return (
        <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in duration-1000">
            {/* Header & Progress */}
            <div className="flex items-center justify-between mb-12">
                <button
                    onClick={onBack}
                    className="group text-[10px] font-black text-slate-500 hover:text-brand-emerald transition-all flex items-center gap-2 uppercase tracking-[0.4em]"
                >
                    <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> 
                    Laboratory Menu
                </button>
                <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                    {batchName}
                </div>
            </div>

            <div className="mb-16 space-y-4">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Analysis Progress</span>
                       <span className="text-xs font-black text-white mt-1 uppercase italic">{currentIndex + 1} / {questions.length} Cases Resolved</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full">
                       <Activity size={12} className="text-brand-emerald" />
                       <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">{Math.round(((currentIndex + 1) / questions.length) * 100)}% RESOLUTION</span>
                    </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div
                        className="h-full bg-brand-emerald shadow-glow-emerald transition-all duration-700 ease-out relative"
                        style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    >
                       <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white/[0.02] rounded-[3.5rem] p-10 md:p-16 border border-white/5 shadow-2xl backdrop-blur-3xl mb-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[100px] -mr-48 -mt-48 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <div className="px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center gap-2">
                            <Cpu size={12} className="text-brand-emerald" />
                            <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">{currentQuestion.unitName}</span>
                        </div>
                        <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            {currentQuestion.year} • {currentQuestion.paperType} • {currentQuestion.marks} MARKS
                        </div>
                        <div className="px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full text-[10px] font-black text-brand-amber uppercase tracking-widest">
                            {currentQuestion.type}
                        </div>
                    </div>

                    <div className="mb-12 selection:bg-brand-emerald selection:text-brand-slate">
                        {renderForensicContent(currentQuestion.question)}
                    </div>

                    {!showAnswer ? (
                        <button
                            onClick={() => setShowAnswer(true)}
                            className="group w-full py-8 bg-white/5 hover:bg-white text-slate-400 hover:text-brand-slate font-black text-sm uppercase tracking-[0.4em] rounded-[2rem] border border-white/10 hover:border-white transition-all flex items-center justify-center gap-4"
                        >
                            <Lightbulb size={20} className="group-hover:animate-pulse" />
                            Initialize Forensic Revelation
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    ) : (
                        <div className="space-y-10 animate-in slide-in-from-top-8 duration-700 selection:bg-brand-emerald/30">
                            {/* Marking Scheme / Standard Answer */}
                            <div className="bg-white/[0.03] rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden group/scheme">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover/scheme:opacity-100 transition-opacity" />
                                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                    <ShieldCheck size={16} className="text-brand-emerald" />
                                    CBSE Protocol / Verification Matrix
                                </h3>
                                <div className="prose prose-invert prose-sm max-w-none text-slate-300 font-medium leading-relaxed">
                                    {renderForensicContent(currentQuestion.markingScheme || currentQuestion.answer || 'Answer not provided.', true)}
                                </div>
                            </div>

                            {/* AI Explanation */}
                            {currentQuestion.aiExplanation && (
                                <div className="bg-brand-amber/5 rounded-[2.5rem] p-10 border border-brand-amber/10 relative overflow-hidden group/ai">
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl opacity-0 group-hover/ai:opacity-100 transition-opacity" />
                                    <h3 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                        <Sparkles size={16} />
                                        AI Strategic Deconstruction
                                    </h3>
                                    <div className="prose prose-invert prose-amber prose-sm max-w-none text-slate-300 font-medium leading-relaxed">
                                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                            {currentQuestion.aiExplanation}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center gap-6">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`group flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all ${currentIndex === 0
                        ? 'opacity-20 cursor-not-allowed'
                        : 'bg-white/5 text-slate-500 hover:text-white hover:bg-white/10 border border-white/5'
                        }`}
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                    Previous Node
                </button>
                <div className="text-slate-600 font-black text-[10px] uppercase tracking-widest italic">
                    {questions.length - currentIndex - 1} NODES REMAINING
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === questions.length - 1}
                    className={`group flex items-center gap-4 px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all ${currentIndex === questions.length - 1
                        ? 'opacity-20 cursor-not-allowed'
                        : 'bg-brand-emerald hover:bg-white text-brand-slate shadow-glow-emerald/20 hover:shadow-glow-emerald/40 hover:-translate-y-1'
                        }`}
                >
                    Next Case Node <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};
