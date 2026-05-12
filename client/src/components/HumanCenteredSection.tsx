import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Eye, Users, Scale, Fingerprint } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Trust-First AI",
    description: "Every system we build starts with trust as the foundation. No black boxes, no hidden agendas.",
    number: "01",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Our AI explains its decisions in plain language. Regulators, auditors, and users can all understand why.",
    number: "02",
  },
  {
    icon: Users,
    title: "Human Oversight",
    description: "AI augments human decision-making, never replaces it. Critical decisions always have a human in the loop.",
    number: "03",
  },
  {
    icon: Scale,
    title: "Ethical Deployment",
    description: "We refuse to deploy AI that could harm communities. Every project passes our internal ethics review.",
    number: "04",
  },
  {
    icon: Fingerprint,
    title: "Real-World Usability",
    description: "Systems designed for the people who actually use them — not just the people who buy them.",
    number: "05",
  },
];

export default function HumanCenteredSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-blue-500" />
            04 — Philosophy
            <span className="w-6 h-px bg-blue-500" />
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Why Human-Centered AI Matters
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            In a world racing to deploy AI, we choose to build AI that serves humans —
            not the other way around.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card rounded-xl p-8 relative overflow-hidden group ${
                i >= 3 ? "lg:col-span-1" : ""
              } ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Background number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-white/[0.03] font-[var(--font-display)]">
                {item.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center mb-5 group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-all duration-300">
                  <item.icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
