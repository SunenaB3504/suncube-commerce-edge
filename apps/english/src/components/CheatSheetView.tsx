import React from 'react';
import { ArrowLeft, Printer, Zap, Star, Activity } from 'lucide-react';
import { morningReviewContent } from '../data/cheat-sheet';

interface Props {
    onBack: () => void;
}

export function CheatSheetView({ onBack }: Props) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="animate-in fade-in duration-500 pb-20">
            <style dangerouslySetInnerHTML={{ __html: `
                .morning-review-content h1 { color: #10b981 !important; border-bottom-color: #10b981 !important; }
                .morning-review-content h2 { background-color: rgba(16, 185, 129, 0.1) !important; color: #10b981 !important; border-left-color: #10b981 !important; border-radius: 0.75rem; }
                .morning-review-content p, .morning-review-content li { color: #94a3b8 !important; }
                .morning-review-content b, .morning-review-content strong { color: #ffffff !important; }
                .morning-review-content span { color: #fbbf24 !important; }
                .morning-review-content table { border-color: rgba(255, 255, 255, 0.1) !important; }
                .morning-review-content th { background-color: rgba(16, 185, 129, 0.2) !important; color: #10b981 !important; border-color: rgba(16, 185, 129, 0.3) !important; }
                .morning-review-content td { border-color: rgba(255, 255, 255, 0.1) !important; }
                @media print {
                    .morning-review-content { color: black !important; background: white !important; }
                    .morning-review-content h1, .morning-review-content h2 { color: #1e3a8a !important; }
                    .morning-review-content p, .morning-review-content li { color: #334155 !important; }
                }
            `}} />
            
            <div className="flex justify-between items-center mb-12">
                <button
                    onClick={onBack}
                    className="flex items-center gap-3 text-brand-emerald font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all group"
                >
                    <div className="p-2 bg-brand-emerald/10 rounded-lg group-hover:bg-brand-emerald group-hover:text-brand-slate transition-colors">
                      <ArrowLeft className="h-4 w-4" />
                    </div>
                    Back to Library
                </button>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-3 bg-brand-amber text-brand-slate px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-glow-amber transition-all hover:-translate-y-1"
                >
                    <Printer size={18} /> Print Audit Sheet
                </button>
            </div>

            <header className="mb-12 relative overflow-hidden p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl">
                <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                   <Star size={120} className="text-brand-amber fill-brand-amber" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 text-brand-amber font-black mb-4 uppercase tracking-[0.3em] text-[10px]">
                        <Zap size={14} className="fill-brand-amber" />
                        High-Yield Protocol
                    </div>
                    <h2 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">Exam Morning <span className="text-brand-emerald">Cheat Sheet</span></h2>
                    <p className="text-slate-400 font-medium italic">Strategic last-minute anchors for class XII English Core</p>
                </div>
            </header>

            <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 shadow-2xl morning-review-content relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                   <Activity size={300} className="text-brand-emerald" />
                </div>
                <div
                    className="prose prose-invert max-w-none relative z-10"
                    dangerouslySetInnerHTML={{ __html: morningReviewContent }}
                />
            </div>
            
            <footer className="mt-12 text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
               Suncube Literature Forensics // Academic Session 2025-26
            </footer>
        </div>
    );
}
