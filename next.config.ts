import type { NextConfig } from "next";

// Games live in their own repos and deployments; ltda.studio shows them under
// /games/<name> by fetching from those deployments behind the scenes.
const GAMES: Record<string, string> = {
  bubbles: "https://bubbles2-xi.vercel.app",
};

const nextConfig: NextConfig = {
  async rewrites() {
    return Object.entries(GAMES).flatMap(([name, url]) => [
      { source: `/games/${name}`, destination: `${url}/` },
      { source: `/games/${name}/:path*`, destination: `${url}/:path*` },
    ]);
  },
};

export default nextConfig;
