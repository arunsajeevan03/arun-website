import Navbar from "@/components/Navbar";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhatWeBuild from "@/components/WhatWeBuild";
import IndustriesSection from "@/components/IndustriesSection";
import AIAgentsSection from "@/components/AIAgentsSection";
import HumanCenteredSection from "@/components/HumanCenteredSection";
import ResearchSection from "@/components/ResearchSection";
import FounderSection from "@/components/FounderSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden relative">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <StatsBar />
        <SectionDivider accent />
        <WhatWeBuild />
        <SectionDivider />
        <IndustriesSection />
        <SectionDivider accent />
        <AIAgentsSection />
        <SectionDivider />
        <HumanCenteredSection />
        <SectionDivider accent />
        <ResearchSection />
        <SectionDivider />
        <FounderSection />
        <SectionDivider />
        <TechStackSection />
        <SectionDivider accent />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
