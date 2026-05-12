import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Atom, Rocket, Building, Network } from "lucide-react";

const RESEARCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/91092187/2hRNktwF7coCgx2Snqrtpt/research-labs-DSQAczMBGy2uNpbmtsckXp.webp";

const researchAreas = [
  {
    icon: Atom,
    title: "AGI Research",
    description: "Long-term research into artificial general intelligence architectures, with a focus on safety and alignment.",
    phase: "Exploratory",
    number: "R-01",
  },
  {
    icon: Rocket,
    title: "Aerospace Systems",
    description: "AI-driven systems for satellite data processing, autonomous navigation, and space operations optimization.",
    phase: "Conceptual",
    number: "R-02",
  },
  {
    icon: Building,
    title: "Civic Intelligence",
    description: "AI platforms for transparent governance, public service optimization, and citizen engagement at scale.",
    phase: "Prototyping",
    number: "R-03",
  },
  {
    icon: Network,
    title: "Future Infrastructure",
    description: "Research into AI-powered infrastructure management for smart cities, energy grids, and transportation networks.",
    phase: "Conceptual",
    number: "R-04",
  },
];

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0">
        <img src={RESEARCH_IMG} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/95 to-[#0A0A0F]/80" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label inline-flex items-center gap-2" style={{ color: "#D4A843" }}>
            <span className="w-6 h-px bg-amber-500" />
            05 — Future Research Labs
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Beyond the Horizon
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            Separate from our core business, these experimental initiatives explore
            the boundaries of what AI systems can achieve for humanity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-xl p-8 group hover:border-amber-500/20 relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute top-4 right-6 text-xs font-[var(--font-mono)] text-amber-500/20">
                {area.number}
              </span>

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors duration-300">
                  <area.icon size={24} className="text-amber-400" />
                </div>
                <span className="text-[10px] font-[var(--font-mono)] text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {area.phase}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
