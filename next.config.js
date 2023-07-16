/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n,
  images: {
    domains: ['www.facebook.com'],
  }
}

module.exports = nextConfig
