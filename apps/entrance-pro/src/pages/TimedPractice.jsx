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
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-zen-sky/10 border-t-zen-sky rounded-full animate-spin"></div>
            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] animate-pulse">Initializing Focus Lab...</div>
        </div>
    );

    if (isFinished) return (
        <div className="min-h-screen bg-zen-paper flex items-center justify-center p-8 lg:p-12">
            <div className="bg-white border border-zen-ink/5 rounded-[3rem] p-12 lg:p-16 max-w-xl w-full text-center relative overflow-hidden group shadow-soft">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-zen-forest/10 blur-[80px] rounded-full group-hover:bg-zen-forest/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                    <div className="w-20 h-20 bg-zen-forest/10 text-zen-forest rounded-3xl flex items-center justify-center mx-auto mb-8 border border-zen-forest/10 shadow-soft">
                        <ShieldCheck size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-zen-ink mb-2 tracking-tighter uppercase italic">Focus <span className="text-zen-forest">Sprint</span> Complete</h2>
                    <p className="text-zen-ink/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-12 italic">Performance Audit</p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-zen-sky/5 border border-zen-ink/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest mb-1 italic">ACCURACY</div>
                            <div className="text-3xl font-bold text-zen-ink italic tracking-tighter">{Math.round((score / questions.length) * 100)}%</div>
                        </div>
                        <div className="bg-zen-sky/5 border border-zen-ink/5 p-6 rounded-[2rem]">
                            <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest mb-1 italic">XP CAPACITY</div>
                            <div className="text-3xl font-bold text-zen-sky italic tracking-tighter">+{score * 20}</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-5 bg-zen-ink/5 hover:bg-zen-ink/10 text-zen-ink rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.4em] transition-all border border-zen-ink/5 italic"
                        >
                            <RotateCcw size={14} className="inline mr-2" /> Re-Initialize Sprint
                        </button>
                        <button
                            onClick={() => navigate(`/subject/${subjectId}`)}
                            className="w-full py-5 bg-zen-forest hover:bg-zen-ink text-white rounded-[1.5rem] font-bold text-[10px] uppercase tracking-[0.4em] transition-all shadow-soft italic active:scale-95"
                        >
                            Return to Learning Hub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const q = questions[currentIndex];

    return (
        <div className="h-screen bg-zen-paper text-zen-ink flex flex-col overflow-hidden selection:bg-zen-sky/10">
            <header className="h-20 border-b border-zen-ink/5 flex items-center justify-between px-8 bg-white/50 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-terracotta/20 text-zen-ink/40 hover:text-zen-terracotta rounded-xl flex items-center justify-center transition-all border border-zen-ink/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-bold text-zen-ink uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-bold text-zen-ink/30 uppercase tracking-[0.5em] italic">FOCUS LAB // SPRINT</p>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className={`px-6 py-2 rounded-2xl font-bold text-xl italic tracking-tighter border-2 flex items-center gap-3 transition-all ${timeLeft < 10 ? 'bg-zen-terracotta/10 text-zen-terracotta border-zen-terracotta/40 animate-pulse shadow-soft' : 'bg-white text-zen-sky border-zen-sky/20 shadow-sm'}`}>
                        <Timer size={20} className={timeLeft < 10 ? 'animate-spin-slow' : ''} />
                        00:{timeLeft.toString().padStart(2, '0')}
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto relative">
                <div className="w-full max-w-2xl relative z-10">
                    {/* Feedback Overlays */}
                    {feedback === 'correct' && (
                        <div className="fixed inset-0 bg-zen-forest/5 z-0 animate-pulse pointer-events-none"></div>
                    )}
                    {feedback === 'incorrect' && (
                        <div className="fixed inset-0 bg-zen-terracotta/5 z-0 animate-pulse pointer-events-none"></div>
                    )}

                    <div className="relative z-10">
                        <div className="mb-12 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <FlaskConical size={16} className="text-zen-sky" />
                                <span className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.3em] italic">CHALLENGE {currentIndex + 1} OF {questions.length}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-zen-forest/10 border border-zen-forest/20 rounded-full shadow-sm">
                                <Target size={14} className="text-zen-forest" />
                                <span className="text-[10px] font-bold text-zen-forest uppercase tracking-widest">SECURED: {score}</span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-white via-white to-zen-sky/[0.05] border border-zen-ink/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 mb-12 shadow-warm relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zen-sky/20 to-transparent"></div>
                           <h3 className="text-3xl lg:text-4xl font-bold text-zen-ink leading-tight italic tracking-tighter mb-4">
                                {q.question}
                           </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {q.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    disabled={feedback !== null}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-6 text-left rounded-[1.8rem] border-2 transition-all flex items-center justify-between group/opt active:scale-[0.98] ${
                                        feedback === 'correct' && q.correct === idx
                                            ? 'border-zen-forest bg-zen-forest/10 text-zen-forest shadow-soft'
                                            : feedback === 'incorrect' && q.correct === idx
                                                ? 'border-zen-forest bg-zen-forest/5 text-zen-forest opacity-50'
                                                : feedback === 'incorrect' && feedback !== null
                                                    ? 'border-zen-terracotta/40 bg-zen-terracotta/5 text-zen-ink/20 shadow-none'
                                                    : 'border-zen-ink/5 bg-white hover:border-zen-sky/30 hover:bg-zen-sky/5 text-zen-ink/60 hover:text-zen-ink shadow-sm'
                                    }`}
                                >
                                    <span className="text-lg font-bold italic tracking-tight">{opt}</span>
                                    {feedback === 'correct' && q.correct === idx && <Zap size={20} className="text-zen-forest animate-bounce" />}
                                    {feedback === 'incorrect' && q.correct === idx && <ShieldCheck size={20} className="text-zen-forest opacity-50" />}
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
