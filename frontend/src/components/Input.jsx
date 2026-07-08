import React from 'react';

export default function Input({
  label = '',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  error = '',
  leftIcon = null,
  rightIcon = null,
  className = '',
  inputClassName = '',
  inputRef = null,
  ...props
}) {
  return (
    <div className={`space-y-1.5 text-left ${className}`}>
      {label && (
        <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
          {label}
        </label>
      )}
      
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 text-neutral-500 shrink-0 pointer-events-none">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-xl py-3 text-xs sm:text-sm text-white placeholder-neutral-500 glass-input ${
            leftIcon ? 'pl-11' : 'pl-4'
          } ${rightIcon ? 'pr-11' : 'pr-4'} ${
            error ? 'border-rose-500/50 focus:border-rose-500/60 focus:ring-rose-500/20' : ''
          } ${
            disabled ? 'opacity-40 cursor-not-allowed' : ''
          } ${inputClassName}`}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3.5 text-neutral-500 shrink-0">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="text-[10px] sm:text-xs font-semibold text-rose-400 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
