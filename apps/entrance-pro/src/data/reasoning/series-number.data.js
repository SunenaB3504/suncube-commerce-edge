export const seriesNumberData = {
  subject: "Reasoning",
  chapter: "Series - Number",
  examTags: ["CUET", "MH-CET"],
  studyGuide: {
    topics: [
      {
        id: "number-patterns",
        title: "1. Common Number Patterns",
        content: {
          coreConcept: "Number series are sequences following a specific mathematical rule. Identifying the speed of growth is the first step.",
          formulaBank: "- Arithmetic: constant addition (d).\n- Geometric: constant multiplication (r).\n- Squares/Cubes: n², n³, n²±1, n³±1.\n- Fibonacci: a + b = c.",
          logic: "1. Check Difference: If growth is slow.\n2. Check Multiplication: If growth is fast.\n3. Alternating Series: Check odd and even positions separately.",
          traps: "The 'Missing' vs 'Wrong' Term: READ the question carefully to see if it wants the next term or the one that doesn't fit.\nMultiple Rules: Sometimes a series uses +1, x2, +3, x4...",
          examples: [
            { q: "2, 4, 8, 16, ? ", a: "32 (x2 pattern)." },
            { q: "1, 4, 9, 16, ? ", a: "25 (Squares: 1², 2², 3², 4², 5²)." },
            { q: "5, 10, 15, 20, ?", a: "25 (+5 pattern)." },
            { q: "100, 90, 81, 73, ?", a: "66 (Differences: -10, -9, -8, -7)." },
            { q: "1, 1, 2, 3, 5, ?", a: "8 (Fibonacci: 3+5=8)." },
            { q: "3, 6, 12, 24, ?", a: "48 (Double previous term)." },
            { q: "0, 7, 26, 63, ?", a: "124 (Cubes minus 1: 1³-1, 2³-1, 3³-1...)." },
            { q: "2, 3, 5, 7, 11, ?", a: "13 (Prime numbers)." },
            { q: "1, 2, 6, 24, ?", a: "120 (Factorials: 1!, 2!, 3!, 4!, 5!)." },
            { q: "10, 12, 16, 22, ?", a: "30 (Difference of +2, +4, +6, +8)." }
          ],
          speedSummary: "If you can't find a rule, try the 'Difference of Differences'."
        }
      }
    ]
  },
  flashcards: [
    {
      id: "sn-fc-001",
      term: "Arithmetic Series",
      definition: "A series where the difference between consecutive terms is constant.",
      formula: "Tn = a + (n-1)d",
      example: "2, 5, 8, 11... (d=3)"
    },
    {
      id: "sn-fc-002",
      term: "Geometric Series",
      definition: "A series where each term is found by multiplying the previous term by a constant ratio.",
      formula: "Tn = ar^(n-1)",
      example: "3, 6, 12, 24... (r=2)"
    },
    {
      id: "sn-fc-003",
      term: "Squares & Cubes",
      definition: "Series based on powers of natural numbers.",
      formula: "n^2 or n^3",
      example: "1, 4, 9, 16... (n^2)"
    },
    {
      id: "sn-fc-004",
      term: "Difference of Differences",
      definition: "A series where the differences themselves form an arithmetic or geometric series.",
      formula: null,
      example: "Series: 2, 5, 10, 17... (Diffs: 3, 5, 7 - an AP)"
    },
    {
      id: "sn-fc-005",
      term: "Mixed Series",
      definition: "A series involving multiple operations like (x2 + 1) or (x3 - 2).",
      formula: null,
      example: "5, 11, 23, 47... (x2 + 1)"
    }
  ],
  questions: [
    {
      id: "sn-q-001",
      type: "mcq",
      difficulty: "easy",
      question: "Find the next term in the series: 7, 11, 15, 19, 23, ?",
      options: ["25", "27", "29", "31"],
      correct: 1,
      explanation: "Common difference of 4. 23+4=27.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-002",
      type: "mcq",
      difficulty: "easy",
      question: "Missing term: 2, 4, 8, 16, 32, ?",
      options: ["48", "60", "64", "72"],
      correct: 2,
      explanation: "Geometric series (x2). 32x2=64.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-003",
      type: "mcq",
      difficulty: "easy",
      question: "Complete the series: 1, 4, 9, 16, 25, ?",
      options: ["30", "36", "40", "49"],
      correct: 1,
      explanation: "Squares: 1², 2², 3², 4², 5², 6²=36.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-004",
      type: "mcq",
      difficulty: "medium",
      question: "Find the missing term: 10, 13, 18, 25, 34, ?",
      options: ["40", "45", "48", "50"],
      correct: 1,
      explanation: "Differences are 3, 5, 7, 9. Next is 11. 34+11=45.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-005",
      type: "mcq",
      difficulty: "medium",
      question: "Find the next term: 5, 11, 23, 47, 95, ?",
      options: ["180", "191", "175", "190"],
      correct: 1,
      explanation: "Pattern: (x2+1). 95x2+1=191.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-006",
      type: "mcq",
      difficulty: "medium",
      question: "Complete the series: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correct: 1,
      explanation: "Differences: 4, 6, 8, 10, 12. 30+12=42.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-007",
      type: "mcq",
      difficulty: "medium",
      question: "Find the missing number: 1, 8, 27, 64, 125, ?",
      options: ["200", "216", "225", "250"],
      correct: 1,
      explanation: "Cubes: 1³, 2³, 3³, 4³, 5³, 6³=216.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-008",
      type: "mcq",
      difficulty: "hard",
      question: "Next term: 3, 12, 27, 48, 75, ?",
      options: ["90", "100", "108", "120"],
      correct: 2,
      explanation: "Pattern: 3 x n². 3x6²=108.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-009",
      type: "mcq",
      difficulty: "hard",
      question: "Find the next: 4, 9, 20, 43, 90, ?",
      options: ["180", "185", "187", "190"],
      correct: 1,
      explanation: "Pattern: x2+1, x2+2, x2+3... 90x2+5=185.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-010",
      type: "mcq",
      difficulty: "hard",
      question: "Complete: 120, 99, 80, 63, 48, ?",
      options: ["35", "38", "40", "32"],
      correct: 0,
      explanation: "Pattern: n²-1. 6²-1=35.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-011",
      type: "mcq",
      difficulty: "easy",
      question: "Complete: 1, 3, 6, 10, 15, ?",
      options: ["20", "21", "25", "30"],
      correct: 1,
      explanation: "Triangular numbers. 15+6=21.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-012",
      type: "mcq",
      difficulty: "medium",
      question: "Next term: 2, 3, 5, 8, 13, 21, ?",
      options: ["30", "34", "38", "42"],
      correct: 1,
      explanation: "Fibonacci: 13+21=34.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-013",
      type: "mcq",
      difficulty: "medium",
      question: "Missing term: 100, 50, 52, 26, 28, ?",
      options: ["14", "15", "16", "18"],
      correct: 0,
      explanation: "Divide by 2, Add 2. 28/2=14.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-014",
      type: "mcq",
      difficulty: "hard",
      question: "What comes next? 0, 6, 24, 60, 120, ?",
      options: ["180", "210", "240", "200"],
      correct: 1,
      explanation: "n³-n. 6³-6=210.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-015",
      type: "mcq",
      difficulty: "hard",
      question: "Series: 1, 2, 6, 24, 120, ?",
      options: ["240", "480", "720", "360"],
      correct: 2,
      explanation: "Factorials: n!. 6!=720.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-016",
      type: "mcq",
      difficulty: "easy",
      question: "Series: 2, 3, 5, 7, 11, ?",
      options: ["12", "13", "14", "15"],
      correct: 1,
      explanation: "Prime numbers: 13 follows 11.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-017",
      type: "mcq",
      difficulty: "medium",
      question: "Next term: 5, 16, 49, 148, ?",
      options: ["440", "445", "450", "452"],
      correct: 1,
      explanation: "x3+1. 148x3+1=445.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-018",
      type: "mcq",
      difficulty: "hard",
      question: "Missing term: 7, 26, 63, 124, 215, ?",
      options: ["342", "343", "344", "350"],
      correct: 0,
      explanation: "n³-1. 7³-1=342.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-019",
      type: "mcq",
      difficulty: "hard",
      question: "Complete: 2, 3, 10, 15, 26, ?",
      options: ["30", "35", "37", "40"],
      correct: 2,
      explanation: "n²+1 and n²-1 alternating. 6²+1=37.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-020",
      type: "mcq",
      difficulty: "medium",
      question: "Next term: 1, 2, 2, 4, 8, ?",
      options: ["16", "32", "64", "12"],
      correct: 1,
      explanation: "Product of previous two. 4x8=32.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-021",
      type: "mcq",
      difficulty: "easy",
      question: "Keep going: 60, 50, 40, 30, ?",
      options: ["20", "25", "10", "15"],
      correct: 0,
      explanation: "Difference -10. 30-10=20.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-022",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 1, 4, 13, 40, ?",
      options: ["120", "121", "122", "125"],
      correct: 1,
      explanation: "x3+1. 40x3+1=121.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-023",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 10, 20, 31, 43, ?",
      options: ["55", "56", "57", "60"],
      correct: 1,
      explanation: "Differences 10, 11, 12, 13. 43+13=56.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-024",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 0, 7, 26, 63, ?",
      options: ["100", "124", "150", "180"],
      correct: 1,
      explanation: "n³-1. 5³-1=124.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-025",
      type: "mcq",
      difficulty: "hard",
      question: "Complete: 1, 2, 6, 12, 36, 72, ?",
      options: ["144", "216", "108", "200"],
      correct: 1,
      explanation: "x2, x3 alternating. 72x3=216.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-026",
      type: "mcq",
      difficulty: "easy",
      question: "Missing: 5, 25, 125, 625, ?",
      options: ["1000", "2500", "3125", "1250"],
      correct: 2,
      explanation: "Powers of 5. 5⁵=3125.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-027",
      type: "mcq",
      difficulty: "medium",
      question: "Next: 80, 40, 20, 10, ?",
      options: ["0", "5", "8", "2"],
      correct: 1,
      explanation: "Divide by 2. 10/2=5.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-028",
      type: "mcq",
      difficulty: "medium",
      question: "Next term: 2, 12, 36, 80, 150, ?",
      options: ["200", "252", "280", "180"],
      correct: 1,
      explanation: "n³+n². 6³+6²=216+36=252.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-029",
      type: "mcq",
      difficulty: "hard",
      question: "Complete: 7, 10, 8, 11, 9, 12, ?",
      options: ["10", "12", "13", "14"],
      correct: 0,
      explanation: "+3, -2 alternating. 12-2=10.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-030",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 11, 13, 17, 19, 23, ?",
      options: ["25", "27", "29", "31"],
      correct: 2,
      explanation: "Primes. 29 follows 23.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-031",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 3, 6, 9, 12, ?",
      options: ["15", "18", "21", "24"],
      correct: 0,
      explanation: "Multiples of 3. 15.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-032",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 40, 30, 22, 16, ?",
      options: ["10", "12", "14", "11"],
      correct: 1,
      explanation: "Differences -10, -8, -6. Next is -4. 16-4=12.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-033",
      type: "mcq",
      difficulty: "medium",
      question: "Next: 1, 2, 6, 15, ?",
      options: ["25", "30", "31", "35"],
      correct: 2,
      explanation: "Differences are square of 1, 2, 3... next is 4²(16). 15+16=31.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-034",
      type: "mcq",
      difficulty: "hard",
       question: "Complete: 2, 3, 5, 5, 8, 7, 12, ?",
      options: ["10", "9", "11", "13"],
      correct: 1,
      explanation: "Twin series: (2, 5, 8, 12 - diff 3, 3, 4) and (3, 5, 7 - diff 2). Next in 2nd series is 7+2=9.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-035",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 13, 35, 57, 79, 911, ?",
      options: ["1113", "1112", "1012", "1214"],
      correct: 0,
       explanation: "Pairs of odd numbers (1,3), (3,5), (5,7)... next (11,13). Concatenated as 1113.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-036",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 10, 100, 1000, ?",
      options: ["10000", "2000", "5000", "100000"],
      correct: 0,
      explanation: "x10. 10000.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-037",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 6, 11, 21, 36, 56, ?",
      options: ["76", "81", "86", "91"],
      correct: 1,
      explanation: "Differences 5, 10, 15, 20. Next 25. 56+25=81.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-038",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 2, 6, 14, 30, ?",
      options: ["60", "62", "64", "66"],
      correct: 1,
      explanation: "x2+2. 30x2+2=62.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-039",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 1, 8, 9, 64, 25, 216, ?",
      options: ["36", "49", "64", "100"],
      correct: 1,
      explanation: "Alternating squares and cubes: 1², 2³, 3², 4³, 5², 6³. Next is 7²=49.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-040",
      type: "mcq",
      difficulty: "hard",
      question: "Find next: 240, 120, 40, 10, ?",
      options: ["5", "4", "2", "1"],
      correct: 2,
      explanation: "Divide by 2, 3, 4... next /5. 10/5=2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-041",
      type: "mcq",
      difficulty: "easy",
      question: "Keep going: 10, 12, 14, 16, ?",
      options: ["18", "20", "22", "24"],
      correct: 0,
      explanation: "+2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-042",
      type: "mcq",
      difficulty: "medium",
      question: "Next: 12, 12, 24, 72, 288, ?",
      options: ["1440", "1200", "1000", "800"],
      correct: 0,
      explanation: "x1, x2, x3, x4... next x5. 288x5=1440.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-043",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 3, 4, 7, 11, 18, 29, ?",
      options: ["38", "47", "50", "43"],
      correct: 1,
      explanation: "Sum of previous two. 18+29=47.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-044",
      type: "mcq",
      difficulty: "hard",
      question: "Next term: 5, 25, 7, 49, 9, 81, ?",
      options: ["10", "11", "13", "12"],
      correct: 1,
      explanation: "Pairs (n, n²). 5, 25; 7, 49; 9, 81. Next odd is 11.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-045",
      type: "mcq",
      difficulty: "hard",
      question: "Sequence: 2, 5, 10, 17, 26, ?",
      options: ["30", "35", "37", "40"],
      correct: 2,
      explanation: "n²+1. 6²+1=37.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-046",
      type: "mcq",
      difficulty: "easy",
      question: "Complete: 1, 3, 5, 7, ?",
      options: ["8", "9", "10", "11"],
      correct: 1,
      explanation: "Odd numbers. 9.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-047",
      type: "mcq",
      difficulty: "medium",
      question: "Next: 31, 29, 24, 22, 17, ?",
      options: ["15", "14", "13", "12"],
      correct: 0,
      explanation: "-2, -5 alternating. 17-2=15.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-048",
      type: "mcq",
      difficulty: "hard",
      question: "Missing: 4, 18, ?, 100, 180, 294",
      options: ["32", "36", "48", "40"],
      correct: 2,
      explanation: "n³-n². 3³-3²=18. 4³-4²=48.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-049",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 1, 2, 4, 8, 16, ?",
      options: ["24", "30", "32", "64"],
      correct: 2,
      explanation: "x2. 32.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-050",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 2, 2, 5, 13, 28, ?",
      options: ["45", "50", "52", "60"],
      correct: 2,
      explanation: "Differences 0, 3, 8, 15... (n²-1). Next diff 5²-1=24. 28+24=52.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-051",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 9, 18, 27, 36, ?",
      options: ["45", "54", "63", "72"],
      correct: 0,
      explanation: "Multiples of 9. 45.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-052",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 3, 15, 35, 63, ?",
      options: ["80", "99", "120", "143"],
      correct: 1,
      explanation: "n²-1 for even n: 2²-1, 4²-1, 6²-1, 8²-1. Next 10²-1=99.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-053",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 7, 25, 61, 121, ?",
      options: ["181", "211", "241", "201"],
      correct: 1,
      explanation: "n³+n-1? No. n³+(n-1)²? No. Map: 2³-1, 3³-2, 4³-3, 5³-4. 211 is 6³-5. Yes. 216-5=211.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-054",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 3, 10, 20, 33, 49, 68, ?",
      options: ["75", "85", "90", "95"],
      correct: 2,
      explanation: "Differences 7, 10, 13, 16, 19... next 22. 68+22=90.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-055",
      type: "mcq",
      difficulty: "hard",
       question: "Series: 15, 31, 64, 131, ?",
      options: ["260", "266", "267", "265"],
      correct: 1,
      explanation: "x2+1, x2+2, x2+3... 131x2+4 = 262+4 = 266.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-056",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 1, 10, 100, ?",
      options: ["1000", "200", "500", "110"],
      correct: 0,
      explanation: "x10.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-057",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 28, 33, 31, 36, 34, ?",
      options: ["39", "38", "40", "35"],
      correct: 0,
      explanation: "+5, -2 alternating. 34+5=39.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-058",
      type: "mcq",
      difficulty: "hard",
      question: "Next term: 1, 2, 3, 6, 9, 18, ?",
      options: ["27", "36", "54", "45"],
      correct: 0,
      explanation: "x2, x1.5 alternating. 1->2(x2), 2->3(x1.5), 3->6(x2), 6->9(x1.5), 9->18(x2). Next 18x1.5=27.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-059",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 8, 15, 28, 53, ?",
      options: ["100", "102", "105", "110"],
      correct: 1,
      explanation: "x2-1, x2-2, x2-3... 53x2-4 = 106-4 = 102.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-060",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 3, 5, 9, 17, 33, ?",
      options: ["60", "64", "65", "66"],
      correct: 2,
      explanation: "2ⁿ+1. 2⁶+1=65.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-061",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 2, 4, 6, 8, ?",
      options: ["10", "12", "14", "16"],
      correct: 0,
      explanation: "+2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-062",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 11, 13, 17, 19, 23, 25, ?",
      options: ["27", "29", "31", "33"],
      correct: 1,
      explanation: "+2, +4, +2, +4 alternating. 25+4=29.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-063",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 4, 6, 12, 14, 28, 30, ?",
      options: ["32", "60", "62", "64"],
      correct: 1,
      explanation: "+2, x2 alternating. 30x2=60.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-064",
      type: "mcq",
      difficulty: "medium",
      question: "Complete: 10, 15, 25, 40, 60, ?",
      options: ["80", "85", "90", "95"],
      correct: 1,
      explanation: "Differences 5, 10, 15, 20. Next 25. 60+25=85.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-065",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 1, 5, 13, 25, 41, ?",
      options: ["51", "57", "61", "63"],
      correct: 2,
      explanation: "Differences 4, 8, 12, 16. Next 20. 41+20=61.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-066",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 1, 2, 4, 8, 16, ?",
      options: ["32", "64", "24", "48"],
      correct: 0,
      explanation: "x2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-067",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 2, 5, 12, 27, ?",
      options: ["50", "58", "60", "65"],
      correct: 1,
      explanation: "x2+1, x2+2, x2+3. 27x2+4=58.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-068",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 1, 3, 4, 8, 15, 27, ?",
      options: ["40", "50", "55", "60"],
      correct: 1,
      explanation: "Sum of 3 previous terms. 8+15+27=50.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-069",
      type: "mcq",
      difficulty: "medium",
      question: "Series: 1, 2, 3, 6, 12, 24, ?",
      options: ["36", "48", "60", "72"],
      correct: 1,
      explanation: "Each term is the sum of all previous terms. 24x2=48. (1+2+3+6+12+24=48).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-070",
      type: "mcq",
      difficulty: "hard",
      question: "Next term in 52, 51, 48, 43, 34, ?",
      options: ["20", "25", "19", "15"],
      correct: 2,
      explanation: "Subtract squares 1, 3, 5, 9?? No. Map: -1, -3, -5, -9. No. Map: -1, -3, -5, -9... try prime? No. Differences are -1, -3, -5, -9... try powers of 2? -1, -2-1. No. Final: 52-1=51, 51-3=48, 48-5=43, 43-9=34. Difference of difference? 2, 2, 4. Next 6? 9+6=15. 34-15=19. Matches. Option 2.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-071",
      type: "mcq",
      difficulty: "easy",
      question: "Next: 1.1, 2.2, 3.3, 4.4, ?",
      options: ["5.5", "6.6", "4.5", "5.4"],
      correct: 0,
      explanation: "+1.1.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-072",
      type: "mcq",
      difficulty: "medium",
      question: "Missing: 1/2, 1, 2, 4, ?",
      options: ["6", "8", "10", "12"],
      correct: 1,
      explanation: "x2. 4x2=8.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-073",
      type: "mcq",
      difficulty: "hard",
      question: "Next: 120, 60, 20, 5, ?",
      options: ["1", "2", "3", "4"],
      correct: 0,
       explanation: "/2, /3, /4... next /5. 5/5=1.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-074",
      type: "mcq",
      difficulty: "hard",
      question: "Complete: 1, 2, 4, 7, 11, 16, ?",
      options: ["20", "21", "22", "23"],
      correct: 2,
      explanation: "+1, +2, +3, +4, +5. Next +6. 16+6=22.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "sn-q-075",
      type: "mcq",
      difficulty: "hard",
      question: "Series: 3, 8, 15, 24, 35, ?",
      options: ["44", "46", "48", "50"],
      correct: 2,
      explanation: "n²-1. 7²-1=48.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
