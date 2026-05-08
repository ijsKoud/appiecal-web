import type { NextConfig } from "next";
import { resolve } from "path";

const repoRoot = process.env.NX_WORKSPACE_ROOT ? process.env.NX_WORKSPACE_ROOT : resolve(__dirname, "../../");

const nextConfig: NextConfig = {
	output: "standalone",
	reactStrictMode: true,
	distDir: "dist",
	outputFileTracingRoot: repoRoot
};

export default nextConfig;
