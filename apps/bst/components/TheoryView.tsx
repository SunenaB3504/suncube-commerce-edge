import React, { useState } from 'react';
import { Zap, ChevronRight, BookOpen, Target, Cpu, BarChart3, ListChecks, ArrowRight } from 'lucide-react';
import { Chapter, TheoryTopic } from '../types';
import { HackerCard } from '@suncube/ui';

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  const highlightKeywords = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const keyword = part.slice(2, -2);
        return (
          <span key={index} className="text-brand-slate font-black bg-brand-emerald px-1.5 py-0.5 rounded mx-0.5 uppercase text-[10px] tracking-tighter">
            {keyword}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 animate-in fade-in duration-1000">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-3 space-y-3">
        <div className="flex items-center gap-2 mb-6 px-2">
           <Cpu size={14} className="text-brand-emerald" />
           <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Knowledge Nodes</h4>
        </div>
        <div className="space-y-2 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-3xl shadow-2xl">
           {chapter.topics.map(topic => (
             <button
               key={topic.id}
               onClick={() => {
                 setSelectedTopic(topic);
                 window.scrollTo({ top: 300, behavior: 'smooth' });
               }}
               className={`w-full text-left p-4 rounded-xl text-xs font-black transition-all border flex items-center justify-between group ${selectedTopic?.id === topic.id ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-glow-emerald' : 'bg-transparent text-slate-400 border-white/5 hover:bg-white/5 hover:text-white'}`}
             >
               <span className="uppercase tracking-widest">{topic.title}</span>
               <ChevronRight size={14} className={`transition-transform duration-500 ${selectedTopic?.id === topic.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
             </button>
           ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:col-span-9">
        {selectedTopic && (
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
            {/* Topic Header */}
            <div className="relative p-10 bg-white/5 rounded-[3.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/5 rounded-full blur-[80px] -mr-32 -mt-32" />
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                     <span className="px-3 py-1 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 rounded-lg text-[10px] font-black uppercase tracking-widest">Selected Module</span>
                     <div className="h-0.5 flex-1 bg-white/5" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">{selectedTopic.title}</h2>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl opacity-80 italic">"{selectedTopic.description}"</p>
               </div>
            </div>

            {/* Core Theory Paragraphs */}
            <div className="space-y-6">
              {selectedTopic.content.map((p, i) => (
                <div key={i} className="group relative p-8 bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:border-brand-emerald/20 transition-all duration-500 flex gap-8">
                  <div className="flex-shrink-0 flex flex-col items-center">
                     <div className="w-1 h-32 bg-white/5 rounded-full group-hover:bg-brand-emerald/30 transition-colors" />
                     <div className="w-2 h-2 rounded-full bg-brand-emerald my-4 shadow-glow-emerald" />
                  </div>
                  <p className="text-slate-300 font-medium leading-[1.8] text-lg selection:bg-brand-emerald selection:text-brand-slate">
                    {highlightKeywords(p)}
                  </p>
                </div>
              ))}
            </div>

            {/* Visualizations Section */}
            <div className="pt-12 space-y-10 border-t border-white/5">
              <div className="flex items-center gap-6">
                 <div className="p-4 bg-brand-amber/10 rounded-2xl border border-brand-amber/20 shadow-glow-amber/5">
                    <Zap className="text-brand-amber fill-brand-amber animate-pulse" />
                 </div>
                 <div>
                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic">Forensic Visual Analysis</h4>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1">Cross-Functional Strategy Optimization</p>
                 </div>
              </div>

              <div className="grid gap-12">
                {selectedTopic.visualizations.map((vis) => (
                  <div key={vis.id} className="relative group">
                    <div className="flex items-center justify-between mb-8">
                       <h5 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                         <div className="w-1.5 h-6 bg-brand-amber rounded-full" />
                         {vis.title}
                       </h5>
                       <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full">{vis.type} engine</span>
                    </div>

                    <div className="bg-white/[0.01] rounded-[2.5rem] p-1 border border-white/5 shadow-inner overflow-hidden">
                       {vis.type === 'table' && 'headers' in vis.data ? (
                         <div className="overflow-x-auto">
                           <table className="w-full text-left border-collapse">
                             <thead>
                               <tr className="bg-white/5">
                                 {vis.data.headers.map((h: string, i: number) => (
                                   <th key={i} className="px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] text-brand-emerald border-r border-white/5 last:border-0">{h}</th>
                                 ))}
                               </tr>
                             </thead>
                             <tbody className="divide-y divide-white/5">
                               {vis.data.rows.map((row: string[], i: number) => (
                                 <tr key={i} className="hover:bg-brand-amber/5 transition-colors group/row">
                                   {row.map((cell, j) => (
                                     <td key={j} className="px-8 py-6 text-slate-300 font-bold border-r border-white/5 last:border-0 group-hover/row:text-white">{cell}</td>
                                   ))}
                                 </tr>
                               ))}
                             </tbody>
                           </table>
                         </div>
                       ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white/[0.03]">
                           {(vis.data as { label: string; desc: string }[]).map((item, i: number) => (
                             <HackerCard 
                               key={i}
                               title={item.label}
                               description={item.desc}
                               advice="Apply this strategy to case studies for maximum impact."
                               category="Strategic Asset"
                             />
                           ))}
                         </div>
                       ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 bg-white/[0.03]">
                           {(vis.data as string[]).map((item, i) => (
                             <div key={i} className="bg-white/5 p-6 rounded-[1.5rem] border border-white/5 shadow-xl hover:border-brand-emerald/30 transition-all flex items-center gap-4 group/item">
                               <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald group-hover/item:scale-110 transition-transform">
                                  <ListChecks size={14} />
                               </div>
                               <span className="text-sm font-black text-white uppercase tracking-tight italic">{item}</span>
                             </div>
                           ))}
                         </div>
                       ) : (
                         <div className="flex flex-wrap items-center gap-6 p-12 bg-white/[0.03]">
                           {Array.isArray(vis.data) && (vis.data as string[]).map((step, i, arr) => (
                             <React.Fragment key={i}>
                               <div className="relative px-8 py-6 rounded-[2rem] bg-brand-amber/10 border border-brand-amber/20 shadow-glow-amber/5 group/step transition-all hover:scale-105">
                                 <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-amber text-brand-slate flex items-center justify-center text-[10px] font-black shadow-lg">0{i+1}</div>
                                 <span className="text-sm font-black text-white uppercase tracking-widest">{step}</span>
                               </div>
                               {i < arr.length - 1 && (
                                 <div className="flex items-center gap-1 opacity-20">
                                    <div className="w-8 h-0.5 bg-brand-amber rounded-full" />
                                    <ArrowRight size={14} className="text-brand-amber" />
                                 </div>
                               )}
                             </React.Fragment>
                           ))}
                         </div>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Breakthrough Insight - Replacing simple footer */}
            <div className="mt-20 p-12 bg-brand-amber/5 rounded-[3.5rem] border border-brand-amber/20 shadow-glow-amber/5 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-amber/5 rounded-full blur-[80px]" />
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="w-24 h-24 bg-brand-amber/10 rounded-[2rem] border border-brand-amber/20 flex items-center justify-center text-brand-amber rotate-3 group-hover:rotate-12 transition-transform duration-700">
                     <Target size={48} className="animate-pulse" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[10px] font-black text-brand-amber uppercase tracking-[0.3em]">
                        <Zap size={14} className="fill-current" />
                        Strategic Breakthrough Insight
                     </div>
                     <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">Mastering {selectedTopic.title}</h4>
                     <p className="text-slate-400 font-bold text-sm leading-relaxed uppercase tracking-tight max-w-2xl italic">
                       Professional Business Leaders prioritize pattern recognition over rote memorization. Connect these theoretical frameworks to real-world profitability and operational efficiency for high-scoring case study answers.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
