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
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiZGV2YmFuZyIsImEiOiJjbGR3Zmd6aWUwNnhvM3ZwZDI1czFyZDlqIn0.WXvN_Ws0RDq-Bwy3hnU_QQ"
  }
}

module.exports = nextConfig
