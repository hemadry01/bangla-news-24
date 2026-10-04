import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    //https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/501a/live/027926c0-bf27-11f1-b10d-f956452c9061.jpg.webp
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
      },
    ],
  },
};

export default nextConfig;
