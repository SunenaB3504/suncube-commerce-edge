// src/data/english/index.js
import { comprehensionData } from './comprehension.data.js';
import { grammarData } from './grammar.data.js';
import { vocabularyData } from './vocabulary.data.js';
import { readingStrategiesData } from './reading-strategies.data.js';
import { writingSkillsData } from './writing-skills.data.js';
import { literaturePoetryData } from './literature-poetry.data.js';

export const englishData = {
    subject: "English",
    chapters: [
        comprehensionData,
        grammarData,
        vocabularyData,
        readingStrategiesData,
        writingSkillsData,
        literaturePoetryData
    ]
};

export {
    comprehensionData,
    grammarData,
    vocabularyData,
    readingStrategiesData,
    writingSkillsData,
    literaturePoetryData
};
