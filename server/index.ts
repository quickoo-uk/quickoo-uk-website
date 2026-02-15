import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  establishWidgetConfig,
  validateDiscount,
  getQuotes,
  finalizeBooking,
  requestPayment
} from "./routes/cds";

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

  return app;
}
