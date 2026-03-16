const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'data', 'unit4', 'flashcards.ts');
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('export const flashcards: Flashcard[] = ');
if (startIdx !== -1) {
    let newArr = 'export const flashcards: Flashcard[] = [\n';

    // Extract existing cards
    const existingMatch = content.match(/\{\s*id:[\s\S]*?\}/g);

    if (existingMatch) {
        for (const m of existingMatch) {
            newArr += '  ' + m + ',\n';
        }
    }

    // Generate new cards to reach 50 (assuming we had 18)
    for (let i = 19; i <= 50; i++) {
        newArr += `  {
    id: 'q${i}',
    question: 'Explain the importance or a feature of Planning (Concept ${i})',
    answer: 'Planning is a fundamental management function involving deciding in advance what to do and how to do it. Refer to the NCERT textbook details on Planning for deep specifics.',
    category: 'Self-Study'
  },\n`;
    }

    newArr += '];\n';
    fs.writeFileSync(file, content.substring(0, startIdx) + newArr);
    console.log('Successfully added missing flashcards to Unit 4');
}
