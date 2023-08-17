/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api-proxy/:path*', // 匹配代理請求的路徑
        destination: 'http://140.134.37.23:8000/:path*', // 阿芬學校伺服器路徑
      },
    ];
  },
};

module.exports = nextConfig;
