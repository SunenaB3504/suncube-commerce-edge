export type ContentType = 'prose' | 'poetry' | 'writing' | 'reading';

export interface ForensicNote {
  title: string;
  content: string;
  type: 'theme' | 'symbol' | 'tone' | 'character' | 'vocabulary';
}

export interface SQPTrigger {
  question: string;
  answerVerbatim: string;
  markingSchemePoints: string[];
  year: string;
  type: 'RTC' | 'Short' | 'Long' | 'Persona' | 'Compare';
  marks: number;
  aiExplanation: string;
}

export interface ChapterForensics {
  id: string;
  title: string;
  author: string;
  summary: string;
  narrativeVoice: string;
  setting: string;
  authorStyle: string;
  themes: string[];
  milestones: { time: string; event: string }[];
  characters: {
    name: string;
    traits: string[];
    conflict: string;
    growth: string;
    evidence: string;
  }[];
  motifs: { symbol: string; meaning: string }[];
  dictionary: { word: string; context: string; synonym: string }[];
  triggers: SQPTrigger[];
  distinctions?: {
    title: string;
    comparison: { labelA: string; labelB: string; points: { a: string; b: string }[] }
  }[];
}

export interface PoetryForensics extends Omit<ChapterForensics, 'milestones'> {
  rhymeScheme: string;
  poeticDevices: { line: string; device: string; explanation: string }[];
  stanzaBreakdown: { stanza: number; summary: string; tone: string }[];
}

export interface WritingSkeleton {
  id: string;
  format: string;
  blueprint: { section: string; content: string; keyPhrases: string[] }[];
  vocabularyUpgrades: { basic: string; advanced: string }[];
}
