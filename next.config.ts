import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/saesoonsydneycityheart-2025-prototype':'',
  output: 'export',
  distDir: 'dist'
};

export default nextConfig;
