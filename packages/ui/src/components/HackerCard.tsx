import React from 'react';
import { Zap } from 'lucide-react';

interface HackerCardProps {
  id?: string;
  category?: string;
  title: string;
  description: string;
  points?: string[];
  advice: string;
  className?: string;
}

export function HackerCard({ 
  title, 
  description, 
  points = [], 
  advice, 
  className = '',
  category = 'Hacker Hack'
}: HackerCardProps) {
  return (
    <div className={`group relative bg-slate-900 border border-white/10 p-8 rounded-[2rem] overflow-hidden transition-all hover:border-brand-amber/50 hover:shadow-[0_0_50px_rgba(251,191,36,0.1)] backdrop-blur-xl ${className}`}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-full blur-[40px] group-hover:bg-brand-amber/10 transition-all"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] font-mono">{category}</span>
          <Zap className="w-4 h-4 text-brand-amber fill-brand-amber animate-pulse" />
        </div>
        
        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter leading-tight italic">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm font-bold leading-relaxed mb-6 uppercase tracking-tight">
          {description}
        </p>

        {points.length > 0 && (
          <ul className="space-y-3 mb-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-300 text-xs font-bold leading-relaxed uppercase tracking-widest">
                <span className="mt-1.5 h-1 w-3 rounded-full bg-brand-amber flex-shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>
        )}
        
        <div className="pt-6 border-t border-white/5 bg-white/2 p-4 -mx-8 -mb-8 mt-4 rounded-b-[2rem]">
          <div className="flex items-center gap-2 text-brand-emerald text-[10px] font-black uppercase tracking-[0.2em] mb-2">
            <Zap className="w-3 h-3 fill-brand-emerald" />
            Street-Smart Strategy
          </div>
          <p className="text-white font-black text-sm leading-relaxed uppercase tracking-tight italic">
            "{advice}"
          </p>
        </div>
      </div>
    </div>
  );
}
