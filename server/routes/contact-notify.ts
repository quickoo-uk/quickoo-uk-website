import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactMessageSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(5).max(40),
  subject: z.string().trim().min(5).max(150),
  serviceType: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000),
  newsletterOptIn: z.boolean(),
});

export const notifyAdminContact: RequestHandler = async (req, res) => {
  const parsedMessage = contactMessageSchema.safeParse(req.body);
  if (!parsedMessage.success) {
    res.status(400).json({ message: "Please check the submitted contact details." });
    return;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "false") === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user || "noreply@quickoo.co.uk";
  const adminTo =
    process.env.CONTACT_ADMIN_EMAIL ||
    process.env.BOOKING_ADMIN_EMAIL ||
    "inquiry@quickoo.co.uk";

  if (!host || !port || !user || !pass) {
    res.status(500).json({ message: "Contact email delivery is not configured." });
    return;
  }

  const contactMessage = parsedMessage.data;
  const emailText = [
    "A new contact enquiry was submitted on Quickoo.",
    "",
    `Name: ${contactMessage.name}`,
    `Email: ${contactMessage.email}`,
    `Phone: ${contactMessage.phone}`,
    `Subject: ${contactMessage.subject}`,
    `Service: ${contactMessage.serviceType}`,
    `Newsletter opt-in: ${contactMessage.newsletterOptIn ? "Yes" : "No"}`,
    "",
    "Message:",
    contactMessage.message,
    "",
    `Submitted at: ${new Date().toLocaleString("en-GB")}`,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to: adminTo,
      replyTo: contactMessage.email,
      subject: "New Quickoo website enquiry",
      text: emailText,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("notifyAdminContact error:", error);
    res.status(502).json({ message: "We could not send your message. Please try again shortly." });
  }
};
