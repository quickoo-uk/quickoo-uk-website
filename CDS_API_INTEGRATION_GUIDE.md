# 🚀 CDS API Integration Guide - Quickoo Booking Flow

## Overview
This guide shows exactly where and how the CDS Widget APIs are integrated into the Quickoo booking flow.

---

## 📍 Integration Points

### 1. **BookNow Page** → Widget Configuration
**File**: `client/pages/BookNow.tsx`
**When**: User fills out booking form and clicks "Continue"
**API**: `establishWidgetConfig(apiKey, guid)`

```typescript
// Add at the top
import { establishWidgetConfig } from '@/lib/cdsApi';
import { toast } from 'sonner';

// Add state for CDS
const [cdsSessionGUID, setCdsSessionGUID] = useState<string | null>(null);
const CDS_API_KEY = "your-cds-api-key"; // Store securely

// In handleContinue function (line 360)
onClick={async () => {
  if (isFormValid()) {
    try {
      // 1. Initialize CDS Widget
      const config = await establishWidgetConfig(CDS_API_KEY, "user-" + Date.now());
      setCdsSessionGUID(config.SessionGUID);
      
      // 2. Update booking context
      updateBookingData({
        bookingType,
        fromLocation: formData.pickupAddress,
        toLocation: formData.dropoffAddress,
        date,
        time: formData.time || formData.pickupTime,
        duration: formData.duration,
        cdsSessionGUID: config.SessionGUID, // Store for later use
      });

      toast.success("Booking initialized");
      navigate('/booking/select-car');
    } catch (error) {
      toast.error("Failed to initialize booking");
      console.error(error);
    }
  }
}}
```

---

### 2. **SelectCar Page** → Get Quotes
**File**: `client/pages/booking/SelectCar.tsx`
**When**: User selects a vehicle class
**API**: `getQuotes(apiKey, quoteParams)`

```typescript
// Add at the top
import { getQuotes } from '@/lib/cdsApi';
import { toast } from 'sonner';

// Add state
const [quotes, setQuotes] = useState<any[]>([]);
const [loadingQuotes, setLoadingQuotes] = useState(false);
const CDS_API_KEY = "your-cds-api-key";

// Modify handleSelectCar function (line 51)
const handleSelectCar = async (car: typeof VEHICLE_CLASSES[0]) => {
  if (selectedCarId === car.id) {
    setSelectedCarId(null);
    updateBookingData({ selectedCar: undefined });
  } else {
    setSelectedCarId(car.id);
    
    try {
      setLoadingQuotes(true);
      
      // Fetch quotes from CDS
      const quoteParams = {
        SessionGUID: bookingData.cdsSessionGUID,
        pickupLocation: bookingData.fromLocation,
        dropoffLocation: bookingData.toLocation,
        pickupDateTime: bookingData.date.toISOString(),
        passengers: car.guests,
        vehicleClass: car.id,
      };
      
      const cdsQuotes = await getQuotes(CDS_API_KEY, quoteParams);
      setQuotes(cdsQuotes);
      
      // Use CDS quote price if available
      const cdsPrice = cdsQuotes[0]?.price || car.priceMain;
      
      updateBookingData({
        selectedCar: {
          id: car.id,
          name: car.name,
          image: car.image,
          price: cdsPrice, // Use CDS price
          passengers: car.guests,
          luggage: car.luggage,
          features: car.vehicles,
          description: car.description,
          quoteID: cdsQuotes[0]?.QuoteID, // Store for booking
        }
      });
      
      toast.success("Quote retrieved");
    } catch (error) {
      toast.error("Failed to get quote");
      console.error(error);
      // Fallback to default price
      updateBookingData({
        selectedCar: {
          id: car.id,
          name: car.name,
          image: car.image,
          price: car.priceMain,
          passengers: car.guests,
          luggage: car.luggage,
          features: car.vehicles,
          description: car.description
        }
      });
    } finally {
      setLoadingQuotes(false);
    }
  }
};
```

---

### 3. **CustomerInfo Page** → Validate Discount (Optional)
**File**: `client/pages/booking/CustomerInfo.tsx`
**When**: User enters a discount code
**API**: `validateDiscount(apiKey, discountCode)`

```typescript
// Add at the top
import { validateDiscount } from '@/lib/cdsApi';

// Add state
const [discountCode, setDiscountCode] = useState("");
const [discountApplied, setDiscountApplied] = useState(false);
const CDS_API_KEY = "your-cds-api-key";

// Add discount validation function
const handleApplyDiscount = async () => {
  if (!discountCode.trim()) return;
  
  try {
    const result = await validateDiscount(CDS_API_KEY, discountCode, {
      SessionGUID: bookingData.cdsSessionGUID,
      QuoteID: bookingData.selectedCar?.quoteID,
    });
    
    if (result.isValid) {
      setDiscountApplied(true);
      updateBookingData({
        discountCode,
        discountAmount: result.discountAmount,
      });
      toast.success(`Discount applied: £${result.discountAmount}`);
    } else {
      toast.error("Invalid discount code");
    }
  } catch (error) {
    toast.error("Failed to validate discount");
    console.error(error);
  }
};

// Add discount input field in the form
<div className="space-y-2">
  <label className="text-sm font-medium">Discount Code (Optional)</label>
  <div className="flex gap-2">
    <Input 
      value={discountCode}
      onChange={(e) => setDiscountCode(e.target.value)}
      placeholder="Enter discount code"
      disabled={discountApplied}
    />
    <Button 
      onClick={handleApplyDiscount}
      disabled={discountApplied || !discountCode.trim()}
    >
      {discountApplied ? "Applied" : "Apply"}
    </Button>
  </div>
</div>
```

---

### 4. **Checkout Page** → Finalize Booking & Request Payment
**File**: `client/pages/booking/Checkout.tsx`
**When**: User clicks "Confirm & Pay"
**APIs**: `finalizeBooking()` then `requestPayment()`

```typescript
// Add at the top
import { finalizeBooking, requestPayment } from '@/lib/cdsApi';
import { toast } from 'sonner';

// Add state
const [processingPayment, setProcessingPayment] = useState(false);
const CDS_API_KEY = "your-cds-api-key";

// Add payment handler
const handleConfirmAndPay = async () => {
  setProcessingPayment(true);
  
  try {
    // Step 1: Finalize booking with CDS
    const bookingParams = {
      SessionGUID: bookingData.cdsSessionGUID,
      QuoteID: bookingData.selectedCar?.quoteID,
      passengerName: bookingData.customerInfo?.name,
      passengerEmail: bookingData.customerInfo?.email,
      passengerPhone: bookingData.customerInfo?.phone,
      pickupLocation: bookingData.fromLocation,
      dropoffLocation: bookingData.toLocation,
      pickupDateTime: bookingData.date.toISOString(),
      discountCode: bookingData.discountCode,
    };
    
    const booking = await finalizeBooking(CDS_API_KEY, bookingParams);
    
    toast.success("Booking confirmed!");
    
    // Step 2: Request payment
    const paymentParams = {
      BookingGUID: booking.BookingGUID,
      amount: calculateFinalPrice(), // Your price calculation
      currency: "GBP",
      returnUrl: window.location.origin + "/booking/success",
      cancelUrl: window.location.origin + "/booking/checkout",
    };
    
    const payment = await requestPayment(CDS_API_KEY, paymentParams);
    
    // Step 3: Redirect to Stripe payment
    window.location.href = payment.paymentUrl;
    
  } catch (error) {
    toast.error("Payment failed. Please try again.");
    console.error(error);
    setProcessingPayment(false);
  }
};

// Update the payment button
<Button 
  onClick={handleConfirmAndPay}
  disabled={processingPayment}
  className="w-full"
>
  {processingPayment ? "Processing..." : "Confirm & Pay"}
</Button>
```

---

## 🔐 API Key Management

**IMPORTANT**: Store your CDS API key securely!

### Option 1: Environment Variable (Recommended)
```typescript
// Create a config file: client/lib/config.ts
export const CDS_API_KEY = import.meta.env.VITE_CDS_API_KEY || "";

// In .env file
VITE_CDS_API_KEY=your-actual-cds-api-key
```

### Option 2: Backend Proxy (Most Secure)
Use the backend routes we created earlier to keep the API key on the server.

---

## 📊 Complete Booking Flow

```
1. BookNow Page
   ↓ User fills form
   ↓ Click "Continue"
   ↓ Call: establishWidgetConfig()
   ↓ Store: SessionGUID
   ↓
2. SelectCar Page
   ↓ User selects vehicle
   ↓ Call: getQuotes()
   ↓ Store: QuoteID, Price
   ↓
3. CustomerInfo Page
   ↓ User enters details
   ↓ (Optional) Call: validateDiscount()
   ↓ Store: Customer info
   ↓
4. Checkout Page
   ↓ User reviews booking
   ↓ Click "Confirm & Pay"
   ↓ Call: finalizeBooking()
   ↓ Get: BookingGUID
   ↓ Call: requestPayment()
   ↓ Redirect to Stripe
   ↓
5. Success Page
   ↓ Payment complete
   ↓ Show confirmation
```

---

## 🧪 Testing Checklist

- [ ] Test Widget Config on BookNow page
- [ ] Test Get Quotes on SelectCar page
- [ ] Test Discount validation (if implemented)
- [ ] Test Finalize Booking on Checkout
- [ ] Test Payment redirect
- [ ] Test error handling for each API
- [ ] Test with real CDS API key

---

## 📝 Next Steps

1. **Get Real API Key** from CDS support
2. **Update API Key** in your config
3. **Test Each Integration Point** using the test page first
4. **Implement Error Handling** for production
5. **Add Loading States** for better UX
6. **Test End-to-End** booking flow

---

**All APIs are ready to integrate! Follow the code examples above for each page.** 🚀
