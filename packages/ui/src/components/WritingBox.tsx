import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface WritingBoxProps {
  type?: 'Notice' | 'Letter' | 'Invite' | 'Example';
  title: string;
  content: string;
  isSpeaking?: boolean;
  onSpeak?: () => void;
}

export function WritingBox({ 
  type,
  title, 
  content, 
  isSpeaking, 
  onSpeak 
}: WritingBoxProps) {
  return (
    <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl transition-all hover:shadow-2xl hover:border-white/20">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          {type && (
            <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest bg-brand-amber/10 px-2 py-0.5 rounded-md border border-brand-amber/20">
              {type}
            </span>
          )}
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            {title}
          </h3>
        </div>
        {onSpeak && (
          <button
            onClick={onSpeak}
            className={`p-2 rounded-xl transition-all ${
              isSpeaking
                ? 'bg-brand-amber/20 text-brand-amber ring-2 ring-brand-amber/40 scale-110'
                : 'text-slate-400 hover:text-brand-slate hover:bg-slate-100'
            }`}
          >
            {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        )}
      </div>
      <p className="text-slate-300 font-medium leading-relaxed font-mono text-sm whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}
