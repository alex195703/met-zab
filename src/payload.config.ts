// src/payload.config.ts
import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [
    {
      slug: 'users',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
  ],
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-key-123',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    autoLogin: {
      email: 'admin@example.com',
      password: 'admin123',
    }
  },
})
