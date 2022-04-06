
export const read_handler = (req: Request): Response => {

    return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'read users',
            time: new Date()
        }), {
        headers: { 'content-type': 'application/json' }
    })
}
