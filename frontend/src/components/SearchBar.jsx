import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronRight, X, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { searchSuggestions } from '../utils/mockData';
import Input from './Input';
import Button from './Button';

export default function SearchBar({
  placeholder = "Search ticker or company...",
  className = "",
  initialValue = "",
  size = "md",
  isLoading = false
}) {
  const [query, setQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [recents, setRecents] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  // Load recents on mount
  useEffect(() => {
    const stored = localStorage.getItem('recent_searches');
    if (stored) {
      try {
        setRecents(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Hide dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const saveRecentSearch = (symbol) => {
    const found = searchSuggestions.find(
      (item) => item.symbol.toUpperCase() === symbol.toUpperCase()
    );
    const itemToAdd = {
      symbol: symbol.toUpperCase(),
      name: found ? found.name : 'Company / Ticker'
    };

    const updatedRecents = [
      itemToAdd,
      ...recents.filter((item) => item.symbol.toUpperCase() !== symbol.toUpperCase())
    ].slice(0, 5);

    setRecents(updatedRecents);
    localStorage.setItem('recent_searches', JSON.stringify(updatedRecents));
  };

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
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      toast.error('Please enter a company name or ticker symbol.');
      return;
    }

    // If the first word is a standard ticker (1-5 alphabetic chars), extract it. Otherwise, use full query.
    const firstWord = cleanQuery.split(/[\s,]+/)[0];
    let targetSymbol = cleanQuery;
    if (/^[A-Za-z]{1,5}$/.test(firstWord)) {
      targetSymbol = firstWord.toUpperCase();
    }

    saveRecentSearch(targetSymbol);
    setSuggestions([]);
    setIsFocused(false);
    navigate(`/dashboard/${targetSymbol}`);
  };

  const handleSelectSuggestion = (sym) => {
    saveRecentSearch(sym);
    setSuggestions([]);
    setIsFocused(false);
    navigate(`/dashboard/${sym}`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setQuery('');
    setSuggestions([]);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearRecents = (e) => {
    e.stopPropagation();
    setRecents([]);
    localStorage.removeItem('recent_searches');
  };

  const showRecentDropdown = isFocused && query.trim() === '' && recents.length > 0;

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSearchSubmit} className="relative flex items-center gap-3">
        <Input
          inputRef={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          leftIcon={<Search className="h-5 w-5 text-neutral-500" />}
          rightIcon={
            query ? (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 text-neutral-500 hover:text-white transition-colors rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null
          }
          className="flex-grow"
          inputClassName="py-4 text-sm sm:text-base rounded-full pl-12 pr-12 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
          autoFocus={true}
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="primary"
          className="rounded-full px-6 py-4 transition-all duration-300 shrink-0 font-bold"
          loading={isLoading}
          disabled={isLoading}
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

      {/* Autocomplete Suggestions & Recent Searches Popup */}
      <AnimatePresence mode="wait">
        {suggestions.length > 0 ? (
          <motion.div
            key="suggestions"
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
        ) : showRecentDropdown ? (
          <motion.div
            key="recents"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mt-2 z-40 rounded-2xl border border-white/10 bg-[#09090d]/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 border-b border-white/5 flex items-center justify-between">
              <span>Recent Searches</span>
              <button
                type="button"
                onClick={clearRecents}
                className="hover:text-white transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-wider text-cyan-400"
              >
                Clear All
              </button>
            </div>
            {recents.map((item) => (
              <button
                key={item.symbol}
                onClick={() => handleSelectSuggestion(item.symbol)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 text-left transition-colors cursor-pointer border-b border-white/5 last:border-0"
              >
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-neutral-500 mr-3.5 shrink-0" />
                  <span className="font-display font-bold text-sm text-white tracking-wide">{item.symbol}</span>
                  <span className="ml-3 text-xs text-neutral-400 font-semibold">{item.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-neutral-500" />
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
