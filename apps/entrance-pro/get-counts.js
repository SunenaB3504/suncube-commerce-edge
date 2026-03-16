const fs = require('fs');
const path = './src/data/reasoning/';
const out = {};
fs.readdirSync(path).forEach(f => {
    if (f.endsWith('.data.js')) {
        const content = fs.readFileSync(path + f, 'utf8');
        const count = (content.match(/id:\s*[\"'][a-z]+-q-\d+/g) || []).length;
        out[f] = count;
    }
});
fs.writeFileSync('counts.json', JSON.stringify(out, null, 2));
process.exit(0);
