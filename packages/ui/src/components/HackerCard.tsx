import React from 'react';
import { Zap } from 'lucide-react';

interface HackerCardProps {
  title: string;
  points: string[];
  hackerAdvice: string;
  className?: string;
}

export function HackerCard({ title, points, hackerAdvice, className = '' }: HackerCardProps) {
  return (
    <div className={`group relative bg-brand-slate/50 border border-white/10 p-6 rounded-2xl overflow-hidden transition-all hover:border-brand-emerald/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] ${className}`}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 rounded-full blur-[40px] group-hover:bg-brand-emerald/10 transition-all"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
          {title}
        </h3>
        
        <ul className="space-y-3 mb-6">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-emerald flex-shrink-0"></span>
              {point}
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-brand-emerald text-xs font-black uppercase tracking-widest mb-1">
            <Zap className="w-3 h-3 fill-brand-emerald" />
            Hacker Advice
          </div>
          <p className="text-white font-mono text-sm leading-relaxed">
            {hackerAdvice}
          </p>
        </div>
      </div>
    </div>
  );
}
