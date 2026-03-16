
const fs = require('fs');
const path = require('path');

const dataDir = './data';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'mcq_store.ts' && f !== 'mcq_test_dataset.ts');

const parseOptions = (questionText) => {
    // Current Logic
    const regex = /(\([A-Da-d]\)|[A-Da-d]\)|(?:^|\s)[A-Da-d]\.)/g;
    let options = [];
    const matches = [...questionText.matchAll(regex)];

    if (matches.length >= 4) {
        const last4 = matches.slice(-4);
        const optAIndex = last4[0].index;

        for (let i = 0; i < 4; i++) {
            const start = last4[i].index;
            const end = (i < 3) ? last4[i + 1].index : questionText.length;
            let optText = questionText.substring(start, end).replace(/^(\([A-Da-d]\)|[A-Da-d]\)|(?:^|\s)[A-Da-d]\.)\s?/, '').trim();
            // Clean up trailing commas or quotes if regex captured them from code (unlikely in pure text content but possible)
            options.push(optText);
        }
    }
    return options;
};

console.log("Scanning files for MCQs with parsing issues...");

files.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');

    // Naive parsing of SQP objects.
    // We look for objects with "type: ...MCQ..." or "type: ...Assertion..."

    // We can't easily parse partial JS/TS with JSON.parse. 
    // We will use regex to find blocks.

    // Strategy: Find `id: '...',` then look ahead for `type:` and `question:`.
    // Valid assumption: keys are standard.

    const objectRegex = /\{[\s\S]*?id:\s*'([^']+)'[\s\S]*?type:\s*'([^']+)'[\s\S]*?question:\s*(['"`])([\s\S]*?)\3/g;

    let match;
    while ((match = objectRegex.exec(content)) !== null) {
        const [full, id, type, quote, question] = match;

        if (type.toLowerCase().includes('mcq') || type.toLowerCase().includes('assertion')) {
            // Unescape usually not needed for basic check, but handle basic escapes
            const cleanQuestion = question.replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');

            const options = parseOptions(cleanQuestion);

            if (options.length < 4) {
                console.log(`\n[FAIL] File: ${file} | ID: ${id}`);
                console.log(`Type: ${type}`);
                console.log(`Question Start: ${cleanQuestion.substring(0, 50)}...`);
                console.log(`Question End: ...${cleanQuestion.substring(cleanQuestion.length - 50)}`);
                //console.log(`Text:\n${cleanQuestion}`);
            }
        }
    }
});
