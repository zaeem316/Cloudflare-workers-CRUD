import { Router } from "itty-router"

/* -----handlers import----- */
import { create_handler } from '../handlers/crud_handlers/create_handler'
import { read_handler } from '../handlers/crud_handlers/read_handler'
import { update_handler } from '../handlers/crud_handlers/update_handler'
import { delete_handler } from '../handlers/crud_handlers/delete_handler'


export function crud_route(router: Router<Request, {}>) {
  return (
    router
      .post("/create", create_handler)
      .get("/read", read_handler)
      .post("/update", update_handler)
      .post("/delete", delete_handler)
  )
}