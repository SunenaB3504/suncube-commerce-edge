import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { LayoutGrid, BarChart3, FlaskConical, Flame, Target, Rocket, Menu, X, Home as HomeIcon, ChevronRight } from 'lucide-react';
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
        <div className="min-h-screen flex flex-col bg-zen-paper text-zen-ink selection:bg-zen-sky/10 selection:text-zen-ink">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zen-paper/80 backdrop-blur-xl border-b border-zen-ink/5 h-20 flex items-center shadow-soft">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a 
                            href="/suncube-commerce-edge/" 
                            className="w-10 h-10 bg-zen-ink/5 hover:bg-zen-ink text-slate-400 hover:text-zen-paper rounded-xl flex items-center justify-center transition-all border border-zen-ink/5 active:scale-95 group"
                            title="Back to Suncube Hub"
                        >
                            <HomeIcon size={18} />
                        </a>
                        <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                            <div className="p-2 bg-zen-sky/10 rounded-xl group-hover:scale-105 transition-transform">
                                <Rocket size={24} className="text-zen-sky" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-zen-ink group-hover:text-zen-sky transition-colors">
                                Entrance <span className="text-zen-sky">Pro</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <nav className="flex items-center gap-8 text-xs font-semibold text-slate-500">
                            <Link to="/" className="hover:text-zen-ink transition-colors">Dashboard</Link>
                            <Link to="/analytics" className="hover:text-zen-sky transition-colors flex items-center gap-2">
                                <BarChart3 size={14} /> Progress Trace
                            </Link>
                        </nav>
                        
                        <div className="h-8 w-px bg-white/5 mx-2"></div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-zen-sky/5 border border-zen-sky/10 rounded-full">
                                <Flame size={14} className="text-zen-sky" />
                                <span className="text-[10px] font-bold text-zen-sky uppercase tracking-widest">{streak} DAY STREAK</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-zen-forest/5 border border-zen-forest/10 rounded-full">
                                <Target size={14} className="text-zen-forest" />
                                <span className="text-[10px] font-bold text-zen-forest uppercase tracking-widest">{cuetDays}d REMAINING</span>
                            </div>
                            
                            <Link 
                                to="/mocks" 
                                className="px-6 py-2.5 bg-zen-sky hover:bg-zen-ink text-white rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest shadow-soft active:scale-95 flex items-center gap-2"
                            >
                                <FlaskConical size={14} /> Start Mock Test
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden w-12 h-12 rounded-xl bg-zen-ink/5 border border-zen-ink/5 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        {mobileMenuOpen ? <X size={24} className="text-zen-sky" /> : <Menu size={24} className="text-zen-sky" />}
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <div className={`fixed inset-0 top-20 bg-zen-paper/95 backdrop-blur-2xl z-[49] md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
                    <div className="container mx-auto px-6 py-12 flex flex-col gap-6">
                        <Link to="/" onClick={closeMobileMenu} className="p-6 rounded-3xl bg-white border border-zen-ink/5 text-zen-ink font-bold text-sm tracking-tight flex items-center justify-between group active:scale-[0.98] transition-all shadow-sm">
                            Dashboard <ChevronRight size={18} className="text-zen-sky group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link to="/analytics" onClick={closeMobileMenu} className="p-6 rounded-3xl bg-white border border-zen-ink/5 text-zen-ink font-bold text-sm tracking-tight flex items-center justify-between group active:scale-[0.98] transition-all shadow-sm">
                            Progress Trace <ChevronRight size={18} className="text-zen-ink/20 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link to="/mocks" onClick={closeMobileMenu} className="p-8 rounded-[2.5rem] bg-zen-sky text-white font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-soft active:scale-95 transition-all">
                            <FlaskConical size={20} /> Start Mock Test
                        </Link>
                        
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-6 rounded-3xl bg-zen-sky/5 border border-zen-sky/10 flex flex-col items-center gap-3">
                                <Flame size={24} className="text-zen-sky" />
                                <span className="text-[10px] font-bold text-zen-sky uppercase tracking-widest text-center">{streak} DAY STREAK</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-zen-forest/5 border border-zen-forest/10 flex flex-col items-center gap-3">
                                <Target size={24} className="text-zen-forest" />
                                <span className="text-[10px] font-bold text-zen-forest uppercase tracking-widest text-center">{cuetDays}d REMAINING</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-20">
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
            <footer className="bg-zen-paper border-t border-zen-ink/5 py-20 overflow-hidden relative mt-auto text-zen-ink">
                <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none">
                    <span className="text-[250px] font-bold uppercase tracking-tighter italic">ZEN</span>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="p-2 bg-zen-sky/10 rounded-xl">
                                    <Rocket size={20} className="text-zen-sky" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-zen-ink">
                                    Entrance <span className="text-zen-sky">Pro</span>
                                </span>
                            </div>
                            <p className="text-xs font-medium text-slate-500 leading-relaxed italic">
                                Serene speed-logic engine for CUET & MH-CET aspirants. Engineered for cognitive clarity.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-bold uppercase text-[10px] tracking-[0.4em] text-zen-sky mb-8">Quick Access</h4>
                            <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                <Link to="/" className="hover:text-zen-ink transition-colors">Dashboard</Link>
                                <Link to="/analytics" className="hover:text-zen-sky transition-colors underline decoration-zen-sky/30 underline-offset-8">Progress Trace</Link>
                                <Link to="/mocks" className="hover:text-zen-sky transition-colors underline decoration-zen-sky/30 underline-offset-8">Mock Tests</Link>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold uppercase text-[10px] tracking-[0.4em] text-zen-forest mb-8">Focus Timeline</h4>
                            <div className="bg-zen-ink/[0.02] border border-zen-ink/5 rounded-3xl p-6 relative overflow-hidden group text-zen-ink">
                                <div className="absolute -right-4 -top-4 text-4xl opacity-10 group-hover:scale-110 transition-transform duration-700">🎯</div>
                                <div className="font-bold text-zen-ink text-lg tracking-tight mb-1">CUET UG 2026</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Official Calendar</div>
                                <div className="inline-block px-4 py-1.5 bg-zen-forest/5 text-zen-forest rounded-full text-[10px] font-bold uppercase tracking-widest border border-zen-forest/20 shadow-soft">
                                    {cuetDays} Days Remaining
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-zen-ink/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">
                        <span>&copy; 2026 SUNCUBE ARTS PREP</span>
                        <span className="text-zen-ink/10">SERENE FOCUS // COGNITIVE CLARITY</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
