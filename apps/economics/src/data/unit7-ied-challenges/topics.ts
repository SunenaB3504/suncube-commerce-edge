import { TheoryTopic } from '../../types';
import { MASTER_INTERRELATIONSHIPS_TOPIC } from './masterTable';
import { CH4_TOPICS } from './chapters/ch4-hcf';
import { CH5_TOPICS } from './chapters/ch5-rural';
import { CH6_TOPICS } from './chapters/ch6-employment';
import { CH7_TOPICS } from './chapters/ch7-environment';

export const TOPICS: TheoryTopic[] = [
  ...CH4_TOPICS,
  ...CH5_TOPICS,
  ...CH6_TOPICS,
  ...CH7_TOPICS,
  MASTER_INTERRELATIONSHIPS_TOPIC
];
