import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1lbnboj0lfh6w.cloudfront.net",
        pathname: "/portfolio/**",
      },
    ],
  },
};

export default nextConfig;
