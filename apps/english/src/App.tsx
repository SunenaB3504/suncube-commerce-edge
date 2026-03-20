import { useState } from 'react';
import { BookOpen, Search, Zap, Library, Music, Book, PenTool, Layout, ChevronRight, Star } from 'lucide-react';
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

  const renderContent = () => {
    if (selectedContent) {
      return (
        <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ForensicView
            content={selectedContent}
            onBack={() => setSelectedContent(null)}
          />
        </div>
      );
    }

    if (selectedWriting) {
      return (
        <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <WritingView
            skeleton={selectedWriting}
            onBack={() => setSelectedWriting(null)}
          />
        </div>
      );
    }

    if (showCheatSheet) {
      return (
        <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CheatSheetView
            onBack={() => setShowCheatSheet(false)}
          />
        </div>
      );
    }

    if (showSQP) {
      return (
        <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <SQPView
            sqps={allSQPs}
            onBack={() => setShowSQP(false)}
          />
        </div>
      );
    }

    return (
      <div className="max-w-7xl mx-auto py-12">
        <header className="mb-20 relative overflow-hidden p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] group-hover:bg-brand-emerald/20 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-amber/10 rounded-full blur-[100px] group-hover:bg-brand-amber/20 transition-all duration-1000" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-brand-emerald font-black mb-6 uppercase tracking-[0.3em] text-[10px]">
              <div className="p-2 bg-brand-emerald/10 rounded-lg">
                 <Library size={16} />
              </div>
              Academic Session 2025-26
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
              English <span className="text-brand-emerald">Edge</span> <br/>
              <span className="text-white/40 text-4xl md:text-5xl tracking-tighter">Forensic Audit v2.0</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-medium mb-12">
              A high-fidelity analysis engine mapping chapter motifs, character psychology, and <span className="text-brand-emerald font-bold">verbatim</span> Board marking schemes.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setShowSQP(true)}
                className="flex items-center gap-4 px-8 py-5 bg-brand-emerald text-brand-slate rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-glow-emerald hover:-translate-y-1 transition-all"
              >
                <Layout size={20} />
                Explore SQP Vault
              </button>
              <button
                onClick={() => setShowCheatSheet(true)}
                className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                <Zap size={20} className="text-brand-amber fill-brand-amber" />
                Quick Review
              </button>
            </div>
          </div>
        </header>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
               <div className="p-3 bg-brand-amber/10 rounded-2xl">
                <Zap className="text-brand-amber fill-brand-amber w-6 h-6" />
               </div>
               Flamingo Prose
            </h3>
            <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block" />
          </div>
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

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
               <div className="p-3 bg-brand-emerald/10 rounded-2xl">
                <Music className="text-brand-emerald w-6 h-6" />
               </div>
               Flamingo Poetry
            </h3>
            <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block" />
          </div>
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

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
               <div className="p-3 bg-indigo-500/10 rounded-2xl">
                <Book className="text-indigo-400 w-6 h-6" />
               </div>
               Vistas (Supplementary)
            </h3>
            <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block" />
          </div>
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

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-white flex items-center gap-4 uppercase tracking-tighter">
               <div className="p-3 bg-brand-amber/10 rounded-2xl">
                <PenTool className="text-brand-amber w-6 h-6" />
               </div>
               Writing Authority
            </h3>
            <div className="h-px bg-white/10 flex-1 mx-8 hidden md:block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {writingSkeletons.map(skeleton => (
              <div
                key={skeleton.id}
                onClick={() => setSelectedWriting(skeleton)}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-xl hover:shadow-brand-amber/10 hover:border-brand-amber/40 hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                   <PenTool size={64} className="text-brand-amber" />
                </div>
                <div className="h-14 w-14 bg-brand-amber/10 text-brand-amber rounded-2xl flex items-center justify-center mb-8 border border-brand-amber/20 group-hover:bg-brand-amber group-hover:text-brand-slate transition-colors">
                  <PenTool size={28} />
                </div>
                <h4 className="text-lg font-black text-white uppercase tracking-tight mb-3 truncate">{skeleton.id.replace('-', ' ')}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">{skeleton.format.split('|')[0]}</p>
                <div className="flex items-center gap-2 text-brand-amber text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Open Framework <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-slate font-sans text-slate-200 selection:bg-brand-emerald selection:text-brand-slate">
      <nav className="bg-brand-slate/80 backdrop-blur-xl border-b border-white/5 p-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 
            className="text-xl font-black flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setSelectedContent(null);
              setSelectedWriting(null);
              setShowCheatSheet(false);
              setShowSQP(false);
            }}
          >
            <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:bg-brand-emerald group-hover:rotate-12 transition-all">
              <BookOpen size={20} className="text-brand-emerald group-hover:text-brand-slate" />
            </div>
            <span className="tracking-tighter uppercase">XII English <span className="text-brand-emerald">Edge</span></span>
          </h1>
          <div className="flex gap-4 sm:gap-8 text-[10px] font-black uppercase tracking-[0.2em] items-center">
            <a 
              href="/suncube-commerce-edge/" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-slate-400 hover:text-white"
              title="Back to Suncube Hub"
            >
               <Library size={14} className="text-brand-emerald" />
               <span className="hidden sm:inline">Hub</span>
            </a>
            
            <button
              onClick={() => {
                setSelectedContent(null);
                setSelectedWriting(null);
                setShowCheatSheet(false);
                setShowSQP(true);
              }}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Layout size={14} className="text-brand-amber" /> SQP Vault
            </button>
            <button
              onClick={() => {
                setSelectedContent(null);
                setSelectedWriting(null);
                setShowCheatSheet(true);
                setShowSQP(false);
              }}
              className="bg-brand-amber text-brand-slate px-5 py-2.5 rounded-xl font-black hover:shadow-glow-amber transition-all flex items-center gap-2"
            >
              <Star size={14} className="fill-brand-slate" />
              Morning Review
            </button>
          </div>
        </div>
      </nav>

      <main className="p-4 md:p-8">
        {renderContent()}
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
    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl hover:shadow-brand-emerald/5 hover:border-brand-emerald/40 hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between h-full relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-125 transition-all duration-700 pointer-events-none">
         <BookOpen size={180} />
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <span className={`px-4 py-1.5 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border shadow-sm ${
            type === 'Prose' ? 'bg-brand-amber/10 text-brand-amber border-brand-amber/20' : 
            type === 'Poetry' ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20' : 
            'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
          }`}>
            {type}
          </span>
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-brand-amber group-hover:border-brand-amber group-hover:rotate-12 transition-all duration-500">
            <Zap className="text-slate-600 group-hover:text-brand-slate h-4 w-4 transition-colors" />
          </div>
        </div>
        
        <h3 className="text-3xl font-black text-white mb-2 leading-none tracking-tight group-hover:text-brand-emerald transition-colors">{content.title}</h3>
        <p className="text-[10px] font-black text-slate-500 mb-6 uppercase tracking-widest italic flex items-center gap-2 opacity-60">
           Audit by <span className="text-brand-amber">{content.author}</span>
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-10 line-clamp-3 font-medium group-hover:text-slate-300 transition-colors">
          {summaryText}
        </p>
      </div>

      <button
        onClick={onOpen}
        className="relative z-10 w-full py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-brand-emerald hover:text-brand-slate hover:border-brand-emerald hover:shadow-glow-emerald transition-all active:scale-95"
      >
        Deep Audit <Search className="h-4 w-4" />
      </button>
    </div>
  );
}

export default App;

