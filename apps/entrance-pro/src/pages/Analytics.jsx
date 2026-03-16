import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { SUBJECTS } from '../config/subjects.config';

const Analytics = () => {
    const navigate = useNavigate();
    const { progress } = useAppContext();

    const chapterProgress = progress.chapterProgress || {};

    // --- Subject-level accuracy stats ---
    const subjectStats = useMemo(() => {
        return SUBJECTS.map(subject => {
            const records = subject.chapters
                .map(ch => chapterProgress[`${subject.id}_${ch.id}`])
                .filter(Boolean);

            const attempted = records.length;
            const avgScore = attempted > 0
                ? Math.round(records.reduce((s, r) => s + r.bestScore, 0) / attempted)
                : 0;
            const completed = records.filter(r => r.completed).length;

            return {
                id: subject.id,
                name: subject.name,
                icon: subject.icon,
                color: subject.color,
                attempted,
                total: subject.chapters.length,
                avgScore,
                completed
            };
        });
    }, [chapterProgress]);

    // --- All attempted chapters sorted by bestScore ascending (weakest first) ---
    const weakChapters = useMemo(() => {
        const chapters = [];
        SUBJECTS.forEach(subject => {
            subject.chapters.forEach(ch => {
                const key = `${subject.id}_${ch.id}`;
                const rec = chapterProgress[key];
                if (rec && rec.attempts > 0) {
                    chapters.push({
                        subjectId: subject.id,
                        chapterId: ch.id,
                        chapterName: ch.name,
                        subjectName: subject.name,
                        subjectColor: subject.color,
                        bestScore: rec.bestScore,
                        attempts: rec.attempts,
                        completed: rec.completed
                    });
                }
            });
        });
        return chapters.sort((a, b) => a.bestScore - b.bestScore);
    }, [chapterProgress]);

    const totalAttempted = Object.keys(chapterProgress).length;
    const totalCompleted = Object.values(chapterProgress).filter(r => r.completed).length;
    const overallAvg = totalAttempted > 0
        ? Math.round(Object.values(chapterProgress).reduce((s, r) => s + r.bestScore, 0) / totalAttempted)
        : 0;

    const topWeakChapters = weakChapters.slice(0, 5);
    const recommendedFocus = weakChapters.filter(c => !c.completed).slice(0, 3);

    if (totalAttempted === 0) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center max-w-md px-6">
                    <div className="text-7xl mb-6">📊</div>
                    <h1 className="text-3xl font-extrabold text-slate-900 mb-3">No Data Yet</h1>
                    <p className="text-slate-500 mb-8">Complete at least one quiz to unlock your personalized analytics dashboard.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                    >
                        Start Practising →
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-4"
                    >
                        ← HOME
                    </button>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Analytics</h1>
                    <p className="text-slate-500 mt-1">Your personal performance dashboard</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10 space-y-10">

                {/* Top KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
                        <div className="text-4xl font-black text-blue-600 mb-1">{totalAttempted}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Topics Attempted</div>
                    </div>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
                        <div className="text-4xl font-black text-emerald-600 mb-1">{totalCompleted}</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Topics Mastered</div>
                    </div>
                    <div className={`rounded-2xl border shadow-sm p-6 text-center ${overallAvg >= 60 ? 'bg-emerald-50 border-emerald-100' : overallAvg >= 40 ? 'bg-amber-50 border-amber-100' : 'bg-red-50 border-red-100'}`}>
                        <div className={`text-4xl font-black mb-1 ${overallAvg >= 60 ? 'text-emerald-600' : overallAvg >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
                            {overallAvg}%
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Overall Accuracy</div>
                    </div>
                </div>

                {/* Subject-wise Accuracy Chart */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full" />
                        Subject-wise Accuracy
                    </h2>
                    <div className="space-y-5">
                        {subjectStats.map(s => (
                            <div key={s.id}>
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">{s.icon}</span>
                                        <span className="text-sm font-bold text-slate-700">{s.name}</span>
                                    </div>
                                    <span className="text-sm font-black" style={{ color: s.color }}>
                                        {s.attempted > 0 ? `${s.avgScore}%` : 'Not started'}
                                    </span>
                                </div>
                                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: `${s.avgScore}%`,
                                            backgroundColor: s.color,
                                            opacity: s.attempted > 0 ? 1 : 0
                                        }}
                                    />
                                </div>
                                <div className="text-[10px] text-slate-400 mt-1">
                                    {s.attempted}/{s.total} topics attempted • {s.completed} mastered
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weak Area Table */}
                {topWeakChapters.length > 0 && (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-red-500 rounded-full" />
                            Weakest Topics
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                        <th className="text-left pb-3 pr-4">Topic</th>
                                        <th className="text-left pb-3 pr-4">Subject</th>
                                        <th className="text-right pb-3 pr-4">Best Score</th>
                                        <th className="text-right pb-3">Attempts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topWeakChapters.map((ch, i) => (
                                        <tr
                                            key={`${ch.subjectId}_${ch.chapterId}`}
                                            className="border-t border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors"
                                            onClick={() => navigate(`/quiz/${ch.subjectId}/${ch.chapterId}`)}
                                        >
                                            <td className="py-3 pr-4 font-medium text-slate-800">{ch.chapterName}</td>
                                            <td className="py-3 pr-4">
                                                <span
                                                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                    style={{ backgroundColor: `${ch.subjectColor}18`, color: ch.subjectColor }}
                                                >
                                                    {ch.subjectName}
                                                </span>
                                            </td>
                                            <td className="py-3 pr-4 text-right">
                                                <span className={`font-black ${ch.bestScore < 40 ? 'text-red-500' : ch.bestScore < 60 ? 'text-amber-500' : 'text-emerald-500'}`}>
                                                    {ch.bestScore}%
                                                </span>
                                            </td>
                                            <td className="py-3 text-right text-slate-400 font-medium">{ch.attempts}×</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 mt-4">Click any row to retry that quiz ↗</p>
                    </div>
                )}

                {/* Recommended Focus */}
                {recommendedFocus.length > 0 && (
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 lg:p-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-indigo-500 rounded-full" />
                            🎯 Recommended Focus
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {recommendedFocus.map(ch => (
                                <button
                                    key={`${ch.subjectId}_${ch.chapterId}`}
                                    onClick={() => navigate(`/quiz/${ch.subjectId}/${ch.chapterId}`)}
                                    className="bg-white border border-indigo-100 rounded-xl p-4 text-left hover:shadow-md hover:-translate-y-0.5 transition-all"
                                >
                                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: ch.subjectColor }}>
                                        {ch.subjectName}
                                    </div>
                                    <div className="font-bold text-slate-800 text-sm mb-2">{ch.chapterName}</div>
                                    <div className="text-2xl font-black text-red-500">{ch.bestScore}%</div>
                                    <div className="text-[10px] text-slate-400 mt-1">Best score — needs improvement</div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Analytics;
