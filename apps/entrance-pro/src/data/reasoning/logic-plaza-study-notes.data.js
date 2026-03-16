export const logicPlazaStudyNotes = [
  // Arrangement Arena
  { id: "sn-lp-001", topic: "Linear Arrangements", content: "Always check if people are facing North or South. North: Left is your Left. South: Left is your Right.", diagram: "North Facing:\\n[L] P1 -- P2 -- P3 -- P4 [R]\\n\\nSouth Facing:\\n[R] P1 -- P2 -- P3 -- P4 [L]" },
  { id: "sn-lp-002", topic: "Linear Arrangements", content: "Relative terms: 'To the immediate left' means no one in between. 'Second to the left' means one person in between." },
  { id: "sn-lp-003", topic: "Circular Arrangements", content: "Facing Center: Clockwise is Left, Anti-clockwise is Right." },
  { id: "sn-lp-004", topic: "Circular Arrangements", content: "Facing Outward: Clockwise is Right, Anti-clockwise is Left." },
  { id: "sn-lp-005", topic: "Circular Arrangements", content: "Opposite positions exist only for even number of people (e.g., in a group of 8, person 1 is opposite 5)." },
  { id: "sn-lp-006", topic: "Floor Puzzles", content: "Ground floor is typically numbered 1, and the floor above it 2, and so on." },
  { id: "sn-lp-007", topic: "Floor Puzzles", content: "Use a vertical grid to track occupants along with their attributes (color, profession, etc.)." },
  { id: "sn-lp-008", topic: "Floor Puzzles", content: "Look for 'fixed' clues like 'X lives on the 4th floor' to start the puzzle." },
  
  // Series Street
  { id: "sn-lp-009", topic: "Number Series", content: "Check for prime numbers, squares, and cubes first. They are the most common patterns." },
  { id: "sn-lp-010", topic: "Number Series", content: "If the series grows very fast, look for multiplication or exponential factors." },
  { id: "sn-lp-011", topic: "Number Series", content: "Double difference (the difference of differences) often reveals a constant or arithmetic progression." },
  { id: "sn-lp-012", topic: "Alphabet Series", content: "Memorize E-J-O-T-Y (5-10-15-20-25) for quick letter-to-number mapping." },
  { id: "sn-lp-013", topic: "Alphabet Series", content: "Pairs like A-Z, B-Y, C-X (Sum = 27) are 'Reverse Pairs' often used in coding." },
  { id: "sn-lp-014", topic: "Alphanumeric Series", content: "Solve digits and letters separately. They usually have independent sequences." },
  { id: "sn-lp-015", topic: "Alphanumeric Series", content: "Watch for symbols ($, %, #) which might be placed in alternating positions." },
  
  // Code Corner
  { id: "sn-lp-016", topic: "Letter-Shift Coding", content: "Forward shift (+1, +2) vs Backward shift (-1, -2). Pattern can be constant (+2, +2) or incremental (+1, +2, +3)." },
  { id: "sn-lp-017", topic: "Letter-Shift Coding", content: "Vowel/Consonant rule: Vowels might shift (+1) while Consonants shift (+2)." },
  { id: "sn-lp-018", topic: "Symbol Coding", content: "Direct substitution: If L=$, A=@, then LA=$@. No complex logic, just matching." },
  { id: "sn-lp-019", topic: "Symbol Coding", content: "Contextual symbols: If RED = 27 and BLUE = 40, check if numbers represent Sum of Positional Values." },
  { id: "sn-lp-020", topic: "Coding Tricks", content: "Always check the last letter of the word first; sometimes the shift is reversed (Last becomes First)." },
  
  // Relations Roundabout
  { id: "sn-lp-021", topic: "Blood Relations", content: "Use '+' for Male, '-' for Female. Use horizontal lines for same generation, vertical for parents/children." },
  { id: "sn-lp-022", topic: "Blood Relations", content: "Maternal side = Mother's family; Paternal side = Father's family." },
  { id: "sn-lp-023", topic: "Blood Relations", content: "Important relations: Father's brother is Paternal Uncle, Mother's brother is Maternal Uncle." },
  { id: "sn-lp-024", topic: "Direction Sense", content: "Main directions: North, South, East, West. Cardinals: NE, NW, SE, SW.", diagram: "      N\\n  NW  |  NE\\n    \\ | /\\nW --- + --- E\\n    / | \\\\n  SW  |  SE\\n      S" },
  { id: "sn-lp-025", topic: "Direction Sense", content: "Pythagoras Theorem: H² = P² + B² is frequently used to find shortest distance." },
  { id: "sn-lp-026", topic: "Direction Sense", content: "Shadow logic: Morning (Sun in East) -> Shadow in West. Evening (Sun in West) -> Shadow in East." },
  { id: "sn-lp-027", topic: "Direction Sense", content: "Facing North, a right turn takes you East. Facing South, a right turn takes you West." },
  
  // Logic Lab
  { id: "sn-lp-028", topic: "Syllogisms", content: "All A are B implies A ⊂ B. Some A are B implies A ∩ B ≠ ∅." },
  { id: "sn-lp-029", topic: "Syllogisms", content: "No A is B means they are two separate, non-overlapping circles." },
  { id: "sn-lp-030", topic: "Syllogisms", content: "The 'Only a Few' case: Means 'Some are' AND 'Some are NOT'." },
  { id: "sn-lp-031", topic: "Syllogisms", content: "Possibility cases: If a conclusion is not definite but can be true in ANY one possible diagram, it is a possibility." },
  { id: "sn-lp-032", topic: "Venn Diagrams", content: "Three sets formula: n(A∪B∪C) = n(A)+n(B)+n(C) - n(A∩B)-n(B∩C)-n(C∩A) + n(A∩B∩C)." },
  { id: "sn-lp-033", topic: "Venn Diagrams", content: "Used to represent categorical relationships (e.g., Mammals, Humans, Engineers)." },
  { id: "sn-lp-034", topic: "Statement & Assumptions", content: "An assumption is implicit if it must be true for the statement to hold logical weight." },
  { id: "sn-lp-035", topic: "Statement & Assumptions", content: "Avoid assumptions that are too broad or unrelated to the specific statement." },
  { id: "sn-lp-036", topic: "Course of Action", content: "A valid action must be feasible, constructive, and directly solve the problem stated." },
  { id: "sn-lp-037", topic: "Arguments", content: "Strong arguments address why or how something is beneficial or harmful; weak ones are emotional or irrelevant." },
  
  // Visual Vault
  { id: "sn-lp-038", topic: "Mirror Images", content: "Lateral inversion: Left becomes Right. The side closest to the mirror stays closest in the reflection." },
  { id: "sn-lp-039", topic: "Mirror Images", content: "Clocks: Mirror time = 11:60 - Actual time." },
  { id: "sn-lp-040", topic: "Water Images", content: "Vertical inversion: Top becomes Bottom. Horizontal axis remains unchanged." },
  { id: "sn-lp-041", topic: "Water Images", content: "Clocks: Water time = 18:30 - Actual time (approximate, adjust if result > 60 mins)." },
  { id: "sn-lp-042", topic: "Paper Folding", content: "Visualize the fold as a mirror. The design on one side reflects onto the other layer." },
  { id: "sn-lp-043", topic: "Paper Cutting", content: "Total holes = (Number of punches) x (Number of layers after all folds)." },
  { id: "sn-lp-044", topic: "Cube & Dice", content: "In a net, the faces that are alternate in a straight line are always opposite." },
  { id: "sn-lp-045", topic: "Cube & Dice", content: "Opposite faces can NEVER be adjacent on a 3D cube view." },
  
  // Advanced Strategies
  { id: "sn-lp-046", topic: "Time Management", content: "Spend max 45 seconds on single MCQs and 2-3 minutes on a 5-question arrangement set." },
  { id: "sn-lp-047", topic: "Elimination", content: "In mirror images, eliminate options where characters aren't reversed before checking sequence." },
  { id: "sn-lp-048", topic: "Data Sufficiency", content: "Don't calculate the final answer; just check if the given statements provide enough information." },
  { id: "sn-lp-049", topic: "Mental Mapping", content: "Practice visualizing the rotation of 3D objects without drawing for faster results." },
  { id: "sn-lp-050", topic: "Cheat Sheet", content: "A=1, B=2... Z=26. Z=1, Y=2... A=26. Write this on your rough sheet immediately after the exam starts." },
  
  // Topic Summaries
  { id: "sn-lp-051", topic: "Linear Arrangements", content: "Dual row arrangements often involve people facing each other. Note who is opposite whom." },
  { id: "sn-lp-052", topic: "Circular Arrangements", content: "For 5 people (odd number), no one sits 'directly opposite' anyone." },
  { id: "sn-lp-053", topic: "Number Series", content: "Alternating series: Check 1st, 3rd, 5th terms for one pattern and 2nd, 4th, 6th for another." },
  { id: "sn-lp-054", topic: "Blood Relations", content: "Brother-in-law can mean spouse's brother OR sister's husband. Clarify context." },
  { id: "sn-lp-055", topic: "Direction Sense", content: "A person turns 45 degrees CW from North. They are now facing North-East." },
  { id: "sn-lp-056", topic: "Syllogisms", content: "If even one valid Venn diagram disproves a 'Definite' conclusion, it is false." },
  { id: "sn-lp-057", topic: "Venn Diagrams", content: "A circle inside another means 'All members of inner are members of outer'." },
  { id: "sn-lp-058", topic: "Mirror Images", content: "Mirror on top/bottom of a word creates the same effect as a water image." },
  { id: "sn-lp-059", topic: "Cubes", content: "Standard dice: Sum of opposite faces is always 7 (1-6, 2-5, 3-4)." },
  { id: "sn-lp-060", topic: "Exam Tip", content: "CUET General Test logic is high-scoring; accuracy is more important than speed here." }
];
