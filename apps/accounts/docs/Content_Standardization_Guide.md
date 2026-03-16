# Content Standardization Guide (Based on Chapter 5: Accounting Ratios)

This document serves as the **Master Blueprint** for content generation across all subjects. It analyzes the structure and depth of *Chapter 5: Accounting Ratios* to establish quality standards.

## 1. Section Detail & Hierarchy
**Standard**: Content creates a logical narrative flow from "Basics" to "Complex Applications".
*   **Structure**: `TheoryTopic` (Level 1) → `subtopics` (Level 2) → `points` (Level 3).
*   **Depth**:
    *   **Level 1 (Topic)**: Defines the theme (e.g., "Liquidity Ratios").
    *   **Level 2 (Subtopic)**: Groups related concepts (e.g., "Significance & Interpretation", "Illustration 1 & 2").
    *   **Level 3 (Points)**: detailed bullet points explaining "Why" and "How" (e.g., "*Rule of Thumb*: High inventory turnover combined with low CR...").
    *   **Actionable Insight**: Theory is not just definitions; it includes interpretation guidelines ("High ratio means...").

## 2. Explanation of Formulas
**Standard**: **Zero Abbreviations** in core instructional text.
*   **Method**: All variables in formulas are expanded to their full accounting terminology to prevent ambiguity.
*   **Example**:
    *   ❌ `CR = CA / CL`
    *   ✅ `Current Ratio = Current Assets / Current Liabilities`
*   **Placement**: Full formulas are provided in the `formula` field of every Illustration object, acting as an immediate reference before the calculation.

## 3. Illustrations & Problem Statements
**Standard**: Self-contained "Concept-Formula-Execution" units.
*   **Components**:
    *   `concept`: Contextualizes the problem (e.g., "Reverse logic uses the mathematical difference...").
    *   `formula`: The specific rule applied in this problem.
    *   `content`: The raw data (Table or Image) presenting the question.
    *   `caption`: Distinct title like "Ill 4: Logic flow for reverse calculation".
    *   `resolution`: **Step-by-Step Logic**. Break down the solution into numbered steps (1, 2, 3...) showing the derivation, not just the final answer.
*   **Quality Metrics**:
    *   **Verbatim Accuracy**: Illustrations must be **exact reproductions** of standard textbook problems (e.g., NCERT/Standard Reference). Do not synthesize simplified numbers; use the complex, messy figures from real problems to ensure realistic practice.
    *   **UI Formatting**: Complex illustrations (especially tables) must trigger the **Full-Width Layout** (`lg:col-span-2`) in the UI to prevent cramping.
    *   **Diversity**: Include distinct types: Theoretical (Table), Calculation (Table), and Logic Flow (Image/Diagram).
    *   **Complexity**: Progress from Basic Calculation → Component Derivation → Reverse Calculation → Comprehensive Analysis.

### Resolution Standards (The "AI Tutor" Voice)
*   **Structure**:
    *   **Bold Headers**: Divide the solution into clear phases (e.g., "**Step 1: Calculate Total Due**").
    *   **Narrative Logic**: Explain *why* a step is taken, not just the calculation (e.g., "Since the shareholder failed to pay, we debit Calls in Arrears...").
    *   **Space**: Use double line breaks between steps for readability.
    *   **Verification**: End with a verification step (Debit = Credit) where applicable.

## 4. Flashcard Selection Strategy
**Standard**: Comprehensive coverage of the "Knowledge Bloom's Taxonomy".
*   **Quantity**: **Minimum 50+ cards per chapter** (Mandatory).
*   **Categories**:
    *   **Definitions**: "What is X?"
    *   **Theory/Logic**: "Why is X done?" / "Effect of transaction Y?"
    *   **Classification**: "Where is Z shown in B/S?"
    *   **Calculations**: "Formula for A?"
    *   **True/False**: Testing misconceptions.
*   **Goal**: To build muscle memory for 1-mark objective questions.

## 5. Mind Map Content Selection
**Standard**: "Visual Executive Summary" with Deep Hierarchy.
*   **Strategy**: Selects the top 5-6 parent nodes representing the chapter's pillars.
*   **Structure**: **Multi-Level Hierarchy** is mandatory.
    *   **Level 1**: Main Topic (e.g., Solvency Ratios).
    *   **Level 2**: Sub-Topic (e.g., Debt-Equity).
    *   **Level 3**: Key Insight/Formula (e.g., "Total Debt / Shareholder Funds").
*   **Visuals**: Uses distinct colors and icons for mental separation (e.g., Green for Liquidity, Red for Returns).

## 6. SQP & Marking Scheme Representation
**Standard**: **100% Coverage, Verbatim Accuracy** + **AI Enhancement**.
*   **Coverage**: All questions from the source paper must be included. No omissions allowed.
*   **Verbatim Elements**:
    *   `question`: Preserves the exact text, numbers, **tables**, and options (A/B/C/D) from the official CBSE paper. Tables must be formatted using Markdown or HTML to match the original structure.
    *   `markingScheme`: Preserves the official answer key text exactly as published by CBSE.
*   **Formatting**:
    *   Preserves line breaks (`\n`) in long numerical questions.
    *   Preserves formatting of options (a, b, c, d).

## 7. AI Explanation Depth (Master's Explanation)
**Standard**: "The Teacher's Voice" - Clear, Readable, Step-by-Step Analysis.

### Core Principles
*   **Purpose**: To bridge the gap between the Question and the Marking Scheme with clear working notes.
*   **Detail Level**: Sufficient for a student to understand the solution without referring to a textbook.

### Formatting Standards (Critical for Readability)
**✅ DO:**
*   **Use Plain Text Math**: Use Unicode symbols (×, ÷, =, ₹, →, ≈) instead of LaTeX
    *   ✅ `6,000 × 5/4 = 7,500 shares`
    *   ❌ `$6000 \times \frac{5}{4} = 7,500$` (LaTeX doesn't render properly)
*   **Add Line Breaks**: Use `\n` liberally between sections for visual separation
    *   Between numbered sections
    *   After each bullet point group
    *   Before and after calculations
*   **Use Clear Section Headers**: Bold numbered sections with descriptive titles
    *   `**1. Pro-rata Calculation:**`
    *   `**2. Candidate's Position:**`
*   **Bullet Points**: Use `-` for each calculation or data point
    *   `- Applications received: 1,10,000 shares`
    *   `- Shares allotted: 80,000 shares`
*   **Include Context**: Label what each calculation represents
    *   ✅ `- Net unpaid (Calls in Arrears): ₹42,000 - ₹6,000 = ₹36,000`
    *   ❌ `₹42,000 - ₹6,000 = ₹36,000`

**❌ AVOID:**
*   LaTeX expressions: `$...$`, `\times`, `\frac{}{}`, `\text{}`
*   Long continuous text without breaks
*   Abbreviations without expansion
*   Calculations without context labels

### Content Structure by Question Type
*   **Numerical (Share Capital, Partnership, etc.)**:
    1. **Data Extraction**: List key given values
    2. **Pro-rata/Ratio Calculations**: Show the working for any ratios
    3. **Individual Analysis**: Break down each stakeholder's position
    4. **Final Calculations**: Show formula applications with context
*   **Reasoning (Theory/MCQ)**:
    1. **Concept Review**: Brief reminder of the relevant theory
    2. **Option Analysis**: Evaluate each option systematically
    3. **Correct Answer Justification**: Explain *why* it's correct
    4. **Common Errors**: Note why wrong options are incorrect

### Case Study: Q26 Space Ventures (Reference Example)
```
'**Space Ventures Analysis:**\n\n**1. Pro-rata:**\n- Applications received: 1,10,000 shares\n- Shares allotted: 80,000 shares  \n- Ratio 5:4 means: Applied 1,00,000 → Allotted 80,000\n- Applications rejected: 10,000 shares\n\n**2. Mukta\'s Position:**\n- Shares held: 6,000  \n- Shares applied: 6,000 × 5/4 = 7,500 shares\n- Excess app money: 1,500 × ₹4 = ₹6,000 (adjusted to allotment)  \n- Allotment due: 6,000 × ₹7 = ₹42,000  \n- Net unpaid (Calls in Arrears): ₹42,000 - ₹6,000 = ₹36,000\n\n**3. Forfeiture:**\n- Called up per share: ₹10 (fully called)  \n- Securities Premium debited: 6,000 × ₹1 = ₹6,000  \n- Amount forfeited: 7,500 × ₹4 = ₹30,000 (amount received)\n\n**4. Reissue:**\n- Shares reissued: 4,000 shares @ ₹8 per share  \n- Discount: ₹2 per share (₹10 - ₹8)\n\n**5. Capital Reserve:**\n- Forfeited per share: ₹30,000 ÷ 6,000 = ₹5  \n- Discount per share: ₹2  \n- Net gain per share: ₹5 - ₹2 = ₹3  \n- Total Capital Reserve: 4,000 × ₹3 = ₹12,000'
```

**Key Features of This Format:**
✅ No LaTeX symbols  
✅ Clear section headers with numbers  
✅ Line breaks between all sections  
✅ Contextual labels for every calculation  
✅ Progressive logic flow from basic to complex

✅ Progressive logic flow from basic to complex

## 8. SQP Question Enhancement: Case Study (Q26 - Chapter 1)
**Standard**: Continuous improvement of existing SQP questions for accuracy and clarity.

### The Q26 Transformation (2025-26 SQP)
This case study documents the systematic enhancement of Question 26 from Chapter 1: Accounting for Share Capital.

#### Issues Identified
1. **❌ Incorrect Question**: Original data file contained "Z Ltd." question (not from official 2025-26 SQP)
2. **❌ Missing Alternative**: Official SQP has TWO Q26 options (Space Ventures OR Chitinoor) - only one was present
3. **❌ Table Rendering**: Marking scheme tables weren't rendering properly (showed `<br>` as literal text)
4. **❌ Unreadable Explanations**: Master's Explanation used LaTeX math (`$...$`, `\times`, `\frac{}{}`) that didn't render
5. **❌ Poor Formatting**: No line breaks between sections, making explanations hard to scan

#### Solutions Implemented
1. **✅ Question Replacement**:
   - Replaced "Z Ltd." with correct "**Space Ventures Limited**" from official 2025-26 SQP
   - Added "**Chitinoor Ltd.**" as Q26b (second option from official SQP)
   - Moved old "Z Ltd." to Practice Questions section (ch1-practice-01) - *no content wasted*

2. **✅ Marking Scheme Verbatim Accuracy**:
   ```typescript
   markingScheme: '**Journal**\n\n**I.** Bank A/c &nbsp;&nbsp;&nbsp;&nbsp;Dr. 4,40,000  \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Share Application A/c &nbsp;&nbsp;&nbsp;&nbsp;4,40,000  \n*(Being application amount received for 1,10,000 shares)*\n\n**II.** Share Application A/c...'
   ```
   - Used structured plain text format with HTML entities (`&nbsp;`) for spacing
   - Preserved exact journal entry structure from official Marking Scheme
   - Each journal entry has: Entry number → Accounts → Dr/Cr → Amounts → Narration

3. **✅ Table Rendering Fix**:
   - **Method**: Replaced `<br>` tags with markdown line breaks or structured plain text
   - **Result**: Clean rendering without HTML dependencies
   - **Component Update**: Ensured `SQPView.tsx` uses `ReactMarkdown` with `remark-gfm` for proper rendering

4. **✅ Master's Explanation Overhaul**:
   - **Before**: `'**Space Ventures**:\\n1. **Pro-rata**: Applied 1,10,000. Allotted 80,000. $\\frac{5}{4}$ ratio...'`
   - **After**: `'**Space Ventures Analysis:**\n\n**1. Pro-rata:**\n- Applications received: 1,10,000 shares\n- Shares allotted: 80,000 shares  \n- Ratio 5:4 means: Applied 1,00,000 → Allotted 80,000...'`
   - **Changes**:
     - ❌ Removed all LaTeX: `$...$`, `\times`, `\frac{}{}`
     - ✅ Added Unicode symbols: ×, ÷, =, ₹, →, ≈
     - ✅ Added `\n` line breaks between all sections
     - ✅ Used descriptive headers: `**1. Pro-rata:**`, `**2. Mukta's Position:**`
     - ✅ Added context labels: `- Net unpaid (Calls in Arrears): ₹42,000 - ₹6,000 = ₹36,000`

#### Replication Checklist for Other Questions
To apply this methodology to any SQP question across all chapters:

**Step 1: Verify Question Accuracy**
- [ ] Compare `question` field text with official CBSE SQP PDF
- [ ] Ensure question number matches (e.g., "26. Space Ventures Limited...")
- [ ] Check if question has multiple options (OR scenario) - split into separate entries if needed
- [ ] Verify all numerical data, dates, amounts are exact copies

**Step 2: Verify Marking Scheme Accuracy**
- [ ] Compare `markingScheme` field with official CBSE Marking Scheme PDF
- [ ] For journal entries: ensure exact format (Account names, Dr/Cr, amounts, narrations)
- [ ] For calculations: include all working notes shown in official MS
- [ ] For tables: preserve structure, headers, and alignment using markdown tables or plain text

**Step 3: Fix Table Rendering**
- [ ] If marking scheme contains tables, use structured plain text with proper spacing
- [ ] Use HTML entities (`&nbsp;`) for indentation if needed
- [ ] Add `\n` line breaks between table rows for readability
- [ ] Test rendering in browser to ensure no `<br>` tags appear as text

**Step 4: Enhance Master's Explanation**
- [ ] Remove all LaTeX expressions: `$...$`, `\times`, `\frac{}{}`, `\text{}`
- [ ] Replace with Unicode: ×, ÷, =, ₹, →, ≈, or plain text like `5/4`
- [ ] Add `\n\n` between major sections
- [ ] Use `\n` after each bullet point group
- [ ] Add bold numbered headers: `**1. Section Name:**`
- [ ] Include context labels in calculations: `- Label: calc = result`
- [ ] Follow the progression: Data → Ratios → Individual Analysis → Final Calculations

**Step 5: Test and Verify**
- [ ] Run `npm run dev` and navigate to the SQP question in browser
- [ ] Verify "Official Answer" section renders correctly (no HTML artifacts)
- [ ] Verify "Master's Explanation" section is readable with proper formatting
- [ ] Check mobile responsiveness (tables should not overflow)
- [ ] Commit changes with descriptive message: `"Standardize Q[X]: [brief description]"`

### Files Modified in Q26 Enhancement
- `data/chapter1.ts` - Updated Q26a, Q26b, added practice question
- `components/SQPView.tsx` - Ensured proper markdown rendering

### Outcome Metrics
✅ **100% Verbatim Accuracy** with official CBSE documents  
✅ **Zero Rendering Issues** - all content displays cleanly  
✅ **Improved Readability** - Master's Explanation is scannable and clear  
✅ **No Content Loss** - Old question moved to practice section  

## 9. Cheat Sheet Compilation
**Standard**: **Comprehensive Exam-Last-Minute Review**.
*   **Coverage**: Must include every single Formula, Rule, and Limit mentioned in the chapter.
*   **Format**: Organized by topic (e.g., Liquidity, Solvency).
*   **Elements**: Key Terms, Acronyms, and 'Golden Rules' for quick recall.
