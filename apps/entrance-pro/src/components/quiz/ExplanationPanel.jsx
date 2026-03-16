import React from 'react';
import { DangerZone } from '@suncube/ui';

const ExplanationPanel = ({ question, isCorrect, nextQuestion, isLast }) => {
    return (
        <div className={`mt-8 transition-all animate-in slide-in-from-bottom-4 duration-300`}>
            {isCorrect ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            ✅
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-emerald-800">Correct Answer!</h3>
                            <p className="text-sm text-emerald-600">Great job! You mastered this concept.</p>
                        </div>
                    </div>
                    <div className="mt-4 text-slate-700 leading-relaxed bg-white/50 p-4 rounded-xl border border-emerald-50">
                        {question.explanation}
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <DangerZone 
                        title="Exam Pitfall Detected"
                        content={question.explanation}
                        advice={question.hackerAdvice || "Carefully re-read the exclusion criteria in the question stem."}
                    />
                </div>
            )}

            <button
                onClick={nextQuestion}
                className={`w-full py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
          ${isCorrect
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
                        : 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200'}
        `}
            >
                {isLast ? 'See Results →' : 'Next Question →'}
            </button>
        </div>
    );
};

export default ExplanationPanel;
