// app/api/services/userService.ts
import prismaClient from "../config/server/db/prismaClient"

export async function createUserService(name, email, cpf, password) {
    try {
        const usuario = await prismaClient.usuario.create({
            data: {
                name,
                email,
                cpf,
                password
            }
        })

        return user
    } catch (error) {
        throw new Error(`Usuário não criado ${error}`)
    }
}

export async function getUserByEmail(email) {
    try {
        const user = await prismaClient.usuario.findUnique({
            where: {
                email
            }
        })

        return user
    } catch (error) {
        throw new Error("Erro ao buscar usuário por email")
    }
}
