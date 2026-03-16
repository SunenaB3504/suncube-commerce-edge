
import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u5-mm1',
  label: 'External Sector (BoP & Forex)',
  children: [
    {
      id: 'u5-mm2',
      label: 'Foreign Exchange Rate',
      children: [
        {
          id: 'u5-mm3',
          label: 'Systems',
          children: [
            { id: 'u5-mm4', label: 'Fixed (Gold/Pegged)' },
            { id: 'u5-mm5', label: 'Flexible (Market Driven)' },
            { id: 'u5-mm6', label: 'Managed Floating (Dirty)' }
          ]
        },
        {
          id: 'u5-mm7',
          label: 'Rate Changes',
          children: [
            { id: 'u5-mm8', label: 'Depreciation (Market Fall)' },
            { id: 'u5-mm9', label: 'Appreciation (Market Rise)' },
            { id: 'u5-mm10', label: 'Devaluation (Govt Fall)' }
          ]
        },
        {
          id: 'u5-mm11',
          label: 'Market Forces',
          children: [
            { id: 'u5-mm12', label: 'Demand (Imports, Tourism)' },
            { id: 'u5-mm13', label: 'Supply (Exports, FDI)' }
          ]
        }
      ]
    },
    {
      id: 'u5-mm14',
      label: 'Balance of Payments (BoP)',
      children: [
        {
          id: 'u5-mm15',
          label: 'Current Account',
          children: [
            { id: 'u5-mm16', label: 'Visible (Merchandise)' },
            { id: 'u5-mm17', label: 'Invisible (Services)' },
            { id: 'u5-mm18', label: 'Unilateral Transfers' }
          ]
        },
        {
          id: 'u5-mm19',
          label: 'Capital Account',
          children: [
            { id: 'u5-mm20', label: 'Investments (FDI/FPI)' },
            { id: 'u5-mm21', label: 'Borrowings (Loans)' },
            { id: 'u5-mm22', label: 'Forex Reserves' }
          ]
        },
        {
          id: 'u5-mm23',
          label: 'Analysis',
          children: [
            { id: 'u5-mm24', label: 'Autonomous (Above line)' },
            { id: 'u5-mm25', label: 'Accommodating (Below line)' },
            { id: 'u5-mm26', label: 'Balance of Trade (Visible)' }
          ]
        }
      ]
    }
  ]
};
