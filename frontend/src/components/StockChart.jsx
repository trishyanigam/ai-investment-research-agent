import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export default function StockChart({ data = [], ticker = 'AAPL' }) {
  const [timeframe, setTimeframe] = useState('1M');

  // Let's generate dynamic noise based on selected timeframe for premium interactivity simulation
  const getSimulatedData = () => {
    if (timeframe === '1D') {
      return [
        { date: '09:30 AM', price: data[data.length - 1]?.price * 0.99 },
        { date: '11:00 AM', price: data[data.length - 1]?.price * 0.995 },
        { date: '01:00 PM', price: data[data.length - 1]?.price * 0.998 },
        { date: '02:30 PM', price: data[data.length - 1]?.price * 1.002 },
        { date: '04:00 PM', price: data[data.length - 1]?.price }
      ];
    }
    if (timeframe === '1W') {
      return data.slice(-5).map((d, i) => ({
        date: d.date,
        price: d.price * (0.985 + i * 0.004)
      }));
    }
    if (timeframe === '1Y') {
      // Scale historical data down or up to show yearly view
      const basePrice = data[0]?.price || 150;
      return [
        { date: 'Q3 25', price: basePrice * 0.8 },
        { date: 'Q4 25', price: basePrice * 0.9 },
        { date: 'Q1 26', price: basePrice * 1.05 },
        { date: 'Q2 26', price: data[data.length - 1]?.price }
      ];
    }
    // Default 1M
    return data;
  };

  const chartPoints = getSimulatedData();

  // Custom tooltips with Glassmorphism matching the Stripe/Vercel dashboard theme
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-3 text-xs shadow-xl border border-white/10">
          <p className="text-neutral-400 font-medium mb-1">{payload[0].payload.date}</p>
          <p className="text-cyan-400 font-bold font-display text-sm">
            ${payload[0].value.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Header section with Ticker & Period Buttons */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Historical Price Trend</span>
          <h3 className="font-display font-bold text-lg text-white">{ticker} Performance</h3>
        </div>
        <div className="flex space-x-1.5 rounded-lg bg-neutral-900/50 p-1 border border-white/5">
          {['1D', '1W', '1M', '1Y'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                timeframe === t
                  ? 'bg-cyan-500/25 text-cyan-400 shadow-sm border border-cyan-500/30'
                  : 'text-neutral-400 hover:text-white border border-transparent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Chart container */}
      <div className="flex-1 w-full min-h-[260px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartPoints} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#6b7280"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#6b7280"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={['auto', 'auto']}
              dx={-5}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#06b6d4"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
