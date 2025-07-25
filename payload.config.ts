import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'https://met-zab-git-main-alexs-projects-82e4c164.vercel.app',
  
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://70b9fcfc5e1f018378ef4868ac484ae25b8892a4aaa3e634332e6313f6c64dd0:sk_tKqIkG9IL5_8zraSpR4JO@db.prisma.io:5432/main?sslmode=require',
    },
  }),
  
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- Admin Panel',
    },
  },
  
  // ЗМІНЕНО: використовуємо /cms замість /admin щоб уникнути конфлікту з Vercel
  routes: {
    admin: '/cms',
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
  
  secret: process.env.PAYLOAD_SECRET!,
})
