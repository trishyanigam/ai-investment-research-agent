const fallbackStocks = {
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

module.exports = fallbackStocks;
