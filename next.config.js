/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "http://localhost:8081",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.falback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
