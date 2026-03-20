import React, { useState } from 'react';
import { Zap, Map as MapIcon, ClipboardCheck, Star, ChevronLeft, ChevronRight, Download, Brain, Sparkles, Cpu, Target, ShieldCheck } from 'lucide-react';
import mermaid from 'mermaid';
import html2pdf from 'html2pdf.js';
import { Chapter, Flashcard, MindMapNode } from '../types';
import { HackerCard } from '@suncube/ui';
import { BST_HACKS } from '@suncube/shared-logic';

const FlashcardComp: React.FC<{ card: Flashcard; isActive?: boolean }> = ({ card, isActive = true }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`relative h-[22rem] cursor-pointer group w-full transition-all duration-500 perspective-1000 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-40 grayscale blur-[2px]'}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : 'rotate-y-0'}`}
      >
        {/* Front - Question */}
        <div
          className="absolute inset-0 bg-white/5 border border-white/10 rounded-[3.5rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl group-hover:border-brand-emerald/40 transition-all backface-hidden backdrop-blur-3xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="flex items-center gap-3 mb-6 bg-brand-emerald/10 px-4 py-1.5 rounded-full border border-brand-emerald/20">
            <Cpu size={14} className="text-brand-emerald" />
            <span className="text-[10px] font-black text-brand-emerald tracking-[0.3em] uppercase">Flash Query Node</span>
          </div>
          <p className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tighter italic">{card.question}</p>
          <div className="mt-10 flex items-center gap-3 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-brand-emerald transition-colors">
            <Sparkles size={12} className="animate-pulse" />
            <span>Decrypt Solution</span>
          </div>
        </div>

        {/* Back - Answer */}
        <div
          className="absolute inset-0 bg-brand-amber rounded-[3.5rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl rotate-y-180 backface-hidden border-4 border-white/20"
        >
          <div className="flex items-center gap-3 mb-6 bg-slate-950/20 px-4 py-1.5 rounded-full border border-slate-950/10">
            <ShieldCheck size={14} className="text-slate-950" />
            <span className="text-[10px] font-black text-slate-950 tracking-[0.3em] uppercase">Verified Protocol</span>
          </div>
          <p className="text-xl md:text-2xl font-black text-slate-950 leading-relaxed uppercase tracking-tight italic">"{card.answer}"</p>
          <div className="mt-10 flex items-center gap-2 text-slate-800 text-[10px] font-black uppercase tracking-widest">
             <Target size={12} />
             <span>Core Recall Point</span>
          </div>
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
  const cards = chapter.flashcards;
  const totalCards = cards.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalCards);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-12">
      <div className="flex items-center justify-between mb-2 px-6">
        <div className="flex flex-col">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Mastery Progress</span>
           <span className="text-xs font-black text-white mt-1 uppercase italic">{currentIndex + 1} / {totalCards} NODES ANALYZED</span>
        </div>
        <div className="flex gap-1">
           {Array.from({ length: totalCards }).map((_, i) => (
             <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-brand-emerald shadow-glow-emerald' : 'w-2 bg-white/10'}`} />
           ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-8">
        <button
          onClick={handlePrev}
          className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-emerald hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all group active:scale-90"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="flex-1 max-w-xl animate-in fade-in zoom-in duration-500">
           <FlashcardComp card={cards[currentIndex]} isActive={true} />
        </div>

        <button
          onClick={handleNext}
          className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-emerald hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all group active:scale-90"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {Array.from(new Set(cards.map(c => c.category))).map(cat => (
          <button
            key={cat}
            onClick={() => {
              const index = cards.findIndex(c => c.category === cat);
              setCurrentIndex(index);
            }}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${cards[currentIndex].category === cat
              ? 'bg-brand-amber text-brand-slate border-brand-amber shadow-glow-amber'
              : 'bg-white/5 text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'hacks' | 'cards' | 'map' | 'cheat'>('hacks');

  React.useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#10b981',
        primaryTextColor: '#fff',
        primaryBorderColor: '#10b981',
        lineColor: '#fbbf24',
        secondaryColor: '#1e293b',
        tertiaryColor: '#020617',
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      flowchart: {
        curve: 'basis',
        htmlLabels: true
      }
    });

    if (activeTab === 'map') {
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
      filename: `SUNCUBE_BST_${chapter.name.replace(/[^a-z0-9]/gi, '_').toUpperCase()}.pdf`,
      image: { type: 'jpeg' as 'jpeg' | 'png' | 'webp', quality: 0.98 },
      html2canvas: { scale: 3, useCORS: true, backgroundColor: '#020617' },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as 'portrait' | 'landscape' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save();
  };

  const generateMermaidString = (root: MindMapNode): string => {
    let output = 'graph LR\n';
    output += `classDef root fill:#10b98122,stroke:#10b981,stroke-width:2px,color:#fff,font-weight:bold;\n`;
    output += `classDef child fill:#fbbf2411,stroke:#fbbf24,stroke-width:1px,color:#fbbf24,font-weight:bold;\n`;
    output += `classDef leaf fill:#ffffff05,stroke:#ffffff11,stroke-width:1px,color:#94a3b8;\n\n`;

    output += `root["${root.label.toUpperCase()}"]:::root\n`;

    if (root.children) {
      root.children.forEach((child, idx) => {
        const childId = `c${idx}`;
        output += `root --- ${childId}["${child.label}"]:::child\n`;

        if (child.children) {
          child.children.forEach((leaf, lIdx) => {
            const leafId = `l${idx}_${lIdx}`;
            output += `${childId} --- ${leafId}["${leaf.label}"]:::leaf\n`;
          });
        }
      });
    }

    return output;
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-1000">
      <div className="flex flex-wrap justify-center gap-4 bg-white/5 p-3 rounded-[2.5rem] border border-white/5 shadow-2xl w-fit mx-auto backdrop-blur-3xl relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-emerald/20 to-brand-amber/20 rounded-[2.6rem] blur-xl opacity-50 -z-10" />
        {[
          { id: 'hacks' as const, label: 'Street Hacks', icon: Zap },
          { id: 'cards' as const, label: 'Recall Cards', icon: Brain },
          { id: 'map' as const, label: 'Logic Flow', icon: MapIcon },
          { id: 'cheat' as const, label: 'Morning Cram', icon: ClipboardCheck }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              window.scrollTo({ top: 300, behavior: 'smooth' });
            }}
            className={`px-10 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-3 transition-all relative group ${activeTab === tab.id ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald overflow-hidden' : 'text-slate-500 hover:text-white'}`}
          >
            {activeTab === tab.id && (
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            )}
            <tab.icon size={16} className={`${activeTab === tab.id ? 'fill-current' : ''}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[60vh]">
        {activeTab === 'hacks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BST_HACKS.map((hack, idx) => (
              <div key={hack.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                <HackerCard {...hack} />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cards' && (
          <div className="flex flex-col items-center py-12">
            <SlidingFlashcards chapter={chapter} />
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-white/[0.02] p-16 rounded-[4rem] border border-white/5 shadow-2xl flex flex-col items-center overflow-x-auto min-h-[70vh] backdrop-blur-3xl group">
            <div className="text-center mb-16 relative">
               <div className="absolute -inset-8 bg-brand-emerald/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="relative z-10">
                  <span className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.4em] mb-4 block">Neural Blueprint</span>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">{chapter.name}</h3>
                  <div className="h-1.5 w-32 bg-brand-amber mx-auto mt-8 rounded-full shadow-glow-amber group-hover:w-48 transition-all duration-700" />
               </div>
            </div>
            <div className="mermaid w-full flex justify-center scale-110 lg:scale-125 px-20">
              {generateMermaidString(chapter.mindMap)}
            </div>
          </div>
        )}

        {activeTab === 'cheat' && (
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10">
               <div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic">High-Speed Cram Engine</h4>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mt-1">Extracting Core Syllabus Patterns</p>
               </div>
               <button
                 onClick={handleDownloadPDF}
                 className="group px-8 py-4 bg-brand-amber hover:bg-white text-brand-slate rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 transition-all shadow-glow-amber/20"
               >
                 <Download size={18} className="group-active:translate-y-1 transition-transform" />
                 Download Protocol PDF
               </button>
            </div>
            
            <div id="cheat-sheet-content" className="grid lg:grid-cols-2 gap-10 p-12 bg-white/[0.01] rounded-[4rem] border border-white/5 backdrop-blur-3xl">
              {chapter.cheatSheet.map((section, i) => (
                <div key={i} className="group bg-white/5 rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:border-brand-amber/30 transition-all duration-500 pdf-no-break">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-brand-amber/10 rounded-xl border border-brand-amber/20 group-hover:bg-brand-amber group-hover:text-brand-slate transition-all">
                        <Star size={20} className="fill-current" />
                     </div>
                     <h4 className="text-2xl font-black text-white uppercase tracking-tighter italic">{section.title}</h4>
                  </div>
                  <ul className="space-y-5">
                    {(section.content || section.points || []).map((p, j) => (
                      <li key={j} className="flex gap-4 text-slate-300 font-medium text-lg leading-relaxed group/item selection:bg-brand-amber selection:text-brand-slate">
                        <span className="w-1.5 h-1.5 bg-brand-amber rounded-full mt-3 shrink-0 shadow-glow-amber group-hover/item:scale-150 transition-transform" />
                        <span>
                          {p.split(/(\*\*.*?\*\*)/).map((part, k) => (
                            part.startsWith('**') && part.endsWith('**') ? (
                              <strong key={k} className="font-black text-brand-slate bg-brand-amber px-2 py-0.5 rounded mx-1 uppercase text-[10px] tracking-tighter inline-block align-middle">
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
    </div>
  );
};
