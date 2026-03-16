import React, { useState, useEffect, useTransition } from 'react';
import { ChapterForensics, PoetryForensics } from '../types';
import { Book, Shield, Zap, Info, ArrowLeft, Terminal, FileText, User, MapPin, Feather, Target, Split, Music, Sparkles, Volume2, VolumeX } from 'lucide-react';

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
        className="mb-8 flex items-center gap-2 text-royal-600 font-semibold hover:text-royal-800 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
      </button>

      <header className="mb-12 border-b border-royal-100 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-2 tracking-tight">{content.title}</h1>
            <p className="text-xl text-royal-600 font-medium mb-4">by {content.author}</p>
            <div className="max-w-4xl p-6 bg-white rounded-2xl border-l-4 border-royal-600 shadow-sm relative group/summary">
              <button
                onClick={handleSpeak}
                className="absolute top-4 right-4 p-2 rounded-full bg-royal-50 text-royal-600 opacity-0 group-hover/summary:opacity-100 transition-opacity hover:bg-royal-600 hover:text-white"
                title={isSpeaking ? "Stop Narration" : "Listen to Summary"}
              >
                {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <p className="text-slate-600 text-sm leading-relaxed italic font-medium pr-8">"{content.summary}"</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-royal-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Master Verified
            </span>
            <span className="bg-amber-100 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              {content.narrativeVoice}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Setting</p>
              <p className="text-sm font-bold text-slate-700">{content.setting}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-royal-50 text-royal-600 rounded-xl">
              <Feather size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Author Style</p>
              <p className="text-sm font-bold text-slate-700">{content.authorStyle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Target size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Key Themes</p>
              <p className="text-sm font-bold text-slate-700">{content.themes.length} Universal Pillars</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content Areas */}
        <div className="lg:col-span-3 space-y-12">

          {/* Poetry Specific: Rhyme Scheme & Poetic Devices */}
          {isPoetry && (
            <section className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black flex items-center gap-3 text-slate-900">
                  <Sparkles className="text-royal-600" /> Poetic Devices
                </h2>
                <span className="px-4 py-2 bg-royal-900 text-white rounded-xl text-xs font-black uppercase tracking-widest">
                  Rhyme: {content.rhymeScheme}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.poeticDevices.map((device, i) => (
                  <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-royal-300 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-royal-600 uppercase tracking-widest">{device.device}</span>
                      <Zap size={14} className="text-slate-200 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <p className="text-sm font-black text-slate-800 mb-2 italic">"{device.line}"</p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{device.explanation}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stanza Breakdown (Poetry) or Milestones (Prose) */}
          <section className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-black flex items-center gap-3 mb-8 text-slate-900">
              {isPoetry ? <Music className="text-royal-600" /> : <Book className="text-royal-600" />}
              {isPoetry ? "Stanza Blueprint" : "Narrative Blueprint"}
            </h2>
            <div className="space-y-6">
              {isPoetry ? (
                content.stanzaBreakdown.map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="h-10 w-10 shrink-0 bg-royal-100 text-royal-600 rounded-full flex items-center justify-center font-black">
                      {s.stanza}
                    </div>
                    <div className="border-b border-slate-100 pb-6 w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-royal-500 uppercase tracking-widest">Summary</span>
                        <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded">Tone: {s.tone}</span>
                      </div>
                      <p className="text-slate-700 font-bold leading-relaxed">{s.summary}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {content.milestones.map((m, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="font-black text-royal-200 text-3xl tabular-nums leading-none">{(i + 1).toString().padStart(2, '0')}</div>
                      <div>
                        <span className="text-[10px] font-black text-royal-500 uppercase tracking-tighter">{m.time}</span>
                        <p className="text-slate-700 font-bold leading-tight group-hover:text-royal-900 transition-colors uppercase text-xs tracking-wide">{m.event}</p>
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
              <h2 className="text-3xl font-black flex items-center gap-3 mb-8 text-slate-900">
                <User className="text-royal-600" /> Character Trajectory
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.characters.map((char, i) => (
                  <div key={i} className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl relative overflow-hidden group hover:border-royal-300 transition-all">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <User size={80} />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-royal-600">
                      <Shield size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Profile Verified</span>
                    </div>
                    <h3 className="text-2xl font-black text-royal-900 mb-4">{char.name}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-black text-royal-500 uppercase tracking-widest">Defining Traits</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {char.traits.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-royal-50 text-royal-700 text-[10px] font-bold rounded border border-royal-100">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-royal-500 uppercase tracking-widest">Internal Conflict</span>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed mt-1">{char.conflict}</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Pathway</span>
                        <p className="text-xs text-slate-600 italic mt-1 font-medium">{char.growth}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 6: Flashcard Literary Audit (If exists) */}
          {content.distinctions && (
            <section className="bg-gradient-to-br from-indigo-900 to-royal-950 p-10 rounded-[3rem] text-white shadow-2xl">
              <h2 className="text-3xl font-black flex items-center gap-3 mb-10">
                <Split className="text-amber-400" /> Literary Distinctions
              </h2>
              <div className="space-y-12">
                {content.distinctions.map((dist, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-xl font-bold text-royal-200 border-l-4 border-amber-400 pl-4 uppercase tracking-widest">{dist.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center font-black text-xs uppercase tracking-widest text-royal-400 py-2 border-b border-royal-800/50">
                        {dist.comparison.labelA}
                      </div>
                      <div className="text-center font-black text-xs uppercase tracking-widest text-amber-400/80 py-2 border-b border-royal-800/50">
                        {dist.comparison.labelB}
                      </div>
                      {dist.comparison.points.map((p, idx) => (
                        <React.Fragment key={idx}>
                          <div className="bg-white/5 p-4 rounded-xl text-sm font-medium leading-relaxed border border-white/5">{p.a}</div>
                          <div className="bg-amber-400/5 p-4 rounded-xl text-sm font-medium leading-relaxed border border-amber-400/10">{p.b}</div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 5: SQP Triggers */}
          <section className="bg-slate-900 text-slate-300 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Terminal size={150} />
            </div>
            <h3 className="text-3xl font-black flex items-center gap-3 mb-10 text-white italic tracking-tight">
              <Zap className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" /> SQP Board Triggers
            </h3>
            <div className="space-y-10">
              {content.triggers.map((trigger, i) => (
                <div key={i} className="border-l-4 border-royal-500 pl-8 py-2 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-royal-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-lg">{trigger.year}</span>
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-lg">{trigger.marks} Mark{trigger.marks > 1 ? 's' : ''}</span>
                    <span className="text-slate-500 text-xs font-mono font-bold tracking-widest uppercase">{trigger.type} Analysis</span>
                  </div>
                  <p className="text-white font-normal mb-6 text-xl leading-tight tracking-tight whitespace-pre-wrap">Q: {trigger.question}</p>

                  <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                      <p className="text-emerald-400 text-base italic font-bold leading-relaxed mb-4">
                        "CBSE Marking Scheme (Verbatim):"
                      </p>
                      <p className="text-slate-200 text-sm leading-relaxed mb-4 whitespace-pre-wrap">{trigger.answerVerbatim}</p>
                      <div className="flex flex-wrap gap-3">
                        {trigger.markingSchemePoints.map((p, idx) => (
                          <span key={idx} className="px-4 py-2 bg-slate-700/50 text-emerald-200 text-[10px] font-black rounded-lg border border-emerald-900/50 uppercase tracking-widest">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-indigo-950/80 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                      <p className="text-indigo-400 text-base italic font-bold leading-relaxed mb-4 flex items-center gap-2">
                        <Sparkles size={16} /> Mark-Based AI Explanation:
                      </p>
                      <p className="text-indigo-100 text-sm leading-relaxed whitespace-pre-wrap">{trigger.aiExplanation}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* SECTION 3: Universal Themes */}
          <section className="bg-royal-900 text-white rounded-[2rem] p-8 shadow-xl">
            <h3 className="text-xl font-black flex items-center gap-2 mb-6 uppercase tracking-wider">
              <Info className="text-royal-400" /> Universal Pillars
            </h3>
            <div className="space-y-4">
              {content.themes.map((theme, i) => (
                <div key={i} className="group cursor-default flex items-start gap-3">
                  <div className="h-1 w-1 rounded-full bg-royal-400 mt-2" />
                  <p className="text-sm font-bold text-royal-100 leading-tight">{theme}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Symbols */}
          {content.motifs.length > 0 && (
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-black flex items-center gap-2 mb-6 text-slate-900 uppercase tracking-wider">
                <Shield className="text-royal-600" /> Symbolic Audit
              </h3>
              <div className="space-y-6">
                {content.motifs.map((motif, i) => (
                  <div key={i} className="group">
                    <p className="font-black text-royal-700 text-sm mb-1 uppercase tracking-tighter">{motif.symbol}</p>
                    <p className="text-xs text-slate-500 italic leading-snug">{motif.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lexicon */}
          {content.dictionary.length > 0 && (
            <section className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
              <h3 className="text-xl font-black flex items-center gap-2 mb-6 text-slate-900 uppercase tracking-wider">
                <FileText className="text-royal-600" /> Forensic Lexicon
              </h3>
              <div className="space-y-6">
                {content.dictionary.map((word, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-black text-slate-900 text-sm tracking-tight">{word.word}</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm mb-2">
                      <p className="text-[10px] text-royal-600 font-black mb-1 opacity-50 uppercase">Syn: {word.synonym}</p>
                      <p className="text-[10px] text-slate-600 font-medium leading-relaxed italic">"{word.context}"</p>
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
