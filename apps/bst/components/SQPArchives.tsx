
import React, { useState, useMemo } from 'react';
import { Zap, ChevronDown } from 'lucide-react';
import { Chapter } from '../types';

export const SQPArchives: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [filterYear, setFilterYear] = useState('All');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const years = ['All', ...new Set(chapter.sqp.map(q => q.year))];

  const filteredQuestions = useMemo(() => {
    // Reset state when filter changes
    setAnswers({});
    setIsSubmitted(false);
    setExpandedQuestions(new Set());
    return filterYear === 'All' ? chapter.sqp : chapter.sqp.filter(q => q.year === filterYear);
  }, [filterYear, chapter.sqp]);

  const toggleExpand = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const handleOptionSelect = (questionId: string, optionLetter: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionLetter
    }));
  };

  const calculateScore = () => {
    let score = 0;
    let totalMCQs = 0;
    filteredQuestions.forEach(q => {
      if (q.type === 'MCQ' && (q.optionA || q.optionB || q.optionC || q.optionD)) {
        totalMCQs++;
        // Naive extraction of the correct letter from the start of the answer string
        // Assuming answer string looks like "A) Option text" or "A. Option text" or just "Option text"
        // Adjust this logic if the data format is strictly just the text.
        // For now, testing if the selected option text is contained in the answer string.
        const selectedOptionText = q[`option${answers[q.id]}` as keyof typeof q];
        if (selectedOptionText && q.answer && q.answer.includes(selectedOptionText as string)) {
          score++;
        } else if (q.answer && q.answer.startsWith(answers[q.id])) {
          score++;
        }
      }
    });
    return { score, totalMCQs };
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
        <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mr-4 flex-shrink-0">Filter by Year</h4>
        {years.map(y => (
          <button
            key={y}
            onClick={() => setFilterYear(y)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${filterYear === y ? 'bg-purple-900 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-100'}`}
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
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-black rounded-full uppercase tracking-widest">{q.type} | {q.marks} MARKS</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 leading-snug">{q.question}</h3>

            {/* Options Grid for MCQs */}
            {(q.optionA || q.optionB || q.optionC || q.optionD) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  { letter: 'A', text: q.optionA },
                  { letter: 'B', text: q.optionB },
                  { letter: 'C', text: q.optionC },
                  { letter: 'D', text: q.optionD }
                ].map((opt, i) => {
                  if (!opt.text) return null;

                  const isSelected = answers[q.id] === opt.letter;
                  let bgClass = "bg-gray-50 border-gray-100 hover:bg-purple-50 hover:border-purple-200 cursor-pointer text-gray-700";
                  let iconBg = "bg-gray-200 text-gray-600";

                  if (isSelected && !isSubmitted) {
                    bgClass = "bg-purple-100 border-purple-400 text-purple-900 shadow-sm";
                    iconBg = "bg-purple-600 text-white";
                  } else if (isSubmitted) {
                    // Quick check if this option is part of the actual answer
                    const isCorrectOption = q.answer && (q.answer.includes(opt.text) || q.answer.startsWith(opt.letter));

                    if (isCorrectOption) {
                      bgClass = "bg-emerald-50 border-emerald-400 text-emerald-900";
                      iconBg = "bg-emerald-500 text-white";
                    } else if (isSelected && !isCorrectOption) {
                      bgClass = "bg-red-50 border-red-300 text-red-900";
                      iconBg = "bg-red-500 text-white";
                    } else {
                      bgClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(q.id, opt.letter)}
                      disabled={isSubmitted}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-all text-left ${bgClass}`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs transition-colors ${iconBg}`}>
                        {opt.letter}
                      </span>
                      <span>{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {(expandedQuestions.has(q.id) || isSubmitted) ? (
              <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-300">
                {!isSubmitted && (
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Collapse"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 rotate-180" />
                  </button>
                )}
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                  <h5 className="text-[10px] font-black text-purple-900 uppercase tracking-widest mb-3 border-b border-purple-200 pb-1">Official Marking Scheme</h5>
                  <p className="text-purple-800 font-bold text-sm leading-relaxed whitespace-pre-wrap">{q.markingScheme || q.answer}</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <h5 className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-amber-200 pb-1">
                    <Zap className="w-3 h-3 fill-amber-900" />
                    AI Reasoning
                  </h5>
                  <div className="text-amber-800 font-medium text-xs leading-relaxed whitespace-pre-wrap">
                    {(q.aiExplanation || q.explanation)?.split('\n').map((line, lineIndex) => {
                      // Handle bolding **text**
                      const parts = line.split(/(\*\*.*?\*\*)/g);
                      return (
                        <div key={lineIndex} className="min-h-[1.5em]">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={partIndex} className="font-black text-amber-950">{part.slice(2, -2)}</strong>;
                            }
                            return <span key={partIndex}>{part}</span>;
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-purple-50 to-amber-50 hover:from-purple-100 hover:to-amber-100 rounded-2xl border border-dashed border-purple-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-[10px] font-black rounded-full uppercase tracking-widest">MS</span>
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

      {filteredQuestions.some(q => q.type === 'MCQ') && (
        <div className="mt-12 flex flex-col items-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          {!isSubmitted ? (
            <>
              <p className="text-gray-500 font-medium mb-6">Select your answers above and submit to see your score.</p>
              <button
                onClick={() => setIsSubmitted(true)}
                className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Submit Exam
              </button>
            </>
          ) : (
            <div className="text-center animate-in zoom-in duration-500">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Diagnostic Score</h3>
              <div className="text-5xl font-black text-purple-900 mb-6 flex items-baseline justify-center gap-2">
                {calculateScore().score} <span className="text-2xl text-gray-300">/ {calculateScore().totalMCQs}</span>
              </div>
              <p className="text-purple-700 font-bold bg-purple-50 px-6 py-2 rounded-full inline-block mb-6 border border-purple-100">
                Review the color-coded feedback above.
              </p>
              <br />
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setAnswers({});
                  setExpandedQuestions(new Set());
                }}
                className="text-gray-500 hover:text-gray-900 font-bold text-sm underline decoration-2 underline-offset-4"
              >
                Retake Mock Exam
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
