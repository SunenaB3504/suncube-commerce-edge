import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../store/AppContext';
import { getSubjectById, getChapterById } from '../config/subjects.config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

    const NARRATIVE_SUBJECTS = ['business-studies', 'economics', 'english', 'gk-current-affairs', 'computer-awareness', 'static-gk'];
    const isNarrative = NARRATIVE_SUBJECTS.includes(subjectId);

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
                // Trigger MathJax typesetting
                if (window.MathJax) {
                    setTimeout(() => window.MathJax.typesetPromise(), 500);
                }
            }
            setIsLoading(false);
        };
        fetchContent();

        // Cleanup speech on unmount
        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, [subjectId, chapterId, loadChapterData]);

    // SCROLL-SPY: Detect active topic
    useEffect(() => {
        if (!guideData) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that has the largest intersection ratio or is most 'top-aligned'
                const intersecting = entries.filter(e => e.isIntersecting);
                if (intersecting.length > 0) {
                    // Sort by how much the element is in view and its position
                    // We prefer the one closest to the top margin
                    const bestEntry = intersecting.reduce((prev, curr) => {
                        return curr.intersectionRatio > prev.intersectionRatio ? curr : prev;
                    });
                    setActiveTopicId(bestEntry.target.id);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.5, 1.0],
                rootMargin: '-80px 0px -50% 0px' // Adjust for header height (64px + 50px-ish)
            }
        );

        guideData.topics.forEach((topic) => {
            const el = document.getElementById(topic.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [guideData]);

    if (isLoading) return <div className="h-screen flex items-center justify-center text-slate-400 font-medium">Loading Study Guide...</div>;

    if (!guideData) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Study guide not yet available for this chapter</h1>
                <button onClick={() => navigate(-1)} className="text-blue-600 hover:underline">Go Back</button>
            </div>
        );
    }

    const sections = [
        { id: 'concept', label: 'Core Concept', icon: '📖' },
        { id: 'formulas', label: 'Formula Bank', icon: '🧮' },
        { id: 'logic', label: 'Step-by-Step Logic', icon: '🧩' },
        { id: 'traps', label: 'Examiner Traps', icon: '⚠️' },
        { id: 'examples', label: 'Practical Examples', icon: '🎓' },
        { id: 'speed', label: 'Speed Summary', icon: '⚡' }
    ];

    // Helper for SUBMENU inside Core Concepts
    const ConceptSubMenu = ({ text, topicId }) => {
        const items = (text || "").split('\n')
            .filter(line => /^\d+\.\s/.test(line))
            .map(line => {
                const label = line.match(/^\d+\.\s(.*)/)[1];
                const cleanLabel = label.replace(/\*\*/g, '').replace(/__/g, '').split(/[():-]/)[0].trim();
                const subId = `${topicId}-pt-${cleanLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 15)}`;
                return { id: subId, label: cleanLabel };
            });

        if (items.length === 0) return null;

        return (
            <div className="flex flex-wrap items-center gap-2 mb-8 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-3 border-r border-slate-200 pr-3">JUMP TO:</span>
                {items.map(item => (
                    <button
                        key={item.id}
                        onClick={() => {
                            const el = document.getElementById(item.id);
                            if (el) {
                                const offset = 180; // Header + Secondary Nav + Padding
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-bold text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm hover:translate-y-[-1px]"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        );
    };

    const handleSpeech = (topic) => {
        if (!window.speechSynthesis) {
            alert("Sorry, your browser doesn't support Text-to-Speech.");
            return;
        }

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

        // Cancel existing speech
        window.speechSynthesis.cancel();

        const cleanMarkdown = (text) => {
            if (!text) return "";
            return text
                .replace(/[#*`_~]/g, '') // Remove markdown symbols
                .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Keep link text, remove URL
                .replace(/\\/g, ''); // Remove backslashes
        };

        const textToRead = `
            Topic: ${topic.title}.
            Core Concept: ${cleanMarkdown(topic.content?.coreConcept || topic.summary)}.
            ${topic.content?.logic ? `Key Logic: ${cleanMarkdown(topic.content.logic)}.` : ''}
            ${topic.content?.traps ? `Important Note: ${cleanMarkdown(topic.content.traps)}.` : ''}
            ${topic.content?.examples ? `Practical Examples: ${topic.content.examples.map((ex, i) => `Example ${i + 1}: Question: ${cleanMarkdown(ex.q)}. Answer: ${cleanMarkdown(ex.a)}`).join('. ')}.` : ''}
        `;

        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.rate = 1;
        utterance.pitch = 1;
        
        utterance.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
            setSpeakingTopicId(topic.id);
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            setSpeakingTopicId(null);
            markAsHeard(topic.id);
        };

        utterance.onerror = () => {
            setIsSpeaking(false);
            setSpeakingTopicId(null);
        };

        window.speechSynthesis.speak(utterance);
    };

    const stopSpeech = () => {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setIsPaused(false);
            setSpeakingTopicId(null);
        }
    };

    const topicHasSection = (topicId, sectionId) => {
        const topic = guideData.topics.find(t => t.id === topicId);
        if (!topic) return false;

        switch (sectionId) {
            case 'concept': return !!(topic.content?.coreConcept || topic.summary);
            case 'formulas': return !!topic.content?.formulaBank;
            case 'logic': return !!(topic.content?.logic || topic.keyPoints);
            case 'traps': return !!(topic.content?.traps || topic.examAngle);
            case 'examples': return !!topic.content?.examples;
            case 'speed': return !!topic.content?.speedSummary;
            default: return false;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Top Navigation */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
                    >
                        ← BACK
                    </button>
                    <div className="flex items-center gap-3">
                        <span className="p-1.5 rounded-lg bg-orange-50 text-orange-600 text-lg">{subject.icon}</span>
                        <h1 className="font-extrabold text-slate-900 tracking-tight">{chapter.name}</h1>
                    </div>
                    <div className="hidden sm:block px-4 py-1.5 rounded-full bg-blue-50 text-[10px] font-black text-blue-600 text-center uppercase tracking-widest">
                        {guideData.topics.length} LESSONS
                    </div>
                </div>

                {/* Speech Control Banner */}
                {isSpeaking && (
                    <div className="bg-blue-600 text-white py-2 px-4 shadow-lg animate-in slide-in-from-top duration-300">
                        <div className="container mx-auto flex items-center justify-between">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="animate-pulse">🔊</span>
                                <span className="text-[11px] font-bold uppercase tracking-widest truncate">
                                    {isPaused ? 'Paused:' : 'Listening to:'} {guideData.topics.find(t => t.id === speakingTopicId)?.title}
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => handleSpeech(guideData.topics.find(t => t.id === speakingTopicId))}
                                    className="p-1 px-3 bg-white/20 hover:bg-white/30 rounded-lg text-[10px] font-bold tracking-widest"
                                >
                                    {isPaused ? 'RESUME' : 'PAUSE'}
                                </button>
                                <button 
                                    onClick={stopSpeech}
                                    className="p-1 px-3 bg-red-500/80 hover:bg-red-500 rounded-lg text-[10px] font-bold tracking-widest"
                                >
                                    STOP
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Granular Section Nav - NOW CONTEXTUAL */}
                <div className="bg-slate-50/50 border-t border-slate-100 overflow-x-auto scroller-hide">
                    <div className="container mx-auto px-4 flex">
                        {sections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => {
                                    setActiveSection(sec.id);
                                    // Contextual Scroll! Jumps to the component for the ACTIVE topic
                                    document.getElementById(`${activeTopicId}-${sec.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className={`flex items-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all ${activeSection === sec.id
                                    ? 'border-blue-600 text-blue-600 bg-white'
                                    : 'border-transparent text-slate-400 hover:text-slate-600'
                                    } ${(!topicHasSection(activeTopicId, sec.id)) ? 'opacity-30 grayscale cursor-not-allowed' : ''}`}
                            >
                                <span>{sec.icon}</span>
                                {sec.label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 flex gap-8">
                {/* Topic Sidebar */}
                <aside className="hidden lg:block w-72 shrink-0 h-[calc(100vh-160px)] sticky top-[138px] overflow-y-auto pr-4 scrollbar-thin">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2 flex items-center justify-between">
                        <span>Chapter Syllabus</span>
                        <span className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center text-[8px] text-slate-500">?</span>
                    </div>
                    <div className="space-y-2">
                        {guideData.topics.map((topic, index) => (
                            <button
                                key={topic.id}
                                onClick={() => document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                className={`w-full text-left p-4 rounded-2xl transition-all group border ${activeTopicId === topic.id
                                    ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-100 text-white'
                                    : 'bg-transparent border-transparent hover:bg-white hover:border-slate-100 text-slate-600'
                                    }`}
                            >
                                <div className={`text-[9px] font-bold mb-1 uppercase tracking-widest ${activeTopicId === topic.id ? 'text-blue-200' : 'text-slate-400 group-hover:text-blue-500'}`}>
                                    Topic {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="flex items-center justify-between gap-2 leading-snug">
                                    <span className="font-bold text-sm">{topic.title.replace(/^[0-9.]+\s/, '')}</span>
                                    {heardTopicIds.includes(topic.id) && (
                                        <span className={`text-xs ${activeTopicId === topic.id ? 'text-blue-200' : 'text-green-500'}`}>✓</span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </aside>

                <main className="flex-grow max-w-4xl min-w-0">
                    {guideData.topics.map((topic, tIdx) => (
                        <div key={topic.id} id={topic.id} className="mb-40 last:mb-0 scroll-mt-40">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-black">
                                    {tIdx + 1}
                                </div>
                                <div>
                                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                                        {topic.title}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="text-blue-600 font-bold text-xs uppercase tracking-widest">Study Module {tIdx + 1}/{guideData.topics.length}</div>
                                        <div className="flex items-center gap-2">
                                            {isNarrative && (
                                                <button 
                                                    onClick={() => handleSpeech(topic)}
                                                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black tracking-widest transition-all ${speakingTopicId === topic.id ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}
                                                >
                                                    {speakingTopicId === topic.id ? (isPaused ? '▶ RESUME' : '⏸ PAUSE') : '🔊 LISTEN'}
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => toggleReadStatus(topic.id)}
                                                className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black tracking-widest transition-all ${heardTopicIds.includes(topic.id) ? 'bg-green-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                                            >
                                                {heardTopicIds.includes(topic.id) ? '✓ COMPLETED' : '○ MARK AS READ'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-20">
                                {/* 1. Core Concept */}
                                <section id={`${topic.id}-concept`} className="scroll-mt-44">
                                    <h3 className="flex items-center gap-2 text-xl font-black text-slate-800 mb-6">
                                        <span className="text-2xl p-2 bg-slate-100 rounded-xl">📖</span> Core Concept
                                    </h3>
                                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm leading-relaxed text-slate-600 whitespace-normal">
                                        <ConceptSubMenu text={topic.content?.coreConcept || topic.summary} topicId={topic.id} />
                                        <div className="space-y-4">
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                                components={{
                                                    p: ({node, ...props}) => <p className="mb-4 text-slate-700" {...props} />,
                                                    strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
                                                    table: ({node, ...props}) => (
                                                        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
                                                            <table className="w-full text-left border-collapse" {...props} />
                                                        </div>
                                                    ),
                                                    thead: ({node, ...props}) => <thead className="bg-slate-50 border-b border-slate-200" {...props} />,
                                                    th: ({node, ...props}) => <th className="py-4 px-6 font-bold text-slate-800 uppercase tracking-widest text-xs border-r last:border-r-0 border-slate-200" {...props} />,
                                                    td: ({node, ...props}) => <td className="py-4 px-6 text-sm text-slate-700 border-b border-r last:border-r-0 border-slate-100" {...props} />,
                                                    ol: ({node, ...props}) => <ol className="list-decimal pl-5 space-y-6 my-6 marker:text-blue-600 marker:font-black" {...props} />,
                                                    ul: ({node, ...props}) => <ul className="list-disc pl-5 space-y-3 my-6 marker:text-slate-400" {...props} />,
                                                    li: ({node, children, ...props}) => {
                                                        const isOrdered = node.parent?.tagName === 'ol';
                                                        
                                                        const extractText = (childArray) => {
                                                            if (typeof childArray === 'string') return childArray;
                                                            if (Array.isArray(childArray)) return childArray.map(extractText).join('');
                                                            if (childArray && childArray.props && childArray.props.children) return extractText(childArray.props.children);
                                                            return '';
                                                        };
                                                        
                                                        const textContext = extractText(children);
                                                        const cleanLabel = textContext.split(/[():-]/)[0].trim();
                                                        const scrollId = isOrdered ? `${topic.id}-pt-${cleanLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').substring(0, 15)}` : undefined;

                                                        return (
                                                            <li id={scrollId} className={isOrdered ? "scroll-mt-40 font-semibold text-slate-800" : ""} {...props}>
                                                                {isOrdered ? (
                                                                    <div className="flex flex-col">
                                                                        <div className="inline-block self-start p-1 px-2 mb-2 bg-blue-50 text-[10px] font-black text-blue-600 rounded">KEY POINT</div>
                                                                        <div>{children}</div>
                                                                    </div>
                                                                ) : children}
                                                            </li>
                                                        );
                                                    }
                                                }}
                                            >
                                                {topic.content?.coreConcept || topic.summary || ""}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </section>

                                {/* 2. Formula Bank */}
                                {topic.content?.formulaBank && (
                                    <section id={`${topic.id}-formulas`} className="scroll-mt-44">
                                        <h3 className="flex items-center gap-2 text-xl font-black text-slate-800 mb-6">
                                            <span className="text-2xl p-2 bg-orange-50 rounded-xl">🧮</span> The Formula Bank
                                        </h3>
                                        <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-100 scale-[1.02] transition-transform">
                                            <div className="grid grid-cols-1 gap-8 whitespace-pre-wrap font-medium">
                                                {topic.content.formulaBank}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* 3. Step-by-Step Logic / Key Points */}
                                {(topic.content?.logic || topic.keyPoints) && (
                                    <section id={`${topic.id}-logic`} className="scroll-mt-44">
                                        <h3 className="flex items-center gap-2 text-xl font-black text-slate-800 mb-6">
                                            <span className="text-2xl p-2 bg-green-50 rounded-xl">🧩</span> {topic.keyPoints ? 'Key Takeaways' : 'Step-by-Step Logic'}
                                        </h3>
                                        <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm leading-relaxed text-slate-600 whitespace-pre-wrap italic">
                                            {topic.content?.logic || (Array.isArray(topic.keyPoints) ? topic.keyPoints.join('\n\n') : topic.keyPoints)}
                                        </div>
                                    </section>
                                )}

                                {/* 4. Examiner Traps / Exam Angle */}
                                {(topic.content?.traps || topic.examAngle) && (
                                    <section id={`${topic.id}-traps`} className="scroll-mt-44">
                                        <h3 className="flex items-center gap-2 text-xl font-black text-red-600 mb-6">
                                            <span className="text-2xl p-2 bg-red-50 rounded-xl">⚠️</span> {topic.examAngle ? 'Exam Perspective' : 'Examiner Traps'}
                                        </h3>
                                        <div className="bg-white rounded-3xl p-10 border-l-8 border-red-500 shadow-sm text-slate-700 font-medium whitespace-pre-wrap">
                                            {topic.content?.traps || topic.examAngle}
                                        </div>
                                    </section>
                                )}

                                {/* 5. Practical Examples */}
                                {topic.content?.examples && (
                                    <section id={`${topic.id}-examples`} className="scroll-mt-44">
                                        <h3 className="flex items-center gap-2 text-xl font-black text-slate-800 mb-8">
                                            <span className="text-2xl p-2 bg-purple-50 rounded-xl">🎓</span> Practical Examples
                                        </h3>
                                        <div className="space-y-6">
                                            {topic.content.examples.map((ex, exIdx) => (
                                                <div key={exIdx} className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:shadow-xl transition-all hover:translate-y-[-4px]">
                                                    <div className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-[0.2em]">Scenario {exIdx + 1}</div>
                                                    <div className="text-xl font-bold text-slate-900 mb-6 leading-tight">Q: {ex.q}</div>
                                                    <div className="bg-green-50 text-green-800 p-6 rounded-2xl font-mono text-sm leading-relaxed border border-green-100">
                                                        <div className="text-[10px] font-black mb-2 opacity-50">PRO-SOLUTION</div>
                                                        {ex.a}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* 6. Speed Summary */}
                                {topic.content?.speedSummary && (
                                    <section id={`${topic.id}-speed`} className="scroll-mt-44">
                                        <h3 className="flex items-center gap-2 text-xl font-black text-slate-800 mb-6 font-mono tracking-tighter">
                                            <span className="text-2xl p-2 bg-yellow-50 rounded-xl">⚡</span> MAH-CET Speed Summary
                                        </h3>
                                        <div className="bg-slate-950 rounded-[3rem] p-10 text-slate-200 font-medium whitespace-pre-wrap border-b-[12px] border-orange-500 shadow-2xl">
                                            <div className="text-orange-500 text-[10px] font-black uppercase mb-4 tracking-widest bg-orange-500/10 inline-block px-2 py-1 rounded">Quick Recall</div>
                                            {topic.content.speedSummary}
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
