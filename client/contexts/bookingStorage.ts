import type { BookingData } from "./bookingTypes";

export const defaultBookingData: BookingData = {
  bookingType: "oneway",
  fromLocation: "",
  toLocation: "",
  flightNumber: "",
  date: new Date(),
  time: "12:00 PM",
  duration: "4 hours",
  quoteResponse: undefined,
  quotePickupType: undefined,
};

export const BOOKING_STORAGE_KEY = "quickoo_booking_data_v1";

export function readStoredBookingData(): BookingData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<BookingData> & { date?: string | Date };
    if (!parsed || typeof parsed !== "object") return null;

    const dateValue =
      parsed.date instanceof Date
        ? parsed.date
        : parsed.date
          ? new Date(parsed.date)
          : defaultBookingData.date;

    return {
      ...defaultBookingData,
      ...parsed,
      date: Number.isNaN(dateValue.getTime()) ? new Date() : dateValue,
    };
  } catch {
    return null;
  }
}
