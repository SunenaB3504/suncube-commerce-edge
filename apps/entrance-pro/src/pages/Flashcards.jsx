import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Zap, RotateCcw, ShieldCheck, Sparkles, AlertCircle, Rocket, Layers } from 'lucide-react';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const Flashcards = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData } = useAppContext();

    const [flashcards, setFlashcards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [loading, setLoading] = useState(true);

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.flashcards) {
                setFlashcards(data.flashcards);
            }
            setLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        }, 300);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        }, 300);
    };

    if (loading) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-indigo/20 border-t-brand-indigo rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Initializing Neural Nodes...</div>
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

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col selection:bg-brand-indigo/30">
            <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-slate/50 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-white/5 hover:bg-brand-indigo/20 text-slate-500 hover:text-brand-indigo rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-black text-white uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">NEURAL NODE // {subject?.name}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate(`/flashcards-speed/${subjectId}/${chapterId}`)}
                        className="px-6 py-2 bg-brand-amber text-brand-slate rounded-xl transition-all font-black text-[10px] uppercase tracking-[0.2em] shadow-glow-amber/20 hover:scale-105 active:scale-95 flex items-center gap-2 italic"
                    >
                        <Zap size={14} /> SPEED MODE
                    </button>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto">
                <div className="w-full max-w-2xl perspective-1000">
                    <div 
                        onClick={() => setIsFlipped(!isFlipped)}
                        className={`relative w-full h-[450px] transition-all duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                    >
                        {/* Front: Question */}
                        <div className="absolute inset-0 backface-hidden bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center group-hover:bg-white/[0.05] transition-all overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-indigo/20 to-transparent"></div>
                            <Sparkles size={32} className="text-brand-indigo/20 mb-10" />
                            <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-4 italic">LOGIC UNIT</div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight italic tracking-tighter">
                                {currentCard.question}
                            </h3>
                            <div className="mt-12 text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] animate-pulse italic">TAP TO REVEAL LOGIC</div>
                        </div>

                        {/* Back: Answer */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-indigo/10 border border-brand-indigo/30 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-transparent opacity-30"></div>
                            <ShieldCheck size={32} className="text-brand-indigo mb-10" />
                            <div className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-4 italic">NEURAL SECURED</div>
                            <p className="text-2xl lg:text-3xl font-black text-white leading-snug italic tracking-tighter relative z-10">
                                {currentCard.answer}
                            </p>
                            <div className="mt-12 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic">TAP TO RETURN</div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="mt-16 flex items-center justify-center gap-10">
                        <button 
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-black text-white italic tracking-tighter leading-none">{currentIndex + 1}</div>
                            <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest mt-1">OF {flashcards.length}</div>
                        </div>
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} className="rotate-180" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Flashcards;
