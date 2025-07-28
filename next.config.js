import { withPayload } from '@payloadcms/next/withPayload';

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
  
  // Налаштування для Vercel
  trailingSlash: false,
  
  // Переконуємось, що використовуємо правильну структуру файлів
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default withPayload(nextConfig);
