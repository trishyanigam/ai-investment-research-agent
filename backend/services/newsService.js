const axios = require('axios');
const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();
const config = require('../config/env');

/**
 * Fetches the latest 5 articles from NewsAPI for a given search query (ticker or company name).
 * @param {string} query
 * @returns {Promise<Array<object>>}
 */
async function fetchNewsFromNewsAPI(query) {
  const apiKey = config.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error('NewsAPI key is not configured in the environment settings.');
  }

  const response = await axios.get('https://newsapi.org/v2/everything', {
    params: {
      q: query,
      sortBy: 'publishedAt',
      pageSize: 5,
      language: 'en',
      apiKey: apiKey
    },
    timeout: 5000
  });

  const articles = response.data?.articles || [];
  return articles.slice(0, 5).map(article => ({
    title: article.title || 'No Title Available',
    description: article.description || 'No description summary available.',
    url: article.url || '#',
    publishedAt: article.publishedAt || new Date().toISOString(),
    source: article.source?.name || 'News API'
  }));
}

/**
 * Fetches fallback news from Yahoo Finance search API when NewsAPI fails.
 * @param {string} query
 * @returns {Promise<Array<object>>}
 */
async function fetchNewsFromYahooFinance(query) {
  const searchResults = await yahooFinance.search(query);
  const news = searchResults.news || [];
  return news.slice(0, 5).map(article => ({
    title: article.title || 'No Title Available',
    description: article.title || 'No description summary available.', // Yahoo Finance search news does not provide body description, use title
    url: article.link || '#',
    publishedAt: article.providerPublishTime 
      ? (article.providerPublishTime instanceof Date 
          ? article.providerPublishTime.toISOString() 
          : new Date(typeof article.providerPublishTime === 'number' && article.providerPublishTime < 1e12 
              ? article.providerPublishTime * 1000 
              : article.providerPublishTime).toISOString())
      : new Date().toISOString(),
    source: article.publisher || 'Yahoo Finance'
  }));
}

/**
 * Generates static high-fidelity fallback news.
 * @param {string} query
 * @returns {Array<object>}
 */
function getStaticFallbackNews(query) {
  return [
    {
      title: `${query} Operations and Market Sentiment Update`,
      description: `Analysis of latest operational milestones and general market index adjustments for ${query}.`,
      url: '#',
      publishedAt: new Date().toISOString(),
      source: 'Market Intelligence'
    }
  ];
}

/**
 * Coordinates fetching news from NewsAPI with Yahoo Finance as a fallback.
 * Guarantees a non-empty array return even on complete API outages.
 * @param {string} query
 * @returns {Promise<Array<object>>}
 */
async function getLatestNews(query) {
  if (!query || typeof query !== 'string') {
    return getStaticFallbackNews(query || 'General Market');
  }

  const cleanQuery = query.trim();

  // 1. Attempt Live NewsAPI Query
  try {
    const articles = await fetchNewsFromNewsAPI(cleanQuery);
    if (articles.length > 0) {
      return articles;
    }
  } catch (error) {
    console.warn(`NewsAPI fetch failed (${error.message}). Trying Yahoo Finance fallback.`);
  }

  // 2. Attempt Yahoo Finance news fallback
  try {
    const articles = await fetchNewsFromYahooFinance(cleanQuery);
    if (articles.length > 0) {
      return articles;
    }
  } catch (error) {
    console.error(`Yahoo Finance news fallback failed: ${error.message}`);
  }

  // 3. Direct static fallback return on complete failure/empty output
  return getStaticFallbackNews(cleanQuery);
}

module.exports = {
  getLatestNews,
  fetchNewsFromNewsAPI,
  fetchNewsFromYahooFinance,
  getStaticFallbackNews
};
