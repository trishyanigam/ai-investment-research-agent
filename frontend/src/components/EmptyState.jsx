import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, LineChart } from 'lucide-react';
import SearchBar from './SearchBar';

export default function EmptyState() {
  const navigate = useNavigate();
  const suggestions = ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'GOOGL'];

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center max-w-2xl mx-auto space-y-8 py-10">
      
      {/* Premium Multi-Layered CSS/SVG Illustration */}
      <div className="relative flex items-center justify-center w-48 h-32 mb-4">
        {/* Glow Effects */}
        <div className="absolute w-28 h-28 rounded-full bg-cyan-500/10 blur-xl animate-pulse pointer-events-none" />
        <div className="absolute w-20 h-20 rounded-full bg-purple-500/10 blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Outer Grid Mockup Layer */}
        <div className="absolute w-36 h-24 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-md transform -rotate-6 shadow-xl flex flex-col p-3 justify-between">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full" />
          <div className="w-3/4 h-1 bg-white/5 rounded-full" />
          <div className="w-1/2 h-1 bg-white/5 rounded-full" />
        </div>

        {/* Center Dashboard Card Layer */}
        <div className="absolute w-36 h-24 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-lg transform rotate-6 shadow-2xl flex items-center justify-center">
          <LineChart className="h-10 w-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] animate-pulse" />
        </div>

        {/* Floating Sparkles */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -top-1 right-8 bg-neutral-900/80 border border-white/10 p-1.5 rounded-xl text-purple-400 shadow-lg"
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-1 left-8 bg-neutral-900/80 border border-white/10 p-1.5 rounded-xl text-emerald-400 shadow-lg"
        >
          <TrendingUp className="h-4 w-4" />
        </motion.div>
      </div>

      {/* Message Content */}
      <div className="space-y-3.5">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
          AI Quantitative Intelligence
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Search for any company to generate an AI investment report.
        </p>
      </div>

      {/* Embedded Search input with Large Analyze button */}
      <div className="w-full max-w-md relative text-left">
        <SearchBar
          size="lg"
          placeholder="Enter ticker (e.g. MSFT, TSLA, AAPL)..."
        />
      </div>

      {/* Popular Researches shortcuts */}
      <div className="space-y-3.5 pt-4">
        <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
          Popular Tickers
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {suggestions.map((sym) => (
            <button
              key={sym}
              onClick={() => navigate(`/dashboard/${sym}`)}
              className="glass hover:glass-hover px-4 py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer border border-white/5 hover:border-cyan-500/30 hover:scale-105"
            >
              {sym}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
