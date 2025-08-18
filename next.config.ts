import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveExtensions: [
        ".mdx",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".json",
        ".mp4",
        ".webp", // Adiciona .mp4 para resolução de extensões
      ],
    },
  },
};

export default nextConfig;
