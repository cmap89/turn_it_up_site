import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/turn_it_up_site', // Replace with your repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
};