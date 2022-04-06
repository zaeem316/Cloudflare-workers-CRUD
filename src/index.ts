import { Router } from 'itty-router'
const router = Router()

/* -----routes import----- */
import { crud_route } from './routes/crud_route'


crud_route(router)


router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (event: any) => {
  event.respondWith(router.handle(event.request))
})
