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
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-zen-sky/10 border-t-zen-sky rounded-full animate-spin"></div>
            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] animate-pulse">Initializing Learning Guide...</div>
        </div>
    );

    if (!guideData) return (
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center p-8 text-center">
            <AlertCircle size={64} className="text-zen-terracotta mb-6 opacity-20" />
            <h2 className="text-2xl font-bold text-zen-ink italic uppercase tracking-tighter mb-4">No Study Data Detected</h2>
            <button onClick={() => navigate(-1)} className="px-8 py-3 bg-zen-ink/5 text-zen-ink/60 rounded-2xl hover:bg-zen-ink/10 transition-all font-bold text-[10px] uppercase tracking-widest border border-zen-ink/5 italic">Return to Base</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-zen-paper text-zen-ink flex flex-col selection:bg-zen-sky/10 pb-20">
            {/* Header / Briefing Identity */}
            <header className="sticky top-0 z-50 bg-zen-paper/80 backdrop-blur-3xl border-b border-zen-ink/5 h-20 flex items-center justify-between px-8 shadow-soft">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-sky/10 text-zen-ink/40 hover:text-zen-sky rounded-xl flex items-center justify-center transition-all border border-zen-ink/5"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <div>
                        <h2 className="font-bold text-zen-ink uppercase text-[10px] tracking-[0.3em] italic">{chapter?.name}</h2>
                        <p className="text-[8px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] italic">LEARNING GUIDE // {subject?.name}</p>
                    </div>
                </div>
                {isSpeaking && (
                    <div className="flex items-center gap-4 bg-zen-sky/10 border border-zen-sky/20 px-4 py-2 rounded-xl animate-pulse">
                        <Volume2 size={14} className="text-zen-sky" />
                        <span className="text-[9px] font-bold text-zen-sky uppercase tracking-widest">NARRATION ACTIVE</span>
                    </div>
                )}
            </header>

            <div className="container mx-auto px-8 py-12 max-w-7xl flex gap-12">
                {/* Tactical Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 h-[calc(100vh-160px)] sticky top-28 overflow-y-auto pr-4 scroller-hide">
                    <div className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] mb-8 italic flex items-center justify-between">
                        <span>MODULE SYLLABUS</span>
                        <List size={14} />
                    </div>
                    <div className="space-y-4">
                        {guideData.topics.map((topic, index) => (
                            <button
                                key={topic.id}
                                onClick={() => document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className={`w-full text-left p-6 rounded-[2.5rem] transition-all group border shadow-soft hover:shadow-bold ${activeTopicId === topic.id
                                    ? 'bg-zen-sky text-white border-zen-sky shadow-bold scale-[1.02]'
                                    : 'bg-white border-zen-ink/10 hover:bg-zen-sky/5 hover:border-zen-sky/20'
                                    }`}
                            >
                                <div className={`text-[9px] font-bold mb-2 uppercase tracking-widest italic ${activeTopicId === topic.id ? 'text-white/60' : 'text-zen-ink/40'}`}>
                                    UNIT {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="font-bold text-sm italic tracking-tight leading-tight uppercase group-hover:text-zen-sky transition-colors">
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
                                    <div className="w-16 h-16 rounded-[1.8rem] zen-mesh-sky border border-zen-sky/30 text-zen-sky flex items-center justify-center text-2xl font-bold italic shadow-warm">
                                        {tIdx + 1}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-zen-ink italic tracking-tighter uppercase leading-[0.9] mb-4">
                                            {topic.title}
                                        </h2>
                                        <div className="flex items-center gap-4">
                                            <div className="text-zen-sky font-bold text-[11px] uppercase tracking-[0.3em] italic">LEARNING MODULE {tIdx + 1} / {guideData.topics.length}</div>
                                            {heardTopicIds.includes(topic.id) && (
                                                <div className="flex items-center gap-2 text-[10px] font-bold text-zen-forest uppercase tracking-widest italic bg-white px-3 py-1 rounded-full border border-zen-forest/30 shadow-sm">
                                                    <ShieldCheck size={12} /> SECURED
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={() => handleSpeech(topic)}
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border shadow-sm ${speakingTopicId === topic.id ? 'bg-zen-sky text-white border-zen-sky animate-pulse shadow-bold' : 'bg-white text-zen-sky/60 border-zen-ink/10 hover:bg-zen-sky/5 hover:border-zen-sky/20'}`}
                                    >
                                        <Volume2 size={24} />
                                    </button>
                                    <button 
                                        onClick={() => toggleReadStatus(topic.id)}
                                        className={`px-8 h-14 rounded-2xl flex items-center justify-center transition-all italic border shadow-sm ${heardTopicIds.includes(topic.id) ? 'bg-zen-forest text-white border-zen-forest shadow-bold' : 'bg-white hover:bg-zen-sky/5 border-zen-ink/10 text-zen-sky/60 hover:text-zen-sky hover:border-zen-sky/20'}`}
                                    >
                                        {heardTopicIds.includes(topic.id) ? (
                                            <div className="flex flex-col items-center leading-none">
                                                <span className="text-[8px] font-bold uppercase tracking-widest opacity-80 mb-1">MODULE</span>
                                                <span className="text-[11px] font-black uppercase tracking-tighter">SECURED</span>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center leading-none">
                                                <span className="text-[8px] font-bold uppercase tracking-widest opacity-60 mb-1 italic">MARK</span>
                                                <span className="text-[11px] font-black uppercase tracking-tighter">READ</span>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-16">
                                {/* Core Concept */}
                                <section className="relative group">
                                    <div className="absolute -left-6 top-8 w-2 h-[calc(100%-64px)] bg-zen-sky/20 rounded-full group-hover:bg-zen-sky transition-colors"></div>
                                    <div className="zen-mesh-sky border border-zen-ink/10 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden shadow-bold">
                                        <div className="absolute -right-24 -top-24 w-64 h-64 bg-zen-sky/10 blur-[100px] rounded-full"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-white rounded-2xl border border-zen-ink/10 text-zen-sky shadow-sm">
                                                <BookOpen size={20} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Conceptual Core</h3>
                                        </div>
                                        <div className="prose prose-slate max-w-none prose-p:text-zen-ink/80 prose-p:leading-relaxed prose-strong:text-zen-ink prose-strong:font-bold prose-strong:italic prose-p:text-lg">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {topic.content?.coreConcept || topic.summary || ""}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </section>

                                {/* Formula Bank */}
                                {topic.content?.formulaBank && (
                                    <section className="zen-mesh-warm border border-zen-sand/30 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden group shadow-bold">
                                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-zen-sand/30 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-white rounded-2xl border border-zen-sand/30 text-zen-sand shadow-sm">
                                                <Target size={20} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Strategic Formulas</h3>
                                        </div>
                                        <div className="bg-white/80 border border-zen-ink/5 p-8 rounded-[2.5rem] font-mono text-zen-ink/80 text-xl leading-relaxed whitespace-pre-wrap italic shadow-inner-soft">
                                            {topic.content.formulaBank}
                                        </div>
                                    </section>
                                )}

                                {/* Hacker Logic / Street-Smart */}
                                {topic.content?.logic && (
                                    <section className="zen-mesh-vibrant border border-zen-forest/30 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden group shadow-bold">
                                        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-zen-forest/20 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-white rounded-2xl border border-zen-forest/30 text-zen-forest shadow-sm">
                                                <Zap size={20} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Street-Smart Logic</h3>
                                        </div>
                                        <div className="bg-white/80 border border-zen-forest/20 p-8 rounded-[2.5rem] text-zen-forest text-xl leading-relaxed whitespace-pre-wrap italic relative z-10 shadow-inner-soft">
                                            <div className="text-[10px] font-bold text-zen-forest uppercase tracking-[0.4em] mb-4">⚡ INSIGHT HACK</div>
                                            {topic.content.logic}
                                        </div>
                                    </section>
                                )}

                                {/* Examiner Traps */}
                                {(topic.content?.traps || topic.examAngle) && (
                                    <section className="zen-mesh-sky border border-zen-terracotta/20 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden shadow-bold">
                                        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-zen-terracotta/10 blur-[80px] rounded-full"></div>
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className="p-3 bg-white rounded-2xl border border-zen-terracotta/10 text-zen-terracotta shadow-sm">
                                                <AlertCircle size={20} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-zen-ink italic tracking-tighter uppercase">Pitfall Evasion</h3>
                                        </div>
                                        <div className="bg-white/80 border border-zen-terracotta/20 p-8 rounded-[2.5rem] text-zen-ink text-xl leading-relaxed italic whitespace-pre-wrap relative z-10 shadow-inner-soft">
                                            <div className="text-[10px] font-bold text-zen-terracotta uppercase tracking-[0.4em] mb-4">⚠️ ATTENTION REQUIRED</div>
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
