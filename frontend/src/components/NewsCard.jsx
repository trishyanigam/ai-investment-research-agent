import React from 'react';
import { ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';

export default function NewsCard({ item, className = '' }) {
  if (!item) return null;

  const getSentimentBadge = (sent) => {
    const upperSent = sent?.toUpperCase() || 'NEUTRAL';
    if (upperSent === 'BULLISH') {
      return 'bg-emerald-500/10 border-emerald-800/40 text-emerald-400';
    }
    if (upperSent === 'BEARISH') {
      return 'bg-rose-500/10 border-rose-800/40 text-rose-400';
    }
    return 'bg-neutral-800/30 border-white/5 text-neutral-400';
  };

  return (
    <GlassCard
      hoverEffect={true}
      className={`flex flex-col justify-between p-6 space-y-4 text-left h-full ${className}`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold text-neutral-500 tracking-wider">
            {item.source} • {item.time}
          </span>
          <span className={`text-[9px] uppercase font-black px-2.5 py-0.5 rounded-full border ${getSentimentBadge(item.sentiment)}`}>
            {item.sentiment}
          </span>
        </div>
        <h4 className="font-display font-bold text-sm text-white hover:text-cyan-400 transition-colors line-clamp-2 cursor-pointer leading-snug">
          {item.title}
        </h4>
        <p className="text-xs text-neutral-400 leading-normal line-clamp-3 font-normal">
          {item.summary}
        </p>
      </div>
      <div className="flex items-center justify-end text-[10px] text-cyan-400 font-bold hover:underline cursor-pointer tracking-wider uppercase pt-2">
        <span>Read Source</span>
        <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
      </div>
    </GlassCard>
  );
}
