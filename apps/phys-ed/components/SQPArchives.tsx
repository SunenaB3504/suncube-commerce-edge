
import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown } from 'lucide-react';
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
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mr-4 flex-shrink-0">Filter by Year</h4>
        {years.map(y => (
          <button
            key={y}
            onClick={() => setFilterYear(y)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${filterYear === y ? 'bg-emerald-900 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100'}`}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {filteredQuestions.map(q => (
          <div key={q.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest">{q.paperType} {q.year}</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest">{q.type} | {q.marks} MARKS</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug">{q.question}</h3>
            
            {expandedQuestions.has(q.id) ? (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                <button
                  onClick={() => toggleExpand(q.id)}
                  className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Collapse"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                </button>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <h5 className="text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-3 border-b border-emerald-200 pb-1">Official Marking Scheme</h5>
                  <p className="text-emerald-800 font-bold text-sm leading-relaxed whitespace-pre-wrap">{q.markingScheme || q.answer}</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <h5 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-200 pb-1">
                    <Zap className="w-3 h-3 fill-amber-900" />
                    AI Reasoning
                  </h5>
                  <p className="text-amber-800 font-medium text-xs leading-relaxed whitespace-pre-wrap">{q.aiExplanation || q.explanation}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-emerald-50 to-amber-50 hover:from-emerald-100 hover:to-amber-100 rounded-2xl border border-dashed border-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-widest">MS</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest">AI</span>
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Click to reveal solution & explanation</span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
