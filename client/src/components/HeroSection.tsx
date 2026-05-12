import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/91092187/2hRNktwF7coCgx2Snqrtpt/hero-bg-mBQrTpp6AtsRjTi2MjvuHk.webp";
const WORKFLOW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/91092187/2hRNktwF7coCgx2Snqrtpt/ai-workflow-AiHYHwMoEW2fKsJ5ECGTnG.webp";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.06 },
  }),
};

export default function HeroSection() {
  const headlineWords = ["AI", "Systems", "for"];
  const headlineWords2 = ["Real-World"];
  const headlineWords3 = ["Operations."];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        {/* Scan lines overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/30 via-[#0A0A0F]/50 to-[#0A0A0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-blue-500" />
                Enterprise AI Systems
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {headlineWords2.map((word, i) => (
                <motion.span
                  key={`g-${i}`}
                  custom={i + 3}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em] gradient-text"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {headlineWords3.map((word, i) => (
                <motion.span
                  key={`o-${i}`}
                  custom={i + 4}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              Human Essence Labs builds enterprise-grade AI agents, automation
              systems, and trust-first platforms for finance, healthcare,
              education, governance, and business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 text-sm group"
              >
                Book an AI Strategy Call
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-medium rounded-lg transition-all duration-200 text-sm"
              >
                <Play size={14} />
                Explore AI Solutions
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 flex items-center gap-6 text-xs text-gray-500 font-[var(--font-mono)]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
                Systems Online
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 status-pulse" />
                Enterprise Ready
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 status-pulse" />
                Kerala, India
              </div>
            </motion.div>
          </div>

          {/* Right: Workflow Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-blue-500/5 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-3 overflow-hidden">
                <img
                  src={WORKFLOW_IMG}
                  alt="AI Workflow: Customer → WhatsApp → AI Agent → Dashboard → Human Escalation → Payment"
                  className="w-full h-auto rounded-xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121A]/40 to-transparent rounded-2xl" />
              </div>
              {/* Floating labels */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 status-pulse" />
                <span className="text-xs font-[var(--font-mono)] text-gray-300">
                  Live Workflow
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -top-3 -right-3 glass-card rounded-lg px-3 py-1.5 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-[var(--font-mono)] text-gray-400">
                  v2.4.1
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
