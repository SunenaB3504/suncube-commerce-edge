import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface WritingBoxProps {
  title: string;
  content: string;
  isSpeaking?: boolean;
  onSpeak?: () => void;
}

export function WritingBox({ 
  title, 
  content, 
  isSpeaking, 
  onSpeak 
}: WritingBoxProps) {
  return (
    <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border-2 border-brand-slate shadow-md transition-all hover:shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-black text-brand-slate uppercase tracking-tight">
          {title}
        </h3>
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
      <p className="text-slate-700 font-medium leading-relaxed font-mono text-sm whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
}
