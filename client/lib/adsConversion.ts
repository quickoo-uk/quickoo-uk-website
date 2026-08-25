/**
 * Lightweight Google Ads / GA4 event helper for the standalone ads landing page.
 *
 * The landing page never assumes a tag is present: if gtag has not been injected
 * (dev, preview, or before the tag manager loads) every call is a silent no-op.
 */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type AdsEventName =
  | "lp_call_click"
  | "lp_whatsapp_click"
  | "lp_inquiry_start"
  | "lp_inquiry_submit";

/** Fire a GA4/Ads event. Safe to call when no tag is installed. */
export const trackAdsEvent = (
  name: AdsEventName,
  params: Record<string, string | number> = {},
) => {
  try {
    window.gtag?.("event", name, { source: "google_ads_landing", ...params });
  } catch {
    /* tracking must never break the page */
  }
};

/**
 * Fire a Google Ads conversion. Set VITE_GOOGLE_ADS_CONVERSION_LABEL to
 * "AW-XXXXXXXXX/AbC-D_efG" in the environment to activate it.
 */
export const trackAdsConversion = (value?: number) => {
  const sendTo = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;
  if (!sendTo) return;
  try {
    window.gtag?.("event", "conversion", {
      send_to: sendTo,
      ...(value !== undefined ? { value, currency: "GBP" } : {}),
    });
  } catch {
    /* noop */
  }
};
