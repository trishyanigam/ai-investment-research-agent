import React from 'react';
import { motion } from 'framer-motion';
import Spinner from './Spinner';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  icon = null
}) {
  const baseStyles = 'relative inline-flex items-center justify-center font-bold transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500/50 select-none cursor-pointer';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] rounded-xl border border-cyan-400/20',
    secondary: 'glass border border-white/10 hover:border-white/25 text-white rounded-xl shadow-md',
    danger: 'bg-rose-950/20 hover:bg-rose-900/30 border border-rose-500/30 text-rose-400 rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.08)]',
    ghost: 'bg-transparent hover:bg-white/5 text-neutral-300 hover:text-white rounded-xl border border-transparent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs sm:text-sm',
    lg: 'px-7 py-3.5 text-sm sm:text-base'
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.015 } : {}}
      whileTap={!isDisabled ? { scale: 0.985 } : {}}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {loading && (
        <Spinner size="sm" className="mr-2 border-t-white" />
      )}
      {!loading && icon && <span className="mr-2 shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </motion.button>
  );
}
