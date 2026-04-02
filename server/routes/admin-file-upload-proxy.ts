import { Readable } from "node:stream";
import { RequestHandler } from "express";

const DEFAULT_ADMIN_API_BASE_URL = "http://0.0.0.0:8000";

function getAdminApiBaseUrl(): string {
  return process.env.ADMIN_API_BASE_URL || process.env.VITE_ADMIN_API_BASE_URL || DEFAULT_ADMIN_API_BASE_URL;
}

/**
 * Forwards multipart upload to backend without parsing body (avoids CORS in browser).
 * Client → POST /api/admin/files/upload (same origin) → backend /api/v1/files/upload
 */
export const adminFileUploadProxy: RequestHandler = async (req, res) => {
  try {
    const contentType = req.headers["content-type"];
    if (!contentType || !contentType.includes("multipart/form-data")) {
      res.status(400).json({ detail: "Content-Type must be multipart/form-data" });
      return;
    }

    const url = `${getAdminApiBaseUrl()}/api/v1/files/upload`;
    const headers: Record<string, string> = {
      accept: "application/json",
      "content-type": contentType,
    };
    const auth = req.headers.authorization;
    if (auth) headers.authorization = auth;

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: Readable.toWeb(req) as unknown as BodyInit,
      duplex: "half",
    } as RequestInit);

    const raw = await response.text();
    let parsed: unknown = {};
    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch {
        parsed = { message: raw };
      }
    }
    res.status(response.status).json(parsed);
  } catch (error) {
    console.error("Admin file upload proxy error:", error);
    res.status(500).json({ detail: "Failed to upload file" });
  }
};
