import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { Settings } from './globals/Settings';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Pages],
  globals: [Settings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'x7k9m3p8q2w5z1t4r6y0u2i8o4p7a9s3',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'https://met-zab-git-main-alexs-projects-82e4c164.vercel.app',
  routes: {
    admin: '/admin',
  },
});
