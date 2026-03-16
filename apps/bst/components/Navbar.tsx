import React from 'react';
import { Briefcase, BookOpen, Lightbulb, Archive, Menu, Target, Printer } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDashboard: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, isDashboard }) => (
  <nav className="sticky top-0 z-50 purple-gradient text-white shadow-xl px-6 py-4 print:hidden">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveView('dashboard')}
      >
        <Briefcase className="w-8 h-8 text-amber-400" />
        <span className="text-xl font-bold tracking-tight">Business<span className="text-amber-400">Master</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium">
        {[
          { id: 'theory', label: 'Theory Master', icon: BookOpen },
          { id: 'revision', label: 'Revision HQ', icon: Lightbulb },
          { id: 'archives', label: 'SQP Archives', icon: Archive }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => !isDashboard && setActiveView(item.id)}
            className={`flex items-center gap-2 transition-all hover:text-amber-300 ${activeView === item.id ? 'text-amber-400 border-b-2 border-amber-400' : ''} ${isDashboard ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDashboard}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}

        <div className="w-px h-6 bg-white/20 mx-2 hidden lg:block" />

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setActiveView('morning-review')}
            className={`flex items-center gap-2 transition-all px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 ${activeView === 'morning-review' ? 'bg-purple-100 text-purple-900 border border-purple-300' : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:border-white/50'}`}
          >
            <Printer className="w-4 h-4" />
            Morning Review
          </button>

          <button
            onClick={() => setActiveView('non-mcq')}
            className={`flex items-center gap-2 transition-all px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 ${activeView === 'non-mcq' ? 'bg-teal-400 text-purple-900 border border-teal-400' : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:border-white/50'}`}
          >
            <BookOpen className="w-4 h-4" />
            Subjective Qs
          </button>

          <button
            onClick={() => setActiveView('mcq-test')}
            className={`flex items-center gap-2 transition-all px-4 py-2 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 ${activeView === 'mcq-test' ? 'bg-amber-400 text-purple-900 border border-amber-400' : 'bg-white/10 hover:bg-white/20 border border-white/30 text-white hover:border-white/50'}`}
          >
            <Target className="w-4 h-4" />
            MCQ Challenge
          </button>
        </div>
      </div>
      <button className="md:hidden" aria-label="Open Menu">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);
