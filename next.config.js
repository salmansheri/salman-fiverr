/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "fiverr-res.cloudinary.com"]

  }, 
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
