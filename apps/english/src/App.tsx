import { useState } from 'react';
import { BookOpen, Search, Zap, Library, Music, Book, PenTool, Layout } from 'lucide-react';
import { flamingoChapters } from './data/chapters/flamingo';
import { vistasChapters } from './data/chapters/vistas';
import { flamingoPoems } from './data/poems/flamingo';
import { writingSkeletons } from './data/writing';
import { ForensicView } from './components/ForensicView';
import { WritingView } from './components/WritingView';
import { CheatSheetView } from './components/CheatSheetView';
import { ChapterForensics, PoetryForensics, WritingSkeleton } from './types';
import { allSQPs } from './data/sqps';
import { SQPView } from './components/SQPView';

function App() {
  const [selectedContent, setSelectedContent] = useState<ChapterForensics | PoetryForensics | null>(null);
  const [selectedWriting, setSelectedWriting] = useState<WritingSkeleton | null>(null);
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const [showSQP, setShowSQP] = useState(false);

  if (selectedContent) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <ForensicView
            content={selectedContent}
            onBack={() => setSelectedContent(null)}
          />
        </div>
      </div>
    );
  }

  if (selectedWriting) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <WritingView
            skeleton={selectedWriting}
            onBack={() => setSelectedWriting(null)}
          />
        </div>
      </div>
    );
  }

  if (showCheatSheet) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <CheatSheetView
            onBack={() => setShowCheatSheet(false)}
          />
        </div>
      </div>
    );
  }

  if (showSQP) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans p-8 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <SQPView
            sqps={allSQPs}
            onBack={() => setShowSQP(false)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-royal-900 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="text-royal-300" />
            XII English Core <span className="text-royal-400 font-light hidden sm:inline">| Literature Forensics</span>
          </h1>
          <div className="flex gap-4 sm:gap-6 text-sm font-medium items-center">
            <button
              onClick={() => {
                setSelectedContent(null);
                setSelectedWriting(null);
                setShowCheatSheet(false);
                setShowSQP(false);
              }}
              className="hover:text-royal-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                setSelectedContent(null);
                setSelectedWriting(null);
                setShowCheatSheet(false);
                setShowSQP(true);
              }}
              className="hover:text-royal-300 transition-colors flex items-center gap-1"
            >
              <Layout size={14} className="text-amber-400" /> SQP Vault
            </button>
            <button
              onClick={() => {
                setSelectedContent(null);
                setSelectedWriting(null);
                setShowCheatSheet(true);
                setShowSQP(false);
              }}
              className="bg-amber-500 text-royal-900 px-3 py-1 rounded-full font-bold hover:bg-amber-400 transition-colors shadow-lg"
            >
              Morning Review
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-royal-600 font-bold mb-2 uppercase tracking-widest text-xs">
            <Library size={14} /> Academic Session 2025-26
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Strategic Forensic Audit <span className="text-royal-600 block">Class XII English Core</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
            A high-fidelity analysis engine mapping chapter motifs, character psychology, and <span className="text-royal-600 font-bold">verbatim</span> Board marking schemes.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setShowSQP(true)}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="h-8 w-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Layout size={18} />
              </div>
              Explore SQP Vault
            </button>
            <button
              onClick={() => setShowCheatSheet(true)}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="h-8 w-8 bg-royal-50 text-royal-600 rounded-lg flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white transition-colors">
                <Zap size={18} />
              </div>
              Quick Review
            </button>
          </div>
        </header>

        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
            <Zap className="text-amber-500" /> Flamingo Prose
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flamingoChapters.map(chapter => (
              <ProjectCard
                key={chapter.id}
                content={chapter}
                type="Prose"
                onOpen={() => setSelectedContent(chapter)}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
            <Music className="text-royal-500" /> Flamingo Poetry
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flamingoPoems.map(poem => (
              <ProjectCard
                key={poem.id}
                content={poem}
                type="Poetry"
                onOpen={() => setSelectedContent(poem)}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
            <Book className="text-emerald-600" /> Vistas (Supplementary Reader)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vistasChapters.map(chapter => (
              <ProjectCard
                key={chapter.id}
                content={chapter}
                type="Vistas"
                onOpen={() => setSelectedContent(chapter)}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center gap-4">
            <PenTool className="text-indigo-600" /> Writing Authority
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {writingSkeletons.map(skeleton => (
              <div
                key={skeleton.id}
                onClick={() => setSelectedWriting(skeleton)}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <PenTool size={24} />
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{skeleton.id.replace('-', ' ')}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{skeleton.format.split('|')[0]}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({ content, type, onOpen }: { content: ChapterForensics | PoetryForensics; type: string; onOpen: () => void }) {
  // Use the first milestone description or summary
  const summaryText = 'stanzaBreakdown' in content
    ? content.stanzaBreakdown[0].summary
    : content.milestones[0].event;

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="px-4 py-1.5 bg-royal-100 text-royal-700 text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
            {type}
          </span>
          <Zap className="text-slate-200 group-hover:text-amber-500 transition-all duration-500 h-6 w-6" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-royal-600 transition-colors">{content.title}</h3>
        <p className="text-sm font-bold text-royal-500 mb-4 italic">by {content.author}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
          {summaryText}
        </p>
      </div>

      <button
        onClick={onOpen}
        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-royal-700 active:scale-95 transition-all shadow-lg shadow-slate-200"
      >
        Deep Audit <Search className="h-4 w-4" />
      </button>
    </div>
  );
}

export default App;

