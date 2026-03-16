# Gap Analysis: Unit 1 vs Master Verification File (User Provided)

## Overview
This analysis compares the current codebase (`data/unit1.ts`) against the "Master Verification File" provided in the prompt.

## 1. Topic Hierarchy & Content Gaps

| Topic | Requirement | Current Status | Gap |
|---|---|---|---|
| **Objective 7** | Enhance Sports Performance | ✅ Present | None |
| **Committee: Administrative Director** | Head (Principal/Dean) | ✅ Present | None |
| **Committee: Executive** | Plans/Executes tournament | ❌ MISSING | **HIGH** - Not defined |
| **Committee: Announcement** | Commentary/Match info | ❌ MISSING | **MEDIUM** - Not in Flashcards |
| **Committee: Reception** | Welcomes guests | ⚠️ PARTIAL | Mentioned in SQP, missing specific FC |
| **Committee: Entries** | Fixtures, Souvenirs | ⚠️ PARTIAL | Mentioned in CS, missing specific FC |
| **Intramural Etymology** | Latin *Intra* + *Muralis* | ❌ MISSING | **LOW** - Etymology missing |
| **Extramural Etymology** | Latin *Extra* | ❌ MISSING | **LOW** - Etymology missing |

## 2. Formulas & Calculations

| Item | Requirement | Current Status | Gap |
|---|---|---|---|
| **Points: American Method** | Divide games won by total played | ❌ MISSING | **HIGH** - Missing entirely |
| **Points: British Method** | Win=2, Draw=1, Loser=0 | ✅ Present | None |
| **Bye Placement Order** | 1. Bottom-Lower<br>2. Top-Upper<br>3. Top-Lower<br>4. Bottom-Upper | ⚠️ PARTIAL | Described generically, exact order sequence missing in Text/CS |

## 3. SQP Question Mapping

| Year | Question | Requirement | Status | Gap |
|---|---|---|---|---|
| 2024-25 | Q31 (Blind) | Committees: Publicity, Organizing, Reception, Pre-meet | ❌ MISSING | **CRITICAL** - This specific variation is missing |

## 4. Cheat Sheet & Flashcard Audit

*   **Executive Committee:** Needs a definition flashcard.
*   **Announcement Committee:** Needs a job description flashcard.
*   **American Method:** Needs a calculation flashcard.
*   **Bye Placement Rule:** Needs a specific step-by-step flashcard/CS point (1st, 2nd, 3rd, 4th).
*   **Intramural/Extramural:** Add "Latin Origin" flashcard.

## Summary of Action Items
1.  **Add Flashcards:** Executive Committee, Announcement Committee, Reception Committee (Definition), American Method (with formula), Intramural/Extramural Latin roots.
2.  **Update Cheat Sheet:** Add Bye Placement Order explicitly (1st/2nd/3rd/4th rules).
3.  **Add SQP:** Insert 2024-25 Q31 (Blind) into `sqp` array.
