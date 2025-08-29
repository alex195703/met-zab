import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || ''
    }
  }),
  collections: [
    {
      slug: 'pages',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea' }
      ]
    },
    {
      slug: 'users',
      auth: true,
      fields: [
        { name: 'email', type: 'email', required: true }
      ]
    },
    {
      slug: 'settings',
      fields: [
        { name: 'siteName', type: 'text', required: true }
      ]
    }
  ],
  admin: {
    user: 'users',
    autoLogin: {
      email: 'admin@example.com',
      password: 'admin',
      prefillOnly: true
    }
  },
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  typescript: {
    outputFile: 'payload-types.ts'
  }
})
