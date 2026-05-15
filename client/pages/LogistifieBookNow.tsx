import BookingWidgetLoader from "@/components/BookingWidgetLoader";

const SCRIPT_URL = "https://lf-grafana.logistifie.com/js/bundle_booking.js";
  

const LogistifieBookNow = () => {
  return (
    <section className="py-16 bg-white">
      <div className="py-4">
        <BookingWidgetLoader scriptUrl={SCRIPT_URL}>
          <booking-widget
            primarycolor="black"
            useractivestate="1"
            masteraccountid="7236263"
            bookingtypes="oneway,hourly,airportpickup"
          />
        </BookingWidgetLoader>
      </div>
    </section>
  );
};

export default LogistifieBookNow;