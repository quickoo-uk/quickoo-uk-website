import { HeroSection } from "@/components/HeroSection";
import { AnimatedInfinityAccent } from "@/components/AnimatedInfinityAccent";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { TravelByStyleBanner } from "@/components/TravelByStyleBanner";
import { FleetPreviewSection } from "@/components/FleetPreviewSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { ProfessionalismSection } from "@/components/ProfessionalismSection";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import { SignaturePromiseSection } from "@/components/SignaturePromiseSection";
import { LuxuryExperienceSection } from "@/components/LuxuryExperienceSection";
import { WhyQuickoSection } from "@/components/WhyQuickoSection";
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
      <TravelByStyleBanner />
      <ServicesOverviewSection />
      <ProfessionalismSection />
      <PersonalizationSection />
      <SignaturePromiseSection />
      <LuxuryExperienceSection />
      <WhyQuickoSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <AppDownloadSection />
    </div>
  );
}

