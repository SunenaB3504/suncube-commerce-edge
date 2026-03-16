import React, { useState, useEffect, useTransition } from 'react';
import { WritingSkeleton } from '../types';
import { Layout, PenTool, Sparkles, ArrowLeft, ArrowRight, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
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
        className="mb-8 flex items-center gap-2 text-royal-600 font-semibold hover:text-royal-800 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
      </button>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-royal-900 text-white rounded-2xl shadow-lg">
            <PenTool size={32} />
          </div>
          <div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase">{skeleton.id.replace('-', ' ')}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200">
                Writing Authority v2.0
              </span>
              <span className="text-slate-400 text-xs font-mono">ID: {skeleton.id.toUpperCase()}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-royal-500 uppercase tracking-widest mb-2">Standard Format Blueprint</p>
          <p className="text-xl font-bold text-slate-800 font-mono tracking-tight">{skeleton.format}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blueprint Flow */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl overflow-hidden relative">
            <div className="absolute -right-20 -top-20 opacity-[0.03] rotate-12 pointer-events-none">
              <Layout size={400} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <Layout className="text-royal-600" /> Structure Protocol
            </h2>
            <div className="space-y-12 relative">
              {skeleton.blueprint.map((step, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {idx !== skeleton.blueprint.length - 1 && (
                    <div className="absolute left-[1.125rem] top-10 bottom-[-2.5rem] w-0.5 bg-gradient-to-b from-royal-200 to-transparent" />
                  )}
                  <div className="absolute left-0 top-0 h-9 w-9 bg-royal-50 border-2 border-royal-200 rounded-xl flex items-center justify-center font-black text-royal-600 text-sm">
                    {idx + 1}
                  </div>
                  <div className="space-y-4">
                    {step.section.startsWith('Example: ') ? (
                      <SuncubeWritingBox
                        type="Example"
                        title={step.section}
                        content={step.content}
                        isSpeaking={speakingIdx === idx}
                        onSpeak={() => handleSpeak(`${step.section}. ${step.content}`, idx)}
                      />
                    ) : (
                      <>
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-black text-royal-900 uppercase tracking-tight">{step.section}</h3>
                          <button
                            onClick={() => handleSpeak(`${step.section}. ${step.content}`, idx)}
                            className={`p-2 rounded-xl transition-all ${speakingIdx === idx
                                ? 'bg-royal-100 text-royal-600 ring-2 ring-royal-200 scale-110'
                                : 'text-slate-400 hover:text-royal-600 hover:bg-royal-50 opacity-0 group-hover:opacity-100'
                              }`}
                            title="Narration Hearing"
                          >
                            {speakingIdx === idx ? <VolumeX size={18} /> : <Volume2 size={18} />}
                          </button>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl italic border border-slate-100">
                          {step.content}
                        </p>
                      </>
                    )}
                    {step.keyPhrases.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.keyPhrases.map((phrase, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-royal-100 rounded-xl text-royal-700 text-xs font-bold shadow-sm group hover:border-royal-400 transition-colors cursor-default">
                            <ArrowRight size={12} className="text-royal-300 group-hover:translate-x-1 transition-transform" />
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

        {/* Vocabulary Upgrades */}

        {/* Vocabulary Upgrades */}
        <div className="space-y-8">
          <section className="bg-gradient-to-br from-royal-900 to-indigo-950 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles size={100} />
            </div>
            <h3 className="text-xl font-black flex items-center gap-2 mb-8 uppercase tracking-widest italic">
              <Sparkles className="text-amber-400" /> Vocabulary Upgrades
            </h3>
            <div className="space-y-6">
              {skeleton.vocabularyUpgrades.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-royal-400 uppercase tracking-widest">Base Level</span>
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Advanced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/5 p-3 rounded-xl border border-white/10 text-xs font-medium line-through decoration-royal-500/50">
                      {item.basic}
                    </div>
                    <ArrowRight size={16} className="text-royal-500 shrink-0" />
                    <div className="flex-1 bg-royal-400/10 p-3 rounded-xl border border-royal-400/20 text-xs font-black text-royal-200 group-hover:bg-royal-400/20 transition-all">
                      {item.advanced}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 border-2 border-slate-100 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
              <ShieldCheck className="text-emerald-500" /> Scoring Audit
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-800 uppercase mb-1">Format Compliance</p>
                <p className="text-xs text-emerald-700 font-medium leading-relaxed">Ensure all structural markers (dates, headings, signatures) are correctly aligned to the 2026 schema.</p>
              </div>
              <div className="p-4 bg-royal-50 rounded-2xl border border-royal-100">
                <p className="text-[10px] font-black text-royal-800 uppercase mb-1">Lexical Value</p>
                <p className="text-xs text-royal-700 font-medium leading-relaxed">Integrated advanced vocabulary correlates directly to 'Expression' marks in the rubrics.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
