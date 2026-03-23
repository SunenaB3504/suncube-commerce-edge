import React, { useState } from 'react';
import { ChevronLeft, FileText, Download, Zap, BookOpen, PenTool, Layout, Activity, Award, CheckCircle, BrainCircuit, Search } from 'lucide-react';

import { StructuredSQP, SQPSection, SQPQuestion } from '../types/sqp';

interface SQPViewProps {
    sqps: StructuredSQP[];
    onBack: () => void;
}

export const SQPView: React.FC<SQPViewProps> = ({ sqps, onBack }) => {
    const [activeYear, setActiveYear] = useState(sqps[0].year);
    const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
    const activeSQP = sqps.find(s => s.year === activeYear) || sqps[0];

    return (
        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-10">
                <div>
                    <button
                        onClick={onBack}
                        className="flex items-center gap-3 text-brand-emerald font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group mb-6"
                    >
                        <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:bg-brand-emerald group-hover:text-brand-slate transition-colors">
                          <ChevronLeft className="h-4 w-4" />
                        </div>
                        Back to Library
                    </button>
                    <h2 className="text-5xl font-black text-white tracking-tight flex items-center gap-5 uppercase leading-none">
                        <div className="p-4 bg-brand-amber/10 rounded-[1.5rem] shadow-glow-amber">
                          <Layout className="text-brand-amber h-10 w-10 fill-brand-amber/20" />
                        </div>
                        SQP <span className="text-brand-emerald">Board Vault</span>
                    </h2>
                    <p className="text-slate-400 font-medium mt-4 max-w-xl">Deep-dive into authentic CBSE Sample Question Papers with forensic marking schemes and AI-driven reasoning.</p>
                </div>

                <div className="flex flex-col gap-4 items-end">
                    <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
                        {sqps.map(sqp => (
                            <button
                                key={sqp.year}
                                onClick={() => setActiveYear(sqp.year)}
                                className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeYear === sqp.year
                                    ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald scale-105'
                                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {sqp.year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Navigation Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl sticky top-28 group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                           <Activity size={100} className="text-brand-emerald" />
                        </div>
                        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4">Paper Structure</h3>
                        <div className="space-y-3 relative z-10">
                            {activeSQP.sections.map(section => (
                                <SectionLink
                                    key={section.id}
                                    icon={section.id === 'reading' ? <BookOpen size={16} /> : section.id === 'writing' ? <PenTool size={16} /> : <FileText size={16} />}
                                    title={section.title}
                                    color={section.id === 'reading' ? "bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20 shadow-emerald-500/10" : section.id === 'writing' ? "bg-brand-amber/10 text-brand-amber border-brand-amber/20 shadow-amber-500/10" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"}
                                    marks={section.marks}
                                />
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-dashed border-white/10">
                            <button
                                className="w-full py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-brand-emerald hover:text-brand-slate hover:border-brand-emerald hover:shadow-glow-emerald transition-all active:scale-95"
                                onClick={() => window.print()}
                            >
                                <Download size={18} /> Export for Print
                            </button>
                        </div>
                    </div>
                </div>

                {/* Paper Content */}
                <div className="lg:col-span-3 space-y-16">
                    {activeSQP.sections.map((section) => (
                        <div key={section.id} className="space-y-8 animate-in fade-in duration-1000">
                            <div className="flex items-center gap-6">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{section.title}</h3>
                                <div className="h-px flex-1 bg-white/5"></div>
                                <div className="px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-lg border border-brand-emerald/20 uppercase tracking-widest leading-none">
                                  {section.marks}
                                </div>
                            </div>

                            <div className="grid gap-8">
                                {section.questions.map((q) => (
                                    <ForensicCard
                                        key={q.id}
                                        question={q}
                                        isExpanded={expandedQuestion === q.id}
                                        onToggle={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ForensicCard = ({ question, isExpanded, onToggle }: { question: SQPQuestion; isExpanded: boolean; onToggle: () => void }) => (
    <div className={`bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border transition-all duration-700 relative overflow-hidden group ${isExpanded ? 'border-brand-emerald/40 shadow-glow-emerald/5 scale-[1.01]' : 'border-white/5 shadow-xl hover:border-white/20'}`}>
        <div className="absolute top-0 right-0 p-12 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity pointer-events-none">
           <Search size={150} />
        </div>
        
        <div className="p-8 md:p-10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-white/5 pb-8">
                <div className="flex items-center gap-5">
                    <div className="h-14 w-14 rounded-2xl bg-brand-slate border border-white/10 flex items-center justify-center text-lg font-black text-white shadow-xl group-hover:border-brand-emerald/30 transition-all">
                        {question.questionNumber}
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-amber bg-brand-amber/10 px-4 py-1.5 rounded-lg border border-brand-amber/20 shadow-lg shadow-amber-500/10">
                            {question.marks} Marks
                        </span>
                    </div>
                </div>
                <button
                    onClick={onToggle}
                    className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-3 ${isExpanded ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald' : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'}`}
                >
                    {isExpanded ? <Zap size={14} className="fill-brand-slate" /> : <Activity size={14} />}
                    {isExpanded ? 'Hide Forensics' : 'Inspect Solutions'}
                </button>
            </div>

            <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight whitespace-pre-wrap group-hover:text-emerald-50 transition-colors">
                    {question.question}
                </p>
            </div>

            {isExpanded && (
                <div className="mt-10 grid gap-6 animate-in slide-in-from-top-4 duration-700">
                    <div className="bg-brand-emerald/5 rounded-3xl p-8 border border-brand-emerald/20 hover:border-brand-emerald/40 transition-all group/marking">
                        <div className="flex items-center gap-3 text-brand-emerald text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <div className="p-2 bg-brand-emerald/20 rounded-lg">
                              <Award size={16} />
                            </div>
                            Official Board Marking Scheme
                        </div>
                        <p className="text-slate-200 text-lg font-bold leading-relaxed whitespace-pre-wrap">
                            "{question.markingScheme}"
                        </p>
                    </div>

                    <div className="bg-brand-amber/5 rounded-3xl p-8 border border-brand-amber/20 hover:border-brand-amber/40 transition-all group/ai">
                        <div className="flex items-center gap-3 text-brand-amber text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <div className="p-2 bg-brand-amber/20 rounded-lg">
                              <BrainCircuit size={18} />
                            </div>
                            AI Strategic Logic breakdown
                        </div>
                        <p className="text-slate-300 italic font-medium text-base leading-relaxed whitespace-pre-wrap">
                            "{question.aiExplanation}"
                        </p>
                    </div>
                </div>
            )}
        </div>
    </div>
);

const SectionLink = ({ icon, title, color, marks }: { icon: React.ReactNode; title: string, color: string, marks: string }) => (
    <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/5 active:scale-95">
        <div className="flex items-center gap-5">
            <div className={`h-12 w-12 ${color} border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                {icon}
            </div>
            <span className="font-black text-slate-300 text-xs uppercase tracking-widest group-hover:text-white transition-colors uppercase">{title}</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black text-slate-600 group-hover:text-brand-emerald transition-colors">
          {marks}
        </div>
    </div>
);
