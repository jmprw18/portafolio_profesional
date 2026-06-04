/** @type {import('next').NextConfig} */

const repo =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portafolio_profesional";

/** CI de GitHub Pages o build local con npm run build:pages */
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.DEPLOY_TARGET === "github-pages" ||
  process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubPages ? `/${repo}` : "";

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
