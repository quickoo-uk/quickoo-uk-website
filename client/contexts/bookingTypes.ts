import type { GetQuotesResponse } from "@/lib/quotesApi";

export interface BookingData {
  bookingType: "oneway" | "hourly";
  fromLocation: string;
  toLocation: string | string[];
  flightNumber: string;
  date: Date;
  time: string;
  duration: string;

  /** Set after one-way quote API (home Search). */
  quoteResponse?: GetQuotesResponse;
  /** Pickup type sent to quote API (e.g. airport when flight number set). */
  quotePickupType?: string;
  /** Resolved route points from Places Autocomplete selection. */
  routePoints?: {
    from: { address: string; latitude: number; longitude: number };
    to: { address: string; latitude: number; longitude: number };
    stops: Array<{ address: string; latitude: number; longitude: number }>;
  };

  selectedCar?: {
    id: string;
    name: string;
    image: string;
    price: number;
    passengers: number;
    luggage: number;
    features: string[];
    description?: string;
    total_price?: number;
    price_breakdown?: { description: string; amount: number }[];
  };

  customerInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequests?: string;
  };

  paymentMethod?: string;
  termsAccepted?: boolean;
}
