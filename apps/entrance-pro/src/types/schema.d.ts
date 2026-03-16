export interface HackerHack {
    title: string;
    description: string;
    example?: string;
}

export interface Formula {
    name: string;
    equation: string;
    context?: string;
}

export interface QuestionMetadata {
    hacker_hacks?: HackerHack[];
    formula_bank?: Formula[];
    common_traps?: string[];
    speed_target_seconds?: number;
    cognitive_depth: 'recall' | 'application' | 'synthesis' | 'evaluation';
}

export interface TopicContent {
    core_concept: string;
    hacker_hacks: HackerHack[];
    formula_bank: Formula[];
    common_traps: string[];
    examples: { q: string, a: string }[];
    speed_summary: string;
}

export interface ChapterData {
    id: string;
    title: string;
    content: TopicContent;
}

export interface SubjectData {
    subject: string;
    chapter: string;
    examTags: string[];
    studyGuide: {
        topics: ChapterData[];
    };
    flashcards: {
        id: string;
        term: string;
        definition: string;
        formula?: string;
        example?: string;
    }[];
    questions: {
        id: string;
        type: 'mcq' | 'numerical';
        difficulty: 'easy' | 'medium' | 'hard';
        question: string;
        options: string[];
        correct: number;
        explanation: string;
        metadata?: QuestionMetadata;
        examTags: string[];
    }[];
}
