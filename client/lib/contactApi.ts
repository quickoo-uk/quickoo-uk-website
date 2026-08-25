export type ContactMessageInput = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceType: string;
  message: string;
  newsletterOptIn: boolean;
};

export const sendContactMessage = async (contactMessage: ContactMessageInput): Promise<void> => {
  const response = await fetch("/api/contact/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactMessage),
  });

  if (response.ok) {
    return;
  }

  const responseBody: { message?: string } = await response.json().catch(() => ({}));
  throw new Error(responseBody.message || "Failed to send contact message");
};
