// app/payload/route.ts
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return Response.json({ 
    message: 'Payload Admin Panel',
    status: 'working',
    timestamp: new Date().toISOString()
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  return Response.json({ 
    message: 'POST received',
    data: body 
  })
}

export async function PUT(request: NextRequest) {
  return Response.json({ message: 'PUT received' })
}

export async function DELETE(request: NextRequest) {
  return Response.json({ message: 'DELETE received' })
}
