# Entrance Pro Alpha - Comprehensive Content Matrix

**Entrance Pro Alpha** is the primary gamified speed-logic engine within the Suncube Commerce Edge monorepo, explicitly engineered for CUET (UG) and MH-CET BBA entrance examinations.

This document details the exact syllabus coverage, module divisions, question banks, and pedagogical structures bundled inside the application's local data layer.

## 1. Content Schema Architecture
Every chapter in Entrance Pro is powered by a standardized JSON-like `.data.js` payload that guarantees a highly structured, tactical learning experience. The schema features three distinct layers:

1.  **Study Guide (`studyGuide`)**: Rejects traditional long-form notes. Instead, it utilizes:
    *   `coreConcept` & `logic`: Fast-track mental models.
    *   `formulaBank` utilizing **`🏢 Real Life:`** mnemonic correlations (e.g., mapping Arithmetic Series to a staircase or Geometric to a viral video).
    *   `traps`: Common misdirections used by exam setters.
    *   `speedSummary`: The ultimate fallback trick if a student is stuck.
2.  **Flashcards Bank (`flashcards`)**: High-speed recall mechanism linking `term`, `definition`, `formula`, and `example`.
3.  **Question Bank (`questions`)**: Deep arrays of MCQs categorized by `difficulty` (easy/medium/hard), complete with a `correct` index and a strict `explanation` for post-test analysis.

---

## 2. Subject Syllabus & Question Volumes

The platform currently hosts **8 Primary Subjects** across dozens of chapters, totaling thousands of precision-engineered questions.

### 🧠 Reasoning & Aptitude (CUET & MH-CET)
Focuses heavily on logical deduction and speed geometry.
*   **Arrangements**: Linear (60 Qs), Circular (60 Qs), Floor/Matrix Puzzles (45 Qs).
*   **Series Logic**: Number Series (75 Qs), Alphabet (60 Qs), Alphanumeric (45 Qs).
*   **Coding & Relations**: Letter Shift Coding (60 Qs), Symbol Coding (45 Qs), Blood Relations (60 Qs), Direction Sense (60 Qs).
*   **Formal Logic**: Syllogisms (75 Qs), Venn Diagrams (45 Qs), Statement & Conclusion (60 Qs).
*   **Visual Logic**: Mirror/Water Images (60 Qs), Paper Cutting/Folding (45 Qs).

### 🎯 General Aptitude / GAT (CUET & MH-CET)
Designed to conquer the core mathematical and foundational logic sections.
*   Quantitative Ability (62 Qs)
*   Logical Reasoning (75 Qs)

### 📊 Accountancy (CUET & MH-CET)
Advanced review of 12th-grade Commerce concepts formatted for objective speed-testing.
*   **Partnership Accounting**: Basics (30 Qs), Admission (30 Qs), Retirement/Death (25 Qs), Dissolution (25 Qs).
*   **Corporate Accounting**: Share Capital (25 Qs), Debentures (25 Qs).
*   **Financial Analysis**: Statements (20 Qs), Financial Analysis & Tools (20 Qs), Ratio Analysis (20 Qs), Cash Flow (20 Qs).
*   **Other Contexts**: NPO (20 Qs), Computerized Accounting (15 Qs).

### 🏢 Business Studies (CUET & MH-CET)
Case-study breakdown metrics prioritizing quick keyword identification.
*   Nature & Significance of Management (15 Qs), Principles of Management (15 Qs), Business Environment (15 Qs).
*   Planning, Organising, Staffing, Directing, Controlling (15 Qs each).
*   Financial Management (15 Qs), Financial Markets (15 Qs).
*   Marketing Management (15 Qs), Consumer Protection (15 Qs).

### 📈 Economics (CUET & MH-CET)
*   **Microeconomics** (Intro, Consumer Behaviour, Producer Behaviour, Market Structures).
*   **Macroeconomics** (National Income, Money & Banking, Income Determination, Government Budget, BoP & Forex).
*   **Indian Economic Development** (1947-90 Experience, Current Challenges, Neighbors Comparison).
*(Note: Economics chapters are currently architected as core framework nodes with foundational 2 Qs each, slated for rapid scaling).*

### 📝 English Language (CUET & MH-CET)
Tactical grammatical breakdown and fast comprehension decoding.
*   Reading Comprehension (20 Qs), Grammar & Usage (20 Qs), Vocabulary & Word Families (50 Qs).
*   Reading Strategies (15 Qs), Writing Skills Objective Patterns (15 Qs), Literature & Poetry (15 Qs).

### 🌍 GK & Current Affairs (CUET & MH-CET)
*   General Knowledge (60 Qs)
*   Current Affairs (155 Qs - High weightage density)
*   General Science (45 Qs)

### 💻 Computer Awareness (Exclusive to MH-CET)
*   Hardware & Architecture (45 Qs), Software & OS (45 Qs), Internet & Networking (45 Qs).
*   Cybersecurity & Ethics (30 Qs), Tech Abbreviations (60 Qs), Number Systems (30 Qs), AI & Emerging Tech (40 Qs).

---

## 3. Telemetry Integration
All interactions within the Entrance Pro quizzes, flashcards, and study guides report directly back to the `commerce_prep_pro_progress` localStorage node, which syncs seamlessly with the main Suncube Commerce Hub to adjust the player's active Streaks, Cognitive XP, and "Days Until Deployment" widget.
