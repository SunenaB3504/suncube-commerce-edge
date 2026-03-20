
import React from 'react';
import { BookOpen, Brain, Library, Star } from 'lucide-react';

export const Navbar: React.FC<{ activeView: string, setActiveView: (v: string) => void, isDashboard: boolean }> = ({ activeView, setActiveView, isDashboard }) => {
  return (
    <nav className="sticky top-0 z-50 bg-brand-slate/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="../" className="p-2.5 bg-white/5 rounded-xl text-brand-emerald hover:bg-brand-emerald hover:text-brand-slate transition-all border border-white/5" title="Back to Suncube Hub">
            <Library className="w-5 h-5" />
          </a>
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveView('dashboard')}
          >
            <div className="w-10 h-10 bg-brand-emerald/10 rounded-2xl flex items-center justify-center border border-brand-emerald/20 group-hover:bg-brand-emerald group-hover:rotate-12 transition-all">
              <BookOpen className="w-6 h-6 text-brand-emerald group-hover:text-brand-slate" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase">ECON <span className="text-brand-emerald">Master</span></span>
          </div>
        </div>

        {!isDashboard && (
          <div className="hidden lg:flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-xl">
            {[
              { id: 'theory', label: 'Theory', icon: BookOpen },
              { id: 'revision', label: 'Revision', icon: Brain },
              { id: 'archives', label: 'Exam Archives', icon: Library },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeView === tab.id ? 'bg-brand-emerald text-brand-slate shadow-glow-emerald' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
              >
                <tab.icon className={`w-4 h-4 ${activeView === tab.id ? '' : 'text-slate-500'}`} />
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 group cursor-default">
             <div className="p-1.5 bg-brand-amber/10 rounded-lg group-hover:bg-brand-amber transition-colors">
               <Star size={12} className="text-brand-amber group-hover:text-brand-slate fill-current" />
             </div>
             <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest">Board Prep 2026</span>
           </div>
        </div>
      </div>
    </nav>
  );
};
