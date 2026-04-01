import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Target, Flame, Sparkles, BarChart3, BookOpen, ChevronRight, Zap, Clock, ShieldCheck } from 'lucide-react';
import { SUBJECTS } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';
import { EXAM_DATES, getDaysRemaining } from '../config/exam-dates.config';

const Home = () => {
    const navigate = useNavigate();
    const { progress, getSubjectProgress, streak } = useAppContext();

    const cuetDays = useMemo(() => getDaysRemaining(EXAM_DATES.CUET_UG_2026), []);
    const mhCetDays = useMemo(() => getDaysRemaining(EXAM_DATES.MH_CET_2026), []);

    const urgencyColor = cuetDays < 30
        ? 'text-brand-rose bg-brand-rose/10 border-brand-rose/20'
        : cuetDays < 60
            ? 'text-brand-amber bg-brand-amber/10 border-brand-amber/20'
            : 'text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20';

    return (
        <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
            {/* Learning Hub Hero */}
            <div className="relative mb-16 rounded-[4rem] overflow-hidden group shadow-bold border border-zen-ink/10">
                {/* Background effects with vibrant mesh vibes */}
                <div className="absolute inset-0 zen-mesh-vibrant opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-zen-sky/20 blur-[120px] rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zen-sand/20 blur-[120px] rounded-full mix-blend-multiply animate-pulse delay-1000"></div>
                
                <div className="relative z-10 p-12 lg:p-16 border border-zen-ink/5 backdrop-blur-sm flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <header className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 border border-zen-ink/10 rounded-full mb-8 backdrop-blur-md">
                            <Sparkles size={14} className="text-zen-sky animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zen-ink/60 italic">Cognitive Readiness Engine</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-zen-ink mb-6 tracking-tighter italic leading-none">
                            SERENE <span className="text-zen-sky">FOCUS</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zen-ink to-zen-ink/40">LEARNING HUB</span>
                        </h1>
                        <p className="text-lg text-zen-ink/80 font-medium leading-relaxed mb-12 max-w-xl italic tracking-tight">
                            Master the serene "Alpha" strategies for CUET & MH-CET. High-clarity simulations, focused practice, and insight-driven analytics.
                        </p>

                        {/* Performance Matrix */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="bg-white border border-zen-ink/10 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all shadow-sm">
                                <div className="p-3 bg-zen-sky/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <Zap size={20} className="text-zen-sky" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest mb-1">XP CAPACITY</div>
                                    <div className="text-2xl font-black text-zen-ink italic">{progress.xp}</div>
                                </div>
                            </div>
                            <div className="bg-white border border-zen-ink/10 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all shadow-sm">
                                <div className="p-3 bg-zen-forest/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <BookOpen size={20} className="text-zen-forest" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest mb-1">UNITS SECURED</div>
                                    <div className="text-2xl font-black text-zen-ink italic">
                                        {new Set(Object.keys(progress.chapterProgress || {}).map(k => k.split('_')[0])).size}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-zen-ink/10 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all shadow-sm">
                                <div className="p-3 bg-zen-terracotta/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <Flame size={20} className="text-zen-terracotta animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest mb-1">DRILL STREAK</div>
                                    <div className="text-2xl font-black text-zen-ink italic">{streak}</div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

            {/* Exam Countdown Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                <div className={`p-8 rounded-[2.5rem] border backdrop-blur-xl group relative overflow-hidden transition-all hover:scale-[1.02] ${urgencyColor}`}>
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                        <Target size={120} />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-1 opacity-70 italic">STRATEGIC TARGET</div>
                                <div className="text-3xl font-black italic tracking-tighter">CUET UG 2026</div>
                            </div>
                        </div>
                        <div className="text-center bg-white/10 px-8 py-4 rounded-[2rem] backdrop-blur-md border border-white/10">
                            <div className="text-5xl font-black italic mb-1 tracking-tighter">{cuetDays}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-70">DAYS TILL DEPLOY</div>
                        </div>
                    </div>
                </div>

                <div className="p-8 rounded-[2.5rem] border border-zen-ink/10 zen-mesh-warm backdrop-blur-xl group relative overflow-hidden transition-all hover:scale-[1.02] text-zen-ink/60 italic shadow-bold">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                        <Clock size={120} />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="bg-white p-4 rounded-3xl border border-zen-ink/10 shadow-sm text-zen-ink/40">
                                <Clock size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-1 opacity-50 italic">SECONDARY TARGET</div>
                                <div className="text-3xl font-bold italic tracking-tighter text-zen-ink">MH-CET BBA</div>
                            </div>
                        </div>
                        <div className="text-center bg-white px-8 py-4 rounded-[2rem] border border-zen-ink/15 shadow-sm">
                            <div className="text-5xl font-bold italic mb-1 tracking-tighter text-zen-ink">{mhCetDays}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">DAYS REMAINING</div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex items-center justify-between mb-12 px-2">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-8 bg-zen-sky rounded-full"></div>
                        <h2 className="text-2xl font-bold text-zen-ink italic tracking-tight uppercase">
                            Practice <span className="text-zen-sky">Modules</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/analytics')}
                        className="group flex items-center gap-3 px-6 py-2.5 bg-zen-ink/5 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-zen-ink/60 hover:text-zen-sky hover:bg-zen-sky/10 border border-zen-ink/5 transition-all italic active:scale-95 shadow-sm"
                    >
                        <BarChart3 size={14} className="group-hover:rotate-12 transition-transform" /> PERFORMANCE AUDIT
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SUBJECTS.map((subject) => {
                        const subjectProgress = getSubjectProgress(subject.id, subject.chapters);

                        return (
                            <button
                                key={subject.id}
                                onClick={() => navigate(`/subject/${subject.id}`)}
                                className="group relative zen-mesh-sky p-8 rounded-[3.5rem] border border-zen-ink/10 transition-all hover:border-zen-sky/30 hover:-translate-y-2 text-left overflow-hidden shadow-warm hover:shadow-bold"
                            >
                                {/* Decorative Teams-style mesh glow */}
                                <div
                                    className="absolute -right-20 -top-20 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-[80px] rounded-full"
                                    style={{ backgroundColor: subject.color }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-soft border border-zen-ink/10 bg-white"
                                        style={{ color: subject.color }}
                                    >
                                        <span className="drop-shadow-sm">{subject.icon}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-zen-ink mb-2 italic tracking-tighter group-hover:text-zen-sky transition-colors">
                                        {subject.name}
                                    </h3>

                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-10 italic">
                                        {subject.chapters.length} LOGIC UNITS • {subject.examTags.join(' & ')}
                                    </p>

                                    {/* Progress Sector */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zen-ink/40 italic">Integrity Check</span>
                                            <span className="text-lg font-black text-zen-ink italic tracking-tighter">{subjectProgress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <div
                                                className="h-full transition-all duration-1000 ease-out rounded-full shadow-glow-amber/50"
                                                style={{
                                                    width: `${subjectProgress}%`,
                                                    backgroundColor: subject.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zen-ink/40 group-hover:text-zen-sky transition-all italic">
                                        START JOURNEY <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
