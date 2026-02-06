/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blog/' : '',
}

export default nextConfig
