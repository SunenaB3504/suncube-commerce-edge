const fs = require('fs');
const path = require('path');

const dataDir = './data';
const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('--- Analysis Report ---');

units.forEach(u => {
    const filePath = path.join(dataDir, `unit${u}.ts`);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Count Flashcards (id: 'f...')
        const flashcards = (content.match(/id:\s*'f/g) || []).length;
        
        // Count SQP (id: 'q...')
        const sqp = (content.match(/id:\s*'q/g) || []).length;
        
        // Count Visualizations (id: 'v...')
        const viz = (content.match(/id:\s*'v/g) || []).length;
        
        // Count Topics proxies
        // Method 1: Count "visualizations: [" (assuming 1 per topic)
        const vizBlocks = (content.match(/visualizations:\s*\[/g) || []).length;
        
        // Method 2: Count "content: [" (assuming 1 per topic)
        const contentBlocks = (content.match(/content:\s*\[/g) || []).length;

         // Method 3: Count objects in topics array is hard with regex. 
         // But checking indentation of `id:` might help.
         // Usually topics are checked by `title:` matches? No.
         // Let's rely on vizBlocks as the primary Topic count for now, 
         // as every topic in the inspected files (6-9) had a visualization block.
        
        console.log(`Unit ${u}: Topics=${vizBlocks}, Flashcards=${flashcards}, SQP=${sqp}, Viz=${viz}`);
    } else {
        console.log(`Unit ${u}: Not Found`);
    }
});
