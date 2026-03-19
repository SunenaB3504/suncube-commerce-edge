import React, { useState, useEffect, useTransition } from 'react';
import { WritingSkeleton } from '../types';
import { Layout, PenTool, Sparkles, ArrowLeft, ArrowRight, ShieldCheck, Volume2, VolumeX, Activity, Star, Award } from 'lucide-react';
import { SuncubeWritingBox } from './SuncubeWritingBox';

interface Props {
  skeleton: WritingSkeleton;
  onBack: () => void;
}

export function WritingView({ skeleton, onBack }: Props) {
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = (text: string, idx: number) => {
    if (speakingIdx === idx) {
      window.speechSynthesis.cancel();
      startTransition(() => {
        setSpeakingIdx(null);
      });
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        startTransition(() => {
          setSpeakingIdx(null);
        });
      };
      window.speechSynthesis.speak(utterance);
      startTransition(() => {
        setSpeakingIdx(idx);
      });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <title>{`${skeleton.id.replace('-', ' ').toUpperCase()} | Writing Authority`}</title>
      <meta name="description" content={`Standard format and examples for ${skeleton.id.replace('-', ' ')}`} />
      
      <button
        onClick={onBack}
        className="mb-10 flex items-center gap-3 text-brand-amber font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group"
      >
        <div className="p-2 bg-brand-amber/10 rounded-lg group-hover:bg-brand-amber group-hover:text-brand-slate transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </div>
        Back to Library
      </button>

      <header className="mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
           <PenTool size={300} className="text-brand-amber" />
        </div>
        
        <div className="flex items-center gap-6 mb-10 relative z-10">
          <div className="p-5 bg-brand-amber text-brand-slate rounded-[2rem] shadow-glow-amber ring-4 ring-brand-amber/10 transform -rotate-3 group-hover:rotate-0 transition-transform">
            <PenTool size={40} />
          </div>
          <div>
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase leading-none">{skeleton.id.replace('-', ' ')}</h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-2 bg-brand-emerald/10 text-brand-emerald px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border border-brand-emerald/20 shadow-lg shadow-emerald-500/10">
                <ShieldCheck size={14} /> Writing Authority v2.0
              </div>
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">ID: {skeleton.id.toUpperCase()}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-brand-amber opacity-0 group-hover:opacity-[0.02] transition-opacity" />
          <p className="text-[10px] font-black text-brand-amber uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-amber shadow-glow-amber" /> Standard Format Blueprint
          </p>
          <div className="text-2xl font-black text-white font-mono tracking-tight bg-brand-slate/50 p-6 rounded-2xl border border-white/5 shadow-inner leading-relaxed">
            {skeleton.format}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Blueprint Flow */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-white/5 backdrop-blur-3xl rounded-[3.5rem] p-12 border border-white/10 shadow-2xl overflow-hidden relative group">
            <div className="absolute -right-20 -top-20 opacity-[0.02] rotate-12 pointer-events-none text-white group-hover:opacity-[0.06] transition-opacity duration-1000">
              <Layout size={500} />
            </div>
            
            <h2 className="text-4xl font-black text-white mb-16 flex items-center gap-4 uppercase tracking-tighter relative z-10">
              <div className="p-3 bg-brand-amber/10 rounded-2xl text-brand-amber shadow-glow-amber">
                <Layout className="w-8 h-8" />
              </div>
              Structure Protocol
            </h2>
            
            <div className="space-y-16 relative z-10">
              {skeleton.blueprint.map((step, idx) => (
                <div key={idx} className="relative pl-16 group/step">
                  {idx !== skeleton.blueprint.length - 1 && (
                  <div className="absolute left-[1.85rem] top-14 bottom-[-4rem] w-1 bg-gradient-to-b from-brand-amber/30 to-transparent" />
                  )}
                  <div className="absolute left-0 top-0 h-14 w-14 bg-brand-slate border-2 border-brand-amber/30 rounded-2xl flex items-center justify-center font-black text-brand-amber text-xl shadow-[0_0_25px_rgba(251,191,36,0.15)] group-hover/step:scale-110 group-hover/step:border-brand-amber transition-all">
                    {idx + 1}
                  </div>
                  
                  <div className="space-y-6">
                    {step.section.startsWith('Example: ') ? (
                      <SuncubeWritingBox
                        type={step.section.startsWith('Example: ') ? 'Example' : undefined}
                        title={step.section}
                        content={step.content}
                        isSpeaking={speakingIdx === idx}
                        onSpeak={() => handleSpeak(`${step.section}. ${step.content}`, idx)}
                      />
                    ) : (
                      <div className="group/bubble">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover/step:text-brand-amber transition-colors">{step.section}</h3>
                          <button
                            onClick={() => handleSpeak(`${step.section}. ${step.content}`, idx)}
                            className={`p-3 rounded-xl transition-all shadow-xl ${speakingIdx === idx
                                ? 'bg-brand-amber text-brand-slate ring-4 ring-brand-amber/20 scale-110'
                                : 'bg-white/5 text-slate-500 hover:text-brand-amber hover:bg-brand-amber/10 opacity-0 group-hover/step:opacity-100'
                              }`}
                            title="Narration Hearing"
                          >
                            {speakingIdx === idx ? <VolumeX size={20} /> : <Volume2 size={20} />}
                          </button>
                        </div>
                        <div className="bg-brand-slate/50 p-8 rounded-[2rem] border border-white/5 shadow-inner group-hover/bubble:border-brand-amber/20 transition-all">
                           <p className="text-slate-300 text-lg font-bold leading-relaxed italic">
                             "{step.content}"
                           </p>
                        </div>
                      </div>
                    )}
                    
                    {step.keyPhrases.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {step.keyPhrases.map((phrase, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-3 px-5 py-2.5 bg-brand-slate/60 border border-white/5 rounded-xl text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg group/phrase hover:border-brand-amber/40 transition-all cursor-default">
                            <Star size={12} className="text-brand-amber/40 group-hover/phrase:fill-brand-amber group-hover/phrase:scale-125 transition-all" />
                            {phrase}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          <section className="bg-gradient-to-br from-brand-slate to-indigo-950/40 rounded-[3rem] p-10 text-white border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700">
              <Sparkles size={150} className="text-brand-amber" />
            </div>
            
            <h3 className="text-sm font-black flex items-center gap-3 mb-10 uppercase tracking-[0.3em] text-brand-amber border-b border-white/5 pb-4 relative z-10">
              <div className="p-2 bg-brand-amber/10 rounded-lg shadow-glow-amber">
                <Sparkles size={16} />
              </div>
              Vocabulary Upgrades
            </h3>
            
            <div className="space-y-8 relative z-10">
              {skeleton.vocabularyUpgrades.map((item, i) => (
                <div key={i} className="group/vocab">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                       <div className="w-1 h-1 rounded-full bg-slate-700" /> Base Level
                    </span>
                    <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest flex items-center gap-2">
                       <Award size={10} className="text-brand-amber" /> Advanced
                    </span>
                  </div>
                  <div className="flex items-center gap-4 group/row">
                    <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-400 line-through decoration-brand-amber/40 transition-all group-hover/vocab:bg-white/10">
                      {item.basic}
                    </div>
                    <div className="p-2 bg-brand-amber/10 rounded-lg group-hover/row:scale-125 transition-transform">
                       <ArrowRight size={14} className="text-brand-amber" />
                    </div>
                    <div className="flex-1 bg-brand-amber/10 p-4 rounded-xl border border-brand-amber/20 text-[10px] font-black uppercase tracking-widest text-brand-amber shadow-glow-amber/5 group-hover/vocab:bg-brand-amber group-hover/vocab:text-brand-slate transition-all">
                      {item.advanced}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/5 shadow-2xl group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity">
               <ShieldCheck size={120} className="text-brand-emerald" />
            </div>
            
            <h3 className="text-sm font-black text-white mb-10 flex items-center gap-3 uppercase tracking-[0.3em] border-b border-white/5 pb-4 relative z-10">
              <div className="p-2 bg-brand-emerald/10 rounded-lg shadow-glow-emerald">
                <ShieldCheck size={16} className="text-brand-emerald" />
              </div>
              Scoring Audit
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="p-6 bg-brand-emerald/5 rounded-2xl border border-brand-emerald/10 hover:border-brand-emerald/40 transition-all group/audit">
                <p className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
                  <Activity size={12} /> Format Compliance
                </p>
                <p className="text-xs text-slate-300 font-bold leading-relaxed group-hover/audit:text-white transition-colors">Ensure all structural markers (dates, headings, signatures) are correctly aligned to the 2026 schema.</p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-amber/40 transition-all group/audit2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-3 flex items-center gap-2 group-hover/audit2:text-brand-amber transition-colors">
                  <Star size={12} className="text-brand-amber" /> Lexical Value
                </p>
                <p className="text-xs text-slate-400 font-bold leading-relaxed group-hover/audit2:text-slate-200 transition-colors">Integrated advanced vocabulary correlates directly to 'Expression' marks in the rubrics.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
