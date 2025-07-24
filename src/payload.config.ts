// src/payload.config.ts
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export default buildConfig({
  // База даних з вашим реальним connection string
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://70b9fcfc5e1f018378ef4868ac484ae25b8892a4aaa3e634332e6313f6c64dd0:sk_tKqIkG9IL5_8zraSpR4JO@db.prisma.io:5432/main?sslmode=require',
    },
  }),
  
  // Редактор (замість старого slate)
  editor: lexicalEditor({}),
  
  // Налаштування адмін панелі
  admin: {
    user: 'users', // колекція користувачів
    meta: {
      titleSuffix: '- Admin Panel',
      favicon: '/favicon.ico',
    },
  },
  
  // Колекції
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
  
  // Глобальні налаштування
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
  
  // Налаштування TypeScript
  typescript: {
    outputFile: 'payload-types.ts',
  },
  
  // Ваш реальний секретний ключ
  secret: process.env.PAYLOAD_SECRET || 'x7k9m3p8q2w5z1t4r6y0u2i8o4p7a9s3',
})
