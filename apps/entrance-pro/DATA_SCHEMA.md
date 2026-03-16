# DATA_SCHEMA.md — Commerce Prep Pro
# CANONICAL SCHEMA — DO NOT MODIFY MID-PROJECT

## Top-Level Structure (every .data.js file)

```js
export const [chapterName]Data = {
  subject: "Accountancy" | "Business Studies" | "Economics" | "Reasoning" | "English" | "General Knowledge",
  chapter: "Chapter Name",
  examTags: ["CUET"] | ["MH-CET"] | ["CUET", "MH-CET"],
  flashcards: [ ...FlashcardSchema ],
  questions:  [ ...QuestionSchema ]
};
```

---

## FlashcardSchema

```js
{
  id: "string",          // e.g. "ra-fc-001" (chapter prefix + fc + number)
  term: "string",        // Key term or concept name
  definition: "string",  // Plain language definition
  formula: "string | null",  // Formula if applicable, else null
  example: "string | null"   // Short example, else null
}
```

---

## QuestionSchema (ALL types share these base fields)

```js
{
  id: "string",          // e.g. "ra-q-001"
  type: "mcq" | "assertion-reason" | "case-study" | "match-column" | "numerical",
  difficulty: "easy" | "medium" | "hard",
  question: "string",    // The question stem
  options: ["string", "string", "string", "string"],  // Always 4 options
  correct: 0 | 1 | 2 | 3,   // Index of correct option
  explanation: "string", // Full explanation of the correct answer
  examTags: ["CUET"] | ["MH-CET"] | ["CUET", "MH-CET"]
}
```

---

## Type-Specific Extensions

### type: "numerical"
Adds required field:
```js
solution_steps: ["step 1 string", "step 2 string", "..."]
```

### type: "assertion-reason"
Use these fields instead of `question`:
```js
assertion: "string",   // The Assertion (A) statement
reason: "string",      // The Reason (R) statement
// options must always be exactly:
options: [
  "Both A and R are true; R is the correct explanation of A",
  "Both A and R are true; R is NOT the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true"
]
```

### type: "case-study"
Adds required field:
```js
passage: "string",     // The paragraph/case to read
// question = the question about the passage
```

### type: "match-column"
Use these fields:
```js
column_a: ["item1", "item2", "item3", "item4"],
column_b: ["match1", "match2", "match3", "match4"],
correct_mapping: [0, 1, 2, 3],  // column_a[i] matches column_b[correct_mapping[i]]
// options = 4 possible mapping descriptions
```

---

## Validation Checklist (agent must verify before saving)

- [ ] Export name matches file name in camelCase + "Data" suffix
- [ ] subject is one of the 6 allowed values
- [ ] examTags is an array with at least one value
- [ ] flashcards array has at least 5 items
- [ ] questions array has at least 15 items
- [ ] Every question has: id, type, difficulty, question (or assertion+reason), options, correct, explanation, examTags
- [ ] numerical questions have solution_steps array
- [ ] correct is a valid index (0-3) for the options array
- [ ] No data is duplicated from another chapter file
- [ ] All IDs are unique within the file
