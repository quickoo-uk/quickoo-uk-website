import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* ===================================== */}
      {/* HERO SECTION */}
      {/* ===================================== */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1597003536775-d335d5a70e21?auto=format&fit=crop&w=2000&q=80"
          className="absolute w-full h-full object-cover filter grayscale brightness-[0.55]"
          alt="Luxury Chauffeur Car"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 section-container text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-inter">
            No hidden fees. Know exactly what you'll pay before you book.
          </p>
        </div>
      </section>

      {/* ===================================== */}
      {/* PRICING SECTIONS */}
      {/* ===================================== */}
      <section className="py-24 bg-white">
        <div className="section-container space-y-24">
          {/* HOURLY RATES */}
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-dark mb-10">
              Hourly Rates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  vehicle: "Economy Class",
                  rate: "$45",
                  features: ["Sedan", "4 Passengers", "Standard Amenities"],
                },
                {
                  vehicle: "Premium Class",
                  rate: "$75",
                  features: [
                    "Luxury Sedan",
                    "4 Passengers",
                    "Premium Features",
                  ],
                },
                {
                  vehicle: "Elite Class",
                  rate: "$110",
                  features: [
                    "S-Class / BMW 7",
                    "4 Passengers",
                    "Full Amenities",
                  ],
                },
                {
                  vehicle: "Van Service",
                  rate: "$95",
                  features: ["7 Passengers", "Large Luggage", "Group Travel"],
                },
                {
                  vehicle: "Executive Class",
                  rate: "$150",
                  features: [
                    "Range Rover",
                    "4 Passengers",
                    "White Glove Service",
                  ],
                },
                {
                  vehicle: "Group Transport",
                  rate: "$120",
                  features: [
                    "Minibus",
                    "12+ Passengers",
                    "Professional Driver",
                  ],
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white rounded-2xl border shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_15px_60px_rgba(212,168,83,0.28)]
                    p-8 transition-all duration-300 hover:border-gold
                  "
                >
                  <h3 className="font-montserrat font-bold text-dark text-xl mb-4">
                    {item.vehicle}
                  </h3>

                  <p className="text-4xl font-montserrat font-bold text-gold mb-6">
                    {item.rate}
                    <span className="text-base text-gray-600 font-inter">
                      /hr
                    </span>
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((f, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600 font-inter"
                      >
                        <Check className="text-gold w-4 h-4" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* AIRPORT TRANSFERS */}
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-dark mb-10">
              Airport Transfers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { route: "City Airport", sedan: "$65", van: "$95" },
                { route: "International Hub", sedan: "$85", van: "$125" },
                { route: "Regional Airport", sedan: "$45", van: "$65" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white p-8 rounded-2xl border shadow-sm
                    hover:shadow-[0_10px_40px_rgba(212,168,83,0.25)]
                    hover:border-gold transition-all duration-300
                  "
                >
                  <h3 className="font-montserrat font-bold text-dark text-xl mb-6">
                    {item.route}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b">
                      <span className="text-gray-600 font-inter">Sedan</span>
                      <span className="text-gold font-montserrat font-bold">
                        {item.sedan}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-inter">Van</span>
                      <span className="text-gold font-montserrat font-bold">
                        {item.van}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CITY TO CITY */}
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-dark mb-10">
              City-to-City Pricing
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark text-white">
                    {["Route", "Distance", "Price", "Duration"].map(
                      (h, idx) => (
                        <th
                          key={idx}
                          className="px-6 py-5 text-left font-montserrat text-lg"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>

                <tbody className="divide-y divide-border bg-white">
                  {[
                    {
                      route: "City Center → Downtown",
                      distance: "25 km",
                      price: "$85",
                      duration: "45 min",
                    },
                    {
                      route: "City → Neighboring City",
                      distance: "80 km",
                      price: "$180",
                      duration: "1.5 hrs",
                    },
                    {
                      route: "Regional Hub",
                      distance: "150 km",
                      price: "$350",
                      duration: "2.5 hrs",
                    },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/40 transition-all">
                      <td className="px-6 py-5 font-inter text-dark">
                        {item.route}
                      </td>
                      <td className="px-6 py-5 font-inter text-gray-600">
                        {item.distance}
                      </td>
                      <td className="px-6 py-5 text-gold font-montserrat font-bold">
                        {item.price}
                      </td>
                      <td className="px-6 py-5 font-inter text-gray-600">
                        {item.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gold/10 rounded-2xl p-12 text-center shadow-md border border-gold/20">
            <h3 className="text-3xl font-montserrat font-bold text-dark mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 font-inter mb-8">
              Have special requirements? Our team can create a tailored pricing
              plan.
            </p>
            <button className="luxury-button-gold text-lg px-10 py-4">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
