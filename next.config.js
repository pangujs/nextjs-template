/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 服务器运行时配置
  serverRuntimeConfig: {
    // example
    secret: process.env.SECRET,
  },
  // 客户端和服务器端代码均可访问
  publicRuntimeConfig: {
    // example
    staticFolder: "/static",
  },
};

module.exports = nextConfig;
