import React from 'react';
import { HackerCard } from '@suncube/ui';
import { BookOpen, TrendingUp, Briefcase, Languages, Trophy, Zap } from 'lucide-react';

const subjects = [
  {
    id: 'accounts',
    title: 'Accountancy Edge',
    description: 'Master the Numerical Engine with partial credit logic and balance sheet accuracy.',
    Icon: Briefcase,
    color: 'emerald',
    href: 'accounts/'
  },
  {
    id: 'economics',
    title: 'Economics Edge',
    description: 'Explore the Logic-to-Graph Engine. Understand market dynamics and macro trends.',
    Icon: TrendingUp,
    color: 'amber',
    href: 'economics/'
  },
  {
    id: 'bst',
    title: 'Business Studies Edge',
    description: 'Deep dive into Case Study patterns and keyword-heavy management logic.',
    Icon: BookOpen,
    color: 'emerald',
    href: 'bst/'
  },
  {
    id: 'english',
    title: 'English Edge',
    description: 'Refine your Narrative Engine. Standardized Writing Boxes for perfect drafts.',
    Icon: Languages,
    color: 'amber',
    href: 'english/'
  },
  {
    id: 'phys-ed',
    title: 'Physical Education Edge',
    description: 'Street-Smart Fitness hacks. Pattern recognition for anatomy and fixtures.',
    Icon: Trophy,
    color: 'emerald',
    href: 'phys-ed/'
  },
  {
    id: 'entrance-pro',
    title: 'Entrance Pro Edge',
    description: 'Speed-Logic DNA. Crack CUET and MH CET with advanced skip logic.',
    Icon: Zap,
    color: 'amber',
    href: 'entrance-pro/'
  }
];

const App = () => {
  return (
    <div className="min-h-screen Selection:bg-brand-emerald Selection:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-sm font-bold mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            Suncube Monorepo v2.0 Live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Suncube <span className="text-brand-emerald">Commerce</span> Edge
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            The unified ecosystem for elite commerce preparation. High-performance engines, synchronized architecture, and "Street-Smart" logic.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-brand-emerald hover:bg-emerald-600 text-brand-slate font-black rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black rounded-xl transition-all transform hover:scale-105 active:scale-95">
              Documentation
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, idx) => (
            <div 
              key={subject.id} 
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <a href={subject.href} className="block group h-full">
                <HackerCard
                  title={subject.title}
                  points={[subject.description]}
                  hackerAdvice={`Subject Master: ${subject.id === 'entrance-pro' ? 'Speed-Logic' : 'Curriculum'}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-brand-slate/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 font-medium">
            &copy; 2026 Suncube Commerce Edge. Built with absolute consistency.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
