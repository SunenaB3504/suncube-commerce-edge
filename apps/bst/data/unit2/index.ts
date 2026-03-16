import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit2: Chapter = {
    id: 2,
    slug: "unit-2",
    description: "Comprehensive coverage of Unit 2",
    name: "Principles of Management",
    topics: topics,
    flashcards: flashcards,
    sqp: sqp,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
