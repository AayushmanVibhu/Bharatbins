import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/Bharatbins" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
