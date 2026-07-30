import BookingWidgetLoader from "@/components/BookingWidgetLoader";

/** Quote form widget (compact). Hands off to the landing funnel's own booking page. */
const SCRIPT_URL = "https://lf-grafana.logistifie.com/js/window_bundle.js";

export const LANDING_BOOKING_PAGE = "/lp/chauffeur/book";

const LandingBookingWidget = () => (
  <BookingWidgetLoader scriptUrl={SCRIPT_URL}>
    <booking-widget
      primarycolor="black"
      masteraccountid="7236263"
      bookingpageurl={LANDING_BOOKING_PAGE}
      bookingtypes="oneway,hourly,airportpickup"
    />
  </BookingWidgetLoader>
);

export default LandingBookingWidget;
