
import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u2-mm1',
  label: 'Money and Banking',
  children: [
    {
      id: 'u2-funcs',
      label: 'Functions of Money',
      children: [
        { id: 'u2-f1', label: 'Medium of Exchange' },
        { id: 'u2-f2', label: 'Unit of Account' },
        { id: 'u2-f3', label: 'Store of Value' }
      ]
    },
    {
      id: 'u2-demand',
      label: 'Demand for Money',
      children: [
        { id: 'u2-d1', label: 'Transaction Motive (M^T_d)' },
        { id: 'u2-d2', label: 'Speculative Motive (M^S_d)' },
        { id: 'u2-d3', label: 'Liquidity Trap' }
      ]
    },
    {
      id: 'u2-mm6',
      label: 'Banking & Credit Creation',
      children: [
        { id: 'u2-mm7', label: 'Credit Creation (1/LRR)' },
        { id: 'u2-mm8', label: 'Balance Sheet Logic' },
        { id: 'u2-mm9', label: 'Initial Deposits' }
      ]
    },
    {
      id: 'u2-mm10',
      label: 'Monetary Policy (RBI)',
      children: [
        { id: 'u2-q1', label: 'Quantitative (Repo, OMO, CRR)' },
        { id: 'u2-q2', label: 'Qualitative (Margin, Moral Suasion)' },
        { id: 'u2-q3', label: 'Lender of Last Resort' }
      ]
    }
  ]
};
