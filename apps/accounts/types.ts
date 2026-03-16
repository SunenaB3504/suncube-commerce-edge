
export interface TheoryTopic {
  id: string;
  title: string;
  content: string;
  subtopics: {
    title: string;
    description: string;
    points?: string[];
    illustration?: {
      type: 'image' | 'table' | 'flow';
      content: string | string[][]; // URL for image, or 2D array for table, or serialized flow
      caption?: string;
      concept?: string;
      formula?: string;
      resolution?: string;
    };
  }[];
}

export interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: 'Definitions' | 'True/False' | 'Classification' | 'Limits' | 'Theory' | 'Calculations';
}

export interface SQPQuestion {
  id: string;
  year: string;
  type: string;
  marks: number;
  question: string;
  markingScheme: string;
  aiExplanation: string;
}

export type MindMapItem = string | { label: string; children?: MindMapItem[] };

export interface MindMapNodeData {
  id: string;
  title: string;
  items: MindMapItem[];
  colorClass: string;
  iconName: 'Settings' | 'Target' | 'Layers' | 'BarChart3' | 'Users' | 'AlertCircle' | 'BookOpen' | 'Activity' | 'Scale' | 'Calculator';
}

export interface CheatSheetData {
  crucialRules: { title: string; content: string }[];

  // Generic / Part A
  sections?: { title: string; items: string[] }[];

  // Financial Statements Specific (Part B)
  natureTable?: string[][];
  limitations?: string[];
  balanceSheetOrder?: { head: string; items: string[] }[];
  classificationTable?: string[][];
  pnlOrder?: { category: string; items: string[]; note?: string }[];
  mnemonics?: { title: string; content: string }[];
  commonErrors?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  theory: TheoryTopic[];
  flashcards: Flashcard[];
  sqps: SQPQuestion[];
  mindMap: MindMapNodeData[];
  cheatSheet: CheatSheetData;
  weightage: string;
}

export type ViewType = 'theory' | 'revision' | 'sqp' | 'cheat-sheet' | 'mcq-bank' | 'qa-bank';
