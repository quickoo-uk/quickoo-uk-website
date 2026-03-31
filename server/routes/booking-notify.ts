import { RequestHandler } from "express";
import nodemailer from "nodemailer";

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

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false") === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user || "noreply@quickoo.co.uk";
    const adminTo = process.env.BOOKING_ADMIN_EMAIL || "inquiry@quickoo.co.uk";

    if (!host || !port || !user || !pass) {
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
    });

    const customer = bookingData.customerInfo || {};
    const car = bookingData.selectedCar || {};

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
      `Duration: ${bookingData.duration || "N/A"}`,
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

