import { withPayload } from '@payloadcms/next/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPayload(nextConfig, {
  configPath: './payload/config.ts', // шлях до конфігурації Payload
});
