import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050507] py-12 text-neutral-500">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/10 text-cyan-400">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="font-display font-semibold tracking-tight text-white">
                Aegis<span className="text-cyan-400">Invest</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Next-generation generative AI analytics for institutional and retail investment research.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Market Coverage</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">S&P 500 Analytics</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Nasdaq 100 Insights</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Crypto Research</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Macro Indexes</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">API Access</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Security Center</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">System Status</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Pricing Model</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">SEC Disclosures</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Investment Disclaimer</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} AegisInvest LLC. All rights reserved.</p>
          <p className="max-w-md text-center sm:text-right text-[10px] leading-normal text-neutral-600">
            Disclaimer: Not financial advice. AegisInvest is an AI research assistant. Perform your own due diligence before executing trades.
          </p>
        </div>
      </div>
    </footer>
  );
}
