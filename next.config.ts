import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Prevent Turbopack from using ~/package-lock.json as the workspace root.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
