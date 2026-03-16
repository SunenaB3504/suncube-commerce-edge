
import { Chapter } from '../../types';
import { TOPICS } from './topics';
import { FLASHCARDS } from './flashcards';
import { SQP_QUESTIONS } from './sqp';
import { MIND_MAP } from './mindMap';
import { CHEAT_SHEET } from './cheatSheet';

export const unit1: Chapter = {
  id: 1,
  slug: 'national-income',
  name: 'National Income & Related Aggregates',
  description: 'Circular flow of income, aggregates, and measurement methods.',
  topics: TOPICS,
  flashcards: FLASHCARDS,
  sqp: SQP_QUESTIONS,
  mindMap: MIND_MAP,
  cheatSheet: CHEAT_SHEET
};
