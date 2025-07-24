// app/payload/route.ts
import { NextRequest } from 'next/server'

// Простий роут без PayloadCMS поки що
export async function GET(request: NextRequest) {
  return new Response('Payload Admin Panel', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  })
}

export async function POST(request: NextRequest) {
  return new Response('POST request', { status: 200 })
}
