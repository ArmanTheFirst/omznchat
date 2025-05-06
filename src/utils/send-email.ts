import { FormData } from "@/components/contact-form";

export async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await res.json();

    if (!res.ok) {
      if (responseData.details) {
        // Handle validation errors
        const validationErrors = responseData.details
          .map((error: { message: string }) => error.message)
          .join(", ");
        throw new Error(validationErrors);
      }
      throw new Error(responseData.error || "Failed to send email");
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error("An unknown error occurred");
  }
}
