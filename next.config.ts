import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // Aggiungi localhost come dominio consentito
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*", // tutte le richieste /uploads verranno proxyate
        destination: "http://localhost:3001/uploads/:path*", // indirizzo del tuo backend
      },
    ];
  },
};

export default nextConfig;
