import { RequestHandler } from 'express';

// Base URL from CDS Widget API README
const CDS_API_BASE = 'https://cdsapp-interchange.azurewebsites.net';
const CDS_API_KEY = process.env.CDS_API_KEY;

// Helper function to make CDS API calls
const callCDSAPI = async (endpoint: string, payload: any) => {
    if (!CDS_API_KEY) {
        throw new Error('CDS_API_KEY not configured');
    }

    const response = await fetch(`${CDS_API_BASE}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            CDSAPIKey: CDS_API_KEY,
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
// POST /cds/api/widget
export const establishWidgetConfig: RequestHandler = async (req, res) => {
    try {
        const { GUID } = req.body;

        if (!GUID) {
            res.status(400).json({ error: 'Missing GUID in request body' });
            return;
        }

        const data = await callCDSAPI('/cds/api/widget', { GUID });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error establishing widget config:', error);
        res.status(500).json({
            error: 'Failed to establish widget configuration',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};

// 2️⃣ Check Discount Code
// POST /cds/api/widget/discount
export const validateDiscount: RequestHandler = async (req, res) => {
    try {
        const { discountCode, ...otherParams } = req.body;

        if (!discountCode) {
            res.status(400).json({ error: 'Missing discountCode in request body' });
            return;
        }

        const data = await callCDSAPI('/cds/api/widget/discount', {
            discountCode,
            ...otherParams
        });
        res.status(200).json(data);
    } catch (error) {
        console.error('Error validating discount:', error);
        res.status(500).json({
            error: 'Failed to validate discount code',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};

// 3️⃣ Get Quotes
// POST /cds/api/widget/quote
export const getQuotes: RequestHandler = async (req, res) => {
    try {
        const quoteParams = req.body;

        if (!quoteParams || Object.keys(quoteParams).length === 0) {
            res.status(400).json({ error: 'Missing quote parameters in request body' });
            return;
        }

        const data = await callCDSAPI('/cds/api/widget/quote', quoteParams);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({
            error: 'Failed to fetch quotes',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};

// 4️⃣ Finalize Booking
// POST /cds/api/widget/book
export const finalizeBooking: RequestHandler = async (req, res) => {
    try {
        const bookingParams = req.body;

        if (!bookingParams || Object.keys(bookingParams).length === 0) {
            res.status(400).json({ error: 'Missing booking parameters in request body' });
            return;
        }

        const data = await callCDSAPI('/cds/api/widget/book', bookingParams);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error finalizing booking:', error);
        res.status(500).json({
            error: 'Failed to finalize booking',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};

// 5️⃣ Request Payment (Stripe)
// POST /cds/api/widget/payment
export const requestPayment: RequestHandler = async (req, res) => {
    try {
        const paymentParams = req.body;

        if (!paymentParams || Object.keys(paymentParams).length === 0) {
            res.status(400).json({ error: 'Missing payment parameters in request body' });
            return;
        }

        const data = await callCDSAPI('/cds/api/widget/payment', paymentParams);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error requesting payment:', error);
        res.status(500).json({
            error: 'Failed to request payment',
            details: error instanceof Error ? error.message : String(error)
        });
    }
};
