/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig