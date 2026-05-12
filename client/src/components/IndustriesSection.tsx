import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Heart,
  GraduationCap,
  Compass,
  ShoppingBag,
  Shield,
  Leaf,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Banking", desc: "Trust scores, fraud defense, inclusive credit", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Heart, name: "Healthcare", desc: "Tele-consults, triage, data that helps doctors", color: "from-red-500/20 to-red-600/10" },
  { icon: GraduationCap, name: "Education", desc: "Personalised learning, job-ready skills, mentors", color: "from-emerald-500/20 to-emerald-600/10" },
  { icon: Compass, name: "Tourism", desc: "Smart routes, local commerce, clean beaches", color: "from-cyan-500/20 to-cyan-600/10" },
  { icon: ShoppingBag, name: "Retail", desc: "Inventory AI, demand forecasting, customer insights", color: "from-violet-500/20 to-violet-600/10" },
  { icon: Shield, name: "Government", desc: "Transparent dashboards, citizen feedback loops", color: "from-amber-500/20 to-amber-600/10" },
  { icon: Leaf, name: "Agriculture", desc: "Crop intelligence, supply chain transparency", color: "from-green-500/20 to-green-600/10" },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 md:py-32 relative">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label inline-flex items-center gap-2 justify-center">
            <span className="w-6 h-px bg-blue-500" />
            02 — Industries
            <span className="w-6 h-px bg-blue-500" />
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sector-Specific Intelligence
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We deploy AI systems tailored to the operational realities of each industry.
            Not generic tools — purpose-built solutions.
          </p>
        </motion.div>

        {/* Industries Grid - asymmetric layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card rounded-xl p-6 text-center group hover:scale-[1.02] transition-transform duration-300 ${
                i === 6 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon size={26} className="text-white/80" />
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5">{industry.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
