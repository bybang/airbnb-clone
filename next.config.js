/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "links.papareact.com",
      "a0.muscache.com",
    ],
  }
}

module.exports = nextConfig
