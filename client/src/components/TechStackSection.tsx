import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "OpenAI", category: "LLM", initial: "O", gradient: "from-green-500/20 to-green-600/10" },
  { name: "Claude", category: "LLM", initial: "C", gradient: "from-orange-500/20 to-orange-600/10" },
  { name: "Gemini", category: "LLM", initial: "G", gradient: "from-blue-500/20 to-blue-600/10" },
  { name: "WhatsApp API", category: "Integration", initial: "W", gradient: "from-emerald-500/20 to-emerald-600/10" },
  { name: "Google Cloud", category: "Infrastructure", initial: "GC", gradient: "from-red-500/20 to-yellow-600/10" },
  { name: "AWS", category: "Infrastructure", initial: "A", gradient: "from-amber-500/20 to-amber-600/10" },
  { name: "Razorpay", category: "Payments", initial: "R", gradient: "from-blue-500/20 to-indigo-600/10" },
  { name: "n8n", category: "Automation", initial: "n8n", gradient: "from-pink-500/20 to-pink-600/10" },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-blue-500" />
            07 — Tech Stack
            <span className="w-6 h-px bg-blue-500" />
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Powered By Industry Leaders
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We integrate the best tools and platforms to build reliable, scalable AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-xl p-6 text-center group hover:border-blue-500/20 hover:scale-[1.03] transition-all duration-300"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-sm font-bold text-white/80 font-[var(--font-display)]">
                  {tech.initial}
                </span>
              </div>
              <h3 className="text-white font-medium text-sm">{tech.name}</h3>
              <span className="text-[10px] font-[var(--font-mono)] text-gray-500 uppercase mt-1 block tracking-wider">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
