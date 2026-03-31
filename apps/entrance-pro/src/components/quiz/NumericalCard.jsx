import React from 'react';

const NumericalCard = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    return (
        <div className="space-y-8">
            <div className="p-8 bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-3xl text-center">
                <div className="text-4xl mb-4">🧮</div>
                <div className="text-2xl font-black text-slate-800 mb-2 tracking-tight">
                    Numerical Calculation
                </div>
                <p className="text-slate-600 font-medium">
                    {question.question}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            className={`flex items-center justify-center p-6 rounded-2xl border-2 transition-all font-black text-xl shadow-sm hover:shadow-md ${variantClasses}`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>


        </div>
    );
};

export default NumericalCard;
