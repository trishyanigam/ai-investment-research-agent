import React from 'react';
import { 
  WifiOff, 
  Search, 
  Cpu, 
  Newspaper, 
  BarChart3, 
  AlertTriangle, 
  RefreshCw, 
  ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import GlassCard from './GlassCard';

export default function ErrorCard({ error, onRetry = null, className = '' }) {
  // Normalize error input (supports both string and object error payloads)
  const errorObj = typeof error === 'string' 
    ? { message: error, status: null } 
    : error || { message: 'An unexpected error occurred.', status: null };

  const message = errorObj.message || '';
  const status = errorObj.status;

  // Default: General API/Server Failure
  let icon = <AlertTriangle className="h-7 w-7 text-rose-400" />;
  let title = "Research Coordinator Failure";
  let explanation = "The backend server encountered an unhandled exception while synthesizing the investment analysis. Please retry the search in a few seconds.";
  let badgeColor = "border-rose-500/20 bg-rose-950/10 text-rose-400";
  let glowColor = "bg-rose-500/5";

  // Case 1: No Internet Connection / Offline
  if (!status && (message.includes('Network Error') || message.includes('connect to server') || message.includes('unreachable') || (typeof navigator !== 'undefined' && !navigator.onLine))) {
    icon = <WifiOff className="h-7 w-7 text-amber-400" />;
    title = "Connection Offline";
    explanation = "It looks like you're not connected to the internet. Please check your network connection and try again.";
    badgeColor = "border-amber-500/20 bg-amber-950/10 text-amber-400";
    glowColor = "bg-amber-500/5";
  } 
  // Case 2: Company / Ticker Not Found
  else if (status === 400 || status === 404 || message.toLowerCase().includes('not found') || message.toLowerCase().includes('not recognized') || message.toLowerCase().includes('resolve')) {
    icon = <Search className="h-7 w-7 text-cyan-400" />;
    title = "Ticker Symbol Not Found";
    explanation = "We couldn't locate any exchange listing or regulatory filings matching that symbol. Please check the spelling (e.g. AAPL, TSLA, GOOGL, MSFT).";
    badgeColor = "border-cyan-500/20 bg-cyan-950/10 text-cyan-400";
    glowColor = "bg-cyan-500/5";
  } 
  // Case 3: Gemini / LLM Service Failed
  else if (message.toLowerCase().includes('gemini') || message.toLowerCase().includes('ai model') || message.toLowerCase().includes('llm') || message.toLowerCase().includes('langchain')) {
    icon = <Cpu className="h-7 w-7 text-purple-400" />;
    title = "AI Thesis Model Offline";
    explanation = "The AI research coordinator failed to compile the investment recommendation thesis. This usually happens if the AI model service is rate-limited or key quota is exceeded.";
    badgeColor = "border-purple-500/20 bg-purple-950/10 text-purple-400";
    glowColor = "bg-purple-500/5";
  } 
  // Case 4: News API Service Failed
  else if (message.toLowerCase().includes('news') || message.toLowerCase().includes('sentiment')) {
    icon = <Newspaper className="h-7 w-7 text-blue-400" />;
    title = "News Stream Disruption";
    explanation = "The live sentiment engine failed to fetch recent financial news articles for this ticker. Please check if the News API key is valid or try again shortly.";
    badgeColor = "border-blue-500/20 bg-blue-950/10 text-blue-400";
    glowColor = "bg-blue-500/5";
  } 
  // Case 5: Yahoo Finance Data Ingestion Failed
  else if (message.toLowerCase().includes('yahoo') || message.toLowerCase().includes('finance') || message.toLowerCase().includes('market data') || message.toLowerCase().includes('metrics') || message.toLowerCase().includes('historical')) {
    icon = <BarChart3 className="h-7 w-7 text-emerald-400" />;
    title = "Market Data Unavailable";
    explanation = "We were unable to retrieve the core balance sheet metrics, historical prices, or price quotes from Yahoo Finance. The service might be experiencing temporary downtime.";
    badgeColor = "border-emerald-500/20 bg-emerald-950/10 text-emerald-400";
    glowColor = "bg-emerald-500/5";
  }

  return (
    <GlassCard className={`flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto ${className}`}>
      <div className={`relative flex h-14 w-14 items-center justify-center rounded-full border mb-5 animate-pulse ${badgeColor}`}>
        {icon}
        <div className={`absolute inset-0 rounded-full blur-sm ${glowColor}`}></div>
      </div>
      
      <h3 className="font-display font-bold text-xl text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
        {explanation}
      </p>

      {status && status !== 200 && (
        <span className="text-[10px] font-bold text-neutral-400 uppercase bg-neutral-950 border border-white/5 px-2.5 py-1.5 rounded-md mb-6 inline-block">
          Status Code: {status}
        </span>
      )}

      <div className="flex items-center gap-3.5 w-full justify-center">
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="secondary"
            className="flex-1 py-2 text-xs"
            icon={<RefreshCw className="h-3.5 w-3.5" />}
          >
            Try Again
          </Button>
        )}
        <Link to="/" className="flex-1">
          <Button
            variant="primary"
            className="w-full py-2 text-xs"
            icon={<ArrowLeft className="h-3.5 w-3.5" />}
          >
            Home
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
