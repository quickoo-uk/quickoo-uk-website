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
  <div className={cn("relative overflow-hidden rounded-xl bg-white", className)}>
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

type FleetVehicleGridProps = {
  bookHref?: string;
  bookLabel?: string;
  onBookClick?: () => void;
};

export const FleetVehicleGrid = ({
  bookHref = "/book-now",
  bookLabel = "Book this vehicle",
  onBookClick,
}: FleetVehicleGridProps) => {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);
  const isHashLink = bookHref.startsWith("#");

  return (
    <>
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
                  <div className="flex items-center gap-3 rounded-xl bg-[#f6faf3] px-4 py-3">
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

                {isHashLink ? (
                  <a
                    href={bookHref}
                    onClick={() => {
                      onBookClick?.();
                      setSelectedVehicle(null);
                    }}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-6 py-3.5 font-montserrat text-sm font-semibold text-white shadow-lg shadow-[#2a4204]/25 transition-all hover:opacity-90 active:scale-[0.98] sm:py-4"
                  >
                    {bookLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                ) : (
                  <Link
                    to={bookHref}
                    onClick={onBookClick}
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] px-6 py-3.5 font-montserrat text-sm font-semibold text-white shadow-lg shadow-[#2a4204]/25 transition-all hover:opacity-90 active:scale-[0.98] sm:py-4"
                  >
                    {bookLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
