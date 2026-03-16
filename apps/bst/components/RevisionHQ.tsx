
import React, { useState } from 'react';
import { Zap, Map as MapIcon, ClipboardCheck, Star, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import mermaid from 'mermaid';
import html2pdf from 'html2pdf.js';
import { Chapter, Flashcard, MindMapNode } from '../types';

const FlashcardComp: React.FC<{ card: Flashcard; isActive?: boolean }> = ({ card, isActive = true }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`relative h-80 cursor-pointer group w-full transition-all duration-300 perspective-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-40'}`}
    >
      {/* Flip animation container */}
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}
      >
        {/* Front - Question */}
        <div
          className="absolute inset-0 bg-white border-3 border-purple-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl group-hover:shadow-2xl group-hover:border-purple-400 transition-all backface-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">📝</span>
            <span className="text-xs font-black text-purple-600 tracking-widest uppercase">{card.category}</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{card.question}</p>
          <div className="mt-6 flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest animate-bounce">
            <span>✨ Tap to Reveal</span>
          </div>
        </div>

        {/* Back - Answer */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl rotate-y-180 backface-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">✅</span>
            <span className="text-xs font-black text-amber-300 tracking-widest uppercase">Answer</span>
          </div>
          <p className="text-lg md:text-xl font-medium text-white leading-relaxed italic">"{card.answer}"</p>
          <div className="mt-6 text-amber-300 text-xs font-bold uppercase tracking-widest">Tap to flip back</div>
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
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8 text-center">
        <p className="text-sm font-black text-purple-600 uppercase tracking-widest mb-3">
          Card {currentIndex + 1} of {totalCards}
        </p>
        <progress
          value={currentIndex + 1}
          max={totalCards}
          className="w-full h-2 rounded-full overflow-hidden appearance-none [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-purple-500 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-300 [&::-moz-progress-bar]:bg-purple-500"
        />
      </div>

      {/* Flashcard display */}
      <div className="relative h-96 mb-8 flex items-center justify-center perspective">
        <div className="relative w-full h-full flex items-center justify-center px-12">
          {/* Left card (blurred) */}
          {getVisibleCards()[0] !== currentIndex && (
            <div className="absolute left-0 opacity-30 scale-75 pointer-events-none">
              <FlashcardComp card={cards[getVisibleCards()[0]]} isActive={false} />
            </div>
          )}

          {/* Center card (active) */}
          <div className="z-10 w-full">
            <FlashcardComp card={cards[currentIndex]} isActive={true} />
          </div>

          {/* Right card (blurred) */}
          {getVisibleCards()[2] !== currentIndex && (
            <div className="absolute right-0 opacity-30 scale-75 pointer-events-none">
              <FlashcardComp card={cards[getVisibleCards()[2]]} isActive={false} />
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 justify-center flex-1">
          {Array.from(new Set(cards.map(c => c.category))).map(cat => (
            <button
              key={cat}
              onClick={() => {
                const index = cards.findIndex(c => c.category === cat);
                setCurrentIndex(index);
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tight transition-all ${cards[currentIndex].category === cat
                ? 'bg-amber-400 text-amber-950 shadow-md scale-105'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Keyboard shortcut hint */}
      <div className="text-center text-xs text-gray-400 font-medium">
        💡 Use arrow buttons or keyboard (← →) to navigate
      </div>
    </div>
  );
};

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'map' | 'cheat'>('cards');

  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        primaryColor: '#581c87',
        primaryTextColor: '#fff',
        primaryBorderColor: '#3b0764',
        lineColor: '#d8b4fe',
        secondaryColor: '#f3e8ff',
        tertiaryColor: '#fff',
      },
      flowchart: {
        curve: 'basis'
      }
    });

    if (activeTab === 'map') {
      // Small delay to ensure DOM is ready for mermaid to parse
      setTimeout(() => {
        mermaid.contentLoaded();
      }, 100);
    }
  }, [activeTab, chapter.id]);

  const handleDownloadPDF = () => {
    const element = document.getElementById('cheat-sheet-content');
    if (!element) return;

    const opt = {
      margin: 10,
      filename: `${chapter.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_cheatsheet.pdf`,
      image: { type: 'jpeg' as 'jpeg' | 'png' | 'webp', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as 'portrait' | 'landscape' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
  };

  const generateMermaidString = (root: MindMapNode): string => {
    let output = 'graph LR\n';

    // Define exact styles matching the blueprint
    output += `classDef root fill:#4c1d95,stroke:#2e1065,stroke-width:4px,color:#fff,font-weight:bold,border-radius:10px;\n`;
    output += `classDef child fill:#7e22ce,stroke:#581c87,stroke-width:2px,color:#fff,font-weight:bold,border-radius:8px;\n`;
    output += `classDef leaf fill:#faf5ff,stroke:#d8b4fe,stroke-width:1px,color:#6b21a8,border-radius:6px;\n\n`;

    output += `root["${root.label}"]:::root\n`;

    if (root.children) {
      root.children.forEach(child => {
        const childId = child.id.replace(/[^a-zA-Z0-9]/g, '');
        output += `root --> ${childId}["${child.label}"]:::child\n`;

        if (child.children) {
          child.children.forEach(leaf => {
            const leafId = leaf.id.replace(/[^a-zA-Z0-9]/g, '');
            output += `${childId} --> ${leafId}["${leaf.label}"]:::leaf\n`;
          });
        }
      });
    }

    return output;
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {[
          { id: 'cards' as const, label: 'Flashcards', icon: Zap },
          { id: 'map' as const, label: 'Mind Map', icon: MapIcon },
          { id: 'cheat' as const, label: 'Cheat Sheet', icon: ClipboardCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 transition-all ${activeTab === tab.id ? 'bg-amber-400 text-amber-950 shadow-xl scale-105' : 'bg-purple-900 text-purple-100 opacity-60 hover:opacity-100'}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'cards' && (
        <div className="flex justify-center py-8">
          <SlidingFlashcards chapter={chapter} />
        </div>
      )}

      {activeTab === 'map' && (
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center overflow-x-auto min-h-[60vh]">
          <div className="text-center mb-8 min-w-[300px]">
            <h3 className="text-3xl font-black text-purple-900">{chapter.name}</h3>
            <div className="h-1 w-24 bg-amber-400 mx-auto mt-4 rounded-full" />
          </div>
          <div className="mermaid w-full flex justify-center text-center">
            {generateMermaidString(chapter.mindMap)}
          </div>
        </div>
      )}

      {activeTab === 'cheat' && (
        <div>
          <div className="flex justify-end mb-6">
            <button
              onClick={handleDownloadPDF}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl font-black text-sm flex items-center gap-3 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Morning Cheat Sheet
            </button>
          </div>
          <div id="cheat-sheet-content" className="grid md:grid-cols-2 gap-8 bg-gray-50 p-4">
            {/* Header for PDF only */}
            <div className="hidden pdf-only col-span-2 text-center mb-8 border-b-4 border-purple-900 pb-6">
              <h1 className="text-4xl font-black text-purple-900 uppercase tracking-tighter">EXAM MORNING CHEAT SHEET</h1>
              <h2 className="text-xl font-bold text-gray-600 mt-2">{chapter.name}</h2>
            </div>

            {chapter.cheatSheet.map((section, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border-2 border-purple-100 shadow-sm pdf-no-break">
                <h4 className="text-xl font-black text-amber-600 mb-6 flex items-center gap-2 uppercase tracking-tight pb-3 border-b border-gray-100">
                  <Star className="w-5 h-5 fill-amber-600" />
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {(section.content || section.points || []).map((p, j) => (
                    <li key={j} className="flex gap-3 text-gray-700 font-medium text-sm items-start">
                      <span className="text-purple-500 font-black shrink-0 mt-1">•</span>
                      <span className="leading-relaxed">
                        {p.split(/(\*\*.*?\*\*)/).map((part, k) => (
                          part.startsWith('**') && part.endsWith('**') ? (
                            <strong key={k} className="font-extrabold text-gray-900 bg-purple-50 px-1 rounded">
                              {part.slice(2, -2)}
                            </strong>
                          ) : (
                            <span key={k}>{part}</span>
                          )
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
