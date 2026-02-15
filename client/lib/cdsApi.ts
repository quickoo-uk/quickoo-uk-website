// CDS Widget API Client Helpers
// Direct calls to CDS API - API key must be provided by caller

const CDS_API_BASE = 'https://cdsapp-interchange.azurewebsites.net';

export interface CDSConfigResponse {
    SessionGUID: string;
    // Add other properties based on actual response
}

export interface DiscountResponse {
    isValid: boolean;
    discountAmount?: number;
    // Add other properties based on actual response
}

export interface Quote {
    QuoteID: string;
    price: number;
    // Add other properties based on actual response
}

export interface BookingResponse {
    BookingGUID: string;
    // Add other properties based on actual response
}

export interface PaymentResponse {
    paymentUrl: string;
    // Add other properties based on actual response
}

// Helper function to call CDS API
const callCDSAPI = async (endpoint: string, apiKey: string, payload: any) => {
    const response = await fetch(`${CDS_API_BASE}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            CDSAPIKey: apiKey,
            ...payload,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`CDS API Error (${response.status}): ${errorText}`);
    }

    return await response.json();
};

// 1️⃣ Establish Widget Configuration
export const establishWidgetConfig = async (apiKey: string, guid: string): Promise<CDSConfigResponse> => {
    try {
        return await callCDSAPI('/cds/api/widget', apiKey, { GUID: guid });
    } catch (error) {
        console.error('Error establishing widget config:', error);
        throw error;
    }
};

// 2️⃣ Validate Discount Code
export const validateDiscount = async (
    apiKey: string,
    discountCode: string,
    additionalParams?: Record<string, any>
): Promise<DiscountResponse> => {
    try {
        return await callCDSAPI('/cds/api/widget/discount', apiKey, {
            discountCode,
            ...additionalParams
        });
    } catch (error) {
        console.error('Error validating discount:', error);
        throw error;
    }
};

// 3️⃣ Get Quotes
export const getQuotes = async (apiKey: string, quoteParams: Record<string, any>): Promise<Quote[]> => {
    try {
        return await callCDSAPI('/cds/api/widget/quote', apiKey, quoteParams);
    } catch (error) {
        console.error('Error getting quotes:', error);
        throw error;
    }
};

// 4️⃣ Finalize Booking
export const finalizeBooking = async (apiKey: string, bookingParams: Record<string, any>): Promise<BookingResponse> => {
    try {
        return await callCDSAPI('/cds/api/widget/book', apiKey, bookingParams);
    } catch (error) {
        console.error('Error finalizing booking:', error);
        throw error;
    }
};

// 5️⃣ Request Payment
export const requestPayment = async (apiKey: string, paymentParams: Record<string, any>): Promise<PaymentResponse> => {
    try {
        return await callCDSAPI('/cds/api/widget/payment', apiKey, paymentParams);
    } catch (error) {
        console.error('Error requesting payment:', error);
        throw error;
    }
};
