
import { MindMapNode, CheatSheetItem } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u7-mm1',
  label: 'Current Challenges',
  children: [
    {
      id: 'u7-mm2',
      label: 'Human Capital',
      children: [
        { 
          id: 'u7-mm3', 
          label: 'Sources',
          children: [
            { id: 'u7-mms1', label: 'Education' },
            { id: 'u7-mms2', label: 'Health' },
            { id: 'u7-mms3', label: 'Training' },
            { id: 'u7-mms4', label: 'Migration' }
          ]
        },
        { id: 'u7-mm4', label: 'Capital vs Development' }
      ]
    },
    {
      id: 'u7-mm5',
      label: 'Rural Development',
      children: [
        { 
          id: 'u7-mm6', 
          label: 'Credit',
          children: [
            { id: 'u7-mmc1', label: 'NABARD (1982)' },
            { id: 'u7-mmc2', label: 'Institutional' }
          ]
        },
        { id: 'u7-mm7', label: 'Marketing' },
        { id: 'u7-mmd1', label: 'Diversification' }
      ]
    },
    {
      id: 'u7-mm8',
      label: 'Employment',
      children: [
        { id: 'u7-mm9', label: 'Informalisation' },
        { id: 'u7-mm10', label: 'Casualisation' },
        { id: 'u7-mmun1', label: 'Types of Unemployment' }
      ]
    },
    {
      id: 'u7-mme1',
      label: 'Sustainability',
      children: [
        { id: 'u7-mme2', label: 'Environmental Functions' },
        { id: 'u7-mme3', label: 'Global Warming' },
        { id: 'u7-mme4', label: 'Sustainable Strategies' }
      ]
    }
  ]
};
