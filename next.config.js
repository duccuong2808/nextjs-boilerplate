/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs-boilerplate',
  assetPrefix: '/nextjs-boilerplate',
}

module.exports = nextConfig