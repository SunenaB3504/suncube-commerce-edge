import React from 'react';

const MCQCard = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    return (
        <div className="space-y-6">
            <div className="text-lg font-medium text-slate-800 leading-relaxed">
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
                ${isSubmitted && selectedAnswer === index && index !== question.correct ? 'bg-red-500 text-white' : ''}
              `}>
                                {String.fromCharCode(65 + index)}
                            </div>
                            <span className="font-medium">{option}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MCQCard;
