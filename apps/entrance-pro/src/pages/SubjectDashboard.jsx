import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getSubjectById } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';

const SubjectDashboard = () => {
    const { subjectId } = useParams();
    const navigate = useNavigate();
    const { getChapterProgress, getSubjectProgress } = useAppContext();
    const [animatedProgress, setAnimatedProgress] = useState(0);

    const subject = getSubjectById(subjectId);

    // Trigger ring fill animation on mount
    useEffect(() => {
        if (subject) {
            const rawProgress = getSubjectProgress(subject.id, subject.chapters);
            // reset to 0 if subject changes, then animate up
            setAnimatedProgress(0);
            const timer = setTimeout(() => {
                setAnimatedProgress(rawProgress);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [subject, getSubjectProgress]);

    if (!subject) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Subject not found</h1>
                <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
            </div>
        );
    }

    const overallProgress = getSubjectProgress(subject.id, subject.chapters);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8 lg:py-12">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-6"
                    >
                        ← ALL SUBJECTS
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div
                                className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-inner"
                                style={{ backgroundColor: `${subject.color}15` }}
                            >
                                {subject.icon}
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                                    {subject.name}
                                </h1>
                                <p className="text-slate-500 mt-1 font-medium">
                                    {subject.chapters.length} Chapters • {subject.examTags.join(' & ')} Exam Aligned
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4 min-w-[240px]">
                            <div className="relative w-16 h-16 shrink-0">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        className="stroke-slate-200 fill-none"
                                        strokeWidth="3"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="stroke-blue-600 fill-none transition-all duration-1000 ease-out"
                                        strokeWidth="3"
                                        strokeDasharray={`${animatedProgress}, 100`}
                                        strokeLinecap="round"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        style={{ stroke: subject.color }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700">
                                    {animatedProgress}%
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mastery</div>
                                <div className="text-lg font-bold text-slate-800">Overall Progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapters Grid */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                    <span className="w-2 h-6 rounded-full" style={{ backgroundColor: subject.color }} />
                    Syllabus Chapters
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subject.chapters.map((chapter, index) => {
                        const progress = getChapterProgress(subject.id, chapter.id);

                        return (
                            <div
                                key={chapter.id}
                                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-6"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-sm font-bold text-slate-400">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 leading-tight">{chapter.name}</h3>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                                                {chapter.questionCount || 0} Questions Available
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {progress.completed && <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Completed</span>}
                                    </div>
                                </div>

                                {chapter.questionCount > 0 ? (
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        <button
                                            onClick={() => navigate(`/study/${subject.id}/${chapter.id}`)}
                                            className="flex items-center justify-center gap-1.5 py-3 px-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors border border-slate-100"
                                        >
                                            📖 STUDY
                                        </button>
                                        <button
                                            onClick={() => navigate(`/flashcards/${subject.id}/${chapter.id}`)}
                                            className="flex items-center justify-center gap-1.5 py-3 px-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors border border-blue-100"
                                        >
                                            🎴 CARDS
                                        </button>
                                        <button
                                            onClick={() => navigate(`/quiz/${subject.id}/${chapter.id}`)}
                                            className="flex items-center justify-center gap-1.5 py-3 px-3 text-white rounded-xl font-bold text-xs hover:opacity-90 transition-all shadow-sm"
                                            style={{ backgroundColor: subject.color }}
                                        >
                                            🎯 QUIZ
                                        </button>
                                        <button
                                            onClick={() => navigate(`/timed-practice/${subject.id}/${chapter.id}`)}
                                            className="flex items-center justify-center gap-1.5 py-3 px-3 bg-amber-500 text-white rounded-xl font-bold text-xs hover:bg-amber-600 transition-all shadow-sm shadow-amber-100"
                                        >
                                            ⏱️ TIMED
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
                                        <span className="h-px flex-1 bg-slate-100" />
                                        Content Coming Soon
                                        <span className="h-px flex-1 bg-slate-100" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SubjectDashboard;
