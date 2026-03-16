# Standard Operating Procedures (SOP): English Core App

This document outlines the mandatory protocols for development within the `English-cbse-class-XII` ecosystem. English Core requires a shift from quantitative data to **qualitative "Forensics"** and **Thematic Analysis**.

## 1. UI/UX Consistency (The "Design System" Law)
*   **Framework:** Use **TailwindCSS** for all styling.
*   **Color Palette:**
    *   **Primary:** Royal Purple (`purple-700` for active learning, `purple-900` for headers).
    *   **Secondary:** Emerald (`emerald-600`) for "Poetry Analysis" markers.
*   **Typography:** Maintain high readability for long-form text. Use `prose` classes for literature analysis.
*   **Iconography:** **Lucide-React** (e.g., `BookOpen` for Prose, `Music` for Poetry, `FileText` for Writing).

## 2. Content Forensic Protocol (The "Analytical Truth" Law)
**Objective:** Replace simple plot summaries with exam-oriented analytical depth.

Every Literature module must follow the **6-Section Master Verification Blueprint**:
1.  **Core Narrative Blueprint:** Focus on "Inciting Incidents" and "Narrative Voice".
2.  **Character Trajectory:** Track traits with textual evidence (e.g., "Franz as Procrastinator turned Patriot").
3.  **Thematic Pillars & Symbols:** Mandatory identification of symbols (e.g., "The Iron on the Leg" = "Lack of Freedom").
4.  **Critical Vocabulary:** Use "The NCERT Lexicon" (phrases like "slog their daylight hours").
5.  **SQP Cross-Examination Mapping:** Explicitly map content to "Comparative Triggers" and "Persona Triggers" found in past papers.
6.  **Literary Audit:** Detailed breakdown of poetic devices and character distinctions.

## 3. Poetry Section Standard (The "RTC" Protocol)
*   **Mandatory Line-by-Line:** Every poem must have a stanza-by-stanza interpretation.
*   **Poetic Device Map:** Identify devices (Metaphor, Simile, Irony) using *verbatim* line references.
*   **Speaker Persona:** Define the speaker's emotional state clearly for inference questions.

## 4. Writing Skills Standard (The "Format Authority" Law)
*   **Verbatim Formats:** Use the *latest* CBSE formats for Notices, Invitations, and Formal Letters.
*   **Value Point Matrix:** Provide "Problem-Cause-Solution" skeletons for Article and Report writing.
*   **Expression Scoring:** Include a "Vocabulary Upgrade" list for every format to boost expression marks.

## 5. Zero-Hallucination & Verbatim Law
*   **Extracts:** All extract-based questions must be word-for-word from the NCERT text or SQPs.
*   **Marking Schemes:** All subjective answer keys must align with the official CBSE Marking Scheme language.
*   **Audit:** No paraphrasing in Section C (Literature) data fields; use quotes wherever possible.

## 6. Development Workflow (The "Trinity" Loop)
*   **Step 1: Deep Dive (Theory View):** Detailed forensic analysis.
*   **Step 2: Memory Mastery (Revision HQ):** Flashcards for symbols, vocabulary, and poetic devices.
*   **Step 3: Exam Readiness (SQP Archives):** Mapping real exam questions to the forensic content.

## 7. Typing & Data Integrity
*   **Strict Types:** Use `src/types/index.ts`. No `any`.
*   **Interfaces:** Ensure `Chapter` includes `narrativeMode`, `symbols`, and `vocabularyAudit`.
