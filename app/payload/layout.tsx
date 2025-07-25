import { notFound } from 'next/navigation';
import config from '../../../src/payload.config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { Payload } from 'payload';

export default async function AdminLayout() {
  let payload: Payload;

  try {
    payload = await getPayloadHMR({
      config,
    });
  } catch (error) {
    return notFound();
  }

  // Отримуємо URL адмін-панелі
  const adminURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/admin`;

  return (
    <html lang="en">
      <body>
        <iframe
          src={adminURL}
          style={{
            border: 'none',
            width: '100%',
            height: '100vh',
          }}
        />
      </body>
    </html>
  );
}
