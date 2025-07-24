import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  collections: [
    {
      slug: 'pages',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'richText', required: true },
      ],
    },
    {
      slug: 'settings',
      fields: [
        { name: 'siteName', type: 'text', required: true },
        { name: 'theme', type: 'text' },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    autoLogin: {
      email: 'admin@example.com',
      password: 'test',
      prefillOnly: true,
    },
  },
});
