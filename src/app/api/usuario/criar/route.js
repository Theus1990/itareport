import { createUserController } from "../../controllers/createUserController"

export async function POST(req) {
    const data = await req.json()
    const result = await createUserController(data)
    return new Response(JSON.stringify(result.json), { status: result.status })
}

export async function GET(req) {
    const message = "GET"

    return new Response(message, { status: 200 })
}
