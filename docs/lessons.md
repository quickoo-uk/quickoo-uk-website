## 2026-08-19: Get Quotes address autocomplete used the wrong provider

**Root cause:** The Get Quotes form depended on `VITE_GOOGLE_MAPS_API_KEY`, while the existing Logistifie booking form used Logistifie's own address search and details endpoints. The production build did not contain a Google Maps key, so Get Quotes silently skipped autocomplete.

**Failure symptoms:** Typing in the Get Quotes pickup and drop-off fields produced no suggestions, although the Logistifie booking form on the same page worked.

**Fix details:** Get Quotes now calls the same Logistifie address search and details endpoints as the booking widget, using Quickoo's existing Logistifie account ID. The selected address supplies the coordinates required by the quotes endpoint.

**Consulted sources:** The deployed Logistifie `window_bundle.js`, the Logistifie address search endpoint, and the Logistifie address details endpoint.

**Prevention guidance:** Before reproducing behavior from an embedded third-party widget, verify its actual data provider and configuration. Do not assume that a visually similar field uses the application's existing provider.

## 2026-08-19: Public quote form required an admin environment variable

**Root cause:** The public Get Quotes request used the shared admin API URL helper. That helper intentionally throws when `VITE_ADMIN_API_BASE_URL` is absent, so local visitors could select valid addresses but could not request prices.

**Failure symptoms:** Submitting Get Quotes displayed `Missing VITE_ADMIN_API_BASE_URL` instead of vehicle prices.

**Fix details:** The public quotes client now falls back to `https://backend.quickoo.co.uk`. Admin and payment clients retain the strict environment requirement, so local admin screens cannot silently target production.

**Consulted sources:** The browser error, `backendApiUrl.ts`, `quotesApi.ts`, and a successful quote request to the production backend with localhost CORS.

**Prevention guidance:** Public unauthenticated clients may use an explicit production service default when it is part of the product contract. Keep admin and state-changing clients fail-closed unless their target environment is configured.
