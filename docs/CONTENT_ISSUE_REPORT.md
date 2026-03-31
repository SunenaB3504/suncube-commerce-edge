# Content Issue Report: Truncated Case-Study Passages 

## 1. Executive Summary
Following your observation of "nonsense" questions in the Entrance Pro module, an extensive audit was run across the entire application's question bank directory (`src/data/*`). 

**The Root Cause:** 
The application utilizes a primary passage to establish rules for a set of 3 to 5 following questions (frequently seen in logic puzzles and coding matrices). The author of the data files mapped the full passage to only the *first* question in the set. For the subsequent questions in the same set, the passage was manually abbreviated to save space (using placeholders like `... (Same as above)` or `Seven people...`). 

When the quiz engine renders these questions independently or randomizes them, the user is presented with a highly specific question (e.g., *"What is the code for ABER?"*) but is completely decoupled from the rules required to solve it.

---

## 2. Affected Modules & Sections

The issue is heavily concentrated in the **Reasoning** module. The English comprehension and other mathematical sections are currently unaffected by this specific abbreviation pattern.

### Module: Reasoning & Aptitude

#### Section: 1. Floor & Matrix Arrangements (`arrangements-floor.data.js`)
*Every secondary question in a case-study set uses a truncated passage.*
- **Set 1 (7 Storey Building):** Qs `af-q-002` to `af-q-005` display passage as `"Seven people... (7 Storey Building)"`. 
- **Set 2 (3-Variable Matrix):** Qs `af-q-007` to `af-q-010` display passage as `"Three friends... (Matrix)"`.
- **Set 3 (4 People 2 Flats):** Qs `af-q-012` to `af-q-015` display passage as `"Four people... (Flats)"`.
- **Set 4 (Weekly Schedule):** Qs `af-q-017` to `af-q-020` display passage as `"Seven students..."`.
- **Set 5 (6 Boxes Matrix):** Qs `af-q-022` to `af-q-025` display passage as `"Six boxes... (Box Matrix)"`.
- **Set 6 (5 Teachers Matrix):** Qs `af-q-027` to `af-q-030` display passage as `"Five teachers... (Subject Matrix)"`.
- **Set 7 (2 Per Floor):** Qs `af-q-032` to `af-q-035` display passage as `"Eight people... (2 per floor)"`.
- **Set 8 (Dept Matrix):** Qs `af-q-037` to `af-q-040` display passage as `"Six employees... (Dept Matrix)"`.
- **Set 9 (Chocolate Matrix):** Qs `af-q-042` to `af-q-045` display passage as `"Five boxes... (Chocolate Matrix)"`.

#### Section: 2. Linear Arrangements (`arrangements-linear.data.js`)
*This file contains the highest volume of truncated passages.*
- **Set 1:** Qs 119-185 display `"Eight friends A, B, C, D, E, F, G, and H are sitting in a straight line facing North..."`
- **Set 2:** Qs 235-299 display `"Twelve people are sitting in two parallel rows..."`
- **Set 3:** Qs 348-413 display `"Seven boxes A, B, C, D, E, F and G... (Same stack)"`
- **Set 4:** Qs 462-529 display `"Eight persons P, Q, R, S, T, U, V and W... (Same row)"`
- **Set 5:** Qs 582-649 display `"Nine persons A, B, C, D... (Same row)"`
- **Set 6:** Qs 698-763 display `"Seven people J, K, L..."`
- **Set 7:** Qs 812-877 display `"Five people P, Q, R, S and T... (Same row)"`
- **Set 8:** Qs 927-994 display `"Ten people are sitting in two parallel rows..."`
- **Set 9:** Qs 1046-1112 display `"Six students A, B, C, D, E and F... (Same row)"`
- **Set 10:** Qs 1162-1226 display `"Seven professors..."`
- **Set 11:** Qs 1276-1341 display `"Eight persons... (Same row)"`
- **Set 12:** Qs 1389-1454 display `"Eight cricketers... (Same scenario)"`

#### Section: 3. Circular Arrangements (`arrangements-circular.data.js`)
*Similar pattern. Secondary questions lack the full seating arrangement parameters.*
- Questions include `... (Same circle)`, `... (Square table)`, `... (Hexagon table)`.

#### Section: 4. Symbol Coding (`coding-symbol.data.js`)
- **Set 1 (Rule-based Substitution):** Question `cs-q-006` displays the passage as `"Rules for Coding (Same as above)"`. This directly relates to the third screenshot provided (asking to decipher 'ABER' without the vowel/consonant rules). 

---

## 3. Recommended Remediation Strategy

To fix this globally without breaking the randomized quiz experience, you should implement an automated script that injects the full passage into all subset questions.

**Proposed Script Logic:**
1. Iterate through every `.data.js` file's `questions` array sequentially.
2. If a question contains a `passage` that is a full string (length > 50 chars, no ellipses), store it in memory as `currentPassage`.
3. If the next question also has a `passage` field with text like `...` or `(Same as above)`, **overwrite** that abbreviated string with the `currentPassage` in memory.
4. This ensures every individual question object always carries the 100% complete text context, allowing it to be safely randomized in quizzes!
