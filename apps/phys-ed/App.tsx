
import React, { useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isDashboard={activeView === 'dashboard'} 
      />
      
      <main className="max-w-7xl mx-auto px-6 pt-10">
        {activeView === 'dashboard' ? (
          <>
            <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                Premium Exam Prep <br />
                <span className="text-emerald-700">CBSE Class 12 Physical Education</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 font-medium max-w-2xl">
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
                  className="text-[10px] font-black text-emerald-700 hover:text-emerald-900 transition-colors flex items-center gap-1 mb-2 uppercase tracking-widest"
                >
                  <ChevronRight className="w-3 h-3 rotate-180" /> Back to Units
                </button>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{selectedChapter?.name}</h1>
                <p className="text-gray-500 font-medium mt-1 text-sm italic">
                  Master Verification Status: <span className="text-emerald-600 font-bold">100% Curriculum Compliant</span>
                </p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Weightage Rank</span>
                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1.5 w-6 rounded-full bg-amber-400" />)}
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 mx-2" />
                <Star className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
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
