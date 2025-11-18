import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FleetPreviewSection } from "@/components/FleetPreviewSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyChooseSection />
      <FleetPreviewSection />
      <ServicesOverviewSection />
      <AboutSection />
      <TestimonialsSection />
      <AppDownloadSection />
    </div>
  );
}
