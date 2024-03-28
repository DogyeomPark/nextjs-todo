// next.config.js
/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './src');
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
