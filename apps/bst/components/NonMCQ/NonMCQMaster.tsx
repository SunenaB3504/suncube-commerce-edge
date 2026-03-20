import React, { useState, useMemo } from 'react';
import { getAllNonMCQs, NonMCQWithUnit } from '../../utils/nonMcqAggregator';
import { ChevronRight, BrainCircuit, BookType, Layers, Sparkles, ArrowRight, ShieldCheck, Microscope } from 'lucide-react';
import { NonMCQViewer } from './NonMCQViewer';

interface NonMCQMasterProps {
    onBack: () => void;
}

export const NonMCQMaster: React.FC<NonMCQMasterProps> = ({ onBack }) => {
    const [nonMcqData] = useState<NonMCQWithUnit[]>(() => getAllNonMCQs());
    const [activeBatch, setActiveBatch] = useState<'batch1' | 'batch2' | null>(null);

    const { batch1, batch2 } = useMemo(() => {
        const mid = Math.ceil(nonMcqData.length / 2);
        return {
            batch1: nonMcqData.slice(0, mid),
            batch2: nonMcqData.slice(mid)
        };
    }, [nonMcqData]);

    if (activeBatch) {
        return (
            <NonMCQViewer
                questions={activeBatch === 'batch1' ? batch1 : batch2}
                batchName={activeBatch === 'batch1' ? 'Subjective Qs - Batch 1' : 'Subjective Qs - Batch 2'}
                onBack={() => setActiveBatch(null)}
            />
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <button
                onClick={onBack}
                className="group text-[10px] font-black text-slate-500 hover:text-brand-emerald transition-all flex items-center gap-2 mb-12 uppercase tracking-[0.4em]"
            >
                <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> 
                Return to Mission Hub
            </button>

            <div className="bg-white/[0.02] rounded-[4rem] p-12 md:p-20 border border-white/5 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-3xl shadow-2xl group">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] -ml-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-[100px] -mr-32 -mb-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 w-full">
                    <div className="w-24 h-24 bg-brand-emerald/10 text-brand-emerald rounded-3xl flex items-center justify-center mb-10 mx-auto border border-brand-emerald/20 shadow-glow-emerald/5 group-hover:scale-110 transition-transform duration-700">
                        <Microscope size={48} />
                    </div>

                    <span className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.5em] mb-4 block">Case Study Laboratory</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic selection:bg-brand-emerald selection:text-brand-slate">
                        Subjective <span className="text-brand-emerald">Mastery</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto mb-16 leading-relaxed italic uppercase tracking-tight">
                        Deconstruct complex business scenarios. Master the art of scoring in Long & Short Answer questions with <span className="text-brand-emerald">{nonMcqData.length}</span> curated Forensic Analysis nodes.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Batch 1 Card */}
                        <div
                            onClick={() => setActiveBatch('batch1')}
                            className="group/card relative bg-white/[0.03] border border-white/5 hover:border-brand-emerald/40 rounded-[2.5rem] p-10 cursor-pointer transition-all hover:shadow-glow-emerald/10 overflow-hidden text-left"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-brand-emerald/5 rounded-bl-[4rem] -z-10 transition-all group-hover/card:scale-110 group-hover/card:bg-brand-emerald/10" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-emerald/10 text-brand-emerald rounded-xl border border-brand-emerald/20">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Alpha Batch</h3>
                            </div>
                            <p className="text-slate-400 font-medium text-sm mb-8 leading-relaxed uppercase tracking-tight italic">
                                Foundational theory. Deconstruct management principles and organizational structures.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover/card:border-brand-emerald/30 group-hover/card:text-brand-emerald transition-colors">
                                    {batch1.length} ANALYSIS NODES
                                </div>
                                <div className="text-brand-emerald opacity-0 group-hover/card:opacity-100 transition-all flex items-center text-[10px] font-black uppercase tracking-widest translate-x-4 group-hover/card:translate-x-0">
                                    Initialize <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </div>

                        {/* Batch 2 Card */}
                        <div
                            onClick={() => setActiveBatch('batch2')}
                            className="group/card relative bg-white/[0.03] border border-white/5 hover:border-brand-amber/40 rounded-[2.5rem] p-10 cursor-pointer transition-all hover:shadow-glow-amber/10 overflow-hidden text-left"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-brand-amber/5 rounded-bl-[4rem] -z-10 transition-all group-hover/card:scale-110 group-hover/card:bg-brand-amber/10" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-brand-amber/10 text-brand-amber rounded-xl border border-brand-amber/20">
                                    <BrainCircuit size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Omega Batch</h3>
                            </div>
                            <p className="text-slate-400 font-medium text-sm mb-8 leading-relaxed uppercase tracking-tight italic">
                                Advanced dynamics. Strategic analysis of financial markets and consumer psychology.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover/card:border-brand-amber/30 group-hover/card:text-brand-amber transition-colors">
                                    {batch2.length} ANALYSIS NODES
                                </div>
                                <div className="text-brand-amber opacity-0 group-hover/card:opacity-100 transition-all flex items-center text-[10px] font-black uppercase tracking-widest translate-x-4 group-hover/card:translate-x-0">
                                    Initialize <ArrowRight size={14} className="ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
