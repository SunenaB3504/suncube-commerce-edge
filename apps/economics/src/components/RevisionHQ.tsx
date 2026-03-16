
import React, { useState } from 'react';
import { Search, Brain, FileText, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types';

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'mindmap' | 'flashcards' | 'cheatsheet'>('flashcards');
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const curCard = chapter.flashcards[currentCardIdx];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm w-fit">
        {[
          { id: 'flashcards', label: 'Flashcards', icon: Zap },
          { id: 'mindmap', label: 'Mind Map', icon: Brain },
          { id: 'cheatsheet', label: 'Cheat Sheet', icon: FileText },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-indigo-900 text-white shadow-lg' : 'text-gray-500 hover:bg-indigo-50 hover:text-indigo-600'}`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-amber-400' : ''}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        {activeTab === 'flashcards' && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl perspective-1000 mt-10">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`relative w-full h-[350px] transition-all duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] p-12 shadow-xl border border-indigo-100 flex flex-col justify-center items-center text-center">
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 block">{curCard.category}</span>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight italic">"{curCard.question}"</h3>
                  <p className="mt-10 text-xs font-bold text-gray-400 flex items-center gap-2">
                    <Zap className="w-3 h-3 text-amber-500" /> Click to reveal answer
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-900 rounded-[2.5rem] p-12 shadow-xl flex flex-col justify-center items-center text-center text-white">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-6" />
                  <p className="text-xl font-bold leading-relaxed">{curCard.answer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <button
                disabled={currentCardIdx === 0}
                onClick={() => { setCurrentCardIdx(i => i - 1); setIsFlipped(false); }}
                className="p-4 rounded-full bg-white border border-gray-100 text-indigo-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition-all"
                aria-label="Previous card"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <span className="text-sm font-black text-gray-500 tracking-widest">{currentCardIdx + 1} / {chapter.flashcards.length}</span>
              <button
                disabled={currentCardIdx === chapter.flashcards.length - 1}
                onClick={() => { setCurrentCardIdx(i => i + 1); setIsFlipped(false); }}
                className="p-4 rounded-full bg-white border border-gray-100 text-indigo-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition-all"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'cheatsheet' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapter.cheatSheet.map((section, i) => {
              const renderPoint = (text: string) => {
                const parts = text.split(/\*\*(.*?)\*\*/g);
                return parts.map((part, k) =>
                  k % 2 === 1
                    ? <strong key={k} className="text-indigo-700 font-bold">{part}</strong>
                    : <span key={k}>{part}</span>
                );
              };
              return (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h5 className="text-lg font-black text-indigo-900 mb-6 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    {section.title}
                  </h5>
                  {Array.isArray(section.points || section.content) ? (
                    <ul className="grid gap-4">
                      {((section.points || section.content) as string[]).map((point: string, j: number) => (
                        <li key={j} className="flex gap-3 text-sm font-medium text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                          <span className="text-indigo-400 font-black mt-0.5">▸</span>
                          <span>{renderPoint(point)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm font-medium text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gray-100 whitespace-pre-wrap">
                      {section.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'mindmap' && (
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm flex overflow-x-auto min-h-[400px]">
            <div className="w-full min-w-max">
              <MindMapNodeView node={chapter.mindMap} depth={0} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MindMapNodeView: React.FC<{ node: any; depth?: number }> = ({ node, depth = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;
  // Auto-expand root and first-level children by default
  const [isExpanded, setIsExpanded] = useState(depth <= 1);

  // Determine styling based on depth
  let nodeClasses = "rounded-2xl font-bold shadow-sm border transition-all relative flex items-center justify-between ";
  if (depth === 0) {
    nodeClasses += "bg-indigo-900 text-white border-indigo-800 text-lg px-8 py-5";
  } else if (depth === 1) {
    nodeClasses += "bg-indigo-50 text-indigo-900 border-indigo-200 text-base px-6 py-4 hover:border-indigo-400";
  } else {
    nodeClasses += "bg-white text-gray-700 border-gray-200 text-sm px-5 py-3 hover:border-indigo-300";
  }

  return (
    <div className="flex items-start">
      {/* Node Itself */}
      <div className="relative group flex items-center py-2">
        <button
          onClick={() => hasChildren && setIsExpanded(!isExpanded)}
          className={`${nodeClasses} ${hasChildren ? 'cursor-pointer' : 'cursor-default'} z-10 w-full md:w-auto text-left`}
        >
          <span>{node.label}</span>

          {hasChildren && (
            <span className={`ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors text-xs font-black ${depth === 0 ? 'bg-indigo-800 text-white' : 'bg-white border border-indigo-100 text-indigo-500'
              }`}>
              {isExpanded ? '-' : '+'}
            </span>
          )}
        </button>

        {/* Horizontal Connector pointing to children (if expanded) */}
        {hasChildren && isExpanded && (
          <div className="w-8 h-px bg-indigo-200 absolute right-[-2rem] top-1/2" />
        )}
      </div>

      {/* Children Container (Vertical Stack with connecting border) */}
      {hasChildren && isExpanded && (
        <div className="flex flex-col ml-8 pl-8 border-l-2 border-indigo-100 relative py-2 gap-4">
          {node.children.map((child: any, index: number) => (
            <div key={child.id} className="relative">
              {/* Horizontal line from the vertical border to the child node */}
              <div className="absolute w-8 h-px bg-indigo-200 -left-8 top-1/2" />
              <MindMapNodeView node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
