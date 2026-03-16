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
                    <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                        <span className="text-2xl">🚀</span>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            Commerce Prep Pro
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                        <Link to="/analytics" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span>📊</span> Analytics
                        </Link>
                        <Link to="/mocks" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Mock Tests
                        </Link>
                        <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full border border-orange-100 dark:border-orange-800/50">
                            <span className="text-lg">🔥</span>
                            <span className="font-bold">{streak} Day Streak</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full border border-red-100 dark:border-red-800/50">
                            <span>🎯</span>
                            <span className="font-bold">{cuetDays}d</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors gap-1"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm font-medium">
                        <Link to="/" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                            🏠 <span>Home</span>
                        </Link>
                        <Link to="/analytics" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                            📊 <span>Analytics</span>
                        </Link>
                        <Link to="/mocks" onClick={closeMobileMenu} className="py-2.5 px-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            🧪 <span>Mock Tests</span>
                        </Link>
                        <div className="py-2.5 px-3 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-100 dark:border-orange-800/50 flex items-center gap-2">
                            <span className="text-base">🔥</span>
                            <span className="font-bold">{streak} Day Streak</span>
                        </div>
                        <div className="py-2.5 px-3 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800/50 flex items-center gap-2">
                            <span>🎯</span>
                            <span className="font-bold">CUET: {cuetDays} days left</span>
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
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left mb-8">
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Quick Links</h4>
                            <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
                                <Link to="/analytics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Analytics</Link>
                                <Link to="/mocks" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mock Tests</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-4">Exam Target</h4>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                <div className="text-2xl mb-2">🎯</div>
                                <div className="font-bold text-slate-700 dark:text-slate-300">CUET UG 2026</div>
                                <div>Expected: May 2026</div>
                                <div className="mt-3 inline-block px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 rounded-full text-xs font-bold border border-amber-100 dark:border-amber-800/50">
                                    {cuetDays} days left
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-slate-400 dark:text-slate-500 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                        &copy; 2026 Commerce Prep Pro. Focused on CUET &amp; MH-CET success.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
