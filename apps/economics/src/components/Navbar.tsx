
import React from 'react';
import { BookOpen, Brain, Library } from 'lucide-react';

export const Navbar: React.FC<{ activeView: string, setActiveView: (v: string) => void, isDashboard: boolean }> = ({ activeView, setActiveView, isDashboard }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-900 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <BookOpen className="w-6 h-6 text-amber-400" />
          </div>
          <span className="font-black text-xl tracking-tighter text-gray-900 uppercase">ECON <span className="text-indigo-600">Master</span></span>
        </div>

        {!isDashboard && (
          <div className="flex bg-gray-100 p-1 rounded-2xl border border-gray-200">
            {[
              { id: 'theory', label: 'Theory', icon: BookOpen },
              { id: 'revision', label: 'Revision', icon: Brain },
              { id: 'archives', label: 'Exam Archives', icon: Library },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeView === tab.id ? 'bg-white text-indigo-900 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <tab.icon className={`w-4 h-4 ${activeView === tab.id ? 'text-indigo-600' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="hidden md:flex items-center gap-2">
           <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Board Prep 2026</span>
        </div>
      </div>
    </nav>
  );
};
