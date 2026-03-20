import React, { useState } from 'react';
import { MCQWithUnit } from '../../utils/mcqAggregator';
import { Cpu, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface QuestionCardProps {
    question: MCQWithUnit;
    onAnswer: (selectedOption: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
    };

    const handleSubmit = () => {
        if (selected) {
            onAnswer(selected);
            setSelected(null); // Reset for next question
        }
    };

    const options = [
        { id: 'A', text: question.optionA },
        { id: 'B', text: question.optionB },
        { id: 'C', text: question.optionC },
        { id: 'D', text: question.optionD },
    ].filter(opt => opt.text); // Only show options that exist

    const hasStructuredOptions = options.length > 0;

    return (
        <div className="bg-white/[0.02] rounded-[3.5rem] p-10 md:p-16 border border-white/5 shadow-2xl backdrop-blur-3xl animate-in fade-in zoom-in duration-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/5 rounded-full blur-3xl -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-12 relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center gap-2">
                        <Cpu size={12} className="text-brand-emerald" />
                        <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest leading-none">
                            {question.unitName}
                        </span>
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter italic selection:bg-brand-emerald selection:text-brand-slate">
                    {question.question}
                </h2>
            </div>

            {hasStructuredOptions ? (
                <div className="space-y-6 mb-12 relative z-10">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`w-full text-left p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-500 group/opt ${selected === option.id
                                    ? 'border-brand-emerald bg-brand-emerald/10 shadow-glow-emerald/10'
                                    : 'border-white/5 bg-white/[0.02] hover:border-brand-emerald/30 hover:bg-white/[0.05]'
                                }`}
                        >
                            <div className="flex items-center gap-6">
                                <span className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-500 ${selected === option.id 
                                    ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald' 
                                    : 'bg-white/5 text-slate-500 group-hover/opt:text-white'
                                    }`}>
                                    {option.id}
                                </span>
                                <span className={`text-xl font-black uppercase tracking-tight leading-snug transition-colors ${selected === option.id ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-200'}`}>
                                    {option.text}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="mb-12 p-8 bg-brand-amber/5 rounded-[2rem] border border-dashed border-brand-amber/20 text-brand-amber font-black text-center text-xs uppercase tracking-widest relative z-10">
                    <Sparkles size={16} className="mx-auto mb-3 animate-pulse" />
                    Neural pattern mismatch. Non-structured response required.
                </div>
            )}

            <button
                onClick={handleSubmit}
                disabled={!selected}
                className={`w-full py-7 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.4em] transition-all duration-500 relative z-10 group/btn flex items-center justify-center gap-4 ${selected
                        ? 'bg-brand-amber hover:bg-white text-brand-slate shadow-glow-amber/20 hover:shadow-glow-amber/40 hover:-translate-y-1'
                        : 'bg-white/5 text-slate-600 cursor-not-allowed grayscale'
                    }`}
            >
                <ShieldCheck size={18} className={selected ? 'animate-bounce' : ''} />
                Validate Decision
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
        </div>
    );
};
