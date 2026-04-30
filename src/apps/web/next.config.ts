import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	reactStrictMode: true,
	distDir: "dist"
};

export default nextConfig;
