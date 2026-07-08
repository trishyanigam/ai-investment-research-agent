import React from 'react';
import { AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ErrorState({ message = 'An unexpected error occurred.', onRetry = null }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-red-500/20 bg-red-950/10 text-red-400 mb-6 animate-bounce">
        <AlertCircle className="h-8 w-8" />
        <div className="absolute inset-0 rounded-full bg-red-500/5 blur-sm"></div>
      </div>
      
      <h2 className="font-display font-bold text-2xl text-white mb-2">Research Error</h2>
      <p className="text-neutral-400 text-sm max-w-md mb-8 leading-relaxed">
        {message} Please verify that the stock symbol is correct (e.g., AAPL, MSFT, TSLA, GOOGL, NVDA) and try again.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center space-x-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-white/20 px-5 py-2 text-sm font-semibold text-white transition-all cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Try Again</span>
          </button>
        )}
        <Link
          to="/"
          className="flex items-center space-x-2 rounded-lg bg-white hover:bg-neutral-200 px-5 py-2 text-sm font-semibold text-black transition-all cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
