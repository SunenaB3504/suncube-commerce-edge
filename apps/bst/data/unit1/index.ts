import { Chapter } from '../../types';
import { topics } from './topics';
import { flashcards } from './flashcards';
import { sqp } from './sqp';
import { mindMap } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit1: Chapter = {
  id: 1,
  slug: 'nature-management',
  name: 'Nature and Significance of Management',
  description: 'Management functions, levels, and coordination as the essence of management.',
  topics,
  flashcards,
  sqp,
  mindMap,
  cheatSheet: CHEAT_SHEET
};
