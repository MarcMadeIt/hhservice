/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hgowigkexqhywarmkeor.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  async rewrites() {
    return [
      {
        source: "/script.js",
        destination: "https://stats.hhservice.dk/script.js",
      },
      {
        source: "/api/send",
        destination: "https://stats.hhservice.dk/api/send",
      },
    ];
  },
  async redirects() {
    return [
      {
        source:
          "/snerydning-frederiksvaerk-halsnaes-haekkeklip-melby-hundested-liseleje-dronningmoelle-kulhuse-have",
        destination: "/service/snerydning",
        permanent: true, // SEO-venlig 301 redirect
      },
      {
        source:
          "/graesslaaning-kulhuse-melby-liseleje-hundested-hoejby-dronningmoelle-hornbaek-halsnaes",
        destination: "/service/graesslaaning",
        permanent: true, // SEO-venlig 301 redirect
      },
    ];
  },
};

module.exports = nextConfig;
