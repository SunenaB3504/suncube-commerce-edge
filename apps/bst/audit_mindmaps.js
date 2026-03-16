const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const charsToFind = ['&', '->', '<', '>', '"', "'"];

console.log("Auditing mind maps for potentially breaking characters...");

for (let i = 2; i <= 12; i++) {
    const mmPath = path.join(dataDir, `unit${i}`, 'mindMap.ts');
    if (fs.existsSync(mmPath)) {
        const content = fs.readFileSync(mmPath, 'utf8');

        let found = [];
        charsToFind.forEach(char => {
            if (content.includes(char)) {
                // only flag if it's inside a label
                // simple check for now, just seeing if the file has it
                found.push(char);
            }
        });

        if (found.length > 0) {
            console.log(`[Unit ${i}] Found potentially breaking chars: ${found.join(', ')}`);

            // extract labels containing the chars
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                if (line.includes('label:')) {
                    charsToFind.forEach(char => {
                        if (line.includes(char)) {
                            console.log(`  Line ${index + 1}: ${line.trim()}`);
                        }
                    });
                }
            });
        }
    } else {
        console.log(`[Unit ${i}] No mindMap.ts found`);
    }
}
