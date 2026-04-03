/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string;
  /** FastAPI base URL for direct browser calls (quotes, orders, admin, Stripe intent). */
  readonly VITE_ADMIN_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
