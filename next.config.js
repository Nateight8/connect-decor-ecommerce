/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmodules: true,
  },
  images: {
    domains: ["fakestoreapi.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
