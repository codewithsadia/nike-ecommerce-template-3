import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['*', 'cdn.sanity.io'],
  },
  serverExternalPackages: ['react', 'react-dom'], // Updated key
};

export default nextConfig;
