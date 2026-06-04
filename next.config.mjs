/** @type {import('next').NextConfig} */

/** GitHub Pages: https://usuario.github.io/portafolio_profesional/ */
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.DEPLOY_TARGET === "github-pages";

const basePath = isGithubPages
  ? `/${process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "portafolio_profesional"}`
  : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
