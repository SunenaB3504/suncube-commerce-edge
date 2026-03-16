import { Chapter } from '../types';
import { CH_PARTNERSHIP_BASIC_CHAPTER } from './chapter_partnership_basic';
import { CH_PARTNERSHIP_ADMISSION_CHAPTER } from './chapter_partnership_admission';
import { CH_PARTNERSHIP_RETIREMENT_CHAPTER } from './chapter_partnership_retirement_death';
import { CH_PARTNERSHIP_DISSOLUTION_CHAPTER } from './chapter_partnership_dissolution';
import { CH1_CHAPTER } from './chapter1';
import { CH2_CHAPTER } from './chapter2';
import { CH3_CHAPTER } from './chapter3';
import { CH4_CHAPTER } from './chapter4';
import { CH5_CHAPTER } from './chapter5';
import { CH6_CHAPTER } from './chapter6';

export const ALL_CHAPTERS: Chapter[] = [
  CH_PARTNERSHIP_BASIC_CHAPTER,
  CH_PARTNERSHIP_ADMISSION_CHAPTER,
  CH_PARTNERSHIP_RETIREMENT_CHAPTER,
  CH_PARTNERSHIP_DISSOLUTION_CHAPTER,
  CH1_CHAPTER,
  CH2_CHAPTER,
  CH3_CHAPTER,
  CH4_CHAPTER,
  CH5_CHAPTER,
  CH6_CHAPTER
];