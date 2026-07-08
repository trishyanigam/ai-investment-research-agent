import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import GlassCard from './GlassCard';

export default function CompanyCard({ stock, className = '' }) {
  if (!stock) return null;

  const isPositive = stock.change >= 0;

  return (
    <GlassCard className={className}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {stock.name}
            </h2>
            <span className="text-xs font-bold text-neutral-300 bg-neutral-900 border border-white/5 px-2.5 py-1 rounded-lg">
              {stock.symbol}
            </span>
            <span className="text-[10px] font-bold text-neutral-400 bg-neutral-900/40 border border-white/5 px-2 py-1 rounded-md">
              {stock.exchange} • {stock.sector}
            </span>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal max-w-4xl">
            {stock.overview}
          </p>
        </div>

        {/* Price display container */}
        <div className="flex flex-row md:flex-col items-baseline md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-white/5 pt-5 md:pt-0 md:pl-10 shrink-0">
          <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            ${stock.price.toFixed(2)}
          </span>
          <div className={`flex items-center text-xs sm:text-sm font-bold mt-1.5 ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isPositive ? <TrendingUp className="h-4.5 w-4.5 mr-1" /> : <TrendingDown className="h-4.5 w-4.5 mr-1" />}
            <span>
              {isPositive ? '+' : ''}
              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
