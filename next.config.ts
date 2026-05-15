import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/turn_it_up_site' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;