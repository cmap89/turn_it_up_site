import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/turn_it_up_site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;