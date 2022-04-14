import { Router } from 'itty-router'
import BasicDividends from './handlers/dividend/dividend'

export async function handleRequest(request: Request): Promise<Response> {
  const router = Router()

  router
    .get('/v1/dividend', BasicDividends)
    .get('*', () => new Response('Not found', { status: 404 }))

  return router.handle(request)
}
