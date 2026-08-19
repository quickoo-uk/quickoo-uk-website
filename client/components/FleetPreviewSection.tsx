import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  Droplets,
  Luggage,
  MapPin,
  Users,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionChip } from "./SectionChip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  FLEET_VEHICLES,
  type FleetAmenityId,
  type FleetVehicle,
} from "@/data/fleetVehicles";

const FLEET_SERVICES = [
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    image: "/new_images/Corporate-Travel.png",
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
    image: "/new_images/Event-Chauffeur.png",
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
    image: "/new_images/Private-Jet-Chauffeur.png",
    description: (
      <>
        <p>
          Shopping, sightseeing, family travel, or a private excursion: a dedicated chauffeur, a luxury vehicle, and door-to-door service, without parking, traffic, or directions to manage.
        </p>
      </>
    ),
  },
];

const AMENITY_ICONS: Record<FleetAmenityId, LucideIcon> = {
  wifi: Wifi,
  gps: MapPin,
  water: Droplets,
  childSeat: Baby,
};

const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const VehicleImageWell = ({
  vehicle,
  className,
  imgClassName,
}: {
  vehicle: FleetVehicle;
  className?: string;
  imgClassName?: string;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl bg-white",
      className,
    )}
  >
    <img
      src={vehicle.image}
      alt={vehicle.name}
      loading="lazy"
      className={cn("h-full w-full object-contain object-center", imgClassName)}
    />
  </div>
);

const AmenityRow = ({
  vehicle,
  compact = false,
}: {
  vehicle: FleetVehicle;
  compact?: boolean;
}) => (
  <ul
    className={cn(
      "grid grid-cols-2 sm:grid-cols-4",
      compact ? "gap-3" : "gap-3 sm:gap-2",
    )}
  >
    {vehicle.amenities.map((amenity) => {
      const Icon = AMENITY_ICONS[amenity.id];
      return (
        <li key={amenity.id} className="flex flex-col items-center text-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf7e8] text-[#487307] sm:h-10 sm:w-10">
            <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </span>
          <span className="mt-2 max-w-[7.5rem] text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
            {amenity.label}
          </span>
        </li>
      );
    })}
  </ul>
);

export const FleetPreviewSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fdfaff] to-[#fff5ec] pb-6 pt-20 sm:py-32">
      <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-gold/15 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#a5c9ff]/20 blur-[140px]" />

      <div className="section-container relative">
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

        <div className="mb-32 flex max-w-7xl flex-col gap-24 px-4 sm:gap-32 sm:px-6 lg:px-8 mx-auto">
          {FLEET_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full lg:w-1/2"
              >
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#eaf7e8]/60 via-[#487307]/10 to-transparent blur-3xl" />
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-white/60 shadow-[0_30px_90px_rgba(15,23,42,0.15)] sm:aspect-[16/9] lg:aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full space-y-6 text-center lg:w-1/2 lg:text-left"
              >
                <h3 className="font-montserrat text-3xl font-semibold text-dark sm:text-4xl">
                  {service.title}
                </h3>
                <div className="mx-auto max-w-xl space-y-4 font-inter text-base text-gray-600 sm:text-lg lg:mx-0">
                  {service.description}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

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

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-6"
        >
          {FLEET_VEHICLES.map((vehicle, index) => (
            <motion.article
              key={vehicle.id}
              variants={cardItem}
              className={cn(
                "flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6",
                "sm:col-span-1 xl:col-span-2",
                index === 6 && "xl:col-start-2",
                index === 7 && "xl:col-start-4",
              )}
            >
              <h3 className="font-montserrat text-lg font-semibold tracking-tight text-dark sm:text-xl">
                {vehicle.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-500">{vehicle.classLabel}</p>

              <VehicleImageWell
                vehicle={vehicle}
                className="mt-4 h-36 sm:mt-5 sm:h-40"
                imgClassName="px-3 py-4 sm:px-4"
              />

              <div className="mt-5 sm:mt-6">
                <AmenityRow vehicle={vehicle} />
              </div>

              <button
                type="button"
                onClick={() => setSelectedVehicle(vehicle)}
                className="mt-5 inline-flex items-center justify-center gap-1.5 self-center pt-1 text-sm font-semibold text-[#487307] transition-colors hover:text-[#2a4204] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#487307] focus-visible:ring-offset-2 sm:mt-6"
              >
                View More
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={!!selectedVehicle}
        onOpenChange={(open) => {
          if (!open) setSelectedVehicle(null);
        }}
      >
        <DialogContent className="max-h-[90dvh] w-[calc(100vw-1.25rem)] max-w-2xl gap-0 overflow-hidden border-0 bg-white p-0 shadow-2xl sm:w-full sm:rounded-2xl [&>button]:right-3 [&>button]:top-3 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-1.5 [&>button]:text-dark [&>button]:opacity-100 [&>button]:shadow-md">
          {selectedVehicle && (
            <div className="flex max-h-[90dvh] flex-col overflow-y-auto">
              <VehicleImageWell
                vehicle={selectedVehicle}
                className="h-44 rounded-none sm:h-56 sm:rounded-t-2xl"
                imgClassName="px-6 py-6 sm:px-10 sm:py-8"
              />

              <div className="px-5 py-6 sm:px-8 sm:py-8">
                <DialogHeader className="mb-4 space-y-2 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#487307]">
                    {selectedVehicle.classLabel}
                  </p>
                  <DialogTitle className="font-montserrat text-2xl font-bold text-dark sm:text-3xl">
                    {selectedVehicle.name}
                  </DialogTitle>
                  <DialogDescription className="font-inter text-sm leading-relaxed text-slate-600 sm:text-base">
                    {selectedVehicle.summary}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-3 font-inter text-sm leading-relaxed text-slate-600 sm:text-base">
                  {selectedVehicle.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl bg-[#f6faf3] px-4 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf7e8] text-[#487307]">
                      <Users className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold text-dark">{selectedVehicle.guests}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-[#f6faf3] px-4 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf7e8] text-[#487307]">
                      <Luggage className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Luggage
                      </p>
                      <p className="text-sm font-semibold text-dark">{selectedVehicle.luggage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-[#f6faf3] px-4 py-3 sm:col-span-1">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf7e8] text-[#487307]">
                      <MapPin className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Best for
                      </p>
                      <p className="text-sm font-semibold text-dark">{selectedVehicle.bestFor}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-dark">Cabin highlights</p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedVehicle.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-2 text-sm text-slate-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-sm font-semibold text-dark">Onboard amenities</p>
                  <AmenityRow vehicle={selectedVehicle} compact />
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-dark">Suitable for</p>
                  <ul className="flex flex-wrap gap-2">
                    {selectedVehicle.suitableFor.map((occasion) => (
                      <li
                        key={occasion}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {occasion}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/book-now"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-6 py-3.5 font-montserrat text-sm font-semibold text-white shadow-lg shadow-[#2a4204]/25 transition-all hover:opacity-90 active:scale-[0.98] sm:py-4"
                >
                  Book this vehicle
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
