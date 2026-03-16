
import React, { useState } from 'react';
import { Zap, ChevronRight } from 'lucide-react';
import { Chapter, TheoryTopic } from '../types';
import { HackerCard } from '@suncube/ui';

export const TheoryView: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(chapter.topics[0]);

  const highlightKeywords = (text: string) => {
    // Splits the text by **keyword** using a capture group to keep the delimiter
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const keyword = part.slice(2, -2);
        return (
          <span key={index} className="text-brand-amber font-extrabold bg-brand-slate/10 px-1 rounded">
            {keyword}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 animate-in fade-in duration-700">
      <div className="md:w-1/4 flex flex-col gap-2">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Subtopics</h4>
        {chapter.topics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className={`text-left p-4 rounded-xl text-sm font-bold transition-all ${selectedTopic?.id === topic.id ? 'bg-brand-slate text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
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
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border-l-4 border-brand-amber">
                  <div className="mt-1 h-2 w-2 rounded-full bg-brand-amber flex-shrink-0" />
                  <p className="text-slate-800 font-medium leading-relaxed">{highlightKeywords(p)}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-10">
              <h4 className="text-lg font-black text-brand-slate flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-amber" />
                Hacker Study Visualizations
              </h4>
              {selectedTopic.visualizations.map((vis) => (
                <div key={vis.id} className="bg-purple-50/50 rounded-3xl p-6 border border-purple-100">
                  <h5 className="font-bold text-purple-800 mb-4 flex items-center justify-between">
                    {vis.title}
                    <span className="text-xs px-2 py-1 bg-purple-200 text-purple-700 rounded uppercase">{vis.type}</span>
                  </h5>
                  {vis.type === 'table' && 'headers' in vis.data ? (
                    <div className="overflow-x-auto rounded-xl shadow-sm">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-purple-900 text-white">
                          <tr>
                            {vis.data.headers.map((h: string, i: number) => <th key={i} className="px-4 py-3 font-black whitespace-nowrap">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-purple-100">
                          {vis.data.rows.map((row: string[], i: number) => (
                            <tr key={i} className="hover:bg-purple-50 transition-colors">
                              {row.map((cell, j) => <td key={j} className="px-4 py-4 text-gray-700 font-medium">{cell}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : vis.type === 'grid' && Array.isArray(vis.data) && typeof vis.data[0] !== 'string' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(vis.data as { label: string; desc: string }[]).map((item, i: number) => (
                        <HackerCard 
                          key={i}
                          label={item.label}
                          description={item.desc}
                        />
                      ))}
                    </div>
                  ) : vis.type === 'list' && Array.isArray(vis.data) ? (
                    <div className="flex flex-wrap gap-3">
                      {(vis.data as string[]).map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm font-bold text-purple-900 text-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3">
                      {Array.isArray(vis.data) && (vis.data as string[]).map((step, i, arr) => (
                        <React.Fragment key={i}>
                          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm font-bold text-purple-900 text-sm">
                            {step}
                          </div>

                          {i < arr.length - 1 && <ChevronRight className="w-5 h-5 text-purple-300" />}
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
