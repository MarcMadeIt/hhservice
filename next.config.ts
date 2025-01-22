/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hgowigkexqhywarmkeor.supabase.co", // Supabase domænet
        port: "",
        pathname: "/storage/v1/object/public/**", // Public path
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

module.exports = nextConfig;
