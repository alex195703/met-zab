import { withPayload } from '@payloadcms/next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
}

export default withPayload(nextConfig, {
  configPath: './payload.config.ts',
})
