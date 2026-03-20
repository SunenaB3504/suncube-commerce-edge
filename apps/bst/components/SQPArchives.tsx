import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown, Filter, ShieldCheck, Cpu, Target, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Chapter } from '../types';

export const SQPArchives: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [filterYear, setFilterYear] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const years = ['All', ...new Set(chapter.sqp.map(q => q.year))];

  const filteredQuestions = useMemo(() => {
    return filterYear === 'All' ? chapter.sqp : chapter.sqp.filter(q => q.year === filterYear);
  }, [filterYear, chapter.sqp]);

  const toggleExpand = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const handleOptionSelect = (questionId: string, optionLetter: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionLetter
    }));
  };

  const calculateScore = () => {
    let score = 0;
    let totalMCQs = 0;
    filteredQuestions.forEach(q => {
      if (q.type === 'MCQ' && (q.optionA || q.optionB || q.optionC || q.optionD)) {
        totalMCQs++;
        const selectedOptionText = q[`option${answers[q.id]}` as keyof typeof q];
        if (selectedOptionText && q.answer && q.answer.includes(selectedOptionText as string)) {
          score++;
        } else if (q.answer && q.answer.startsWith(answers[q.id])) {
          score++;
        }
      }
    });
    return { score, totalMCQs };
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      {/* Filtering Engine */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 p-6 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl">
        <div className="flex items-center gap-3 px-4 py-2 bg-brand-emerald/10 rounded-xl border border-brand-emerald/20">
           <Filter size={14} className="text-brand-emerald" />
           <h4 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em]">Vault Filter</h4>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          {years.map(y => (
            <button
              key={y}
              onClick={() => {
                setFilterYear(y);
                setAnswers({});
                setIsSubmitted(false);
                setExpandedQuestions(new Set());
              }}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all border uppercase tracking-widest whitespace-nowrap ${filterYear === y ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-glow-emerald' : 'bg-transparent text-slate-500 border-white/5 hover:bg-white/5 hover:text-white'}`}
            >
              Year: {y}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-10">
        {filteredQuestions.map((q, idx) => (
          <div key={q.id} className="group relative bg-white/[0.02] rounded-[3.5rem] p-12 border border-white/5 hover:border-brand-emerald/20 transition-all duration-700 animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full">
                 <ShieldCheck size={12} className="text-brand-amber" />
                 <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest">{q.paperType} {q.year}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full">
                 <Cpu size={12} className="text-brand-emerald" />
                 <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">{q.type} Engine</span>
              </div>
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{q.marks} Marks Value</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight uppercase tracking-tighter italic selection:bg-brand-emerald selection:text-brand-slate">{q.question}</h3>

            {/* Options Grid for MCQs */}
            {(q.optionA || q.optionB || q.optionC || q.optionD) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  { letter: 'A', text: q.optionA },
                  { letter: 'B', text: q.optionB },
                  { letter: 'C', text: q.optionC },
                  { letter: 'D', text: q.optionD }
                ].map((opt, i) => {
                  if (!opt.text) return null;

                  const isSelected = answers[q.id] === opt.letter;
                  let bgClass = "bg-white/[0.03] border-white/5 text-slate-400 hover:bg-white/5 hover:border-white/20 hover:text-white";
                  let iconBg = "bg-white/5 text-slate-500";

                  if (isSelected && !isSubmitted) {
                    bgClass = "bg-brand-emerald/10 border-brand-emerald/40 text-brand-emerald shadow-glow-emerald/5";
                    iconBg = "bg-brand-emerald text-brand-slate";
                  } else if (isSubmitted) {
                    const isCorrectOption = q.answer && (q.answer.includes(opt.text) || q.answer.startsWith(opt.letter));

                    if (isCorrectOption) {
                      bgClass = "bg-brand-emerald/20 border-brand-emerald/60 text-brand-emerald shadow-glow-emerald/10";
                      iconBg = "bg-brand-emerald text-brand-slate";
                    } else if (isSelected && !isCorrectOption) {
                      bgClass = "bg-red-500/10 border-red-500/40 text-red-500";
                      iconBg = "bg-red-500 text-white shadow-glow-red/10";
                    } else {
                      bgClass = "bg-white/[0.01] border-white/5 text-slate-600 opacity-40";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(q.id, opt.letter)}
                      disabled={isSubmitted}
                      className={`group/opt flex items-center gap-6 p-6 rounded-[2rem] border text-lg font-black transition-all text-left uppercase tracking-tight ${bgClass}`}
                    >
                      <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl font-black text-sm transition-all group-hover/opt:scale-110 ${iconBg}`}>
                        {opt.letter}
                      </span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {(expandedQuestions.has(q.id) || isSubmitted) ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 relative">
                {!isSubmitted && (
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="absolute -top-16 right-0 p-3 bg-white/5 border border-white/10 rounded-xl hover:text-brand-amber hover:border-brand-amber/30 transition-all"
                  >
                    <ChevronDown size={20} className="rotate-180" />
                  </button>
                )}
                
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-brand-emerald/[0.02] p-10 rounded-[2.5rem] border border-brand-emerald/10 shadow-inner">
                     <div className="flex items-center gap-3 mb-6 px-1">
                        <CheckCircle2 size={16} className="text-brand-emerald" />
                        <h5 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em]">Institutional Mark Scheme</h5>
                     </div>
                     <p className="text-slate-200 font-bold text-lg leading-relaxed italic">"{q.markingScheme || q.answer}"</p>
                   </div>
                   
                   <div className="bg-brand-amber/[0.02] p-10 rounded-[2.5rem] border border-brand-amber/10 shadow-inner relative overflow-hidden group/ai">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl opacity-0 group-hover/ai:opacity-100 transition-opacity" />
                     <div className="flex items-center gap-3 mb-6 px-1">
                        <Zap size={16} className="text-brand-amber fill-brand-amber" />
                        <h5 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em]">AI Forensic Reasoning</h5>
                     </div>
                     <div className="text-slate-300 font-medium text-sm leading-relaxed space-y-4">
                       {q.aiExplanation?.split('\n').map((line, lineIndex) => {
                         const parts = line.split(/(\*\*.*?\*\*)/g);
                         return (
                           <div key={lineIndex} className="min-h-[1.5em] selection:bg-brand-amber selection:text-brand-slate">
                             {parts.map((part, partIndex) => {
                               if (part.startsWith('**') && part.endsWith('**')) {
                                 return <strong key={partIndex} className="font-black text-brand-slate bg-brand-amber px-1.5 py-0.5 rounded mx-0.5 uppercase text-[10px] tracking-tighter inline-block">{part.slice(2, -2)}</strong>;
                               }
                               return <span key={partIndex}>{part}</span>;
                             })}
                           </div>
                         )
                       })}
                     </div>
                   </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full flex items-center justify-between gap-6 p-8 bg-gradient-to-r from-brand-emerald/5 to-brand-amber/5 hover:from-brand-emerald/10 hover:to-brand-amber/10 rounded-[2.5rem] border border-dashed border-white/10 hover:border-brand-emerald/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald shadow-lg group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={24} />
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-amber/10 border border-brand-amber/20 flex items-center justify-center text-brand-amber shadow-lg group-hover:scale-110 transition-transform delay-75">
                       <Sparkles size={24} />
                    </div>
                  </div>
                  <div className="text-left">
                     <span className="text-sm font-black text-white uppercase tracking-widest group-hover:text-brand-emerald transition-colors">Decrypt Vault Intelligence</span>
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Reveal MS Solution & AI Logic</p>
                  </div>
                </div>
                <div className="p-3 bg-white/5 rounded-full border border-white/5 group-hover:bg-brand-emerald group-hover:text-brand-slate transition-all">
                   <ChevronDown size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      {filteredQuestions.some(q => q.type === 'MCQ') && (
        <div className="mt-20 p-16 bg-white/[0.02] rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden group">
          {!isSubmitted ? (
            <div className="text-center relative z-10">
              <div className="mb-10 inline-flex items-center gap-4 bg-brand-emerald/10 px-6 py-2 rounded-full border border-brand-emerald/20">
                 <Target size={18} className="text-brand-emerald" />
                 <span className="text-xs font-black text-brand-emerald uppercase tracking-[0.3em]">Diagnostic Protocol Ready</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic">Ready for Assessment?</h3>
              <p className="text-slate-400 font-bold mb-12 uppercase tracking-tight italic">Submit your choices to calculate your strategic performance score.</p>
              <button
                onClick={() => {
                   setIsSubmitted(true);
                   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="group px-12 py-6 bg-brand-emerald hover:bg-white text-brand-slate font-black text-sm uppercase tracking-[0.3em] rounded-[2rem] shadow-glow-emerald/20 hover:shadow-glow-emerald/40 transition-all hover:-translate-y-2 active:scale-95 flex items-center gap-4 mx-auto"
              >
                Execute Submission <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="text-center animate-in zoom-in duration-700 relative z-10">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Assessment Complete</span>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-10 uppercase tracking-tighter italic">Diagnostic Results</h3>
              
              <div className="relative inline-block mb-12">
                 <div className="absolute -inset-10 bg-brand-emerald/10 rounded-full blur-3xl" />
                 <div className="relative text-7xl md:text-9xl font-black text-white flex items-baseline justify-center gap-4 italic tracking-tighter">
                   {calculateScore().score}
                   <span className="text-3xl md:text-4xl text-slate-500 not-italic">/</span>
                   <span className="text-4xl md:text-5xl text-slate-500 not-italic">{calculateScore().totalMCQs}</span>
                 </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                 <div className="px-8 py-4 bg-brand-emerald/10 border border-brand-emerald/20 rounded-2xl">
                    <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest block mb-1">Efficiency</span>
                    <span className="text-2xl font-black text-white">{Math.round((calculateScore().score / (calculateScore().totalMCQs || 1)) * 100)}%</span>
                 </div>
                 <div className="px-8 py-4 bg-white/5 border border-white/5 rounded-2xl">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Status</span>
                    <span className="text-2xl font-black text-white uppercase italic tracking-tighter">{calculateScore().score === calculateScore().totalMCQs ? 'Flawless' : 'Refine Logic'}</span>
                 </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setAnswers({});
                  setExpandedQuestions(new Set());
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="text-slate-500 hover:text-brand-amber font-black text-[10px] uppercase tracking-[0.4em] transition-all flex items-center gap-3 mx-auto group"
              >
                <RefreshCcw size={12} className="group-hover:rotate-180 transition-transform duration-500" />
                Retake Assessment Protocol
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

import { RefreshCcw } from 'lucide-react';
