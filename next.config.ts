import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client"],
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "1337" },
      { protocol: "http", hostname: "127.0.0.1", port: "1337" },
    ],
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/fa", permanent: false },
      { source: "/faq", destination: "/fa", permanent: false },
      { source: "/technology", destination: "/fa", permanent: false },
      { source: "/careers", destination: "/fa", permanent: false },
    ];
  },
};

export default nextConfig;
