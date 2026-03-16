
import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u4-mm1',
  label: 'Government Budget and the Economy',
  children: [
    {
      id: 'u4-mm2',
      label: 'Objectives',
      children: [
        { id: 'u4-mm3', label: 'Resource Reallocation' },
        { id: 'u4-mm4', label: 'Income Redistribution' },
        { id: 'u4-mm5', label: 'Economic Stability' }
      ]
    },
    {
      id: 'u4-mm6',
      label: 'Budget Receipts',
      children: [
        { id: 'u4-mm7', label: 'Revenue (Tax & Non-Tax)' },
        { id: 'u4-mm8', label: 'Capital (Borrowing/Disinvestment)' }
      ]
    },
    {
      id: 'u4-mm9',
      label: 'Budget Expenditure',
      children: [
        { id: 'u4-mm10', label: 'Revenue (Interest/Salaries)' },
        { id: 'u4-mm11', label: 'Capital (Assets/Debt Repayment)' }
      ]
    },
    {
      id: 'u4-mm12',
      label: 'Budget Deficits',
      children: [
        { id: 'u4-mm13', label: 'Revenue Deficit' },
        { id: 'u4-mm14', label: 'Fiscal Deficit' },
        { id: 'u4-mm15', label: 'Primary Deficit' }
      ]
    }
  ]
};
