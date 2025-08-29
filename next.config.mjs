import { withPayload } from '@payloadcms/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
}

export default withPayload(nextConfig)
