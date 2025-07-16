import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/OsawaKousei.github.io",
  assetPrefix: "/OsawaKousei.github.io/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
