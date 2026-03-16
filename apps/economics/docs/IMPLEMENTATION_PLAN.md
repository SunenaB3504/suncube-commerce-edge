# Macroeconomics & Indian Economic Development: Implementation Plan

This document outlines the phase-wise execution for content extraction and seeding for the Class XII Economics App, adhering to the **Content Standardization Guide** and **SOP**.

## Content Overview
Based on the mapping of the 14 chapters (Macro: 8, IED: 6) and the 4-year SQP database (2022-2026).

| Book | Total Units | Total Topics (Estimated) | Illustrations (Total) | Flashcards (Goal) | SQP Questions |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Macroeconomics** | 5 | 25 | 40 | 250+ | 136 |
| **Indian Economic Development** | 3 | 18 | 20 | 150+ | 136 |
| **Combined** | **8 Units** | **43 Topics** | **60+** | **400+** | **272** |

---

## Phase 1: National Income & Related Aggregates (Unit 1)
*   **Focus**: Circular flow, GDP calculation methods, and identity rules.
*   **Metrics**:
    *   Topics: 5 (Real/Money Flow, Domestic/National Aggregates, 3 Measurement Methods).
    *   Illustrations: 8 (Circular Flow Diagram, Income Method Calculation Flow, Value Added Table).
    *   Flashcards: 50.
    *   SQP: ~28 Questions (Extracted from 2022-26 papers).

## Phase 2: Money, Banking & Govt. Budget (Discrete Chapters)
*   **Methodology**: Although grouped in this phase for extraction, these will be initialized as **three distinct modular folders** to ensure the "Enter Learning Module" UI works for each CBSE Unit independently.

### **Unit 2: Money and Banking**
*   **Topics**: 4 (Money Meaning/Supply, Central Bank Functions, Credit Creation).
*   **Metrics**: 5 Illustrations, 50 Flashcards, ~20 SQP Questions.
*   **Folder**: `src/data/unit2-money-banking/`

### **Unit 3: Determination of Income and Employment**
*   **Topics**: 8 (AD/AS, Propensity to Consume/Save, Investment Multiplier, Deficit/Excess Demand).
*   **Metrics**: 12 Illustrations (Graphs), 60 Flashcards, ~30 SQP Questions.
*   **Folder**: `src/data/unit3-determination-income/`

### **Unit 4: Government Budget and the Economy**
*   **Topics**: 5 (Objectives, Components - Revenue/Capital, Budget Deficits).
*   **Metrics**: 6 Illustrations (Budget Trees), 50 Flashcards, ~25 SQP Questions.
*   **Folder**: `src/data/unit4-govt-budget/`

## Phase 3: Balance of Payments & Open Economy (Unit 5)
*   **Focus**: AD/AS, Consumption function, BoP structure, and Forex markets.
*   **Metrics**:
    *   Topics: 8.
    *   Illustrations: 10 (Consumption vs Savings graphs, BoP Surplus/Deficit tables).
    *   Flashcards: 100.
    *   SQP: ~50 Questions.

## Phase 4: Development Experience (1947-90) & NEP 1991 (IED Unit 1)
*   **Focus**: Colonial economy, Five Year Plans, LPG reforms.
*   **Metrics**:
    *   Topics: 6.
    *   Illustrations: 8 (Sectoral share pie charts, LPG Impact matrices).
    *   Flashcards: 50.
    *   SQP: ~40 Questions.

## Phase 5: Challenges & Comparison with Neighbors (IED Unit 2, 3)
*   **Focus**: Human Capital, Rural Development, Sustainable Development, India-China-Pakistan comparison.
*   **Metrics**:
    *   Topics: 12.
    *   Illustrations: 12 (Comparative Health Indicators table, HDI ranking flows).
    *   Flashcards: 50.
    *   SQP: ~94 Questions.

---

## Execution Protocol (Discrete Module System)
Each unit will be developed in its own modular directory with the following file structure:
1. `topics.ts`: Standardized content with "Teacher's Voice" descriptions.
2. `flashcards.ts`: Category-tagged cards for active recall.
3. `sqp.ts`: Verbatim question/answer text with **Markdown GFM Tables**.
4. `mindMap.ts`: Multi-level visual hierarchy.
5. `cheatSheet.ts`: High-density exam pointers.

---
**Standard Compliance Note**: All SQP entries will include `aiExplanation` to bridge the gap between Question and Marking Scheme using the logic found in `Eco2025-26-Explanations.txt`.
