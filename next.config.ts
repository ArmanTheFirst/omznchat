import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
