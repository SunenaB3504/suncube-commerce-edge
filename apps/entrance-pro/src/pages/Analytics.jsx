import React from 'react';
import { useAppContext } from '../store/AppContext';
import { BarChart3, TrendingUp, Zap, Target, Flame, Brain, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';
import { SUBJECTS } from '../config/subjects.config';

const Analytics = () => {
    const { progress, streak, getSubjectProgress, mockResults } = useAppContext();
    const xp = progress?.xp || 0;

    const stats = [
        { label: 'COGNITIVE XP', value: xp, icon: Zap, color: 'text-brand-amber', bg: 'bg-brand-amber/10' },
        { label: 'NEURAL STREAK', value: `${streak} DAYS`, icon: Flame, color: 'text-brand-rose', bg: 'bg-brand-rose/10' },
        { label: 'MOCKS DEPLOYED', value: mockResults.length, icon: Target, color: 'text-brand-emerald', bg: 'bg-brand-emerald/10' },
        { label: 'AVG ACCURACY', value: '78%', icon: ShieldCheck, color: 'text-brand-indigo', bg: 'bg-brand-indigo/10' }
    ];

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col selection:bg-brand-indigo/30 pb-20">
            <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                {/* AUDIT HEADER */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-brand-indigo rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] italic">CENTRAL INTELLIGENCE</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter uppercase leading-none mb-4">Performance <span className="text-brand-indigo">Audit</span></h1>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] italic">Forensic breakdown of cognitive deployment and subject mastery.</p>
                </div>

                {/* KPI GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.05] transition-all group relative overflow-hidden">
                            <div className={`absolute -right-4 -top-4 w-24 h-24 opacity-5 group-hover:scale-125 transition-transform duration-700 blur-2xl rounded-full ${stat.bg}`}></div>
                            <stat.icon size={24} className={`${stat.color} mb-6`} />
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 italic">{stat.label}</div>
                            <div className="text-3xl font-black text-white italic tracking-tighter">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* SUBJECT MASTERY MAP */}
                    <div className="lg:col-span-2 bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] backdrop-blur-3xl">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-indigo/10 rounded-2xl border border-brand-indigo/20">
                                    <Brain size={20} className="text-brand-indigo" />
                                </div>
                                <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Subject Integration</h2>
                            </div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic tracking-[0.3em]">LIVE FEED</span>
                        </div>

                        <div className="space-y-8">
                            {SUBJECTS.map((sub) => {
                                const progress = getSubjectProgress(sub.id, sub.chapters);
                                return (
                                    <div key={sub.id} className="group cursor-pointer">
                                        <div className="flex justify-between items-end mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg">{sub.icon}</span>
                                                <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors italic">{sub.name}</span>
                                            </div>
                                            <span className="text-lg font-black text-white italic tracking-tighter">{progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <div 
                                                className="h-full transition-all duration-1000 shadow-glow-indigo/20" 
                                                style={{ width: `${progress}%`, backgroundColor: sub.color }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RECENT ACHIEVEMENTS */}
                    <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent"></div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-brand-amber/10 rounded-2xl border border-brand-amber/20">
                                <Award size={20} className="text-brand-amber" />
                            </div>
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Merits</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: 'Early Riser', desc: 'Active before 6 AM UTC', icon: Clock, color: 'text-brand-amber' },
                                { title: 'Speed Demon', desc: '100% Correct in Timed Drill', icon: Zap, color: 'text-brand-emerald' },
                                { title: 'Accuracy Elite', desc: '90%+ in a Mock Exam', icon: Target, color: 'text-brand-indigo' }
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                                    <badge.icon size={18} className={`${badge.color} mt-1 group-hover:scale-110 transition-transform`} />
                                    <div>
                                        <div className="text-[10px] font-black text-white uppercase tracking-widest mb-0.5 italic">{badge.title}</div>
                                        <div className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] italic">{badge.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-12 py-4 border border-white/5 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all italic">
                            VIEW FULL TROPHY ROOM
                        </button>
                    </div>
                </div>

                {/* MOCK HISTORY */}
                <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] backdrop-blur-3xl overflow-hidden relative shadow-2xl">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20">
                                <BarChart3 size={20} className="text-brand-emerald" />
                            </div>
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Deployment Log</h2>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] italic">
                                    <th className="text-left py-6 px-4">TYPE</th>
                                    <th className="text-left py-6 px-4">SCORE</th>
                                    <th className="text-left py-6 px-4">STATUS</th>
                                    <th className="text-right py-6 px-4">TIMESTAMP</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {mockResults && mockResults.length > 0 ? mockResults.map((result, idx) => (
                                    <tr key={idx} className="group hover:bg-white/[0.01] transition-all">
                                        <td className="py-6 px-4 text-sm font-black text-white uppercase tracking-tight italic">{result.type}</td>
                                        <td className="py-6 px-4">
                                            <div className="text-lg font-black text-brand-emerald italic tracking-tighter">
                                                {result.score} / {result.total}
                                            </div>
                                        </td>
                                        <td className="py-6 px-4">
                                            <span className="inline-block px-3 py-1 bg-brand-emerald/10 text-brand-emerald rounded-full text-[9px] font-black uppercase tracking-widest border border-brand-emerald/20 italic">MISSION SECURE</span>
                                        </td>
                                        <td className="py-6 px-4 text-right text-[10px] font-black text-slate-600 uppercase tracking-widest italic">
                                            {new Date(result.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="py-20 text-center text-xs font-black text-slate-600 uppercase tracking-[0.5em] italic">NO DEPLOYMENT DATA DETECTED</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
