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

/** GET /api/v1/orders (admin — optional Bearer per backend) */
export const getOrdersProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/orders`, {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: getBearer(req),
      },
    });
    const data = await parseForwardResponse(response);
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Orders list proxy error:", error);
    res.status(500).json({ detail: "Failed to fetch orders" });
  }
};

/** POST /api/v1/orders with admin Bearer */
export const adminCreateOrderProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/orders`, {
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
    console.error("Admin create order proxy error:", error);
    res.status(500).json({ detail: "Failed to create order" });
  }
};

/** PUT /api/v1/orders/:id */
export const adminUpdateOrderProxy: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/orders/${id}`, {
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
    console.error("Admin update order proxy error:", error);
    res.status(500).json({ detail: "Failed to update order" });
  }
};
