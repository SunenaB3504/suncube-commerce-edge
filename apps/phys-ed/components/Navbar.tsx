
import React from 'react';
import { Activity, BookOpen, Lightbulb, Archive, Menu } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isDashboard: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, isDashboard }) => (
  <nav className="sticky top-0 z-50 emerald-gradient text-white shadow-xl px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveView('dashboard')}
      >
        <Activity className="w-8 h-8 text-amber-400" />
        <span className="text-xl font-bold tracking-tight">PhysEd<span className="text-amber-400">Master</span></span>
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
      </div>
      <button className="md:hidden" aria-label="Open Menu">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);
