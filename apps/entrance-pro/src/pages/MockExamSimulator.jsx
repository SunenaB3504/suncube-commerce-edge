import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Timer, Flag, AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, X, Trophy, Target, BarChart3, Clock, Zap, ShieldAlert, FlaskConical } from 'lucide-react';
import { useAppContext } from '../store/AppContext';

const MockExamSimulator = () => {
    const { type } = useParams();
    const navigate = useNavigate();
    const { recordMockResult } = useAppContext();

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [markedForReview, setMarkedForReview] = useState([]);
    const [secondsOnQuestion, setSecondsOnQuestion] = useState(0);

    const examConfigs = {
        'cuet-bstudies': { 
            name: 'Business Studies Mock', 
            duration: 45 * 60, total: 50, limit: 40,
            correctMark: 5, penaltyMark: -1,
            sources: [
                { folder: 'business-studies', files: ['nature-management', 'principles-management', 'business-environment', 'planning', 'organising', 'staffing', 'directing', 'controlling', 'financial-management', 'financial-markets', 'marketing', 'consumer-protection']}
            ]
        },
        'cuet-english': { 
            name: 'English Language Mock', 
            duration: 45 * 60, total: 50, limit: 40,
            correctMark: 5, penaltyMark: -1,
            sources: [
                { folder: 'english', files: ['comprehension', 'grammar', 'vocabulary', 'literature-poetry', 'writing-skills', 'reading-strategies'] }
            ]
        },
        'cuet-general': { 
            name: 'CUET General Test Mock', 
            duration: 60 * 60, total: 60, limit: 50,
            correctMark: 5, penaltyMark: -1,
            sources: [
                { folder: 'general-aptitude', files: ['quantitative', 'logical-reasoning'] },
                { folder: 'gk-current-affairs', files: ['general-knowledge', 'general-science', 'current-affairs'] }
            ]
        },
        'mhcet-full': { 
            name: 'MH-CET BBA Full Mock', 
            duration: 90 * 60, total: 100, limit: 100,
            correctMark: 1, penaltyMark: 0,
            sources: [
                 { folder: 'english', files: ['grammar', 'vocabulary', 'writing-skills', 'comprehension'] },
                 { folder: 'reasoning', files: ['logic-statement', 'series-number', 'relations-direction', 'coding-letter-shift'] },
                 { folder: 'gk-current-affairs', files: ['general-knowledge', 'current-affairs'] },
                 { folder: 'computer-awareness', files: ['hardware', 'software-and-os', 'internet-and-networking', 'cybersecurity', 'number-systems'] }
            ]
        }
    };

    const config = examConfigs[type] || examConfigs['cuet-general'];

    const submitExam = useCallback(() => {
        setIsActive(false);
        const correctCount = questions.reduce((acc, q, idx) => {
            return acc + (answers[idx] === q.correct ? 1 : 0);
        }, 0);

        const score = questions.reduce((acc, q, idx) => {
            if (answers[idx] === undefined) return acc;
            return acc + (answers[idx] === q.correct ? config.correctMark : config.penaltyMark);
        }, 0);

        const totalAnswered = Object.keys(answers).length;
        const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
        const totalPossible = (config.limit ? config.limit : config.total) * config.correctMark;

        const result = {
            type: config.name,
            date: new Date().toISOString(),
            score: score,
            totalPossible: totalPossible,
            accuracy: accuracy,
            duration: config.duration - timeLeft
        };

        recordMockResult(result);
        setShowResults(result);
    }, [questions, answers, config, timeLeft, recordMockResult]);

    useEffect(() => {
        loadMockQuestions();
    }, [type]);

    useEffect(() => {
        let timer;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => Math.max(0, prev - 1));
                setSecondsOnQuestion(prev => prev + 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            submitExam();
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isActive, timeLeft, submitExam]);

    useEffect(() => {
        setSecondsOnQuestion(0);
    }, [currentIndex]);

    const loadMockQuestions = async () => {
        setIsLoading(true);
        try {
            const allData = [];

            for (const source of config.sources) {
                for (const file of source.files) {
                    try {
                        const module = await import(`../data/${source.folder}/${file}.data.js`);
                        const data = Object.values(module)[0];
                        if (data && data.questions) {
                            allData.push(...data.questions);
                        }
                    } catch(err) {
                        console.warn(`Could not load ${source.folder}/${file}`, err);
                    }
                }
            }

            const shuffled = allData.sort(() => 0.5 - Math.random());
            const sampled = shuffled.slice(0, config.total);

            setQuestions(sampled);
            setTimeLeft(config.duration);
            setIsActive(true);
        } catch (e) {
            console.error("Failed to load mock data", e);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAnswer = (optionIdx) => {
        const currentAnswersCount = Object.keys(answers).length;
        const isAlreadyAnswered = answers[currentIndex] !== undefined;

        if (config.limit && currentAnswersCount >= config.limit && !isAlreadyAnswered) {
            return;
        }

        setAnswers(prev => {
            const next = { ...prev };
            if (next[currentIndex] === optionIdx) {
                delete next[currentIndex];
            } else {
                next[currentIndex] = optionIdx;
            }
            return next;
        });
    };

    const toggleMarkForReview = () => {
        setMarkedForReview(prev => 
            prev.includes(currentIndex) 
                ? prev.filter(id => id !== currentIndex) 
                : [...prev, currentIndex]
        );
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (isLoading) return (
        <div className="h-screen bg-zen-paper flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-zen-sky/10 border-t-zen-sky rounded-full animate-spin"></div>
            <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-[0.5em] animate-pulse">Initializing Zen Engine...</div>
        </div>
    );

    if (showResults) {
        return (
            <div className="min-h-screen bg-zen-paper flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
                <div className="zen-mesh-vibrant border border-zen-ink/10 rounded-[4.5rem] p-12 lg:p-20 max-w-2xl w-full text-center relative overflow-hidden group shadow-bold">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-zen-forest/20 blur-[100px] rounded-full group-hover:bg-zen-forest/30 transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-white text-zen-forest rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-bold border border-zen-forest/20">
                            <Trophy size={48} />
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-bold text-zen-ink mb-4 italic tracking-tighter uppercase">Simulation <span className="text-zen-forest">Secure</span></h2>
                        <p className="text-zen-ink/40 text-xs font-bold uppercase tracking-[0.3em] mb-12 italic">Performance Audit Complete // {config.name}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="zen-mesh-sky border border-zen-ink/10 p-8 rounded-[2.8rem] flex flex-col items-center gap-3 transition-all shadow-bold hover:shadow-warm">
                                <BarChart3 size={24} className="text-zen-sky" />
                                <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest">Logic Score</div>
                                <div className="text-4xl font-bold text-zen-ink italic tracking-tighter">
                                    {showResults.score} <span className="text-sm text-zen-ink/20 font-medium">/ {showResults.totalPossible}</span>
                                </div>
                            </div>
                            <div className="zen-mesh-sky border border-zen-ink/10 p-8 rounded-[2.8rem] flex flex-col items-center gap-3 transition-all shadow-bold hover:shadow-warm">
                                <Target size={24} className="text-zen-forest" />
                                <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest">Accuracy</div>
                                <div className="text-4xl font-bold text-zen-ink italic tracking-tighter">{showResults.accuracy}%</div>
                            </div>
                            <div className="zen-mesh-warm border border-zen-ink/10 p-8 rounded-[2.8rem] flex flex-col items-center gap-3 transition-all shadow-bold hover:shadow-warm sm:col-span-2">
                                <Clock size={24} className="text-zen-sand" />
                                <div className="text-[10px] font-bold text-zen-ink/40 uppercase tracking-widest">Time In Simulation</div>
                                <div className="text-4xl font-bold text-zen-ink italic tracking-tighter">{formatTime(showResults.duration)} <span className="text-sm text-zen-ink/20 font-medium">/ {formatTime(config.duration)}</span></div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/mocks')}
                            className="w-full py-6 bg-zen-forest hover:bg-zen-ink text-white rounded-[2.5rem] font-bold text-xs uppercase tracking-[0.4em] transition-all shadow-soft active:scale-95 italic"
                        >
                            Return to Selection Hub
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="h-screen flex flex-col bg-zen-paper text-zen-ink overflow-hidden selection:bg-zen-sky/10">
            <title>{config.name} | Suncube Zen</title>
            
            {/* High-Contrast Header */}
            <header className="h-20 border-b border-zen-ink/5 flex items-center justify-between px-8 bg-white/80 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => { if (confirm('Abort simulation? Progress data will be lost.')) navigate('/mocks') }} 
                        className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-terracotta/20 text-zen-ink/40 hover:text-zen-terracotta rounded-xl flex items-center justify-center transition-all border border-zen-ink/5 active:scale-90"
                    >
                        <X size={18} />
                    </button>
                    <div className="h-6 w-px bg-zen-ink/5"></div>
                    <div>
                        <h2 className="font-bold text-zen-ink uppercase text-[10px] tracking-[0.3em] italic">{config.name}</h2>
                        <p className="text-[8px] font-bold text-zen-ink/30 uppercase tracking-[0.5em] italic">ZEN SIMULATION LIVE</p>
                    </div>
                </div>

                <div className={`px-8 py-2.5 rounded-2xl font-bold text-xl italic tracking-tighter border-2 flex items-center gap-3 transition-all ${timeLeft < 300 ? 'bg-zen-terracotta text-white border-zen-terracotta animate-pulse shadow-bold' : 'bg-white text-zen-sky border-zen-sky/40 shadow-warm'}`}>
                    <Timer size={20} className={timeLeft < 300 ? 'animate-spin-slow' : ''} />
                    {formatTime(timeLeft)}
                </div>

                <button
                    onClick={() => { if (confirm('Proceed to final evaluation?')) submitExam() }}
                    className="px-8 py-2.5 bg-zen-sky hover:bg-zen-ink text-white rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] transition-all shadow-soft active:scale-95 italic"
                >
                    FINALIZE LOGIC
                </button>
            </header>

            <div className="flex-grow flex overflow-hidden">
                {/* Simulator Interface */}
                <div className="flex-grow overflow-y-auto p-12 lg:p-24 flex flex-col items-center relative">
                    <div className="max-w-3xl w-full relative z-10">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="px-4 py-1.5 bg-zen-ink/5 text-zen-ink/40 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-zen-ink/5 italic shadow-sm">
                                    UNIT {currentIndex + 1} OF {questions.length}
                                </div>
                                {config.limit && (
                                    <div className="px-4 py-1.5 bg-zen-sky/10 text-zen-sky rounded-xl text-[10px] font-bold uppercase tracking-widest border border-zen-sky/20 italic shadow-sm">
                                        ATTEMPTED: {Object.keys(answers).length} / {config.limit}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={toggleMarkForReview}
                                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[9px] font-bold tracking-[0.2em] transition-all border italic shadow-sm ${markedForReview.includes(currentIndex) ? 'bg-zen-sky text-white border-zen-sky shadow-soft' : 'bg-white text-zen-ink/40 border-zen-ink/5 hover:border-zen-sky/30 hover:text-zen-sky'}`}
                                >
                                    <Flag size={12} fill={markedForReview.includes(currentIndex) ? "currentColor" : "none"} /> 
                                    {markedForReview.includes(currentIndex) ? 'MARKED FOR REVIEW' : 'MARK FOR REVIEW'}
                                </button>
                                
                                {secondsOnQuestion > 50 && (
                                    <div className="bg-zen-terracotta/10 text-zen-terracotta px-4 py-2 rounded-xl text-[9px] font-bold tracking-[0.2em] animate-pulse border border-zen-terracotta/20 flex items-center gap-2 italic shadow-sm">
                                        <AlertTriangle size={12} /> DEEP THINKING...
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="relative group/q mb-16 px-12 py-10 zen-mesh-sky rounded-[3.5rem] border-l-8 border-zen-sky transition-all shadow-bold">
                            <h3 className="text-xl lg:text-2xl font-bold text-zen-ink leading-tight italic tracking-tighter">
                                {currentQuestion.question}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-8 text-left rounded-[2rem] border-2 transition-all group/opt relative overflow-hidden flex items-center justify-between active:scale-[0.99] shadow-sm ${answers[currentIndex] === idx
                                            ? 'border-zen-sky bg-zen-sky/10 shadow-bold'
                                            : 'border-zen-ink/10 bg-white hover:border-zen-sky/40 hover:bg-zen-sky/5'
                                        }`}
                                >
                                    <span className={`text-xl font-bold italic tracking-tight ${answers[currentIndex] === idx ? 'text-zen-ink' : 'text-zen-ink/60 group-hover/opt:text-zen-ink'} transition-all`}>
                                        {option}
                                    </span>
                                    {answers[currentIndex] === idx ? (
                                        <div className="w-8 h-8 bg-zen-sky text-white rounded-[0.75rem] flex items-center justify-center shadow-soft scale-110 transition-transform">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-[0.75rem] border border-zen-ink/10 group-hover/opt:border-zen-sky/30 transition-all opacity-0 group-hover/opt:opacity-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-zen-sky/20"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Audit Navigation Sidebar */}
                <div className="w-96 border-l border-zen-ink/5 bg-white backdrop-blur-md shrink-0 overflow-y-auto p-10 hidden xl:flex flex-col shadow-inner">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-zen-sky/10 rounded-xl">
                            <FlaskConical size={18} className="text-zen-sky" />
                        </div>
                        <h3 className="text-[10px] font-bold text-zen-ink/30 uppercase tracking-[0.4em] italic">AUDIT MAP</h3>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-3 mb-12">
                        {questions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-12 rounded-xl text-[10px] font-bold transition-all border flex items-center justify-center active:scale-90 shadow-sm ${currentIndex === idx
                                        ? 'bg-zen-sky text-white border-zen-sky shadow-soft scale-110 z-10'
                                        : markedForReview.includes(idx)
                                            ? 'bg-zen-terracotta/10 text-zen-terracotta border-zen-terracotta/40 animate-pulse'
                                            : answers[idx] !== undefined
                                                ? 'bg-zen-forest/10 text-zen-forest border-zen-forest/30'
                                                : 'bg-white text-zen-ink/20 border-zen-ink/5 hover:border-zen-ink/20 hover:text-zen-ink'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto space-y-6">
                        <div className="p-8 zen-mesh-sky rounded-[2.8rem] border border-zen-ink/10 relative overflow-hidden group/instr shadow-bold">
                            <div className="absolute -right-4 -top-4 opacity-[0.05] group-hover/instr:opacity-10 transition-all font-bold text-9xl">🎯</div>
                            <h4 className="text-[10px] font-bold text-zen-ink/60 uppercase tracking-widest mb-4 italic text-center">PROTOCOL GUIDELINES</h4>
                            <ul className="text-[9px] font-bold text-zen-ink/40 space-y-3 uppercase tracking-widest italic">
                                <li className="flex items-center gap-2 group-hover/instr:text-zen-ink transition-colors"><div className="w-2 h-2 rounded-full bg-zen-forest"></div> CORRECT: +{config.correctMark} POINTS</li>
                                <li className="flex items-center gap-2 group-hover/instr:text-zen-ink transition-colors"><div className="w-2 h-2 rounded-full bg-zen-terracotta"></div> INCORRECT: {config.penaltyMark} POINTS</li>
                                <li className="flex items-center gap-2 group-hover/instr:text-zen-ink transition-colors"><div className="w-2 h-2 rounded-full bg-zen-ink/20"></div> SKIPPED: 0 POINTS</li>
                                {config.limit && config.limit < config.total && (
                                    <li className="flex items-center gap-2 text-zen-sky"><div className="w-2 h-2 rounded-full bg-zen-sky"></div> ATTEMPT LIMIT: {config.limit}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Footer */}
            <footer className="h-24 border-t border-zen-ink/5 bg-white shrink-0 flex items-center justify-center px-8 gap-12 z-50 shadow-soft">
                <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    className="w-16 h-16 rounded-[1.5rem] bg-zen-ink/5 text-zen-ink/40 hover:bg-zen-ink hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center shadow-sm active:scale-90"
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-bold text-zen-ink italic tracking-tighter">
                        {currentIndex + 1} <span className="text-zen-ink/20 mx-2 text-xl font-normal">/</span> {questions.length}
                    </div>
                    <div className="w-64 h-2 bg-zen-ink/5 rounded-full overflow-hidden border border-zen-ink/5 shadow-inner">
                        <div 
                            className="h-full bg-gradient-to-r from-zen-sky to-zen-sky/60 transition-all duration-500 shadow-soft" 
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    disabled={currentIndex === questions.length - 1}
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="w-16 h-16 rounded-[1.5rem] bg-zen-ink/5 text-zen-ink/40 hover:bg-zen-ink hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center shadow-sm active:scale-90"
                >
                    <ChevronRight size={32} />
                </button>
            </footer>
        </div>
    );
};

export default MockExamSimulator;
