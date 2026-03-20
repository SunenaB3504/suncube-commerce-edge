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
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col">
            <div className="container mx-auto px-6 py-12 lg:py-20 max-w-7xl">
                {/* Header / Mission Briefing */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 bg-white/[0.02] border border-white/5 p-12 lg:p-16 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group">
                    <div className="absolute -right-24 -top-24 w-96 h-96 opacity-5 group-hover:opacity-10 transition-opacity duration-700 blur-[120px] rounded-full" style={{ backgroundColor: subject.color }}></div>
                    
                    <div className="relative z-10 text-center md:text-left">
                        <button 
                            onClick={() => navigate('/')} 
                            className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors mb-8 italic"
                        >
                            <ChevronLeft size={14} /> ABORT TO COMMAND CENTER
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

                    <div className="relative z-10 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md min-w-[280px]">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">SECTOR INTEGRITY</span>
                            <span className="text-3xl font-black text-white italic tracking-tighter">{subjectProgress}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-6">
                            <div 
                                className="h-full transition-all duration-1000 shadow-glow-emerald/40" 
                                style={{ width: `${subjectProgress}%`, backgroundColor: subject.color }}
                            ></div>
                        </div>
                        <div className="flex items-center gap-3 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">
                            <ShieldCheck size={14} className="text-brand-emerald" /> {subject.chapters.length} OPERATIONAL UNITS DETECTED
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
                                className="group bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all flex flex-col shadow-2xl relative overflow-hidden"
                            >
                                {/* Visual Marker */}
                                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 ${isSecure ? 'bg-brand-emerald' : 'bg-brand-amber'}`}></div>

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="flex-1 pr-4">
                                        <h3 className="text-2xl font-black text-white italic tracking-tight group-hover:text-brand-amber transition-colors mb-2">{chapter.name}</h3>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${isSecure ? 'bg-brand-emerald animate-pulse' : 'bg-brand-amber animate-pulse'}`}></div>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">
                                                {isSecure ? 'UNIT SECURED' : 'DATA CORRUPTION RISK'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-white italic tracking-tighter leading-none">{chapterProgress}%</div>
                                        <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-1">LOGIC GAIN</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                                    <button 
                                        onClick={() => navigate(`/study/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-brand-indigo/10 hover:border-brand-indigo/30 hover:text-brand-indigo transition-all group/btn"
                                    >
                                        <BookOpen size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-black uppercase tracking-widest italic">INTEL</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/quiz/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-brand-emerald/10 hover:border-brand-emerald/30 hover:text-brand-emerald transition-all group/btn"
                                    >
                                        <FlaskConical size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-black uppercase tracking-widest italic">DRILL</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/flashcards-speed/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-brand-amber/10 hover:border-brand-amber/30 hover:text-brand-amber transition-all group/btn"
                                    >
                                        <Zap size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-black uppercase tracking-widest italic">RAPID</span>
                                    </button>
                                    <button 
                                        onClick={() => navigate(`/timed-practice/${subjectId}/${chapter.id}`)}
                                        className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-brand-rose/10 hover:border-brand-rose/30 hover:text-brand-rose transition-all group/btn"
                                    >
                                        <Clock size={20} className="group-hover/btn:scale-110 transition-transform" />
                                        <span className="text-[9px] font-black uppercase tracking-widest italic">STRESS</span>
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
