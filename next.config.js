import { withPayload } from '@payloadcms/next/withPayload.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      })
    );
    return config;
  },
  serverExternalPackages: ['payload', '@payloadcms/next', '@payloadcms/db-postgres'],
};

export default withPayload(nextConfig);
