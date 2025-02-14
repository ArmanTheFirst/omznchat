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

    if (!res.ok) {
      throw new Error("Failed to send email");
    }
  } catch (err) {
    // Type guard to check if err is an instance of Error
    if (err instanceof Error) {
      alert(err.message); // Safely access the message property
    } else {
      alert("An unknown error occurred"); // Handle other cases
    }
  }
}
