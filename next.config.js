/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        hostname: "avatar.githubusercontent.com",
        protocol: "https",

      }
    ]
  }
};

module.exports = nextConfig;
