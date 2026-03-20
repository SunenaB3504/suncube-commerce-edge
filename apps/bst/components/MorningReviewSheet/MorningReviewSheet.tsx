import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ChevronRight, Printer, AlertTriangle, Lightbulb, BookOpen, Scaling, Cpu, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import { ALL_UNITS } from '../../data';
import { CheatSheetItem } from '../../types';

interface MorningReviewSheetProps {
    onBack: () => void;
}

// Helper to determine the color theme based on the cheat sheet section title
const getSectionTheme = (title: string) => {
    const t = title.toLowerCase();

    if (t.includes('pitfall') || t.includes('trick') || t.includes('trap')) {
        return {
            bg: 'bg-rose-500/5',
            border: 'border-rose-500/20',
            iconBg: 'bg-rose-500/10',
            iconText: 'text-rose-500',
            titleText: 'text-rose-400',
            bulletPoint: 'text-rose-500',
            glow: 'shadow-glow-rose/5',
            icon: <Flame size={18} />
        };
    }

    if (t.includes('distinction') || t.includes('difference')) {
        return {
            bg: 'bg-brand-amber/5',
            border: 'border-brand-amber/20',
            iconBg: 'bg-brand-amber/10',
            iconText: 'text-brand-amber',
            titleText: 'text-brand-amber',
            bulletPoint: 'text-brand-amber',
            glow: 'shadow-glow-amber/5',
            icon: <Scaling size={18} />
        };
    }

    if (t.includes('definition') || t.includes('abbreviation')) {
        return {
            bg: 'bg-brand-indigo/5',
            border: 'border-brand-indigo/20',
            iconBg: 'bg-brand-indigo/10',
            iconText: 'text-brand-indigo',
            titleText: 'text-brand-indigo',
            bulletPoint: 'text-brand-indigo',
            glow: 'shadow-glow-indigo/5',
            icon: <BookOpen size={18} />
        };
    }

    // Default (Core concepts, etc)
    return {
        bg: 'bg-brand-emerald/5',
        border: 'border-brand-emerald/20',
        iconBg: 'bg-brand-emerald/10',
        iconText: 'text-brand-emerald',
        titleText: 'text-brand-emerald',
        bulletPoint: 'text-brand-emerald',
        glow: 'shadow-glow-emerald/5',
        icon: <Cpu size={18} />
    };
};

export const MorningReviewSheet: React.FC<MorningReviewSheetProps> = ({ onBack }) => {
    // Forensic Content Renderer
    const renderForensicContent = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return (
            <div className="leading-relaxed">
                {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        const content = part.slice(2, -2);
                        return (
                            <span key={i} className="inline-block mx-1 px-1.5 py-0.5 rounded bg-white/10 text-white font-black text-[10px] uppercase align-middle border border-white/10">
                                {content}
                            </span>
                        );
                    }
                    return <span key={i}>{part}</span>;
                })}
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-6 animate-in fade-in duration-1000 print:py-0 print:px-0 print:max-w-none">
            {/* Action Bar - Hidden in Print */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 print:hidden gap-8 bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl">
                <button
                    onClick={onBack}
                    className="group text-[10px] font-black text-slate-500 hover:text-brand-emerald transition-all flex items-center gap-2 uppercase tracking-[0.4em]"
                >
                    <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> 
                    Exit Readiness Protocol
                </button>

                <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-1">
                        <Sparkles size={18} className="text-brand-amber animate-pulse" />
                        <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">Final Readiness Protocol</h1>
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">All 12 Neutral Units • High-Yield Analysis</p>
                </div>

                <button
                    onClick={() => window.print()}
                    className="group bg-brand-emerald hover:bg-white text-brand-slate font-black text-[10px] uppercase tracking-[0.3em] px-10 py-5 rounded-[1.5rem] flex items-center gap-3 transition-all shadow-glow-emerald/20 hover:shadow-glow-emerald-400 transform hover:-translate-y-1"
                >
                    <Printer size={18} className="group-hover:scale-110 transition-transform" /> 
                    Execute Physical Extract
                </button>
            </div>

            {/* Print Header - Only visible in print */}
            <div className="hidden print:block text-center mb-10 border-b-4 border-black pb-4">
                <h1 className="text-4xl font-black text-black uppercase tracking-tighter italic">Suncube-AI • Exam Morning Protocol</h1>
                <p className="text-sm text-black font-black uppercase tracking-[0.3em] mt-2">Comprehensive High-Yield Analysis • All Units (1-12)</p>
            </div>

            {/* Main Content Render */}
            <div className="space-y-16 print:space-y-0 print:grid print:grid-cols-1">
                {ALL_UNITS.map((unit, index) => (
                    <div
                        key={unit.id}
                        className="bg-white/[0.02] rounded-[3.5rem] p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-3xl print:shadow-none print:border-none print:bg-white print:rounded-none print:p-0 print:mb-12 print:break-inside-avoid relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[100px] -mr-48 -mt-48 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 print:hidden" />

                        {/* Unit Header */}
                        <div className="flex items-center gap-6 mb-12 print:mb-4 border-b border-white/5 print:border-b-4 print:border-black pb-8 print:pb-2 relative z-10">
                            <div className="bg-brand-emerald/10 text-brand-emerald font-black text-2xl w-16 h-16 flex items-center justify-center rounded-[1.5rem] border border-brand-emerald/20 print:text-lg print:w-10 print:h-10 print:bg-white print:border-2 print:border-black">
                                {unit.id}
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic print:text-2xl print:text-black">
                                    {unit.name}
                                </h2>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-1 print:hidden">Unit Integrity Verified</div>
                            </div>
                        </div>

                        {/* Cheat Sheet Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-x-8 print:gap-y-4 relative z-10">
                            {unit.cheatSheet.map((section: CheatSheetItem, secIdx: number) => {
                                const theme = getSectionTheme(section.title);
                                const points = section.points || section.content || [];

                                if (points.length === 0) return null;

                                return (
                                    <div
                                        key={secIdx}
                                        className={`rounded-[2.5rem] p-8 ${theme.bg} ${theme.border} border ${theme.glow} transition-all duration-500 hover:border-white/20 print:bg-white print:border-none print:p-0 print:break-inside-avoid shadow-inner`}
                                    >
                                        <div className="flex items-center gap-4 mb-8 print:mb-2">
                                            <div className={`p-3 rounded-xl ${theme.iconBg} ${theme.iconText} border border-white/5 print:hidden`}>
                                                {theme.icon}
                                            </div>
                                            <h3 className={`font-black uppercase tracking-[0.2em] text-[10px] ${theme.titleText} print:text-black print:text-sm print:font-black print:underline print:underline-offset-4`}>
                                                {section.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-6 print:space-y-2">
                                            {points.map((point: string, pIdx: number) => (
                                                <div key={pIdx} className="flex items-start gap-4 print:gap-2">
                                                    <span className={`mt-1 font-black ${theme.bulletPoint} print:text-black print:text-xs`}>•</span>
                                                    <div className="text-slate-300 font-medium text-sm leading-relaxed print:text-black print:text-[10pt] print:leading-tight">
                                                        {renderForensicContent(point)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {/* Visual separator for print if it's not the last unit of the page */}
                        {((index + 1) % 2 === 0) && (
                           <div className="hidden print:block print:break-after-page"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="hidden print:block text-center mt-10 border-t-2 border-black pt-6 text-black font-black text-[10px] uppercase tracking-[0.5em] italic italic">
                Suncube-AI Premium Protocol • High-Performance Preparation • CB-Class-12-BST
            </div>
        </div>
    );
};
