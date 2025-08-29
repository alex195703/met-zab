import { withPayload } from '@payloadcms/next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
}

export default withPayload(nextConfig, {
  // Шлях до payload.config.ts у корені проекту
  configPath: './payload.config.ts',

  // Вказуємо URL сервера (важливо для адмінки на Vercel)
  payloadConfig: {
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  }
})
