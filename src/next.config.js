const { withPayload } = require('@payloadcms/next');

const nextConfig = {};

module.exports = withPayload(nextConfig, {
  configPath: './payload/config.ts', // Вказуємо шлях до конфігурації Payload
});
