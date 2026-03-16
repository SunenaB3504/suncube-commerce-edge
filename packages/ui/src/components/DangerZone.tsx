import React from 'react';
import { AlertCircle } from 'lucide-react';

interface DangerZoneProps {
  title: string;
  content: string;
  advice?: string;
}

export function DangerZone({ title, content, advice }: DangerZoneProps) {
  return (
    <div className="p-6 bg-orange-50 rounded-2xl border-2 border-orange-200 shadow-sm animate-in fade-in slide-in-from-bottom-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-orange-100 p-2 rounded-full text-orange-600">
          <AlertCircle size={24} />
        </div>
        <h3 className="text-xl font-bold text-orange-900">{title}</h3>
      </div>
      <p className="text-orange-800 font-medium mb-4 leading-relaxed">
        {content}
      </p>
      {advice && (
        <div className="bg-white/60 p-4 rounded-xl border border-orange-100">
          <p className="text-xs font-black text-orange-400 uppercase tracking-wider mb-1">Hacker Advice</p>
          <p className="text-orange-950 font-bold italic">"{advice}"</p>
        </div>
      )}
    </div>
  );
}
