import { useLayoutEffect, useRef } from "react";
import {
  bindPlacesAutocomplete,
  ensureGoogleMapsPlacesLoaded,
  type PlaceAutocompleteResult,
} from "@/lib/googlePlacesAutocomplete";
import { cn } from "@/lib/utils";

const mapsKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim();

export type AdminPlaceValue = {
  address: string;
  latitude: number | null;
  longitude: number | null;
};

type Props = {
  label: string;
  value: AdminPlaceValue;
  onChange: (next: AdminPlaceValue) => void;
  disabled?: boolean;
  className?: string;
};

export function AdminOrderPlaceField({ label, value, onChange, disabled, className }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useLayoutEffect(() => {
    const el = inputRef.current;
    if (!el || disabled || !mapsKey) return;

    let cancelled = false;
    let detach: (() => void) | undefined;

    ensureGoogleMapsPlacesLoaded(mapsKey)
      .then(() => {
        if (cancelled || !inputRef.current) return;
        detach = bindPlacesAutocomplete(inputRef.current, (place: PlaceAutocompleteResult) => {
          onChangeRef.current({
            address: place.formattedAddress,
            latitude: place.latitude,
            longitude: place.longitude,
          });
        });
      })
      .catch(() => {
        // Missing key / load error — field still works as plain text without coords
      });

    return () => {
      cancelled = true;
      detach?.();
    };
  }, [disabled]);

  return (
    <div className={cn("space-y-1", className)}>
      <label className="text-xs font-semibold text-slate-600">{label}</label>
      <input
        ref={inputRef}
        type="text"
        disabled={disabled}
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#487307]/30 disabled:bg-slate-50"
        value={value.address}
        onChange={(e) => {
          onChangeRef.current({
            address: e.target.value,
            latitude: null,
            longitude: null,
          });
        }}
        autoComplete="off"
        placeholder={mapsKey ? "Search address…" : "Set VITE_GOOGLE_MAPS_API_KEY for suggestions"}
      />
      {mapsKey && value.address && (value.latitude == null || value.longitude == null) && (
        <p className="text-[11px] text-amber-700">
          Pick a suggestion to capture coordinates, or enter lat/lng below for manual routing.
        </p>
      )}
    </div>
  );
}
