// next.config.js
const nextConfig = {
  experimental: {
    reactRoot: true,
    runtime: 'nodejs',
    serverComponents: true,
  },
  images: {
    domains: ['cdn.sanity.io'], // Apne image hostnames yahan add karain
  },
};

module.exports = nextConfig;
