
import React from 'react';
import { ChevronRight, Brain, Zap, Target, ArrowRight } from 'lucide-react';
import { Chapter } from '../types';

export const ChapterCard: React.FC<{ chapter: Chapter, onClick: () => void }> = ({ chapter, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/5 shadow-2xl hover:shadow-glow-amber/5 hover:border-brand-amber/30 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-125 transition-all duration-700 pointer-events-none">
         <Target size={180} className="text-brand-amber" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="h-16 w-16 bg-brand-amber/10 border border-brand-amber/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-brand-amber group-hover:rotate-12 transition-all duration-500">
            <Target className="w-8 h-8 text-brand-amber group-hover:text-brand-slate transition-colors" />
          </div>
          <span className="text-[10px] font-black text-slate-700 group-hover:text-brand-amber transition-colors uppercase tracking-[0.3em]">Module 0{chapter.id}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-black text-white leading-none mb-4 tracking-tighter group-hover:text-brand-amber transition-colors">{chapter.name}</h3>
          <p className="text-slate-500 font-medium text-sm mb-10 leading-relaxed line-clamp-2 group-hover:text-slate-400 transition-colors">{chapter.description}</p>
        </div>

        <div className="flex items-center gap-8 border-t border-white/5 pt-8 mt-4">
          <div className="flex items-center gap-3 text-brand-emerald">
            <div className="p-1.5 bg-brand-emerald/10 rounded-lg">
              <Zap className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{chapter.flashcards.length} Cards</span>
          </div>
          <div className="flex items-center gap-3 text-brand-amber">
            <div className="p-1.5 bg-brand-amber/10 rounded-lg">
              <Brain className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">{chapter.topics.length} Sections</span>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-brand-emerald font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          Enter Learning Module <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
