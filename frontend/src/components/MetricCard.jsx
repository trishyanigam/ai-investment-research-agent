import React from 'react';
import GlassCard from './GlassCard';

export default function MetricCard({ label, value, subtext = '', icon = null, className = '' }) {
  return (
    <GlassCard className={`p-5 hover:border-white/10 transition-colors ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
          {label}
        </span>
        {icon && <div className="text-neutral-500 shrink-0">{icon}</div>}
      </div>
      
      <div className="space-y-1">
        <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide">
          {value}
        </h4>
        {subtext && (
          <p className="text-[10px] font-semibold text-neutral-500">
            {subtext}
          </p>
        )}
      </div>
    </GlassCard>
  );
}
