import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
    // --- SECTION 1: CORE DEFINITIONS ---
    {
        id: 'u7-emp-f1',
        question: 'Define the "Workforce" in an economy.',
        answer: 'The number of persons who are actually engaged in economic activities and contributing to the GDP.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f2',
        question: 'What is the "Labor Force"?',
        answer: 'All persons who are willing and able to work (Workforce + Unemployed searching for jobs).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f3',
        question: 'What is the formula for the Worker-Population Ratio (WPR)?',
        answer: '(Total Workers / Total Population) × 100.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f4',
        question: 'Identify the largest segment of the Indian workforce by status.',
        answer: 'Self-Employed (~52%).',
        category: 'Classification'
    },

    // --- SECTION 2: RURAL vs URBAN LOGIC ---
    {
        id: 'u7-emp-f5',
        question: 'Why is the Worker-Population Ratio (WPR) higher in rural areas than urban areas?',
        answer: 'Due to rural poverty, people cannot afford to stay at home (no "luxury" of unemployment); they enter the workforce early in low-end jobs.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f6',
        question: 'Why do urban areas have lower female participation rates?',
        answer: 'Greater focus on education/years of schooling and higher family income leads to fewer women entering "manual" wage work.',
        category: 'Theory'
    },

    // --- SECTION 3: TRENDS (INFORMAL & CASUAL) ---
    {
        id: 'u7-emp-f7',
        question: 'Define "Informalisation of Workforce".',
        answer: 'A movement where workers shift from the formal sector (secure) to the informal sector (no social security).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f8',
        question: 'What is "Casualisation of Workforce"?',
        answer: 'A trend where the proportion of casual wage laborers increases relative to self-employed and regular salaried workers.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f9',
        question: 'Distinguish Formal vs. Informal sector based on worker count.',
        answer: 'Formal: Enterprises with 10 or more hired workers. Informal: Less than 10 workers.',
        category: 'Classification'
    },
    {
        id: 'u7-emp-f10',
        question: 'What social security benefit is missing in the Informal Sector?',
        answer: 'Pension, Provident Fund (PF), and paid leaves.',
        category: 'Theory'
    },

    // --- SECTION 4: UNEMPLOYMENT & PARADOXES ---
    {
        id: 'u7-emp-f11',
        question: 'What is "Jobless Growth"?',
        answer: 'A situation where GDP grow significantly due to technology, but employment creation remains very low or stagnant.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f12',
        question: 'Define "Disguised Unemployment".',
        answer: 'A situation where more people are engaged in an activity than required; removing them wouldn\'t change total output (Marginal Productivity = 0).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f13',
        question: 'What is "Seasonal Unemployment"?',
        answer: 'Common in agriculture; people are unemployed for particular months when there is no sowing or harvesting.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f14',
        question: 'Which sector carries the highest burden of Disguised Unemployment in India?',
        answer: 'The Agricultural (Primary) Sector.',
        category: 'Theory'
    },

    // --- SECTION 5: EXPERT ANALYST (Premium Logic) ---
    {
        id: 'u7-emp-f15',
        question: 'In the "Job Market Seesaw" analogy, what corresponds to the balance between producers and consumers?',
        answer: 'The Worker-Population Ratio (WPR). High ratio = Balanced; Low ratio = High dependency.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f16',
        question: 'How did the "Ahmedabad Textile Mills" closure in the 1980s illustrate Informalisation?',
        answer: 'Thousands of secure formal workers were forced into low-end informal jobs like pushcart vending or construction.',
        category: 'Application'
    },
    {
        id: 'u7-emp-f17',
        question: 'TRUE/FALSE: A regular salaried worker in an MNC on a 1-year "contract" is part of the Formal Sector.',
        answer: 'FALSE. Since they lack long-term social security and protection, they are part of the Informalised workforce.',
        category: 'True/False'
    },
    {
        id: 'u7-emp-f18',
        question: 'Explain the "Casualisation Trap".',
        answer: 'Workers move out of agriculture (Primary) but instead of landing secure industrial jobs, they get stuck in daily-wage construction or services with no security.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f19',
        question: 'What is the "Invisible Work" trap for females?',
        answer: 'Household chores and caregiving are not counted as "Economic Activity", lead to an underestimation of female participation in GDP.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f20',
        question: 'What is the "Master Chain" reason for Jobless Growth?',
        answer: 'Technology Bias: Using machines (capital) to grow output instead of hiring human labor.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f21',
        question: 'What is "Educated Unemployment"?',
        answer: 'A situation where people with high school or university degrees are unable to find jobs that match their skills.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f22',
        question: 'Identify the sector that remains the largest employer in India and its approximate share.',
        answer: 'The Primary (Agricultural) Sector, employing ~45% of the workforce.',
        category: 'Classification'
    },
    {
        id: 'u7-emp-f23',
        question: 'In the "Employment Engine" Master Chain, what do the "Fuel" and "Filter" represent?',
        answer: 'Fuel = Population Growth (Raw resource); Filter = Education & Skill (Creating employable workers).',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f24',
        question: 'Distinguish between Direct and Indirect Government Employment.',
        answer: 'Direct: Govt hiring in own departments (Railways, Banks). Indirect: Private sector jobs created when govt buys goods (Steel, Cement) from them.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f25',
        question: 'What is the primary guarantee provided under MGNREGA (2005)?',
        answer: '100 days of guaranteed wage employment to every rural household whose adult members volunteer for unskilled manual work.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f26',
        question: 'Why does NCERT emphasize that work is about more than just "earning"?',
        answer: 'Because employment provides a sense of self-worth, social identity, and relates the individual meaningfully to others.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f27',
        question: 'What is the "Home as Workplace" trend mentioned by NCERT?',
        answer: 'A modern trend where technology allows people to work from home (e.g., outsourcing), providing flexibility but often lacking stable contracts or social security.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f28',
        question: 'Define "Open Unemployment".',
        answer: 'A situation where a person is willing to work and has the ability, but cannot find even an hour of work in a half-day.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f30',
        question: 'What is the formula for "Labor Force Participation Rate" (LFPR)?',
        answer: '(Labor Force / Total Population) × 100.',
        category: 'Technical'
    },
    // --- SECTION 6: GRANULAR NCERT DETAILS & STATS ---
    {
        id: 'u7-emp-f31',
        question: 'Does a person who is temporarily away from work due to illness or festivals count as a "worker"?',
        answer: 'Yes, NCERT defines "worker" to include those temporarily absent from work due to injury, illness, social/religious functions, or strikes.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f32',
        question: 'What is the share of "Regular Salaried Employees" in the Indian workforce?',
        answer: 'Around 23%.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f33',
        question: 'What is the share of "Casual Wage Laborers" in the Indian workforce?',
        answer: 'Around 25%.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f34',
        question: 'Primary sector employment share dropped from ~74% in the 1970s to what percentage in 2017-18?',
        answer: 'To approximately 45%.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f35',
        question: 'What percentage of Indian workers are in the "Formal Sector"?',
        answer: 'Only about 6%.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f36',
        question: 'What percentage of Indian workers are in the "Informal Sector"?',
        answer: 'Approximately 94%.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f37',
        question: 'What is the "10-worker rule" for the Formal Sector?',
        answer: 'Public sector establishments and private sector establishments which hire 10 or more hired workers are called formal sector establishments.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f38',
        question: 'Mention two "Social Security Benefits" provided in the Formal Sector.',
        answer: 'Provident Fund (PF) and Pension.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f39',
        question: 'Why is the Tertiary sector considered the "fastest-growing engine" of the economy?',
        answer: 'Because its share in employment and GDP contribution has grown more rapidly than the Primary and Secondary sectors.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f40',
        question: 'Define "Work" according to the introductory NCERT section.',
        answer: 'An activity by which people earn their livelihood and contribute to the national income (GDP).',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f41',
        question: 'In the Ahmedabad Textile crisis, what did 80,000+ workers lose?',
        answer: 'They lost secure "Formal" jobs, pension rights, and health benefits, forcing them into poverty.',
        category: 'Application'
    },
    {
        id: 'u7-emp-f42',
        question: 'In "Disguised Unemployment," what is the level of Marginal Productivity (MP)?',
        answer: 'Marginal Productivity is Zero (MP = 0).',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f43',
        question: 'What is "Distress Migration"?',
        answer: 'Movement of workers from rural to urban areas due to lack of livelihood or crop failure, often leading to casualisation.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f44',
        question: 'How does technology contribute to "Jobless Growth"?',
        answer: 'Technology allowing "Capital-Intensive" production, where output increases using machines instead of human labor.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f45',
        question: 'Distinguish between Self-Employed and Hired Workers.',
        answer: 'Self-employed work on their own farm/business; Hired workers are employed by others and paid wages/salary.',
        category: 'Classification'
    },
    {
        id: 'u7-emp-f46',
        question: 'Identify the "Right to Work" legal act of 2005.',
        answer: 'MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act).',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f47',
        question: 'Aside from employment, what is the second goal of MGNREGA?',
        answer: 'Creating durable assets like roads, canals, and dams in rural areas.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f48',
        question: 'What is the "Exhaust" in the Employment Engine Master Chain?',
        answer: 'Technology Bias: The negative byproduct where growth happens without creating enough jobs.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f49',
        question: 'What is the "Breakdown" in the Employment Engine Master Chain?',
        answer: 'Informalisation and Casualisation: The engine is running, but the quality of jobs (safety net) is broken.',
        category: 'Analogy'
    },
    {
        id: 'u7-emp-f50',
        question: 'Golden Rule: What does a "Lower Worker-Population Ratio (WPR)" indicate?',
        answer: 'A higher dependency ratio—fewer people are producing while more are consuming.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f51',
        question: 'True or False: Every person who is not working is counted as "unemployed".',
        answer: 'False. Only those who are willing and able to work but cannot find jobs are considered unemployed.',
        category: 'True/False'
    },
    {
        id: 'u7-emp-f52',
        question: 'Why is the WPR for males always higher than females in India?',
        answer: 'Due to social norms where males are seen as primary breadwinners and females are often discouraged from public work.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f53',
        question: 'What is the "Labor Force" formula?',
        answer: 'Labor Force = Number of Employed + Number of Unemployed.',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f54',
        question: 'Define "Unemployment" in simple NCERT terms.',
        answer: 'A situation where people are willing to work at current wages but cannot find work.',
        category: 'Definition'
    },
    {
        id: 'u7-emp-f55',
        question: 'By what percentage did Indian GDP grow in the late 90s vs employment?',
        answer: 'GDP grew at ~8-9% while employment grew at only ~1% (Jobless Growth).',
        category: 'Technical'
    },
    {
        id: 'u7-emp-f56',
        question: 'What did regular formal workers do after the Ahmedabad mills closed?',
        answer: 'They became pushcart vendors, casual laborers, or took up low-end textile work in homes.',
        category: 'Application'
    },
    {
        id: 'u7-emp-f57',
        question: 'Golden Rule: How to distinguish Casual vs. Informal?',
        answer: 'If there is NO social security (PF/Pension), it is Informal. Casual specifically refers to "Status" (irregular daily wage).',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f58',
        question: 'Give an example of "Indirect Employment" generated by the government.',
        answer: 'A government construction project buying steel from a private firm, which leads the firm to hire more workers.',
        category: 'Application'
    },
    {
        id: 'u7-emp-f59',
        question: 'Why does NCERT consider household chores as "non-economic" activity?',
        answer: 'Because they do not directly contribute to the market GDP as they are not paid services.',
        category: 'Theory'
    },
    {
        id: 'u7-emp-f60',
        question: 'How many days of guaranteed manual work does MGNREGA provide?',
        answer: 'At least 100 days in a financial year.',
        category: 'Technical'
    }
];
