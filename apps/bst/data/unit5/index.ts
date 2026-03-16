import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit5: Chapter = {
    id: 5,
    slug: "unit-5",
    description: "Comprehensive coverage of Unit 5",
    name: "Organising",
    topics: topics,
    flashcards: flashcards,
    sqp: sqp,
    mindMap: MIND_MAP,
    cheatSheet: CHEAT_SHEET
};
