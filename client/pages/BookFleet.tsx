import BookingWidgetLoader from "@/components/BookingWidgetLoader";

const SCRIPT_URL =
  "https://lf-grafana.logistifie.com/js/bundle_booking.js";

const BookFleet = () => {
  return (
    <section className="py-16 bg-white">
      <div className="py-4">
        <BookingWidgetLoader scriptUrl={SCRIPT_URL}>
          <booking-widget
            primarycolor="black"
            useractivestate="2"
            masteraccountid="7236263"
          />
        </BookingWidgetLoader>
      </div>
    </section>
  );
};

export default BookFleet;