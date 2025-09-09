import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1),
    STREAM_SECRET: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1),
    RECAPTCHA_SECRET_KEY: z.string().min(1),
    SENDER_MAIL: z.string().email(),
    SENDER_PASSWORD: z.string().min(1),
    RECEIVER_MAIL: z.string().email(),
    OMZN_MAIL: z.string().email(),
    WEB_PUSH_PRIVATE_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
    NEXT_PUBLIC_STREAM_KEY: z.string().min(1),
    NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY: z.string().min(1),
    NEXT_PUBLIC_GITHUB_REPO_URL: z.string().url(),
    NEXT_PUBLIC_HOSTING_URL: z.string().url(),
    NEXT_PUBLIC_DISCORD_INVITE: z.string().url(),
    NEXT_PUBLIC_X_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_STREAM_KEY: process.env.NEXT_PUBLIC_STREAM_KEY,
    NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY: process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY,
    NEXT_PUBLIC_GITHUB_REPO_URL: process.env.NEXT_PUBLIC_GITHUB_REPO_URL,
    NEXT_PUBLIC_HOSTING_URL: process.env.NEXT_PUBLIC_HOSTING_URL,
    NEXT_PUBLIC_DISCORD_INVITE: process.env.NEXT_PUBLIC_DISCORD_INVITE,
    NEXT_PUBLIC_X_URL: process.env.NEXT_PUBLIC_X_URL,
  }
});
