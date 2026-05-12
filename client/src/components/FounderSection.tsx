import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Target, Quote } from "lucide-react";

const FOUNDER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/91092187/2hRNktwF7coCgx2Snqrtpt/founder-bg-HppR2ruCVYd38fnsf5CEQ5.webp";

export default function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={FOUNDER_BG} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/95 to-[#0A0A0F]/80" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column - header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="section-label inline-flex items-center gap-2" style={{ color: "#D4A843" }}>
              <span className="w-6 h-px bg-amber-500" />
              06 — The Founder
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
              Built from Operational Frustration
            </h2>

            {/* Founder attributes */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 glass-card rounded-lg px-4 py-3">
                <Briefcase size={16} className="text-amber-400 shrink-0" />
                <span className="text-sm text-gray-300">Banking Systems Background</span>
              </div>
              <div className="flex items-center gap-3 glass-card rounded-lg px-4 py-3">
                <MapPin size={16} className="text-amber-400 shrink-0" />
                <span className="text-sm text-gray-300">Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 glass-card rounded-lg px-4 py-3">
                <Target size={16} className="text-amber-400 shrink-0" />
                <span className="text-sm text-gray-300">Global Ambition</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Quote size={32} className="text-amber-500/20 mb-6" />
            <div className="space-y-6">
              <p className="text-gray-200 text-lg leading-relaxed">
                Human Essence Labs was born from years of watching broken workflows destroy
                productivity in banking systems. The founder saw firsthand how manual processes,
                disconnected tools, and poorly designed software cost institutions millions —
                not just in money, but in human potential.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                The mission became clear: redesign these broken workflows using AI that
                actually understands operations. Not AI that impresses in demos, but AI
                that works reliably at 2 AM when no one is watching.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Rooted in Kerala, built for the world. We carry the discipline of banking
                systems engineering, the empathy of human-centered design, and the ambition
                to make AI work for everyone — not just those who can afford it.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-gray-500 font-[var(--font-mono)] italic">
                "We don't build AI to replace people. We build AI to give people their time back."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
