# Standard App Feature Blueprint & Implementation Guidelines

This document outlines the core architectural logic, functionality implementations, and non-negotiable data constraints required to clone and extend this application for other academic subjects (e.g., Accountancy, Business Studies).

## 1. Content Data & Formatting Rules

### 1.1 Verbatim Content Requirement
*   **Rule:** The app operates strictly as an interactive study medium, NOT a generative text platform. ANY insertion of AI summaries, hallucinations, or re-phrased content is strictly forbidden.
*   **Implementation:** 
    *   All sample question papers (SQPs), Marking Scheme (MS) answers, NCERT theory snippets, and chapter illustrations must be ingested **100% verbatim** from the official CBSE PDF source materials.
    *   If a source document contains a typo, it is preserved. If a source document formats an answer in bullet points, those exact bullet points are converted faithfully.

### 1.2 LaTeX Prohibition
*   **Rule:** Math or Accounting formulas must NOT be rendered using external LaTeX libraries (like KaTeX or MathJax).
*   **Implementation:**
    *   All complex mathematical notations must be translated into raw Unicode, standard HTML superscripts (`<sup>`), subscripts (`<sub>`), or built using standard CSS flexbox/grid for fractions and equations.
    *   Reasoning: LaTeX libraries significantly bloat bundle sizes and break native browser `html2pdf.js` printing capabilities.

### 1.3 Chapter Content & SQP Alignment
*   **Rule:** The application structure MUST marry chapter-level conceptual theory directly with high-yield SQP examples. 
*   **Implementation:**
    *   Data is stored natively as structured JSON/TypeScript files (e.g., `data/unit1/sqp.ts`, `data/unit1/theory.ts`).
    *   Every unit must contain an aggregated index of all previously asked CBSE questions localized securely within that unit's folder. 

---

## 2. Core Functional Features

### 2.1 Theory Dashboard Integration
*   **Purpose:** To present chapter-level concepts logically and linearly before the student attempts the SQP mock test. 
*   **Implementation Architecture:**
    *   Theory is categorized strictly according to NCERT syllabus structures.
    *   No external generative AI summarization. All paragraphs must be exact excerpts.
    *   Important keywords must be visually highlighted using Tailwind classes (e.g., `text-indigo-600 font-bold`).
    *   Important visual charts/diagrams from the textbook must be recreated identically using either native HTML/CSS grids or exactly encoded Mermaid diagrams if structural.

### 2.2 Interactive Revision Suite (Flashcards & Mindmaps)
*   **Purpose:** Rapid active recall and structural memory association prior to attempting exams or the final Morning Cheat Sheet.
*   **Implementation Architecture:**
    *   **Interactive Flashcards:** Built using CSS 3D transforms (`rotateY`) for a physical card-flipping experience.
        *   The front handles the term/concept. The back contains the exact verbatim definition.
        *   Must include smooth `transition-all` animations to feel tactile.
    *   **Mindmap Integration:** 
        *   Uses `mermaid.js` embedded directly within the React component.
        *   Maps must strictly trace the hierarchical layout of the NCERT textbook chapters without adding extraneous external nodes.
        *   Nodes should be styled (`classDef`) to match the primary application aesthetic (Indigo/Teal/Rose).

### 2.3 The Exam Morning Cheat Sheet
*   **Purpose:** A highly dense, color-coded, physical-friendly revision document designed strictly for the 24 hours preceding the final exam.
*   **Implementation Architecture:**
    *   Built purely with CSS Grid/Flexbox in absolute dimensions (A4 optimizations).
    *   Uses high-contrast color blocks (`bg-blue-50`, `border-blue-500`, etc.) to visually separate concepts.
    *   **Crucial Formatting Engine:** Natively utilizes `@media print` CSS rules.
        *   Contains `.page { page-break-after: always; }` to perfectly partition units onto exact pages without overflowing text.
        *   Contains `page-break-inside: avoid;` on conceptual blocks to prevent sentences from being sliced in half across pages.
    *   **Direct PDF Download Engine:** The document is captured natively on the device using `html2pdf.bundle.min.js`. The export button instantly converts the DOM precisely keeping all CSS printing constraints intact and saves the lightweight PDF instantaneously without triggering the user's OS print dialog.

### 2.4 The Interactive Mock Exam Simulator
*   **Purpose:** A diagnostic tool enabling users to test their knowledge securely against actual past-year SQP Multiple Choice Questions and Subjective prompts.
*   **Implementation Architecture:**
    *   **State Management:** Built natively in React hooks (`useState` for storing selected answers, `isSubmitted` boolean lock).
    *   **Interactive MCQ UI:** Options map directly onto dynamic interactive `<button>` tags. Selecting an option updates state (turns Indigo).
    *   **Auto-Grading Engine:** Upon clicking "Submit Exam", the component computes total scores by validating user state against the hardcoded `answer: 'D'` properties embedded securely in the `sqp.ts` data records. 
    *   **Comprehensive AI Explanations (Mark-Based):** 
        *   Every single question (MCQ or Subjective) must contain a detailed `aiExplanation` securely embedded alongside the question data.
        *   These explanations must rigidly reflect the *marks weightage* of the question (e.g., a 6-mark subjective question requires a deeply fleshed-out, step-by-step breakdown directly mirroring the CBSE Marking Scheme).
        *   The explanations are dynamically revealed only *after* the user submits their answer or clicks an explicit "Reveal Answer" toggle for subjective questions.
    *   **Color-Coded Feedback View:**
        *   Selected correct answer = Emerald Green (`CheckCircle` icon).
        *   Selected incorrect answer = Red (`XCircle` icon).
        *   Unselected correct answer highlights in Gray for transparency.
    *   **Diagnostic Unit-wise Dashboard:** A `useMemo` computation array runs at the end tallying total correct vs total attempted questions securely categorized by overarching overarching Unit/Chapter names, explicitly highlighting weak units that require direct revision.

### 2.5 Dashboard State Preservation and Filtering
*   **Purpose:** Allowing users to seamlessly toggle between "All Categories", "Entrance MCQs", or "Subjective Long-Form" without losing layout consistency.
*   **Implementation Architecture:**
    *   A dynamic `category` filter prop loops through the static TS array and dynamically renders exactly only the selected components.
    *   Switching filters triggers a hard reset on the exam simulation `answers` and `isSubmitted` state to prevent cross-contamination of scores.

---

## 3. Technology Stack Requirements
*   **Framework:** React + TypeScript (Vite bundler)
*   **Styling:** Tailwind CSS (for app layout) + Vanilla CSS specifically for PDF/Print specific logic (to ensure html2pdf compatibility).
*   **Icons:** Lucide-React (vector SVGs for resolution independence).
*   **Deployment Workflow:** `npm run build` -> GitHub Pages `gh-pages -d dist`. 

_All future companion apps (Accountancy, Business Studies, etc.) must precisely map to these exact identical standards to ensure feature parity and structural consistency for the student._
