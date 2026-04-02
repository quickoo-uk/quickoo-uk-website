import { clearAdminSession, getValidAdminAccessToken } from "@/lib/adminAuth";

export type ExtraPickupTypeApiItem = {
  id: string;
  pickup_type: string;
  additional_pricing_type: string;
  base_price: number;
  notes: string;
  is_active: boolean;
};

export type ExtraPickupTypePayload = Omit<ExtraPickupTypeApiItem, "id">;

function normalizeItem(raw: Record<string, unknown>): ExtraPickupTypeApiItem {
  return {
    id: String(raw.id || raw._id || raw.pickup_type_id || ""),
    pickup_type: String(raw.pickup_type ?? ""),
    additional_pricing_type: String(raw.additional_pricing_type ?? ""),
    base_price: Number(raw.base_price ?? raw.price ?? 0),
    notes: String(raw.notes ?? ""),
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

export async function fetchExtraPickupTypes(): Promise<ExtraPickupTypeApiItem[]> {
  const data = await authorizedJsonFetch("/api/admin/extra-pickup-types", {
    method: "GET",
  });
  return extractArray(data).map(normalizeItem).filter((item) => item.id);
}

export async function createExtraPickupType(payload: ExtraPickupTypePayload): Promise<void> {
  await authorizedJsonFetch("/api/admin/extra-pickup-types", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function updateExtraPickupType(id: string, payload: ExtraPickupTypePayload): Promise<void> {
  await authorizedJsonFetch(`/api/admin/extra-pickup-types/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteExtraPickupType(id: string): Promise<void> {
  await authorizedJsonFetch(`/api/admin/extra-pickup-types/${id}`, {
    method: "DELETE",
  });
}
