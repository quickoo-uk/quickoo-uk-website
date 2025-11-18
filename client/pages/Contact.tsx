import { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* ============================ */}
      {/*      HERO SECTION            */}
      {/* ============================ */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 font-inter">
            Contact us anytime for bookings, inquiries, or premium chauffeur
            support.
          </p>
        </div>
      </section>

      {/* ============================ */}
      {/*      CONTACT CARDS           */}
      {/* ============================ */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+44 207 078 8993",
                action: "tel:+442070788993",
              },
              {
                icon: Mail,
                title: "Email",
                content: "support@xchauffur.com",
                action: "mailto:support@xchauffur.com",
              },
              {
                icon: MapPin,
                title: "Address",
                content: "London, United Kingdom",
                action: "#",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.action}
                  className="
                    group bg-dark text-white rounded-2xl p-8 
                    hover:bg-black transition-all shadow-xl
                  "
                >
                  <div className="w-16 h-16 bg-white/10 group-hover:bg-gold/30 transition rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-1 text-center">
                    {info.title}
                  </h3>
                  <p className="text-gray-300 font-inter text-center">
                    {info.content}
                  </p>
                </a>
              );
            })}
          </div>

          {/* ============================ */}
          {/* CONTACT FORM + SIDE PANEL   */}
          {/* ============================ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FORM */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="font-inter font-semibold text-dark mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-4 py-3 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-gold/40
                    "
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter font-semibold mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/40"
                    />
                  </div>

                  <div>
                    <label className="font-inter font-semibold mb-1 block">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/40"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="font-inter font-semibold mb-1 block">
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="
                      w-full px-4 py-3 border border-gray-300 rounded-lg 
                      focus:ring-2 focus:ring-gold/40
                    "
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-inter font-semibold mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold/40 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="luxury-button-gold w-full text-lg py-4"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT SIDE CONTACT OPTIONS */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-dark mb-6">
                  Other Ways to Reach Us
                </h3>
              </div>

              {[
                {
                  icon: MessageSquare,
                  title: "WhatsApp",
                  description: "Chat with our support team",
                  action: "https://wa.me/442070788993",
                },
                {
                  icon: Phone,
                  title: "Call Support",
                  description: "24/7 chauffeur assistance",
                  action: "tel:+442070788993",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.action}
                    className="
                      flex bg-dark rounded-2xl p-6 gap-5 items-center 
                      hover:bg-black transition-all shadow-lg
                    "
                  >
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-montserrat font-bold">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm font-inter">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}

              <div className="bg-gold/10 rounded-2xl p-8">
                <h4 className="font-montserrat text-dark font-bold text-xl mb-4">
                  Business Hours
                </h4>
                <p className="font-inter text-gray-700 leading-relaxed">
                  Monday – Friday: 7:00 AM – 11:00 PM <br />
                  Saturday – Sunday: 8:00 AM – 10:00 PM <br />
                  <span className="text-gold font-bold block mt-3">
                    24/7 Emergency Support Available
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-96 bg-muted overflow-hidden rounded-t-3xl shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="100%"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
}
