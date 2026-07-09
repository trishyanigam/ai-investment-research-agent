const companyService = require('./companyService');
const newsService = require('./newsService');
const aiService = require('./aiService');

/**
 * Searches and analyzes a company's stock by name or ticker query.
 * @param {string} query 
 * @returns {Promise<object>}
 */
exports.analyzeCompany = async (query) => {
  let symbol = query;
  try {
    symbol = await companyService.resolveSymbol(query);
  } catch (err) {
    console.warn(`Symbol resolution failed during preprocessing: ${err.message}`);
  }

  // Fetch financial metrics and recent news concurrently
  const [companyData, newsArticles] = await Promise.all([
    companyService.getCompanyData(symbol),
    newsService.getLatestNews(symbol)
  ]);
  
  // Send all data to Gemini model via LangChain and compile report
  const analysisResult = await aiService.analyzeAndStructure(companyData, newsArticles);
  
  return analysisResult;
};
