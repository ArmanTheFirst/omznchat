import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";

// Rate limiting setup
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour
const ipRequests = new Map<string, { count: number; timestamp: number }>();

// Input validation schema with strict rules
const emailSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(3, "Email is too short")
    .max(254, "Email is too long")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    ),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z0-9\s\-']+$/, "Name contains invalid characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
  recaptchaToken: z.string().min(1, "reCAPTCHA token is required"),
});

// Sanitization options
const sanitizeOptions = {
  allowedTags: [], // No HTML tags allowed
  allowedAttributes: {}, // No attributes allowed
  allowedIframeHostnames: [], // No iframes allowed
  disallowedTagsMode: "recursiveEscape" as const, // Escape disallowed tags
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      },
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error(
      "reCAPTCHA verification error:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return false;
  }
}

function sanitizeInput(input: string): string {
  return sanitizeHtml(input, sanitizeOptions);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const userRequests = ipRequests.get(ip);

    if (userRequests) {
      if (now - userRequests.timestamp > RATE_LIMIT_WINDOW) {
        ipRequests.set(ip, { count: 1, timestamp: now });
      } else if (userRequests.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 },
        );
      } else {
        userRequests.count++;
      }
    } else {
      ipRequests.set(ip, { count: 1, timestamp: now });
    }

    // Validate input
    const body = await request.json();
    const validatedData = emailSchema.parse(body);

    // Sanitize all string inputs
    const sanitizedData = {
      ...validatedData,
      name: sanitizeInput(validatedData.name),
      email: sanitizeInput(validatedData.email),
      message: sanitizeInput(validatedData.message),
    };

    const { email, name, message, recaptchaToken } = sanitizedData;

    // Verify reCAPTCHA token
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA token" },
        { status: 400 },
      );
    }

    // Validate environment variables
    if (
      !process.env.SENDER_MAIL ||
      !process.env.SENDER_PASSWORD ||
      !process.env.RECEIVER_MAIL
    ) {
      throw new Error("Missing required environment variables");
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      /* 
        setting service as 'gmail' is same as providing these setings:
        host: "smtp.gmail.com",
        port: 465,
        secure: true
        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    */
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.SENDER_MAIL,
      to: `${process.env.RECEIVER_MAIL}, ${process.env.OMZN_MAIL}`,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(
      "Email sending error:",
      error instanceof Error ? error.message : "Unknown error",
    );

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input data", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
