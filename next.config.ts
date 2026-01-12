import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-2bc3a6c5a2eb4902b5da3f71447725ae.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
