// src/payload.config.ts
import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'your-development-secret-here',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    autoLogin: {
      email: 'admin@example.com',
      password: 'admin123',
    }
  },
  typescript: {
    outputFile: './types/payload-types.ts',
  },
})
