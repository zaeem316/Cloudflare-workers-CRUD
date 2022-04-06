"use strict";
exports.__esModule = true;
var itty_router_1 = require("itty-router");
var router = (0, itty_router_1.Router)();
/* -----routes import----- */
var crud_route_1 = require("./routes/crud_route");
(0, crud_route_1.crud_route)(router);
router.all("*", function () { return new Response("404, not found!", { status: 404 }); });
addEventListener('fetch', function (event) {
    event.respondWith(router.handle(event.request));
});
