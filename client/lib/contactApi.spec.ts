import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactMessageInput, sendContactMessage } from "./contactApi";

const CONTACT_MESSAGE: ContactMessageInput = {
  name: "Amelia Carter",
  email: "amelia@example.com",
  phone: "+44 7400 123456",
  subject: "Airport transfer enquiry",
  serviceType: "Airport Transfers",
  message: "Please arrange a transfer from Heathrow to central London.",
  newsletterOptIn: true,
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("sendContactMessage", () => {
  it("submits the enquiry to the Quickoo contact endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await sendContactMessage(CONTACT_MESSAGE);

    expect(fetchMock).toHaveBeenCalledWith("/api/contact/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CONTACT_MESSAGE),
    });
  });

  it("reports the server error when delivery fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ message: "Contact email delivery is not configured." }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );

    await expect(sendContactMessage(CONTACT_MESSAGE)).rejects.toThrow(
      "Contact email delivery is not configured.",
    );
  });
});
