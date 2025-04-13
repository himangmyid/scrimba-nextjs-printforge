import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://place-hold.it/300')],
  },
};

export default nextConfig;
