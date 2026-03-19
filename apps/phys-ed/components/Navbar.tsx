
import React from 'react';
import { Activity, BookOpen, Lightbulb, Archive, Menu, ChevronLeft } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDashboard: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, isDashboard }) => (
  <nav className="sticky top-0 z-50 bg-brand-slate/80 backdrop-blur-xl border-b border-white/5 text-white shadow-2xl px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-6">
        <a 
          href="/suncube-commerce-edge/" 
          className="group flex items-center gap-2 text-white/40 hover:text-brand-amber transition-all duration-300" 
          title="Back to Suncube Hub"
        >
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-amber/30 group-hover:bg-brand-amber/5">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">Hub</span>
        </a>
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveView('dashboard')}
        >
          <div className="p-2 bg-brand-emerald/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
            <Activity className="w-7 h-7 text-brand-emerald" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Phys-Ed <span className="text-brand-emerald">Edge</span></span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
        {[
          { id: 'theory', label: 'Theory', icon: BookOpen },
          { id: 'revision', label: 'Revision', icon: Lightbulb },
          { id: 'archives', label: 'Archives', icon: Archive }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => !isDashboard && setActiveView(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeView === item.id ? 'bg-brand-emerald text-brand-slate shadow-lg shadow-emerald-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'} ${isDashboard ? 'opacity-30 cursor-not-allowed grayscale' : ''}`}
            disabled={isDashboard}
          >
            <item.icon className={`w-4 h-4 ${activeView === item.id ? 'text-brand-slate' : 'text-slate-500'}`} />
            {item.label}
          </button>
        ))}
      </div>
      <button className="md:hidden p-2 bg-white/5 rounded-lg border border-white/10" aria-label="Open Menu">
        <Menu className="w-6 h-6 text-slate-400" />
      </button>
    </div>
  </nav>
);
