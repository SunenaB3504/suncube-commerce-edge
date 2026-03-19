
import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown, Calendar, Award, CheckCircle, BrainCircuit } from 'lucide-react';
import { Chapter } from '../types';

export const SQPArchives: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [filterYear, setFilterYear] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const years = ['All', ...new Set(chapter.sqp.map(q => q.year))];
  
  const filteredQuestions = useMemo(() => 
    filterYear === 'All' ? chapter.sqp : chapter.sqp.filter(q => q.year === filterYear)
  , [filterYear, chapter.sqp]);

  const toggleExpand = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 scrollbar-hide">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mr-4 flex-shrink-0">Filter by Year</h4>
        <div className="flex gap-2">
          {years.map(y => (
            <button
              key={y}
              onClick={() => setFilterYear(y)}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all duration-300 whitespace-nowrap border ${filterYear === y ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-lg shadow-emerald-500/20' : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'}`}
            >
              <div className="flex items-center gap-2">
                {y !== 'All' && <Calendar className="w-3 h-3" />}
                {y}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8">
        {filteredQuestions.map(q => (
          <div key={q.id} className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-brand-emerald/30 transition-all duration-500 relative overflow-hidden">
             
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-black rounded-full uppercase tracking-widest border border-brand-amber/20 flex items-center gap-1.5">
                <Award className="w-3 h-3" /> {q.paperType} {q.year}
              </span>
              <span className="px-3 py-1 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-full uppercase tracking-widest border border-brand-emerald/20">
                {q.type} | {q.marks} MARKS
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white mb-8 leading-tight tracking-tight group-hover:text-emerald-50 transition-colors">{q.question}</h3>
            
            {expandedQuestions.has(q.id) ? (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-500 relative">
                <button
                  onClick={() => toggleExpand(q.id)}
                  className="absolute -top-12 right-0 p-3 bg-white/5 hover:bg-brand-emerald hover:text-brand-slate rounded-xl transition-all border border-white/10 group/btn shadow-xl"
                  aria-label="Collapse"
                >
                  <ChevronDown className="w-5 h-5 rotate-180" />
                </button>

                <div className="bg-brand-emerald/5 p-6 rounded-2xl border border-brand-emerald/20 relative group/ms">
                  <div className="flex items-center justify-between mb-4 border-b border-brand-emerald/10 pb-3">
                    <h5 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.2em] flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5" /> Official Marking Scheme
                    </h5>
                  </div>
                  <p className="text-slate-200 font-bold text-sm leading-relaxed whitespace-pre-wrap">{q.markingScheme || q.answer}</p>
                </div>

                <div className="bg-brand-amber/5 p-6 rounded-2xl border border-brand-amber/20 relative group/ai">
                  <div className="flex items-center justify-between mb-4 border-b border-brand-amber/10 pb-3">
                    <h5 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.2em] flex items-center gap-2">
                      <BrainCircuit className="w-4 h-4" />AI Reasoning Engine
                    </h5>
                  </div>
                  <p className="text-slate-300 font-medium text-xs leading-relaxed whitespace-pre-wrap italic">{q.aiExplanation || q.explanation}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full flex items-center justify-between gap-6 p-6 bg-white/[0.03] hover:bg-brand-emerald/10 rounded-2xl border border-dashed border-white/10 hover:border-brand-emerald/30 transition-all duration-500 group/reveal overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald/0 via-brand-emerald/[0.02] to-brand-amber/[0.02] opacity-0 group-hover/reveal:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded-lg bg-brand-emerald text-brand-slate flex items-center justify-center font-black text-[10px] shadow-lg shadow-emerald-500/20 scale-90 group-hover/reveal:scale-100 transition-transform">MS</div>
                    <div className="w-8 h-8 rounded-lg bg-brand-amber text-brand-slate flex items-center justify-center font-black text-[10px] shadow-lg shadow-amber-500/20 lg:block hidden scale-90 group-hover/reveal:scale-100 transition-transform">AI</div>
                  </div>
                  <span className="text-sm font-black text-slate-500 group-hover/reveal:text-white uppercase tracking-widest transition-colors">Reveal verified solution & analysis</span>
                </div>
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover/reveal:border-brand-emerald/30 group-hover/reveal:bg-brand-emerald/10 transition-all">
                  <ChevronDown className="w-5 h-5 text-slate-500 group-hover/reveal:text-brand-emerald transition-transform group-hover/reveal:rotate-0" />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
