import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ArrowLeft, Check, CreditCard, Loader2 } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";
import { StripePaymentForm } from "@/components/booking/StripePaymentForm";
import { buildCreateOrderRequestBody, fetchCreateOrder } from "@/lib/ordersApi";
import { backendApiUrl } from "@/lib/backendApiUrl";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;

function parseClientSecretFromResponse(data: unknown): string | null {
  const obj = (data || {}) as Record<string, unknown>;
  const nested = (obj.data || {}) as Record<string, unknown>;
  return (
    (obj.client_secret as string) ||
    (obj.clientSecret as string) ||
    (nested.client_secret as string) ||
    (nested.clientSecret as string) ||
    null
  );
}

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingData, updateBookingData } = useBooking();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [intentLoading, setIntentLoading] = useState(false);
  const [intentError, setIntentError] = useState("");
  const returnHandledRef = useRef(false);

  const breakdown = bookingData.selectedCar?.price_breakdown ?? [];
  const total =
    bookingData.selectedCar?.total_price ?? bookingData.selectedCar?.price ?? 0;
  const amountPence = Math.max(0, Math.round(total * 100));

  const stripeEnabled = Boolean(publishableKey?.trim()) && amountPence >= 50;

  const notifyAdmin = useCallback(async () => {
    const response = await fetch("/api/booking/notify-admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingData: {
          ...bookingData,
          termsAccepted: true,
        },
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({ message: "Unable to send booking email." }));
      throw new Error(data?.message || "Unable to send booking email.");
    }

    updateBookingData({ termsAccepted: true });
  }, [bookingData, updateBookingData]);

  const createOrder = useCallback(
    async (isPaymentPaid: boolean, transactionId: string) => {
      const body = buildCreateOrderRequestBody(bookingData, isPaymentPaid, transactionId);
      await fetchCreateOrder(body);
    },
    [bookingData],
  );

  const handleNotifyOnly = async () => {
    if (!termsAccepted || isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);
    try {
      await createOrder(false, "");
      await notifyAdmin();
      navigate("/booking/success");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to complete booking right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStripeSuccess = async (paymentIntentId: string) => {
    setSubmitError("");
    setIsSubmitting(true);
    try {
      await createOrder(true, paymentIntentId);
      await notifyAdmin();
      navigate("/booking/success");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Payment succeeded but we could not confirm by email. Please contact support.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const searchReturn = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const secret = params.get("payment_intent_client_secret");
    const status = params.get("redirect_status");
    if (!secret) return null;
    return { secret, status };
  }, [location.search]);

  /** After 3DS / wallet redirect, Stripe sends the user back with query params. */
  useEffect(() => {
    if (!searchReturn || !publishableKey?.trim()) return;
    if (searchReturn.status !== "succeeded") return;
    if (returnHandledRef.current) return;
    returnHandledRef.current = true;

    let cancelled = false;
    setIsSubmitting(true);
    loadStripe(publishableKey)
      .then(async (stripe: Stripe | null) => {
        if (!stripe || cancelled) return;
        const { paymentIntent } = await stripe.retrievePaymentIntent(searchReturn.secret);
        if (cancelled) return;
        if (paymentIntent?.status === "succeeded") {
          try {
            await createOrder(true, paymentIntent.id);
            await notifyAdmin();
            navigate("/booking/success");
          } catch (e) {
            returnHandledRef.current = false;
            setSubmitError(
              e instanceof Error ? e.message : "Could not finalize booking after payment.",
            );
          }
        }
        window.history.replaceState({}, "", "/booking/payment");
      })
      .finally(() => {
        if (!cancelled) setIsSubmitting(false);
      });

    return () => {
      cancelled = true;
    };
  }, [searchReturn, publishableKey, createOrder, notifyAdmin, navigate]);

  useEffect(() => {
    if (searchReturn) return;
    if (!stripeEnabled) return;

    const customer = bookingData.customerInfo;
    const car = bookingData.selectedCar;
    if (!customer || !car) return;

    let cancelled = false;
    setIntentLoading(true);
    setIntentError("");
    fetch(backendApiUrl("/api/v1/payments/create-payment-intent"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amountPence,
        currency: "gbp",
        receipt_email: customer.email || undefined,
        metadata: {
          customer_email: customer.email,
          customer_name: `${customer.firstName} ${customer.lastName}`.trim(),
          vehicle_class_id: car.id,
          vehicle_name: car.name,
          booking_type: bookingData.bookingType,
        },
      }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (cancelled) return;
        if (!res.ok) {
          throw new Error(
            (data as { detail?: string; message?: string }).detail ||
              (data as { detail?: string; message?: string }).message ||
              "Could not start payment.",
          );
        }
        const secret = parseClientSecretFromResponse(data);
        if (!secret) throw new Error("Invalid response from payment server (missing client_secret).");
        setClientSecret(secret);
      })
      .catch((e) => {
        if (!cancelled) setIntentError(e instanceof Error ? e.message : "Could not start payment.");
      })
      .finally(() => {
        if (!cancelled) setIntentLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [
    searchReturn,
    stripeEnabled,
    amountPence,
    bookingData.bookingType,
    bookingData.customerInfo?.email,
    bookingData.customerInfo?.firstName,
    bookingData.customerInfo?.lastName,
    bookingData.selectedCar?.id,
    bookingData.selectedCar?.name,
  ]);

  const stripePromise = useMemo(() => {
    const k = (import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined)?.trim();
    return k ? loadStripe(k) : null;
  }, []);

  const elementsOptions = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      appearance: {
        theme: "stripe" as const,
        variables: {
          colorPrimary: "#487307",
          borderRadius: "12px",
        },
      },
    };
  }, [clientSecret]);

  if (!bookingData.selectedCar || !bookingData.customerInfo) {
    navigate("/booking/select-car");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-600">Step 4 of 4</h2>
            <span className="text-sm font-medium text-[#487307]">100% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <motion.div
              initial={{ width: "75%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] h-2 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-montserrat font-bold text-slate-900 mb-3">
            Payment &{" "}
            <span className="bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] bg-clip-text text-transparent">
              confirmation
            </span>
          </h1>
          <p className="text-slate-600">
            {stripeEnabled
              ? "Pay securely with Stripe. After a successful payment we will email your booking to our team."
              : "Complete your booking. Add Stripe keys to enable card payments (see project docs)."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center gap-3 text-slate-800">
            <div className="p-2 rounded-lg bg-green-50 text-[#487307]">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">Amount due</p>
              <p className="text-2xl font-bold text-[#487307]">£{total.toFixed(2)}</p>
              <p className="text-sm text-slate-500">{bookingData.selectedCar.name}</p>
            </div>
          </div>

          {breakdown.length > 0 && (
            <div className="border-t border-slate-100 pt-4">
              <p className="text-sm font-semibold text-slate-700 mb-3">Price breakdown</p>
              <ul className="space-y-2 text-sm">
                {breakdown.map((line, i) => (
                  <li key={i} className="flex justify-between gap-4 text-slate-600">
                    <span className="min-w-0">{line.description}</span>
                    <span className="font-medium text-slate-900 shrink-0">£{line.amount.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!publishableKey?.trim() && (
            <p className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
              Set <code className="text-xs">VITE_STRIPE_PUBLISHABLE_KEY</code> in{" "}
              <code className="text-xs">.env</code> to enable card payments.
            </p>
          )}

          {publishableKey?.trim() && amountPence > 0 && amountPence < 50 && (
            <p className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
              Amount is below the minimum for card processing (£0.50). Use “Complete booking” below.
            </p>
          )}

          {stripeEnabled && intentLoading && (
            <div className="flex items-center justify-center gap-2 py-8 text-slate-600">
              <Loader2 className="w-6 h-6 animate-spin text-[#487307]" />
              Preparing secure checkout…
            </div>
          )}

          {stripeEnabled && intentError && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {intentError}
            </p>
          )}

          <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-5 h-5 text-[#487307] mt-0.5"
            />
            <span className="text-sm text-slate-600">
              I agree to the{" "}
              <a href="/terms-and-conditions" className="text-[#487307] font-semibold hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-[#487307] font-semibold hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>

          {stripeEnabled && clientSecret && stripePromise && elementsOptions && (
            <Elements stripe={stripePromise} options={elementsOptions}>
              <StripePaymentForm
                termsAccepted={termsAccepted}
                totalPounds={total}
                onPaymentSucceeded={(id) => handleStripeSuccess(id)}
              />
            </Elements>
          )}

          {(!stripeEnabled || intentError) && (
            <div className="border-t border-slate-100 pt-4 space-y-3">
              <p className="text-xs text-slate-500">
                {stripeEnabled
                  ? "If checkout could not load, you can still notify our team (no card charge)."
                  : "Notify our team without taking a card payment."}
              </p>
              <button
                type="button"
                onClick={() => void handleNotifyOnly()}
                disabled={!termsAccepted || isSubmitting}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  termsAccepted && !isSubmitting
                    ? "border-2 border-[#487307] text-[#487307] bg-white hover:bg-green-50"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <Check className="w-6 h-6" />
                {isSubmitting ? "Submitting…" : "Complete booking (email only)"}
              </button>
            </div>
          )}

          {submitError && <p className="text-sm text-red-600 text-center">{submitError}</p>}
        </motion.div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => navigate("/booking/checkout")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to review
          </button>
        </div>
      </div>
    </div>
  );
}
