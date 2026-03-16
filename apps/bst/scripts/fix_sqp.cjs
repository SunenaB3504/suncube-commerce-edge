const fs = require('fs');

[9, 10, 11, 12].forEach(u => {
    const p = `data/unit${u}/sqp.ts`;
    if (!fs.existsSync(p)) return;
    let c = fs.readFileSync(p, 'utf8');

    // The previous script wrote: `aiExplanation: \`...\`,},`
    // We want to change `,},` into ` \n  },`
    // And ensure there's a comma between objects in the array.

    // First, let's fix `,},` to `\n  },`
    c = c.replace(/`,},/g, '`\n  },');

    // Now, let's fix missing commas between objects.
    // If we have `},\n  {` we should change it to `},\n  {` wait, between objects like `},\n    {` -> `},\n    {`.
    // Actually the missing comma is typically `}\n    {` or `} \n    {`
    // Let's just use regex to insert comma:
    c = c.replace(/\}\s*(?=\r?\n\s*\{(?!\s*id:))/g, '},'); // wait, the array elements start with `{ id:` or `{ \n id: `
    c = c.replace(/\}\s*,\s*,\s*\{/g, '},\n  {'); // clean double commas
    c = c.replace(/\}\s*(?=\r?\n\s*\{\s*id:)/g, '},'); // add missing comma before { id:

    fs.writeFileSync(p, c);
    console.log(`Fixed ${p}`);
});
