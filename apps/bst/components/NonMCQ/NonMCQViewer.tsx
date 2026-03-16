import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ChevronRight, ChevronLeft, Lightbulb, BookOpen, Target, Brain } from 'lucide-react';
import { NonMCQWithUnit } from '../../utils/nonMcqAggregator';

interface NonMCQViewerProps {
    questions: NonMCQWithUnit[];
    batchName: string;
    onBack: () => void;
}

export const NonMCQViewer: React.FC<NonMCQViewerProps> = ({ questions, batchName, onBack }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setShowAnswer(false);
        }
    };

    const currentQuestion = questions[currentIndex];

    return (
        <div className="max-w-4xl mx-auto py-8 px-4 animate-in fade-in">
            {/* Header & Progress */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="text-xs font-black text-teal-700 hover:text-teal-900 transition-colors flex items-center gap-1 uppercase tracking-widest"
                >
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Menu
                </button>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {batchName}
                </div>
            </div>

            <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                    <span>Question {currentIndex + 1} of {questions.length}</span>
                    <span className="text-teal-700">{Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-teal-500 transition-all duration-500 ease-out"
                        style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-teal-50 text-teal-700 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-teal-100">
                        {currentQuestion.unitName}
                    </span>
                    <span className="bg-gray-50 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200">
                        {currentQuestion.year} • {currentQuestion.paperType} • {currentQuestion.marks} Marks
                    </span>
                    <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1.5 rounded-full border border-purple-100">
                        {currentQuestion.type}
                    </span>
                </div>

                <div className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-8">
                    {currentQuestion.question}
                </div>

                {!showAnswer ? (
                    <button
                        onClick={() => setShowAnswer(true)}
                        className="w-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold py-4 rounded-xl transition-colors border border-teal-200 flex items-center justify-center gap-2"
                    >
                        <Lightbulb className="w-5 h-5" />
                        Reveal Answer & Explanation
                    </button>
                ) : (
                    <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                        {/* Marking Scheme / Standard Answer */}
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-gray-400" />
                                CBSE Marking Scheme / Ideal Answer
                            </h3>
                            <div className="prose prose-sm max-w-none text-gray-700 font-medium">
                                <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                    {currentQuestion.markingScheme || currentQuestion.answer || 'Answer not provided.'}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* AI Explanation */}
                        {currentQuestion.aiExplanation && (
                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-sm font-black text-purple-700 uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10">
                                    <Brain className="w-4 h-4" />
                                    AI Expert Breakdown & Strategy
                                </h3>
                                <div className="prose prose-purple prose-sm max-w-none text-gray-800 font-medium relative z-10">
                                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                        {currentQuestion.aiExplanation}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${currentIndex === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" /> Previous
                </button>
                <div className="text-gray-400 font-medium text-sm">
                    {questions.length - currentIndex - 1} remaining
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === questions.length - 1}
                    className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all ${currentIndex === questions.length - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                >
                    Next <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
