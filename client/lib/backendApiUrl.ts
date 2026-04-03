/**
 * FastAPI base URL for browser requests. Backend must allow CORS for this app’s origin.
 * Set VITE_ADMIN_API_BASE_URL (e.g. https://backend.quickoo.co.uk).
 */
export function getBackendApiBaseUrl(): string {
  const raw = import.meta.env.VITE_ADMIN_API_BASE_URL?.trim() ?? "";
  const base = raw.replace(/\/+$/, "");
  if (!base) {
    throw new Error(
      "Missing VITE_ADMIN_API_BASE_URL. Add it to .env (e.g. VITE_ADMIN_API_BASE_URL=https://backend.quickoo.co.uk)",
    );
  }
  return base;
}

/** Absolute URL to a path on the FastAPI host (path must start with `/`, e.g. `/api/v1/orders`). */
export function backendApiUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${getBackendApiBaseUrl()}${p}`;
}
