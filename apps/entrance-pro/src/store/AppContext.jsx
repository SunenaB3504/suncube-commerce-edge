import React, { createContext, useContext, useEffect } from 'react';
import { useProgress } from '../hooks/useProgress';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const progressHook = useProgress();
    const { progress, updateProgress } = progressHook;

    // Phase 7 States
    const [mockResults, setMockResults] = React.useState([]);
    const [badges, setBadges] = React.useState([]);
    const [streak, setStreak] = React.useState(0);
    const [lastActiveDate, setLastActiveDate] = React.useState(null);

    // Persistence: Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('commerce_prep_pro_v1');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.mockResults) setMockResults(parsed.mockResults);
                if (parsed.badges) setBadges(parsed.badges);
                if (parsed.streak) setStreak(parsed.streak);
                if (parsed.lastActiveDate) setLastActiveDate(parsed.lastActiveDate);
            } catch (e) {
                console.error("Failed to parse saved data", e);
            }
        }
        updateStreak();
    }, []);

    // Persistence: Save to localStorage on change
    useEffect(() => {
        const data = {
            progress,
            mockResults,
            badges,
            streak,
            lastActiveDate
        };
        localStorage.setItem('commerce_prep_pro_v1', JSON.stringify(data));
    }, [progress, mockResults, badges, streak, lastActiveDate]);

    const updateStreak = () => {
        const today = new Date().toDateString();
        if (lastActiveDate === today) return;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastActiveDate === yesterday.toDateString()) {
            setStreak(prev => prev + 1);
        } else if (!lastActiveDate) {
            setStreak(1);
        } else {
            setStreak(1); // Reset if missed a day
        }
        setLastActiveDate(today);
    };

    const recordMockResult = (result) => {
        setMockResults(prev => [result, ...prev].slice(0, 50)); // Keep last 50
        checkBadgeUnlocks(result);
    };

    const checkBadgeUnlocks = (newResult) => {
        const newBadges = [];
        if (streak >= 7 && !badges.includes('7-day-streak')) newBadges.push('7-day-streak');
        if (newResult.score >= 180 && !badges.includes('cuet-expert')) newBadges.push('cuet-expert');

        if (newBadges.length > 0) {
            setBadges(prev => [...new Set([...prev, ...newBadges])]);
        }
    };

    const loadChapterData = async (subjectId, chapterId) => {
        try {
            // Import and get chapter config to find the correct dataFile
            const { getChapterById } = await import('../config/subjects.config');
            const chapter = getChapterById(subjectId, chapterId);

            if (!chapter) throw new Error(`Chapter not found: ${subjectId}/${chapterId}`);

            // Maps subject IDs to their data directory names
            const folder = subjectId;

            // Use import.meta.glob for better Vite compatibility
            const modules = import.meta.glob('../data/**/*.data.js');
            const dataFileName = chapter.dataFile.endsWith('.data') ? `${chapter.dataFile}.js` : `${chapter.dataFile}.data.js`;
            const path = `../data/${folder}/${dataFileName}`;

            if (modules[path]) {
                const module = await modules[path]();
                const baseName = chapter.dataFile.split('/').pop().replace('.data', '');
                const exportName = baseName.replace(/-([a-z])/g, g => g[1].toUpperCase()) + "Data";
                return module[exportName];
            }

            throw new Error(`Module not found at path: ${path}`);
        } catch (e) {
            console.error("Failed to load chapter data", e);
            return null;
        }
    };

    const value = {
        ...progressHook,
        mockResults,
        badges,
        streak,
        recordMockResult,
        loadChapterData
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
