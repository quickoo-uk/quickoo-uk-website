import { RequestHandler } from "express";
import nodemailer from "nodemailer";

function readEnvValue(name: string): string {
  const raw = process.env[name];
  if (!raw) {
    return "";
  }
  return raw.trim().replace(/^["']|["']$/g, "");
}

function formatDateValue(input: unknown): string {
  if (!input) return "N/A";
  try {
    const d = input instanceof Date ? input : new Date(String(input));
    if (Number.isNaN(d.getTime())) return String(input);
    return d.toLocaleString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return String(input);
  }
}

function formatToLocation(toLocation: unknown): string {
  if (Array.isArray(toLocation)) {
    const clean = toLocation
      .map((x) => String(x ?? "").trim())
      .filter(Boolean);
    return clean.length ? clean.join(" | ") : "N/A";
  }
  return String(toLocation ?? "").trim() || "N/A";
}

export const notifyAdminBooking: RequestHandler = async (req, res) => {
  try {
    const bookingData = req.body?.bookingData;
    if (!bookingData) {
      return res.status(400).json({ message: "Missing bookingData payload" });
    }

    const host = readEnvValue("SMTP_HOST");
    const port = Number(readEnvValue("SMTP_PORT") || "587");
    const secure = readEnvValue("SMTP_SECURE").toLowerCase() === "true";
    const user = readEnvValue("SMTP_USER");
    const pass = readEnvValue("SMTP_PASS");
    const from = readEnvValue("SMTP_FROM") || user || "noreply@quickoo.co.uk";
    const adminTo = readEnvValue("BOOKING_ADMIN_EMAIL") || "inquiry@quickoo.co.uk";

    if (!host || !Number.isFinite(port) || port <= 0 || !user || !pass) {
      return res.status(500).json({
        message:
          "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.",
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      family: 4,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
      tls: { servername: host },
    });

    const customer = bookingData.customerInfo || {};
    const car = bookingData.selectedCar || {};
    const breakdown = Array.isArray(car.price_breakdown) ? car.price_breakdown : [];
    const totalAmt = Number(car.total_price ?? car.price ?? 0);
    const distanceMiles = bookingData.quoteResponse?.distance_miles;

    const subject = `New Booking Received - ${customer.firstName || "Customer"} ${customer.lastName || ""}`.trim();
    const emailText = [
      "A new booking was confirmed on Quickoo.",
      "",
      "=== Booking Details ===",
      `Type: ${bookingData.bookingType || "N/A"}`,
      `From: ${bookingData.fromLocation || "N/A"}`,
      `To/Stops: ${formatToLocation(bookingData.toLocation)}`,
      `Date: ${formatDateValue(bookingData.date)}`,
      `Pickup Time: ${bookingData.time || "N/A"}`,
      `Flight Number: ${bookingData.flightNumber || "N/A"}`,
      `Duration: ${bookingData.duration || "N/A"}`,
      `Quoted distance (miles): ${distanceMiles != null ? String(distanceMiles) : "N/A"}`,
      `Terms Accepted: ${bookingData.termsAccepted ? "Yes" : "No"}`,
      "",
      "=== Vehicle ===",
      `Vehicle ID: ${car.id || "N/A"}`,
      `Vehicle Name: ${car.name || "N/A"}`,
      `Passengers: ${car.passengers ?? "N/A"}`,
      `Luggage: ${car.luggage ?? "N/A"}`,
      `Features: ${Array.isArray(car.features) ? car.features.join(", ") : "N/A"}`,
      `Description: ${car.description || "N/A"}`,
      "",
      "=== Pricing ===",
      ...(breakdown.length > 0
        ? breakdown.map(
            (row: { description?: string; amount?: number }) =>
              `${String(row.description || "Line")}: £${Number(row.amount ?? 0).toFixed(2)}`,
          )
        : ["(No line-item breakdown)"]),
      `Total: £${totalAmt.toFixed(2)}`,
      "",
      "=== Customer ===",
      `First Name: ${customer.firstName || "N/A"}`,
      `Last Name: ${customer.lastName || "N/A"}`,
      `Email: ${customer.email || "N/A"}`,
      `Phone: ${customer.phone || "N/A"}`,
      `Special Requests: ${customer.specialRequests || "N/A"}`,
      "",
      `Created At: ${new Date().toLocaleString("en-GB")}`,
    ].join("\n");

    await transporter.sendMail({
      from,
      to: adminTo,
      replyTo: customer.email || undefined,
      subject,
      text: emailText,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("notifyAdminBooking error:", error);
    return res.status(500).json({ message: "Failed to send booking email" });
  }
};
