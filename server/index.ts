import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { notifyAdminBooking } from "./routes/booking-notify";
import {
  establishWidgetConfig,
  validateDiscount,
  getQuotes,
  finalizeBooking,
  requestPayment
} from "./routes/cds";
import { adminLoginProxy, adminRefreshTokenProxy } from "./routes/admin-auth-proxy";
import { adminFileUploadProxy } from "./routes/admin-file-upload-proxy";
import {
  createVehicleClassProxy,
  deleteVehicleClassProxy,
  getVehicleClassesProxy,
  updateVehicleClassProxy,
} from "./routes/vehicle-class-proxy";
import {
  createExtraPickupTypeProxy,
  deleteExtraPickupTypeProxy,
  getExtraPickupTypesProxy,
  updateExtraPickupTypeProxy,
} from "./routes/extra-pickup-types-proxy";
import { postGetQuotesProxy } from "./routes/quotes-proxy";
import { createStripePaymentIntentProxy } from "./routes/stripe-payment-proxy";
import { createOrderProxy } from "./routes/orders-proxy";
import { adminCreateOrderProxy, adminUpdateOrderProxy, getOrdersProxy } from "./routes/admin-orders-proxy";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // CDS Widget API Routes
  app.post("/api/cds/config", establishWidgetConfig);
  app.post("/api/cds/discount", validateDiscount);
  app.post("/api/cds/quote", getQuotes);
  app.post("/api/cds/book", finalizeBooking);
  app.post("/api/cds/payment", requestPayment);
  app.post("/api/admin/login", adminLoginProxy);
  app.post("/api/admin/refresh-token", adminRefreshTokenProxy);
  app.post("/api/admin/files/upload", adminFileUploadProxy);
  app.get("/api/admin/vehicle-classes", getVehicleClassesProxy);
  app.post("/api/admin/vehicle-classes", createVehicleClassProxy);
  app.put("/api/admin/vehicle-classes/:id", updateVehicleClassProxy);
  app.delete("/api/admin/vehicle-classes/:id", deleteVehicleClassProxy);
  app.get("/api/admin/extra-pickup-types", getExtraPickupTypesProxy);
  app.post("/api/admin/extra-pickup-types", createExtraPickupTypeProxy);
  app.put("/api/admin/extra-pickup-types/:id", updateExtraPickupTypeProxy);
  app.delete("/api/admin/extra-pickup-types/:id", deleteExtraPickupTypeProxy);
  app.post("/api/quotes/get-quotes", postGetQuotesProxy);
  app.post("/api/stripe/create-payment-intent", createStripePaymentIntentProxy);
  app.post("/api/orders", createOrderProxy);
  app.get("/api/admin/orders", getOrdersProxy);
  app.post("/api/admin/orders", adminCreateOrderProxy);
  app.put("/api/admin/orders/:id", adminUpdateOrderProxy);
  app.post("/api/booking/notify-admin", notifyAdminBooking);

  return app;
}
