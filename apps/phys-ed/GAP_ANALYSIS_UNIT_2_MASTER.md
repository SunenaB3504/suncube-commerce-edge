# Gap Analysis: Unit 2 (Sports & Nutrition) vs Master Verification File

## 1. Executive Summary
The current `data/unit2.ts` file provides a strong foundation for the "Sports & Nutrition" unit, covering the core curriculum (Balanced Diet, Nutrients, BMI, Weight Control). However, compared to the detailed Master Verification File and standard CBSE requirements, there are specific technical gaps, particularly in the **Non-Nutritive Components** section and **Amino Acid classification**.

**Status:** ⚠️ **PARTIAL** (Requires content augmentation)

## 2. Topic Hierarchy & Content Gaps

| Topic | Standard / Master Requirement | Current Status | Action Required |
|---|---|---|---|
| **2.1 Balanced Diet** | Definition: "Diet consisting of all essential food constituents in correct proportion." | ✅ Covered | None |
| **Proteins** | Classification: **Essential vs Non-Essential Amino Acids**. | ❌ MISSING | Add definitions and examples of Essential (9) vs Non-Essential. |
| **Fats** | Classification: **Saturated vs Polyunsaturated vs Monounsaturated**. | ⚠️ PARTIAL | Mentioned in Mind Map, but lacks deep detail in `content`. |
| **2.2 Nutritive** | Carbs, Fats, Proteins, Vitamins, Minerals. | ✅ Covered | None |
| **Non-Nutritive** | **Anti-Nutritional Factors (ANFs)**: Phytates, Tannins, Oxalates. | ❌ MISSING | **CRITICAL**: Add explicit section on ANFs. |
| **Beneficial Non-Nutritive** | Artificial Sweeteners, Preservatives, Coffee (Caffeine). | ❌ MISSING | Expand "Flavor compounds" to include specific examples. |
| **2.3 Weight Control** | BMI Formula & Calculations. | ✅ Covered | Good step-by-step example exists. |
| **2.4 Pitfalls of Dieting** | "Starvation Mode", Skipper's metabolism drop. | ⚠️ PARTIAL | Concept present ("lowers metabolism"), but specific terms like "Starvation Mode" could be emphasized. |
| **2.5 Food Intolerance** | Mechanism: Enzymatic defect (e.g. Lactase deficiency). | ⚠️ PARTIAL | Mentioned, but could specify "Absence of enzyme" explicitly. |

## 3. Visualization & Flashcard Gaps

### Visualizations
*   **Current**: Tables for Vitamins/Minerals, BMI Flow.
*   **Missing**:
    *   **Amino Acid Table**: List of Essential vs Non-Essential.
    *   **Pyramid**: Food Pyramid or "Make Your Plate" visualization (Standard requirement).

### Flashcards
*   **Current Count**: 50 Cards.
*   **Missing Concepts**:
    *   Definition of "Anti-Nutritional Factors".
    *   Definition of "Essential Amino Acids".
    *   Difference between "Food Allergy" (Immune) and "Food Intolerance" (Digestive).

## 4. SQP Question Mapping

| Year | Question | Status | Evaluation |
|---|---|---|---|
| **2025-26** | Q4 (Nutrition Def), Q9 (Iron Odd one out), Q20 (Balanced Diet) | ✅ Present | Mapped correctly. |
| **2024-25** | Q4 (Protein), Q9 (Fat Soluble), Q28 (Nutritive vs Non) | ✅ Present | Mapped correctly. |
| **2023-24** | *No questions from this year found in file.* | ❌ MISSING | Need to import relevant 2023-24 questions if available in archives. |

## 5. Remediation Plan
1.  **Enrich Content**: Update `unit2: topics` to include:
    *   Essential vs Non-Essential Amino Acids.
    *   Detailed list of Non-Nutritive components (Phytates, Tannins).
2.  **Add Visualization**: Create a table for `Essential vs Non-Essential Amino Acids`.
3.  **Update Flashcards**: Add ~5-10 cards covering the new deep-dive topics.
4.  **Refine Definitions**: Ensure "Food Intolerance" mentions enzymatic cause clearly.
