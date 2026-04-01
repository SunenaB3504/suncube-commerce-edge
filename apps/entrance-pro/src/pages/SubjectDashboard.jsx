import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUBJECTS } from '../config/subjects.config';
import { useAppContext } from '../store/AppContext';
import { ChevronLeft, BookOpen, Zap, Clock, ShieldCheck, FlaskConical, Target } from 'lucide-react';

const SubjectDashboard = () => {
    const { subjectId } = useParams();
    const navigate = useNavigate();
    const { getChapterProgress, getSubjectProgress } = useAppContext();

    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center p-8 text-center">
            <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">Subject Not Found</h2>
            <button onClick={() => navigate('/')} className="px-8 py-3 bg-white/5 text-slate-400 rounded-2xl hover:bg-white/10 transition-all font-black text-[10px] uppercase tracking-widest border border-white/5 italic">Return to Command Center</button>
        </div>
    );

    const subjectProgress = getSubjectProgress(subjectId, subject.chapters);

    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col">
            <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                {/* Header / Mission Briefing */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 bg-gradient-to-br from-white via-white to-zen-sky/10 border border-zen-ink/5 p-12 lg:p-16 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group shadow-soft">
                    <div className="absolute -right-24 -top-24 w-96 h-96 opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-[120px] rounded-full" style={{ backgroundColor: subject.color }}></div>
                    
                    <div className="relative z-10 text-center md:text-left">
                        <button 
                            onClick={() => navigate('/')} 
                            className="inline-flex items-center gap-2 text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest hover:text-zen-sky transition-colors mb-8 italic"
                        >
                            <ChevronLeft size={14} /> BACK TO LEARNING HUB
                        </button>
                        <div className="flex items-center gap-6 justify-center md:justify-start mb-6">
                            <div className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-glow-amber/5 border border-white/10" style={{ backgroundColor: `${subject.color}15` }}>
                                <span className="drop-shadow-lg">{subject.icon}</span>
                            </div>
                            <div>
                                <h1 className="text-5xl lg:text-6xl font-black text-white italic tracking-tighter leading-none">{subject.name}</h1>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3 italic">STRATEGIC SECTOR // {subject.examTags.join(' & ')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 bg-white/60 border border-zen-ink/5 p-8 rounded-[2.5rem] backdrop-blur-md min-w-[280px] shadow-sm">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.3em] italic">MODULE MASTERY</span>
                            <span className="text-3xl font-bold text-zen-ink italic tracking-tighter">{subjectProgress}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-6">
                            <div 
                                className="h-full transition-all duration-1000 shadow-glow-emerald/40" 
                                style={{ width: `${subjectProgress}%`, backgroundColor: subject.color }}
                            ></div>
                        </div>
                        <div className="flex items-center gap-3 text-[9px] font-bold text-zen-ink/40 uppercase tracking-[0.2em] italic">
                            <ShieldCheck size={14} className="text-zen-forest" /> {subject.chapters.length} MODULES READY
                        </div>
                    </div>
                </div>

                {/* Chapter Selection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subject.chapters.map((chapter) => {
                        const chapterData = getChapterProgress(subjectId, chapter.id);
                        const chapterProgress = chapterData.bestScore;
                        const isSecure = chapterProgress >= 80;

                        return (
                            <div 
                                key={chapter.id}
                                className="group bg-gradient-to-br from-white via-white to-zen-sky/[0.04] border border-zen-ink/5 p-10 rounded-[2.5rem] hover:shadow-warm transition-all flex flex-col relative overflow-hidden"
                            >
                                {/* Visual Marker */}
                                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${isSecure ? 'bg-brand-emerald' : 'bg-brand-amber'}`}></div>

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-2xl font-bold text-zen-ink italic tracking-tight group-hover:text-zen-sky transition-colors mb-2">{chapter.name}</h3>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2.5 h-2.5 rounded-full ${isSecure ? 'bg-zen-forest' : 'bg-zen-sky'} opacity-40 shadow-sm`}></div>
                                            <span className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest italic">
                                                {isSecure ? 'MODULE SECURED' : 'NEEDS FOCUS'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-zen-ink italic tracking-tighter leading-none">{chapterProgress}%</div>
                                        <div className="text-[9px] font-bold text-zen-ink/30 uppercase tracking-widest mt-1">MASTERY SCORE</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                                    <button 
                                        onClick={() => navigate(`/study/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/60 rounded-2xl border border-zen-ink/5 hover:bg-zen-sky/10 hover:border-zen-sky/30 hover:text-zen-sky transition-all group/btn shadow-sm"
                                    >
                                        <BookOpen size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest italic">EXPLORE</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/quiz/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/60 rounded-2xl border border-zen-ink/5 hover:bg-zen-forest/10 hover:border-zen-forest/30 hover:text-zen-forest transition-all group/btn shadow-sm"
                                    >
                                        <FlaskConical size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest italic">PRACTICE</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/timed-practice/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/60 rounded-2xl border border-zen-ink/5 hover:bg-zen-sky/10 hover:border-zen-sky/30 hover:text-zen-sky transition-all group/btn shadow-sm"
                                    >
                                        <Clock size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-bold uppercase tracking-widest italic">CHALLENGE</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SubjectDashboard;
