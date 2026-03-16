import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';
import { EXAM_DATES, getDaysRemaining } from '../config/exam-dates.config';

const Home = () => {
    const navigate = useNavigate();
    const { progress, getSubjectProgress, streak } = useAppContext();

    const cuetDays = useMemo(() => getDaysRemaining(EXAM_DATES.CUET_UG_2026), []);
    const mhCetDays = useMemo(() => getDaysRemaining(EXAM_DATES.MH_CET_2026), []);

    const urgencyColor = cuetDays < 30
        ? 'from-red-500 to-rose-600'
        : cuetDays < 60
            ? 'from-amber-500 to-orange-500'
            : 'from-blue-600 to-indigo-600';

    return (
        <div className="container mx-auto px-4 py-8 lg:py-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 rounded-3xl p-8 lg:p-12 mb-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center justify-between">
                <header className="max-w-2xl">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Ready for Success? 🚀
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Master the CUET &amp; MH CET BBA entrance exams with focused chapter-wise study,
                        real-time analytics, and high-yield question banks.
                    </p>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-white/80 backdrop-blur border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                            <span className="text-2xl">✨</span>
                            <div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Total XP</div>
                                <div className="text-xl font-black text-blue-600">{progress.xp}</div>
                            </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                            <span className="text-2xl">📚</span>
                            <div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Subjects Explored</div>
                                <div className="text-xl font-black text-indigo-600">
                                    {new Set(Object.keys(progress.chapterProgress || {}).map(k => k.split('_')[0])).size}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur border border-slate-200 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                            <span className="text-2xl">🔥</span>
                            <div>
                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Day Streak</div>
                                <div className="text-xl font-black text-orange-500">{streak}</div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Exam Countdown Banner */}
            <div className={`bg-gradient-to-r ${urgencyColor} rounded-2xl p-6 mb-10 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg`}>
                <div className="flex items-center gap-4">
                    <div className="text-5xl">🎯</div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Exam Countdown</div>
                        <div className="text-2xl font-extrabold">CUET UG 2026</div>
                        <div className="text-sm opacity-80">Expected: May 2026</div>
                    </div>
                </div>
                <div className="flex gap-4 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3">
                        <div className="text-3xl font-black">{cuetDays}</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">Days Left (CUET)</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3">
                        <div className="text-3xl font-black">{mhCetDays}</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-80">Days Left (MH-CET)</div>
                    </div>
                </div>
            </div>

            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <span>📚</span> Core Subjects
                    </h2>
                    <button
                        onClick={() => navigate('/analytics')}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-100 transition-colors border border-indigo-100"
                    >
                        📊 My Analytics
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SUBJECTS.map((subject) => {
                        const subjectProgress = getSubjectProgress(subject.id, subject.chapters);

                        return (
                            <button
                                key={subject.id}
                                onClick={() => navigate(`/subject/${subject.id}`)}
                                className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ring-1 ring-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 text-left overflow-hidden"
                            >
                                {/* Decorative background accent */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity -mr-8 -mt-8 rounded-full"
                                    style={{ backgroundColor: subject.color }}
                                />

                                <div className="relative z-10">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-white"
                                        style={{ backgroundColor: `${subject.color}15`, border: `1px solid ${subject.color}20` }}
                                    >
                                        {subject.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {subject.name}
                                    </h3>

                                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                                        {subject.chapters.length} Chapters • {subject.examTags.join(' & ')}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                                            <span>Progress</span>
                                            <span className="text-slate-600">{subjectProgress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full transition-all duration-1000 ease-out rounded-full"
                                                style={{
                                                    width: `${subjectProgress}%`,
                                                    backgroundColor: subject.color,
                                                    boxShadow: `0 0 10px ${subject.color}40`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                                    Start Learning <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
