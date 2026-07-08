const companyService = require('./companyService');
const newsService = require('./newsService');
const aiService = require('./aiService');

/**
 * Searches and analyzes a company's stock by name or ticker query.
 * @param {string} query 
 * @returns {Promise<object>}
 */
exports.analyzeCompany = async (query) => {
  // 1. Resolve company symbol and fetch financial metrics
  const companyData = await companyService.getCompanyData(query);
  
  // 2. Fetch recent news articles
  const newsArticles = await newsService.getLatestNews(companyData.symbol || query);
  
  // 3. Send all data to Gemini model via LangChain and compile report
  const analysisResult = await aiService.analyzeAndStructure(companyData, newsArticles);
  
  return analysisResult;
};
