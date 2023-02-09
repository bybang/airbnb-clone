/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "links.papareact.com",
      "a0.muscache.com",
      "jsonkeeper.com"
    ],
  }
}

module.exports = nextConfig
