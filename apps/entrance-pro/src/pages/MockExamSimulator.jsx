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
        <div className="h-screen bg-brand-slate flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-brand-amber/20 border-t-brand-amber rounded-full animate-spin"></div>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] animate-pulse">Initializing Alpha Engine...</div>
        </div>
    );

    if (showResults) {
        return (
            <div className="min-h-screen bg-brand-slate flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
                <div className="bg-white/5 border border-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-16 max-w-2xl w-full text-center relative overflow-hidden group">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-emerald/10 blur-[100px] rounded-full group-hover:bg-brand-emerald/20 transition-all duration-700"></div>
                    
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-brand-emerald/10 text-brand-emerald rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-glow-emerald/20 border border-brand-emerald/20">
                            <Trophy size={48} />
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">Mission <span className="text-brand-emerald">Secure</span></h2>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-12 italic">Performance Audit Complete // {config.name}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] flex flex-col items-center gap-3 group/stat hover:bg-white/[0.05] transition-all">
                                <BarChart3 size={24} className="text-brand-indigo" />
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logic Score</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">
                                    {showResults.score} <span className="text-sm text-slate-600 font-medium">/ {showResults.totalPossible}</span>
                                </div>
                            </div>
                            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] flex flex-col items-center gap-3 group/stat hover:bg-white/[0.05] transition-all">
                                <Target size={24} className="text-brand-emerald" />
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accuracy</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{showResults.accuracy}%</div>
                            </div>
                            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] flex flex-col items-center gap-3 group/stat hover:bg-white/[0.05] transition-all sm:col-span-2">
                                <Clock size={24} className="text-brand-amber" />
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Time Deployed</div>
                                <div className="text-4xl font-black text-white italic tracking-tighter">{formatTime(showResults.duration)} <span className="text-sm text-slate-600 font-medium">/ {formatTime(config.duration)}</span></div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/mocks')}
                            className="w-full py-6 bg-brand-emerald hover:bg-white text-brand-slate rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] transition-all shadow-glow-emerald/20 hover:shadow-glow-emerald/40 active:scale-95 italic"
                        >
                            Return to Operational Hub
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="h-screen flex flex-col bg-brand-slate text-slate-100 overflow-hidden selection:bg-brand-amber/30">
            <title>{config.name} | Suncube Alpha</title>
            
            {/* High-Intensity Header */}
            <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-slate/80 backdrop-blur-xl shrink-0 z-50">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={() => { if (confirm('Abort mission? Operational data will be lost.')) navigate('/mocks') }} 
                        className="w-10 h-10 bg-white/5 hover:bg-brand-rose/20 text-slate-500 hover:text-brand-rose rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-90"
                    >
                        <X size={18} />
                    </button>
                    <div className="h-6 w-px bg-white/5"></div>
                    <div>
                        <h2 className="font-black text-white uppercase text-[10px] tracking-[0.3em] italic">{config.name}</h2>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em] italic">ALPHA SIMULATION LIVE</p>
                    </div>
                </div>

                <div className={`px-8 py-2.5 rounded-2xl font-black text-xl italic tracking-tighter border-2 flex items-center gap-3 transition-all ${timeLeft < 300 ? 'bg-brand-rose/10 text-brand-rose border-brand-rose/40 animate-pulse shadow-glow-rose/20' : 'bg-white/5 text-brand-amber border-brand-amber/20'}`}>
                    <Timer size={20} className={timeLeft < 300 ? 'animate-spin-slow' : ''} />
                    {formatTime(timeLeft)}
                </div>

                <button
                    onClick={() => { if (confirm('Secure logic and submit?')) submitExam() }}
                    className="px-8 py-2.5 bg-brand-amber hover:bg-white text-brand-slate rounded-xl font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-glow-amber/20 hover:shadow-glow-amber/40 active:scale-95 italic"
                >
                    SECURE LOGIC
                </button>
            </header>

            <div className="flex-grow flex overflow-hidden">
                {/* Simulator Interface */}
                <div className="flex-grow overflow-y-auto p-12 lg:p-24 flex flex-col items-center">
                    <div className="max-w-3xl w-full">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <div className="px-4 py-1.5 bg-white/5 text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 italic">
                                    UNIT {currentIndex + 1} OF {questions.length}
                                </div>
                                {config.limit && (
                                    <div className="px-4 py-1.5 bg-brand-indigo/10 text-brand-indigo rounded-xl text-[10px] font-black uppercase tracking-widest border border-brand-indigo/20 italic">
                                        ATTEMPTED: {Object.keys(answers).length} / {config.limit}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={toggleMarkForReview}
                                    className={`flex items-center gap-2 px-6 py-2 rounded-xl text-[9px] font-black tracking-[0.2em] transition-all border italic ${markedForReview.includes(currentIndex) ? 'bg-brand-amber text-brand-slate border-brand-amber shadow-glow-amber/20' : 'bg-white/5 text-slate-500 border-white/5 hover:border-brand-amber/30 hover:text-brand-amber'}`}
                                >
                                    <Flag size={12} fill={markedForReview.includes(currentIndex) ? "currentColor" : "none"} /> 
                                    {markedForReview.includes(currentIndex) ? 'MARKED FOR AUDIT' : 'MARK FOR AUDIT'}
                                </button>
                                
                                {secondsOnQuestion > 45 && (
                                    <div className="bg-brand-rose/10 text-brand-rose px-4 py-2 rounded-xl text-[9px] font-black tracking-[0.2em] animate-pulse border border-brand-rose/20 flex items-center gap-2 italic">
                                        <AlertTriangle size={12} /> TIME SUCKER DETECTED
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="relative group/q mb-16 px-8 py-4 bg-white/[0.02] rounded-[2rem] border-l-4 border-brand-amber transition-all hover:bg-white/[0.04]">
                            <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight italic tracking-tighter">
                                {currentQuestion.question}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-8 text-left rounded-3xl border-2 transition-all group/opt relative overflow-hidden flex items-center justify-between active:scale-[0.99] ${answers[currentIndex] === idx
                                            ? 'border-brand-amber bg-brand-amber/10 shadow-glow-amber/10'
                                            : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                                        }`}
                                >
                                    <span className={`text-xl font-bold italic tracking-tight ${answers[currentIndex] === idx ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-200'} transition-all`}>
                                        {option}
                                    </span>
                                    {answers[currentIndex] === idx ? (
                                        <div className="w-8 h-8 bg-brand-amber text-brand-slate rounded-[0.75rem] flex items-center justify-center shadow-glow-amber/40 scale-110 transition-transform">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-[0.75rem] border border-white/10 group-hover/opt:border-white/30 transition-all opacity-0 group-hover/opt:opacity-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Audit Navigation Sidebar */}
                <div className="w-96 border-l border-white/5 bg-white/[0.01] backdrop-blur-md shrink-0 overflow-y-auto p-10 hidden xl:flex flex-col">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="p-2 bg-brand-indigo/10 rounded-xl">
                            <FlaskConical size={18} className="text-brand-indigo" />
                        </div>
                        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic">AUDIT MAP</h3>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-3 mb-12">
                        {questions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-12 rounded-xl text-[10px] font-black transition-all border flex items-center justify-center active:scale-90 ${currentIndex === idx
                                        ? 'bg-brand-amber text-brand-slate border-brand-amber shadow-glow-amber/40 scale-110 z-10'
                                        : markedForReview.includes(idx)
                                            ? 'bg-brand-rose/20 text-brand-rose border-brand-rose/40 animate-pulse'
                                            : answers[idx] !== undefined
                                                ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/30'
                                                : 'bg-white/5 text-slate-600 border-white/5 hover:border-white/20 hover:text-white'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto space-y-6">
                        <div className="p-8 bg-white/[0.03] rounded-[2rem] border border-white/5 relative overflow-hidden group/instr">
                            <div className="absolute -right-4 -top-4 opacity-5 group-hover/instr:opacity-20 transition-all">
                                <ShieldAlert size={64} />
                            </div>
                            <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4 italic">PROTOCOL GUIDELINES</h4>
                            <ul className="text-[9px] font-black text-slate-500 space-y-3 uppercase tracking-widest italic">
                                <li className="flex items-center gap-2 group-hover/instr:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-brand-emerald"></div> CORRECT: +{config.correctMark} DEPLOYED</li>
                                <li className="flex items-center gap-2 group-hover/instr:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose"></div> PENALTY: {config.penaltyMark} REMOVED</li>
                                <li className="flex items-center gap-2 group-hover/instr:text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div> SKIP: 0 NEUTRAL</li>
                                {config.limit && config.limit < config.total && (
                                    <li className="flex items-center gap-2 text-brand-amber"><div className="w-1.5 h-1.5 rounded-full bg-brand-amber"></div> LIMIT: {config.limit} MAX</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tactical Control Bar */}
            <footer className="h-24 border-t border-white/5 bg-brand-slate shrink-0 flex items-center justify-center px-8 gap-12 z-50">
                <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    className="w-16 h-16 rounded-full bg-white/5 text-slate-400 hover:bg-white hover:text-brand-slate disabled:opacity-0 disabled:pointer-events-none transition-all flex items-center justify-center shadow-xl active:scale-90"
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl font-black text-white italic tracking-tighter">
                        {currentIndex + 1} <span className="text-slate-700 mx-2 text-xl">/</span> {questions.length}
                    </div>
                    <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div 
                            className="h-full bg-brand-amber transition-all duration-500 shadow-glow-amber/50" 
                            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    disabled={currentIndex === questions.length - 1}
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="w-16 h-16 rounded-full bg-white/5 text-slate-400 hover:bg-white hover:text-brand-slate disabled:opacity-0 disabled:pointer-events-none transition-all flex items-center justify-center shadow-xl active:scale-90"
                >
                    <ChevronRight size={32} />
                </button>
            </footer>
        </div>
    );
};

export default MockExamSimulator;
