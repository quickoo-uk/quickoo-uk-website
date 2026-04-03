import { RequestHandler } from "express";

const DEFAULT_ADMIN_API_BASE_URL = "http://0.0.0.0:8000";

function getAdminApiBaseUrl(): string {
  return process.env.ADMIN_API_BASE_URL || process.env.VITE_ADMIN_API_BASE_URL || DEFAULT_ADMIN_API_BASE_URL;
}

async function parseForwardResponse(response: Response) {
  const raw = await response.text();
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return { message: raw };
  }
}

function getBearer(req: Parameters<RequestHandler>[0]): string {
  return req.headers.authorization || "";
}

const BASE_PATH = "/api/v1/extra-pickup-types";

export const getExtraPickupTypesProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}${BASE_PATH}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: getBearer(req),
      },
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Extra pickup types get proxy error:", error);
    res.status(500).json({ detail: "Failed to fetch extra pickup types" });
  }
};

export const createExtraPickupTypeProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}${BASE_PATH}`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: getBearer(req),
      },
      body: JSON.stringify(req.body || {}),
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Extra pickup types create proxy error:", error);
    res.status(500).json({ detail: "Failed to create extra pickup type" });
  }
};

export const updateExtraPickupTypeProxy: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${getAdminApiBaseUrl()}${BASE_PATH}/${id}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: getBearer(req),
      },
      body: JSON.stringify(req.body || {}),
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Extra pickup types update proxy error:", error);
    res.status(500).json({ detail: "Failed to update extra pickup type" });
  }
};

export const deleteExtraPickupTypeProxy: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${getAdminApiBaseUrl()}${BASE_PATH}/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        authorization: getBearer(req),
      },
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Extra pickup types delete proxy error:", error);
    res.status(500).json({ detail: "Failed to delete extra pickup type" });
  }
};
