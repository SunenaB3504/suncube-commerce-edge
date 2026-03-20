
import React, { useState } from 'react';
import { Layout, BookOpen, Brain, History, Menu, X, Award, ChevronRight, ChevronDown, Book, FileQuestion } from 'lucide-react';
import TheoryView from './components/TheoryView';
import RevisionHQ from './components/RevisionHQ';
import SQPView from './components/SQPView';
import MCQBank from './components/MCQBank';
import QABank from './components/QABank';
import { ViewType } from './types';
import { ALL_CHAPTERS } from './data/index';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('theory');
  const [activeChapterId, setActiveChapterId] = useState<string>(ALL_CHAPTERS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeChapter = ALL_CHAPTERS.find(c => c.id === activeChapterId) || ALL_CHAPTERS[0];

  const NavItem = ({ id, label, icon: Icon }: { id: ViewType, label: string, icon: any }) => (
    <button
      onClick={() => {
        setActiveTab(id);
        setIsMobileMenuOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === id
        ? 'bg-brand-amber text-slate-950 shadow-lg shadow-brand-amber/20'
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
        }`}
    >
      <Icon className={`w-5 h-5 ${activeTab === id ? 'text-slate-950' : 'text-slate-500 group-hover:text-brand-amber'}`} />
      <span className="font-semibold">{label}</span>
      {activeTab === id && <ChevronRight className="w-4 h-4 ml-auto text-slate-950/50" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-brand-slate text-white flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-80 bg-brand-slate border-r border-white/5 p-6 fixed h-full shadow-2xl overflow-y-auto">
        <a 
          href="/suncube-commerce-edge/" 
          className="flex items-center gap-2 text-slate-500 hover:text-brand-amber transition-colors mb-6 group"
        >
          <X className="w-4 h-4 text-slate-600 group-hover:text-brand-amber/50" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Hub</span>
        </a>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-brand-amber p-2 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.2)]">
            <Layout className="text-slate-950 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-amber to-amber-200">
            Accountancy Edge
          </h2>
        </div>

        {/* Chapter Selector */}
        <div className="mb-10">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">Active Chapter</label>
          <div className="relative group">
            <select
              value={activeChapterId}
              onChange={(e) => setActiveChapterId(e.target.value)}
              className="w-full appearance-none bg-white/5 border border-white/10 text-slate-200 py-3 pl-10 pr-10 rounded-xl font-semibold cursor-pointer focus:ring-2 focus:ring-brand-amber/50 focus:outline-none transition-all group-hover:border-white/20"
            >
              {ALL_CHAPTERS.map(ch => (
                <option key={ch.id} value={ch.id} className="bg-brand-slate">
                  {ch.title}
                </option>
              ))}
            </select>
            <Book className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none group-hover:text-brand-amber transition-colors" />
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem id="theory" label="Theory Master" icon={BookOpen} />
          <NavItem id="revision" label="Revision HQ" icon={Brain} />
          <NavItem id="sqp" label="SQP Archives" icon={History} />
          <NavItem id="mcq-bank" label="MCQ Bank" icon={Award} />
          <NavItem id="qa-bank" label="Q&amp;A Bank" icon={FileQuestion} />
        </nav>

        <div className="mt-auto pt-6">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-brand-amber" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Weightage</span>
            </div>
            <p className="text-sm font-bold text-white">{activeChapter.weightage} Guaranteed</p>
            <p className="text-[10px] text-slate-500 mt-1">Based on latest SQPs</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-80 min-h-screen relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-brand-slate border-b border-white/5 p-4 sticky top-0 z-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/suncube-commerce-edge/" className="p-2 text-slate-500 hover:text-brand-amber">
              <X className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2">
              <Layout className="text-brand-amber w-5 h-5" />
              <h2 className="font-bold text-white">Accountancy Edge</h2>
            </div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-400">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Overlay Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-brand-slate z-40 p-6 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
            <div className="mb-6">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 px-1">Select Chapter</label>
              <select
                value={activeChapterId}
                onChange={(e) => setActiveChapterId(e.target.value)}
                className="w-full bg-white/5 border border-white/10 p-3 rounded-xl font-bold text-white"
              >
                {ALL_CHAPTERS.map(ch => (
                  <option key={ch.id} value={ch.id} className="bg-brand-slate">
                    {ch.title}
                  </option>
                ))}
              </select>
            </div>
            <nav className="space-y-4">
              <NavItem id="theory" label="Theory Master" icon={BookOpen} />
              <NavItem id="revision" label="Revision HQ" icon={Brain} />
              <NavItem id="sqp" label="SQP Archives" icon={History} />
              <NavItem id="mcq-bank" label="MCQ Bank" icon={Award} />
              <NavItem id="qa-bank" label="Q&amp;A Bank" icon={FileQuestion} />
            </nav>
          </div>
        )}

        {/* Content Wrapper */}
        <div className="max-w-6xl mx-auto p-6 md:p-12 pb-24">
          {activeTab === 'theory' && <TheoryView theory={activeChapter.theory} chapterTitle={activeChapter.title} />}
          {activeTab === 'revision' && <RevisionHQ chapter={activeChapter} />}
          {activeTab === 'sqp' && <SQPView sqps={activeChapter.sqps} />}
          {activeTab === 'mcq-bank' && <MCQBank />}
          {activeTab === 'qa-bank' && <QABank />}
        </div>
      </main>
    </div>
  );
};

export default App;
