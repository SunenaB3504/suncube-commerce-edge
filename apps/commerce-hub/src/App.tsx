import React, { useState, useEffect } from 'react';
import { HackerCard } from '@suncube/ui';
import { 
    BookOpen, 
    TrendingUp, 
    Briefcase, 
    Languages, 
    Trophy, 
    Zap, 
    Rocket, 
    Target, 
    Flame, 
    ShieldCheck, 
    Activity, 
    ChevronRight,
    FlaskConical
} from 'lucide-react';

const subjects = [
    {
        id: 'accounts',
        title: 'Accountancy Edge',
        description: 'Forensic Numerical Engine. Master partial credit logic and accuracy.',
        Icon: Briefcase,
        color: '#f59e0b', // brand-amber
        href: 'accounts/'
    },
    {
        id: 'economics',
        title: 'Economics Edge',
        description: 'Logic-to-Graph Engine. Understand market dynamics and macro trends.',
        Icon: TrendingUp,
        color: '#10b981', // brand-emerald
        href: 'economics/'
    },
    {
        id: 'bst',
        title: 'Business Studies Edge',
        description: 'Case Study patterns and keyword-heavy management logic.',
        Icon: BookOpen,
        color: '#6366f1', // brand-indigo
        href: 'bst/'
    },
    {
        id: 'english',
        title: 'English Edge',
        description: 'Narrative Engine. Standardized Writing Boxes for perfect drafts.',
        Icon: Languages,
        color: '#f43f5e', // brand-rose
        href: 'english/'
    },
    {
        id: 'phys-ed',
        title: 'Physical Education Edge',
        description: 'Street-Smart Fitness hacks. Pattern recognition for anatomy.',
        Icon: Trophy,
        color: '#10b981', // brand-emerald
        href: 'phys-ed/'
    },
    {
        id: 'entrance-pro',
        title: 'Entrance Pro Alpha',
        description: 'Speed-Logic DNA. Crack CUET and MH CET with advanced skip logic.',
        Icon: Zap,
        color: '#f59e0b', // brand-amber
        href: 'entrance-pro/'
    }
];

const App = () => {
    const [telemetry, setTelemetry] = useState({
        totalXp: 0,
        streak: 0,
        unitsSecured: 0,
        subjectProgress: {}
    });

    useEffect(() => {
        // TELEMETRY AGGREGATION PROTOCOL
        const aggregateTelemetry = () => {
            let totalXp = 0;
            let maxStreak = 0;
            let unitsSecured = 0;
            const subjectProgress = {};

            // 1. Collect from Entrance Pro (Alpha)
            const entranceData = localStorage.getItem('commerce_prep_pro_v1');
            const entranceProgress = localStorage.getItem('commerce_prep_pro_progress');
            
            if (entranceData) {
                try {
                    const parsed = JSON.parse(entranceData);
                    maxStreak = Math.max(maxStreak, parsed.streak || 0);
                } catch (e) {}
            }

            if (entranceProgress) {
                try {
                    const parsed = JSON.parse(entranceProgress);
                    totalXp += (parsed.xp || 0);
                    // Count completed chapters
                    if (parsed.chapterProgress) {
                        const completed = Object.values(parsed.chapterProgress).filter((c: any) => c.completed).length;
                        unitsSecured += completed;
                        subjectProgress['entrance-pro'] = Math.round((completed / 15) * 100); // Approximation
                    }
                } catch (e) {}
            }

            // 2. Collect from Legacy Shared Logic
            const legacyData = localStorage.getItem('suncube_user_progress');
            if (legacyData) {
                try {
                    const parsed = JSON.parse(legacyData);
                    if (parsed.lessonCompletion) {
                        const units = Object.keys(parsed.lessonCompletion).length;
                        unitsSecured += units;
                    }
                } catch (e) {}
            }

            // Sync to Unified Alpha Telemetry
            const unified = {
                totalXp,
                streak: maxStreak,
                unitsSecured,
                subjectProgress
            };
            
            setTelemetry(unified);
            localStorage.setItem('suncube_alpha_telemetry', JSON.stringify(unified));
        };

        aggregateTelemetry();
    }, []);

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 selection:bg-brand-emerald/30 font-sans antialiased overflow-x-hidden pb-32">
            {/* TACTICAL HEADER */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-slate/80 backdrop-blur-2xl border-b border-white/5 h-20 flex items-center px-8">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-brand-emerald/10 rounded-xl border border-brand-emerald/20">
                            <Rocket size={24} className="text-brand-emerald" />
                        </div>
                        <h1 className="text-2xl font-black italic tracking-tighter uppercase text-white">
                            Tactical <span className="text-brand-emerald">Hub</span>
                        </h1>
                    </div>
                    
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                            <Flame size={14} className="text-brand-amber" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{telemetry.streak} DAY STREAK</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-brand-emerald/10 rounded-full border border-brand-emerald/20">
                            <Zap size={14} className="text-brand-emerald" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-emerald">{telemetry.totalXp} COGNITIVE XP</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* STRATEGIC OVERVIEW */}
            <div className="pt-40 pb-20 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand-emerald/5 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 italic">
                        <Activity size={12} className="text-brand-emerald animate-pulse" /> Unified Operational Network Live
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none mb-6">
                        Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-amber">Control</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 italic font-medium uppercase tracking-tight">
                        Aggregate of all tactical sectors. Deploy into high-intensity revision units to secure your cognitive edge.
                    </p>

                    {/* KPI MATRIX */}
                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        <div className="flex-1 min-w-[200px] bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.05] transition-all group">
                            <Target size={24} className="text-brand-indigo mb-4 mx-auto" />
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">UNITS SECURED</div>
                            <div className="text-4xl font-black text-white italic tracking-tighter">{telemetry.unitsSecured}</div>
                        </div>
                        <div className="flex-1 min-w-[200px] bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.05] transition-all group">
                            <Flame size={24} className="text-brand-rose mb-4 mx-auto" />
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">ACTIVE STREAK</div>
                            <div className="text-4xl font-black text-white italic tracking-tighter">{telemetry.streak}D</div>
                        </div>
                        <div className="flex-1 min-w-[200px] bg-brand-emerald text-brand-slate p-8 rounded-[2.5rem] shadow-glow-emerald/20 group hover:scale-105 transition-all">
                            <Zap size={24} className="mb-4 mx-auto" fill="currentColor" />
                            <div className="text-[10px] font-black uppercase tracking-widest mb-1 italic">TOTAL XP</div>
                            <div className="text-4xl font-black italic tracking-tighter">{telemetry.totalXp}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPERATIONAL UNITS GRID */}
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-grow bg-white/5"></div>
                    <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] italic">OPERATIONAL UNITS</h3>
                    <div className="h-px flex-grow bg-white/5"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {subjects.map((subject, idx) => (
                        <a 
                            key={subject.id} 
                            href={subject.href} 
                            className="group block relative"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] h-full flex flex-col backdrop-blur-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all shadow-2xl overflow-hidden">
                                <div className="absolute -right-12 -top-12 w-48 h-48 opacity-0 group-hover:opacity-10 transition-all duration-700 blur-[60px] rounded-full" style={{ backgroundColor: subject.color }}></div>
                                
                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-4 bg-white/5 rounded-[1.5rem] border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ color: subject.color }}>
                                        <subject.Icon size={24} />
                                    </div>
                                    {telemetry.subjectProgress[subject.id] && (
                                        <div className="text-right">
                                            <div className="text-xl font-black text-white italic tracking-tighter leading-none">{telemetry.subjectProgress[subject.id]}%</div>
                                            <div className="text-[8px] font-black text-slate-600 uppercase tracking-widest mt-1">INTEGRITY</div>
                                        </div>
                                    )}
                                </div>

                                <h4 className="text-2xl font-black text-white italic tracking-tight uppercase group-hover:text-brand-emerald transition-colors mb-4">{subject.title}</h4>
                                <p className="text-slate-500 text-xs font-black uppercase tracking-widest leading-relaxed italic mb-10 flex-grow">
                                    {subject.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest italic group-hover:text-white transition-colors">INITIALIZE PROTOCOL</span>
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-slate transition-all">
                                        <ChevronRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* MISSION FOOTER */}
            <footer className="mt-40 border-t border-white/5 py-20 relative overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left relative z-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <Rocket size={20} className="text-brand-emerald" />
                            <span className="text-xl font-black italic tracking-tighter uppercase text-white">
                                Suncube <span className="text-brand-emerald">Alpha</span> Hub
                            </span>
                        </div>
                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] italic"> Unified Operational Ecosystem // Version 2026.4.0</p>
                    </div>
                    
                    <div className="flex gap-8 text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] italic">
                        <a href="#" className="hover:text-white transition-colors">Operational Docs</a>
                        <a href="#" className="hover:text-white transition-colors">Security Manual</a>
                        <a href="#" className="hover:text-white transition-colors">System Status</a>
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none select-none">
                    <span className="text-[200px] font-black uppercase tracking-tighter text-white italic leading-none">ALPHA</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
