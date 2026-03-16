export interface SQPQuestion {
    id: string;
    questionNumber: string;
    question: string;
    marks: string;
    markingScheme: string;
    aiExplanation: string;
}

export interface SQPSection {
    id: string;
    title: string;
    marks: string;
    questions: SQPQuestion[];
}

export interface StructuredSQP {
    year: string;
    title: string;
    sections: SQPSection[];
}
