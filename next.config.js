/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ipfs.io", "moonpage.mypinata.cloud"],
  },
  reactStrictMode: true,
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true,
      },
    },
  },
};

module.exports = nextConfig;
