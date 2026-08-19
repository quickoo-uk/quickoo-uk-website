import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchGetQuotes } from "./quotesApi";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("fetchGetQuotes", () => {
  it("uses the public Quickoo backend when no local API base is configured", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          distance_miles: 50.46,
          quotes_break_down_price_list: [],
          vehicle_quotes: [
            {
              vehicle_class_id: "business",
              class_name: "Business Class",
              total_price: 125,
              is_active: true,
              price_breakdown: [],
            },
          ],
        }),
        { status: 200 },
      ),
    );
    vi.stubGlobal("fetch", fetchMock);

    const response = await fetchGetQuotes({
      from: { latitude: 51.8746985, longitude: -0.3683333 },
      to: { latitude: 51.1536621, longitude: -0.1820629 },
      pickup_type: "airport",
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://backend.quickoo.co.uk/api/v1/quotes/get-quotes",
      expect.objectContaining({ method: "POST" }),
    );
    expect(response.distance_miles).toBe(50.46);
    expect(response.vehicle_quotes).toHaveLength(1);
  });
});
