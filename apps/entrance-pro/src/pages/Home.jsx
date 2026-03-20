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
            {/* Command Center Hero */}
            <div className="relative mb-16 rounded-[3rem] overflow-hidden group">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/10 via-brand-slate to-brand-emerald/5 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-amber/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-emerald/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000"></div>
                
                <div className="relative z-10 p-12 lg:p-16 border border-white/5 backdrop-blur-3xl flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <header className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
                            <Sparkles size={14} className="text-brand-amber animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Cognitive Readiness Engine</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter italic leading-none">
                            SPEED <span className="text-brand-amber">LOGIC</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">TERMINAL</span>
                        </h1>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12 max-w-xl italic uppercase tracking-tight">
                            Master the elite "Alpha" strategies for CUET & MH-CET. High-intensity simulations, rapid-fire drills, and forensic analytics.
                        </p>

                        {/* Performance Matrix */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="bg-white/[0.03] border border-white/5 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all">
                                <div className="p-3 bg-brand-indigo/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <Zap size={20} className="text-brand-indigo" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">XP CAPACITY</div>
                                    <div className="text-2xl font-black text-white italic">{progress.xp}</div>
                                </div>
                            </div>
                            <div className="bg-white/[0.03] border border-white/5 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all">
                                <div className="p-3 bg-brand-emerald/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <BookOpen size={20} className="text-brand-emerald" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">UNITS SECURED</div>
                                    <div className="text-2xl font-black text-white italic">
                                        {new Set(Object.keys(progress.chapterProgress || {}).map(k => k.split('_')[0])).size}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/[0.03] border border-white/5 px-6 py-4 rounded-[2rem] flex items-center gap-4 group/stat hover:bg-white/5 transition-all">
                                <div className="p-3 bg-brand-amber/10 rounded-2xl group-hover/stat:scale-110 transition-transform">
                                    <Flame size={20} className="text-brand-amber animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">DRILL STREAK</div>
                                    <div className="text-2xl font-black text-white italic">{streak}</div>
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

                <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl group relative overflow-hidden transition-all hover:scale-[1.02] text-slate-400 italic">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
                        <Clock size={120} />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="bg-white/5 p-4 rounded-3xl">
                                <Clock size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-1 opacity-50 italic">SECONDARY TARGET</div>
                                <div className="text-3xl font-black italic tracking-tighter text-white">MH-CET BBA</div>
                            </div>
                        </div>
                        <div className="text-center bg-white/5 px-8 py-4 rounded-[2rem] border border-white/5">
                            <div className="text-5xl font-black italic mb-1 tracking-tighter text-white">{mhCetDays}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-50">DAYS REMAINING</div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex items-center justify-between mb-12 px-2">
                    <div className="flex items-center gap-4">
                        <div className="w-1 h-8 bg-brand-amber rounded-full"></div>
                        <h2 className="text-2xl font-black text-white italic tracking-tight uppercase">
                            Operational <span className="text-brand-amber">Units</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/analytics')}
                        className="group flex items-center gap-3 px-6 py-2.5 bg-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-brand-indigo hover:bg-brand-indigo/10 border border-white/5 transition-all italic active:scale-95"
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
                                className="group relative bg-white/[0.03] p-8 rounded-[3rem] border border-white/5 transition-all hover:bg-white/[0.06] hover:border-brand-amber/20 hover:-translate-y-2 text-left overflow-hidden shadow-2xl"
                            >
                                {/* Decorative glow */}
                                <div
                                    className="absolute -right-20 -top-20 w-64 h-64 opacity-5 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] rounded-full"
                                    style={{ backgroundColor: subject.color }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/5"
                                        style={{ backgroundColor: `${subject.color}15` }}
                                    >
                                        <span className="drop-shadow-lg">{subject.icon}</span>
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-2 italic tracking-tighter group-hover:text-brand-amber transition-colors">
                                        {subject.name}
                                    </h3>

                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-10 italic">
                                        {subject.chapters.length} LOGIC UNITS • {subject.examTags.join(' & ')}
                                    </p>

                                    {/* Progress Sector */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 italic">Integrity Check</span>
                                            <span className="text-lg font-black text-white italic tracking-tighter">{subjectProgress}%</span>
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
                                    
                                    <div className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-brand-amber transition-all italic">
                                        INITIATE MISSION <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
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
