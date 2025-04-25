import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3001", // Specifica la porta del backend
        pathname: "/uploads/**", // Percorso delle immagini
      },
    ],
  },
};

export default nextConfig;
