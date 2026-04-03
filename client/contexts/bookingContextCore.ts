import { createContext } from "react";
import type { BookingData } from "./bookingTypes";

export type BookingContextType = {
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  resetBooking: () => void;
};

export const BookingContext = createContext<BookingContextType | undefined>(undefined);
