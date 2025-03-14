/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['localhost', 'yourdomain.com'],
    },
    // Optimize for Telegram Mini App
    experimental: {
      optimizeFonts: true,
      scrollRestoration: true,
    },
    compiler: {
      // Remove console.log in production
      removeConsole: process.env.NODE_ENV === 'production',
    },
  };
  
  export default nextConfig;