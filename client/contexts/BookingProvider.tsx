import { useState, useEffect, type ReactNode } from "react";
import { BookingContext } from "./bookingContextCore";
import type { BookingData } from "./bookingTypes";
import { BOOKING_STORAGE_KEY, defaultBookingData, readStoredBookingData } from "./bookingStorage";

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>(() => {
    const stored = readStoredBookingData();
    return stored ?? defaultBookingData;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookingData));
    } catch {
      // Ignore storage failures (private mode / quota / disabled storage)
    }
  }, [bookingData]);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const resetBooking = () => {
    setBookingData(defaultBookingData);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(BOOKING_STORAGE_KEY);
      } catch {
        // no-op
      }
    }
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
