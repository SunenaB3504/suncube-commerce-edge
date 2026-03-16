import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { ChevronRight, Printer, AlertTriangle, Lightbulb, BookOpen, Scaling } from 'lucide-react';
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
            bg: 'bg-rose-50',
            border: 'border-rose-200',
            iconBg: 'bg-rose-100',
            iconText: 'text-rose-600',
            titleText: 'text-rose-800',
            bulletPoint: 'text-rose-500',
            icon: <AlertTriangle className="w-5 h-5 text-rose-600" />
        };
    }

    if (t.includes('distinction') || t.includes('difference')) {
        return {
            bg: 'bg-amber-50',
            border: 'border-amber-200',
            iconBg: 'bg-amber-100',
            iconText: 'text-amber-600',
            titleText: 'text-amber-800',
            bulletPoint: 'text-amber-500',
            icon: <Scaling className="w-5 h-5 text-amber-600" />
        };
    }

    if (t.includes('definition') || t.includes('abbreviation')) {
        return {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            iconBg: 'bg-blue-100',
            iconText: 'text-blue-600',
            titleText: 'text-blue-800',
            bulletPoint: 'text-blue-500',
            icon: <BookOpen className="w-5 h-5 text-blue-600" />
        };
    }

    // Default (Core concepts, etc)
    return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconText: 'text-purple-600',
        titleText: 'text-purple-800',
        bulletPoint: 'text-purple-500',
        icon: <Lightbulb className="w-5 h-5 text-purple-600" />
    };
};

export const MorningReviewSheet: React.FC<MorningReviewSheetProps> = ({ onBack }) => {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4 animate-in fade-in print:py-0 print:px-0 print:max-w-none">
            {/* Action Bar - Hidden in Print */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 print:hidden gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <button
                    onClick={onBack}
                    className="text-xs font-black text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1 uppercase tracking-widest"
                >
                    <ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard
                </button>

                <div className="text-center sm:text-right">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Morning Review Sheet</h1>
                    <p className="text-sm font-medium text-gray-500">All 12 Units • High-Yield Points</p>
                </div>

                <button
                    onClick={() => window.print()}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    <Printer className="w-5 h-5" /> Print / Save PDF
                </button>
            </div>

            {/* Print Header - Only visible in print */}
            <div className="hidden print:block text-center mb-6 border-b-2 border-gray-900 pb-2">
                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">BusinessMaster Class 12 • Exam Morning Cheat Sheet</h1>
                <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Comprehensive High-Yield Revision • All Units (1-12)</p>
            </div>

            {/* Main Content Render */}
            <div className="space-y-12 print:space-y-0 print:grid print:grid-cols-1">
                {ALL_UNITS.map((unit, index) => (
                    <div
                        key={unit.id}
                        className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] print:shadow-none print:border-none print:rounded-none print:p-0 print:mb-8 print:break-inside-avoid"
                    >
                        {/* Unit Header */}
                        <div className="flex items-center gap-4 mb-8 print:mb-2 border-b border-gray-100 print:border-b-2 print:border-black pb-4 print:pb-1">
                            <div className="bg-gray-100 text-gray-900 font-black text-xl w-12 h-12 flex items-center justify-center rounded-xl print:text-sm print:w-8 print:h-8 print:bg-transparent print:border print:border-black">
                                {unit.id}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight print:text-lg">
                                {unit.name}
                            </h2>
                        </div>

                        {/* Cheat Sheet Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-x-4 print:gap-y-2">
                            {unit.cheatSheet.map((section: CheatSheetItem, secIdx: number) => {
                                const theme = getSectionTheme(section.title);
                                const points = section.points || section.content || [];

                                if (points.length === 0) return null;

                                return (
                                    <div
                                        key={secIdx}
                                        className={`rounded-2xl p-6 ${theme.bg} ${theme.border} border print:bg-white print:border-none print:p-0 print:break-inside-avoid`}
                                    >
                                        <div className="flex items-center gap-3 mb-4 print:mb-1">
                                            <div className={`p-2 rounded-lg ${theme.iconBg} print:hidden`}>
                                                {theme.icon}
                                            </div>
                                            <h3 className={`font-black uppercase tracking-widest text-sm ${theme.titleText} print:text-black print:text-[10pt] print:decoration-black print:underline print:underline-offset-2`}>
                                                {section.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4 print:space-y-1">
                                            {points.map((point: string, pIdx: number) => (
                                                <div key={pIdx} className="flex items-start gap-3 print:gap-2">
                                                    <span className={`mt-0.5 font-bold ${theme.bulletPoint} print:text-black print:text-[10pt]`}>•</span>
                                                    <div className="prose prose-sm prose-gray max-w-none text-gray-800 font-medium leading-relaxed print:text-black print:text-[9pt] print:leading-tight print:font-normal">
                                                        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
                                                            {point}
                                                        </ReactMarkdown>
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
            <div className="hidden print:block text-center mt-4 border-t border-gray-200 pt-4 text-gray-400 text-[8pt] uppercase tracking-widest">
                BusinessMaster Premium Prep • CBSE Class 12 • Confidence Boost Sheet
            </div>
        </div>
    );
};
