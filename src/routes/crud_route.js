"use strict";
exports.__esModule = true;
exports.crud_route = void 0;
/* -----handlers import----- */
var create_handler_1 = require("../handlers/crud_handlers/create_handler");
var read_handler_1 = require("../handlers/crud_handlers/read_handler");
var update_handler_1 = require("../handlers/crud_handlers/update_handler");
var delete_handler_1 = require("../handlers/crud_handlers/delete_handler");
function crud_route(router) {
    return (router
        .post("/create", create_handler_1.create_handler)
        .get("/read", read_handler_1.read_handler)
        .post("/update", update_handler_1.update_handler)
        .post("/delete", delete_handler_1.delete_handler));
}
exports.crud_route = crud_route;
