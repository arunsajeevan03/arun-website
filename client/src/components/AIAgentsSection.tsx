import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, MessageCircle, Stethoscope, School, Zap, Mic, ArrowUpRight } from "lucide-react";

const agents = [
  {
    icon: MessageCircle,
    title: "WhatsApp Ordering",
    description: "Customers place orders, track deliveries, and get support — all through WhatsApp. No app downloads needed.",
    metric: "10K+ orders/month",
  },
  {
    icon: Stethoscope,
    title: "Hospital Reception AI",
    description: "Handles appointment booking, patient queries, doctor availability, and emergency triage 24/7.",
    metric: "98% resolution rate",
  },
  {
    icon: School,
    title: "School Inquiry AI",
    description: "Manages admission inquiries, fee details, schedule information, and parent communication automatically.",
    metric: "500+ inquiries/day",
  },
  {
    icon: Zap,
    title: "Customer Engagement",
    description: "AI-powered engagement that qualifies leads, nurtures prospects, and converts at scale.",
    metric: "3x conversion lift",
  },
  {
    icon: Mic,
    title: "Voice AI Systems",
    description: "Natural-sounding voice agents for outbound calls, surveys, reminders, and customer follow-ups.",
    metric: "Human-like quality",
  },
];

export default function AIAgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agents" className="py-24 md:py-32 relative">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label inline-flex items-center gap-2">
                <span className="w-6 h-px bg-blue-500" />
                03 — AI Agents
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Agents That Actually{" "}
                <span className="gradient-text">Perform</span>
              </h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                We help businesses deploy AI agents that actually perform operational
                tasks — not chatbots that just answer questions, but systems that
                take action, make decisions, and drive outcomes.
              </p>
              <div className="mt-8 glass-card rounded-xl p-5 inline-flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Bot size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Autonomous Agents</p>
                  <p className="text-xs text-gray-500 font-[var(--font-mono)]">
                    Reliable • Scalable • Human-Supervised
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Agent Cards */}
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 flex gap-5 group hover:border-blue-500/20"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <agent.icon size={20} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold text-base">{agent.title}</h3>
                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors mt-1 shrink-0" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{agent.description}</p>
                  <span className="text-[11px] font-[var(--font-mono)] text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    {agent.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
