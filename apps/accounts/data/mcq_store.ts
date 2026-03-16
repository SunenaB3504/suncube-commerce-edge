import { ALL_CHAPTERS } from './index';
import { SQPQuestion } from '../types';

export interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctOption: string;
    explanation: string;
    chapterId: string;
    chapterTitle: string;
}

export interface MCQStats {
    total: number;
    unique: number;
    chapterWise: Record<string, number>;
}

// Helper to clean and parse options
const parseOptions = (questionText: string): { question: string; options: string[] } => {
    // Regex to find options like (A), (B), (C), (D) or (a), (b), (c), (d) or A. B. C. D.
    // Enhanced to require any whitespace (space, tab, newline) or start of string before the marker.
    // We rely on the "last 4 matches" logic to filter out false positives like "Assertion (A)".
    const regex = /(?:^|\s)((?:\([A-Da-d]\))|(?:[A-Da-d]\))|(?:[A-Da-d]\.))/g;

    let options: string[] = [];
    let cleanQuestion = questionText;

    // Try to find where options start
    const optionMatches = [...questionText.matchAll(regex)];

    if (optionMatches.length >= 4) {
        // We take the last 4 matches to ensure we get the actual options
        const last4 = optionMatches.slice(-4);

        // split the text based on these indices
        // options[0] starts at the beginning of the first option match
        const firstOptStart = last4[0].index!;
        cleanQuestion = questionText.substring(0, firstOptStart).trim();

        // Extract options
        for (let i = 0; i < 4; i++) {
            const start = last4[i].index!;
            const end = (i < 3) ? last4[i + 1].index! : questionText.length;
            let optText = questionText.substring(start, end).trim();

            // Remove the marker itself. Since we matched with (?:^|\n)\s*, 
            // the marker is captured in group 1, or we can just replace the pattern at the start.
            // We strip any leading newlines/whitespace first ensuring we are at the marker.
            optText = optText.replace(/^[\r\n\s]+/, '');
            optText = optText.replace(/^(\([A-Da-d]\)|[A-Da-d]\)|[A-Da-d]\.)\s?/, '').trim();

            options.push(optText);
        }
    } else {
        options = [];
    }

    return { question: cleanQuestion, options };
};

export const getAllMCQs = (): MCQ[] => {
    const allMCQs: MCQ[] = [];
    const seenQuestionTexts = new Set<string>();

    ALL_CHAPTERS.forEach(chapter => {
        chapter.sqps.forEach(sqp => {
            // Filter for MCQ types
            if (sqp.type.toLowerCase().includes('mcq') || sqp.type.toLowerCase().includes('assertion')) {

                // Uniqueness check: Clean whitespaces and lower case to compare
                const normalizedText = sqp.question.trim().toLowerCase().replace(/\s+/g, ' ');

                if (!seenQuestionTexts.has(normalizedText)) {
                    seenQuestionTexts.add(normalizedText);

                    const parsed = parseOptions(sqp.question);

                    // If options extraction failed but it's an MCQ, we might want to keep it 
                    // but the UI needs to handle it. For 'assertion-reason', options are standard often.

                    // Refine parsing for Assertion-Reason if needed? 
                    // Usually standard options: A, B, C, D.

                    allMCQs.push({
                        id: sqp.id,
                        question: parsed.question,
                        options: parsed.options,
                        correctOption: sqp.markingScheme,
                        explanation: sqp.aiExplanation,
                        chapterId: chapter.id,
                        chapterTitle: chapter.title
                    });
                }
            }
        });
    });

    // Shuffle the array
    for (let i = allMCQs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allMCQs[i], allMCQs[j]] = [allMCQs[j], allMCQs[i]];
    }

    return allMCQs;
};

export const getMCQStats = (): MCQStats => {
    const mcqs = getAllMCQs();
    const stats: MCQStats = {
        total: 0, // Total *occurrences* in source if we didn't dedupe? No, stats usually on the dataset available to user.
        // User asked for "Count chapterwise MCQs and Unique MCQs".
        // My getAllMCQs returns unique ones. 
        // Let's count *total raw* vs *unique*.
        unique: mcqs.length,
        chapterWise: {}
    };

    // Re-run raw count for "Total" vs "Unique" stats distinction
    let rawCount = 0;
    ALL_CHAPTERS.forEach(chapter => {
        let chapterUniqueCount = 0;
        chapter.sqps.forEach(sqp => {
            if (sqp.type.toLowerCase().includes('mcq') || sqp.type.toLowerCase().includes('assertion')) {
                rawCount++;
            }
        });
    });
    stats.total = rawCount;

    // Chapter-wise breakdown of UNIQUE questions
    mcqs.forEach(q => {
        stats.chapterWise[q.chapterTitle] = (stats.chapterWise[q.chapterTitle] || 0) + 1;
    });

    return stats;
};
