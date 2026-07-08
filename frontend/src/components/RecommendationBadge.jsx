import React from 'react';

export default function RecommendationBadge({ recommendation = 'HOLD', size = 'md', className = '' }) {
  const getTheme = (rec) => {
    const upperRec = rec?.toUpperCase() || 'HOLD';
    if (upperRec === 'BUY' || upperRec === 'INVEST') {
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]';
    }
    if (upperRec === 'SELL') {
      return 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.15)]';
    }
    return 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]';
  };

  const sizes = {
    sm: 'px-3 py-1 text-[10px] font-bold tracking-wider rounded-md border',
    md: 'px-5 py-2 text-xs font-black tracking-widest rounded-xl border',
    lg: 'px-7 py-2.5 text-lg font-black tracking-widest rounded-xl border'
  };

  return (
    <span className={`inline-flex items-center justify-center font-display uppercase ${getTheme(recommendation)} ${sizes[size] || sizes.md} ${className}`}>
      {recommendation}
    </span>
  );
}
