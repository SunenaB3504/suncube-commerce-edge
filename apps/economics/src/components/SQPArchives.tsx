
import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown, Library } from 'lucide-react';
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
    <div className="animate-in fade-in duration-700">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <h4 className="text-xs font-black text-gray-400 border-b-2 border-indigo-600 pb-1 uppercase tracking-widest mr-4 flex-shrink-0">Filter by Year</h4>
          {years.map(y => (
            <button
              key={y}
              onClick={() => setFilterYear(y)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${filterYear === y ? 'bg-indigo-900 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-indigo-50 border border-gray-100'}`}
            >
              {y}
            </button>
          ))}
        </div>
        {/* Debug Info (Only visible if you know where to look or via inspector) */}
        <div className="opacity-0 hover:opacity-100 text-[8px] text-gray-300">
          Ch ID: {chapter.id} | SQP Items: {chapter.sqp.length}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(q => (
            <div key={q.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
              {/* Question Content */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest">{q.paperType} {q.year}</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-widest">{q.type} | {q.marks} MARKS</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug whitespace-pre-wrap">{q.questionNumber ? `${q.questionNumber}. ` : ''}{q.question}</h3>

              {q.imageUrl && (
                <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 bg-white inline-block">
                  <img src={q.imageUrl.startsWith('/') ? `${import.meta.env.BASE_URL}${q.imageUrl.slice(1)}` : q.imageUrl} alt="Question Figure" className="max-w-full h-auto object-contain" />
                </div>
              )}

              {(q.optionA || q.optionB || q.optionC || q.optionD) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[q.optionA, q.optionB, q.optionC, q.optionD].map((opt, i) => opt && (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold text-xs">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              )}

              {expandedQuestions.has(q.id) ? (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                  <button onClick={() => toggleExpand(q.id)} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                  </button>
                  <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 overflow-x-auto">
                    <h5 className="text-[10px] font-black text-indigo-900 uppercase tracking-widest mb-3 border-b border-indigo-200 pb-1">Official Marking Scheme</h5>
                    <div className="prose prose-sm prose-indigo max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.markingScheme || q.answer || ''}</ReactMarkdown>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                    <h5 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-200 pb-1">
                      <Zap className="w-3 h-3 fill-amber-900" /> AI Reasoning
                    </h5>
                    <div className="prose prose-sm prose-amber max-w-none text-amber-800 font-medium leading-relaxed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{q.aiExplanation || ''}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ) : (
                <button onClick={() => toggleExpand(q.id)} className="w-full flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-indigo-50 to-amber-50 hover:from-indigo-100 hover:to-amber-100 rounded-2xl border border-dashed border-indigo-200 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-widest">MS</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest">AI</span>
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Click to reveal solution & explanation</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-transform" />
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Library className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Questions Found</h3>
            <p className="text-gray-500 font-medium">We're still curating the exam archive for this chapter. Check back soon!</p>
          </div>
        )}
      </div>

    </div>
  );
};
