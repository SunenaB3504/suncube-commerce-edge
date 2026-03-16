import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

            // Shuffle and sample
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
            alert(`CUET Limit Reached! You can only attempt ${config.limit} questions. Deselect an answer to pick another.`);
            return;
        }

        setAnswers(prev => {
            const next = { ...prev };
            if (next[currentIndex] === optionIdx) {
                delete next[currentIndex]; // Toggle off
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

    const submitExam = () => {
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
    };

    if (isLoading) return <div className="h-screen flex items-center justify-center text-slate-400">Loading Exam Engine...</div>;

    if (showResults) {
        return (
            <div className="h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center border border-slate-200">
                    <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🏆</div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Exam Complete!</h2>
                    <p className="text-slate-500 mb-8">Great job finishing the {config.name}.</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Score</div>
                            <div className="text-2xl font-bold text-blue-600">{showResults.score} <span className="text-sm font-medium text-slate-400">/ {showResults.totalPossible}</span></div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Accuracy</div>
                            <div className="text-2xl font-bold text-green-600">{showResults.accuracy}%</div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/mocks')}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const currentQuestion = questions[currentIndex];

    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden">
            <title>{config.name} | Entrance Prep Pro</title>
            <meta name="description" content={`Simulate your ${config.name} under real exam conditions.`} />
            {/* Header */}
            <header className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={() => { if (confirm('Abort exam? Progress will be lost.')) navigate('/mocks') }} className="text-slate-400 hover:text-slate-900 transition-colors">✕</button>
                    <div className="h-4 w-px bg-slate-100"></div>
                    <h2 className="font-bold text-slate-900 truncate max-w-[200px]">{config.name}</h2>
                </div>

                <div className={`px-4 py-2 rounded-xl font-mono font-bold text-lg ${timeLeft < 300 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-50 text-slate-900'}`}>
                    ⏱️ {formatTime(timeLeft)}
                </div>

                <button
                    onClick={() => { if (confirm('Finish and submit?')) submitExam() }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all text-sm shadow-md"
                >
                    Submit
                </button>
            </header>

            <div className="flex-grow flex overflow-hidden">
                {/* Main Content */}
                <div className="flex-grow overflow-y-auto p-12 lg:p-24 flex flex-col items-center">
                    <div className="max-w-2xl w-full">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-md text-xs font-bold uppercase tracking-wider">
                                    Question {currentIndex + 1} of {questions.length}
                                </span>
                                {config.limit && (
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold uppercase tracking-wider">
                                        Attempted: {Object.keys(answers).length}/{config.limit}
                                    </span>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={toggleMarkForReview}
                                    className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all border ${markedForReview.includes(currentIndex) ? 'bg-orange-500 text-white border-orange-500 shadow-md' : 'bg-white text-slate-400 border-slate-200 hover:border-orange-300 hover:text-orange-500'}`}
                                >
                                    🚩 {markedForReview.includes(currentIndex) ? 'MARKED' : 'MARK FOR REVIEW'}
                                </button>
                                
                                {secondsOnQuestion > 45 && (
                                    <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest animate-pulse border border-red-100 flex items-center gap-1.5">
                                        ⚠️ TIME SUCKER
                                    </div>
                                )}
                            </div>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-12 leading-tight">
                            {currentQuestion.question}
                        </h3>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className={`w-full p-6 text-left rounded-2xl border-2 transition-all group relative overflow-hidden flex items-center justify-between ${answers[currentIndex] === idx
                                            ? 'border-blue-600 bg-blue-50/50'
                                            : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                >
                                    <span className={`text-lg font-medium ${answers[currentIndex] === idx ? 'text-blue-700' : 'text-slate-700'}`}>
                                        {option}
                                    </span>
                                    {answers[currentIndex] === idx && (
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <div className="w-80 border-l border-slate-100 bg-slate-50/50 shrink-0 overflow-y-auto p-6 hidden xl:block">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Navigaton</h3>
                    <div className="grid grid-cols-5 gap-2">
                        {questions.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-10 rounded-lg text-xs font-bold transition-all border ${currentIndex === idx
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-100'
                                        : markedForReview.includes(idx)
                                            ? 'bg-orange-500 text-white border-orange-500'
                                            : answers[idx] !== undefined
                                                ? 'bg-green-100 text-green-700 border-green-200'
                                                : 'bg-white text-slate-400 border-slate-200 hover:border-slate-400'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Instructions</h4>
                        <ul className="text-xs text-slate-500 space-y-2">
                            <li>• Correct: +{config.correctMark} Points</li>
                            <li>• Wrong: {config.penaltyMark} Point(s)</li>
                            <li>• Unattempted: 0 Points</li>
                            {config.limit && config.limit < config.total && <li>• Limit: Only {config.limit} attempts allowed</li>}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Nav (Mobile/Tablet and Main Nav) */}
            <footer className="h-20 border-t border-slate-100 bg-white shrink-0 flex items-center justify-center px-6 gap-4">
                <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(prev => prev - 1)}
                    className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <div className="text-sm font-bold text-slate-400">
                    {currentIndex + 1} / {questions.length}
                </div>

                <button
                    disabled={currentIndex === questions.length - 1}
                    onClick={() => setCurrentIndex(prev => prev + 1)}
                    className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </footer>
        </div>
    );
};

export default MockExamSimulator;
