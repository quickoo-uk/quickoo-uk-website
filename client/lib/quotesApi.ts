const DEFAULT_PUBLIC_QUOTES_API_BASE_URL = "https://backend.quickoo.co.uk";

function publicQuotesApiUrl(path: string): string {
  const configuredBase = (import.meta.env.VITE_ADMIN_API_BASE_URL as string | undefined)?.trim();
  const base = (configuredBase || DEFAULT_PUBLIC_QUOTES_API_BASE_URL).replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export type VehicleQuote = {
  vehicle_class_id: string;
  vehicle_class_image: string;
  class_name: string;
  allow_passengers: number;
  allow_luggage: number;
  base_price: number;
  base_price_per_default_miles: number;
  extra_price_per_miles: number;
  is_active: boolean;
  price_breakdown: { description: string; amount: number }[];
  total_price: number;
};

export type GetQuotesResponse = {
  distance_miles: number;
  quotes_break_down_price_list: Array<Record<string, number>>;
  vehicle_quotes: VehicleQuote[];
};

export type GetQuotesRequestBody = {
  from: { latitude: number; longitude: number };
  to: { latitude: number; longitude: number };
  pickup_type: string;
};

function normalizeVehicleQuote(raw: Record<string, unknown>): VehicleQuote {
  const breakdownRaw = raw.price_breakdown;
  const breakdown = Array.isArray(breakdownRaw)
    ? (breakdownRaw as Record<string, unknown>[]).map((row) => ({
        description: String(row.description ?? ""),
        amount: Number(row.amount ?? 0),
      }))
    : [];

  return {
    vehicle_class_id: String(raw.vehicle_class_id ?? raw.id ?? ""),
    vehicle_class_image: String(raw.vehicle_class_image ?? ""),
    class_name: String(raw.class_name ?? ""),
    allow_passengers: Number(raw.allow_passengers ?? 0),
    allow_luggage: Number(raw.allow_luggage ?? 0),
    base_price: Number(raw.base_price ?? 0),
    base_price_per_default_miles: Number(raw.base_price_per_default_miles ?? 0),
    extra_price_per_miles: Number(raw.extra_price_per_miles ?? 0),
    is_active: Boolean(raw.is_active ?? true),
    price_breakdown: breakdown,
    total_price: Number(raw.total_price ?? 0),
  };
}

export async function fetchGetQuotes(body: GetQuotesRequestBody): Promise<GetQuotesResponse> {
  const response = await fetch(publicQuotesApiUrl("/api/v1/quotes/get-quotes"), {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (Array.isArray(data.vehicle_quotes)) {
    data.vehicle_quotes = [...data.vehicle_quotes].reverse();
  }
  if (!response.ok) {
    throw new Error(
      (data as { detail?: string; message?: string })?.detail ||
        (data as { detail?: string; message?: string })?.message ||
        "Unable to get quotes.",
    );
  }

  const obj = data as Record<string, unknown>;
  const vqRaw = obj.vehicle_quotes;
  const vehicleQuotes = Array.isArray(vqRaw)
    ? (vqRaw as Record<string, unknown>[]).map(normalizeVehicleQuote).filter((v) => v.vehicle_class_id)
    : [];

  const qbd = obj.quotes_break_down_price_list;
  const quotes_break_down_price_list = Array.isArray(qbd)
    ? (qbd as Record<string, number>[])
    : [];

  return {
    distance_miles: Number(obj.distance_miles ?? 0),
    quotes_break_down_price_list,
    vehicle_quotes: vehicleQuotes,
  };
}
