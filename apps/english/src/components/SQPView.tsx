import React, { useState } from 'react';
import { ChevronLeft, FileText, Download, Zap, BookOpen, PenTool, Layout } from 'lucide-react';

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
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-royal-600 font-bold hover:text-royal-800 transition-colors mb-4 group"
                    >
                        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Command Center
                    </button>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                        <Layout className="text-amber-500 h-10 w-10" />
                        SQP <span className="text-royal-600">Board Vault</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-2">Accessing authentic CBSE Sample Question Papers and Solutions</p>
                </div>

                <div className="flex flex-col gap-4 items-end">
                    <div className="flex bg-slate-200 p-1 rounded-2xl shadow-inner">
                        {sqps.map(sqp => (
                            <button
                                key={sqp.year}
                                onClick={() => setActiveYear(sqp.year)}
                                className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeYear === sqp.year
                                    ? 'bg-white text-royal-600 shadow-md scale-105'
                                    : 'text-slate-500 hover:text-slate-700'
                                    }`}
                            >
                                {sqp.year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Navigation Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm sticky top-24">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Paper Structure</h3>
                        <div className="space-y-2">
                            {activeSQP.sections.map(section => (
                                <SectionLink
                                    key={section.id}
                                    icon={section.id === 'reading' ? <BookOpen size={16} /> : section.id === 'writing' ? <PenTool size={16} /> : <FileText size={16} />}
                                    title={section.title}
                                    color={section.id === 'reading' ? "bg-blue-50 text-blue-600" : section.id === 'writing' ? "bg-indigo-50 text-indigo-600" : "bg-emerald-50 text-emerald-600"}
                                    marks={section.marks}
                                />
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-dashed border-slate-200">
                            <button
                                className="w-full py-4 bg-royal-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-royal-700 transition-all shadow-lg shadow-royal-100"
                                onClick={() => window.print()}
                            >
                                <Download size={18} /> Export for Print
                            </button>
                        </div>
                    </div>
                </div>

                {/* Paper Content */}
                <div className="lg:col-span-3 space-y-12">
                    {activeSQP.sections.map((section) => (
                        <div key={section.id} className="space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-xl font-black text-slate-900">{section.title}</h3>
                                <div className="h-px flex-1 bg-slate-200"></div>
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{section.marks}</span>
                            </div>

                            <div className="space-y-8">
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
    <div className={`bg-white rounded-[2rem] border overflow-hidden transition-all duration-500 ${isExpanded ? 'border-royal-200 shadow-2xl scale-[1.02]' : 'border-slate-200 shadow-sm hover:border-royal-100 hover:shadow-lg'}`}>
        <div className="p-8">
            <div className="flex justify-between items-start gap-6 mb-6">
                <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-slate-600">
                        {question.questionNumber}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-600 bg-royal-50 px-3 py-1 rounded-lg">
                        {question.marks} Marks
                    </span>
                </div>
                <button
                    onClick={onToggle}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${isExpanded ? 'bg-royal-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                    {isExpanded ? 'Hide Forensic View' : 'Show Solutions'}
                </button>
            </div>

            <div className="prose prose-slate max-w-none mb-4">
                <p className="text-lg font-bold text-slate-800 leading-relaxed whitespace-pre-wrap">
                    {question.question}
                </p>
            </div>

            {isExpanded && (
                <div className="mt-8 space-y-6 animate-in slide-in-from-top-4 duration-500">
                    <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                        <div className="flex items-center gap-2 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <BookOpen size={12} /> Official Marking Scheme
                        </div>
                        <p className="text-emerald-900 font-medium leading-relaxed whitespace-pre-wrap">
                            {question.markingScheme}
                        </p>
                    </div>

                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                        <div className="flex items-center gap-2 text-amber-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            <Zap size={12} /> AI Forensic Breakdown
                        </div>
                        <p className="text-amber-900 italic leading-relaxed whitespace-pre-wrap">
                            {question.aiExplanation}
                        </p>
                    </div>
                </div>
            )}
        </div>
    </div>
);

const SectionLink = ({ icon, title, color, marks }: { icon: React.ReactNode; title: string, color: string, marks: string }) => (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer border border-transparent hover:border-slate-100">
        <div className="flex items-center gap-4">
            <div className={`h-10 w-10 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <span className="font-bold text-slate-900 group-hover:text-royal-600 transition-colors">{title}</span>
        </div>
        <span className="text-[10px] font-black text-slate-400">{marks}</span>
    </div>
);
