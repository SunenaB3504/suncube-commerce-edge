
import React, { useState, useMemo, useRef } from 'react';
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
  <ul className={`space-y-1 ${depth > 0 ? 'ml-3 border-l border-slate-200 pl-2 mt-1' : ''}`}>
    {items.map((item, i) => {
      const isString = typeof item === 'string';
      const label = isString ? item : item.label;
      const children = !isString ? item.children : undefined;

      return (
        <li key={i} className="text-[11px] text-slate-600 leading-tight">
          <div className="flex items-start gap-1.5">
            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${depth === 0 ? 'bg-slate-400' : 'bg-slate-300'}`} />
            <span className={!isString && children ? 'font-semibold text-slate-700' : ''}>{label}</span>
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
    <div className={`flex flex-col gap-2 p-4 rounded-xl border-2 bg-white shadow-sm transition-all hover:shadow-md z-10 ${data.colorClass}`}>
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
        ? 'bg-white border-indigo-600 text-indigo-600 shadow-sm'
        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
        }`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Revision HQ</h1>
        <p className="text-slate-500 mt-2 font-medium">Visual memory aids for <span className="text-indigo-600">{chapter.title}</span></p>
      </header>

      <nav className="flex items-center gap-1 border-b border-slate-200 overflow-x-auto scrollbar-hide">
        <TabButton id="mindmap" label="Mind Map" icon={Map} />
        <TabButton id="flashcards" label={`${chapter.flashcards.length} Flashcards`} icon={Brain} />
        <TabButton id="cheatsheet" label="Mega Cheat Sheet" icon={Zap} />
      </nav>

      {/* Mind Map Section */}
      {activeSubTab === 'mindmap' && (
        <section className="bg-slate-50 p-6 md:p-12 rounded-3xl border border-slate-200 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-16 justify-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl border-4 border-indigo-500 text-center px-10 z-20">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 block mb-1">Central Theme</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-800">{chapter.title}</h2>
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
        <section className="bg-slate-50 p-4 md:p-12 rounded-3xl border border-slate-200 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Brain className="text-white w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Flashcard Deck</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-indigo-600 bg-white px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                {currentCardIndex + 1} / {shuffledCards.length}
              </span>
              <button
                onClick={handleShuffle}
                className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors shadow-sm"
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
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-[2.5rem] shadow-2xl border-2 border-slate-100 flex flex-col items-center justify-center p-8 md:p-12 group-hover:border-indigo-300 transition-colors">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-500 mb-6 bg-indigo-50 px-4 py-1.5 rounded-full">
                      {currentCard.category}
                    </span>
                    <p className="text-slate-800 text-lg md:text-2xl font-bold leading-tight">
                      {currentCard.question}
                    </p>
                    <div className="mt-12 flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                      <RotateCw className="w-4 h-4" />
                      Flip for official answer
                    </div>
                  </div>
                  <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-600 via-indigo-800 to-slate-900 text-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-center rotate-y-180">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300 mb-6 opacity-75">Answer / Key Point</span>
                    <p className="text-base md:text-xl font-medium leading-relaxed text-center">
                      {currentCard.answer}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-8">
              <button onClick={handlePrev} className="p-5 rounded-full bg-white border border-slate-200 shadow-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-200 active:scale-90"><ChevronLeft className="w-7 h-7" /></button>
              <button onClick={handleNext} className="p-5 rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-90"><ChevronRight className="w-7 h-7" /></button>
            </div>
          </div>
        </section>
      )}

      {/* Mega Cheat Sheet Section */}
      {activeSubTab === 'cheatsheet' && (
        <section className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-left-4 duration-500 overflow-hidden relative">
          <header className="flex items-center gap-5 mb-12 border-b border-slate-100 pb-8 relative z-10">
            <div className="bg-yellow-400 p-4 rounded-2xl shadow-xl shadow-yellow-100"><Zap className="text-white w-8 h-8 fill-white" /></div>
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Mega Cheat Sheet</h2>
              <p className="text-indigo-500 font-bold uppercase text-xs tracking-widest mt-1">Final Exam Revision • {chapter.id.toUpperCase()}</p>
            </div>
          </header>

          <div className="space-y-12">
            {/* Generic Sections (PART A) */}
            {cs.sections && (
              <div className="grid md:grid-cols-2 gap-8">
                {cs.sections.map((section, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-600">
                      <List className="w-5 h-5" />
                      <h3 className="text-xl font-black uppercase tracking-tight">{section.title}</h3>
                    </div>
                    <ul className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
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
                <div className="flex items-center gap-2 text-indigo-600"><Target className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight">1. Nature & Objectives</h3></div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 font-black text-slate-500 uppercase tracking-widest border-b border-slate-200">
                        <tr>{cs.natureTable[0].map((h, i) => <th key={i} className="px-4 py-3">{h}</th>)}</tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {cs.natureTable.slice(1).map((row, i) => <tr key={i} className="hover:bg-slate-50">
                          {row.map((cell, j) => <td key={j} className="px-4 py-3 font-medium text-slate-700">{cell}</td>)}
                        </tr>)}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <h4 className="font-bold text-rose-700 mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Critical Limitations</h4>
                    <ul className="space-y-2">
                      {cs.limitations.map((lim, i) => <li key={i} className="text-xs text-rose-800 font-medium flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-1 shrink-0" />{lim}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Master Classification Table (PART B) */}
            {cs.classificationTable && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-600"><Scale className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight">2. Master Classification List</h3></div>
                <div className="overflow-x-auto rounded-2xl border-2 border-slate-200 shadow-lg">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-indigo-600 text-white font-black uppercase tracking-widest">
                      <tr>{cs.classificationTable[0].map((h, i) => <th key={i} className="px-5 py-4">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {cs.classificationTable.slice(1).map((row, i) => <tr key={i} className="hover:bg-indigo-50/30 transition-colors">
                        <td className="px-5 py-3 font-bold text-slate-800">{row[0]}</td>
                        <td className="px-5 py-3 font-medium text-indigo-600">{row[1]}</td>
                        <td className="px-5 py-3 font-black text-slate-600">{row[2]}</td>
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
                  <div className="flex items-center gap-2 text-indigo-600"><BarChart3 className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight">3. Profit & Loss Hierarchy</h3></div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-6">
                    {cs.pnlOrder.map((section, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{section.category}</h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {section.items.map((item, j) => <li key={j} className="bg-white px-3 py-2 rounded-lg border border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-400" /> {item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-600"><BookOpen className="w-5 h-5" /><h3 className="text-xl font-black uppercase tracking-tight">4. Crucial Rules</h3></div>
                <div className="grid gap-3">
                  {cs.crucialRules.map((rule, i) => (
                    <div key={i} className="bg-indigo-900 p-5 rounded-2xl text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Info className="w-12 h-12" /></div>
                      <h4 className="font-black uppercase text-[10px] tracking-widest text-indigo-300 mb-1">{rule.title}</h4>
                      <p className="text-xs font-medium leading-relaxed">{rule.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RevisionHQ;
