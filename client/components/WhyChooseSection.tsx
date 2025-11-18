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
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-dark mb-4">
            Why Choose XChauffur
          </h2>
          <p className="text-lg font-inter text-gray-600 max-w-2xl mx-auto">
            We've revolutionized premium transportation with uncompromising
            attention to every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-border rounded-2xl p-8 hover:shadow-luxury-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gold bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:bg-opacity-20 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
