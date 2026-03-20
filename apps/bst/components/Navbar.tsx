import React from 'react';
import { Briefcase, BookOpen, Lightbulb, Archive, Menu, Target, Printer, LayoutGrid, Zap } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDashboard: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, isDashboard }) => (
  <nav className="sticky top-0 z-50 bg-brand-slate/80 border-b border-white/5 backdrop-blur-3xl px-8 py-5 print:hidden">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <a 
          href="../" 
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-emerald hover:border-brand-emerald/30 transition-all group" 
          title="Return to Suncube Hub"
        >
          <LayoutGrid size={18} className="group-hover:rotate-90 transition-transform duration-500" />
        </a>
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveView('dashboard')}
        >
          <div className="p-2 bg-brand-emerald/10 rounded-xl border border-brand-emerald/20 shadow-glow-emerald/5 group-hover:scale-110 transition-transform">
             <Briefcase size={24} className="text-brand-emerald" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white group-hover:text-brand-emerald transition-colors">
            Business<span className="text-brand-emerald">Master</span>
          </span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        <div className="flex items-center gap-8 font-black text-[10px] uppercase tracking-[0.2em]">
          {[
            { id: 'theory', label: 'Forensic Theory', icon: BookOpen },
            { id: 'revision', label: 'Revision HQ', icon: Lightbulb },
            { id: 'archives', label: 'Exam Archives', icon: Archive }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => !isDashboard && setActiveView(item.id)}
              className={`flex items-center gap-2 transition-all group ${activeView === item.id ? 'text-brand-emerald' : 'text-slate-500 hover:text-white'} ${isDashboard ? 'opacity-30 cursor-not-allowed' : ''}`}
              disabled={isDashboard}
            >
              <item.icon size={14} className={`${activeView === item.id ? 'fill-current' : 'group-hover:scale-110 transition-transform'}`} />
              {item.label}
              {activeView === item.id && (
                <div className="absolute -bottom-7 left-0 right-0 h-0.5 bg-brand-emerald shadow-glow-emerald" />
              )}
            </button>
          ))}
        </div>

        <div className="w-px h-8 bg-white/5 mx-2" />

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveView('morning-review')}
            className={`flex items-center gap-3 transition-all px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 border ${activeView === 'morning-review' ? 'bg-brand-amber text-brand-slate border-brand-amber shadow-glow-amber' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-brand-amber/30'}`}
          >
            <Printer size={14} />
            Review Sheet
          </button>

          <button
            onClick={() => setActiveView('mcq-test')}
            className={`flex items-center gap-3 transition-all px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 border ${activeView === 'mcq-test' ? 'bg-brand-emerald text-brand-slate border-brand-emerald shadow-glow-emerald' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-brand-emerald/30'}`}
          >
            <Zap size={14} className="fill-current" />
            MCQ Engine
          </button>
        </div>
      </div>

      <button className="lg:hidden p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white" aria-label="Open Menu">
        <Menu size={24} />
      </button>
    </div>
  </nav>
);
