import { RequestHandler } from "express";

const DEFAULT_ADMIN_API_BASE_URL = "http://0.0.0.0:8000";

function getAdminApiBaseUrl(): string {
  return process.env.ADMIN_API_BASE_URL || process.env.VITE_ADMIN_API_BASE_URL || DEFAULT_ADMIN_API_BASE_URL;
}

/**
 * Proxies PaymentIntent creation to FastAPI so the secret key stays on the backend.
 * FastAPI: POST /api/v1/payments/create-payment-intent
 */
export const createStripePaymentIntentProxy: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${getAdminApiBaseUrl()}/api/v1/payments/create-payment-intent`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body || {}),
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
    res.status(response.status).json(parsed);
  } catch (error) {
    console.error("Stripe create-payment-intent proxy error:", error);
    res.status(500).json({ detail: "Failed to create payment session" });
  }
};
