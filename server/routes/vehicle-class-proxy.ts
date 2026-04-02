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

export const getVehicleClassesProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/vehicle-classes`, {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: getBearer(req),
      },
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Vehicle classes get proxy error:", error);
    res.status(500).json({ detail: "Failed to fetch vehicle classes" });
  }
};

export const createVehicleClassProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/vehicle-classes`, {
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
    console.error("Vehicle classes create proxy error:", error);
    res.status(500).json({ detail: "Failed to create vehicle class" });
  }
};

export const updateVehicleClassProxy: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/vehicle-classes/${id}`, {
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
    console.error("Vehicle classes update proxy error:", error);
    res.status(500).json({ detail: "Failed to update vehicle class" });
  }
};

export const deleteVehicleClassProxy: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/vehicle-classes/${id}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        authorization: getBearer(req),
      },
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Vehicle classes delete proxy error:", error);
    res.status(500).json({ detail: "Failed to delete vehicle class" });
  }
};
