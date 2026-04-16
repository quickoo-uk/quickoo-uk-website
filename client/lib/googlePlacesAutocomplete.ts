import { importLibrary, setOptions } from "@googlemaps/js-api-loader";

let loadPromise: Promise<void> | null = null;

/** Loads Maps JS API with the places library once per page session. */
export function ensureGoogleMapsPlacesLoaded(apiKey: string): Promise<void> {
    const key = apiKey.trim();
    if (!key) {
        return Promise.reject(new Error("VITE_GOOGLE_MAPS_API_KEY is missing or empty"));
    }
    if (!loadPromise) {
        setOptions({
            key,
            v: "weekly",
            libraries: ["places"],
        });
        loadPromise = importLibrary("places")
            .then(() => undefined)
            .catch((err) => {
                loadPromise = null;
                throw err;
            });
    }
    return loadPromise;
}

export type PlaceAutocompleteResult = {
    formattedAddress: string;
    latitude: number;
    longitude: number;
    isAirport?: boolean;
};

/** Attach Places Autocomplete; returns teardown for listeners. */
export function bindPlacesAutocomplete(
    input: HTMLInputElement,
    onPlaceSelected: (place: PlaceAutocompleteResult) => void,
): () => void {
    const autocomplete = new google.maps.places.Autocomplete(input, {
        fields: ["formatted_address", "name", "place_id", "geometry", "types"],
        componentRestrictions: { country: "gb" },
    });

    const listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const loc = place.geometry?.location;
        if (!loc) return;
        const readCoord = (v: number | (() => number) | undefined): number | null => {
            if (v == null) return null;
            const n = typeof v === "function" ? v() : v;
            return typeof n === "number" && !Number.isNaN(n) ? n : null;
        };
        const lat = readCoord(loc.lat);
        const lng = readCoord(loc.lng);
        const text = place.formatted_address ?? place.name ?? "";
        if (!text || lat == null || lng == null) return;
        const isAirport = place.types?.includes("airport") || 
                          text.toLowerCase().includes("airport") || 
                          (place.name?.toLowerCase().includes("airport") ?? false);
        onPlaceSelected({
            formattedAddress: text,
            latitude: lat,
            longitude: lng,
            isAirport,
        });
    });

    return () => {
        listener.remove();
        google.maps.event.clearInstanceListeners(autocomplete);
    };
}
