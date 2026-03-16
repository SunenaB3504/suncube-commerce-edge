import { SQPQuestion } from '../../types';

export const SQP_QUESTIONS: SQPQuestion[] = [
  // ------------------------------------------------------------------
  // 2022-23 SQP
  // ------------------------------------------------------------------
  {
    id: 'u3-q1-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1',
    question: 'Read the following statements carefully:\nStatement 1: The consumption curve is an upward sloping straight line curve due to the direct relationship between income and consumption and the assumption of constant Marginal Propensity to Consume.\nStatement 2: Aggregate Demand curve and Consumption curve are parallel to each other.\nIn the light of the given statements, choose the correct alternative from the following:',
    optionA: 'Statement 1 is true and statement 2 is false',
    optionB: 'Statement 1 is false and statement 2 is true',
    optionC: 'Both statements 1 and 2 are true',
    optionD: 'Both statements 1 and 2 are false',
    answer: 'C',
    aiExplanation: 'Teacher\'s Voice: **Concept Check!**\n- **Statement 1:** True! The consumption curve slopes upwards because as income rises, consumption rises. It is a straight line because we assume Marginal Propensity to Consume (MPC) is constant.\n- **Statement 2:** True! Aggregate Demand (AD) = Consumption (C) + Investment (I). Since we assume Investment is autonomous (constant at all income levels), the AD curve is exactly parallel to the C curve, simply shifted upward by the constant amount of Investment (I).'
  },
  {
    id: 'u3-q6-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '6',
    question: 'If in an economy, the value of investment multiplier is 4 and Autonomous Consumption is ₹ 30 Crore, the relevant consumption function would be :',
    optionA: 'C=30+0.75 Y',
    optionB: 'C=(-)30+0.25Y',
    optionC: 'C=30-0.75Y',
    optionD: 'C=30-0.25Y',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **Let\'s decode the Consumption Function!**\nThe algebraic form of the consumption function is: C = c̅ + b(Y), where c̅ is Autonomous Consumption and "b" is the Marginal Propensity to Consume (MPC).\nWe are given c̅ = 30.\nWe are given Investment Multiplier (k) = 4.\nSince k = 1 / (1 - MPC), we have 4 = 1 / (1 - MPC). Solving this gives 1 - MPC = 0.25, so MPC = 0.75.\nSubstitute these into the equation: C = 30 + 0.75Y!'
  },
  {
    id: 'u3-q6or-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '6 OR',
    question: 'If increase in National Income is equal to increase in consumption, identity the value of Marginal Propensity to Save :',
    optionA: 'Equal to unity',
    optionB: 'Greater than one',
    optionC: 'Less than one',
    optionD: 'Equal to zero',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **A classic trick question!**\nMarginal Propensity to Save (MPS) = Change in Saving (ΔS) / Change in Income (ΔY).\nIf the entire increase in National Income is consumed, then zero of that new income is saved (ΔS = 0).\nTherefore, MPS = 0 / ΔY = 0.'
  },
  {
    id: 'u3-q9-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'Assertion-Reason',
    questionNumber: '9',
    question: 'Read the following statement -Assertion (A) and Reason (R). Choose one of the correct alternatives given below:\nAssertion (A): Ex-post Investments represent planned Investments; whereas ex-ante Investments represent actual level of investments.\nReason (R): At equilibrium level, Ex-ante Savings and Ex-ante Investments are always equal.',
    optionA: 'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
    optionB: 'Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of Assertion (A).',
    optionC: 'Assertion (A) is true but Reason (R) is false.',
    optionD: 'Assertion (A) is false but Reason (R) is true.',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **Pay attention to the terminology!**\n- **Assertion is FALSE:** The definitions are swapped! "Ex-post" means actual or realized, while "Ex-ante" means planned or intended.\n- **Reason is TRUE:** Yes, the fundamental condition for macro-equilibrium is that planned savings (Ex-ante S) must exactly equal planned investments (Ex-ante I).'
  },
  {
    id: 'u3-q10-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 1,
    type: 'Assertion-Reason',
    questionNumber: '10',
    question: 'Read the following statement -Assertion (A) and Reason (R). Choose one of the correct alternatives given below:\nAssertion (A): Saving curve makes a negative intercept on the vertical axis at zero level of income.\nReason (R): Saving function refers to the functional relationship between saving and income.',
    optionA: 'Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).',
    optionB: 'Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of Assertion (A).',
    optionC: 'Assertion (A) is true but Reason (R) is false.',
    optionD: 'Assertion (A) is false but Reason (R) is true.',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: **Evaluate logic independently first!**\n- **Assertion is TRUE:** At zero income, households still consume (autonomous consumption). This consumption must be funded by drawing down past savings, meaning saving is negative. Thus, the saving curve starts below the origin on the vertical axis.\n- **Reason is TRUE:** The saving function does indeed describe the relationship between saving and income.\n- **Explanation Check:** Does the general definition of a saving function explain *why* it has a negative intercept? No. The negative intercept is specifically due to autonomous consumption at zero income. Therefore, R is not the correct explanation for A.'
  },
  {
    id: 'u3-q13-sqp-2023',
    year: '2022-23',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '13',
    question: 'If an economy plans to increase its income by ₹ 2,000 crore and the Marginal Propensity to Consume is 75%. Estimate the increase in investment required to achieve the targeted increase in income.',
    markingScheme: 'Given, MPC = 0.75, ΔY = ₹ 2,000 Crore.\nK = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4.\nAccording to the question: K = ΔY / ΔI -> 4 = 2000 / ΔI -> ΔI = 2000 / 4 = ₹ 500 Crore.\nIncrease in investment required = ₹ 500 Crore.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for calculating the Investment Multiplier (k):**\nState the formula linking the multiplier to the Marginal Propensity to Consume (MPC): k = 1 / (1 - MPC). (1 mark)\nSubstitute the given value (MPC = 0.75) to find the multiplier: k = 1 / (1 - 0.75) = 1 / 0.25 = 4. This means every new rupee injected will generate four rupees of National Income. (1 mark)\n\n**2 Marks for calculating required Investment (ΔI):**\nState the alternative multiplier formula: k = Change in Income (ΔY) / Change in Investment (ΔI). (1 mark)\nWe know we want ΔY to be 2,000. So, 4 = 2,000 / ΔI.\nSolve for ΔI: ΔI = 2,000 / 4 = **₹ 500 crore**. (1 mark)'
  },

  // ------------------------------------------------------------------
  // 2023-24 SQP
  // ------------------------------------------------------------------
  {
    id: 'u3-q1-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1',
    question: 'Read the following statements carefully:\nStatement 1: Consumption function assumes that, consumption changes at a constant rate as income changes.\nStatement 2: Autonomous consumption is the ratio of total consumption (C) to total income (Y).\nIn light of the given statements, choose the correct alternative from the following:',
    optionA: 'Statement 1 is true and Statement 2 is false.',
    optionB: 'Statement 1 is false and Statement 2 is true.',
    optionC: 'Both Statements 1 and 2 are true.',
    optionD: 'Both Statements 1 and 2 are false.',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **Verify the definitions!**\n- **Statement 1:** True! The consumption function (C = c̅ + bY) uses a linear equation, strictly assuming that Marginal Propensity to Consume ("b") remains constant as income changes.\n- **Statement 2:** False! Autonomous consumption (c̅) is the level of consumption uniquely present at zero income. The ratio of total consumption to total income is called the Average Propensity to Consume (APC), not autonomous consumption.'
  },
  {
    id: 'u3-q3-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '3',
    question: 'The value of __________ can be greater than one.\n(Choose the correct alternative to fill up the blank)',
    optionA: 'Marginal Propensity to Consume',
    optionB: 'Average Propensity to Consume',
    optionC: 'Marginal Propensity to Save',
    optionD: 'Average Propensity to Save',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: **Understanding proportions vs margins:**\nMarginal rates (MPC, MPS) deal with the *addition* to income and must always be between 0 and 1.\nHowever, the Average Propensity to Consume (APC) is simply Total Consumption / Total Income.\nAt very low income levels (before the break-even point), households are forced to spend more than they earn by relying on past savings. In this case, C > Y, which mathematically makes APC > 1!'
  },
  {
    id: 'u3-q7-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '7',
    question: 'Graphically, Aggregate Demand function can be obtained by vertically adding the _________ and _________ function.(Choose the correct alternative to fill up the blanks)',
    optionA: 'consumption, saving',
    optionB: 'consumption, investment',
    optionC: 'investment, saving',
    optionD: 'aggregate supply, consumption',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: **The Fundamental AD Equation!**\nIn a simplified two-sector economy model, Aggregate Demand (AD) comprises only two components: household Consumption (C) and firm Investment (I).\nTherefore, the AD curve is derived graphically by vertically adding the consumption curve and the investment curve (AD = C + I).'
  },
  {
    id: 'u3-q9-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '9',
    question: 'Suppose for a given economy,\nS= -60 + 0.1Y\nI= ₹ 4,000 crore\n(Where S = Saving Function, Y = National Income and I = Investment Expenditure)\nEquilibrium level of Income would be ₹ ______ crore.',
    optionA: '4,000',
    optionB: '40,000',
    optionC: '40,600',
    optionD: '60,400',
    answer: 'C',
    aiExplanation: 'Teacher\'s Voice: **The Saving-Investment Approach!**\nThe economy is strictly in equilibrium when Planned Saving equals Planned Investment (S = I).\nWe set them equal: -60 + 0.1Y = 4,000.\n0.1Y = 4,000 + 60\n0.1Y = 4,060\nY = 4,060 / 0.1 = **40,600**.'
  },
  {
    id: 'u3-q13-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '13',
    question: 'For a hypothetical economy, the change in Investment (ΔI) is ₹ 1,000 crore. If the value of Marginal Propensity to Save (MPS) falls from 0.25 to 0.10.\nCalculate the value of increase in income due to change in the value of Marginal Propensity to Save (MPS).',
    markingScheme: 'When MPS = 0.25: k = 1/MPS = 1/0.25 = 4.\nΔY = k × ΔI = 4 × 1000 = 4,000 crore.\nWhen MPS = 0.10: k = 1/MPS = 1/0.10 = 10.\nΔY = k × ΔI = 10 × 1000 = 10,000 crore.\nIncrease in Income (ΔY) = 10,000 - 4,000 = ₹ 6,000 crore.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1.5 Marks for calculating Income at the old MPS (0.25):**\nState the multiplier formula based on MPS: k = 1 / Marginal Propensity to Save (MPS).\nOld multiplier k = 1 / 0.25 = 4.\nCalculate resulting income generation: ΔY = k × ΔI = 4 × 1000 = ₹ 4,000 crore.\n\n**1.5 Marks for calculating Income at the new MPS (0.10):**\nWith the newly reduced savings rate, the new multiplier jumps up: k = 1 / 0.10 = 10.\nCalculate the new resulting income generation: ΔY = 10 × 1000 = ₹ 10,000 crore.\n\n**1 Mark for the final difference:**\nThe question asks for the *increase* in income strictly due to the change in MPS.\nDifference = 10,000 - 4,000 = **₹ 6,000 crore**.'
  },
  {
    id: 'u3-q14a-sqp-2024',
    year: '2023-24',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14 (A)',
    question: '"In an economy, ex-ante Aggregate Demand is more than ex-ante Aggregate Supply."\nElaborate the possible impact of the same, on the level of output, income and employment.',
    markingScheme: 'When ex-ante Aggregate Demand is more than ex-ante Aggregate Supply, it means that households are planning to consume more than what the firms expect them to. This will lead to unintended fall in inventories. To restore the desired /intended level of inventories, producers may expand production. As a result, there may be an increase in the level of output, employment and income in the economy.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for describing the initial disequilibrium and inventory shock:**\nWhen intended Aggregate Demand (AD) exceeds intended Aggregate Supply (AS), consumers and firms are attempting to enthusiastically buy more goods than producers have willingly manufactured (1 mark).\nBecause sales are moving faster than production, firms experience an unintended and rapid depletion (fall) of their existing inventory levels (1 mark).\n\n**2 Marks for describing the adjustment process:**\nTo forcefully rebuild their desired stock of inventory and satisfy the booming demand, producers will systematically plan to expand their future production output (1 mark).\nExpanding production rapidly necessitates hiring more workers, thereby increasing the macroscopic level of output, employment, and ultimately National Income until AD cleanly equals AS once again (1 mark).'
  },

  // ------------------------------------------------------------------
  // 2024-25 SQP
  // ------------------------------------------------------------------
  {
    id: 'u3-q5-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '5',
    question: 'From the given diagrams, identify the correct option that indicates the ‘Reference Line’ passing through the origin drawn at a particular angle.\n[Diagram describing 45 degree line represented by Y=AS]\nFor Visually Impaired Candidates:\nUnder the Keynesian theory, ‘Reference Line’ is a straight line passing through the origin drawn at an angle of _____.',
    imageUrl: '/assets/images/sqp-2025-q5.png',
    optionA: '25°',
    optionB: '45°',
    optionC: '55°',
    optionD: '75°',
    answer: 'B',
    aiExplanation: 'Teacher\'s Voice: **The Line of Equality!**\nIn Keynesian economics, the Reference Line (which represents Aggregate Supply) asserts that total production exactly equals total income generation (AS = Y).\nGraphically, a line where the X-axis value perfectly equals the Y-axis value at every single coordinate geometrically forms a perfect **45° angle** originating from the origin.'
  },
  {
    id: 'u3-q7-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '7',
    question: 'Read the following statements carefully:\nStatement 1: The maximum value of Marginal Propensity to Consume (MPC) can be unity.\nStatement 2: As the income of an economy increases, the proportionate increase in the level of consumption is always more than the increase in the level of income.\nIn light of the given statements, choose the correct option from the following:',
    optionA: 'Statement 1 is true and Statement 2 is false.',
    optionB: 'Statement 1 is false and Statement 2 is true.',
    optionC: 'Both Statements 1 and 2 are true.',
    optionD: 'Both Statements 1 and 2 are false.',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **Checking Keynes\' Psychological Law!**\n- **Statement 1:** True! Marginal Propensity to Consume (MPC) measures the fraction of *additional* income spent. A person cannot permanently spend more than 100% of their extra income, so the maximum value of MPC is strictly 1 (unity).\n- **Statement 2:** False! Keynes\' Psychological Law of Consumption explicitly states that while consumption increases as income increases, it inherently increases by a *smaller* proportion than the income boost (because people naturally save a portion of extra income).'
  },
  {
    id: 'u3-q8-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '8',
    question: 'In a two-sector economy, Aggregate Demand can be determined by adding ______.',
    optionA: 'Autonomous Consumption, Induced Consumption and Induced Investment',
    optionB: 'Autonomous Consumption, Autonomous Investment and Induced Investment',
    optionC: 'Autonomous Consumption and Autonomous Investment',
    optionD: 'Autonomous Consumption, Induced Consumption and Autonomous Investment',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **Breaking down AD components:**\nIn a two-sector model, AD = Consumption (C) + Investment (I).\n- Total Consumption (C) explicitly equals Autonomous Consumption (spending at zero income) + Induced Consumption (spending dependent on income).\n- Total Investment (I), under simplifying Keynesian assumptions, strictly consists of Autonomous Investment (investment entirely independent of the level of income).\nTherefore, AD is the sum of Autonomous Consumption, Induced Consumption, and Autonomous Investment.'
  },
  {
    id: 'u3-q14a-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14 (A)',
    question: '“Saving curve can be derived from the consumption curve”\nJustify the statement, citing valid steps with the help of a well-labelled diagram.\n\nFor Visually Impaired Candidates:\n“Saving curve can be derived from the consumption curve”\nJustify the statement, citing valid steps.',
    markingScheme: 'Steps for derivation:\n1. The starting point of the saving curve on the vertical axis is equal to the negative of autonomous consumption (-c̅) because at zero income, saving is exactly negative autonomous consumption.\n2. The point where the consumption curve intersects the 45° income line is the Break-Even Point (C = Y).\n3. Since C = Y at the break-even point, saving is exactly zero (S = 0). A perpendicular down from this point marks the x-intercept of the saving curve.\n4. By joining the initial negative intercept (-c̅) through the break-even point on the x-axis and extending it upward, we systematically derive the entire saving curve.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**1 Mark for the Starting Point (Autonomous Consumption):**\nStart by highlighting that at zero income, there is still baseline survival consumption (Autonomous Consumption, c̅). Because there is no income, this is funded entirely by wiping out past savings. Thus, the Saving curve precisely originates deep in the negative Y-axis at an exact magnitude of -c̅.\n\n**1 Mark for defining the Break-Even Point:**\nIdentify the point where the Consumption curve cleanly crosses the 45° Reference Line. At this coordinate, Income comprehensively equals Consumption (Y = C). This is the "Break-Even Point".\n\n**1 Mark for projecting Zero Savings:**\nBecause Consumption strictly equals Income at the break-even point, mathematical Savings must be decisively zero (S = Y - C = 0). You vigorously project a vertical line straight down from the break-even point to strike the X-axis (Income axis) in the savings graph. This intersection point dictates where savings transform from negative to positive.\n\n**1 Mark for finishing the derivation:**\nFirmly draw a straight, positively sloping line initiating from the negative Y-intercept (-c̅) entirely through the newly marked zero point on the X-axis. This straight extension correctly traces the overall planned Saving Curve.'
  },
  {
    id: 'u3-q14b-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '14 (B) OR',
    question: 'For two hypothetical economies A and B, the value of Marginal Propensity to Consume (MPC) stands at 0.6 and 0.8 respectively. Assuming for both the economies, Autonomous Consumption (c̅) to be ₹ 40 crore and Investment Expenditure (I) to be ₹ 100 crore.\nCalculate:\n(I) Break-even level of income for Economy A\n(II) Equilibrium level of income for Economy B',
    markingScheme: 'Economy A:\nBreak-even level of income occurs when Y = C.\nC = c̅ + MPC(Y) = 40 + 0.6Y\nTherefore, Y = 40 + 0.6Y\nY - 0.6Y = 40\n0.4Y = 40  => Y = ₹ 100 crore.\n\nEconomy B:\nEquilibrium level of income occurs when AS = AD (or Y = C + I).\nGiven C = 40 + 0.8Y and I = 100.\nY = 40 + 0.8Y + 100\nY - 0.8Y = 140\n0.2Y = 140 => Y = ₹ 700 crore.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for calculating the Break-Even Point (Economy A):**\nState the Break-Even condition cleanly: Income equals solely Consumption (Y = C). (1 mark)\nSet up the algebraic equation for Economy A (MPC=0.6): Y = 40 + 0.6Y.\nAlgebraically solve: Y - 0.6Y = 40 => 0.4Y = 40 => Y = **₹ 100 crore**. (1 mark)\n\n**2 Marks for calculating the Macroeconomic Equilibrium (Economy B):**\nState the Macro-Equilibrium condition cleanly: Income equals total Aggregate Demand (Y = C + I). (1 mark)\nSet up the algebraic equation for Economy B (MPC=0.8): Y = (40 + 0.8Y) + 100.\nCombine terms: Y = 140 + 0.8Y.\nAlgebraically solve: Y - 0.8Y = 140 => 0.2Y = 140 => Y = 140 / 0.2 = **₹ 700 crore**. (1 mark)'
  },
  {
    id: 'u3-q15-sqp-2025',
    year: '2024-25',
    paperType: 'SQP',
    marks: 6,
    type: 'LA',
    questionNumber: '15',
    question: 'Read the following text carefully:\n“Union Finance Minister stated, that investments in infrastructure and productive capacity have a large multiplier impact on growth and employment and in view of this, capital investment outlay is being proposed to increase steeply in the Budget 2023-24 by 1,000 crore.”\nBased on the given text and common understanding, explain the working of the Investment Multiplier assuming Marginal Propensity to Consume (MPC) to be 0.8.',
    markingScheme: 'Working of Investment Multiplier:\nInitial assumption: One entity\'s expenditure is firmly another entity\'s income.\nGiven: Change in investment (ΔI) = ₹ 1,000 crore, MPC = 0.8.\nWhen investment increases, it triggers a chain reaction. Initially, incomes dramatically rise by ₹ 1,000 crore (Round 1). Since MPC is 0.8, people consume 80% (₹ 800 crore) and save 20%. This 800 crore spending instantly becomes income for others in Round 2. They will, in turn, spend 80% of 800 (₹ 640 crore). This dynamic cycle continues, with each successive round generating smaller income bursts.\nInvestment Multiplier (k) = 1 / (1 - MPC) = 1 / (1 - 0.8) = 5.\nTotal increase in national income (ΔY) = k × ΔI = 5 × 1000 = ₹ 5,000 crore, which is fiercely 5 times the initial investment.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 6 M!**\n\n**1 Mark for stating the core assumption:**\nThe magic of the multiplier stems from one simple truth: One person\'s expenditure absolutely strictly becomes another person\'s income.\n\n**3 Marks for tracing the ripple effect (Table or Text):**\n- Explain the injection: An initial capital outlay (Investment, ΔI) of 1,000 creates exactly 1,000 in new income (Round 1) (1 mark).\n- Explain the first reaction: Since Marginal Propensity to Consume (MPC) is 0.8, receiving parties boldly spend 80% (800) and squirrel away 20% (200) into savings (1 mark).\n- Explain the chain continuation: That 800 spent immediately turns into new income for a second group of people in Round 2, who then eagerly spend 80% of their cut (640). This rapidly diminishing wave continues forever (1 mark).\n\n**2 Marks for resolving the mathematical final result:**\n- State the Multiplier Formula: k = 1 / (1 - MPC) = 1 / 0.2 = 5 (1 mark).\n- Conclude the magnitude: The total explosion in National Income is ΔY = k × ΔI = 5 × 1,000 = **5,000 crore**. The 1,000 crore outlay resulted in 5,000 crore of new growth! (1 mark)'
  },

  // ------------------------------------------------------------------
  // 2025-26 SQP
  // ------------------------------------------------------------------
  {
    id: 'u3-q1-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '1',
    question: 'With reference to the given diagram [Point B where Consumption curve intersects the 45 degree Income line], which of the following is true at point B?\nFor Visually Impaired Candidates:\nIdentify, which of the following is true at the Break-Even level of Income.',
    imageUrl: '/assets/images/sqp-2026-q1.png',
    optionA: 'Slope of Consumption Curve = 0',
    optionB: 'Average Propensity to Consume = 0',
    optionC: 'Slope of Saving Curve = 1',
    optionD: 'Average Propensity to Consume = 1',
    answer: 'D',
    aiExplanation: 'Teacher\'s Voice: **What happens when you spend everything you earn?**\nPoint B (or the Break-Even level of Income) is exactly where the Consumption Line hits the Income Line, meaning Income = Consumption (Y = C). \nAverage Propensity to Consume (APC) is scientifically defined as Total Consumption divided by Total Income (C/Y).\nIf C strongly equals Y, then C divided by Y equals exactly 1. Therefore, APC = 1.'
  },
  {
    id: 'u3-q6-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 1,
    type: 'MCQ',
    questionNumber: '6',
    question: 'Deflationary Gap refers to the gap by which ___________ falls short of the Aggregate Demand required to establish full employment equilibrium.',
    optionA: 'ex-ante Aggregate Demand',
    optionB: 'ex-post Aggregate Demand',
    optionC: 'ex-ante Aggregate Supply',
    optionD: 'ex-post Aggregate Supply',
    answer: 'A',
    aiExplanation: 'Teacher\'s Voice: **Terminology is crucial!**\nMacroeconomic gaps (Inflationary and Deflationary) are definitively measured using planned or intended variables, which are referred to as "ex-ante."\nA Deflationary Gap specifically occurs when the *planned* Aggregate Demand (ex-ante AD) falls structurally short of the Aggregate Demand essentially required for full employment.'
  },
  {
    id: 'u3-q16b-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '16 (B)',
    question: '(I) Suppose in an economy, the Marginal Propensity to Consume (MPC) is 0.8. The government introduced an investment project of ₹ 1,000 crore which led to a manyfold increase in National Income (Y) and Consumption Expenditure (C).\nEstimate:\n(a) Value of Investment Multiplier (k)\n(b) Missing Values of (i) and (ii) [Round 2: ΔI=_, ΔY=800, ΔC=640, ΔS=160; Total: ΔI=1000, ΔY=(i), ΔC=(ii), ΔS=1000]\n\n(II) “Sum of the Average Propensity to Consume (APC) and Average Propensity to Save (APS) is always equal to one.”\nJustify the given statement with the help of a suitable argument.',
    markingScheme: '(I) (a) k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 5.\n(b) (i) Total ΔY = k × ΔI = 5 × 1,000 = ₹ 5,000 crore.\n(ii) Total ΔC = MPC × Total ΔY = 0.8 × 5,000 = ₹ 4,000 crore.\n\n(II) Total Income (Y) is structurally divided into Consumption (C) and Saving (S). Thus, Y = C + S.\nDividing both sides by Y yields: Y/Y = C/Y + S/Y.\nSince Y/Y = 1, C/Y = APC, and S/Y = APS, we get 1 = APC + APS.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for the Multiplier and Table calculations (Part I):**\n- State the formula and effectively resolve the multiplier (k): k = 1 / (1 - 0.8) = 5 (1 mark).\n- Resolve the missing absolute totals: Total ΔY = 5 × 1,000 = 5,000 crore (missing value i). Total ΔC is the portion spent from total income: 0.8 × 5,000 = 4,000 crore (missing value ii) (1 mark).\n\n**2 Marks for justifying APC + APS = 1 (Part II):**\n- Start with the unshakeable premise: Every single rupee earned (Y) must either be aggressively consumed (C) or safely saved (S). So, Y = C + S (1 mark).\n- Apply basic algebra: Divide the entire equation boldly by Total Income (Y). Yielding Y/Y = C/Y + S/Y. Thus mapping mathematically to 1 = APC + APS (1 mark).'
  },
  {
    id: 'u3-q16b-or-sqp-2026',
    year: '2025-26',
    paperType: 'SQP',
    marks: 4,
    type: 'SA',
    questionNumber: '16 (B) OR',
    question: '(I) Suppose in a hypothetical economy, people save 20% of their additional income. Ex-Ante Investments equals ₹ 100 and the equilibrium level of income stands at ₹ 700. Calculate dissavings at zero level of income.\n(II) Define Effective Demand. Explain the adjustment mechanism to attain the level of Effective Demand, if ex-ante Aggregate Demand is more than ex-ante Aggregate Supply.',
    markingScheme: '(I) Given: Marginal Propensity to Save (MPS) = 0.20. Therefore, MPC (b) = 0.80.\nWe know at equilibrium, Y = C + I. And C = c̅ + bY.\nY = c̅ + bY + I => 700 = c̅ + 0.8(700) + 100.\n700 = c̅ + 560 + 100 => 700 = c̅ + 660 => c̅ = 40.\nTherefore, dissavings at zero income (-c̅) = -40.\n(II) Effective Demand refers to that specific aggregate demand which becomes effective because it intrinsically equals aggregate supply.\nAdjustment: If AD > AS, it signifies demand outpaces production. To halt inventory depletion, firms furiously hire labor to multiply production, ramping up output to aggressively restore equality.',
    aiExplanation: 'Teacher\'s Voice: **Here is how to lock in your 4 M!**\n\n**2 Marks for the Dissavings Calculation (Part I):**\n- Decipher the clues: "Save 20% of additional income" translates to Marginal Propensity to Save (MPS) = 0.2. Hence, Marginal Propensity to Consume (MPC) = 0.8 (1/2 mark).\n- Frame the equilibrium equation: Income solidly equals Consumption + Investment (Y = C + I). Since C = c̅ + 0.8Y, then Y = c̅ + 0.8Y + I (1/2 mark).\n- Plug in the numbers: 700 = c̅ + 0.8(700) + 100 => 700 = c̅ + 560 + 100. Simplify to get c̅ = 40. Therefore, the absolute dissavings at zero income (which is identically -c̅) is exactly **-40** (1 mark).\n\n**2 Marks for defining Effective Demand and the Adjustment (Part II):**\n- **Effective Demand Definition:** It is the exact, definitive point where Aggregate Demand decisively and cleanly intersects perfectly with Aggregate Supply (1 mark).\n- **Adjustment Process:** If AD firmly exceeds AS, buyers furiously want more goods than sellers have manufactured. Inventories sharply drop. Producers are heavily incentivized to expand production, thereby driving up output and employment reliably until AD flawlessly equals AS once again (1 mark).'
  }
];
