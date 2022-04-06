"use strict";
exports.__esModule = true;
exports.read_handler = void 0;
var read_handler = function (req) {
    return new Response(JSON.stringify({
        method: req.method,
        operation: 'read users',
        time: new Date()
    }), {
        headers: { 'content-type': 'application/json' }
    });
};
exports.read_handler = read_handler;
