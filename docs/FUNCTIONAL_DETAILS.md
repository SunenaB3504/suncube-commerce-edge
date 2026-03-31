# Suncube Commerce Edge - Functional Features & Details

## 1. Executive Overview
The Suncube Commerce Edge is a specialized network of educational applications designed for commerce students preparing for both board exams and competitive entrances (CUET & MH CET). The system gamifies the learning experience with intense, tactical design aesthetics (e.g., "Cognitive XP", "Streaks", "Mission Control"), optimizing for fast rendering and high retention.

The platform is split into a **Central Hub** and multiple dedicated **Subject Edges**.

---

## 2. Commerce Hub (Command Center)
**Location:** Root deployment (`/suncube-commerce-edge/`)
**Purpose:** Serves as the primary entry portal to the ecosystem and a unified analytics dashboard.

### Core Features:
*   **Unified Telemetry Pipeline**: Aggregates `localStorage` tracking data (Cognitive XP, Days Streaks, Secured Study Units) across all disconnected/independent subject apps into a single holistic `suncube_alpha_telemetry` object.
*   **Tactical Routing Dashboard**: Provides a launchpad into individual "Operational Units" (Accounts, Economics, BST, English, Phys-Ed, and Entrance Pro) while dynamically displaying completion percentages per module.
*   **Gamification KPIs**: Live readouts of the student's Active Streak, Total XP, and secure module count rendered in a cyberpunk-inspired UI.

---

## 3. Academic Subject Edges (Board Exam Apps)
Each core academic subject is deployed as a distinct, independent application specialized to the needs of that syllabus.

*   **Accounts Edge**: Termed the *Forensic Numerical Engine*. Designed to drill ledger formats and partial credit logic for accounting problems.
*   **Economics Edge**: Termed the *Logic-to-Graph Engine*. Connects macroeconomic theories directly to graphical representations.
*   **Business Studies (BST) Edge**: Focuses heavily on decoding case study scenarios using keyword-recognition mechanics. Incorporates extensive MCQ challenges mapped to syllabus units.
*   **English Edge**: Utilizes a "Standardized Writing Box" component. Acts as a *Narrative Engine* to perfect drafting and descriptive writing layouts.
*   **Physical Education Edge**: Focuses on anatomy pattern recognition and fast-track memorization hacks.

---

## 4. Entrance Pro Alpha 
**Location:** `/suncube-commerce-edge/entrance-pro/`
**Purpose:** A dedicated speed-logic engine for CUET and MH CET BBA aspirants.

### Core Features:
*   **Interactive Subject Dashboards**: Distinct sections for topics like 'Reasoning & Aptitude' and 'GAT Intel', equipped with real-life mnemonic mappings to replace abstract formulas.
*   **Dynamic Testing Modules**: 
    1.  **Quiz Page**: Standard MCQ execution environments.
    2.  **Timed Practice**: Rapid-fire testing under sprint-like constraints.
    3.  **Mock Exam Simulator**: Full-scale exam replication for deployment testing.
*   **Specialized Retention Engines**:
    1.  **Flashcards**: Two variants—Standard and *Speed Scroll*—for rapid concept revision.
    2.  **Study Guides**: Curated, cheat-sheet style notes highlighting 'Evasion Tactics' and high-yield shortcuts.
*   **Performance Audit (Analytics)**: Deep dives into accuracy, time-spent, and weak zones.
*   **Unified Countdown Widget**: Live tracking of days remaining until critical exam deployments (e.g., `CUET UG 2026`).

---

## 5. Shared Infrastructure & Components (`@suncube/ui`)
All apps draw from a unified UI package to ensure brand consistency and zero-friction navigation.

*   **Design DNA**: Deep slate backgrounds, high-contrast amber/emerald accents, and heavy use of `backdrop-blur-3xl` glassmorphism and italicized typographic headers (Plus Jakarta Sans).
*   **Specialized Components**:
    *   `HackerCard`: Snippet displays for math/logic shortcuts.
    *   `DangerZone`: Contextual alerts warning students of high-frequency exam traps.
    *   `WritingBox`: Controlled textarea inputs for drafting long-form answers.

---

## 6. Functional Architecture & Data Storage
Currently, the application is entirely client-side. Progress tracking, subject entitlements, Cognitive XP, and quiz outcomes are securely serialized into browser `localStorage`, bypassing the need for a live background server during operation. Content (MCQs, theory) is delivered through bundled local `.js` data payload arrays.
