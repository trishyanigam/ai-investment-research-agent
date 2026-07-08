import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronRight } from 'lucide-react';
import { searchSuggestions } from '../utils/mockData';
import Input from './Input';
import Button from './Button';

export default function SearchBar({
  placeholder = "Search ticker or company...",
  className = "",
  initialValue = "",
  size = "md"
}) {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  // Hide suggestions dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim().length > 0) {
      const filtered = searchSuggestions.filter(
        (item) =>
          item.symbol.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    const targetSymbol = query.split(' ')[0].toUpperCase();
    setSuggestions([]);
    navigate(`/dashboard/${targetSymbol}`);
  };

  const handleSelectSuggestion = (sym) => {
    setSuggestions([]);
    navigate(`/dashboard/${sym}`);
  };

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center gap-3">
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          leftIcon={<Search className="h-4.5 w-4.5 text-neutral-500" />}
          className="flex-grow"
          inputClassName="py-3.5"
        />
        <Button
          type="submit"
          variant="primary"
          className="py-3.5 shrink-0"
        >
          {size === 'lg' ? (
            <span className="flex items-center gap-1.5">
              <span>Analyze</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          ) : (
            <Search className="h-4.5 w-4.5" />
          )}
        </Button>
      </form>

      {/* Autocomplete Suggestions Popup */}
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mt-2 z-40 rounded-2xl border border-white/10 bg-[#09090d]/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            {suggestions.map((item) => (
              <button
                key={item.symbol}
                onClick={() => handleSelectSuggestion(item.symbol)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 text-left transition-colors cursor-pointer border-b border-white/5 last:border-0"
              >
                <div className="flex items-center">
                  <span className="font-display font-bold text-sm text-white tracking-wide">{item.symbol}</span>
                  <span className="ml-3 text-xs text-neutral-400 font-semibold">{item.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-neutral-500" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
