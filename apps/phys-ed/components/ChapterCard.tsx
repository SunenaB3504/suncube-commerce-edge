
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
    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
        <BookOpen className="w-6 h-6" />
      </div>
      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">Unit {chapter.id}</h3>
    <p className="text-sm font-semibold text-emerald-600 mb-2 uppercase tracking-tight">{chapter.name}</p>
    <p className="text-gray-500 text-sm line-clamp-2">{chapter.description}</p>
    <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-700">
      <span>{chapter.topics.length} SUBTOPICS</span>
      <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
        EXPLORE <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);
