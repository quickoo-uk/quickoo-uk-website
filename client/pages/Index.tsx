import { AboutSection } from "@/components/AboutSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";
import { FleetPreviewSection } from "@/components/FleetPreviewSection";
import { HeroSection } from "@/components/HeroSection";
import { LuxuryExperienceSection } from "@/components/LuxuryExperienceSection";
import { PersonalizationSection } from "@/components/PersonalizationSection";
import { ProfessionalismSection } from "@/components/ProfessionalismSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { SignaturePromiseSection } from "@/components/SignaturePromiseSection";
import { TravelByStyleBanner } from "@/components/TravelByStyleBanner";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhyQuickoSection } from "@/components/WhyQuickoSection";

import { FestivalOfferModal } from "@/components/FestivalOfferModal";

export default function Index() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50/50 to-white">
      <FestivalOfferModal />
      <HeroSection />
      {/* <AnimatedInfinityAccent /> */}

      <FleetPreviewSection />
      <WhyChooseSection />

      <ServicesOverviewSection />
      <ProfessionalismSection />
      <PersonalizationSection />
      <SignaturePromiseSection />
      <LuxuryExperienceSection />
      <WhyQuickoSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <AppDownloadSection />
      <TravelByStyleBanner />
    </div>
  );
}

