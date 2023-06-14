import prismaClient from "../config/server/db/prismaClient"

export async function POST(request) {
    try {
        const { name, email, cpf, password } = await request.json()

        const usuario = await prismaClient.usuario.create({
            data: {
                name,
                email,
                cpf,
                password
            }
        })

        return new Response(JSON.stringify(usuario), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify("Usuário não criado"), {
            status: 500
        })
    }
}
