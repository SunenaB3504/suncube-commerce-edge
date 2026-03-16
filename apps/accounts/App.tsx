
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
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
        : 'text-slate-600 hover:bg-slate-100'
        }`}
    >
      <Icon className={`w-5 h-5 ${activeTab === id ? 'text-white' : 'text-slate-400 group-hover:text-indigo-500'}`} />
      <span className="font-semibold">{label}</span>
      {activeTab === id && <ChevronRight className="w-4 h-4 ml-auto text-indigo-200" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-80 bg-white border-r border-slate-200 p-6 fixed h-full shadow-sm overflow-y-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Layout className="text-white w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
            Accountancy Pro
          </h2>
        </div>

        {/* Chapter Selector */}
        <div className="mb-10">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Active Chapter</label>
          <div className="relative group">
            <select
              value={activeChapterId}
              onChange={(e) => setActiveChapterId(e.target.value)}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 pl-10 pr-10 rounded-xl font-semibold cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            >
              {ALL_CHAPTERS.map(ch => (
                <option key={ch.id} value={ch.id}>
                  {ch.title}
                </option>
              ))}
            </select>
            <Book className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-indigo-500 transition-colors" />
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
          <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-900 uppercase tracking-widest">Weightage</span>
            </div>
            <p className="text-sm font-bold text-indigo-700">{activeChapter.weightage} Guaranteed</p>
            <p className="text-[10px] text-indigo-500 mt-1">Based on latest SQPs</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-80 min-h-screen relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layout className="text-indigo-600 w-5 h-5" />
            <h2 className="font-bold text-slate-800">Accountancy Pro</h2>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Overlay Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-white z-40 p-6 flex flex-col animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
            <div className="mb-6">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">Select Chapter</label>
              <select
                value={activeChapterId}
                onChange={(e) => setActiveChapterId(e.target.value)}
                className="w-full bg-slate-100 border border-slate-200 p-3 rounded-xl font-bold"
              >
                {ALL_CHAPTERS.map(ch => (
                  <option key={ch.id} value={ch.id}>
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
