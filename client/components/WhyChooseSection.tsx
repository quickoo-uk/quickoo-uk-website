import { Shield, DollarSign, Crown, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Vetted drivers with pristine records and comprehensive insurance coverage.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. Know your fare upfront with instant quotes.",
  },
  {
    icon: Crown,
    title: "Luxury Fleet",
    description:
      "Hand-picked premium vehicles maintained to the highest standards.",
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    description:
      "Experienced, courteous drivers trained in luxury service standards.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-[#f9f7ff] via-white to-[#eef4ff]">
      <div className="section-container">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-brand-soft text-gold rounded-full text-sm font-semibold mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-6">
            Experience Luxury Redefined
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-3xl mx-auto">
            We've revolutionized premium transportation with uncompromising
            attention to every detail, ensuring your journey is exceptional
            every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur rounded-2xl p-8 border border-transparent hover:border-gold/40 hover:shadow-[0_25px_70px_rgba(94,75,255,0.2)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-3xl group-hover:bg-gold/20 transition-all"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-soft rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>

                  <h3 className="text-xl font-montserrat font-bold text-dark mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
