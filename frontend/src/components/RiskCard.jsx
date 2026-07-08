import React from 'react';
import { PlusCircle, MinusCircle, AlertTriangle, Compass } from 'lucide-react';
import GlassCard from './GlassCard';

export default function RiskCard({ variant = 'risk', data = null, className = '' }) {
  if (variant === 'catalysts') {
    return (
      <GlassCard className={`space-y-6 h-full ${className}`}>
        <div className="border-b border-white/5 pb-3">
          <h3 className="font-display font-bold text-lg text-white tracking-wide">Core Catalysts & Friction</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Pros */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-400 flex items-center gap-1.5">
              <PlusCircle className="h-4.5 w-4.5 shrink-0" />
              Pros / Catalysts
            </h4>
            <ul className="space-y-4">
              {data?.pros?.map((pro, index) => (
                <li key={index} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-rose-400 flex items-center gap-1.5">
              <MinusCircle className="h-4.5 w-4.5 shrink-0" />
              Cons / Risks
            </h4>
            <ul className="space-y-4">
              {data?.cons?.map((con, index) => (
                <li key={index} className="flex gap-2.5 text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    );
  }

  if (variant === 'outlook') {
    return (
      <GlassCard className={`space-y-4 h-full ${className}`}>
        <div className="border-b border-white/5 pb-3 flex items-center gap-2">
          <Compass className="h-5 w-5 text-cyan-400" />
          <h3 className="font-display font-bold text-lg text-white tracking-wide">Forward Growth & Future Outlook</h3>
        </div>
        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
          {data}
        </p>
      </GlassCard>
    );
  }

  // Default: Risk Analysis
  return (
    <GlassCard className={`space-y-4 h-full ${className}`}>
      <div className="border-b border-white/5 pb-3 flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 text-rose-400 animate-pulse" />
        <h3 className="font-display font-bold text-lg text-white tracking-wide">Risk & Vulnerability Analysis</h3>
      </div>
      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal">
        {data}
      </p>
    </GlassCard>
  );
}
