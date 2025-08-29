/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  transpilePackages: ['undici'],
  experimental: {
    nextScriptWorkers: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      undici: false,
      'firebase/app': require('path').resolve(__dirname, 'node_modules/firebase/app/dist/esm/index.esm.js'),
      'firebase/auth': require('path').resolve(__dirname, 'node_modules/firebase/auth/dist/esm/index.esm.js'),
      'firebase/firestore': require('path').resolve(__dirname, 'node_modules/firebase/firestore/dist/esm/index.esm.js'),
    };
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      undici: false,
    };
    return config;
  },
};

module.exports = nextConfig;
