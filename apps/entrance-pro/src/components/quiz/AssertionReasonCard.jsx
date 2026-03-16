import React from 'react';

const AssertionReasonCard = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Assertion (A)</div>
                    <p className="text-slate-800 font-medium leading-relaxed">{question.assertion}</p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    <div className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">Reason (R)</div>
                    <p className="text-slate-800 font-medium leading-relaxed">{question.reason}</p>
                </div>
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
                            className={`flex items-start p-4 rounded-xl border-2 transition-all text-left group ${variantClasses}`}
                        >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 mt-0.5 shrink-0 transition-colors
                ${selectedAnswer === index ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-200 group-hover:text-blue-600'}
                ${isSubmitted && index === question.correct ? 'bg-green-500 text-white' : ''}
              `}>
                                {String.fromCharCode(65 + index)}
                            </div>
                            <span className="text-sm font-semibold">{option}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default AssertionReasonCard;
