# RULES.md — Commerce Prep Pro
# READ THIS BEFORE EVERY TASK

## Architecture Laws (Non-Negotiable)
1. NO question/flashcard data inside components, pages, or hooks — ever
2. ALL data lives in `src/data/[subject]/[chapter].data.js` only
3. ALL data files must strictly follow `DATA_SCHEMA.md`
4. Components are stateless where possible — state lives in hooks or store
5. Pages never import data directly — always via store/context
6. One component per file. One concern per file.

## Folder Ownership
| Folder         | Contains                          | Does NOT contain         |
|----------------|-----------------------------------|--------------------------|
| src/data/      | Raw question + flashcard arrays   | Logic, JSX, hooks        |
| src/components/| Reusable UI — props only          | Data, routing, API calls |
| src/pages/     | Screen-level composition          | Raw data, business logic |
| src/hooks/     | Stateful logic, side effects      | JSX, data definitions    |
| src/store/     | Global state (Context/Zustand)    | Components, data         |
| src/utils/     | Pure functions only               | State, JSX               |

## Naming Conventions
- Data files: `[chapter-name].data.js`
- Components: `PascalCase.jsx`
- Hooks: `use[Name].js`
- Utils: `camelCase.js`
- Store slices: `[name]Slice.js`

## Question Schema
- Always validate against DATA_SCHEMA.md before saving any .data.js file
- Every question must have: id, type, difficulty, question, options, correct, explanation, examTags
- Numerical questions additionally need: solution_steps[]
- Minimum 15 questions per chapter data file

## Agent Workflow
1. Read RULES.md + DATA_SCHEMA.md before ANY task
2. Output a Plan Artifact first — list files to create + schema to follow
3. Wait for approval before writing code
4. After writing, self-validate against schema
5. Never modify DATA_SCHEMA.md mid-project

## Exam Alignment
- All questions: NCERT Class 11 & 12 syllabus only
- Tag every question with examTags: ["CUET"] or ["MH-CET"] or ["CUET","MH-CET"]
- CUET: includes assertion-reason, case-study, match-column types
- MH-CET: MCQ only for subject questions
