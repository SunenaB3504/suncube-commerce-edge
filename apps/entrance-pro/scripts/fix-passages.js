import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reasoningDir = path.join(__dirname, '../src/data/reasoning');

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    let currentPassage = null;
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Match passage syntax: `passage: "something",`
        // Using a non-greedy regex inside the quotes just to identify it
        const passageMatch = line.match(/^(\s*passage:\s*")([^"]+)(",?\s*)$/);
        
        if (passageMatch) {
            const prefix = passageMatch[1];
            const passageText = passageMatch[2];
            const suffix = passageMatch[3];
            
            // Criteria for a truncated passage
            if (passageText.includes('...') || passageText.includes('(Same as above)')) {
                if (currentPassage) {
                    // Inject the full passage
                    lines[i] = prefix + currentPassage + suffix;
                    modified = true;
                }
            } else if (passageText.length > 50) {
                // Criteria for a full passage: length > 50 and no ellipsis
                currentPassage = passageText;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, lines.join('\n'), 'utf-8');
        console.log(`Fixed truncated passages in: ${path.basename(filePath)}`);
    } else {
        console.log(`No truncated passages found or already fixed: ${path.basename(filePath)}`);
    }
}

function run() {
    console.log("Running passage integrity check...");
    if (!fs.existsSync(reasoningDir)) {
        console.error("Reasoning directory not found:", reasoningDir);
        return;
    }

    const files = fs.readdirSync(reasoningDir).filter(f => f.endsWith('.data.js'));
    for (const f of files) {
        processFile(path.join(reasoningDir, f));
    }
    console.log("Passage integrity check complete.");
}

run();
