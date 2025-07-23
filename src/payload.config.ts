import { buildConfig } from 'payload/config';
import path from 'path';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'lectures',
      labels: { singular: 'Лекція', plural: 'Лекції' },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Назва лекції',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Текст лекції',
        },
        {
          name: 'order',
          type: 'number',
          label: 'Порядок відображення',
          defaultValue: 1,
        },
      ],
    },
    {
      slug: 'pages',
      labels: { singular: 'Сторінка', plural: 'Сторінки' },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: {
    type: 'mongoose',
    url: process.env.MONGODB_URL || 'mongodb://localhost/payload',
  },
  email: {
    transportOptions: {
      host: 'localhost',
      port: 25,
    },
  },
});
