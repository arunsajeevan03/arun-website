import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  MessageSquare,
  Headphones,
  Building2,
  Target,
  Users,
  LayoutDashboard,
  Brain,
} from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "AI Voice Calling Agents",
    description: "Intelligent voice systems that handle inbound and outbound calls with natural conversation flow.",
    status: "deployed",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI Assistants",
    description: "Enterprise WhatsApp bots that manage orders, queries, and customer engagement at scale.",
    status: "deployed",
  },
  {
    icon: Headphones,
    title: "AI Receptionists",
    description: "24/7 intelligent reception systems for hospitals, schools, and corporate offices.",
    status: "deployed",
  },
  {
    icon: Building2,
    title: "Banking Automation",
    description: "Trust-first AI systems for loan processing, fraud detection, and customer onboarding.",
    status: "active",
  },
  {
    icon: Target,
    title: "AI Lead Qualification",
    description: "Automated lead scoring and qualification pipelines that integrate with your CRM.",
    status: "active",
  },
  {
    icon: Users,
    title: "AI Customer Support",
    description: "Multi-channel support agents with human escalation and sentiment analysis.",
    status: "deployed",
  },
  {
    icon: LayoutDashboard,
    title: "AI Workflow Dashboards",
    description: "Real-time operational dashboards with AI-powered insights and anomaly detection.",
    status: "active",
  },
  {
    icon: Brain,
    title: "Explainable AI (XAI)",
    description: "Transparent AI decision systems with full audit trails for regulated industries.",
    status: "research",
  },
];

const statusColors: Record<string, string> = {
  deployed: "bg-green-500",
  active: "bg-blue-500",
  research: "bg-amber-500",
};

const statusLabels: Record<string, string> = {
  deployed: "Deployed",
  active: "Active",
  research: "Research",
};

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="py-24 md:py-32 relative">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label inline-flex items-center gap-2">
              <span className="w-6 h-px bg-blue-500" />
              01 — What We Build
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Enterprise AI Systems
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pt-10"
          >
            <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
              Deployable, scalable AI solutions built for real operational environments.
              Each system is designed for production from day one.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group"
            >
              <div className="glass-card rounded-xl p-6 h-full relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:to-blue-600/5 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      <item.icon size={20} className="text-blue-400" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusColors[item.status]} status-pulse`} />
                      <span className="text-[10px] font-[var(--font-mono)] text-gray-500 uppercase">
                        {statusLabels[item.status]}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
