
import React, { useState } from 'react';
import { Zap, ChevronRight, AlertTriangle, Info } from 'lucide-react';
import { Chapter, TheoryTopic } from '../types';

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-in fade-in duration-700">
      {/* Sidebar - Subtopics */}
      <div className="md:w-1/4 flex flex-col gap-3">
        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 px-2">Subtopics</h4>
        <div className="flex flex-col gap-2">
          {chapter.topics.map(topic => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic)}
              className={`text-left p-4 rounded-xl text-sm font-black transition-all duration-300 border ${selectedTopic?.id === topic.id ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-lg shadow-emerald-500/20 scale-[1.02]' : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'}`}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="md:w-3/4">
        {selectedTopic && (
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">{selectedTopic.title}</h2>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">{selectedTopic.description}</p>
            </div>
            
            <div className="grid gap-4 mb-10">
              {selectedTopic.content.map((p, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border-l-4 border-brand-emerald group hover:bg-white/10 transition-colors">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-brand-emerald flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <p className="text-slate-200 font-medium leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            {/* Danger Zones / Contraindications */}
            {selectedTopic.dangerZones && selectedTopic.dangerZones.length > 0 && (
              <div className="mt-8 p-6 bg-red-500/10 border-2 border-red-500/20 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <AlertTriangle className="w-24 h-24 text-red-500" />
                </div>
                <h4 className="text-red-400 font-black flex items-center gap-2 mb-4 uppercase tracking-tighter text-lg">
                  <Zap className="w-5 h-5 fill-red-500 text-red-500" />
                  Danger Zone: Contraindications
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 relative z-10">
                  {selectedTopic.dangerZones.map((zone, i) => (
                    <li key={i} className="flex gap-3 text-red-200 font-bold text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                      <span className="text-red-500">⚠</span>
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Visualizations & Hacks */}
            <div className="mt-12 space-y-8">
              <h4 className="text-xl font-black text-white flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2 bg-brand-amber/10 rounded-lg">
                  <Zap className="w-5 h-5 text-brand-amber fill-brand-amber" />
                </div>
                Study Visualizations & Street-Smart Hacks
              </h4>
              
              <div className="grid gap-8">
                {selectedTopic.visualizations.map((vis) => (
                  <div key={vis.id} className={`rounded-3xl p-6 border transition-all duration-500 ${vis.hack ? 'bg-brand-amber/5 border-brand-amber/20 shadow-[0_0_30px_rgba(251,191,36,0.05)]' : 'bg-white/5 border-white/10'}`}>
                    <h5 className="font-black text-white mb-6 flex items-center justify-between uppercase tracking-widest text-xs">
                      <span className="flex items-center gap-2">
                        {vis.hack && <Zap className="w-4 h-4 text-brand-amber fill-brand-amber" />}
                        {vis.title}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black ${vis.hack ? 'bg-brand-amber text-brand-slate shadow-glow-amber' : 'bg-brand-emerald/20 text-brand-emerald'}`}>
                        {vis.hack ? 'STREET-SMART HACK' : vis.type}
                      </span>
                    </h5>

                    {vis.hack && (
                      <div className="mb-6 p-6 bg-brand-slate/50 rounded-2xl border border-brand-amber/30 group hover:border-brand-amber/60 transition-colors">
                        <p className="text-brand-amber font-black text-sm mb-3 flex items-center gap-2 uppercase tracking-tighter italic">
                          <Info className="w-4 h-4" /> Cheat-Code Visualization
                        </p>
                        <p className="text-white font-black text-xl leading-relaxed italic">"{vis.hack}"</p>
                      </div>
                    )}

                    {vis.formula && (
                      <div className="mb-6 p-5 bg-brand-emerald/10 text-white rounded-2xl border border-brand-emerald/30 group hover:bg-brand-emerald/20 transition-all">
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-brand-emerald mb-2 block">{vis.formulaTitle || 'Core Formula'}</span>
                        <code className="text-2xl font-black font-mono tracking-tighter text-glow-emerald">{vis.formula}</code>
                      </div>
                    )}

                    {/* Table Data */}
                    {vis.type === 'table' && 'headers' in vis.data ? (
                      <div className="overflow-x-auto rounded-2xl border border-white/5">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-white/5 text-slate-400">
                            <tr>
                              {vis.data.headers.map((h: string, i: number) => <th key={i} className="px-6 py-4 font-black uppercase tracking-widest text-[10px]">{h}</th>)}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {vis.data.rows.map((row: string[], i: number) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                {row.map((cell, j) => <td key={j} className="px-6 py-4 text-slate-300 font-bold whitespace-nowrap">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(vis.data as {label: string; desc: string}[]).map((item, i: number) => (
                          <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group">
                            <p className="text-brand-emerald font-black text-[10px] mb-2 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">{item.label}</p>
                            <p className="text-slate-300 text-sm font-bold leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                      <div className="flex flex-wrap gap-2">
                        {(vis.data as string[]).map((item, i) => (
                          <div key={i} className="bg-white/5 px-4 py-2 rounded-xl border border-white/5 font-black text-brand-emerald text-xs hover:border-brand-emerald/30 transition-all">
                            {item}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-4">
                        {Array.isArray(vis.data) && (vis.data as string[]).map((step, i, arr) => (
                          <React.Fragment key={i}>
                            <div className="bg-white/5 px-5 py-3 rounded-2xl border border-white/5 font-black text-white text-sm hover:border-brand-emerald/30 transition-all">
                              {step}
                            </div>
                            {i < arr.length - 1 && <ChevronRight className="w-5 h-5 text-slate-700" />}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
