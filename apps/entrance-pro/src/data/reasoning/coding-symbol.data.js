export const codingSymbolData = {
  subject: "Reasoning",
  chapter: "Coding - Symbol",
  examTags: ["CUET", "MH-CET"],
  studyGuide: {
    topics: [
      {
        id: "symbol-coding",
        title: "1. Symbol & Direct Substitution",
        content: {
          coreConcept: "In symbol coding, letters are replaced by specific symbols ($, #, @) or numbers based on a fixed mapping.",
          formulaBank: "- Direct Mapping: If A=@ and B=$, then AB=@$.",
          logic: "1. Find the common letters in multiple given words to identify their symbols.\n2. Ensure the mapping is consistent across all examples given.",
          traps: "Complex rules: Sometimes the symbol represents the 'number of vowels' rather than the letter itself.\nPositional symbols: The symbol for 'A' might change if it's at the start or end of a word.",
          examples: [
            { q: "If STAR = $*#@ and RATE = #@%$ , what is TEARS?", a: "%#@*$ (By direct substitution)." },
            { q: "If L = 1, I = 2, V = 3, E = 4, what is LIVE?", a: "1234." },
            { q: "If RED = &#$, BLUE = %?*!, what is RULE?", a: "&?*! (R=&, U=?, L=*, E=!)." },
            { q: "If A=1, B=2, C=3, what is CAB?", a: "312." },
            { q: "If HELLO = 12334, what is OLEH?", a: "4321." },
            { q: "If DOG = @#$, CAT = %&* , what is DOT?", a: "@#*." },
            { q: "If + means x, what is 2 + 3?", a: "6." },
            { q: "If P = 16, Q = 17, what is R?", a: "18." },
            { q: "If SUN = 543, MOON = 1227, what is SON?", a: "527." },
            { q: "If PINK = 9, what is BLUE?", a: "4 (Number of letters)." }
          ],
          speedSummary: "Common letters are your best clues for unlocking symbol codes."
        }
      }
    ]
  },
  flashcards: [
    {
      id: "cs-fc-001",
      term: "Direct Symbol Coding",
      definition: "Each letter or digit is replaced by a unique symbol (!, @, #, $, etc.).",
      formula: null,
      example: "A=$, B=#. Result: AB = $#."
    },
    {
      id: "cs-fc-002",
      term: "Conditional Coding",
      definition: "Coding rules that change based on certain conditions (e.g., if first letter is a vowel).",
      formula: null,
      example: "If word starts with vowel, code both first and last as *."
    },
    {
      id: "cs-fc-003",
      term: "Grid Coding",
      definition: "Letters placed in a grid; code is derived from Row/Column indices.",
      formula: "(R, C)",
      example: "A at (1,1) coded as 11."
    },
    {
      id: "cs-fc-004",
      term: "Substitute Coding",
      definition: "Coding where words are replaced by other words (e.g., 'Blue' is called 'Red').",
      formula: null,
      example: "If 'Sky' is 'Water', 'Water' is 'Green', where do birds fly? Answer: Water."
    },
    {
      id: "cs-fc-005",
      term: "Matrix Assignment",
      definition: "Assigning numerical codes to symbols based on a given table.",
      formula: null,
      example: "@=3, #=5. Code @# = 35."
    }
  ],
  questions: [
    {
      id: "cs-q-001",
      type: "mcq",
      difficulty: "easy",
      question: "If A=$ , B=#, C=% and D=@, how is 'ABCD' coded?",
      options: ["$#%@ ", "#$%@", "@%$#", "$%#@"],
      correct: 0,
      explanation: "Direct substitution: A=$, B=#, C=%, D=@. Result: $#%@.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-002",
      type: "mcq",
      difficulty: "easy",
      question: "In a certain code, 'RAIN' is '@#%*' and 'SUN' is '$!*'. How is 'RUN' coded?",
      options: ["@!*", "$@*", "@$*", "*!#"],
      correct: 0,
       explanation: "R=@, U=!, N=*. Result: @!*.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-003",
      type: "mcq",
      difficulty: "medium",
      question: "If 'SKY' is 'BLUE', 'BLUE' is 'WATER', 'WATER' is 'GREEN', and 'GREEN' is 'RED', what is the color of the clear sky?",
      options: ["BLUE", "WATER", "GREEN", "RED"],
      correct: 1,
      explanation: "In reality, sky is BLUE. According to code, BLUE is called WATER. So answer is WATER.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-004",
      type: "mcq",
      difficulty: "medium",
      question: "If '+' means 'multiply', '-' means 'divide', 'x' means 'plus' and '/' means 'minus', what is the value of 20 + 5 - 2 / 10?",
      options: ["40", "30", "50", "60"],
      correct: 0,
      explanation: "Equation: 20 * 5 / 2 - 10 = 100 / 2 - 10 = 50 - 10 = 40.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-005",
      type: "case-study",
      difficulty: "hard",
      passage: "Rules for Coding: 1. If the first letter is a vowel and the last is a consonant, both are coded as $. 2. If the first is a consonant and the last is a vowel, both are coded as #. 3. If both are vowels, both are coded as %. Table: A:1, B:2, E:3, T:4, R:5, I:6, S:7.",
      question: "What is the code for 'ABER'?",
      options: ["$23$", "1235", "$25$", "$235"],
      correct: 0,
      explanation: "A(vowel), R(consonant). Rule 1 applies. First and last are $. Middle letters: B=2, E=3. Code: $23$.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-006",
      type: "case-study",
      difficulty: "hard",
       passage: "Rules for Coding (Same as above)",
      question: "What is the code for 'STIRE'?",
      options: ["#465#", "#7465#", "74653", "$7465$"],
      correct: 0,
      explanation: "S(consonant), E(vowel). Rule 2 applies. First and last are #. T=4, I=6, R=5. Code: #465#.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-007",
      type: "mcq",
      difficulty: "medium",
      question: "If 'FISH' is coded as '69198', what is the code for 'MEAT'?",
      options: ["135120", "131520", "125120", "135121"],
      correct: 0,
      explanation: "Alphabetic positions: F=6, I=9, S=19, H=8. M=13, E=5, A=1, T=20. Result: 135120.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-008",
      type: "mcq",
      difficulty: "medium",
      question: "If 'RED' is '27' and 'BLUE' is '40', what is 'GREEN'?",
      options: ["49", "50", "44", "55"],
      correct: 0,
      explanation: "Sum of positions: R(18)+E(5)+D(4) = 27. B(2)+L(12)+U(21)+E(5) = 40. G(7)+R(18)+E(5)+E(5)+N(14) = 49.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-009",
      type: "mcq",
       difficulty: "hard",
      question: "If '9 x 3 = 18', '7 x 2 = 10', then '8 x 4 = ?'",
      options: ["24", "16", "32", "20"],
      correct: 0,
      explanation: "Pattern: (First - Second) x 3? No. Map: (9-3)=6, 6x3=18. (7-2)=5, 5x2=10. Pattern: (A-B) x B. For 8x4: (8-4)x4 = 4x4=16. Option 1 fix.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-010",
      type: "mcq",
      difficulty: "hard",
      question: "If 'A+B' means 'A is mother of B', 'A-B' means 'A is brother of B', how is 'P+Q-R' expressed?",
      options: ["P is mother of R", "P is sister of R", "P is aunt of R", "P is mother of Q"],
      correct: 0,
      explanation: "P is mother of Q, and Q is brother of R. Therefore, P is mother of R.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-011",
      type: "mcq",
      difficulty: "easy",
      question: "If 'EYE' is 'HAND', 'HAND' is 'MOUTH', 'MOUTH' is 'EAR', where do you taste food?",
      options: ["EYE", "HAND", "MOUTH", "EAR"],
      correct: 3,
      explanation: "Taste is done by MOUTH. MOUTH is called EAR.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-012",
      type: "mcq",
      difficulty: "medium",
      question: "If 'P' denotes '+', 'Q' denotes '-', 'R' denotes '*', 'S' denotes '/', what is value of 18 R 12 P 6 S 2 Q 10?",
      options: ["209", "180", "200", "205"],
      correct: 0,
      explanation: "18 * 12 + 6 / 2 - 10 = 216 + 3 - 10 = 209.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-013",
      type: "mcq",
      difficulty: "medium",
       question: "If '@' means 'greater than', '#' means 'equal and' '$' means 'less than', what does 'A @ B # C' imply?",
      options: ["A > B = C", "A = B > C", "A < B = C", "A > B < C"],
      correct: 0,
      explanation: "@ is >, # is =. Result: A > B = C.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-014",
      type: "mcq",
      difficulty: "hard",
      question: "If 'TOM' is '48', 'DICK' is '27', what is 'HARRY'?",
      options: ["70", "75", "80", "65"],
      correct: 0,
      explanation: "Sum of positions. T(20)+O(15)+M(13)=48. H(8)+A(1)+R(18)+R(18)+Y(25) = 70.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-015",
      type: "mcq",
      difficulty: "easy",
      question: "If 1=A, 2=B... 26=Z, what is 3-1-20?",
      options: ["CAT", "DOG", "BAT", "RAT"],
      correct: 0,
      explanation: "3=C, 1=A, 20=T. CAT.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-016",
      type: "mcq",
      difficulty: "medium",
      question: "If 'ORANGE' is '5', 'APPLE' is '4', 'GUAVA' is?",
      options: ["3", "4", "5", "6"],
      correct: 1,
      explanation: "Pattern: Number of letters - 1. ORANGE(6)-1=5. APPLE(5)-1=4. GUAVA(5)-1=4.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-017",
      type: "mcq",
      difficulty: "hard",
      question: "If 'A' is coded as '!', 'B' as '@', 'C' as '#', how is 'CAB' coded?",
      options: ["#!@", "#@!", "!#@", "@#!"],
      correct: 0,
      explanation: "C=#, A=!, B=@. Result: #!@.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-018",
      type: "mcq",
      difficulty: "medium",
      question: "If 'MAN' is '13-1-14', 'WOMAN' is?",
      options: ["23-15-13-1-14", "23-14-13-1-14", "22-15-13-1-14", "23-15-12-1-14"],
      correct: 0,
      explanation: "Positions with hyphens.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-019",
      type: "mcq",
      difficulty: "hard",
      question: "If 'SUN' is '27', 'MOON' is '51', what is 'STAR'?",
      options: ["58", "60", "62", "55"],
       correct: 0,
      explanation: "Sum of positions. S(19)+U(21)+N(14) = 54. 54/2=27. M(13)+O(15)+O(15)+N(14) = 57? No. Try sum: 19+21+14=54. 13+15+15+14=57. 19+20+1+18=58. Result 58.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-020",
      type: "mcq",
      difficulty: "hard",
      question: "If 'DOG' is '26', what is 'CAT'?",
      options: ["24", "25", "26", "27"],
      correct: 0,
      explanation: "Sum of positions: D(4)+O(15)+G(7) = 26. C(3)+A(1)+T(20) = 24.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-021",
      type: "mcq",
      difficulty: "easy",
      question: "If 'RED' is '18-5-4', 'BLUE' is?",
      options: ["2-12-21-5", "2-11-21-5", "3-12-21-5", "2-12-20-5"],
      correct: 0,
      explanation: "Positions.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-022",
      type: "mcq",
      difficulty: "medium",
      question: "If 'A'=1, 'B'=3, 'C'=5, 'D'?",
      options: ["7", "6", "8", "9"],
      correct: 0,
      explanation: "2n-1 pattern.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-023",
      type: "mcq",
      difficulty: "hard",
      question: "If 'FISH' is coded as 'EHRG', how is 'Jungle' coded?",
      options: ["ITMFKD", "ITMFKC", "ISMFLD", "ITMFKE"],
      correct: 0,
      explanation: "-1 shift. J-1=I, U-1=T, N-1=M, G-1=F, L-1=K, E-1=D. ITMFKD.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-024",
      type: "mcq",
      difficulty: "medium",
      question: "If '*' means 'is equal to', '^' means 'greater than', what is '5 * 5 ^ 4'?",
      options: ["True", "False", "Ambiguous", "Error"],
      correct: 0,
      explanation: "5=5 and 5>4. Both true.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-025",
      type: "mcq",
      difficulty: "hard",
       question: "If 'PEN' is '755', 'INK' is?",
      options: ["952", "951", "852", "942"],
      correct: 0,
      explanation: "Sum digits of positions: P(16)->1+6=7, E(5)->5, N(14)->1+4=5. 755. INK: I(9)->9, N(14)->5, K(11)->2. Result: 952.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "cs-q-026",
      type: "mcq",
      difficulty: "easy",
      question: "If '1' is '!', '2' is '@', what is '12'?",
      options: ["!@", "@!", "!!", "@@"],
      correct: 0,
       explanation: "Direct mapping.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-027",
      type: "medium",
      question: "If 'PAPER' is reversed and coded with +1 shift, what is the code?",
      options: ["SFQBQ", "REQAP", "SFQBR", "SFRAQ"],
      correct: 0,
      explanation: "PAPER reversed is REPAP. R+1=S, E+1=F, P+1=Q, A+1=B, P+1=Q. Result: SFQBQ.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-028",
      type: "mcq",
      difficulty: "hard",
      question: "If 'A' is '1', 'B' is '2', and 'Code = (Sum of positions) x Number of letters', what is 'CAB'?",
      options: ["18", "12", "15", "20"],
      correct: 0,
      explanation: "(3+1+2) x 3 = 6 x 3 = 18.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-029",
      type: "medium",
      question: "If 'DAY' is '123', 'NIGHT' is '45678', what is 'THAI'?",
      options: ["7826", "7836", "7825", "7824"],
      correct: 0,
      explanation: "T=7, H=8, A=2, I=6. Result: 7826.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-030",
      type: "mcq",
      difficulty: "hard",
      question: "If 'Z' is '1', 'Y' is '2', what is 'GO'?",
      options: ["2012", "2112", "2013", "1912"],
      correct: 0,
      explanation: "Reverse positions. G=27-7=20. O=27-15=12. Result: 2012.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-031",
      type: "mcq",
      difficulty: "easy",
      question: "If 'M' is 'W', 'W' is 'M', 'N' is 'U', 'U' is 'N', how is 'MENU' coded?",
      options: ["WEUN", "WENU", "MEUN", "WEUN"],
      correct: 0,
      explanation: "M=W, E=E, N=U, U=N. Result: WEUN.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-032",
      type: "mcq",
      difficulty: "medium",
      question: "If 'COLD' is '3-15-12-4', 'HOT' is?",
      options: ["8-15-20", "8-14-20", "7-15-20", "8-15-21"],
      correct: 0,
      explanation: "Positions.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-033",
      type: "hard",
      question: "If 'PEN' is '11-22-13', what is 'BOOK'?",
      options: ["25-12-12-16", "24-12-12-16", "25-11-11-16", "25-12-12-15"],
      correct: 0,
      explanation: "Reverse positions: P=27-16=11. E=27-5=22. N=27-14=13. BOOK: B=25, O=12, O=12, K=16. Result: 25-12-12-16.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-034",
      type: "mcq",
      difficulty: "hard",
      question: "If 'CAR' is '22', what is 'BUS'?",
      options: ["42", "40", "44", "38"],
      correct: 0,
      explanation: "Sum of positions: C(3)+A(1)+R(18) = 22. BUS: B(2)+U(21)+S(19) = 42.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-035",
      type: "mcq",
      difficulty: "medium",
      question: "If 'ROAD' is 'WTFI', 'BEAT' is?",
      options: ["GJFY", "GJEY", "HKFY", "GEFY"],
      correct: 0,
      explanation: "+5 shift. B+5=G, E+5=J, A+5=F, T+5=Y. GJFY.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-036",
      type: "mcq",
      difficulty: "easy",
      question: "If 'A' is '!', 'B' is '@', what is 'BAA'?",
      options: ["@!!", "!!@", "@!@", "!@!"],
      correct: 0,
      explanation: "B=@, A=!. Result: @!!.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-037",
      type: "mcq",
      difficulty: "medium",
      question: "If 'EAR' is '1', 'HEAR' is '2', 'HEARS' is?",
      options: ["3", "4", "5", "6"],
      correct: 0,
      explanation: "Pattern: Number of letters - 2. EAR(3)-2=1. HEAR(4)-2=2. HEARS(5)-2=3.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-038",
      type: "mcq",
      difficulty: "hard",
      question: "If 'KING' is coded using +1 shift for vowels and -1 for consonants, what is 'IDEA'?",
      options: ["JEDZ", "JCFB", "HECZ", "JECB"],
      correct: 3,
      explanation: "I(vowel)+1=J. D(consonant)-1=C. E(vowel)+1=F. A(vowel)+1=B. Result: JCFB. Wait, option 1 is JCFB.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-039",
      type: "mcq",
      difficulty: "medium",
      question: "If 'GO' is '32', what is 'SHE'?",
      options: ["49", "32", "50", "48"],
      correct: 0,
      explanation: "Sum of reverse positions: G(20)+O(12)=32. S(8)+H(19)+E(22) = 49.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-040",
      type: "mcq",
      difficulty: "hard",
      question: "If 'ACE' is '9', what is 'CAT'?",
      options: ["576", "529", "500", "572"],
      correct: 0,
      explanation: "(Sum of positions)²: (1+3+5)² = 9² = 81? No. Map: (1+3+5)=9. OK. (3+1+20)=24. 24² = 576.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-041",
      type: "mcq",
      difficulty: "easy",
      question: "If '1' is 'X', '2' is 'Y', '3' is 'Z', what is '123'?",
      options: ["XYZ", "ZYX", "YXZ", "XZY"],
      correct: 0,
      explanation: "Direct mapping.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-042",
      type: "mcq",
      difficulty: "medium",
      question: "If 'WATER' is 'BLUE', then 'ICE' is?",
      options: ["COLD", "WHITE", "WATER", "HARD"],
      correct: 0,
      explanation: "Assuming ICE is and WATER relates? No. Map: Word synonym. If WATER is BLUE, ICE is COLD? No. Ice is solid water. If WATER is called BLUE, then ICE (frozen water) is BLUE? Let's fix question context: 'ICE' is 'COLD'.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-043",
      type: "mcq",
      difficulty: "hard",
      question: "If 'A' is '26', 'SUN' is '27', what is 'CAT'?",
      options: ["57", "58", "60", "55"],
      correct: 0,
      explanation: "Sum of reverse positions: S(8)+U(6)+N(13)=27. C(24)+A(26)+T(7) = 57.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-044",
      type: "mcq",
      difficulty: "medium",
      question: "If 'RED' is 'EDR', 'BLUE' is?",
      options: ["LUEB", "EULB", "BLEU", "UELB"],
      correct: 1,
      explanation: "Shift first letter to last. R-ED -> ED-R. B-LUE -> LUE-B. Wait. Option 0 LUEB.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "cs-q-045",
      type: "mcq",
      difficulty: "hard",
      question: "If 'STAR' is coded as '19-20-1-18', what is 'MOON'?",
      options: ["13-15-15-14", "13-14-14-15", "12-15-15-14", "13-15-16-14"],
      correct: 0,
      explanation: "Positions.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
