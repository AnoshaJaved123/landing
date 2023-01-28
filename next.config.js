
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['tuk-cdn.s3.amazonaws.com'], //Domain of image host
  },
}

module.exports = nextConfig
