
import { SQPQuestion } from '../../types';

export const SQP_QUESTIONS: SQPQuestion[] = [
  // 2022-23
  {
    id: 'u2-q3-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '3',
    question: '_________ is an institution that accept deposits for lending purposes.\n(Fill up the blank with correct alternative)',
    optionA: 'Commercial Banks',
    optionB: 'Life Insurance Corporation',
    optionC: 'Reserve Bank of India',
    optionD: 'Government of India',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **Who does what?**\nWhile Life Insurance Corporation (LIC) handles premium money and the Reserve Bank of India (RBI) operates as the apex central bank, only **Commercial Banks** are defined by the twin primary functions of accepting deposits from the general public and advancing loans for production and consumption purposes.'
  },
  {
    id: 'u2-q14-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14',
    question: 'As per the following news published in The Economic Times on 26th December, 2021:\n‘Reserve Bank of India has sold government securities worth ₹ 8,710 crore in the secondary market, over the last four weeks, to drain out excessive liquidity’.\nIdentify the likely cause and the consequences behind, this type of action plan of the Reserve Bank.',
    markingScheme: 'Cause: Inflation. By selling off the government securities, RBI withdraws money from circulation and thereby reducing the lending capacity of the commercial banks. In this process, the economy will experience contraction of credit, leading to reduction in consumption and investment demand. Consequently, the inflationary pressure in the economy will get eased out.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1 Mark for identifying the Cause:**\nThe likely cause is **Inflation** (excess money supply in the economy causing general prices to rise).\n\n**3 Marks for explaining the Consequences using Open Market Operations (OMO):**\n- Selling government securities by the Reserve Bank of India (RBI) withdraws money from public circulation (1 mark).\n- When commercial banks purchase these securities, their cash reserves fall. This action reduces their capacity to lend, leading to a contraction of credit in the economy (1 mark).\n- A contraction in credit results in a reduction in overall consumption and investment demand. Consequently, this fall in Aggregate Demand effectively eases out the inflationary pressures (1 mark).'
  },
  {
    id: 'u2-q15-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '15',
    question: 'Read the following text carefully, discuss briefly the relevant function of the Central Bank, indicated:\nRecently, Reserve Bank of India (RBI) conducted a statutory inspection for supervisory evaluation against a Commercial Bank. The commercial bank was imposed with stringent penalties, owing to deficiencies in regulatory compliances...\non the following fronts: i. ATM Card frauds, ii. Ensuring integrity and quality of data, iii. Loans to small borrowers',
    markingScheme: 'Supervisory function: The RBI regulates and supervises routine functioning of the commercial banks. Under this function, the RBI may exercise periodic inspections/audits of commercial banks, filing of reports... Central bank may take necessary corrective and punitive actions against the banks owing to deficiencies in regulatory compliances.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1 Mark for identifying the function:**\nThe text directly indicates the **Supervisory Function** of the Central Bank.\n\n**3 Marks for elaborating the function:**\n- The Reserve Bank of India (RBI) regulates and supervises the daily, routine functioning of commercial banks to protect depositors (1 mark).\n- As the apex body, it exercises periodic statutory inspections and audits of bank operations to ensure strict regulatory compliance (1 mark).\n- The Central Bank possesses the authority to take necessary corrective and punitive actions (like imposing heavy penalties) against banks owing to deficiencies in regulatory compliances, such as the ATM card frauds mentioned in the text (1 mark).'
  },
  {
    id: 'u2-q15or-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '15 OR',
    question: '‘Reserve Ratio and Credit Creation are inversely related.’ Do you agree with the given statement? Justify your answer with a suitable numerical example.',
    markingScheme: 'Yes. Money Multiplier = 1 / Reserve Ratio. Credit Creation = Initial Deposits x Money Multiplier.\nAssuming initial deposits = ₹ 10,000 crore.\nIf RR = 10%, Multiplier = 10, Credit Creation = 1,00,000 crore.\nIf RR = 25%, Multiplier = 4, Credit Creation = 40,000 crore.\nConclusion: Higher the reserve ratio, lesser credit will be created.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1 Mark for the correct statement:**\nYes, there is an inverse mathematical relationship between the Reserve Ratio and total Credit Creation by commercial banks.\n\n**3 Marks for the numerical example:**\n- State the formulas: Money Multiplier = 1 / Reserve Ratio. Total Credit Creation = Initial Deposit × Money Multiplier (1 mark).\n- Provide calculation 1 (e.g., 10% Reserve Ratio): If the Initial Deposit is ₹10,000 crores and Legal Reserve Ratio (LRR) is 10%, the Multiplier is 10 (1/0.1). This generates a total credit creation of ₹1,00,000 crores (1 mark).\n- Provide calculation 2 (e.g., 25% Reserve Ratio): If the Reserve Ratio increases to 25%, the Multiplier drops to 4 (1/0.25), generating only ₹40,000 crores in credit. This mathematically proves that higher reserves result in lower credit creation! (1 mark).'
  },

  // 2023-24
  {
    id: 'u2-q5-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '5',
    question: '“The value of all goods and services can be expressed in monetary units.”\nOn the basis of the given statement, identify the function performed by money:',
    optionA: 'Medium of exchange',
    optionB: 'Store of Value',
    optionC: 'Unit of account',
    optionD: 'Means of standard of deferred payments',
    answer: 'C',
    aiExplanation: 'Teacher\'s Voice: **The Price Tag Function!**\n"Unit of account" (also called Measure of Value) means that money serves as a common yardstick. Because of this function, we don\'t have to say "1 car = 5,000 apples". Instead, everything has a price tag in Rupees, making comparisons easy.'
  },
  {
    id: 'u2-q6-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '6',
    question: 'Find the missing figures and choose the correct alternative:\nRound 1: Deposits 1,000, Loans (80%) 800, Reserve Ratio (20%) 200\nRound II: Deposits 800, Loans (i), Reserve Ratio 160\n...\nTotal: Deposits (ii), Loans (iii), Reserve Ratio (iv)',
    optionA: '640, 1000, 4000, 5000',
    optionB: '960, 5000, 4000, 1000',
    optionC: '640, 4000, 1000, 5000',
    optionD: '640, 5000, 4000, 1000',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **Let\'s solve the puzzle!**\n- **(i)** In Round 2, Deposits are 800. Since the bank loans out 80%, Loans = 800 × 0.80 = 640.\n- **(ii)** Total Deposits = Initial Deposit × (1 / Legal Reserve Ratio [LRR]). Initial = 1000, LRR = 20% (0.2). Money Multiplier = 5. Total Deposits = 1000 × 5 = 5000.\n- **(iii)** Total Loans = Total Deposits - Total Reserves. 5000 - 1000 = 4000.\n- **(iv)** Total Reserves must eventually exactly equal the initial primary deposit introduced into the system (1000).\nSo the complete sequence is 640, 5000, 4000, 1000!'
  },
  {
    id: 'u2-q14b-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14 (B) OR',
    question: '“With an objective to reduce inflation, Reserve Bank of India may promote the commercial banks to park their surplus funds with it.”\nDiscuss the rationale behind the step taken by the Reserve Bank of India.',
    markingScheme: 'Reverse repo rate is the rate at which commercial banks may park their surplus funds with the Central Bank. In order to decrease inflation... RBI may increase the reverse repo rate. With the increase... it becomes lucrative for commercial banks to park surplus funds with the central bank. Consequently, this may lead to reduction in their lending capacity. Thereby, fall in the Aggregate Demand curbs the level of inflation.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1 Mark for identifying the concept:**\nThe rate at which commercial banks park their surplus, excess funds with the Central Bank is the **Reverse Repo Rate**.\n\n**3 Marks for the rationale (chain effect):**\n- In order to effectively decrease inflation, the Reserve Bank of India (RBI) will **increase** the Reverse Repo Rate (1 mark).\n- This increase makes it highly lucrative for commercial banks to safely park their surplus funds with the RBI to earn higher interest, instead of absorbing risk by giving loans to the general public, thereby reducing their lending capacity (1 mark).\n- The resulting fall in credit supply directly decreases Aggregate Demand in the economy, which successfully curbs the level of inflation (1 mark).'
  },
  {
    id: 'u2-q15-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '15',
    question: 'Elaborate the ‘Banker’s Bank and Supervisor’ function performed by the Reserve Bank of India.',
    markingScheme: 'Central bank accepts the deposits from commercial banks and also advances loans to them as and when required. It maintains reserves of all commercial banks and utilizes it to settle inter-bank claims. Being the supreme authority... it acts as the financier of last recourse to the commercial banks... The Central Bank supervises, regulates and controls the commercial banks (licensing, branch expansion, etc.)',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for the Banker to Banks role:**\n- The Reserve Bank of India (RBI) essentially acts as the banker for all commercial banks; it accepts their deposits and maintains their cash reserves (1 mark).\n- Being the supreme financial authority, it acts as the lender of last resort, advancing short-term credit and loans to commercial banks during financial crises when they desperately need funds (1 mark).\n\n**2 Marks for the Supervisor role:**\n- Because the RBI maintains reserves of all commercial banks, it seamlessly utilizes these accounts to settle inter-bank claims, acting as a Central Clearing House (1 mark).\n- Extremely importantly, the Central Bank supervises, regulates, and exclusively controls commercial banks regarding their licensing, branch expansion, liquidity requirements, and potential liquidation (1 mark).'
  },

  // 2024-25
  {
    id: 'u2-q1-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'Assertion-Reason',
    questionNumber: '1',
    question: 'Read the following statements: Assertion (A) and Reason (R). Choose the correct option from those given below:\nAssertion (A): The government can reduce the deflationary gap by purchasing government securities in the open market.\nReason (R): The Central Bank purchases government securities in the open market to increase the lending capacity of commercial banks.',
    optionA: 'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
    optionB: 'Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).',
    optionC: 'Assertion (A) is true, but Reason (R) is false.',
    optionD: 'Assertion (A) is false, but Reason (R) is true.',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **Pay attention to the naming!**\n- **Assertion is FALSE:** Open Market Operations (which involves the buying and selling of government securities) is strictly a Monetary Policy tool handled by the **Central Bank (Reserve Bank of India [RBI])**, entirely independent of the "government".\n- **Reason is TRUE:** When the RBI *buys* government securities from the open market, it pays cash into the reserves of the commercial banks. This significantly injects money into the financial system, expanding the banks\' lending capacity, which successfully increases aggregate demand and reduces a deflationary gap.'
  },
  {
    id: 'u2-q16-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 6,
    type: 'Case',
    questionNumber: '16',
    question: '“Over the centuries, money has evolved in various forms.” In the light of the given statement, state and discuss briefly any two forms of money.\n“Various economists have formed a strong opinion that, in the modern times digital currency (like CBDC) is quite essential. However, it comes with its own benefits and potential risks.” Do you agree with the given statement, giving valid arguments in support of your answer.',
    markingScheme: '(I) Metal currencies (Gold or silver coins with intrinsic value used as standardised representation). Paper currency (Issued in paper form by Central Bank, liability of issuing bank and asset of holding public).\n(II) Yes. CBDC provides significant benefits such as reduced dependency on cash, lower transaction costs, and reduced settlement risk. It leads to a more robust, efficient, trusted payment option. Associated risks: cyber-attacks and technology preparedness.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your combined 6 M!**\n\n**3 Marks for Part (I) - Forms of Money:**\n- Name and explain one form: e.g., Metal currencies. These were minted as Gold or silver coins which possessed intrinsic value (the metal itself had worth) and served as a trusted, standardized representation of wealth (1.5 marks).\n- Name and explain a second form: e.g., Paper currency. These are fiat notes issued by a central bank. They possess no intrinsic value but act purely as a liability of the issuing bank and a recognized asset to the holding public (1.5 marks).\n\n**3 Marks for Part (II) - Central Bank Digital Currency (CBDC) Arguments:**\n- State agreement: Yes, I strongly agree that CBDC is quite essential in modern times (1 mark).\n- Provide benefits: CBDC provides significant macroeconomic benefits such as drastically reduced dependency on physical cash printing, lower transaction costs, and a highly robust, efficient, and trusted payment settlement option (1 mark).\n- Acknowledge risks: However, it is accompanied by severe potential risks including vulnerabilities to sophisticated cyber-attacks, grid failures, and the overall technology preparedness and digital literacy of the population (1 mark).'
  },

  // 2025-26
  {
    id: 'u2-q8-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '8',
    question: 'On the basis of the given information, Money Supply (M1) would be ₹ _____ crore.\n(i) Currency held by the Public: 320\n(ii) Net Demand Deposits with Commercial Banks: 260\n(iii) Net Time Deposits with Commercial Banks: 200',
    optionA: '580',
    optionB: '780',
    optionC: '675',
    optionD: '875',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **The M1 Formula!**\nIn India, M1 (the most highly liquid measure of total money supply) consists of just two main components you need to worry about in this problem: Currency held by the public (C) + Net Demand Deposits securely held with commercial banks (DD).\nWe must completely ignore Time Deposits (like long-term Fixed Deposits) for the M1 calculation because they are not instantly liquid or spendable on demand.\nCalculation: 320 (Currency) + 260 (Demand Deposits) = **580**.'
  },
  {
    id: 'u2-q12b-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 3,
    type: 'SA',
    questionNumber: '12 (B)',
    question: '“The statutory requirement of the Reserve Ratio (RR) acts as a limit to the amount of credit that banks can create.”\nJustify the given statement with the valid explanation.',
    markingScheme: 'Reserve Ratio is the percentage of deposits that every commercial bank must keep as reserves and rest of the deposits can be used to give loans. Reserve Ratio is fixed by the Central Bank to avoid ‘over lending’ by commercial banks. This is legally binding to all commercial banks. Hence, the statutory requirement of the Reserve Ratio acts as a limit to the amount of credit that banks can create.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 3 M!**\n\n**1 Mark for defining the Reserve Ratio:**\nIt is the fixed percentage of total public deposits that every single commercial bank is legally obligated to keep aside as reserves, while only the remainder can be used to advance loans.\n\n**1 Mark for explaining the constraint on lending:**\nThis fraction is strategically fixed by the Central Bank to fundamentally avoid "over-lending" by commercial banks, acting as a legally binding brake pedal on rapid credit expansion.\n\n**1 Mark for the conclusion on credit creation:**\nBecause banks cannot freely lend 100% of the funds you deposit, this statutory requirement strictly caps the total Money Multiplier equation (which is 1 / Reserve Ratio). This mathematically places a hard, unbreachable limit on the total volume of credit that the banking system can create from initial deposits.'
  },
  {
    id: 'u2-q12b-or-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 3,
    type: 'SA',
    questionNumber: '12 (B) OR',
    question: '“The Reserve Bank of India (RBI) provides several banking services to the Government.”\nDo you agree with the given statement? Give valid explanation in support of your answer.',
    markingScheme: 'Yes. The Reserve Bank of India (RBI) serves as the Government\'s banker, managing its accounts, receiving deposits, and processing payments. Exchanges, remittances and various banking operations are facilitated by the RBI on behalf of the government. In addition to this, during any financial crisis, RBI provides credit to the government to ensure its smooth functioning...',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 3 M!**\n\n**1 Mark for taking a clear stance:**\nYes, I am in complete agreement with the statement. The Reserve Bank of India (RBI) fundamentally acts as the apex Government\'s banker.\n\n**1 Mark for explaining account and operational management:**\nJust like commercial banks serve the public, the RBI manages official government accounts, receives all their deposits, processes their payments, and handles complex exchanges and foreign remittances strictly on behalf of the state apparatus.\n\n**1 Mark for explaining financial crisis support:**\nDuring financial emergencies or when unexpected tax revenue falls short, the RBI steps in to provide critical credit and deficit financing to the government, ensuring the smooth, uninterrupted functioning of the nation.'
  },
  {
    id: 'u2-q15-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'Case',
    questionNumber: '15',
    question: 'Explain any two measures taken by the Central Bank to control the highlighted macroeconomic issue (Inflation).',
    imageUrl: '/assets/images/sqp-2026-q15.png',
    markingScheme: 'Repo Rate: A rise in repo rate will force the commercial banks to increase the lending rates, making the credit dearer for the general public, discouraging the borrowings. Consequently, Aggregate Demand will fall thus correcting the problem of inflation in the economy.\nOpen Market Operations: The Central Bank can sell government securities in the open market, thereby, reducing the availability of funds with the commercial banks for lending. Consequently, Aggregate Demand will fall.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for explaining Repo Rate mechanics:**\nTo aggressively control inflation, the Central Bank will strictly **increase** the Repo Rate (the rate at which it lends to banks). This forcibly leads commercial banks to increase their own lending rates, making market credit dearer for the general public. This ultimately discourages mass borrowing, causing Aggregate Demand to fall and effectively easing inflation in the overarching economy.\n\n**2 Marks for explaining Open Market Operations (OMO):**\nThe Central Bank will actively **sell** government securities directly in the open market. This immediately absorbs massive liquidity from the system, heavily reducing the actual availability of cash funds with commercial banks for onward lending. The resulting fierce credit contraction immediately causes Aggregate Demand to successfully fall, fiercely checking runaway inflation.'
  }
];
