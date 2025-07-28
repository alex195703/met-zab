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
  
  // Додаємо експліцитні налаштування для App Router
  experimental: {
    serverComponentsExternalPackages: ['payload', '@payloadcms/next', '@payloadcms/db-postgres']
  }
};

// Тимчасово відключаємо withPayload для тестування
export default nextConfig;
// export default withPayload(nextConfig);
