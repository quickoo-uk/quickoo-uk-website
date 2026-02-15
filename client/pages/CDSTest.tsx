import { useState } from "react";
import {
    establishWidgetConfig,
    validateDiscount,
    getQuotes,
    finalizeBooking,
    requestPayment
} from "@/lib/cdsApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CDSTestPage() {
    const [apiKey, setApiKey] = useState("abcd-1234-cdsapikey");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // API 1: Widget Config
    const [guid, setGuid] = useState("user-0001-guid");

    // API 2: Discount
    const [discountCode, setDiscountCode] = useState("SUMMER2024");

    // API 3: Quotes
    const [quoteParams, setQuoteParams] = useState(JSON.stringify({
        pickupLocation: "Heathrow Airport",
        dropoffLocation: "London City",
        passengers: 2,
        pickupDateTime: new Date().toISOString()
    }, null, 2));

    // API 4: Booking
    const [bookingParams, setBookingParams] = useState(JSON.stringify({
        QuoteID: "quote-123",
        passengerName: "John Doe",
        passengerEmail: "john@example.com",
        passengerPhone: "+44 20 1234 5678"
    }, null, 2));

    // API 5: Payment
    const [paymentParams, setPaymentParams] = useState(JSON.stringify({
        BookingGUID: "booking-456",
        amount: 150.00,
        currency: "GBP"
    }, null, 2));

    const handleTest = async (apiFunction: Function, params: any, apiName: string) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const data = await apiFunction(apiKey, ...params);
            setResponse(data);
            toast.success(`${apiName} - Success!`);
        } catch (err: any) {
            setError(err.message || "An error occurred");
            toast.error(`${apiName} - Failed`);
        } finally {
            setLoading(false);
        }
    };

    const ResponseDisplay = () => (
        <>
            {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {response && (
                <div className="space-y-2">
                    <h3 className="font-semibold text-green-700">Success! API Response:</h3>
                    <pre className="bg-slate-900 text-green-400 p-4 rounded-md overflow-x-auto text-sm">
                        {JSON.stringify(response, null, 2)}
                    </pre>
                </div>
            )}
        </>
    );

    return (
        <div className="container mx-auto py-10 px-4 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">CDS Widget API Test Suite</h1>
                <p className="text-slate-600">
                    Direct integration with CDS API at{" "}
                    <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                        https://cdsapp-interchange.azurewebsites.net
                    </code>
                </p>
            </div>

            {/* Global API Key Input */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>🔑 API Configuration</CardTitle>
                    <CardDescription>Enter your CDS API key to test all endpoints</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">CDS API Key</label>
                        <Input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Enter your CDS API Key"
                            className="max-w-md font-mono"
                        />
                        <p className="text-xs text-slate-500">
                            Get your API key from CDS support
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="config" className="space-y-4">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="config">1. Config</TabsTrigger>
                    <TabsTrigger value="discount">2. Discount</TabsTrigger>
                    <TabsTrigger value="quotes">3. Quotes</TabsTrigger>
                    <TabsTrigger value="booking">4. Booking</TabsTrigger>
                    <TabsTrigger value="payment">5. Payment</TabsTrigger>
                </TabsList>

                {/* API 1: Widget Configuration */}
                <TabsContent value="config">
                    <Card>
                        <CardHeader>
                            <CardTitle>1️⃣ Establish Widget Configuration</CardTitle>
                            <CardDescription>
                                POST /cds/api/widget - Initialize the CDS widget with your client GUID
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Client GUID</label>
                                <Input
                                    value={guid}
                                    onChange={(e) => setGuid(e.target.value)}
                                    placeholder="Enter Client GUID"
                                    className="max-w-md"
                                />
                            </div>

                            <Button
                                onClick={() => handleTest(establishWidgetConfig, [guid], "Widget Config")}
                                disabled={loading}
                            >
                                {loading ? "Testing..." : "Test Widget Config API"}
                            </Button>

                            <ResponseDisplay />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* API 2: Discount Validation */}
                <TabsContent value="discount">
                    <Card>
                        <CardHeader>
                            <CardTitle>2️⃣ Validate Discount Code</CardTitle>
                            <CardDescription>
                                POST /cds/api/widget/discount - Check if a discount code is valid
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Discount Code</label>
                                <Input
                                    value={discountCode}
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    placeholder="Enter Discount Code"
                                    className="max-w-md"
                                />
                            </div>

                            <Button
                                onClick={() => handleTest(validateDiscount, [discountCode], "Discount Validation")}
                                disabled={loading}
                            >
                                {loading ? "Testing..." : "Test Discount API"}
                            </Button>

                            <ResponseDisplay />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* API 3: Get Quotes */}
                <TabsContent value="quotes">
                    <Card>
                        <CardHeader>
                            <CardTitle>3️⃣ Get Quotes</CardTitle>
                            <CardDescription>
                                POST /cds/api/widget/quote - Fetch available quotes for a journey
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Quote Parameters (JSON)</label>
                                <Textarea
                                    value={quoteParams}
                                    onChange={(e) => setQuoteParams(e.target.value)}
                                    placeholder="Enter quote parameters as JSON"
                                    className="font-mono text-sm"
                                    rows={8}
                                />
                                <p className="text-xs text-slate-500">
                                    Modify the JSON to match your quote requirements
                                </p>
                            </div>

                            <Button
                                onClick={() => {
                                    try {
                                        const params = JSON.parse(quoteParams);
                                        handleTest(getQuotes, [params], "Get Quotes");
                                    } catch (e) {
                                        toast.error("Invalid JSON format");
                                    }
                                }}
                                disabled={loading}
                            >
                                {loading ? "Testing..." : "Test Quotes API"}
                            </Button>

                            <ResponseDisplay />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* API 4: Finalize Booking */}
                <TabsContent value="booking">
                    <Card>
                        <CardHeader>
                            <CardTitle>4️⃣ Finalize Booking</CardTitle>
                            <CardDescription>
                                POST /cds/api/widget/book - Confirm and finalize a booking
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Booking Parameters (JSON)</label>
                                <Textarea
                                    value={bookingParams}
                                    onChange={(e) => setBookingParams(e.target.value)}
                                    placeholder="Enter booking parameters as JSON"
                                    className="font-mono text-sm"
                                    rows={8}
                                />
                                <p className="text-xs text-slate-500">
                                    Include QuoteID and passenger details
                                </p>
                            </div>

                            <Button
                                onClick={() => {
                                    try {
                                        const params = JSON.parse(bookingParams);
                                        handleTest(finalizeBooking, [params], "Finalize Booking");
                                    } catch (e) {
                                        toast.error("Invalid JSON format");
                                    }
                                }}
                                disabled={loading}
                            >
                                {loading ? "Testing..." : "Test Booking API"}
                            </Button>

                            <ResponseDisplay />
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* API 5: Request Payment */}
                <TabsContent value="payment">
                    <Card>
                        <CardHeader>
                            <CardTitle>5️⃣ Request Payment (Stripe)</CardTitle>
                            <CardDescription>
                                POST /cds/api/widget/payment - Initiate payment for a booking
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Payment Parameters (JSON)</label>
                                <Textarea
                                    value={paymentParams}
                                    onChange={(e) => setPaymentParams(e.target.value)}
                                    placeholder="Enter payment parameters as JSON"
                                    className="font-mono text-sm"
                                    rows={6}
                                />
                                <p className="text-xs text-slate-500">
                                    Include BookingGUID and payment amount
                                </p>
                            </div>

                            <Button
                                onClick={() => {
                                    try {
                                        const params = JSON.parse(paymentParams);
                                        handleTest(requestPayment, [params], "Request Payment");
                                    } catch (e) {
                                        toast.error("Invalid JSON format");
                                    }
                                }}
                                disabled={loading}
                            >
                                {loading ? "Testing..." : "Test Payment API"}
                            </Button>

                            <ResponseDisplay />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
