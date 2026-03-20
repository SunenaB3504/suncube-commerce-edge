
import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown, Library, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Chapter } from '../types';

export const SQPArchives: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [filterYear, setFilterYear] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const years: string[] = ['All', ...Array.from(new Set(chapter.sqp.map(q => q.year)))];

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
    <div className="animate-in fade-in duration-1000">
      <div className="flex flex-wrap items-center justify-between gap-8 mb-12 border-b border-white/5 pb-8">
        <div className="flex items-center gap-6 overflow-x-auto pb-4 no-scrollbar">
          <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex-shrink-0">Filter by Year</h4>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            {years.map(y => (
              <button
                key={y}
                onClick={() => setFilterYear(y)}
                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${filterYear === y ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald' : 'text-slate-500 hover:text-white'}`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-10">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <div key={q.id} className="bg-white/5 rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-brand-emerald/20 transition-all duration-500 relative group/card overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-[0.01] group-hover/card:opacity-[0.03] transition-opacity pointer-events-none">
                 <ShieldCheck size={200} />
               </div>

              {/* Question Content */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-2 bg-brand-amber/10 text-brand-amber text-[10px] font-black rounded-xl border border-brand-amber/20 uppercase tracking-[0.2em] shadow-lg shadow-amber-500/5">{q.paperType} • {q.year}</span>
                <span className="px-4 py-2 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-xl border border-brand-emerald/20 uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/5">{q.type} | {q.marks} MARKS</span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-10 leading-snug whitespace-pre-wrap tracking-tight group-hover:text-brand-emerald transition-colors">
                  {q.questionNumber && <span className="text-slate-500 mr-2 opacity-50">{q.questionNumber}.</span>}
                  {q.question}
                </h3>

                {q.imageUrl && (
                  <div className="mb-10 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-4 shadow-2xl group/img">
                    <img 
                      src={q.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${q.imageUrl.slice(1)}` : q.imageUrl} 
                      alt="Question Figure" 
                      className="max-w-full h-auto object-contain rounded-[1.5rem] group-hover/img:scale-[1.02] transition-transform duration-700" 
                    />
                  </div>
                )}

                {(q.optionA || q.optionB || q.optionC || q.optionD) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => opt && (
                      <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-300 font-medium hover:bg-white/5 hover:border-brand-emerald/30 transition-all group/opt">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-xl bg-brand-slate border border-white/10 text-brand-emerald font-black text-[10px] group-hover/opt:bg-brand-emerald group-hover/opt:text-brand-slate transition-all shadow-xl">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="group-hover/opt:text-white transition-colors">{opt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {expandedQuestions.has(q.id) ? (
                <div className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-top-4 duration-500 relative z-10 mt-12 pt-12 border-t border-white/5">
                  <button onClick={() => toggleExpand(q.id)} className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-slate border border-white/10 p-3 rounded-xl hover:bg-white/5 hover:text-brand-emerald transition-all shadow-glow-emerald/5">
                    <ChevronDown className="w-5 h-5 text-slate-400 rotate-180" />
                  </button>
                  
                  <div className="bg-brand-emerald/5 p-8 rounded-[2rem] border border-brand-emerald/20 shadow-2xl overflow-hidden group/ms relative">
                     <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none group-hover/ms:opacity-10 transition-opacity">
                        <ShieldCheck size={80} className="text-brand-emerald" />
                     </div>
                    <h5 className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse" />
                      Official Marking Scheme
                    </h5>
                    <div className="prose prose-invert max-w-none text-slate-300 font-medium leading-relaxed opacity-90 group-hover/ms:opacity-100 transition-opacity">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.markingScheme || q.answer || ''}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="bg-brand-amber/5 p-8 rounded-[2rem] border border-brand-amber/20 shadow-2xl overflow-hidden group/ai relative">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none group-hover/ai:opacity-10 transition-opacity">
                        <Cpu size={80} className="text-brand-amber" />
                     </div>
                    <h5 className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                      <Zap size={14} className="fill-brand-amber" />
                      Digital Forensic Logic
                    </h5>
                    <div className="prose prose-invert max-w-none text-slate-300 font-medium leading-relaxed opacity-90 group-hover/ai:opacity-100 transition-opacity">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.aiExplanation || ''}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => toggleExpand(q.id)} className="w-full flex items-center justify-between gap-6 p-8 bg-white/[0.03] backdrop-blur-xl hover:bg-white/5 rounded-[2rem] border border-dashed border-white/10 transition-all group/reveal mt-8">
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-emerald/20 border-2 border-brand-slate flex items-center justify-center text-brand-emerald shadow-2xl relative z-10 group-hover/reveal:rotate-[-12deg] transition-transform">
                        <ShieldCheck size={20} />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-amber/20 border-2 border-brand-slate flex items-center justify-center text-brand-amber shadow-2xl relative z-20 group-hover/reveal:rotate-[12deg] transition-transform">
                        <Cpu size={20} />
                      </div>
                    </div>
                    <div className="text-left">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] group-hover/reveal:text-white transition-colors">Forensic Reveal</span>
                       <p className="text-sm font-black text-white group-hover/reveal:text-brand-emerald transition-colors">Tap to decrypt marking scheme & AI logic</p>
                    </div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl group-hover/reveal:bg-brand-emerald group-hover/reveal:text-brand-slate transition-all">
                    <ArrowRight size={20} className="group-hover/reveal:translate-x-1 transition-transform" />
                  </div>
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white/5 rounded-[3.5rem] p-20 text-center border-2 border-dashed border-white/10 backdrop-blur-3xl animate-in zoom-in-95 duration-700">
            <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-glow-amber/5">
              <Library size={48} className="text-slate-700" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Vault Empty</h3>
            <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">We're still curating and digitizing the forensic exam archive for this chapter. System update pending.</p>
          </div>
        )}
      </div>
    </div>
  );
};
