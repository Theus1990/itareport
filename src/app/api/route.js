export async function GET(request) {
    const message = "get"

    return new Response(message, { status: 200 })
}

export async function POST(request, response) {
    const message = "post"

    return new Response(message, { status: 200 })
}
