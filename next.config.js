/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Adjust the pathname as needed
      },
    ],
  },
}

module.exports = nextConfig;
