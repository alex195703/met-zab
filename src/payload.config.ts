import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor({}),
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({})
        }
      ]
    },
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        }
      ]
    },
    {
      slug: 'settings',
      fields: [
        {
          name: 'siteName',
          type: 'text',
          required: true,
        }
      ]
    }
  ],
  admin: {
    autoLogin: {
      email: 'admin@example.com',
      password: 'admin',
      prefillOnly: true,
    },
  },
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: 'payload-types.ts'
  }
});
