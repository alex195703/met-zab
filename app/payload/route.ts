// app/payload/[[...slug]]/route.ts
import { getPayload } from 'payload'
import config from '../../../payload.config'

const payload = await getPayload({ config })

export async function GET() {
  // ваша логіка
}
