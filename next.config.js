import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
  images: {
    domains: ['marian-courses-bucket.s3.us-east-1.amazonaws.com'],
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
};

export default nextConfig;