import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { getSubjectById, getChapterById } from '../config/subjects.config';

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
            // Trigger MathJax typesetting
            if (window.MathJax) {
                setTimeout(() => window.MathJax.typesetPromise(), 500);
            }
            setLoading(false);
        };
        fetchContent();
    }, [subjectId, chapterId, loadChapterData]);

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % flashcards.length);
            if (window.MathJax) {
                setTimeout(() => window.MathJax.typesetPromise(), 100);
            }
        }, 150);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
            if (window.MathJax) {
                setTimeout(() => window.MathJax.typesetPromise(), 100);
            }
        }, 150);
    };

    if (loading) return <div className="h-screen flex items-center justify-center text-slate-400 font-medium">Loading Flashcards...</div>;

    if (!flashcards || flashcards.length === 0) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">No flashcards available for this chapter</h1>
                <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">Go Back</button>
            </div>
        );
    }

    const currentCard = flashcards[currentIndex];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
                    >
                        ← BACK
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 text-lg">🎴</span>
                        <h1 className="font-extrabold text-slate-900 tracking-tight">{chapter.name} Flashcards</h1>
                        <button 
                            onClick={() => navigate(`/flashcards-speed/${subjectId}/${chapterId}`)}
                            className="ml-4 px-3 py-1 bg-orange-500 text-white text-[9px] font-black rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform uppercase tracking-widest"
                        >
                            ⚡ Try Speed Scroll
                        </button>
                    </div>
                    <div className="hidden sm:block px-4 py-1.5 rounded-full bg-blue-50 text-[10px] font-black text-blue-600 text-center uppercase tracking-widest">
                        {currentIndex + 1} / {flashcards.length}
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-lg perspective-1000">
                    <div 
                        onClick={() => setIsFlipped(!isFlipped)}
                        className={`relative w-full aspect-[4/3] transition-all duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
                    >
                        {/* Front of Card */}
                        <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center justify-center p-12 text-center">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Question</div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                                {currentCard.question}
                            </h2>
                            <div className="mt-auto text-blue-600 font-bold text-xs uppercase tracking-widest animate-pulse">
                                Click to reveal answer
                            </div>
                        </div>

                        {/* Back of Card */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-900/20 flex flex-col items-center justify-center p-12 text-center text-white">
                            <div className="text-[10px] font-black text-blue-200 uppercase tracking-[0.2em] mb-8">Answer</div>
                            <p className="text-xl lg:text-2xl font-medium leading-relaxed">
                                {currentCard.answer}
                            </p>
                            <div className="mt-auto text-blue-200 font-bold text-xs uppercase tracking-widest">
                                Click to hide answer
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="mt-12 flex items-center gap-6">
                    <button 
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all font-bold"
                    >
                        ←
                    </button>
                    <div className="text-sm font-bold text-slate-400 font-mono">
                        {String(currentIndex + 1).padStart(2, '0')}/{String(flashcards.length).padStart(2, '0')}
                    </div>
                    <button 
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all font-bold"
                    >
                        →
                    </button>
                </div>
            </main>

            <style dangerouslySetInnerHTML={{ __html: `
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
                @media (max-width: 640px) {
                    .aspect-\\[4\\/3\\] { aspect-ratio: 1/1; }
                }
            `}} />
        </div>
    );
};

export default Flashcards;
