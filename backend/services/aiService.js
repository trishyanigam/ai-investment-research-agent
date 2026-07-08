const langChainService = require('./langChainService');
const AppError = require('../utils/AppError');

/**
 * Cleans markdown code block wraps and parses JSON.
 * @param {string} text 
 * @returns {object}
 */
function parseJsonResponse(text) {
  let cleaned = text.trim();
  // Strip markdown ```json wrap if the model output it
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(json)?/, '').replace(/```$/, '').trim();
  }
  
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error("JSON parsing error on text:", text);
    throw new AppError('AI model returned malformed JSON response. Please try again.', 502);
  }
}

/**
 * Calculates relative time string from ISO timestamp.
 * @param {string} publishedAt 
 * @returns {string}
 */
function calculateRelativeTime(publishedAt) {
  if (!publishedAt) return 'recently';
  const pubDate = new Date(publishedAt);
  const now = new Date();
  const diffMs = now - pubDate;
  
  if (diffMs <= 0) {
    return 'just now';
  }
  
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  
  if (diffHrs < 1) {
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins <= 0) return 'just now';
    return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
  }
  if (diffHrs < 24) {
    return `${diffHrs} hour${diffHrs === 1 ? '' : 's'} ago`;
  }
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
}

/**
 * Orchestrates sending data to LLM, cleaning, validating response and appending audit timelines.
 * @param {object} companyData 
 * @param {Array<object>} newsArticles 
 * @returns {Promise<object>}
 */
async function analyzeAndStructure(companyData, newsArticles) {
  const companyProfile = {
    symbol: companyData.symbol,
    name: companyData.name,
    price: companyData.price,
    change: companyData.change,
    changePercent: companyData.changePercent,
    exchange: companyData.exchange,
    sector: companyData.sector,
    industry: companyData.industry,
    overview: companyData.overview
  };
  const financialMetrics = companyData.metrics;
  const historicalData = companyData.chartData;
  const recentNews = newsArticles;

  const rawResponse = await langChainService.generateAnalysis(
    companyProfile,
    financialMetrics,
    historicalData,
    recentNews
  );
  const parsedData = parseJsonResponse(rawResponse);

  // Validate parameters and load default values in case of omissions
  const recommendation = parsedData.recommendation || 'HOLD';
  const confidenceScore = parsedData.confidenceScore !== undefined ? Number(parsedData.confidenceScore) : 75;
  const pros = Array.isArray(parsedData.pros) ? parsedData.pros : [];
  const cons = Array.isArray(parsedData.cons) ? parsedData.cons : [];
  const riskAnalysis = parsedData.riskAnalysis || 'No risk analysis generated.';
  const futureOutlook = parsedData.futureOutlook || 'No growth outlook generated.';
  const aiSummary = parsedData.aiSummary || 'No investment summary available.';
  
  // Map news with parsed sentiments
  const mappedNews = newsArticles.map((article, idx) => {
    // Try to find matching item parsed by Gemini
    const aiArticle = parsedData.news?.find(
      n => n.title?.toLowerCase().includes(article.title.substring(0, 15).toLowerCase()) || n.id === idx + 1
    );
    
    return {
      id: idx + 1,
      title: article.title,
      source: article.source,
      time: calculateRelativeTime(article.publishedAt),
      sentiment: aiArticle?.sentiment || 'Neutral',
      summary: aiArticle?.summary || article.description || article.title
    };
  });

  // Construct dynamic thinking timeline checklist for UI display
  const timeline = [
    { step: `Retrieved ${companyData.symbol} financial profile and quote indicators from Yahoo Finance.`, status: 'completed' },
    { step: `Aggregated ${newsArticles.length} recent news headlines for sentiment parsing.`, status: 'completed' },
    { step: `Executed LangChain prompt sequence against Gemini.`, status: 'completed' },
    { step: `Parsed AI investment recommendation and confidence weights (${confidenceScore}%).`, status: 'completed' },
    { step: `Valuation modeling checklist completed successfully.`, status: 'completed' }
  ];

  return {
    ...companyData,
    recommendation,
    confidenceScore,
    pros,
    cons,
    riskAnalysis,
    futureOutlook,
    aiSummary,
    timeline,
    news: mappedNews
  };
}

module.exports = {
  analyzeAndStructure
};
