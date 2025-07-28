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

// Спробуйте різні варіанти імпорту:
try {
  const { withPayload } = require('@payloadcms/next');
  module.exports = withPayload(nextConfig);
} catch (error) {
  console.warn('withPayload not available, using default config');
  module.exports = nextConfig;
}
