import React, { useState } from 'react';
import { Star, ChevronRight, Zap, Target, BookOpen, Brain, ShieldCheck } from 'lucide-react';
import { ALL_UNITS } from './data';
import { Chapter } from './types';
import { Navbar } from './components/Navbar';
import { ChapterCard } from './components/ChapterCard';
import { TheoryView } from './components/TheoryView';
import { RevisionHQ } from './components/RevisionHQ';
import { SQPArchives } from './components/SQPArchives';
import { QuizMaster } from './components/MCQQuiz/QuizMaster';
import { NonMCQMaster } from './components/NonMCQ/NonMCQMaster';
import { MorningReviewSheet } from './components/MorningReviewSheet/MorningReviewSheet';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setActiveView('theory');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setActiveView('dashboard');
    setSelectedChapter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-slate pb-32 font-sans text-white selection:bg-brand-emerald selection:text-brand-slate">
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        isDashboard={activeView === 'dashboard'}
      />

      <main className="max-w-7xl mx-auto px-6 pt-16">
        {activeView === 'mcq-test' ? (
          <QuizMaster onBack={handleBackToDashboard} />
        ) : activeView === 'non-mcq' ? (
          <NonMCQMaster onBack={handleBackToDashboard} />
        ) : activeView === 'morning-review' ? (
          <MorningReviewSheet onBack={handleBackToDashboard} />
        ) : activeView === 'dashboard' ? (
          <div className="animate-in fade-in duration-1000">
            <div className="mb-20 relative">
               <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-amber/10 rounded-full blur-[120px] pointer-events-none" />
               <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none" />
               
               <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-white/5 pb-12 relative z-10">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6 bg-brand-amber/10 w-fit px-4 py-2 rounded-full border border-brand-amber/20 shadow-glow-amber/5">
                       <Zap size={14} className="text-brand-amber fill-brand-amber animate-pulse" />
                       <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em]">Institutional Grade Intelligence</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
                      Business Studies <br />
                      <span className="text-brand-emerald">Strategic Hub</span>
                    </h1>
                    <p className="mt-8 text-lg text-slate-400 font-medium max-w-xl leading-relaxed opacity-80">
                      Scoring 100/100 requires precise visual theory, verified sample papers, and forensic case study logic. Activate the modules below.
                    </p>
                  </div>
                  
                  <div className="flex bg-white/5 p-2 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-3xl group">
                     <div className="px-8 py-4 text-center border-r border-white/5">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Target Score</span>
                        <span className="text-2xl font-black text-white italic tracking-tighter">100/100</span>
                     </div>
                     <div className="px-8 py-4 text-center">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Status</span>
                        <div className="flex items-center gap-2">
                           <div className="h-2 w-2 rounded-full bg-brand-emerald shadow-glow-emerald" />
                           <span className="text-xs font-black text-brand-emerald uppercase tracking-widest">Active</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {ALL_UNITS.map((unit, idx) => (
                <div key={unit.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                  <ChapterCard
                    chapter={unit}
                    onClick={() => handleChapterSelect(unit)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-10 relative">
               <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-emerald/5 rounded-full blur-[80px] pointer-events-none" />
              <div>
                <button
                  onClick={handleBackToDashboard}
                  className="text-[10px] font-black text-brand-emerald hover:text-white transition-all flex items-center gap-2 mb-6 uppercase tracking-[0.3em] group"
                >
                  <ChevronRight size={14} className="rotate-180 group-active:-translate-x-1 transition-transform" /> 
                  Back to Strategic Hub
                </button>
                <div className="flex items-center gap-4 mb-2">
                   <div className="px-3 py-1 bg-brand-emerald/10 border border-brand-emerald/30 rounded-lg">
                      <Target size={14} className="text-brand-emerald" />
                   </div>
                   <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{selectedChapter?.name}</h1>
                </div>
                <div className="flex items-center gap-3">
                   <ShieldCheck size={12} className="text-brand-amber" />
                   <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.2em]">
                     Security Status: <span className="text-brand-emerald">Verified Board Syllabus</span>
                   </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-3xl group hover:border-brand-amber/20 transition-all">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">Unit Priority</span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`h-1.5 w-8 rounded-full transition-all duration-500 ${i <= 4 ? 'bg-brand-amber shadow-glow-amber' : 'bg-white/5'}`} />
                    ))}
                  </div>
                </div>
                <div className="h-12 w-px bg-white/5 mx-2" />
                <div className="p-3 bg-brand-amber/10 rounded-2xl border border-brand-amber/20 shadow-glow-amber/5 group-hover:scale-110 transition-transform">
                   <Star size={32} className="text-brand-amber fill-brand-amber animate-pulse" />
                </div>
              </div>
            </div>

            {selectedChapter && (
              <div className="min-h-[70vh] animate-in fade-in slide-in-from-top-4 duration-1000">
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
