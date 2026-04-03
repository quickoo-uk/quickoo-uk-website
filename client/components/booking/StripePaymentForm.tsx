import { FormEvent, useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

type Props = {
  termsAccepted: boolean;
  totalPounds: number;
  onPaymentSucceeded: (paymentIntentId: string) => Promise<void>;
};

export function StripePaymentForm({ termsAccepted, totalPounds, onPaymentSucceeded }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!stripe || !elements) {
      setError("Payment form is still loading. Please wait.");
      return;
    }
    if (!termsAccepted) {
      setError("Please accept the terms to continue.");
      return;
    }

    setBusy(true);
    try {
      const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/booking/payment`,
        },
        redirect: "if_required",
      });

      if (confirmError) {
        setError(confirmError.message ?? "Payment failed.");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        if (!paymentIntent.id) {
          setError("Payment succeeded but transaction id is missing.");
          return;
        }
        await onPaymentSucceeded(paymentIntent.id);
      } else if (paymentIntent?.status === "processing") {
        setError("Payment is processing. You will receive confirmation shortly.");
      } else {
        setError("Payment was not completed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || !elements || busy || !termsAccepted}
        className={`w-full py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 ${
          stripe && elements && !busy && termsAccepted
            ? "bg-gradient-to-r from-[#0f1801] via-[#487307] to-[#6aa80b] text-white hover:shadow-lg hover:shadow-[#487307]/30"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }`}
      >
        {busy ? "Processing…" : `Pay £${totalPounds.toFixed(2)} and complete booking`}
      </button>
    </form>
  );
}
