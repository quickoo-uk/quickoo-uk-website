import { MapPin } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import {
  fetchLogistifiePlaceDetails,
  fetchLogistifiePlaceSuggestions,
  type LogistifiePlaceSuggestion,
  type LogistifieSelectedPlace,
} from "@/lib/logistifiePlacesApi";

type PlaceSearchInputProps = {
  value: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  onPlaceSelected: (place: LogistifieSelectedPlace) => void;
};

export default function PlaceSearchInput({
  value,
  placeholder,
  onValueChange,
  onPlaceSelected,
}: PlaceSearchInputProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const requestControllerRef = useRef<AbortController | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [predictions, setPredictions] = useState<LogistifiePlaceSuggestion[]>([]);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 2) {
      requestControllerRef.current?.abort();
      setPredictions([]);
      setIsOpen(false);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      requestControllerRef.current?.abort();
      const controller = new AbortController();
      requestControllerRef.current = controller;
      void fetchLogistifiePlaceSuggestions(query, controller.signal)
        .then((nextPredictions) => {
          setPredictions(nextPredictions);
          setHighlightedIndex(0);
          setIsOpen(nextPredictions.length > 0);
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") return;
          setPredictions([]);
          setIsOpen(false);
        });
    }, 500);

    return () => {
      window.clearTimeout(timeoutId);
      requestControllerRef.current?.abort();
    };
  }, [value]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const selectPrediction = async (prediction: LogistifiePlaceSuggestion) => {
    const place = await fetchLogistifiePlaceDetails(prediction);
    setIsOpen(false);
    setPredictions([]);
    if (!place) {
      onValueChange(prediction.address);
      return;
    }
    onValueChange(place.formattedAddress);
    onPlaceSelected(place);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || predictions.length === 0) {
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((index) => (index + 1) % predictions.length);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) => (index - 1 + predictions.length) % predictions.length);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      void selectPrediction(predictions[highlightedIndex]);
      return;
    }
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative z-20 block overflow-visible">
      <MapPin className="pointer-events-none absolute left-3 top-3.5 z-10 h-4 w-4 text-[#487307]" />
      <input
        value={value}
        onChange={(event) => onValueChange(event.target.value)}
        onFocus={() => {
          if (predictions.length > 0) {
            setIsOpen(true);
          }
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-autocomplete="list"
        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3 text-sm text-dark outline-none ring-[#487307] placeholder:text-slate-400 focus:border-[#487307] focus:ring-2"
      />
      {isOpen && predictions.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-[120] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-[0_16px_40px_rgba(15,23,42,0.12)]"
        >
          {predictions.map((prediction, index) => (
            <li
              key={`${prediction.placeId}-${prediction.address}`}
              role="option"
              aria-selected={index === highlightedIndex}
            >
              <button
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => void selectPrediction(prediction)}
                className={`flex w-full items-start gap-2 px-3 py-2.5 text-left ${
                  index === highlightedIndex ? "bg-[#487307]/10" : "bg-white hover:bg-slate-50"
                }`}
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#487307]" />
                <span className="block text-sm font-medium text-dark">{prediction.address}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
