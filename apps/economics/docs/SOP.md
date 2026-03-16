# Standard Operating Procedures (SOP) & Development Protocols

This document outlines the mandatory protocols for development within the CBSE-XII-Commerce-App ecosystem. Adherence to these laws is non-negotiable to ensure the application's quality, reliability, and educational value.

## 1. UI/UX Consistency (The "Design System" Law)
**Objective:** Eliminate design drift and maintain premium aesthetics.

*   **Framework:** Use **TailwindCSS** for all styling.
*   **Color Palette:**
    *   **Primary:** Indigo (`indigo-600` for branding, `indigo-900` for text, `indigo-50` for backgrounds).
    *   **Neutral:** Slate (`slate-50` to `slate-900`).
*   **Iconography:** Use **Lucide-React** exclusively.
*   **Components:**
    *   Revert to established patterns in `components/` (e.g., `TheoryView` for content, `RevisionHQ` for memory aids).
    *   Ensure all interactive elements have hover states (e.g., `hover:bg-slate-100`, `transition-all`).
*   **Responsiveness:** Mobile-first approach. All views must be fully functional and polished on mobile (use hidden/block md: variants).

## 2. Data Integrity (The "Type-Safe" Law)
**Objective:** Prevent runtime crashes due to malformed data.

*   **Strict Typing:** All data structures must adhere to `types.ts`.
*   **Prohibited**: The use of `any` is strictly prohibited.
*   **Core Interfaces:**
    *   `Chapter`: Must contain correct IDs matching the file name.
    *   `SQPQuestion`: Must include `markingScheme` and `aiExplanation`.
    *   `Flashcard`: Must have a valid `category` literal.

## 3. Zero-Hallucination (The "Algorithmic Truth" Law)
**Objective:** Guarantee 100% factual accuracy in educational content.

*   **Verification:** All content (Theory, Questions, Explanations) must be cross-referenced with standard CBSE textbooks.
*   **AI Usage:** AI is for *formatting* and *explanation generation* based on provided facts, not for fact creation.
*   **Audit:** Every JSON data file must undergo a manual accuracy audit before commit.

## 4. Commercial Quality (The "Polish" Law)
**Objective:** Ensure the app feels premium and robust.

*   **Animations:** Use `animate-in`, `fade-in`, and `slide-in` for new views (e.g., Mobile Menu).
*   **Transitions:** All buttons and interactive cards must have `duration-200` or similar transition classes.
*   **Empty States:** Handle missing data gracefully without crashing.
*   **cleanliness:** No `console.log` in production code.

## 5. Content Lifecycle Integrity (The "Trinity" Law)
**Objective:** Ensure every study module follows the Theory → Revision → Application loop.

*   **Phase 1: Theory Master (Deep Learning)**
    *   Structured hierarchical content (`TheoryTopic`).
    *   Mandatory "Study Visualizations" (Tables/Flowcharts) within subtopics.
*   **Phase 2: Revision HQ (Active Recall)**
    *   **Mind Maps:** Visual structural breakdown.
    *   **Flashcards:** Immediate feedback testing.
    *   **Cheat Sheets:** High-density tabular summaries.
*   **Phase 3: SQP Archives (Exam Application)**
    *   Real exam questions (2022-2025).
    *   Must include detailed `aiExplanation`.
*   *(Future Phase: Video Integration)*

## 6. Notes Page Creation Workflow
**Objective:** Ensure all notes pages follow the interactive tabbed format.

*   **Structure:**
    *   Use `TheoryView` component.
    *   Organize content into clear `subtopics`.
    *   Uses Points format for readability, avoiding long walls of text.
*   **Navigation:** Ensure sidebar/tabs correctly link to the Chapter ID.

## 7. Interactive Practice Protocols (Planned)
**Objective:** Future implementation of infinite drill generation.

*   **Current State:** Practice relies on `RevisionHQ` Flashcards (static data).
*   **Future Goal:** Implement `DrillRunner` to generate infinite patterns.
    *   **Logic:** Answer validation logic must be strictly typed and unit tested.
    *   **Feedback:** Users must receive immediate feedback (Correct/Incorrect) with `aiExplanation`.


## 8. The Gap Analysis & Pattern System Protocol
**Objective:** Ensure all practice material maps to actual exam patterns.

*   **Source:** `SQPView` / `sqps.ts` acts as the primary pattern database.
*   **Methodology:**
    *   **Static Archives:** Maintain a cleaned, yearly specific database of SQP questions (2022-2025).
    *   **Explanation Standard:** Every question MUST have an `aiExplanation` that teaches the "Why" behind the answer (not just the marking scheme).
*   **Future Generation:** Dynamic questions will clone these patterns using JSON templates.

## 9. SQP & Marking Scheme Verbatim Protocol
**Objective:** Guarantee 100% accuracy in exam question representation and official answer schemes.

*   **Verbatim Requirement:**
    *   All SQP questions (`question` field) must be **exact word-for-word copies** from official CBSE Sample Question Papers.
    *   All Marking Schemes (`markingScheme` field) must be **verbatim extracts** from official CBSE Marking Schemes.
    *   **Zero paraphrasing** is permitted in these fields.
    *   Include question numbers (e.g., "34.") in the question text for traceability.

*   **Table Formatting:**
    *   When source documents contain tabular data (e.g., Balance Sheets, Cash Flow Statements, Comparative Statements), use **Markdown tables** in the TypeScript string.
    *   Maintain original table structure, headers, and alignment from the source.
    *   For complex answers (e.g., Q34 Cash Flow), include:
        *   Main calculation tables
        *   Working Notes as separate tables
        *   Section headers (e.g., "### Cash Flow from Operating Activities")

*   **Quality Checks:**
    *   Cross-reference every SQP entry against the original PDF/text file before commit.
    *   Verify table rendering in `SQPView` component using `ReactMarkdown` with `remark-gfm`.
    *   Document source file paths in Gap Analysis for audit trail.


