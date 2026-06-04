/** @type {import('next').NextConfig} */

const basePath =
  process.env.NODE_ENV === "production" ? "/portafolio_profesional" : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  output: "export",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
