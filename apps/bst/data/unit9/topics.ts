import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "financial-management",
    title: "Financial Management Concept",
    description: "Financial Management is concerned with optimal procurement as well as the usage of finance.",
    content: [
      "**Meaning**",
      "Financial Management is concerned with the optimal procurement as well as the usage of finance. For optimal procurement, different available sources of finance are identified and compared in terms of their costs and associated risks. The finance so procured needs to be invested in a manner that the returns from the investment exceed the cost at which procurement has taken place.",
      "",
      "**Objective**",
      "The primary aim of financial management is to **maximise shareholders' wealth**, which is also known as the wealth-maximisation concept. This is achieved by maximizing the market price of the company's equity shares.",
      "",
      "**Role/Importance of Financial Management**",
      "1. **Size and composition of fixed assets**: Financial decisions like capital budgeting directly affect the volume of fixed assets.",
      "2. **Quantum of current assets**: Decisions on inventory, debtors, and cash affect the working capital and overall liquidity.",
      "3. **Amount of long-term and short-term funds**: Balancing the mix between long-term and short-term sources to maintain a healthy financial position.",
      "4. **Break-up of long-term financing**: Deciding the mix of debt, equity, etc., which affects the capital structure.",
      "5. **All items in Profit and Loss Account**: Financial decisions influence items like interest, depreciation, and tax for the company."
    ],
    visualizations: []
  },
  {
    id: "financial-decisions",
    title: "Financial Decisions",
    description: "Three major decisions: Investment, Financing, and Dividend.",
    content: [
      "**1. Investment Decision**",
      "Relates to how the firm's funds are invested in different assets to earn the highest possible return.",
      "- **Long-term (Capital Budgeting)**: Relates to investment in fixed assets. These are irreversible decisions involving huge funds and long-term growth (e.g., buying a new machine).",
      "- **Short-term (Working Capital)**: Relates to day-to-day operations and management of current assets (Cash, Inventory). Affects liquidity and profitability.",
      "- **Factors**: Cash flows of the project, Rate of Return, and the Investment criteria involved (e.g., interest rate, payback period).",
      "",
      "**2. Financing Decision**",
      "Relates to the identification and selection of various sources of long-term finance (Debt vs Equity).",
      "- **Debt**: Cheap but risky (fixed interest obligation).",
      "- **Equity**: Safe for the company but costly (dividends not tax-deductible).",
      "- **Factors Affecting Choice**: Cost, Risk, Floatation Costs (cost of issuing securities), Cash Flow Position, Fixed Operating Costs (rent, insurance), Control Considerations, and the State of Capital Market.",
      "",
      "**3. Dividend Decision**",
      "Relates to how much of the profit earned by the company (after-tax) is to be distributed to the shareholders and how much of it should be retained in the business.",
      "- **Factors**: Amount of Earnings, Stability of Earnings, Stability of Dividends, Growth Opportunities, Cash Flow Position, Shareholders' Preference, Taxation Policy, Stock Market Reaction, Access to Capital Market, and Legal/Contractual Constraints."
    ],
    visualizations: []
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    description: "Preparation of a financial blueprint of an organisation's future operations.",
    content: [
      "**Meaning**",
      "Financial planning is the preparation of a financial blueprint of an organisation's future operations. It helps in deciding in advance how much to spend and on what to spend according to the availability of funds.",
      "",
      "**Objectives of Financial Planning**",
      "1. **To ensure availability of funds whenever required**: Includes estimation of funds required for fixed assets and working capital.",
      "2. **To see that the firm does not raise resources unnecessarily**: Excessive funding is as bad as inadequate funding because it leads to idle finance and increased costs.",
      "",
      "**Importance of Financial Planning**",
      "1. Helps in forecasting what may happen in the future under different business situations.",
      "2. Helps in avoiding business shocks and surprises by preparing for future contingencies.",
      "3. Coordinates various business functions (Production, Sales, Finance) by providing a clear plan.",
      "4. Reduces waste, duplication of efforts, and gaps in planning through detailed budgeting.",
      "5. Links the present (action) with the future (objectives).",
      "6. Links investment and financing decisions on a continuous basis."
    ],
    visualizations: []
  },
  {
    id: "capital-structure",
    title: "Capital Structure",
    description: "Capital structure refers to the mix between owners' and borrowed funds.",
    content: [
      "**Meaning**",
      "Capital structure refers to the mix between owners' funds (Equity) and borrowed funds (Debt). It is calculated as Debt/Equity or Debt/(Debt+Equity).",
      "",
      "**Trading on Equity (Financial Leverage)**",
      "It refers to the use of fixed interest-bearing securities (Debt or Preference shares) in the capital structure to increase the return on equity for shareholders.",
      "**Condition for Favourable Financial Leverage**:",
      "- **Logic**: It is beneficial only when the **Rate of Return on Investment (ROI) is greater than the Cost of Debt**.",
      "- **Result**: Use of more debt leads to an increase in Earnings Per Share (EPS).",
      "- **Unfavourable**: If ROI < Cost of Debt, more debt will reduce EPS.",
      "",
      "**Factors Affecting Capital Structure Choice**",
      "1. **Cash Flow Position**: Company must have enough cash to cover fixed interest and principal payments.",
      "2. **Interest Coverage Ratio (ICR)**: ICR = EBIT / Interest. Higher ratio means the company can easily meet interest obligations.",
      "3. **Debt Service Coverage Ratio (DSCR)**: More comprehensive than ICR; considers interest as well as principal repayments.",
      "4. **Return on Investment (ROI)**: If ROI is high, the company can use more debt to benefit from Trading on Equity.",
      "5. **Cost of Debt**: If debt is available at a lower interest rate, more of it can be used.",
      "6. **Tax Rate**: Since interest is a tax-deductible expense, a higher tax rate makes debt relatively cheaper.",
      "7. **Cost of Equity**: High use of debt increases financial risk for equity shareholders, who may then demand higher returns.",
      "8. **Floatation Costs**: Costs involved in issuing securities (e.g., underwriting, brokerage).",
      "9. **Risk Consideration**: Managing the balance between business risk (operating costs) and financial risk (debt obligations).",
      "10. **Flexibility**: A firm should maintain some borrowing power to face unforeseen circumstances.",
      "11. **Control**: Issuing more equity may dilute management control. If control is to be retained, debt is preferred.",
      "12. **Regulatory Framework**: SEBI guidelines and other legal requirements for issuing debt and equity.",
      "13. **Stock Market Conditions**: In a Bull phase, equity is easy to sell; in a Bear phase, debt may be the only option.",
      "14. **Capital Structure of Other Companies**: Industry norms and practices often influence the choice."
    ],
    visualizations: [
      {
        id: 'factors-cap-struct-network',
        title: 'Factors Affecting Capital Structure',
        type: 'flow',
        data: {
          nodes: [
            { id: 'CS', label: 'Capital Structure (Debt:Equity)' },
            { id: 'Risk', label: 'Risk (Business/Financial)' },
            { id: 'Cost', label: 'Cost of Debt/Equity' },
            { id: 'Tax', label: 'Tax Rate' },
            { id: 'Cash', label: 'Cash Flow Position' },
            { id: 'ROI', label: 'Return on Investment (ROI)' },
            { id: 'Ctrl', label: 'Control' },
            { id: 'Mkt', label: 'Market Conditions' }
          ],
          edges: [
            { from: 'Risk', to: 'CS' }, { from: 'Cost', to: 'CS' },
            { from: 'Tax', to: 'CS' }, { from: 'Cash', to: 'CS' },
            { from: 'ROI', to: 'CS', label: 'Trading on Equity' },
            { from: 'Ctrl', to: 'CS' }, { from: 'Mkt', to: 'CS' }
          ]
        }
      }
    ]
  },
  {
    id: "fixed-working-capital",
    title: "Fixed and Working Capital",
    description: "Investment in long-term assets and current assets.",
    content: [
      "**Fixed Capital**",
      "Refers to investment in long-term assets. These decisions are called Capital Budgeting decisions.",
      "- **Factors Affecting Requirement**:",
      "  1. **Nature of Business**: Manufacturing firms need more fixed capital (machinery) compared to trading firms.",
      "  2. **Scale of Operations**: Larger organizations require more fixed capital for larger plants.",
      "  3. **Choice of Technique**: Capital-intensive techniques require more fixed capital than labour-intensive ones.",
      "  4. **Technology Upgradation**: Industries where technology becomes obsolete fast need more fixed capital for replacements.",
      "  5. **Growth Prospects**: Companies aiming for higher growth require more investment in fixed assets.",
      "  6. **Diversification**: Entering new lines of business increases fixed capital needs.",
      "  7. **Financing Alternatives**: Availability of leasing facilities can reduce the need for outright purchase and hence fixed capital.",
      "  8. **Level of Collaboration**: Joint ventures or sharing facilities with other firms reduces fixed capital requirements.",
      "",
      "**Working Capital**",
      "Working capital refers to investment in current assets (e.g., Cash, Inventory, Debtors). It is needed for day-to-day business operations.",
      "- **Factors Affecting Requirement**:",
      "  1. **Nature of Business**: Trading or service firms need less working capital compared to manufacturing units.",
      "  2. **Scale of Operations**: Larger scale generally means more inventory and debtors, thus more working capital.",
      "  3. **Business Cycle**: During a boom period, more working capital is needed due to higher sales and production levels.",
      "  4. **Seasonal Factors**: Peak seasons require more inventory and thus more working capital.",
      "  5. **Production Cycle**: Firms with a longer time gap between raw material input and finished product need more working capital.",
      "  6. **Credit Allowed**: Liberal credit policies increase debtors and the need for working capital.",
      "  7. **Credit Availed**: If a firm gets credit from its suppliers, its need for working capital decreases.",
      "  8. **Operating Efficiency**: Efficient use of assets and inventory management reduces working capital needs.",
      "  9. **Availability of Raw Material**: If raw material is easily available, less inventory is needed, reducing working capital.",
      "  10. **Growth Prospects**: Higher growth targets lead to larger sales and higher working capital needs.",
      "  11. **Level of Competition**: Intense competition may require a firm to maintain larger stocks and offer better credit, increasing working capital.",
      "  12. **Inflation**: Rising prices increase the cost of raw materials and maintenance, leading to higher working capital requirements."
    ],
    visualizations: [
      {
        id: 'fixed-vs-working-capital',
        title: 'Fixed vs. Working Capital Comparison',
        type: 'table',
        data: {
          headers: ['Basis', 'Fixed Capital', 'Working Capital'],
          rows: [
            ['Nature', 'Long-term assets (Plant, Land)', 'Short-term assets (Cash, Stock)'],
            ['Purpose', 'Generating income over years', 'Day-to-day operations'],
            ['Source', 'Equity, Debt, Long-term loans', 'Commercial Paper, Trade Credit'],
            ['Liquidity', 'Low (cannot be easily sold)', 'High (easily convertible to cash)']
          ]
        }
      }
    ]
  }
];
