import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseDir = path.join(__dirname, '..', 'data');

let totalUnits = 0;
let unitsWithCheatSheet = 0;
const gapReport: { unit: string; issues: string[] }[] = [];

const expectedSections = [
    'Key Definitions',
    'Core Concepts',
    'Important Distinctions',
    'Exam Pitfalls'
];

// read files in baseDir but assure it's only unit1...unit12
const allUnits = fs.readdirSync(baseDir).filter(f => f.startsWith('unit'));

for (const unit of allUnits) {
    totalUnits++;
    const cheatPath = path.join(baseDir, unit, 'cheatSheet.ts');
    const issues: string[] = [];

    if (!fs.existsSync(cheatPath)) {
        issues.push('Missing cheatSheet.ts entirely.');
        gapReport.push({ unit, issues });
        continue;
    }

    unitsWithCheatSheet++;
    const content = fs.readFileSync(cheatPath, 'utf8');

    for (const section of expectedSections) {
        if (!content.includes(section)) {
            issues.push(`Missing or likely missing section: "${section}"`);
        }
    }

    if (!content.toLowerCase().includes('pitfall') && !content.toLowerCase().includes('trick') && !content.toLowerCase().includes('trap')) {
        issues.push(`Lacking 'Pitfalls' or 'Tricks' keywords in content.`);
    }

    if (content.length < 500) {
        issues.push(`Content is abnormally short (${content.length} chars). Might need expansion.`);
    }

    if (issues.length > 0) {
        gapReport.push({ unit, issues });
    }
}

let mdReport = `# Exam Morning Review Sheet: Gap Analysis\n\n`;
mdReport += `**Total Units Analysed:** ${totalUnits}\n`;
mdReport += `**Units with Cheat Sheet Data:** ${unitsWithCheatSheet}\n\n`;

if (gapReport.length === 0) {
    mdReport += `## All Clear!\nAll ${totalUnits} units appear to have comprehensive coverage, including definitions, concepts, distinctions, and exam pitfalls/tricks.\n`;
} else {
    mdReport += `## Units Requiring Attention\n\n`;
    for (const report of gapReport) {
        mdReport += `### ${report.unit.toUpperCase()}\n`;
        for (const issue of report.issues) {
            mdReport += `- ${issue}\n`;
        }
        mdReport += `\n`;
    }
}

const artifactPath = path.join(__dirname, '..', 'gap_analysis_report.md');
fs.writeFileSync(artifactPath, mdReport);
console.log('Gap analysis printed to ', artifactPath);
