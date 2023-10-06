/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  basePath: "/zbonfo",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
