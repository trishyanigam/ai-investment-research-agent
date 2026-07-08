import React from 'react';

export default function GlassCard({ children, className = '', hoverEffect = false, glowColor = '' }) {
  // If a custom glow is requested, combine it with the premium soft shadow base
  const glowStyles = glowColor
    ? { boxShadow: `0 8px 30px rgb(0,0,0,0.5), 0 0 40px ${glowColor}` }
    : {};

  return (
    <div
      className={`glass gradient-border rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.5)] ${
        hoverEffect ? 'gradient-border-hover cursor-pointer' : ''
      } ${className}`}
      style={glowStyles}
    >
      {children}
    </div>
  );
}
