import React, { useState } from 'react';
import { MCQWithUnit } from '../../utils/mcqAggregator';

interface QuestionCardProps {
    question: MCQWithUnit;
    onAnswer: (selectedOption: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelected(option);
    };

    const handleSubmit = () => {
        if (selected) {
            onAnswer(selected);
            setSelected(null); // Reset for next question
        }
    };

    const options = [
        { id: 'A', text: question.optionA },
        { id: 'B', text: question.optionB },
        { id: 'C', text: question.optionC },
        { id: 'D', text: question.optionD },
    ].filter(opt => opt.text); // Only show options that exist

    // For questions that might not have explicit options A, B, C, D in their structure
    // Handle fallback to rendering standard text if options are null
    const hasStructuredOptions = options.length > 0;

    return (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-6 tracking-wide">
                    {question.unitName}
                </span>
                <h2 className="text-2xl font-black text-gray-900 leading-snug">{question.question}</h2>
            </div>

            {hasStructuredOptions ? (
                <div className="space-y-4 mb-10">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${selected === option.id
                                    ? 'border-purple-600 bg-purple-50 shadow-md transform scale-[1.01]'
                                    : 'border-gray-100 hover:border-purple-200 hover:bg-gray-50'
                                }`}
                        >
                            <div className="flex items-start">
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black mr-4 ${selected === option.id ? 'bg-purple-600 text-white shadow-inner' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    {option.id}
                                </span>
                                <span className={`text-lg font-medium pt-0.5 ${selected === option.id ? 'text-purple-900' : 'text-gray-700'}`}>
                                    {option.text}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="mb-10 text-gray-500 italic">
                    This question requires a subjective True/False or blank answer.
                    {/* Edge case handling for unstructured MCQs */}
                </div>
            )}

            <button
                onClick={handleSubmit}
                disabled={!selected}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 ${selected
                        ? 'bg-purple-700 hover:bg-purple-800 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
            >
                Lock Answer & Continue
            </button>
        </div>
    );
};
