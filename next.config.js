/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.io", "moonpage.mypinata.cloud"],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
