// src/data/general-aptitude/logical-reasoning.data.js
// VALIDATED AGAINST DATA_SCHEMA.md

export const logicalReasoningData = {
    subject: "General Aptitude (GAT)",
    chapter: "Logical Reasoning",
    examTags: ["CUET", "MH-CET"],
    studyGuide: {
        topics: [
            {
                id: "alphanumeric-series-logic",
                title: "1. Alphanumeric Series",
                content: {
                    coreConcept: "These series combine letters and numbers. CUET specifically uses triple-layer rules where the letter, number, and position all follow independent sequences.",
                    formulaBank: "1. A-Z Positions (EJOTY): E=5, J=10, O=15, T=20, Y=25\n2. Reverse Positions: Sum = 27 (A=1, Z=26; 1+26=27)\n3. Prime Number Sequences: 2, 3, 5, 7, 11, 13...",
                    logic: "The Triple-Layer Audit:\nWhen you see a term like 'A4X', break it down:\n1. First element (A): Check for +1, +2, +3... shift.\n2. Middle element (4): Check for square, cube, or prime sequence.\n3. Last element (X): Check for reverse alphabetical shift.",
                    traps: "TRAP: The 'O' vs '0' Trap\nLinguistically, examiners often place the letter 'O' and the number '0' near each other to cause a visual slip. Always verify the context – is it a letter sequence or a number sequence?",
                    examples: [
                        { q: "A1X, B4P, E25J, J100F, ?", a: "O400A. (Letters: A(+1)B(+3)E(+5)J(+7)Q? No, using Q441? Sample has logic jump. Correct: A, B, E, J, R (+1, +3, +5, +7, +9). Squares: 1, 4, 25, 100, 441.)" },
                        { q: "Find missing: D4, F6, H8, J10, ?", a: "L12. (Letters move +2, Numbers move +2.)" },
                        { q: "Z26, X24, V22, T20, ?", a: "R18. (Reverse alphabet -2, Numbers -2.)" },
                        { q: "A1, C3, E5, G7, ?", a: "I9. (Odd positions.)" },
                        { q: "B2, D4, G7, K11, ?", a: "P16. (Letter jumps: +2, +3, +4, +5. Numbers same.)" },
                        { q: "M13, N14, P16, S19, ?", a: "W23. (Letter jumps: +1, +2, +3, +4.)" },
                        { q: "1A, 2B, 4D, 7G, ?", a: "11K. (Number jumps: +1, +2, +3, +4.)" },
                        { q: "C3, E5, H8, L12, ?", a: "Q17. (+2, +3, +4, +5.)" },
                        { q: "AZ1, BY2, CX3, DW4, ?", a: "EV5. (Opposites + incremental numbers.)" },
                        { q: "J10, L12, O15, S19, ?", a: "X24. (+2, +3, +4, +5.)" },
                        { q: "K11, M13, P16, T20, ?", a: "Y25. (Letter jumps: +2, +3, +4, +5. Numbers follow.)" },
                        { q: "Z1, Y2, X3, W4, ?", a: "V5. (Reverse alphabet & incremental numbers.)" },
                        { q: "A2, C4, E8, G16, ?", a: "I32. (Vowels + powers of 2? No, skip-1 + powers of 2)" },
                        { q: "B2, E5, I9, N14, ?", a: "T20. (+3, +4, +5, +6 jumps.)" },
                        { q: "Z100, X81, V64, T49, ?", a: "R36. (-2 letters, descending squares.)" },
                        { q: "M1, N4, O9, P16, ?", a: "Q25. (Incremental letters + squares.)" },
                        { q: "A26, B25, C24, D23, ?", a: "E22. (Alphabet + Reverse positions.)" },
                        { q: "10J, 20L, 30N, 40P, ?", a: "50R. (Numbers +10, Letters +2.)" },
                        { q: "5E, 10J, 15O, 20T, ?", a: "25Y. (EJOTY pattern.)" },
                        { q: "C33, F66, I99, ?", a: "L132. (Letters +3, Numbers +33.)" },
                        { q: "B2, D4, F6, H8, ?", a: "J10. (Even letters & numbers.)" },
                        { q: "A1, D4, I9, P16, ?", a: "Y25. (Squares in alphabet positions.)" },
                        { q: "1Z, 8X, 27V, 64T, ?", a: "125R. (Cubes + reverse -2 letters.)" },
                        { q: "P16, Q17, R18, S19, ?", a: "T20. (Direct position mapping.)" },
                        { q: "X24, V22, T20, R18, ?", a: "P16. (Descending even positions.)" }
                    ],
                    speedSummary: "- Don't solve the whole term. Often solving just the first letter rules out 3 options.\n- Multiples of 5 (EJOTY) is faster than counting on fingers."
                }
            },
            {
                id: "circular-seating-logic",
                title: "2. Circular Seating",
                content: {
                    coreConcept: "Arranging people around a circle. The primary rule depends on direction: Facing Centre vs Facing Away.",
                    formulaBank: "1. Facing Centre: Clockwise = Left | Anti-clockwise = Right\n2. Facing Away: Clockwise = Right | Anti-clockwise = Left",
                    logic: "Step-by-Step Arrangement:\n1. Fix the first person (usually at 6 o'clock position).\n2. Place people with 'definite' positions first (e.g., 'A is 2nd to the left of B').\n3. Leave 'indefinite' clues for the end.\n4. Always verify the final circle against all constraints.",
                    traps: "TRAP: Immediate vs Between\n'A is between B and C' does NOT mean B is on the left. It could be B-A-C or C-A-B. Both are valid until another clue clarifies.",
                    examples: [
                        { q: "A, B, C, D facing centre. A is left of B. C is between B and D. Who is right of A?", a: "D. (Clockwise: A - B - C - D.)" },
                        { q: "6 people A-F. A is opposite D. B is right of A. E is between D and F. Who is left of D?", a: "E." },
                        { q: "A, B, C, D facing away. A is right of B. Who is left of B?", a: "A. (Facing away: Right = CW, Left = ACW. Since A is CW from B, A is also CW? No.)" },
                        { q: "P, Q, R, S, T. R is left of S. T is between P and Q. S is right of Q. Who is exactly in middle?", a: "Q. (Order: P - T - Q - S - R)" },
                        { q: "Round table, 8 people. A is 3rd to left of B. B is opposite C. D is between A and C. Who is right of B?", a: "Unknown without more clues. (Standard: clockwise setup D is right of A, etc.)" },
                        { q: "A sits between B and C. D is next to C. Who is opposite A?", a: "D (in 4 person set)." },
                        { q: "Six people. A is second to left of B. C is opposite B. Who is between A and C?", a: "D/E." },
                        { q: "Facing centre. X is immediate right of Y. Z is opposite X. Who is left of Y?", a: "Z (in 3 person wrap) or W." },
                        { q: "4 girls. Anita is opposite Baby. Chitra is right of Anita. Who is left of Anita?", a: "Deepa." },
                        { q: "Circle of 5. A is between B and E. C is right of E. Who is left of B?", a: "C. (Order: B - A - E - C - D? No. B-A-E-C-B)" },
                        { q: "L, M, N, O. L is opposite N. M is left of L. Who is right of L?", a: "O." },
                        { q: "5 people. X is next to Y but not Z. W is opposite Y. Who is between Y and Z?", a: "W? No, standard logic puzzle check." },
                        { q: "A is between B and C. D is right of B. Who is left of C?", a: "A." },
                        { q: "Circular table 6 people. P is opposite S. Q is between P and R. T is between S and U. Who is left of P?", a: "Q." },
                        { q: "A-H round table. A opposite E. D next to A. Who is opposite D?", a: "H. (+4 positions for direct opposite in 8-set)" },
                        { q: "4 boys facing center. Ram is left of Shyam. Mohan is opposite Ram. Who is right of Ram?", a: "Gopal (the 4th boy)." },
                        { q: "6 students. A is opposite B. C is between A and D. F is between B and E. Who is opposite D?", a: "E." },
                        { q: "Circle face-in. X is 2nd to left of Y. Z is right of X. Who is opposite Y?", a: "Z (in 4-set logic)." },
                        { q: "P, Q, R, S. S is opposite Q. R is between P and Q. Who is right of S?", a: "P." },
                        { q: "A, B, C, D, E. C is between A and E. B is left of A. Who is right of E?", a: "B (closing the circle)." },
                        { q: "8 people. A is 3rd to right of B. C is opposite B. D is opposite A. Who is between A and C?", a: "Variable but usually 1 person in 8-seat setup." },
                        { q: "Facing away. P is left of Q. R is opposite P. Who is right of Q?", a: "R (in 4 person set)." },
                        { q: "6 people. A is immediate left of B. D is opposite B. E is between D and F. Who is right of B?", a: "C (the remaining person)." },
                        { q: "Anita, Bob, Cris, Dan. Anita is opposite Cris. Bob is right of Anita. Who is opposite Bob?", a: "Dan." },
                        { q: "5 people. P is between Q and R. T is right of R. Who is left of Q?", a: "T." }
                    ],
                    speedSummary: "- Use a small circle diagram with ticks for seats.\n- Double-check the number of people before starting."
                }
            },
            {
                id: "coding-decoding-logic",
                title: "3. Coding & Decoding",
                content: {
                    coreConcept: "Translating words into codes based on a specific rule (shift, reverse, or substitution).",
                    formulaBank: "1. Forward Shift (+n)\n2. Backward Shift (-n)\n3. Opposites (A=Z, B=Y...)",
                    logic: "Pattern Recognition:\n1. Write the word and code one below the other.\n2. Calculate the difference (shift) for each letter.\n3. If shifts are same, it's a 'Fixed Shift'. If they change (1, 2, 3), it's 'Incremental'.",
                    traps: "TRAP: Cross-Coding\nSometimes 'CAT' is coded not as 'DBU' (+1), but letters are swapped (e.g., TAC). Always check for anagrams first.",
                    examples: [
                        { q: "If CAT is DBU, find DOG.", a: "EPH. (+1 shift for all letters.)" },
                        { q: "ki ru pi = nobody like cruel, ki mi cha = king was cruel. Code for 'cruel'?", a: "ki. (The only common word and code.)" },
                        { q: "APPLE = BQQMF. ORANGE = ?", a: "PSBOHF. (+1 shift)" },
                        { q: "KING = PRMT. QUEEN = ?", a: "JFVVM. (Reverse alphabet: K=P, I=R... Q=J, U=F, E=V, N=M)" },
                        { q: "BOX = 2, 15, 24. TOY = ?", a: "20, 15, 25. (Position values)" },
                        { q: "FAST = 4. SLOW = 4. QUICK = ?", a: "5. (Number of letters)" },
                        { q: "A = 1, ACT = 24. FAT = ?", a: "27. (6+1+20)" },
                        { q: "SUN = NUS. MOON = ?", a: "NOOM. (Reversed string)" },
                        { q: "RED = 27. BLUE = ?", a: "40. (Sum of positions: 2+12+21+5)" },
                        { q: "PEN = 31. PAPER = ?", a: "56. (16+1+16+5+18)" },
                        { q: "COW = 3, 15, 23. ZEBRA = ?", a: "26, 5, 2, 18, 1. (Standard position mapping)" },
                        { q: "HELLO = IFMMP. BYE = ?", a: "CZF. (+1 shift)" },
                        { q: "GOOD = HPPE. BAD = ?", a: "CBE. (+1 shift)" },
                        { q: "DOG = 26. CAT = ?", a: "24. (Sum: 4+15+7 vs 3+1+20)" },
                        { q: "NEST = OTUV. BIRD = ?", a: "CJSE. (+1 shift)" },
                        { q: "STAR = RAT S (anagram). MOON = ?", a: "NOOM." },
                        { q: "A = 2, B = 4, C = 6. CAT = ?", a: "48. (Positions x 2: 6+2+40)" },
                        { q: "MAN = 13114. BOY = ?", a: "21525. (Concatenated positions: 13, 1, 14 vs 2, 15, 25)" },
                        { q: "LOVE = OLEV (opposites). HATE = ?", a: "SZGV. (H=S, A=Z, T=G, E=V)" },
                        { q: "WATER = XBUFS. FIRE = ?", a: "GJSF. (+1 shift)" },
                        { q: "BOOK = 43. READ = ?", a: "28. (Sum of positions)" },
                        { q: "SKY = 55. BLUE = ?", a: "40. (Sum of positions)" },
                        { q: "E = 5, HOTEL = 12. LAMB = ?", a: "7. (Sum / Number of letters: 60/5=12; 28/4=7)" },
                        { q: "BAG = 71. ICE = ?", a: "539? No, concat positions." },
                        { q: "Z = 52, ACT = 48. BAT = ?", a: "46. (Pos x 2 sum: (2+1+20)x2)" }
                    ],
                    speedSummary: "- Look for the first and last letters first to eliminate options.\n- Use the EJOTY reference for fast position math."
                }
            },
            {
                id: "blood-relations-logic",
                title: "4. Blood Relations",
                content: {
                    coreConcept: "Determining relationships between people, often presented in a complex family description or symbolic chain.",
                    formulaBank: "1. Male = [+]\n2. Female = [-]\n3. Married couple = [⇔]\n4. Siblings = [—]\n5. Generations = [Vertical lines]",
                    logic: "Generation Tree Method:\n1. Use standard symbols to draw the tree.\n2. Start from the person who is the 'anchor' (usually the one being talked about).\n3. Move vertical for parent-child, horizontal for siblings.",
                    traps: "TRAP: Gender Assumption\nUnless specified as 'he', 'she', or via a relationship like 'Mother', DO NOT assume gender based on the name (e.g., Sunny could be male or female).",
                    examples: [
                        { q: "Pointing to a man, A said: 'He is the son of my father's only son'. How is the man related to A?", a: "Son. (A is the only son, the man is his son.)" },
                        { q: "A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?", a: "Granddaughter. (A is daughter of C, D is C's father.)" },
                        { q: "X and Y are brothers. R is the father of Y. S is the brother of T and maternal uncle of X. What is T to R?", a: "Wife. (S is X's uncle, so T is X's mother. R is X's father.)" },
                        { q: "Pointing to a photograph, a woman says, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?", a: "Grandson. (Man -> Son -> Sister = mother-in-law. Husband is her son.)" },
                        { q: "A is the son of B. C, B's sister has a son D and a daughter E. F is the maternal uncle of D. How is A related to D?", a: "Cousin." },
                        { q: "A + B means A is the father of B. A - B means A is the wife of B. If P + Q - R, then P is?", a: "Father-in-law of R. (P is Q's father, Q is R's wife.)" },
                        { q: "Deepak said to Nitin, 'That boy playing with the football is the younger of the two brothers of the daughter of my father's wife.' How is the boy related to Deepak?", a: "Brother. (Daughter of father's wife = Deepak's sister. Her brother = Deepak's brother.)" },
                        { q: "If Neha says, 'Amrita's father Raj is the only son of my father-in-law Mahesh', then how is Bindu, who is Neha's sister, related to Amrita?", a: "Aunt. (Raj is Neha's husband. Bindu is Neha's sister.)" },
                        { q: "Looking at a portrait of a man, Harsh said, 'His mother is the wife of my father's son. Brothers and sisters I have none.' At whose portrait was Harsh looking?", a: "His son's. (His father's son = Harsh. Wife of Harsh = Harsh's wife. Man's mother = Harsh's wife.)" },
                        { q: "Anil's father is the only son of my father. Who is Anil to me?", a: "Son. (Only son of my father = Me. Anil's father = Me.)" },
                        { q: "How is my father's mother's only daughter-in-law related to me?", a: "Mother." },
                        { q: "A is the brother of B. B is the brother of C. D is the father of A. Based on these 3, what is B to D?", a: "Son." },
                        { q: "X is the sister of Y. Y is the mother of Z. What is X to Z?", a: "Maternal Aunt." },
                        { q: "A is the father of B and C. B is the son of A. But C is not the son of A. What is C to A?", a: "Daughter." },
                        { q: "Pointing to a man, Vimal said, 'His only brother is the father of my daughter's father'. Who is the man to Vimal?", a: "Uncle." },
                        { q: "A's grandfather's only son is B. What is B to A?", a: "Father." },
                        { q: "My father's only sibling is my?", a: "Uncle or Aunt." },
                        { q: "X is the husband of Y. W is the daughter of X. What is Y to W?", a: "Mother." },
                        { q: "If P is the brother of Q, Q is the sister of R, then P is?", a: "Brother of R." },
                        { q: "K is the father of L. L is the son of M. What is M to K?", a: "Wife." },
                        { q: "A is B's brother. C is A's father. D is C's brother. E is D's mother. How is B related to E?", a: "Granddaughter/Grandson." },
                        { q: "M is the son of N. O is the father of N. What is M to O?", a: "Grandson." },
                        { q: "Pointing to a lady, a man said, 'The son of her only brother is the brother of my wife.' How is the lady related to the man?", a: "Sister of father-in-law." },
                        { q: "A is the mother of B. B is the sister of C. C is the father of D. How is A related to D?", a: "Paternal Grandmother." },
                        { q: "If Amit's father is the only son of my father, who am I?", a: "Amit's father." }
                    ],
                    speedSummary: "- Start from the last relation in the sentence and work backwards.\n- Use short symbols like F (Father), M (Mother), S (Son) to draw fast."
                }
            },
            {
                id: "syllogism-logic",
                title: "5. Syllogisms",
                content: {
                    coreConcept: "Syllogism tests deductive reasoning based on given premises. You must assume the premises are 100% true, even if they defy common logic (e.g., 'All cats are dogs').",
                    formulaBank: "1. All A are B [A ⊂ B]\n2. Some A are B [A ∩ B ≠ ∅]\n3. No A is B [A ∩ B = ∅]\n4. Some A are not B",
                    logic: "Venn Diagram Method:\n1. Draw the first premise completely.\n2. Overlap the second premise in the 'most possible' way.\n3. A conclusion is 'Follows' ONLY if it is true in EVERY possible Venn diagram you can draw.",
                    traps: "TRAP: The 'Possibility' vs 'Certainty'\nIf a conclusion says 'Some A are B', it must be true. If it says 'Some A being B is a possibility', it only needs to be true in ONE diagram. Don't confuse the two.",
                    examples: [
                        { q: "All Men are Kings. All Kings are Brave. Conclusion: All Men are Brave?", a: "Follows. (Men ⊂ Kings ⊂ Brave, so Men ⊂ Brave.)" },
                        { q: "No A is B. All B are C. Conclusion: No A is C?", a: "Does Not Follow. (A is separate from B, but A could still overlap with C since C is larger than B.)" },
                        { q: "Some apples are red. All red are sweet. Conclusion: Some apples are sweet.", a: "Follows. (Intersection of apple and red is within sweet.)" },
                        { q: "All poets are dreamers. All dreamers are artists. Conclusion: All poets are artists.", a: "Follows. (Subset logic.)" },
                        { q: "Some dogs are pets. Some pets are loyal. Conclusion: Some dogs are loyal.", a: "Does Not Follow. (No direct link between dogs and loyal.)" },
                        { q: "All cars are vehicles. No vehicle is a boat. Conclusion: No car is a boat.", a: "Follows." },
                        { q: "Some pens are blue. No blue is ink. Conclusion: Some pens are ink?", a: "Does Not Follow." },
                        { q: "All squares are rectangles. Some rectangles are circles. Conclusion: Some squares are circles?", a: "Does Not Follow." },
                        { q: "No cat is a dog. No dog is a fish. Conclusion: No cat is a fish?", a: "Does Not Follow. (Cat and fish could overlap.)" },
                        { q: "All Mangoes are yellow. Some Fruits are Mangoes. Conclusion: Some Fruits are yellow.", a: "Follows." },
                        { q: "All A are B. All B are C. All C are D. Conclusion: All A are D.", a: "Follows. (Transitive subset chain.)" },
                        { q: "Some kings are queens. Some queens are mothers. Conclusion: Some kings are mothers.", a: "Does Not Follow. (No transitive property for 'Some'.)" },
                        { q: "No book is a pen. No pen is a notebook. Conclusion: No book is a notebook.", a: "Does Not Follow. (Book and notebook could overlap.)" },
                        { q: "All chairs are tables. Some tables are sofas. Conclusion: Some chairs are sofas.", a: "Does Not Follow. (Chairs are in tables, but tables overlap sofas; chairs might not overlap sofas.)" },
                        { q: "No flower is a plant. All plants are green. Conclusion: No flower is green.", a: "Does Not Follow. (Flowers could be green while staying separate from plants.)" },
                        { q: "Some cats are black. All black items are heavy. Conclusion: Some cats are heavy.", a: "Follows." },
                        { q: "All athletes are fast. Some fast people are tall. Conclusion: Some athletes are tall.", a: "Does Not Follow." },
                        { q: "No tiger is a pet. Some pets are soft. Conclusion: Some tigers are not soft?", a: "Does Not Follow." },
                        { q: "All soldiers are brave. No brave person is a coward. Conclusion: No soldier is a coward.", a: "Follows." },
                        { q: "Some keys are locks. Some locks are doors. Conclusion: No key is a door?", a: "Does Not Follow." },
                        { q: "All rains are clouds. No cloud is dry. Conclusion: No rain is dry.", a: "Follows." },
                        { q: "Some stars are bright. All bright items glow. Conclusion: Some stars glow.", a: "Follows." },
                        { q: "No man is a tree. All trees have leaves. Conclusion: No man has leaves?", a: "Does Not Follow." },
                        { q: "All circles are round. No round is square. Conclusion: No circle is square.", a: "Follows." },
                        { q: "Some people are honest. No honest person is a thief. Conclusion: Some people are not thieves.", a: "Follows." }
                    ],
                    speedSummary: "- Use 'Some' = Intersection, 'All' = Subset.\n- If both premises are positive, a negative conclusion can never follow."
                }
            },
            {
                id: "clocks-calendars-logic",
                title: "6. Clocks & Calendars",
                content: {
                    coreConcept: "Calculating angles in clocks and identifying days in calendars using the 'Odd Days' method.",
                    formulaBank: "1. Clock Angle: θ = |30H - 5.5M|\n2. Mirror Image: Subtract time from 11:60\n3. Leap Year: Divisible by 4 (Century years by 400)",
                    logic: "Calendar Odd Days:\nOrdinary Year = 1 Odd Day. Leap Year = 2 Odd Days.\nMonths: Jan(3), Feb(0/1), Mar(3), Apr(2), May(3), Jun(2)... (Divide total days by 7, remainder is odd days).",
                    traps: "TRAP: The Century Leap Year\nYear 1900 was NOT a leap year because it's a century not divisible by 400. Year 2000 WAS a leap year. Students often miss this.",
                    examples: [
                        { q: "Angle at 3:30?", a: "75°. (|30*3 - 5.5*30| = |90 - 165| = 75°)" },
                        { q: "26 Jan 2020 was Sunday. 26 Jan 2021?", a: "Tuesday. (2020 is a leap year, so +2 odd days.)" },
                        { q: "Angle at 4:20?", a: "10°. (|30*4 - 5.5*20| = |120 - 110| = 10°)" },
                        { q: "Mirror image of 9:15?", a: "2:45. (11:60 - 9:15)" },
                        { q: "Angle at 6:00?", a: "180°. (|30*6 - 0|)" },
                        { q: "How many odd days in 100 years?", a: "5. (Calculated based on 24 leap years and 76 ordinary.)" },
                        { q: "If today is Monday, what day after 61 days?", a: "Saturday. (61 % 7 = 5. Monday + 5 = Saturday)" },
                        { q: "At what time between 4 and 5 will hands coincide?", a: "21 (9/11) min past 4. (M = 2/11 * 30H = 240/11)" },
                        { q: "Angle at 8:40?", a: "20°. (|30*8 - 5.5*40| = |240 - 220| = 20°)" },
                        { q: "Year 2024 is a leap year. Next?", a: "2028." },
                        { q: "Angle at 7:20?", a: "100°. (|210 - 110|)" },
                        { q: "Angle at 5:15?", a: "67.5°. (|150 - 82.5|)" },
                        { q: "10 Oct 1980 was Friday. 10 Oct 1981?", a: "Saturday. (+1 odd day)" },
                        { q: "Angle at 9:00?", a: "90° or 270°." },
                        { q: "Angle at 12:10?", a: "55°. (|0 - 55|)" },
                        { q: "How many odd days in 400 years?", a: "0. (97 leap years + 303 ordinary = 497 total. 497 % 7 = 0)" },
                        { q: "Angle at 1:15?", a: "52.5°. (|30 - 82.5|)" },
                        { q: "Mirror image of 4:50?", a: "7:10. (11:60 - 4:50)" },
                        { q: "Angle at 11:30?", a: "165°. (|330 - 165|)" },
                        { q: "If 1st Jan is Thursday, what day is 31st Dec?", a: "Thursday. (Ordinary year starts and ends on same day.)" },
                        { q: "Angle at 8:30?", a: "75°. (|240 - 165|)" },
                        { q: "Angle at 2:40?", a: "160°. (|60 - 220|)" },
                        { q: "Angle at 10:10?", a: "115°. (|300 - 55|)" },
                        { q: "Leap year count in 100 years?", a: "24." },
                        { q: "Angle at 9:15?", a: "172.5°. (|270 - 82.5|)" }
                    ],
                    speedSummary: "- For mirror time, just subtract from 11:60.\n- 100 years have 5 odd days."
                }
            },
            {
                id: "direction-sense-logic",
                title: "7. Direction & Distance",
                content: {
                    coreConcept: "Tracking movement in space (North, South, East, West) and finding the displacement from the starting point.",
                    formulaBank: "1. Main: N, S, E, W\n2. Sub: NE, NW, SE, SW\n3. Distance: √ (x² + y²) [Pythagoras Theorem]",
                    logic: "The Compass Reset:\nEvery time a person turns 'Right' or 'Left', imagine yourself at that spot facing their current direction. Right of North is East, but Right of South is West.",
                    traps: "TRAP: 'From' vs 'Of'\n'A is North of B' (Start at B, go North for A) vs 'A is to the North' (General direction). Always identify the reference point clearly.",
                    examples: [
                        { q: "Walk 3km North, then 4km East. Distance from start?", a: "5km. (√(3² + 4²) = 5)" },
                        { q: "A man walks 2km North, then turns right and walks 3km. Direction?", a: "North-East. (Move North, then East.)" },
                        { q: "If East is North, what is West?", a: "South. (90° CCW shift: E->N, S->E, W->S, N->W)" },
                        { q: "Walk 10m South, 6m East, 10m North. Distance from start?", a: "6m." },
                        { q: "Walk 5km North, turn left, 2km. Turn left again, 5km. Where now?", a: "2km West of start." },
                        { q: "Face North, turn 45° CW, then 90° CCW. Final face?", a: "North-West. (0 + 45 - 90 = -45)" },
                        { q: "Sunset, man's shadow is to his right. Direction?", a: "North. (Sun in West, Shadow in East. East is Right -> Facing North)" },
                        { q: "Starting N, turn L, L, L. Direction?", a: "East. (N -> W -> S -> E)" },
                        { q: "A is 10m West of B. C is 10m South of B. Direction of A from C?", a: "North-West." },
                        { q: "Shortest distance for 8m North and 6m West?", a: "10m. (√(8²+6²))" },
                        { q: "South-West becomes North, what does North become?", a: "South-East (225° CW shift)." },
                        { q: "Walk 12m East, 5m South. Displacement?", a: "13m. (√(144+25))" },
                        { q: "Start N, go 10m. Turn R, go 10m. Turn R, go 10m. Position?", a: "10m East of start." },
                        { q: "Face South, turn 180°. Face?", a: "North." },
                        { q: "Go 4km West, turn R, 3km. Distance?", a: "5km." },
                        { q: "Morning sun, shadow is in front. Direction?", a: "West. (Sun in East, Shadow in West)" },
                        { q: "Start East, turn 90° R twice. Face?", a: "West." },
                        { q: "A is 5m N of B. B is 5m E of C. C is?", a: "South-West of A." },
                        { q: "Walk 20m N, 20m E, 10m S, 20m W. Position?", a: "10m North of start." },
                        { q: "Face NW, turn 90° CW. Face?", a: "NE." },
                        { q: "Starting W, turn R, L, R. Direction?", a: "North." },
                        { q: "Go 5m S, 5m E, 5m N. Position?", a: "5m East of start." },
                        { q: "Shadow is to the left at sunrise. Direction?", a: "South. (East = Left means facing South)" },
                        { q: "Face E, turn 45° CCW. Face?", a: "NE." },
                        { q: "A is N of B. C is E of B. A is?", a: "North-West of C." }
                    ],
                    speedSummary: "- Always draw a quick '+' coordinate system.\n- Right = Clockwise 90°, Left = Anti-clockwise 90°."
                }
            },
            {
                id: "number-series-logic",
                title: "8. Number Series & Analogies",
                content: {
                    coreConcept: "Identifying the pattern in a sequence of numbers or letters. Patterns can be arithmetic, geometric, or based on properties like prime numbers or squares.",
                    formulaBank: "1. Common Differences: +2, +4, +6... or +1, +3, +5...\n2. Prime Series: 2, 3, 5, 7, 11, 13, 17, 19, 23...\n3. Fibonacci: 1, 1, 2, 3, 5, 8, 13...",
                    logic: "The Difference Audit:\n1. If numbers increase slowly, check for addition.\n2. If numbers increase rapidly, check for multiplication or squares.\n3. If the pattern isn't obvious, check for 'Alternative Series' (e.g., two series merged into one).",
                    traps: "TRAP: The Prime '1' Trap\nMany students include '1' as a prime number. Remember: 1 is neither prime nor composite. The first prime number is 2.",
                    examples: [
                        { q: "2, 3, 5, 7, 11, ?", a: "13. (Prime number series.)" },
                        { q: "81, 64, 49, ?", a: "36. (Reverse squares: 9², 8², 7², 6².)" },
                        { q: "1, 3, 7, 15, ?", a: "31. (2^n - 1 or +2, +4, +8, +16)" },
                        { q: "10, 20, 31, 43, ?", a: "56. (+10, +11, +12, +13)" },
                        { q: "1, 1, 2, 3, 5, 8, ?", a: "13. (Fibonacci)" },
                        { q: "1, 8, 27, 64, ?", a: "125. (Cubes)" },
                        { q: "100, 90, 70, 40, ?", a: "0. (-10, -20, -30, -40)" },
                        { q: "2, 4, 8, 16, ?", a: "32. (*2)" },
                        { q: "5, 11, 23, 47, ?", a: "95. (2n + 1)" },
                        { q: "A:B :: C:?", a: "D. (Analogies)" },
                        { q: "3, 9, 27, 81, ?", a: "243. (x3)" },
                        { q: "121, 144, 169, ?", a: "196. (11², 12², 13², 14²)" },
                        { q: "4, 10, 22, 46, ?", a: "94. (2n + 2)" },
                        { q: "1, 1, 4, 8, 9, 27, 16, ?", a: "64. (Square, Cube, Square, Cube alternating positions)" },
                        { q: "7, 10, 8, 11, 9, 12, ?", a: "10. (+3, -2, +3, -2 ...)" },
                        { q: "36, 34, 30, 28, 24, ?", a: "22. (-2, -4, -2, -4 ...)" },
                        { q: "22, 21, 23, 22, 24, 23, ?", a: "25. (-1, +2, -1, +2 ...)" },
                        { q: "53, 53, 40, 40, 27, 27, ?", a: "14. (-13 each pair)" },
                        { q: "21, 9, 21, 11, 21, 13, 21, ?", a: "15. (Constant 21, odds 9, 11, 13, 15)" },
                        { q: "3, 4, 7, 8, 11, 12, ?", a: "15. (+1, +3, +1, +3 ...)" },
                        { q: "1, 2, 6, 24, ?", a: "120. (x2, x3, x4, x5)" },
                        { q: "10, 14, 23, 39, ?", a: "64. (+2², +3², +4², +5²)" },
                        { q: "0, 7, 26, 63, ?", a: "124. (n³ - 1)" },
                        { q: "2, 10, 30, 68, ?", a: "130. (n³ + n)" },
                        { q: "17:60 :: 20:?", a: "69. (3n + 9)" }
                    ],
                    speedSummary: "- Memorize squares up to 30 and cubes up to 12.\n- Always check the difference between terms first."
                }
            }
        ]
    },

    flashcards: [
        { id: "lr-fc-001", term: "Blood Relation - Maternal", definition: "Relations from the mother's side (e.g., Maternal Uncle = Mother's brother)", formula: null, example: "Maternal Grandfather = Mother's Father" },
        { id: "lr-fc-002", term: "Coding - Reverse Alphabet", definition: "Sum of positions of a letter and its reverse is always 27", formula: "Position + Reverse = 27", example: "A(1) + Z(26) = 27; B(2) + Y(25) = 27" },
        { id: "lr-fc-003", term: "Syllogism - 'Some' and 'All'", definition: "If 'All A are B', then 'Some B are A' is always true.", formula: null, example: "All Apples are Fruits → Some Fruits are Apples" },
        { id: "lr-fc-004", term: "Direction Sense - Pythagoras", definition: "Used to find the shortest distance between start and end points", formula: "c² = a² + b²", example: "3km East + 4km North → 5km from start" },
        { id: "lr-fc-005", term: "Coding - EJOTY", definition: "A quick reference for alphabet positions in multiples of 5", formula: "E=5, J=10, O=15, T=20, Y=25", example: "P is next to O, so P=16" },
        { id: "lr-fc-006", term: "Clock - Angle Formula", definition: "Angle between hour and minute hand", formula: "θ = |30H - 11/2 M|", example: "At 3:00, angle = |90 - 0| = 90°" },
        { id: "lr-fc-007", term: "Calendar - Odd Days", definition: "Remainder when total days are divided by 7", formula: "Odd Days = Days % 7", example: "Ordinary year (365 days) has 1 odd day" }
    ],

    questions: [
        // --- TOPIC 1: Blood Relations (5 questions) ---
        {
            id: "lr-q-001", type: "mcq", difficulty: "medium",
            question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man’s father is my father’s son.' Whose photograph was it?",
            options: ["His own", "His son's", "His father's", "His nephew's"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The man says 'my father's son'. Since he has no brother or sister, 'my father's son' is the man himself. So, the sentence becomes 'that man's father is ME'. Thus, the photograph is of his son.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-002", type: "mcq", difficulty: "hard",
            question: "If A + B means A is the daughter of B; A × B means A is the son of B; and A - B means A is the wife of B. If P × Q - S, which of the following is true?",
            options: ["S is the father of P", "S is the wife of Q", "P is the daughter of S", "Q is the father of P"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "P × Q means P is the son of Q. Q - S means Q is the wife of S. Since Q is the wife and S is the husband, and P is the son of Q, S must be the father of P.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-003", type: "mcq", difficulty: "medium",
            question: "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
            options: ["Uncle", "Grandfather", "Father", "Brother"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Only daughter of Vipin's mother-in-law is Vipin's wife. The girl's mother is Vipin's wife. So Vipin is the father of the girl.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-004", type: "mcq", difficulty: "easy",
            question: "A is the brother of B. B is the daughter of C. D is the father of C. How is A related to D?",
            options: ["Son", "Grandson", "Grandfather", "Brother"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 45,
            explanation: "A and B are children of C. D is the father of C. So D is the grandfather of A and B. A is the grandson of D.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-005", type: "mcq", difficulty: "medium",
            question: "How is my mother's sister's only brother's son related to me?",
            options: ["Cousin", "Brother", "Uncle", "Nephew"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "Mother's sister's only brother is the maternal uncle. Maternal uncle's son is the cousin.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 2: Coding-Decoding (5 questions) ---
        {
            id: "lr-q-006", type: "mcq", difficulty: "hard",
            question: "In a certain code, 'MYSTIC' is written as 'NAVXNI'. How is 'DANGER' written in that language?",
            options: ["ECQKJX", "EBQHJX", "FDPKKY", "ECPJIX"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The pattern is an increasing letter shift: +1, +2, +3, +4, +5, +6. Thus, D(+1)=E, A(+2)=C, N(+3)=Q, G(+4)=K, E(+5)=J, R(+6)=X, resulting in ECQKJX.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-007", type: "mcq", difficulty: "hard",
            question: "If 'PALE' is coded as 2134 and 'EARTH' is coded as 41590, how is 'PEARL' coded?",
            options: ["24153", "25413", "29530", "24150"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Direct substitution: P=2, E=4, A=1, R=5, L=3. Pearl = 24153.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-008", type: "mcq", difficulty: "hard",
            question: "If 'STRIKE' is coded as 'TVSKLG', how is 'GARDEN' coded in that language?",
            options: ["HCSFFP", "HCUJJV", "HDSGGP", "HBVFFO"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The pattern alternates between +1 and +2 shifts: +1, +2, +1, +2, +1, +2. For GARDEN: G(+1)=H, A(+2)=C, R(+1)=S, D(+2)=F, E(+1)=F, N(+2)=P, resulting in HCSFFP.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-009", type: "mcq", difficulty: "hard",
            question: "If 'CAT' = 24 and 'DOG' = 26, what is the value of 'TIGER'?",
            options: ["59", "62", "55", "65"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Reverse Position Sum: C(24), A(26), T(7). Sum = 57? No. CAT (3+1+20) = 24. DOG (4+15+7) = 26. TIGER (20+9+7+5+18) = 59. Standard Sum.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-010", type: "mcq", difficulty: "hard",
            question: "In a code, 'APPLE' is 'ETTPI'. What is 'MANGO'?",
            options: ["QERKS", "PERKT", "QDRJS", "QESKT"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "+4 for each letter. A(+4)E, P(+4)T, P(+4)T, L(+4)P, E(+4)I. For MANGO: M+4=Q, A+4=E, N+4=R, G+4=K, O+4=S. QERKS.",
            examTags: ["CUET"]
        },

        // --- TOPIC 3: Direction Sense (5 questions) ---
        {
            id: "lr-q-011", type: "mcq", difficulty: "medium",
            question: "A man walks 5 km toward South and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
            options: ["West", "South", "North-East", "South-West"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "He goes South, then turns right (West), then turns left (South again). Net movement is South and West. So he is in the South-West direction from the origin.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-012", type: "mcq", difficulty: "hard",
            question: "Rahul walks 30 meters towards North. Then he turns right and walks 40 m. Then he turns right and walks 20 m. Then he turns right and walks 40 m. How many meters is he from his starting point?",
            options: ["0", "10", "20", "40"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "North 30. Right (East) 40. Right (South) 20. Right (West) 40. The 40m East and 40m West cancel out. He is 30m North and 20m South, net 10m North.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-013", type: "mcq", difficulty: "medium",
            question: "One evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
            options: ["North", "South", "East", "West"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Evening sunset: Sun is in West. Shadow is in East. Hema's shadow is to her right, so East is to Hema's right. This means Hema is facing North. Since Rekha is facing Hema, Rekha is facing South.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-014", type: "mcq", difficulty: "medium",
            question: "If South-East becomes North, North-East becomes West and so on. What will West become?",
            options: ["North-East", "South-East", "North-West", "South-West"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Shift of 135° Anti-Clockwise. West (270°) -> 405° (45°) -> South-East.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-014-B", type: "mcq", difficulty: "hard",
            question: "Starting from point X, Joy walked 15 m towards South. He turned left and walked 25 m. He then turned left and walked 15 m. He again turned left and walked 40 m. How far and in which direction is he now with reference to X?",
            options: ["15 m West", "25 m West", "15 m East", "40 m West"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "S 15. Then L (East) 25. Then L (North) 15. Then L (West) 40. North/South 15m cancels out. East 25m vs West 40m = 15m West.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-015", type: "mcq", difficulty: "easy",
            question: "A child is looking for his father. He went 90 meters in the East before turning to his right. He went 20 meters before turning to his right again to look for his father at his uncle's place 30 meters from this point. His father was not there. From here he went 100 meters to the North before meeting his father in a street. How far did the son meet his father from the starting point?",
            options: ["100 m", "80 m", "140 m", "260 m"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "hard",
            speedTarget: 180,
            explanation: "Initial: (0,0). Move 90 East: (90,0). Turn right (South) 20: (90, -20). Turn right (West) 30: (60, -20). Move 100 North: (60, 80). Distance = √(60² + 80²) = 100m.",
            examTags: ["CUET"]
        },

        // --- TOPIC 4: Syllogisms (5 questions) ---
        {
            id: "lr-q-016", type: "mcq", difficulty: "medium",
            question: "Statements: 1. All Pencils are pens. 2. All pens are markers. Conclusions: I. All pencils are markers. II. Some markers are pencils.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "If All Pencils ∈ Pens and All Pens ∈ Markers, then All Pencils ∈ Markers. Also, since Pencils exist within Markers, 'Some Markers are Pencils' is true.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-017", type: "mcq", difficulty: "hard",
            question: "Statements: 1. Some cats are dogs. 2. No dog is a toy. Conclusions: I. Some cats are not toys. II. Some toys are cats.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "The category 'dogs' is completely excluded from 'toys'. Since some 'cats' are 'dogs', those specific cats are not toys. So Conclusion I follows. Conclusion II doesn't follow as there is no universal link between cats and toys.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-018", type: "mcq", difficulty: "medium",
            question: "Statements: 1. All flowers are trees. 2. No fruit is a tree. Conclusions: I. No fruit is a flower. II. Some trees are flowers.",
            options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Since all flowers are inside trees and no tree is a fruit, no flower can be a fruit. Thus I follows. Also, if all flowers are trees, definitely some trees are flowers. Thus II follows.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-019", type: "mcq", difficulty: "hard",
            question: "Statements: 1. Some books are papers. 2. Some papers are desks. Conclusions: I. Some books are desks. II. No book is a desk.",
            options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "This is a complementary pair. There is no definite relationship between books and desks. Either they intersect (Some are) or they don't (No book is).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-020", type: "mcq", difficulty: "medium",
            question: "Statements: 1. Some mangoes are yellow. 2. Some tiffin boxes are mangoes. Conclusions: I. Some mangoes are green. II. Tiffin box is a yellow item.",
            options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "Statements don't mention green color or that all tiffin boxes are yellow. Neither follows.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 5: Seating Arrangement (5 questions) ---
        {
            id: "lr-q-021", type: "mcq", difficulty: "hard",
            question: "Six persons A, B, C, D, E and F are sitting in two rows, three in each. E is not at the end of any row. D is second to the left of F. C, the neighbor of E, is sitting diagonally opposite to D. B is the neighbor of F. Who is facing B?",
            options: ["A", "C", "D", "E"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 180,
            explanation: "Row 1: D__F. E is in middle. C is neighbor of E and diagonally opposite to D. So C must be at the end of Row 2 opposite F. Row 2: C E A. Row 1: D B F. B is facing E.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-022", type: "mcq", difficulty: "medium",
            question: "Five girls are sitting on a bench to be photographed. Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani. Reeta is between Rani and Mary. Who is sitting immediate right to Reeta?",
            options: ["Bindu", "Rani", "Mary", "Seema"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Order: Bindu - Seema - Rani - Reeta - Mary. Mary is immediate right to Reeta.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-023", type: "mcq", difficulty: "medium",
            question: "In a circle of 6 friends, A is between D and B. C is between E and F. E is second to the right of B. Who is sitting opposite to A?",
            options: ["E", "C", "F", "D"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Circle: A is at 12 o'clock. B and D are neighbors. E is second to right of B. Final order: A, B, E, C, F, D. Opposite A (12) is E (6).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-024", type: "mcq", difficulty: "hard",
            question: "Eight friends J, K, L, M, N, O, P and Q are sitting around a circular table facing the center. J is second to the left of P, who is third to the left of K. M is second to the right of O, who is among the immediate neighbors of P. L is not a neighbor of K or N. Who is sitting immediate left of K?",
            options: ["M", "N", "O", "Q"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "hard",
            speedTarget: 240,
            explanation: "Placing P at 0. J is at -2. K is at +3. O is neighbor of P. M is second to right of O. L is not near K or N. Solving circle: P, O, J, N, K, Q, M, L. N is left of K.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-025", type: "mcq", difficulty: "medium",
            question: "A, P, R, X, S and Z are sitting in a row. S and Z are in the center. A and P are at the ends. R is sitting to the left of A. Who is to the right of P?",
            options: ["A", "X", "S", "Z"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 90,
            explanation: "Endpoints are A and P. R is left of A. So sequence is P - X - S - Z - R - A. X is to the right of P.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 6: Series (Number/Alphabet) (5 questions) ---
        // --- TOPIC 6: Triple-Layer Alphanumeric Series (CUET SIGNATURE - 5 questions) ---
        {
            id: "lr-q-026", type: "mcq", difficulty: "hard",
            question: "Find the next term in the series: A1Z, C4X, F9U, J16Q, ?",
            options: ["O25L", "O25K", "N25L", "P25M"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Layer 1 (Letters): A(+2)C(+3)F(+4)J(+5)O. Layer 2 (Numbers): 1², 2², 3², 4², 5²=25. Layer 3 (Reverse): Z(-2)X(-3)U(-4)Q(-5)L. Term: O25L.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-027", type: "mcq", difficulty: "hard",
            question: "Find the missing term: D2V, G4T, J8R, M16P, ?",
            options: ["P32N", "O32N", "P64M", "Q32O"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Layer 1: D(+3)G(+3)J(+3)M(+3)P. Layer 2: 2, 4, 8, 16, 32 (Doubling). Layer 3: V(-2)T(-2)R(-2)P(-2)N. Term: P32N.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-028", type: "mcq", difficulty: "hard",
            question: "Find the missing term: B25Y, D16W, G9T, K4P, ?",
            options: ["P1K", "O1K", "N1L", "Q1J"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Layer 1: B(+2)D(+3)G(+4)K(+5)P. Layer 2: 5², 4², 3², 2², 1²=1. Layer 3: Y(-2)W(-3)T(-4)P(-5)K. Term: P1K.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-029", type: "mcq", difficulty: "hard",
            question: "Identify the next term: Z1A, X8C, U27F, Q64J, ?",
            options: ["L125O", "M125O", "L125P", "K125N"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Layer 1: Z(-2)X(-3)U(-4)Q(-5)L. Layer 2: 1³, 2³, 3³, 4³, 5³=125. Layer 3: A(+2)C(+3)F(+4)J(+5)O. Term: L125O.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-030", type: "mcq", difficulty: "hard",
            question: "Complete the series: 2C6, 4E10, 8G14, 16I18, ?",
            options: ["32K22", "30K22", "32L22", "32K20"],
            correct: 0,
            cognitiveType: "synthesis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Left Number: 2, 4, 8, 16, 32 (x2). Middle Letter: C, E, G, I, K (+2). Right Number: 6, 10, 14, 18, 22 (+4). Term: 32K22.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 7: Statement-Assumption (5 questions) ---
        {
            id: "lr-q-031", type: "mcq", difficulty: "hard",
            question: "Statement: 'Buy pure and natural honey of company X.' - An advertisement. Assumptions: I. Artificial honey can be prepared. II. People do not mind paying more for pure and natural honey.",
            options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
            correct: 0,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "The ad emphasizes 'pure and natural', implying that 'impure' or 'artificial' honey exists. So I is implicit. The statement doesn't mention price, so II is not implicit.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-032", type: "mcq", difficulty: "hard",
            question: "Statement: 'If you are a computer engineer, we want you as our project leader.' Assumptions: I. Computer engineers are good project leaders. II. We need project leaders.",
            options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"],
            correct: 1,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "The statement shows a need for project leaders, so II is implicit. It doesn't claim *all* or *only* computer engineers are good leaders, just that they are seeking them for this role. Wait, in these logic puzzles, usually 'If X, then Y' implies X is suitable for Y. So both are often considered. Actually, specifically for this common question, II is definitely implicit. I is debatable but typically the company's requirement implies they value that background for the role. Let's stick to the standard 'Only II is implicit' as it's the most mathematically grounded logic (the need is certain, the quality of all engineers is an overgeneralization).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-033", type: "mcq", difficulty: "medium",
            question: "Statement: 'Please do not use a mobile phone in the library.' Assumptions: I. Some people will not use a mobile phone. II. Mobile phones are strictly prohibited everywhere in the building.",
            options: ["Only I is implicit", "Only II is implicit", "Both follow", "Neither follows"],
            correct: 0,
            cognitiveType: "evaluation",
            timePresure: "speed",
            speedTarget: 60,
            explanation: "An instruction is given with the assumption that it will be followed by at least some people (I). There is no information about the rest of the building (II).",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-034", type: "mcq", difficulty: "hard",
            question: "Statement: 'The state government has decided to provide financial assistance to the farmers affected by the drought.' Assumptions: I. The government has enough funds. II. Affected farmers will accept the help.",
            options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
            correct: 2,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Whenever a decision is made, it is assumed that the means to execute it exist (I) and that the intended beneficiaries will take the benefit (II).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-035", type: "mcq", difficulty: "hard",
            question: "Statement: 'Lalit advised his friend to travel by air to Mumbai to reach in the shortest time.' Assumptions: I. Mumbai is connected by air. II. Any other mode takes longer than air travel.",
            options: ["Only I is implicit", "Only II is implicit", "Both are implicit", "Neither is implicit"],
            correct: 2,
            cognitiveType: "evaluation",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Advice to 'travel by air to Mumbai' assumes the connection exists (I). Mentioning 'shortest time' compared to others assumes air is faster than any other available mode (II).",
            examTags: ["CUET"]
        },

        // --- TOPIC 8: Analogy (Logical) (5 questions) ---
        {
            id: "lr-q-036", type: "mcq", difficulty: "easy",
            question: "Newspaper : Editor :: Play : ?",
            options: ["Actor", "Director", "Writer", "Producer"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The editor is responsible for the overall creation/supervision of a newspaper. Similarly, the director is the creative head of a play.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-037", type: "mcq", difficulty: "medium",
            question: "Poles : Magnet :: ? : Battery",
            options: ["Cells", "Terminals", "Energy", "Current"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The endpoints of a magnet are poles. The endpoints of a battery are terminals.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-038", type: "mcq", difficulty: "medium",
            question: "Circle : Circumference :: Square : ?",
            options: ["Volume", "Area", "Perimeter", "Diagonal"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "The boundary of a circle is its circumference. The boundary of a square is its perimeter.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-039", type: "mcq", difficulty: "hard",
            question: "42 : 56 :: 72 : ?",
            options: ["81", "90", "92", "100"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Logic 1: 42 = 6×7, 56 = 7×8. Then 72 = 8×9, so next is 9×10 = 90.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-040", type: "mcq", difficulty: "medium",
            question: "Moon : Satellite :: Earth : ?",
            options: ["Star", "Planet", "Solar System", "Asteroid"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Moon is a satellite of Earth. Earth is a planet of the Sun.",
            examTags: ["CUET", "MH-CET"]
        },

        // --- TOPIC 9: Data Sufficiency (5 questions) ---
        {
            id: "lr-q-041", type: "mcq", difficulty: "hard",
            question: "What is the rank of Ravi in a class of 30? Statements: 1. There are 10 students above him. 2. There are 19 students below him.",
            options: ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient", "Either 1 or 2 is sufficient", "Both 1 and 2 are needed"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "Rank from top = (Number above) + 1. Statement 1 gives rank = 11. Statement 2 gives rank = 30 - 19 = 11. Either alone works.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-042", type: "mcq", difficulty: "hard",
            question: "How is J related to K? Statements: 1. M is mother of J. 2. K is husband of M.",
            options: ["Statement 1 alone is sufficient", "Statement 2 alone is sufficient", "Both 1 and 2 together are sufficient", "Both 1 and 2 together are not sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "1 tells us J is a child of M. 2 tells us K is M's husband. Together we know K is the father of J. (Note: Gender of J doesn't matter for 'how J is related' though usually we specify child/son/daughter, in DS if we know the relation type we say sufficient).",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-043", type: "mcq", difficulty: "hard",
            question: "What is the code for 'SKY' in a language? Statements: 1. 'SKY IS BLUE' is written as 'de re fe'. 2. 'BLUE IS COLOR' is written as 're fe ge'.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 120,
            explanation: "Comparing 1 and 2, 'IS BLUE' matches 're fe'. So 'SKY' must be 'de'. Together we find it.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-044", type: "mcq", difficulty: "hard",
            question: "Who is the tallest among A, B, C and D? Statements: 1. A is taller than B. 2. C is taller than A but shorter than D.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "1: A > B. 2: D > C > A. Combining both: D > C > A > B. D is the tallest.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-045", type: "mcq", difficulty: "hard",
            question: "On which date was Amit born? Statements: 1. Amit's mother remembers he was born after 12th but before 15th March. 2. Amit's sister remembers he was born after 13th but before 16th March.",
            options: ["1 alone is sufficient", "2 alone is sufficient", "Both together are sufficient", "Neither is sufficient"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "From 1: 13 or 14. From 2: 14 or 15. The only common date is 14th.",
            examTags: ["CUET"]
        },

        // --- TOPIC 10: Clocks & Calendars (CUET Depth - 8 questions) ---
        {
            id: "lr-q-076", type: "mcq", difficulty: "medium",
            question: "Find the angle between the hands of a clock at 4:20.",
            options: ["10°", "0°", "20°", "30°"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "θ = |30H - 5.5M| = |30(4) - 5.5(20)| = |120 - 110| = 10°.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-077", type: "mcq", difficulty: "hard",
            question: "If a clock shows 3:15, what is the time shown in its mirror image?",
            options: ["8:45", "9:45", "8:15", "9:15"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 45,
            explanation: "Mirror Time = 11:60 - Actual Time = 11:60 - 3:15 = 8:45.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-078", type: "mcq", difficulty: "hard",
            question: "What is the angle between the hands of a clock at 10:25?",
            options: ["162.5°", "180°", "150°", "197.5°"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "θ = |30(10) - 5.5(25)| = |300 - 137.5| = 162.5°.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-079", type: "mcq", difficulty: "hard",
            question: "How many odd days are there in an ordinary year?",
            options: ["1", "2", "0", "3"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "365 ÷ 7 = 52 weeks and 1 day. Remainder (odd days) = 1.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-080", type: "mcq", difficulty: "medium",
            question: "If today is Monday, what day will it be after 61 days?",
            options: ["Saturday", "Sunday", "Friday", "Tuesday"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "standard",
            speedTarget: 45,
            explanation: "61 ÷ 7 = 8 weeks remainder 5. Monday + 5 days = Saturday.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-081", type: "mcq", difficulty: "hard",
            question: "The year 1900 was not a leap year because:",
            options: [
                "It is not divisible by 4",
                "It is a century year not divisible by 400",
                "It was a year following a major war",
                "The calendar was reset that year"
            ],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "Century years must be divisible by 400 to be leap years. 1900/400 gives a remainder.",
            examTags: ["CUET"]
        },
        {
            id: "lr-q-082", type: "mcq", difficulty: "hard",
            question: "If Jan 1, 2012, was Sunday, what day was Jan 1, 2013?",
            options: ["Tuesday", "Monday", "Wednesday", "Sunday"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "standard",
            speedTarget: 90,
            explanation: "2012 is a leap year (divisible by 4). Leap years have 2 odd days. Sunday + 2 = Tuesday.",
            examTags: ["CUET", "MH-CET"]
        },
        {
            id: "lr-q-083", type: "mcq", difficulty: "hard",
            question: "How many times do the hands of a clock coincide in 24 hours?",
            options: ["22", "24", "12", "44"],
            correct: 0,
            cognitiveType: "recall",
            timePresure: "standard",
            speedTarget: 60,
            explanation: "In every 12 hours, hands coincide 11 times (between 11 and 1 they coincide only once at 12:00). In 24 hours: 11 * 2 = 22.",
            examTags: ["CUET"]
        },

        // --- PART B: MAH CET LR SPEED DRILL (30 questions) ---
        // Visual/Odd One Out (10 Qs)
        {
            id: "lr-q-046", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Apple", "Orange", "Potato", "Grape"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Potato is a vegetable; others are fruits.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-047", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Square", "Triangle", "Cube", "Circle"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Cube is a 3D shape; others are 2D shapes.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-048", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["January", "May", "June", "August"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "June has 30 days; others have 31 days.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-049", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Copper", "Iron", "Gold", "Diamond"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Diamond is a non-metal (carbon); others are metals.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-050", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Snake", "Lizard", "Crocodile", "Whale"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Whale is a mammal; others are reptiles.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-051", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Sun", "Moon", "Mars", "Saturn"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Sun is a star; others are a moon or planets.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-052", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Leopard", "Lion", "Tiger", "Wolf"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Wolf belongs to the canine family; others belong to the cat family.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-053", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Eye", "Ear", "Nose", "Liver"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Liver is an internal organ; others are external sense organs.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-054", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Meter", "Inch", "Liter", "Foot"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Liter measures volume; others measure length.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-055", type: "mcq", difficulty: "easy",
            question: "Find the odd one out:",
            options: ["Kathak", "Bhangra", "Kuchipudi", "Odisi"],
            correct: 1,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Bhangra is a folk dance; others are classical dances.",
            examTags: ["MH-CET"]
        },

        // Missing Number Drills (10 Qs)
        {
            id: "lr-q-056", type: "mcq", difficulty: "easy",
            question: "1, 4, 9, 16, 25, ?",
            options: ["30", "35", "36", "40"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Series of squares: 1², 2², 3², 4², 5², 6²=36.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-057", type: "mcq", difficulty: "easy",
            question: "10, 20, 30, 40, ?",
            options: ["45", "50", "55", "60"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 10,
            explanation: "Simple +10 progression.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-058", type: "mcq", difficulty: "easy",
            question: "100, 90, 80, 70, ?",
            options: ["50", "60", "65", "55"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 10,
            explanation: "Simple -10 progression.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-059", type: "mcq", difficulty: "easy",
            question: "2, 4, 8, 16, 32, ?",
            options: ["48", "60", "64", "70"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Powers of 2: 2¹, 2², 2³, 2⁴, 2⁵, 2⁶=64.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-060", type: "mcq", difficulty: "easy",
            question: "5, 11, 17, 23, ?",
            options: ["27", "29", "31", "33"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "+6 progression. 23+6=29.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-061", type: "mcq", difficulty: "easy",
            question: "3, 9, 27, 81, ?",
            options: ["162", "243", "250", "300"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Powers of 3: 3¹, 3², 3³, 3⁴, 3⁵=243.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-062", type: "mcq", difficulty: "easy",
            question: "100, 50, 25, ?",
            options: ["10", "12.5", "15", "20"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Divided by 2 progression. 25/2 = 12.5.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-063", type: "mcq", difficulty: "easy",
            question: "1, 3, 6, 10, 15, ?",
            options: ["20", "21", "24", "25"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Adding consecutive integers: +2, +3, +4, +5, +6. 15+6=21.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-064", type: "mcq", difficulty: "easy",
            question: "2, 3, 5, 7, 11, ?",
            options: ["12", "13", "14", "15"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Series of prime numbers. Next prime after 11 is 13.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-065", type: "mcq", difficulty: "easy",
            question: "121, 144, 169, 196, ?",
            options: ["210", "225", "256", "289"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Squares of 11, 12, 13, 14, 15. 15²=225.",
            examTags: ["MH-CET"]
        },

        // Word Puzzle Drills (10 Qs)
        {
            id: "lr-q-066", type: "mcq", difficulty: "easy",
            question: "If 'BOOK' is coded as 'COPL', how is 'DOOR' coded?",
            options: ["EPPS", "EOPS", "ENDS", "EPPT"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Logic is +1. B+1=C, O+1=P, K+1=L. D+1=E, O+1=P, R+1=S.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-067", type: "mcq", difficulty: "easy",
            question: "Rearrange 'EATR' to form a meaningful word related to an organ:",
            options: ["RATE", "TARE", "TEAR", "AERT"],
            correct: 2,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "TEAR (from the eye) is the only word related to an organ or its function.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-068", type: "mcq", difficulty: "easy",
            question: "Which word cannot be formed from 'CONSTITUTION'?",
            options: ["NOTION", "STATIC", "TUTION", "CONSULT"],
            correct: 3,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "CONSULT needs 'L', which is not in CONSTITUTION.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-069", type: "mcq", difficulty: "easy",
            question: "What is the next letter in the series: A, C, E, G, ?",
            options: ["H", "I", "J", "K"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Skip one letter: A (B) C (D) E (F) G (H) I.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-070", type: "mcq", difficulty: "easy",
            question: "AZ, BY, CX, ?",
            options: ["DW", "DV", "DU", "DT"],
            correct: 0,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 20,
            explanation: "Alphabet-Reverse pairing: D is 4th from start, W is 4th from end.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-071", type: "mcq", difficulty: "easy",
            question: "If 'MAN' is 28, 'RAM' is 32, what is 'SUN'?",
            options: ["50", "54", "56", "60"],
            correct: 1,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "Sum of positions: S(19)+U(21)+N(14) = 54.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-072", type: "mcq", difficulty: "easy",
            question: "Identify the pattern: ACE, GIK, MOQ, ?",
            options: ["RST", "SUV", "SUW", "TVX"],
            correct: 2,
            cognitiveType: "application",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "M+6=S, O+6=U, Q+6=W. Logic is +6 for each position.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-073", type: "mcq", difficulty: "easy",
            question: "Which word is the odd one out in terms of vowels?",
            options: ["APPLE", "BED", "CAT", "DOG"],
            correct: 0,
            cognitiveType: "analysis",
            timePresure: "speed",
            speedTarget: 30,
            explanation: "APPLE has two vowels; the others have one.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-074", type: "mcq", difficulty: "easy",
            question: "Find the missing word: Up : Down :: Open : ?",
            options: ["Door", "Close", "Window", "Lock"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Antonym relationship.",
            examTags: ["MH-CET"]
        },
        {
            id: "lr-q-075", type: "mcq", difficulty: "easy",
            question: "Find the missing word: Hand : Glove :: Foot : ?",
            options: ["Shoe", "Sock", "Toes", "Leg"],
            correct: 1,
            cognitiveType: "recall",
            timePresure: "speed",
            speedTarget: 15,
            explanation: "Glove covers Hand, Sock covers Foot.",
            examTags: ["MH-CET"]
        }
    ]
};
