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
  }
];
