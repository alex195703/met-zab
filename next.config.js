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
  experimental: {
    serverComponentsExternalPackages: ['payload', '@payloadcms/next'],
  },
};

import { withPayload } from '@payloadcms/next/withPayload';

export default withPayload(nextConfig);
