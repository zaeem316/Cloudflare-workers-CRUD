"use strict";
exports.__esModule = true;
exports.delete_handler = void 0;
var delete_handler = function (req) {
    return new Response(JSON.stringify({
        method: req.method,
        operation: 'delete user',
        time: new Date()
    }), {
        headers: { 'content-type': 'application/json' }
    });
};
exports.delete_handler = delete_handler;
