export type FleetAmenityId = "wifi" | "gps" | "water" | "childSeat";

export interface FleetAmenity {
  id: FleetAmenityId;
  label: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  classLabel: string;
  image: string;
  passengers: number;
  guests: string;
  luggage: string;
  bestFor: string;
  summary: string;
  details: string[];
  highlights: string[];
  suitableFor: string[];
  amenities: FleetAmenity[];
}

export const FLEET_CARD_AMENITIES: FleetAmenity[] = [
  { id: "wifi", label: "Wifi Available" },
  { id: "gps", label: "GPS Tracking" },
  { id: "water", label: "Water Available" },
  { id: "childSeat", label: "Child seat available" },
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "mercedes-e-class",
    name: "Mercedes E Class",
    classLabel: "Executive Saloon",
    image: "/cars_images/e_class.webp",
    passengers: 3,
    guests: "Up to 3 guests",
    luggage: "2 standard bags",
    bestFor: "Corporate travel and airport transfers",
    summary:
      "A discreet executive saloon for business appointments, airport collections, and everyday chauffeur travel across the UK.",
    details: [
      "The Mercedes E-Class is the working standard of a luxury chauffeur service: quiet, composed, and professionally presented.",
    ],
    highlights: [
      "Extended rear legroom",
      "Rear climate control",
      "Ambient cabin lighting",
      "Premium sound system",
    ],
    suitableFor: [
      "Corporate meetings",
      "London airport transfers",
      "Hotel collections",
      "Executive day hire",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes S-Class",
    classLabel: "First Class Saloon",
    image: "/cars_images/s-class.webp",
    passengers: 3,
    guests: "Up to 3 guests",
    luggage: "2 standard bags",
    bestFor: "VIP and board-level travel",
    summary:
      "The flagship Mercedes saloon for guests who expect first-class comfort, privacy, and a quieter cabin from door to door.",
    details: [
      "The S-Class is reserved for senior executives, visiting clients, and occasions that call for a more formal arrival.",
    ],
    highlights: [
      "Executive rear seating",
      "Chauffeur package with footrest",
      "Rear seat massage",
      "Burmester surround sound",
    ],
    suitableFor: [
      "VIP transportation",
      "Corporate roadshows",
      "Diplomatic collections",
      "Luxury airport transfers",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes V-Class",
    classLabel: "Business MPV",
    image: "/cars_images/v-class.webp",
    passengers: 6,
    guests: "Up to 6 guests",
    luggage: "6 standard bags",
    bestFor: "Families and executive groups",
    summary:
      "A spacious Mercedes MPV that keeps every guest in the same vehicle without giving up chauffeur comfort or luggage room.",
    details: [
      "The V-Class is the preferred choice when a team, family, or client group needs to travel together in one cabin.",
    ],
    highlights: [
      "Conference-style seating",
      "Electric sliding doors",
      "Nappa leather upholstery",
      "Premium cabin sound",
    ],
    suitableFor: [
      "Group airport transfers",
      "Family travel",
      "Conference transport",
      "Corporate roadshows",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "range-rover",
    name: "Range Rover",
    classLabel: "Premium SUV",
    image: "/cars_images/range-rover.webp",
    passengers: 4,
    guests: "Up to 4 guests",
    luggage: "4 standard bags",
    bestFor: "City presence and event arrivals",
    summary:
      "A commanding luxury SUV for guests who want a higher ride, a polished arrival, and extra space for luggage or evening wear.",
    details: [
      "Range Rover is chosen for events, hotel collections, and city travel where presence and comfort matter equally.",
    ],
    highlights: [
      "Executive rear seating",
      "Meridian sound system",
      "Panoramic sliding roof",
      "Refined air suspension",
    ],
    suitableFor: [
      "Corporate events",
      "Wedding arrivals",
      "VIP airport transport",
      "Luxury city travel",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "mercedes-sprinter",
    name: "Mercedes Sprinter",
    classLabel: "Executive Van",
    image: "/cars_images/sprinter.webp",
    passengers: 8,
    guests: "Up to 8 guests",
    luggage: "8 standard bags",
    bestFor: "Larger parties with luggage",
    summary:
      "An executive Mercedes Sprinter for groups who need more seats and a dedicated luggage area, without moving into a full coach.",
    details: [
      "Ideal for crew transfers, extended families, and corporate groups travelling with several cases.",
    ],
    highlights: [
      "High-roof passenger cabin",
      "Generous luggage bay",
      "Climate-controlled seating",
      "Professional chauffeur presentation",
    ],
    suitableFor: [
      "Event group transfers",
      "Crew and staff movements",
      "Airport collections with luggage",
      "Multi-stop itineraries",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "mercedes-minibus",
    name: "Luxury Mercedes Minibus",
    classLabel: "Group Transfer",
    image: "/cars_images/mercedes-minibus.webp",
    passengers: 16,
    guests: "Up to 16 guests",
    luggage: "Dedicated luggage hold",
    bestFor: "Conferences and larger parties",
    summary:
      "A luxury Mercedes minibus for conferences, celebrations, and larger groups who want one coordinated chauffeur transfer.",
    details: [
      "One vehicle keeps the party together, with a professional chauffeur and a cabin prepared for longer journeys.",
    ],
    highlights: [
      "High-capacity seating",
      "Air-conditioned cabin",
      "Ample luggage capacity",
      "Coordinated group arrival",
    ],
    suitableFor: [
      "Conference shuttles",
      "Wedding guest transfers",
      "Sports and event groups",
      "Hotel to venue movements",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "bentley-mulsanne",
    name: "Bentley Mulsanne",
    classLabel: "Prestige Saloon",
    image: "/cars_images/bentley-mulsanne.webp",
    passengers: 3,
    guests: "Up to 3 guests",
    luggage: "2 standard bags",
    bestFor: "Occasions that require distinction",
    summary:
      "A hand-built Bentley for guests who want a rarer presence: private dinners, ceremonial arrivals, and prestige chauffeur hire.",
    details: [
      "The Mulsanne is requested when the journey itself should feel as considered as the occasion it serves.",
    ],
    highlights: [
      "Handcrafted cabin",
      "Deep leather seating",
      "Whisper-quiet ride",
      "Bespoke interior finishes",
    ],
    suitableFor: [
      "Private celebrations",
      "Hotel and theatre arrivals",
      "Prestige airport collections",
      "Special occasion hire",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
  {
    id: "rolls-royce-phantom",
    name: "Rolls Royce Phantom VIII",
    classLabel: "Ceremonial Saloon",
    image: "/cars_images/rolls-royce.webp",
    passengers: 3,
    guests: "Up to 3 guests",
    luggage: "2 standard bags",
    bestFor: "The most formal arrivals",
    summary:
      "The Phantom VIII is the ceremonial choice: a composed, formal saloon for weddings, state-level collections, and private evenings.",
    details: [
      "Reserved for occasions where the arrival should be remembered, with a chauffeur trained for the highest standard of discretion.",
    ],
    highlights: [
      "Starlight headliner",
      "Coach doors",
      "Bespoke audio",
      "Lambswool cabin finish",
    ],
    suitableFor: [
      "Wedding arrivals",
      "Gala and theatre evenings",
      "Private VIP collections",
      "Ceremonial chauffeur hire",
    ],
    amenities: FLEET_CARD_AMENITIES,
  },
];
