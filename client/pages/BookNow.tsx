import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  RefreshCcw,
  Info,
  Plane,
  ChevronDown,
} from "lucide-react";
import { GoogleMap } from "@/components/GoogleMap";

type RideType = "one-way" | "airport-pickup" | "hourly";

export default function BookNow() {
  const [rideType, setRideType] = useState<RideType>("one-way");
  const [formData, setFormData] = useState({
    pickupAddress: "",
    dropoffAddress: "",
    pickupTime: "Now",
    date: "",
    time: "",
    flightNumber: "",
    duration: "1 hour",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const swapLocations = () => {
    setFormData((p) => ({
      ...p,
      pickupAddress: p.dropoffAddress,
      dropoffAddress: p.pickupAddress,
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#f4f4f4]">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* LEFT PANEL */}
        <div className="bg-[#eee] p-6 flex justify-center">
          <div className="bg-white w-full max-w-md rounded-xl border shadow-sm p-6">
            {/* TABS */}
            <div className="flex gap-6 border-b pb-3 mb-6">
              {[
                { id: "one-way", label: "One Way" },
                { id: "airport-pickup", label: "Airport pickup" },
                { id: "hourly", label: "Hourly" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRideType(tab.id as RideType)}
                  className={`pb-2 font-semibold text-sm ${
                    rideType === tab.id
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* --------------------- */}
            {/* FORM STARTS HERE     */}
            {/* --------------------- */}
            <form className="space-y-6">
              {/* ================================================== */}
              {/* AIRPORT PICKUP → FLIGHT NUMBER FIELD              */}
              {/* ================================================== */}
              {rideType === "airport-pickup" && (
                <div className="border rounded-xl p-4 flex items-center gap-4 bg-white">
                  <Plane className="w-5 h-5 text-gray-700" />
                  <div className="w-full">
                    <label className="text-sm font-semibold block text-gray-800">
                      Flight Number *
                    </label>
                    <input
                      name="flightNumber"
                      placeholder="Please add flight details"
                      value={formData.flightNumber}
                      onChange={handleInputChange}
                      className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                    />
                  </div>
                </div>
              )}

              {/* PICKUP */}
              <div className="border rounded-xl p-4 flex items-center gap-4 bg-white">
                <MapPin className="w-5 h-5 text-gray-700" />
                <div className="w-full">
                  <label className="text-sm font-semibold text-gray-800">
                    Pickup
                  </label>
                  <input
                    name="pickupAddress"
                    placeholder="Address Finder"
                    value={formData.pickupAddress}
                    onChange={handleInputChange}
                    className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                  />
                </div>

                {/* Only show + icon in airport + hourly */}
                {rideType !== "one-way" && (
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    +
                  </button>
                )}

                <button
                  onClick={swapLocations}
                  type="button"
                  className="p-2 bg-gray-100 rounded-full"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
              </div>

              {/* DROPOFF (hidden for hourly because hourly is as-directed) */}
              {rideType !== "hourly" && (
                <div className="border rounded-xl p-4 flex items-center gap-4 bg-white">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <div className="w-full">
                    <label className="text-sm font-semibold text-gray-800">
                      Dropoff
                    </label>
                    <input
                      name="dropoffAddress"
                      placeholder="Address Finder"
                      value={formData.dropoffAddress}
                      onChange={handleInputChange}
                      className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                    />
                  </div>
                </div>
              )}

              {/* ================================================== */}
              {/* HOURLY → ASDIRECTED WARNING + DURATION            */}
              {/* ================================================== */}
              {rideType === "hourly" && (
                <>
                  {/* AS DIRECTED BOX */}
                  <div className="rounded-xl p-4 bg-yellow-50 border border-yellow-200 flex gap-3 items-start">
                    <Info className="w-5 h-5 text-yellow-700" />
                    <p className="text-sm text-gray-800">
                      Booking will be marked <b>'AsDirected'</b>
                    </p>
                  </div>

                  {/* DURATION SELECT */}
                  <div className="border rounded-xl p-4 bg-white flex items-center gap-4">
                    <Clock className="w-5 h-5 text-gray-700" />
                    <div className="w-full">
                      <label className="text-sm font-semibold text-gray-800">
                        Duration
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                      >
                        {[
                          "1 hour",
                          "2 hours",
                          "3 hours",
                          "4 hours",
                          "5 hours",
                        ].map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* ================================================== */}
              {/* AIRPORT → DATE + TIME                              */}
              {/* ================================================== */}
              {rideType === "airport-pickup" && (
                <>
                  {/* DATE */}
                  <div className="border rounded-xl p-4 flex items-center gap-4 bg-white">
                    <Calendar className="w-5 h-5 text-gray-700" />
                    <div className="w-full">
                      <label className="text-sm font-semibold text-gray-800">
                        Pickup Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                      />
                    </div>
                  </div>

                  {/* TIME */}
                  <div className="border rounded-xl p-4 flex items-center gap-4 bg-white">
                    <Clock className="w-5 h-5 text-gray-700" />
                    <div className="w-full">
                      <label className="text-sm font-semibold text-gray-800">
                        Pickup Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full mt-1 border-none focus:ring-0 text-gray-600"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* ================================================== */}
              {/* ONE WAY → TIME SELECT                              */}
              {/* ================================================== */}
              {rideType === "one-way" && (
                <div className="border rounded-xl p-4 bg-white">
                  <label className="text-sm font-semibold text-gray-800">
                    Choose time
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        pickupTime: p.pickupTime === "Now" ? "Later" : "Now",
                      }))
                    }
                    className="mt-3 w-[140px] px-4 py-2 flex items-center gap-2 bg-black text-white rounded-lg"
                  >
                    <Calendar className="w-4 h-4" /> Change time
                  </button>

                  {formData.pickupTime === "Later" && (
                    <>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="mt-3 w-full border rounded-lg px-4 py-2"
                      />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="mt-3 w-full border rounded-lg px-4 py-2"
                      />
                    </>
                  )}
                </div>
              )}

              {/* TIMEZONE FOOTER */}
              <div className="text-xs flex justify-between text-gray-600">
                <span>Booking Timezone: Europe/London</span>
                <span>Your Local Time: {new Date().toLocaleTimeString()}</span>
              </div>

              {/* CONTINUE BUTTON */}
              <button
                className="w-full bg-gray-200 text-gray-500 py-4 rounded-lg font-semibold"
                disabled
              >
                Continue
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT PANEL — MAP */}
        <div className="lg:col-span-2 relative">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
