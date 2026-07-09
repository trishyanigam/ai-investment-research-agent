import { motion } from 'framer-motion';
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  ShieldAlert,
  Award,
  Database,
  Activity,
  Cpu
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SearchBar from '../components/SearchBar';

export default function Home() {

  const revealVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const features = [
    {
      icon: <BarChart3 className="h-5 w-5 text-cyan-400" />,
      title: 'Financial Disclosures',
      desc: 'Decodes quarterly SEC filings, capital expenditure cycles, and balance sheet metrics.'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-purple-400" />,
      title: 'NLP Sentiment Matrix',
      desc: 'Computes positive and negative sentiment distributions across live news wires.'
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-rose-400" />,
      title: 'Risk Profile Scans',
      desc: 'Weighs operational overhead against pricing pressures, rate risks, and supply chains.'
    },
    {
      icon: <Award className="h-5 w-5 text-emerald-400" />,
      title: 'Confidence Rating',
      desc: 'Synthesizes transparent Buy/Hold/Sell vectors backed by probability models.'
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-[#030306] bg-grid-pattern overflow-hidden flex flex-col justify-between">
      {/* Background Radial Glow */}
      <div className="absolute top-[-15%] left-[50%] -translate-x-[50%] h-[600px] w-[1000px] rounded-full bg-cyan-500/10 opacity-30 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-15%] right-[10%] h-[500px] w-[800px] rounded-full bg-purple-500/5 opacity-25 blur-[120px] pointer-events-none" />

      {/* Hero Content Section */}
      <main className="flex-grow z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 space-y-36 md:space-y-44">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full pt-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/25 bg-cyan-950/20 px-4 py-1.5 text-xs font-semibold text-cyan-400 tracking-wide drop-shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Next-Generation Quant Intelligence</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] max-w-4xl">
              Institutional Research{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Decoded by AI
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-neutral-400 text-base sm:text-lg leading-relaxed font-normal tracking-wide">
              Analyze filing logs, news sentiment distributions, and financial metrics. Get clean, auditable decision timelines for any public security.
            </p>
          </motion.div>

          {/* Reusable Search Bar Component */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full max-w-2xl mt-12 relative text-left"
          >
            <SearchBar
              placeholder="Search ticker or company name (e.g. AAPL, MSFT, NVDA)..."
              size="lg"
            />
          </motion.div>
        </section>

        {/* FEATURE SCANNERS GRID */}
        <motion.section
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <div className="text-center">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">Core Analytics Capabilities</span>
            <h2 className="font-display text-3xl font-extrabold text-white mt-2 tracking-tight">Valuation Modules</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <GlassCard
                key={idx}
                hoverEffect={true}
                className="flex flex-col items-start text-left space-y-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 border border-white/5">
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white tracking-wide">{feat.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{feat.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-purple-400">The Technology</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Decentralized Financial Insights, Unified in One Agent
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-normal tracking-wide">
              AegisInvest is a high-fidelity investment research system engineered to analyze massive multi-modal data streams in under 2 seconds. By scraping regulatory filings, assessing live news sentiment, and mapping target asset performance against macro constraints, AegisInvest models absolute fair value yields.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed font-normal tracking-wide">
              Our cognitive framework reconciles quarterly financial balances directly against NLP sentiment arrays, generating clear, transparent, and auditable search timelines.
            </p>
            
            {/* Quick Metrics grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              <div>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-cyan-400 text-glow-cyan">142B+</h4>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mt-1">Data Nodes Scanned</p>
              </div>
              <div>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-purple-400 text-glow-purple">&lt;1.8s</h4>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mt-1">Median Response</p>
              </div>
              <div>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-emerald-400">99.8%</h4>
                <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mt-1">SEC Parsing Accuracy</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-purple-500/5 blur-2xl pointer-events-none" />
            <GlassCard className="p-8 relative overflow-hidden" glowColor="rgba(139, 92, 246, 0.01)">
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                <Cpu className="h-5 w-5 text-cyan-400" />
                Aegis Cognitive Engine
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "Filings Ingestion Pipeline", desc: "Automated SEC Form 10-K & 10-Q text vectorization." },
                  { title: "Sentiment Weight Classifier", desc: "NLP transformer node processing financial press feeds." },
                  { title: "Macro Risk Stress Test Engine", desc: "Solvency mapping against inflation & global hardware shipping data." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-950/50 text-cyan-400 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-wide">{step.title}</h4>
                      <p className="text-[10px] text-neutral-500 leading-normal mt-0.5 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        {/* WHY CHOOSE US SECTION */}
        <motion.section
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-14"
        >
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">Why AegisInvest</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Institutional Precision
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed font-normal">
              We replace opaque recommendations with auditable, step-by-step cognitive traces. Get the full picture before committing capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="h-5 w-5 text-cyan-400" />,
                title: "Complete Data Synthesis",
                desc: "No single-source analysis. We reconcile quarterly numbers directly against NLP sentiment arrays and real-time ticker data."
              },
              {
                icon: <Activity className="h-5 w-5 text-purple-400" />,
                title: "Auditable Thought Timeline",
                desc: "You witness the exact computational sequence. Watch how the agent isolates margins, aggregates feeds, and calculates yields."
              },
              {
                icon: <ShieldAlert className="h-5 w-5 text-rose-400" />,
                title: "Advanced Risk Stress-Testing",
                desc: "We weigh each asset against macro variables like rising capital costs, supply constraints, and regulatory headwind probabilities."
              }
            ].map((card, idx) => (
              <GlassCard
                key={idx}
                hoverEffect={true}
                className="flex flex-col text-left space-y-4 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-white/5">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white tracking-wide">{card.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
