import React from 'react';
import { useAppContext } from '../../store/AppContext';

const Badges = () => {
    const { badges, streak } = useAppContext();

    const badgeCatalog = [
        {
            id: '7-day-streak',
            name: 'Week Warrior',
            description: 'Maintain a 7-day study streak.',
            icon: '🔥',
            color: 'bg-orange-100 text-orange-600 border-orange-200'
        },
        {
            id: 'cuet-expert',
            name: 'CUET Expert',
            description: 'Score 180+ in a CUET Mock Test.',
            icon: '🎓',
            color: 'bg-blue-100 text-blue-600 border-blue-200'
        },
        {
            id: 'speed-demon',
            name: 'Speed Demon',
            description: 'Complete 30 questions in under 10 minutes.',
            icon: '⚡',
            color: 'bg-yellow-100 text-yellow-600 border-yellow-200'
        },
        {
            id: 'gk-guru',
            name: 'GK Guru',
            description: 'Get 100% accuracy in a GK module.',
            icon: '🌍',
            color: 'bg-green-100 text-green-600 border-green-200'
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Your Achievements</h2>
                    <p className="text-slate-500 text-sm">Collect badges as you master the curriculum.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-lg">
                    <span>🔥</span>
                    <span>{streak} Day Streak</span>
                </div>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {badgeCatalog.map((badge) => {
                    const isUnlocked = badges.includes(badge.id);
                    return (
                        <div
                            key={badge.id}
                            className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all ${isUnlocked
                                    ? badge.color + ' opacity-100 scale-100'
                                    : 'bg-slate-50 text-slate-300 border-dashed border-slate-200 grayscale opacity-50'
                                }`}
                        >
                            <div className={`text-4xl mb-4 ${isUnlocked ? 'animate-bounce' : ''}`}>
                                {badge.icon}
                            </div>
                            <h3 className="font-bold text-sm mb-1">{badge.name}</h3>
                            <p className="text-[10px] leading-tight font-medium uppercase tracking-wider">
                                {isUnlocked ? 'Unlocked' : 'Locked'}
                            </p>
                            {!isUnlocked && (
                                <p className="mt-2 text-[10px] text-slate-400 font-normal italic">
                                    {badge.description}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {badges.length === 0 && (
                <div className="mt-8 p-4 bg-blue-50 text-blue-700 rounded-xl text-center text-xs font-bold border border-blue-100">
                    💡 Complete your first Mock Test or maintain a streak to unlock badges!
                </div>
            )}
        </div>
    );
};

export default Badges;
