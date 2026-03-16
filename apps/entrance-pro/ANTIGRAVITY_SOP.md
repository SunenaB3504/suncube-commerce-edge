# ANTIGRAVITY_SOP.md
# Standard Operating Procedure — Commerce Prep Pro
# Google Antigravity Agent Development Guide

---

## PURPOSE
This SOP ensures every agent spawned in Antigravity stays contextually grounded,
follows the project architecture, and produces hallucination-free code and content.

---

## BEFORE EVERY TASK — MANDATORY CHECKLIST

Agent must confirm:
- [ ] Read RULES.md fully
- [ ] Read DATA_SCHEMA.md fully
- [ ] Identified all files to be created/modified
- [ ] Output a Plan Artifact and received approval
- [ ] Confirmed no schema deviations in plan

---

## PHASE 1 — PROJECT INITIALIZATION

### Step 1: Set Agent Policies (Antigravity UI)
- Mode: Review-Driven Development (recommended)
- Terminal Execution: Request Review
- JavaScript Execution: Request Review

### Step 2: Open Workspace
- Open folder: `commerce-prep-pro/`
- Workspace must be set BEFORE spawning any agent

### Step 3: Anchor Files
Create these before any coding agents are spawned:
- RULES.md ✅
- DATA_SCHEMA.md ✅
- src/config/subjects.config.js ✅
- src/config/mocktest.config.js ✅
- src/gamification/badges.config.js ✅

---

## PHASE 2 — AGENT SPAWN PLAN (8 Agents, Sequential + Parallel)

### AGENT 1 — Scaffold (Run First, Alone)
**Task:** Create all empty folders and placeholder index.js files
**Context files to attach:** @RULES.md
**Prompt template:**
```
@RULES.md
Create the full folder structure as defined in RULES.md.
Create empty index.js placeholder files in each data subfolder.
Do NOT create any component or data content yet.
Output a plan artifact listing every folder and file you will create.
Wait for approval before proceeding.
```
**Validation:** Confirm folder tree matches RULES.md structure exactly

---

### AGENT 2 — Accountancy Data (After Agent 1)
**Task:** Create all 9 chapter .data.js files for Accountancy
**Context files:** @RULES.md @DATA_SCHEMA.md @src/data/accountancy/ratio-analysis.data.js (as reference)
**Prompt template:**
```
@RULES.md @DATA_SCHEMA.md @src/data/accountancy/ratio-analysis.data.js
Create the following Accountancy data files using ratio-analysis.data.js as the reference format:
- partnership.data.js (Partnership Basics)
- admission-partner.data.js (Admission of Partner)
- retirement-death.data.js (Retirement & Death)
- dissolution.data.js (Dissolution of Firm)
- share-capital.data.js (Share Capital)
- debentures.data.js (Debentures)
- financial-statements.data.js (Financial Statements)
- cash-flow.data.js (Cash Flow Statement)

Rules:
- Minimum 15 questions per file
- At least 3 question types per file (mcq, assertion-reason, numerical minimum)
- All NCERT Class 11 & 12 aligned
- Validate each file against DATA_SCHEMA.md before output
- Output one file at a time and wait for approval
```

---

### AGENT 3 — Business Studies + Economics Data (After Agent 1, Parallel with Agent 2)
**Context files:** @RULES.md @DATA_SCHEMA.md @src/data/economics/national-income.data.js
**Task:** Create remaining chapter files for Business Studies and Economics
**Same rules as Agent 2**

---

### AGENT 4 — Quiz Components (After Agent 1)
**Task:** Build src/components/quiz/ — all 5 question card types
**Context files:** @RULES.md @DATA_SCHEMA.md
**Prompt template:**
```
@RULES.md @DATA_SCHEMA.md
Create the following React components in src/components/quiz/:
- MCQCard.jsx — renders type: "mcq" questions
- AssertionReasonCard.jsx — renders type: "assertion-reason"
- CaseStudyCard.jsx — renders type: "case-study" with passage
- MatchColumnCard.jsx — renders type: "match-column"
- NumericalCard.jsx — renders type: "numerical" with step reveal
- ExplanationPanel.jsx — shown after answer selection, displays explanation
- QuestionRenderer.jsx — dispatcher that picks the right card based on question.type

Rules:
- All components accept only props — no hardcoded data
- Use Tailwind CSS only
- Components must be stateless — no useState inside card components
- QuestionRenderer signature: <QuestionRenderer question={q} onAnswer={fn} selectedAnswer={n} />
```

---

### AGENT 5 — Pages & Routing (After Agent 4)
**Task:** Build all page files and App.jsx routing
**Context files:** @RULES.md @src/config/subjects.config.js @src/hooks/useQuizEngine.js

---

### AGENT 6 — Hooks & Store (After Agent 1, Parallel with Agent 4)
**Task:** Complete all hooks and AppContext store
**Context files:** @RULES.md @src/hooks/useQuizEngine.js @src/hooks/useProgress.js (as reference)

---

### AGENT 7 — Gamification & Analytics (After Agent 6)
**Task:** Build gamification logic, badge checking, XP system, analytics charts
**Context files:** @RULES.md @src/gamification/badges.config.js @src/hooks/useProgress.js

---

### AGENT 8 — Integration & Polish (After All Others)
**Task:** Wire everything together, test all flows, add dark mode, mobile layout, confetti
**Context files:** @RULES.md + all built files
**Must test in Antigravity browser:**
- All 6 subject dashboards load
- Quiz session completes and scores correctly
- Mock test timer fires and auto-submits
- Badge unlock triggers confetti
- Dark mode toggle works
- Mobile layout renders without overflow

---

## PHASE 3 — ANTI-HALLUCINATION RULES

### Rule 1: One Task Per Agent
Never give an agent multiple unrelated tasks. Split them.

### Rule 2: Always Attach Anchor Files
Every prompt must start with: @RULES.md @DATA_SCHEMA.md

### Rule 3: Plan Before Code
Every agent must produce a Plan Artifact listing:
- Files to be created
- Schema or pattern to follow
- Any assumptions made
Then WAIT for human approval.

### Rule 4: Validate Before Saving
After producing any .data.js file, agent must self-check:
- All required fields present?
- correct index valid (0-3)?
- Minimum 15 questions?
- solution_steps present on numerical questions?
- No data duplicated from reference files?

### Rule 5: Lock the Schema
DATA_SCHEMA.md is immutable after project start.
If a new question type is needed, pause all agents and update schema FIRST.

### Rule 6: No Implicit Imports
Agent must never assume a file exists. Always use @filename to attach context.
If a needed file hasn't been created yet, note it in the plan.

### Rule 7: Questions Must Be Factually Verified
For Accountancy and Economics questions with calculations:
- Agent must show working in solution_steps
- Claude should double-check arithmetic before saving
- Flag any question where the answer could be ambiguous

---

## PHASE 4 — REVIEW CHECKPOINTS

| Checkpoint            | After               | What to verify                                              |
|-----------------------|---------------------|-------------------------------------------------------------|
| Structure Check       | Agent 1             | All folders match RULES.md; index files present             |
| Schema Check          | Each data file      | All fields present, correct types, 15+ questions            |
| Component Check       | Agent 4             | All 5 card types render; QuestionRenderer dispatches right  |
| Quiz Flow Check       | Agent 5             | Navigate questions, answer, see explanation, submit, score  |
| Mock Test Check       | Agent 5             | Timer counts, auto-submits, scorecard correct               |
| Gamification Check    | Agent 7             | XP adds correctly, badges unlock, streak increments         |
| Final Integration     | Agent 8             | Full app flows, dark mode, mobile, no console errors        |

---

## PHASE 5 — PROMPT TEMPLATES

### Starting a fresh agent:
```
@RULES.md @DATA_SCHEMA.md @[relevant file if any]

Task: [Single, specific task]
Output format: [Plan Artifact / Code file / Component]
Constraints:
- Follow folder structure in RULES.md
- No data inside components
- Schema must match DATA_SCHEMA.md exactly
- Tailwind CSS only

Step 1: Output plan artifact
Step 2: Wait for my approval
Step 3: Write code
```

### Adding questions to an existing data file:
```
@DATA_SCHEMA.md @src/data/[subject]/[chapter].data.js

Add 10 more questions to this file.
- Include at least 2 assertion-reason and 1 case-study type
- NCERT Class 11-12 aligned for [Subject] — [Chapter]
- Do not duplicate existing question IDs
- Validate all fields against DATA_SCHEMA.md before output
- Show questions one batch of 5 at a time for review
```

### Fixing a bug:
```
@[file with bug] @[related component]

Problem: [exact description]
Fix ONLY the described issue.
Do NOT refactor other code.
Show diff of changes only.
```

### Integration check:
```
@RULES.md @App.jsx @src/pages/ @src/hooks/

Review the integration of all pages and hooks.
Check:
1. All routes defined
2. No missing imports
3. Context provider wraps all pages
4. No direct data imports in pages (must go through store)
List any violations before suggesting fixes.
```

---

## EMERGENCY: Recovering from Hallucination

If an agent produces incorrect schema, wrong calculations, or invents content:

1. Stop the agent immediately
2. Do NOT accept the artifact
3. Open a new agent with:
```
The previous agent produced incorrect output.
Here is what was wrong: [describe issue]
@DATA_SCHEMA.md @RULES.md
Please redo only: [specific task]
Start with a plan artifact before writing any code.
```
4. Attach the correct reference file as context
5. Enable Review policy to "Always Request Review" for this task
