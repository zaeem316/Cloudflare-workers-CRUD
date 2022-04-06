
export const delete_handler = (req: Request): Response => {

    return new Response(
        JSON.stringify({
            method: req.method,
            operation: 'delete user',
            time: new Date()
        }), {
        headers: { 'content-type': 'application/json' }
    })
}
