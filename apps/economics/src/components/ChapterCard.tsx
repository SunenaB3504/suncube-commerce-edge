
import React from 'react';
import { ChevronRight, Brain, Zap, Target } from 'lucide-react';
import { Chapter } from '../types';

export const ChapterCard: React.FC<{ chapter: Chapter, onClick: () => void }> = ({ chapter, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-indigo-100 transition-colors" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="h-14 w-14 bg-indigo-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Target className="w-8 h-8 text-amber-400" />
          </div>
          <span className="text-3xl font-black text-indigo-50/50 group-hover:text-indigo-100 transition-colors">0{chapter.id}</span>
        </div>

        <h3 className="text-2xl font-black text-gray-900 leading-tight mb-3 group-hover:text-indigo-900 transition-colors">{chapter.name}</h3>
        <p className="text-gray-500 font-medium text-sm mb-8 leading-relaxed line-clamp-2">{chapter.description}</p>

        <div className="flex items-center gap-6 border-t border-gray-50 pt-6 mt-4">
          <div className="flex items-center gap-2 text-indigo-600">
            <Zap className="w-4 h-4 fill-indigo-600" />
            <span className="text-[10px] font-black uppercase tracking-widest">{chapter.flashcards.length} Cards</span>
          </div>
          <div className="flex items-center gap-2 text-amber-600">
            <Brain className="w-4 h-4 fill-amber-600" />
            <span className="text-[10px] font-black uppercase tracking-widest">{chapter.topics.length} Sections</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 text-indigo-900 font-black text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          Enter Learning Module <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
