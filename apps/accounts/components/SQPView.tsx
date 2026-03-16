
import React, { useState } from 'react';
import { SQPQuestion } from '../types';
import { History, CheckCircle2, Info, ChevronRight, Filter, Eye, EyeOff } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SQPViewProps {
  sqps: SQPQuestion[];
}

const markdownComponents = {
  table: ({ node, ...props }: any) => (
    <div className="overflow-x-auto my-4 rounded-lg border border-slate-200">
      <table className="w-full table-fixed divide-y divide-slate-200" {...props} />
    </div>
  ),
  thead: ({ node, ...props }: any) => (
    <thead className="bg-slate-50" {...props} />
  ),
  th: ({ node, ...props }: any) => (
    <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200" {...props} />
  ),
  tbody: ({ node, ...props }: any) => (
    <tbody className="bg-white divide-y divide-slate-200" {...props} />
  ),
  tr: ({ node, ...props }: any) => (
    <tr className="hover:bg-slate-50 transition-colors" {...props} />
  ),
  td: ({ node, ...props }: any) => (
    <td className="px-4 py-3 text-sm text-slate-700 align-top" {...props} />
  ),
  p: ({ node, ...props }: any) => (
    <p className="mb-2 last:mb-0" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc list-outside ml-4 mb-2 space-y-1" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal list-outside ml-4 mb-2 space-y-1" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="text-slate-700" {...props} />
  ),
  strong: ({ node, ...props }: any) => (
    <strong className="font-bold text-slate-900" {...props} />
  ),
};

const QuestionItem: React.FC<{ q: SQPQuestion }> = ({ q }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-indigo-200">
      <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">{q.year}</span>
          <span className="text-slate-400 text-xs font-medium">{q.type}</span>
        </div>
        <span className="text-indigo-600 font-bold text-sm">{q.marks} Mark{q.marks > 1 ? 's' : ''}</span>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-start gap-3">
          <ChevronRight className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <div className="font-bold text-slate-800 text-lg leading-snug flex-1">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {q.question}
            </ReactMarkdown>
          </div>
        </div>

        {!isRevealed ? (
          <button
            onClick={() => setIsRevealed(true)}
            className="w-full py-4 px-6 bg-indigo-50 border-2 border-dashed border-indigo-200 rounded-xl text-indigo-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-100 hover:border-indigo-300 transition-all group"
          >
            <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
            Reveal Official Answer & Explanation
          </button>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Official Answer - Full Width */}
            <section className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-emerald-700 font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                Official Answer
              </div>
              <div className="text-slate-700 text-sm font-medium leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {q.markingScheme}
                </ReactMarkdown>
              </div>
            </section>

            {/* Master's Explanation - Below */}
            <section className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm uppercase tracking-wider">
                <Info className="w-4 h-4" />
                Master's Explanation
              </div>
              <div className="text-slate-700 text-sm italic leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {q.aiExplanation}
                </ReactMarkdown>
              </div>
            </section>

            <button
              onClick={() => setIsRevealed(false)}
              className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-indigo-500 transition-colors mx-auto"
            >
              <EyeOff className="w-3 h-3" />
              Hide Answer
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

const SQPView: React.FC<SQPViewProps> = ({ sqps }) => {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const years = ['All', ...new Set(sqps.map(q => q.year))];

  const filteredQuestions = selectedYear === 'All'
    ? sqps
    : sqps.filter(q => q.year === selectedYear);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">SQP & MS Archives</h1>
          <p className="text-slate-500 mt-1">Practice active recall with official marking schemes</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-slate-200 shadow-sm overflow-x-auto scrollbar-hide">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {years.map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-all ${selectedYear === year
                ? 'bg-indigo-600 text-white shadow-md'
                : 'hover:bg-slate-100 text-slate-600'
                }`}
            >
              {year}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => (
            <QuestionItem key={q.id} q={q} />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <History className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <h3 className="text-slate-500 font-bold uppercase tracking-widest text-sm">No questions found for this year</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SQPView;
