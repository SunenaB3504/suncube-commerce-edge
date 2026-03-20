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
        <div className="min-h-screen flex flex-col bg-brand-slate text-slate-100 selection:bg-brand-amber/30 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-slate/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center shadow-2xl">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a 
                            href="/suncube-commerce-edge/" 
                            className="w-10 h-10 bg-white/5 hover:bg-white text-slate-400 hover:text-brand-slate rounded-xl flex items-center justify-center transition-all border border-white/5 active:scale-95 group"
                            title="Abort to Mission Hub"
                        >
                            <HomeIcon size={18} className="group-hover:rotate-[-10deg] transition-transform" />
                        </a>
                        <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
                            <div className="p-2 bg-brand-amber/10 rounded-xl group-hover:scale-110 transition-transform">
                                <Rocket size={24} className="text-brand-amber" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter uppercase text-white group-hover:text-brand-amber transition-colors">
                                Alpha <span className="text-brand-amber">Prep</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <nav className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                            <Link to="/" className="hover:text-white transition-colors">Command Center</Link>
                            <Link to="/analytics" className="hover:text-brand-indigo transition-colors flex items-center gap-2">
                                <BarChart3 size={14} /> Performance Audit
                            </Link>
                        </nav>
                        
                        <div className="h-8 w-px bg-white/5 mx-2"></div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-amber/10 border border-brand-amber/20 rounded-full">
                                <Flame size={14} className="text-brand-amber animate-pulse" />
                                <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest">{streak} DAY STREAK</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full">
                                <Target size={14} className="text-brand-emerald" />
                                <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest">{cuetDays}d TILL DEPLOY</span>
                            </div>
                            
                            <Link 
                                to="/mocks" 
                                className="px-6 py-2.5 bg-brand-amber hover:bg-white text-brand-slate rounded-xl transition-all font-black text-[10px] uppercase tracking-[0.2em] shadow-glow-amber/20 hover:shadow-glow-amber/40 active:scale-95 flex items-center gap-2"
                            >
                                <FlaskConical size={14} /> Execute Mock
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        {mobileMenuOpen ? <X size={24} className="text-brand-amber" /> : <Menu size={24} className="text-brand-amber" />}
                    </button>
                </div>

                {/* Mobile Slide-down Menu */}
                <div className={`fixed inset-0 top-20 bg-brand-slate/95 backdrop-blur-2xl z-[49] md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
                    <div className="container mx-auto px-6 py-12 flex flex-col gap-6">
                        <Link to="/" onClick={closeMobileMenu} className="p-6 rounded-3xl bg-white/5 border border-white/5 text-white font-black text-sm uppercase tracking-widest flex items-center justify-between group active:bg-white/10">
                            Command Center <ChevronRight size={18} className="text-brand-amber group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link to="/analytics" onClick={closeMobileMenu} className="p-6 rounded-3xl bg-white/5 border border-white/5 text-white font-black text-sm uppercase tracking-widest flex items-center justify-between group active:bg-white/10">
                            Performance Audit <ChevronRight size={18} className="text-brand-indigo group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link to="/mocks" onClick={closeMobileMenu} className="p-8 rounded-[2.5rem] bg-brand-amber text-brand-slate font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-glow-amber/20 active:scale-95 transition-all">
                            <FlaskConical size={20} /> Execute Mock Deployment
                        </Link>
                        
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="p-6 rounded-3xl bg-brand-amber/5 border border-brand-amber/10 flex flex-col items-center gap-3">
                                <Flame size={24} className="text-brand-amber animate-pulse" />
                                <span className="text-[10px] font-black text-brand-amber uppercase tracking-widest text-center">{streak} DAY STREAK</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-brand-emerald/5 border border-brand-emerald/10 flex flex-col items-center gap-3">
                                <Target size={24} className="text-brand-emerald" />
                                <span className="text-[10px] font-black text-brand-emerald uppercase tracking-widest text-center">{cuetDays}d TILL DEPLOY</span>
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
            <footer className="bg-brand-slate border-t border-white/5 py-20 overflow-hidden relative mt-auto">
                <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none select-none">
                    <span className="text-[250px] font-black uppercase tracking-tighter text-white italic">ALPHA</span>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="p-2 bg-brand-amber/10 rounded-xl">
                                    <Rocket size={20} className="text-brand-amber" />
                                </div>
                                <span className="text-xl font-black italic tracking-tighter uppercase text-white">
                                    Alpha <span className="text-brand-amber">Prep</span>
                                </span>
                            </div>
                            <p className="text-xs font-medium text-slate-500 leading-relaxed uppercase tracking-tight italic">
                                High-performance speed-logic engine for CUET & MH-CET aspirants. Engineered for cognitive dominance.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="font-black uppercase text-[10px] tracking-[0.4em] text-brand-amber mb-8 italic">Quick Protocols</h4>
                            <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                                <Link to="/" className="hover:text-white transition-colors">Command Center</Link>
                                <Link to="/analytics" className="hover:text-brand-indigo transition-colors underline decoration-brand-indigo/30 underline-offset-8">Performance Audit</Link>
                                <Link to="/mocks" className="hover:text-brand-amber transition-colors underline decoration-brand-amber/30 underline-offset-8">Mock Deployments</Link>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-black uppercase text-[10px] tracking-[0.4em] text-brand-emerald mb-8 italic">Mission Timeline</h4>
                            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 text-4xl opacity-10 group-hover:scale-125 transition-transform duration-700">🎯</div>
                                <div className="font-black text-white text-lg tracking-tight uppercase italic mb-1">CUET UG 2026</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Standard Board Calendar</div>
                                <div className="inline-block px-4 py-1.5 bg-brand-emerald/10 text-brand-emerald rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-emerald/20 shadow-glow-emerald/10 italic">
                                    {cuetDays} Days Remaining
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] italic">
                        <span>&copy; 2026 SUNCUBE ARTS PREP</span>
                        <span className="text-white/20">AESTHETIC STRENGTH // COGNITIVE ACCURACY</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
