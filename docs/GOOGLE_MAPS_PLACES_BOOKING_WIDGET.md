# Google Maps Places autocomplete — BookingWidget setup

This guide covers enabling Google’s location APIs and wiring **Places Autocomplete** into the **From**, **To**, and **Add Stop** text inputs in `client/components/BookingWidget.tsx` (state: `fromLocation`, `destinations`).

---

## 1. Google Cloud setup

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a **project**.
2. Enable **billing** for the project (Places / Maps usage is billed after free tiers).
3. Enable these APIs (APIs & Services → Library):
   - **Maps JavaScript API** — required to load `google.maps` and attach **Places Autocomplete** to your `<input>` elements in the browser.
   - **Places API** — required for autocomplete suggestions and place details (Google may list this as “Places API” alongside newer “Places API (New)”; for the classic `google.maps.places.Autocomplete` widget, enable **Places API** as prompted in the console when you use the feature).

If the console suggests **Places API (New)** only, you can still use the JavaScript **Autocomplete** class once **Maps JavaScript API** + **Places API** are enabled; follow the console’s “APIs enabled” checklist when you first create a Maps key.

---

## 2. Create and restrict an API key

1. Go to **APIs & Services → Credentials → Create credentials → API key**.
2. **Restrict the key** (recommended):
   - **Application restrictions**: *HTTP referrers (web sites)*.
   - Add referrers your app uses, for example:
     - `http://localhost:8080/*` (this repo’s Vite dev server uses port **8080** per `vite.config.ts`)
     - `https://your-production-domain.com/*`
   - **API restrictions**: Restrict key to **Maps JavaScript API** and **Places API** (and any other Maps APIs you explicitly use later).

3. Optionally create a **separate key** for local vs production with different referrer lists.

Never commit API keys to git. Use environment variables (see below).

---

## 3. Environment variable (Vite)

Vite exposes only variables prefixed with `VITE_` to the client.

1. In the project root, add to `.env` (or `.env.local`, which is typically gitignored):

   ```bash
   VITE_GOOGLE_MAPS_API_KEY=your_key_here
   ```

2. In code, read it as:

   ```ts
   const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
   ```

3. Ensure `.env` / `.env.local` are in `.gitignore` if they contain real keys.

Because this value ships to the browser, **referrer restrictions** on the key are essential.

---

## 4. Install the loader (optional but recommended)

Using Google’s loader avoids manual script tags and handles API version flags consistently:

```bash
pnpm add @googlemaps/js-api-loader
```

---

## 5. Frontend integration pattern (BookingWidget)

Today, `BookingWidget` uses plain controlled inputs:

- **From**: `fromLocation` / `setFromLocation`
- **To / stops**: `destinations[]` / `handleDestinationChange` (One way tab only)

### Approach: Maps JavaScript API `Autocomplete` on each input

1. **Load the API once** (e.g. in `useEffect` when the widget mounts or when `activeTab === "oneway"` and you need destination fields):

   - Call `setOptions({ apiKey, version: "weekly", libraries: ["places"] })` then `importLibrary("places")` (or use `Loader` from `@googlemaps/js-api-loader` with `libraries: ["places"]`).

2. **Use refs** for each autocomplete field:
   - One ref for the **From** `<input>`.
   - For **To / stops**, use a **ref callback** or a `useRef<Record<number, HTMLInputElement | null>>` keyed by `index`, because the list length changes when the user clicks **Add Stop**.

3. **Bind Autocomplete** after the DOM nodes exist:
   - For each input ref that is non-null, `new google.maps.places.Autocomplete(inputElement, options)`.
   - Options often include `fields: ["formatted_address", "geometry", "place_id", "name"]` to limit billing and data you store.
   - Optionally set `componentRestrictions: { country: ["us"] }` or `bounds` / `locationBias` if you serve a fixed region.

4. **Listen for `place_changed`** on each `Autocomplete` instance:
   - Read `autocomplete.getPlace()`.
   - If `place.formatted_address` is present, call `setFromLocation(...)` or `handleDestinationChange(index, ...)` so React state matches the selected suggestion.
   - You can also keep `place_id` and `geometry` in separate state or in `BookingContext` for routing or pricing later.

5. **Cleanup**: When refs unmount or indices shift, remove listeners and discard old `Autocomplete` instances to avoid duplicates or stale handlers.

6. **Controlled input caveat**: Autocomplete updates the input’s DOM value while the user types; keep your React `value` / `onChange` in sync or you may see cursor jumps. A common pattern is to leave the input **uncontrolled** for the fields managed by Autocomplete, or to update state only on `place_changed` and `onChange` for free typing—test both on mobile.

7. **Hourly tab**: The **From** field is always visible; destination inputs exist only for **One way**. Only attach destination autocompletes when those inputs are mounted (`activeTab === "oneway"`).

---

## 6. Optional: server-side proxy (stricter security)

Browser keys are always discoverable. For sensitive quotas or non-public apps, you can:

- Call **Places API (New)** or **Places Autocomplete** HTTP endpoints from your Express app (`server/`), keep the key in server-only env vars, and return suggestions JSON to the client.

That matches this template’s note to add server endpoints when secrets must stay off the client. It requires more work (session tokens, debouncing) but avoids exposing a secondary key.

---

## 7. Testing checklist

- Typing in **From** shows suggestions; picking one updates `fromLocation`.
- **To** and extra stops behave the same for each row.
- Switching **One way** ↔ **By the hour** does not leak old Autocomplete listeners.
- Production domain is added to **HTTP referrer** restrictions on the key.
- Monitor usage in **Google Cloud → APIs & Services → Dashboard** and set **budget alerts**.

---

## 8. Reference links

- [Maps JavaScript API — Place Autocomplete](https://developers.google.com/maps/documentation/javascript/place-autocomplete-overview)
- [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader)
- [Places API usage and billing](https://developers.google.com/maps/documentation/places/web-service/usage-and-billing)

---

## 9. File map in this repo

| Area | Path |
|------|------|
| Booking UI (From / To / stops) | `client/components/BookingWidget.tsx` |
| Shared booking state | `client/contexts/BookingContext.tsx` |
| Dev server port | `vite.config.ts` (`8080`) |

After implementation, update `updateBookingData` / navigation payload (Search button) if you add `placeId` or lat/lng alongside display strings.
