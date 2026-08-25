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

## 2026-08-22: Audi fleet card omitted its booking action

**Root cause:** The shared vehicle-card template contained a name-based condition that excluded every vehicle whose name included `Audi ` from rendering the Book Now link.

**Failure symptoms:** The Audi A6 card on the executive cars page showed the same vehicle details as adjacent cards but had no booking button.

**Fix details:** The Audi-specific condition was removed. Every vehicle rendered by the available fleet now receives the same booking link.

**Consulted sources:** The reported executive cars screenshot and the vehicle-card rendering logic in `client/pages/CarTypePage.tsx`.

**Prevention guidance:** Shared collection cards should expose consistent primary actions unless the underlying item data explicitly declares a different capability.

## 2026-08-23: Homepage contact button lost its background

**Root cause:** The new homepage contact form relied on the shared `luxury-button-gold` class for both its white text and gradient background. In the homepage composition, the background style did not render while the white text remained, making the submit action appear as an empty white button.

**Failure symptoms:** The Send Message control occupied the correct space and retained its shadow, but its label and button surface were not visible.

**Fix details:** The form CTA now uses a dedicated `contact-message-submit` class with explicit `!important` background and text rules, including WebKit text fill, so page-level styles cannot leave white text on a white surface.

**Consulted sources:** The reported homepage screenshot, `ContactMessageSection.tsx`, and the `luxury-button-gold` definition in `client/global.css`.

**Prevention guidance:** A primary action should declare its essential visible states together when it is introduced inside a new page composition.

## 2026-08-25: Contact enquiries failed at the browser email provider

**Root cause:** Both contact forms sent enquiries directly from the browser through hardcoded EmailJS service, template, and public-key identifiers. The production provider rejected the request, while the form reduced every provider failure to the same generic modal.

**Failure symptoms:** Valid form details passed client validation, but submission always opened the Submission Error dialog and no enquiry was delivered.

**Fix details:** Contact forms now post validated data to `/api/contact/notify`. The Express route validates the payload and sends plain-text email through the existing server-side SMTP configuration. The obsolete EmailJS browser dependency and identifiers were removed.

**Consulted sources:** The production failure screenshot, both contact form submission functions, the existing SMTP booking notification route, and the Vercel deployment configuration.

**Prevention guidance:** Send operational email through a server-owned endpoint. Keep SMTP credentials outside the browser and return a useful server error when delivery fails.
