
// --- Part 1: Test Parsing Fix ---
const questionText = "7. Assertion (A): A Company is Registered with an authorised Capital of 5,00,000 Equity Shares of ₹10 each of which 2,00,000 Equity shares were issued and subscribed. All the money had been called up except ₹2 per share which was declared as 'Reserve Capital'. The Share Capital reflected in balance sheet as 'Subscribed and Fully paid up' will be Zero.\n\nReason (R): Reserve Capital can be called up only at the time of winding up of the company.\n\n(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)\n(b) Both Assertion (A) and Reason (R) are Correct, but Reason (R) is not the correct explanation of Assertion (A)\n(c) Assertion (A) is incorrect, but Reason (R) is Correct.\n(d) Assertion (A) is correct, but Reason (R) is incorrect";

const parseOptions = (questionText) => {
    // New Regex: Require newline or start of string before the marker
    // Also allow optional whitespace after newline
    // Group 1 captures the marker
    const regex = /(?:^|\n)\s*(\([A-Da-d]\)|[A-Da-d]\)|[A-Da-d]\.)/g;

    const optionMatches = [...questionText.matchAll(regex)];

    console.log("Matches found (New Regex):", optionMatches.length);
    optionMatches.forEach((m, i) => console.log(`Match ${i}: '${m[1]}' at index ${m.index}`));

    let options = [];
    if (optionMatches.length >= 4) {
        const last4 = optionMatches.slice(-4);
        // cleanQuestion is up to the *start* of the first option match
        // Note: m.index is the start of the *full match* (including newline), 
        // we might want the question text to end before that.

        const firstOptStart = last4[0].index;
        const cleanQuestion = questionText.substring(0, firstOptStart).trim();

        for (let i = 0; i < 4; i++) {
            const start = last4[i].index;
            // We need to adjust start to point to the marker? 
            // Actually the substring logic uses start/end indices.
            // If I just take substring from start, it includes the \n. Trim handles it.

            const end = (i < 3) ? last4[i + 1].index : questionText.length;
            let optText = questionText.substring(start, end).trim();
            // Remove the marker
            optText = optText.replace(/^(\([A-Da-d]\)|[A-Da-d]\)|[A-Da-d]\.)\s?/, '').trim();
            // Also need to strip any leading parens if they weren't stripped by regex above
            // The regex matching the marker was in group 1.
            // Let's rely on splitting effectively.

            // Re-cleaning: The optText *starts* with the marker because 'start' points to it (or near it).
            // My regex matched (?:^|\n)\s*... 
            // So optText will start with \n possibly.
            optText = optText.replace(/[\n\r]+/, '').trim();
            optText = optText.replace(/^(\([A-Da-d]\)|[A-Da-d]\)|[A-Da-d]\.)\s?/, '').trim();

            options.push(optText);
        }
        return { cleanQuestion, options };
    }
    return { cleanQuestion: questionText, options: [] };
};

const result = parseOptions(questionText);
console.log("--- Result ---");
console.log("Q:", result.cleanQuestion.substring(0, 50) + "...");
console.log("Options:", result.options);


// --- Part 2: Simulate Filtering Counts ---
// I'll define mock chapters with IDs and counts based on my knowledge of the files
// This runs in node so I can't import the TS files directly without ts-node.
// I'll just hardcode the IDs I know and estimates, or use the shell to grep counts.
// Actually, I'll rely on a second command to grep the counts.
