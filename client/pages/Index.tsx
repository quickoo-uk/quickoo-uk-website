import { AboutSection } from "@/components/AboutSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactMessageSection } from "@/components/ContactMessageSection";
import { FleetPreviewSection } from "@/components/FleetPreviewSection";
import { HeroSection } from "@/components/HeroSection";
import { LuxuryExperienceSection } from "@/components/LuxuryExperienceSection";
import { PrivateJetChauffeurSection } from "@/components/PrivateJetChauffeurSection";
import { ProfessionalismSection } from "@/components/ProfessionalismSection";
import { ServicesOverviewSection } from "@/components/ServicesOverviewSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhyQuickoSection } from "@/components/WhyQuickoSection";

import { FestivalOfferModal } from "@/components/FestivalOfferModal";

export default function Index() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-slate-50/50 to-white">
      <FestivalOfferModal />
      <HeroSection />
      <BookingSection />
      {/* <AnimatedInfinityAccent /> */}

      <FleetPreviewSection />
      <WhyChooseSection />

      <ServicesOverviewSection />
      <ProfessionalismSection />
      <PrivateJetChauffeurSection />
      <LuxuryExperienceSection />
      <WhyQuickoSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <AppDownloadSection />
      <section className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8f0] py-12 sm:py-20">
        <div className="section-container">
          <ContactMessageSection />
        </div>
      </section>
    </div>
  );
}

