import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft, Cpu } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#030306] bg-grid-pattern flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] h-[400px] w-[600px] rounded-full bg-cyan-500/5 opacity-30 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 15 }}
        className="max-w-md w-full text-center space-y-6 z-10"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-950/20 text-cyan-400 mx-auto">
          <HelpCircle className="h-8 w-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h1 className="font-display font-extrabold text-7xl text-white tracking-tighter bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="font-display font-bold text-xl text-white tracking-tight">
            Research Page Not Found
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            The quantitative data node or ticker view you are trying to access does not exist or has been relocated in our system index.
          </p>
        </div>

        <GlassCard className="p-4 border border-white/5">
          <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-2 tracking-wider">
            Alternative Terminals
          </span>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-cyan-400">
            <Link to="/" className="hover:underline">Home Search</Link>
            <span className="text-neutral-700">|</span>
            <Link to="/dashboard/AAPL" className="hover:underline">AAPL Terminal</Link>
            <span className="text-neutral-700">|</span>
            <Link to="/dashboard/MSFT" className="hover:underline">MSFT Terminal</Link>
          </div>
        </GlassCard>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 rounded-xl bg-white hover:bg-neutral-200 px-6 py-2.5 text-xs font-bold text-black transition-all cursor-pointer shadow-md hover:scale-[1.02]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Core terminal</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
