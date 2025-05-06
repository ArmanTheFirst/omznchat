"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import sanitizeHtml from "sanitize-html";

export type FormData = {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
};

// Sanitization options
const sanitizeOptions = {
  allowedTags: [], // No HTML tags allowed
  allowedAttributes: {}, // No attributes allowed
  allowedIframeHostnames: [], // No iframes allowed
  disallowedTagsMode: "recursiveEscape" as const, // Escape disallowed tags
};

function sanitizeInput(input: string): string {
  return sanitizeHtml(input, sanitizeOptions);
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptchaToken: "",
    },
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function onSubmit(data: FormData) {
    if (!data.recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
        },
      });
      return;
    }

    // Sanitize all inputs before sending
    const sanitizedData = {
      ...data,
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      message: sanitizeInput(data.message),
    };

    setIsLoading(true);
    try {
      await sendEmail(sanitizedData);
      toast.success("Your message has been sent successfully!", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#10B981",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
        },
      });
      reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again.",
        {
          duration: 5000,
          position: "bottom-center",
          style: {
            background: "#EF4444",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              maxLength: {
                value: 100,
                message: "Name must be less than 100 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s\-']+$/,
                message: "Name contains invalid characters",
              },
            })}
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
              minLength: {
                value: 3,
                message: "Email is too short",
              },
              maxLength: {
                value: 254,
                message: "Email is too long",
              },
            })}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="How can we help you? Is something not working?"
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
              maxLength: {
                value: 1000,
                message: "Message must be less than 1000 characters",
              },
            })}
            disabled={isLoading}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={(token) => {
              setValue("recaptchaToken", token || "", { shouldValidate: true });
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !isValid || !isDirty}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
