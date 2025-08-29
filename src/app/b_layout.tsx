import config from '../../payload.config'; // твій шлях
import { RootLayout } from '@payloadcms/next/layouts';
import { importMap, serverFunction } from '@payloadcms/next';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  );
}
