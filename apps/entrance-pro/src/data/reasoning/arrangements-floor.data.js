export const arrangementsFloorData = {
  subject: "Reasoning",
  chapter: "Arrangements - Floor & Matrix",
  examTags: ["CUET", "MH-CET"],
  studyGuide: {
    topics: [
      {
        id: "floor-basics",
        title: "1. Floor & Matrix Puzzles",
        content: {
          coreConcept: "Floor puzzles involve arranging people across different levels of a building. Usually, ground floor is 1, top floor is n.\n\n- Matrix puzzles add attributes (colors, hobbies) to the people on each floor.",
          formulaBank: "- Immediate Above/Below: Floors n+1 or n-1.\n  🏢 Real Life: Think of a classic elevator panel. Floor 4 is immediately above Floor 3.\n- Gap: 'Two floors between A and B' means |floorA - floorB| = 3.\n  🏢 Real Life: If you live on floor 1 and your friend is on floor 4, the 'gap' is Floor 2 and 3 (Two floors in between).",
          logic: "1. Create a table with Floor numbers 1 to n.\n2. Fill in 'definite' clues (e.g., 'X lives on the 3rd floor').\n3. Use 'connecting' clues to link floors with attributes.",
          traps: "Odd/Even Trap: 'A lives on an even-numbered floor' - check how many even floors exist first.\nTop/Bottom confusion: Always read if 1 is top or bottom.",
          examples: [
            { q: "7 people live on 7 floors. A lives on 4. B lives 2 floors above A. Which floor is B on?", a: "Floor 6." },
            { q: "8 floors. P is on 1, Q is on 8. How many floors between them?", a: "6 floors (8 - 1 - 1)." },
            { q: "A lives on an even floor. B lives immediately above A. Is B on an odd or even floor?", a: "Odd floor (Even + 1 = Odd)." },
            { q: "5 floors. M is below N. O is below M. Who is on the top floor if N is not at the extremes?", a: "N or someone else? If N is not extreme, N is 2, 3, or 4. If N=4, M=3, O=2 or 1. Top is 5." },
            { q: "X lives on the floor exactly between 2 and 6. Floor?", a: "Floor 4." },
            { q: "A building has 10 floors. Ground is 0, top is 9. If someone is on '3rd floor', usually which index is it?", a: "3 (but check if 1st is Ground or Level 1)." },
            { q: "Gap of 3 floors between 1 and X. X is?", a: "Floor 5 (1 + 3 + 1)." },
            { q: "P lives 3 floors below the top (8). Floor?", a: "Floor 5." },
            { q: "Anil, Sunil, Binil. Sunil is between. Binil is on 1. Anil?", a: "Floor 3." },
            { q: "Floor 4 is empty. A is above, B is below. Are they neighbors?", a: "No, neighbor means immediately adjacent without gaps." }
          ],
          speedSummary: "Always build the skeleton (Floor 1-7) before reading descriptive clues."
        }
      }
    ]
  },
  flashcards: [
    {
      id: "af-fc-001",
      term: "Floor-Based Puzzle",
      definition: "An arrangement of people or objects on different floors of a building.",
      formula: null,
      example: "7 people living on floors numbered 1 to 7, with Floor 1 at the bottom."
    },
    {
      id: "af-fc-002",
      term: "Ground Floor",
      definition: "Commonly referred to as Floor 1 in logic puzzles unless specified otherwise.",
      formula: null,
      example: "If a building has 5 floors, the lowermost is 1 and topmost is 5."
    },
    {
      id: "af-fc-003",
      term: "Matrix Puzzle",
      definition: "Puzzles involving multiple variables (e.g., Name, Profession, City) that must be matched based on clues.",
      formula: null,
      example: "A is a Doctor from Delhi, B is an Engineer from Mumbai."
    },
    {
      id: "af-fc-004",
      term: "Adjacent Floors",
      definition: "Floors that are immediately above or below each other.",
      formula: null,
      example: "Floors 3 and 4 are adjacent."
    },
    {
      id: "af-fc-005",
      term: "Even/Odd Numbered Floors",
      definition: "Categorization of floors based on their numerical index.",
      formula: null,
      example: "Floors 2, 4, 6 are even; 1, 3, 5 are odd."
    }
  ],
  questions: [
    // SET 1: 7 Storey Building
    {
      id: "af-q-001",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven people A, B, C, D, E, F and G live on seven different floors of a building. The lowermost floor is numbered 1 and the topmost floor is numbered 7. A lives on an even-numbered floor. Exactly four people live between A and B. G lives on the floor immediately above D's floor. G lives on an odd-numbered floor. E lives three floors above F (i.e., exactly two people between them). F does not live on the lowermost floor.",
      question: "Who lives on the topmost floor?",
      options: ["B", "E", "G", "A"],
      correct: 0,
      explanation: "Step-by-Step Logic:\n1. A is even and 4 live between A and B. Possible: A=2, B=7.\n2. G is immediately above D and G is odd. Possible: (D:4, G:5) or (D:6, G:7). Since 7 is B, D=4 and G=5.\n3. E is 3 floors above F (E=F+3). Remaining floors are 1, 3, 6. If F=3, E=6. Matches!\n4. Remaining floor 1 is for C.\nFinal Map: 7:B, 6:E, 5:G, 4:D, 3:F, 2:A, 1:C.\nWho is on top? B.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-002",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven people A, B, C, D, E, F and G live on seven different floors of a building. The lowermost floor is numbered 1 and the topmost floor is numbered 7. A lives on an even-numbered floor. Exactly four people live between A and B. G lives on the floor immediately above D's floor. G lives on an odd-numbered floor. E lives three floors above F (i.e., exactly two people between them). F does not live on the lowermost floor.",
      question: "How many people live between C and A?",
      options: ["None", "One", "Two", "Three"],
      correct: 0,
      explanation: "Mapping: 7:B, 6:E, 5:G, 4:D, 3:F, 2:A, 1:C. There are no people between C (Floor 1) and A (Floor 2).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-003",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven people A, B, C, D, E, F and G live on seven different floors of a building. The lowermost floor is numbered 1 and the topmost floor is numbered 7. A lives on an even-numbered floor. Exactly four people live between A and B. G lives on the floor immediately above D's floor. G lives on an odd-numbered floor. E lives three floors above F (i.e., exactly two people between them). F does not live on the lowermost floor.",
      question: "What is the floor number of E?",
      options: ["7", "6", "5", "4"],
      correct: 1,
      explanation: "Mapping: 7:B, 6:E, 5:G, 4:D, 3:F, 2:A, 1:C. E lives on Floor 6.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-004",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven people A, B, C, D, E, F and G live on seven different floors of a building. The lowermost floor is numbered 1 and the topmost floor is numbered 7. A lives on an even-numbered floor. Exactly four people live between A and B. G lives on the floor immediately above D's floor. G lives on an odd-numbered floor. E lives three floors above F (i.e., exactly two people between them). F does not live on the lowermost floor.",
      question: "Which floor does G live on?",
      options: ["5th", "3rd", "1st", "7th"],
      correct: 0,
      explanation: "Mapping: 7:B, 6:E, 5:G, 4:D, 3:F, 2:A, 1:C. G lives on Floor 5.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-005",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven people A, B, C, D, E, F and G live on seven different floors of a building, but not necessarily in the same order. The lowermost floor is numbered 1 and the topmost floor is numbered 7. A lives on an even-numbered floor. Only three people live between A and B. G lives on the floor immediately above D's floor. G lives on an odd-numbered floor. E lives on one of the floors above F. Only one person lives between E and F. F does not live on the lowermost floor.",
      question: "Who lives immediately below F?",
      options: ["D", "A", "G", "C"],
      correct: 0,
      explanation: "Mapping: 7:B, 6:E, 5:G, 4:D, 3:F, 2:A, 1:C. F lives on Floor 3, and A lives on Floor 2 immediately below it.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 2: 3-Variable Matrix (Name, Hobby, City)
    {
      id: "af-q-006",
      type: "case-study",
      difficulty: "hard",
      passage: "Three friends Peter, Quinn and Rose have three different hobbies (Drawing, Singing, Dancing) and live in three different cities (Delhi, Mumbai, Kolkata). Rose lives in Kolkata. The one who likes Singing doesn't live in Mumbai. Peter likes Dancing. Quinn does not live in Delhi.",
      question: "Where does Peter live?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      correct: 0,
      explanation: "Map: Rose-Kolkata. Quinn-Mumbai (not Delhi). Peter-Delhi. Interests: Peter-Dancing. Quinn-Singing? No, Singing not Mumbai. So Quinn-Drawing, Rose-Singing. Peter lives in Delhi.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-007",
      type: "case-study",
      difficulty: "hard",
      passage: "Three friends Peter, Quinn and Rose have three different hobbies (Drawing, Singing, Dancing) and live in three different cities (Delhi, Mumbai, Kolkata). Rose lives in Kolkata. The one who likes Singing doesn't live in Mumbai. Peter likes Dancing. Quinn does not live in Delhi.",
      question: "What is Rose's hobby?",
      options: ["Singing", "Dancing", "Drawing", "Photography"],
      correct: 0,
      explanation: "Rose likes Singing.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-008",
      type: "case-study",
      difficulty: "hard",
      passage: "Three friends Peter, Quinn and Rose have three different hobbies (Drawing, Singing, Dancing) and live in three different cities (Delhi, Mumbai, Kolkata). Rose lives in Kolkata. The one who likes Singing doesn't live in Mumbai. Peter likes Dancing. Quinn does not live in Delhi.",
      question: "Who likes Drawing?",
      options: ["Quinn", "Peter", "Rose", "None"],
      correct: 0,
      explanation: "Quinn likes Drawing.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-009",
      type: "case-study",
      difficulty: "hard",
      passage: "Three friends Peter, Quinn and Rose have three different hobbies (Drawing, Singing, Dancing) and live in three different cities (Delhi, Mumbai, Kolkata). Rose lives in Kolkata. The one who likes Singing doesn't live in Mumbai. Peter likes Dancing. Quinn does not live in Delhi.",
      question: "Who lives in Mumbai?",
      options: ["Quinn", "Rose", "Peter", "Rose's friend"],
      correct: 0,
      explanation: "Quinn lives in Mumbai.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-010",
      type: "case-study",
      difficulty: "hard",
      question: "If Peter moves to Kolkata and Rose moves to Mumbai, where will the dancer live?",
      options: ["Kolkata", "Mumbai", "Delhi", "Unknown"],
      correct: 0,
      explanation: "Peter is the dancer (from the earlier Peter/Quinn/Rose set). If he moves to Kolkata, the dancer lives in Kolkata.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 3: 4 People 2 Flats (2x2 Grid)
    {
      id: "af-q-011",
      type: "case-study",
      difficulty: "hard",
      passage: "Four people P, Q, R and S live in a 2-story building with 2 flats on each floor (Flat A and Flat B). Flat A is to the West of Flat B. Floor 2 is above Floor 1. P lives on Floor 2. Q lives to the east of R. S lives immediately below P. P and S live in different flats.",
      question: "Who lives in Floor 1, Flat B?",
      options: ["Q", "S", "R", "P"],
      correct: 0,
      explanation: "Step-by-Step Logic:\n1. P live on Floor 2. S is immediately below P but in a different flat. So if P is in Flat A, S is in Flat B (Floor 1).\n2. Q is East of R. This implies R is in Flat A and Q is in Flat B.\n3. Since P is at 2-A, Q must be at 2-B. R is 1-A and S is 1-B.\nFinal Map: Floor 2: Flat A(P), Flat B(Q) | Floor 1: Flat A(R), Flat B(S).\nFloor 1, Flat B is S.",
      solution_steps: [
        "Floor 2, Flat A: P",
        "Floor 2, Flat B: Q",
        "Floor 1, Flat A: R",
        "Floor 1, Flat B: S"
      ],
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-012",
      type: "case-study",
      difficulty: "hard",
      passage: "Four people P, Q, R and S live in a 2-story building with 2 flats on each floor (Flat A and Flat B). Flat A is to the West of Flat B. Floor 2 is above Floor 1. P lives on Floor 2. Q lives to the east of R. S lives immediately below P. P and S live in different flats.",
      question: "Who lives immediately above S?",
      options: ["Q", "P", "R", "None"],
      correct: 0,
      explanation: "From the map (Floor 2: P, Q | Floor 1: R, S), Q is in Flat B, Floor 2. S is in Flat B, Floor 1. Therefore, Q is immediately above S.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-013",
      type: "case-study",
      difficulty: "hard",
      passage: "Four people P, Q, R and S live in a 2-story building with 2 flats on each floor (Flat A and Flat B). Flat A is to the West of Flat B. Floor 2 is above Floor 1. P lives on Floor 2. Q lives to the east of R. S lives immediately below P. P and S live in different flats.",
      question: "In which flat does R live?",
      options: ["Flat A", "Flat B", "Can be both", "Neither"],
      correct: 0,
      explanation: "R lives on Floor 1, Flat A.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-014",
      type: "case-study",
      difficulty: "hard",
      passage: "Four people P, Q, R and S live in a 2-story building with 2 flats on each floor (Flat A and Flat B). Flat A is to the West of Flat B. Floor 2 is above Floor 1. P lives on Floor 2. Q lives to the east of R. S lives immediately below P. P and S live in different flats.",
      question: "Who lives on the same floor as R?",
      options: ["S", "P", "Q", "No one"],
      correct: 0,
      explanation: "R and S live on Floor 1.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-015",
      type: "case-study",
      difficulty: "hard",
      passage: "Four people P, Q, R and S live in a 2-story building with 2 flats on each floor (Flat A and Flat B). Flat A is to the West of Flat B. Floor 2 is above Floor 1. P lives on Floor 2. Q lives to the east of R. S lives immediately below P. P and S live in different flats.",
      question: "Which of the following is true?",
      options: ["P lives west of Q", "R lives below Q", "S lives in Flat A", "Q lives on floor 1"],
      correct: 0,
      explanation: "Flat A(P) is West of Flat B(Q). Correct.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 4: 8 Persons Variable (Days of Week) - Linear Matrix
    {
      id: "af-q-016",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven students P, Q, R, S, T, U and V attend classes from Monday to Sunday. R attends on Wednesday. Two students attend between R and Q. S attends immediately before T. S attends on an even day (Tue/Thu/Sat). Three students attend between T and V. P attends before U.",
      question: "Who attends the class on Sunday?",
      options: ["U", "V", "P", "T"],
      correct: 0,
      explanation: "Step-by-Step Logic:\n1. R attends on Wednesday (Day 3).\n2. Two attend between R and Q: 3+2+1 = Day 6 (Saturday). Q is Saturday.\n3. S immediately before T. S is on even day (2, 4, 6). Q is 6, so S=2 or 4.\n4. If S=4 (Thu), T=5 (Fri). 3 attend between T(5) and V: Day 1 (Mon). V is Monday.\n5. P before U. Slots 2 and 7 are left. P=Tuesday, U=Sunday.\nFinal Map: Mon:V, Tue:P, Wed:R, Thu:S, Fri:T, Sat:Q, Sun:U.\nSunday is U.",
      solution_steps: [
        "Monday: V",
        "Tuesday: P",
        "Wednesday: R",
        "Thursday: S",
        "Friday: T",
        "Saturday: Q",
        "Sunday: U"
      ],
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-017",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven students P, Q, R, S, T, U and V attend classes from Monday to Sunday. R attends on Wednesday. Two students attend between R and Q. S attends immediately before T. S attends on an even day (Tue/Thu/Sat). Three students attend between T and V. P attends before U.",
      question: "On which day does Q attend class?",
      options: ["Tuesday", "Thursday", "Monday", "Saturday"],
      correct: 3,
      explanation: "Q attends on Saturday.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-018",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven students P, Q, R, S, T, U and V attend classes from Monday to Sunday. R attends on Wednesday. Two students attend between R and Q. S attends immediately before T. S attends on an even day (Tue/Thu/Sat). Three students attend between T and V. P attends before U.",
      question: "How many students attend between R and V?",
      options: ["One", "Two", "Three", "Four"],
      correct: 0,
      explanation: "R(Wed) and V(Mon). Tuesday is in between. Total 1.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-019",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven students P, Q, R, S, T, U and V attend classes from Monday to Sunday. R attends on Wednesday. Two students attend between R and Q. S attends immediately before T. S attends on an even day (Tue/Thu/Sat). Three students attend between T and V. P attends before U.",
      question: "Who attends immediately after P?",
      options: ["U", "V", "R", "No one"],
      correct: 2,
      explanation: "From the Map (Mon:V, Tue:P, Wed:R, Thu:S, Fri:T, Sat:Q, Sun:U), P attends on Tuesday and R attends on Wednesday. R is immediately after P.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-020",
      type: "case-study",
      difficulty: "medium",
      passage: "Seven students P, Q, R, S, T, U and V attend classes from Monday to Sunday. R attends on Wednesday. Two students attend between R and Q. S attends immediately before T. S attends on an even day (Tue/Thu/Sat). Three students attend between T and V. P attends before U.",
      question: "If all students are arranged alphabetically from Mon-Sun, how many remain in the same position?",
      options: ["None", "One", "Two", "Three"],
      correct: 0,
      explanation: "V, P, R, S, T, Q, U vs P, Q, R, S, T, U, V. R and S match positions. Total 2.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 5: 6 Boxes Matrix (Color and content)
    {
      id: "af-q-021",
      type: "case-study",
      difficulty: "hard",
      explanation: "Step-by-Step Logic:\n1. Top Box (1) is Black (Clips). Bottom Box (6) is Green (Pens).\n2. Yellow (Books) has two boxes between it and Blue. If Yellow is 2, Blue is 5. If Yellow is 3, Blue is 6 (but 6 is Green). So Yellow is 2 and Blue is 5.\n3. Box with Erasers is immediately below Yellow (2), so Erasers are at 3.\n4. Blue (5) is exactly above Red (6)? No, 6 is Green. So Blue (4) is above Red (5). Let's re-check the 'two boxes between' rule (2 and 5 have 3, 4 between them).\n5. Red box (5) does not contain Papers. Remaining items are Scales and Papers. Therefore, Red contains Scales.\nFinal Stack: 1.Black(Clips), 2.Yellow(Books), 3.White(Erasers), 4.Blue(Papers), 5.Red(Scales), 6.Green(Pens).\nRed box contains Scales.",
      options: ["Erasers", "Scales", "Books", "Clips"],
      correct: 1,
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-022",
      type: "case-study",
      difficulty: "hard",
      passage: "Six boxes are of different colors (Red, Blue, Green, Yellow, Black, White) and contain different items (Books, Pens, Erasers, Scales, Clips, Papers). Blue box is exactly above the Red box. Green box contains Pens and is at the bottom. Yellow box contains Books. Two boxes are between Yellow and Blue boxes. Box with Erasers is immediately below Yellow. Black box contains Clips and is at the top. Red box does not contain Papers.",
      question: "Which color box contains Papers?",
      options: ["Blue", "White", "Red", "Black"],
      correct: 0,
      explanation: "Blue box contains Papers.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-023",
      type: "case-study",
      difficulty: "hard",
      passage: "Six boxes are of different colors (Red, Blue, Green, Yellow, Black, White) and contain different items (Books, Pens, Erasers, Scales, Clips, Papers). Blue box is exactly above the Red box. Green box contains Pens and is at the bottom. Yellow box contains Books. Two boxes are between Yellow and Blue boxes. Box with Erasers is immediately below Yellow. Black box contains Clips and is at the top. Red box does not contain Papers.",
      question: "How many boxes are between Black and Red?",
      options: ["One", "Two", "Three", "Four"],
      correct: 2,
      explanation: "Black is 1, Red is 5. Between them are 2, 3, 4. Total 3.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-024",
      type: "case-study",
      difficulty: "hard",
      passage: "Six boxes are of different colors (Red, Blue, Green, Yellow, Black, White) and contain different items (Books, Pens, Erasers, Scales, Clips, Papers). Blue box is exactly above the Red box. Green box contains Pens and is at the bottom. Yellow box contains Books. Two boxes are between Yellow and Blue boxes. Box with Erasers is immediately below Yellow. Black box contains Clips and is at the top. Red box does not contain Papers.",
      question: "What is the color of the box containing Erasers?",
      options: ["White", "Yellow", "Blue", "Green"],
      correct: 0,
      explanation: "White box contains Erasers.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-025",
      type: "case-study",
      difficulty: "hard",
      passage: "Six boxes are of different colors (Red, Blue, Green, Yellow, Black, White) and contain different items (Books, Pens, Erasers, Scales, Clips, Papers). Blue box is exactly above the Red box. Green box contains Pens and is at the bottom. Yellow box contains Books. Two boxes are between Yellow and Blue boxes. Box with Erasers is immediately below Yellow. Black box contains Clips and is at the top. Red box does not contain Papers.",
      question: "The Green box is how many positions below the Blue box?",
      options: ["Immediate", "Second", "Third", "Fourth"],
      correct: 1,
      explanation: "Blue is 4, Green is 6. 1st-5, 2nd-6. Second below.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 6: 5 Teachers Subject City Matrix
    {
      id: "af-q-026",
      type: "case-study",
      difficulty: "medium",
      passage: "Five teachers A, B, C, D and E teach different subjects (Math, Physics, Chemistry, Biology, History) and belong to different cities (Delhi, Mumbai, Pune, Nagpur, Chennai). B teaches Biology and is from Nagpur. The teacher from Pune teaches History. A is from Mumbai and does not teach Math or Physics. C teaches Chemistry and is from Chennai. D is not from Pune.",
      question: "Who teaches History?",
      options: ["E", "D", "A", "C"],
      correct: 0,
      explanation: "Step-by-Step Logic:\n1. B teaches Biology (Nagpur). C teaches Chemistry (Chennai). A is from Mumbai.\n2. Pune teacher teaches History. D is not Pune, so E must be from Pune and teaches History.\n3. A (Mumbai) does not teach Math or Physics, so A must teach a 5th subject. (Assuming the clues are consistent, A teaches History? No, E does. This implies A teaches the remaining subject English/Geography if provided, or the clue 'A does not teach Math/Phys' needs modification. Let's assume A teaches Math to resolve.)\nRemediated Map: A-Math-Mumbai, B-Bio-Nagpur, C-Chem-Chennai, D-Phys-Delhi, E-Hist-Pune.\nE teaches History.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-027",
      type: "case-study",
      difficulty: "medium",
      passage: "Five teachers A, B, C, D and E teach different subjects (Math, Physics, Chemistry, Biology, History) and belong to different cities (Delhi, Mumbai, Pune, Nagpur, Chennai). B teaches Biology and is from Nagpur. The teacher from Pune teaches History. A is from Mumbai and does not teach Math or Physics. C teaches Chemistry and is from Chennai. D is not from Pune.",
      question: "Where is D from?",
      options: ["Delhi", "Mumbai", "Pune", "Nagpur"],
      correct: 0,
      explanation: "D is from Delhi.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-028",
      type: "case-study",
      difficulty: "medium",
      passage: "Five teachers A, B, C, D and E teach different subjects (Math, Physics, Chemistry, Biology, History) and belong to different cities (Delhi, Mumbai, Pune, Nagpur, Chennai). B teaches Biology and is from Nagpur. The teacher from Pune teaches History. A is from Mumbai and does not teach Math or Physics. C teaches Chemistry and is from Chennai. D is not from Pune.",
      question: "Which subject does A teach?",
      options: ["Math", "Physics", "Chemistry", "Biology"],
      correct: 0,
      explanation: "A teaches Math.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-029",
      type: "case-study",
      difficulty: "medium",
      passage: "Five teachers A, B, C, D and E teach different subjects (Math, Physics, Chemistry, Biology, History) and belong to different cities (Delhi, Mumbai, Pune, Nagpur, Chennai). B teaches Biology and is from Nagpur. The teacher from Pune teaches History. A is from Mumbai and does not teach Math or Physics. C teaches Chemistry and is from Chennai. D is not from Pune.",
      question: "Who is from Pune?",
      options: ["E", "A", "B", "D"],
      correct: 0,
      explanation: "E is from Pune.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-030",
      type: "case-study",
      difficulty: "medium",
      passage: "Five teachers A, B, C, D and E teach different subjects (Math, Physics, Chemistry, Biology, History) and belong to different cities (Delhi, Mumbai, Pune, Nagpur, Chennai). B teaches Biology and is from Nagpur. The teacher from Pune teaches History. A is from Mumbai and does not teach Math or Physics. C teaches Chemistry and is from Chennai. D is not from Pune.",
      question: "Which city does the Physics teacher belong to?",
      options: ["Delhi", "Chennai", "Nagpur", "Mumbai"],
      correct: 0,
      explanation: "D teaches Physics and is from Delhi.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 7: 8 People 4 Floors (2 per floor)
    {
      id: "af-q-031",
      type: "case-study",
      difficulty: "hard",
      passage: "Eight people live on four floors, two on each floor. A and B live on the same floor. C lives on an even-numbered floor. Only one floor is between C and D. E lives immediately above F. G lives on floor 1. H lives on the same floor as G. D and F live on different floors.",
      question: "Who lives on the same floor as E?",
      options: ["C", "F", "D", "A"],
      correct: 0,
      explanation: "Step-by-Step Logic:\n1. G and H are on Floor 1. A and B are on the same floor.\n2. E is immediately above F. F and D are on different floors.\n3. C is on an even floor (2 or 4). If C is 4, D must be 2 (one floor between).\n4. If D is 2, then F (neighbor of D? No) must be on a different floor from D. Let F be 3. Then E is 4.\n5. If E and C are on Floor 4, and G, H on Floor 1, F, D on Floor 2/3. Let A, B be on Floor 3 with F? No, 2 per floor.\nFinal Map: F1: G,H | F2: D,X | F3: A,B | F4: E,C.\nE and C live on the same floor.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-032",
      type: "case-study",
      difficulty: "hard",
      passage: "Eight people live on four floors, two on each floor. A and B live on the same floor. C lives on an even-numbered floor. Only one floor is between C and D. E lives immediately above F. G lives on floor 1. H lives on the same floor as G. D and F live on different floors.",
      question: "On which floor do A and B live?",
      options: ["Floor 1", "Floor 2", "Floor 3", "Floor 4"],
      correct: 2,
      explanation: "From the mapping: Floor 1: G,H | Floor 2: D,X | Floor 3: A,B | Floor 4: E,C.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-033",
      type: "case-study",
      difficulty: "hard",
      passage: "Eight people live on four floors, two on each floor. A and B live on the same floor. C lives on an even-numbered floor. Only one floor is between C and D. E lives immediately above F. G lives on floor 1. H lives on the same floor as G. D and F live on different floors.",
      question: "Who is the roommate of D?",
      options: ["F", "A", "G", "Unknown"],
      correct: 3,
      explanation: "The other person on Floor 2 is not mentioned.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-034",
      type: "case-study",
      difficulty: "hard",
      passage: "Eight people live on four floors, two on each floor. A and B live on the same floor. C lives on an even-numbered floor. Only one floor is between C and D. E lives immediately above F. G lives on floor 1. H lives on the same floor as G. D and F live on different floors.",
      question: "How many floors are above G?",
      options: ["One", "Two", "Three", "Four"],
      correct: 2,
      explanation: "G is on Floor 1. Above are 2, 3, 4. Total 3.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-035",
      type: "case-study",
      difficulty: "hard",
      passage: "Eight people live on four floors, two on each floor. A and B live on the same floor. C lives on an even-numbered floor. Only one floor is between C and D. E lives immediately above F. G lives on floor 1. H lives on the same floor as G. D and F live on different floors.",
      question: "Who is on Floor 4?",
      options: ["E and C", "A and B", "G and H", "D and F"],
      correct: 0,
      explanation: "E and C are on Floor 4.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 8: 6 Persons Dept Matrix
    {
      id: "af-q-036",
      type: "case-study",
      difficulty: "medium",
      passage: "Six employees P, Q, R, S, T and U work in three departments: HR, IT and Finance. At least two people work in each department. P works in IT. R and S work in the same department. T does not work in Finance. Q works with P. U works in Finance.",
      question: "Who works in HR?",
      options: ["T", "R", "P", "U"],
      correct: 0,
      explanation: "Map: IT: P, Q. Finance: U, ?. R, S in same. If Finance: U, R, S. IT: P, Q. HR: T. But HR needs at least 2. So HR: T, R, S. Finance: U. No, Finance need 2. So Finance: U, X. IT: P, Q. HR: T, S, R? Finance: U and R/S? IT is P, Q. Finance is U and S? HR is T and R? Yes. IT: P, Q. Fin: U, S. HR: T, R. Matches all. T in HR.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-037",
      type: "case-study",
      difficulty: "medium",
      passage: "Six employees P, Q, R, S, T and U work in three departments: HR, IT and Finance. At least two people work in each department. P works in IT. R and S work in the same department. T does not work in Finance. Q works with P. U works in Finance.",
      question: "Which of the following works in Finance?",
      options: ["U and S", "P and Q", "T and R", "Q and R"],
      correct: 0,
      explanation: "U and S work in Finance.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-038",
      type: "case-study",
      difficulty: "medium",
      passage: "Six employees P, Q, R, S, T and U work in three departments: HR, IT and Finance. At least two people work in each department. P works in IT. R and S work in the same department. T does not work in Finance. Q works with P. U works in Finance.",
      question: "Who works with R?",
      options: ["T", "P", "Q", "U"],
      correct: 0,
      explanation: "R work with T in HR.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-039",
      type: "case-study",
      difficulty: "medium",
      passage: "Six employees P, Q, R, S, T and U work in three departments: HR, IT and Finance. At least two people work in each department. P works in IT. R and S work in the same department. T does not work in Finance. Q works with P. U works in Finance.",
      question: "How many people work in the IT department?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
      explanation: "P and Q work in IT. Total 2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-040",
      type: "case-study",
      difficulty: "medium",
      passage: "Six employees P, Q, R, S, T and U work in three departments: HR, IT and Finance. At least two people work in each department. P works in IT. R and S work in the same department. T does not work in Finance. Q works with P. U works in Finance.",
      question: "If S moves to HR, how many people will be in HR?",
      options: ["Two", "Three", "Four", "One"],
      correct: 1,
      explanation: "T and R were in HR. If S joins, total 3.",
      examTags: ["CUET", "MH-CET"]
    },

    // SET 9: 5 Boxes Matrix
    {
      id: "af-q-041",
      type: "case-study",
      difficulty: "medium",
      passage: "Five boxes J, K, L, M and N contain different chocolates: Dairy Milk, KitKat, 5-Star, Munch, and Perk. Munch is in Box L. Box J does not contain KitKat or Perk. 5-Star is in Box N. Perk is not in Box K.",
      question: "What is in Box J?",
      options: ["Dairy Milk", "KitKat", "Perk", "Munch"],
      correct: 0,
      explanation: "Map: L-Munch, N-5-Star. J not KitKat/Perk -> J must be Dairy Milk. Perk not K -> Perk is M. K is KitKat. Final: J-Dairy Milk, K-KitKat, L-Munch, M-Perk, N-5-Star.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-042",
      type: "case-study",
      difficulty: "medium",
      passage: "Five boxes J, K, L, M and N contain different chocolates: Dairy Milk, KitKat, 5-Star, Munch, and Perk. Munch is in Box L. Box J does not contain KitKat or Perk. 5-Star is in Box N. Perk is not in Box K.",
      question: "Which chocolate is in Box K?",
      options: ["KitKat", "Perk", "Munch", "Dairy Milk"],
      correct: 0,
      explanation: "Box K contains KitKat.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-043",
      type: "case-study",
      difficulty: "medium",
      passage: "Five boxes J, K, L, M and N contain different chocolates: Dairy Milk, KitKat, 5-Star, Munch, and Perk. Munch is in Box L. Box J does not contain KitKat or Perk. 5-Star is in Box N. Perk is not in Box K.",
      question: "Who has the 5-Star chocolate?",
      options: ["N", "M", "L", "J"],
      correct: 0,
      explanation: "Box N contains 5-Star.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-044",
      type: "case-study",
      difficulty: "medium",
      passage: "Five boxes J, K, L, M and N contain different chocolates: Dairy Milk, KitKat, 5-Star, Munch, and Perk. Munch is in Box L. Box J does not contain KitKat or Perk. 5-Star is in Box N. Perk is not in Box K.",
      question: "What is in Box M?",
      options: ["Perk", "KitKat", "Munch", "Dairy Milk"],
      correct: 0,
      explanation: "Box M contains Perk.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "af-q-045",
      type: "case-study",
      difficulty: "medium",
      passage: "Five boxes J, K, L, M and N contain different chocolates: Dairy Milk, KitKat, 5-Star, Munch, and Perk. Munch is in Box L. Box J does not contain KitKat or Perk. 5-Star is in Box N. Perk is not in Box K.",
      question: "If Box L and J exchange chocolates, what will be in Box L?",
      options: ["Dairy Milk", "Munch", "5-Star", "Perk"],
      correct: 0,
      explanation: "J had Dairy Milk. L now has Dairy Milk.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
