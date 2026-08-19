import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchLogistifiePlaceDetails, fetchLogistifiePlaceSuggestions } from "./logistifiePlacesApi";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("fetchLogistifiePlaceSuggestions", () => {
  it("returns the address suggestions used by the Logistifie booking form", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          code: 200,
          message: {
            airports: [],
            googleaddr: [
              {
                addr: "Heathrow Airport (LHR), Hounslow, UK",
                place_id: "heathrow-place",
                sessiontoken: "search-session",
                type: ["airport", "point_of_interest"],
                latitude: "",
                longitude: "",
                requires_details: 1,
              },
            ],
          },
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const suggestions = await fetchLogistifiePlaceSuggestions("heathrow");

    expect(suggestions).toEqual([
      {
        address: "Heathrow Airport (LHR), Hounslow, UK",
        placeId: "heathrow-place",
        sessionToken: "search-session",
        types: ["airport", "point_of_interest"],
        latitude: null,
        longitude: null,
        requiresDetails: true,
      },
    ]);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.logistifie.com/api/v1/booking/client/address/search",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ addrtext: "heathrow", accountid: "7236263" }),
      }),
    );
  });

  it("does not call the API for a one-character query", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    await expect(fetchLogistifiePlaceSuggestions("h")).resolves.toEqual([]);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe("fetchLogistifiePlaceDetails", () => {
  it("returns coordinates from the Logistifie address details response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            code: 200,
            message: {
              googleaddr: {
                addr: "Heathrow Airport,Hounslow,United Kingdom",
                latitude: 51.4679903,
                longitude: -0.4550471,
              },
            },
          }),
          { status: 200 },
        ),
      ),
    );

    await expect(
      fetchLogistifiePlaceDetails({
        address: "Heathrow Airport (LHR), Hounslow, UK",
        placeId: "heathrow-place",
        sessionToken: "search-session",
        types: ["airport"],
        latitude: null,
        longitude: null,
        requiresDetails: true,
      }),
    ).resolves.toEqual({
      formattedAddress: "Heathrow Airport,Hounslow,United Kingdom",
      latitude: 51.4679903,
      longitude: -0.4550471,
      isAirport: true,
    });
  });
});
