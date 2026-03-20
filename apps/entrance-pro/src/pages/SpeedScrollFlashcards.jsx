import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Zap, ChevronLeft, RotateCcw, ShieldCheck, Flame, Sparkles, AlertCircle, Rocket } from 'lucide-react';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const SpeedScrollFlashcards = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { recordXP, loadChapterData } = useAppContext();
    
    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sessionXP, setSessionXP] = useState(0);

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.flashcards) {
                setFlashcards(data.flashcards);
            }
            setIsLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleNext = useCallback(() => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowAnswer(false);
            const xpGain = 5;
            setSessionXP(prev => prev + xpGain);
            recordXP(xpGain);
        }
    }, [currentIndex, flashcards.length, recordXP]);

    if (isLoading) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-amber/20 border-t-brand-amber rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Arming Rapid-Fire Logic...</div>
        </div>
    );

    if (!flashcards || flashcards.length === 0) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center p-8 text-center">
            <AlertCircle size={64} className="text-brand-rose mb-6 opacity-20" />
            <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">No Neural Data Found</h2>
            <button onClick={() => navigate(-1)} className="px-8 py-3 bg-white/5 text-slate-400 rounded-2xl hover:bg-white/10 transition-all font-black text-[10px] uppercase tracking-widest border border-white/5 italic">Return to Base</button>
        </div>
    );

    const currentCard = flashcards[currentIndex];
    const progress = ((currentIndex + 1) / flashcards.length) * 100;

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col selection:bg-brand-amber/30">
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
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">{subject?.name} // SPEED-SCROLL</p>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-2xl">
                        <Flame size={16} className="text-brand-amber animate-pulse" />
                        <span className="text-sm font-black text-white italic tracking-tighter">+{sessionXP} XP</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-2xl">
                    <div className="mb-12">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] italic">NEURAL STATUS: {currentIndex + 1} / {flashcards.length}</span>
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

                    <div 
                        className="group perspective-1000 cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        <div className={`relative w-full h-[450px] transition-all duration-700 transform-style-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
                            <div className="absolute inset-0 backface-hidden bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center group-hover:bg-white/[0.05] transition-all overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent"></div>
                                <Sparkles size={32} className="text-brand-amber/20 mb-10" />
                                <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-4 italic">LOGIC UNIT</div>
                                <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight italic tracking-tighter">
                                    {currentCard.term || currentCard.question}
                                </h3>
                                <div className="mt-12 text-[10px] font-black text-brand-amber uppercase tracking-[0.4em] animate-pulse italic">TAP TO REVEAL LOGIC</div>
                            </div>

                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-emerald/5 border border-brand-emerald/20 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/10 to-transparent opacity-30"></div>
                                <ShieldCheck size={32} className="text-brand-emerald mb-10" />
                                <div className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.4em] mb-4 italic">NEURAL SECURED</div>
                                <p className="text-2xl lg:text-3xl font-black text-white leading-snug italic tracking-tighter relative z-10">
                                    {currentCard.definition || currentCard.answer}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex items-center justify-center gap-8">
                        {currentIndex < flashcards.length - 1 ? (
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="group flex items-center gap-4 px-12 py-6 bg-brand-amber hover:bg-white text-brand-slate rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] transition-all shadow-glow-amber/20 hover:shadow-glow-amber-strong active:scale-95 italic"
                            >
                                SECURE & NEXT <Zap size={14} className="group-hover:scale-125 transition-transform" />
                            </button>
                        ) : (
                            <button 
                                onClick={() => navigate(`/subject/${subjectId}`)}
                                className="group flex items-center gap-4 px-12 py-6 bg-brand-emerald hover:bg-white text-brand-slate rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] transition-all shadow-glow-emerald/20 hover:shadow-glow-emerald-strong active:scale-95 italic"
                            >
                                MISSION COMPLETE <Rocket size={14} className="group-hover:scale-125 transition-transform" />
                            </button>
                        )}
                    </div>
                    
                    <button 
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(0); setShowAnswer(false); setSessionXP(0); }}
                        className="mt-8 mx-auto flex items-center gap-2 text-slate-600 hover:text-brand-rose transition-all text-[10px] font-black uppercase tracking-widest italic"
                    >
                        <RotateCcw size={12} /> RE-INITIALIZE SESSION
                    </button>
                </div>
            </main>
        </div>
    );
};

export default SpeedScrollFlashcards;
