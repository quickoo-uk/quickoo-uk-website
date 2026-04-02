import type { BookingData } from "@/contexts/BookingContext";

/**
 * Request body for POST /api/v1/orders (same-origin: POST /api/orders).
 * Field names match backend OpenAPI (including transcation_id spelling).
 */
export type CreateOrderRoutePoint = {
  address: string;
  latitude: number;
  longitude: number;
};

export type CreateOrderRequestBody = {
  from: CreateOrderRoutePoint;
  to: CreateOrderRoutePoint;
  stops: CreateOrderRoutePoint[];
  flight_number: string;
  pickup_date: string;
  pickup_time: string;
  vehicle_class: string;
  first_name: string;
  last_name: string;
  email: string;
  phonenumber: string;
  special_request: string;
  route_distance: number;
  total_price: number;
  /** Arbitrary string keys → object values per API schema */
  pricing_breakdown: Record<string, Record<string, unknown>>;
  is_payment_paid: boolean;
  transcation_id: string;
};

/** PUT /api/v1/orders/:id — backend adds optional status */
export type UpdateOrderRequestBody = CreateOrderRequestBody & {
  status?: string;
};

function normalizeRoutePoint(
  p: { address?: string; latitude?: number; longitude?: number } | undefined | null,
): CreateOrderRoutePoint | null {
  if (!p || typeof p !== "object") return null;
  const address = String(p.address ?? "").trim();
  const latitude = Number(p.latitude);
  const longitude = Number(p.longitude);
  if (!address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  return { address, latitude, longitude };
}

function toYyyyMmDd(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** ISO-8601 UTC with milliseconds, e.g. 2026-04-02T10:11:49.716Z */
function toIsoPickupTime(date: Date, time12h: string): string {
  const match = time12h.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  const dt = new Date(date);
  if (!match) return dt.toISOString();
  const hh = Number(match[1]);
  const mm = Number(match[2]);
  const mer = match[3].toUpperCase();
  let hour24 = hh % 12;
  if (mer === "PM") hour24 += 12;
  dt.setHours(hour24, mm, 0, 0);
  return dt.toISOString();
}

export function buildCreateOrderRequestBody(
  bookingData: BookingData,
  is_payment_paid: boolean,
  transcation_id: string,
): CreateOrderRequestBody {
  const customer = bookingData.customerInfo;
  const selectedCar = bookingData.selectedCar;
  const route = bookingData.routePoints;

  if (!customer || !selectedCar || !route) {
    throw new Error("Booking route/customer data is incomplete for order creation.");
  }

  const from = normalizeRoutePoint(route.from);
  const to = normalizeRoutePoint(route.to);
  if (!from || !to) {
    throw new Error("From/to locations must include address and valid coordinates.");
  }

  const stops: CreateOrderRoutePoint[] = (route.stops || [])
    .map((s) => normalizeRoutePoint(s))
    .filter((x): x is CreateOrderRoutePoint => x !== null);

  const pricing_breakdown: Record<string, Record<string, unknown>> = Object.fromEntries(
    (selectedCar.price_breakdown || []).map((line, idx) => [
      `line_${idx + 1}`,
      {
        description: String(line.description ?? ""),
        amount: Number(line.amount ?? 0),
      },
    ]),
  );

  const route_distance = Number(bookingData.quoteResponse?.distance_miles ?? 0);
  const total_price = Number(selectedCar.total_price ?? selectedCar.price ?? 0);

  return {
    from,
    to,
    stops,
    flight_number: String(bookingData.flightNumber ?? ""),
    pickup_date: toYyyyMmDd(bookingData.date),
    pickup_time: toIsoPickupTime(bookingData.date, bookingData.time),
    vehicle_class: String(selectedCar.id ?? ""),
    first_name: String(customer.firstName ?? ""),
    last_name: String(customer.lastName ?? ""),
    email: String(customer.email ?? ""),
    phonenumber: String(customer.phone ?? ""),
    special_request: String(customer.specialRequests ?? ""),
    route_distance: Number.isFinite(route_distance) ? route_distance : 0,
    total_price: Number.isFinite(total_price) ? total_price : 0,
    pricing_breakdown,
    is_payment_paid,
    transcation_id: String(transcation_id ?? ""),
  };
}

export async function fetchCreateOrder(body: CreateOrderRequestBody): Promise<unknown> {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      (data as { detail?: string; message?: string }).detail ||
        (data as { detail?: string; message?: string }).message ||
        "Unable to create order.",
    );
  }
  return data;
}
