
export type VisualType = 'table' | 'flow' | 'grid' | 'steps' | 'list';

export type VisualData = 
  | { headers: string[]; rows: string[][] } // for 'table'
  | { label: string; desc: string }[]      // for 'grid'
  | string[];                              // for 'flow' (steps), 'list'

export interface Visualization {
  id: string;
  title: string;
  type: VisualType;
  caption?: string;
  formula?: string;
  formulaTitle?: string;
  hack?: string;
  data: VisualData;
}

export interface TheoryTopic {
  id: string;
  title: string;
  description: string;
  content: string[];
  visualizations: Visualization[];
  dangerZones?: string[];
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SQPQuestion {
  id: string;
  year: string;
  paperType: 'SQP' | 'Board' | 'Term-1';
  marks: number;
  type: 'MCQ' | 'SA' | 'LA' | 'Case' | 'Assertion-Reason';
  question: string;
  answer?: string; // Standard Answer text
  markingScheme?: string;
  aiExplanation: string;
  questionNumber?: string;
  source?: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface CheatSheetSection {
  title: string;
  points: string[];
}

export interface Chapter {
  id: number;
  slug: string;
  name: string;
  description: string;
  topics: TheoryTopic[];
  flashcards: Flashcard[];
  sqp: SQPQuestion[];
  mindMap: MindMapNode;
  cheatSheet: CheatSheetSection[];
}
