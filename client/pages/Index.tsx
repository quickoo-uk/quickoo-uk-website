import { HeroSection } from "@/components/HeroSection";
import { AnimatedInfinityAccent } from "@/components/AnimatedInfinityAccent";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FleetPreviewSection } from "@/components/FleetPreviewSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";

export default function Index() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-purple-50/10 to-indigo-50/10">
      <HeroSection />
      {/* <AnimatedInfinityAccent /> */}
      <WhyChooseSection />
      <FleetPreviewSection />
      <ServicesOverviewSection />
      <AboutSection />
      <TestimonialsSection />
      <AppDownloadSection />
    </div>
  );
}
