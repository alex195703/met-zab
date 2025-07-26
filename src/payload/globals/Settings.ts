import { GlobalConfig } from 'payload';

export const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [{ name: 'siteName', type: 'text', required: true }],
};
