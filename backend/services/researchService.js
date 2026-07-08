const AppError = require('../utils/AppError');

// Quantitative Research Mock Database (CommonJS version)
const mockStocks = {
  AAPL: {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 189.84,
    change: 2.45,
    changePercent: 1.31,
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Consumer Electronics",
    overview: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company also sells various related services, including Apple Music, Apple TV+, Apple Pay, and iCloud. Apple's ecosystem strategy continues to yield industry-leading customer retention and services growth.",
    recommendation: "INVEST",
    confidence: 91,
    confidenceScore: 91,
    summary: "Apple remains a core compounder with unmatched cash flow generation. While hardware unit growth has plateaued, the high-margin Services division (now exceeding 22% of revenue) provides a powerful buffer. Our AI analysis suggests the market is pricing in near-term premium stagnation, but ignoring long-term ecosystem expansion (Vision Pro, AI integration, Health tech). The confidence score of 91% is backed by stable margins and active buybacks, minimizing downside risk.",
    aiSummary: "Apple remains a core compounder with unmatched cash flow generation. While hardware unit growth has plateaued, the high-margin Services division (now exceeding 22% of revenue) provides a powerful buffer. Our AI analysis suggests the market is pricing in near-term premium stagnation, but ignoring long-term ecosystem expansion (Vision Pro, AI integration, Health tech). The confidence score of 91% is backed by stable margins and active buybacks, minimizing downside risk.",
    metrics: [
      { label: "Market Cap", value: "$2.97T" },
      { label: "Revenue (Qtr)", value: "$119.5B" },
      { label: "EPS (TTM)", value: "$6.08" },
      { label: "P/E Ratio", value: "31.2" },
      { label: "Dividend Yield", value: "0.51%" },
      { label: "Net Profit Margin", value: "25.8%" },
      { label: "52-Week Range", value: "$164.08 - $199.62" },
      { label: "Debt to Equity", value: "145.8%" }
    ],
    pros: [
      "Services segment revenue continues to scale with high margin dynamics.",
      "Unrivaled brand loyalty and strong device ecosystem lock-in.",
      "Robust balance sheet supporting aggressive share buybacks and dividends.",
      "Expanding presence in AR/VR headsets and health services."
    ],
    cons: [
      "Stagnant smartphone unit sales growth in core markets like China.",
      "Ongoing antitrust and regulatory scrutiny in the US and Europe.",
      "High valuation multiples compared to historical averages."
    ],
    riskAnalysis: "Apple faces moderate regulatory headwinds stemming from DMA enforcement in Europe, threatening App Store margins. Macroeconomic exposure in mainland China remains a key tail risk, as consumer preferences align closer with domestic brands. However, its low balance sheet leverage and high interest coverage ratio (over 40x) mitigate immediate financial solvency concerns.",
    futureOutlook: "Expected to capture substantial value from AI cycles starting with the iOS-integrated 'Apple Intelligence' launch. This is anticipated to trigger a multi-year hardware upgrade cycle. Services margins will likely expand toward 75%, pushing EPS target above $6.80 for fiscal year 2027.",
    timeline: [
      { step: "Retrieved Q1 FY26 SEC filings, balance sheet data, and capital allocation reports.", status: "completed" },
      { step: "Analyzed hardware unit trajectory and Services segment margin expansion.", status: "completed" },
      { step: "Aggregated 142 recent financial news articles and calculated positive/negative sentiment weights.", status: "completed" },
      { step: "Calculated P/E expansion relative to historical 5-year averages and sector competitors.", status: "completed" },
      { step: "Compiled comprehensive risk score and generated final buy/hold/sell rating.", status: "completed" }
    ],
    news: [
      {
        id: 1,
        title: "Apple Earnings Beat Expectations As Service Revenue Hits Record High",
        source: "Bloomberg",
        time: "3 hours ago",
        sentiment: "Bullish",
        summary: "Apple's Services segment reached a revenue peak of $23.1 billion, offsetting modest declines in iPad and Wearables sales."
      },
      {
        id: 2,
        title: "EU Imposes Historic Antitrust Fine on Apple Music Store Practices",
        source: "Reuters",
        time: "1 day ago",
        sentiment: "Bearish",
        summary: "The European Commission fined Apple €1.84 billion for abusing its dominant position in the distribution of music streaming apps."
      },
      {
        id: 3,
        title: "Apple Explores Generative AI Partnerships with Google and OpenAI",
        source: "Wall Street Journal",
        time: "2 days ago",
        sentiment: "Bullish",
        summary: "Reports suggest Apple plans to bake advanced AI models directly into the upcoming iOS releases to boost hardware upgrades."
      }
    ],
    chartData: [
      { date: "06/08", price: 180.2 },
      { date: "06/12", price: 182.5 },
      { date: "06/16", price: 181.1 },
      { date: "06/20", price: 183.9 },
      { date: "06/24", price: 186.4 },
      { date: "06/28", price: 185.0 },
      { date: "07/02", price: 187.3 },
      { date: "07/06", price: 189.84 }
    ]
  },
  MSFT: {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 415.50,
    change: 5.12,
    changePercent: 1.25,
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Software—Infrastructure",
    overview: "Microsoft Corporation develops and supports software, services, devices, and solutions worldwide. Its Productivity and Business Processes, Intelligent Cloud, and More Personal Computing segments are experiencing high growth, powered by early and aggressive integrations of generative AI through Azure.",
    recommendation: "BUY",
    confidence: 94,
    confidenceScore: 94,
    summary: "Microsoft is the clear institutional favorite in the artificial intelligence race. By integrating OpenAI models across its massive enterprise footprint, MSFT is converting AI hype into tangible recurring revenue.",
    aiSummary: "Microsoft is the clear institutional favorite in the artificial intelligence race. By integrating OpenAI models across its massive enterprise footprint (Office, Azure, Windows, GitHub), MSFT is converting AI hype into tangible recurring revenue. CapEx increases represent a risk to cash flows, but the long-term returns on AI cloud infrastructure justify the investment. We rate MSFT a strong BUY with 94% confidence.",
    metrics: [
      { label: "Market Cap", value: "$3.09T" },
      { label: "P/E Ratio", value: "35.8" },
      { label: "EPS (TTM)", value: "$11.60" },
      { label: "Revenue (Qtr)", value: "$62.0B" },
      { label: "Net Profit Margin", value: "35.3%" },
      { label: "Div Yield", value: "0.72%" },
      { label: "52-Week Range", value: "$315.18 - $430.82" },
      { label: "Debt to Equity", value: "43.2%" }
    ],
    pros: [
      "Industry-leading cloud platform (Azure) growing at 30%+ YoY, driven by AI workloads.",
      "Strong integration of Copilot AI across high-margin Office SaaS ecosystem.",
      "Immense pricing power and enterprise customer stickiness.",
      "Conservative leverage and extremely high operational margins (~43%)."
    ],
    cons: [
      "High absolute valuation levels limit near-term multiple expansion.",
      "CapEx is scaling up aggressively to build AI server capacity, depressing free cash flow.",
      "Regulatory hurdles around Activision Blizzard integration and general antitrust issues."
    ],
    riskAnalysis: "The primary risk is margin compression if enterprise Copilot adoption curves begin to plateau faster than server CapEx write-offs occur.",
    futureOutlook: "Azure is well-positioned to command a premium share of AI workload deployments.",
    timeline: [
      { step: "Retrieved latest cloud margins and server capacity utilization estimates.", status: "completed" },
      { step: "Analyzed corporate subscriber counts for Copilot and estimated seat penetration.", status: "completed" },
      { step: "Reviewed 180 articles on Azure expansion and AI partnerships.", status: "completed" },
      { step: "Stress-tested CapEx projections against free cash flow yield.", status: "completed" },
      { step: "Generated ultimate target multiple and confidence score.", status: "completed" }
    ],
    news: [
      {
        id: 1,
        title: "Azure Cloud Growth Accelerates to 30%, Handily Beating AWS Rates",
        source: "TechCrunch",
        time: "5 hours ago",
        sentiment: "Bullish",
        summary: "Azure's growth speedup indicates enterprise clients are migrating databases to MSFT cloud platforms to easily leverage OpenAI APIs."
      }
    ],
    chartData: [
      { date: "06/08", price: 395.2 },
      { date: "06/12", price: 400.1 },
      { date: "06/16", price: 404.9 },
      { date: "07/06", price: 415.50 }
    ]
  }
};

/**
 * Searches for stock data by query (symbol or name)
 * @param {string} query 
 * @returns {Promise<object>}
 */
exports.analyzeCompany = async (query) => {
  if (!query || typeof query !== 'string') {
    throw new AppError('Company search query parameter is required.', 400);
  }

  const cleanQuery = query.toUpperCase().trim();

  // 1. Direct symbol match
  if (mockStocks[cleanQuery]) {
    return mockStocks[cleanQuery];
  }

  // 2. Fuzzy name match
  const matchedKey = Object.keys(mockStocks).find((key) => 
    mockStocks[key].name.toLowerCase().includes(query.toLowerCase().trim())
  );

  if (matchedKey) {
    return mockStocks[matchedKey];
  }

  // Fallback: Return a clean default INVEST dummy data if not found rather than throwing,
  // but if the user queried an empty search, we handle it. Here we return a nice custom error
  // so the frontend can display the ErrorState correctly.
  throw new AppError(`Company or ticker symbol "${query}" was not found in our analytical index.`, 404);
};
