import { Flashcard } from '../../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'u2-fc1',
    question: 'Define Money Supply.',
    answer: 'It refers to the total stock of money (currency and demand deposits) held by the public at a specific point in time in an economy.',
    category: 'Definition',
    aiExplanation: 'It is a "Stock" concept. Key Point: It only includes money held by the "Public" (individuals/firms). It excludes money held by the government and the banking system themselves.'
  },
  {
    id: 'u2-fc2',
    question: 'What are the components of the M1 measurement of Money Supply?',
    answer: 'M1 = Currency and coins with public (C) + Demand deposits of commercial banks (DD) + Other deposits with RBI (OD).',
    category: 'Technical',
    aiExplanation: 'M1 is the "Narrow Money." It is the most liquid form of money — you can spend it immediately. Demand Deposits are included because you can withdraw them via cheque instantly.'
  },
  {
    id: 'u2-fc3',
    question: 'What is Fiat Money?',
    answer: 'Money which is issued by the order/authority of the government (e.g., all notes and coins).',
    category: 'Classification',
    aiExplanation: 'The word "Fiat" means "by decree." This money has no intrinsic value (a ₹2000 note is just a piece of paper), but it has value because the Govt says it does.'
  },
  {
    id: 'u2-fc4',
    question: 'Define Fiduciary Money.',
    answer: 'Money that is accepted as a medium of exchange because of the trust between the payer and the payee (e.g., Cheques).',
    category: 'Classification',
    aiExplanation: 'Unlike currency, you are not legally forced to accept a cheque. You only accept it because you "trust" (fiduciary) the person has money in the bank.'
  },
  {
    id: 'u2-fc5',
    question: 'What is High Powered Money?',
    answer: 'The sum of currency held by the public and cash reserves of the banks. It is the monetary base of the economy.',
    category: 'Definition',
    aiExplanation: 'Also called the "Monetary Base" (H). It is the source of all other money. When banks get "H", they use it to create "Credit Money" (the multiplier effect).'
  },
  {
    id: 'u2-fc6',
    question: 'Distinguish between Full-Bodied Money and Credit Money.',
    answer: 'Full-bodied money has commodity value equal to money value (e.g., gold coins). Credit money has money value greater than commodity value (e.g., paper notes).',
    category: 'Theory',
    aiExplanation: 'In the old days, a gold coin was worth its weight in gold (Full-bodied). Today, our paper notes are worth far more than the paper they are printed on (Credit Money).'
  },
  {
    id: 'u2-fc7',
    question: 'What is Legal Tender Money?',
    answer: 'Money that can be used to make payments of debts or other obligations and cannot be refused by anyone.',
    category: 'Definition',
    aiExplanation: 'If you owe someone money, they MUST legally accept coins/notes. If they refuse, the debt is considered discharged in court.'
  },
  {
    id: 'u2-fc8',
    question: 'Name the authority that issues one-rupee notes and all coins in India.',
    answer: 'The Ministry of Finance, Government of India.',
    category: 'Technical',
    aiExplanation: 'Common Trap! The RBI issues all notes from ₹2 to ₹2000. But the Govt of India (Ministry of Finance) issues the ₹1 note and all coins.'
  },
  {
    id: 'u2-fc9',
    question: 'List the two primary functions of Commercial Banks.',
    answer: '1. Accepting deposits from the public. 2. Advancing loans to borrowers.',
    category: 'Theory',
    aiExplanation: 'This is the "Financial Intermediation" role. They take money from people with extra (savers) and give it to people who need it (investors).'
  },
  {
    id: 'u2-fc10',
    question: 'What is the Money Multiplier formula?',
    answer: 'Money Multiplier = 1 / Legal Reserve Ratio (LRR).',
    category: 'Calculation',
    aiExplanation: 'It tells us how many times the initial deposit will "multiply" to become total credit. If LRR is 0.1 (10%), the multiplier is 10.'
  },
  {
    id: 'u2-fc11',
    question: 'How is Total Credit Creation calculated?',
    answer: 'Total Credit Creation = Initial Deposit × (1 / LRR).',
    category: 'Calculation',
    aiExplanation: 'Initial Deposit is the "Seed." The Multiplier is the "Growth factor." Total Credit is the final "Tree."'
  },
  {
    id: 'u2-fc12',
    question: 'What are the two components of the Legal Reserve Ratio (LRR)?',
    answer: '1. Cash Reserve Ratio (CRR). 2. Statutory Liquidity Ratio (SLR).',
    category: 'Technical',
    aiExplanation: 'CRR is the part kept with the RBI. SLR is the part kept by the bank themselves in liquid assets (Gold, Cash, Bonds).'
  },
  {
    id: 'u2-fc13',
    question: 'Define Cash Reserve Ratio (CRR).',
    answer: 'The minimum percentage of net demand and time liabilities that commercial banks are required to keep as cash with the Central Bank (RBI).',
    category: 'Definition',
    aiExplanation: 'RBI uses CRR to suck out or inject liquidity. If CRR rises, banks have less money to lend, and Money Supply falls.'
  },
  {
    id: 'u2-fc14',
    question: 'Define Statutory Liquidity Ratio (SLR).',
    answer: 'The minimum percentage of assets that commercial banks are required to maintain in the form of liquid assets (Cash, Gold, Unencumbered Securities) with themselves.',
    category: 'Definition',
    aiExplanation: 'SLR ensures banks always have "Liquid" cash to pay depositors who come back to withdraw money. It prevents bank runs.'
  },
  {
    id: 'u2-fc15',
    question: 'What happens to the money supply if the RBI increases the CRR?',
    answer: 'The money supply decreases because banks have fewer funds available for lending.',
    category: 'Application',
    aiExplanation: 'High CRR -> Low Loanable Funds -> Low Credit Creation -> Low Money Supply. This is used to fight Inflation.'
  },
  {
    id: 'u2-fc16',
    question: 'State the "Lender of Last Resort" function of the Central Bank.',
    answer: 'It means that the Central Bank provides financial accommodation to commercial banks when they fail to get funds from any other source.',
    category: 'Theory',
    aiExplanation: 'RBI acts as the "Father" of the banking system. If a bank is in trouble and no one else helps, the RBI provides an emergency loan to save it.'
  },
  {
    id: 'u2-fc17',
    question: 'Explain the "Banker to the Government" function of the RBI.',
    answer: 'The RBI manages the government\'s accounts, provides loans to the government during crises, and acts as an agent/advisor on financial matters.',
    category: 'Theory',
    aiExplanation: 'Just like we have a bank account in SBI, the Govt has its account in the RBI. RBI also manages the Govt\'s public debt.'
  },
  {
    id: 'u2-fc18',
    question: 'What is Repo Rate?',
    answer: 'The rate at which the Central Bank (RBI) lends money to commercial banks for short-term needs by purchasing their securities.',
    category: 'Definition',
    aiExplanation: '"Repo" stands for Repurchase Option. Banks sell securities to RBI and "promise" to buy them back tomorrow at a slightly higher price (the repo rate).'
  },
  {
    id: 'u2-fc19',
    question: 'Define Reverse Repo Rate.',
    answer: 'The rate at which the Central Bank (RBI) borrows money from commercial banks by parking their surplus funds with itself.',
    category: 'Definition',
    aiExplanation: 'When banks have "extra" cash, they "lend" it to the RBI to earn interest. This rate is always lower than the Repo rate.'
  },
  {
    id: 'u2-fc20',
    question: 'How does an increase in the Repo Rate control inflation?',
    answer: 'It makes borrowing expensive for commercial banks, leading to higher interest rates for the public, which reduces demand and money supply.',
    category: 'Application',
    aiExplanation: 'Repo Rate Up -> Bank Interest Rate Up -> People Borrow Less -> Consumption Down -> Prices (Inflation) Down.'
  },
  {
    id: 'u2-fc21',
    question: 'What are Open Market Operations (OMO)?',
    answer: 'The buying and selling of government securities in the open market by the Central Bank to regulate the money supply.',
    category: 'Theory',
    aiExplanation: 'If RBI SELLS bonds, it takes cash from the public (Liquidity Falls). If RBI BUYS bonds, it gives cash to the public (Liquidity Rises).'
  },
  {
    id: 'u2-fc22',
    question: 'State one qualitative tool of credit control used by the RBI.',
    answer: 'Margin Requirement (or Moral Suasion, Selective Credit Control).',
    category: 'Technical',
    aiExplanation: 'Qualitative tools control the "Direction" of credit (who gets it), while Quantitative tools (Repo/CRR) control the "Volume" (how much).'
  },
  {
    id: 'u2-fc23',
    question: 'Define Margin Requirement.',
    answer: 'The difference between the current market value of the security offered for a loan and the actual value of the loan granted.',
    category: 'Definition',
    aiExplanation: 'If you give a ₹100 gold and get a ₹80 loan, the Margin is ₹20. If RBI says "Increase Margin to ₹40," you only get a ₹60 loan. Credit falls.'
  },
  {
    id: 'u2-fc24',
    question: 'What is Moral Suasion?',
    answer: 'A combination of persuasion and pressure exerted by the Central Bank on commercial banks to follow its directives and policy goals.',
    category: 'Definition',
    aiExplanation: 'It\'s an "informal" tool. RBI Governor meets bank CEOs and tells them to reduce lending for luxury items. It\'s a request with a hidden warning.'
  },
  {
    id: 'u2-fc25',
    question: 'Distinguish between Central Bank and Commercial Bank.',
    answer: 'Central Bank is the apex body regulating the system (Profit is not the goal); Commercial Banks operate for profit and serve the public directly.',
    category: 'Classification',
    aiExplanation: 'RBI = Regulator/Authority. SBI/HDFC/ICICI = Businesses selling banking services to you for profit.'
  },
  {
    id: 'u2-fc26',
    question: 'True or False: Inter-bank deposits are included in the measure of Money Supply.',
    answer: 'False. Only deposits held by the public are included.',
    category: 'True/False',
    aiExplanation: 'Money supply should only measure what can be used for spending in the market. Banker-to-banker deposits don\'t affect market demand.'
  },
  {
    id: 'u2-fc27',
    question: 'True or False: Commercial banks have the authority to issue currency notes.',
    answer: 'False. Only the Central Bank has the sole authority for note issuance.',
    category: 'True/False',
    aiExplanation: 'Issuing money is a "Sovereign Power." If every bank printed its own money, there would be chaos and infinite inflation.'
  },
  {
    id: 'u2-fc28',
    question: 'If the LRR is 20%, what is the value of the Money Multiplier?',
    answer: 'Money Multiplier = 1 / 0.20 = 5.',
    category: 'Calculation',
    aiExplanation: 'This means every ₹1 of initial deposit turns into ₹5 of total credit in the system.'
  },
  {
    id: 'u2-fc29',
    question: 'What is the impact of "Selling Government Securities" by the RBI on credit creation?',
    answer: 'It reduces the cash reserves of banks, thereby decreasing their ability to create credit (Money Supply decreases).',
    category: 'Application',
    aiExplanation: 'Banks buy the securities using their cash. Now they have "Bonds" (illiquid) instead of "Cash" (loanable). Crediting power falls.'
  },
  {
    id: 'u2-fc30',
    question: 'Define Demand Deposits.',
    answer: 'Deposits that can be withdrawn by the depositor by writing a cheque at any time without prior notice.',
    category: 'Definition',
    aiExplanation: 'Think Savings and Current accounts. They are "liquid" like cash because you can use them to pay anyone instantly via cheque or UPI.'
  },
  {
    id: 'u2-fc31',
    question: 'Is Money Supply a Stock or Flow concept?',
    answer: 'Stock concept, as it is measured at a specific point in time.',
    category: 'Theory',
    aiExplanation: 'We ask: "How much money is in circulation *right now*?" We don\'t ask "How much money flowed today?" (that would be Transactions).'
  },
  {
    id: 'u2-fc32',
    question: 'Explain the "Custodian of Foreign Exchange Reserves" function.',
    answer: 'The Central Bank maintains the country\'s gold and foreign currency reserves to stabilize the external value of the domestic currency.',
    category: 'Theory',
    aiExplanation: 'RBI holds Dollars, Euros, and Gold. If the Rupee falls too much, RBI sells Dollars to buy Rupees, keeping our currency stable.'
  },
  {
    id: 'u2-fc33',
    question: 'What is Bank Rate?',
    answer: 'The rate at which the Central Bank lends long-term funds to commercial banks without any collateral.',
    category: 'Definition',
    aiExplanation: 'Unlike Repo (short term + securities), Bank Rate is for long-term lending. It\'s also used as a "Penalty Rate" for banks that break rules.'
  },
  {
    id: 'u2-fc34',
    question: 'How do you control Deflation using the Legal Reserve Ratio?',
    answer: 'Decrease the LRR to increase the credit-creating capacity of banks, leading to a rise in the money supply.',
    category: 'Application',
    aiExplanation: 'Lower reserves -> More money to lend -> Interest rates fall -> People borrow/spend more -> Deflation ends.'
  },
  {
    id: 'u2-fc35',
    question: 'What is the role of RBI as a "Clearing House"?',
    answer: 'It settles inter-bank claims and transfers easily because all commercial banks maintain accounts with the RBI.',
    category: 'Theory',
    aiExplanation: 'If you use an SBI card to pay at an HDFC terminal, SBI owes money to HDFC. Instead of sending cash, RBI just changes the numbers in their internal accounts.'
  },
  {
    id: 'u2-fc36',
    question: 'State one limitation of the credit creation process.',
    answer: 'The availability of initial deposits and the value of the Legal Reserve Ratio set by the RBI.',
    category: 'Theory',
    aiExplanation: 'If people stop putting cash in banks (cash hoarding), or if the RBI sets LRR to 100%, the banking system cannot create any new money.'
  },
  {
    id: 'u2-fc37',
    question: 'What is "Limited Legal Tender"?',
    answer: 'Money that can be used to pay debts only up to a certain maximum limit (e.g., coins in some jurisdictions).',
    category: 'Definition',
    aiExplanation: 'In India, you can\'t pay a ₹1 lakh debt using all 50-paise coins. There is a legal limit to how many coins a person can be forced to accept.'
  },
  {
    id: 'u2-fc38',
    question: 'What is "Unlimited Legal Tender"?',
    answer: 'Money that can be used to make payments of any amount (e.g., paper currency notes).',
    category: 'Definition',
    aiExplanation: 'You can pay any amount (even crores) using ₹500 notes, and the recipient must legally accept it for a legal debt.'
  },
  {
    id: 'u2-fc39',
    question: 'How does an increase in the Reverse Repo Rate affect bank lending?',
    answer: 'It encourages banks to park more funds with the RBI instead of lending to the public, thus decreasing the money supply.',
    category: 'Application',
    aiExplanation: 'Reverse Repo is the "Safe Interest" banks get from RBI. If it rises, banks find it "safer and better" to give money to RBI than making risky loans to public.'
  },
  {
    id: 'u2-fc40',
    question: 'Calculate Total Credit if Initial Deposit = ₹ 2,000 and LRR = 10%.',
    answer: 'Total Credit = ₹ 2,000 × (1 / 0.10) = ₹ 2,000 × 10 = ₹ 20,000.',
    category: 'Calculation',
    aiExplanation: 'Check: Total Credit = Initial Deposit × Multiplier. 1/0.1 is 10. 2000 x 10 = 20,000.'
  },
  {
    id: 'u2-fc41',
    question: 'Define Money.',
    answer: 'Anything that is generally accepted as a medium of exchange, measure of value, store of value, and standard of deferred payment.',
    category: 'Definition',
    aiExplanation: 'This is the "Functional Definition." If we all agree to use "Shells" for all these 4 things, shells become money.'
  },
  {
    id: 'u2-fc42',
    question: 'What are Primary Deposits?',
    answer: 'Cash deposits made by the public with the commercial banks.',
    category: 'Classification',
    aiExplanation: 'These are "Real Cash" coming from outside into the banking system. They are the base for credit creation.'
  },
  {
    id: 'u2-fc43',
    question: 'What are Derivative Deposits?',
    answer: 'Deposits created by banks by way of granting loans to the public; also known as secondary deposits.',
    category: 'Classification',
    aiExplanation: 'When a bank gives a loan, it doesn\'t give cash. It opens a new account for the borrower. This "Fake" deposit created by lending is a Derivative Deposit.'
  },
  {
    id: 'u2-fc44',
    question: 'True or False: Central Bank is the only source of money supply in India.',
    answer: 'False. Money supply is created by the Central Bank, Government, and Commercial Banks (through credit creation).',
    category: 'True/False',
    aiExplanation: 'RBI creates the "Base" (notes); Govt creates the "Coins"; Commercial Banks create "Credit Money" (deposits).'
  },
  {
    id: 'u2-fc45',
    question: 'What is a "Dear Money Policy"?',
    answer: 'A policy of the Central Bank to reduce the money supply by increasing interest rates.',
    category: 'Theory',
    aiExplanation: 'Money becomes "Dear" (Expensive) to borrow. This is used during high inflation to cool the economy down.'
  },
  {
    id: 'u2-fc46',
    question: 'What is a "Cheap Money Policy"?',
    answer: 'A policy of the Central Bank to increase the money supply by reducing interest rates.',
    category: 'Theory',
    aiExplanation: 'Money becomes "Cheap" (Easy) to borrow. Used during recessions to encourage business investment.'
  },
  {
    id: 'u2-fc47',
    question: 'State the meaning of Credit Control.',
    answer: 'The process of regulating the volume and direction of credit by the Central Bank to achieve economic stability.',
    category: 'Theory',
    aiExplanation: 'Credit control is like a "Thermostat" for the economy. Too much credit causes inflation; too little causes recession.'
  },
  {
    id: 'u2-fc48',
    question: 'Identify the Quantitative tool: Margin Requirement or Repo Rate?',
    answer: 'Repo Rate.',
    category: 'Classification',
    aiExplanation: 'Repo rate affects the *volume* of total money. Margin requirement only affects *who* can get a loan (Qualitative).'
  },
  {
    id: 'u2-fc49',
    question: 'Identify the Qualitative tool: SLR or Moral Suasion?',
    answer: 'Moral Suasion.',
    category: 'Classification',
    aiExplanation: 'Moral suasion is about directing banks. SLR is a fixed ratio that affects the total loanable funds (Quantitative).'
  },
  {
    id: 'u2-fc51',
    question: 'How does money act as a "Store of Value"?',
    answer: 'It acts as an asset that can be used to transfer purchasing power from the present to the future. Stability in value is a prerequisite.',
    category: 'Theory',
    aiExplanation: 'If you want to buy a car in a year, you can save money today. It "Stores" your hard work for future use. Inflation is the greatest enemy of this function.'
  },
  {
    id: 'u2-fc52',
    question: 'What is the "Liquidity Trap"?',
    answer: 'A situation where interest rates are so low that individuals expect them to rise, making money demand infinitely elastic (the curve becomes horizontal).',
    category: 'Theory',
    aiExplanation: 'At very low rates, people think "Bonds are too expensive and interest is too low, let\'s just keep cash." Even if the RBI prints money, interest rates won\'t fall further.'
  },
  {
    id: 'u2-fc53',
    question: 'Define Speculative Demand for Money.',
    answer: 'The demand for money held as an alternative to assets like bonds, based on expectations of future interest rates.',
    category: 'Theory',
    aiExplanation: 'If you think interest rates will RISE in future (meaning bond prices will fall), you will hold "Cash" today to buy bonds later at a lower price.'
  },
  {
    id: 'u2-fc54',
    question: 'What is the relationship between the Purchasing Power of Money and the Price Level?',
    answer: 'Inverse relationship (1/P). As prices rise, the value of money falls.',
    category: 'Theory',
    aiExplanation: 'If a chocolate costs ₹10, ₹100 buys 10. If price rises to ₹20, ₹100 buys only 5. The "Power" of the same ₹100 has fallen.'
  },
  {
    id: 'u2-fc55',
    question: 'State the Transaction Motive for holding money.',
    answer: 'It is the demand for money to carry out day-to-day transactions due to the time gap between receipt of income and expenses.',
    category: 'Theory',
    aiExplanation: 'You get salary on the 1st, but buy groceries every day. You need to keep "Cash" in hand to bridge this gap.'
  },
  {
    id: 'u2-fc56',
    question: 'What is the "Lender of Last Resort" function?',
    answer: 'The RBI\'s commitment to provide emergency credit to commercial banks in financial distress when they have no other options.',
    category: 'Theory',
    aiExplanation: 'This prevents a single bank failure from causing a "Systemic Collapse" where people panic and withdraw money from all banks.'
  },
  {
    id: 'u2-fc57',
    question: 'Components of Broad Money (M3)?',
    answer: 'M1 + Net Time Deposits (Fixed Deposits) with Commercial Banks.',
    category: 'Theory',
    aiExplanation: 'M3 captures the "Savings" power of the country. While you can\'t spend an FD instantly, it is a very important part of the total money stock.'
  },
  {
    id: 'u2-fc58',
    question: 'Distinguish between Fiat Money and Legal Tender.',
    answer: 'Fiat money has no intrinsic value (govt order). Legal tender means it cannot be refused for debt settlement.',
    category: 'Classification',
    aiExplanation: 'Most fiat money IS legal tender. But things like Cheques are fiduciary money (not fiat) and NOT legal tender (you can refuse a cheque).'
  },
  {
    id: 'u2-fc59',
    question: 'What is CBDC?',
    answer: 'Central Bank Digital Currency (CBDC) is a digital form of legal tender issued by the central bank (RBI in India).',
    category: 'Definition',
    aiExplanation: 'It is the digital equivalent of physical cash. It is a sovereign liability and appears on the RBI\'s balance sheet.'
  },
  {
    id: 'u2-fc60',
    question: 'Mention two benefits of CBDC.',
    answer: '1. Reduced dependency on physical cash. 2. Lower transaction costs and reduced settlement risk.',
    category: 'Application',
    aiExplanation: 'CBDC makes payments faster and cheaper while keeping the safety of Central Bank money.'
  }
];
