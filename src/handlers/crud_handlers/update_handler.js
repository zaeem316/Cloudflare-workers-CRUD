"use strict";
exports.__esModule = true;
exports.update_handler = void 0;
var update_handler = function (req) {
    return new Response(JSON.stringify({
        method: req.method,
        operation: 'update user',
        time: new Date()
    }), {
        headers: { 'content-type': 'application/json' }
    });
};
exports.update_handler = update_handler;
