/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.infura.io"]
  },
  i18n: {
    locales: ['fr', 'en-US'],
    defaultLocale: 'fr',
  },

}


module.exports = nextConfig
