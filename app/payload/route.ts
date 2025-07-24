// app/payload/[[...slug]]/route.ts
import { getPayloadHandler } from '@payloadcms/next'
import config from '../../../payload.config'

const handler = getPayloadHandler({ config })

export const GET = handler
export const POST = handler
export const PUT = handler
export const DELETE = handler
export const PATCH = handler
