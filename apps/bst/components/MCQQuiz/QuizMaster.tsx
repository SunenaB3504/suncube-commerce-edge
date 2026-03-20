import React, { useState } from 'react';
import { getAllMCQs, MCQWithUnit } from '../../utils/mcqAggregator';
import { QuizResult } from '../../types';
import { QuestionCard } from './QuestionCard';
import { QuizResults } from './QuizResults';
import { ChevronRight, Target, BrainCircuit, Activity, ShieldCheck, Sparkles, Cpu, ArrowRight } from 'lucide-react';

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

        mcqData.forEach((q) => {
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
            <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <button
                    onClick={onBack}
                    className="group text-[10px] font-black text-slate-500 hover:text-brand-emerald transition-all flex items-center gap-2 mb-12 uppercase tracking-[0.4em]"
                >
                    <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> 
                    Return to Mission Hub
                </button>

                <div className="bg-white/[0.02] rounded-[4rem] p-12 md:p-20 border border-white/5 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-3xl shadow-2xl group">
                    {/* Background Gradients */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-[100px] -ml-32 -mb-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10 w-full">
                        <div className="w-24 h-24 bg-brand-emerald/10 text-brand-emerald rounded-3xl flex items-center justify-center mb-10 mx-auto border border-brand-emerald/20 shadow-glow-emerald/5 group-hover:scale-110 transition-transform duration-700">
                            <BrainCircuit size={48} />
                        </div>

                        <span className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.5em] mb-4 block">End-to-End Diagnostic</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic selection:bg-brand-emerald selection:text-brand-slate">
                            Universal <span className="text-brand-emerald">Logic</span> Engine
                        </h1>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-16 leading-relaxed italic uppercase tracking-tight">
                            Execute a forensic assessment across the entire Business Studies domain. <span className="text-brand-amber">{mcqData.length} Neural Nodes</span> await analysis.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
                            <div className="flex items-center gap-5 bg-white/5 px-8 py-6 rounded-3xl border border-white/5 hover:border-brand-emerald/30 transition-all group/item">
                                <div className="p-3 bg-brand-emerald/10 rounded-xl text-brand-emerald">
                                   <Target size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Target Resolution</div>
                                    <div className="text-3xl font-black text-white italic tracking-tighter">{mcqData.length} NODES</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 bg-white/5 px-8 py-6 rounded-3xl border border-white/5 hover:border-brand-amber/30 transition-all group/item">
                                <div className="p-3 bg-brand-amber/10 rounded-xl text-brand-amber">
                                   <Activity size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Diagnostic Stream</div>
                                    <div className="text-3xl font-black text-white italic tracking-tighter">REAL-TIME</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleStartQuiz}
                            className="group relative bg-brand-emerald hover:bg-white text-brand-slate font-black text-sm uppercase tracking-[0.3em] px-16 py-7 rounded-[2.5rem] shadow-glow-emerald/20 hover:shadow-glow-emerald/40 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4 mx-auto"
                        >
                            Initialize Final Protocol
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in duration-1000">
            {/* High-Performance Progress Bar */}
            <div className="mb-16 space-y-4">
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Synapse Progress</span>
                       <span className="text-xs font-black text-white mt-1 uppercase italic">{currentQuestionIndex + 1} / {mcqData.length} Nodes Resolved</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full">
                       <Cpu size={12} className="text-brand-emerald" />
                       <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">{Math.round((currentQuestionIndex / mcqData.length) * 100)}% EFFICIENCY</span>
                    </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div
                        className="h-full bg-brand-emerald shadow-glow-emerald transition-all duration-700 ease-out relative"
                        style={{ width: `${((currentQuestionIndex) / mcqData.length) * 100}%` }}
                    >
                       <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                </div>
            </div>

            <QuestionCard
                question={mcqData[currentQuestionIndex]}
                onAnswer={handleAnswerSubmit}
            />
        </div>
    );
};
