
export const update_handler = (req: Request): Response => {

    return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'update user',
            time: new Date()
        }), {
        headers: { 'content-type': 'application/json' }
    })
}
