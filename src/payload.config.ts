import { buildConfig } from 'payload';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
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
