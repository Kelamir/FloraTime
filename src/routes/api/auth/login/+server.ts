import { handleRedirect } from '../../../../lib/auth';
import type { RequestEvent } from "@sveltejs/kit";

export function GET(request: RequestEvent): Response {
  return handleRedirect(request, { screen_hint: 'login' })
}