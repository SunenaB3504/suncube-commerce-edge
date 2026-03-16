import { ALL_UNITS } from '../data';
import { SQPQuestion } from '../types';

export interface MCQWithUnit extends SQPQuestion {
    unitId: number;
    unitName: string;
}

/**
 * Aggregates all multiple choice questions from all units,
 * injecting the parent unit ID and name for tracking purposes.
 */
export const getAllMCQs = (): MCQWithUnit[] => {
    const allMCQs: MCQWithUnit[] = [];

    ALL_UNITS.forEach(unit => {
        // Only include MCQs that actually have properly formatted options
        const unitMCQs = unit.sqp.filter(q => q.type === 'MCQ' && q.optionA);
        unitMCQs.forEach(mcq => {
            allMCQs.push({
                ...mcq,
                unitId: unit.id,
                unitName: unit.name
            });
        });
    });

    return allMCQs;
};
