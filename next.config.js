/** @type {import('next').NextConfig} */

const path = require("node:path");

const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: { unoptimized: true },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "src/styles"),
    };

    return config;
  },
};

module.exports = nextConfig;
