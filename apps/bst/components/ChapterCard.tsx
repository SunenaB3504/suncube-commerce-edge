import React from 'react';
import { BookOpen, Star, ChevronRight, ArrowRight } from 'lucide-react';
import { Chapter } from '../types';

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative bg-white/5 rounded-[2.5rem] p-8 border border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl hover:shadow-glow-amber/5 hover:border-brand-amber/30"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-amber/10 transition-colors" />
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div className="p-4 bg-brand-amber/10 text-brand-amber rounded-2xl border border-brand-amber/20 group-hover:scale-110 group-hover:bg-brand-amber group-hover:text-brand-slate transition-all duration-500 shadow-glow-amber/5">
          <BookOpen size={24} />
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full border border-white/10 group-hover:border-brand-amber/20 transition-colors">
           <Star size={12} className="text-brand-amber fill-brand-amber" />
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{chapter.id <= 4 ? 'High Yield' : 'Core'}</span>
        </div>
      </div>
      
      <div className="mb-6">
        <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] mb-2 block">Unit {chapter.id}</span>
        <h3 className="text-2xl font-black text-white group-hover:text-brand-amber transition-colors tracking-tighter uppercase italic leading-tight">{chapter.name}</h3>
      </div>
      
      <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity italic">
        "{chapter.description}"
      </p>
      
      <div className="flex items-center justify-between pt-6 border-t border-white/5">
        <div className="flex flex-col">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Syllabus Depth</span>
           <span className="text-xs font-black text-white mt-0.5">{chapter.topics.length} CORE MODULES</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-amber group-hover:text-brand-slate group-hover:border-brand-amber transition-all duration-500">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);
