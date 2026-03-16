// src/config/exam-dates.config.js
// Centralised exam date configuration. Update these as official dates are announced.

export const EXAM_DATES = {
    CUET_UG_2026: new Date('2026-05-15T00:00:00'),
    MH_CET_2026: new Date('2026-04-20T00:00:00'),
};

/**
 * Returns the number of whole days remaining from today to the given date.
 * Returns 0 if the date has passed.
 */
export const getDaysRemaining = (targetDate) => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
};
