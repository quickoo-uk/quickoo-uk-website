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

/** Attach Places Autocomplete to an input; returns teardown for listeners. */
export function bindPlacesAutocomplete(
    input: HTMLInputElement,
    onFormattedAddress: (address: string) => void,
): () => void {
    const autocomplete = new google.maps.places.Autocomplete(input, {
        fields: ["formatted_address", "name", "place_id"],
    });

    const listener = autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const text = place.formatted_address ?? place.name ?? "";
        if (text) onFormattedAddress(text);
    });

    return () => {
        listener.remove();
        google.maps.event.clearInstanceListeners(autocomplete);
    };
}
