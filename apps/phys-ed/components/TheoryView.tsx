
import React, { useState } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { Chapter, TheoryTopic } from '../types';

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-in fade-in duration-700">
      <div className="md:w-1/4 flex flex-col gap-2">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Subtopics</h4>
        {chapter.topics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-4 rounded-xl text-sm font-bold transition-all ${selectedTopic?.id === topic.id ? 'bg-emerald-900 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-emerald-50'}`}
          >
            {topic.title}
          </button>
        ))}
      </div>
      <div className="md:w-3/4">
        {selectedTopic && (
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-4">{selectedTopic.title}</h2>
            <p className="text-gray-600 mb-8 font-medium leading-relaxed">{selectedTopic.description}</p>
            
            <div className="grid gap-6">
              {selectedTopic.content.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border-l-4 border-emerald-600">
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">{p}</p>
                </div>
              ))}
            </div>

            {selectedTopic.dangerZones && selectedTopic.dangerZones.length > 0 && (
              <div className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-3xl animate-pulse">
                <h4 className="text-red-900 font-black flex items-center gap-2 mb-3 uppercase tracking-tighter">
                  <Zap className="w-5 h-5 fill-red-500 text-red-500" />
                  Danger Zone: Contraindications
                </h4>
                <ul className="grid gap-2">
                  {selectedTopic.dangerZones.map((zone, i) => (
                    <li key={i} className="flex gap-3 text-red-800 font-bold text-sm bg-white/50 p-3 rounded-xl border border-red-100">
                      <span className="text-red-500">⚠</span>
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 grid gap-10">
              <h4 className="text-lg font-black text-emerald-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Study Visualizations & Hacker Hacks
              </h4>
              {selectedTopic.visualizations.map((vis) => (
                <div key={vis.id} className={`rounded-3xl p-6 border ${vis.hack ? 'bg-amber-50 border-amber-200 shadow-lg scale-[1.02] transform transition-all' : 'bg-emerald-50/50 border-emerald-100'}`}>
                  <h5 className="font-bold text-emerald-800 mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {vis.hack && <Zap className="w-4 h-4 text-amber-600 fill-amber-600" />}
                      {vis.title}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded uppercase font-black ${vis.hack ? 'bg-amber-200 text-amber-800' : 'bg-emerald-200 text-emerald-700'}`}>
                      {vis.hack ? 'Hacker Hack' : vis.type}
                    </span>
                  </h5>

                  {vis.hack && (
                    <div className="mb-6 p-5 bg-white rounded-2xl border-2 border-amber-300 shadow-sm">
                      <p className="text-amber-900 font-black text-xl mb-2 flex items-center gap-2 italic">
                         "Cheat Code" Visual:
                      </p>
                      <p className="text-gray-800 font-bold text-lg leading-relaxed">{vis.hack}</p>
                    </div>
                  )}

                  {vis.formula && (
                    <div className="mb-4 p-4 bg-emerald-900 text-white rounded-2xl flex flex-col gap-1 shadow-md">
                      <span className="text-[10px] uppercase font-black tracking-widest text-emerald-300">{vis.formulaTitle || 'Core Formula'}</span>
                      <code className="text-xl font-black font-mono tracking-tighter">{vis.formula}</code>
                    </div>
                  )}

                  {vis.type === 'table' && 'headers' in vis.data ? (
                    <div className="overflow-x-auto rounded-xl shadow-sm">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-emerald-900 text-white">
                          <tr>
                            {vis.data.headers.map((h: string, i: number) => <th key={i} className="px-4 py-3 font-black whitespace-nowrap">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-emerald-100">
                          {vis.data.rows.map((row: string[], i: number) => (
                            <tr key={i} className="hover:bg-emerald-50 transition-colors">
                              {row.map((cell, j) => <td key={j} className="px-4 py-4 text-gray-700 font-medium">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(vis.data as {label: string; desc: string}[]).map((item, i: number) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-all">
                          <p className="text-emerald-900 font-black text-sm mb-1 uppercase tracking-tight">{item.label}</p>
                          <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                    <div className="flex flex-wrap gap-3">
                      {(vis.data as string[]).map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm font-bold text-emerald-900 text-sm hover:shadow-md transition-all">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3">
                      {Array.isArray(vis.data) && (vis.data as string[]).map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm font-bold text-emerald-900 text-sm hover:translate-y-[-2px] transition-all">
                            {step}
                          </div>

                          {i < arr.length - 1 && <ChevronRight className="w-5 h-5 text-emerald-300" />}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
