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
    <div className="animate-in fade-in duration-1000">
      <div className="flex flex-wrap gap-4 mb-12 bg-white/5 p-2 rounded-[1.5rem] border border-white/10 shadow-2xl w-fit backdrop-blur-xl group">
        {[
          { id: 'hacks', label: 'Forensic Hacks', icon: Zap },
          { id: 'flashcards', label: 'Concept Cards', icon: Brain },
          { id: 'mindmap', label: 'Logic Flow', icon: Brain },
          { id: 'cheatsheet', label: 'Cram Sheet', icon: FileText },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl text-[10px] font-black transition-all uppercase tracking-[0.2em] relative overflow-hidden group/tab ${activeTab === tab.id ? 'bg-brand-amber text-brand-slate shadow-glow-amber' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}
          >
            <tab.icon size={16} className={`${activeTab === tab.id ? 'fill-current' : ''}`} />
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
            )}
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
          <div className="flex flex-col items-center py-10">
            <div className="w-full max-w-xl perspective-2000">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`relative w-full h-[400px] transition-all duration-700 preserve-3d cursor-pointer group/card ${isFlipped ? 'rotate-y-180' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-white/5 rounded-[3.5rem] p-12 shadow-2xl border border-white/10 flex flex-col justify-center items-center text-center backdrop-blur-3xl group-hover/card:border-brand-amber/30 transition-all">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover/card:opacity-[0.05] transition-opacity">
                     <Brain size={150} className="text-brand-amber" />
                  </div>
                  <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.4em] mb-10 block relative z-10 border border-brand-amber/20 px-4 py-2 rounded-full bg-brand-amber/5">Concept Inquiry</span>
                  <h3 className="text-3xl font-black text-white leading-tight italic uppercase tracking-tighter relative z-10 opacity-90 group-hover/card:opacity-100 transition-opacity">"{curCard.question}"</h3>
                  <div className="mt-12 flex items-center gap-3 relative z-10">
                    <div className="h-px w-8 bg-white/10" />
                    <p className="text-[10px] font-black text-slate-500 flex items-center gap-2 uppercase tracking-[0.2em] group-hover/card:text-brand-amber transition-colors">
                      <Zap className="w-4 h-4 fill-current" /> Tap to reveal answer
                    </p>
                    <div className="h-px w-8 bg-white/10" />
                  </div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-brand-amber rounded-[3.5rem] p-12 shadow-glow-amber/20 flex flex-col justify-center items-center text-center text-brand-slate overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                  <div className="p-4 bg-brand-slate/10 rounded-2xl mb-8 relative z-10">
                    <CheckCircle2 className="w-12 h-12 text-brand-slate" />
                  </div>
                  <p className="text-2xl font-black leading-tight uppercase tracking-tight relative z-10 max-w-sm">{curCard.answer}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-12 mt-16 bg-white/5 p-4 rounded-3xl border border-white/5 backdrop-blur-xl">
              <button
                disabled={currentCardIdx === 0}
                onClick={() => { setCurrentCardIdx(i => i - 1); setIsFlipped(false); }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-brand-amber shadow-2xl disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-amber hover:text-brand-slate transition-all group"
                aria-label="Previous card"
              >
                <ChevronRight className="w-6 h-6 rotate-180 group-active:-translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-col items-center gap-1">
                 <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase">Progression</span>
                 <span className="text-xl font-black text-white tabular-nums">{currentCardIdx + 1} <span className="text-slate-700 mx-1">/</span> {chapter.flashcards.length}</span>
              </div>
              <button
                disabled={currentCardIdx === chapter.flashcards.length - 1}
                onClick={() => { setCurrentCardIdx(i => i + 1); setIsFlipped(false); }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-brand-amber shadow-2xl disabled:opacity-20 disabled:cursor-not-allowed hover:bg-brand-amber hover:text-brand-slate transition-all group"
                aria-label="Next card"
              >
                <ChevronRight className="w-6 h-6 group-active:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'cheatsheet' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-3xl group/section hover:border-brand-amber/20 transition-all duration-500 flex flex-col">
                  <h5 className="text-2xl font-black text-white mb-8 flex items-center justify-between uppercase tracking-tighter">
                    {section.title}
                    <div className="h-3 w-3 rounded-full bg-brand-amber shadow-glow-amber animate-pulse" />
                  </h5>
                  {Array.isArray(section.points || section.content) ? (
                    <ul className="grid gap-4 flex-1">
                      {((section.points || section.content) as string[]).map((point: string, j: number) => (
                        <li key={j} className="flex gap-4 text-sm font-bold text-slate-400 bg-white/[0.03] p-6 rounded-2xl border border-white/5 group/point hover:border-brand-emerald/30 hover:bg-white/5 transition-all">
                          <span className="text-brand-emerald font-black mt-0.5 group-hover/point:translate-x-1 transition-transform">▸</span>
                          <span className="group-hover/point:text-slate-200 transition-colors">{renderPoint(point)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm font-bold text-slate-400 bg-white/[0.03] p-8 rounded-2xl border border-white/5 whitespace-pre-wrap leading-relaxed italic opacity-80 group-hover/section:opacity-100 transition-opacity">
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
  let nodeClasses = "rounded-[1.25rem] font-black shadow-2xl border transition-all duration-500 relative flex items-center justify-between group/node ";
  if (depth === 0) {
    nodeClasses += "bg-brand-amber text-brand-slate border-brand-amber shadow-glow-amber text-xl px-12 py-8 uppercase tracking-tighter hover:scale-105 active:scale-95";
  } else if (depth === 1) {
    nodeClasses += "bg-white/10 text-brand-amber border-brand-amber/30 text-[10px] px-8 py-5 uppercase tracking-widest hover:border-brand-amber hover:bg-brand-amber/10 hover:-translate-y-1 shadow-glow-amber/5";
  } else {
    nodeClasses += "bg-white/5 text-slate-400 border-white/5 text-[10px] px-6 py-4 uppercase tracking-[0.2em] hover:border-brand-emerald/40 hover:text-white hover:bg-white/10";
  }

  return (
    <div className="flex items-start transition-all animate-in fade-in slide-in-from-left-4 duration-500">
      {/* Node Itself */}
      <div className="relative flex items-center py-4">
        <button
          onClick={() => hasChildren && setIsExpanded(!isExpanded)}
          className={`${nodeClasses} ${hasChildren ? 'cursor-pointer' : 'cursor-default'} z-10 w-full md:w-auto text-left`}
        >
          <span>{node.label}</span>

          {hasChildren && (
            <span className={`ml-6 w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-500 text-[10px] font-black shadow-2xl ${depth === 0 ? 'bg-brand-slate text-brand-amber group-hover/node:rotate-90' : 'bg-brand-amber text-brand-slate group-hover/node:rotate-90'
              }`}>
              {isExpanded ? '−' : '+'}
            </span>
          )}
        </button>

        {/* Horizontal Connector pointing to children (if expanded) */}
        {hasChildren && isExpanded && (
          <div className="w-12 h-px bg-brand-emerald/20 absolute right-[-3rem] top-1/2 animate-in fade-in zoom-in duration-700" />
        )}
      </div>

      {/* Children Container (Vertical Stack with connecting border) */}
      {hasChildren && isExpanded && (
        <div className="flex flex-col ml-12 pl-12 border-l border-brand-emerald/10 relative py-4 gap-6">
          {node.children.map((child: any, index: number) => (
            <div key={child.id} className="relative">
              {/* Horizontal line from the vertical border to the child node */}
              <div className="absolute w-12 h-px bg-brand-emerald/20 -left-12 top-1/2" />
              <MindMapNodeView node={child} depth={depth + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
