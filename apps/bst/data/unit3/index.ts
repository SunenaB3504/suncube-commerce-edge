import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit3: Chapter = {
    id: 3,
    slug: "unit-3",
    description: "Comprehensive coverage of Unit 3",
    name: "Business Environment",
    topics: topics,
    flashcards: flashcards,
    sqp: sqp,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
