
import React, { useState } from 'react';
import { Zap, Map as MapIcon, ClipboardCheck, Star, ChevronLeft, ChevronRight, Info, Activity } from 'lucide-react';
import { Chapter, Flashcard } from '../types';

const FlashcardComp: React.FC<{ card: Flashcard; isActive?: boolean }> = ({ card, isActive = true }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div 
      onClick={() => setFlipped(!flipped)}
      className={`relative h-80 cursor-pointer group w-full transition-all duration-500 perspective-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-20'}`}
    >
      {/* Flip animation container */}
      <div 
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}
      >
        {/* Front - Question */}
        <div 
          className="absolute inset-0 bg-white/10 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl group-hover:shadow-emerald-500/10 group-hover:border-brand-emerald/40 transition-all backface-hidden"
        >
          <div className="flex items-center gap-2 mb-4 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="text-xl">📝</span>
            <span className="text-[10px] font-black text-brand-emerald tracking-[0.2em] uppercase">{card.category}</span>
          </div>
          <p className="text-xl md:text-2xl font-black text-white leading-tight mb-6">{card.question}</p>
          <div className="mt-auto flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
             Tap to Reveal <Zap className="w-3 h-3 text-brand-amber fill-brand-amber" />
          </div>
        </div>

        {/* Back - Answer */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-brand-emerald to-emerald-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-2xl rotate-y-180 backface-hidden border-2 border-white/20"
        >
          <div className="flex items-center gap-2 mb-4 bg-black/20 px-3 py-1 rounded-full border border-white/10">
            <span className="text-xl">✅</span>
            <span className="text-[10px] font-black text-brand-amber tracking-[0.2em] uppercase">Answer</span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed italic mb-8">"{card.answer}"</p>
          <div className="mt-auto text-brand-slate/60 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full">Tap to flip back</div>
        </div>
      </div>
    </div>
  );
};

interface SlidingFlashcardsProps {
  chapter: Chapter;
}

const SlidingFlashcards: React.FC<SlidingFlashcardsProps> = ({ chapter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  
  const cards = chapter.flashcards;
  const totalCards = cards.length;
  
  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };
  
  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };
  
  const getVisibleCards = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((currentIndex + i + totalCards) % totalCards);
    }
    return indices;
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.2em]">
            Card {currentIndex + 1} <span className="text-slate-600">of</span> {totalCards}
          </p>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
             {Math.round(((currentIndex + 1) / totalCards) * 100)}% Complete
          </p>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
          <div 
             className="h-full bg-brand-emerald shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 ease-out rounded-full"
             style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard display */}
      <div className="relative h-96 mb-12 flex items-center justify-center perspective">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Left card (blurred) */}
          {getVisibleCards()[0] !== currentIndex && (
            <div className="absolute left-0 opacity-10 scale-75 -translate-x-1/4 pointer-events-none transition-all duration-500">
              <FlashcardComp card={cards[getVisibleCards()[0]]} isActive={false} />
            </div>
          )}
          
          {/* Center card (active) */}
          <div className="z-10 w-full max-w-lg transition-all duration-500">
            <FlashcardComp card={cards[currentIndex]} isActive={true} />
          </div>
          
          {/* Right card (blurred) */}
          {getVisibleCards()[2] !== currentIndex && (
            <div className="absolute right-0 opacity-10 scale-75 translate-x-1/4 pointer-events-none transition-all duration-500">
              <FlashcardComp card={cards[getVisibleCards()[2]]} isActive={false} />
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-6 mb-12">
        <button
          onClick={handlePrev}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-brand-emerald hover:text-brand-slate hover:border-brand-emerald transition-all duration-300 shadow-xl"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center flex-1 bg-white/5 p-2 rounded-2xl border border-white/5">
          {Array.from(new Set(cards.map(c => c.category))).map(cat => (
            <button
              key={cat}
              onClick={() => {
                const index = cards.findIndex(c => c.category === cat);
                setCurrentIndex(index);
              }}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                cards[currentIndex].category === cat
                   ? 'bg-brand-amber text-brand-slate shadow-glow-amber'
                   : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-brand-emerald hover:text-brand-slate hover:border-brand-emerald transition-all duration-300 shadow-xl"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center">
        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
           Swift Scanning Mode Active <Activity className="w-3 h-3 text-brand-emerald" />
        </span>
      </div>
    </div>
  );
};

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'map' | 'cheat' | 'gallery'>('cards');

  const allHacks = chapter.topics.flatMap(t => 
    t.visualizations.filter(v => v.hack).map(v => ({ ...v, topicTitle: t.title }))
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-center gap-2 mb-12 flex-wrap bg-white/5 p-1.5 rounded-2xl border border-white/5 w-fit mx-auto">
        {[
          { id: 'cards' as const, label: 'Flashcards', icon: Zap },
          { id: 'gallery' as const, label: 'Swift Scan', icon: Star },
          { id: 'map' as const, label: 'Mind Map', icon: MapIcon },
          { id: 'cheat' as const, label: 'Cheat Sheet', icon: ClipboardCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-brand-emerald text-brand-slate shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-brand-slate' : 'text-slate-500'}`} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'gallery' && (
        <div className="grid gap-12 animate-in fade-in zoom-in-95 duration-500">
          <div className="bg-brand-amber/10 p-8 rounded-3xl border border-brand-amber/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
               <Zap className="w-32 h-32 text-brand-amber" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">🚀 60-Second "Swift Scan"</h3>
            <p className="text-slate-400 font-bold text-lg">All high-impact hacks for {chapter.name} curated into a single visual feed.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allHacks.length > 0 ? allHacks.map((hack, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-brand-emerald/40 transition-all group overflow-hidden relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-brand-amber/10 rounded-lg">
                    <Zap className="w-4 h-4 text-brand-amber fill-brand-amber" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest truncate">{hack.topicTitle}</span>
                </div>
                
                <h4 className="text-xl font-black text-white mb-6 leading-none tracking-tight group-hover:text-brand-emerald transition-colors">{hack.title}</h4>
                
                <div className="p-5 bg-brand-slate/50 rounded-2xl border border-white/5 shadow-inner">
                   <p className="text-brand-amber font-black text-[10px] uppercase tracking-widest mb-3 flex items-center gap-1.5 opacity-60">
                     <Info className="w-3 h-3" /> Cheat Code
                   </p>
                   <p className="text-slate-200 font-bold text-sm leading-relaxed italic group-hover:text-white transition-colors">"{hack.hack}"</p>
                </div>
                
                {hack.formula && (
                  <div className="mt-4 p-4 bg-brand-emerald/10 text-white rounded-xl border border-brand-emerald/20 text-center">
                    <code className="text-[10px] font-black font-mono tracking-tighter text-brand-emerald">{hack.formula}</code>
                  </div>
                )}
              </div>
            )) : (
              <div className="col-span-full py-20 text-center text-slate-600 font-black uppercase tracking-[0.3em]">
                No hacks available for this unit yet
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'cards' && (
        <div className="flex justify-center py-4 animate-in fade-in zoom-in-95 duration-500">
          <SlidingFlashcards chapter={chapter} />
        </div>
      )}

      {activeTab === 'map' && (
        <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center overflow-x-auto animate-in fade-in zoom-in-95 duration-500">
          <div className="text-center mb-16 min-w-[300px]">
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{chapter.name}</h3>
            <div className="h-1.5 w-32 bg-brand-emerald mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
          <div className="flex flex-wrap justify-center gap-16 max-w-5xl min-w-[600px]">
            {chapter.mindMap.children?.map(node => (
              <div key={node.id} className="flex flex-col items-center gap-6">
                <div className="px-8 py-4 bg-brand-emerald text-brand-slate rounded-2xl font-black shadow-xl text-xs text-center uppercase tracking-widest border-2 border-brand-emerald/20">
                  {node.label}
                </div>
                <div className="w-0.5 h-10 bg-brand-emerald/30 border-r border-dashed border-brand-emerald/50" />
                <div className="grid gap-3">
                  {node.children?.map(child => (
                    <div key={child.id} className="px-5 py-3 bg-white/5 text-slate-300 rounded-xl text-[10px] font-black border border-white/10 text-center uppercase tracking-tighter hover:border-brand-emerald/30 hover:text-white transition-all cursor-default">
                      {child.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'cheat' && (
        <div className="grid md:grid-cols-2 gap-8 animate-in fade-in zoom-in-95 duration-500">
          {chapter.cheatSheet.map((section, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl group hover:border-brand-amber/30 transition-all">
              <h4 className="text-xl font-black text-brand-amber mb-6 flex items-center gap-3 uppercase tracking-tighter border-b border-brand-amber/10 pb-4">
                <div className="p-2 bg-brand-amber/10 rounded-lg">
                   <Star className="w-5 h-5 fill-brand-amber" />
                </div>
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.points.map((p, j) => (
                  <li key={j} className="flex gap-4 text-slate-400 font-medium text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    <span className="text-brand-emerald font-black mt-1">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
