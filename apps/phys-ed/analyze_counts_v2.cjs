const fs = require('fs');
const path = require('path');

const dataDir = './data';
const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('--- Analysis Report V2 ---');

units.forEach(u => {
    const filePath = path.join(dataDir, `unit${u}.ts`);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');

        // Helper to extract block content
        function getBlockContent(startKey, endKey) {
            const startIdx = content.indexOf(startKey);
            if (startIdx === -1) return '';
            let endIdx = -1;

            // Try to find the next key to end the block
            const possibleEndKeys = ['flashcards:', 'sqp:', 'mindMap:', 'cheatSheet:', '};'];

            // Filter out the startKey itself (in case of duplicates? no) 
            // and keys that appear BEFORE the start (shouldn't happen in standard order but...)

            let minDist = Infinity;

            possibleEndKeys.forEach(k => {
                const idx = content.indexOf(k, startIdx + startKey.length);
                if (idx !== -1 && idx < minDist) {
                    minDist = idx;
                    endIdx = idx;
                }
            });

            if (endIdx === -1) endIdx = content.length;

            return content.substring(startIdx, endIdx);
        }

        const topicBlock = getBlockContent('topics: [', 'flashcards:');
        const flashcardBlock = getBlockContent('flashcards: [', 'sqp:');
        const sqpBlock = getBlockContent('sqp: [', 'mindMap:');

        // Count items by counting occurrences of specific properties
        // Topics have "title:" (visualizations also have title, but usually nested)
        // Better: Count objects in the topics array.
        // Heuristic: Count "content: [" (Every topic has content array)
        const topics = (topicBlock.match(/content:\s*\[/g) || []).length;

        // Count Visualizations
        // They have "type:" property ('table', 'grid', 'list', etc.)
        const viz = (topicBlock.match(/type:\s*'(table|grid|list|chart|flow|hierarchy)'/g) || []).length;

        // Flashcards
        // Count objects. "question:" is a mandatory field.
        const flashcards = (flashcardBlock.match(/question:\s*'/g) || []).length;

        // SQP
        // Count objects. "question:" is a mandatory field.
        const sqp = (sqpBlock.match(/question:\s*'/g) || []).length;

        const reportLine = `Unit ${u}: Topics=${topics}, Flashcards=${flashcards}, SQP=${sqp}, Viz=${viz}\n`;
        fs.appendFileSync('analysis_report.txt', reportLine);
    } else {
        fs.appendFileSync('analysis_report.txt', `Unit ${u}: Not Found\n`);
    }
});
