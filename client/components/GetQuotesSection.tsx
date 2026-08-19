import { useRef, useState, type FormEvent } from "react";
import { Loader2, Luggage, Users } from "lucide-react";
import PlaceSearchInput from "@/components/PlaceSearchInput";
import { SectionChip } from "@/components/SectionChip";
import { displayPriceBreakdownDescription } from "@/lib/priceBreakdownDisplay";
import { fetchGetQuotes, type VehicleQuote } from "@/lib/quotesApi";
import { cn } from "@/lib/utils";

type PickupKind = "standard" | "airport";
type PlaceCoords = { latitude: number; longitude: number };

function formatGbp(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(amount);
}

type GetQuotesSectionProps = {
  id?: string;
  variant?: "site" | "landing";
  onPricesShown?: () => void;
};

export const GetQuotesSection = ({
  id = "get-quotes",
  variant = "site",
  onPricesShown,
}: GetQuotesSectionProps) => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [pickupType, setPickupType] = useState<PickupKind>("standard");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [distanceMiles, setDistanceMiles] = useState<number | null>(null);
  const [quotes, setQuotes] = useState<VehicleQuote[] | null>(null);

  const fromCoordsRef = useRef<PlaceCoords | null>(null);
  const toCoordsRef = useRef<PlaceCoords | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!fromAddress.trim() || !toAddress.trim()) {
      setError("Enter both a pickup and a drop-off location.");
      return;
    }
    if (!fromCoordsRef.current || !toCoordsRef.current) {
      setError("Choose both locations from the Google suggestions list so we can price the route.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetchGetQuotes({
        from: fromCoordsRef.current,
        to: toCoordsRef.current,
        pickup_type: pickupType,
      });
      const priced = response.vehicle_quotes.filter((quote) => quote.is_active !== false);
      setDistanceMiles(response.distance_miles);
      setQuotes(priced);
      if (priced.length > 0) onPricesShown?.();
    } catch (err) {
      setQuotes(null);
      setDistanceMiles(null);
      setError(err instanceof Error ? err.message : "Unable to get prices for this route.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-24",
        variant === "landing"
          ? "bg-[#f7faf3] py-16 sm:py-20"
          : "bg-gradient-to-b from-white via-[#f7faf3] to-white py-12 sm:py-20",
      )}
    >
      <div className={cn(variant === "landing" ? "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" : "section-container")}>
        <div className="mb-10 space-y-3 text-center sm:mb-12">
          {variant === "site" && <SectionChip title="Get Quotes" />}
          <h2 className="font-montserrat text-3xl font-semibold text-dark sm:text-4xl md:text-5xl">
            Check your journey{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#2a4204] to-[#487307] bg-clip-text text-transparent">
              price
            </span>
          </h2>
          <p className="mx-auto max-w-2xl font-inter text-base text-gray-600 sm:text-lg">
            Luxury Chauffeur Service. Enter pickup and drop-off to see vehicle prices only. This is not a booking.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl overflow-visible rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_36px_rgba(15,23,42,0.06)] sm:p-7"
        >
          <div className="grid gap-4 overflow-visible sm:grid-cols-2">
            <label className="relative z-10 block text-left">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Pickup
              </span>
              <PlaceSearchInput
                value={fromAddress}
                placeholder="Enter pickup location"
                onValueChange={(next) => {
                  fromCoordsRef.current = null;
                  setFromAddress(next);
                }}
                onPlaceSelected={(place) => {
                  fromCoordsRef.current = {
                    latitude: place.latitude,
                    longitude: place.longitude,
                  };
                  setFromAddress(place.formattedAddress);
                  if (place.isAirport) setPickupType("airport");
                }}
              />
            </label>

            <label className="relative z-10 block text-left">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Drop-off
              </span>
              <PlaceSearchInput
                value={toAddress}
                placeholder="Enter drop-off location"
                onValueChange={(next) => {
                  toCoordsRef.current = null;
                  setToAddress(next);
                }}
                onPlaceSelected={(place) => {
                  toCoordsRef.current = {
                    latitude: place.latitude,
                    longitude: place.longitude,
                  };
                  setToAddress(place.formattedAddress);
                }}
              />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Pickup type
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { id: "standard", label: "Standard" },
                  { id: "airport", label: "Airport" },
                ] as const
              ).map((option) => (
                <label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition",
                    pickupType === option.id
                      ? "border-[#487307] bg-[#eaf7e8] text-[#2a4204]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
                  )}
                >
                  <input
                    type="radio"
                    name="get-quotes-pickup-type"
                    value={option.id}
                    checked={pickupType === option.id}
                    onChange={() => setPickupType(option.id)}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          {error && (
            <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="get-quotes-submit"
            style={{ backgroundColor: "#2a4204", color: "#ffffff" }}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Checking prices
              </>
            ) : (
              "Show prices"
            )}
          </button>
        </form>

        {quotes && (
          <div className="mx-auto mt-10 max-w-5xl">
            {distanceMiles != null && distanceMiles > 0 && (
              <p className="mb-5 text-center text-sm font-medium text-slate-600">
                Route distance: {distanceMiles.toFixed(1)} miles
              </p>
            )}

            {quotes.length === 0 ? (
              <p className="rounded-2xl border border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-600">
                No prices are available for this route yet. Try a different pickup type or location.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {quotes.map((quote) => (
                  <li
                    key={quote.vehicle_class_id}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-50">
                        <img
                          src={quote.vehicle_class_image || "/fleet/BusinessClass.png"}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-montserrat text-lg font-semibold text-dark">
                          {quote.class_name}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <Users className="h-3.5 w-3.5 text-[#487307]" aria-hidden />
                            {quote.allow_passengers} guests
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Luggage className="h-3.5 w-3.5 text-[#487307]" aria-hidden />
                            {quote.allow_luggage} bags
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 font-montserrat text-2xl font-bold text-[#2a4204]">
                      {formatGbp(quote.total_price)}
                    </p>

                    {quote.price_breakdown.length > 0 && (
                      <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                        {quote.price_breakdown.map((row) => (
                          <li
                            key={`${row.description}-${row.amount}`}
                            className="flex items-center justify-between text-xs text-slate-600"
                          >
                            <span>{displayPriceBreakdownDescription(row.description)}</span>
                            <span className="font-semibold text-slate-800">{formatGbp(row.amount)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
