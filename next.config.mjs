/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'go-skill-icons.vercel.app',
        port: '',
        pathname: '/api/icons/**',
      },
    ],
  },
}

export default nextConfig
