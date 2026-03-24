import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, BookOpen, Zap, Clock, ShieldCheck, FlaskConical, Target, Sparkles, AlertCircle, Volume2, Pause, Play, Square, List } from 'lucide-react';

const StudyGuide = () => {
    const { subjectId, chapterId } = useParams();
    const navigate = useNavigate();
    const { loadChapterData } = useAppContext();

    const [guideData, setGuideData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('concept');
    const [activeTopicId, setActiveTopicId] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [speakingTopicId, setSpeakingTopicId] = useState(null);
    const [heardTopicIds, setHeardTopicIds] = useState([]);

    const PROGRESS_KEY = `heard-${subjectId}-${chapterId}`;

    useEffect(() => {
        const saved = localStorage.getItem(PROGRESS_KEY);
        if (saved) {
            try {
                setHeardTopicIds(JSON.parse(saved));
            } catch (e) {
                console.error("Error parsing progress:", e);
            }
        }
    }, [PROGRESS_KEY]);

    const markAsHeard = (topicId) => {
        setHeardTopicIds(prev => {
            if (prev.includes(topicId)) return prev;
            const updated = [...prev, topicId];
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const toggleReadStatus = (topicId) => {
        setHeardTopicIds(prev => {
            const isRead = prev.includes(topicId);
            const updated = isRead 
                ? prev.filter(id => id !== topicId)
                : [...prev, topicId];
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const subject = getSubjectById(subjectId);
    const chapter = getChapterById(subjectId, chapterId);

    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            const data = await loadChapterData(subjectId, chapterId);
            if (data && data.studyGuide) {
                setGuideData(data.studyGuide);
                if (data.studyGuide.topics.length > 0) {
                    setActiveTopicId(data.studyGuide.topics[0].id);
                }
            }
            setIsLoading(false);
        };
        fetchContent();

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, [subjectId, chapterId, loadChapterData]);

    // SCROLL-SPY
    useEffect(() => {
        if (!guideData) return;
        const observer = new IntersectionObserver(
            (entries) => {
                const intersecting = entries.filter(e => e.isIntersecting);
                if (intersecting.length > 0) {
                    const bestEntry = intersecting.reduce((prev, curr) => {
                        return curr.intersectionRatio > prev.intersectionRatio ? curr : prev;
                    });
                    setActiveTopicId(bestEntry.target.id);
                }
            },
            { threshold: [0, 0.1], rootMargin: '-10% 0px -40% 0px' }
        );

        guideData.topics.forEach((topic) => {
            const el = document.getElementById(topic.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [guideData]);

    const handleSpeech = (topic) => {
        if (!window.speechSynthesis) return;
        if (isSpeaking && speakingTopicId === topic.id) {
            if (isPaused) {
                window.speechSynthesis.resume();
                setIsPaused(false);
            } else {
                window.speechSynthesis.pause();
                setIsPaused(true);
            }
            return;
        }

        window.speechSynthesis.cancel();
        
        const cleanMarkdown = (text) => text ? text.replace(/[#*`_~]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1') : "";
        const textToRead = `${topic.title}. ${cleanMarkdown(topic.content?.coreConcept || topic.summary)}`;
        
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.onstart = () => { setIsSpeaking(true); setIsPaused(false); setSpeakingTopicId(topic.id); };
        utterance.onend = () => { setIsSpeaking(false); setIsPaused(false); setSpeakingTopicId(null); markAsHeard(topic.id); };
        window.speechSynthesis.speak(utterance);
    };

    if (isLoading) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-indigo/20 border-t-brand-indigo rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Initializing Deep Intel Briefing...</div>
        </div>
    );

    if (!guideData) return (
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center p-8 text-center">
            <AlertCircle size={64} className="text-brand-rose mb-6 opacity-20" />
            <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">No Intel Data Detected</h2>
            <button onClick={() => navigate(-1)} className="px-8 py-3 bg-white/5 text-slate-400 rounded-2xl hover:bg-white/10 transition-all font-black text-[10px] uppercase tracking-widest border border-white/5 italic">Return to Base</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-brand-slate text-slate-100 flex flex-col selection:bg-brand-indigo/30 pb-20">
            {/* Header / Briefing Identity */}
            <header className="sticky top-0 z-50 bg-brand-slate/80 backdrop-blur-3xl border-b border-white/5 h-20 flex items-center justify-between px-8">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-white/5 hover:bg-brand-indigo/20 text-slate-500 hover:text-brand-indigo rounded-xl flex items-center justify-center transition-all border border-white/5"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-black text-white uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">DEEP INTEL BRIEFING // {subject?.name}</p>
                    </div>
                </div>
                {isSpeaking && (
                    <div className="flex items-center gap-4 bg-brand-indigo/10 border border-brand-indigo/20 px-4 py-2 rounded-xl animate-pulse">
                        <Volume2 size={14} className="text-brand-indigo" />
                        <span className="text-[9px] font-black text-brand-indigo uppercase tracking-widest">NARRATION ACTIVE</span>
                    </div>
                )}
            </header>

            <div className="container mx-auto px-8 py-12 max-w-7xl flex gap-12">
                {/* Tactical Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 h-[calc(100vh-160px)] sticky top-28 overflow-y-auto pr-4 scroller-hide">
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-8 italic flex items-center justify-between">
                        <span>MISSION SYLLABUS</span>
                        <List size={14} />
                    </div>
                    <div className="space-y-4">
                        {guideData.topics.map((topic, index) => (
                            <button
                                key={topic.id}
                                onClick={() => document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className={`w-full text-left p-6 rounded-[2rem] transition-all group border ${activeTopicId === topic.id
                                    ? 'bg-brand-indigo border-brand-indigo/50 shadow-glow-indigo/20'
                                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                                    }`}
                            >
                                <div className={`text-[9px] font-black mb-2 uppercase tracking-widest italic ${activeTopicId === topic.id ? 'text-indigo-200' : 'text-slate-600'}`}>
                                    UNIT {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="font-black text-sm italic tracking-tight leading-tight uppercase">
                                    {topic.title.replace(/^[0-9.]+\s/, '')}
                                </div>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content Briefing */}
                <main className="flex-grow max-w-4xl min-w-0">
                    {guideData.topics.map((topic, tIdx) => (
                        <div key={topic.id} id={topic.id} className="mb-40 last:mb-0 scroll-mt-32">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo flex items-center justify-center text-2xl font-black italic shadow-glow-indigo/5">
                                        {tIdx + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-4xl lg:text-5xl font-black text-white italic tracking-tighter uppercase leading-none mb-3">
                                            {topic.title}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            <div className="text-brand-indigo font-black text-[9px] uppercase tracking-[0.4em] italic">INTELLIGENCE MODULE {tIdx + 1}/{guideData.topics.length}</div>
                                            {heardTopicIds.includes(topic.id) && (
                                                <div className="flex items-center gap-2 text-[9px] font-black text-brand-emerald uppercase tracking-widest italic bg-brand-emerald/10 px-2 py-0.5 rounded-full border border-brand-emerald/20">
                                                    <ShieldCheck size={10} /> SECURED
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => handleSpeech(topic)}
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${speakingTopicId === topic.id ? 'bg-brand-indigo text-white border-brand-indigo/50 animate-pulse shadow-glow-indigo/20' : 'bg-white/5 text-slate-500 border-white/5 hover:bg-white/10'}`}
                                    >
                                        <Volume2 size={20} />
                                    </button>
                                    <button 
                                        onClick={() => toggleReadStatus(topic.id)}
                                        className={`px-6 h-12 rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest transition-all italic border ${heardTopicIds.includes(topic.id) ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30 shadow-glow-emerald/5' : 'bg-white/5 text-slate-500 border-white/5 hover:bg-white/10'}`}
                                    >
                                        {heardTopicIds.includes(topic.id) ? 'MISSION COMPLETE' : 'SECURE DATA'}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-16">
                                {/* Core Concept */}
                                <section className="relative group">
                                    <div className="absolute -left-4 top-0 w-1 h-full bg-brand-indigo/20 rounded-full group-hover:bg-brand-indigo transition-colors"></div>
                                    <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-10 lg:p-14 backdrop-blur-3xl relative overflow-hidden">
                                        <div className="absolute -right-24 -top-24 w-64 h-64 bg-brand-indigo/5 blur-[80px] rounded-full"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-brand-indigo/10 rounded-2xl border border-brand-indigo/20 text-brand-indigo">
                                                <BookOpen size={20} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Conceptual Core</h3>
                                        </div>
                                        <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-p:leading-relaxed prose-strong:text-white prose-strong:font-black prose-strong:italic prose-p:text-lg">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {topic.content?.coreConcept || topic.summary || ""}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </section>

                                {/* Formula Bank */}
                                {topic.content?.formulaBank && (
                                    <section className="bg-brand-amber/5 border border-brand-amber/20 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">
                                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-amber/10 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-brand-amber/10 rounded-2xl border border-brand-amber/20 text-brand-amber">
                                                <Target size={20} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Strategic Formulas</h3>
                                        </div>
                                        <div className="bg-brand-slate/50 border border-white/5 p-8 rounded-[2rem] font-mono text-brand-amber text-lg leading-relaxed whitespace-pre-wrap italic">
                                            {topic.content.formulaBank}
                                        </div>
                                    </section>
                                )}

                                {/* Hacker Logic / Street-Smart */}
                                {topic.content?.logic && (
                                    <section className="bg-brand-emerald/5 border border-brand-emerald/20 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group">
                                        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-emerald/10 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-brand-emerald/10 rounded-2xl border border-brand-emerald/20 text-brand-emerald">
                                                <Zap size={20} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Street-Smart Logic</h3>
                                        </div>
                                        <div className="bg-brand-slate/50 border border-emerald-900/30 p-8 rounded-[2rem] text-brand-emerald/90 text-lg leading-relaxed whitespace-pre-wrap italic relative z-10">
                                            <div className="text-[10px] font-black text-brand-emerald uppercase tracking-[0.4em] mb-4">⚡ HACKER DETECTED</div>
                                            {topic.content.logic}
                                        </div>
                                    </section>
                                )}

                                {/* Examiner Traps */}
                                {(topic.content?.traps || topic.examAngle) && (
                                    <section className="bg-brand-rose/5 border border-brand-rose/20 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden">
                                        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-brand-rose/10 blur-[60px] rounded-full"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-brand-rose/10 rounded-2xl border border-brand-rose/20 text-brand-rose">
                                                <AlertCircle size={20} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Evasion Tactics</h3>
                                        </div>
                                        <div className="bg-brand-slate/50 border border-brand-rose/30 p-8 rounded-[2rem] text-slate-200 text-lg leading-relaxed italic whitespace-pre-wrap relative z-10">
                                            <div className="text-[10px] font-black text-brand-rose uppercase tracking-[0.4em] mb-4">⚠️ THREAT DETECTED</div>
                                            {topic.content?.traps || topic.examAngle}
                                        </div>
                                    </section>
                                )}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default StudyGuide;
