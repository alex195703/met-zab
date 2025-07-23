import { getHandler } from 'payload/config';
import { NextRequest } from 'next/server';

export { getHandler as GET, getHandler as POST, getHandler as PUT, getHandler as PATCH, getHandler as DELETE };

export async function POST(request: NextRequest) {
  const handler = getHandler();
  return handler(request);
}
