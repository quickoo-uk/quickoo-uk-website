export type AdminBooking = {
  id: string;
  createdAt: string;
  bookingType: "oneway" | "hourly";
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  fromLocation: string;
  toLocation: string;
  flightNumber?: string;
  date: string;
  pickupTime: string;
  duration?: string;
  carClass: string;
  status: "pending" | "confirmed" | "completed";
};

export const adminMockBookings: AdminBooking[] = [
  {
    id: "QCK-BK-10241",
    createdAt: "2026-03-31 10:18",
    bookingType: "oneway",
    customerName: "Aarav Sharma",
    customerEmail: "aarav.sharma@example.com",
    customerPhone: "+44 7400 123456",
    fromLocation: "Heathrow Airport, London",
    toLocation: "Canary Wharf, London",
    flightNumber: "BA2490",
    date: "Tue, Mar 31, 2026",
    pickupTime: "11:45 AM",
    carClass: "Business Class",
    status: "confirmed",
  },
  {
    id: "QCK-BK-10242",
    createdAt: "2026-03-31 11:02",
    bookingType: "hourly",
    customerName: "Olivia Smith",
    customerEmail: "olivia.smith@example.com",
    customerPhone: "+44 7700 100200",
    fromLocation: "The Savoy, London",
    toLocation: "N/A",
    date: "Tue, Mar 31, 2026",
    pickupTime: "02:15 PM",
    duration: "6 hours",
    carClass: "First Class",
    status: "pending",
  },
  {
    id: "QCK-BK-10243",
    createdAt: "2026-03-31 12:24",
    bookingType: "oneway",
    customerName: "Rohan Patel",
    customerEmail: "rohan.patel@example.com",
    customerPhone: "+44 7811 223344",
    fromLocation: "Manchester Airport",
    toLocation: "Leeds City Centre",
    flightNumber: "VS122",
    date: "Wed, Apr 1, 2026",
    pickupTime: "09:10 AM",
    carClass: "Business Van",
    status: "completed",
  },
];

