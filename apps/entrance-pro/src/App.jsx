import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SubjectDashboard from './pages/SubjectDashboard.jsx';
import QuizPage from './pages/QuizPage.jsx';
import MockDashboard from './pages/MockDashboard.jsx';
import MockExamSimulator from './pages/MockExamSimulator.jsx';
import StudyGuide from './pages/StudyGuide.jsx';
import Flashcards from './pages/Flashcards.jsx';
import SpeedScrollFlashcards from './pages/SpeedScrollFlashcards.jsx';
import Analytics from './pages/Analytics.jsx';
import TimedPractice from './pages/TimedPractice.jsx';
import { useAppContext } from './store/AppContext.jsx';
import { EXAM_DATES, getDaysRemaining } from './config/exam-dates.config.js';

const App = () => {
    const { streak } = useAppContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const cuetDays = getDaysRemaining(EXAM_DATES.CUET_UG_2026);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300">
            {/* Navigation */}
            <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="/suncube-commerce-edge/" className="text-slate-500 hover:text-brand-amber transition-colors" title="Back to Suncube Hub">
                            🏠
                        </a>
                        <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                            <span className="text-2xl">🚀</span>
                            <span className="text-xl font-black bg-gradient-to-r from-brand-amber to-amber-200 bg-clip-text text-transparent uppercase tracking-tight">
                                Entrance Prep Pro
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                        <Link to="/" className="hover:text-brand-amber transition-colors">Home</Link>
                        <Link to="/analytics" className="flex items-center gap-1.5 hover:text-brand-amber transition-colors">
                            <span>📊</span> Analytics
                        </Link>
                        <Link to="/mocks" className="px-4 py-2 bg-brand-amber text-slate-950 rounded-lg hover:bg-amber-300 transition-all font-black shadow-lg shadow-brand-amber/10">
                            Mock Tests
                        </Link>
                        <div className="flex items-center gap-2 px-3 py-1 bg-brand-amber/10 text-brand-amber rounded-full border border-brand-amber/20 shadow-inner">
                            <span className="text-lg">🔥</span>
                            <span className="font-black">{streak} Day Streak</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-emerald/10 text-brand-emerald rounded-full border border-brand-emerald/20 shadow-inner">
                            <span>🎯</span>
                            <span className="font-black">{cuetDays}d Left</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 transition-colors gap-1"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={`block w-5 h-0.5 bg-brand-amber transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-brand-amber transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-brand-amber transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm font-medium">
                        <Link to="/" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-brand-amber transition-colors flex items-center gap-2">
                            🏠 <span>Home</span>
                        </Link>
                        <Link to="/analytics" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-brand-amber transition-colors flex items-center gap-2">
                            📊 <span>Analytics</span>
                        </Link>
                        <Link to="/mocks" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl bg-brand-amber text-slate-950 font-black hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 shadow-lg">
                            🧪 <span>Mock Tests</span>
                        </Link>
                        <div className="py-2.5 px-3 rounded-xl bg-brand-amber/10 text-brand-amber border border-brand-amber/20 flex items-center gap-2">
                            <span className="text-base">🔥</span>
                            <span className="font-black">{streak} Day Streak</span>
                        </div>
                        <div className="py-2.5 px-3 rounded-xl bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 flex items-center gap-2">
                            <span>🎯</span>
                            <span className="font-black">CUET: {cuetDays} days left</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/subject/:subjectId" element={<SubjectDashboard />} />
                    <Route path="/quiz/:subjectId/:chapterId" element={<QuizPage />} />
                    <Route path="/timed-practice/:subjectId/:chapterId" element={<TimedPractice />} />
                    <Route path="/mocks" element={<MockDashboard />} />
                    <Route path="/mock-exam/:type" element={<MockExamSimulator />} />
                    <Route path="/study/:subjectId/:chapterId" element={<StudyGuide />} />
                    <Route path="/flashcards/:subjectId/:chapterId" element={<Flashcards />} />
                    <Route path="/flashcards-speed/:subjectId/:chapterId" element={<SpeedScrollFlashcards />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Routes>
            </main>

            {/* Footer */}
            <footer className="bg-brand-slate border-t border-white/5 py-12 transition-colors duration-300 overflow-hidden relative">
                <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
                    <span className="text-[200px] font-black uppercase tracking-tighter text-white">SUNCUBE</span>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left mb-8">
                        <div>
                            <h4 className="font-black uppercase text-[10px] tracking-widest text-brand-amber mb-4">Quick Protocols</h4>
                            <div className="flex flex-col gap-2 text-sm font-bold text-slate-400">
                                <Link to="/" className="hover:text-brand-amber transition-colors">Home Base</Link>
                                <Link to="/analytics" className="hover:text-brand-amber transition-colors">Performance Audit</Link>
                                <Link to="/mocks" className="hover:text-brand-amber transition-colors">Mock Deployments</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-black uppercase text-[10px] tracking-widest text-brand-emerald mb-4">Exam Target</h4>
                            <div className="text-sm text-slate-400">
                                <div className="text-2xl mb-2">🎯</div>
                                <div className="font-black text-white text-lg tracking-tight uppercase">CUET UG 2026</div>
                                <div>Standard Board Calendar</div>
                                <div className="mt-3 inline-block px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-emerald/20 shadow-xl">
                                    {cuetDays} Days Remaining
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-slate-500 text-[10px] font-black uppercase tracking-widest border-t border-white/5 pt-8">
                        &copy; 2026 Suncube Arts Prep. Optimized for CUET &amp; Boards.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
