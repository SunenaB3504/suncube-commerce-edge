import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { getSubjectById, getChapterById } from '../config/subjects.config';

const SpeedScrollFlashcards = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData } = useAppContext();

    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.flashcards) {
                setFlashcards(data.flashcards);
            }
            // Trigger MathJax typesetting
            if (window.MathJax) {
                setTimeout(() => window.MathJax.typesetPromise(), 500);
            }
            setLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const scrollPos = containerRef.current.scrollTop;
        const cardHeight = window.innerHeight - 64; // Header height
        const newIndex = Math.round(scrollPos / cardHeight);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < flashcards.length) {
            setCurrentIndex(newIndex);
        }
    };

    if (loading) return <div className="h-screen flex items-center justify-center text-slate-400 font-medium">Loading Speed-Scroll...</div>;

    if (!flashcards || flashcards.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">No flashcards available for this chapter</h1>
                <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">Go Back</button>
            </div>
        );
    }

    return (
        <div className="h-screen bg-slate-950 flex flex-col overflow-hidden text-white">
            <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-slate-950 shrink-0 z-50">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="text-white/40 hover:text-white transition-colors">✕</button>
                    <div className="h-4 w-px bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">Speed Scroll Mode</span>
                        <h2 className="font-bold text-sm truncate max-w-[150px]">{chapter.name}</h2>
                    </div>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/60 text-center uppercase tracking-widest">
                    {currentIndex + 1} / {flashcards.length}
                </div>

                <div className="flex items-center gap-3">
                     <div className="hidden sm:flex flex-col items-end mr-4">
                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">Latency</span>
                        <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">⚡ ZERO</span>
                     </div>
                </div>
            </header>

            <main 
                ref={containerRef}
                onScroll={handleScroll}
                className="flex-grow overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
            >
                {flashcards.map((card, idx) => (
                    <FlashcardSlide 
                        key={idx} 
                        card={card} 
                        idx={idx} 
                        total={flashcards.length}
                    />
                ))}
            </main>
            <style dangerouslySetInnerHTML={{ __html: `
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

const FlashcardSlide = ({ card, idx, total, ref }) => {
    return (
        <div 
            ref={ref}
            className="h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center p-8 snap-start relative border-b border-white/5"
        >
            <div className="w-full max-w-2xl bg-white/5 rounded-[3rem] p-12 lg:p-16 border border-white/10 backdrop-blur-xl shadow-2xl relative group overflow-hidden transition-all hover:bg-white/[0.07]">
                {/* Accent Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 opacity-50"></div>
                
                <div className="text-[11px] font-black text-orange-500 uppercase tracking-[0.3em] mb-10 bg-orange-500/10 inline-block px-3 py-1 rounded">Flash Fact</div>
                
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-12 leading-tight tracking-tight">
                    {card.term || card.question}
                </h2>

                <div className="bg-white/5 rounded-3xl p-8 border border-white/5 leading-relaxed text-slate-300 text-lg lg:text-xl shadow-inner italic">
                    {card.definition || card.answer}
                </div>

                {card.example && (
                    <div className="mt-8 text-sm text-slate-500 border-l-2 border-slate-700 pl-4 py-1 font-medium">
                        <span className="text-[10px] font-black text-slate-400 block mb-1 uppercase tracking-widest">Example</span>
                        {card.example}
                    </div>
                )}

                {/* Nav Indicator */}
                <div className="absolute right-8 bottom-8 flex flex-col items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest rotate-90 origin-right translate-x-4">SWIPE</span>
                    <div className="w-px h-12 bg-white/20"></div>
                </div>
            </div>
        </div>
    );
};

export default SpeedScrollFlashcards;
