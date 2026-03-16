import { Flashcard } from '../../types';

export const flashcards: Flashcard[] = [
  // ═══════════════════════════════════════════════════════
  // 1. CONCEPT & OBJECTIVES (1-6)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-1', category: 'Concept', question: 'What is Financial Management?', answer: 'Planning, organising, directing and controlling the financial activities of an enterprise.' },
  { id: 'f9-2', category: 'Objective', question: 'What is the primary objective of Financial Management?', answer: 'Maximising shareholders\' wealth (maximising the market price of equity shares).' },
  { id: 'f9-3', category: 'Objective', question: 'Is Profit Maximisation the same as Wealth Maximisation?', answer: 'No. Wealth Maximisation is broader — considers time value of money, risk, and long-term sustainability.' },
  { id: 'f9-4', category: 'Concept', question: 'Name the three key financial decisions.', answer: 'Investment Decision, Financing Decision, and Dividend Decision.' },
  { id: 'f9-5', category: 'Concept', question: 'How does financial management affect the P&L account?', answer: 'Through financing decisions that determine interest costs, and investment decisions that determine depreciation costs.' },
  { id: 'f9-6', category: 'Concept', question: 'What is the role of a Finance Manager?', answer: 'To procure funds at low cost, invest them optimally, and distribute returns fairly to shareholders.' },

  // ═══════════════════════════════════════════════════════
  // 2. INVESTMENT DECISION (7-12)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-7', category: 'Investment', question: 'What is a "Capital Budgeting Decision"?', answer: 'A long-term investment decision involving purchase of fixed assets like land, building, machinery.' },
  { id: 'f9-8', category: 'Investment', question: 'Why are Capital Budgeting decisions "Irreversible"?', answer: 'They involve huge funds and cannot be undone without incurring significant financial losses.' },
  { id: 'f9-9', category: 'Investment', question: 'What is a "Working Capital Decision"?', answer: 'A short-term investment decision involving day-to-day management of current assets and current liabilities.' },
  { id: 'f9-10', category: 'Investment', question: 'Name factors affecting Investment Decisions.', answer: 'Cash flow of the project, Rate of return, Risk involved, and Investment criteria.' },
  { id: 'f9-11', category: 'Investment', question: 'How does the "Rate of Return" affect investment decisions?', answer: 'Higher expected returns make a project more attractive. Projects with returns above cost of capital are preferred.' },
  { id: 'f9-12', category: 'Investment', question: 'How does "Risk" affect investment decisions?', answer: 'Higher risk demands higher returns. Risk assessment helps compare projects and choose the best option.' },

  // ═══════════════════════════════════════════════════════
  // 3. FINANCING DECISION (13-20)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-13', category: 'Financing', question: 'What is a Financing Decision?', answer: 'Deciding the proportion of funds to raise from Equity (owners) vs Debt (borrowings).' },
  { id: 'f9-14', category: 'Financing', question: 'Name factors affecting Financing Decisions.', answer: 'Cost of funds, Risk, Flotation cost, Cash flow position, Control, Fixed operating costs, Tax rate.' },
  { id: 'f9-15', category: 'Financing', question: 'How does "Cost" affect Financing Decisions?', answer: 'Cheapest source should be selected. Debt is usually cheaper than equity because interest is tax-deductible.' },
  { id: 'f9-16', category: 'Financing', question: 'How does "Risk" affect Financing Decisions?', answer: 'Debt carries higher risk (fixed interest obligation) but is tax-efficient. Equity has lower risk but higher cost.' },
  { id: 'f9-17', category: 'Financing', question: 'What is "Flotation Cost"?', answer: 'The cost of issuing securities (e.g., brokerage, commission, underwriting fees). Higher flotation cost = less desirable source.' },
  { id: 'f9-18', category: 'Financing', question: 'How do "Fixed Operating Costs" affect Financing Decisions?', answer: 'Firms with high fixed operating costs should avoid heavy debt, as it increases financial risk.' },
  { id: 'f9-19', category: 'Financing', question: 'How does "Tax Rate" affect Financing Decisions?', answer: 'High tax rate makes debt cheaper because interest is a tax-deductible expense (tax shield).' },
  { id: 'f9-20', category: 'Financing', question: 'How does "Control" affect Financing Decisions?', answer: 'Existing owners may prefer debt over equity to avoid dilution of ownership and control.' },

  // ═══════════════════════════════════════════════════════
  // 4. DIVIDEND DECISION (21-25)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-21', category: 'Dividend', question: 'What is a Dividend Decision?', answer: 'Deciding how much profit to distribute as dividends vs how much to retain for reinvestment.' },
  { id: 'f9-22', category: 'Dividend', question: 'Name factors affecting Dividend Decisions.', answer: 'Earnings, Stability of dividends, Growth opportunities, Cash flow, Shareholder preference, Taxation, Legal requirements.' },
  { id: 'f9-23', category: 'Dividend', question: 'How do "Growth Opportunities" affect dividends?', answer: 'High growth firms retain more profits for expansion and pay lower dividends.' },
  { id: 'f9-24', category: 'Dividend', question: 'How does "Stability of Dividends" affect decisions?', answer: 'Companies prefer stable dividends as it signals financial health and maintains investor confidence.' },
  { id: 'f9-25', category: 'Dividend', question: 'How does "Cash Flow" affect dividends?', answer: 'Even if profits are high, dividends can only be paid if sufficient cash is available.' },

  // ═══════════════════════════════════════════════════════
  // 5. FINANCIAL PLANNING (26-30)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-26', category: 'Planning', question: 'Define Financial Planning.', answer: 'Preparation of a financial blueprint of an organisation\'s future operations.' },
  { id: 'f9-27', category: 'Planning', question: 'What are the two objectives of Financial Planning?', answer: '1. Ensure availability of funds when required. 2. Ensure the firm does not raise resources unnecessarily.' },
  { id: 'f9-28', category: 'Planning', question: 'What is the importance of Financial Planning?', answer: 'It reduces uncertainty, provides a framework for growth, links present to future, and avoids financial crises.' },
  { id: 'f9-29', category: 'Planning', question: 'Does Financial Planning mean only "Raising Funds"?', answer: 'No. It also covers investing funds wisely and avoiding excess fundraising.' },
  { id: 'f9-30', category: 'Planning', question: 'How does Financial Planning help in "Coordination"?', answer: 'It links financial decisions of various departments and ensures they work towards common goals.' },

  // ═══════════════════════════════════════════════════════
  // 6. CAPITAL STRUCTURE (31-37)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-31', category: 'Structure', question: 'Define Capital Structure.', answer: 'The mix between owners\' funds (Equity) and borrowed funds (Debt) in financing the firm.' },
  { id: 'f9-32', category: 'Structure', question: 'What is "Trading on Equity" (Financial Leverage)?', answer: 'The increase in profit earned by equity shareholders due to the presence of fixed financial charges (interest on debt).' },
  { id: 'f9-33', category: 'Structure', question: 'When is Financial Leverage "Favourable"?', answer: 'When the Return on Investment (ROI) is HIGHER than the Cost of Debt.' },
  { id: 'f9-34', category: 'Structure', question: 'When is Financial Leverage "Unfavourable"?', answer: 'When the Return on Investment (ROI) is LOWER than the Cost of Debt — eating into equity returns.' },
  { id: 'f9-35', category: 'Structure', question: 'Name factors affecting Capital Structure.', answer: 'Cash flow, Interest Coverage Ratio, Debt Service Coverage Ratio, ROI, Cost of Debt, Tax Rate, Flotation Costs, Control.' },
  { id: 'f9-36', category: 'Structure', question: 'What is Interest Coverage Ratio (ICR)?', answer: 'EBIT / Interest. Measures ability to meet interest obligations. Higher ICR = more capacity for debt.' },
  { id: 'f9-37', category: 'Structure', question: 'What is Debt Service Coverage Ratio (DSCR)?', answer: 'Measures ability to pay both interest and principal. Higher DSCR = stronger debt repayment capacity.' },

  // ═══════════════════════════════════════════════════════
  // 7. FIXED & WORKING CAPITAL (38-47)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-38', category: 'Fixed Capital', question: 'What is Fixed Capital?', answer: 'Investment in long-term assets like land, building, plant and machinery.' },
  { id: 'f9-39', category: 'Fixed Capital', question: 'Name factors affecting Fixed Capital requirements.', answer: 'Nature of business, Scale of operations, Choice of technique, Technology upgradation, Growth prospects, Diversification.' },
  { id: 'f9-40', category: 'Fixed Capital', question: 'How does "Nature of Business" affect fixed capital?', answer: 'Manufacturing firms need MORE fixed capital than trading firms (need heavy machinery and plants).' },
  { id: 'f9-41', category: 'Fixed Capital', question: 'How do "Financing Alternatives" like leasing affect fixed capital?', answer: 'Leasing reduces fixed capital needs as the company doesn\'t buy assets outright.' },
  { id: 'f9-42', category: 'Working Capital', question: 'What is Working Capital?', answer: 'Investment in current assets like cash, inventory, and debtors for day-to-day operations.' },
  { id: 'f9-43', category: 'Working Capital', question: 'Name factors affecting Working Capital requirements.', answer: 'Nature of business, Scale of operations, Business cycle, Operating cycle, Credit terms, Inflation.' },
  { id: 'f9-44', category: 'Working Capital', question: 'How does "Operating Cycle" affect working capital?', answer: 'A longer operating cycle (from raw material to cash) requires MORE working capital.' },
  { id: 'f9-45', category: 'Working Capital', question: 'How does "Business Cycle" affect working capital?', answer: 'Boom period = more sales = more working capital needed. Recession = less sales = less needed.' },
  { id: 'f9-46', category: 'Working Capital', question: 'How does "Credit Terms" affect working capital?', answer: 'Liberal credit to customers = more debtors = more working capital. Strict credit = less needed.' },
  { id: 'f9-47', category: 'Working Capital', question: 'Which needs more working capital: Manufacturing or Trading?', answer: 'Manufacturing (longer operating cycle) needs MORE working capital than trading firms.' },

  // ═══════════════════════════════════════════════════════
  // 8. SQP TRIGGERS & TRAPS (48-55)
  // ═══════════════════════════════════════════════════════
  { id: 'f9-48', category: 'SQP Trigger', question: 'If a case says "company choosing between equity and debentures", which decision?', answer: 'Financing Decision.' },
  { id: 'f9-49', category: 'SQP Trigger', question: 'If a case says "company deciding to build a new factory", which decision?', answer: 'Investment Decision (Capital Budgeting).' },
  { id: 'f9-50', category: 'SQP Trigger', question: 'If a case says "management retaining profits for expansion instead of declaring dividends", which decision?', answer: 'Dividend Decision.' },
  { id: 'f9-51', category: 'SQP Trigger', question: 'If a case says "ROI exceeds cost of debt, so more debt is used", which concept?', answer: 'Trading on Equity / Favourable Financial Leverage.' },
  { id: 'f9-52', category: 'SQP Trigger', question: 'If a case mentions "seasonal business needing more funds in peak season", which factor?', answer: 'Business Cycle affecting Working Capital.' },
  { id: 'f9-53', category: 'Trap', question: 'Is interest on debt tax-deductible?', answer: 'Yes. Interest is a tax-deductible expense, which makes debt cheaper than equity (tax shield).' },
  { id: 'f9-54', category: 'Trap', question: 'Does more Equity mean more "Financial Risk"?', answer: 'No. More DEBT means more financial risk (fixed interest obligation). Equity has no mandatory payouts.' },
  { id: 'f9-55', category: 'Trap', question: 'Does higher ROI always justify taking more debt?', answer: 'Only if ROI > Cost of Debt. If ROI < Cost of Debt, additional debt reduces shareholder returns.' }
];
