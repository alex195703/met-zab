import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Додаємо експериментальні налаштування для App Router
  experimental: {
    appDir: true,
  },
  
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      })
    );
    return config;
  },
  
  serverExternalPackages: ['payload', '@payloadcms/next', '@payloadcms/db-postgres'],
  
  // Додаємо налаштування для статичного генерування
  output: undefined, // видаляємо 'standalone' якщо воно було
  
  // Налаштування для Vercel
  trailingSlash: false,
};

export default withPayload(nextConfig);
