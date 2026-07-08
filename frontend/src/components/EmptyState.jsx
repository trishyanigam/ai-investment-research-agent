import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function EmptyState() {
  const navigate = useNavigate();
  const suggestions = ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'GOOGL'];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 mb-6">
        <TrendingUp className="h-8 w-8 animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-sm"></div>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mb-2">No Research Loaded</h2>
      <p className="text-neutral-400 text-sm max-w-md mb-8 leading-relaxed">
        Select a ticker symbol below or enter one in the search bar above to generate a real-time, AI-powered financial and sentiment report.
      </p>

      <div className="space-y-4">
        <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Popular Researches</span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {suggestions.map((sym) => (
            <button
              key={sym}
              onClick={() => navigate(`/dashboard/${sym}`)}
              className="glass hover:glass-hover px-4 py-2 rounded-lg text-xs font-bold text-white transition-all cursor-pointer border border-white/5 hover:border-cyan-500/30"
            >
              {sym}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
