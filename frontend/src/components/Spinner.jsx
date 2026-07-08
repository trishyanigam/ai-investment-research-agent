import React from 'react';

export default function Spinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3'
  };

  return (
    <div
      className={`animate-spin rounded-full border-t-cyan-400 border-r-transparent border-b-cyan-500/10 border-l-transparent ${
        sizeClasses[size] || sizeClasses.md
      } ${className}`}
      role="status"
    />
  );
}
