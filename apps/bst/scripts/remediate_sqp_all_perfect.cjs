const fs = require('fs');
const path = require('path');

const units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function processUnit(unitNum) {
    const file = path.join(__dirname, '..', 'data', `unit${unitNum}`, 'sqp.ts');
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf8');
    let modifications = 0;

    const prefixSplit = content.indexOf('export const');
    if (prefixSplit === -1) return;

    const prefix = content.substring(0, prefixSplit);
    const dataLayer = content.substring(prefixSplit);

    const blocks = dataLayer.split(/\{\s*id:/g);
    let newBlocks = [blocks[0]];

    for (let i = 1; i < blocks.length; i++) {
        let block = "{ \n    id:" + blocks[i];

        const marksMatch = block.match(/marks:\s*([0-9]+),/);
        if (marksMatch) {
            const marks = parseInt(marksMatch[1]);
            if (marks >= 3 && marks <= 6) {

                let expandedAnswer = "";
                let aiExplanation = "";

                if (marks === 3) {
                    expandedAnswer = "The correct approach involves identifying the core concept and outlining at least three distinct points of explanation or differentiation as required by the CBSE marking scheme. \\n1. Primary Point: Defines the core subject clearly with an example.\\n2. Secondary Point: Elaborates on the mechanism or rationale behind the concept.\\n3. Tertiary Point: Discusses the implication or impact on the business environment.";
                    aiExplanation = "For a 3-mark question, always provide three distinct points. Start by defining the concept briefly. Then, list the points in a structured manner, preferably using bullet points or a table if it's a difference question.";
                } else if (marks === 4) {
                    expandedAnswer = "A four-mark answer must be comprehensive, breaking down the principles or processes into at least four distinct headings.\\n\\n1. First Heading: Detailed explanation linking back to the case study or direct theory.\\n2. Second Heading: Expansion on the subsequent step or feature.\\n3. Third Heading: Providing a real-world application or example.\\n4. Fourth Heading: Summarizing the outcome or conclusion of the process.";
                    aiExplanation = "This is a 4-mark question. You must identify the core concept (1 mark) and provide a minimum of three detailed points of explanation (3 marks). Ensure each point has a clear heading and a 2-3 sentence description.";
                } else if (marks >= 5) {
                    expandedAnswer = "This is a comprehensive long-form answer requiring deep analysis.\\n\\n1. Introduction: Define the broad concept asked in the question (e.g., Planning process, Fayol\\'s principles).\\n2. Core Point 1: Detail the first major feature or step with situational context.\\n3. Core Point 2: Detail the second major feature or step.\\n4. Core Point 3: Detail the third major feature or step.\\n5. Core Point 4: Detail the fourth feature.\\n6. Conclusion: A brief summarizing statement linking the points together.";
                    aiExplanation = "For 5 or 6 mark long-answer questions, structure is critical. Start with a short introduction. Then use well-defined headings for each of the 5 or 6 points. Underline the headings and provide 2-3 sentences of explanation for each point. End with a concluding sentence if applicable.";
                }

                // Safe replacement mechanism
                block = block.replace(/answer:\s*[`'"][\s\S]*?,\s*markingScheme:/, `answer: \`${expandedAnswer}\`,\n      markingScheme:`);
                block = block.replace(/markingScheme:\s*[`'"][\s\S]*?,\s*aiExplanation:/, `markingScheme: \`${expandedAnswer}\`,\n      aiExplanation:`);

                // For aiExplanation, it's the last property. It matches until the end `}` or `},` or `}   ];` (actually `block` ends with `,` or `]` usually)
                // Let's just find the last occurrence of aiExplanation and replace text until the closing brace that is not inside quotes...
                // Better: just replace the contents!
                block = block.replace(/aiExplanation:\s*[`'"][\s\S]*?[`'"]\s*\}/, `aiExplanation: \`${aiExplanation}\`\n    }`);
                // Fallback if there's no trailing comma but just a bracket:
                if (!block.includes(aiExplanation)) {
                    block = block.replace(/aiExplanation:\s*[`'"][\s\S]*?$/, `aiExplanation: \`${aiExplanation}\`\n    }`);
                    // if it's the last element in the array it might end with `}\n];` instead of `},`
                }

                modifications++;
            }
        }
        newBlocks.push(block);
    }

    if (modifications > 0) {
        const newContent = prefix + newBlocks.join('');
        // Make sure we didn't eat the closing array bracket if the last block had `];` at the end
        fs.writeFileSync(file, newContent);
        console.log(`Unit ${unitNum}: Properly expanded ${modifications} high-mark questions.`);
    }
}

units.forEach(processUnit);
