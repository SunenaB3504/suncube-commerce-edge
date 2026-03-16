
import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u3-mm1',
  label: 'Determination of Income & Employment',
  children: [
    {
      id: 'u3-c1',
      label: 'Aggregate Demand (C + I)',
      children: [
        { id: 'u3-c1a', label: 'Autonomous vs Induced' },
        { id: 'u3-c1b', label: '45° Reference Line (AS)' }
      ]
    },
    {
      id: 'u3-c2',
      label: 'Propensities',
      children: [
        { id: 'u3-c2a', label: 'Average (APC + APS = 1)' },
        { id: 'u3-c2b', label: 'Marginal (MPC + MPS = 1)' },
        { id: 'u3-c2c', label: 'Relationship: C & S Curves' }
      ]
    },
    {
      id: 'u3-c3',
      label: 'The Multiplier (k)',
      children: [
        { id: 'u3-c3a', label: 'Formula: 1/MPS' },
        { id: 'u3-c3b', label: 'Process: Rounds of Income' }
      ]
    },
    {
      id: 'u3-c4',
      label: 'Adjustment & Gaps',
      children: [
        { id: 'u3-c4a', label: 'Excess vs Deficient Demand' },
        { id: 'u3-c4b', label: 'Institutional Fixes (RBI/Govt)' }
      ]
    }
  ]
};
