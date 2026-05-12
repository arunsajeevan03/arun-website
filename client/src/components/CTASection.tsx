import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
      {/* Multiple gradient orbs for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[100px]" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label inline-flex items-center gap-2 justify-center mb-6">
            <span className="w-6 h-px bg-blue-500" />
            Ready to Transform
            <span className="w-6 h-px bg-blue-500" />
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            The Future Will Be Run by{" "}
            <span className="gradient-text">Intelligent Systems.</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            Whether you're a bank, hospital, school, or startup — if your operations
            need intelligence, we should talk.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:hello@humanessencelabs.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/25 text-base group"
            >
              Let's Build Yours
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@humanessencelabs.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 hover:border-white/25 hover:bg-white/5 text-white font-medium rounded-xl transition-all duration-200 text-base"
            >
              Schedule a Demo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm text-gray-500 font-[var(--font-mono)]"
          >
            hello@humanessencelabs.com
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
