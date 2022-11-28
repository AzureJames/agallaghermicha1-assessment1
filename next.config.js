/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com'],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
