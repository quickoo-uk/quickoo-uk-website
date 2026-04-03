/**
 * Public booking context API. Provider and hook live in separate modules so
 * @vitejs/plugin-react-swc Fast Refresh stays happy (no component + hook in one file).
 */
export type { BookingData } from "./bookingTypes";
export { BookingProvider } from "./BookingProvider";
export { useBooking } from "./useBooking";
