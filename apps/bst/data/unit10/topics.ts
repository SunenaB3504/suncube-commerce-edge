import { TheoryTopic } from '../../types';

export const topics: TheoryTopic[] = [
  {
    id: "fin-market-concept",
    title: "10.1 Financial Market: Concept & Functions",
    description: "Definition and major functions including mobilisation of savings.",
    content: [
      "**Meaning**",
      "A financial market is a market for the creation and exchange of financial assets. It acts as a link between savers (households) and investors (business firms).",
      "",
      "**Allocative Function**",
      "The process by which financial markets channelize savings from households to the most productive investment opportunities in the business sector. This leads to higher rates of return for savers and better resource mobilization for the economy.",
      "",
      "**Functions of Financial Market**",
      "1. **Mobilisation of Savings and Channeling them into Productive Uses**: Financial markets facilitate the transfer of savings from households to business firms.",
      "2. **Facilitating Price Discovery**: The interaction between suppliers of funds (households) and demanders of funds (firms) helps in establishing the price for financial assets.",
      "3. **Providing Liquidity to Financial Assets**: Markets provide a mechanism for investors to sell their assets and convert them into cash quickly.",
      "4. **Reducing the Cost of Transactions**: They provide valuable information about securities, saving the time, effort, and money of both buyers and sellers."
    ],
    visualizations: [
      {
        id: "financial-market-structure",
        title: "Structure of Financial Market",
        type: "tree",
        data: {
          root: "Financial Market",
          children: [
            {
              name: "Money Market",
              children: [
                { name: "Treasury Bill" },
                { name: "Commercial Paper" },
                { name: "Call Money" },
                { name: "Certificate of Deposit" },
                { name: "Commercial Bill" }
              ]
            },
            {
              name: "Capital Market",
              children: [
                {
                  name: "Primary Market",
                  children: [
                    { name: "Offer through Prospectus" },
                    { name: "Offer for Sale" },
                    { name: "Private Placement" },
                    { name: "Rights Issue" },
                    { name: "e-IPOs" }
                  ]
                },
                { name: "Secondary Market (Stock Exchange)" }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: "money-market",
    title: "10.2 Money Market",
    description: "Market for short-term funds (< 1 Year).",
    content: [
      "**Concept**",
      "The money market is a market for short-term funds which deals in monetary assets whose period of maturity is up to one year. These assets are close substitutes for money. It is a low-risk, unsecured, and highly liquid debt market.",
      "",
      "**Instruments (Highly Important)**",
      "1. **Treasury Bill (T-Bill)**: Issued by the RBI on behalf of the Government of India. They are also known as **Zero Coupon Bonds**. Issued at a discount and redeemed at par. Maturity: 14 to 364 days.",
      "2. **Commercial Paper (CP)**: Short-term unsecured promissory note, issued by large and creditworthy companies. Used for **Bridge Financing** (to meet floatation costs of long-term issues). Maturity: 15 days to 1 year.",
      "3. **Call Money**: Short-term finance used by banks to maintain the Cash Reserve Ratio (CRR). Interest paid on call money is called the **Call Rate**. Maturity: 1 day to 15 days.",
      "4. **Certificate of Deposit (CD)**: Unsecured, negotiable, short-term instruments in bearer form, issued by commercial banks and development financial institutions to individuals and corporations.",
      "5. **Commercial Bill**: A bill of exchange used to finance the working capital requirements of business firms. It is a self-liquidating, negotiable instrument that can be discounted with a bank."
    ],
    visualizations: []
  },
  {
    id: "capital-market",
    title: "10.3 Capital Market",
    description: "Market for medium and long-term funds.",
    content: [
      "**Concept**",
      "The capital market is a market for medium and long-term funds. it includes all those organisations, institutions, and instruments that provide long-term funds.",
      "",
      "**Primary Market (New Issue Market)**",
      "Deals with new securities being issued for the first time. It has no fixed geographical location.",
      "**Methods of Floatation**:",
      "1. **Offer through Prospectus**: Direct appeal to the public to subscribe to securities through a prospectus. SEBI and Companies Act guidelines must be followed.",
      "2. **Offer for Sale**: Securities are not issued directly to the public but are offered through intermediaries like issuing houses or stockbrokers.",
      "3. **Private Placement**: Allotment of securities by a company to institutional investors and some selected individuals. It is faster and cheaper than a public issue.",
      "4. **Rights Issue**: Privilege given to existing shareholders to subscribe to new shares in proportion to their existing holdings (Pre-emptive right).",
      "5. **e-IPOs**: A company proposing to issue capital to the public through the online system of the stock exchange. It involves appointing a SEBI-registered broker.",
      "",
      "**Secondary Market (Stock Exchange)**",
      "The secondary market is also known as the stock exchange. It is the market for the purchase and sale of existing (second-hand) securities. It provides liquidity and safety to investment."
    ],
    visualizations: [
      {
        id: "money-vs-capital-table",
        title: "Money Market vs Capital Market",
        type: "table",
        data: {
          headers: ["Basis", "Money Market", "Capital Market"],
          rows: [
            ["Duration", "Short Term (up to 1 year)", "Medium & Long Term"],
            ["Liquidity", "High Liquidity", "Less Liquid compared to Money Market"],
            ["Safety", "Safer (low risk)", "Riskier (higher return)"],
            ["Instruments", "T-Bills, CP, CD, Call Money", "Shares, Debentures, Bonds"]
          ]
        }
      }
    ]
  },
  {
    id: "stock-exchange",
    title: "10.4 Stock Exchange",
    description: "Functions and Trading Procedure.",
    content: [
      "**Meaning**",
      "A stock exchange is an institution which provides a platform for buying and selling of existing securities. As per the Securities Contracts (Regulation) Act 1956, it is an association or body of individuals established for the purpose of assisting, regulating, and controlling the business of buying, selling and dealing in securities.",
      "",
      "**Functions of Stock Exchange**",
      "1. **Providing Liquidity and Marketability**: It provides a continuous market where securities can be bought and sold.",
      "2. **Pricing of Securities**: Determined by the forces of demand and supply.",
      "3. **Safety of Transaction**: Membership is well-regulated and its dealings are well-defined according to legal frameworks.",
      "4. **Contributes to Economic Growth**: Through the process of disinvestment and reinvestment, savings get channelized into the most productive investment proposals.",
      "5. **Spreading of Equity Cult**: By providing information and educating the public about investment in securities.",
      "6. **Providing Scope for Speculation**: Strictly restricted and controlled speculation is permitted under the law to provide liquidity.",
      "",
      "**Trading Procedure (Screen-Based)**",
      "1. **Selection of Broker**: The investor first selects a SEBI-registered broker or sub-broker to buy/sell securities.",
      "2. **Opening Demat Account**: The investor must open a 'Beneficial Owner' (BO) account with a Depository Participant (DP) for holding and transferring securities in electronic form.",
      "3. **Placing the Order**: The investor instructs the broker to buy or sell a specific number of shares at a specific price.",
      "4. **Execution of Order**: The broker goes online and connects to the main stock exchange; if the price matches, the order is executed electronically.",
      "5. **Settlement**: This involves the actual transfer of securities and funds. Currently, India follows the **T+2 Rolling Settlement** cycle."
    ],
    visualizations: [
      {
        id: "trading-procedure-process",
        title: "Trading Procedure on Stock Exchange",
        type: "process",
        data: [
          { title: "Selection of Broker", description: "Register with SEBI broker" },
          { title: "Demat Account", description: "Open with Depository Participant" },
          { title: "Placing Order", description: "Specify price and quantity" },
          { title: "Execution", description: "Broker matches order" },
          { title: "Settlement", description: "Transfer of shares/funds (T+2)" }
        ]
      }
    ]
  },
  {
    id: "sebi",
    title: "10.5 SEBI (Securities and Exchange Board of India)",
    description: "Objectives and Functions of the Market Regulator.",
    content: [
      "**Objectives of SEBI**",
      "- To regulate stock exchanges and the securities industry.",
      "- To protect the rights and interests of investors, particularly individual investors.",
      "- To prevent trading malpractices such as price rigging and insider trading.",
      "- To regulate and develop a code of conduct for intermediaries.",
      "",
      "**Functions of SEBI (Extremely Important)**",
      "1. **Regulatory Functions**:",
      "   - Registration of brokers, sub-brokers, and other players in the market.",
      "   - Registration of collective investment schemes and Mutual Funds.",
      "   - Regulation of stockbrokers, portfolio exchanges, underwriters, etc.",
      "   - Regulation of takeover bids by companies.",
      "   - Levying fee or other charges for carrying out the purposes of the Act.",
      "",
      "2. **Developmental Functions**:",
      "   - Training of intermediaries of the securities market.",
      "   - Conducting research and publishing information useful to all market participants.",
      "   - Undertaking measures to develop the capital markets by adapting a flexible approach.",
      "",
      "3. **Protective Functions**:",
      "   - Prohibition of fraudulent and unfair trade practices like **Price Rigging** (manipulating prices).",
      "   - Controlling **Insider Trading** (using non-public information to make profit).",
      "   - Undertaking steps for investor protection by educating them.",
      "   - Promotion of fair practices and code of conduct in the securities market."
    ],
    visualizations: []
  }
];
