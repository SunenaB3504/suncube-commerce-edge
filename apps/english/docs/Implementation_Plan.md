# Implementation Plan: English Core (Class 12) App

This plan outlines the step-by-step construction of the `English-cbse-class-XII` application, adhering to the specialized **Literature Forensics** and **Writing Authority** standards.

## Phase 1: Environment & Architecture (Week 1)
*   **1.1. Project Scaffolding:** 
    *   Initialize React/Vite project with TypeScript.
    *   Install core dependencies: `tailwindcss`, `lucide-react`, `framer-motion`, `react-markdown`, `remark-gfm`.
*   **1.2. Design System Implementation:**
    *   Configure `tailwind.config.js` with the **Royal Purple** (Literature) and **Emerald** (Poetry) color palettes defined in the SOP.
    *   Setup the layout components: `Navbar`, `Sidebar` (Literature/Writing/SQP), and `Footer`.
*   **1.3. Global Type Definitions:**
    *   Create `src/types/index.ts` to include specialized types: `ProseForensics`, `PoetryAudit`, `WritingFormat`, `SQPTriggerType`.

## Phase 2: Data Layer - The "Forensic" Core (Week 1-2)
*   **2.1. Master Content Conversion:**
    *   Convert `Exam-Capsule.md` and `Master_Verification_Ch1_Ch2.md` into structured TypeScript objects in `src/data/chapters/`.
    *   **Mandatory Fields**: `toneDecoder`, `symbolismMap`, `keywordLexicon`, `narrativeVoice`.
*   **2.2. Poetry Stanza Audit:**
    *   Create `src/data/poetry/` data files with line-by-line interpretation and `poeticDeviceMap`.
*   **2.3. Writing Skills Skeletons:**
    *   Implement `src/data/writing/` with `Problem-Cause-Solution` matrices for every official format (Notice, Invitation, Letter, Article, Report).

## Phase 3: Component Development (Week 2-3)
*   **3.1. ForensicView (The Primary Content Engine):**
    *   A tabbed interface for Prose: **Analysis** | **Character Traits** | **Vocabulary Audit** | **Thematic Blueprint**.
*   **3.2. PoetryStanzaViewer:**
    *   An interactive line-scroll component that highlights poetic devices and provides instant line-level interpretation.
*   **3.3. RevisionHQ - Retrieval Mastery:**
    *   **Symbol Flashcards**: Interactive cards with a focus on "What it represents."
    *   **Vocabulary Drill**: A specific view for the "NCERT Lexicon" phrases.
    *   **Persona Drafting tool**: A template-based drafting arena for speech/diary entry practice.

## Phase 4: Assessment - SQP Mapping (Week 3)
*   **4.1. SQP Trigger Engine:**
    *   Implement `SQPArchives.tsx` that filters questions by "Comparative Trigger" or "Persona Trigger".
*   **4.2. "Teacher's Voice" Logic:**
    *   Develop the AI Explanation component that focuses on "Critical Commentary" (bridging text to marking scheme).
*   **4.3. Full Marking Scheme Audit:**
    *   Populate `src/data/sqp/` with verbatim questions and schemes from 2023-2026 papers.

## Phase 5: Testing, Polish & Verification (Final Week)
*   **5.1. The "100% Verbatim" Quality Audit:**
    *   Cross-reference every data entry against the **Content Standardization Guide**.
    *   Check for "Spelling Traps" defined in the Master Verification files.
*   **5.2. Animation & UX Polish:**
    *   Implement Framer Motion transitions for chapter switching.
    *   Ensure "Emerald markers" in poetry are visually distinct and interactive.
*   **5.3. Build & Stability Check:**
    *   Validate `npm run build`.
    *   Perform final mobile-responsiveness check on all views.

## Phase 6: Maintenance & Lifecycle
*   Update content as new CBSE circulars are released.
*   Retire older SQPs (2022) to keep the focus on the latest (2024-2026) competency patterns.
