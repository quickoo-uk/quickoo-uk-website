interface DarkHeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const DarkHeroSection = ({
  title,
  subtitle,
  backgroundImage = "/dark-hero-default.jpg",
}: DarkHeroSectionProps) => {
  return (
    <section className="relative min-h-[50vh] bg-dark flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl font-inter text-gray-300">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};
