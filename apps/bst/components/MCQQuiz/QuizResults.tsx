import React, { useState } from 'react';
import { QuizResult } from '../../types';
import { MCQWithUnit } from '../../utils/mcqAggregator';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Home, BrainCircuit } from 'lucide-react';

interface QuizResultsProps {
    results: QuizResult;
    questions: MCQWithUnit[];
    onReturnHome: () => void;
    onRetry: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ results, questions, onReturnHome, onRetry }) => {
    const percentage = Math.round((results.totalScore / results.maxScore) * 100);
    const [showExplanations, setShowExplanations] = useState(false);

    // Group incorrect answers
    const incorrectAnswers = results.answers.filter(a => !a.isCorrect);

    return (
        <div className="max-w-4xl mx-auto py-12 px-6 animate-in zoom-in-95 duration-500">

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 mb-8 overflow-hidden relative text-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-emerald-100 text-emerald-600 rounded-full mb-8 shadow-inner">
                        <span className="text-5xl font-black">{percentage}%</span>
                    </div>

                    <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Quiz Completed!</h2>
                    <p className="text-xl text-gray-500 font-medium mb-12">
                        You scored <strong className="text-gray-900">{results.totalScore}</strong> out of <strong className="text-gray-900">{results.maxScore}</strong> points.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onRetry}
                            className="flex items-center justify-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold px-8 py-4 rounded-xl transition-all"
                        >
                            <RotateCcw className="w-5 h-5" /> Retake Test
                        </button>
                        <button
                            onClick={onReturnHome}
                            className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-8 py-4 rounded-xl transition-all"
                        >
                            <Home className="w-5 h-5" /> Dashboard
                        </button>
                    </div>
                </div>
            </div>

            {/* Unit Breakdown */}
            <div className="mb-12">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                    Unit-wise Performance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.unitScores.map(score => {
                        const unitPerf = Math.round((score.correctAnswers / score.totalQuestions) * 100) || 0;
                        return (
                            <div key={score.unitId} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Unit {score.unitId}</div>
                                    <div className="font-bold text-gray-900">{score.unitName}</div>
                                </div>
                                <div className="text-right">
                                    <div className={`text-2xl font-black ${unitPerf >= 80 ? 'text-emerald-500' : unitPerf >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                                        {score.correctAnswers}/{score.totalQuestions}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Incorrect Answers / AI Review */}
            {incorrectAnswers.length > 0 && (
                <>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <BrainCircuit className="w-6 h-6 text-purple-600" />
                            Areas for Improvement
                        </h3>
                        <button
                            onClick={() => setShowExplanations(!showExplanations)}
                            className="text-purple-600 hover:text-purple-800 font-bold flex items-center gap-1 uppercase tracking-wider text-sm transition-colors"
                        >
                            {showExplanations ? 'Hide Explanations' : 'Review Errors'} <ArrowRight className={`w-4 h-4 transition-transform ${showExplanations ? 'rotate-90' : ''}`} />
                        </button>
                    </div>

                    {showExplanations && (
                        <div className="space-y-6 animate-in slide-in-from-top-4 duration-300">
                            {incorrectAnswers.map((ans, idx) => {
                                const questionData = questions.find(q => q.id === ans.questionId);
                                if (!questionData) return null;

                                return (
                                    <div key={idx} className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
                                        <div className="flex items-start gap-4 mb-4">
                                            <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                                            <div>
                                                <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">{questionData.unitName}</div>
                                                <h4 className="font-bold text-gray-900 text-xl leading-relaxed mb-6">{questionData.question}</h4>

                                                <div className="space-y-3 mb-6 bg-gray-50 p-5 rounded-2xl">
                                                    <div className="flex items-center gap-3 text-sm">
                                                        <span className="font-black text-red-500 w-32 uppercase tracking-wider text-xs">Your Answer:</span>
                                                        <span className="text-gray-700 font-medium">Option {ans.selectedOption}</span>
                                                    </div>
                                                    <div className="w-full h-px bg-gray-200" />
                                                    <div className="flex items-center gap-3 text-sm">
                                                        <span className="font-black text-emerald-600 w-32 uppercase tracking-wider text-xs">Correct Answer:</span>
                                                        <span className="text-gray-900 flex-1">{questionData.answer}</span>
                                                    </div>
                                                </div>

                                                {questionData.aiExplanation && (
                                                    <div className="mt-6 bg-purple-50 text-purple-900 p-6 rounded-2xl border border-purple-100">
                                                        <div className="flex items-center gap-2 font-black mb-4 uppercase tracking-wider text-xs opacity-75">
                                                            <BrainCircuit className="w-4 h-4" /> Exam Strategy
                                                        </div>
                                                        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed opacity-90">
                                                            {questionData.aiExplanation}
                                                        </pre>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
