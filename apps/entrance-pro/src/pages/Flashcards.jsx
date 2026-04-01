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
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-zen-sky/10 border-t-zen-sky rounded-full animate-spin"></div>
            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] animate-pulse">Initializing Memory Hub...</div>
        </div>
    );
 
    if (!flashcards || flashcards.length === 0) return (
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center p-8 text-center">
            <AlertCircle size={64} className="text-zen-terracotta mb-6 opacity-20" />
            <h2 className="text-2xl font-bold text-zen-ink italic uppercase tracking-tighter mb-4">No Study Data Found</h2>
            <button onClick={() => navigate(-1)} className="px-8 py-3 bg-zen-ink/5 text-zen-ink/60 rounded-2xl hover:bg-zen-ink/10 transition-all font-bold text-[10px] uppercase tracking-widest border border-zen-ink/5 italic">Return to Base</button>
        </div>
    );
 
    const currentCard = flashcards[currentIndex];
 
    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col selection:bg-zen-sky/10">
            <header className="h-20 border-b border-zen-ink/5 flex items-center justify-between px-8 bg-zen-paper/80 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-sky/10 text-zen-ink/40 hover:text-zen-sky rounded-xl flex items-center justify-center transition-all border border-zen-ink/5 active:scale-90"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-bold text-zen-ink uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] italic">MEMORY MODULE // {subject?.name}</p>
                    </div>
                </div>
 
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate(`/flashcards-speed/${subjectId}/${chapterId}`)}
                        className="px-6 py-2 bg-gradient-to-r from-zen-sky to-zen-ink text-white rounded-xl transition-all font-bold text-[10px] uppercase tracking-[0.2em] shadow-soft hover:scale-105 active:scale-95 flex items-center gap-2 italic"
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
                        <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white via-white to-zen-sky/[0.05] border border-zen-ink/5 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center group-hover:shadow-warm transition-all overflow-hidden shadow-soft">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zen-sky/20 to-transparent"></div>
                            <Sparkles size={32} className="text-zen-sky/20 mb-10" />
                            <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] mb-4 italic">INSIGHT MODULE</div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-zen-ink leading-tight italic tracking-tighter">
                                {currentCard.question}
                            </h3>
                            <div className="mt-12 text-[10px] font-bold text-zen-sky uppercase tracking-[0.4em] animate-pulse italic">TAP TO REVEAL CONCEPT</div>
                        </div>
 
                        {/* Back: Answer */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-white via-white to-zen-forest/[0.05] border border-zen-forest/20 backdrop-blur-3xl rounded-[3rem] p-12 flex flex-col justify-center items-center text-center overflow-hidden shadow-soft">
                            <div className="absolute inset-0 bg-gradient-to-br from-zen-forest/5 to-transparent opacity-30"></div>
                            <ShieldCheck size={32} className="text-zen-forest mb-10" />
                            <div className="text-[10px] font-bold text-zen-forest uppercase tracking-[0.4em] mb-4 italic">CONCEPT SECURED</div>
                            <p className="text-2xl lg:text-3xl font-bold text-zen-ink leading-snug italic tracking-tighter relative z-10">
                                {currentCard.answer}
                            </p>
                            <div className="mt-12 text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] italic">TAP TO RETURN</div>
                        </div>
                    </div>
 
                    {/* Controls */}
                    <div className="mt-16 flex items-center justify-center gap-10">
                        <button 
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="w-16 h-16 rounded-2xl bg-white border border-zen-ink/5 flex items-center justify-center text-zen-ink/40 hover:text-zen-sky hover:bg-zen-sky/5 transition-all active:scale-95 shadow-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-zen-ink italic tracking-tighter leading-none">{currentIndex + 1}</div>
                            <div className="text-[10px] font-bold text-zen-ink/20 uppercase tracking-widest mt-1">OF {flashcards.length}</div>
                        </div>
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="w-16 h-16 rounded-2xl bg-white border border-zen-ink/5 flex items-center justify-center text-zen-ink/40 hover:text-zen-sky hover:bg-zen-sky/5 transition-all active:scale-95 shadow-sm"
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
