import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & FUNCTIONS OF FINANCIAL MARKET (1-8)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-1', category: 'Concept', question: 'What is a Financial Market?', answer: 'A market for the creation and exchange of financial assets like shares, debentures, bonds, and money market instruments.' },
  { id: 'f10-2', category: 'Function', question: 'What is the "Allocative Function" of Financial Market?', answer: 'Mobilising savings from households and channelising them into the most productive uses.' },
  { id: 'f10-3', category: 'Function', question: 'How do financial markets help in "Price Discovery"?', answer: 'Through the interaction of demand (business firms) and supply (households) for financial assets.' },
  { id: 'f10-4', category: 'Function', question: 'How do financial markets provide "Liquidity"?', answer: 'By allowing investors to quickly buy/sell financial assets and convert them into cash.' },
  { id: 'f10-5', category: 'Function', question: 'How do financial markets "Reduce Cost of Transactions"?', answer: 'By providing a common platform where buyers and sellers can easily find each other, reducing search costs.' },
  { id: 'f10-6', category: 'Concept', question: 'Name the two main types of Financial Markets.', answer: 'Money Market (short-term) and Capital Market (long-term).' },
  { id: 'f10-7', category: 'Concept', question: 'What is the "Money Market"?', answer: 'Market for short-term funds (up to 1 year) — dealing in low-risk, high-liquidity instruments.' },
  { id: 'f10-8', category: 'Concept', question: 'What is the "Capital Market"?', answer: 'Market for long-term funds (more than 1 year) — dealing in shares, debentures, and bonds.' },

  // ═══════════════════════════════════════════════════════
  // 2. MONEY MARKET INSTRUMENTS (9-16)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-9', category: 'Instrument', question: 'What is a "Treasury Bill" (T-Bill)?', answer: 'Short-term instrument issued by RBI on behalf of the government. Also called "Zero Coupon Bond" (issued at discount).' },
  { id: 'f10-10', category: 'Instrument', question: 'What is "Call Money"?', answer: 'Short-term (1-15 days) loan between commercial banks for maintaining Cash Reserve Ratio (CRR).' },
  { id: 'f10-11', category: 'Instrument', question: 'What is "Commercial Paper" (CP)?', answer: 'Unsecured promissory note issued by large, creditworthy companies for bridge financing. Maturity: 15 days to 1 year.' },
  { id: 'f10-12', category: 'Instrument', question: 'What is a "Certificate of Deposit" (CD)?', answer: 'Unsecured, negotiable, short-term instrument issued by commercial banks and financial institutions.' },
  { id: 'f10-13', category: 'Instrument', question: 'What is "Commercial Bill"?', answer: 'A bill of exchange used to finance credit sales. When discounted by a bank, it becomes a money market instrument.' },
  { id: 'f10-14', category: 'Instrument', question: 'What is meant by "Bridge Financing"?', answer: 'Short-term financing to bridge the gap between the time of issue and actual receipt of funds from a public issue.' },
  { id: 'f10-15', category: 'Instrument', question: 'Who issues Treasury Bills?', answer: 'RBI on behalf of the Central Government.' },
  { id: 'f10-16', category: 'Instrument', question: 'Why is a T-Bill called a "Zero Coupon Bond"?', answer: 'Because it does not carry any interest rate. It is issued at a discount and redeemed at par value.' },

  // ═══════════════════════════════════════════════════════
  // 3. CAPITAL MARKET - PRIMARY & SECONDARY (17-26)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-17', category: 'Primary', question: 'What is the Primary Market?', answer: 'Market where NEW securities are issued for the first time. Also called "New Issue Market".' },
  { id: 'f10-18', category: 'Secondary', question: 'What is the Secondary Market?', answer: 'Market where EXISTING (previously issued) securities are bought and sold. Also called "Stock Exchange".' },
  { id: 'f10-19', category: 'Distinction', question: 'Primary vs Secondary: Who receives the money?', answer: 'Primary: The COMPANY issuing shares. Secondary: The SELLER (another investor).' },
  { id: 'f10-20', category: 'Distinction', question: 'Primary vs Secondary: Are prices fixed or fluctuating?', answer: 'Primary: Fixed by the company. Secondary: Determined by demand and supply (fluctuating).' },
  { id: 'f10-21', category: 'Floatation', question: 'What is an "Offer Through Prospectus"?', answer: 'Direct invitation to the public to subscribe to securities by issuing a prospectus.' },
  { id: 'f10-22', category: 'Floatation', question: 'What is "Offer for Sale"?', answer: 'Securities are offered for sale through intermediaries like issuing houses or stock brokers.' },
  { id: 'f10-23', category: 'Floatation', question: 'What is "Private Placement"?', answer: 'Selling securities to selected institutional investors to save time and flotation costs.' },
  { id: 'f10-24', category: 'Floatation', question: 'What is a "Rights Issue"?', answer: 'Giving EXISTING shareholders the privilege to subscribe to NEW shares in proportion to their holding.' },
  { id: 'f10-25', category: 'Floatation', question: 'What is an "e-IPO"?', answer: 'An Initial Public Offer made through an electronic/online system like the stock exchange platform.' },
  { id: 'f10-26', category: 'Distinction', question: 'Money Market vs Capital Market: Duration?', answer: 'Money Market: Up to 1 year (short-term). Capital Market: More than 1 year (long-term).' },

  // ═══════════════════════════════════════════════════════
  // 4. STOCK EXCHANGE & TRADING (27-34)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-27', category: 'Stock Exchange', question: 'Define Stock Exchange.', answer: 'An organised market for buying and selling of existing securities as per specific rules and regulations.' },
  { id: 'f10-28', category: 'Stock Exchange', question: 'Name the two major stock exchanges in India.', answer: 'BSE (Bombay Stock Exchange) and NSE (National Stock Exchange).' },
  { id: 'f10-29', category: 'Stock Exchange', question: 'Name three functions of a Stock Exchange.', answer: 'Providing liquidity, Price discovery, Safety of transactions, Promoting economic growth, Barometer of economy.' },
  { id: 'f10-30', category: 'Trading', question: 'What is a "Demat Account"?', answer: 'An account to hold securities in electronic (dematerialised) form — replacing physical share certificates.' },
  { id: 'f10-31', category: 'Trading', question: 'What is the "T+2" settlement cycle?', answer: 'Rolling settlement where trades are cleared within 2 working days after the transaction date.' },
  { id: 'f10-32', category: 'Trading', question: 'Name the steps in the trading procedure.', answer: 'Select a Broker → Open Demat A/c → Place Order → Execute Order → Settlement (T+2).' },
  { id: 'f10-33', category: 'Trading', question: 'Can investors trade directly on the stock exchange?', answer: 'No. Trading can only be done through SEBI-registered brokers or intermediaries.' },
  { id: 'f10-34', category: 'Trading', question: 'What is "Dematerialisation"?', answer: 'Converting physical share certificates into electronic format held in a Demat account.' },

  // ═══════════════════════════════════════════════════════
  // 5. SEBI (35-42)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-35', category: 'SEBI', question: 'What is SEBI?', answer: 'Securities and Exchange Board of India — the overall regulator of the securities market in India.' },
  { id: 'f10-36', category: 'SEBI', question: 'When was SEBI established?', answer: '1992 (as a statutory body by the SEBI Act, 1992).' },
  { id: 'f10-37', category: 'SEBI', question: 'What is the "Protective Function" of SEBI?', answer: 'Protecting investors — controlling insider trading, prohibiting price rigging, promoting fair practices.' },
  { id: 'f10-38', category: 'SEBI', question: 'What is the "Regulatory Function" of SEBI?', answer: 'Registration of brokers/sub-brokers, regulating stock exchanges and intermediaries, imposing penalties.' },
  { id: 'f10-39', category: 'SEBI', question: 'What is the "Developmental Function" of SEBI?', answer: 'Training intermediaries, conducting research, promoting investor education, simplifying procedures.' },
  { id: 'f10-40', category: 'SEBI', question: 'What is "Insider Trading"?', answer: 'Buying/selling securities by company insiders using non-public, price-sensitive information — prohibited by SEBI.' },
  { id: 'f10-41', category: 'SEBI', question: 'What is "Price Rigging"?', answer: 'Artificially inflating or deflating market prices to mislead investors — prohibited by SEBI.' },
  { id: 'f10-42', category: 'SEBI', question: 'Name the 3 objectives of SEBI.', answer: 'Protect investors, Develop securities market, Regulate securities market.' },

  // ═══════════════════════════════════════════════════════
  // 6. SQP TRIGGERS & TRAPS (43-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f10-43', category: 'SQP Trigger', question: 'If a case says "bank borrows overnight from another bank to maintain CRR", which instrument?', answer: 'Call Money.' },
  { id: 'f10-44', category: 'SQP Trigger', question: 'If a case says "company issues securities at a discount redeemable at par", which instrument?', answer: 'Treasury Bill (Zero Coupon Bond).' },
  { id: 'f10-45', category: 'SQP Trigger', question: 'If a case says "existing shareholders get preferential right to buy new shares", which method?', answer: 'Rights Issue.' },
  { id: 'f10-46', category: 'SQP Trigger', question: 'If a case says "securities sold to select institutional investors", which method?', answer: 'Private Placement.' },
  { id: 'f10-47', category: 'SQP Trigger', question: 'If a case says "SEBI penalises a broker for manipulating share prices", which function?', answer: 'Regulatory Function (also touches Protective).' },
  { id: 'f10-48', category: 'Trap', question: 'In Primary Market, does money go to the Company or another Investor?', answer: 'To the COMPANY. In Secondary Market, it goes to the selling investor.' },
  { id: 'f10-49', category: 'Trap', question: 'Are T-Bills issued by companies or by the Government?', answer: 'By the Government (through RBI). Companies issue Commercial Paper, not T-Bills.' },
  { id: 'f10-50', category: 'Trap', question: 'Is "Commercial Paper" secured or unsecured?', answer: 'UNSECURED. It is issued only by large, creditworthy firms.' },
  { id: 'f10-51', category: 'Trap', question: 'Can small investors participate in the Money Market?', answer: 'Generally No. Money Market is for institutional investors and deals in large amounts.' },
  { id: 'f10-52', category: 'Trap', question: 'Is the Stock Exchange part of Primary or Secondary Market?', answer: 'Secondary Market. The Primary Market (New Issue Market) is separate.' },
  { id: 'f10-53', category: 'Distinction', question: 'Primary vs Secondary: Does the company benefit from Secondary Market trading?', answer: 'Indirectly (through share price reflecting company value), but no direct funds flow to the company.' },
  { id: 'f10-54', category: 'Distinction', question: 'Money Market vs Capital Market: Risk level?', answer: 'Money Market: Low risk (short-term, highly liquid). Capital Market: Higher risk (long-term, price fluctuations).' },
  { id: 'f10-55', category: 'Distinction', question: 'Money Market vs Capital Market: Expected Returns?', answer: 'Money Market: Lower returns. Capital Market: Higher potential returns (but with higher risk).' }
];
