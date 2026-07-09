import { BookOpen, Calendar } from 'lucide-react';
import GlassCard from './GlassCard';

export default function SummaryCard({ summaryText = '', className = '' }) {
  return (
    <GlassCard className={`flex flex-col h-full justify-between ${className}`}>
      <div className="space-y-4">
        <div className="border-b border-white/5 pb-3">
          <h3 className="font-display font-bold text-lg text-white flex items-center gap-2 tracking-wide">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            AI Executive Thesis
          </h3>
        </div>
        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line">
          {summaryText}
        </p>
      </div>
      <div className="mt-8 border-t border-white/5 pt-4 flex items-center space-x-2 text-[10px] text-neutral-500 font-bold tracking-wider uppercase">
        <Calendar className="h-3.5 w-3.5" />
        <span>Report Refreshed: {new Date().toLocaleDateString()}</span>
      </div>
    </GlassCard>
  );
}
