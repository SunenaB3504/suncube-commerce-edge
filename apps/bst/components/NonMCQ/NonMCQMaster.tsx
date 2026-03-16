import React, { useState, useMemo } from 'react';
import { getAllNonMCQs, NonMCQWithUnit } from '../../utils/nonMcqAggregator';
import { ChevronRight, BrainCircuit, BookType, Layers } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <button
                onClick={onBack}
                className="text-xs font-black text-teal-700 hover:text-teal-900 transition-colors flex items-center gap-1 mb-8 uppercase tracking-widest"
            >
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to Dashboard
            </button>

            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                {/* Decorative Blooms */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 w-full">
                    <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 mx-auto shadow-inner border border-teal-100">
                        <BookType className="w-10 h-10" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                        Subjective Mastery
                    </h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                        Master the art of scoring in Long & Short Answer questions. We have compiled all <strong className="text-teal-700">{nonMcqData.length}</strong> subjective questions across the curriculum with detailed AI Strategies.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {/* Batch 1 Card */}
                        <div
                            onClick={() => setActiveBatch('batch1')}
                            className="bg-white border-2 border-gray-100 hover:border-teal-400 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl group text-left relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-24 h-24 bg-teal-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-teal-100 text-teal-700 rounded-lg">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Batch 1</h3>
                            </div>
                            <p className="text-gray-500 font-medium text-sm mb-4">
                                First half of the curriculum covering foundational theory and applications.
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800">
                                    {batch1.length} Questions
                                </span>
                                <div className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-sm font-bold">
                                    Start <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>

                        {/* Batch 2 Card */}
                        <div
                            onClick={() => setActiveBatch('batch2')}
                            className="bg-white border-2 border-gray-100 hover:border-blue-400 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl group text-left relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                                    <BrainCircuit className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Batch 2</h3>
                            </div>
                            <p className="text-gray-500 font-medium text-sm mb-4">
                                Second half emphasizing advanced concepts and case-based analysis.
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800">
                                    {batch2.length} Questions
                                </span>
                                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-sm font-bold">
                                    Start <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
