// payload.config.ts
import { buildConfig } from 'payload/config'

export default buildConfig({
  admin: {
    user: 'users',
  },
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
  typescript: {
    outputFile: './types/payload-types.ts',
  },
})
