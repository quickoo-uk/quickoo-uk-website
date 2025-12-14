import React, { createContext, useContext, useState, ReactNode } from 'react';

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

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [bookingData, setBookingData] = useState<BookingData>(defaultBookingData);

    const updateBookingData = (data: Partial<BookingData>) => {
        setBookingData(prev => ({ ...prev, ...data }));
    };

    const resetBooking = () => {
        setBookingData(defaultBookingData);
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
