import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit8: Chapter = {
    id: 8,
    slug: "unit-8",
    description: "Comprehensive coverage of Unit 8",
    name: "Controlling",
    topics: topics,
    flashcards: flashcards,
    sqp: sqp,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
