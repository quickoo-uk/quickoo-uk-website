/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string;
  /** FastAPI base URL for direct browser calls (quotes, orders, admin, Stripe intent). */
  readonly VITE_ADMIN_API_BASE_URL?: string;
  /** Google Ads conversion label, e.g. "AW-123456789/AbC-D_efG". Used by the ads landing page. */
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare namespace JSX {
  interface IntrinsicElements {
    "booking-widget": any;
  }
  
}