import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, RefreshCw, Newspaper, PlusCircle, MinusCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import api from '../utils/api';
import GlassCard from '../components/GlassCard';
import StockChart from '../components/StockChart';
import ThinkingTimeline from '../components/ThinkingTimeline';
import EmptyState from '../components/EmptyState';

// Import Reusable Extracted Components
import SearchBar from '../components/SearchBar';
import CompanyCard from '../components/CompanyCard';
import RecommendationBadge from '../components/RecommendationBadge';
import MetricCard from '../components/MetricCard';
import RiskCard from '../components/RiskCard';
import SummaryCard from '../components/SummaryCard';
import NewsCard from '../components/NewsCard';
import ErrorCard from '../components/ErrorCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 15
    }
  }
};

const thinkingSteps = [
  "Searching Company",
  "Reading Financial Reports",
  "Fetching News",
  "Analyzing Market",
  "Generating Recommendation"
];

export default function Dashboard() {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState(null);
  const [timelineDone, setTimelineDone] = useState(false);
  const [pendingStock, setPendingStock] = useState(null);

  useEffect(() => {
    if (!symbol) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setIsThinking(true);
    setTimelineDone(false);
    setPendingStock(null);
    setStock(null);

    const fetchStockData = async () => {
      try {
        toast.loading(`Analysis Started: Fetching ${symbol.toUpperCase()} metrics...`, { id: 'analysis-toast' });
        const response = await api.post('/analyze', {
          company: symbol
        });
        setPendingStock(response.data);
        setLoading(false);
        toast.success(`Analysis Complete: ${response.data.name || symbol.toUpperCase()} report generated!`, { id: 'analysis-toast' });
      } catch (err) {
        console.error(err);
        const status = err.response?.status;
        const errorMsg = err.response?.data?.message || err.message || `We couldn't find any financial records matching "${symbol.toUpperCase()}".`;
        
        setError({ message: errorMsg, status: status });
        setLoading(false);
        setIsThinking(false);

        if (!err.response) {
          toast.error('Network Error: Failed to connect to server.', { id: 'analysis-toast' });
        } else if (status === 400 || status === 404) {
          toast.error(`Invalid Company: Ticker "${symbol.toUpperCase()}" not recognized.`, { id: 'analysis-toast' });
        } else {
          toast.error(`API Error: ${errorMsg}`, { id: 'analysis-toast' });
        }
      }
    };

    fetchStockData();
  }, [symbol]);

  useEffect(() => {
    if (timelineDone && pendingStock) {
      setStock(pendingStock);
      setIsThinking(false);
    }
  }, [timelineDone, pendingStock]);

  const handleTimelineComplete = () => {
    setTimelineDone(true);
  };

  if (!symbol) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[#030306] bg-grid-pattern pt-8 pb-16">
        <EmptyState />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-[#030306] bg-grid-pattern flex items-center justify-center pt-8 pb-16">
        <ErrorCard error={error} onRetry={() => navigate('/')} />
      </div>
    );
  }

  const getRecommendationTheme = (rec) => {
    const upperRec = rec?.toUpperCase() || 'HOLD';
    if (upperRec === 'BUY' || upperRec === 'INVEST') {
      return {
        bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]',
        color: 'text-emerald-400',
        stroke: '#10b981',
        glow: 'rgba(16,185,129,0.2)'
      };
    }
    return {
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
      color: 'text-amber-400',
      stroke: '#f59e0b',
      glow: 'rgba(245,158,11,0.2)'
    };
  };

  const theme = getRecommendationTheme(stock?.recommendation);
  const recColor = theme.stroke;

  // circular gauge variables
  const radius = 50;
  const strokeWidth = 7;
  const circumference = 2 * Math.PI * radius;
  const score = stock?.confidenceScore || 0;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#030306] bg-grid-pattern py-8">
      
      {/* Search Header Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors border border-white/5 bg-neutral-900/40 px-3.5 py-2 rounded-xl w-fit cursor-pointer hover:border-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-semibold">Back to Home</span>
        </button>

        {/* Encapsulated search input */}
        <SearchBar
          initialValue={symbol}
          placeholder="Search symbol (e.g. NVDA)..."
          className="w-full md:max-w-md"
          isLoading={isThinking || loading}
        />
      </div>

      <AnimatePresence mode="wait">
        {isThinking ? (
          /* High-Fidelity AI Thinking Screen overlay */
          <motion.div
            key="thinking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl mx-auto px-4 py-16"
          >
            <GlassCard className="space-y-8 p-8" glowColor="rgba(6,182,212,0.01)">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-950/20 text-cyan-400">
                    <Sparkles className="h-4 w-4 animate-spin" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white tracking-wide">Running Valuation Model</h3>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Ticker: {symbol.toUpperCase()}</p>
                  </div>
                </div>
                <span className="text-[9px] text-cyan-400 font-bold bg-cyan-950/30 border border-cyan-800/30 px-2.5 py-1 rounded-md">
                  Active
                </span>
              </div>
              
              <ThinkingTimeline steps={thinkingSteps} onComplete={handleTimelineComplete} isLoading={loading} />
            </GlassCard>
          </motion.div>
        ) : (
          /* Actual High-Fidelity Dashboard Content */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8"
          >
            {/* Header: Company Overview Card */}
            <motion.div variants={cardVariants}>
              <CompanyCard stock={stock} />
            </motion.div>

            {/* Middle Grid: Chart, Recommendation, Confidence */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recommendation and Confidence Score */}
              <motion.div variants={cardVariants}>
                <GlassCard className="flex flex-col justify-between items-center text-center p-6 h-full min-h-[380px] hover:border-white/10 transition-colors">
                  <div className="w-full flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">AI Thesis Target</span>
                    <button
                      onClick={() => setIsThinking(true)}
                      className="p-1.5 hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      title="Re-run AI Analysis"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Reusable Recommendation Badge */}
                  <div className="my-5">
                    <RecommendationBadge recommendation={stock?.recommendation} size="lg" />
                  </div>

                  {/* SVG Gauge */}
                  <div className="relative flex items-center justify-center h-32 w-32">
                    <svg className="transform -rotate-90 w-full h-full">
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="rgba(255,255,255,0.02)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke={recColor}
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{
                          transition: 'stroke-dashoffset 1s ease-in-out',
                          filter: `drop-shadow(0 0 8px ${recColor})`
                        }}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="font-display font-black text-2xl text-white tracking-wide">{score}%</span>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-neutral-500">Confidence</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-500 leading-normal max-w-[200px] mt-3 font-semibold uppercase tracking-wider">
                    Stress-tested valuation nodes
                  </p>
                </GlassCard>
              </motion.div>

              {/* Chart Card */}
              <motion.div variants={cardVariants} className="lg:col-span-2">
                <GlassCard className="p-6 h-full min-h-[380px] hover:border-white/10 transition-colors">
                  <StockChart data={stock?.chartData} ticker={stock?.symbol} />
                </GlassCard>
              </motion.div>
            </div>

            {/* Financial Metrics Grid */}
            <div className="space-y-4">
              <motion.h3 variants={cardVariants} className="font-display font-bold text-lg text-white tracking-wide">
                Financial & Valuation Indicators
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stock?.metrics.map((metric, i) => (
                  <motion.div key={i} variants={cardVariants}>
                    <MetricCard
                      label={metric.label}
                      value={metric.value}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3-Column Layout: AI Summary, Pros, Cons */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* AI Written Summary */}
              <motion.div variants={cardVariants}>
                <SummaryCard summaryText={stock?.aiSummary} />
              </motion.div>

              {/* Pros Catalysts Card */}
              <motion.div variants={cardVariants}>
                <GlassCard className="space-y-4 h-full hover:border-white/10 transition-colors">
                  <div className="border-b border-white/5 pb-3">
                    <h3 className="font-display font-bold text-lg text-emerald-400 flex items-center gap-2 tracking-wide">
                      <PlusCircle className="h-5 w-5 shrink-0" />
                      Pros & Catalysts
                    </h3>
                  </div>
                  <ul className="space-y-3.5">
                    {stock?.pros?.map((pro, index) => (
                      <li key={index} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                        <span className="text-emerald-400 font-bold shrink-0">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>

              {/* Cons Risks Card */}
              <motion.div variants={cardVariants}>
                <GlassCard className="space-y-4 h-full hover:border-white/10 transition-colors">
                  <div className="border-b border-white/5 pb-3">
                    <h3 className="font-display font-bold text-lg text-rose-400 flex items-center gap-2 tracking-wide">
                      <MinusCircle className="h-5 w-5 shrink-0" />
                      Cons & Risks
                    </h3>
                  </div>
                  <ul className="space-y-3.5">
                    {stock?.cons?.map((con, index) => (
                      <li key={index} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                        <span className="text-rose-400 font-bold shrink-0">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </div>

            {/* Risk Analysis & Future Outlook cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Risk Analysis Card */}
              <motion.div variants={cardVariants}>
                <RiskCard variant="risk" data={stock?.riskAnalysis} />
              </motion.div>

              {/* Future Outlook Card */}
              <motion.div variants={cardVariants}>
                <RiskCard variant="outlook" data={stock?.futureOutlook} />
              </motion.div>
            </div>

            {/* News and Sentiment Section */}
            <div className="space-y-4">
              <motion.h3 variants={cardVariants} className="font-display font-bold text-lg text-white flex items-center gap-2 tracking-wide">
                <Newspaper className="h-5 w-5 text-cyan-400" />
                Aggregated News Sentiment Feed
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stock?.news.map((item) => (
                  <motion.div key={item.id} variants={cardVariants}>
                    <NewsCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
