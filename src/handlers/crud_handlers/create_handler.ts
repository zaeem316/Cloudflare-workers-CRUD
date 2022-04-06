
export const create_handler = (req: Request): Response => {

    return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'create user',
            time: new Date()
        }), {
        headers: { 'content-type': 'application/json' }
    })
}
