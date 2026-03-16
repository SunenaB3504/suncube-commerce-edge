import React, { useState } from 'react';
import { getAllMCQs, MCQWithUnit } from '../../utils/mcqAggregator';
import { QuizResult } from '../../types';
import { QuestionCard } from './QuestionCard';
import { QuizResults } from './QuizResults';
import { ChevronRight, Target, BrainCircuit, Activity } from 'lucide-react';

interface QuizMasterProps {
    onBack: () => void;
}

export const QuizMaster: React.FC<QuizMasterProps> = ({ onBack }) => {
    const [mcqData] = useState<MCQWithUnit[]>(() => getAllMCQs());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 means welcome screen
    const [answers, setAnswers] = useState<QuizResult['answers']>([]);
    const [isFinished, setIsFinished] = useState(false);

    // Welcome Screen Handlers
    const handleStartQuiz = () => {
        setCurrentQuestionIndex(0);
    };

    // Active Quiz Handlers
    const handleAnswerSubmit = (selectedOption: string) => {
        const currentQuestion = mcqData[currentQuestionIndex];

        // Validate answer by checking if selectedOption (e.g., "A") matches the correct option letter
        const isCorrect = currentQuestion.answer?.startsWith(selectedOption) || false;

        const newAnswer = {
            questionId: currentQuestion.id,
            selectedOption,
            isCorrect
        };

        setAnswers(prev => [...prev, newAnswer]);

        if (currentQuestionIndex < mcqData.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    // Result Aggregation
    const generateResults = (): QuizResult => {
        let totalScore = 0;
        const unitScoreMap: Record<number, { unitName: string; totalFields: number; correctFields: number }> = {};

        mcqData.forEach((q, index) => {
            // Create unit entry if empty
            if (!unitScoreMap[q.unitId]) {
                unitScoreMap[q.unitId] = { unitName: q.unitName, totalFields: 0, correctFields: 0 };
            }
            unitScoreMap[q.unitId].totalFields += 1;

            // Check user answers
            const userAnswer = answers.find(a => a.questionId === q.id);
            if (userAnswer && userAnswer.isCorrect) {
                totalScore += 1;
                unitScoreMap[q.unitId].correctFields += 1;
            }
        });

        const unitScoresArr = Object.entries(unitScoreMap).map(([idStr, val]) => ({
            unitId: parseInt(idStr),
            unitName: val.unitName,
            totalQuestions: val.totalFields,
            correctAnswers: val.correctFields
        }));

        return {
            totalScore,
            maxScore: mcqData.length,
            unitScores: unitScoresArr,
            answers
        };
    };

    // Render Logic
    if (isFinished) {
        const results = generateResults();
        return <QuizResults results={results} questions={mcqData} onReturnHome={onBack} onRetry={() => { setCurrentQuestionIndex(-1); setAnswers([]); setIsFinished(false); }} />;
    }

    if (currentQuestionIndex === -1) {
        return (
            <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <button
                    onClick={onBack}
                    className="text-xs font-black text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1 mb-8 uppercase tracking-widest"
                >
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard
                </button>

                <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                    {/* Decorative Blooms */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-purple-100 text-purple-700 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-inner">
                            <BrainCircuit className="w-10 h-10" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                            Ultimate MCQ Challenge
                        </h1>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                            Test your knowledge across the entire CBSE Class 12 Business Studies curriculum. We have assembled all {mcqData.length} multiple choice questions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-xl">
                                <Target className="w-6 h-6 text-emerald-500" />
                                <div className="text-left">
                                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Total Questions</div>
                                    <div className="text-2xl font-black text-gray-900">{mcqData.length}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-xl">
                                <Activity className="w-6 h-6 text-blue-500" />
                                <div className="text-left">
                                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Real-time Analytics</div>
                                    <div className="text-2xl font-black text-gray-900">Unit-wise</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleStartQuiz}
                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            Start Full Mock Test
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4 animate-in fade-in">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                    <span>Question {currentQuestionIndex + 1} of {mcqData.length}</span>
                    <span className="text-purple-700">{Math.round((currentQuestionIndex / mcqData.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-purple-600 transition-all duration-500 ease-out"
                        style={{ width: `${((currentQuestionIndex) / mcqData.length) * 100}%` }}
                    />
                </div>
            </div>

            <QuestionCard
                question={mcqData[currentQuestionIndex]}
                onAnswer={handleAnswerSubmit}
            />
        </div>
    );
};
