
import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
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

      <main className="max-w-7xl mx-auto px-6 pt-10">
        {activeView === 'mcq-test' ? (
          <QuizMaster onBack={handleBackToDashboard} />
        ) : activeView === 'non-mcq' ? (
          <NonMCQMaster onBack={handleBackToDashboard} />
        ) : activeView === 'morning-review' ? (
          <MorningReviewSheet onBack={handleBackToDashboard} />
        ) : activeView === 'dashboard' ? (
          <>
            <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                Premium Exam Prep <br />
                <span className="text-brand-amber text-5xl md:text-6xl">BUSINESS STUDIES</span>
              </h1>
              <p className="mt-4 text-lg text-slate-400 font-bold max-w-2xl border-l-4 border-brand-amber pl-4 uppercase tracking-tight">
                Scoring 100/100 requires precise visual theory and verified sample papers. Access the complete curriculum below.
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-200 pb-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <div>
                <button
                  onClick={handleBackToDashboard}
                  className="text-[10px] font-black text-brand-amber hover:text-amber-300 transition-colors flex items-center gap-1 mb-2 uppercase tracking-[0.2em]"
                >
                  <ChevronRight className="w-3 h-3 rotate-180" /> Back to Base
                </button>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">{selectedChapter?.name}</h1>
                <p className="text-slate-400 font-bold mt-1 text-xs uppercase tracking-widest">
                  Intelligence Status: <span className="text-brand-emerald font-black">CURRICULUM SYNCED</span>
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weightage</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 w-6 rounded-full bg-brand-amber/20" />)}
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10 mx-2" />
                <Star className="w-8 h-8 text-brand-amber fill-brand-amber animate-pulse" />
              </div>
            </div>

            {selectedChapter && (
              <div className="min-h-[60vh]">
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
