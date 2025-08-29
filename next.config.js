import { withPayload } from '@payloadcms/next/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // В Next 15 це має бути об'єкт або undefined, boolean не підходить
    serverActions: undefined,
  },
};

export default withPayload(nextConfig, {
  // Шлях до payload.config.ts у корені проекту
  configPath: './payload.config.ts',

  // URL сервера для адмінки (важливо для Vercel)
  payloadConfig: {
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'https://your-vercel-site.vercel.app',
  },
});
