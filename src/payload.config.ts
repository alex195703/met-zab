import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Admin Panel',
    },
  },
  routes: {
    admin: '/admin',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'pages',
      admin: {
        useAsTitle: 'title',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'settings',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          required: true,
        },
        {
          name: 'siteDescription',
          type: 'textarea',
        },
      ],
    },
  ],
  typescript: {
    outputFile: 'payload-types.ts',
  },
  secret: process.env.PAYLOAD_SECRET,
});
