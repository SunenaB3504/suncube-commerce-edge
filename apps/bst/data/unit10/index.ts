import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { SQP_QUESTIONS } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit10: Chapter = {
    id: 10,
    slug: "financial-markets",
    description: "Comprehensive coverage of Financial Markets",
    name: "Financial Markets",
    topics: topics,
    flashcards: flashcards,
    sqp: SQP_QUESTIONS,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
