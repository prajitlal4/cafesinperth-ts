/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cafesinperth.syd1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '**',
      }
    ],
  },
}

module.exports = nextConfig
