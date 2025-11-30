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
    <div className="w-full bg-[radial-gradient(circle_at_top,_#ffffff,_#f3f6ff,_#fff6ed)]">
      <HeroSection />
      {/* <AnimatedInfinityAccent /> */}
      
      <FleetPreviewSection />
      <WhyChooseSection />
      <ServicesOverviewSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <AppDownloadSection />
    </div>
  );
}
