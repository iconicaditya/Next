import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["f85f778c-63ce-4a0c-b2d6-e9cf98ccd07b-00-2krv9ju252d87.pike.replit.dev", "*.replit.dev"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

export default nextConfig;
