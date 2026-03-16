const fs = require('fs');
const path = require('path');

// Mocking the SUBJECTS structure since we can't easily import ESM into this script without noise
const SUBJECTS = [
    { id: "accountancy", name: "Accountancy", path: "accountancy" },
    { id: "business-studies", name: "Business Studies", path: "business-studies" },
    { id: "economics", name: "Economics", path: "economics" },
    { id: "reasoning", name: "Reasoning & Aptitude", path: "reasoning" },
    { id: "english", name: "English Language", path: "english" },
    { id: "general-aptitude", name: "General Aptitude (GAT)", path: "general-aptitude" },
    { id: "gk-current-affairs", name: "GK & Current Affairs", path: "gk-current-affairs" },
    { id: "computer-awareness", name: "Computer Awareness", path: "computer-awareness" },
	{ id: "static-gk", name: "Static GK", path: "static-gk" }
];

const results = [];

SUBJECTS.forEach(sub => {
    const dir = path.join('./src/data', sub.path);
    if (!fs.existsSync(dir)) return;

    fs.readdirSync(dir).forEach(file => {
        if (!file.endsWith('.data.js')) return;
        
        const content = fs.readFileSync(path.join(dir, file), 'utf8');
        
        // Count questions (id: "...")
        const questionCount = (content.match(/id:\s*[\"'][a-z0-9-]+-q-\d+[\"']/g) || []).length;
        
        // Count examples (q: "...") within examples: []
        // This is a bit tricky with regex, but we can try to find blocks of example objects
        const exampleCount = (content.match(/\{[\s\n]*q:\s*[\"'].*?[\"'],[\s\n]*a:\s*[\"'].*?[\"'][\s\n]*\}/gs) || []).length;
		
		// If it's a study guide only file (no questions), questionCount might be 0
		// If it's a question only file, exampleCount might be 0
        
        results.push({
            subject: sub.name,
            module: file.replace('.data.js', ''),
            examples: exampleCount,
            quizQuestions: questionCount
        });
    });
});

console.log('| Subject | Module | Practical Examples | Quiz Questions |');
console.log('|:---|:---|:---:|:---:|');
results.sort((a,b) => a.subject.localeCompare(b.subject)).forEach(r => {
    console.log(`| ${r.subject} | ${r.module} | ${r.examples} | ${r.quizQuestions} |`);
});
