import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Cpu className="h-5 w-5 transition-transform duration-500 group-hover:rotate-90" />
            <div className="absolute inset-0 rounded-lg bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
          <span className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Aegis<span className="text-cyan-400 font-medium">Invest</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors duration-200 ${
              location.pathname === '/' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard/AAPL"
            className={`transition-colors duration-200 ${
              location.pathname.startsWith('/dashboard') ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Terminal Dashboard
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <span>Research Docs</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </nav>

        {/* Right CTA / Action Button */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          <Link
            to="/dashboard/AAPL"
            className="relative inline-flex items-center justify-center rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-black transition-all hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Launch Terminal
          </Link>
        </div>
      </div>
    </header>
  );
}
