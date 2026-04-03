import { clearAdminSession, getValidAdminAccessToken } from "@/lib/adminAuth";
import type { CreateOrderRequestBody, CreateOrderRoutePoint, UpdateOrderRequestBody } from "@/lib/ordersApi";

/** Canonical UI/API status values (lowercase with space). */
export const ORDER_STATUS_VALUES = ["not started", "started", "completed", "cancelled"] as const;
export type OrderStatusValue = (typeof ORDER_STATUS_VALUES)[number];

export function formatOrderStatusLabel(status: string): string {
  return status
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function normalizeOrderStatus(raw: unknown): string {
  const s = String(raw ?? "")
    .trim()
    .toLowerCase()
    .replace(/_/g, " ");
  if (s === "pending" || s === "not started") return "not started";
  if (s === "confirmed" || s === "started") return "started";
  if (s === "completed") return "completed";
  if (s === "cancelled" || s === "canceled") return "cancelled";
  if ((ORDER_STATUS_VALUES as readonly string[]).includes(s)) return s;
  return "not started";
}

export type AdminOrderRow = {
  id: string;
  status: string;
  first_name: string;
  last_name: string;
  email: string;
  phonenumber: string;
  flight_number: string;
  pickup_date: string;
  pickup_time: string;
  vehicle_class: string;
  special_request: string;
  route_distance: number;
  total_price: number;
  is_payment_paid: boolean;
  transcation_id: string;
  from: CreateOrderRoutePoint;
  to: CreateOrderRoutePoint;
  stops: CreateOrderRoutePoint[];
  pricing_breakdown: Record<string, Record<string, unknown>>;
};

function normalizePoint(raw: unknown): CreateOrderRoutePoint | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const address = String(o.address ?? "").trim();
  const latitude = Number(o.latitude ?? o.lat);
  const longitude = Number(o.longitude ?? o.lng);
  if (!address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  return { address, latitude, longitude };
}

function normalizeStops(raw: unknown): CreateOrderRoutePoint[] {
  if (!Array.isArray(raw)) return [];
  const out: CreateOrderRoutePoint[] = [];
  for (const item of raw) {
    const p = normalizePoint(item);
    if (p) out.push(p);
  }
  return out;
}

function normalizePricingBreakdown(raw: unknown): Record<string, Record<string, unknown>> {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const obj = raw as Record<string, unknown>;
  const out: Record<string, Record<string, unknown>> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      out[k] = v as Record<string, unknown>;
    }
  }
  return out;
}

function extractOrdersArray(data: unknown): Record<string, unknown>[] {
  if (Array.isArray(data)) return data as Record<string, unknown>[];
  const obj = (data || {}) as Record<string, unknown>;
  const nested = obj.data ?? obj.results ?? obj.items ?? obj.orders;
  if (Array.isArray(nested)) return nested as Record<string, unknown>[];
  return [];
}

export function normalizeAdminOrder(raw: Record<string, unknown>): AdminOrderRow | null {
  const id = String(raw.id ?? raw._id ?? raw.order_id ?? "");
  const from = normalizePoint(raw.from);
  const to = normalizePoint(raw.to);
  if (!id || !from || !to) return null;

  const first_name = String(raw.first_name ?? "");
  const last_name = String(raw.last_name ?? "");
  let pickup_time = String(raw.pickup_time ?? "").trim();
  let pickup_date = String(raw.pickup_date ?? "").slice(0, 10);
  if (!pickup_date && pickup_time.includes("T")) {
    pickup_date = pickup_time.slice(0, 10);
  }
  if (!pickup_date) {
    pickup_date = new Date().toISOString().slice(0, 10);
  }
  if (!pickup_time) {
    pickup_time = new Date(`${pickup_date}T12:00:00.000Z`).toISOString();
  }

  return {
    id,
    status: normalizeOrderStatus(raw.status),
    first_name,
    last_name,
    email: String(raw.email ?? ""),
    phonenumber: String(raw.phonenumber ?? raw.phone ?? ""),
    flight_number: String(raw.flight_number ?? ""),
    pickup_date: pickup_date || new Date().toISOString().slice(0, 10),
    pickup_time: pickup_time,
    vehicle_class: String(raw.vehicle_class ?? ""),
    special_request: String(raw.special_request ?? ""),
    route_distance: Number(raw.route_distance ?? 0),
    total_price: Number(raw.total_price ?? 0),
    is_payment_paid: Boolean(raw.is_payment_paid ?? false),
    transcation_id: String(raw.transcation_id ?? raw.transaction_id ?? ""),
    from,
    to,
    stops: normalizeStops(raw.stops),
    pricing_breakdown: normalizePricingBreakdown(raw.pricing_breakdown),
  };
}

async function authorizedJsonFetch(path: string, init: RequestInit): Promise<unknown> {
  const token = await getValidAdminAccessToken();
  if (!token) {
    clearAdminSession();
    throw new Error("Admin session expired. Please login again.");
  }

  const response = await fetch(path, {
    ...init,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      (data as { detail?: string; message?: string })?.detail ||
        (data as { detail?: string; message?: string })?.message ||
        "Request failed.",
    );
  }
  return data;
}

export async function fetchAdminOrders(): Promise<AdminOrderRow[]> {
  const data = await authorizedJsonFetch("/api/admin/orders", { method: "GET" });
  return extractOrdersArray(data)
    .map((row) => normalizeAdminOrder(row))
    .filter((row): row is AdminOrderRow => row !== null);
}

export async function createAdminOrder(body: CreateOrderRequestBody): Promise<unknown> {
  return authorizedJsonFetch("/api/admin/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export async function updateAdminOrder(orderId: string, body: UpdateOrderRequestBody): Promise<unknown> {
  return authorizedJsonFetch(`/api/admin/orders/${encodeURIComponent(orderId)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function adminOrderToCreatePayload(row: AdminOrderRow): CreateOrderRequestBody {
  return {
    from: row.from,
    to: row.to,
    stops: row.stops,
    flight_number: row.flight_number,
    pickup_date: row.pickup_date,
    pickup_time: row.pickup_time,
    vehicle_class: row.vehicle_class,
    first_name: row.first_name,
    last_name: row.last_name,
    email: row.email,
    phonenumber: row.phonenumber,
    special_request: row.special_request,
    route_distance: row.route_distance,
    total_price: row.total_price,
    pricing_breakdown: row.pricing_breakdown,
    is_payment_paid: row.is_payment_paid,
    transcation_id: row.transcation_id,
  };
}

export function adminOrderToUpdatePayload(row: AdminOrderRow, statusOverride?: string): UpdateOrderRequestBody {
  return {
    ...adminOrderToCreatePayload(row),
    status: statusOverride ?? row.status,
  };
}
