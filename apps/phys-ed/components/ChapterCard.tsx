
import React from 'react';
import { BookOpen, Star, ChevronRight } from 'lucide-react';
import { Chapter } from '../types';

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-brand-emerald/50 transition-all duration-500 cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-4"
  >
    {/* Decorative gradient overlay */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-emerald/10 transition-colors" />
    
    <div className="relative flex items-start justify-between mb-6">
      <div className="p-3 bg-brand-emerald/10 text-brand-emerald rounded-2xl border border-brand-emerald/20 group-hover:scale-110 group-hover:bg-brand-emerald group-hover:text-brand-slate transition-all duration-500">
        <BookOpen className="w-6 h-6" />
      </div>
      <Star className="w-5 h-5 text-brand-amber fill-brand-amber shadow-glow-amber" />
    </div>

    <div className="relative">
      <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">Unit {chapter.id}</h3>
      <h2 className="text-xl font-black text-white group-hover:text-brand-emerald transition-colors duration-300 leading-tight mb-2">
        {chapter.name}
      </h2>
      <p className="text-slate-400 text-sm line-clamp-2 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
        {chapter.description}
      </p>
    </div>

    <div className="relative mt-8 flex items-center justify-between text-[10px] font-black tracking-widest uppercase">
      <span className="text-brand-emerald/80 px-2 py-1 rounded-md bg-brand-emerald/5 border border-brand-emerald/10">
        {chapter.topics.length} SUBTOPICS
      </span>
      <div className="flex items-center gap-1 text-slate-500 group-hover:text-brand-emerald group-hover:translate-x-1 transition-all duration-300">
        EXPLORE <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);
