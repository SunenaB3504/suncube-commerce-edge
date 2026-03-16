import { ALL_UNITS } from '../data';
import { SQPQuestion } from '../types';

export interface NonMCQWithUnit extends SQPQuestion {
    unitId: number;
    unitName: string;
}

/**
 * Aggregates all non-multiple choice questions from all units,
 * injecting the parent unit ID and name for tracking purposes.
 */
export const getAllNonMCQs = (): NonMCQWithUnit[] => {
    const allNonMCQs: NonMCQWithUnit[] = [];

    ALL_UNITS.forEach(unit => {
        // Include questions that are NOT MCQs
        const unitNonMCQs = unit.sqp.filter(q => q.type !== 'MCQ');
        unitNonMCQs.forEach(q => {
            allNonMCQs.push({
                ...q,
                unitId: unit.id,
                unitName: unit.name
            });
        });
    });

    return allNonMCQs;
};
