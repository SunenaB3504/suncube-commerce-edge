
import { MindMapNode } from '../../types';

export const MIND_MAP: MindMapNode = {
  id: 'u1-m1',
  label: 'Unit 1: National Income Accounting',
  children: [
    {
      id: 'u1-intro',
      label: 'Introduction',
      children: [
        { id: 'u1-i1', label: 'Great Depression (1929)' },
        { id: 'u1-i2', label: 'Keynes (1936)' },
        { id: 'u1-i3', label: 'Macro Decision Makers (RBI, SEBI)' }
      ]
    },
    {
      id: 'u1-m2',
      label: 'Circular Flow (Two-Sector)',
      children: [
        { id: 'u1-m2a', label: 'Real Flow (Goods/Services)' },
        { id: 'u1-m2b', label: 'Money Flow (Factor Payments/Expenditure)' },
        { id: 'u1-m2c', label: 'Factor & Product Markets' }
      ]
    },
    {
      id: 'u1-m3',
      label: 'Basic Concepts',
      children: [
        { id: 'u1-c1', label: 'Stocks vs Flows' },
        { id: 'u1-c2', label: 'Final vs Intermediate' },
        { id: 'u1-c3', label: 'Domestic vs National' },
        { id: 'u1-c4', label: 'Gross vs Net (Depreciation)' }
      ]
    },
    {
      id: 'u1-m4',
      label: 'Measurement Methods',
      children: [
        { id: 'u1-m4a', label: 'Value Added (Product)' },
        { id: 'u1-m4b', label: 'Income Method (COE + OS + MI)' },
        { id: 'u1-m4c', label: 'Expenditure Method (C+I+G+X-M)' }
      ]
    },
    {
      id: 'u1-m5',
      label: 'Welfare & GDP',
      children: [
        { id: 'u1-w1', label: 'GDP Deflator' },
        { id: 'u1-w2', label: 'Externalities' },
        { id: 'u1-w3', label: 'Non-monetary Exchanges' }
      ]
    }
  ]
};
