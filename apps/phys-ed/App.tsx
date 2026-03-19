
import React, { useState } from 'react';
import { Star, ChevronRight, Activity } from 'lucide-react';
import { ALL_UNITS } from './data';
import { Chapter } from './types';
import { Navbar } from './components/Navbar';
import { ChapterCard } from './components/ChapterCard';
import { TheoryView } from './components/TheoryView';
import { RevisionHQ } from './components/RevisionHQ';
import { SQPArchives } from './components/SQPArchives';

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
    <div className="min-h-screen bg-brand-slate text-white pb-20 font-sans selection:bg-brand-emerald selection:text-white">
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isDashboard={activeView === 'dashboard'} 
      />
      
      <main className="max-w-7xl mx-auto px-6 pt-10">
        {activeView === 'dashboard' ? (
          <>
            <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-sm font-bold mb-6">
                <Activity className="w-4 h-4" />
                Street-Smart Fitness v2.0
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Phys-Ed <span className="text-brand-emerald text-glow-emerald">Edge</span>
              </h1>
              <p className="mt-4 text-lg text-slate-400 font-medium max-w-2xl">
                Master the Body Engine. High-performance theory, visual biomechanics, and "Cheat-Code" fixtures for CBSE Class 12.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <div>
                <button 
                  onClick={handleBackToDashboard}
                  className="text-[10px] font-black text-brand-emerald hover:text-emerald-400 transition-colors flex items-center gap-1 mb-2 uppercase tracking-widest"
                >
                  <ChevronRight className="w-3 h-3 rotate-180" /> Back to Dashboard
                </button>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{selectedChapter?.name}</h1>
                <p className="text-slate-500 font-medium mt-1 text-sm italic">
                  Verification Status: <span className="text-brand-emerald font-bold">100% Curriculum Compliant</span>
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weightage Rank</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 w-6 rounded-full bg-brand-amber shadow-[0_0_10px_rgba(251,191,36,0.3)]" />)}
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10 mx-2" />
                <Star className="w-8 h-8 text-brand-amber fill-brand-amber animate-pulse shadow-glow-amber" />
              </div>
            </div>

            {selectedChapter && (
              <div className="min-h-[60vh] animate-in fade-in zoom-in-95 duration-500">
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
