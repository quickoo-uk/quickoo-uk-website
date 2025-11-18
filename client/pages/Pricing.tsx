import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-white via-white to-muted flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>

        <div className="section-container relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-dark mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-2xl">
            No hidden fees. Know exactly what you'll pay before you book.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="space-y-16">
            {/* Hourly Rates */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-8">
                Hourly Rates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    vehicle: "Economy Class",
                    rate: "$45",
                    features: ["Sedan", "4 Passengers", "Standard Amenities"],
                  },
                  {
                    vehicle: "Premium Class",
                    rate: "$75",
                    features: ["Luxury Sedan", "4 Passengers", "Premium Features"],
                  },
                  {
                    vehicle: "Elite Class",
                    rate: "$110",
                    features: ["S-Class/BMW", "4 Passengers", "Full Amenities"],
                  },
                  {
                    vehicle: "Van Service",
                    rate: "$95",
                    features: ["7 Passengers", "Extra Luggage", "Group Travel"],
                  },
                  {
                    vehicle: "Executive Class",
                    rate: "$150",
                    features: ["Range Rover", "4 Passengers", "White Glove Service"],
                  },
                  {
                    vehicle: "Group Transport",
                    rate: "$120",
                    features: ["Minibus", "12+ Passengers", "Professional Driver"],
                  },
                ].map((item) => (
                  <div
                    key={item.vehicle}
                    className="bg-muted rounded-2xl p-8 border border-border hover:border-gold transition-colors"
                  >
                    <h3 className="font-montserrat font-bold text-dark mb-4">
                      {item.vehicle}
                    </h3>
                    <p className="text-4xl font-montserrat font-bold text-gold mb-6">
                      {item.rate}
                      <span className="text-lg text-gray-600">/hr</span>
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 font-inter text-sm text-gray-600"
                        >
                          <Check className="w-4 h-4 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Airport Transfers */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-8">
                Airport Transfers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { route: "City Airport", sedan: "$65", van: "$95" },
                  { route: "International Hub", sedan: "$85", van: "$125" },
                  { route: "Regional Airport", sedan: "$45", van: "$65" },
                ].map((item) => (
                  <div
                    key={item.route}
                    className="bg-white border border-border rounded-2xl p-8 hover:shadow-luxury transition-all"
                  >
                    <h3 className="font-montserrat font-bold text-dark mb-6">
                      {item.route}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-border">
                        <span className="font-inter text-gray-600">Sedan</span>
                        <span className="font-montserrat font-bold text-gold">
                          {item.sedan}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-inter text-gray-600">Van</span>
                        <span className="font-montserrat font-bold text-gold">
                          {item.van}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* City-to-City */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-8">
                City-to-City Pricing
              </h2>
              <div className="bg-muted rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-dark text-white">
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Route
                      </th>
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Distance
                      </th>
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left font-montserrat font-bold">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      {
                        route: "City Center to Downtown",
                        distance: "25 km",
                        price: "$85",
                        duration: "45 min",
                      },
                      {
                        route: "City to Neighboring City",
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
                    ].map((item) => (
                      <tr key={item.route} className="bg-white">
                        <td className="px-6 py-4 font-inter text-dark">
                          {item.route}
                        </td>
                        <td className="px-6 py-4 font-inter text-gray-600">
                          {item.distance}
                        </td>
                        <td className="px-6 py-4 font-montserrat font-bold text-gold">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 font-inter text-gray-600">
                          {item.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gold bg-opacity-10 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-montserrat font-bold text-dark mb-4">
              Need a Custom Quote?
            </h3>
            <p className="font-inter text-gray-600 mb-8">
              Have special requirements or need a custom package? Contact our team.
            </p>
            <button className="luxury-button-gold">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
