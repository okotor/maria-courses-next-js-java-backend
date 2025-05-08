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

  webpack(config, { isServer }) {
    // Disable minification in production for client-side bundles
    if (!isServer) {
      config.optimization.minimize = false; // Disable minification
    }
    return config;
  },
};

export default nextConfig;