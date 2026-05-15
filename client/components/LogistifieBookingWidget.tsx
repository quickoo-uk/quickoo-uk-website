import BookingWidgetLoader from "@/components/BookingWidgetLoader";

const SCRIPT_URL =
  "https://lf-grafana.logistifie.com/js/window_bundle.js";

const LogistifieBookingWidget = () => {
  return (
    <BookingWidgetLoader scriptUrl={SCRIPT_URL}>
      <booking-widget
        primarycolor="black"
        masteraccountid="7236263"
        bookingpageurl="/book-fleet"
        bookingtypes="oneway,hourly,airportpickup"
      />
    </BookingWidgetLoader>
  );
};

export default LogistifieBookingWidget;