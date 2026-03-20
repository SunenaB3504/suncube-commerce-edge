
import React, { useState } from 'react';
import { Star, ChevronRight, Zap, Library, BookOpen } from 'lucide-react';
import { ALL_UNITS } from './data';
import { Chapter } from './types';
import { Navbar } from './components/Navbar';
import { ChapterCard } from './components/ChapterCard';
import { TheoryView } from './components/TheoryView';
import { RevisionHQ } from './components/RevisionHQ';
import { SQPArchives } from './components/SQPArchives';
import { MockExamSimulator } from './components/MockExamSimulator';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setActiveView('theory');
  };

  const handleBackToDashboard = () => {
    setActiveView('dashboard');
    setSelectedChapter(null);
  };

  return (
    <div className="min-h-screen bg-brand-slate pb-20 font-sans text-white">
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        isDashboard={activeView === 'dashboard'}
      />

      <main className="max-w-7xl mx-auto px-6 pt-12">
        {activeView === 'dashboard' ? (
          <>
            <div className="mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
              <div className="relative overflow-hidden p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl group">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-amber/10 rounded-full blur-[100px] group-hover:bg-brand-amber/20 transition-all duration-1000" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] group-hover:bg-brand-emerald/20 transition-all duration-1000" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 text-brand-amber font-black mb-8 uppercase tracking-[0.4em] text-[10px]">
                      <div className="p-2 bg-brand-amber/10 rounded-lg shrink-0">
                         <Star size={16} className="fill-brand-amber" />
                      </div>
                      Academic Forensic Unit 2025-26
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
                      Premium Prep <br />
                      <span className="text-brand-amber">ECONOMICS</span>
                    </h1>
                    <p className="text-slate-400 text-xl leading-relaxed font-medium mb-0 max-w-2xl border-l-2 border-white/10 pl-8">
                      Master Macroeconomics and Indian Economic Development with <span className="text-white">visual theory</span>, verified sample papers, and AI-driven strategic insights.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 min-w-[300px]">
                    <button
                      onClick={() => setActiveView('simulator')}
                      className="w-full flex items-center justify-center gap-4 bg-brand-amber text-brand-slate px-10 py-6 rounded-[1.5rem] font-black shadow-glow-amber hover:-translate-y-1 transition-all group uppercase tracking-widest text-sm"
                    >
                      <Star className="w-5 h-5 text-brand-slate group-hover:rotate-12 transition-transform fill-current" />
                      Launch Simulator
                    </button>
                    <a
                      href={`${import.meta.env.BASE_URL}Exam_Morning_Eco_Cheat_Sheet.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black px-8 py-4 rounded-[1.25rem] transition-all uppercase text-[10px] tracking-[0.2em]"
                    >
                      <Zap size={14} className="text-brand-emerald fill-brand-emerald" /> Morning Review
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ALL_UNITS.map(unit => (
                <ChapterCard
                  key={unit.id}
                  chapter={unit}
                  onClick={() => handleChapterSelect(unit)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-12">
              <div>
                <button
                  onClick={handleBackToDashboard}
                  className="flex items-center gap-3 text-brand-emerald font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group mb-6"
                >
                  <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:bg-brand-emerald group-hover:text-brand-slate transition-all">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </div>
                  Back to Command Center
                </button>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">{selectedChapter?.name}</h1>
                <div className="flex items-center gap-3 mt-4">
                   <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                   <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
                    Forensic Status: <span className="text-brand-emerald">Synced</span>
                   </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Board Weightage</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 w-6 rounded-full bg-brand-amber shadow-glow-amber opacity-80" />)}
                  </div>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <div className="p-3 bg-brand-amber/10 rounded-2xl">
                  <Star className="w-8 h-8 text-brand-amber fill-brand-amber animate-pulse" />
                </div>
              </div>
            </div>

            {activeView === 'simulator' && (
              <MockExamSimulator onBack={handleBackToDashboard} />
            )}

            {selectedChapter && activeView !== 'simulator' && (
              <div className="min-h-[60vh] pb-20">
                {activeView === 'theory' && <TheoryView chapter={selectedChapter} />}
                {activeView === 'revision' && <RevisionHQ chapter={selectedChapter} />}
                {activeView === 'archives' && <SQPArchives chapter={selectedChapter} />}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
