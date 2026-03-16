import React from 'react';
import MCQCard from './MCQCard';
import AssertionReasonCard from './AssertionReasonCard';
import CaseStudyCard from './CaseStudyCard';
import NumericalCard from './NumericalCard';
import DiagramRenderer from './DiagramRenderer';

const QuestionRenderer = ({ question, selectedAnswer, onAnswer, isSubmitted }) => {
    if (!question) return null;

    const renderCard = () => {
        switch (question.type) {
            case 'mcq':
                return (
                    <MCQCard
                        question={question}
                        selectedAnswer={selectedAnswer}
                        onAnswer={onAnswer}
                        isSubmitted={isSubmitted}
                    />
                );

            case 'assertion-reason':
                return (
                    <AssertionReasonCard
                        question={question}
                        selectedAnswer={selectedAnswer}
                        onAnswer={onAnswer}
                        isSubmitted={isSubmitted}
                    />
                );

            case 'case-study':
                return (
                    <CaseStudyCard
                        question={question}
                        selectedAnswer={selectedAnswer}
                        onAnswer={onAnswer}
                        isSubmitted={isSubmitted}
                    />
                );

            case 'numerical':
                return (
                    <NumericalCard
                        question={question}
                        selectedAnswer={selectedAnswer}
                        onAnswer={onAnswer}
                        isSubmitted={isSubmitted}
                    />
                );

            case 'match-column':
                return (
                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-2xl text-center">
                        <div className="text-4xl mb-4">🔗</div>
                        <h3 className="text-lg font-bold text-slate-700 mb-2">
                            Match Column Support Coming Soon
                        </h3>
                        <p className="text-slate-500">
                            This complex question type is being finalized for maximal interactivity.
                        </p>
                    </div>
                );

            default:
                return (
                    <div className="p-6 bg-red-50 text-red-600 rounded-xl border border-red-100">
                        Unknown question type: {question.type}
                    </div>
                );
        }
    };

    return (
        <>
            {question.diagram && <DiagramRenderer diagram={question.diagram} />}
            {renderCard()}
        </>
    );
};

export default QuestionRenderer;
