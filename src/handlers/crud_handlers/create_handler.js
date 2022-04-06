"use strict";
exports.__esModule = true;
exports.create_handler = void 0;
var create_handler = function (req) {
    return new Response(JSON.stringify({
        method: req.method,
        operation: 'create user',
        time: new Date()
    }), {
        headers: { 'content-type': 'application/json' }
    });
};
exports.create_handler = create_handler;
