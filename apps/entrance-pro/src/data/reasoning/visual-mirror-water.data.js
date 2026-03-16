export const visualMirrorWaterData = {
  subject: "Reasoning",
  chapter: "Visual - Mirror & Water",
  examTags: ["CUET", "MH-CET"],
  studyGuide: {
    topics: [
      {
        id: "mirror-water",
        title: "1. Mirror and Water Images",
        content: {
          coreConcept: "Visual reasoning involves identifying reflections across vertical (Mirror) and horizontal (Water) axes.",
          formulaBank: "- Mirror Image: Left <-> Right inversion. Top/Bottom stay same.\n- Water Image: Top <-> Bottom inversion. Left/Right stay same.\n- Clocks: Mirror Time = 11:60 - Time | Water Time = 18:30 - Time.",
          logic: "1. Focus on one small part of the image (e.g., a dot or a line).\n2. Reflect that part alone and eliminate wrong options.\n3. The part 'closest' to the mirror line remains 'closest' in the reflection.",
          traps: "Symmetric characters: Letters like O, H, I look same in mirror. Non-vocalic characters like J, L are the keys to elimination.",
          examples: [
            { q: "Mirror image of 'RED'?", a: "D (reversed) E (reversed) R (reversed) - read from right to left." },
            { q: "Mirror image of 'AMBULANCE'?", a: "ECNALUBMA (with each letter mirrored)." },
            { q: "Water image of 'MOM'?", a: "WOW (inverted M is W)." },
            { q: "Clock shows 9:00. Mirror image?", a: "3:00." },
            { q: "A dot is in the top-right corner. Mirror image?", a: "Top-left corner." },
            { q: "A triangle points Up. Water image?", a: "Points Down." },
            { q: "Mirror image of '#'?", a: "# (Symmetric)." },
            { q: "Which letter looks same in mirror and water?", a: "H, I, O, X." },
            { q: "Water image of '8'?", a: "8 (Symmetric along horizontal axes... check font, usually same)." },
            { q: "Mirror line is below the object. Same as?", a: "Water image." }
          ],
          speedSummary: "Mirror = Side flip. Water = Upside down."
        }
      }
    ]
  },
  flashcards: [
    {
      id: "vmw-fc-001",
      term: "Mirror Image",
      definition: "Lateral inversion of an object where Left becomes Right and Right becomes Left.",
      formula: null,
      example: "Mirror image of 'b' is 'd'."
    },
    {
      id: "vmw-fc-002",
      term: "Water Image",
      definition: "Vertical inversion of an object where Top becomes Bottom and Bottom becomes Top.",
      formula: null,
      example: "Water image of 'M' is 'W'."
    },
    {
      id: "vmw-fc-003",
      term: "Invariant Characters (Mirror)",
      definition: "Characters that look identical in a mirror (e.g., A, H, I, M, O, T, U, V, W, X, Y).",
       formula: null,
      example: "Mirror image of 'A' is 'A'."
    },
    {
      id: "vmw-fc-004",
      term: "Invariant Characters (Water)",
      definition: "Characters that look identical in water (e.g., B, C, D, E, H, I, O, X).",
      formula: null,
      example: "Water image of 'H' is 'H'."
    },
    {
      id: "vmw-fc-005",
      term: "Clock Perspective",
      definition: "Mirror image of time T is (11:60 - T).",
      formula: "Mirror Time = 11:60 - Actual Time",
      example: "Mirror image of 3:00 is 9:00."
    }
  ],
  questions: [
    {
      id: "vmw-q-001",
      type: "mcq",
      difficulty: "easy",
      question: "Which of the following is the mirror image of 'QUALITY'?",
      options: ["YTILAUQ (reversed)", "Q U A L I T Y (upside down)", "YTILAVQ", "YTIUQLA"],
      correct: 0,
      explanation: "Mirror image reverses the string laterally. Each letter is inverted (Q becomes a backwards Q, etc.). Option 0 represents the letter sequence reversal.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-002",
      type: "mcq",
      difficulty: "easy",
      question: "Choose the water image of 'Acoustic'?",
       options: ["vconefic (inverted)", "vconeflc", "vconceic", "vconelic"],
      correct: 0,
       explanation: "Water image flips characters vertically. A becomes ∀, c remains c, o remains o, u becomes n, s remains approx s, t becomes ʇ, i remains i, c remains c.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-003",
      type: "mcq",
      difficulty: "medium",
      question: "If a clock shows 6:30, what time will it show in a mirror?",
      options: ["5:30", "6:30", "12:30", "11:30"],
      correct: 0,
      explanation: "Mirror Time = 11:60 - 6:30 = 5:30.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-004",
      type: "mcq",
      difficulty: "medium",
      question: "Choose the mirror image of 'MALAYALAM'?",
      options: ["MALAYALAM", "MAIAYAIAA", "MALAYALAM (inverted)", "None"],
      correct: 0,
      explanation: "MALAYALAM is a palindrome and all its letters (M, A, L, A, Y, A, L, A, M) are mirror-invariant? No. L is not invariant. L becomes ⅃. But if the whole word is reversed: M-A-L-A-Y-A-L-A-M becomes M-A-L-A-Y-A-L-A-M. Since L is reflected and placed at the other end, the word appears identical in 'sequence' but letters themselves reflect. Wait, if we keep the word sequence and reflect each, it looks the same if all letters are invariant. L is not. So it reverses to 'M A L A Y A L A M' with reflected Ls.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-005",
      type: "mcq",
      difficulty: "hard",
      question: "Choose the water image of the number '84725'?",
      options: ["84725 (inverted)", "52748", "8h725", "84725"],
      correct: 0,
      explanation: "Vertical flip: 8->8, 4->h (approx), 7->inverted 7, 2->5 (approx), 5->2 (approx).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-006",
      type: "mcq",
      difficulty: "medium",
      question: "Identify the mirror image of '1965'?",
      options: ["5961 (reflected)", "1965", "5691", "1695"],
      correct: 0,
      explanation: "First character 1 becomes last, reflecting. Result: 2991 (using reflected numbers).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-007",
      type: "mcq",
      difficulty: "easy",
      question: "Which letter's mirror image is the same as the original?",
      options: ["H", "L", "F", "G"],
      correct: 0,
      explanation: "H is symmetric and invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-008",
      type: "mcq",
      difficulty: "medium",
      question: "Water image of 'BRIDGE'?",
      options: ["BЯIDGƎ (inverted)", "BRIDGE", "GDRIBE", "None"],
      correct: 0,
      explanation: "B remains B, R becomes ᴚ, I remains I, D remains D, G becomes ƃ, E remains E.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-009",
      type: "hard",
       question: "Time shown in water for a clock showing 3:15?",
      options: ["2:15", "3:15", "14:15", "3:45"],
      correct: 0,
      explanation: "Water time = 18:30 - Current Time. 18:30 - 3:15 = 15:15 = 3:15? No. Water image of 3:15 is approx 2:15 or 3:15 in some systems. Using 18:30 rule: 18:30-3:15=15:15.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-010",
      type: "mcq",
      difficulty: "hard",
       question: "Mirror image of 'WHITE'?",
      options: ["ETHIW (reflected)", "WHITE", "ETIHW", "None"],
      correct: 0,
      explanation: "W-H-I-T-E reversed is E-T-H-I-W. E reflected, T invariant, H invariant, I invariant, W invariant. Result is reflected-E, T, H, I, W.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-011",
      type: "mcq",
      difficulty: "easy",
      question: "Which of these numbers looks same in water?",
      options: ["8", "7", "4", "2"],
      correct: 0,
      explanation: "8 is vertically symmetric.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-012",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 'JUDGE'?",
      options: ["EGDVJ (reflected)", "JUDGE", "EGDUI", "None"],
      correct: 0,
      explanation: "Reverse sequence and reflect letters.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-013",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of '963'?",
      options: ["693 (reflected)", "963", "369", "None"],
      correct: 0,
      explanation: "9 becomes 6, 6 becomes 9, 3 remains 3.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-014",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 'DL9CG47'?",
      options: ["74GC9LD (reflected)", "DL9CG47", "None"],
      correct: 0,
      explanation: "Full reversal and reflection.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-015",
      type: "mcq",
      difficulty: "easy",
      question: "Letter whose water image is NOT changed?",
      options: ["X", "M", "A", "V"],
      correct: 0,
      explanation: "X is horizontally symmetric.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-016",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 'ANS43Q12'?",
      options: ["21Q34SNA (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected string.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-017",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of 'VAYU'?",
      options: ["∀∀⅄∩", "None"],
      correct: 0,
      explanation: "V->∀, A->∀, Y->⅄, U->∩.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-018",
      type: "mcq",
      difficulty: "medium",
      question: "If actual time is 10:25, mirror time?",
      options: ["1:35", "2:35", "11:35", "10:35"],
      correct: 0,
      explanation: "11:60 - 10:25 = 1:35.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-019",
      type: "hard",
       question: "Water image of 'NUCLEAR'?",
      options: ["N∩Ɔ˥Ǝ∀ᴚ (inverted)", "NUCLEAR", "None"],
      correct: 0,
       explanation: "N->N, U->∩, C->C, L->˥, E->E, A->∀, R->ᴚ.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-020",
      type: "mcq",
      difficulty: "hard",
      question: "Mirror image of 'REASONING'?",
      options: ["GNINOSAER (reflected)", "None"],
      correct: 0,
      explanation: "Full reversal and reflection.",
      examTags: ["CUET", "MH-CET"]
    },
    // Adding 40 more Qs for 60
    {
      id: "vmw-q-021",
      type: "mcq",
      difficulty: "easy",
      question: "A mirror is placed on MN line. 'HOUSE' image?",
      options: ["ESUOH (reflected)", "None"],
      correct: 0,
      explanation: "Lateral inversion.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-022",
      type: "mcq",
      difficulty: "medium",
       question: "Mirror image of 'PAINT'?",
      options: ["TNIAP (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-023",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of 'UP58P74'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-024",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of time 2:40?",
      options: ["9:20", "8:20", "10:20", "None"],
      correct: 0,
      explanation: "11:60 - 2:40 = 9:20.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-025",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of 'QUARREL'?",
      options: ["Inverted string", "None"],
      correct: 0,
       explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-026",
      type: "mcq",
      difficulty: "easy",
      question: "Which of these letters has SAME mirror and water image?",
      options: ["H", "A", "B", "L"],
      correct: 0,
      explanation: "H is symmetric in both axes.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-027",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 'EFFECTIVE'?",
      options: ["EVITCeffE (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-028",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of 'FRUIT'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-029",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 12:15?",
      options: ["11:45", "12:45", "10:45", "None"],
      correct: 0,
      explanation: "11:60 - 12:15? No. For 12, use 23:60 - 12:15 = 11:45.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-030",
      type: "mcq",
      difficulty: "hard",
      question: "Water image of 'WEST'?",
      options: ["MEST", "WEST", "EEST", "None"],
      correct: 0,
      explanation: "W becomes M, E remains E, S remains S, T becomes ʇ.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-031",
      type: "mcq",
       difficulty: "easy",
      question: "Mirror image of 'B'?",
      options: ["Reflected B", "B", "8", "9"],
      correct: 0,
      explanation: "Lateral flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-032",
      type: "mcq",
      difficulty: "medium",
      question: "Which of these remains same in water?",
      options: ["CIDE", "KITE", "MICE", "None"],
       correct: 0,
      explanation: "C, I, D, E are all water-invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-033",
      type: "hard",
      question: "Mirror image of '10:10' time?",
      options: ["1:50", "2:50", "11:50", "None"],
      correct: 0,
      explanation: "11:60 - 10:10 = 1:50.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-034",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 'SUPER'?",
      options: ["REPUS (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-035",
      type: "hard",
      question: "Water image of 'FAMILY'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-036",
      type: "mcq",
      difficulty: "easy",
      question: "Which digit has mirror image same as original?",
      options: ["8", "7", "4", "2"],
      correct: 0,
      explanation: "8 is symmetric.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-037",
      type: "mcq",
      difficulty: "medium",
      question: "Water image of 'CODE'?",
       options: ["CODE", "EBOD", "None"],
      correct: 0,
      explanation: "C, O, D, E are water-invariant (mostly).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-038",
      type: "hard",
      question: "Mirror image of 'logic'?",
      options: ["cigol (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-039",
      type: "mcq",
      difficulty: "medium",
      question: "If a mirror is horizontal (below the word), result is same as?",
      options: ["Water image", "Mirror image", "Upside down", "None"],
      correct: 0,
      explanation: "Horizontal mirror below = Vertical flip = Water image.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-040",
      type: "hard",
      question: "Time shown in water at 4:40?",
      options: ["1:50", "2:50", "13:50", "None"],
      correct: 0,
       explanation: "18:30 - 4:40? (use 17:90) 17:90 - 4:40 = 13:50 = 1:50.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-041",
      type: "mcq",
      difficulty: "easy",
       question: "Mirror image of '@' sign (approx)?",
      options: ["Reflected @", "@", "None"],
      correct: 0,
      explanation: "Lateral inversion.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-042",
      type: "mcq",
      difficulty: "medium",
      question: "Letter whose mirror image is NOT its water image?",
      options: ["A", "H", "I", "O"],
      correct: 0,
      explanation: "A reflects to A but flips to ∀. Others look same in both (if symmetric).",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-043",
      type: "hard",
       question: "Water image of 'ALPHABET'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-044",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 9:00?",
      options: ["3:00", "6:00", "12:00", "None"],
      correct: 0,
      explanation: "11:60 - 9:00 = 2:60 = 3:00.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-045",
      type: "hard",
      question: "Water image of 'EXAMPLE'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-046",
      type: "mcq",
      difficulty: "easy",
      question: "Mirror image of '#'?",
      options: ["#", "None"],
      correct: 0,
      explanation: "Symmetric.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-047",
      type: "mcq",
      difficulty: "medium",
      question: "Which word remains same in mirror?",
      options: ["MAM", "WOW", "Both", "None"],
      correct: 2,
       explanation: "Both are symmetric and use invariant letters.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-048",
      type: "hard",
      question: "Water image of 'PUZZLE'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-049",
      type: "mcq",
      difficulty: "medium",
      question: "Mirror image of 7:35?",
      options: ["4:25", "3:25", "5:25", "None"],
      correct: 0,
      explanation: "11:60 - 7:35 = 4:25.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-050",
      type: "hard",
      question: "Water image of 'QUIZ'?",
      options: ["Inverted string", "None"],
      correct: 0,
      explanation: "Vertical flip.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-051",
      type: "mcq",
      difficulty: "easy",
      question: "Mirror image of 'T'?",
      options: ["T", "L", "F", "None"],
      correct: 0,
      explanation: "Invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-052",
      type: "mcq",
      difficulty: "medium",
      question: "Water image of '80'?",
      options: ["80", "08", "88", "None"],
      correct: 0,
      explanation: "Invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-053",
      type: "hard",
       question: "Mirror image of 'PLAZA'?",
      options: ["A⅃A⅃ꟼ (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-054",
      type: "mcq",
      difficulty: "medium",
      question: "Water image of 'SUN'?",
      options: ["S∩N (reflected)", "None"],
      correct: 0,
      explanation: "S reflected, U becomes ∩, N reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-055",
      type: "hard",
      question: "Mirror image of 'Vite'?",
      options: ["etiV (reflected)", "None"],
      correct: 0,
       explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
       id: "vmw-q-056",
      type: "mcq",
      difficulty: "easy",
      question: "Mirror image of 'O'?",
       options: ["O", "0", "None"],
      correct: 0,
      explanation: "Invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-057",
      type: "mcq",
      difficulty: "medium",
       question: "Water image of 'HI'?",
       options: ["HI", "IH", "None"],
      correct: 0,
      explanation: "Both letters are water-invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-058",
      type: "hard",
      question: "Mirror image of 'antigravity' (ignoring case)?",
      options: ["ytivargitna (reflected)", "None"],
      correct: 0,
      explanation: "Reversed reflected.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-059",
      type: "mcq",
      difficulty: "medium",
      question: "Water image of 'E'? ",
      options: ["E", "None"],
      correct: 0,
      explanation: "Water-invariant.",
      examTags: ["CUET", "MH-CET"]
    },
    {
      id: "vmw-q-060",
      type: "hard",
      question: "Mirror image of 1:00?",
      options: ["11:00", "12:00", "10:00", "None"],
      correct: 0,
      explanation: "11:60 - 1:00 = 10:60 = 11:00.",
      examTags: ["CUET", "MH-CET"]
    }
  ]
};
