export const ADMIN_SESSION_STORAGE_KEY = "quickoo_admin_session_v1";

export type AdminSession = {
  accessToken: string;
  refreshToken: string;
  email: string;
  accessTokenExpiresAt: number;
};

function decodeJwtExpMs(token: string): number | null {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payloadRaw = atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));
    const payload = JSON.parse(payloadRaw) as { exp?: number };
    if (!payload.exp) return null;
    return payload.exp * 1000;
  } catch {
    return null;
  }
}

function extractLoginPayload(data: unknown): {
  accessToken: string;
  refreshToken: string;
  email?: string;
} | null {
  const obj = (data || {}) as Record<string, unknown>;
  const nested = (obj.data || obj.result || obj.payload || {}) as Record<string, unknown>;

  const accessToken =
    (obj.access_token as string) ||
    (obj.accessToken as string) ||
    (nested.access_token as string) ||
    (nested.accessToken as string) ||
    "";
  const refreshToken =
    (obj.refresh_token as string) ||
    (obj.refreshToken as string) ||
    (nested.refresh_token as string) ||
    (nested.refreshToken as string) ||
    "";
  const email =
    (obj.email as string) ||
    (nested.email as string) ||
    ((nested.admin as Record<string, unknown> | undefined)?.email as string | undefined);

  if (!accessToken || !refreshToken) return null;
  return { accessToken, refreshToken, email };
}

export function getAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AdminSession;
    if (!parsed?.accessToken || !parsed?.refreshToken) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setAdminSession(session: AdminSession): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearAdminSession(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
}

export function getAdminDisplayProfile(): { email: string; initial: string } {
  const session = getAdminSession();
  const email = session?.email || "admin@quickoo.co.uk";
  return { email, initial: email.charAt(0).toUpperCase() || "A" };
}

function isTokenExpired(session: AdminSession): boolean {
  const bufferMs = 15_000;
  return Date.now() >= session.accessTokenExpiresAt - bufferMs;
}

export async function loginAdmin(email: string, password: string): Promise<AdminSession> {
  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(
      (data as { detail?: string; message?: string })?.detail ||
        (data as { detail?: string; message?: string })?.message ||
        "Invalid email or password.",
    );
  }

  const payload = extractLoginPayload(data);
  if (!payload) throw new Error("Login API did not return access/refresh tokens.");

  const accessTokenExpiresAt =
    decodeJwtExpMs(payload.accessToken) ?? Date.now() + 30 * 60 * 1000;

  const session: AdminSession = {
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken,
    email: payload.email || email,
    accessTokenExpiresAt,
  };
  setAdminSession(session);
  return session;
}

export async function refreshAdminTokenIfNeeded(): Promise<boolean> {
  const session = getAdminSession();
  if (!session) return false;
  if (!isTokenExpired(session)) return true;

  const response = await fetch("/api/admin/refresh-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: session.refreshToken }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    clearAdminSession();
    return false;
  }

  const payload = extractLoginPayload({
    ...data,
    refresh_token:
      (data as Record<string, unknown>)?.refresh_token ||
      (data as Record<string, unknown>)?.refreshToken ||
      session.refreshToken,
  });

  const nextAccessToken =
    payload?.accessToken ||
    ((data as Record<string, unknown>)?.access_token as string) ||
    ((data as Record<string, unknown>)?.accessToken as string);

  if (!nextAccessToken) {
    clearAdminSession();
    return false;
  }

  const nextSession: AdminSession = {
    accessToken: nextAccessToken,
    refreshToken: payload?.refreshToken || session.refreshToken,
    email: payload?.email || session.email,
    accessTokenExpiresAt:
      decodeJwtExpMs(nextAccessToken) ?? Date.now() + 30 * 60 * 1000,
  };
  setAdminSession(nextSession);
  return true;
}

export async function ensureAdminSession(): Promise<boolean> {
  const existing = getAdminSession();
  if (!existing) return false;
  return refreshAdminTokenIfNeeded();
}

export async function getValidAdminAccessToken(): Promise<string | null> {
  const ok = await ensureAdminSession();
  if (!ok) return null;
  return getAdminSession()?.accessToken || null;
}

