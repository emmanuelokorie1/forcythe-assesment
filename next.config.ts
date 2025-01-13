import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode:false,
  eslint:{
    ignoreDuringBuilds:false
  },
  typescript:{
    ignoreBuildErrors:false
  }
};

export default nextConfig;
