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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-white via-white to-muted flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold bg-opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </div>

        <div className="section-container relative z-10 w-full">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-dark mb-6">
            Get in Touch
          </h1>
          <p className="text-xl font-inter text-gray-600 max-w-2xl">
            We're here to help. Contact us anytime for booking or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {[
              {
                icon: Phone,
                title: "Phone",
                content: "+1 (234) 567-890",
                action: "tel:+1234567890",
              },
              {
                icon: Mail,
                title: "Email",
                content: "hello@xchauffur.com",
                action: "mailto:hello@xchauffur.com",
              },
              {
                icon: MapPin,
                title: "Address",
                content: "123 Luxury Lane, Premium City, PC 12345",
                action: "#",
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.title}
                  href={info.action}
                  className="bg-muted rounded-2xl p-8 hover:shadow-luxury transition-all text-center group"
                >
                  <div className="w-16 h-16 bg-gold bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:bg-opacity-30 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-montserrat font-bold text-dark text-lg mb-2">
                    {info.title}
                  </h3>
                  <p className="font-inter text-gray-600">{info.content}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-dark mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-inter text-dark font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-dark font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-dark font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-dark font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-dark font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg font-inter focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 resize-none"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full luxury-button-gold">
                  Send Message
                </button>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-dark mb-6">
                  Other Ways to Reach Us
                </h3>
              </div>

              {[
                {
                  icon: MessageSquare,
                  title: "WhatsApp",
                  description: "Chat with us directly",
                  action: "https://wa.me/1234567890",
                },
                {
                  icon: Phone,
                  title: "Call Support",
                  description: "24/7 customer support available",
                  action: "tel:+1234567890",
                },
              ].map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.action}
                    className="bg-muted rounded-2xl p-8 hover:shadow-luxury transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gold bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:bg-opacity-30 transition-colors">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-dark mb-1">
                          {method.title}
                        </h4>
                        <p className="font-inter text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}

              <div className="bg-gold bg-opacity-10 rounded-2xl p-8">
                <h4 className="font-montserrat font-bold text-dark mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 font-inter text-gray-600">
                  <p>Monday - Friday: 7:00 AM - 11:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  <p className="pt-4 text-gold font-semibold">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1040658581304!2d-74.00601692346193!3d40.71282033490849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0xe81e5de2a8124ed6!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
