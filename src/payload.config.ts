import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  collections: ['pages', 'users', 'settings'],
  admin: {
    autoLogin: {
      email: 'admin@example.com',
      password: 'admin',
      prefillOnly: true,
    },
  },
});
