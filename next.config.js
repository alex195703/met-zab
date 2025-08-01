import { withPayload } from '@payloadcms/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPayload(nextConfig, {
  configPath: './payload/config.ts', // Вказуємо шлях до конфігурації Payload
});
