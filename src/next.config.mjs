import { withPayload } from '@payloadcms/next/config';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPayload(nextConfig, {
  configPath: './payload/config.ts',
});
