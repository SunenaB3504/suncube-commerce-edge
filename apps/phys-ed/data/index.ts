

import { unit1 } from './unit1';
import { unit2 } from './unit2';
import { unit3 } from './unit3';
import { unit4 } from './unit4';
import { unit5 } from './unit5';

import { unit6 } from './unit6';
import { unit7 } from './unit7';
import { unit8 } from './unit8';
import { unit9 } from './unit9';
import { unit10 } from './unit10';
import { Chapter } from '../types';

export const ALL_UNITS: Chapter[] = [
  { ...unit1, id: 1 },    // Unit I: Planning in Sports
  { ...unit2, id: 2 },    // Unit II: Sports and Nutrition
  { ...unit3, id: 3 },    // Unit III: Yoga and Lifestyle
  { ...unit4, id: 4 },    // Unit IV: Physical Education and Sports for CWSN
  { ...unit5, id: 5 },    // Unit V: Children and Women in Sports
  { ...unit6, id: 6 },
  { ...unit7, id: 7 },
  { ...unit8, id: 8 },
  { ...unit9, id: 9 },
  { ...unit10, id: 10 },
];
