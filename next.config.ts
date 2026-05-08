import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    domains: ['media.giphy.com', 'i.giphy.com'],
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
