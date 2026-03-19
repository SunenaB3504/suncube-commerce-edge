import React, { useState } from 'react';
import { Search, Brain, FileText, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Chapter } from '../types';
import { HackerCard } from '@suncube/ui';
import { ECONOMICS_HACKS } from '@suncube/shared-logic';

export const RevisionHQ: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'hacks' | 'mindmap' | 'flashcards' | 'cheatsheet'>('hacks');
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const curCard = chapter.flashcards[currentCardIdx];

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex gap-4 mb-8 bg-white/5 p-2 rounded-2xl border border-white/10 shadow-xl w-fit backdrop-blur-md">
        {[
          { id: 'hacks', label: 'Hacks', icon: Zap },
          { id: 'flashcards', label: 'Cards', icon: Brain },
          { id: 'mindmap', label: 'Flow', icon: Brain },
          { id: 'cheatsheet', label: 'Cram', icon: FileText },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-[0.1em] ${activeTab === tab.id ? 'bg-brand-amber text-slate-950 shadow-lg' : 'text-slate-400 hover:bg-white/5 hover:text-brand-amber'}`}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-slate-950 fill-slate-950' : ''}`} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[500px]">
        {activeTab === 'hacks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ECONOMICS_HACKS.map(hack => (
              <HackerCard key={hack.id} {...hack} />
            ))}
          </div>
        )}
        {activeTab === 'flashcards' && (
          <div className="flex flex-col items-center">
            <div className="w-full max-w-xl perspective-1000 mt-10">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`relative w-full h-[350px] transition-all duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white/5 rounded-[2.5rem] p-12 shadow-2xl border border-white/10 flex flex-col justify-center items-center text-center backdrop-blur-xl">
                  <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.4em] mb-6 block">Concept Inquiry</span>
                  <h3 className="text-2xl font-black text-white leading-tight italic uppercase tracking-tighter">"{curCard.question}"</h3>
                  <p className="mt-10 text-[10px] font-black text-slate-500 flex items-center gap-2 uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-brand-amber fill-brand-amber" /> Click to reveal answer
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-amber rounded-[2.5rem] p-12 shadow-2xl flex flex-col justify-center items-center text-center text-slate-950">
                  <CheckCircle2 className="w-12 h-12 text-slate-950 mb-6" />
                  <p className="text-xl font-black leading-relaxed uppercase tracking-tight">{curCard.answer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <button
                disabled={currentCardIdx === 0}
                onClick={() => { setCurrentCardIdx(i => i - 1); setIsFlipped(false); }}
                className="p-5 rounded-full bg-white/5 border border-white/10 text-brand-amber shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
                aria-label="Previous card"
              >
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <span className="text-xs font-black text-slate-500 tracking-[0.3em] uppercase">{currentCardIdx + 1} / {chapter.flashcards.length}</span>
              <button
                disabled={currentCardIdx === chapter.flashcards.length - 1}
                onClick={() => { setCurrentCardIdx(i => i + 1); setIsFlipped(false); }}
                className="p-5 rounded-full bg-white/5 border border-white/10 text-brand-amber shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
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
                    ? <strong key={k} className="text-brand-amber font-black">{part}</strong>
                    : <span key={k}>{part}</span>
                );
              };
              return (
                <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md">
                  <h5 className="text-xl font-black text-brand-amber mb-6 flex items-center gap-3 uppercase tracking-tighter">
                    <div className="h-3 w-3 rounded-full bg-brand-amber shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                    {section.title}
                  </h5>
                  {Array.isArray(section.points || section.content) ? (
                    <ul className="grid gap-4">
                      {((section.points || section.content) as string[]).map((point: string, j: number) => (
                        <li key={j} className="flex gap-4 text-sm font-bold text-slate-300 bg-white/5 p-5 rounded-2xl border border-white/10 group hover:border-brand-amber/30 transition-all">
                          <span className="text-brand-amber font-black mt-0.5 group-hover:translate-x-1 transition-transform">▸</span>
                          <span>{renderPoint(point)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm font-bold text-slate-300 bg-white/5 p-6 rounded-2xl border border-white/10 whitespace-pre-wrap leading-relaxed italic">
                      {section.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'mindmap' && (
          <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl flex overflow-x-auto min-h-[400px] backdrop-blur-md">
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
    nodeClasses += "bg-brand-amber text-slate-950 border-brand-amber shadow-[0_0_20px_rgba(251,191,36,0.2)] text-xl px-10 py-6 uppercase font-black tracking-tighter";
  } else if (depth === 1) {
    nodeClasses += "bg-white/10 text-brand-amber border-brand-amber/30 text-base px-6 py-4 hover:border-brand-amber hover:bg-white/20";
  } else {
    nodeClasses += "bg-white/5 text-slate-300 border-white/10 text-sm px-5 py-3 hover:border-brand-amber/50";
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
            <span className={`ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-colors text-[10px] font-black ${depth === 0 ? 'bg-slate-950 text-brand-amber' : 'bg-brand-amber text-slate-950'
              }`}>
              {isExpanded ? '−' : '+'}
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
              <div className="absolute w-8 h-px bg-brand-amber/20 -left-8 top-1/2" />
              <MindMapNodeView node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
