
import React, { useState } from 'react';
import { TheoryTopic } from '../types';
import { BookOpen, Target, Image as ImageIcon, Table as TableIcon, Activity, ChevronDown, ChevronUp, Layers, Calculator, CheckCircle2 } from 'lucide-react';

interface TheoryViewProps {
  theory: TheoryTopic[];
  chapterTitle: string;
}

const TheoryView: React.FC<TheoryViewProps> = ({ theory, chapterTitle }) => {
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>(() => {
    // Expand the first topic by default
    const initial: Record<string, boolean> = {};
    if (theory.length > 0) initial[theory[0].id] = true;
    return initial;
  });

  const toggleTopic = (id: string) => {
    setExpandedTopics(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderIllustration = (illustration: any) => {
    if (!illustration) return null;

    switch (illustration.type) {
      case 'table':
        return (
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 shadow-inner">
            <table className="w-full text-sm text-left text-slate-500">
              <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                  {(illustration.content[0] as string[]).map((header, i) => (
                    <th key={i} className="px-4 py-2 font-bold whitespace-nowrap">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(illustration.content as string[][]).slice(1).map((row, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-slate-50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 text-slate-700 text-xs">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {illustration.caption && (
              <p className="p-2 text-[10px] text-center italic text-slate-400 bg-slate-50">
                {illustration.caption}
              </p>
            )}
          </div>
        );
      case 'flow':
        const steps = (illustration.content as string).split('→');
        return (
          <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {steps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="px-3 py-2 bg-white border border-indigo-200 rounded-lg shadow-sm text-[11px] font-black text-indigo-700 uppercase tracking-tighter">
                    {step.trim()}
                  </div>
                  {i < steps.length - 1 && <Activity className="w-3 h-3 text-indigo-300 animate-pulse" />}
                </React.Fragment>
              ))}
            </div>
            {illustration.caption && (
              <p className="mt-3 text-[10px] text-center italic text-indigo-400 uppercase tracking-widest font-bold">
                {illustration.caption}
              </p>
            )}
          </div>
        );
      case 'image':
        return (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <img
              src={illustration.content as string}
              alt={illustration.caption || 'Illustration'}
              className="w-full h-auto object-cover"
            />
            {illustration.caption && (
              <p className="p-3 text-[10px] text-center italic text-slate-500 bg-slate-50 font-medium">
                {illustration.caption}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Theory Master</h1>
          <p className="text-slate-500 mt-2 font-medium">Detailed syllabus coverage for <span className="text-indigo-600 font-bold">{chapterTitle}</span></p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setExpandedTopics(theory.reduce((acc, t) => ({ ...acc, [t.id]: true }), {}))}
            className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-indigo-600 hover:border-indigo-100 transition-all shadow-sm"
          >
            Expand All
          </button>
          <button
            onClick={() => setExpandedTopics({})}
            className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-rose-600 hover:border-rose-100 transition-all shadow-sm"
          >
            Collapse All
          </button>
        </div>
      </header>

      <div className="space-y-6">
        {theory.map((topic) => {
          const isExpanded = expandedTopics[topic.id];
          return (
            <section
              key={topic.id}
              className={`bg-white rounded-[2rem] shadow-sm border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-indigo-200 ring-4 ring-indigo-50/50 shadow-md' : 'border-slate-200 hover:border-slate-300'
                }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between group select-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl transition-colors ${isExpanded ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-500'}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <h2 className={`text-lg font-bold transition-colors ${isExpanded ? 'text-slate-900' : 'text-slate-700'}`}>
                    {topic.title}
                  </h2>
                </div>
                <div className={`p-1.5 rounded-full transition-all ${isExpanded ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-50/50 mb-8 relative">
                    <p className="text-slate-600 leading-relaxed font-medium italic relative z-10">
                      "{topic.content}"
                    </p>
                    <BookOpen className="absolute -bottom-2 -right-2 w-16 h-16 text-indigo-100/50 rotate-12" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {topic.subtopics.map((sub, idx) => (
                      <div
                        key={idx}
                        className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:border-indigo-100 hover:shadow-md transition-all flex flex-col h-full ${sub.illustration ? 'lg:col-span-2' : ''}`}
                      >
                        <header className="flex items-center gap-3 mb-3">
                          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                            <Target className="w-4 h-4" />
                          </div>
                          <h3 className="font-bold text-slate-800 text-sm">{sub.title}</h3>
                        </header>

                        <div className="text-xs text-slate-500 mb-4 leading-relaxed font-medium whitespace-pre-line">
                          {(() => {
                            const renderStyledText = (text: string) => {
                              const parts = text.split(/(\*\*.*?\*\*)/g);
                              return parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={i} className="font-bold text-slate-700">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              });
                            };
                            return renderStyledText(sub.description);
                          })()}
                        </div>

                        {sub.points && (
                          <ul className="space-y-2 mb-4 flex-1">
                            {sub.points.map((p, pidx) => (
                              <li key={pidx} className="flex items-start gap-3 text-[11px] text-slate-600 bg-slate-50/50 p-2 rounded-lg border border-transparent hover:border-slate-100 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                                <span className="font-medium leading-tight">
                                  {(() => {
                                    const renderStyledText = (text: string) => {
                                      const parts = text.split(/(\*\*.*?\*\*)/g);
                                      return parts.map((part, i) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                          return <strong key={i} className="font-bold text-slate-700">{part.slice(2, -2)}</strong>;
                                        }
                                        return part;
                                      });
                                    };
                                    return renderStyledText(p);
                                  })()}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {sub.illustration && (
                          <div className="mt-auto pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-2 mb-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              {sub.illustration.type === 'table' ? <TableIcon className="w-3 h-3" /> : <Activity className="w-3 h-3" />}
                              Study Visualization
                            </div>

                            {sub.illustration.concept && (
                              <div className="mb-3 p-3 bg-slate-50 rounded-xl border border-slate-100 italic text-[11px] text-slate-600 font-medium leading-relaxed">
                                <span className="not-italic font-black text-indigo-600 mr-1 text-[10px] uppercase">Concept:</span>
                                {sub.illustration.concept}
                              </div>
                            )}

                            {sub.illustration.formula && (
                              <div className="mb-3 p-2 bg-indigo-50/30 rounded-lg border border-indigo-100 flex items-center gap-3">
                                <div className="p-1 rounded bg-indigo-100 text-indigo-700">
                                  <Calculator className="w-3 h-3" />
                                </div>
                                <code className="text-[11px] font-black text-slate-700 tracking-tight">
                                  {sub.illustration.formula}
                                </code>
                              </div>
                            )}

                            {renderIllustration(sub.illustration)}

                            {sub.illustration.resolution && (
                              <div className="mt-3 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                                <div className="flex items-center gap-2 mb-1.5 text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                                  <CheckCircle2 className="w-2.5 h-2.5" />
                                  Resolution Steps
                                </div>
                                <p className="text-[10px] text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                                  {sub.illustration.resolution}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Scroll to Top Hint */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
          <BookOpen className="w-3 h-3 text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">End of theory section</span>
        </div>
      </div>
    </div>
  );
};

export default TheoryView;
