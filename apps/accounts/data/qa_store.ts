import { ALL_CHAPTERS } from './index';

export interface QAQuestion {
    id: string;
    question: string;
    markingScheme: string;
    aiExplanation: string;
    chapterId: string;
    chapterTitle: string;
    year: string;
    type: string;
    marks: number;
    sqpFileName: string;
    msFileName: string;
    questionNumber: string;
}

/** Derive the SQP PDF filename from the year string stored in chapter data */
const getSQPFileName = (year: string): string => {
    if (year === '2025-26') return 'Accountancy-SQP - 2025-26.pdf';
    if (year === '2024-25') return 'Accountancy-SQP-2024-25.pdf';
    if (year === '2023-24') return 'Accountancy-SQP-2023-24.pdf';
    if (year === '2022-23') return 'Accountancy-SQP-2022-23.pdf';
    return `Accountancy-SQP-${year}.pdf`;
};

/** Derive the MS PDF filename from the year string stored in chapter data */
const getMSFileName = (year: string): string => {
    if (year === '2025-26') return 'Accountancy-MS - 2025-26.pdf';
    if (year === '2024-25') return 'Accountancy-MS-2024-25.pdf';
    if (year === '2023-24') return 'Accountancy-MS-2023-24.pdf';
    if (year === '2022-23') return 'Accountancy-MS-2022-23.pdf';
    return `Accountancy-MS-${year}.pdf`;
};

/**
 * Extract question number from the question text.
 * Handles formats like: "34.", "Q34", "34 (a)", "15. (OR)", "28. OR"
 */
const extractQuestionNumber = (questionText: string): string => {
    const match = questionText.trim().match(/^(\d{1,2})\s*\.?\s*(?:\(OR\)|OR)?/i);
    if (match) return `Q.${match[1]}`;
    return 'Q.—';
};

// Chapters that have no 6-mark questions — include their 3 and 4-mark subjective questions instead
const EXTENDED_MARK_CHAPTERS = new Set([
    'ch4',                     // Analysis of Financial Statements
    'ch5',                     // Accounting Ratios
    'partnership-dissolution', // Dissolution of Partnership Firm
]);

export const getAllQAs = (): QAQuestion[] => {
    const allQAs: QAQuestion[] = [];
    const seenIds = new Set<string>();

    ALL_CHAPTERS.forEach(chapter => {
        const isExtended = EXTENDED_MARK_CHAPTERS.has(chapter.id);

        chapter.sqps.forEach(sqp => {
            const typeLower = sqp.type.toLowerCase();

            // Exclude MCQ and Assertion-Reason questions — those belong to MCQ Bank
            if (typeLower.includes('mcq') || typeLower.includes('assertion')) return;

            // For extended chapters: include 3-mark and 4-mark questions
            // For all other chapters: include only 6-mark questions
            if (isExtended) {
                if (sqp.marks !== 3 && sqp.marks !== 4) return;
            } else {
                if (sqp.marks !== 6) return;
            }

            // Avoid duplicates by id
            if (seenIds.has(sqp.id)) return;
            seenIds.add(sqp.id);

            // Skip questions with no marking scheme (incomplete data)
            if (!sqp.markingScheme || sqp.markingScheme.trim() === '') return;

            allQAs.push({
                id: sqp.id,
                question: sqp.question,
                markingScheme: sqp.markingScheme,
                aiExplanation: sqp.aiExplanation,
                chapterId: chapter.id,
                chapterTitle: chapter.title,
                year: sqp.year,
                type: sqp.type,
                marks: sqp.marks,
                sqpFileName: getSQPFileName(sqp.year),
                msFileName: getMSFileName(sqp.year),
                questionNumber: extractQuestionNumber(sqp.question),
            });
        });
    });

    // Shuffle randomly
    for (let i = allQAs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allQAs[i], allQAs[j]] = [allQAs[j], allQAs[i]];
    }

    return allQAs;
};

export interface QAStats {
    total: number;
    chapterWise: Record<string, number>;
    markWise: Record<number, number>;
}

export const getQAStats = (): QAStats => {
    const qas = getAllQAs();
    const stats: QAStats = {
        total: qas.length,
        chapterWise: {},
        markWise: {},
    };

    qas.forEach(q => {
        stats.chapterWise[q.chapterTitle] = (stats.chapterWise[q.chapterTitle] || 0) + 1;
        stats.markWise[q.marks] = (stats.markWise[q.marks] || 0) + 1;
    });

    return stats;
};
