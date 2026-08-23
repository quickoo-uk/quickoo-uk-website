import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";
import { FleetVehicleGrid } from "./FleetVehicleGrid";

const FLEET_SERVICES = [
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    image: "/banner_images/image-4.png",
    description: (
      <>
        <p>
          Corporate travel requires reliability and professionalism. Our corporate chauffeur service is designed for executives, business teams, and visiting clients who need punctual, discreet transport throughout the UK.
        </p>
      </>
    ),
  },
  {
    id: "event-chauffeur",
    title: "Event chauffeur Services",
    image: "/banner_images/image-3.png",
    description: (
      <>
        <p>
          Arrive with composure at sporting events, award evenings, concerts, private functions, or VIP gatherings.
        </p>
        <p className="mt-2">
          Our event chauffeur service is prepared to create a refined, coordinated travel experience for the occasion.
        </p>
      </>
    ),
  },
  {
    id: "private-chauffeur",
    title: "Private Chauffeur Service",
    image: "/banner_images/image-2.png",
    description: (
      <>
        <p>
          Shopping, sightseeing, family travel, or a private excursion: a dedicated chauffeur, a luxury vehicle, and door-to-door service, without parking, traffic, or directions to manage.
        </p>
      </>
    ),
  },
];

export const FleetPreviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec] pb-8 pt-10 sm:pb-12 sm:pt-16">
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-4 text-center sm:mb-16"
        >
          <SectionChip title="Our Fleet" />
          <h2 className="font-montserrat text-3xl font-semibold text-dark sm:text-4xl md:text-5xl">
            Choose the Perfect Vehicle{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              for Your Journey
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-inter text-base text-gray-600 sm:text-lg">
            From an executive saloon to a luxury minibus, the fleet is maintained to the same standard of comfort and presentation.
          </p>
        </motion.div>

        <div className="mb-20 sm:mb-28">
          <FleetVehicleGrid />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 space-y-4 text-center"
        >
          <SectionChip title="Flagship Fleet" />
          <h2 className="font-montserrat text-3xl font-semibold text-dark sm:text-4xl md:text-5xl">
            Luxury Chauffeur Service for{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              Corporate Travel, Luxury Events, and Runway Transfers
            </span>
          </h2>
          <p className="mx-auto max-w-3xl font-inter text-base text-gray-600 sm:text-lg">
            Travel in Style. Arrive with Distinction. Every vehicle is prepared for punctuality, comfort, and discretion, whether you need an executive saloon or a family-sized MPV.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-3 lg:px-8">
          {FLEET_SERVICES.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-3 p-6 text-left">
                <h3 className="font-montserrat text-xl font-semibold text-dark sm:text-2xl">
                  {service.title}
                </h3>
                <div className="space-y-3 font-inter text-sm text-gray-600 sm:text-base">
                  {service.description}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
