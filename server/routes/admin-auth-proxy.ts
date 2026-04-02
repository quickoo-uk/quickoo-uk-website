import { RequestHandler } from "express";

const DEFAULT_ADMIN_API_BASE_URL = "http://0.0.0.0:8000";

function getAdminApiBaseUrl(): string {
  return process.env.ADMIN_API_BASE_URL || process.env.VITE_ADMIN_API_BASE_URL || DEFAULT_ADMIN_API_BASE_URL;
}

async function forwardPost(path: string, payload: unknown) {
  const response = await fetch(`${getAdminApiBaseUrl()}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const raw = await response.text();
  let parsed: unknown = {};
  if (raw) {
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { message: raw };
    }
  }
  return { status: response.status, data: parsed };
}

export const adminLoginProxy: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const result = await forwardPost("/api/v1/admins/login", { email, password });
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error("Admin login proxy error:", error);
    res.status(500).json({ detail: "Failed to call admin login API" });
  }
};

export const adminRefreshTokenProxy: RequestHandler = async (req, res) => {
  try {
    const { refresh_token } = req.body || {};
    const result = await forwardPost("/api/v1/admins/refresh-token", { refresh_token });
    res.status(result.status).json(result.data);
  } catch (error) {
    console.error("Admin refresh-token proxy error:", error);
    res.status(500).json({ detail: "Failed to call admin refresh-token API" });
  }
};
