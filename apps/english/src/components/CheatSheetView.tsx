import React from 'react';
import { ArrowLeft, Printer } from 'lucide-react';
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
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-royal-600 font-semibold hover:text-royal-800 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
                </button>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-royal-600 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-royal-700 transition-colors"
                >
                    <Printer size={18} /> Print Cheat Sheet
                </button>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-200">
                <div
                    className="prose prose-slate max-w-none print:prose-sm"
                    dangerouslySetInnerHTML={{ __html: morningReviewContent }}
                />
            </div>
        </div>
    );
}
