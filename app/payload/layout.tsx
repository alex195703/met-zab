import { AdminPanel } from '@payloadcms/next/AdminPanel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel',
};

export default function AdminLayout({ children }) {
  return (
    <AdminPanel>
      {children}
    </AdminPanel>
  );
}
