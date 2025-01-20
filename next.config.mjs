/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"], // Burada güvenilir alan adını belirtiyoruz
  },
};

export default nextConfig;
