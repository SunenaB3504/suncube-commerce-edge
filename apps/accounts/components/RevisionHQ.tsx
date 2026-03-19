
import React, { useState, useMemo, useRef } from 'react';
import { HackerCard } from '@suncube/ui';
import { ACCOUNTS_HACKS } from '@suncube/shared-logic';
import { Flashcard, Chapter, MindMapNodeData } from '../types';
import {
  Brain, RotateCw, Map, Zap, BookOpen, Layers,
  ChevronLeft, ChevronRight, Shuffle, Target,
  Users, AlertCircle, Settings, BarChart3,
  Calculator, Info, Activity, Scale, List, CheckCircle
} from 'lucide-react';

interface RevisionHQProps {
  chapter: Chapter;
}

type SubTab = 'mindmap' | 'flashcards' | 'cheatsheet';

const ICON_MAP: Record<string, any> = {
  Settings, Target, Layers, BarChart3, Users, AlertCircle,
  BookOpen, Activity, Scale, Calculator
};

const MindMapList: React.FC<{ items: any[], depth?: number }> = ({ items, depth = 0 }) => (
  <ul className={`space-y-1 ${depth > 0 ? 'ml-3 border-l border-white/10 pl-2 mt-1' : ''}`}>
    {items.map((item, i) => {
      const isString = typeof item === 'string';
      const label = isString ? item : item.label;
      const children = !isString ? item.children : undefined;

      return (
        <li key={i} className="text-[11px] text-slate-400 leading-tight">
          <div className="flex items-start gap-1.5">
            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${depth === 0 ? 'bg-brand-amber/50' : 'bg-brand-amber/30'}`} />
            <span className={!isString && children ? 'font-semibold text-slate-200' : ''}>{label}</span>
          </div>
          {children && <MindMapList items={children} depth={depth + 1} />}
        </li>
      );
    })}
  </ul>
);

const MindMapNode: React.FC<{ data: MindMapNodeData }> = ({ data }) => {
  const Icon = ICON_MAP[data.iconName] || Map;
  return (
    <div className={`flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl transition-all hover:border-white/20 z-10 ${data.colorClass}`}>
      <div className="flex items-center gap-2 mb-1">
        <div className={`p-1.5 rounded-lg ${data.colorClass.replace('border-', 'bg-').replace('-500', '-100')} text-current`}>
          <Icon className="w-4 h-4" />
        </div>
        <h4 className="font-bold text-sm uppercase tracking-tight">{data.title}</h4>
      </div>
      <MindMapList items={data.items} />
    </div>
  );
};

const RevisionHQ: React.FC<RevisionHQProps> = ({ chapter }) => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('mindmap');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>(chapter.flashcards);

  const cs = chapter.cheatSheet;

  useMemo(() => {
    setShuffledCards(chapter.flashcards);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, [chapter]);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % shuffledCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
  };

  const handleShuffle = () => {
    const newShuffle = [...shuffledCards].sort(() => Math.random() - 0.5);
    setShuffledCards(newShuffle);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const TabButton = ({ id, label, icon: Icon }: { id: SubTab, label: string, icon: any }) => (
    <button
      onClick={() => setActiveSubTab(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-all border-b-2 ${activeSubTab === id
        ? 'bg-white/5 border-brand-amber text-brand-amber shadow-lg'
        : 'border-transparent text-slate-500 hover:text-white hover:bg-white/5'
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="border-b border-white/5 pb-4">
        <h1 className="text-3xl font-black text-white tracking-tight uppercase">Revision HQ</h1>
        <p className="text-slate-500 mt-2 font-bold uppercase text-[10px] tracking-widest">Visual memory aids for <span className="text-brand-amber">{chapter.title}</span></p>
      </header>

      <nav className="flex items-center gap-1 border-b border-white/5 overflow-x-auto scrollbar-hide">
        <TabButton id="mindmap" label="Mind Map" icon={Map} />
        <TabButton id="flashcards" label={`${chapter.flashcards.length} Flashcards`} icon={Brain} />
        <TabButton id="cheatsheet" label="Mega Cheat Sheet" icon={Zap} />
      </nav>

      {/* Mind Map Section */}
      {activeSubTab === 'mindmap' && (
        <section className="bg-white/5 p-6 md:p-12 rounded-3xl border border-white/10 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <div className="bg-brand-slate p-4 rounded-2xl shadow-2xl border-4 border-brand-amber/50 text-center px-10 z-20">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-amber/60 block mb-1">Central Theme</span>
              <h2 className="text-xl md:text-2xl font-black text-white">{chapter.title}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {chapter.mindMap.map((node) => (
              <MindMapNode key={node.id} data={node} />
            ))}
          </div>
        </section>
      )}

      {/* Flashcards Section */}
      {activeSubTab === 'flashcards' && (
        <section className="bg-white/5 p-4 md:p-12 rounded-3xl border border-white/10 animate-in fade-in slide-in-from-right-4 duration-300 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-brand-amber p-2 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                <Brain className="text-slate-950 w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight uppercase">Flashcard Deck</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-brand-amber bg-brand-slate px-4 py-1.5 rounded-full border border-brand-amber/20 shadow-lg">
                {currentCardIndex + 1} / {shuffledCards.length}
              </span>
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-slate-400 hover:bg-white/10 hover:text-white transition-all shadow-sm"
              >
                <Shuffle className="w-3 h-3" />
                Shuffle
              </button>
            </div>
          </div>

          <div className="max-w-xl mx-auto flex flex-col items-center gap-10">
            {currentCard && (
              <div
                className="w-full h-72 md:h-96 perspective-1000 cursor-pointer group"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-full text-center transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  <div className="absolute w-full h-full backface-hidden bg-brand-slate rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col items-center justify-center p-8 md:p-12 group-hover:border-brand-amber/30 transition-all backdrop-blur-md">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-amber mb-6 bg-brand-amber/10 px-4 py-1.5 rounded-full border border-brand-amber/20">
                      {currentCard.category}
                    </span>
                    <p className="text-white text-lg md:text-2xl font-bold leading-tight tracking-tight">
                      {currentCard.question}
                    </p>
                    <div className="mt-12 flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                      <RotateCw className="w-4 h-4" />
                      Flip for official answer
                    </div>
                  </div>
                  <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-brand-amber to-amber-600 text-slate-950 rounded-[2.5rem] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-center rotate-y-180">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950/60 mb-6 opacity-75">Answer Protocol</span>
                    <p className="text-base md:text-xl font-bold leading-relaxed text-center tracking-tight">
                      {currentCard.answer}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-8">
              <button onClick={handlePrev} className="p-5 rounded-full bg-white/5 border border-white/10 shadow-2xl text-slate-500 hover:text-brand-amber hover:border-brand-amber/50 hover:bg-white/10 active:scale-90 transition-all"><ChevronLeft className="w-7 h-7" /></button>
              <button onClick={handleNext} className="p-5 rounded-full bg-brand-amber text-slate-950 shadow-2xl shadow-brand-amber/20 hover:bg-amber-300 active:scale-90 transition-all"><ChevronRight className="w-7 h-7" /></button>
            </div>
          </div>
        </section>
      )}

      {/* Mega Cheat Sheet Section */}
      {activeSubTab === 'cheatsheet' && (
        <section className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/10 animate-in fade-in slide-in-from-left-4 duration-500 overflow-hidden relative backdrop-blur-sm">
          <header className="flex items-center gap-5 mb-12 border-b border-white/5 pb-8 relative z-10">
            <div className="bg-brand-amber p-4 rounded-2xl shadow-xl shadow-brand-amber/20"><Zap className="text-slate-950 w-8 h-8 fill-slate-950" /></div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Mega Cheat Sheet</h2>
              <p className="text-brand-amber font-bold uppercase text-[10px] tracking-[0.2em] mt-1 italic">Final Exam Revision • {chapter.id.toUpperCase()}</p>
            </div>
          </header>

          <div className="space-y-12">
            {/* Generic Sections (PART A) */}
            {cs.sections && (
              <div className="grid md:grid-cols-2 gap-8">
                {cs.sections.map((section, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-amber">
                      <List className="w-5 h-5" />
                      <h3 className="text-xl font-black uppercase tracking-tight italic">{section.title}</h3>
                    </div>
                    <ul className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-bold text-slate-300">
                          <CheckCircle className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* 1. Nature & Objectives (PART B) */}
            {cs.natureTable && cs.limitations && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-amber"><Target className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight italic">1. Nature & Objectives</h3></div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
                    <table className="w-full text-left text-[10px]">
                      <thead className="bg-white/5 font-black text-slate-400 uppercase tracking-widest border-b border-white/10">
                        <tr>{cs.natureTable[0].map((h, i) => <th key={i} className="px-4 py-3">{h}</th>)}</tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {cs.natureTable.slice(1).map((row, i) => <tr key={i} className="hover:bg-white/5 transition-colors">
                          {row.map((cell, j) => <td key={j} className="px-4 py-3 font-bold text-slate-300">{cell}</td>)}
                        </tr>)}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-brand-emerald/5 p-6 rounded-2xl border border-brand-emerald/20">
                    <h4 className="font-black uppercase text-[10px] tracking-widest text-brand-emerald mb-3 flex items-center gap-2"><Activity className="w-4 h-4" /> Strategic Objectives</h4>
                    <ul className="space-y-2">
                      {cs.limitations.map((lim, i) => <li key={i} className="text-xs text-brand-emerald/80 font-bold flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-emerald/40 mt-1 shrink-0" />{lim}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Master Classification Table (PART B) */}
            {cs.classificationTable && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-amber"><Scale className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight italic">2. Master Classification List</h3></div>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
                  <table className="w-full text-left text-[10px]">
                    <thead className="bg-brand-amber text-slate-950 font-black uppercase tracking-widest">
                      <tr>{cs.classificationTable[0].map((h, i) => <th key={i} className="px-5 py-4">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 bg-white/5">
                      {cs.classificationTable.slice(1).map((row, i) => <tr key={i} className="hover:bg-brand-amber/5 transition-colors">
                        <td className="px-5 py-3 font-black text-white">{row[0]}</td>
                        <td className="px-5 py-3 font-bold text-brand-amber">{row[1]}</td>
                        <td className="px-5 py-3 font-black text-slate-400">{row[2]}</td>
                      </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. P&L & Rules */}
            <div className="grid md:grid-cols-2 gap-8">
              {cs.pnlOrder && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-brand-amber"><BarChart3 className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight italic">3. Profit & Loss Hierarchy</h3></div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-6">
                    {cs.pnlOrder.map((section, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-amber/60">{section.category}</h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {section.items.map((item, j) => <li key={j} className="bg-white/5 px-3 py-2 rounded-lg border border-white/5 text-xs font-bold text-slate-300 flex items-center gap-2"><CheckCircle className="w-3 h-3 text-brand-emerald/50" /> {item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-amber"><BookOpen className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight italic">4. Crucial Rules</h3></div>
                <div className="grid gap-3">
                  {cs.crucialRules.map((rule, i) => (
                    <div key={i} className="bg-gradient-to-br from-brand-amber/20 to-brand-amber/5 p-5 rounded-2xl text-white border border-brand-amber/20 shadow-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Info className="w-12 h-12" /></div>
                      <h4 className="font-black uppercase text-[10px] tracking-widest text-brand-amber mb-1">{rule.title}</h4>
                      <p className="text-xs font-bold leading-relaxed text-slate-200">{rule.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hacker Card Injection */}
            <div className="mt-12 pt-12 border-t border-white/5">
              <h3 className="text-xl font-black text-brand-amber mb-8 uppercase tracking-[0.2em] italic flex items-center gap-3">
                <Zap size={24} className="fill-brand-amber" /> Integrated Hacker Protocol
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ACCOUNTS_HACKS.map((hack) => (
                  <HackerCard 
                    key={hack.id}
                    title={hack.title}
                    points={hack.points || [hack.description]}
                    hackerAdvice={hack.advice}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RevisionHQ;
