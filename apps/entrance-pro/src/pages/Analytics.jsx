import React from 'react';
import { useAppContext } from '../store/AppContext';
import { BarChart3, TrendingUp, Zap, Target, Flame, Brain, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';
import { SUBJECTS } from '../config/subjects.config';

const Analytics = () => {
    const { progress, streak, getSubjectProgress, mockResults } = useAppContext();
    const xp = progress?.xp || 0;

    const stats = [
        { label: 'COGNITIVE SCORE', value: xp, icon: Zap, color: 'text-zen-sky', bg: 'bg-zen-sky/10' },
        { label: 'STUDY STREAK', value: `${streak} DAYS`, icon: Flame, color: 'text-zen-terracotta', bg: 'bg-zen-terracotta/10' },
        { label: 'MOCKS COMPLETED', value: mockResults.length, icon: Target, color: 'text-zen-forest', bg: 'bg-zen-forest/10' },
        { label: 'AVG ACCURACY', value: '78%', icon: ShieldCheck, color: 'text-zen-ink', bg: 'bg-zen-ink/10' }
    ];

    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col selection:bg-zen-sky/10 pb-20">
            <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                {/* INSIGHT HEADER */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2.5 h-2.5 bg-zen-sky rounded-full animate-pulse shadow-sm shadow-zen-sky"></div>
                        <span className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.5em] italic">INSIGHT HUB // ANALYTICS</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-zen-ink italic tracking-tighter uppercase leading-none mb-4">Learning <span className="text-zen-sky">Journey</span></h1>
                    <p className="text-zen-ink/40 text-xs font-bold uppercase tracking-[0.3em] italic">Harmonized breakdown of cognitive progress and subject mastery.</p>
                </div>

                {/* KPI GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="zen-mesh-sky border border-zen-ink/10 p-8 rounded-[2.5rem] transition-all group relative overflow-hidden shadow-bold hover:shadow-warm active:scale-95">
                            <div className={`absolute -right-4 -top-4 w-24 h-24 opacity-20 group-hover:scale-125 transition-transform duration-700 blur-2xl rounded-full ${stat.bg}`}></div>
                            <stat.icon size={24} className={`${stat.color} mb-6`} />
                            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest mb-1 italic">{stat.label}</div>
                            <div className="text-3xl font-bold text-zen-ink italic tracking-tighter">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* SUBJECT MASTERY MAP */}
                    <div className="lg:col-span-2 zen-mesh-sky border border-zen-ink/10 p-10 rounded-[3.5rem] shadow-bold">
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-zen-sky/10 rounded-2xl border border-zen-sky/20">
                                    <Brain size={20} className="text-zen-sky" />
                                </div>
                                <h2 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Subject Progress</h2>
                            </div>
                            <span className="text-[10px] font-bold text-zen-ink/20 uppercase tracking-widest italic tracking-[0.3em]">LIVE FEED</span>
                        </div>

                        <div className="space-y-8">
                            {SUBJECTS.map((sub) => {
                                const progress = getSubjectProgress(sub.id, sub.chapters);
                                return (
                                    <div key={sub.id} className="group cursor-pointer">
                                        <div className="flex justify-between items-end mb-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-lg">{sub.icon}</span>
                                                <span className="text-xs font-bold text-zen-ink/60 uppercase tracking-widest group-hover:text-zen-sky transition-colors italic">{sub.name}</span>
                                            </div>
                                            <span className="text-lg font-bold text-zen-ink italic tracking-tighter">{progress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-zen-ink/5 rounded-full overflow-hidden border border-zen-ink/5 shadow-inner">
                                            <div 
                                                className="h-full transition-all duration-1000 shadow-soft" 
                                                style={{ width: `${progress}%`, backgroundColor: sub.color }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RECENT ACHIEVEMENTS */}
                    <div className="zen-mesh-warm border border-zen-ink/10 p-10 rounded-[3.5rem] relative overflow-hidden shadow-bold">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zen-sand/20 to-transparent"></div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-zen-sand/20 rounded-2xl border border-zen-sand/30">
                                <Award size={20} className="text-zen-sand" />
                            </div>
                            <h2 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Merits</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: 'Early Riser', desc: 'Active before dawn', icon: Clock, color: 'text-zen-sand' },
                                { title: 'Focus Master', desc: '100% Correct in Practice', icon: Zap, color: 'text-zen-sky' },
                                { title: 'High Accuracy', desc: '90%+ in a Session', icon: Target, color: 'text-zen-ink' }
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-zen-ink/5 bg-white/40 hover:bg-white/80 transition-all group shadow-sm">
                                    <badge.icon size={18} className={`${badge.color} mt-1 group-hover:scale-110 transition-transform`} />
                                    <div>
                                        <div className="text-[10px] font-bold text-zen-ink uppercase tracking-widest mb-0.5 italic">{badge.title}</div>
                                        <div className="text-[9px] font-bold text-zen-ink/40 uppercase tracking-[0.2em] italic">{badge.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-12 py-4 border border-zen-ink/5 rounded-2xl text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest hover:text-zen-sky hover:bg-white transition-all italic shadow-sm">
                            VIEW FULL TROPHY ROOM
                        </button>
                    </div>
                </div>

                {/* MOCK HISTORY */}
                <div className="zen-mesh-vibrant border border-zen-ink/10 p-10 rounded-[4rem] overflow-hidden relative shadow-bold">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-zen-sky/10 rounded-2xl border border-zen-sky/20">
                                <BarChart3 size={20} className="text-zen-sky" />
                            </div>
                            <h2 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Simulation Log</h2>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-zen-ink/5 text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] italic">
                                    <th className="text-left py-6 px-4">TYPE</th>
                                    <th className="text-left py-6 px-4">SCORE</th>
                                    <th className="text-left py-6 px-4">STATUS</th>
                                    <th className="text-right py-6 px-4">TIMESTAMP</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zen-ink/5">
                                {mockResults && mockResults.length > 0 ? mockResults.map((result, idx) => (
                                    <tr key={idx} className="group hover:bg-white transition-all">
                                        <td className="py-6 px-4 text-sm font-bold text-zen-ink uppercase tracking-tight italic">{result.type}</td>
                                        <td className="py-6 px-4">
                                            <div className="text-lg font-bold text-zen-sky italic tracking-tighter">
                                                {result.score} / {result.total}
                                            </div>
                                        </td>
                                        <td className="py-6 px-4">
                                            <span className="inline-block px-3 py-1 bg-zen-forest/10 text-zen-forest rounded-full text-[9px] font-bold uppercase tracking-widest border border-zen-forest/20 italic">SESSION SECURE</span>
                                        </td>
                                        <td className="py-6 px-4 text-right text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest italic">
                                            {new Date(result.date).toLocaleDateString()}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="py-20 text-center text-xs font-bold text-zen-ink/20 uppercase tracking-[0.5em] italic">NO DATA STREAMS DETECTED</td>
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
