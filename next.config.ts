import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
