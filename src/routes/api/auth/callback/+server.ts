import { handleCallback } from '../../../../lib/auth';
import type { RequestEvent } from "@sveltejs/kit";


export async function GET(request: RequestEvent): Promise<Response> {
  return await handleCallback(request)
}