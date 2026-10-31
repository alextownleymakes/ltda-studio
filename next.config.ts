import type { NextConfig } from "next";

// Every Boatfred game is in one Vercel project (the boatfred repo's web/);
// ltda.studio shows them under /games/<name> by fetching from it behind the
// scenes, so a new game there needs nothing here.
const GAMES_ORIGIN = "https://boatfred.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // a game's page: Next strips the trailing slash and the games project
      // adds it back with a redirect, so ask for the folder with its slash
      { source: "/games/:name", destination: `${GAMES_ORIGIN}/games/:name/` },
      // its files, and the shared lobby code (/games/_shared/...)
      { source: "/games/:name/:path*", destination: `${GAMES_ORIGIN}/games/:name/:path*` },
    ];
  },
};

export default nextConfig;
