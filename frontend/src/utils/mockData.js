// Mock investment data for high-fidelity research agent interface
export const mockStocks = {
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
    confidenceScore: 91,
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
    aiSummary: "Apple remains a core compounder with unmatched cash flow generation. While hardware unit growth has plateaued, the high-margin Services division (now exceeding 22% of revenue) provides a powerful buffer. Our AI analysis suggests the market is pricing in near-term premium stagnation, but ignoring long-term ecosystem expansion (Vision Pro, AI integration, Health tech). The confidence score of 91% is backed by stable margins and active buybacks, minimizing downside risk.",
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
    confidenceScore: 94,
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
    riskAnalysis: "The primary risk is margin compression if enterprise Copilot adoption curves begin to plateau faster than server CapEx write-offs occur. Furthermore, high computing costs for executing complex model nodes represents a operational headwinds compared to standard cloud databases.",
    futureOutlook: "Azure is well-positioned to command a premium share of AI workload deployments. We forecast double-digit SaaS licensing growth as dynamic Copilot upgrades become default configurations across corporate tenants.",
    aiSummary: "Microsoft is the clear institutional favorite in the artificial intelligence race. By integrating OpenAI models across its massive enterprise footprint (Office, Azure, Windows, GitHub), MSFT is converting AI hype into tangible recurring revenue. CapEx increases represent a risk to cash flows, but the long-term returns on AI cloud infrastructure justify the investment. We rate MSFT a strong BUY with 94% confidence.",
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
      },
      {
        id: 2,
        title: "Microsoft Announces Aggressive $15 Billion Global AI Infrastructure Plan",
        source: "Financial Times",
        time: "1 day ago",
        sentiment: "Neutral",
        summary: "Microsoft is expanding server farms across Europe and Asia, raising concerns among some analysts about CapEx margins."
      },
      {
        id: 3,
        title: "Copilot Adoption Hits 60% of Fortune 500 Enterprises",
        source: "Forbes",
        time: "3 days ago",
        sentiment: "Bullish",
        summary: "Recent survey reveals corporate users show a 29% increase in coding and writing productivity when using Microsoft's AI assistance."
      }
    ],
    chartData: [
      { date: "06/08", price: 395.2 },
      { date: "06/12", price: 400.1 },
      { date: "06/16", price: 404.9 },
      { date: "06/20", price: 408.0 },
      { date: "06/24", price: 412.3 },
      { date: "06/28", price: 410.8 },
      { date: "07/02", price: 413.5 },
      { date: "07/06", price: 415.50 }
    ]
  },
  NVDA: {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 875.12,
    change: -12.40,
    changePercent: -1.40,
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Semiconductors",
    overview: "NVIDIA Corporation focuses on personal computer graphics, graphics processing units, and also AI solutions. It has emerged as the premier hardware backbone of the AI boom, supplying GPUs like the H100 and Blackwell architectures to hyperscalers.",
    recommendation: "HOLD",
    confidenceScore: 72,
    metrics: [
      { label: "Market Cap", value: "$2.19T" },
      { label: "P/E Ratio", value: "72.4" },
      { label: "EPS (TTM)", value: "$12.08" },
      { label: "Revenue (Qtr)", value: "$22.1B" },
      { label: "Net Profit Margin", value: "48.8%" },
      { label: "Div Yield", value: "0.02%" },
      { label: "52-Week Range", value: "$262.20 - $974.00" },
      { label: "Debt to Equity", value: "22.5%" }
    ],
    pros: [
      "Absolute monopoly in high-performance AI chips (85%+ market share).",
      "Remarkable margin profile (Gross margin exceeding 75%).",
      "Blackwell GPU line has sold out for the next 12 months, locking in short-term revenue.",
      "Highly efficient developer ecosystem (CUDA platform) creating huge lock-in."
    ],
    cons: [
      "Extremely rich valuation and potential peak cycle concerns.",
      "Growing competition from AMD, Intel, and hyperscaler in-house custom silicon (TPUs).",
      "Supply chain risks centering on TSMC and potential geopolitical friction in Taiwan."
    ],
    riskAnalysis: "Extreme concentration risk regarding fabrication. Over 98% of high-end silicon packaging relies on TSMC's CoWoS lines. Additionally, any slowdown in global cloud hyperscaler CapEx triggers significant inventory backlogs, which would cause severe compression of the 72x P/E multiple.",
    futureOutlook: "The next 2-3 quarters are structurally secure due to Blackwell backlog. However, by late 2027, custom ASIC solutions from AWS, Google, and Meta will likely capture a larger portion of inference workloads, moving market share toward customized in-house nodes.",
    aiSummary: "NVIDIA's growth has been legendary, but we advise caution at current price levels. While its technological lead via Blackwell and the CUDA ecosystem is safe, expectations are sky-high. Any minor delay in supply chain shipping or slow-down in hyperscaler GPU purchasing could trigger severe valuation compression. We advise holding positions rather than adding fresh capital here.",
    timeline: [
      { step: "Audited wafer fabrication reports and TSMC packaging capacity outputs.", status: "completed" },
      { step: "Calculated Blackwell supply backlog and forward price elasticity of AI chips.", status: "completed" },
      { step: "Analyzed competitive offerings from AMD (MI300X) and in-house TPU projects.", status: "completed" },
      { step: "Analyzed semiconductor cycles over the last 15 years to identify structural tops.", status: "completed" },
      { step: "Synthesized neutral short-term forecast and hold rating.", status: "completed" }
    ],
    news: [
      {
        id: 1,
        title: "NVIDIA Blackwell Chips Sold Out for Next 12 Months, Co-Founder Says",
        source: "Yahoo Finance",
        time: "6 hours ago",
        sentiment: "Bullish",
        summary: "Jensen Huang confirmed Blackwell supply is constrained as demand completely outstrips manufacturing capabilities."
      },
      {
        id: 2,
        title: "AMD Launches New AI Accelerator, Claims Performance Parity in LLM Runs",
        source: "TechRadar",
        time: "12 hours ago",
        sentiment: "Bearish",
        summary: "AMD announced the MI325X chip, aiming to capture 10-15% of the data center GPU market by pricing it aggressively."
      },
      {
        id: 3,
        title: "Geopolitical Tensions Raise Questions Over Chip Packaging Concentration",
        source: "Nikkei Asia",
        time: "2 days ago",
        sentiment: "Bearish",
        summary: "Concerns grow over NVDA's complete reliance on TSMC's CoWoS packaging facilities in western Taiwan."
      }
    ],
    chartData: [
      { date: "06/08", price: 820.0 },
      { date: "06/12", price: 840.4 },
      { date: "06/16", price: 865.1 },
      { date: "06/20", price: 890.3 },
      { date: "06/24", price: 924.0 },
      { date: "06/28", price: 900.5 },
      { date: "07/02", price: 885.0 },
      { date: "07/06", price: 875.12 }
    ]
  },
  TSLA: {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    price: 172.98,
    change: -4.82,
    changePercent: -2.71,
    exchange: "NASDAQ",
    sector: "Consumer Cyclical",
    industry: "Auto Manufacturers",
    overview: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally. The firm is transitioning from a pure-play EV automaker to an AI robotics powerhouse.",
    recommendation: "SELL",
    confidenceScore: 78,
    metrics: [
      { label: "Market Cap", value: "$550.4B" },
      { label: "P/E Ratio", value: "48.2" },
      { label: "EPS (TTM)", value: "$3.58" },
      { label: "Revenue (Qtr)", value: "$25.2B" },
      { label: "Net Profit Margin", value: "11.1%" },
      { label: "Div Yield", value: "N/A" },
      { label: "52-Week Range", value: "$138.80 - $299.29" },
      { label: "Debt to Equity", value: "18.2%" }
    ],
    pros: [
      "Industry-leading energy storage business (Megapack) growing at triple-digit rates.",
      "Massive real-world driving data advantage for FSD (Full Self-Driving) training.",
      "Industry-low debt and high cash buffer (~$29B) protecting against downturns.",
      "First-mover advantage and structural cost efficiencies in EV assembly."
    ],
    cons: [
      "Declining gross vehicle margins due to persistent EV price wars globally.",
      "Negative growth in EV delivery numbers during recent quarters.",
      "High reliance on CEO Elon Musk's attention and key-person risk.",
      "Valuation remains anchored to AI/Robotics expectations rather than auto fundamentals."
    ],
    riskAnalysis: "High structural margin deterioration in automotive sales, falling to multi-year lows. Brand perception has witnessed minor headwinds, while intense price wars initiated by BYD and Geely in China severely limit price recovery options.",
    futureOutlook: "FSD v12 and Robotaxi events represent short-term speculative catalysts. However, volume automotive growth will remain depressed until the next-generation $25k compact vehicle starts rolling out in volume (not expected until late 2026/2027).",
    aiSummary: "Tesla is facing a challenging transition period. Core automotive gross margins have deteriorated from >25% to under 16% due to intense pricing competition, particularly from BYD in China. While the energy storage division is thriving, EV delivery growth has stalled. Valuation is currently pricing in autonomy (FSD) and humanoid robotics (Optimus) which are years away from major commercial monetization. We rate TSLA a SELL/AVOID at these multiples.",
    timeline: [
      { step: "Retrieved insurance registration numbers and shipping logistics stats in China.", status: "completed" },
      { step: "Analyzed average selling prices (ASP) across Model 3/Y configurations.", status: "completed" },
      { step: "Scanned sentiment of 310 articles covering FSD version 12 feedback.", status: "completed" },
      { step: "Stress-tested auto gross margins under further pricing cuts.", status: "completed" },
      { step: "Completed risk profiling and finalized Sell rating.", status: "completed" }
    ],
    news: [
      {
        id: 1,
        title: "Tesla EV Deliveries Drop 8.5% YoY, Missing Wall Street Targets",
        source: "MarketWatch",
        time: "4 hours ago",
        sentiment: "Bearish",
        summary: "Tesla reported 386,810 deliveries in Q1, far below analysts' expectations as inventory builds up."
      },
      {
        id: 2,
        title: "Tesla Focuses Entirely on Robotaxi Deployment; Next-Gen $25k Car Delayed",
        source: "Electrek",
        time: "18 hours ago",
        sentiment: "Bearish",
        summary: "Tesla is shifting engineering focus towards a dedicated Robotaxi platform, delaying the mass-market model."
      },
      {
        id: 3,
        title: "Tesla Energy Storage Deployments Hit All-Time Record of 4.1 GWh",
        source: "CleanTechnica",
        time: "3 days ago",
        sentiment: "Bullish",
        summary: "Megapack installations continue to soar, serving as a bright spot amid declining automotive sales."
      }
    ],
    chartData: [
      { date: "06/08", price: 185.4 },
      { date: "06/12", price: 180.2 },
      { date: "06/16", price: 178.5 },
      { date: "06/20", price: 181.0 },
      { date: "06/24", price: 179.3 },
      { date: "06/28", price: 175.0 },
      { date: "07/02", price: 174.1 },
      { date: "07/06", price: 172.98 }
    ]
  },
  GOOGL: {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 154.20,
    change: 1.88,
    changePercent: 1.23,
    exchange: "NASDAQ",
    sector: "Technology",
    industry: "Internet Content & Information",
    overview: "Alphabet Inc. provides search, online advertising, cloud computing, hardware, and software services. The company's Google Services segment includes Search, YouTube, Android, Chrome, and Google Maps, while its Google Cloud segment offers enterprise cloud infrastructure and developer tools.",
    recommendation: "BUY",
    confidenceScore: 85,
    metrics: [
      { label: "Market Cap", value: "$1.92T" },
      { label: "P/E Ratio", value: "26.4" },
      { label: "EPS (TTM)", value: "$5.84" },
      { label: "Revenue (Qtr)", value: "$86.3B" },
      { label: "Net Profit Margin", value: "24.0%" },
      { label: "Div Yield", value: "0.52%" },
      { label: "52-Week Range", value: "$102.63 - $160.22" },
      { label: "Debt to Equity", value: "11.2%" }
    ],
    pros: [
      "Absolute search engine market share (~91%) providing highly resilient ad revenue.",
      "YouTube monetization channels (Shorts, Subscriptions) showing robust growth.",
      "Google Cloud is profitable and expanding, integrated with Gemini AI capabilities.",
      "Undervalued relative to peers like MSFT and NVDA based on PEG ratios."
    ],
    cons: [
      "Risk of AI search integration (SGE) cannibalizing highly profitable ad clicks.",
      "Legal headwinds and DOJ monopoly lawsuits targeting default distribution contracts.",
      "PR missteps and developer friction regarding initial Gemini AI model rollouts."
    ],
    riskAnalysis: "Significant structural risk from anti-trust litigation. The DOJ search monopoly lawsuit threatens Google's default distribution agreement with Apple, which represents a core pillar of query volume stability. There is also threat to high ad margins if generative AI search results lead users to ask questions without ads.",
    futureOutlook: "Google Cloud represents a major growth catalyst, fueled by Gemini API integrations. The ad market remains fundamentally strong, and YouTube subscription growth will likely contribute stable non-cyclical cash flow margin layers.",
    aiSummary: "Alphabet presents one of the most compelling risk-reward profiles in big tech. Trading at a reasonable P/E multiple (~26x), the market is underestimating the strength of Google's data network and AI infrastructure (TPUs, Gemini model family). Cloud growth is picking up speed, and ad queries remain highly sticky. Regulatory risk is real, but a forced break-up could actually unlock shareholder value.",
    timeline: [
      { step: "Analyzed search query volumes and ad monetization yield per click.", status: "completed" },
      { step: "Evaluated Google Cloud margins and TPU v5p compute farm efficiency.", status: "completed" },
      { step: "Assessed probability models of DOJ antitrust outcomes and break-up values.", status: "completed" },
      { step: "Compiled consensus ad spending trends for the next 3 quarters.", status: "completed" },
      { step: "Issued recommendation and target valuation ranges.", status: "completed" }
    ],
    news: [
      {
        id: 1,
        title: "Google Introduces Gemini 1.5 Pro with Landmark 1 Million Token Context Window",
        source: "VentureBeat",
        time: "1 hour ago",
        sentiment: "Bullish",
        summary: "Google's updated AI model can process entire codebases and books in a single prompt, leading AI benchmarks."
      },
      {
        id: 2,
        title: "DOJ Search Monopoly Trial Enters Final Phase, Verdict Expected This Fall",
        source: "The Verge",
        time: "12 hours ago",
        sentiment: "Bearish",
        summary: "The Justice Department argued Google pays billions annually to remain the default search engine, harming competitive search startups."
      },
      {
        id: 3,
        title: "YouTube Premium Subscriptions Hit 100 Million Worldwide Milestone",
        source: "Variety",
        time: "3 days ago",
        sentiment: "Bullish",
        summary: "YouTube's subscription revenues are compounding, providing predictable non-ad margins for the company."
      }
    ],
    chartData: [
      { date: "06/08", price: 144.5 },
      { date: "06/12", price: 147.2 },
      { date: "06/16", price: 148.9 },
      { date: "06/20", price: 152.0 },
      { date: "06/24", price: 155.4 },
      { date: "06/28", price: 153.1 },
      { date: "07/02", price: 151.9 },
      { date: "07/06", price: 154.20 }
    ]
  }
};

export const getStockData = (symbol) => {
  if (!symbol) return null;
  const upperSymbol = symbol.toUpperCase().trim();
  return mockStocks[upperSymbol] || null;
};

export const searchSuggestions = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "TSLA", name: "Tesla, Inc." },
  { symbol: "GOOGL", name: "Alphabet Inc." }
];
