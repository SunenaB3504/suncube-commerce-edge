import React from 'react';

const CaseStudyCard = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    return (
        <div className="space-y-6">
            <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl shadow-inner mb-6 max-h-[300px] overflow-y-auto custom-scrollbar border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">📄</span>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Passage / Case Study</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm italic">
                    "{question.passage}"
                </p>
            </div>

            <div className="text-lg font-bold text-slate-800 leading-tight">
                {question.question}
            </div>

            <div className="grid grid-cols-1 gap-3">
                {question.options.map((option, index) => {
                    let variantClasses = "border-slate-200 hover:border-blue-300 hover:bg-blue-50";

                    if (selectedAnswer === index) {
                        variantClasses = "border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-50";
                    }

                    if (isSubmitted) {
                        if (index === question.correct) {
                            variantClasses = "border-green-500 bg-green-50 ring-2 ring-green-500";
                        } else if (selectedAnswer === index && index !== question.correct) {
                            variantClasses = "border-red-500 bg-red-50 ring-2 ring-red-500";
                        } else {
                            variantClasses = "border-slate-200 opacity-50";
                        }
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => !isSubmitted && onAnswer(index)}
                            disabled={isSubmitted}
                            className={`flex items-center p-4 rounded-xl border-2 transition-all text-left group ${variantClasses}`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0 transition-colors
                ${selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-200 group-hover:text-blue-600'}
                ${isSubmitted && index === question.correct ? 'bg-green-500 text-white' : ''}
              `}>
                                {String.fromCharCode(65 + index)}
                            </div>
                            <span className="font-medium text-sm">{option}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseStudyCard;
