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
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-amber/20 border-t-brand-amber rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Initializing Tactical Drill...</div>
        </div>
    );

    if (isFinished) return (
        <div className="min-h-screen bg-brand-slate flex items-center justify-center p-8 lg:p-12 overflow-y-auto">
            <div className="bg-white/5 border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 max-w-xl w-full text-center relative overflow-hidden group">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-emerald/10 blur-[80px] rounded-full group-hover:bg-brand-emerald/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-emerald/20 shadow-glow-emerald/20">
                        <Target size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">Drill <span className="text-brand-emerald">Secure</span></h2>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 italic">Tactical Unit Performance Breakdown</p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ACCURACY</div>
                            <div className="text-3xl font-black text-white italic tracking-tighter">{Math.round((score / questions.length) * 100)}%</div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">XP SECURED</div>
                            <div className="text-3xl font-black text-brand-amber italic tracking-tighter">+{score * 10}</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-5 bg-white/5 hover:bg-white/10 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all border border-white/10 italic"
                        >
                            <RotateCcw size={14} className="inline mr-2" /> Re-Initialize Drill
                        </button>
                        <button
                            onClick={() => navigate(`/subject/${subjectId}`)}
                            className="w-full py-5 bg-brand-emerald hover:bg-white text-brand-slate rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-glow-emerald/20 italic"
                        >
                            Return to Unit Hub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const q = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col selection:bg-brand-amber/30 pb-20">
            <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-slate/50 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-white/5 hover:bg-brand-amber/20 text-slate-500 hover:text-brand-amber rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-black text-white uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">TACTICAL DRILL // {subject?.name}</p>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl">
                        <Target size={16} className="text-brand-amber" />
                        <span className="text-sm font-black text-white italic tracking-tighter">{score} / {questions.length}</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-2xl">
                    <div className="mb-12">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">DRILL STATUS: {currentIndex + 1} / {questions.length}</span>
                            </div>
                            <span className="text-lg font-black text-white italic tracking-tighter">{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div 
                                className="h-full bg-brand-amber transition-all duration-500 shadow-glow-amber/50"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="bg-white/[0.03] border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 mb-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent"></div>
                        <Sparkles size={24} className="text-brand-amber/20 mb-8" />
                        <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight italic tracking-tighter mb-4">
                            {q?.question}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {q?.options.map((opt, idx) => {
                            const isCorrect = q.correct === idx;
                            const isSelected = selectedAnswer === idx;
                            
                            let buttonStyles = "border-white/5 bg-white/5 hover:border-brand-amber/30 hover:bg-white/10 text-slate-400 hover:text-white";
                            if (showExplanation) {
                                if (isCorrect) buttonStyles = "border-brand-emerald bg-brand-emerald/20 text-white shadow-glow-emerald/10";
                                else if (isSelected) buttonStyles = "border-brand-rose bg-brand-rose/20 text-white opacity-50";
                                else buttonStyles = "border-white/5 bg-white/5 text-slate-600 opacity-30";
                            }

                            return (
                                <button
                                    key={idx}
                                    disabled={showExplanation}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-6 text-left rounded-[1.8rem] border-2 transition-all flex items-center justify-between group/opt active:scale-[0.98] ${buttonStyles}`}
                                >
                                    <span className="text-lg font-bold italic tracking-tight">{opt}</span>
                                    {showExplanation && isCorrect && <CheckCircle2 size={24} className="text-brand-emerald" />}
                                    {showExplanation && isSelected && !isCorrect && <AlertTriangle size={24} className="text-brand-rose" />}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className="bg-brand-indigo/5 border border-brand-indigo/20 rounded-[2rem] p-8 lg:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap size={18} className="text-brand-indigo" />
                                <span className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] italic">LOGIC REVELATION</span>
                            </div>
                            <p className="text-slate-300 text-lg italic leading-relaxed font-medium">
                                {q?.explanation}
                            </p>
                            <button 
                                onClick={handleNext}
                                className="mt-8 flex items-center gap-3 px-8 py-4 bg-brand-amber hover:bg-white text-brand-slate rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-glow-amber/20 italic active:scale-95"
                            >
                                {currentIndex < questions.length - 1 ? 'NEXT LOGIC NODULE' : 'FINALIZE DRILL'} <ChevronLeft size={14} className="rotate-180" />
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default QuizPage;
