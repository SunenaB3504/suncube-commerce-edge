import { HackerHack } from './schema';

export const ACCOUNTS_HACKS: HackerHack[] = [
  {
    id: 'acc-iod-logic',
    category: 'ShortCut',
    title: 'Interest on Drawings (6-Month Rule)',
    description: 'When the date of drawings is not given, interest is always calculated for 6 months on the total amount.',
    advice: 'Treat 6/12 as your default multiplier if the question stem is silent on timing.'
  },
  {
    id: 'acc-cfs-format',
    category: 'PatternRecognition',
    title: 'Cash Flow: Current Assets Pattern',
    description: 'Decrease in Current Assets = Add to Operating Profit. Increase in Current Assets = Subtract from Operating Profit.',
    advice: 'Use the "Inverse Logic" rule: Asset Up? Cash Down. Asset Down? Cash Up.'
  }
];

export const BST_HACKS: HackerHack[] = [
  {
    id: 'bst-mgmnt-levels',
    category: 'Mnemonic',
    title: 'Levels of Management (TOP)',
    description: 'Top, Operational (Supervisory), and Middle.',
    advice: 'Remember "TOM" - Top, Operational, Middle. Top sets goals, Middle links them, Operational executes.'
  },
  {
    id: 'bst-functions-posdc',
    category: 'Mnemonic',
    title: 'Functions of Management (POSDC)',
    description: 'Planning, Organizing, Staffing, Directing, Controlling.',
    advice: 'Follow the "Sequence of Power": POSDC. You can\'t Control what you haven\'t Planned.'
  },
  {
    id: 'bst-marketing-4p',
    category: 'ShortCut',
    title: 'The Marketing Mix (4Ps)',
    description: 'Product, Price, Place, Promotion.',
    advice: 'Think of "PPPP" as the ingredients of a brand. Miss one, and the cake won\'t bake.'
  }
];

export const ECONOMICS_HACKS: HackerHack[] = [
  {
    id: 'eco-mnm-fcl',
    category: 'Mnemonic',
    title: 'Fiscal Deficit vs Primary Deficit',
    description: 'Fiscal Deficit is total borrowing. Primary Deficit = Fiscal Deficit - Interest Payments.',
    advice: 'Primary = "Current Year Burn". Interest is the ghost of past debts.'
  },
  {
    id: 'eco-mop-m3',
    category: 'ShortCut',
    title: 'M3 Money Supply (Broad Money)',
    description: 'M3 = M1 + Time Deposits (Fixed Deposits) with banks.',
    advice: 'M3 is M1 plus the "Sleeping Money" (Locked in FDs).'
  },
  {
    id: 'eco-idx-bop',
    category: 'PatternRecognition',
    title: 'BOP: Current vs Capital Account',
    description: 'Current Account records trade/income. Capital Account records ownership changes (FDI, FII).',
    advice: 'Current = "What we produce/consume". Capital = "What we own/owe".'
  }
];
