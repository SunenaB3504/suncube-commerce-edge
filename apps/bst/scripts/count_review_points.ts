import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, '..', 'data');

let totalSections = 0;
let totalPoints = 0;
const unitStats: { unit: string; points: number }[] = [];

const allUnits = fs.readdirSync(baseDir).filter(f => f.startsWith('unit'));

for (const unit of allUnits) {
    const cheatPath = path.join(baseDir, unit, 'cheatSheet.ts');

    if (fs.existsSync(cheatPath)) {
        const content = fs.readFileSync(cheatPath, 'utf8');

        // Very basic counting of bullet points (strings within arrays in the cheat sheet)
        // We'll count occurrences of lines starting with quotes and ending with comma/bracket, or just general quoted lines in the points array
        const pointsMatches = content.match(/"([^"\\]*(?:\\.[^"\\]*)*)"/g) || [];
        const singleQuoteMatches = content.match(/'([^'\\]*(?:\\.[^'\\]*)*)'/g) || [];
        const backtickMatches = content.match(/`([^`\\]*(?:\\.[^`\\]*)*)`/g) || [];

        // This regex approach is a bit flaky. Let's instead just load the TS file, or do a rough count of `\n` in the file.
        // Or better yet, since the files say `points: [` or `content: [`, we can count the elements.

        // A simpler way without executing the TS is counting lines that look like array string elements
        // usually indented with spaces and starting with " or ' or `
        const lines = content.split('\n');
        let unitPoints = 0;
        let inPointsArray = false;

        for (const line of lines) {
            if (line.includes('points: [') || line.includes('content: [')) {
                inPointsArray = true;
                continue;
            }
            if (inPointsArray && line.includes(']')) {
                inPointsArray = false;
                continue;
            }
            if (inPointsArray && line.trim().length > 5) {
                // If it's not just a bracket or empty line, it's likely a point
                unitPoints++;
            }
        }

        totalPoints += unitPoints;
        unitStats.push({ unit, points: unitPoints });
    }
}

console.log(`Total Review Points Across All 12 Units: ${totalPoints}`);
for (const stat of unitStats) {
    console.log(`${stat.unit.padEnd(10)}: ~${stat.points} high-yield points`);
}
