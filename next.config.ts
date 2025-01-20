import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        search: "",
        pathname: "/*",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    buildActivity: true,
    appIsrStatus: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
