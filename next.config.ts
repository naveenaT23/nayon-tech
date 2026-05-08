import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  experimental: {
    instantNavigationDevToolsToggle: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/academy',
        destination: '/courses',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
