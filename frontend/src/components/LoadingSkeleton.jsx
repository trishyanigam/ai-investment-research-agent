import React from 'react';

export default function LoadingSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      {/* Overview Block Skeleton */}
      <div className="glass rounded-xl p-6 border border-white/5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-neutral-800 rounded"></div>
            <div className="h-8 w-48 bg-neutral-700 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
            <div className="h-10 w-24 bg-neutral-800 rounded-lg"></div>
          </div>
        </div>
        <div className="h-20 w-full bg-neutral-800/60 rounded-lg mt-4"></div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recommendation card Skeleton */}
        <div className="glass rounded-xl p-6 border border-white/5 space-y-4 col-span-1">
          <div className="h-4 w-32 bg-neutral-800 rounded"></div>
          <div className="h-28 w-28 mx-auto rounded-full bg-neutral-800 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-background"></div>
          </div>
          <div className="h-6 w-3/4 mx-auto bg-neutral-800 rounded mt-4"></div>
        </div>

        {/* Chart card Skeleton */}
        <div className="glass rounded-xl p-6 border border-white/5 space-y-4 lg:col-span-2 h-[320px]">
          <div className="flex justify-between items-center">
            <div className="h-5 w-40 bg-neutral-800 rounded"></div>
            <div className="h-8 w-32 bg-neutral-800 rounded"></div>
          </div>
          <div className="h-48 w-full bg-neutral-800/40 rounded-lg"></div>
        </div>
      </div>

      {/* Financial Grid Skeleton */}
      <div className="space-y-4">
        <div className="h-5 w-40 bg-neutral-800 rounded"></div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass rounded-xl p-4 border border-white/5 space-y-2">
              <div className="h-3 w-16 bg-neutral-800 rounded"></div>
              <div className="h-6 w-24 bg-neutral-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6 border border-white/5 space-y-4">
          <div className="h-4 w-28 bg-neutral-800 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-neutral-800 rounded"></div>
            <div className="h-4 w-5/6 bg-neutral-800 rounded"></div>
            <div className="h-4 w-4/5 bg-neutral-800 rounded"></div>
          </div>
        </div>
        <div className="glass rounded-xl p-6 border border-white/5 space-y-4">
          <div className="h-4 w-28 bg-neutral-800 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-neutral-800 rounded"></div>
            <div className="h-4 w-5/6 bg-neutral-800 rounded"></div>
            <div className="h-4 w-4/5 bg-neutral-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
