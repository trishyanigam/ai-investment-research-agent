const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const config = require('../config/env');
const AppError = require('../utils/AppError');

/**
 * Creates and returns a reusable LangChain Runnable chain configured for investment report synthesis.
 * The returned chain expects these input variables:
 * - companyProfile: string (JSON or description)
 * - financialMetrics: string (JSON or description)
 * - historicalData: string (JSON list of stock prices)
 * - recentNews: string (JSON list of news headlines)
 * @returns {import("@langchain/core/runnables").Runnable}
 */
function createInvestmentChain() {
  const geminiApiKey = config.GEMINI_API_KEY;
  if (!geminiApiKey) {
    throw new AppError('Gemini API key is not configured in the environment settings.', 500);
  }

  // 1. Initialize Gemini model with json mode active to enforce raw JSON string responses
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: geminiApiKey,
    temperature: 0.2, // low temperature for consistency and logical structure
    json: true // Instructs Gemini to return a clean JSON string directly, avoiding markdown backticks
  });

  // 2. Define prompt template mapping key input variables
  const template = `You are a Senior Investment Analyst and portfolio manager at a top-tier institutional fund.
Perform a rigorous, professional-grade equity analysis and investment evaluation based on the provided inputs.

Evaluate the company across the following dimensions:
1. REVENUE & PROFITABILITY: Assess absolute revenue levels, gross/net margins, and quality of earnings.
2. GROWTH & MARKET POSITION: Assess competitive moat, industry leadership position, and sales expansion trajectories.
3. DEBT & FINANCIAL HEALTH: Evaluate balance sheet leverage, debt-to-equity ratios, liquidity constraints, and solvency risk.
4. NEWS SENTIMENT: Assess recent publicity, media sentiment distributions, and press release weights.
5. RISK & TAIL EVENTS: Reconcile macro interest rates against regulatory risks and supply chain concentrations.
6. FUTURE OUTLOOK & INVESTMENT HORIZON: Outline short-term triggers and long-term valuation trajectories (1-5 year time horizon).

--- COMPANY PROFILE & OVERVIEW ---
{companyProfile}

--- FINANCIAL METRICS ---
{financialMetrics}

--- HISTORICAL STOCK DATA ---
{historicalData}

--- RECENT NEWS ---
{recentNews}

Based on this analysis, generate an investment report and return it matching the following JSON schema EXACTLY. Never output markdown code blocks or wrapper text, return the raw JSON string only.

{{
  "recommendation": "BUY" | "INVEST" | "HOLD" | "SELL",
  "confidenceScore": <integer between 0 and 100 representing your analyst confidence in this rating>,
  "pros": [
    "<bullet point 1 evaluating growth/profitability catalyst>",
    "<bullet point 2 evaluating market position/moat strength>",
    "<bullet point 3 evaluating positive news sentiment trigger>",
    "<bullet point 4 evaluating other fundamental catalyst>"
  ],
  "cons": [
    "<bullet point 1 evaluating debt/leverage constraint>",
    "<bullet point 2 evaluating regulatory/legal headwind>",
    "<bullet point 3 evaluating competitive pressure>",
    "<bullet point 4 evaluating another key risk factor>"
  ],
  "riskAnalysis": "<a comprehensive, professional risk paragraph assessing solvency, debt health, regulatory exposures, and macroeconomic tail risks>",
  "futureOutlook": "<a detailed growth paragraph assessing product lines, future market share projections, and estimated valuation trajectory over a 1-5 year investment horizon>",
  "aiSummary": "<a synthesis summarizing the core investment thesis, revenue durability, and news sentiment weights to justify your rating and confidence score>",
  "news": [
    {{
      "id": <index starting from 1>,
      "title": "<title of the article>",
      "source": "<source of the article>",
      "time": "<relative time, e.g. '3 hours ago'>",
      "sentiment": "Bullish" | "Bearish" | "Neutral",
      "summary": "<1-2 sentence description explaining why this article impacts the thesis>"
    }}
  ]
}}`;

  const prompt = PromptTemplate.fromTemplate(template);

  // 3. Compile the reusable runnable chain
  const chain = prompt.pipe(model);
  return chain;
}

/**
 * High-level helper function that instantiates the chain and runs it with formatted inputs.
 * @param {object|string} companyProfile
 * @param {Array|string} financialMetrics
 * @param {Array|string} historicalData
 * @param {Array|string} recentNews
 * @returns {Promise<string>}
 */
async function generateAnalysis(companyProfile, financialMetrics, historicalData, recentNews) {
  try {
    const chain = createInvestmentChain();
    
    // Invoke the reusable chain with the inputs
    const response = await chain.invoke({
      companyProfile: typeof companyProfile === 'object' ? JSON.stringify(companyProfile, null, 2) : companyProfile,
      financialMetrics: typeof financialMetrics === 'object' ? JSON.stringify(financialMetrics, null, 2) : financialMetrics,
      historicalData: typeof historicalData === 'object' ? JSON.stringify(historicalData, null, 2) : historicalData,
      recentNews: typeof recentNews === 'object' ? JSON.stringify(recentNews, null, 2) : recentNews
    });
    
    return response.content;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError(`Gemini LangChain service error: ${error.message}`, 500);
  }
}

module.exports = {
  createInvestmentChain,
  generateAnalysis
};
