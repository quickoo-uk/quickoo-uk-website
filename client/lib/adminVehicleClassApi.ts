import { clearAdminSession, getValidAdminAccessToken } from "@/lib/adminAuth";

export type VehicleClassApiItem = {
  id: string;
  vehicle_class_image: string;
  class_name: string;
  allow_passengers: number;
  allow_luggage: number;
  base_price: number;
  base_price_per_default_miles: number;
  extra_price_per_miles: number;
  is_active: boolean;
};

export type VehicleClassPayload = Omit<VehicleClassApiItem, "id">;

function normalizeVehicleClass(raw: Record<string, unknown>): VehicleClassApiItem {
  return {
    id: String(raw.id || raw._id || raw.vehicle_class_id || ""),
    vehicle_class_image: String(raw.vehicle_class_image || raw.image || ""),
    class_name: String(raw.class_name || raw.vehicle_class_name || ""),
    allow_passengers: Number(raw.allow_passengers ?? raw.passenger_count ?? 0),
    allow_luggage: Number(raw.allow_luggage ?? raw.luggage_count ?? 0),
    base_price: Number(raw.base_price ?? raw.per_km_price ?? 0),
    base_price_per_default_miles: Number(raw.base_price_per_default_miles ?? 0),
    extra_price_per_miles: Number(raw.extra_price_per_miles ?? 0),
    is_active: Boolean(raw.is_active ?? true),
  };
}

function extractArray(data: unknown): Record<string, unknown>[] {
  if (Array.isArray(data)) return data as Record<string, unknown>[];
  const obj = (data || {}) as Record<string, unknown>;
  const nested = obj.data || obj.result || obj.items;
  if (Array.isArray(nested)) return nested as Record<string, unknown>[];
  return [];
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

export async function fetchVehicleClasses(): Promise<VehicleClassApiItem[]> {
  const data = await authorizedJsonFetch("/api/admin/vehicle-classes", {
    method: "GET",
  });
  return extractArray(data).map(normalizeVehicleClass).filter((item) => item.id);
}

export async function createVehicleClass(payload: VehicleClassPayload): Promise<void> {
  await authorizedJsonFetch("/api/admin/vehicle-classes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function updateVehicleClass(id: string, payload: VehicleClassPayload): Promise<void> {
  await authorizedJsonFetch(`/api/admin/vehicle-classes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteVehicleClass(id: string): Promise<void> {
  await authorizedJsonFetch(`/api/admin/vehicle-classes/${id}`, {
    method: "DELETE",
  });
}

export function extractPublicUrlFromUploadResponse(data: unknown): string {
  const obj = (data || {}) as Record<string, unknown>;
  const nested = (obj.data || obj.result || {}) as Record<string, unknown>;
  const url =
    (obj.url as string) ||
    (obj.public_url as string) ||
    (obj.file_url as string) ||
    (nested.url as string) ||
    (nested.public_url as string) ||
    (nested.file_url as string) ||
    "";
  return url;
}

/** Same-origin proxy → backend upload (avoids browser CORS to :8000). */
export async function uploadVehicleClassImage(file: File): Promise<string> {
  const token = await getValidAdminAccessToken();
  if (!token) {
    clearAdminSession();
    throw new Error("Admin session expired. Please login again.");
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/admin/files/upload", {
    method: "POST",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      (data as { detail?: string; message?: string })?.detail ||
        (data as { detail?: string; message?: string })?.message ||
        "Image upload failed.",
    );
  }

  const url = extractPublicUrlFromUploadResponse(data);
  if (!url) throw new Error("Upload succeeded but no public URL returned.");
  return url;
}
