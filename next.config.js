// next.config.js
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  images: {
    domains: ['marian-courses-bucket.s3.us-east-1.amazonaws.com'], // Add this line to allow images from this domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marian-courses-bucket.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: { serverActions: true },
  middleware: {
    matcher: ['/login', '/register'],
  },
};

export default nextConfig;