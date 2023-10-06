
const isProd = process.env.NODE_ENV === "production"
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  basePath: isProd ? "/zbonfo" : "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
