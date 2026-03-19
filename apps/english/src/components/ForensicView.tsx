import React, { useState, useEffect, useTransition } from 'react';
import { ChapterForensics, PoetryForensics } from '../types';
import { Book, Shield, Zap, Info, ArrowLeft, Terminal, FileText, User, MapPin, Feather, Target, Split, Music, Sparkles, Volume2, VolumeX, Activity, Award, CheckCircle, BrainCircuit, Star } from 'lucide-react';

interface Props {
  content: ChapterForensics | PoetryForensics;
  onBack: () => void;
}

export function ForensicView({ content, onBack }: Props) {
  const isPoetry = 'stanzaBreakdown' in content;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      startTransition(() => {
        setIsSpeaking(false);
      });
    } else {
      const utterance = new SpeechSynthesisUtterance(content.summary);
      utterance.onend = () => {
        startTransition(() => {
          setIsSpeaking(false);
        });
      };
      window.speechSynthesis.speak(utterance);
      startTransition(() => {
        setIsSpeaking(true);
      });
    }
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <title>{`${content.title} | Literature Forensics`}</title>
      <meta name="description" content={content.summary} />
      <meta name="keywords" content={`${content.themes.join(', ')}, ${content.author}, CBSE English XII`} />
      
      <button
        onClick={onBack}
        className="mb-10 flex items-center gap-3 text-brand-emerald font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group"
      >
        <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:bg-brand-emerald group-hover:text-brand-slate transition-colors">
          <ArrowLeft className="h-4 w-4" />
        </div>
        Back to Library
      </button>

      <header className="mb-16 border-b border-white/5 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
           <Activity size={300} className="text-brand-emerald" />
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
          <div className="flex-1">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tighter leading-none">{content.title}</h1>
            <p className="text-2xl text-brand-emerald font-black uppercase tracking-widest mb-8 opacity-80 italic">Audit by {content.author}</p>
            
            <div className="max-w-4xl p-8 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border-l-8 border-brand-emerald shadow-2xl relative group/summary overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText size={48} />
              </div>
              <button
                onClick={handleSpeak}
                className="absolute top-6 right-6 p-3 rounded-xl bg-white/5 text-brand-emerald hover:bg-brand-emerald hover:text-brand-slate transition-all shadow-xl"
                title={isSpeaking ? "Stop Narration" : "Listen to Summary"}
              >
                {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <p className="text-slate-300 text-lg leading-relaxed italic font-medium pr-12">"{content.summary}"</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="px-5 py-2.5 bg-brand-emerald text-brand-slate rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-glow-emerald">
              Master Verified
            </div>
            <div className="px-5 py-2.5 bg-white/5 border border-white/10 text-brand-amber rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
              {content.narrativeVoice}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-brand-emerald/20 transition-all group">
            <div className="p-4 bg-brand-emerald/10 text-brand-emerald rounded-2xl group-hover:bg-brand-emerald group-hover:text-brand-slate transition-colors">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Setting</p>
              <p className="text-base font-bold text-white tracking-tight">{content.setting}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-brand-amber/20 transition-all group">
            <div className="p-4 bg-brand-amber/10 text-brand-amber rounded-2xl group-hover:bg-brand-amber group-hover:text-brand-slate transition-colors">
              <Feather size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Author Style</p>
              <p className="text-base font-bold text-white tracking-tight">{content.authorStyle}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5 hover:border-brand-emerald/20 transition-all group">
            <div className="p-4 bg-brand-emerald/10 text-brand-emerald rounded-2xl group-hover:bg-brand-emerald group-hover:text-brand-slate transition-colors">
              <Target size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Key Themes</p>
              <p className="text-base font-bold text-white tracking-tight">{content.themes.length} Universal Pillars</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content Areas */}
        <div className="lg:col-span-3 space-y-16">

          {/* Poetry Specific: Rhyme Scheme & Poetic Devices */}
          {isPoetry && (
            <section className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                 <Sparkles size={120} className="text-brand-emerald" />
              </div>
              
              <div className="flex justify-between items-center mb-10 relative z-10">
                <h2 className="text-3xl font-black flex items-center gap-4 text-white uppercase tracking-tighter">
                   <div className="p-3 bg-brand-emerald/10 rounded-2xl">
                    <Sparkles className="text-brand-emerald w-6 h-6" />
                   </div>
                   Poetic Devices
                </h2>
                <div className="px-5 py-2.5 bg-brand-emerald text-brand-slate rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  Scheme: {content.rhymeScheme}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {content.poeticDevices.map((device, i) => (
                  <div key={i} className="p-8 bg-brand-slate/50 rounded-3xl border border-white/5 group/device hover:border-brand-emerald/40 transition-all hover:bg-brand-emerald/5">
                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                      <span className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.2em]">{device.device}</span>
                      <Zap size={14} className="text-slate-700 group-hover/device:text-brand-amber transition-colors" />
                    </div>
                    <p className="text-lg font-black text-white mb-4 italic leading-tight group-hover/device:text-brand-emerald transition-colors">"{device.line}"</p>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed italic">{device.explanation}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stanza Breakdown (Poetry) or Milestones (Prose) */}
          <section className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
               {isPoetry ? <Music size={120} className="text-brand-amber" /> : <Book size={120} className="text-brand-amber" />}
            </div>
            
            <h2 className="text-3xl font-black flex items-center gap-4 mb-12 text-white uppercase tracking-tighter relative z-10">
              <div className="p-3 bg-brand-amber/10 rounded-2xl text-brand-amber">
                {isPoetry ? <Music className="w-6 h-6" /> : <Book className="w-6 h-6" />}
              </div>
              {isPoetry ? "Stanza Blueprint" : "Narrative Blueprint"}
            </h2>
            
            <div className="space-y-8 relative z-10">
              {isPoetry ? (
                content.stanzaBreakdown.map((s, i) => (
                  <div key={i} className="flex gap-8 items-start group/stanza">
                    <div className="h-16 w-16 shrink-0 bg-brand-amber text-brand-slate rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-xl shadow-amber-500/10 transition-transform group-hover/stanza:scale-110">
                      {s.stanza}
                    </div>
                    <div className="border-b border-white/5 pb-8 w-full group-hover/stanza:border-brand-amber/30 transition-colors">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.23em]">Section Summary</span>
                        <div className="flex items-center gap-2 px-3 py-1 bg-brand-amber/10 rounded-lg border border-brand-amber/20">
                           <Activity size={10} className="text-brand-amber" />
                           <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest">Tone: {s.tone}</span>
                        </div>
                      </div>
                      <p className="text-slate-200 text-lg font-bold leading-relaxed">{s.summary}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {content.milestones.map((m, i) => (
                    <div key={i} className="flex gap-6 group/mile relative">
                      <div className="font-black text-brand-emerald opacity-10 text-6xl tabular-nums leading-none absolute -left-8 -top-4 pointer-events-none transition-opacity group-hover/mile:opacity-20">{ (i + 1).toString().padStart(2, '0') }</div>
                      <div className="relative z-10 pl-4 border-l-2 border-brand-emerald/20 group-hover/mile:border-brand-emerald transition-colors">
                        <span className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em] mb-2 block">{m.time}</span>
                        <p className="text-white font-black leading-tight text-sm tracking-widest group-hover:text-brand-emerald transition-colors uppercase">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* SECTION 2: Character Trajectory */}
          {content.characters.length > 0 && (
            <section>
              <h2 className="text-3xl font-black flex items-center gap-4 mb-10 text-white uppercase tracking-tighter">
                <div className="p-3 bg-brand-emerald/10 rounded-2xl text-brand-emerald">
                  <User className="w-6 h-6" />
                </div>
                Character Trajectory
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.characters.map((char, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-emerald/40 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.06] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                      <User size={150} />
                    </div>
                    <div className="flex items-center gap-3 mb-8 bg-brand-emerald/10 w-fit px-4 py-1.5 rounded-full border border-brand-emerald/20">
                      <Shield size={14} className="text-brand-emerald" />
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-emerald">Profile Verified</span>
                    </div>
                    <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">{char.name}</h3>
                    <div className="space-y-8">
                      <div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 block">Defining Traits</span>
                        <div className="flex flex-wrap gap-2">
                          {char.traits.map((t, idx) => (
                            <span key={idx} className="px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-lg border border-brand-emerald/20 uppercase tracking-widest">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 block">Internal Conflict</span>
                        <p className="text-base text-slate-200 font-bold leading-relaxed">{char.conflict}</p>
                      </div>
                      <div className="bg-brand-slate/50 p-6 rounded-2xl border border-white/5 shadow-inner">
                        <span className="text-[10px] font-black text-brand-amber uppercase tracking-[0.2em] mb-2 block opacity-60 flex items-center gap-2">
                           <Activity size={12} /> Growth Pathway
                        </span>
                        <p className="text-sm text-slate-300 italic font-medium leading-relaxed">"{char.growth}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 6: Flashcard Literary Audit (If exists) */}
          {content.distinctions && (
            <section className="bg-gradient-to-br from-brand-slate to-emerald-950 p-12 rounded-[3.5rem] text-white shadow-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-emerald opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000" />
              <h2 className="text-3xl font-black flex items-center gap-4 mb-16 relative z-10 uppercase tracking-tighter">
                <div className="p-3 bg-brand-amber/10 rounded-2xl text-brand-amber">
                  <Split className="w-6 h-6" />
                </div>
                Literary Distinctions
              </h2>
              
              <div className="space-y-16 relative z-10">
                {content.distinctions.map((dist, i) => (
                  <div key={i} className="space-y-8">
                    <h3 className="text-2xl font-black text-brand-amber border-l-4 border-brand-amber pl-6 tracking-tight uppercase">{dist.title}</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center font-black text-[10px] uppercase tracking-[0.3em] text-slate-500 py-3 border-b border-white/5">
                        {dist.comparison.labelA}
                      </div>
                      <div className="text-center font-black text-[10px] uppercase tracking-[0.3em] text-brand-amber/60 py-3 border-b border-white/5">
                        {dist.comparison.labelB}
                      </div>
                      {dist.comparison.points.map((p, idx) => (
                        <React.Fragment key={idx}>
                          <div className="bg-white/5 p-6 rounded-2xl text-sm font-bold leading-relaxed border border-white/5 hover:bg-white/10 transition-colors uppercase tracking-tight">{p.a}</div>
                          <div className="bg-brand-amber/5 p-6 rounded-2xl text-sm font-bold leading-relaxed border border-brand-amber/10 hover:bg-brand-amber/10 transition-colors uppercase tracking-tight text-brand-amber/90">{p.b}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 5: SQP Triggers */}
          <section className="bg-white/5 backdrop-blur-3xl rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden group border border-white/10">
             <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-1000">
               <Terminal size={180} />
             </div>
            
            <h3 className="text-4xl font-black flex items-center gap-4 mb-16 text-white uppercase tracking-tighter relative z-10">
              <div className="p-3 bg-brand-amber/10 rounded-2xl text-brand-amber shadow-glow-amber">
                <Zap className="fill-brand-amber w-8 h-8" />
              </div>
              SQP Board Triggers
            </h3>
            
            <div className="space-y-16 relative z-10">
              {content.triggers.map((trigger, i) => (
                <div key={i} className="border-l-4 border-brand-emerald pl-10 py-2 relative group/trigger">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="bg-brand-emerald text-brand-slate px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20">{trigger.year}</span>
                    <span className="bg-brand-amber text-brand-slate px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20">{trigger.marks} Mark{trigger.marks > 1 ? 's' : ''}</span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                       <Activity size={12} className="text-brand-emerald" />
                       <span className="text-slate-500 text-[10px] font-black tracking-widest uppercase">{trigger.type} Analysis</span>
                    </div>
                  </div>
                  
                  <p className="text-white font-black mb-10 text-3xl md:text-4xl leading-[1.1] tracking-tighter group-hover/trigger:text-emerald-50 transition-colors">"Q: {trigger.question}"</p>

                  <div className="grid gap-6">
                    <div className="bg-brand-emerald/5 p-8 rounded-3xl border border-brand-emerald/20 hover:border-brand-emerald/40 transition-all">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-brand-emerald/20 rounded-lg">
                           <Award size={18} className="text-brand-emerald" />
                         </div>
                         <p className="text-brand-emerald text-[10px] font-black uppercase tracking-[0.3em]">
                            Marking Scheme <span className="text-slate-500 font-medium tracking-normal">(Verbatim)</span>
                         </p>
                      </div>
                      <p className="text-slate-200 text-lg leading-relaxed mb-8 font-bold whitespace-pre-wrap">"{trigger.answerVerbatim}"</p>
                      <div className="flex flex-wrap gap-3">
                        {trigger.markingSchemePoints.map((p, idx) => (
                          <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-brand-emerald/10 text-brand-emerald text-[10px] font-black rounded-xl border border-brand-emerald/20 uppercase tracking-widest hover:bg-brand-emerald hover:text-brand-slate transition-all group/chip">
                            <CheckCircle size={12} />
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-amber/5 p-8 rounded-3xl border border-brand-amber/20 hover:border-brand-amber/40 transition-all group/ai">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-brand-amber/20 rounded-lg">
                           <BrainCircuit size={20} className="text-brand-amber" />
                         </div>
                         <p className="text-brand-amber text-[10px] font-black uppercase tracking-[0.3em]">
                            AI Logic Engine <span className="text-slate-600 font-medium tracking-normal">| Strategic Pathing</span>
                         </p>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed whitespace-pre-wrap italic font-medium">"{trigger.aiExplanation}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* SECTION 3: Universal Themes */}
          <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity">
               <Target size={120} className="text-brand-emerald" />
            </div>
            <h3 className="text-sm font-black flex items-center gap-3 mb-8 uppercase tracking-[0.3em] text-brand-emerald border-b border-white/5 pb-4 relative z-10">
              <div className="p-2 bg-brand-emerald/10 rounded-lg">
                <Target size={16} />
              </div>
              Universal Pillars
            </h3>
            <div className="space-y-5 relative z-10">
              {content.themes.map((theme, i) => (
                <div key={i} className="group/item flex items-start gap-4 hover:translate-x-1 transition-transform">
                  <div className="h-6 w-px bg-brand-emerald mt-1 group-hover/item:h-8 transition-all" />
                  <p className="text-sm font-black text-slate-300 leading-snug group-hover/item:text-white transition-colors uppercase tracking-tight">{theme}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Symbols */}
          {content.motifs.length > 0 && (
            <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity">
                 <Shield size={120} className="text-brand-amber" />
              </div>
              <h3 className="text-sm font-black flex items-center gap-3 mb-8 text-brand-amber uppercase tracking-[0.3em] border-b border-brand-amber/10 pb-4 relative z-10">
                <div className="p-2 bg-brand-amber/10 rounded-lg">
                   <Shield size={16} />
                </div>
                Symbolic Audit
              </h3>
              <div className="space-y-8 relative z-10">
                {content.motifs.map((motif, i) => (
                  <div key={i} className="group/motif">
                    <p className="font-black text-brand-amber text-[10px] mb-2 uppercase tracking-[0.2em] flex items-center gap-2 group-hover/motif:translate-x-1 transition-transform">
                       <Star size={10} className="fill-brand-amber" /> {motif.symbol}
                    </p>
                    <p className="text-xs text-slate-400 italic leading-relaxed group-hover/motif:text-slate-200 transition-colors">"{motif.meaning}"</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lexicon */}
          {content.dictionary.length > 0 && (
            <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity">
                 <Terminal size={120} className="text-brand-emerald" />
              </div>
              <h3 className="text-sm font-black flex items-center gap-3 mb-8 text-white uppercase tracking-[0.3em] border-b border-white/5 pb-4 relative z-10">
                <div className="p-2 bg-brand-emerald/10 rounded-lg">
                   <Terminal size={16} className="text-brand-emerald" />
                </div>
                Forensic Lexicon
              </h3>
              <div className="space-y-8 relative z-10">
                {content.dictionary.map((word, i) => (
                  <div key={i} className="group/word">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-black text-white text-base tracking-tighter group-hover/word:text-brand-emerald transition-colors uppercase">{word.word}</span>
                    </div>
                    <div className="bg-brand-slate/80 p-5 rounded-2xl border border-white/5 shadow-inner group-hover/word:border-brand-emerald/20 transition-all">
                      <p className="text-[10px] text-brand-emerald font-black mb-2 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald shadow-glow-emerald" /> Syn: {word.synonym}
                      </p>
                      <p className="text-xs text-slate-400 font-bold leading-relaxed italic group-hover/word:text-white transition-colors">"{word.context}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
