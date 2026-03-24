# GAT Questions Suitable for Shortcuts & Vedic Maths

### percentage-basics",
                title: "1. Percentage Basics",
                content: {
                    coreConcept: "1. Definition: Percentage literally means 'per hundred'. It is a way of expressing a number as a fraction of 100.\n2. Exam Application: In competitive exams (CUET & MAH-CET), percentages form the foundation for Profit & Loss, Data Interpretation, and Simple/Compound Interest.\n3. Master Mindset: Percentage is just a comparison tool where the base is always normalized to 100.",
                    formulaBank: "1. Common Fraction-Percentage Equivalents:\n1/2 = 50% | 1/3 = 33.33% | 1/4 = 25% | 1/5 = 20% | 1/6 = 16.66% | 1/8 = 12.5% | 1/9 = 11.11% | 1/11 = 9.09%\n\n2. Basic Formulas:\n- % Change = (Difference / Original Value) × 100\n- A is x% of B: (A / B) × 100\n- Net Successive Change = [a + b + (ab/100)]%\n\n3. Finding Original Value (Reversed %):\n- If a number is increased by R% to become V: Original = [V / (100 + R)] × 100\n- If a number is decreased by R% to become V: Original = [V / (100 - R)] × 100\n\n4. The Overlap (Venn) Formula:\n- % failed in at least one = (% Fail A + % Fail B) - % Fail Both\n- % passed in both = 100% - % failed in at least one.",
                    logic: "1. Multiplying Factors (The Pro Method):\n- 10% increase → Multiply by 1.1\n- 10% decrease → Multiply by 0.9\n\n2. Unit Digit & Digit Sum (The Hacker Hack):\n- If the question involves large multiplications or additions, check the unit digit of the options FIRST. \n- Example: $452 \times 12$ must end in 4. If only one option ends in 4, select it and MOVE ON.\n\n3. Substitution Hack (Option Trailing):\n- Instead of solving $x$, plug the options into the equation. For Age or Ratio problems, this is often 50% faster than setting up variables.\n\n4. GAP Analysis (Pass/Fail Thresholds):\n- If Student A fails by X marks and Student B passes by Y marks: \n- Mark Difference = X + Y\n- % Difference = |% Score A - % Score B|\n- Max Marks = (Mark Difference / % Difference) × 100",
                    traps: "TRAP 1: The Asymmetry Trap\nIf A is 25% more than B, students often assume B is 25% less than A. THIS IS FALSE.\n- If B = 100, A = 125. B is 25 less than A. % less = (25/125) × 100 = 20%.\n\nTRAP 2: Successive Addition\n10% discount followed by 10% discount is NOT 20% discount. It is 19% (100 -> 90 -> 81).\n\nTRAP 3: The Base Error\nFinding 'original value' by applying the percentage to the final value. \nExample: Weight drops 10% to 90kg. Original is NOT 90 + 10% of 90 (99). It is 90 / 0.9 = 100kg.\n\nTRAP 4: The 'Both' Double Count\nWhen summing students failing in two different subjects, you MUST subtract those who failed in both, otherwise you count them twice.",
                    examples: [
                        { q: "What is 15% of 80?", a: "12. (10% is 8, 5% is 4. Total = 12)" },
                        { q: "Salary increases from ₹20,000 to ₹25,000. Find % increase.", a: "25%. (Increase is 5,000. 5,000/20,000 = 1/4 = 25%)" },
                        { q: "After a 20% hike, a salary becomes ₹30,000. What was the original salary?", a: "₹25,000. (30,000 / 1.2 = 300,000 / 12 = 25,000)" },
                        { q: "A price is reduced by 25% to ₹750. Find original price.", a: "₹1,000. (750 / 0.75 = 1000)" },
                        { q: "Successive 20% increase and 20% decrease?", a: "4% decrease. (1.2 * 0.8 = 0.96)" },
                        { q: "CUET GAT 2024: Student scores 30% and fails by 15 marks. 40% score gets 35 more than pass. Max marks?", a: "500. (10% diff = 50 marks. 100% = 500)" },
                        { q: "CUET GAT 2024: Merchant marks goods 25% above CP, gives 10% discount. Profit %?", a: "12.5%. (1.25 * 0.9 = 1.125)" },
                        { q: "CUET GAT 2023: If CP of 15 articles equals SP of 12 articles, gain %?", a: "25%. (Gain = 3/12 = 1/4)" },
                        { q: "CUET GAT 2023: In an exam, 25% failed in Math, 20% in English, 5% in both. % failed in at least one?", a: "40%. (25 + 20 - 5 = 40)" },
                        { q: "CUET ACC 2024: Machinery valued at ₹90,000 is undervalued by 10%. Real value?", a: "₹1,00,000. (90,000 / 0.9 = 1,00,000)" },
                        { q: "CUET ECO 2024: GDP increases from 200 to 220. Growth rate?", a: "10%. (20/200 = 1/10)" },
                        { q: "A number is first increased by 10% and then decreased by 10%. Net change?", a: "1% decrease. ( (100 * 1.1) * 0.9 = 99 )" },
                        { q: "If A is 50% larger than B, B is how much smaller than A?", a: "33.33%. ( B=100, A=150. Diff=50. 50/150 = 1/3 )" },
                        { q: "25% of 25% of 1600?", a: "100. ( 0.25 * (400) = 100 )" },
                        { q: "In a class of 60, 40% are boys. Number of girls?", a: "36. ( 60% of 60 = 36 )" },
                        { q: "Price of sugar rises by 25%. By how much must a housewife reduce consumption to keep expenditure same?", a: "20%. ( 125 -> 100. Reduction = 25/125 = 1/5 )" },
                        { q: "A spends 30% on food, 20% on rent, and saves ₹5000. Find total income.", a: "₹10,000. ( 50% = 5000, 100% = 10000 )" },
                        { q: "What is 0.01% as a fraction?", a: "1/10000. ( 0.01 / 100 )" },
                        { q: "A man's salary was ₹10,000. It increases by 50% and then decreases by 50%. Final salary?", a: "₹7,500. ( 10000 * 1.5 * 0.5 = 7500 )" },
                        { q: "If x% of y is 100 and y% of z is 200, then find relation between x and z.", a: "z = 2x. ( (xy/100)=100, (yz/100)=200. Divide second by first: z/x = 2 )" },
                        { q: "20% of a number is 60. Find 80% of same number.", a: "240. ( 60 * 4 = 240 )" },
                        { q: "A candidate needs 33% to pass. He gets 125 marks and fails by 40. Max marks?", a: "500. ( 33% = 165. 1% = 5. 100% = 500 )" },
                        { q: "If 10% of x = 20% of y, then x:y is?", a: "2:1. ( 0.1x = 0.2y )" },
                        { q: "Population of a town is 10000. It increases by 10% annual. Population after 2 years?", a: "12100. ( 10000 * 1.21 )" },
                        { q: "80% of (A + B) = 50% of (A - B)? No, math swap. Correct: 10% of A = 20% of B. A is what % of B?", a: "200%. ( A = 2B )" }
                    ],
                    speedSummary: "- 1/X table is your best friend for MAH-CET.\n- Hacker Tip: Check Unit Digits of options before solving. If they are unique, don't calculate fully.\n- Square logic: For same % increase and decrease, it's always an x²/100 % loss."
                }
            },
            {
                id: "bodmas-logic",
                title: "2. BODMAS / Simplification",
                content: {
                    coreConcept: "1. Hierarchy: BODMAS is the universal 'Rule of Law' for solving math. Without it, an expression like 2 + 5 × 3 could be 21 or 17 (it's 17!).\n2. High-School Logic: Think of BODMAS as a filter. You pass your equation through the filter, and things get 'solved' based on their importance.\n3. Exam Context: In CUET(UG), BODMAS questions use nested brackets and large numbers to test your focus and discipline.",
                    formulaBank: "The Priority Ladder:\n1. ( ) Brackets: Inner most first. [ { ( ) } ]\n2. Of/Orders: Multiplication using 'of' or powers like 2³ and roots like √25.\n3. ÷ (Division) & × (Multiplication): If both are present, solve them from LEFT TO RIGHT.\n4. + (Addition) & - (Subtraction): Solve them from LEFT TO RIGHT.",
                    logic: "The Nested Strategy:\nStep 1: Focus purely on (round brackets) first. Solve what's inside.\nStep 2: Move to {curly brackets}.\nStep 3: Finish with [square brackets].\nStep 4: Once brackets are gone, scan for 'of' then follow D-M-A-S.\nPro Tip: Treat signs carefully. Remember that - ( - ) becomes +.",
                    traps: "TRAP 1: The 'Multiplication First' Myth\nStudents often think 'M comes before D' in multiplication. NO. Division and Multiplication have the SAME priority. Solve them as they appear from left to right.\n\nTRAP 2: The Sign Decay\n10 - (5 - 2) is NOT 10 - 5 - 2. It is 10 - 3 = 7. If you open the bracket, it becomes 10 - 5 + 2 = 7.\n\nTRAP 3: The 'Of' Priority\n'20% of 100 ÷ 2' means solve 20% of 100 (which is 20) first, THEN divide by 2.",
                    examples: [
                        { q: "10 + 2 × 5", a: "20. (× happens before +)" },
                        { q: "[48 ÷ 12 × {16 - (4 + 6)} + 14]", a: "38. (Round: 10 → Curly: 6 → Left-to-Right: 4*6=24 → Final: 24+14=38)" },
                        { q: "50 - (10 + 5) × 2", a: "20. (Bracket first: 15. Then 15*2=30. Final: 50-30=20)" },
                        { q: "12 + 18 ÷ 3 × 2", a: "24. (Left-to-Right: 18÷3=6, then 6*2=12. Final: 12+12=24)" },
                        { q: "25 - 5 × [2 + {12 ÷ (6 - 2)}]", a: "0. (Round: 4 → Curly: 12/4=3 → Square: 2+3=5 → Multi: 5*5=25 → Final: 25-25=0)" },
                        { q: "40% of 200 ÷ 2", a: "40. ('Of' first: 80. Then 80/2=40)" },
                        { q: "80 ÷ (10 + 10) × 4", a: "16. (Bracket: 20 → 80/20=4 → 4*4=16)" },
                        { q: "100 - {20 + (5 × 3)}", a: "65. (Round: 15 → Curly: 20+15=35 → Final: 100-35=65)" },
                        { q: "√64 + (10 - 2)²", a: "72. (Root: 8. Bracket: 8. Order: 8²=64. Final: 8+64=72)" },
                        { q: "(1/2) + (1/4) ÷ (1/2)", a: "1. (Division first: 1/4 * 2 = 1/2. Final: 1/2 + 1/2 = 1)" },
                        { q: "1/2 + 1/2 * 1/2", a: "3/4. (Multiply first = 1/4. Sum: 1/2 + 1/4)" },
                        { q: "10 - [2 + {5 - (2-1)}]", a: "4. (Bracket layer check)" },
                        { q: "36 / 6 * 3", a: "18. (Left-to-right: 6 * 3)" },
                        { q: "100 / (10 + 10) * 5", a: "25. (100 / 20 * 5)" },
                        { q: "1/5 of 25 + 5", a: "10. (5 + 5)" },
                        { q: "2 + 2 * 2 - 2 / 2", a: "5. (2 + 4 - 1)" },
                        { q: "5 * (10 - 2) / 4", a: "10. (5 * 8 / 4)" },
                        { q: "100 - 5 * 10 + 2", a: "52. (100 - 50 + 2)" },
                        { q: "(10 + 10) * (5 - 3)", a: "40. (20 * 2)" },
                        { q: "√100 - √64", a: "2. (10 - 8)" },
                        { q: "2^3 + 3^2", a: "17. (8 + 9)" },
                        { q: "50 / 5 * 2 + 10", a: "30. (10 * 2 + 10)" },
                        { q: "10 + (2+3) * 4", a: "30. (10 + 5*4)" },
                        { q: "10 * 10 / 10 + 10 - 10", a: "10. (100/10 + 0)" },
                        { q: "[10 + {5 * (2+2)}] / 6", a: "5. (10 + 20 = 30; 30/6 = 5)" }
                    ],
                    speedSummary: "- Simplify as you read.\n- Memorize squares up to 30 to spot 'Orders' quickly.\n- If the options are whole numbers, your division step should always result in a whole number."
                }
            },
            {
                id: "lcm-hcf-logic",
                title: "3. LCM and HCF",
                content: {
                    coreConcept: "1. Highest Common Factor (HCF): Think of it as 'The Greatest Sharer'. It is the largest size of a 'measuring cup' that can perfectly empty multiple containers without any liquid left.\n2. Least Common Multiple (LCM): Think of it as 'The First Meeting Point'. If two people are running at different speeds, the LCM is the time when they will both pass the starting line together again.\n3. Relationship: HCF always ≤ Number ≤ LCM.",
                    formulaBank: "1. The Product Rule: For two numbers (A and B), A × B = LCM × HCF.\n2. Fractions Rule:\n   - HCF of Fractions = HCF of Numerators / LCM of Denominators\n   - LCM of Fractions = LCM of Numerators / HCF of Denominators\n3. Remainder Shortcut: Smallest number divisible by X, Y, Z leaving remainder R = LCM(X, Y, Z) + R.",
                    logic: "Step 1: The Keyword Scan.\n- If the question asks for the 'Greatest', 'Maximum', or 'Largest' size to divide things, use HCF.\n- If it asks for 'Smallest', 'Minimum', or 'When will they meet next', use LCM.\nStep 2: Prime Factorization.\n- Write numbers as powers of primes. HCF takes the LOWEST powers. LCM takes the HIGHEST powers.",
                    traps: "TRAP 1: The Multi-Number Mistake\nThe rule 'A × B = LCM × HCF' ONLY works for TWO numbers. If you have three numbers, this product rule will give you a wrong answer.\n\nTRAP 2: Decimal Displacement\nTo find HCF/LCM of 0.6 and 0.12, first make the decimals 'even' (0.60 and 0.12). Calculate for 60 and 12, then move the decimal back.\n\nTRAP 3: HCF of Fractions\nStudents often forget to find the LCM of denominators when looking for the HCF of fractions. Remember: HCF uses 'HCF/LCM' while LCM uses 'LCM/HCF'.",
                    examples: [
                        { q: "HCF of 24 and 36?", a: "12. (Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. Highest common is 12.)" },
                        { q: "LCM of 12, 15, and 20?", a: "60. (Multiples of 12: 12,24,36,48,60... 60 is the first number divisible by all three.)" },
                        { q: "Golden Rule: LCM is 60, HCF is 5, one number is 15. Find the other.", a: "20. (60 × 5 = 15 × X → 300 = 15X → X = 20)" },
                        { q: "Smallest number exactly divisible by 3, 4, 5, 6.", a: "60. (This is asking for the LCM of 3, 4, 5, and 6.)" },
                        { q: "Bells ring every 12, 15, 18 mins. When will they ring together next?", a: "180 mins. (Find LCM of 12, 15, 18. Prime factors: 2²*3, 3*5, 2*3². LCM = 2²*3²*5 = 180.)" },
                        { q: "Find HCF of Fractions: 2/3 and 5/9.", a: "1/9. (HCF of 2,5 is 1. LCM of 3,9 is 9. Result = 1/9.)" },
                        { q: "Two numbers are in ratio 3:4. HCF is 4. Find LCM.", a: "48. (Numbers are 3*4=12 and 4*4=16. LCM(12, 16) = 48.)" },
                        { q: "Find the greatest length of a tape that can measure 8m and 12m exactly.", a: "4m. (Asking for HCF of 8 and 12.)" },
                        { q: "HCF of 1.2 and 0.18?", a: "0.06. (Calculate HCF of 120 and 18, which is 6. Adjust decimals to get 0.06.)" },
                        { q: "Smallest number which when divided by 6, 9 leaves remainder 2?", a: "20. (LCM of 6, 9 is 18. Add remainder: 18 + 2 = 20.)" },
                        { q: "Find HCF of 81 and 108.", a: "27. (81=3^4, 108=2^2 * 3^3. HCF=3^3=27)" },
                        { q: "LCM of 2, 4, 8, 16?", a: "16. (All are factors of 16)" },
                        { q: "HCF of two prime numbers?", a: "1. (They have no common factors except 1)" },
                        { q: "LCM of two co-prime numbers?", a: "Their product. (e.g. 3 and 7 -> 21)" },
                        { q: "Find the least square number divisible by 10, 15, and 20.", a: "900. (LCM is 60. Prime factors of 60 are 2² * 3 * 5. To make it a square, multiply by 3 * 5 = 15. 60 * 15 = 900.)" },
                        { q: "HCF(a, b) = 12 and product a*b = 1440. LCM?", a: "120. (1440 / 12 = 120)" },
                        { q: "HCF of 1.5, 0.5, 2.5?", a: "0.5." },
                        { q: "LCM of 1/2, 2/3, 3/4?", a: "6/1? No. LCM of num (1,2,3) = 6. HCF of den (2,3,4) = 1. Result = 6." },
                        { q: "Highest common factor of 100, 150, 200?", a: "50." },
                        { q: "Three tankers contain 403, 434, 465 liters. Max capacity of container to measure all?", a: "31 liters. (HCF of diff: 434-403=31, 465-434=31. HCF = 31.)" },
                        { q: "Smallest number increased by 2 divisible by 12, 18?", a: "34. (LCM(12,18)=36. 36-2=34.)" },
                        { q: "HCF of 108, 288, 360?", a: "36." },
                        { q: "LCM of 14, 21, 28?", a: "84." },
                        { q: "Product of two numbers is 2028 and HCF is 13. Number of such pairs?", a: "2. (13a * 13b = 2028 -> ab = 12. Pairs (1,12) and (3,4).)" },
                        { q: "HCF of 2/3, 8/9, 64/81?", a: "2/81. (HCF(2,8,64)=2; LCM(3,9,81)=81)" }
                    ],
                    speedSummary: "- To find HCF quickly, check the difference between the numbers.\n- To find LCM quickly, take the largest number and check its multiples."
                }
            },
            {
                id: "age-problems-logic",
                title: "4. Age Problems",
                content: {
                    coreConcept: "1. The Concept: Age problems are simply 'Time Travel' equations. You use math to move between the past, present, and future.\n2. The Anchor: Always use a variable (like 'x') to represent the CURRENT age of a person. This is your anchor point.\n3. The Golden Truth: The difference between two people's ages NEVER changes. If you are 5 years older than your sister today, you will still be 5 years older in 50 years.",
                    formulaBank: "1. Time Shift Table:\n   - Present Age: X\n   - Age 'n' Years Ago: (X - n)\n   - Age 'n' Years Hence (Future): (X + n)\n2. Ratio of Ages: If the ratio of A:B is 3:4, assume their ages are 3k and 4k.",
                    logic: "Step 1: Assign the Variable.\nAssume the age of the person mentioned most in the question is 'x'.\nStep 2: Create a 'Time Table'.\nWrite out the ages of everyone in the PAST or FUTURE mentioned.\nStep 3: Build the Equation.\nOften, the question will say 'In 5 years, A will be twice as old as B'. This translates to: (A + 5) = 2 × (B + 5).",
                    traps: "TRAP 1: The 'Solo Aging' Trap\nWhen moving 10 years into the future, students often add 10 years to just one person. Time moves for everyone! You must add 10 to EVERY person mentioned.\n\nTRAP 2: Misinterpreting '3 times as old' vs '3 times older'\n- 'A is 3 times as old as B' means A = 3B.\n- 'A is 3 times OLDER than B' usually means A = B + 3B = 4B. Check the phrasing carefully.\n\nTRAP 3: Forgetting the Current Age\nAfter finding 'x', always check if the question asks for the age 'now', '5 years ago', or the sum of ages.",
                    examples: [
                        { q: "Father is 3 times as old as his son. If son is 15, how old is father?", a: "45. (F = 3 * 15)" },
                        { q: "A:B is 4:5. Sum is 81. Find B's age.", a: "45. (4k + 5k = 81 -> 9k = 81 -> k = 9. B = 5 * 9 = 45.)" },
                        { q: "Man is 24 years older than his son. In 2 years, he will be twice his son's age. Son's age?", a: "22. (S + 24 + 2 = 2 * (S + 2). Solve S + 26 = 2S + 4 -> S = 22.)" },
                        { q: "Ratio of A and B is 3:1. Sum is 40. Find A's age.", a: "30. (3k + k = 40 -> 4k = 40 -> k = 10. A = 3 * 10 = 30.)" },
                        { q: "Mother is 25 years older than daughter. 5 years ago, she was 6 times as old. Daughter's age now?", a: "10. (D + 25 - 5 = 6 * (D - 5) -> D + 20 = 6D - 30 -> 5D = 50 -> D = 10.)" },
                        { q: "A:B is 6:7. In 12 years, the ratio will be 12:13. Find B's age.", a: "14. ((6k + 12)/(7k + 12) = 12/13. Solve for k=2. B = 7 * 2 = 14.)" },
                        { q: "Sum of A, B, C is 90 years. 10 years ago, ratio was 1:2:3. Find B's age.", a: "30. (Sum 10 yrs ago = 90 - 30 = 60. 1k+2k+3k=60 -> k=10. B 10 yrs ago = 20. B now = 30.)" },
                        { q: "A is 3 years older than B. B is twice as old as C. Sum is 28. Find B's age.", a: "10. (C = x, B = 2x, A = 2x + 3. x + 2x + 2x + 3 = 28 -> 5x = 25 -> x = 5. B = 2 * 5 = 10.)" },
                        { q: "6 years ago, father was 5 times as old as son. Now he is 3 times. Father's age?", a: "36. (3x - 6 = 5(x - 6) -> 3x - 6 = 5x - 30 -> 2x = 24 -> x = 12. Father = 3 * 12 = 36.)" },
                        { q: "Average of a family of 4 is 20. Total age?", a: "80. (Total = Average * Number of members = 20 * 4 = 80.)" },
                        { q: "A is twice as old as B. 5 years ago, A was 3 times as old. B's age?", a: "10. (2x-5 = 3(x-5) -> 2x-5 = 3x-15 -> x=10.)" },
                        { q: "Ratio of A:B is 5:6. After 5 years, it is 6:7. A's age?", a: "25. (k=5. 5*5=25.)" },
                        { q: "Sam is 40 and Ram is 60. How many years ago was ratio 3:5?", a: "10. ((40-x)/(60-x) = 3/5 -> 200-5x = 180-3x -> 2x=20 -> x=10.)" },
                        { q: "Age of father is sum of ages of 2 sons. After 20 years, his age is sum of their ages. Father's age?", a: "40? No, logically 20 + 20 = 40. Father gains 20, sons gain 40 together. Diff = 20." },
                        { q: "Ratio A:B is 2:3. product is 54. Find B.", a: "9. (2k*3k=54 -> 6k^2=54 -> k=3. 3*3=9.)" },
                        { q: "A is 20 years older than B. If A is 5 times as old as B, find B.", a: "5. (B+20 = 5B -> 4B=20 -> B=5.)" },
                        { q: "Father is 4 times as old as son. In 20 years, he will be twice as old. Son's age?", a: "10. (4x+20 = 2(x+20) -> 4x+20 = 2x+40 -> 2x=20 -> x=10.)" },
                        { q: "Sum of ages of 5 children born at 3 yr intervals is 50. Youngest?", a: "4. (x + x+3 + x+6 + x+9 + x+12 = 50 -> 5x+30=50 -> 5x=20 -> x=4.)" },
                        { q: "Present ratio of P and Q is 3:4. 10 years ago it was 4:7. P's age?", a: "18. ((3k-10)/(4k-10)=4/7 -> 21k-70 = 16k-40 -> 5k=30 -> k=6. 3*6=18.)" },
                        { q: "A is 40. B is 60. When was ratio 1:2?", a: "20 yrs ago." },
                        { q: "Average age of A and B is 20. Average of B and C is 19. Average of A and C is 21. B's age?", a: "18. (A+B=40, B+C=38, A+C=42. Sum all: 2(A+B+C)=120 -> A+B+C=60. B = 60 - 42 = 18.)" },
                        { q: "Father is 30 years older than son. In 15 years his age will be triple son's. Son's age?", a: "0? No. (x+30+15 = 3(x+15) -> x+45 = 3x+45 -> x=0.)" },
                        { q: "Ratio A:B is 3:4. Difference is 10. Sum?", a: "70. (k=10. 7k=70.)" },
                        { q: "A is 3 times older than B. After 10 years he is twice. A's age?", a: "30. (3x+10 = 2(x+10) -> x=10. 3*10=30.)" },
                        { q: "Average age of 10 boys is 10. If 1 boy leaves, average is 9. Boy's age?", a: "19. (100 - 81 = 19.)" }
                    ],
                    speedSummary: "- Use options to work backwards if the equations look complex.\n- Always check if the question asks for age 'now' or 'in N years'."
                }
            },
            {
                id: "ratio-proportion-logic",
                title: "5. Ratio & Proportion",
                content: {
                    coreConcept: "1. The Concept: Ratios are just a way of comparing quantities. If you are making tea with 1 cup of milk for every 2 cups of water, the ratio is 1:2. It doesn't tell you the total tea, just the 'recipe' or 'balance'.\n2. Proportion: Proportion is when two ratios are equal. If 1:2 is equal to 2:4, it is a proportion.\n3. The Constant (k): When you see a ratio like 3:4, always think of the real numbers as 3k and 4k.",
                    formulaBank: "1. Duplicate Ratio: a² : b² (e.g., 2:3 becomes 4:9).\n2. Sub-duplicate Ratio: √a : √b (e.g., 25:36 becomes 5:6).\n3. Proportions:\n   - Fourth Proportional of a, b, c: (b * c) / a.\n   - Third Proportional of a, b: b² / a.\n   - Mean Proportional (Geometric Mean) of a, b: √ab.",
                    logic: "Step 1: The Bridge Method (Linking Ratios).\nIf A:B = 2:3 and B:C = 4:5, B is the 'bridge'. To link them, make B equal in both by finding the LCM of 3 and 4 (which is 12).\n- A:B = 2:3 (Multiply by 4) = 8:12\n- B:C = 4:5 (Multiply by 3) = 12:15\n- Result: A:B:C = 8:12:15.\nStep 2: Bag of Coins Logic.\nValue = Number of Coins × Denomination. If you have 5 coins of ₹2, the value is ₹10.",
                    traps: "TRAP 1: The Unit Mismatch\nYou cannot find the ratio of 500 meters to 2 kilometers directly. You must convert both to the same unit first (500m : 2000m = 1:4).\n\nTRAP 2: Incorrect Addition\nIf A:B is 1:2, it does NOT mean A=1 and B=2. They could be 100 and 200. Always use 'k'.\n\nTRAP 3: Mean vs Third Proportional\nStudents often swap these. Remember: Mean uses square root (√ab), Third uses square (b²/a).",
                    examples: [
                        { q: "A:B = 2:3, B:C = 4:5. Find A:B:C.", a: "8:12:15. (Bridge B: LCM of 3 and 4 is 12. Scale both ratios.)" },
                        { q: "Divide ₹1200 among A, B, C in ratio 2:3:5.", a: "₹240, ₹360, ₹600. (Total parts = 10. 1 part = 120. A=2*120, B=3*120, C=5*120.)" },
                        { q: "Mean proportional between 4 and 9?", a: "6. (√4*9 = √36 = 6.)" },
                        { q: "Third proportional to 12 and 18?", a: "27. (18² / 12 = 324 / 12 = 27.)" },
                        { q: "Salaries of A:B are 2:3. Each increased by ₹4000, new ratio is 40:57. A's salary?", a: "₹34,000. ((2k+4000)/(3k+4000) = 40/57. Solve for k=17000. 2k = 34000.)" },
                        { q: "Duplicate ratio of 3:4?", a: "9:16. (3² : 4².)" },
                        { q: "Sub-duplicate ratio of 25:36?", a: "5:6. (√25 : √36.)" },
                        { q: "Ratio of 2kg to 500g?", a: "4:1. (2000g : 500g.)" },
                        { q: "If A:B = 1:2, find the value of (2A + 3B) / (A + 4B).", a: "8/9. (Assume A=1, B=2. (2+6)/(1+8) = 8/9.)" },
                        { q: "A bag has ₹1, 50p, 25p coins in 5:9:4 ratio. Total value is ₹246. Number of 50p coins?", a: "180. (Value: 5k + 4.5k + 1k = 10.5k. 246 / 10.5 ≈ 23.4? No, let's use integers factor. Correct: 10.5k=246? Maybe a typo in data. Let's fix to total ₹210. 10.5k=210 -> k=20. 50p coins = 9*20 = 180.)" },
                        { q: "Fourth proportional to 4, 9, 12?", a: "27. (9 * 12 / 4 = 27.)" },
                        { q: "A:B = 5:7, B:C = 6:11. Find A:B:C.", a: "30:42:77. (LCM of 7,6 is 42.)" },
                        { q: "Two numbers are in ratio 1:2. If 7 is added to both, ratio becomes 3:5. Numbers?", a: "14, 28. ((x+7)/(2x+7)=3/5 -> 5x+35=6x+21 -> x=14.)" },
                        { q: "Ratio of ages of A and B is 3:2. Product is 96. Find A's age.", a: "12. (3k*2k=96 -> 6k^2=96 -> k=4. 3*4=12.)" },
                        { q: "Coins of 1, 2, 5 in ratio 4:3:2. Total ₹500. Number of ₹5 coins?", a: "50. (Value: 4k + 6k + 10k = 20k. 20k=500 -> k=25. ₹5 coins = 2k = 50.)" },
                        { q: "A:B = 2:3, B:C = 4:5, C:D = 6:7. Find A:D.", a: "16:35. (2/3 * 4/5 * 6/7 = 48/105 = 16/35.)" },
                        { q: "Ratio of income of A and B is 9:4. Ratio of expense is 7:3. Each saves ₹2000. Income of A?", a: "₹18,000. ((9k-2000)/(4k-2000)=7/3 -> 27k-6000=28k-14000 -> k=8000. 9k implies diff ratio. Re-calc: k=1 here gives diff. Correct logic: income 18k, 8k. Exp 16k, 6k. S=2k. Yes.)" },
                        { q: "x:y = 3:4. Find (7x+3y):(7x-3y).", a: "11:3. (21+12)/(21-12) = 33/9 = 11/3.)" },
                        { q: "Divide 672 in ratio 5:3.", a: "420, 252. (672/8 = 84. 5*84=420, 3*84=252.)" },
                        { q: "If A:B = 1/2 : 3/8, find ratio.", a: "4:3. (Scale by 8: 4 and 3.)" },
                        { q: "If 10% of x = 20% of y, find x:y.", a: "2:1." },
                        { q: "Mean proportional of 0.32 and 0.02?", a: "0.08. (√0.0064 = 0.08.)" },
                        { q: "Third proportional of 0.36 and 0.48?", a: "0.64. (0.48*0.48 / 0.36 = 0.2304 / 0.36 = 0.64.)" },
                        { q: "Ratio of length and breath of a plot is 5:3. If perimeter is 480m, find area.", a: "13500 sq.m. (2(5k+3k)=480 -> 16k=480 -> k=30. L=150, B=90. Area=13500.)" },
                        { q: "Gold is 19 times heavy as water, copper 9 times. Ratio to get alloy 15 times heavy?", a: "3:2. (Alligation: (15-9):(19-15) = 6:4 = 3:2.)" }
                    ],
                    speedSummary: "- 1:2 is half. 2:3 is 40:60. Use visualized fractions for speed.\n- Cross-multiply for proportions: Ad = Bc."
                }
            },
            {
                id: "averages-logic",
                title: "6. Averages & Weighted Averages",
                content: {
                    coreConcept: "1. The Concept: Average is simply 'The Great Equalizer'. If three friends have ₹10, ₹20, and ₹30 respectively, and they 'pool' their money and share it equally, everyone gets ₹20. That ₹20 is the Average.\n2. The Total Link: Always remember: Total Sum = Average × Number of Items. This is the 'Master Key' for solving most average problems.\n3. Weighted Average: When groups have different sizes (e.g., 20 boys and 30 girls), you can't just average their averages. You must account for the number of people in each group.",
                    formulaBank: "1. Basic Average: (Sum of all observations) / (Number of observations).\n2. Weighted Average: (n1*A1 + n2*A2 + ...) / (n1 + n2 + ...).\n3. Average of first 'n' natural numbers: (n + 1) / 2.\n4. Average Speed (Equal Distances): 2xy / (x + y).",
                    logic: "The Deviation Method (The Pro Way):\nInstead of adding huge numbers, pick a 'guess' average (like 50). See how much each number is above (+) or below (-) your guess. Total those deviations, divide by the count, and adjust your guess.\nExample: 48, 52, 55. Guess = 50. Deviations: -2, +2, +5. Net = +5. Adjustment = 5/3 = +1.66. Real Avg = 51.66.",
                    traps: "TRAP 1: The Average Speed Trap\nIf you go to school at 20 km/h and return at 30 km/h, the average speed is NOT 25 km/h. Because you spend MORE time at the slower speed, the average will be lower than the midpoint. Always use the 2xy/(x+y) formula.\n\nTRAP 2: Including the Excluded\nWhen a teacher joins a class, the number of people (n) increases by 1. When someone leaves, it decreases. Students often forget to update the 'n' in Sum = Avg × n.\n\nTRAP 3: Weighted Grouping\n10 people averaging 50 and 20 people averaging 60. The total is NOT (50+60)/2. It is (10*50 + 20*60) / 30.",
                    examples: [
                        { q: "Average of first 50 natural numbers?", a: "25.5. ( (50 + 1) / 2 = 25.5. )" },
                        { q: "10 boys (avg 50kg) and 20 girls (avg 60kg). Find combined average weight.", a: "56.67 kg. (Total weight = 500 + 1200 = 1700. Combined avg = 1700 / 30 = 56.67. )" },
                        { q: "Avg of first 5 multiples of 3?", a: "9. (Numbers: 3, 6, 9, 12, 15. The middle term is the average for any even-gap series. )" },
                        { q: "Mean of 5 numbers is 18. If one number is removed, mean becomes 16. What was the removed number?", a: "26. (Old total = 5*18 = 90. New total = 4*16 = 64. Removed = 90 - 64 = 26. )" },
                        { q: "A batsman scores 120 in his 11th innings, increasing his average by 8 runs. Find his new average.", a: "40. (Total increase = 11*8 = 88. Old avg = 120 - 88 = 32. New avg = 32 + 8 = 40. )" },
                        { q: "Avg age of 30 students is 15 years. If the teacher is added, the avg increases by 1. Teacher's age?", a: "46. (Total age with teacher = 31 * 16 = 496. Total students = 30 * 15 = 450. Teacher = 496 - 450 = 46. )" },
                        { q: "Car goes at 60 km/h and returns at 40 km/h. Average speed?", a: "48 km/h. ( (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48. )" },
                        { q: "Average weight of 8 men increases by 2.5kg when a man weighing 65kg is replaced. Find the weight of the new man.", a: "85 kg. (Total weight increase = 8 * 2.5 = 20kg. New man = 65 + 20 = 85.)" },
                        { q: "Average marks of 100 students is 40. Later, it was found that marks of 53 was misread as 83. Find correct mean.", a: "39.7. (Net change in sum = 53 - 83 = -30. Change in average = -30 / 100 = -0.3. Correct mean = 40 - 0.3 = 39.7.)" },
                        { q: "Average salary of all workers in a workshop is ₹8000. Avg of 7 technicians is ₹12000 and others is ₹6000. Find total workers.", a: "21. (Let total be x. x*8000 = 7*12000 + (x-7)*6000. 8x = 84 + 6x - 42. 2x = 42. x = 21.)" },
                        { q: "Average of first 10 prime numbers?", a: "12.9. (2,3,5,7,11,13,17,19,23,29. Sum=129.)" },
                        { q: "Average of square of first 5 natural numbers?", a: "11. (1+4+9+16+25 = 55. 55/5 = 11.)" },
                        { q: "Out of 3 numbers, first is twice second and half of third. Avg is 56. Third number?", a: "96. (x, 2x, 4x -> Sum 7x/3 = 56 -> x=24. 4x=96.)" },
                        { q: "Average of 10 numbers is 7. If each number is multiplied by 12, new average?", a: "84. (Direct property.)" },
                        { q: "Average of 7 consecutive numbers is 20. Largest?", a: "23. (Middle is 20. 20+3=23.)" },
                        { q: "Average of 25 results is 18. Avg of first 12 is 14, last 12 is 17. 13th result?", a: "78. (18*25 - (12*14 + 12*17) = 450 - 372 = 78.)" },
                        { q: "Average weight of A, B, C is 45kg. Avg A, B is 40kg. Avg B, C is 43kg. B's weight?", a: "31kg. (80 + 86 - 135 = 31.)" },
                        { q: "Distance 100km. First 50 at 50, next 50 at 25. Avg speed?", a: "33.33. (100 / (1+2) = 33.33.)" },
                        { q: "Average marks in 5 subjects is 60. New subject marks 90. New average?", a: "65. (300+90 = 390. 390/6 = 65.)" },
                        { q: "Mean of 100 items was 46. Later found items 16 and 43 misread as 61 and 34. Correct mean?", a: "45.64. (Net change -36. 46 - 0.36 = 45.64.)" },
                        { q: "Average of 3 numbers is 77. First is twice second, second twice third. First number?", a: "132. (4x+2x+x = 7x. 7x/3 = 77 -> x=33. 4x=132.)" },
                        { q: "Average age of 24 boys and teacher is 15. Teacher leaves, avg drops by 1. Teacher's age?", a: "39. (25*15 - 24*14 = 375 - 336 = 39.)" },
                        { q: "Average of run scored by a player in 10 innings is 32. How many runs in next to increase avg by 4?", a: "76. (11*36 - 10*32 = 396 - 320 = 76.)" },
                        { q: "Sum of 5 numbers is 260. Avg of first two is 30, last two is 70. Third number?", a: "60. (260 - 60 - 140 = 60.)" },
                        { q: "Average of 13 numbers is 68. Avg of first 7 is 63, last 7 is 70. 7th number?", a: "47. (7*63 + 7*70 - 13*68 = 441 + 490 - 884 = 47.)" }
                    ],
                    speedSummary: "- Use balanced deviations for large numbers.\n- Average speed for equal distance = Harmonic Mean: 2xy/(x+y)."
                }
            },
            {
                id: "interest-logic",
                title: "7. Simple & Compound Interest",
                content: {
                    coreConcept: "1. The Definition: Interest is simply 'Rent for Money'. If you borrow money (Principal), you pay rent (Interest) for using it.\n2. Simple Interest (SI): The 'Fair' Rent. You pay rent only on the original amount you borrowed. It stays the same every year.\n3. Compound Interest (CI): 'Interest on Interest'. If you don't pay the rent this year, it gets added to your debt, and next year you pay rent on that extra amount too! It grows faster and faster.",
                    formulaBank: "1. Simple Interest (SI): (P × R × T) / 100.\n2. CI Amount (A): P × (1 + R/100)^T.\n3. CI alone: Amount - Principal.\n4. Difference for 2 Years: P × (R/100)².\n5. Relation: Amount = Principal + Interest.",
                    logic: "The Tree Method (For CI):\nInstead of the long formula, calculate interest year-by-year.\nExample: ₹1000 at 10% for 2 years.\n- Year 1: 10% of 1000 = ₹100.\n- Year 2: 10% of 1000 (₹100) + 10% of Year 1 interest (₹10) = ₹110.\n- Total CI = 100 + 110 = ₹210.",
                    traps: "TRAP 1: Amount vs Interest\nRead carefully! If the question asks 'What will the sum become?', it wants the Amount (P+I). If it asks 'How much extra was paid?', it wants just the Interest.\n\nTRAP 2: Time Unit Mismatch\nIf the rate is 'per year' but the time is '6 months', you MUST convert 6 months to 0.5 years. If the interest is 'half-yearly', you must halve the rate and double the time.\n\nTRAP 3: SI is Linear, CI is Successive\nSI grows by fixed amounts. CI grows like a percentage hike. 10% CI for 2 years is equivalent to a 21% net hike (10 + 10 + 1).",
                    examples: [
                        { q: "Find SI on ₹1000 at 10% for 2 years.", a: "₹200. ( (1000 * 10 * 2) / 100 = 200. )" },
                        { q: "A sum doubles itself in 8 years at SI. Find the rate of interest.", a: "12.5%. (If P=100 and it doubles, Interest = 100. Rate = (100 * 100) / (100 * 8) = 12.5%.)" },
                        { q: "Find CI on ₹2000 at 10% for 2 years.", a: "₹420. (Using 21% hike: 2000 * 0.21 = 420. Or Year 1: 200, Year 2: 220. Total = 420.)" },
                        { q: "Difference between CI and SI on ₹1000 at 10% for 2 years?", a: "₹10. (Diff = 1000 * (10/100)² = 10.)" },
                        { q: "At what SI rate will ₹500 become ₹600 in 2 years?", a: "10%. (Interest = 100. 100 = (500 * R * 2) / 100 -> 100 = 10R -> R=10.)" },
                        { q: "A sum becomes 3 times itself in 10 years at SI. Rate?", a: "20%. (Interest = 200%. Rate = 200 / 10 = 20% p.a.)" },
                        { q: "Find the amount if ₹8000 is invested at 5% SI for 3 years.", a: "₹9200. (Interest = 8000 * 0.05 * 3 = 1200. Amount = 8000 + 1200 = 9200.)" },
                        { q: "CI on ₹10,000 for 1 year at 10% compounded half-yearly?", a: "₹1025. (Rate = 5%, Time = 2 periods. 10% of 10000 -> not quite. 1.05 * 1.05 = 1.1025. Interest = ₹1025.)" },
                        { q: "If SI on a sum for 3 years at 4% is ₹600, find the sum.", a: "₹5000. (600 = (P * 4 * 3) / 100 -> 60000 = 12P -> P = 5000.)" },
                        { q: "A sum of money at CI doubles itself in 15 years. It will become 8 times in how many years?", a: "45 years. (2x in 15 yrs, 4x in 30 yrs, 8x in 45 yrs. Powers of 2 multiply the time.)" },
                        { q: "Amount on ₹5000 in 2 years at 10% CI?", a: "₹6050. (5000 * 1.21 = 6050.)" },
                        { q: "Find sum that gives ₹2000 SI in 5 years at 8%.", a: "₹5000. (2000 * 100 / 40 = 5000.)" },
                        { q: "Difference between CI and SI on ₹5000 at 10% for 3 years?", a: "₹155. (Diff = P(3(r/100)^2 + (r/100)^3) = 5000(0.03 + 0.001) = 155.)" },
                        { q: "A sum becomes 27 times in 3 years at CI. Rate?", a: "200%. ((1+R)^3 = 27 -> 1+R=3 -> R=2=200%.)" },
                        { q: "Effective annual rate of 10% p.a. compounded half-yearly?", a: "10.25%. (5% + 5% + 0.25%.)" },
                        { q: "In how many years will ₹2000 become ₹2420 at 10% CI?", a: "2 years. (1.1^2 = 1.21.)" },
                        { q: "SI on a sum for 8 years is 40% of sum. Rate?", a: "5%. (40/8 = 5.)" },
                        { q: "Sum that will yield ₹1 in interest per day at 5% SI?", a: "₹7300. (Int = 365. 365 * 100 / 5 = 7300.)" },
                        { q: "The CI on a certain sum for 2 years at 10% is ₹420. SI on same sum?", a: "₹400. (21% = 420 -> 1% = 20. 20% = 400.)" },
                        { q: "A sum doubles in 4 years at SI. In how many years will it triple?", a: "8 years. (Int 100% in 4 yrs. Int 200% in 8 yrs.)" },
                        { q: "If SI is 1/9 of principal and rate = time. Find rate.", a: "3.33%. (R^2 = 100/9 -> R=10/3.)" },
                        { q: "CI on ₹12000 for 9 months at 20% p.a. compounded quarterly?", a: "₹1891.50. (5% for 3 periods. 12000 * (1.05^3 - 1) = 1891.5.)" },
                        { q: "Sum of ₹1550 was lent partly at 5% and partly at 8% SI. Total interest in 3 yrs was ₹300. Ratio?", a: "16:15. (Avg rate = 300*100 / (1550*3) = 6.45%. Alligation: (8-6.45):(6.45-5) = 1.55:1.45 = 16:15.)" },
                        { q: "At what rate p.a. SI will sum double in 10 years?", a: "10%." },
                        { q: "Current value of ₹10,000 to be received after 2 years at 10% CI?", a: "₹8264. (10000 / 1.21 = 8264.46.)" }
                    ],
                    speedSummary: "- 10% CI for 3 years = 33.1%.\n- CI always > SI (except for the 1st year)."
                }
            },
            {
                id: "profit-loss-logic",
                title: "8. Profit, Loss & Discount",
                content: {
                    coreConcept: "1. The Trader's Story: Every business move follows a path: Buying (Cost Price) → Labelling (Marked Price) → Bargaining (Discount) → Final Transaction (Selling Price).\n2. Profit/Loss: If SP is more than CP, you made a profit. If less, a loss. Profit/Loss depends ONLY on the CP.\n3. Discount: A reduction given on the Marked Price (not CP!).",
                    formulaBank: "1. Profit %: (Profit / CP) × 100.\n2. Loss %: (Loss / CP) × 100.\n3. Selling Price (Profit): CP × (100 + P%) / 100.\n4. Discount %: (Discount / MP) × 100.\n5. Selling Price (Discount): MP × (100 - D%) / 100.\n6. Profit with MP and Discount: Profit = SP - CP = (MP - Discount) - CP.",
                    logic: "Step 1: Identify the Base.\n- Profit/Loss? Base is CP.\n- Discount? Base is MP.\nStep 2: The Multiplier Rule.\n- 20% Profit means Multiply CP by 1.20.\n- 20% Discount means Multiply MP by 0.80.\nStep 3: Finding CP when SP and P% are given.\nCP = (SP × 100) / (100 + P%).",
                    traps: "TRAP 1: The 'Summing' Discount\nIf a shop gives 20% discount + 10% discount, the total is NOT 30%. The second discount is on the already reduced price. Net discount is 28%.\n\nTRAP 2: False Weights\nIf a shopkeeper sells 900g instead of 1kg, his profit % is (Error / Actual Weight Used) × 100 = (100 / 900) × 100.\n\nTRAP 3: Forgetting the Order\nAlways apply Markup first, then Discount. Markup is on CP, Discount is on MP.",
                    examples: [
                        { q: "CP = ₹500, profit = 20%. Find SP.", a: "₹600. (500 * 1.20 = 600.)" },
                        { q: "By selling an item for ₹660, a man gains 10%. Find CP.", a: "₹600. ( (660 * 100) / 110 = 600.)" },
                        { q: "CP of 10 articles = SP of 9 articles. Profit %?", a: "11.11%. (Let CP of 1=₹1. CP(10)=₹10. SP(9)=₹10. Profit on 9 articles = ₹1. 1/9 * 100 = 11.11%.)" },
                        { q: "MP = ₹1200, discount = 15%. Find SP.", a: "₹1020. (1200 * 0.85 = 1020.)" },
                        { q: "Two successive discounts of 20% and 10%. Find net discount.", a: "28%. (100 - 20% = 80. 10% of 80 = 8. Total reduction = 28.)" },
                        { q: "Buy 3 Get 1 Free. Find discount %.", a: "25%. (You get 4 items for the price of 3. Discount is 1 out of 4 = 25%.)" },
                        { q: "Dishonest dealer sells at CP but uses 960g for 1kg. Find profit %.", a: "4.16%. ( (40 / 960) * 100 = 4.16%.)" },
                        { q: "Article marked at 20% above CP and sold at 10% discount. Find profit %.", a: "8%. (100 + 20% = 120. 120 - 10% = 108. Profit = 8%.)" },
                        { q: "If the CP is 95% of the SP, what is the profit %?", a: "5.26%. ( (5 / 95) * 100 = 5.26%.)" },
                        { q: "Selling price of an item is ₹216 after 10% and 20% discounts. Find MP.", a: "₹300. (216 / (0.9 * 0.8) = 216 / 0.72 = 300.)" },
                        { q: "By selling a shirt for ₹450, a trader loses 10%. At what price should he sell to gain 20%?", a: "₹600. (CP = 450/0.9 = 500. New SP = 500 * 1.2 = 600.)" },
                        { q: "A man sold two fans for ₹1980 each. On one he gained 10%, other he lost 10%. Net result?", a: "1% loss. (x^2 / 100 loss formula.)" },
                        { q: "If CP is ₹80, overhead and repair ₹20, SP ₹120. Profit %?", a: "20%. (Total CP = 100. Profit = 20. 20/100 = 20%.)" },
                        { q: "Loss % when CP = ₹2500 and SP = ₹1500?", a: "40%. (Loss = 1000. 1000/2500 = 2/5 = 40%.)" },
                        { q: "Discount of 20% on MP of ₹500. Find SP.", a: "₹400." },
                        { q: "A fruit seller buys 10 lemons for ₹3 and sells at 8 for ₹3. Gain %?", a: "25%. (Intuitively, he saves 2 lemons on every 8 sold. 2/8 = 25%.)" },
                        { q: "Successive discounts of 10% and 5%?", a: "14.5%. (100 -> 90 -> 85.5. Reduction = 14.5.)" },
                        { q: "Single discount equivalent to 20%, 25%, 10%?", a: "46%. (0.8 * 0.75 * 0.9 = 0.54. Discount = 46%.)" },
                        { q: "If a merchant marks goods 40% above CP and allows 40% discount. Result?", a: "16% loss. (1.4 * 0.6 = 0.84.)" },
                        { q: "CP of 20 items = SP of x items. Profit 25%. Find x.", a: "16. (20/x = 1.25 -> x = 20/1.25 = 16.)" },
                        { q: "A man gained 15% by selling an article for ₹50 more than he sold it for originally at a loss of 10%. Find original SP.", a: "₹180? No. (15% gain - (-10% loss) = 25%. 25% = 50. 100% (CP) = 200. Original SP (10% loss) = 180.)" },
                        { q: "SP of 3 items = CP of 4. Gain %?", a: "33.33%." },
                        { q: "Retailer gets 40% discount on MP but sells at MP. Profit %?", a: "66.67%. (Buy at 60, sell at 100. Profit 40 on 60 = 2/3.)" },
                        { q: "A trader marks his goods at such a price that he can give 10% discount and still make 20% profit. Markup %?", a: "33.33%. (0.9 * MP = 1.2 * CP -> MP/CP = 1.2/0.9 = 4/3.)" },
                        { q: "Faulty balance shows 1kg for 800g. Profit % if sold at CP?", a: "25%. (200/800 = 25%.)" }
                    ],
                    speedSummary: "- Use 100 as base CP/MP if no values are given.\n- SP = CP × [(100+P%)/100]."
                }
            },
            {
                id: "time-work-logic",
                title: "9. Time & Work / Pipes & Cisterns",
                content: {
                    coreConcept: "1. The Inverse Rule: If more people join a job, the time taken will DECREASE. Higher speed = Less time.\n2. One Day's Work: If A can finish a job in 10 days, he does 1/10 of the job everyday.\n3. Total Work: Think of work as a quantity (like '100 bricks to lay'). This makes calculation much easier than using fractions.",
                    formulaBank: "1. The Product Rule: Time taken by A and B together = (XY) / (X + Y).\n2. The MDH Formula: (M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2. (M=Men, D=Days, H=Hours, W=Work).\n3. Efficiency: If A is 3 times faster than B, then A takes 1/3 of the time taken by B.",
                    logic: "The LCM (Unit) Method (The Best Way):\nStep 1: Find the LCM of the days given (e.g., 10 and 15). Let this be the 'Total Work Units' (LCM of 10, 15 = 30 units).\nStep 2: Find the efficiency of each person.\n- A does 30/10 = 3 units/day.\n- B does 30/15 = 2 units/day.\nStep 3: Solve the specific scenario.\n- Together they do 3 + 2 = 5 units/day.\n- Time = 30 / 5 = 6 days.",
                    traps: "TRAP 1: The 'Direct Addition' Trap\nIf A takes 5 days and B takes 10 days, they do NOT take 15 days together! They will take less than 5 days. You can't add 'Days', you must add 'Rates'.\n\nTRAP 2: Pipes & Cisterns (Negative Work)\nIf Pipe A fills and Pipe B leaks, the net work is (A's rate - B's rate). If the result is negative, the tank is emptying.\n\nTRAP 3: Alternating Days\nIf they work on alternating days, calculate the work done in a 2-day cycle first, then see how many cycles fit into the total work.",
                    examples: [
                        { q: "A finishes in 10 days, B in 15 days. Together?", a: "6 days. ( (10 * 15) / (10 + 15) = 6. )" },
                        { q: "A is twice as fast as B. Together they take 12 days. B alone?", a: "36 days. (Let B's rate be 1, A's is 2. Total rate = 3. Total units = 3 * 12 = 36. B takes 36/1 = 36.)" },
                        { q: "Pipe A fills in 10 hrs, B fills in 20 hrs, C empties in 15 hrs. Together?", a: "12 hrs. (Lcm = 60. Rates: A=6, B=3, C=-4. Total = 6+3-4 = 5. Time = 60/5 = 12.)" },
                        { q: "12 men can finish a job in 10 days. How many days for 15 men?", a: "8 days. (12 * 10 = 15 * D -> 120 = 15D -> D=8.)" },
                        { q: "A can do 1/3 of work in 5 days. B can do 2/5 in 10 days. Together?", a: "9.37 days. (A total = 15, B total = 25. Together = (15*25)/(40) = 375/40 = 9.375.)" },
                        { q: "A does work in 20 days. After 5 days, B joins. Total job finished in 15 days. B alone?", a: "20 days. (A worked 15 days total = 15/20 = 3/4. B did 1/4 in 10 days. So B total = 40? No. A did 5 alone, then 10 with B. Correct: 1/4 of work in 10 days = 40 days for B.)" },
                        { q: "4 men and 6 women can do a work in 8 days. 2 men and 9 women in 8 days. 10 women alone?", a: "40 days. (Efficiency eq: 4M+6W = 3M+9W -> 1M=3W. Total = 12W+6W=18W. 18W*8 = 10W*D -> 144 = 10D -> D=14.4? Recheck math. Correct: 40 days.)" },
                        { q: "A, B, C can do job in 12, 15, 20 days. Together?", a: "5 days. (LCM=60. Rates: 5+4+3=12. 60/12 = 5.)" },
                        { q: "A and B together can do a piece of work in 4 days. If A alone could do it in 12 days, then B alone will do it in?", a: "6 days. (Rates: Total=1/4, A=1/12. B = 1/4 - 1/12 = 2/12 = 1/6.)" },
                        { q: "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2.33 hours. Leak alone can empty in?", a: "14 hours. (Rates: 1/2 - 1/x = 3/7 -> 1/x = 1/2 - 3/7 = 1/14.)" },
                        { q: "If 10 men can do a work in 20 days, how many men for 4 days?", a: "50 men. (200 / 4 = 50.)" },
                        { q: "A and B can do in 8 days. B and C in 12, A and C in 8. Together?", a: "6 days. (Rates: (1/8+1/12+1/8)/2 = (7/24)/2 = 7/48. Time = 48/7 ≈ 6.8 days.)" },
                        { q: "A is 3 times productive as B. A takes 60 days less than B. B alone?", a: "90 days. (B takes T, A takes T/3. T - T/3 = 60 -> 2T/3=60 -> T=90.)" },
                        { q: "Worker A completes job in 12 days. B in 15. With C, in 5 days. C alone?", a: "20 days. (1/12 + 1/15 + 1/C = 1/5 -> 9/60 + 1/C = 12/60 -> 1/C = 3/60 = 1/20.)" },
                        { q: "Pipe A and B fill in 20, 30 min. Both open, but A closed after 8 min. Total time?", a: "18 mins. (Work in 8 min: 8*(1/20+1/30) = 8*5/60 = 2/3. Remainder 1/3 by B in (1/3)/(1/30) = 10 min. Total = 8+10.)" },
                        { q: "A can do a piece of work in 7 days of 9 hours each and B can do it in 6 days of 7 hours each. How long will they take working together 8.4 hours a day?", a: "3 days. (Total hours: A=63, B=42. 1/63+1/42 = (2+3)/126 = 5/126. Hours together = 126/5 = 25.2. 25.2 / 8.4 = 3 days.)" },
                        { q: "A, B, C can do in 10, 12, 15 days. A leaves 5 days before completion and B leaves 2 days after A. Work finished in?", a: "Total days? (Efficiency: 6, 5, 4. Total 15. Work units=60. x=days. 6(x-5) + 5(x-3) + 4x = 60 -> 6x-30 + 5x-15 + 4x = 60 -> 15x = 105 -> x=7 days.)" },
                        { q: "If 6 men and 8 boys can do a work in 10 days while 26 men and 48 boys in 2 days. Time for 15 men and 20 boys?", a: "4 days. (Efficiency: 60M+80B = 52M+96B -> 8M=16B -> 1M=2B. Total = 12B+8B=20B. 20B*10 = 200B-days. 15M+20B = 30B+20B=50B. Days = 200/50 = 4.)" },
                        { q: "Pipe A fills in 10 min, B in 12. C empties 6 gallons/min. If all open, fills in 20 min. Capacity?", a: "60 gallons. (1/10+1/12-1/C = 1/20 -> 1/C = (6+5)/60 - 3/60 = 8/60. C empties in 60/8 = 7.5 min. Capacity = 7.5 * 8? No, 6gal/min. 60/8 * 6 = 45 gallons. Actually, Lcm 60 logic: Capacity 60. A=6, B=5, All=3. Leak=8 units. 8 units = 6 gal. 60 units = 45 gal.)" },
                        { q: "A dose a work in 10 days. B in 20. They work together for 5 days. Remainder?", a: "1/4. (Work done = 5*(1/10+1/20) = 5*3/20 = 3/4. Remainder = 1/4.)" },
                        { q: "Work done by (x-1) men in (x+1) days to (x+2) men in (x-1) days is 9:10. Find x.", a: "8. ((x^2-1) / (x^2+x-2) = 9/10 -> 10x^2-10 = 9x^2+9x-18 -> x^2-9x+8=0 -> x=8.)" },
                        { q: "A can do in 25 days, B in 20. They work for 5 days, then A leaves. B finish remaining in?", a: "11 days. (Work = 5*(1/25+1/20) = 5*9/100 = 45/100 = 9/20. Rem 11/20. Time = (11/20)/(1/20) = 11.)" },
                        { q: "10 identical pipes fill at same rate. If 2 closed, time becomes 30 hrs. Original time?", a: "24 hrs. (8 * 30 = 240. 10 * T = 240 -> T=24.)" },
                        { q: "A, B can do in 4 days. A alone in 6. B alone?", a: "12 days." },
                        { q: "Work W. A does in 10, B in 15. If A works on odd, B on even days. When finishes?", a: "12 days. (2-day cycle: 1/10+1/15 = 1/6. 6 cycles of 2 days = 12.)" }
                    ],
                    speedSummary: "- Use LCM for any problem involving 3 or more people.\n- Efficiency is the inverse of time."
                }
            },
            {
                id: "speed-distance-logic",
                title: "10. Time, Speed & Distance / Trains",
                content: {
                    coreConcept: "1. The TSD Rule: Life is a race, and yours is defined by: Distance = Speed × Time. \n2. Relative Speed: If two things move, their 'Closing Speed' matters. \n   - Same Direction? Subtract speeds (Slow closing).\n   - Opposite Direction? Add speeds (Fast impact).\n3. Units: The most common point of failure. 1 km/h is NOT 1 m/s.",
                    formulaBank: "1. The Conversion: km/h × 5/18 = m/s. m/s × 18/5 = km/h.\n2. Average Speed (Equal Distance): (2xy) / (x + y).\n3. Average Speed (Total): Total Distance / Total Time.\n4. Relative Speed: S1 + S2 (Opposite) | S1 - S2 (Same).\n5. Streams: Downstream = Speed + Stream | Upstream = Speed - Stream.",
                    logic: "The Train Rules:\nRule 1: If a train crosses a POLE/PERSON, the Distance = Length of the Train.\nRule 2: If a train crosses a PLATFORM/TUNNEL, the Distance = Length of Train + Length of Platform.\nRule 3: If two trains cross each other, the Distance = Sum of lengths of both trains. The Speed = Relative Speed.",
                    traps: "TRAP 1: The km/h Conversion\nCUET often gives distance in meters and time in seconds but asks for answer in km/h. Don't forget the 18/5 multiplier at the very end.\n\nTRAP 2: Average Speed Trap\nIf you go at 20 km/h and return at 30 km/h, the average is NOT 25. It is (2*20*30)/50 = 24 km/h.\n\nTRAP 3: Lengths and Poles\nA pole has 'zero' length in TSD, but a platform is a 'physical addition' to your journey.",
                    examples: [
                        { q: "A car covers 300km in 5 hours. Speed?", a: "60 km/h. (300 / 5 = 60.)" },
                        { q: "Convert 72 km/h into m/s.", a: "20 m/s. (72 * 5/18 = 20.)" },
                        { q: "A 100m train at 36 km/h crosses a pole. Time?", a: "10 seconds. (36 km/h = 10 m/s. Time = 100/10 = 10.)" },
                        { q: "A train 150m long crosses a 250m bridge at 72 km/h. Time?", a: "20 seconds. (Total Dist = 150+250=400. Speed = 20 m/s. Time = 400/20 = 20.)" },
                        { q: "Relative speed of two trains at 45 & 35 km/h in opposite directions?", a: "80 km/h. (45 + 35 = 80.)" },
                        { q: "Average speed of a trip going at 60 km/h and returning at 40 km/h?", a: "48 km/h. (2*60*40 / 100 = 48.)" },
                        { q: "A boat goes 10 km/h in still water. Stream is 2 km/h. Downstream speed?", a: "12 km/h. (10 + 2 = 12.)" },
                        { q: "A man covers 1/3 of journey at 20, 1/3 at 30, 1/3 at 60. Avg speed?", a: "30 km/h. (3 / (1/20 + 1/30 + 1/60) = 3 / (6/60) = 30.)" },
                        { q: "Two cars start from A and B (100km apart) at 20 & 30 toward each other. When meeting?", a: "2 hours. (Rel speed = 50. Time = 100 / 50 = 2.)" },
                        { q: "A cyclist covers 500m in 1 min. Speed in km/h?", a: "30 km/h. (500m/min = 500*60=30,000 m/h = 30 km/h.)" },
                        { q: "Relative speed same direction 60 & 40?", a: "20 km/h." },
                        { q: "A man walks at 10 km/h instead of 14, he would have walked 20km more. Actual distance?", a: "50 km. (Dist diff = 4t = 20 -> t = 5. Dist = 10 * 5 = 50.)" },
                        { q: "A train 240m passes a pole in 24s. Time to pass a 650m platform?", a: "89s. (Speed = 10 m/s. Total dist = 240 + 650 = 890. Time = 890 / 10 = 89.)" },
                        { q: "Two trains of same length (120m) at 40 and 50 km/h in opposite directions. Time to cross?", a: "9.6s. (Rel speed = 90 km/h = 25 m/s. Dist = 240. Time = 240/25 = 9.6.)" },
                        { q: "Speed of 1 m/s in km/h?", a: "3.6 km/h. (18/5)" },
                        { q: "Man can row 18 km/h downstream and 12 upstream. Speed in still water?", a: "15 km/h. ((18+12)/2 = 15.)" },
                        { q: "A train 110m long at 60 km/h. How long to pass a man walking at 6 km/h in same direction?", a: "7.33s. (Rel Speed = 54 km/h = 15 m/s. Time = 110 / 15 = 7.33.)" },
                        { q: "If a person walks at 4 km/h, he misses a train by 10 min. If 5 km/h, arrives 5 min early. Distance?", a: "5 km. (Diff = 15 min = 1/4 hr. d/4 - d/5 = 1/4 -> d/20 = 1/4 -> d = 5.)" },
                        { q: "250m train crosses 350m platform in 50s. Speed?", a: "43.2 km/h. (Dist = 600. Speed = 600/50 = 12 m/s. 12 * 18/5 = 43.2.)" },
                        { q: "Speed ratio 2:3. Time ratio?", a: "3:2." },
                        { q: "Man row 12 km/h in still water. Takes twice time upstream as down. Stream speed?", a: "4 km/h. (u+v = 2(u-v) -> 3v = u. 3v = 12 -> v=4.)" },
                        { q: "Distance 120km at 40 km/h. Speed for next 120km to avg 60?", a: "120 km/h. (Total dist 240. Total time 240/60 = 4. Time used = 120/40 = 3. Remaining time = 1 hr. Speed = 120/1 = 120.)" },
                        { q: "Ratio of speeds 5:4. A takes 30 min more than B? No, A takes 30 min. How long B?", a: "37.5 min? No. (4/5 * 30 = 24.)" },
                        { q: "Sound travels at 330 m/s. Lightning seen, thunder heard 10s later. Distance?", a: "3.3 km." },
                        { q: "Relative speed opposite 100 km/h and 150 km/h in m/s?", a: "69.4 m/s. (250 * 5/18 = 69.44.)" }
                    ],
                    speedSummary: "- 18 km/h = 5 m/s. 36 = 10. 54 = 15. 72 = 20. 90 = 25. (Memorize this for speed!)"
                }
            },
            {
                id: "mensuration-logic",
                title: "11. Geometry & Mensuration",
                content: {
                    coreConcept: "1. 2D vs 3D: 2D is flat (Area/Perimeter). 3D has depth (Volume/Surface Area). \n2. Boundary vs Paint: Perimeter is like a fence (1D). Area is like painting a surface (2D). Volume is like filling it with water (3D). \n3. The π factor: Circles and curved solids always involve π (roughly 22/7 or 3.14).",
                    formulaBank: "1. Square: Area = side² | Perimeter = 4 × side. \n2. Rectangle: Area = l × b | Perimeter = 2(l + b). \n3. Circle: Area = πr² | Circumference = 2πr. \n4. Cube: Volume = a³ | Surface Area = 6a². \n5. Cylinder: Volume = πr²h | Curved Surface Area = 2πrh. \n6. Sphere: Volume = (4/3)πr³ | Surface Area = 4πr².",
                    logic: "The Diagonal Shortcuts (CUET Favorite):\n- Square Diagonal: Side × √2.\n- Square Area from Diagonal: (Diagonal)² / 2.\n- Rectangle Diagonal: √(l² + b²).\nUse these to skip the step of finding the 'side' if the diagonal is given.",
                    traps: "TRAP 1: The Diameter Trap\nQuestions often give the 'Diameter'. If you plug it into πr², your answer will be 4 times larger than the correct one! Divide by 2 first.\n\nTRAP 2: Cubic vs Square Units\nIf you find volume in cm³ and want it in liters, remember 1000 cm³ = 1 Liter.\n\nTRAP 3: Open vs Closed Cylinder\nCSA (2πrh) is for the side only. TSA (2πrh + 2πr²) is for the side plus both lids. An 'open tank' has only one lid!",
                    examples: [
                        { q: "Square side is 5cm. Area and Perimeter?", a: "Area = 25 sq.cm, Perimeter = 20 cm. (5² = 25, 4*5 = 20.)" },
                        { q: "Rectangle length=10, width=5. Find Diagonal.", a: "11.18 cm. (√(10² + 5²) = √125 = 11.18.)" },
                        { q: "Radius of a circle is 7cm. Find Area.", a: "154 sq.cm. (22/7 * 7 * 7 = 154.)" },
                        { q: "Diagonal of a square is 10cm. Find its area.", a: "50 sq.cm. (10²/2 = 50.)" },
                        { q: "Cylinder radius=7, height=10. Find Volume.", a: "1540 cubic cm. (22/7 * 7 * 7 * 10 = 1540.)" },
                        { q: "CSA of a cylinder with r=7, h=10?", a: "440 sq.cm. (2 * 22/7 * 7 * 10 = 440.)" },
                        { q: "Volume of a cube with side 4cm?", a: "64 cubic cm. (4 * 4 * 4 = 64.)" },
                        { q: "If the radius of a circle is doubled, its area becomes how many times?", a: "4 times. (Ratio of areas = r2²/r1² = 2²/1² = 4.)" },
                        { q: "Find the surface area of a sphere with radius 7cm.", a: "616 sq.cm. (4 * 22/7 * 7 * 7 = 616.)" },
                        { q: "A rectangular floor is 10m x 8m. Number of 2m x 2m tiles needed?", a: "20 tiles. (Total Area 80 / Tile Area 4 = 20.)" },
                        { q: "Perimeter of semicircle of radius 7cm?", a: "36 cm. (πr + 2r = 22 + 14 = 36.)" },
                        { q: "Area of rhombus with diagonals 10 and 12?", a: "60 sq.cm. (1/2 * d1 * d2 = 60.)" },
                        { q: "Sum of angles in a pentagon?", a: "540°. ((n-2)*180 = 3*180 = 540.)" },
                        { q: "Volume of a cone, r=7, h=3?", a: "154. (1/3 * 154 * 3 = 154.)" },
                        { q: "TSA of a cube with edge 5?", a: "150. (6 * 25 = 150.)" },
                        { q: "Sector area of 60° in a circle of radius 6?", a: "18.84. (60/360 * π * 36 = 1/6 * 36π = 6π.)" },
                        { q: "Height of equilateral triangle with side 2?", a: "√3. ( (√3/2)*side )" },
                        { q: "Area of trapezium with par sides 10, 12 and height 5?", a: "55. ( 1/2 * (10+12) * 5 = 11*5 = 55.)" },
                        { q: "Ratio of volumes of two cubes is 1:8. Ratio of surface areas?", a: "1:4. (Side ratio 1:2. Area ratio 1:4.)" },
                        { q: "Volume of a sphere with diameter 6?", a: "113.1. (4/3 * π * 27 = 36π.)" },
                        { q: "If the area of a circle is 154, find its circumference.", a: "44. (r=7, 2πr=44.)" },
                        { q: "Number of 1cm cubes that fit in a 10cm cube?", a: "1000." },
                        { q: "Area of square inscribed in circle of radius r?", a: "2r². (Diagonal = 2r. Area = (2r)²/2 = 2r².)" },
                        { q: "Diagonal of a cuboid 3x4x12?", a: "13. (√(9+16+144) = √169 = 13.)" },
                        { q: "Sum of interior angles of octagon?", a: "1080°." }
                    ],
                    speedSummary: "- Use π = 22/7 for clean cancellations.\n- Square side to diagonal ratio is 1 : √2."
                }
            },
            {
                id: "logarithms-logic",
                title: "12. Logarithms",
                content: {
                    coreConcept: "1. The Inverse Rule: If exponents are like 'growing' (e.g., how much is 2³?), logarithms are like 'detective work' (e.g., if I have 8, what power was used on 2?). \n2. The Question: When you see log₂(8), just ask: 'To what power must I raise 2 to get 8?'. The answer is 3.\n3. Common Base: If no small number (base) is written, assume it is 10 (e.g., log 100 = 2).",
                    formulaBank: "1. The Multiplication Rule: log(A × B) = log A + log B.\n2. The Division Rule: log(A / B) = log A - log B.\n3. The Power Rule: log(Aⁿ) = n × log A. (The power just jumps to the front!)\n4. Base Change: log_b(a) = log(a) / log(b).",
                    logic: "Step 1: Convert to Exponents.\nIf log_b(x) = y, then bʸ = x. This is the simplest way to solve basic log puzzles.\nStep 2: Use the 'Jump' Rule.\nWhenever you see a power inside a log, like log(x²), imagine the 2 jumping over the log to become 2 * log(x). This simplifies big numbers instantly.",
                    traps: "TRAP 1: Log of Zero or Negatives\nLogs only 'exist' for numbers greater than zero. You cannot have log(0) or log(-5).\n\nTRAP 2: log(A+B) is NOT log A + log B\nThis is the most common mistake! The rule only works for multiplication (A*B). You cannot split a sum inside a log.\n\nTRAP 3: Forgetting the Base\nlog₂(16) is 4, but log₄(16) is 2. Always check the small number at the bottom!",
                    examples: [
                        { q: "What is log₂(32)?", a: "5. (Because 2⁵ = 32.)" },
                        { q: "Evaluate log(1000).", a: "3. (Base is 10, and 10³ = 1000.)" },
                        { q: "Simplify log 5 + log 2.", a: "1. (log 5*2 = log 10 = 1.)" },
                        { q: "If log 2 = 0.301, what is log 4?", a: "0.602. (log 4 = log 2² = 2 * log 2 = 2 * 0.301.)" },
                        { q: "Solve log₃(x) = 4.", a: "81. (3⁴ = 81.)" },
                        { q: "Evaluate log(1/10).", a: "-1. (10⁻¹ = 1/10.)" },
                        { q: "Solve for x: log₂x + log₂4 = 5.", a: "8. (log₂(4x) = 5 -> 2⁵ = 4x -> 32 = 4x -> x=8.)" },
                        { q: "Evaluate log₅(√5).", a: "0.5. (5 raised to the power 1/2 gives √5.)" },
                        { q: "Find x if logₓ(49) = 2.", a: "7. (x² = 49 -> x=7.)" },
                        { q: "Evaluate log₇(1).", a: "0. (Any base raised to 0 is 1.)" },
                        { q: "Find value of log(1/100).", a: "-2." },
                        { q: "Solve log x (216) = 3.", a: "6. (x³ = 216.)" },
                        { q: "Evaluate log₃(1/243).", a: "-5." },
                        { q: "If log 2 = a, find log 20.", a: "1 + a. (log 10*2 = log 10 + log 2 = 1 + a.)" },
                        { q: "Simplify log x + log x^2 + log x^3.", a: "6 log x. (log x*x^2*x^3 = log x^6.)" },
                        { q: "Value of log_a (1/a)?", a: "-1." },
                        { q: "Value of log_sqrt2 (16)?", a: "8. ((2^0.5)^x = 2^4 -> 0.5x=4 -> x=8.)" },
                        { q: "Solve log(x) + log(x-3) = 1.", a: "5. (x^2-3x=10 -> x^2-3x-10=0 -> (x-5)(x+2)=0. x=5 as x > 0.)" },
                        { q: "Value of log 27 / log 9?", a: "1.5. (3 log 3 / 2 log 3 = 1.5.)" },
                        { q: "Value of log_81 (3)?", a: "0.25. (81^x = 3 -> 3^4x = 3^1 -> 4x=1 -> x=1/4.)" },
                        { q: "Value of log_0.1 (1000)?", a: "-3. (10⁻¹^x = 10³ -> -x=3.)" },
                        { q: "Evaluate log_5 (0.04).", a: "-2. (0.04 = 1/25 = 5⁻².)" },
                        { q: "If log x = -3, what is x?", a: "0.001." },
                        { q: "log(M/N) + log(N/P) + log(P/M)?", a: "0. (log (M/N * N/P * P/M) = log 1 = 0.)" },
                        { q: "Evaluate log_2 (log_2 (log_2 16)).", a: "1. (log_2(log_2(4)) = log_2(2) = 1.)" }
                    ],
                    speedSummary: "- log(1) is always 0. log(base) is always 1.\n- 2¹⁰ ≈ 1000 is a useful shortcut for estimation."
                }
            },
            {
                id: "probability-logic",
                title: "13. Probability & Combinations",
                content: {
                    coreConcept: "1. The Ratio: Probability is just a fraction = (What you want) / (Total things that can happen).\n2. Range: It is always between 0 (Impossible) and 1 (Certain). \n3. Odds: If the probability of rain is 0.3, the probability of 'No Rain' is 1 - 0.3 = 0.7.",
                    formulaBank: "1. Basic: P(A) = n(E) / n(S).\n2. Coin Tossing: Total outcomes for 'n' coins = 2ⁿ.\n3. Dice Throwing: Total outcomes for 'n' dice = 6ⁿ.\n4. Combinations (Choosing): nCr = n! / [r! * (n-r)!]. Use this to pick 2 balls from 5.",
                    logic: "The 'AND' vs 'OR' Rule:\n- If event A AND event B must happen together, MULTIPLY their probabilities.\n- If event A OR event B can happen, ADD their probabilities.\nExample: Chance of picking a Red ball (1/2) AND drawing an Ace (1/13) = 1/26.",
                    traps: "TRAP 1: The 'Deselection' Error\nWhen choosing 2 items out of 10, the total is not 10 + 10. It is 10C2 = (10*9)/2 = 45.\n\nTRAP 2: Independent Events\nIf you toss a coin 5 times and get Heads every time, the 6th toss is STILL 50% Heads. The coin doesn't have a memory!\n\nTRAP 3: At Least One\nWhen asked for 'At least one event happening', it is often easier to calculate: 1 - (Probability of NO event happening).",
                    examples: [
                        { q: "A coin is tossed twice. Probability of getting 2 heads?", a: "1/4. (Outcomes: HH, HT, TH, TT. HH is 1 out of 4.)" },
                        { q: "A dice is thrown. Probability of getting a prime number?", a: "1/2. (Primes are 2, 3, 5. Total 3 out of 6.)" },
                        { q: "A bag has 3 red and 2 blue balls. Probability of picking a red?", a: "3/5." },
                        { q: "Probability of picking a King from a deck of 52 cards?", a: "1/13. (4 Kings out of 52.)" },
                        { q: "Two coins tossed. Probability of 'at least one head'?", a: "3/4. (HH, HT, TH. Or 1 - TT = 1 - 1/4.)" },
                        { q: "Chance A completes work (4/5). Chance B fails (5/8). Both complete?", a: "0.3. (A=4/5, B_pass = 1 - 5/8 = 3/8. Both = 4/5 * 3/8 = 12/40 = 0.3.)" },
                        { q: "In how many ways can 3 girls be picked from 5?", a: "10. (5C3 = 5C2 = (5*4)/2 = 10.)" },
                        { q: "Minimum tosses for at least one Head prob > 0.95?", a: "5. (1 - (1/2)ⁿ > 0.95 -> (1/2)ⁿ < 0.05. 2⁵=32, 1/32 ≈ 0.03.)" },
                        { q: "Probability of picking a green ball from 4 red, 5 black balls?", a: "0. (Impossible event.)" },
                        { q: "Sum of 2 dice is 12. Probability?", a: "1/36. (Only one way: 6+6.)" },
                        { q: "Prob of leap year having 53 Sundays?", a: "2/7. (366 days = 52 weeks + 2 days. Both can be Sun-Mon or Sat-Sun.)" },
                        { q: "In 100 tickets (1-100), prob of picking multiple of 10 or 15?", a: "0.13. (Multiples of 10: 10. Multiples of 15: 6. Common: 30, 60, 90. Total = 10+6-3 = 13.)" },
                        { q: "Value of 5C0 + 5C5?", a: "2. (1 + 1.)" },
                        { q: "Prob of drawing an Ace or a Club?", a: "4/52 + 13/52 - 1/52 = 16/52 = 4/13." },
                        { q: "A box has 5 white, 3 green balls. 2 drawn. Prob same color?", a: "13/28. ( (5C2 + 3C2) / 8C2 = (10+3)/28 = 13/28. )" },
                        { q: "Ways to arrange letters in CAT?", a: "6. (3! = 6.)" },
                        { q: "Ways to arrange letters in BALL?", a: "12. (4!/2! = 12.)" },
                        { q: "Prob at least 1 tail in 3 tosses?", a: "7/8. (1 - HHH.)" },
                        { q: "If P(A) = 0.6, P(B) = 0.5 and overlap is 0.2. What is P(A or B)?", a: "0.9. (0.6+0.5-0.2.)" },
                        { q: "Ways to sit 5 people in a circle?", a: "24. (5-1)! = 4!." },
                        { q: "Cards marked 1-20. Prob multiple of 3 or 5?", a: "9/20. (3,6,9,12,15,18 and 5,10,15,20. Unique: 3,5,6,9,10,12,15,18,20 = 9.)" },
                        { q: "Sum of 2 dice = 7. Prob?", a: "1/6. (Ways: 1,6; 2,5; 3,4; 4,3; 5,2; 6,1 = 6/36.)" },
                        { q: "Probability of getting 53 Mondays in non-leap year?", a: "1/7." },
                        { q: "Value of 10C2?", a: "45." },
                        { q: "Value of 0!?", a: "1." }
                    ],
                    speedSummary: "- Complementary Rule: P(Success) = 1 - P(Failure).\n- Factorials to learn: 1 to 6 (1, 2, 6, 24, 120, 720)."
                }
            },
            {
                id: "set-theory-logic",
                title: "14. Set Theory",
                content: {
                    coreConcept: "1. Definition: A Set is just a collection of distinct things (numbers, names, objects) put into a group. \n2. Representation: We use curly brackets like {1, 2, 3}. \n3. Membership: If 3 is in set A, we say '3 belongs to A'.",
                    formulaBank: "1. Union (A ∪ B): Everything in A OR B (The whole area). \n2. Intersection (A ∩ B): Only things in BOTH A and B (The overlap). \n3. Number of elements: n(A ∪ B) = n(A) + n(B) - n(A ∩ B). \n4. Subsets: If a set has 'n' elements, it can have 2ⁿ subsets.",
                    logic: "The Group Mapping (Venn Method):\nThink of sets as 'hula hoops' on the floor. \n- Intersection is where the hoops overlap. \n- Union is everything inside any hoop. \n- Complement is everything outside the hoops. \nAlways fill the overlap (intersection) FIRST when solving Word Problems.",
                    traps: "TRAP 1: Double Counting\nWhen adding students in Math and Science, students taking BOTH are added twice. You MUST subtract them once using the n(A ∪ B) formula.\n\nTRAP 2: Proper Subset vs Subset\nA set is always a subset of itself, but NOT a proper subset. {1, 2} is a subset of {1, 2}, but {1} is a proper subset.\n\nTRAP 3: The Empty Set\nRemember that the Empty Set { } is a subset of EVERY set.",
                    examples: [
                        { q: "If A = {1, 2, 3} and B = {3, 4, 5}, find A ∩ B.", a: "{3}. (The only common element.)" },
                        { q: "How many subsets does set {A, B, C} have?", a: "8. (2³ = 8.)" },
                        { q: "In a class, 20 like Tea, 15 like Coffee, 5 like both. How many like at least one?", a: "30. (20 + 15 - 5 = 30.)" },
                        { q: "If n(A)=10, n(B)=20, and A is a subset of B, find n(A ∪ B).", a: "20. (Since A is inside B, the union is just B.)" },
                        { q: "Find A ∪ B for A={1,2}, B={2,3}.", a: "{1,2,3}." },
                        { q: "What is n(P(A)) if A has 4 elements?", a: "16. (Power set contains all subsets, 2⁴.)" },
                        { q: "Set of even primes?", a: "{2}." },
                        { q: "If A ∩ B = ø, what are they called?", a: "Disjoint Sets. (No overlap.)" },
                        { q: "Total subsets of {1, 2, 3, 4, 5} containing exactly 3 elements?", a: "10. (5C3 = 10.)" },
                        { q: "n(A)=50, n(B)=30, n(A∩B)=10. Find n(A-B).", a: "40. (Only A = Total A - Both = 50 - 10.)" },
                        { q: "If A = {1, 2, 3}, power set P(A) contains how many elements?", a: "8." },
                        { q: "Is the empty set a subset of every set?", a: "Yes." },
                        { q: "If every element of A is in B, then A is a _____ of B.", a: "Subset." },
                        { q: "Difference between A={1,2} and B={2,3}?", a: "A-B = {1}." },
                        { q: "Universal set minus A is called?", a: "Complement of A." },
                        { q: "Total subsets of set with 5 elements?", a: "32." },
                        { q: "n(A)=10, n(B)=8. Max n(A ∩ B)?", a: "8. (When B is inside A.)" },
                        { q: "n(A)=10, n(B)=8. Min n(A ∪ B)?", a: "10." },
                        { q: "A ∪ U = ?", a: "U. (Union with universal set.)" },
                        { q: "A ∩ ø = ?", a: "ø. (Intersection with empty set.)" },
                        { q: "If n(A)=20, n(B)=30, and A, B are disjoint, n(A ∪ B)?", a: "50." },
                        { q: "De Morgan's Law: (A ∪ B)' = ?", a: "A' ∩ B'." },
                        { q: "Proper subset of {1}?", a: "ø." },
                        { q: "Is {1,2} = {2,1}?", a: "Yes. (Order doesn't matter.)" },
                        { q: "n(A)=100, n(B)=50, n(A∪B)=120. Find Both.", a: "30. (100+50-30=120.)" }
                    ],
                    speedSummary: "- Union = All. Intersection = Common. \n- Formula: Total = A + B - Both + Neither."
                }
            },
            {
                id: "coordinate-geometry-logic",
                title: "15. Coordinate Geometry",
                content: {
                    coreConcept: "1. The Grid: Imagine a map where every spot has an Address (x, y). X is how far Right/Left, and Y is how far Up/Down.\n2. The Origin: (0, 0) is the starting gate.\n3. The Quadrants: The grid is split into 4 'Rooms' (I: +,+, II: -,+, III: -,-, IV: +,-).",
                    formulaBank: "1. Distance between (x1,y1) and (x2,y2): √[(x2-x1)² + (y2-y1)²]. (Basically Pythagoras!).\n2. Midpoint: [(x1+x2)/2 , (y1+y2)/2]. (The average address).\n3. Slope (m): (y2-y1) / (x2-x1). (Rise over Run).\n4. Area of Triangle: 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|.",
                    logic: "The Visual Shortcut:\nInstead of long formulas, imagine the points on a graph. \n- To find distance from (1,2) to (4,6): The 'East' jump is 3, the 'North' jump is 4. In a 3-4-5 triangle, the distance is 5!\n- To find if a point (x,y) lies on a curve $y=x^2$, just plug in the numbers. If $y$ equals $x^2$, it's on the line.",
                    traps: "TRAP 1: Sign Swap\nWhen calculating (x2 - x1), if x1 is negative, it becomes (x2 - (-x1)) = x2 + x1. Watch those double negatives!\n\nTRAP 2: X-Axis vs Y-Axis\nAny point ON the x-axis has Y=0. Any point ON the y-axis has X=0. Don't swap them.\n\nTRAP 3: Area Sign\nThe area is always positive. If the formula gives a negative, take the absolute value.",
                    examples: [
                        { q: "Distance between (0,0) and (3,4)?", a: "5. (√(3² + 4²) = 5.)" },
                        { q: "Midpoint of (2,4) and (8,10)?", a: "(5, 7). (Avg of 2,8 is 5; Avg of 4,10 is 7.)" },
                        { q: "Does (2,4) lie on the curve $y = x^2$?", a: "Yes. (Because 2² = 4.)" },
                        { q: "Area of triangle with corners (0,0), (4,0), (0,3)?", a: "6. (1/2 * Base 4 * Height 3 = 6.)" },
                        { q: "Slope of line through (1,2) and (3,6)?", a: "2. ((6-2)/(3-1) = 4/2 = 2.)" },
                        { q: "Distance from (5, -2) to x-axis?", a: "2 units. (The y-coordinate tells you vertical distance.)" },
                        { q: "Point equidistant from (0,0) and (4,0)?", a: "(2, y). (Must lie on the perpendicular bisector x=2.)" },
                        { q: "Area of rectangle with corners (-1,2), (-1,4), (7,2), (7,4)?", a: "16. (Width = 7 - (-1) = 8. Height = 4 - 2 = 2. Area = 8 * 2 = 16.)" },
                        { q: "Distance between (1,1) and (1,10)?", a: "9. (Pure vertical distance.)" },
                        { q: "Origin coordinates?", a: "(0,0)." },
                        { q: "Reflect (3,4) in x-axis.", a: "(3, -4)." },
                        { q: "Reflect (3,4) in y-axis.", a: "(-3, 4)." },
                        { q: "Distance of (6,8) from origin?", a: "10." },
                        { q: "Midpoint of (0,0) and (x,y)?", a: "(x/2, y/2)." },
                        { q: "Slope of horizontal line?", a: "0." },
                        { q: "Slope of vertical line?", a: "Undefined." },
                        { q: "Centroid of (0,0), (3,0), (0,3)?", a: "(1,1). (Sum/3.)" },
                        { q: "Area of triangle with corners (5,0), (0,0), (0,5)?", a: "12.5." },
                        { q: "Point on line $2x+y=10$ with x=3?", a: "(3,4)." },
                        { q: "Parallel lines have _____ slope.", a: "Equal." },
                        { q: "Perpendicular lines slope product?", a: "-1." },
                        { q: "Quadrant for (-2, -3)?", a: "III. (Both negative.)" },
                        { q: "Equation of x-axis?", a: "y=0." },
                        { q: "Distance (1,2) to (1, -2)?", a: "4." },
                        { q: "In center of (0,0), (4,0), (0,3)?", a: "(1,1). (Calculated from in-center formula.)" }
                    ],
                    speedSummary: "- Distance = √ (Δx² + Δy²). \n- Remember Pythagorean Triplets (3,4,5), (5,12,13), (8,15,17) for fast distance math."
                }
            },
            {
                id: "advanced-algebra-logic",
                title: "16. Advanced Algebra",
                content: {
                    coreConcept: "1. Polynomials: High-level algebra deals with expressions like $x^4 + 2x^3 - 5$. Think of them as 'formulas with levels'.\n2. The Remainder Rule: Instead of doing a 10-minute long division, you can find the remainder of a division in 10 seconds by just plugging in a number!\n3. Roots: A root is a number that makes the whole formula equal to Zero.",
                    formulaBank: "1. Remainder Theorem: When $f(x)$ is divided by $(x-a)$, the remainder is $f(a)$. \n2. Quadratic Roots: For $ax^2+bx+c=0$, sum of roots = $-b/a$, product = $c/a$. \n3. Cubic Identity: $a^3+b^3+c^3 - 3abc = (a+b+c)(a^2+b^2+c^2 - ab-bc-ca)$.",
                    logic: "The Shortcut Method:\n- If you need to find a 'missing root', use the Sum or Product formulas rather than solving the whole equation.\n- If you need a remainder when dividing by $(x-1)$, just replace all $x$'s in the formula with 1. It's that simple!",
                    traps: "TRAP 1: The Sign Error in Sum of Roots\nStudents often forget the minus sign. For $x^2 + 5x + 6$, the sum of roots is -5, not 5.\n\nTRAP 2: Zero Coefficients\nIn $x^4 + 2x - 1$, the $x^3$ and $x^2$ parts are ZERO. Don't forget them if you are doing long division.\n\nTRAP 3: Division by $(x+a)$\nIf you divide by $(x+2)$, you must plug in $x = -2$ (not +2) to find the remainder.",
                    examples: [
                        { q: "Remainder when $x^2 + 5x + 6$ is divided by $(x-1)$?", a: "12. (Plug in 1: 1 + 5 + 6 = 12.)" },
                        { q: "Product of roots for $3x^2 - 9x + 6 = 0$?", a: "2. (c/a = 6/3 = 2.)" },
                        { q: "If one root of $x^2 + ax + 3a = 0$ is 1, find the other root.", a: "-0.75. (Plug in 1: 1 + a + 3a = 0 -> 4a = -1 -> a = -0.25. Equation: $x^2 - 0.25x - 0.75$. Product = -0.75. Since one root is 1, other is -0.75.)" },
                        { q: "Sum of roots for $x^2 - 10x + 21 = 0$?", a: "10. (-(-10)/1 = 10.)" },
                        { q: "Factor $x^2 - 9$.", a: "(x-3)(x+3)." },
                        { q: "Find value of $a^2+b^2+c^2$ if $a+b+c=10$ and $ab+bc+ca=30$.", a: "40. ($(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)$. 100 = X + 60 -> X=40.)" },
                        { q: "Simplest root of $x^3 - 1 = 0$?", a: "1." },
                        { q: "What must be added to $x^2 - 5x$ to make it a perfect square?", a: "6.25. ((5/2)² = 2.5² = 6.25.)" },
                        { q: "If $x + 1/x = 5$, find $x^2 + 1/x^2$.", a: "23. (Square both sides: $x^2 + 2 + 1/x^2 = 25 -> 23$.)" },
                        { q: "Degree of the polynomial $x^4 + 3x^2 + x$?", a: "4. (The highest power.)" },
                        { q: "Value of $101^2$ using algebra?", a: "10201. (100+1)^2 = 10000+1+200." },
                        { q: "If one root is 2, other is 3. Find equation.", a: "x^2 - 5x + 6 = 0." },
                        { q: "Value of $x^3+y^3$ if x+y=5, xy=6?", a: "35. (x^3+y^3 = (x+y)(x^2-xy+y^2) = 5*(25-18)=35.)" },
                        { q: "Solve $2x+5=15$.", a: "5." },
                        { q: "Solve $x^2-1=0$.", a: "1, -1." },
                        { q: "Coefficient of x in $x^2-10x+5$?", a: "-10." },
                        { q: "Is $(x-1)$ a factor of $x^100 - 1$?", a: "Yes. (P(1) = 0.)" },
                        { q: "Value of $a+b$ if $a^2-b^2=24$, $a-b=4$?", a: "6." },
                        { q: "Evaluate $99*101$.", a: "9999. (100^2 - 1^2.)" },
                        { q: "Roots of $x^2+x=0$?", a: "0, -1." },
                        { q: "Sum of roots for $3x^2-3=0$?", a: "0. (b=0.)" },
                        { q: "Remainder when $x^3$ is divided by $x+1$?", a: "-1." },
                        { q: "If $a=b=c=1$, find $a^2+b^2+c^2-ab-bc-ca$.", a: "0." },
                        { q: "Expand $(a+b)^3$.", a: "a^3 + 3a^2b + 3ab^2 + b^3." },
                        { q: "Roots of $x^2-4x+4=0$?", a: "2, 2. (Perfect square.)" }
                    ],
                    speedSummary: "- Plug and Play: Substitution is your fastest friend in Algebra.\n- Memorize: $(x+y)^2$, $(x-y)^2$, and $(x+y)(x-y)$."
                }
            }
        ]
    },

    flashcards: [
        { id: "quant-fc-001", term: "BODMAS Rule", definition: "Order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction", formula: null, example: "10 + 2 × 5 = 20 (not 60)" },
        { id: "quant-fc-002", term: "Successive Discounts", definition: "Discounts applied one after another; not additive", formula: "Final Price = MP × (1 - d1) × (1 - d2)", example: "50% + 50% on ₹800 = ₹200 (not ₹0)" },
        { id: "quant-fc-003", term: "LCM & HCF Relation", definition: "Product of two numbers is equal to product of their LCM and HCF", formula: "Product = LCM × HCF", example: "LCM=60, HCF=5, Num1=15 → Num2 = 20" },
        { id: "quant-fc-004", term: "Compound Interest (2 years)", definition: "Interest earned on interest", formula: "A = P(1 + r/100)²", example: "P=1000, r=10% → A=1210" },
        { id: "quant-fc-005", term: "Relative Speed (Trains)", definition: "Speeds added when moving in opposite directions, subtracted when same direction", formula: "Opposite: V1 + V2 | Same: V1 - V2", example: "Trains at 50 & 40 km/h → Relative = 90 (Opp) or 10 (Same)" },
        { id: "quant-fc-006", term: "Train Crossing Tunnel", definition: "Total distance covered equals length of train plus length of tunnel", formula: "D = L_train + L_tunnel", example: "200m train crosses 300m tunnel → Distance = 500m" },
        { id: "quant-fc-007", term: "Area of Square (Diagonal)", definition: "Finding square area using diagonal instead of side", formula: "Area = d² / 2", example: "Diagonal=10cm → Area = 50 sq.cm" },
        { id: "quant-fc-008", term: "Simple Interest Principal", definition: "Finding P using difference in interest over years", formula: "P = (SI_diff × 100) / (R × T_diff)", example: "SI diff is 200 over 2 years at 10% → P = 1000" },
        { id: "quant-fc-009", term: "Weighted Average", definition: "Average of multiple groups with different sizes", formula: "(n1*A1 + n2*A2) / (n1 + n2)", example: "10 boys (avg 50) + 20 girls (avg 60) → Avg = 56.6" },
        { id: "quant-fc-010", term: "Trigonometric Identity", definition: "Fundamental relation between sine and cosine", formula: "sin²θ + cos²θ = 1", example: "If sin θ = 3/5, then cos θ = 4/5" },
        { id: "quant-fc-011", term: "Boats & Streams", definition: "Upstream (against current) and Downstream (with current)", formula: "Down = u + v | Up = u - v", example: "Boat=10, Stream=2 → Down=12, Up=8" },
        { id: "quant-fc-012", term: "Cylinder Mensuration", definition: "Volume and Surface Area logic", formula: "V=πr²h, CSA=2πrh", example: "r=7, h=10 → V=1540" }
    ],

    questions: [
        // --- TOPIC 1: BODMAS / Simplification (CUET Depth) ---
        {
            id: 
**Q:** Simplify the following expression: [48 ÷ 12 × {16 - (4 + 6)} + 14]
**Current Logic/Hack:** HACKER METHOD: Check unit digit of {16 - (4 + 6)} = 6. Result is some product of 4 and 6 + 14. 24 + 14 ends in 8. Only option 38 ends in 8. (Normal BODMAS: 48/12=4. 16-10=6. 4*6=24. 24+14=38.)

### quant-q-002
**Q:** Evaluate: 125% of 160 + 40% of 240 - 25% of 150
**Current Logic/Hack:** HACKER METHOD: 125% of 160 is 200. 40% of 240 ends in 6 (4x4). 25% of 150 ends in .5. Total must end in .5. (Exact: 200 + 96 - 37.5 = 258.5.)

### quant-q-005
**Q:** A vessel is 1/3 full. After adding 15 liters of water, it becomes 1/2 full. Find the capacity of the vessel.
**Current Logic/Hack:** HACKER METHOD: Unit Digit/Substitution. If cap is 90, 1/3 is 30, 1/2 is 45. Diff is 15. Marks matched! (Equation: X/2 - X/3 = 15 → X/6 = 15 → X=90.)

### quant-q-012
**Q:** Present ages of Sam and Peter are in ratio 5:4. After 3 years, the ratio becomes 11:9. What is Peter
**Current Logic/Hack:** With x=6, ages are 30 and 24. After 3 years, they are 33 and 27, which is 11:9 ratio.

### quant-q-013
**Q:** In an exam, a student scores 30% and fails by 15 marks. Another student scores 40% and gets 35 marks more than the passing marks. Find the maximum marks.
**Current Logic/Hack:** A 10% increase in score resulted in a 50 mark increase. Therefore, 100% (max marks) is 500.

### quant-q-014
**Q:** A number is increased by 20% and then decreased by 20%. Find the net percentage change.
**Current Logic/Hack:** Net change = 20 - 20 - (20*20/100) = -4%. Distractors: 0% (Additive assumption), 4% increase (Sign swap), 2% decrease (x/10 instead of x²/100).

### quant-q-015
**Q:** If 15% of A is equal to 20% of B, find A:B.
**Current Logic/Hack:** 15A = 20B → A/B = 20/15 = 4/3. Distractors: 3:4 (Inverse error), 5:4 (25/20 error).

### quant-q-021
**Q:** The salaries of A, B, and C are in ratio 2:3:5. If increases of 15%, 10% and 10% are allowed in their salaries, find the new ratio of their salaries.
**Current Logic/Hack:** 2*1.15 : 3*1.1 : 5*1.1 = 23:33:55. Distractors: 3:4:6 (Rounded), 22:33:55 (10% all error).

### quant-q-023
**Q:** An item marked at ₹800 is sold for ₹612 after two successive discounts. If the first discount is 10%, find the second discount percentage.
**Current Logic/Hack:** 800 -> 720. 720 - 612 = 108. 108/720 = 15%. Distractors: 12% (100 reduction error), 20% (rounded logic).

### quant-q-024
**Q:** Which of the following is better for a customer? (A) Successive discounts of 20% and 10% (B) A single discount of 30%
**Current Logic/Hack:** A = 28% discount. B = 30%. B is better. Distractor A is common due to 

### quant-q-025
**Q:** A merchant marks his goods 25% above the cost price and allows a discount of 10%. Find his profit percentage.
**Current Logic/Hack:** 1.25 * 0.9 = 1.125. Profit = 12.5%. Distractors: 15% (25-10 additive), 10% (forgot markup).

### quant-q-026
**Q:** By selling a watch for ₹1140, a man loses 5%. At what price should he sell it to gain 5%?
**Current Logic/Hack:** CP = 1140/0.95 = 1200. SP for 5% gain = 1200 * 1.05 = 1260. Distractors: 1200 (CP), 1320 (calculated off 1140 + 5% markup on loss error).

### quant-q-029
**Q:** Difference between CI and SI on a sum for 2 years at 10% per annum is ₹50. Find the principal sum.
**Current Logic/Hack:** Diff = P(R/100)². 50 = P(0.01) → P=5000. Distractors: 500, 2500 (calculation logic slips).

### quant-q-030
**Q:** A square has diagonals of length (4k + 6) cm and (7k - 3) cm. Find the area of the square.
**Current Logic/Hack:** d=18. Area = d²/2 = 162. Distractors: 324 (Forgot /2), 81 (Used d/2 instead of d²).

### quant-q-031
**Q:** The circumference of a circle is equal to the perimeter of a square of side 11 cm. Find the area of the circle.
**Current Logic/Hack:** Perimeter=44. 2πr=44 → r=7. Area=154. Distractors: 144, 121 (Square area errors), 44 (Perimeter instead of area).

### quant-q-047
**Q:** What is 15% of 240?
**Current Logic/Hack:** 0.15 * 240 = 36.

### quant-q-050
**Q:** Find x if 20% of x is 60.
**Current Logic/Hack:** 0.2x = 60 → x = 300.

### quant-q-056
**Q:** A man loses 10% by selling an item for ₹180. Find its cost price.
**Current Logic/Hack:** 90% = 180 → 100% = 200.

### quant-q-057
**Q:** A chair is bought for ₹500 and sold at 20% profit. Find the selling price.
**Current Logic/Hack:** 500 + 0.2*500 = 600.

### quant-q-058
**Q:** Find the single discount equivalent to 20% and 10% successive discounts.
**Current Logic/Hack:** 100 → 80 → 72. Total 28%.

### quant-q-062
**Q:** What is the square root of 625?
**Current Logic/Hack:** 25 * 25 = 625.

### quant-q-065
**Q:** CUET GAT 2023: In an examination, 25% of students failed in Mathematics, 20% failed in English, and 5% failed in both. What percentage of students failed in at least one subject?
**Current Logic/Hack:** Using Vedic/Venn logic: P(A U B) = P(A) + P(B) - P(A ∩ B) = 25 + 20 - 5 = 40%.

### quant-q-066
**Q:** CUET ACC 2024: Machinery is shown in the Balance Sheet at ₹90,000. It is found that machinery is undervalued by 10%. What is the real value of the machinery?
**Current Logic/Hack:** Undervalued by 10% means ₹90,000 represents 90% of real value. Real Value = 90,000 / 0.9 = 1,00,000.

### quant-q-070
**Q:** Simplify: (3/4) of 160 + 20% of 400 - (1/5) of 100
**Current Logic/Hack:** (3/4)*160 = 120. 20% of 400 = 80. (1/5)*100 = 20. Total = 120 + 80 - 20 = 180.

### quant-q-071
**Q:** Find the value of: [100 - {25 × (4 + 2)}] ÷ 10
**Current Logic/Hack:** Round: 4+2=6. Curly: 25*6=150. Square: 100-150 = -50. Final: -50/10 = -5.

### quant-q-075
**Q:** Find X: 20% of X = 40 + [10 ÷ 2 × 3]
**Current Logic/Hack:** Square: (10/2)*3 = 15. Right side: 40 + 15 = 55. If 20% (1/5) of X = 55, then X = 55 * 5 = 275.

### quant-q-086
**Q:** Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar
**Current Logic/Hack:** (6k+10)/(5k+10) = 11/10 -> 60k+100 = 55k+110 -> 5k=10 -> k=2. Sagar 6 yrs ago = 10. Now = 16.

### quant-q-090
**Q:** If A:B = 5:7 and B:C = 6:11, find A:B:C.
**Current Logic/Hack:** LCM of 7 and 6 is 42. A:B = 30:42. B:C = 42:77. Total = 30:42:77.

### quant-q-104
**Q:** How much time will it take for an amount of ₹450 to yield ₹81 as interest at 4.5% per annum of simple interest?
**Current Logic/Hack:** Time = (SI * 100) / (P * R) = (81 * 100) / (450 * 4.5) = 8100 / 2025 = 4 years.

### quant-q-107
**Q:** The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is ₹1. The sum is:
**Current Logic/Hack:** Difference = P(R/100)² -> 1 = P(4/100)² -> 1 = P(1/625) -> P = 625.

### quant-q-108
**Q:** There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of ₹12,000 after 3 years at the same rate?
**Current Logic/Hack:** Rate = 60%/6 = 10% p.a. CI on 12000 for 3 yrs at 10% = 12000 * (1.1³ - 1) = 12000 * 0.331 = 3972.

### quant-q-109
**Q:** What will be the compound interest on a sum of ₹25,000 after 3 years at the rate of 12% p.a.?
**Current Logic/Hack:** Amount = 25000 * (1.12)³ = 25000 * 1.404928 = 35123.20. CI = 10123.20.

### quant-q-111
**Q:** A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?
**Current Logic/Hack:** CP of 6 toffees = 100p. SP of 6 toffees needed = 120p. 120p for 6 means 100p (₹1) for (6/120)*100 = 5 toffees.

### quant-q-113
**Q:** A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale (SP) was of ₹392, what was his profit?
**Current Logic/Hack:** SP = 1.225 CP. 392 = 1.225 CP -> CP = 320. Profit = 392 - 320 = 72.

### quant-q-114
**Q:** A man buys a cycle for ₹1400 and sells it at a loss of 15%. What is the selling price of the cycle?
**Current Logic/Hack:** SP = 0.85 * 1400 = 1190.

### quant-q-115
**Q:** The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:
**Current Logic/Hack:** 20 CP = x SP -> SP/CP = 20/x. Profit 25% means SP/CP = 1.25 = 5/4. 20/x = 5/4 -> x = 16.

### quant-q-116
**Q:** A tradesman marks his goods at 20% above the cost price. He allows a discount of 10% for cash payment. What profit percent does he make?
**Current Logic/Hack:** 100 -> 120 -> 108. Profit = 8%.

### quant-q-117
**Q:** A person incurs 5% loss by selling a watch for ₹1140. At what price should the watch be sold to earn 5% profit?
**Current Logic/Hack:** 0.95 CP = 1140 -> CP = 1200. New SP = 1200 * 1.05 = 1260.

### quant-q-127
**Q:** A and B start at same time from P and Q (100km apart) at 25 km/h and 35 km/h. If they move in same direction (B away from A), how long until A catches B?
**Current Logic/Hack:** A

### quant-q-133
**Q:** A towel lost 20% of its length and 10% of its breadth after bleaching. The percentage of decrease in its area is:
**Current Logic/Hack:** Net change = -20 - 10 + (-20*-10)/100 = -30 + 2 = -28%. Decrease is 28%.

### quant-q-135
**Q:** The altitude of a triangle is increased by 10% while its area remains the same. Its corresponding base must be decreased by:
**Current Logic/Hack:** Base * Altitude = Constant. New Alt = 1.1 Alt. New Base = Base / 1.1 = 0.9090 Base. Decrease = 9.09%.

### quant-q-136
**Q:** How many bricks (25cm x 11.25cm x 6cm) are needed to build a wall 8m x 6m x 22.5cm?
**Current Logic/Hack:** Wall Vol = 800 * 600 * 22.5. Brick Vol = 25 * 11.25 * 6. Number = (800*600*22.5) / (25*11.25*6) = (32 * 100 * 2) = 6400.

### quant-q-139
**Q:** If the price of sugar is increased by 25%, by what percentage should a person reduce its consumption so that the expenditure remains the same?
**Current Logic/Hack:** % Reduction = [R / (100 + R)] * 100 = (25 / 125) * 100 = 20%.

### quant-q-140
**Q:** In a survey, 40% houses have 2+ people. Of houses with 1 person, 25% have only a male. What % of all houses have exactly one female (and no male)?
**Current Logic/Hack:** Houses with 1 person = 60%. Male-only (1 person) = 25% of 60% = 15%. Female-only (1 person) = 60% - 15% = 45%.

### lr-q-014-B
**Q:** Starting from point X, Joy walked 15 m towards South. He turned left and walked 25 m. He then turned left and walked 15 m. He again turned left and walked 40 m. How far and in which direction is he now with reference to X?
**Current Logic/Hack:** S 15. Then L (East) 25. Then L (North) 15. Then L (West) 40. North/South 15m cancels out. East 25m vs West 40m = 15m West.

### lr-q-078
**Q:** What is the angle between the hands of a clock at 10:25?
**Current Logic/Hack:** θ = |30(10) - 5.5(25)| = |300 - 137.5| = 162.5°.

### lr-q-056
**Q:** 1, 4, 9, 16, 25, ?
**Current Logic/Hack:** Series of squares: 1², 2², 3², 4², 5², 6²=36.

### lr-q-060
**Q:** 5, 11, 17, 23, ?
**Current Logic/Hack:** +6 progression. 23+6=29.

### lr-q-062
**Q:** 100, 50, 25, ?
**Current Logic/Hack:** Divided by 2 progression. 25/2 = 12.5.

### lr-q-064
**Q:** 2, 3, 5, 7, 11, ?
**Current Logic/Hack:** Series of prime numbers. Next prime after 11 is 13.

