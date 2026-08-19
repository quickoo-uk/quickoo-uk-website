const LOGISTIFIE_API_BASE_URL = "https://api.logistifie.com/api/v1";
const QUICKOO_LOGISTIFIE_ACCOUNT_ID = "7236263";

export type LogistifiePlaceSuggestion = {
  address: string;
  placeId: string;
  sessionToken: string;
  types: string[];
  latitude: number | null;
  longitude: number | null;
  requiresDetails: boolean;
};

export type LogistifieSelectedPlace = {
  formattedAddress: string;
  latitude: number;
  longitude: number;
  isAirport: boolean;
};

type AddressRecord = {
  addr?: unknown;
  place_id?: unknown;
  sessiontoken?: unknown;
  type?: unknown;
  latitude?: unknown;
  longitude?: unknown;
  requires_details?: unknown;
};

function readNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string" || value.trim() === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function suggestionFromRecord(record: AddressRecord): LogistifiePlaceSuggestion | null {
  const address = typeof record.addr === "string" ? record.addr.trim() : "";
  if (!address) return null;

  return {
    address,
    placeId: typeof record.place_id === "string" ? record.place_id : "",
    sessionToken: typeof record.sessiontoken === "string" ? record.sessiontoken : "",
    types: Array.isArray(record.type) ? record.type.filter((type): type is string => typeof type === "string") : [],
    latitude: readNumber(record.latitude),
    longitude: readNumber(record.longitude),
    requiresDetails: record.requires_details === 1 || record.requires_details === true,
  };
}

function suggestionsFromResponse(data: unknown): LogistifiePlaceSuggestion[] {
  if (!data || typeof data !== "object") return [];
  const message = (data as { message?: unknown }).message;
  if (!message || typeof message !== "object" || Array.isArray(message)) return [];

  const suggestions: LogistifiePlaceSuggestion[] = [];
  for (const records of Object.values(message)) {
    if (!Array.isArray(records)) continue;
    for (const record of records) {
      if (!record || typeof record !== "object") continue;
      const suggestion = suggestionFromRecord(record as AddressRecord);
      if (suggestion) suggestions.push(suggestion);
    }
  }
  return suggestions;
}

function selectedPlaceFromDetails(data: unknown, suggestion: LogistifiePlaceSuggestion): LogistifieSelectedPlace | null {
  if (!data || typeof data !== "object") return null;
  const message = (data as { message?: unknown }).message;
  if (!message || typeof message !== "object") return null;
  const record = (message as { googleaddr?: AddressRecord }).googleaddr;
  if (!record) return null;

  const address = typeof record.addr === "string" ? record.addr.trim() : suggestion.address;
  const latitude = readNumber(record.latitude);
  const longitude = readNumber(record.longitude);
  if (!address || latitude == null || longitude == null) return null;

  return {
    formattedAddress: address,
    latitude,
    longitude,
    isAirport: suggestion.types.includes("airport") || address.toLowerCase().includes("airport"),
  };
}

async function postLogistifie<T>(path: string, body: Record<string, string>, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${LOGISTIFIE_API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });
  if (!response.ok) {
    throw new Error("Logistifie address search is temporarily unavailable.");
  }
  return response.json() as Promise<T>;
}

export async function fetchLogistifiePlaceSuggestions(
  query: string,
  signal?: AbortSignal,
): Promise<LogistifiePlaceSuggestion[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const data = await postLogistifie<unknown>(
    "/booking/client/address/search",
    {
      addrtext: trimmed,
      accountid: QUICKOO_LOGISTIFIE_ACCOUNT_ID,
    },
    signal,
  );
  return suggestionsFromResponse(data);
}

export async function fetchLogistifiePlaceDetails(
  suggestion: LogistifiePlaceSuggestion,
): Promise<LogistifieSelectedPlace | null> {
  if (suggestion.latitude != null && suggestion.longitude != null && !suggestion.requiresDetails) {
    return {
      formattedAddress: suggestion.address,
      latitude: suggestion.latitude,
      longitude: suggestion.longitude,
      isAirport: suggestion.types.includes("airport") || suggestion.address.toLowerCase().includes("airport"),
    };
  }
  if (!suggestion.placeId) return null;

  const data = await postLogistifie<unknown>("/booking/client/address/details/search", {
    place_id: suggestion.placeId,
    accountid: QUICKOO_LOGISTIFIE_ACCOUNT_ID,
    ...(suggestion.sessionToken ? { sessiontoken: suggestion.sessionToken } : {}),
  });
  return selectedPlaceFromDetails(data, suggestion);
}
