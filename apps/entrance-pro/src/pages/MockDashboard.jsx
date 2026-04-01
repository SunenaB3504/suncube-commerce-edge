import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { Rocket, Target, Zap, Clock, ShieldCheck, FlaskConical, ChevronRight, BarChart3, AlertCircle } from 'lucide-react';

const MockDashboard = () => {
    const navigate = useNavigate();
    const { mockResults } = useAppContext();

    const mockTypes = [
        {
            id: 'cuet-bstudies',
            name: 'Business Studies Mock',
            description: 'CUET Domain Subject. 50 questions, attempt any 40.',
            icon: Target,
            duration: 45,
            questionCount: 50,
            limit: 40,
            color: 'text-brand-indigo',
            bg: 'bg-brand-indigo/10',
            border: 'border-brand-indigo/20'
        },
        {
            id: 'cuet-english',
            name: 'English Language Mock',
            description: 'CUET Section IA. 50 questions, attempt any 40.',
            icon: Rocket,
            duration: 45,
            questionCount: 50,
            limit: 40,
            color: 'text-brand-emerald',
            bg: 'bg-brand-emerald/10',
            border: 'border-brand-emerald/20'
        },
        {
            id: 'cuet-general',
            name: 'CUET General Test',
            description: 'Section III simulator. 60 questions, attempt any 50.',
            icon: FlaskConical,
            duration: 60,
            questionCount: 60,
            limit: 50,
            color: 'text-brand-amber',
            bg: 'bg-brand-amber/10',
            border: 'border-brand-amber/20'
        },
        {
            id: 'mhcet-full',
            name: 'MH-CET BBA Full Mock',
            description: 'Comprehensive speed-drill simulator. 100 questions, no negative marking.',
            icon: Zap,
            duration: 90,
            questionCount: 100,
            limit: 100,
            color: 'text-brand-rose',
            bg: 'bg-brand-rose/10',
            border: 'border-brand-rose/20'
        }
    ];

    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col selection:bg-zen-sky/10 pb-20">
            <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2.5 h-2.5 bg-zen-sky rounded-full animate-pulse shadow-sm shadow-zen-sky"></div>
                        <span className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.5em] italic">SIMULATION HUB // MOCK SECTOR</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-bold text-zen-ink italic tracking-tighter uppercase leading-none mb-4">Focused <span className="text-zen-sky">Simulations</span></h1>
                    <p className="text-zen-ink/40 text-xs font-bold uppercase tracking-[0.3em] italic">Select your practice objective and initialize a serene, focused simulation.</p>
                </div>

                {/* Mock Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {mockTypes.map((mock) => (
                        <div
                            key={mock.id}
                            className="group zen-mesh-sky border border-zen-ink/10 p-10 rounded-[3.5rem] hover:border-zen-sky/30 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full shadow-warm hover:shadow-bold active:scale-[0.98]"
                            onClick={() => navigate(`/mock-exam/${mock.id}`)}
                        >
                            <div className={`absolute -right-12 -top-12 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-[60px] rounded-full`} style={{ backgroundColor: mock.color.includes('indigo') ? '#6366f1' : mock.color.includes('emerald') ? '#10b981' : mock.color.includes('amber') ? '#f59e0b' : '#f43f5e' }}></div>
                            
                            <div className={`w-14 h-14 bg-white border-zen-ink/5 border rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                                <mock.icon size={24} className="text-zen-ink" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-zen-ink italic tracking-tight uppercase group-hover:text-zen-sky transition-colors mb-4">{mock.name}</h3>
                            <p className="text-zen-ink/40 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-10 italic">
                                {mock.description}
                            </p>
                            
                            <div className="mt-auto flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-zen-ink/30 uppercase tracking-widest italic">DURATION</span>
                                    <span className="text-sm font-bold text-zen-ink italic tracking-tighter">{mock.duration} MINS</span>
                                </div>
                                <div className="w-10 h-10 bg-zen-ink/5 rounded-full flex items-center justify-center group-hover:bg-zen-sky group-hover:text-white transition-all shadow-sm">
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Performance Analytics Integration */}
                <div className="zen-mesh-warm border border-zen-ink/10 p-12 lg:p-20 rounded-[4.5rem] backdrop-blur-sm relative overflow-hidden shadow-bold">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-zen-forest/20 to-transparent"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-zen-forest/20 rounded-full text-zen-forest text-[9px] font-bold uppercase tracking-widest mb-6 italic shadow-sm">
                                <BarChart3 size={14} /> LIVE PERFORMANCE INSIGHTS
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-zen-ink italic uppercase tracking-tighter mb-4 leading-none">Insight <span className="text-zen-forest">Analytics</span></h2>
                            <p className="text-zen-ink/60 text-xs font-bold uppercase tracking-widest italic leading-relaxed">
                                Review your previous simulation data to identify conceptual patterns and optimize your exam-day strategies.
                            </p>
                        </div>
                        <button 
                            onClick={() => navigate('/analytics')}
                            className="px-12 py-5 bg-zen-forest hover:bg-zen-ink text-white rounded-[2rem] font-bold text-xs uppercase tracking-[0.3em] transition-all shadow-soft italic whitespace-nowrap active:scale-95"
                        >
                            Open Insight Center
                        </button>
                    </div>

                    {mockResults.length > 0 ? (
                        <div className="mt-16 overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-zen-ink/5 text-[9px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] italic">
                                        <th className="text-left py-6 px-4">SIMULATION CODE</th>
                                        <th className="text-left py-6 px-4">SCORE</th>
                                        <th className="text-left py-6 px-4">ACCURACY</th>
                                        <th className="text-right py-6 px-4">TIMESTAMP</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zen-ink/5">
                                    {mockResults.slice(0, 3).map((result, idx) => (
                                        <tr key={idx} className="group hover:bg-white transition-all">
                                            <td className="py-8 px-4 text-sm font-bold text-zen-ink uppercase tracking-tight italic">{result.type}</td>
                                            <td className="py-8 px-4">
                                                <div className="text-xl font-bold text-zen-ink italic tracking-tighter">
                                                    {result.score} / {result.totalPossible || result.total}
                                                </div>
                                            </td>
                                            <td className="py-8 px-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-24 h-1.5 bg-zen-ink/5 rounded-full overflow-hidden border border-zen-ink/5">
                                                        <div 
                                                            className="h-full bg-zen-forest shadow-soft" 
                                                            style={{ width: `${result.accuracy}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs font-bold text-zen-ink italic tracking-tighter">{result.accuracy}%</span>
                                                </div>
                                            </td>
                                            <td className="py-8 px-4 text-right text-[10px] font-bold text-zen-ink/30 uppercase tracking-widest italic">
                                                {new Date(result.date).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="mt-16 p-20 border border-dashed border-zen-ink/10 rounded-[3rem] text-center flex flex-col items-center">
                            <AlertCircle size={40} className="text-zen-ink/20 mb-6 opacity-20" />
                            <div className="text-[10px] font-bold text-zen-ink/20 uppercase tracking-[0.5em] italic">NO PREVIOUS DATA STREAMS DETECTED</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MockDashboard;
