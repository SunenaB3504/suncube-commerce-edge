import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Zap, CheckCircle2, AlertTriangle, RotateCcw, ShieldCheck, Target, FlaskConical, Sparkles } from 'lucide-react';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const QuizPage = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { addXP, loadChapterData, recordChapterScore } = useAppContext();

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.questions) {
                setQuestions(data.questions);
            }
            setIsLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleAnswer = (idx) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(idx);
        setShowExplanation(true);
        if (questions[currentIndex].correct === idx) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setIsFinished(true);
            recordChapterScore(subjectId, chapterId, score, questions.length);
            addXP(score * 10);
        }
    };

    if (isLoading) return (
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-zen-sky/10 border-t-zen-sky rounded-full animate-spin"></div>
            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] animate-pulse">Assembling Practice Session...</div>
        </div>
    );

    if (isFinished) return (
        <div className="min-h-screen bg-zen-paper flex items-center justify-center p-8 lg:p-12 overflow-y-auto">
            <div className="bg-white border border-zen-ink/5 rounded-[3rem] p-12 lg:p-16 max-w-xl w-full text-center relative overflow-hidden group shadow-soft">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-zen-forest/5 blur-[80px] rounded-full group-hover:bg-zen-forest/10 transition-all duration-700"></div>
                
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-zen-forest/10 text-zen-forest rounded-3xl flex items-center justify-center mx-auto mb-8 border border-zen-forest/10 shadow-soft">
                        <Target size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-zen-ink mb-2 tracking-tight">Session <span className="text-zen-forest">Complete</span></h2>
                    <p className="text-zen-ink/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-12 italic">Performance Summary</p>

                    <div className="grid grid-cols-2 gap-4 mb-12 text-zen-ink">
                        <div className="bg-zen-sky/5 border border-zen-ink/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest mb-1 italic">ACCURACY</div>
                            <div className="text-3xl font-bold tracking-tight">{Math.round((score / questions.length) * 100)}%</div>
                        </div>
                        <div className="bg-zen-sky/5 border border-zen-ink/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest mb-1 italic">POINTS EARNED</div>
                            <div className="text-3xl font-bold text-zen-sky tracking-tight">+{score * 10}</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-5 bg-zen-ink/5 hover:bg-zen-ink/10 text-zen-ink rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.4em] transition-all border border-zen-ink/5"
                        >
                            <RotateCcw size={14} className="inline mr-2" /> Retake Practice
                        </button>
                        <button
                            onClick={() => navigate(`/subject/${subjectId}`)}
                            className="w-full py-5 bg-zen-forest hover:bg-zen-ink text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.4em] transition-all shadow-soft"
                        >
                            Return to Topics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const q = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col selection:bg-zen-sky/10 pb-20">
            <header className="h-20 border-b border-zen-ink/5 flex items-center justify-between px-8 bg-zen-paper/50 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-sky/10 text-zen-ink/40 hover:text-zen-sky rounded-xl flex items-center justify-center transition-all border border-zen-ink/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-bold text-zen-ink text-[10px] tracking-widest uppercase italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-bold text-zen-ink/30 uppercase tracking-[0.5em] italic">LEARNING MODULE // {subject?.name}</p>
                    </div>
                </div>

                <div className="flex items-center gap-8 text-zen-ink">
                    <div className="flex items-center gap-3 px-6 py-2 bg-zen-sky/5 border border-zen-sky/10 rounded-2xl">
                        <Target size={16} className="text-zen-sky" />
                        <span className="text-sm font-bold tracking-tight">{score} / {questions.length}</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-2xl">
                    <div className="mb-12">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-zen-sky rounded-full animate-pulse shadow-sm shadow-zen-sky"></div>
                                <span className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.3em] italic">PROGRESS: {currentIndex + 1} / {questions.length}</span>
                            </div>
                            <span className="text-lg font-bold text-zen-ink/60 tracking-tight">{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zen-ink/5 rounded-full overflow-hidden border border-zen-ink/5">
                            <div 
                                className="h-full bg-gradient-to-r from-zen-sky to-zen-sky/60 transition-all duration-500 shadow-soft"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-white border border-zen-ink/5 rounded-[3rem] p-12 lg:p-16 mb-8 shadow-warm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zen-sky/20 to-transparent"></div>
                        <Sparkles size={24} className="text-zen-sky/20 mb-8" />
                        
                        {q?.passage && (
                            <div className="mb-8 p-6 bg-gradient-to-br from-zen-sky/[0.02] to-white border border-zen-sky/10 rounded-3xl max-h-[300px] overflow-y-auto custom-scrollbar shadow-inner">
                                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-zen-sky/60 mb-3 italic">REFERENCE CONTEXT</h4>
                                <p className="text-zen-ink/70 leading-relaxed text-sm font-medium whitespace-pre-wrap italic">
                                    {q.passage}
                                </p>
                            </div>
                        )}

                        <h3 className="text-3xl lg:text-4xl font-bold text-zen-ink leading-tight tracking-tight mb-4">
                            {q?.question}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {q?.options.map((opt, idx) => {
                            const isCorrect = q.correct === idx;
                            const isSelected = selectedAnswer === idx;
                            
                            let buttonStyles = "border-zen-ink/5 bg-white hover:border-zen-sky/30 hover:bg-zen-sky/5 text-zen-ink/60 hover:text-zen-ink shadow-sm";
                            if (showExplanation) {
                                if (isCorrect) buttonStyles = "border-zen-forest bg-zen-forest/10 text-zen-forest shadow-md shadow-zen-forest/5";
                                else if (isSelected) buttonStyles = "border-zen-terracotta bg-zen-terracotta/5 text-zen-terracotta opacity-60";
                                else buttonStyles = "border-zen-ink/5 bg-white text-zen-ink/20 opacity-40 shadow-none";
                            }

                            return (
                                <button
                                    key={idx}
                                    disabled={showExplanation}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-6 text-left rounded-[1.8rem] border-2 transition-all flex items-center justify-between group/opt active:scale-[0.98] ${buttonStyles}`}
                                >
                                    <span className="text-lg font-semibold tracking-tight">{opt}</span>
                                    {showExplanation && isCorrect && <CheckCircle2 size={24} className="text-zen-forest" />}
                                    {showExplanation && isSelected && !isCorrect && <AlertTriangle size={24} className="text-zen-terracotta" />}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className="bg-zen-sky/5 border border-zen-sky/20 rounded-[2rem] p-8 lg:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap size={18} className="text-zen-sky" />
                                <span className="text-[10px] font-bold text-zen-sky uppercase tracking-[0.4em]">Explanation</span>
                            </div>
                            {q?.explanation && (
                                <p className="text-zen-ink/80 text-lg leading-relaxed font-medium mb-6 italic">
                                    {q.explanation}
                                </p>
                            )}
                            
                            {q?.solution_steps && (
                                <div className="space-y-4 border-t border-zen-sky/10 pt-6">
                                    <h4 className="text-[8px] font-bold uppercase tracking-[0.4em] text-zen-sky/60 mb-2">Step-by-Step Breakdown</h4>
                                    <div className="space-y-3">
                                        {q.solution_steps.map((step, idx) => (
                                            <div key={idx} className="flex gap-4 items-start group/step">
                                                <div className="w-6 h-6 rounded-lg bg-zen-sky/10 text-zen-sky flex items-center justify-center text-[10px] font-bold shrink-0 mt-1 border border-zen-sky/10 group-hover/step:bg-zen-sky group-hover/step:text-white transition-all duration-300">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-zen-ink/60 text-base leading-relaxed group-hover/step:text-zen-ink transition-colors duration-300 italic">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <button 
                                onClick={handleNext}
                                className="mt-8 flex items-center gap-3 px-8 py-4 bg-zen-sky hover:bg-zen-ink text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all shadow-soft active:scale-95"
                            >
                                {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Session'} <ChevronLeft size={14} className="rotate-180" />
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default QuizPage;
