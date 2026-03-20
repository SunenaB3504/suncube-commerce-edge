
import React, { useState } from 'react';
import { Zap, ChevronRight, Brain, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Chapter, TheoryTopic, TheoryContentItem } from '../types';

const ModernContentRenderer: React.FC<{ item: string | TheoryContentItem }> = ({ item }) => {
  if (typeof item === 'string') {
    return (
      <div className="flex gap-5 p-6 bg-white/5 rounded-[1.5rem] border-l-4 border-brand-emerald transition-all hover:bg-white/10 group">
        <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-emerald flex-shrink-0 animate-pulse" />
        <div className="text-slate-200 font-medium leading-relaxed group-hover:text-white transition-colors">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item}</ReactMarkdown>
        </div>
      </div>
    );
  }

  const { type = 'concept', title, text, points, subPoints, tags } = item;

  switch (type) {
    case 'concept':
      return (
        <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group hover:border-brand-amber/30 transition-all duration-500">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-125 transition-all duration-700 pointer-events-none">
             <Brain size={150} className="text-brand-amber" />
          </div>
          {tags && tags.length > 0 && (
            <div className="flex gap-3 mb-6 relative z-10">
              {tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border border-brand-amber/20 shadow-lg shadow-amber-500/10">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {title && <h3 className="text-2xl font-black text-white mb-4 relative z-10 tracking-tight">{title}</h3>}
          {text && <div className="text-slate-300 font-medium leading-relaxed italic relative z-10 opacity-90 group-hover:opacity-100 transition-opacity"><ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown></div>}
          {points && (
            <ul className="mt-8 space-y-4 relative z-10">
              {points.map((p, i) => (
                <li key={i} className="flex gap-4 text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="text-brand-amber font-black opacity-60 group-hover:opacity-100">▸</span>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{p}</ReactMarkdown>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case 'comparison':
      if (item.headers && item.rows) {
        return (
          <div className="bg-white/5 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in duration-700">
            {title && <div className="px-8 py-5 bg-white/5 border-b border-white/10 font-black text-brand-emerald text-[10px] uppercase tracking-[0.3em]">{title}</div>}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-brand-emerald text-brand-slate uppercase tracking-widest text-[10px] font-black">
                  <tr>
                    {item.headers.map((h, i) => <th key={i} className="px-6 py-4 font-black whitespace-nowrap">{h}</th>)}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-white/[0.02]">
                  {item.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      {row.map((cell, j) => <td key={j} className="px-6 py-5 text-slate-300 font-medium">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subPoints?.map((sp, i) => (
            <div key={i} className={`p-6 rounded-3xl border ${i % 2 === 0 ? 'bg-emerald-50/50 border-emerald-100 text-emerald-900' : 'bg-rose-50/50 border-rose-100 text-rose-900'}`}>
              <h4 className="font-black uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <div className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                {sp.label}
              </h4>
              <p className="text-sm font-medium leading-relaxed">{sp.text}</p>
            </div>
          ))}
        </div>
      );
    case 'context':
      return (
        <details className="group bg-white/5 rounded-[1.5rem] border border-white/5 transition-all overflow-hidden backdrop-blur-3xl">
          <summary className="flex items-center justify-between p-6 cursor-pointer font-black text-slate-400 hover:text-white select-none transition-colors">
            <span className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em]">
              <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center text-[10px] group-open:bg-brand-amber group-open:text-brand-slate group-open:rotate-12 transition-all">
                ?
              </div>
              {title || 'Historical context breakdown'}
            </span>
            <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90 text-slate-500" />
          </summary>
          <div className="p-8 pt-0 text-slate-300 text-sm font-medium border-t border-white/5 leading-relaxed opacity-90">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{text || ''}</ReactMarkdown>
            {points && (
              <ul className="mt-6 space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex gap-4 text-sm font-medium text-slate-400">
                    <span className="text-brand-amber font-black opacity-40">•</span>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{p}</ReactMarkdown>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      );
    default:
      return null;
  }
};

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  return (
    <div className="flex flex-col md:flex-row gap-12 animate-in fade-in duration-1000">
      <div className="md:w-1/4 flex flex-col gap-3">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-4">Digital Syllabus</h4>
        {chapter.topics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 border ${selectedTopic?.id === topic.id ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-glow-emerald' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border-white/5'}`}
          >
            {topic.title}
          </button>
        ))}
      </div>
      <div className="md:w-3/4">
        {selectedTopic && (
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-10 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden group/main">
            <div className="absolute top-0 right-0 p-16 opacity-[0.01] group-hover/main:opacity-[0.03] transition-opacity pointer-events-none">
               <BookOpen size={250} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight relative z-10">{selectedTopic.title}</h2>
            <div className="prose prose-invert max-w-none mb-12 relative z-10 opacity-80 leading-relaxed text-lg font-medium">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedTopic.description}</ReactMarkdown>
            </div>

            <div className="grid gap-6">
              {Array.isArray(selectedTopic.content) ? (
                selectedTopic.content.map((item, i) => (
                  <ModernContentRenderer key={i} item={item} />
                ))
              ) : (
                <div className="prose prose-indigo max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedTopic.content}</ReactMarkdown>
                </div>
              )}
            </div>

            {selectedTopic.visualizations.length > 0 && (
              <div className="mt-20 grid gap-12 relative z-10">
                <div className="flex items-center gap-6">
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                    <div className="p-3 bg-brand-amber/10 rounded-2xl">
                      <Zap className="w-6 h-6 text-brand-amber fill-brand-amber" />
                    </div>
                    Study Visualizations
                  </h4>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                
                {selectedTopic.visualizations.map((vis) => (
                  <div key={vis.id} className="bg-white/[0.02] rounded-[2.5rem] p-10 border border-white/5 backdrop-blur-3xl shadow-2xl relative group/vis overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.01] group-hover/vis:opacity-[0.03] transition-opacity pointer-events-none">
                       <Zap size={100} />
                    </div>
                    
                    <h5 className="text-lg font-black text-white mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                      {vis.title}
                      <span className="text-[10px] px-3 py-1 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 rounded-lg uppercase tracking-widest leading-none">{vis.type}</span>
                    </h5>

                    <div className="relative z-10">
                      {vis.type === 'table' && 'headers' in vis.data ? (
                        <div className="overflow-x-auto rounded-[1.5rem] border border-white/10 shadow-2xl">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-brand-emerald text-brand-slate uppercase tracking-widest text-[10px] font-black">
                              <tr>
                                {vis.data.headers.map((h: string, i: number) => <th key={i} className="px-6 py-4 font-black whitespace-nowrap">{h}</th>)}
                              </tr>
                            </thead>
                            <tbody className="bg-white/[0.02] divide-y divide-white/5">
                              {vis.data.rows.map((row: string[], i: number) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                  {row.map((cell, j) => <td key={j} className="px-6 py-5 text-slate-300 font-medium">{cell}</td>)}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {(vis.data as { label: string; desc: string }[]).map((item, i: number) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-xl hover:border-brand-amber/30 transition-all group/item">
                              <p className="text-brand-amber font-black text-[10px] mb-2 uppercase tracking-[0.2em]">{item.label}</p>
                              <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover/item:text-slate-200 transition-colors">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                        <div className="flex flex-wrap gap-4">
                          {(vis.data as string[]).map((item, i) => (
                            <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 shadow-xl font-black text-brand-emerald text-[10px] uppercase tracking-widest hover:bg-brand-emerald hover:text-brand-slate transition-all cursor-default">
                              {item}
                            </div>
                          ))}
                        </div>
                      ) : vis.type === 'process' && Array.isArray(vis.data) ? (
                        <div className="grid grid-cols-1 gap-6">
                          {(vis.data as { title: string; description: string }[]).map((item, i: number) => (
                            <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 shadow-xl flex items-center gap-8 group/prog">
                              <div className="h-12 w-12 rounded-2xl bg-brand-slate border border-white/10 text-white flex items-center justify-center font-black flex-shrink-0 text-lg shadow-2xl group-hover/prog:border-brand-emerald group-hover/prog:text-brand-emerald transition-all">
                                {i + 1}
                              </div>
                              <div>
                                <p className="text-white font-black text-lg mb-1 uppercase tracking-tighter group-hover/prog:text-brand-emerald transition-colors">{item.title}</p>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-80 group-hover/prog:opacity-100 transition-opacity">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : vis.type === 'image' && 'src' in vis.data && 'alt' in vis.data ? (
                        <div className="flex flex-col items-center">
                          <img
                            src={(vis.data as { src: string }).src.startsWith('/') ? `${import.meta.env.BASE_URL}${(vis.data as { src: string }).src.slice(1)}` : (vis.data as { src: string }).src}
                            alt={(vis.data as { alt: string }).alt}
                            className="max-w-full h-auto rounded-[2rem] shadow-glow-emerald/5 border border-white/10"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-4">
                          {Array.isArray(vis.data) && (vis.data as any[]).map((step, i, arr) => (
                            <React.Fragment key={i}>
                              <div className="bg-white/5 px-6 py-4 rounded-xl border border-white/5 shadow-xl font-black text-white text-[10px] uppercase tracking-widest hover:border-brand-emerald/40 transition-all">
                                {typeof step === 'string' ? step : (step as any).label || (step as any).title || 'Step'}
                              </div>

                              {i < arr.length - 1 && <ChevronRight className="w-5 h-5 text-slate-700" />}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>

                    {vis.aiExplanation && vis.aiExplanation.length > 0 && (
                      <div className="mt-12 bg-brand-amber/5 rounded-[2.5rem] p-10 border border-brand-amber/20 shadow-glow-amber/5 relative overflow-hidden group/ai">
                        <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover/ai:opacity-[0.05] transition-opacity pointer-events-none">
                           <Brain size={120} className="text-brand-amber" />
                        </div>
                        <h6 className="font-black text-brand-amber mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] relative z-10">
                          <div className="p-2 bg-brand-amber/20 rounded-lg">
                            <Zap className="w-4 h-4 text-brand-amber fill-brand-amber" />
                          </div>
                          Forensic AI strategic Logic
                        </h6>
                        <div className="grid gap-6 relative z-10">
                          {vis.aiExplanation.map((step, idx) => (
                            <div key={idx} className="flex gap-4 items-start group/step">
                              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-brand-amber/20 text-brand-amber text-[10px] font-black mt-0.5 group-hover/step:bg-brand-amber group-hover/step:text-brand-slate transition-colors">
                                {idx + 1}
                              </span>
                              <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-80 group-hover/step:opacity-100 transition-opacity">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>
        )}
      </div>
    </div >
  );
};
