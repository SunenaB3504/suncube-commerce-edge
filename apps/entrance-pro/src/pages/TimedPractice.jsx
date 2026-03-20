import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timer, Zap, CheckCircle2, AlertTriangle, RotateCcw, ShieldCheck, Target, FlaskConical, ChevronLeft } from 'lucide-react';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const TimedPractice = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { recordXP, loadChapterData } = useAppContext();

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.questions) {
                // Take random 10 for pressure
                setQuestions(data.questions.sort(() => 0.5 - Math.random()).slice(0, 10));
            }
            setIsLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setTimeLeft(30);
            setFeedback(null);
        } else {
            setIsFinished(true);
            const xpGain = score * 20; // High yield for timed pressure
            recordXP(xpGain);
        }
    }, [currentIndex, questions.length, score, recordXP]);

    useEffect(() => {
        let timer;
        if (!isFinished && !isLoading && timeLeft > 0 && !feedback) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && !feedback) {
            setFeedback('incorrect');
            setTimeout(handleNext, 1200);
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [timeLeft, isFinished, isLoading, feedback, handleNext]);

    const handleAnswer = (idx) => {
        if (feedback) return;
        const correct = questions[currentIndex].correct === idx;
        setFeedback(correct ? 'correct' : 'incorrect');
        if (correct) setScore(prev => prev + 1);
        setTimeout(handleNext, 1200);
    };

    if (isLoading) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-amber/20 border-t-brand-amber rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Initializing Stress Laboratory...</div>
        </div>
    );

    if (isFinished) return (
        <div className="min-h-screen bg-brand-slate flex items-center justify-center p-8 lg:p-12">
            <div className="bg-white/5 border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 max-w-xl w-full text-center relative overflow-hidden group">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-emerald/10 blur-[80px] rounded-full group-hover:bg-brand-emerald/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-brand-emerald/10 text-brand-emerald rounded-3xl flex items-center justify-center mx-auto mb-8 border border-brand-emerald/20 shadow-glow-emerald/20">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-2 italic tracking-tighter uppercase">Protocol <span className="text-brand-emerald">Alpha</span> Complete</h2>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12 italic">Stress-Test Performance Audit</p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ACCURACY</div>
                            <div className="text-3xl font-black text-white italic tracking-tighter">{Math.round((score / questions.length) * 100)}%</div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">XP CAPACITY</div>
                            <div className="text-3xl font-black text-brand-amber italic tracking-tighter">+{score * 20}</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-5 bg-white/5 hover:bg-white/10 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.4em] transition-all border border-white/10 italic"
                        >
                            <RotateCcw size={14} className="inline mr-2" /> Re-Initialize Protocol
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

    return (
        <div className="h-screen bg-brand-slate text-slate-100 flex flex-col overflow-hidden selection:bg-brand-amber/30">
            <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-slate/50 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-white/5 hover:bg-brand-rose/20 text-slate-500 hover:text-brand-rose rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-black text-white uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">STRESS-TEST LABORATORY</p>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className={`px-6 py-2 rounded-2xl font-black text-xl italic tracking-tighter border-2 flex items-center gap-3 transition-all ${timeLeft < 10 ? 'bg-brand-rose/10 text-brand-rose border-brand-rose/40 animate-pulse shadow-glow-rose/20' : 'bg-white/5 text-brand-amber border-brand-amber/20'}`}>
                        <Timer size={20} className={timeLeft < 10 ? 'animate-spin-slow' : ''} />
                        00:{timeLeft.toString().padStart(2, '0')}
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-2xl relative">
                    {/* Feedback Overlays */}
                    {feedback === 'correct' && (
                        <div className="fixed inset-0 bg-brand-emerald/5 z-0 animate-pulse pointer-events-none"></div>
                    )}
                    {feedback === 'incorrect' && (
                        <div className="fixed inset-0 bg-brand-rose/5 z-0 animate-pulse pointer-events-none"></div>
                    )}

                    <div className="relative z-10">
                        <div className="mb-12 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FlaskConical size={16} className="text-brand-indigo" />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">SPECIMEN {currentIndex + 1} OF {questions.length}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full">
                                <Target size={14} className="text-brand-emerald" />
                                <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">SECURED: {score}</span>
                            </div>
                        </div>

                        <div className="bg-white/[0.03] border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 mb-12 shadow-2xl relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent"></div>
                           <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight italic tracking-tighter mb-4">
                                {q.question}
                           </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {q.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    disabled={feedback !== null}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-6 text-left rounded-[1.5rem] border-2 transition-all flex items-center justify-between group/opt active:scale-[0.98] ${
                                        feedback === 'correct' && q.correct === idx
                                            ? 'border-brand-emerald bg-brand-emerald/20 text-white shadow-glow-emerald/20'
                                            : feedback === 'incorrect' && q.correct === idx
                                                ? 'border-brand-emerald bg-brand-emerald/10 text-white opacity-50'
                                                : feedback === 'incorrect' && feedback !== null
                                                    ? 'border-brand-rose/40 bg-brand-rose/10 text-slate-500'
                                                    : 'border-white/5 bg-white/5 hover:border-brand-amber/30 hover:bg-white/10 text-slate-400 hover:text-white'
                                    }`}
                                >
                                    <span className="text-lg font-bold italic tracking-tight">{opt}</span>
                                    {feedback === 'correct' && q.correct === idx && <Zap size={20} className="text-brand-emerald animate-bounce" />}
                                    {feedback === 'incorrect' && q.correct === idx && <ShieldCheck size={20} className="text-brand-emerald opacity-50" />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TimedPractice;
