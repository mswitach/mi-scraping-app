// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Si usas App Router, mantén esto:
  experimental: {
    appDir: true,
  },

  // Aquí definimos el alias '@' → la carpeta raíz
  webpack(config) {
    config.resolve.alias = {
      // conserva cualquier alias existente
      ...(config.resolve.alias ?? {}),
      // añade '@' apuntando al root
      "@": path.resolve(__dirname),
    };
    return config;
  },
};

export default nextConfig;

