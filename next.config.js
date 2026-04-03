/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for optimal performance
  output: 'standalone',
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Enable images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Enable ESLint strict mode
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Modern Tech Stack',
  },
  
  // Analytics
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
