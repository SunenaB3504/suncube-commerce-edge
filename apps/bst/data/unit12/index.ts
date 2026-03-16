import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit12: Chapter = {
    id: 12,
    slug: "consumer-protection",
    description: "Comprehensive coverage of Consumer Protection",
    name: "Consumer Protection",
    topics: topics,
    flashcards: flashcards,
    sqp: sqp,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
