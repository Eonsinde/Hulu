/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = nextConfig
  