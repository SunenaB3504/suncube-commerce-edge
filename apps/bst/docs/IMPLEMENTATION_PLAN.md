# Business Studies (Class XII) App - Implementation Plan

## Overview
This document outlines the strategy to transform the raw PDF content for CBSE Class 12 Business Studies into a standardized, interactive TypeScript application. The execution follows the strict protocols defined in the [Standard Operating Procedures](../../physed-cbse-class-XII/docs/SOP.md) and [Content Standardization Guide](../../physed-cbse-class-XII/docs/Content_Standardization_Guide.md).

## Source Material
*   **Theory Chapters**: `C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters`
*   **Sample Question Papers (SQPs)**: `C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-SQPs`

---

## Phase 1: Environment & Tooling Setup
**Objective**: Establish the content extraction pipeline.

1.  **Script Migration**:
    *   Create a `scripts/` directory in the project root.
    *   Find extraction scripts from `physed-cbse-class-XII`.
    *   **Action**: Copy `extract_sqp_text.py` and `inspect_pdf_text.py` to `scripts/`.
    *   **Configuration**: Update `base_path` variables in the scripts to point to the `BS-Chapters` and `BS-SQPs` directories.

2.  **Dependencies**:
    *   Ensure Python environment has `pypdf` installed (`pip install pypdf`).

---

## Phase 2: The Standardization Pipeline
**Objective**: Convert `lebs*.pdf` files into modular `data/unit*/` directories.

### 2.1 Modular File Structure (The "Clean Code" Law)
Each Unit must be split into five distinct files to ensure maintainability:
*   `data/unitX/index.ts`: The central registry exporting the `Chapter` object.
*   `data/unitX/topics.ts`: Core theory content.
*   `data/unitX/flashcards.ts`: Active recall data.
*   `data/unitX/sqp.ts`: Board questions.
*   `data/unitX/mindMap.ts`: Hierarchical map data.
*   `data/unitX/cheatSheet.ts`: Exam-night summaries.

### 2.2 Unit Mapping Strategy
Each raw PDF corresponds to a specific Unit ID and TypeScript directory.

| Unit ID | File Name | PDF Source | Chapter Name | Key Visualization Target |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `unit1.ts` | `lebs101.pdf` | Nature & Significance of Management | Levels of Mgmt (Pyramid Table) |
| **2** | `unit2.ts` | `lebs102.pdf` | Principles of Management | Fayol vs Taylor (Comparison Matrix) |
| **3** | `unit3.ts` | `lebs103.pdf` | Business Environment | PESTLE Dimensions (Flowchart) |
| **4** | `unit4.ts` | `lebs104.pdf` | Planning | Planning Process (Step Flow) |
| **5** | `unit5.ts` | `lebs105.pdf` | Organizing | Functional vs Divisional (Table) |
| **6** | `unit6.ts` | `lebs106.pdf` | Staffing | Selection Process (Flowchart) |
| **7** | `unit7.ts` | `lebs107.pdf` | Directing | Maslow's Hierarchy (Pyramid) |
| **8** | `unit8.ts` | `lebs108.pdf` | Controlling | Control Process (Loop Flow) |
| **9** | `unit9.ts` | `lebs201.pdf` | Financial Management | Factors affecting Capital Structure (List) |
| **10** | `unit10.ts` | `lebs202.pdf` | Financial Markets | Money Mkt vs Capital Mkt (Table) |
| **11** | `unit11.ts` | `lebs203.pdf` | Marketing Management | 4 P's / Marketing Mix (Grid) |
| **12** | `unit12.ts` | `lebs204.pdf` | Consumer Protection | Consumer Rights (List) |

### 2.2 Visualization Enrichment (The "Visual Learning" Law)
Instead of dumping raw text, specific structures must be converted to `visualizations` objects:
*   **Processes**: Convert step-by-step texts (e.g., Staffing Process) into `type: 'flow'`.
*   **Comparisons**: Convert text comparing two concepts (e.g., Delegation vs Decentralization) into `type: 'table'`.
*   **Classifications**: Convert lists of features/importance into `type: 'list'` or `type: 'grid'`.

### 2.3 Flashcard Generation (The "Recall" Law)
*   **Target**: Minimum 50 cards per Unit.
*   **Categories**:
    *   **Definition**: Precise definitions of key terms (e.g., "Coordination").
    *   **Acronyms**: POSDC, PESTLE, SWOT, ROI, EPS.
    *   **Reasoning**: "Why is Management considered an Art?"
    *   **Distinctions**: Differentiate between Authority and Responsibility.

---

## Phase 3: SQP Integration Strategy
**Objective**: Tag and import Board Questions to their respective units.

1.  **Extraction**:
    *   Run extraction scripts on the `BS-SQPs` folder to generate text dumps.
    *   Isolate marking schemes for high-value keywords.

2.  **Tagging & Mapping**:
    *   Business Studies papers are comprehensive. Questions must be manually tagged to units.
    *   **Case Studies**: Explicitly mark Case Study questions with `type: 'Case'`.
    *   **AI Explanation**: Provide hints on identifying keywords in Case Studies (e.g., "The phrase 'taking corrective action' points to the Controlling function").

---

## Phase 4: Execution Checklist

- [ ] **Setup**: Create `scripts/` and install python dependencies.
- [ ] **Part A Units**: Implement Units 1-8 (Principles & Functions).
- [ ] **Part B Units**: Implement Units 9-12 (Finance & Marketing).
- [ ] **Registry**: Update `data/index.ts` to export all 12 units.
- [ ] **Audit**: Run `npx tsc --noEmit` to verify type safety.

---

## Phase 5: SOP Compliance Verification

1.  **UI/UX**: Check **Purple Theme** (`indigo` replaced by `purple-600/900`) across all components.
2.  **Data Integrity**: Ensure no `any` types; strictly follow `Chapter` interface.
3.  **Content Depth**:
    *   Topics must have `subtopics`.
    *   Complex formulas (Unit 9) must be written out fully (e.g., Return on Investment).
4.  **Zero Hallucination**: All content must cross-reference the NCERT/Lebs PDFs provided.
