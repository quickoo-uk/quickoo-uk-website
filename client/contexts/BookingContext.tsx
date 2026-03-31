import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface BookingData {
    // Booking type and basic info
    bookingType: 'oneway' | 'hourly';
    fromLocation: string;
    toLocation: string | string[];
    date: Date;
    time: string;
    duration: string;

    // Selected car
    selectedCar?: {
        id: string;
        name: string;
        image: string;
        price: number;
        passengers: number;
        luggage: number;
        features: string[];
        description?: string;
    };

    // Customer info
    customerInfo?: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        specialRequests?: string;
    };

    // Payment info (placeholder)
    paymentMethod?: string;
    termsAccepted?: boolean;
}

interface BookingContextType {
    bookingData: BookingData;
    updateBookingData: (data: Partial<BookingData>) => void;
    resetBooking: () => void;
}

const defaultBookingData: BookingData = {
    bookingType: 'oneway',
    fromLocation: '',
    toLocation: '',
    date: new Date(),
    time: '12:00 PM',
    duration: '4 hours',
};

const BOOKING_STORAGE_KEY = 'quickoo_booking_data_v1';

function readStoredBookingData(): BookingData | null {
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem(BOOKING_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as Partial<BookingData> & { date?: string | Date };
        if (!parsed || typeof parsed !== 'object') return null;

        const dateValue =
            parsed.date instanceof Date
                ? parsed.date
                : parsed.date
                    ? new Date(parsed.date)
                    : defaultBookingData.date;

        return {
            ...defaultBookingData,
            ...parsed,
            date: Number.isNaN(dateValue.getTime()) ? new Date() : dateValue,
        };
    } catch {
        return null;
    }
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [bookingData, setBookingData] = useState<BookingData>(() => {
        const stored = readStoredBookingData();
        return stored ?? defaultBookingData;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        try {
            window.localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(bookingData));
        } catch {
            // Ignore storage failures (private mode / quota / disabled storage)
        }
    }, [bookingData]);

    const updateBookingData = (data: Partial<BookingData>) => {
        setBookingData(prev => ({ ...prev, ...data }));
    };

    const resetBooking = () => {
        setBookingData(defaultBookingData);
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(BOOKING_STORAGE_KEY);
            } catch {
                // no-op
            }
        }
    };

    return (
        <BookingContext.Provider value={{ bookingData, updateBookingData, resetBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within BookingProvider');
    }
    return context;
};
