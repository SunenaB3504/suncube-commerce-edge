
export type VisualType = 'table' | 'flow' | 'grid' | 'steps' | 'list' | 'tree' | 'process';

export interface VisualTreeNode {
  name: string;
  children?: VisualTreeNode[];
}

export type VisualData =
  | { headers: string[]; rows: string[][] } // for 'table'
  | { label: string; desc: string }[]      // for 'grid'
  | string[]                               // for 'steps', 'list'
  | { nodes: { id: string, label: string }[], edges: { from: string, to: string, label?: string }[] } // for 'flow' (graph)
  | { root: string; children: VisualTreeNode[] } // for 'tree'
  | { title: string; description: string }[]; // for 'process'

export interface Visualization {
  id: string;
  title: string;
  type: VisualType;
  caption?: string;
  formula?: string;
  data: VisualData;
}

export interface TheoryTopic {
  id: string;
  title: string;
  description: string;
  content: string[];
  visualizations: Visualization[];
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
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

export interface CheatSheetItem {
  id?: string;
  title: string;
  content?: string[];
  points?: string[];
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
  cheatSheet: CheatSheetItem[];
}

export type QuizAnswer = {
  questionId: string;
  selectedOption: string; // e.g. "A", "B", "C", "D"
  isCorrect: boolean;
};

export type UnitScore = {
  unitId: number;
  unitName: string;
  totalQuestions: number;
  correctAnswers: number;
};

export type QuizResult = {
  totalScore: number;
  maxScore: number;
  unitScores: UnitScore[];
  answers: QuizAnswer[];
};
