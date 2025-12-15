export interface Car {
  name: string;
  image?: string;
  description?: string;
}

export interface CarType {
  id: string;
  name: string;
  description: string;
  cars: Car[];
}

export const FLEET_TYPES: CarType[] = [
  {
    id: "executive-cars",
    name: "Executive Cars",
    description: "Premium executive sedans designed for business professionals and corporate travel.",
    cars: [
      { name: "Mercedes-Benz E-Class" },
      { name: "BMW 5 Series" },
      { name: "Audi A6" },
    ],
  },
  {
    id: "luxury-vip",
    name: "Luxury (VIP Class)",
    description: "Ultra-luxurious vehicles for the most discerning clients seeking the pinnacle of comfort and prestige.",
    cars: [
      { name: "Mercedes-Benz S-Class" },
      { name: "BMW 7 Series" },
      { name: "Audi A8 L" },
    ],
  },
  {
    id: "premium-suvs",
    name: "Premium SUVs",
    description: "Spacious and powerful luxury SUVs combining elegance with versatility.",
    cars: [
      { name: "Range Rover Autobiography / Vogue" },
      { name: "Range Rover Sport" },
    ],
  },
  {
    id: "business-vans",
    name: "Business Vans",
    description: "Spacious and comfortable vans perfect for group travel and business events.",
    cars: [
      { name: "Mercedes-Benz V class" },
      { name: "Luggage Transfer" },
    ],
  },
  {
    id: "special-vehicles",
    name: "Special Vehicles (On Request)",
    description: "Exclusive and extraordinary vehicles available upon special request for unique occasions.",
    cars: [
      { name: "Stretch Limousines" },
      { name: "Rolls Royce" },
    ],
  },
  {
    id: "electric-cars",
    name: "Electric Class",
    description: "Cutting-edge electric vehicles combining luxury with environmental consciousness.",
    cars: [
      { name: "EQE" },
      { name: "EQS" },
      { name: "BMW I7" },
      { name: "EQV" },
    ],
  },
  {
    id: "vintage-cars-weddings",
    name: "Vintage Cars for Weddings",
    description: "Classic and timeless vintage vehicles perfect for making your wedding day unforgettable.",
    cars: [],
  },
];

export const getCarTypeById = (id: string): CarType | undefined => {
  return FLEET_TYPES.find((type) => type.id === id);
};

export const getCarTypeSlug = (name: string): string => {
  return name.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "");
};

