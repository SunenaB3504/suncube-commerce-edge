# Gap Analysis: Unit 4 vs Master Verification File

## 1. Overview
This audit compares the current `data/unit4.ts` against the "Master Verification File: Unit IV - Physical Education & Sports for CWSN" provided in the prompt. The text focuses heavily on Disorders (ODD/OCD), Etiquette, Advantages, and Strategies, with some Organizations content inferred from SQPs.

## 2. Topic Hierarchy & Content Gaps

| Topic | Requirement | Current Status | Gap Level | Action Required |
|---|---|---|---|---|
| **4.3.4 ODD (Oppositional Defiant Disorder)** | Definition, Severity Levels (Mild/Mod/Sev), Symptoms (Mood, Defiance, Vindictiveness), Consequences. | ✅ Covered | Low | Good coverage in theory and flashcards. |
| **4.3.5 OCD (Obsessive Compulsive Disorder)** | Definition (Anxiety), Obsessions vs Compulsions detailed lists. | ✅ Covered | Low | Good coverage. |
| **4.4.1 Disability Etiquette** | Definition, Communication (Tone, Interpreter), Social (Assistance), Physical (Eye-Level, Leaning). | ✅ Covered | Low | Good coverage. |
| **4.5.1 Advantages of PA** | Physical, Mental, Social, Behavioral (ADHD), Independence. | ✅ Covered | Low | Good coverage. |
| **4.6.1 Strategies for Accessibility** | Communication (Multi-sensory), Space (Autism Areas), Equipment (Modifications), Graded Activities (Single-action), Psychological (Motivation). | ⚠️ PARTIAL | Medium | "Psychological Strategies" and specific "Graded Activity" progression (Simple->Complex) details can be strengthened. |
| **Skill Classifications** (Section 2) | Locomotor, Manipulative, Stability Lists. | ❌ MISSING | **HIGH** | These classifications (Run/Jump vs Throw/Kick vs Balance) are **completely missing** from the current file. |
| **Equipment Characteristics** (Section 2) | Weight/Size/Speed/Color/Texture Tables. | ❌ MISSING | **HIGH** | The specific modification parameters (Bright vs Pale, Rough vs Smooth) are missing. |

## 3. SQP Question Mapping

| Year | Question | Status | Gap |
|---|---|---|---|
| 2023-24 | Q2 (Disorders) | ❌ MISSING | Likely overlaps with Unit 9, but needs check. |
| 2023-24 | Q15 (Depression NOT result) | ❌ MISSING | Need to add this concept-check MCQ. |
| 2023-24 | Q25 (Strategies 3M) | ✅ Mapped | (as Q24 in current file). |
| 2023-24 | Q33 (Case Study - Motor Skills) | ❌ MISSING | **Critical**: Case study on Motor Skills is missing (matches the missing Skill Classification section). |
| 2024-25 | Q7 (Deaflympics 1924) | ❌ MISSING | Need to add. |
| 2024-25 | Q27 (Special Olympics Aims) | ❌ MISSING | Need to add. |
| 2024-25 | Q32 (Case Study - Paralympics) | ❌ MISSING | **Critical**: Visual identification case study missing. |
| 2025-26 | Q7 (Special Olympics Participants) | ❌ MISSING | Need to add. |
| 2025-26 | Q27 (Strategies 3M) | ✅ Mapped | (as Q2 in current file). |
| 2025-26 | Q32 (Case Study - Logos) | ❌ MISSING | **Critical**: Visual logo ID case study missing. |

## 4. Flashcard & Cheat Sheet Audit

*   **Skill Types:** No flashcards for Locomotor vs Manipulative skills.
*   **Detailed Equipment:** Cheat sheet lacks the specific "Weight/Size/Speed" modification matrix.
*   **Etiquette:** Good coverage, but can be reinforced with "Eye-level" rule specifically for Wheelchairs.

## 5. Action Plan
1.  **Add Skills Section:** Create a new topic `motor-skills-classification` containing Locomotor, Manipulative, and Stability skill lists.
2.  **Enhance Strategies:** Add the "Equipment Characteristics" table (Weight/Size/Speed) to the Strategies section.
3.  **SQP Injection:**
    *   Add 2023-24 Q15 (Depression/Benefits).
    *   Add 2023-24 Q33 (Case Study: Motor Skills).
    *   Add 2024-25 Q7 (Deaflympics Year).
    *   Add 2024-25 Q32 (Case Study: Paralympics Logo/Motto).
    *   Add 2025-26 Q32 (Case Study: Special Olympics Logo).
4.  **Flashcard Update:** Add cards for "What is a Manipulative Skill?", "Example of Stability Skill", etc.
