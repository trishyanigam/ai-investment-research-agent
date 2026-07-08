import React from 'react';
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import GlassCard from './GlassCard';

export default function ErrorCard({ message = 'An unexpected error occurred.', onRetry = null, className = '' }) {
  return (
    <GlassCard className={`flex flex-col items-center justify-center p-8 text-center max-w-md mx-auto ${className}`}>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-rose-500/20 bg-rose-950/10 text-rose-400 mb-5 animate-bounce">
        <AlertCircle className="h-7 w-7" />
        <div className="absolute inset-0 rounded-full bg-rose-500/5 blur-sm"></div>
      </div>
      
      <h3 className="font-display font-bold text-xl text-white mb-2">Research Error</h3>
      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
        {message} Verify that the target stock ticker is valid (e.g., AAPL, MSFT, TSLA, GOOGL, NVDA).
      </p>

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
