
const questionText = "7. Assertion (A): A Company is Registered with an authorised Capital of 5,00,000 Equity Shares of ₹10 each of which 2,00,000 Equity shares were issued and subscribed. All the money had been called up except ₹2 per share which was declared as 'Reserve Capital'. The Share Capital reflected in balance sheet as 'Subscribed and Fully paid up' will be Zero.\n\nReason (R): Reserve Capital can be called up only at the time of winding up of the company.\n\n(a) Both Assertion (A) and Reason (R) are Correct and Reason (R) is the correct explanation of Assertion (A)\n(b) Both Assertion (A) and Reason (R) are Correct, but Reason (R) is not the correct explanation of Assertion (A)\n(c) Assertion (A) is incorrect, but Reason (R) is Correct.\n(d) Assertion (A) is correct, but Reason (R) is incorrect";

const parseOptions = (questionText) => {
    let options = [];
    let cleanQuestion = questionText;

    // Current Regex from mcq_store.ts
    const optionMatches = [...questionText.matchAll(/(\([A-Da-d]\)|[A-Da-d]\)|(?:^|\s)[A-Da-d]\.)/g)];

    console.log("Matches found:", optionMatches.length);
    optionMatches.forEach((m, i) => console.log(`Match ${i}: '${m[0]}' at index ${m.index}`));

    if (optionMatches.length >= 4) {
        const last4 = optionMatches.slice(-4);
        const optAIndex = last4[0].index;
        cleanQuestion = questionText.substring(0, optAIndex).trim();

        for (let i = 0; i < 4; i++) {
            const start = last4[i].index;
            const end = (i < 3) ? last4[i + 1].index : questionText.length;
            let optText = questionText.substring(start, end).trim();
            optText = optText.replace(/^(\([A-Da-d]\)|[A-Da-d]\)|(?:^|\s)[A-Da-d]\.)\s?/, '').trim();
            options.push(optText);
        }
    }

    return { cleanQuestion, options };
};

const result = parseOptions(questionText);
console.log("Clean Question:", result.cleanQuestion);
console.log("Options:", result.options);
