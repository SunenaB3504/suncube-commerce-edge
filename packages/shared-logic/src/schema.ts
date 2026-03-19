export type HackerHackCategory = 'Mnemonic' | 'ShortCut' | 'PatternRecognition' | 'CommonError';

export interface HackerHack {
  id: string;
  category: HackerHackCategory;
  title: string;
  description: string;
  points?: string[];
  advice: string;
}
